/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')
const { ESLint } = require('eslint')
const { generateAPIClass } = require('./generator.js')
const spec = require('./manage-json/manage.json')

const eslint = new ESLint({ fix: true })

async function generate() {
  const {
    paths,
    components: { schemas },
  } = spec

  const tempFolder = path.join(__dirname, 'Manage')
  const sections = {}

  // generate temp directory
  if (!fs.existsSync(tempFolder)) {
    fs.mkdirSync(tempFolder)
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
    const fileName = path.join(tempFolder, `${apiName}API.ts`)
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
  const files = fs.readdirSync(tempFolder)
  files.forEach((file) => {
    const manageFolder = path.join(__dirname, '../src', 'Manage')
    if (!fs.existsSync(manageFolder)) {
      fs.mkdirSync(manageFolder)
    }
    const src = path.join(tempFolder, file)
    const dest = path.join(manageFolder, file)
    console.log(`${src} ==> ${dest}`)
    fs.copyFileSync(src, dest)
  })
  fs.rmSync(tempFolder, { recursive: true })
  console.log('temp folder removed')
}

console.log('generating static Manage client files')
generate().then(() => console.log('done'))
