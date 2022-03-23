import { getAutomateJson } from './automate-json.mjs'
import path from 'path'
import * as fs from 'fs'
import { ESLint } from 'eslint'
import { generateAPIClass } from './generator.mjs'

const __dirname = path.resolve()

const eslint = new ESLint({ fix: true })

function generateAPIClass2({
  apiName,
  operations = [],
}) {
  const types = {}
  const typeDefs = []
  const functions = []

  return `/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
${typeDefs.join('\n')}

/**
 * @internal
 */
export default class ${apiName}API extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  ${functions.join('\n')}
}
  `
}

async function generate() {
  const automate = await getAutomateJson()
  const {
    paths,
    components,
  }= automate

  const schemas = components.schemas

  const sections = {}

  Object.keys(paths).forEach((url) => {
    const methods = paths[url]

    if (url === '/cwa/api/v1/Tickets') {
      sections['Tickets'] = [{ url, methods }]
    }

    const [_, _1, _2, section] = url
      .split('/')
      .map((section) => section.charAt(0).toUpperCase() + section.slice(1))

    if (!sections[section]) {
      sections[section] = []
    }

    sections[section].push({ url, methods })
  })

  for (const section of Object.keys(sections)) {
    const apiName = section.charAt(0).toUpperCase() + section.slice(1)
    const operations = sections[section]

    const file = generateAPIClass(
      { apiName, operations, generatorType: 'Automate' })
    const fileName = path.join(__dirname, 'generator/Automate',
      `${apiName}API.ts`)

    if (fs.existsSync(fileName)) {
      fs.rmSync(fileName)
    }

    const automateTempFolder = path.join(__dirname, 'generator', 'Automate')

    if (!fs.existsSync(automateTempFolder)) {
      fs.mkdirSync(automateTempFolder)
    }

    console.log('Creating file', fileName)
    fs.writeFileSync(fileName, file)
  }

  console.log('running eslint')
  const results = await eslint.lintFiles(['generator/Automate/**/*.ts'])
  await ESLint.outputFixes(results)
  const formatter = await eslint.loadFormatter('stylish')
  const resultText = formatter.format(results)
  console.log(resultText)

  console.log('copying files to src/')
  const files = fs.readdirSync(path.join(__dirname, 'generator', 'Automate'))
  files.forEach((file) => {
    const automateFolder = path.join(__dirname, 'src', 'Automate')
    if (!fs.existsSync(automateFolder)) {
      fs.mkdirSync(automateFolder)
    }
    const src = path.join(__dirname, 'generator', 'Automate', file)
    const dest = path.join(__dirname, 'src', 'Automate', file)
    console.log(`${src} ==> ${dest}`)
    fs.copyFileSync(src, dest)
  })
}

console.log('generating static Automate client files')
generate().then(() => console.log('done'))
