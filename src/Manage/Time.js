import Manage from './Manage.js'

/**
 * TimeAccrual
 * @typedef {object} TimeAccrual
 * @property {number} [id]  int32
 * @property {SystemLocationReference} [location]
 * @property {boolean} [vacationFlag] if vacationFlag is set to false, system will clear out or ingore the values of vacationAvailableType, vacationCarryoverAllowedFlag, vacationCarryoverLimit  nullable
 * @property {string} [vacationAvailableType]   nullable
 * @property {boolean} [vacationCarryoverAllowedFlag]   nullable
 * @property {number} [vacationCarryoverLimit]  double nullable
 * @property {boolean} [sickFlag] if sickFlag is set to false, system will clear out or ignore the values of sickAvailableType, sickCarryoverAllowedFlag, sickCarryoverLimit  nullable
 * @property {string} [sickAvailableType]   nullable
 * @property {boolean} [sickCarryoverAllowedFlag]   nullable
 * @property {number} [sickCarryoverLimit]  double nullable
 * @property {boolean} [ptoFlag] if ptoFlag is set to false, system will clear out or ignore the values of ptoAvailableType, ptoCarryoverAllowedFlag, ptoCarryoverLimit  nullable
 * @property {string} [ptoAvailableType]   nullable
 * @property {boolean} [ptoCarryoverAllowedFlag]   nullable
 * @property {number} [ptoCarryoverLimit]  double nullable
 * @property {boolean} [holidayFlag] if holidayFlag is set to false, system will clear out or ignore the values of holidayAvailableType, holidayCarryoverAllowedFlag, holidayCarryoverLimit  nullable
 * @property {string} [holidayAvailableType]   nullable
 * @property {boolean} [holidayCarryoverAllowedFlag]   nullable
 * @property {number} [holidayCarryoverLimit]  double nullable
 * @property {object} [_info]
 */

/**
 * TimeAccrualDetail
 * @typedef {object} TimeAccrualDetail
 * @property {number} [id]  int32
 * @property {string} accrualType Available types are: Holiday, PTO, Sick and Vacation.  nullable
 * @property {number} startYear  int32 nullable
 * @property {number} endYear  int32 nullable
 * @property {number} hours  double nullable
 * @property {TimeAccrualReference} [timeAccrual]
 * @property {object} [_info]
 */

/**
 * Count
 * @typedef {object} Count
 * @property {number} [count]  int32
 */

/**
 * ActivityStopwatch
 * @typedef {object} ActivityStopwatch
 * @property {object} [_info]
 * @property {number} activityId  int32 nullable
 * @property {string} [activityMobileGuid]  uuid nullable
 * @property {AgreementReference} [agreement]
 * @property {string} [billableOption]   nullable
 * @property {number} [businessUnitId]  int32 nullable
 * @property {string} [dateEntered]  date-time
 * @property {string} [endTime]  date-time
 * @property {number} [id]  int32
 * @property {string} [internalNotes]
 * @property {number} [locationId]  int32 nullable
 * @property {MemberReference} [member]
 * @property {string} [mobileGuid]  uuid nullable
 * @property {string} [notes]  Max length: 4000;
 * @property {string} [startTime]  date-time
 * @property {string} status   nullable
 * @property {number} [totalPauseTime]  int32 nullable
 * @property {WorkRoleReference} [workRole]
 * @property {WorkTypeReference} [workType]
 */

/**
 * ChargeCode
 * @typedef {object} ChargeCode
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {CompanyReference} [company]
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {string} [billTime]   nullable
 * @property {boolean} [expenseEntryFlag]   nullable
 * @property {boolean} [allowAllExpenseTypeFlag]   nullable
 * @property {boolean} [timeEntryFlag]   nullable
 * @property {WorkTypeReference} [workType]
 * @property {WorkRoleReference} [workRole]
 * @property {string} [integrationXref]  Max length: 50;
 * @property {array} [expenseTypeIds]
 * @property {object} [_info]
 */

/**
 * ChargeCodeInfo
 * @typedef {object} ChargeCodeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {boolean} [expenseEntryFlag]   nullable
 * @property {boolean} [allowAllExpenseTypeFlag]   nullable
 * @property {boolean} [timeEntryFlag]   nullable
 * @property {WorkTypeReference} [workType]
 * @property {WorkRoleReference} [workRole]
 * @property {array} [expenseTypeIds]
 * @property {object} [_info]
 */

/**
 * Usage
 * @typedef {object} Usage
 * @property {string} [type]
 * @property {number} [count]  int32 nullable
 * @property {number} [id]  int32 nullable
 * @property {string} [description]
 * @property {string} [hyperlink]
 * @property {string} [typeKey]
 */

/**
 * ChargeCodeExpenseType
 * @typedef {object} ChargeCodeExpenseType
 * @property {number} [id]  int32
 * @property {ExpenseTypeReference} [type]
 * @property {ChargeCodeReference} [chargeCode]
 * @property {object} [_info]
 */

/**
 * TimeEntry
 * @typedef {object} TimeEntry
 * @property {number} [id]  int32
 * @property {CompanyReference} [company]
 * @property {number} [chargeToId] If chargeToId is not specified, we asume you enter time against the company specified int32 nullable
 * @property {string} [chargeToType] If chargeToId is not specified, we asume you enter time against the company specified  nullable
 * @property {MemberReference} [member]
 * @property {number} [locationId]  int32 nullable
 * @property {number} [businessUnitId]  int32 nullable
 * @property {WorkTypeReference} [workType]
 * @property {WorkRoleReference} [workRole]
 * @property {AgreementReference} [agreement]
 * @property {string} timeStart  date-time
 * @property {string} [timeEnd]  date-time
 * @property {number} [hoursDeduct]  double nullable
 * @property {number} [actualHours]  double nullable
 * @property {string} [billableOption]  Required On Updates;  nullable
 * @property {string} [notes]
 * @property {string} [internalNotes]
 * @property {boolean} [addToDetailDescriptionFlag]   nullable
 * @property {boolean} [addToInternalAnalysisFlag]   nullable
 * @property {boolean} [addToResolutionFlag]   nullable
 * @property {boolean} [emailResourceFlag] This is an action flag. To update this value use the /service/tickets endpoint automaticEmailResourceFlag field  nullable
 * @property {boolean} [emailContactFlag] This is an action flag. To update this value use the /service/tickets endpoint automaticEmailContactFlag field  nullable
 * @property {boolean} [emailCcFlag] This is an action flag. To update this value use the /service/tickets endpoint automaticEmailCcFlag field  nullable
 * @property {string} [emailCc] To update this value use the /service/tickets endpoint automaticEmailCc field
 * @property {number} [hoursBilled]  double nullable
 * @property {number} [invoiceHours]  double nullable
 * @property {string} [enteredBy]
 * @property {string} [dateEntered]  date-time
 * @property {InvoiceReference} [invoice]
 * @property {string} [mobileGuid]  uuid nullable
 * @property {number} [hourlyRate] This field may only be Updated, it is defaulted on Create double nullable
 * @property {number} [overageRate]  double nullable
 * @property {number} [agreementHours]  double nullable
 * @property {number} [agreementAmount]  double nullable
 * @property {TimeSheetReference} [timeSheet]
 * @property {string} [status]   nullable
 * @property {TicketReference} [ticket]
 * @property {ProjectReference} [project]
 * @property {ProjectPhaseReference} [phase]
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * TimeEntryAudit
 * @typedef {object} TimeEntryAudit
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
 * ScheduleStopwatch
 * @typedef {object} ScheduleStopwatch
 * @property {object} [_info]
 * @property {AgreementReference} [agreement]
 * @property {string} [billableOption]   nullable
 * @property {number} [businessUnitId]  int32 nullable
 * @property {string} [dateEntered]  date-time
 * @property {string} [endTime]  date-time
 * @property {number} [id]  int32
 * @property {string} [internalNotes]
 * @property {number} [locationId]  int32 nullable
 * @property {MemberReference} [member]
 * @property {string} [mobileGuid]  uuid nullable
 * @property {string} [notes]  Max length: 4000;
 * @property {number} scheduleId  int32 nullable
 * @property {string} [scheduleMobileGuid]  uuid nullable
 * @property {string} [startTime]  date-time
 * @property {string} status   nullable
 * @property {number} [totalPauseTime]  int32 nullable
 * @property {WorkRoleReference} [workRole]
 * @property {WorkTypeReference} [workType]
 */

/**
 * TimeSheet
 * @typedef {object} TimeSheet
 * @property {number} [id]  int32
 * @property {MemberReference} [member]
 * @property {number} [year]  int32 nullable
 * @property {number} [period]  int32 nullable
 * @property {string} [dateStart]
 * @property {string} [dateEnd]
 * @property {string} [status]   nullable
 * @property {number} [hours]  double nullable
 * @property {string} [deadline]
 * @property {object} [_info]
 */

/**
 * SuccessResponse
 * @typedef {object} SuccessResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * TimeSheetAudit
 * @typedef {object} TimeSheetAudit
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
 * TicketStopwatch
 * @typedef {object} TicketStopwatch
 * @property {object} [_info]
 * @property {AgreementReference} [agreement]
 * @property {string} [billableOption]   nullable
 * @property {number} [businessUnitId]  int32 nullable
 * @property {string} [dateEntered]  date-time
 * @property {string} [endTime]  date-time
 * @property {number} [id]  int32
 * @property {string} [internalNotes]
 * @property {number} [locationId]  int32 nullable
 * @property {MemberReference} [member]
 * @property {string} [mobileGuid]  uuid nullable
 * @property {string} [notes]  Max length: 4000;
 * @property {ServiceStatusReference} [serviceStatus]
 * @property {string} [startTime]  date-time
 * @property {string} status   nullable
 * @property {TicketReference} [ticket]
 * @property {string} [ticketMobileGuid]  uuid nullable
 * @property {number} [totalPauseTime]  int32 nullable
 * @property {WorkRoleReference} [workRole]
 * @property {WorkTypeReference} [workType]
 * @property {boolean} [showNotesInDiscussionFlag]   nullable
 * @property {boolean} [showNotesInInternalFlag]   nullable
 * @property {boolean} [showNotesInResolutionFlag]   nullable
 * @property {boolean} [emailNotesToContactFlag]   nullable
 * @property {boolean} [emailNotesToResourcesFlag]   nullable
 */

/**
 * TimePeriodSetup
 * @typedef {object} TimePeriodSetup
 * @property {number} [id]  int32
 * @property {string} periodApplyTo   nullable
 * @property {number} year  int32 nullable
 * @property {number} numberFuturePeriods  int32 nullable
 * @property {string} type   nullable
 * @property {string} [description]  Max length: 100;
 * @property {string} firstPeriodEndDate  date
 * @property {number} [monthlyPeriodEnds] Only needed when type is monthly int32 nullable
 * @property {number} [semiMonthlyFirstPeriod] Only needed when type is semi-monthly int32 nullable
 * @property {number} [semiMonthlySecondPeriod] Only needed when type is semi-monthly int32 nullable
 * @property {boolean} [semiMonthlyLastDayFlag]   nullable
 * @property {boolean} [lastDayFlag] Only needed when type is monthly  nullable
 * @property {number} daysPastEndDate  int32 nullable
 * @property {object} [_info]
 */

/**
 * TimePeriod
 * @typedef {object} TimePeriod
 * @property {number} [id]  int32
 * @property {TimePeriodSetupReference} [timePeriodSetup]
 * @property {number} [period]  int32 nullable
 * @property {string} [startDate]
 * @property {string} [endDate]
 * @property {string} [deadlineDate]
 * @property {object} [_info]
 */

/**
 * TimePeriodSetupDefaults
 * @typedef {object} TimePeriodSetupDefaults
 
 */

/**
 * WorkRole
 * @typedef {object} WorkRole
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {number} [hourlyRate]  double nullable
 * @property {string} [integrationXref]  Max length: 50;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [addAllLocations]   nullable
 * @property {boolean} [removeAllLocations]   nullable
 * @property {boolean} [addAllAgreementExclusions] Used only on create to add the work role to all agreement and agreement type exclusion lists  nullable
 * @property {array} [locationIds]
 * @property {object} [_info]
 */

/**
 * WorkRoleInfo
 * @typedef {object} WorkRoleInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * WorkRoleLocation
 * @typedef {object} WorkRoleLocation
 * @property {number} [id]  int32
 * @property {SystemLocationReference} [location]
 * @property {number} [hourlyRate]  double nullable
 * @property {WorkRoleReference} [workRole]
 * @property {object} [_info]
 */

/**
 * WorkType
 * @typedef {object} WorkType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {string} billTime   nullable
 * @property {string} rateType   nullable
 * @property {number} rate  double nullable
 * @property {number} [hoursMin]  double nullable
 * @property {number} [hoursMax]  double nullable
 * @property {number} [roundBillHoursTo]  double nullable
 * @property {string} [accrualType]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [overallDefaultFlag]   nullable
 * @property {boolean} [activityDefaultFlag]   nullable
 * @property {boolean} [utilizationFlag]   nullable
 * @property {number} [costMultiplier]  double nullable
 * @property {string} [integrationXRef]  Max length: 50;
 * @property {boolean} [addAllAgreementExclusions] Used only on create to add the work type to all agreement and agreement type exclusion lists  nullable
 * @property {object} [_info]
 */

/**
 * WorkTypeInfo
 * @typedef {object} WorkTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [activityDefaultFlag]   nullable
 * @property {object} [_info]
 */

export default class Time extends Manage {
  constructor(props) {
    super(props)
  }

  /**
   * Get List of TimeAccrual
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TimeAccrual[]>}
   */
  getTimeAccruals(params = {}) {
    return this.request({
      path: `/time/accruals`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TimeAccrual
   * @param {TimeAccrual} timeAccrual timeAccrual
   * @returns {Promise<TimeAccrual>}
   */
  postTimeAccruals(timeAccrual) {
    return this.request({
      path: `/time/accruals`,
      method: 'post',
      data: timeAccrual,
    })
  }
  /**
   * Get TimeAccrual
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
   * @returns {Promise<TimeAccrual>}
   */
  getTimeAccrualsById(id, params = {}) {
    return this.request({
      path: `/time/accruals/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TimeAccrual
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteTimeAccrualsById(id) {
    return this.request({
      path: `/time/accruals/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put TimeAccrual
   * @param {number} id
   * @param {TimeAccrual} timeAccrual timeAccrual
   * @returns {Promise<TimeAccrual>}
   */
  putTimeAccrualsById(id, timeAccrual) {
    return this.request({
      path: `/time/accruals/${id}`,
      method: 'put',
      data: timeAccrual,
    })
  }

  /**
   * Patch TimeAccrual
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TimeAccrual>}
   */
  patchTimeAccrualsById(id, patchOperations) {
    return this.request({
      path: `/time/accruals/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of TimeAccrualDetail
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
   * @returns {Promise<TimeAccrualDetail[]>}
   */
  getTimeAccrualsByParentIdDetails(parentId, params = {}) {
    return this.request({
      path: `/time/accruals/${parentId}/details`,
      method: 'get',
      params,
    })
  }
  /**
   * Post TimeAccrualDetail
   * @param {number} parentId
   * @param {TimeAccrualDetail} timeAccrualDetail timeAccrualDetail
   * @returns {Promise<TimeAccrualDetail>}
   */
  postTimeAccrualsByParentIdDetails(parentId, timeAccrualDetail) {
    return this.request({
      path: `/time/accruals/${parentId}/details/`,
      method: 'post',
      data: timeAccrualDetail,
    })
  }
  /**
   * Get TimeAccrualDetail
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
   * @returns {Promise<TimeAccrualDetail>}
   */
  getTimeAccrualsByParentIdDetailsById(id, parentId, params = {}) {
    return this.request({
      path: `/time/accruals/${parentId}/details/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TimeAccrualDetail
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteTimeAccrualsByParentIdDetailsById(id, parentId) {
    return this.request({
      path: `/time/accruals/${parentId}/details/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put TimeAccrualDetail
   * @param {number} id
   * @param {number} parentId
   * @param {TimeAccrualDetail} timeAccrualDetail timeAccrualDetail
   * @returns {Promise<TimeAccrualDetail>}
   */
  putTimeAccrualsByParentIdDetailsById(id, parentId, timeAccrualDetail) {
    return this.request({
      path: `/time/accruals/${parentId}/details/{id}`,
      method: 'put',
      data: timeAccrualDetail,
    })
  }

  /**
   * Patch TimeAccrualDetail
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TimeAccrualDetail>}
   */
  patchTimeAccrualsByParentIdDetailsById(id, parentId, patchOperations) {
    return this.request({
      path: `/time/accruals/${parentId}/details/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of TimeAccrualDetail
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
  getTimeAccrualsByParentIdDetailsCount(parentId, params = {}) {
    return this.request({
      path: `/time/accruals/${parentId}/details/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TimeAccrual
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
  getTimeAccrualsCount(params = {}) {
    return this.request({
      path: `/time/accruals/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ActivityStopwatch
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ActivityStopwatch[]>}
   */
  getTimeActivitystopwatches(params = {}) {
    return this.request({
      path: `/time/activitystopwatches`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ActivityStopwatch
   * @param {ActivityStopwatch} activityStopwatch activityStopwatch
   * @returns {Promise<ActivityStopwatch>}
   */
  postTimeActivitystopwatches(activityStopwatch) {
    return this.request({
      path: `/time/activitystopwatches`,
      method: 'post',
      data: activityStopwatch,
    })
  }
  /**
   * Get ActivityStopwatch
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
   * @returns {Promise<ActivityStopwatch>}
   */
  getTimeActivitystopwatchesById(id, params = {}) {
    return this.request({
      path: `/time/activitystopwatches/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ActivityStopwatch
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteTimeActivitystopwatchesById(id) {
    return this.request({
      path: `/time/activitystopwatches/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ActivityStopwatch
   * @param {number} id
   * @param {ActivityStopwatch} activityStopwatch activityStopwatch
   * @returns {Promise<ActivityStopwatch>}
   */
  putTimeActivitystopwatchesById(id, activityStopwatch) {
    return this.request({
      path: `/time/activitystopwatches/${id}`,
      method: 'put',
      data: activityStopwatch,
    })
  }

  /**
   * Patch ActivityStopwatch
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ActivityStopwatch>}
   */
  patchTimeActivitystopwatchesById(id, patchOperations) {
    return this.request({
      path: `/time/activitystopwatches/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ActivityStopwatch
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
  getTimeActivitystopwatchesCount(params = {}) {
    return this.request({
      path: `/time/activitystopwatches/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ChargeCode
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ChargeCode[]>}
   */
  getTimeChargeCodes(params = {}) {
    return this.request({
      path: `/time/chargeCodes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ChargeCode
   * @param {ChargeCode} chargeCode chargeCode
   * @returns {Promise<ChargeCode>}
   */
  postTimeChargeCodes(chargeCode) {
    return this.request({
      path: `/time/chargeCodes`,
      method: 'post',
      data: chargeCode,
    })
  }
  /**
   * Get ChargeCode
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
   * @returns {Promise<ChargeCode>}
   */
  getTimeChargeCodesById(id, params = {}) {
    return this.request({
      path: `/time/chargeCodes/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ChargeCode
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteTimeChargeCodesById(id) {
    return this.request({
      path: `/time/chargeCodes/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ChargeCode
   * @param {number} id
   * @param {ChargeCode} chargeCode chargeCode
   * @returns {Promise<ChargeCode>}
   */
  putTimeChargeCodesById(id, chargeCode) {
    return this.request({
      path: `/time/chargeCodes/${id}`,
      method: 'put',
      data: chargeCode,
    })
  }

  /**
   * Patch ChargeCode
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ChargeCode>}
   */
  patchTimeChargeCodesById(id, patchOperations) {
    return this.request({
      path: `/time/chargeCodes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ChargeCodeInfo
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
   * @returns {Promise<ChargeCodeInfo>}
   */
  getTimeChargeCodesByIdInfo(id, params = {}) {
    return this.request({
      path: `/time/chargeCodes/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage Count
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
   * @returns {Promise<Usage[]>}
   */
  getTimeChargeCodesByIdUsages(id, params = {}) {
    return this.request({
      path: `/time/chargeCodes/${id}/usages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage
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
   * @returns {Promise<Usage[]>}
   */
  getTimeChargeCodesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/time/chargeCodes/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ChargeCodeExpenseType
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
   * @returns {Promise<ChargeCodeExpenseType[]>}
   */
  getTimeChargeCodesByParentIdExpenseTypes(parentId, params = {}) {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ChargeCodeExpenseType
   * @param {number} parentId
   * @param {ChargeCodeExpenseType} chargeCodeExpenseType chargeCodeExpenseType
   * @returns {Promise<ChargeCodeExpenseType>}
   */
  postTimeChargeCodesByParentIdExpenseTypes(parentId, chargeCodeExpenseType) {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes`,
      method: 'post',
      data: chargeCodeExpenseType,
    })
  }
  /**
   * Get ChargeCodeExpenseType
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
   * @returns {Promise<ChargeCodeExpenseType>}
   */
  getTimeChargeCodesByParentIdExpenseTypesById(id, parentId, params = {}) {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ChargeCodeExpenseType
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteTimeChargeCodesByParentIdExpenseTypesById(id, parentId) {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ChargeCodeExpenseType
   * @param {number} id
   * @param {number} parentId
   * @param {ChargeCodeExpenseType} chargeCodeExpenseType chargeCodeExpenseType
   * @returns {Promise<ChargeCodeExpenseType>}
   */
  putTimeChargeCodesByParentIdExpenseTypesById(id, parentId, chargeCodeExpenseType) {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/{id}`,
      method: 'put',
      data: chargeCodeExpenseType,
    })
  }

  /**
   * Patch ChargeCodeExpenseType
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ChargeCodeExpenseType>}
   */
  patchTimeChargeCodesByParentIdExpenseTypesById(id, parentId, patchOperations) {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ChargeCodeExpenseType
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
  getTimeChargeCodesByParentIdExpenseTypesCount(parentId, params = {}) {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ChargeCode
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
  getTimeChargeCodesCount(params = {}) {
    return this.request({
      path: `/time/chargeCodes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ChargeCodeInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ChargeCodeInfo[]>}
   */
  getTimeChargeCodesInfo(params = {}) {
    return this.request({
      path: `/time/chargeCodes/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ChargeCodeInfo
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
  getTimeChargeCodesInfoCount(params = {}) {
    return this.request({
      path: `/time/chargeCodes/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TimeEntry
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TimeEntry[]>}
   */
  getTimeEntries(params = {}) {
    return this.request({
      path: `/time/entries`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TimeEntry
   * @param {TimeEntry} timeEntry timeEntry
   * @returns {Promise<TimeEntry>}
   */
  postTimeEntries(timeEntry) {
    return this.request({
      path: `/time/entries`,
      method: 'post',
      data: timeEntry,
    })
  }
  /**
   * Get TimeEntry
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
   * @returns {Promise<TimeEntry>}
   */
  getTimeEntriesById(id, params = {}) {
    return this.request({
      path: `/time/entries/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TimeEntry
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteTimeEntriesById(id) {
    return this.request({
      path: `/time/entries/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put TimeEntry
   * @param {number} id
   * @param {TimeEntry} timeEntry timeEntry
   * @returns {Promise<TimeEntry>}
   */
  putTimeEntriesById(id, timeEntry) {
    return this.request({
      path: `/time/entries/${id}`,
      method: 'put',
      data: timeEntry,
    })
  }

  /**
   * Patch TimeEntry
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TimeEntry>}
   */
  patchTimeEntriesById(id, patchOperations) {
    return this.request({
      path: `/time/entries/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of TimeEntryAudit
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
   * @returns {Promise<TimeEntryAudit[]>}
   */
  getTimeEntriesByParentIdAudits(parentId, params = {}) {
    return this.request({
      path: `/time/entries/${parentId}/audits`,
      method: 'get',
      params,
    })
  }
  /**
   * Get TimeEntryAudit
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
   * @returns {Promise<TimeEntryAudit>}
   */
  getTimeEntriesByParentIdAuditsById(id, parentId, params = {}) {
    return this.request({
      path: `/time/entries/${parentId}/audits/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TimeEntryAudit
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
  getTimeEntriesByParentIdAuditsCount(parentId, params = {}) {
    return this.request({
      path: `/time/entries/${parentId}/audits/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TimeEntry
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
  getTimeEntriesCount(params = {}) {
    return this.request({
      path: `/time/entries/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post TimeEntry
   * @param {TimeEntry} timeEntry timeEntry
   * @returns {Promise<TimeEntry>}
   */
  postTimeEntriesDefaults(timeEntry) {
    return this.request({
      path: `/time/entries/defaults`,
      method: 'post',
      data: timeEntry,
    })
  }
  /**
   * Get List of ChargeCodeExpenseType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ChargeCodeExpenseType[]>}
   */
  getTimeInfoChargeCodeExpenseTypes(params = {}) {
    return this.request({
      path: `/time/info/chargeCodeExpenseTypes`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ChargeCodeExpenseType
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
  getTimeInfoChargeCodeExpenseTypesCount(params = {}) {
    return this.request({
      path: `/time/info/chargeCodeExpenseTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ScheduleStopwatch
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ScheduleStopwatch[]>}
   */
  getTimeSchedulestopwatches(params = {}) {
    return this.request({
      path: `/time/schedulestopwatches`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ScheduleStopwatch
   * @param {ScheduleStopwatch} scheduleStopwatch scheduleStopwatch
   * @returns {Promise<ScheduleStopwatch>}
   */
  postTimeSchedulestopwatches(scheduleStopwatch) {
    return this.request({
      path: `/time/schedulestopwatches`,
      method: 'post',
      data: scheduleStopwatch,
    })
  }
  /**
   * Get ScheduleStopwatch
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
   * @returns {Promise<ScheduleStopwatch>}
   */
  getTimeSchedulestopwatchesById(id, params = {}) {
    return this.request({
      path: `/time/schedulestopwatches/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ScheduleStopwatch
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteTimeSchedulestopwatchesById(id) {
    return this.request({
      path: `/time/schedulestopwatches/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ScheduleStopwatch
   * @param {number} id
   * @param {ScheduleStopwatch} scheduleStopwatch scheduleStopwatch
   * @returns {Promise<ScheduleStopwatch>}
   */
  putTimeSchedulestopwatchesById(id, scheduleStopwatch) {
    return this.request({
      path: `/time/schedulestopwatches/${id}`,
      method: 'put',
      data: scheduleStopwatch,
    })
  }

  /**
   * Patch ScheduleStopwatch
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ScheduleStopwatch>}
   */
  patchTimeSchedulestopwatchesById(id, patchOperations) {
    return this.request({
      path: `/time/schedulestopwatches/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ScheduleStopwatch
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
  getTimeSchedulestopwatchesCount(params = {}) {
    return this.request({
      path: `/time/schedulestopwatches/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TimeSheet
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TimeSheet[]>}
   */
  getTimeSheets(params = {}) {
    return this.request({
      path: `/time/sheets`,
      method: 'get',
      params,
    })
  }
  /**
   * Get TimeSheet
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
   * @returns {Promise<TimeSheet>}
   */
  getTimeSheetsById(id, params = {}) {
    return this.request({
      path: `/time/sheets/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @param {TimeSheetTierUpdate} sheetId sheetId
   * @returns {Promise<SuccessResponse>}
   */
  postTimeSheetsByIdApprove(id, sheetId) {
    return this.request({
      path: `/time/sheets/${id}/approve`,
      method: 'post',
      data: sheetId,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @returns {Promise<SuccessResponse>}
   */
  postTimeSheetsByIdReject(id) {
    return this.request({
      path: `/time/sheets/${id}/reject`,
      method: 'post',
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @returns {Promise<SuccessResponse>}
   */
  postTimeSheetsByIdReverse(id) {
    return this.request({
      path: `/time/sheets/${id}/reverse`,
      method: 'post',
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @returns {Promise<SuccessResponse>}
   */
  postTimeSheetsByIdSubmit(id) {
    return this.request({
      path: `/time/sheets/${id}/submit`,
      method: 'post',
    })
  }
  /**
   * Get List of TimeSheetAudit
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
   * @returns {Promise<TimeSheetAudit[]>}
   */
  getTimeSheetsByParentIdAudits(parentId, params = {}) {
    return this.request({
      path: `/time/sheets/${parentId}/audits`,
      method: 'get',
      params,
    })
  }
  /**
   * Get TimeSheetAudit
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
   * @returns {Promise<TimeSheetAudit>}
   */
  getTimeSheetsByParentIdAuditsById(id, parentId, params = {}) {
    return this.request({
      path: `/time/sheets/${parentId}/audits/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TimeSheetAudit
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
  getTimeSheetsByParentIdAuditsCount(parentId, params = {}) {
    return this.request({
      path: `/time/sheets/${parentId}/audits/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TimeSheet
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
  getTimeSheetsCount(params = {}) {
    return this.request({
      path: `/time/sheets/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TicketStopwatch
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TicketStopwatch[]>}
   */
  getTimeTicketstopwatches(params = {}) {
    return this.request({
      path: `/time/ticketstopwatches`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TicketStopwatch
   * @param {TicketStopwatch} ticketStopwatch ticketStopwatch
   * @returns {Promise<TicketStopwatch>}
   */
  postTimeTicketstopwatches(ticketStopwatch) {
    return this.request({
      path: `/time/ticketstopwatches`,
      method: 'post',
      data: ticketStopwatch,
    })
  }
  /**
   * Get TicketStopwatch
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
   * @returns {Promise<TicketStopwatch>}
   */
  getTimeTicketstopwatchesById(id, params = {}) {
    return this.request({
      path: `/time/ticketstopwatches/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TicketStopwatch
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteTimeTicketstopwatchesById(id) {
    return this.request({
      path: `/time/ticketstopwatches/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put TicketStopwatch
   * @param {number} id
   * @param {TicketStopwatch} ticketStopwatch ticketStopwatch
   * @returns {Promise<TicketStopwatch>}
   */
  putTimeTicketstopwatchesById(id, ticketStopwatch) {
    return this.request({
      path: `/time/ticketstopwatches/${id}`,
      method: 'put',
      data: ticketStopwatch,
    })
  }

  /**
   * Patch TicketStopwatch
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TicketStopwatch>}
   */
  patchTimeTicketstopwatchesById(id, patchOperations) {
    return this.request({
      path: `/time/ticketstopwatches/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of TicketStopwatch
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
  getTimeTicketstopwatchesCount(params = {}) {
    return this.request({
      path: `/time/ticketstopwatches/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TimePeriodSetup
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TimePeriodSetup[]>}
   */
  getTimeTimePeriodSetups(params = {}) {
    return this.request({
      path: `/time/timePeriodSetups`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TimePeriodSetup
   * @param {TimePeriodSetup} timePeriodSetup timePeriodSetup
   * @returns {Promise<TimePeriodSetup>}
   */
  postTimeTimePeriodSetups(timePeriodSetup) {
    return this.request({
      path: `/time/timePeriodSetups`,
      method: 'post',
      data: timePeriodSetup,
    })
  }
  /**
   * Get TimePeriodSetup
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
   * @returns {Promise<TimePeriodSetup>}
   */
  getTimeTimePeriodSetupsById(id, params = {}) {
    return this.request({
      path: `/time/timePeriodSetups/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TimePeriodSetup
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteTimeTimePeriodSetupsById(id) {
    return this.request({
      path: `/time/timePeriodSetups/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put TimePeriodSetup
   * @param {number} id
   * @param {TimePeriodSetup} timePeriodSetup timePeriodSetup
   * @returns {Promise<TimePeriodSetup>}
   */
  putTimeTimePeriodSetupsById(id, timePeriodSetup) {
    return this.request({
      path: `/time/timePeriodSetups/${id}`,
      method: 'put',
      data: timePeriodSetup,
    })
  }

  /**
   * Patch TimePeriodSetup
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TimePeriodSetup>}
   */
  patchTimeTimePeriodSetupsById(id, patchOperations) {
    return this.request({
      path: `/time/timePeriodSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of TimePeriod
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
   * @returns {Promise<TimePeriod[]>}
   */
  getTimeTimePeriodSetupsByParentIdPeriods(parentId, params = {}) {
    return this.request({
      path: `/time/timePeriodSetups/${parentId}/periods`,
      method: 'get',
      params,
    })
  }
  /**
   * Get TimePeriod
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
   * @returns {Promise<TimePeriod>}
   */
  getTimeTimePeriodSetupsByParentIdPeriodsById(id, parentId, params = {}) {
    return this.request({
      path: `/time/timePeriodSetups/${parentId}/periods/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TimePeriod
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
  getTimeTimePeriodSetupsByParentIdPeriodsCount(parentId, params = {}) {
    return this.request({
      path: `/time/timePeriodSetups/${parentId}/periods/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TimePeriodSetup
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
  getTimeTimePeriodSetupsCount(params = {}) {
    return this.request({
      path: `/time/timePeriodSetups/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get TimePeriodSetupDefaults
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TimePeriodSetupDefaults>}
   */
  getTimeTimePeriodSetupsDefault(params = {}) {
    return this.request({
      path: `/time/timePeriodSetups/default`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WorkRole
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<WorkRole[]>}
   */
  getTimeWorkRoles(params = {}) {
    return this.request({
      path: `/time/workRoles`,
      method: 'get',
      params,
    })
  }

  /**
   * Post WorkRole
   * @param {WorkRole} workRole workRole
   * @returns {Promise<WorkRole>}
   */
  postTimeWorkRoles(workRole) {
    return this.request({
      path: `/time/workRoles`,
      method: 'post',
      data: workRole,
    })
  }
  /**
   * Get WorkRole
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
   * @returns {Promise<WorkRole>}
   */
  getTimeWorkRolesById(id, params = {}) {
    return this.request({
      path: `/time/workRoles/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Usage
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteTimeWorkRolesById(id) {
    return this.request({
      path: `/time/workRoles/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put WorkRole
   * @param {number} id
   * @param {WorkRole} workRole workRole
   * @returns {Promise<WorkRole>}
   */
  putTimeWorkRolesById(id, workRole) {
    return this.request({
      path: `/time/workRoles/${id}`,
      method: 'put',
      data: workRole,
    })
  }

  /**
   * Patch WorkRole
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<WorkRole>}
   */
  patchTimeWorkRolesById(id, patchOperations) {
    return this.request({
      path: `/time/workRoles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get WorkRoleInfo
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
   * @returns {Promise<WorkRoleInfo>}
   */
  getTimeWorkRolesByIdInfo(id, params = {}) {
    return this.request({
      path: `/time/workRoles/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage Count
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
   * @returns {Promise<Usage[]>}
   */
  getTimeWorkRolesByIdUsages(id, params = {}) {
    return this.request({
      path: `/time/workRoles/${id}/usages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage
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
   * @returns {Promise<Usage[]>}
   */
  getTimeWorkRolesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/time/workRoles/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WorkRoleLocation
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
   * @returns {Promise<WorkRoleLocation[]>}
   */
  getTimeWorkRolesByParentIdLocations(parentId, params = {}) {
    return this.request({
      path: `/time/workRoles/${parentId}/locations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post WorkRoleLocation
   * @param {number} parentId
   * @param {WorkRoleLocation} workRoleLocation workRoleLocation
   * @returns {Promise<WorkRoleLocation>}
   */
  postTimeWorkRolesByParentIdLocations(parentId, workRoleLocation) {
    return this.request({
      path: `/time/workRoles/${parentId}/locations`,
      method: 'post',
      data: workRoleLocation,
    })
  }
  /**
   * Get WorkRoleLocation
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
   * @returns {Promise<WorkRoleLocation>}
   */
  getTimeWorkRolesByParentIdLocationsById(id, parentId, params = {}) {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete WorkRoleLocation
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteTimeWorkRolesByParentIdLocationsById(id, parentId) {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put WorkRoleLocation
   * @param {number} id
   * @param {number} parentId
   * @param {WorkRoleLocation} workRoleLocation workRoleLocation
   * @returns {Promise<WorkRoleLocation>}
   */
  putTimeWorkRolesByParentIdLocationsById(id, parentId, workRoleLocation) {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/{id}`,
      method: 'put',
      data: workRoleLocation,
    })
  }

  /**
   * Patch WorkRoleLocation
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<WorkRoleLocation>}
   */
  patchTimeWorkRolesByParentIdLocationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of WorkRoleLocation
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
  getTimeWorkRolesByParentIdLocationsCount(parentId, params = {}) {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of WorkRole
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
  getTimeWorkRolesCount(params = {}) {
    return this.request({
      path: `/time/workRoles/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WorkRoleInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<WorkRoleInfo[]>}
   */
  getTimeWorkRolesInfo(params = {}) {
    return this.request({
      path: `/time/workRoles/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of WorkRoleInfo
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
  getTimeWorkRolesInfoCount(params = {}) {
    return this.request({
      path: `/time/workRoles/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WorkType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<WorkType[]>}
   */
  getTimeWorkTypes(params = {}) {
    return this.request({
      path: `/time/workTypes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post WorkType
   * @param {WorkType} workType workType
   * @returns {Promise<WorkType>}
   */
  postTimeWorkTypes(workType) {
    return this.request({
      path: `/time/workTypes`,
      method: 'post',
      data: workType,
    })
  }
  /**
   * Get WorkType
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
   * @returns {Promise<WorkType>}
   */
  getTimeWorkTypesById(id, params = {}) {
    return this.request({
      path: `/time/workTypes/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete WorkType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteTimeWorkTypesById(id) {
    return this.request({
      path: `/time/workTypes/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put WorkType
   * @param {number} id
   * @param {WorkType} workType workType
   * @returns {Promise<WorkType>}
   */
  putTimeWorkTypesById(id, workType) {
    return this.request({
      path: `/time/workTypes/${id}`,
      method: 'put',
      data: workType,
    })
  }

  /**
   * Patch WorkType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<WorkType>}
   */
  patchTimeWorkTypesById(id, patchOperations) {
    return this.request({
      path: `/time/workTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get WorkTypeInfos
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
   * @returns {Promise<WorkTypeInfo>}
   */
  getTimeWorkTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/time/workTypes/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage Count
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
   * @returns {Promise<Usage[]>}
   */
  getTimeWorkTypesByIdUsages(id, params = {}) {
    return this.request({
      path: `/time/workTypes/${id}/usages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage
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
   * @returns {Promise<Usage[]>}
   */
  getTimeWorkTypesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/time/workTypes/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of WorkType
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
  getTimeWorkTypesCount(params = {}) {
    return this.request({
      path: `/time/workTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WorkTypeInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<WorkTypeInfo[]>}
   */
  getTimeWorkTypesInfo(params = {}) {
    return this.request({
      path: `/time/workTypes/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of WorkTypeInfos
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
  getTimeWorkTypesInfoCount(params = {}) {
    return this.request({
      path: `/time/workTypes/info/count`,
      method: 'get',
      params,
    })
  }
}
