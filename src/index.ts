import ManageAPI, { CWMOptions, CommonParameters, PatchOperation } from './ManageAPI'
import AutomateAPI, { CWAOptions } from './AutomateAPI'

import type Automate from './Automate'
import type Manage from './Manage'
import type CompanyAPI from './Manage/CompanyAPI'
import type ConfigurationsAPI from './Manage/ConfigurationsAPI'
import type ExpenseAPI from './Manage/ExpenseAPI'
import type FinanceAPI from './Manage/FinanceAPI'
import type MarketingAPI from './Manage/MarketingAPI'
import type ProcurementAPI from './Manage/ProcurementAPI'
import type ProjectAPI from './Manage/ProjectAPI'
import type SalesAPI from './Manage/SalesAPI'
import type ScheduleAPI from './Manage/ScheduleAPI'
import type ServiceAPI from './Manage/ServiceAPI'
import type SystemAPI from './Manage/SystemAPI'
import type TimeAPI from './Manage/TimeAPI'
import type * as types from './types'

import * as utils from './utils'

export type {
  CWMOptions,
  CommonParameters,
  PatchOperation,
  CWAOptions,
  types,
  Automate,
  Manage,
  CompanyAPI,
  ConfigurationsAPI,
  ExpenseAPI,
  FinanceAPI,
  MarketingAPI,
  ProcurementAPI,
  ProjectAPI,
  SalesAPI,
  ScheduleAPI,
  ServiceAPI,
  SystemAPI,
  TimeAPI,
}

export { AutomateAPI, ManageAPI, utils }
