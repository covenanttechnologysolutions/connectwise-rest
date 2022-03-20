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
}

export default class ManageAPI extends Manage {
  Company: CompanyAPI
  Configurations: ConfigurationsAPI
  Expense: ExpenseAPI
  Finance: FinanceAPI
  Marketing: MarketingAPI
  Procurement: ProcurementAPI
  Project: ProjectAPI
  Sales: SalesAPI
  Schedule: ScheduleAPI
  Service: ServiceAPI
  System: SystemAPI
  Time: TimeAPI

  constructor(options: CWMOptions) {
    super(options)

    this.Company = new CompanyAPI(options)
    this.Configurations = new ConfigurationsAPI(options)
    this.Expense = new ExpenseAPI(options)
    this.Finance = new FinanceAPI(options)
    this.Marketing = new MarketingAPI(options)
    this.Procurement = new ProcurementAPI(options)
    this.Project = new ProjectAPI(options)
    this.Sales = new SalesAPI(options)
    this.Schedule = new ScheduleAPI(options)
    this.Service = new ServiceAPI(options)
    this.System = new SystemAPI(options)
    this.Time = new TimeAPI(options)
  }
}
