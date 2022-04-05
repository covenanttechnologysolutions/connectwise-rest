import Automate from './Automate'
import { CWLogger, RetryOptions } from './types'
import { AVTemplatePoliciesAPI } from './Automate/AVTemplatePoliciesAPI'
import { ClientsAPI } from './Automate/ClientsAPI'
import { CommandsAPI } from './Automate/CommandsAPI'
import { ComputersAPI } from './Automate/ComputersAPI'
import { ContactsAPI } from './Automate/ContactsAPI'
import { DataViewsAPI } from './Automate/DataViewsAPI'
import { DrivesAPI } from './Automate/DrivesAPI'
import { EventLogsAPI } from './Automate/EventLogsAPI'
import { LocationsAPI } from './Automate/LocationsAPI'
import { MaintenanceWindowDefinitionsAPI } from './Automate/MaintenanceWindowDefinitionsAPI'
import { MonitorsAPI } from './Automate/MonitorsAPI'
import { NetworkDevicesAPI } from './Automate/NetworkDevicesAPI'
import { PatchingAPI } from './Automate/PatchingAPI'
import { RemoteAgentAPI } from './Automate/RemoteAgentAPI'
import { ScriptingAPI } from './Automate/ScriptingAPI'
import { SearchesAPI } from './Automate/SearchesAPI'
import { SystemAPI } from './Automate/SystemAPI'
import { TicketsAPI } from './Automate/TicketsAPI'
import { UserProfilesAPI } from './Automate/UserProfilesAPI'

import type * as AVTemplatePoliciesAPITypes from './Automate/AVTemplatePoliciesAPI'
import type * as ClientsAPITypes from './Automate/ClientsAPI'
import type * as CommandsAPITypes from './Automate/CommandsAPI'
import type * as ComputersAPITypes from './Automate/ComputersAPI'
import type * as ContactsAPITypes from './Automate/ContactsAPI'
import type * as DataViewsAPITypes from './Automate/DataViewsAPI'
import type * as DrivesAPITypes from './Automate/DrivesAPI'
import type * as EventLogsAPITypes from './Automate/EventLogsAPI'
import type * as LocationsAPITypes from './Automate/LocationsAPI'
import type * as MaintenanceWindowDefinitionsAPITypes from './Automate/MaintenanceWindowDefinitionsAPI'
import type * as MonitorsAPITypes from './Automate/MonitorsAPI'
import type * as NetworkDevicesAPITypes from './Automate/NetworkDevicesAPI'
import type * as PatchingAPITypes from './Automate/PatchingAPI'
import type * as RemoteAgentAPITypes from './Automate/RemoteAgentAPI'
import type * as ScriptingAPITypes from './Automate/ScriptingAPI'
import type * as SearchesAPITypes from './Automate/SearchesAPI'
import type * as SystemAPITypes from './Automate/SystemAPI'
import type * as TicketsAPITypes from './Automate/TicketsAPI'
import type * as UserProfilesAPITypes from './Automate/UserProfilesAPI'

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
  TicketsAPI: TicketsAPI
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
    this.TicketsAPI = new TicketsAPI(options)
    this.UserProfilesAPI = new UserProfilesAPI(options)
  }
}

/**
 * @public
 */
export default AutomateAPI
export type {
  AVTemplatePoliciesAPITypes,
  ClientsAPITypes,
  CommandsAPITypes,
  ComputersAPITypes,
  ContactsAPITypes,
  DataViewsAPITypes,
  DrivesAPITypes,
  EventLogsAPITypes,
  LocationsAPITypes,
  MaintenanceWindowDefinitionsAPITypes,
  MonitorsAPITypes,
  NetworkDevicesAPITypes,
  PatchingAPITypes,
  RemoteAgentAPITypes,
  ScriptingAPITypes,
  SearchesAPITypes,
  SystemAPITypes,
  TicketsAPITypes,
  UserProfilesAPITypes,
}
