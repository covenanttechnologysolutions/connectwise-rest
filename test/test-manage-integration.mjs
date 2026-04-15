// Live integration tests against a real ConnectWise Manage instance.
// Skipped unless all required MANAGE_API_* env vars are set in test/.env.
// All calls here are read-only and use pageSize: 1 where listing.

import assert from 'node:assert'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import { describe, it, before } from 'mocha'
import pkg from '../dist/index.js'
const { ManageAPI } = pkg

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

const required = [
  'MANAGE_API_COMPANY',
  'MANAGE_API_URL',
  'MANAGE_API_PUBLIC_KEY',
  'MANAGE_API_PRIVATE_KEY',
  'MANAGE_API_CLIENT_ID',
]
const missing = required.filter((k) => !process.env[k])

const suite = missing.length > 0 ? describe.skip : describe

suite('Manage (live)', function () {
  this.timeout(20000)

  let cwm
  before(() => {
    cwm = new ManageAPI({
      companyId: process.env.MANAGE_API_COMPANY,
      companyUrl: process.env.MANAGE_API_URL,
      publicKey: process.env.MANAGE_API_PUBLIC_KEY,
      privateKey: process.env.MANAGE_API_PRIVATE_KEY,
      clientId: process.env.MANAGE_API_CLIENT_ID,
      apiVersion: process.env.MANAGE_API_VERSION || '2021.1',
      logger: () => {},
    })
  })

  describe('SystemAPI', () => {
    it('getSystemInfo returns an object with a version', async () => {
      const info = await cwm.SystemAPI.getSystemInfo({})
      assert(info && typeof info === 'object', 'expected an object')
      assert(
        typeof info.version === 'string' && info.version.length > 0,
        `expected version string, got ${JSON.stringify(info).slice(0, 200)}`,
      )
    })
  })

  describe('CompanyAPI', () => {
    it('getCompanyCompanies returns an array (pageSize: 1)', async () => {
      const companies = await cwm.CompanyAPI.getCompanyCompanies({ pageSize: 1 })
      assert(Array.isArray(companies), `expected array, got ${typeof companies}`)
      if (companies.length > 0) {
        const c = companies[0]
        assert(typeof c.id === 'number', 'expected numeric company id')
        assert(typeof c.identifier === 'string', 'expected string company identifier')
      }
    })
  })

  describe('ServiceAPI', () => {
    it('getServiceTickets returns an array (pageSize: 1)', async () => {
      const tickets = await cwm.ServiceAPI.getServiceTickets({ pageSize: 1 })
      assert(Array.isArray(tickets), `expected array, got ${typeof tickets}`)
      if (tickets.length > 0) {
        const t = tickets[0]
        assert(typeof t.id === 'number', 'expected numeric ticket id')
        assert(typeof t.summary === 'string', 'expected string ticket summary')
      }
    })
  })

  describe('pagination', () => {
    it('paginate walks pages and returns a combined array', async () => {
      // Cap the full result set to at most 2 tickets via a narrow id condition,
      // so pagination completes in one partial page regardless of instance size.
      const sample = await cwm.ServiceAPI.getServiceTickets({ pageSize: 2 })
      if (sample.length === 0) {
        return
      }
      const ids = sample.map((t) => t.id).sort((a, b) => a - b)
      const condition = `id in (${ids.join(',')})`

      const all = await cwm.paginate(
        cwm.ServiceAPI.getServiceTickets,
        { startPage: 1, pageSize: 1 }, // force multiple pages
        { conditions: condition },
      )
      assert(Array.isArray(all), `expected array, got ${typeof all}`)
      assert.strictEqual(all.length, sample.length, 'paginate should return every matching ticket')
      for (const t of all) {
        assert(ids.includes(t.id), `unexpected id ${t.id}`)
      }
    })
  })
})

if (missing.length > 0) {
  // eslint-disable-next-line no-console
  console.log(
    `[test-manage-integration] skipping live tests; missing env vars: ${missing.join(', ')}`,
  )
}
