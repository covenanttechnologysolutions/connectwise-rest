/**
 * Created by kgrube on 9/11/2018
 */
import dotenv from 'dotenv'
import path from 'path'
import { AutomateAPI, ManageAPI } from '../src/index.js'
import assert from 'assert'
import { describe, it } from 'mocha'
import should from 'should'
import Automate from '../src/Automate.ts'

const __dirname = path.resolve()
dotenv.config({ path: path.join(__dirname, 'test/.env') })

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
  })
})

describe('Manage', () => {
  describe('instance', () => {
    it('should be an instance of Manage', (done) => {
      assert(cwm instanceof ManageAPI)
      done()
    })

    it('should have CompanyAPI', (done) => {
      assert(cw.CompanyAPI)
      done()
    })

    it('should have FinanceAPI', (done) => {
      assert(cw.FinanceAPI)
      done()
    })

    it('should have ProjectAPI', (done) => {
      assert(cw.ProjectAPI)
      done()
    })

    it('should have SalesAPI', (done) => {
      assert(cw.SalesAPI)
      done()
    })

    it('should have ScheduleAPI', (done) => {
      assert(cw.ScheduleAPI)
      done()
    })

    it('should have ServiceDeskAPI', (done) => {
      assert(cw.ServiceDeskAPI)
      done()
    })

    it('should have SystemAPI', (done) => {
      assert(cw.SystemAPI)
      done()
    })

    it('should have TimeAPI', (done) => {
      assert(cw.TimeAPI)
      done()
    })
  })

  describe('Ticket', () => {
    it('should return a ticket object', (done) => {
      cwm.Service.getServiceTicketsById(123456)
        .then((result) => {
          console.log('result', result)
        })
        .catch((err) => {
          console.error(err)
        })
    })
  })

  describe('ServiceDeskAPI', () => {
    describe('Tickets', () => {
      it('should return a ticket object', (done) => {
        cw.ServiceDeskAPI.Tickets.getTickets({ pageSize: 1 })
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

describe('ConnectWise', () => {
  describe('class', () => {
    it('should have utils property', (done) => {
      assert(ConnectWise.utils)
      done()
    })
  })

  describe('utils', () => {
    it('should have Callback property', (done) => {
      assert(ConnectWise.utils.Callback)
      done()
    })

    it('should have Series property', (done) => {
      assert(ConnectWise.utils.Series)
      done()
    })
  })
})
