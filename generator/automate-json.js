import { createRequire } from 'module'

const require = createRequire(import.meta.url)

const swagger1 = require('./automate-json/swagger (1).json')
const swagger2 = require('./automate-json/swagger (2).json')
const swagger3 = require('./automate-json/swagger (3).json')
const swagger4 = require('./automate-json/swagger (4).json')
const swagger5 = require('./automate-json/swagger (5).json')
const swagger6 = require('./automate-json/swagger (6).json')
const swagger7 = require('./automate-json/swagger (7).json')
const swagger8 = require('./automate-json/swagger (8).json')
const swagger9 = require('./automate-json/swagger (9).json')
const swagger10 = require('./automate-json/swagger (10).json')
const swagger11 = require('./automate-json/swagger (11).json')
const swagger12 = require('./automate-json/swagger (12).json')
const swagger13 = require('./automate-json/swagger (13).json')
const swagger14 = require('./automate-json/swagger (14).json')
const swagger15 = require('./automate-json/swagger (15).json')
const swagger16 = require('./automate-json/swagger (16).json')
const swagger17 = require('./automate-json/swagger (17).json')
const swagger18 = require('./automate-json/swagger (18).json')
const swagger19 = require('./automate-json/swagger (19).json')

const files = [
  swagger1,
  swagger2,
  swagger3,
  swagger4,
  swagger5,
  swagger6,
  swagger7,
  swagger8,
  swagger9,
  swagger10,
  swagger11,
  swagger12,
  swagger13,
  swagger14,
  swagger15,
  swagger16,
  swagger17,
  swagger18,
  swagger19,
]

export const automate = {
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

console.log(automate)
