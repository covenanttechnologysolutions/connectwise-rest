import { createRequire } from 'module'
import fs from 'fs'
import path from 'path'
import { ESLint } from 'eslint'
import {
  generateAPIClass,
  generateTypeDef,
  sanitizeType,
  typeMapSanitize,
} from './generator.mjs'

const eslint = new ESLint({ fix: true })
const require = createRequire(import.meta.url)
const spec = require('./manage-json/manage.json')
const __dirname = path.resolve()

async function generate() {
  const {
    paths,
    components: { schemas },
  } = spec

  const sections = {}

  // generate temp directory
  if (!fs.existsSync(path.join(__dirname, 'generator', 'Manage'))) {
    fs.mkdirSync(path.join(__dirname, 'generator', 'Manage'))
  }

  Object.keys(paths).forEach((url) => {
    const methods = paths[url]
    const [_, section, ...rest] = url.split('/')

    if (!sections[section]) {
      sections[section] = []
    }

    sections[section].push({ url, methods })
  })

  for (const section of Object.keys(sections)) {
    const apiName = section.charAt(0).toUpperCase() + section.slice(1)
    const operations = sections[section]
    const file = generateAPIClass({ apiName, operations, generatorType: 'Manage' })
    const fileName = path.join(__dirname, 'generator/Manage', `${apiName}API.ts`)
    if (fs.existsSync(fileName)) {
      fs.rmSync(fileName)
    }
    console.log('Creating file', fileName)
    fs.writeFileSync(fileName, file)
  }

  console.log('running eslint')
  const results = await eslint.lintFiles(['generator/Manage/**/*.ts'])
  await ESLint.outputFixes(results)
  const formatter = await eslint.loadFormatter('stylish')
  const resultText = formatter.format(results)
  console.log(resultText)

  console.log('copying files to src/')
  const files = fs.readdirSync(path.join(__dirname, 'generator', 'Manage'))
  files.forEach((file) => {
    const manageFolder = path.join(__dirname, 'src', 'Manage')
    if (!fs.existsSync(manageFolder)) {
      fs.mkdirSync(manageFolder)
    }
    const src = path.join(__dirname, 'generator', 'Manage', file)
    const dest = path.join(__dirname, 'src', 'Manage', file)
    console.log(`${src} ==> ${dest}`)
    fs.copyFileSync(src, dest)
  })
}

console.log('generating static Manage client files')
generate().then(() => console.log('done'))
