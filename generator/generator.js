/* eslint-disable @typescript-eslint/no-var-requires */
const { getAutomateJson } = require('./automate-json')

const automateSchema = getAutomateJson()

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
      return sanitizeType(input)
  }
}

// remove invalid var name from the name of the type
const sanitizeType = (input = '') => input.replace(/\./g, '').replace(/\//g, '')
const generateTypeDef = ({ typeName, schemaType }) => {
  let name = sanitizeType(typeName)

  return schemaType === 'schemas'
    ? `/** {@link ${name}} */
export type ${name} = schemas['${typeName}']`
    : `/** {@link ${name}} */
export type ${name} = requestBodies['${typeName}']`
}

/**
 * decipher supplied definition files
 * @param {{}} options
 * @param {string} options.apiName
 * @param {} options.operations
 * @param {'Manage' | 'Automate'} options.generatorType
 */
function generateAPIClass({ apiName, operations = [], generatorType }) {
  // types holder for generating type aliases
  // type Types = Record<string, string>
  // system name, sanitized name
  const types = {}
  const requestBodies = {}
  // whether any operation in this section needs the toFormData helper
  let usedToFormData = false

  // First pass: count methodName usage within this section so we can disambiguate
  // collisions (distinct paths with the same stripped operationId).
  const nameCounts = {}
  for (const { methods } of operations) {
    for (const method of Object.keys(methods)) {
      const def = methods[method]
      const base = def.methodName || def.operationId
      nameCounts[base] = (nameCounts[base] || 0) + 1
    }
  }
  const seenNames = new Set()
  function pickEmittedName(base, url, method) {
    if (nameCounts[base] === 1) {
      seenNames.add(base)
      return base
    }
    // Derive a stable suffix from the path + method.
    const suffix = url
      .replace(/{([^}]+)}/g, 'By$1')
      .replace(/[^A-Za-z0-9]+/g, '')
    let candidate = `${base}${suffix.charAt(0).toUpperCase() + suffix.slice(1)}`
    if (method !== 'get') {
      candidate = `${candidate}_${method}`
    }
    let n = 2
    let resolved = candidate
    while (seenNames.has(resolved)) {
      resolved = `${candidate}_${n++}`
    }
    seenNames.add(resolved)
    return resolved
  }

  // loop over each defined operation for this module
  const functions = operations.map(({ url, methods }) =>
    Object.keys(methods)
      .map((method) => {
        const { responses, operationId, methodName, parameters = [], requestBody } = methods[method]
        // Automate: `methodName` is the section-local name (e.g. getClientList).
        // Manage: only `operationId` is present; use it directly.
        const baseName = methodName || operationId
        const emittedName = pickEmittedName(baseName, url, method)
        const queryParams = parameters.filter(({ in: in_ }) => in_ === 'query')
        const pathParams = parameters.filter(({ in: in_ }) => in_ === 'path')

        // store generated names/types
        const functionParams = [] // args to the class function
        const requestParams = [] // args to this.request
        let bodyParam = {}
        let isMultipart = false

        // generally if a post command is defined
        if (requestBody) {
          if (requestBody.content && requestBody.content['application/json']) {
            const schema = requestBody.content['application/json'].schema
            if (schema.type === 'array') {
              if (schema.items) {
                const ref = schema.items.$ref
                const tempName = ref.split('/').pop()
                bodyParam.type = `Array<${tempName}>`
                bodyParam.name = tempName.charAt(0).toLowerCase() + tempName.slice(1) + 's'

                types[tempName] = {
                  schemaType: ref.includes('requestBodies') ? 'requestBody' : 'schemas',
                }
              }
            } else if (schema.$ref) {
              const ref = schema.$ref
              bodyParam.type = ref.split('/').pop()
              if (requestBody.description) {
                bodyParam.name = requestBody.description
              } else {
                bodyParam.name = ref.split('.').pop()
              }
              types[bodyParam.type] = {
                schemaType: ref.includes('requestBodies') ? 'requestBody' : 'schemas',
              }
              // if clause for MonitorAlertSuspensions_PostSuspension
            } else if (!schema.description) {
              bodyParam.type = schema.type
              bodyParam.name = schema.type
            }
          } else if (requestBody.content && requestBody.content['multipart/form-data']) {
            isMultipart = true
            const schema = requestBody.content['multipart/form-data'].schema
            if (schema.$ref) {
              const ref = schema.$ref
              bodyParam.type = ref.split('/').pop()
              bodyParam.name = bodyParam.type.charAt(0).toLowerCase() + bodyParam.type.slice(1)
              types[bodyParam.type] = {
                schemaType: ref.includes('requestBodies') ? 'requestBody' : 'schemas',
              }
            } else {
              // inline schema, treat as generic record
              bodyParam.type = 'Record<string, unknown>'
              bodyParam.name = 'formData'
            }
          } else if (requestBody.$ref) {
            const ref = requestBody.$ref
            // make sensible names by splitting the generated refs
            bodyParam.name = requestBody.$ref.split('/').pop().split('.').pop().split('_').pop()
            bodyParam.type = requestBody.$ref.split('/').pop()
            types[bodyParam.type] = {
              schemaType: ref.includes('requestBodies') ? 'requestBody' : 'schemas',
            }
          } else {
            bodyParam.name = requestBody.description
            bodyParam.type = 'object'
          }

          bodyParam.name = sanitizeType(bodyParam.name)
        }

        // Drop path params whose `{name}` placeholder doesn't actually appear in
        // the URL template. Some upstream specs declare a path param that isn't
        // referenced anywhere in the URL, producing an unused function argument.
        const referencedPathParams = pathParams.filter((p) => url.includes(`{${p.name}}`))
        if (referencedPathParams.length > 0) {
          referencedPathParams.forEach((parameter) => {
            let tsType
            const schema = parameter.schema || {}
            if (schema.$ref) {
              const refName = schema.$ref.split('/').pop()
              tsType = sanitizeType(refName)
              types[refName] = {
                schemaType: schema.$ref.includes('requestBodies') ? 'requestBody' : 'schemas',
              }
            } else if (schema.type === 'array' && schema.items) {
              if (schema.items.$ref) {
                const refName = schema.items.$ref.split('/').pop()
                tsType = `Array<${sanitizeType(refName)}>`
                types[refName] = {
                  schemaType: schema.items.$ref.includes('requestBodies') ? 'requestBody' : 'schemas',
                }
              } else {
                tsType = `Array<${typeMapSanitize(schema.items.type || 'unknown')}>`
              }
            } else {
              tsType = typeMapSanitize(schema.type) || 'unknown'
            }
            functionParams.push(`${parameter.name}: ${tsType}`)
          })
        }
        requestParams.push(`path: \`${url.replaceAll(/({.+?})/g, (_, p1) => `$${p1}`)}\``)
        requestParams.push(`method: '${method}'`)

        if (requestBody) {
          if (isMultipart) {
            usedToFormData = true
            // accept either the typed shape or a pre-built FormData; convert at runtime
            functionParams.push(
              `${bodyParam.name}: ${typeMapSanitize(bodyParam.type)} | FormData`,
            )
            requestParams.push(
              `data: ${bodyParam.name} instanceof FormData ? ${bodyParam.name} : toFormData(${bodyParam.name} as Record<string, unknown>)`,
            )
            requestParams.push(`contentType: 'multipart'`)
          } else {
            functionParams.push(`${bodyParam.name}: ${typeMapSanitize(bodyParam.type)}`)
            requestParams.push(`data: ${bodyParam.name}`)
          }
        }

        if (queryParams.length > 0) {
          functionParams.push('params: CommonParameters = {}')
          requestParams.push(`params`)
        }
        let returnType
        let responseTypeHint = null
        if (responses[204]) {
          returnType = 'NoContentResponse'
        } else {
          const { description, content } = responses[Object.keys(responses).pop()]

          // Detect non-JSON response content types and emit a responseType hint.
          if (content) {
            const contentTypes = Object.keys(content)
            if (
              contentTypes.includes('application/octet-stream') ||
              contentTypes.includes('application/pdf')
            ) {
              responseTypeHint = 'arraybuffer'
            } else if (contentTypes.includes('text/html')) {
              responseTypeHint = 'text'
            }
          }

          if (responses['default']) {
            returnType = 'any'
            if (responses['default'].description) {
              returnType = `${returnType}`
            }
          } else if (content) {
            const { schema } = content[Object.keys(content).pop()]

            if (schema.items) {
              if (schema.items.$ref) {
                const ref = schema.items.$ref
                const tempName = ref.split('/').pop()
                returnType = `Array<${tempName}>`
                types[tempName] = {
                  schemaType: ref.includes('requestBodies') ? 'requestBody' : 'schemas',
                }
              } else if (schema.items.additionalProperties?.$ref) {
                const ref = schema.items.additionalProperties.$ref
                const tempName = ref.split('/').pop()
                returnType = `Array<${tempName}>`
                types[tempName] = {
                  schemaType: ref.includes('requestBodies') ? 'requestBody' : 'schemas',
                }
              } else if (schema.type) {
                if (schema.items.type) {
                  returnType = `Array<${schema.items.type}>`
                } else {
                  returnType = schema.type
                }
              }
            } else if (schema.$ref) {
              const ref = schema.$ref
              // fix for incorrect types from ResultSetWithCount
              if (ref.includes('LabTech.Database.ResultSetWithCount')) {
                const schemaName = ref.split('/').pop()
                const resultSchema = automateSchema.components.schemas[schemaName]
                const ResultSetRef = resultSchema.properties.ResultSet.items.$ref
                const tempName = ResultSetRef.split('/').pop()
                returnType = `Array<${tempName}>`
                types[tempName] = {
                  schemaType: ref.includes('requestBodies') ? 'requestBody' : 'schemas',
                }
              } else {
                returnType = schema.$ref.split('/').pop()
                types[returnType] = {
                  schemaType: ref.includes('requestBodies') ? 'requestBody' : 'schemas',
                }
              }
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

        if (responseTypeHint) {
          requestParams.push(`responseType: '${responseTypeHint}'`)
        }

        return `
   ${emittedName}(${functionParams.map((param) => param).join(', ')}): Promise<${returnType}> {
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
  ).map((type) => generateTypeDef({ typeName: type, schemaType: types[type].schemaType }))

  const baseImports = [`${generatorType}BaseAPI`]
  if (usedToFormData) {
    baseImports.push('toFormData')
  }

  // Only import helper types actually referenced by the emitted functions.
  const joinedFns = functions.join('\n')
  const helperCandidates = ['NoContentResponse', 'OctetStreamResponse', 'PDFResponse', 'HTMLResponse']
  const usedHelpers = helperCandidates.filter((h) => joinedFns.includes(h))
  const helperImport = usedHelpers.length
    ? `import { ${usedHelpers.join(', ')} } from '../types'\n`
    : ''

  // Only import CommonParameters when a method actually takes query params.
  const commonParamsUsed = joinedFns.includes('CommonParameters')
  const commonParamsImport = commonParamsUsed
    ? generatorType === 'Manage'
      ? "import { CommonParameters } from '../ManageAPI'\n"
      : "import { CommonParameters } from '../AutomateAPI'\n"
    : ''

  // Automate sections use both `schemas` and `requestBodies` type aliases; Manage
  // only uses `schemas`. Only emit the aliases when any typeDef references them.
  const schemasUsed = typeDefs.some((d) => d.includes("schemas['"))
  const requestBodiesUsed =
    generatorType === 'Automate' && typeDefs.some((d) => d.includes("requestBodies['"))

  return `/* This file was auto-generated, do not manually edit. */
import { ${baseImports.join(', ')} } from '../BaseAPI'
${schemasUsed || requestBodiesUsed ? `import { components } from '../${generatorType}Types'\n` : ''}${commonParamsImport}${helperImport}${schemasUsed ? `type schemas = components['schemas']\n` : ''}${
    requestBodiesUsed ? `type requestBodies = components['requestBodies']\n` : ''
  }${typeDefs.join('\n')}

/**
 * ${apiName} module
 * @public
 */
export class ${apiName}API extends ${generatorType}BaseAPI {
  ${functions.join('\n')}
}
  `
}

module.exports = {
  generateAPIClass,
}
