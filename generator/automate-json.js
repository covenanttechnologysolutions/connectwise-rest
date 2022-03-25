/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

/**
 * @internal
 */
function getAutomateJson() {
  const sections = []

  const files = fs.readdirSync(path.join(__dirname, 'automate-json'))
  files.forEach((fileName) => {
    const section = require(path.join(__dirname, 'automate-json', fileName))

    Object.keys(section.paths).forEach((path) => {
      Object.keys(section.paths[path]).forEach((method) => {
        const definition = section.paths[path][method]
        const operationId = definition.operationId.split('_').pop()
        section.paths[path][method] = {
          ...definition,
          // manually define api section
          // clean up operation names
          operationId: operationId.charAt(0).toLowerCase() + operationId.slice(1),
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
