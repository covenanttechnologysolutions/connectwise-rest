/* eslint-disable @typescript-eslint/no-var-requires */
const openapiTS = require('openapi-typescript')
const fs = require('fs')
const path = require('path')
const spec = require('./manage-json/manage.json')

const types = await openapiTS(spec)
fs.writeFileSync(path.join(__dirname, 'manage-types.ts'), types)
fs.copyFileSync(
  path.join(__dirname, 'manage-types.ts'),
  path.join(__dirname, '../src/ManageTypes.ts'),
)
fs.rmSync(path.join(__dirname, 'manage-types.ts'))
console.log('done')
