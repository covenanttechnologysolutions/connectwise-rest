import Manage from './Manage.js'

/**
 * Classification
 * @typedef {object} Classification
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {number} [multiplier]  double nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [companyFlag]   nullable
 * @property {boolean} [employeeFlag]   nullable
 * @property {object} [_info]
 */

/**
 * Count
 * @typedef {object} Count
 * @property {number} [count]  int32
 */

/**
 * ExpenseEntry
 * @typedef {object} ExpenseEntry
 * @property {number} [id]  int32
 * @property {ExpenseReportReference} [expenseReport]
 * @property {CompanyReference} [company]
 * @property {number} [chargeToId]  int32 nullable
 * @property {string} [chargeToType] Company or chargeToType is required  nullable
 * @property {ExpenseTypeReference} [type]
 * @property {MemberReference} [member]
 * @property {PaymentMethodReference} [paymentMethod]
 * @property {ClassificationReference} [classification]
 * @property {number} amount  double nullable
 * @property {string} [billableOption]   nullable
 * @property {string} date  date-time
 * @property {number} [locationId]  int32 nullable
 * @property {number} [businessUnitId]  int32 nullable
 * @property {string} [notes]
 * @property {AgreementReference} [agreement]
 * @property {number} [invoiceAmount]  double nullable
 * @property {string} [mobileGuid]  uuid nullable
 * @property {array} [taxes]
 * @property {InvoiceReference} [invoice]
 * @property {CurrencyReference} [currency]
 * @property {string} [status]   nullable
 * @property {number} [billAmount]  double nullable
 * @property {number} [agreementAmount]  double nullable
 * @property {number} [odometerStart]  double nullable
 * @property {number} [odometerEnd]  double nullable
 * @property {TicketReference} [ticket]
 * @property {ProjectReference} [project]
 * @property {ProjectPhaseReference} [phase]
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * ExpenseEntryAudit
 * @typedef {object} ExpenseEntryAudit
 * @property {number} [id]  int32
 * @property {MemberReference} [member]
 * @property {string} [source]   nullable
 * @property {string} [type]   nullable
 * @property {string} [message]
 * @property {string} [oldValue]
 * @property {string} [newValue]
 * @property {string} [value]
 * @property {object} [_info]
 */

/**
 * ExpenseTaxTypeInfo
 * @typedef {object} ExpenseTaxTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactive]
 * @property {object} [_info]
 */

/**
 * PaymentType
 * @typedef {object} PaymentType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {ClassificationReference} [classification]
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [companyFlag]   nullable
 * @property {object} [_info]
 */

/**
 * PaymentTypeInfo
 * @typedef {object} PaymentTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ExpenseReport
 * @typedef {object} ExpenseReport
 * @property {number} [id]  int32
 * @property {MemberReference} [member]
 * @property {number} [year]  int32 nullable
 * @property {number} [period]  int32 nullable
 * @property {string} [dateStart]
 * @property {string} [dateEnd]
 * @property {string} [status]   nullable
 * @property {number} [total]  double nullable
 * @property {string} [dueDate]
 * @property {object} [_info]
 */

/**
 * SuccessResponse
 * @typedef {object} SuccessResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * ExpenseReportAudit
 * @typedef {object} ExpenseReportAudit
 * @property {number} [id]  int32
 * @property {MemberReference} [member]
 * @property {string} [source]   nullable
 * @property {string} [type]   nullable
 * @property {string} [message]
 * @property {string} [oldValue]
 * @property {string} [newValue]
 * @property {string} [value]
 * @property {object} [_info]
 */

/**
 * ExpenseType
 * @typedef {object} ExpenseType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {string} amountCaption
 * @property {number} [reimbursementRate]  double nullable
 * @property {string} billExpenses   nullable
 * @property {string} invoiceMarkupOption   nullable
 * @property {number} [invoiceMarkupAmount]  double nullable
 * @property {boolean} [advancedAmountFlag]   nullable
 * @property {boolean} [mileageFlag]   nullable
 * @property {boolean} [quantityFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {number} [maxAmount]  double nullable
 * @property {string} [integrationXRef]  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ExpenseTypeInfo
 * @typedef {object} ExpenseTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {string} [amountCaption]
 * @property {boolean} [mileageFlag]   nullable
 * @property {object} [_info]
 */

export default class Expense extends Manage {
  constructor(props) {
    super(props)
  }

  /**
   * Get List of Classification
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Classification[]>}
   */
  getExpenseClassifications(params = {}) {
    return this.request({
      path: `/expense/classifications`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Classification
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Classification>}
   */
  getExpenseClassificationsById(id, params = {}) {
    return this.request({
      path: `/expense/classifications/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Classification
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getExpenseClassificationsCount(params = {}) {
    return this.request({
      path: `/expense/classifications/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ExpenseEntry
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseEntry[]>}
   */
  getExpenseEntries(params = {}) {
    return this.request({
      path: `/expense/entries`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ExpenseEntry
   * @param {ExpenseEntry} expenseEntry expenseEntry
   * @returns {Promise<ExpenseEntry>}
   */
  postExpenseEntries(expenseEntry) {
    return this.request({
      path: `/expense/entries`,
      method: 'post',
      data: expenseEntry,
    })
  }
  /**
   * Get ExpenseEntry
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseEntry>}
   */
  getExpenseEntriesById(id, params = {}) {
    return this.request({
      path: `/expense/entries/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ExpenseEntry
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteExpenseEntriesById(id) {
    return this.request({
      path: `/expense/entries/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ExpenseEntry
   * @param {number} id
   * @param {ExpenseEntry} expenseEntry expenseEntry
   * @returns {Promise<ExpenseEntry>}
   */
  putExpenseEntriesById(id, expenseEntry) {
    return this.request({
      path: `/expense/entries/${id}`,
      method: 'put',
      data: expenseEntry,
    })
  }

  /**
   * Patch ExpenseEntry
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ExpenseEntry>}
   */
  patchExpenseEntriesById(id, patchOperations) {
    return this.request({
      path: `/expense/entries/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of ExpenseEntryAudit
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseEntryAudit[]>}
   */
  getExpenseEntriesByParentIdAudits(parentId, params = {}) {
    return this.request({
      path: `/expense/entries/${parentId}/audits`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ExpenseEntryAudit
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseEntryAudit>}
   */
  getExpenseEntriesByParentIdAuditsById(id, parentId, params = {}) {
    return this.request({
      path: `/expense/entries/${parentId}/audits/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ExpenseEntryAudit
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getExpenseEntriesByParentIdAuditsCount(parentId, params = {}) {
    return this.request({
      path: `/expense/entries/${parentId}/audits/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ExpenseEntry
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getExpenseEntriesCount(params = {}) {
    return this.request({
      path: `/expense/entries/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ExpenseTaxTypeInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseTaxTypeInfo[]>}
   */
  getExpenseInfoTaxTypes(params = {}) {
    return this.request({
      path: `/expense/info/taxTypes`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ExpenseTaxTypeInfo
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseTaxTypeInfo>}
   */
  getExpenseInfoTaxTypesById(id, params = {}) {
    return this.request({
      path: `/expense/info/taxTypes/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ExpenseTaxTypeInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getExpenseInfoTaxTypesCount(params = {}) {
    return this.request({
      path: `/expense/info/taxTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PaymentType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PaymentType[]>}
   */
  getExpensePaymentTypes(params = {}) {
    return this.request({
      path: `/expense/paymentTypes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post PaymentType
   * @param {PaymentType} paymentType paymentType
   * @returns {Promise<PaymentType>}
   */
  postExpensePaymentTypes(paymentType) {
    return this.request({
      path: `/expense/paymentTypes`,
      method: 'post',
      data: paymentType,
    })
  }
  /**
   * Get PaymentType
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PaymentType>}
   */
  getExpensePaymentTypesById(id, params = {}) {
    return this.request({
      path: `/expense/paymentTypes/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete PaymentType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteExpensePaymentTypesById(id) {
    return this.request({
      path: `/expense/paymentTypes/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put PaymentType
   * @param {number} id
   * @param {PaymentType} paymentType paymentType
   * @returns {Promise<PaymentType>}
   */
  putExpensePaymentTypesById(id, paymentType) {
    return this.request({
      path: `/expense/paymentTypes/${id}`,
      method: 'put',
      data: paymentType,
    })
  }

  /**
   * Patch PaymentType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PaymentType>}
   */
  patchExpensePaymentTypesById(id, patchOperations) {
    return this.request({
      path: `/expense/paymentTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get PaymentTypeInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PaymentTypeInfo>}
   */
  getExpensePaymentTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/expense/paymentTypes/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of PaymentType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getExpensePaymentTypesCount(params = {}) {
    return this.request({
      path: `/expense/paymentTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PaymentTypeInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PaymentTypeInfo[]>}
   */
  getExpensePaymentTypesInfo(params = {}) {
    return this.request({
      path: `/expense/paymentTypes/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ExpenseReport
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseReport[]>}
   */
  getExpenseReports(params = {}) {
    return this.request({
      path: `/expense/reports`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ExpenseReport
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseReport>}
   */
  getExpenseReportsById(id, params = {}) {
    return this.request({
      path: `/expense/reports/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @returns {Promise<SuccessResponse>}
   */
  postExpenseReportsByIdReverse(id) {
    return this.request({
      path: `/expense/reports/${id}/reverse`,
      method: 'post',
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @returns {Promise<SuccessResponse>}
   */
  postExpenseReportsByIdSubmit(id) {
    return this.request({
      path: `/expense/reports/${id}/submit`,
      method: 'post',
    })
  }
  /**
   * Get List of ExpenseReportAudit
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseReportAudit[]>}
   */
  getExpenseReportsByParentIdAudits(parentId, params = {}) {
    return this.request({
      path: `/expense/reports/${parentId}/audits`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ExpenseReportAudit
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseReportAudit>}
   */
  getExpenseReportsByParentIdAuditsById(id, parentId, params = {}) {
    return this.request({
      path: `/expense/reports/${parentId}/audits/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ExpenseReportAudit
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getExpenseReportsByParentIdAuditsCount(parentId, params = {}) {
    return this.request({
      path: `/expense/reports/${parentId}/audits/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ExpenseReport
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getExpenseReportsCount(params = {}) {
    return this.request({
      path: `/expense/reports/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ExpenseType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseType[]>}
   */
  getExpenseTypes(params = {}) {
    return this.request({
      path: `/expense/types`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ExpenseType
   * @param {ExpenseType} expenseType expenseType
   * @returns {Promise<ExpenseType>}
   */
  postExpenseTypes(expenseType) {
    return this.request({
      path: `/expense/types`,
      method: 'post',
      data: expenseType,
    })
  }
  /**
   * Get ExpenseType
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseType>}
   */
  getExpenseTypesById(id, params = {}) {
    return this.request({
      path: `/expense/types/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ExpenseType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteExpenseTypesById(id) {
    return this.request({
      path: `/expense/types/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ExpenseType
   * @param {number} id
   * @param {ExpenseType} expenseType expenseType
   * @returns {Promise<ExpenseType>}
   */
  putExpenseTypesById(id, expenseType) {
    return this.request({
      path: `/expense/types/${id}`,
      method: 'put',
      data: expenseType,
    })
  }

  /**
   * Patch ExpenseType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ExpenseType>}
   */
  patchExpenseTypesById(id, patchOperations) {
    return this.request({
      path: `/expense/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ExpenseTypeInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseTypeInfo>}
   */
  getExpenseTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/expense/types/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ExpenseType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getExpenseTypesCount(params = {}) {
    return this.request({
      path: `/expense/types/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ExpenseTypeInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseTypeInfo[]>}
   */
  getExpenseTypesInfo(params = {}) {
    return this.request({
      path: `/expense/types/info`,
      method: 'get',
      params,
    })
  }
}
