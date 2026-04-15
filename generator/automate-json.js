/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

/**
 * @internal
 */
function getAutomateJson() {
  const sections = []

  // Track globally-seen operationIds across the merged spec so openapi-typescript
  // (v7+) sees unique ids. Automate's upstream specs sometimes duplicate within
  // a file (e.g. Computers_GetComputerSoftwareList on two different paths).
  const seenOperationIds = new Set()
  function uniqueOperationId(base, url, method) {
    if (!seenOperationIds.has(base)) {
      seenOperationIds.add(base)
      return base
    }
    // derive a suffix from the path + method so the id is deterministic
    const suffix = `${method}_${url.replace(/[^A-Za-z0-9]+/g, '_').replace(/^_+|_+$/g, '')}`
    let candidate = `${base}__${suffix}`
    let n = 2
    while (seenOperationIds.has(candidate)) {
      candidate = `${base}__${suffix}_${n++}`
    }
    seenOperationIds.add(candidate)
    return candidate
  }

  const files = fs.readdirSync(path.join(__dirname, 'automate-json'))
  files.forEach((fileName) => {
    if (!fileName.endsWith('.json')) {
      return
    }
    const section = require(path.join(__dirname, 'automate-json', fileName))

    Object.keys(section.paths).forEach((urlPath) => {
      Object.keys(section.paths[urlPath]).forEach((method) => {
        const definition = section.paths[urlPath][method]
        const stripped = definition.operationId.split('_').pop()
        section.paths[urlPath][method] = {
          ...definition,
          // disambiguate the operationId so openapi-typescript sees globally-unique ids
          operationId: uniqueOperationId(definition.operationId, urlPath, method),
          // section-local method name consumers see on the generated class
          methodName: stripped.charAt(0).toLowerCase() + stripped.slice(1),
          section: fileName.replace('.json', ''),
        }
      })
    })
    sections.push(section)
  })

  const automate = {
    openapi: '',
    info: {},
    components: {
      requestBodies: {},
      schemas: {},
    },
    paths: {},
  }

  sections.forEach((section) => {
    const {
      openapi,
      info,
      components: { requestBodies, schemas },
      paths,
    } = section

    automate.openapi = openapi
    automate.info = { ...info }
    automate.components.requestBodies = { ...requestBodies, ...automate.components.requestBodies }
    automate.components.schemas = { ...schemas, ...automate.components.schemas }
    automate.paths = { ...paths, ...automate.paths }
  })

  return automate
}

module.exports = {
  getAutomateJson,
}
