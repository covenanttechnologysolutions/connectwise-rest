import { createRequire } from 'module'
import fs from 'fs'
import path from 'path'
import { ESLint } from 'eslint'

const eslint = new ESLint({ fix: true })
const require = createRequire(import.meta.url)
const spec = require('./manage-json/manage.json')
const __dirname = path.resolve()

const typeMapSanitize = (input = '') => {
  switch (input) {
    case 'integer':
      return 'number'
    case 'application/octet-stream':
      return 'OctetStreamResponse'
    case 'application/pdf':
      return 'PDFResponse'
    case 'text/html':
      return 'HTMLResponse'
    default:
      if (/\./g.test(input)) {
        console.log('input', input)
        console.log('sanitized', sanitizeType(input))
      }
      return sanitizeType(input)
  }
}

const sanitizeType = (input = '') => input.replace(/\./g, '').replace(/\//g, '')

const generateTypeDef = ({ type }) => {
  let typeName = sanitizeType(type)

  return `type ${typeName} = schemas['${type}']`
}

const generateAPIClass = ({ apiName, operations = [], schemas }) => {
  // types holder for generating type aliases
  const types = {}

  // loop over each defined operation for this module
  const functions = operations.map(({ url, methods }) =>
    Object.keys(methods)
      .map((method) => {
        const { responses, operationId, parameters, requestBody } = methods[method]
        const queryParams = parameters.filter(({ in: in_ }) => in_ === 'query')
        const pathParams = parameters.filter(({ in: in_ }) => in_ === 'path')

        // store generated names/types
        const functionParams = [] // args to the class function
        const requestParams = [] // args to this.request
        let bodyParam = {}

        // generally if a post command is defined
        if (requestBody) {
          if (requestBody.content && requestBody.content['application/json']) {
            const schema = requestBody.content['application/json'].schema
            if (schema.type === 'array') {
              if (schema.items) {
                const tempName = schema.items.$ref.split('/').pop()
                bodyParam.type = tempName + '[]'
                bodyParam.name = tempName.charAt(0).toLowerCase() + tempName.slice(1) + 's'
                types[tempName] = true
              }
            } else if (schema.$ref) {
              bodyParam.type = schema.$ref.split('/').pop()
              bodyParam.name = requestBody.description
              types[bodyParam.type] = true
            }
          } else if (requestBody.content && requestBody.content['multipart/form-data']) {
            const schema = requestBody.content['multipart/form-data'].schema
            if (schema.$ref) {
              bodyParam.type = schema.$ref.split('/').pop()
              bodyParam.name = bodyParam.type.charAt(0).toLowerCase() + bodyParam.type.slice(1)
              types[bodyParam.type] = true
            }
          } else {
            bodyParam.name = requestBody.description
            bodyParam.type = 'object'
          }

          bodyParam.name = sanitizeType(bodyParam.name)
        }

        if (pathParams.length > 0) {
          pathParams.forEach((parameter) => {
            functionParams.push(`${parameter.name}: ${typeMapSanitize(parameter.schema.type)}`)
          })
        }
        requestParams.push(`path: \`${url.replace(/({.*})/g, (_, p1) => `$${p1}`)}\``)
        requestParams.push(`method: '${method}'`)

        if (requestBody) {
          functionParams.push(`${bodyParam.name}: ${typeMapSanitize(bodyParam.type)}`)
          requestParams.push(`data: ${bodyParam.name}`)
        }

        if (queryParams.length > 0) {
          functionParams.push('params: CommonParameters = {}')
          requestParams.push(`params`)
        }
        let returnType
        if (responses[204]) {
          returnType = 'NoContentResponse'
        } else {
          const { description, content } = responses[Object.keys(responses).pop()]

          if (responses['default']) {
            returnType = 'any'
            if (responses['default'].description) {
              returnType = `${returnType}`
            }
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
              returnType = schema.type
            }
          } else {
            returnType = description.split(' ').pop()
          }
        }

        returnType = typeMapSanitize(returnType)

        if (!returnType) {
          returnType = 'any'
        }

        if (operationId === 'getSystemAudittrailCount') {
          console.log()
        }

        return `
   ${operationId}(${functionParams.map((param) => param).join(', ')}): Promise<${returnType}> {
    return this.request({
      ${requestParams.map((param) => param).join(', ')}
    })
   }`
      })
      .join('\n'),
  )

  // use true/false map to generate required types for this module
  const typeDefs = Object.keys(
    // sort keys to order imports
    Object.keys(types)
      .sort()
      .reduce((obj, key) => {
        obj[key] = types[key]
        return obj
      }, {}),
  ).map((type) => generateTypeDef({ type }))

  return `/* This file was auto-generated, do not manually edit. */
import Manage from '../Manage'
import { components } from '../ManageTypes'
import { CommonParameters, CWMOptions } from '../ManageAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
${typeDefs.join('\n')}

export default class ${apiName}API extends Manage {
  constructor(props: CWMOptions) {
    super(props)
  }

  ${functions.join('\n')}
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
    const fileName = path.join(__dirname, 'generator/Manage', `${apiName}API.ts`)
    if (fs.existsSync(fileName)) {
      fs.rmSync(fileName)
    }
    console.log('Creating file', fileName)
    fs.writeFileSync(fileName, file)
  }

  console.log('copying files to src/')
  const files = fs.readdirSync(path.join(__dirname, 'generator', 'Manage'))
  files.forEach((file) => {
    const manageFolder = path.join(__dirname, 'src', 'Manage')
    if (!fs.existsSync(manageFolder)) {
      fs.mkdirSync(manageFolder)
    }
    const src = path.join(__dirname, 'generator', 'Manage', file)
    const dest = path.join(__dirname, 'src', 'Manage', file)
    console.log(`${src} ==> ${dest}`)
    fs.copyFileSync(src, dest)
  })

  // console.log('running eslint')
  // const results = await eslint.lintFiles(['src/Manage/**/*.ts'])
  // await ESLint.outputFixes(results)
  // const formatter = await eslint.loadFormatter('stylish')
  // const resultText = formatter.format(results)
  // console.log(resultText)
}

console.log('generating static manage client files')
generate().then(() => console.log('done'))
