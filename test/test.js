/**
 * Created by kgrube on 9/11/2018
 */
/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv')
const path = require('path')
const { ManageAPI, AutomateAPI, utils } = require('../dist')
const assert = require('assert')
const { describe, it } = require('mocha')
const { isPromise } = require('./test-utils.js')

dotenv.config({ path: path.join(__dirname, '.env') })

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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logger: () => {},
})

const cwa = new AutomateAPI({
  clientId: AUTOMATE_API_CLIENT_ID,
  serverUrl: AUTOMATE_API_URL,
  username: AUTOMATE_API_USER,
  password: AUTOMATE_API_PASSWORD,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  logger: () => {},
})

describe('Automate', () => {
  describe('instance', () => {
    it('should be an instance of Automate', (done) => {
      assert(cwa instanceof AutomateAPI)
      done()
    })

    it('should have AVTemplatePoliciesAPI', (done) => {
      assert(cwa.AVTemplatePoliciesAPI)
      done()
    })
    it('should have ClientsAPI', (done) => {
      assert(cwa.ClientsAPI)
      done()
    })
    it('should have CommandsAPI', (done) => {
      assert(cwa.CommandsAPI)
      done()
    })
    it('should have ComputersAPI', (done) => {
      assert(cwa.ComputersAPI)
      done()
    })
    it('should have ContactsAPI', (done) => {
      assert(cwa.ContactsAPI)
      done()
    })
    it('should have DataViewsAPI', (done) => {
      assert(cwa.DataViewsAPI)
      done()
    })
    it('should have DrivesAPI', (done) => {
      assert(cwa.DrivesAPI)
      done()
    })
    it('should have EventLogsAPI', (done) => {
      assert(cwa.EventLogsAPI)
      done()
    })
    it('should have LocationsAPI', (done) => {
      assert(cwa.LocationsAPI)
      done()
    })
    it('should have MaintenanceWindowDefinitionsAPI', (done) => {
      assert(cwa.MaintenanceWindowDefinitionsAPI)
      done()
    })
    it('should have MonitorsAPI', (done) => {
      assert(cwa.MonitorsAPI)
      done()
    })
    it('should have NetworkDevicesAPI', (done) => {
      assert(cwa.NetworkDevicesAPI)
      done()
    })
    it('should have PatchingAPI', (done) => {
      assert(cwa.PatchingAPI)
      done()
    })
    it('should have RemoteAgentAPI', (done) => {
      assert(cwa.RemoteAgentAPI)
      done()
    })
    it('should have ScriptingAPI', (done) => {
      assert(cwa.ScriptingAPI)
      done()
    })
    it('should have SearchesAPI', (done) => {
      assert(cwa.SearchesAPI)
      done()
    })
    it('should have SystemAPI', (done) => {
      assert(cwa.SystemAPI)
      done()
    })
    it('should have TicketsAPI', (done) => {
      assert(cwa.TicketsAPI)
      done()
    })
    it('should have UserProfilesAPI', (done) => {
      assert(cwa.UserProfilesAPI)
      done()
    })
  })

  describe('ComputersAPI', () => {
    it('should return a list of computers', (done) => {
      cwa.ComputersAPI.getComputerList({ pageSize: 1 })
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

  describe('ServiceAPI', () => {
    describe('getServiceTicketsById', () => {
      it('should return a ticket object', (done) => {
        cwm.ServiceAPI.getServiceTicketsById(123456)
          .then((result) => {
            if (!result) {
              done('No result')
            }
            const { id, summary } = result
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

    describe('error', () => {
      it('should return a 404 not found error', (done) => {
        cwm.ServiceAPI.getServiceBoardsByGrandparentIdItemsByParentIdAssociations(9999, 9999)
          .then(() => {
            return done(new Error('Incorrect response'))
          })
          .catch((err) => {
            assert(err)
            assert(err.status === 404)
            done()
          })
      })
    })
  })

  describe('pagination', () => {
    it('should return an array of CommunicationTypes', (done) => {
      cwm
        .paginate(cwm.CompanyAPI.getCompanyCommunicationTypes, { pageSize: 2, startPage: 1 }, {})
        .then((results) => {
          assert(Array.isArray(results))
          assert(results.length > 0)
          const firstType = results.pop()
          assert(firstType.id)
          assert(firstType.description)
          assert(firstType._info)
          done()
        })
        .catch((err) => done(err))
    })

    it('should return the same number of items', (done) => {
      cwm
        .paginate(cwm.CompanyAPI.getCompanyCommunicationTypes, { pageSize: 2, startPage: 1 }, {})
        .then((pagedResults) => {
          return cwm.CompanyAPI.getCompanyCommunicationTypes().then((unPagedResults) => {
            assert(unPagedResults.length === pagedResults.length)
            done()
          })
        })
        .catch((err) => done(err))
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
        .then((results) => {
          assert(results[0] === true)
          done()
        })
        .catch((error) => done(error))
    })

    it('should resolve an array of results', (done) => {
      utils.Series.all({ series: [() => true] })
        .then((results) => {
          assert(results[0] === true)
          done()
        })
        .catch((error) => done(error))
    })

    it('should resolve an array of results', (done) => {
      utils.Series.all({
        series: [() => new Promise((resolve) => resolve(true))],
      })
        .then((results) => {
          assert(results[0] === true)
          done()
        })
        .catch((error) => done(error))
    })
  })
})
