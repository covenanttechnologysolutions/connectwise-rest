import assert from 'node:assert'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import dotenv from 'dotenv'
import { describe, it } from 'mocha'
import pkg from '../dist/index.js'
const { AutomateAPI, AutomateSECTIONS } = pkg

const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, '.env') })

const {
  AUTOMATE_API_CLIENT_ID = 'test-client-id',
  AUTOMATE_API_URL = 'example.com',
  AUTOMATE_API_USER = 'test-user',
  AUTOMATE_API_PASSWORD = 'test-password',
} = process.env

const cwa = new AutomateAPI({
  clientId: AUTOMATE_API_CLIENT_ID,
  serverUrl: AUTOMATE_API_URL,
  username: AUTOMATE_API_USER,
  password: AUTOMATE_API_PASSWORD,
  logger: () => {},
})

describe('Automate', () => {
  describe('instance', () => {
    it('should be an instance of AutomateAPI', () => {
      assert(cwa instanceof AutomateAPI)
    })
  })

  describe('sections', () => {
    it('exports a non-empty SECTIONS list', () => {
      assert(Array.isArray(AutomateSECTIONS))
      assert(AutomateSECTIONS.length > 0)
    })

    for (const section of AutomateSECTIONS) {
      it(`exposes ${section} as a lazy getter`, () => {
        const instance = cwa[section]
        assert(instance, `${section} should be accessible on cwa`)
        // second access should return the same cached instance
        assert.strictEqual(cwa[section], instance, `${section} should cache on access`)
      })
    }
  })
})
