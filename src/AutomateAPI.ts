/* This file was auto-generated, do not manually edit. */
import Automate from './Automate'
import { CWLogger, RetryOptions } from './types'
import { BatchAPI } from './Automate/BatchAPI'
import { CommandsAPI } from './Automate/CommandsAPI'
import { CompanyAPI } from './Automate/CompanyAPI'
import { ComputersAPI } from './Automate/ComputersAPI'
import { ContactsAPI } from './Automate/ContactsAPI'
import { DataViewsAPI } from './Automate/DataViewsAPI'
import { EventLogsAPI } from './Automate/EventLogsAPI'
import { GroupsAPI } from './Automate/GroupsAPI'
import { MaintenanceWindowsAPI } from './Automate/MaintenanceWindowsAPI'
import { MonitorsAPI } from './Automate/MonitorsAPI'
import { NetworkDevicesAPI } from './Automate/NetworkDevicesAPI'
import { PatchingAPI } from './Automate/PatchingAPI'
import { PresentationLayerAPI } from './Automate/PresentationLayerAPI'
import { ProbeAPI } from './Automate/ProbeAPI'
import { RemoteAgentAPI } from './Automate/RemoteAgentAPI'
import { ScriptsAPI } from './Automate/ScriptsAPI'
import { SearchesAPI } from './Automate/SearchesAPI'
import { StatisticsAPI } from './Automate/StatisticsAPI'
import { SystemAPI } from './Automate/SystemAPI'
import { TicketsAPI } from './Automate/TicketsAPI'

import type * as BatchAPITypes from './Automate/BatchAPI'
import type * as CommandsAPITypes from './Automate/CommandsAPI'
import type * as CompanyAPITypes from './Automate/CompanyAPI'
import type * as ComputersAPITypes from './Automate/ComputersAPI'
import type * as ContactsAPITypes from './Automate/ContactsAPI'
import type * as DataViewsAPITypes from './Automate/DataViewsAPI'
import type * as EventLogsAPITypes from './Automate/EventLogsAPI'
import type * as GroupsAPITypes from './Automate/GroupsAPI'
import type * as MaintenanceWindowsAPITypes from './Automate/MaintenanceWindowsAPI'
import type * as MonitorsAPITypes from './Automate/MonitorsAPI'
import type * as NetworkDevicesAPITypes from './Automate/NetworkDevicesAPI'
import type * as PatchingAPITypes from './Automate/PatchingAPI'
import type * as PresentationLayerAPITypes from './Automate/PresentationLayerAPI'
import type * as ProbeAPITypes from './Automate/ProbeAPI'
import type * as RemoteAgentAPITypes from './Automate/RemoteAgentAPI'
import type * as ScriptsAPITypes from './Automate/ScriptsAPI'
import type * as SearchesAPITypes from './Automate/SearchesAPI'
import type * as StatisticsAPITypes from './Automate/StatisticsAPI'
import type * as SystemAPITypes from './Automate/SystemAPI'
import type * as TicketsAPITypes from './Automate/TicketsAPI'

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
 * Exported list of section API property names for introspection and testing.
 * @public
 */
export const SECTIONS = [
  'BatchAPI',
  'CommandsAPI',
  'CompanyAPI',
  'ComputersAPI',
  'ContactsAPI',
  'DataViewsAPI',
  'EventLogsAPI',
  'GroupsAPI',
  'MaintenanceWindowsAPI',
  'MonitorsAPI',
  'NetworkDevicesAPI',
  'PatchingAPI',
  'PresentationLayerAPI',
  'ProbeAPI',
  'RemoteAgentAPI',
  'ScriptsAPI',
  'SearchesAPI',
  'StatisticsAPI',
  'SystemAPI',
  'TicketsAPI',
] as const

/**
 * @public
 */
export type SectionName = (typeof SECTIONS)[number]

/**
 * Top-level Automate client. Section clients are exposed as lazy getters so you pay
 * for each only when first accessed. Each access caches the instance in place.
 *
 * All sub-APIs share this single Automate instance (and therefore a single axios client,
 * auth state, and connection pool).
 *
 * @public
 */
class AutomateAPI extends Automate {
  constructor(options: CWAOptions) {
    super(options)
  }

  get BatchAPI(): BatchAPI {
    const v = new BatchAPI(this)
    Object.defineProperty(this, 'BatchAPI', { value: v, configurable: true })
    return v
  }

  get CommandsAPI(): CommandsAPI {
    const v = new CommandsAPI(this)
    Object.defineProperty(this, 'CommandsAPI', { value: v, configurable: true })
    return v
  }

  get CompanyAPI(): CompanyAPI {
    const v = new CompanyAPI(this)
    Object.defineProperty(this, 'CompanyAPI', { value: v, configurable: true })
    return v
  }

  get ComputersAPI(): ComputersAPI {
    const v = new ComputersAPI(this)
    Object.defineProperty(this, 'ComputersAPI', { value: v, configurable: true })
    return v
  }

  get ContactsAPI(): ContactsAPI {
    const v = new ContactsAPI(this)
    Object.defineProperty(this, 'ContactsAPI', { value: v, configurable: true })
    return v
  }

  get DataViewsAPI(): DataViewsAPI {
    const v = new DataViewsAPI(this)
    Object.defineProperty(this, 'DataViewsAPI', { value: v, configurable: true })
    return v
  }

  get EventLogsAPI(): EventLogsAPI {
    const v = new EventLogsAPI(this)
    Object.defineProperty(this, 'EventLogsAPI', { value: v, configurable: true })
    return v
  }

  get GroupsAPI(): GroupsAPI {
    const v = new GroupsAPI(this)
    Object.defineProperty(this, 'GroupsAPI', { value: v, configurable: true })
    return v
  }

  get MaintenanceWindowsAPI(): MaintenanceWindowsAPI {
    const v = new MaintenanceWindowsAPI(this)
    Object.defineProperty(this, 'MaintenanceWindowsAPI', { value: v, configurable: true })
    return v
  }

  get MonitorsAPI(): MonitorsAPI {
    const v = new MonitorsAPI(this)
    Object.defineProperty(this, 'MonitorsAPI', { value: v, configurable: true })
    return v
  }

  get NetworkDevicesAPI(): NetworkDevicesAPI {
    const v = new NetworkDevicesAPI(this)
    Object.defineProperty(this, 'NetworkDevicesAPI', { value: v, configurable: true })
    return v
  }

  get PatchingAPI(): PatchingAPI {
    const v = new PatchingAPI(this)
    Object.defineProperty(this, 'PatchingAPI', { value: v, configurable: true })
    return v
  }

  get PresentationLayerAPI(): PresentationLayerAPI {
    const v = new PresentationLayerAPI(this)
    Object.defineProperty(this, 'PresentationLayerAPI', { value: v, configurable: true })
    return v
  }

  get ProbeAPI(): ProbeAPI {
    const v = new ProbeAPI(this)
    Object.defineProperty(this, 'ProbeAPI', { value: v, configurable: true })
    return v
  }

  get RemoteAgentAPI(): RemoteAgentAPI {
    const v = new RemoteAgentAPI(this)
    Object.defineProperty(this, 'RemoteAgentAPI', { value: v, configurable: true })
    return v
  }

  get ScriptsAPI(): ScriptsAPI {
    const v = new ScriptsAPI(this)
    Object.defineProperty(this, 'ScriptsAPI', { value: v, configurable: true })
    return v
  }

  get SearchesAPI(): SearchesAPI {
    const v = new SearchesAPI(this)
    Object.defineProperty(this, 'SearchesAPI', { value: v, configurable: true })
    return v
  }

  get StatisticsAPI(): StatisticsAPI {
    const v = new StatisticsAPI(this)
    Object.defineProperty(this, 'StatisticsAPI', { value: v, configurable: true })
    return v
  }

  get SystemAPI(): SystemAPI {
    const v = new SystemAPI(this)
    Object.defineProperty(this, 'SystemAPI', { value: v, configurable: true })
    return v
  }

  get TicketsAPI(): TicketsAPI {
    const v = new TicketsAPI(this)
    Object.defineProperty(this, 'TicketsAPI', { value: v, configurable: true })
    return v
  }
}

/**
 * @public
 */
export default AutomateAPI

/**
 * @public
 */
export type {
  BatchAPITypes,
  CommandsAPITypes,
  CompanyAPITypes,
  ComputersAPITypes,
  ContactsAPITypes,
  DataViewsAPITypes,
  EventLogsAPITypes,
  GroupsAPITypes,
  MaintenanceWindowsAPITypes,
  MonitorsAPITypes,
  NetworkDevicesAPITypes,
  PatchingAPITypes,
  PresentationLayerAPITypes,
  ProbeAPITypes,
  RemoteAgentAPITypes,
  ScriptsAPITypes,
  SearchesAPITypes,
  StatisticsAPITypes,
  SystemAPITypes,
  TicketsAPITypes,
}
