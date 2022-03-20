import openapiTS from 'openapi-typescript'
import fs from 'fs'
import path from 'path'
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const __dirname = path.resolve()

const spec = require('./manage-json/manage.json')

const types = await openapiTS(spec)
fs.writeFileSync(path.join(__dirname, 'manage-types.ts'), types)
fs.copyFileSync(
  path.join(__dirname, 'manage-types.ts'),
  path.join(__dirname, '../src/ManageTypes.ts'),
)
fs.rmSync(path.join(__dirname, 'manage-types.ts'))
console.log('done')
