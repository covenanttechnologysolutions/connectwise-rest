import { createRequire } from 'module'
import fs from 'fs'
import path from 'path'
import { ESLint } from 'eslint'
const eslint = new ESLint({ fix: true })
const require = createRequire(import.meta.url)
const spec = require('./manage-json/manage.json')
const __dirname = path.resolve()

const paramTypeMap = (input = '') => {
  switch (input) {
    case 'integer':
      return 'number'
    default:
      return sanitizeType(input)
  }
}

const sanitizeType = (input = '') => input.replace(/\./g, '')

// remove . from schema names
Object.keys(spec.components.schemas).map((schemaName) => {
  spec.components.schemas[sanitizeType(schemaName)] = spec.components.schemas[schemaName]
})

const generateTypeDef = ({ name, schema }) => {
  let { type = '' } = schema
  const { properties = {}, required = [] } = schema
  const propertyArray = []

  Object.keys(properties).forEach((propertyName) => {
    const {
      enum: enums = [],
      description,
      format,
      nullable,
      $ref,
      ...rest
    } = properties[propertyName]

    let { type: propType } = properties[propertyName]

    if ($ref) {
      propType = $ref.split('/').pop()
    }

    if (required.includes(propertyName)) {
      propertyArray.push(
        `* @property {${paramTypeMap(propType)}} ${propertyName} ${description ?? ''} ${
          format ?? ''
        } ${nullable ? 'nullable' : ''}`,
      )
    } else {
      propertyArray.push(
        `* @property {${paramTypeMap(propType)}} [${propertyName}] ${description ?? ''} ${
          format ?? ''
        } ${nullable ? 'nullable' : ''} `,
      )
    }
  })

  type = sanitizeType(type)
  name = sanitizeType(name)

  return `/**
 * ${name}
 * @typedef {${type}} ${name}
 ${propertyArray.join('\n  ')}
 */`
}

const generateAPIClass = ({ apiName, operations = [], schemas }) => {
  const types = {}

  const functions = operations.map(({ url, methods }) =>
    Object.keys(methods)
      .map((method) => {
        const { summary, responses, operationId, parameters, requestBody } = methods[method]
        const queryParams = parameters.filter(({ in: in_ }) => in_ === 'query')
        const pathParams = parameters.filter(({ in: in_ }) => in_ === 'path')

        let bodyParam = requestBody
        if (requestBody) {
          if (requestBody.content && requestBody.content['application/json']) {
            const schema = requestBody.content['application/json'].schema
            if (schema.type === 'array') {
              if (schema.items) {
                const tempName = schema.items.$ref.split('/').pop()
                bodyParam.type = tempName + '[]'
                bodyParam.name = tempName.charAt(0).toLowerCase() + tempName.slice(1) + 's'
              }
            } else if (schema.$ref) {
              bodyParam.type = schema.$ref.split('/').pop()
              bodyParam.name = requestBody.description
            }
          } else if (requestBody.description.startsWith('List of')) {
            const name = requestBody.description.replace('List of', '')
            bodyParam.name = name.charAt(0).toLowerCase() + name.slice(1) + 's'
            bodyParam.type = 'array'
          } else if (requestBody.content && requestBody.content['multipart/form-data']) {
            const schema = requestBody.content['multipart/form-data'].schema
            if (schema.$ref) {
              bodyParam.type = schema.$ref.split('/').pop()
              bodyParam.name = bodyParam.type.charAt(0).toLowerCase() + bodyParam.type.slice(1)
            }
          } else {
            bodyParam.name = requestBody.description
            bodyParam.type = 'object'
          }

          bodyParam.type = sanitizeType(bodyParam.type)
          bodyParam.name = sanitizeType(bodyParam.name)
        }

        const jsdoc = []
        const functionParams = []
        const requestParams = []

        if (pathParams.length > 0) {
          pathParams.forEach((parameter) => {
            jsdoc.push(`* @param {${paramTypeMap(parameter.schema.type)}} ${parameter.name}`)
            functionParams.push(parameter.name)
          })
        }
        requestParams.push(`path: \`${url.replace(/({.*})/g, (_, p1) => `$${p1}`)}\``)
        requestParams.push(`method: '${method}'`)

        if (requestBody) {
          jsdoc.push(`* @param {${bodyParam.type}} ${bodyParam.name} ${requestBody.description}`)
          functionParams.push(bodyParam.name)
          requestParams.push(`data: ${bodyParam.name}`)
        }

        if (queryParams.length > 0) {
          jsdoc.push('* @param {object} params')
          queryParams.forEach((queryParam) => {
            if (queryParam.required) {
              jsdoc.push(
                `* @param {${paramTypeMap(queryParam.schema.type)}} params.${queryParam.name}`,
              )
            } else {
              jsdoc.push(
                `* @param {${paramTypeMap(queryParam.schema.type)}} [params.${queryParam.name}]`,
              )
            }
          })
          functionParams.push('params = {}')
          requestParams.push(`params`)
        }
        let returnType
        if (responses[204]) {
          returnType = 'NoContent'
        } else {
          const { description, content } = responses[Object.keys(responses).pop()]

          if (responses['default']) {
            returnType = '*'
          } else if (content) {
            const { schema } = content[Object.keys(content).pop()]

            if (schema.items) {
              if (schema.items.$ref) {
                returnType = schema.items.$ref.split('/').pop() + '[]'
                types[schema.items.$ref.split('/').pop()] = true
              } else if (schema.items.additionalProperties?.$ref) {
                returnType = schema.items.additionalProperties.$ref.split('/').pop() + '[]'
                types[schema.items.additionalProperties.$ref.split('/').pop()] = true
              }
            } else if (schema.$ref) {
              returnType = schema.$ref.split('/').pop()
              types[returnType] = true
            } else {
              returnType = paramTypeMap(schema.type)
            }
          } else {
            returnType = description.split(' ').pop()
          }
        }

        returnType = sanitizeType(returnType)

        if (!returnType) {
          returnType = '*'
        }

        return `
  /**
   * ${summary}
   ${jsdoc.map((doc) => doc).join('\n   ')}
   * @returns {Promise<${returnType}>}
   */
   ${operationId}(${functionParams.map((param) => param).join(', ')}) {
    return this.request({
      ${requestParams.map((param) => param).join(', ')}
    })
   }`
      })
      .join('\n'),
  )

  const typeDefs = Object.keys(types).map((type) =>
    generateTypeDef({ name: type, schema: schemas[type] }),
  )

  return `import Manage from './Manage.js'

${typeDefs.join('\n\n')}

export default class ${apiName} extends Manage {
  constructor(props) {
    super(props)
  }

  ${functions.join('')}
}
  `
}

async function generate() {
  const {
    paths,
    components: { schemas },
  } = spec

  const sections = {}

  if (!fs.existsSync(path.join(__dirname, 'Manage'))) {
    fs.mkdirSync(path.join(__dirname, 'Manage'))
  }

  Object.keys(paths).forEach((url) => {
    const methods = paths[url]
    const [_, section, ...rest] = url.split('/')

    if (!sections[section]) {
      sections[section] = []
    }

    sections[section].push({ url, methods })
  })

  for (const section of Object.keys(sections)) {
    const apiName = section.charAt(0).toUpperCase() + section.slice(1)
    const operations = sections[section]
    const file = generateAPIClass({ apiName, operations, schemas })
    const fileName = path.join(__dirname, 'Manage', `${apiName}.js`)
    if (fs.existsSync(fileName)) {
      fs.rmSync(fileName)
    }
    console.log('Creating file', fileName)
    fs.writeFileSync(fileName, file)
  }

  const results = await eslint.lintFiles(['**/*.js'])
  await ESLint.outputFixes(results)
  const formatter = await eslint.loadFormatter('stylish')
  const resultText = formatter.format(results)
  console.log(resultText)

  console.log('copying files to src/')
  const files = fs.readdirSync(path.join(__dirname, 'Manage'))
  files.forEach((file) => {
    fs.copyFileSync(
      path.join(__dirname, 'Manage', file),
      path.join(__dirname, '../', 'src', 'Manage', file),
    )
  })
}
console.log('generating static manage client files')
generate().then(() => console.log('done'))
