import fs from 'fs'

export async function getAutomateJson() {
  const files = [
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (1).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (2).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (3).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (4).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (5).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (6).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (7).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (8).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (9).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (10).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (11).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (12).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (13).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (14).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (15).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (16).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (17).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (18).json', {encoding: 'utf8'})),
    JSON.parse(fs.readFileSync('./generator/automate-json/swagger (19).json', {encoding: 'utf8'})),
  ]

  const automate = {
    openapi: '',
    info: {},
    components: {
      requestBodies: {},
      schemas: {},
    },
    paths: {},
  }

  files.forEach((file) => {
    const {
      openapi,
      info,
      components: { requestBodies, schemas },
      paths,
    } = file

    automate.openapi = openapi
    automate.info = { ...info }
    automate.components.requestBodies = { ...requestBodies, ...automate.components.requestBodies }
    automate.components.schemas = { ...schemas, ...automate.components.schemas }
    automate.paths = { ...paths, ...automate.paths }
  })

  return automate
}
