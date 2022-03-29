import Automate from './Automate'
import { CWLogger, RetryOptions } from './types'
import AVTemplatePoliciesAPI from './Automate/AVTemplatePoliciesAPI'
import ClientsAPI from './Automate/ClientsAPI'
import CommandsAPI from './Automate/CommandsAPI'
import ComputersAPI from './Automate/ComputersAPI'
import ContactsAPI from './Automate/ContactsAPI'
import DataViewsAPI from './Automate/DataViewsAPI'
import DrivesAPI from './Automate/DrivesAPI'
import EventLogsAPI from './Automate/EventLogsAPI'
import LocationsAPI from './Automate/LocationsAPI'
import MaintenanceWindowDefinitionsAPI from './Automate/MaintenanceWindowDefinitionsAPI'
import MonitorsAPI from './Automate/MonitorsAPI'
import NetworkDevicesAPI from './Automate/NetworkDevicesAPI'
import PatchingAPI from './Automate/PatchingAPI'
import RemoteAgentAPI from './Automate/RemoteAgentAPI'
import ScriptingAPI from './Automate/ScriptingAPI'
import SearchesAPI from './Automate/SearchesAPI'
import SystemAPI from './Automate/SystemAPI'
import TicketAPI from './Automate/TicketsAPI'
import UserProfilesAPI from './Automate/UserProfilesAPI'

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
 * @public
 */
class AutomateAPI extends Automate {
  AVTemplatePoliciesAPI: AVTemplatePoliciesAPI
  ClientsAPI: ClientsAPI
  CommandsAPI: CommandsAPI
  ComputersAPI: ComputersAPI
  ContactsAPI: ContactsAPI
  DataViewsAPI: DataViewsAPI
  DrivesAPI: DrivesAPI
  EventLogsAPI: EventLogsAPI
  LocationsAPI: LocationsAPI
  MaintenanceWindowDefinitionsAPI: MaintenanceWindowDefinitionsAPI
  MonitorsAPI: MonitorsAPI
  NetworkDevicesAPI: NetworkDevicesAPI
  PatchingAPI: PatchingAPI
  RemoteAgentAPI: RemoteAgentAPI
  ScriptingAPI: ScriptingAPI
  SearchesAPI: SearchesAPI
  SystemAPI: SystemAPI
  TicketAPI: TicketAPI
  UserProfilesAPI: UserProfilesAPI

  constructor(options: CWAOptions) {
    super(options)

    this.AVTemplatePoliciesAPI = new AVTemplatePoliciesAPI(options)
    this.ClientsAPI = new ClientsAPI(options)
    this.CommandsAPI = new CommandsAPI(options)
    this.ComputersAPI = new ComputersAPI(options)
    this.ContactsAPI = new ContactsAPI(options)
    this.DataViewsAPI = new DataViewsAPI(options)
    this.DrivesAPI = new DrivesAPI(options)
    this.EventLogsAPI = new EventLogsAPI(options)
    this.LocationsAPI = new LocationsAPI(options)
    this.MaintenanceWindowDefinitionsAPI = new MaintenanceWindowDefinitionsAPI(options)
    this.MonitorsAPI = new MonitorsAPI(options)
    this.NetworkDevicesAPI = new NetworkDevicesAPI(options)
    this.PatchingAPI = new PatchingAPI(options)
    this.RemoteAgentAPI = new RemoteAgentAPI(options)
    this.ScriptingAPI = new ScriptingAPI(options)
    this.SearchesAPI = new SearchesAPI(options)
    this.SystemAPI = new SystemAPI(options)
    this.TicketAPI = new TicketAPI(options)
    this.UserProfilesAPI = new UserProfilesAPI(options)
  }
}

namespace AutomateAPI {
  AVTemplatePoliciesAPI
  ClientsAPI
  CommandsAPI
  ComputersAPI
  ContactsAPI
  DataViewsAPI
  DrivesAPI
  EventLogsAPI
  LocationsAPI
  MaintenanceWindowDefinitionsAPI
  MonitorsAPI
  NetworkDevicesAPI
  PatchingAPI
  RemoteAgentAPI
  ScriptingAPI
  SearchesAPI
  SystemAPI
  TicketAPI
  UserProfilesAPI
}

/**
 * @public
 */
export default AutomateAPI
