import Manage from './Manage'
import * as Company from './Manage/CompanyAPI'
import * as Configurations from './Manage/ConfigurationsAPI'
import * as Expense from './Manage/ExpenseAPI'
import * as Finance from './Manage/FinanceAPI'
import * as Marketing from './Manage/MarketingAPI'
import * as Procurement from './Manage/ProcurementAPI'
import * as Project from './Manage/ProjectAPI'
import * as Sales from './Manage/SalesAPI'
import * as Schedule from './Manage/ScheduleAPI'
import * as Service from './Manage/ServiceAPI'
import * as System from './Manage/SystemAPI'
import * as Time from './Manage/TimeAPI'
import { CWLogger, RetryOptions } from './types'

/**
 * @public
 * Manage patch operation input object, usually passed in an array of operations
 */
export type PatchOperation = {
  op: 'add' | 'replace' | 'remove'
  path: string
  value: Record<string, unknown> | Record<string, unknown>[] | string | null
}

/**
 * @public
 * Manage common parameters
 */
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

/**
 * @public
 */
export interface CWMOptions {
  /**
   * Your CW Manage Company ID
   */
  companyId: string
  /**
   * api public key
   */
  publicKey: string
  /**
   * api private key
   */
  privateKey: string
  /**
   * Your CW Manage instance URI
   * e.g. my.domain.com
   */
  companyUrl: string
  /**
   * Request a client ID from developer.connectwise.com
   */
  clientId: string
  /**
   * Defaults to 'v4_6_release'
   */
  entryPoint?: string
  /**
   * Default timeout in milliseconds
   */
  timeout?: number
  /**
   * Api version, defaults to 2021.1
   */
  apiVersion?: string
  /**
   * Enable automatic retry.  Defaults to false.
   */
  retry?: boolean
  /**
   * @see {@link RetryOptions} type
   */
  retryOptions?: RetryOptions
  /**
   * Pass in a custom logger function, otherwise the default
   * will be used
   * @example
   * ```js
   * const logger = (level, text, meta) => console.log(level, text, meta)
   * ```
   */
  logger?: CWLogger

  /**
   * Enable debug output.  Defaults to false.
   */
  debug?: boolean
}

/**
 * @public
 */
class ManageAPI extends Manage {
  CompanyAPI: Company.CompanyAPI
  ConfigurationsAPI: Configurations.ConfigurationsAPI
  ExpenseAPI: Expense.ExpenseAPI
  FinanceAPI: Finance.FinanceAPI
  MarketingAPI: Marketing.MarketingAPI
  ProcurementAPI: Procurement.ProcurementAPI
  ProjectAPI: Project.ProjectAPI
  SalesAPI: Sales.SalesAPI
  ScheduleAPI: Schedule.ScheduleAPI
  ServiceAPI: Service.ServiceAPI
  SystemAPI: System.SystemAPI
  TimeAPI: Time.TimeAPI

  constructor (options: CWMOptions) {
    super(options)

    this.CompanyAPI = new Company.CompanyAPI(options)
    this.ConfigurationsAPI = new Configurations.ConfigurationsAPI(options)
    this.ExpenseAPI = new Expense.ExpenseAPI(options)
    this.FinanceAPI = new Finance.FinanceAPI(options)
    this.MarketingAPI = new Marketing.MarketingAPI(options)
    this.ProcurementAPI = new Procurement.ProcurementAPI(options)
    this.ProjectAPI = new Project.ProjectAPI(options)
    this.SalesAPI = new Sales.SalesAPI(options)
    this.ScheduleAPI = new Schedule.ScheduleAPI(options)
    this.ServiceAPI = new Service.ServiceAPI(options)
    this.SystemAPI = new System.SystemAPI(options)
    this.TimeAPI = new Time.TimeAPI(options)
  }
}

/**
 * @public
 */
export default ManageAPI

/**
 * @public
 */
export type {
  Company,
  Configurations,
  Expense,
  Finance,
  Marketing,
  Procurement,
  Project,
  Sales,
  Schedule,
  Service,
  System,
  Time,
}
