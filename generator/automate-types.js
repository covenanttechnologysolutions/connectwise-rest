import openapiTS from 'openapi-typescript'
import fs from 'fs'
import path from 'path'
import { automate } from './automate-json.js'
const __dirname = path.resolve()

const types = await openapiTS(automate)
fs.writeFileSync(path.join(__dirname, 'AutomateTypes.ts'), types)
fs.copyFileSync(
  path.join(__dirname, 'AutomateTypes.ts'),
  path.join(__dirname, '../src/Automate/AutomateTypes.ts'),
)
fs.rmSync(path.join(__dirname, 'AutomateTypes.ts'))
console.log('done')
