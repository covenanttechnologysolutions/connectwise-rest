/* eslint-disable @typescript-eslint/no-var-requires */
const openapiTS = require('openapi-typescript')
const fs = require('fs')
const path = require('path')
const { getAutomateJson } = require('./automate-json.js')

const automate = await getAutomateJson()
const types = await openapiTS(automate)
fs.writeFileSync(path.join(__dirname, 'AutomateTypes.ts'), types)
fs.copyFileSync(
  path.join(__dirname, 'AutomateTypes.ts'),
  path.join(__dirname, '../src/Automate/AutomateTypes.ts'),
)
fs.rmSync(path.join(__dirname, 'AutomateTypes.ts'))
console.log('done')
