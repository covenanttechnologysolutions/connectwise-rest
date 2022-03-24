import Manage from './Manage'
import CompanyAPI from './Manage/CompanyAPI'
import ConfigurationsAPI from './Manage/ConfigurationsAPI'
import ExpenseAPI from './Manage/ExpenseAPI'
import FinanceAPI from './Manage/FinanceAPI'
import MarketingAPI from './Manage/MarketingAPI'
import ProcurementAPI from './Manage/ProcurementAPI'
import ProjectAPI from './Manage/ProjectAPI'
import SalesAPI from './Manage/SalesAPI'
import ScheduleAPI from './Manage/ScheduleAPI'
import ServiceAPI from './Manage/ServiceAPI'
import SystemAPI from './Manage/SystemAPI'
import TimeAPI from './Manage/TimeAPI'
import { CWLogger, RetryOptions } from './types'

export type PatchOperation = {
  op: 'add' | 'replace' | 'remove'
  path: string
  value: Record<string, unknown> | Record<string, unknown>[] | string | null
}

export type CommonParameters = {
  conditions?: string
  childConditions?: string
  customFieldConditions?: string
  orderBy?: string
  fields?: string
  page?: number
  pageSize?: number
  pageId?: number
}

export interface CWMOptions {
  companyId: string
  publicKey: string
  privateKey: string
  companyUrl: string
  clientId: string
  entryPoint?: string
  timeout?: number
  apiVersion?: string
  retry?: boolean
  retryOptions?: RetryOptions
  logger?: CWLogger
  debug?: boolean
}

/**
 * @public
 */
export default class ManageAPI extends Manage {
  CompanyAPI: CompanyAPI
  ConfigurationsAPI: ConfigurationsAPI
  ExpenseAPI: ExpenseAPI
  FinanceAPI: FinanceAPI
  MarketingAPI: MarketingAPI
  ProcurementAPI: ProcurementAPI
  ProjectAPI: ProjectAPI
  SalesAPI: SalesAPI
  ScheduleAPI: ScheduleAPI
  ServiceAPI: ServiceAPI
  SystemAPI: SystemAPI
  TimeAPI: TimeAPI

  constructor(options: CWMOptions) {
    super(options)

    this.CompanyAPI = new CompanyAPI(options)
    this.ConfigurationsAPI = new ConfigurationsAPI(options)
    this.ExpenseAPI = new ExpenseAPI(options)
    this.FinanceAPI = new FinanceAPI(options)
    this.MarketingAPI = new MarketingAPI(options)
    this.ProcurementAPI = new ProcurementAPI(options)
    this.ProjectAPI = new ProjectAPI(options)
    this.SalesAPI = new SalesAPI(options)
    this.ScheduleAPI = new ScheduleAPI(options)
    this.ServiceAPI = new ServiceAPI(options)
    this.SystemAPI = new SystemAPI(options)
    this.TimeAPI = new TimeAPI(options)
  }
}
