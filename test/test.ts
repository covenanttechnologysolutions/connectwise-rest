/**
 * Created by kgrube on 9/11/2018
 */
import dotenv from 'dotenv'
import path from 'path'
// import { ManageAPI, AutomateAPI, utils } from '../dist/index'
import { ManageAPI, AutomateAPI, utils } from '../src/index'
import assert from 'assert'
import { describe, it } from 'mocha'
import type { components } from '../src/ManageTypes'
import { isArrayOfPromises, PromiseArray } from './test-utils'
import { isPromise } from 'util/types'
import ComputersAPI from '../src/Automate/ComputersAPI'
type Ticket = components['schemas']['Ticket']

dotenv.config({ path: path.join(__dirname, '.env') })

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace NodeJS {
    interface ProcessEnv {
      MANAGE_API_COMPANY: string
      MANAGE_API_URL: string
      MANAGE_API_PUBLIC_KEY: string
      MANAGE_API_PRIVATE_KEY: string
      MANAGE_API_CLIENT_ID: string
      AUTOMATE_API_CLIENT_ID: string
      AUTOMATE_API_PASSWORD: string
      AUTOMATE_API_URL: string
      AUTOMATE_API_USER: string
      NODE_ENV: 'development' | 'production'
    }
  }
}

const {
  MANAGE_API_COMPANY,
  MANAGE_API_URL,
  MANAGE_API_PUBLIC_KEY,
  MANAGE_API_PRIVATE_KEY,
  MANAGE_API_CLIENT_ID,
  AUTOMATE_API_CLIENT_ID,
  AUTOMATE_API_PASSWORD,
  AUTOMATE_API_URL,
  AUTOMATE_API_USER,
} = process.env

const cwm = new ManageAPI({
  companyId: MANAGE_API_COMPANY,
  companyUrl: MANAGE_API_URL,
  publicKey: MANAGE_API_PUBLIC_KEY,
  privateKey: MANAGE_API_PRIVATE_KEY,
  clientId: MANAGE_API_CLIENT_ID,
  apiVersion: '2021.2',
})

const cwa = new AutomateAPI({
  clientId: AUTOMATE_API_CLIENT_ID,
  serverUrl: AUTOMATE_API_URL,
  username: AUTOMATE_API_USER,
  password: AUTOMATE_API_PASSWORD,
})

describe('Automate', () => {
  describe('instance', () => {
    it('should be an instance of Automate', (done) => {
      assert(cwa instanceof AutomateAPI)
      done()
    })

    it('should have ComputersAPI', (done) => {
      assert(cwa.ComputersAPI)
      done()
    })
  })

  describe('ComputersAPI', () => {
    it('should return a list of computers', (done) => {
      cwa.ComputersAPI.Computers_GetComputerList({ pageSize: 1 })
        .then((results) => {
          assert(results.length === 1)
          const computer = results[0]
          assert(computer.Id)
          assert(computer.ComputerName)
          done()
        })
        .catch((error) => done(error))
    })
  })
})

describe('Manage', () => {
  describe('instance', () => {
    it('should be an instance of Manage', (done) => {
      assert(cwm instanceof ManageAPI)
      done()
    })

    it('should have CompanyAPI', (done) => {
      assert(cwm.CompanyAPI)
      done()
    })

    it('should have ConfigurationsAPI', (done) => {
      assert(cwm.ConfigurationsAPI)
      done()
    })

    it('should have ExpenseAPI', (done) => {
      assert(cwm.ExpenseAPI)
      done()
    })

    it('should have FinanceAPI', (done) => {
      assert(cwm.FinanceAPI)
      done()
    })

    it('should have MarketingAPI', (done) => {
      assert(cwm.MarketingAPI)
      done()
    })

    it('should have ProcurementAPI', (done) => {
      assert(cwm.ProcurementAPI)
      done()
    })

    it('should have ProjectAPI', (done) => {
      assert(cwm.ProjectAPI)
      done()
    })

    it('should have SalesAPI', (done) => {
      assert(cwm.SalesAPI)
      done()
    })

    it('should have ScheduleAPI', (done) => {
      assert(cwm.ScheduleAPI)
      done()
    })

    it('should have ServiceAPI', (done) => {
      assert(cwm.ServiceAPI)
      done()
    })

    it('should have SystemAPI', (done) => {
      assert(cwm.SystemAPI)
      done()
    })

    it('should have TimeAPI', (done) => {
      assert(cwm.TimeAPI)
      done()
    })
  })

  describe('ServiceDeskAPI', () => {
    describe('getServiceTicketsById', () => {
      it('should return a ticket object', (done) => {
        cwm.ServiceAPI.getServiceTicketsById(123456)
          .then((result) => {
            if (!result) {
              done('No result')
            }
            const { id, summary } = <Ticket>result
            assert(id, summary)
            done()
          })
          .catch((err) => {
            console.error(err)
            done(err)
          })
      })
    })

    describe('getServiceTickets', () => {
      it('should return an array of ticket objects', (done) => {
        cwm.ServiceAPI.getServiceTickets({ pageSize: 1 })
          .then(([ticket]) => {
            assert(ticket.id)
            assert(ticket._info)
            assert(ticket._info.dateEntered)
            return done()
          })
          .catch((err) => done(err))
      })
    })
  })
})

describe('utils', () => {
  it('should have utils property', (done) => {
    assert(utils)
    done()
  })

  describe('Callback', () => {
    it('should have Callback property', (done) => {
      assert(utils.Callback)
      done()
    })
  })

  describe('Series', () => {
    it('should have Series property', (done) => {
      assert(utils.Series)
      done()
    })

    it('should return a promise', (done) => {
      const promises = utils.Series.all({ series: [new Promise((resolve) => resolve(true))] })
      assert(isPromise(promises))
      done()
    })

    it('should resolve an array of results', (done) => {
      utils.Series.all({ series: [new Promise((resolve) => resolve(true))] })
        .then((results): void => {
          assert(results[0] === true)
          done()
        })
        .catch((error) => done(error))
    })

    it('should resolve an array of results', (done) => {
      utils.Series.all({ series: [() => true] })
        .then((results): void => {
          assert(results[0] === true)
          done()
        })
        .catch((error) => done(error))
    })

    it('should resolve an array of results', (done) => {
      utils.Series.all({
        series: [() => new Promise((resolve) => resolve(true))],
      })
        .then((results): void => {
          assert(results[0] === true)
          done()
        })
        .catch((error) => done(error))
    })
  })
})
