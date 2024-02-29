/* eslint-disable @typescript-eslint/no-var-requires */
const dotenv = require('dotenv')
const path = require('path')
const { AutomateAPI } = require('../dist')
const assert = require('assert')
const { describe, it } = require('mocha')

dotenv.config({ path: path.join(__dirname, '.env') })

const { AUTOMATE_API_CLIENT_ID, AUTOMATE_API_PASSWORD, AUTOMATE_API_URL, AUTOMATE_API_USER } =
  process.env

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
