/* eslint-disable @typescript-eslint/no-var-requires */
const { getAutomateJson } = require('./automate-json')
const path = require('path')
const fs = require('fs')
const { ESLint } = require('eslint')
const { generateAPIClass } = require('./generator')

const eslint = new ESLint({ fix: true })

async function generate() {
  const automate = await getAutomateJson()
  const {
    paths,
    components: { schemas },
  } = automate

  const sections = {}

  const automateTempFolder = path.join(__dirname, 'Automate')

  if (!fs.existsSync(automateTempFolder)) {
    fs.mkdirSync(automateTempFolder)
  }

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

    const file = generateAPIClass({ apiName, operations, generatorType: 'Automate' })
    const fileName = path.join(automateTempFolder, `${apiName}API.ts`)

    if (fs.existsSync(fileName)) {
      fs.rmSync(fileName)
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
  const files = fs.readdirSync(path.join(__dirname, 'Automate'))
  files.forEach((file) => {
    const automateFolder = path.join(__dirname, '../src', 'Automate')
    if (!fs.existsSync(automateFolder)) {
      fs.mkdirSync(automateFolder)
    }
    const src = path.join(automateTempFolder, file)
    const dest = path.join(automateFolder, file)
    console.log(`${src} ==> ${dest}`)
    fs.copyFileSync(src, dest)
  })
  fs.rmSync(automateTempFolder, { recursive: true })
  console.log('temp folder removed')
}

console.log('generating static Automate client files')
generate().then(() => console.log('done'))
