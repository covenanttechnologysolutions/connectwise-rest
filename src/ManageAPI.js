import Manage from './Manage/Manage.js'
import Company from './Manage/Company.js'
import Configurations from './Manage/Configurations.js'
import Expense from './Manage/Expense.js'
import Finance from './Manage/Finance.js'
import Marketing from './Manage/Marketing.js'
import Procurement from './Manage/Procurement.js'
import Project from './Manage/Project.js'
import Sales from './Manage/Sales.js'
import Schedule from './Manage/Schedule.js'
import Service from './Manage/Service.js'
import System from './Manage/System.js'
import Time from './Manage/Time.js'
import { DEFAULTS } from './Manage/Manage.js'

/**
 * @typedef {object} PatchOperation
 * @property {string} op [add | replace | remove] - The update operation used in the request
 * @property {string} path - Pathway for the updated field (Case Sensitive)
 * @property {string|object} value - The new value if doing a replace.  When working with custom fields, you must pass the entire array of custom fields.
 */

/**
 * NoContent return
 * @typedef NoContent
 */

export default class ManageAPI extends Manage {
  /**
   * @param {object} options
   * @param {string} options.companyId
   * @param {string} options.publicKey
   * @param {string} options.privateKey
   * @param {string} options.companyUrl
   * @param {string} options.clientId
   * @param {string} [options.entryPoint]
   * @param {number} [options.timeout]
   * @param {string} [options.apiVersion]
   * @param {boolean} [options.retry]
   * @param {object} [options.retryOptions]
   * @param {number} [options.retryOptions.retries]
   * @param {number} [options.retryOptions.minTimeout]
   * @param {number} [options.retryOptions.maxTimeout]
   * @param {boolean} [options.retryOptions.randomize]
   * @param {function} [options.logger]
   */
  constructor({
    companyId,
    publicKey,
    privateKey,
    companyUrl,
    clientId,
    entryPoint = 'v4_6_release',
    timeout = 20000,
    apiVersion = '2021.1',
    retry = false,
    retryOptions = DEFAULTS.retryOptions,
    logger = DEFAULTS.logger,
  }) {
    super({
      companyId,
      publicKey,
      privateKey,
      companyUrl,
      clientId,
      entryPoint,
      timeout,
      apiVersion,
      retry,
      retryOptions,
      logger,
    })

    const props = {
      companyId,
      publicKey,
      privateKey,
      companyUrl,
      clientId,
      entryPoint,
      timeout,
      apiVersion,
      retry,
      retryOptions,
      logger,
    }

    this.Company = new Company(props)
    this.Configurations = new Configurations(props)
    this.Expense = new Expense(props)
    this.Finance = new Finance(props)
    this.Marketing = new Marketing(props)
    this.Procurement = new Procurement(props)
    this.Project = new Project(props)
    this.Sales = new Sales(props)
    this.Schedule = new Schedule(props)
    this.Service = new Service(props)
    this.System = new System(props)
    this.Time = new Time(props)
  }
}
