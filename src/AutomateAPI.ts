import Automate from './Automate'
import { CWLogger, RetryOptions } from './types'
import * as AVTemplatePolicies from './Automate/AVTemplatePoliciesAPI'
import * as Clients from './Automate/ClientsAPI'
import * as Commands from './Automate/CommandsAPI'
import * as Computers from './Automate/ComputersAPI'
import * as Contacts from './Automate/ContactsAPI'
import * as DataViews from './Automate/DataViewsAPI'
import * as Drives from './Automate/DrivesAPI'
import * as EventLogs from './Automate/EventLogsAPI'
import * as Locations from './Automate/LocationsAPI'
import * as MaintenanceWindowDefinitions from './Automate/MaintenanceWindowDefinitionsAPI'
import * as Monitors from './Automate/MonitorsAPI'
import * as NetworkDevices from './Automate/NetworkDevicesAPI'
import * as Patching from './Automate/PatchingAPI'
import * as RemoteAgent from './Automate/RemoteAgentAPI'
import * as Scripting from './Automate/ScriptingAPI'
import * as Searches from './Automate/SearchesAPI'
import * as System from './Automate/SystemAPI'
import * as Ticket from './Automate/TicketsAPI'
import * as UserProfiles from './Automate/UserProfilesAPI'

/**
 * @public
 */
export type CWAOptions = {
  serverUrl: string
  username?: string
  password?: string
  twoFactorPasscode?: string
  token?: string
  clientId: string
  timeout?: number
  retry?: boolean
  retryOptions?: RetryOptions
  logger?: CWLogger
  debug?: boolean
}

/**
 * @public
 */
export type OrderBy = {
  name?: string
  type?: 'Undefined' | 'Ascending' | 'Descending'
}

/**
 * @public
 */
export type CommonParameters = {
  orderBy?: OrderBy
  page?: number
  pageSize?: number
  condition?: string
  expands?: {
    [key: string]: QueryOptionExpand
  }
  includedFields?: Array<string>
  excludedFields?: Array<string>
  ids?: Array<string>
  timeout?: number
}

/**
 * @public
 */
export type QueryOptionExpand = {
  fieldName?: string
  page?: number
  pageSize?: number
  condition?: string
  expands?: {
    [key: string]: QueryOptionExpand
  }
  orderBy?: OrderBy
  includedFields?: string[]
  excludedFields?: string[]
}

/**
 * @module AutomateAPI
 * @public
 */
class AutomateAPI extends Automate {
  /**
   * @public
   */
  AVTemplatePoliciesAPI: AVTemplatePolicies.AVTemplatePoliciesAPI
  ClientsAPI: Clients.ClientsAPI
  CommandsAPI: Commands.CommandsAPI
  ComputersAPI: Computers.ComputersAPI
  ContactsAPI: Contacts.ContactsAPI
  DataViewsAPI: DataViews.DataViewsAPI
  DrivesAPI: Drives.DrivesAPI
  EventLogsAPI: EventLogs.EventLogsAPI
  LocationsAPI: Locations.LocationsAPI
  MaintenanceWindowDefinitionsAPI: MaintenanceWindowDefinitions.MaintenanceWindowDefinitionsAPI
  MonitorsAPI: Monitors.MonitorsAPI
  NetworkDevicesAPI: NetworkDevices.NetworkDevicesAPI
  PatchingAPI: Patching.PatchingAPI
  RemoteAgentAPI: RemoteAgent.RemoteAgentAPI
  ScriptingAPI: Scripting.ScriptingAPI
  SearchesAPI: Searches.SearchesAPI
  SystemAPI: System.SystemAPI
  TicketsAPI: Ticket.TicketsAPI
  UserProfilesAPI: UserProfiles.UserProfilesAPI

  constructor(options: CWAOptions) {
    super(options)

    this.AVTemplatePoliciesAPI = new AVTemplatePolicies.AVTemplatePoliciesAPI(options)
    this.ClientsAPI = new Clients.ClientsAPI(options)
    this.CommandsAPI = new Commands.CommandsAPI(options)
    this.ComputersAPI = new Computers.ComputersAPI(options)
    this.ContactsAPI = new Contacts.ContactsAPI(options)
    this.DataViewsAPI = new DataViews.DataViewsAPI(options)
    this.DrivesAPI = new Drives.DrivesAPI(options)
    this.EventLogsAPI = new EventLogs.EventLogsAPI(options)
    this.LocationsAPI = new Locations.LocationsAPI(options)
    this.MaintenanceWindowDefinitionsAPI =
      new MaintenanceWindowDefinitions.MaintenanceWindowDefinitionsAPI(options)
    this.MonitorsAPI = new Monitors.MonitorsAPI(options)
    this.NetworkDevicesAPI = new NetworkDevices.NetworkDevicesAPI(options)
    this.PatchingAPI = new Patching.PatchingAPI(options)
    this.RemoteAgentAPI = new RemoteAgent.RemoteAgentAPI(options)
    this.ScriptingAPI = new Scripting.ScriptingAPI(options)
    this.SearchesAPI = new Searches.SearchesAPI(options)
    this.SystemAPI = new System.SystemAPI(options)
    this.TicketsAPI = new Ticket.TicketsAPI(options)
    this.UserProfilesAPI = new UserProfiles.UserProfilesAPI(options)
  }
}

/**
 * @public
 */
export default AutomateAPI
export type {
  AVTemplatePolicies,
  Clients,
  Commands,
  Computers,
  Contacts,
  DataViews,
  Drives,
  EventLogs,
  Locations,
  MaintenanceWindowDefinitions,
  Monitors,
  NetworkDevices,
  Patching,
  RemoteAgent,
  Scripting,
  Searches,
  System,
  Ticket,
  UserProfiles,
}
