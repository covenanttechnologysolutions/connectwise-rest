import Manage from './Manage.js'

/**
 * Calendar
 * @typedef {object} Calendar
 * @property {number} [id]  int32
 * @property {string} name
 * @property {HolidayListReference} [holidayList]
 * @property {string} [mondayStartTime]
 * @property {string} [mondayEndTime]
 * @property {string} [tuesdayStartTime]
 * @property {string} [tuesdayEndTime]
 * @property {string} [wednesdayStartTime]
 * @property {string} [wednesdayEndTime]
 * @property {string} [thursdayStartTime]
 * @property {string} [thursdayEndTime]
 * @property {string} [fridayStartTime]
 * @property {string} [fridayEndTime]
 * @property {string} [saturdayStartTime]
 * @property {string} [saturdayEndTime]
 * @property {string} [sundayStartTime]
 * @property {string} [sundayEndTime]
 * @property {object} [_info]
 */

/**
 * CalendarInfo
 * @typedef {object} CalendarInfo
 * @property {number} [id]  int32
 * @property {string} [name]
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
 * ScheduleColor
 * @typedef {object} ScheduleColor
 * @property {number} [id]  int32
 * @property {number} [startPercent] A startPercent (0 or higher) is required if endPercent has value int32 nullable
 * @property {number} [endPercent] A endPercent is required if startPercent has value int32 nullable
 * @property {string} color Must be a valid Hexadecimal Color Code
 * @property {object} [_info]
 */

/**
 * Count
 * @typedef {object} Count
 * @property {number} [count]  int32
 */

/**
 * ScheduleEntryDetail
 * @typedef {object} ScheduleEntryDetail
 * @property {number} [id]  int32
 * @property {ScheduleEntryReference} [scheduleEntry]
 * @property {string} [dateStart]
 * @property {string} [dateEnd]
 * @property {number} [hoursScheduled]  double
 * @property {object} [_info]
 */

/**
 * ScheduleEntry
 * @typedef {object} ScheduleEntry
 * @property {number} [id]  int32
 * @property {number} [objectId]  int32 nullable
 * @property {string} [name]  Max length: 250;
 * @property {MemberReference} [member]
 * @property {ServiceLocationReference} [where]
 * @property {string} [dateStart]  date-time
 * @property {string} [dateEnd]  date-time
 * @property {ReminderReference} [reminder]
 * @property {ScheduleStatusReference} [status]
 * @property {ScheduleTypeReference} [type]
 * @property {ScheduleSpanReference} [span]
 * @property {boolean} [doneFlag]   nullable
 * @property {boolean} [acknowledgedFlag]   nullable
 * @property {boolean} [ownerFlag]   nullable
 * @property {boolean} [meetingFlag]   nullable
 * @property {boolean} [allowScheduleConflictsFlag]   nullable
 * @property {boolean} [addMemberToProjectFlag]   nullable
 * @property {number} [projectRoleId]  int32 nullable
 * @property {string} [mobileGuid]  uuid nullable
 * @property {string} [acknowledgedDate]  date-time
 * @property {string} [closeDate]  date-time
 * @property {number} [hours]  double nullable
 * @property {object} [_info]
 */

/**
 * ScheduleDetail
 * @typedef {object} ScheduleDetail
 * @property {number} [id]  int32
 * @property {ScheduleEntryReference} [scheduleEntry]
 * @property {string} [dateStart]
 * @property {string} [dateEnd]
 * @property {MemberReference} [member]
 * @property {object} [_info]
 */

/**
 * HolidayList
 * @typedef {object} HolidayList
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {object} [_info]
 */

/**
 * HolidayListInfo
 * @typedef {object} HolidayListInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * Holiday
 * @typedef {object} Holiday
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [allDayFlag] Can be set to false to set a holiday for specific hours (Defaults to True)  nullable
 * @property {string} date  date
 * @property {string} [timeStart]
 * @property {string} [timeEnd]
 * @property {HolidayListReference} [holidayList]
 * @property {object} [_info]
 */

/**
 * PortalCalendar
 * @typedef {object} PortalCalendar
 * @property {number} [id]  int32
 * @property {string} weekStart   nullable
 * @property {string} [adjust1Start]
 * @property {string} [adjust1End]
 * @property {number} [adjust1Hours]  double nullable
 * @property {string} [adjust2Start]
 * @property {string} [adjust2End]
 * @property {number} [adjust2Hours]  double nullable
 * @property {string} [adjust3Start]
 * @property {string} [adjust3End]
 * @property {number} [adjust3Hours]  double nullable
 * @property {object} [_info]
 */

/**
 * ScheduleReminderTime
 * @typedef {object} ScheduleReminderTime
 * @property {number} [id]  int32
 * @property {number} [time] Time is calculated in minutes int32 nullable
 * @property {string} [name]  Max length: 10;
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ScheduleStatus
 * @typedef {object} ScheduleStatus
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [showAsTentativeFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ScheduleType
 * @typedef {object} ScheduleType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {string} identifier  Max length: 1;
 * @property {ChargeCodeReference} [chargeCode]
 * @property {ServiceLocationReference} [where]
 * @property {boolean} [systemFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ScheduleTypeInfo
 * @typedef {object} ScheduleTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} [identifier]
 * @property {ChargeCodeReference} [chargeCode]
 * @property {ServiceLocationReference} [where]
 * @property {boolean} [systemFlag]   nullable
 * @property {object} [_info]
 */

export default class Schedule extends Manage {
  constructor(props) {
    super(props)
  }

  /**
   * Get List of Calendar
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Calendar[]>}
   */
  getScheduleCalendars(params = {}) {
    return this.request({
      path: `/schedule/calendars`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Calendar
   * @param {Calendar} calendar calendar
   * @returns {Promise<Calendar>}
   */
  postScheduleCalendars(calendar) {
    return this.request({
      path: `/schedule/calendars`,
      method: 'post',
      data: calendar,
    })
  }
  /**
   * Get Calendar
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
   * @returns {Promise<Calendar>}
   */
  getScheduleCalendarsById(id, params = {}) {
    return this.request({
      path: `/schedule/calendars/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Patch Calendar
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Calendar>}
   */
  patchScheduleCalendarsById(id, patchOperations) {
    return this.request({
      path: `/schedule/calendars/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  /**
   * Put Calendar
   * @param {number} id
   * @param {Calendar} calendar calendar
   * @returns {Promise<Calendar>}
   */
  putScheduleCalendarsById(id, calendar) {
    return this.request({
      path: `/schedule/calendars/${id}`,
      method: 'put',
      data: calendar,
    })
  }

  /**
   * Delete Calendar
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteScheduleCalendarsById(id) {
    return this.request({
      path: `/schedule/calendars/${id}`,
      method: 'delete',
    })
  }
  /**
   * Post Calendar
   * @param {number} id
   * @returns {Promise<Calendar>}
   */
  postScheduleCalendarsByIdCopy(id) {
    return this.request({
      path: `/schedule/calendars/${id}/copy`,
      method: 'post',
    })
  }
  /**
   * Get CalendarInfos
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
   * @returns {Promise<CalendarInfo>}
   */
  getScheduleCalendarsByIdInfo(id, params = {}) {
    return this.request({
      path: `/schedule/calendars/${id}/info`,
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
  getScheduleCalendarsByIdUsages(id, params = {}) {
    return this.request({
      path: `/schedule/calendars/${id}/usages`,
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
  getScheduleCalendarsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/schedule/calendars/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Calendar
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Calendar>}
   */
  getScheduleCalendarsCount(params = {}) {
    return this.request({
      path: `/schedule/calendars/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CalendarInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CalendarInfo[]>}
   */
  getScheduleCalendarsInfo(params = {}) {
    return this.request({
      path: `/schedule/calendars/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get CalendarInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CalendarInfo>}
   */
  getScheduleCalendarsInfoCount(params = {}) {
    return this.request({
      path: `/schedule/calendars/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ScheduleColor
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ScheduleColor[]>}
   */
  getScheduleColors(params = {}) {
    return this.request({
      path: `/schedule/colors`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ScheduleColor
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
   * @returns {Promise<ScheduleColor>}
   */
  getScheduleColorsById(id, params = {}) {
    return this.request({
      path: `/schedule/colors/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put ScheduleColor
   * @param {number} id
   * @param {ScheduleColor} scheduleColor scheduleColor
   * @returns {Promise<ScheduleColor>}
   */
  putScheduleColorsById(id, scheduleColor) {
    return this.request({
      path: `/schedule/colors/${id}`,
      method: 'put',
      data: scheduleColor,
    })
  }

  /**
   * Patch ScheduleColor
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ScheduleColor>}
   */
  patchScheduleColorsById(id, patchOperations) {
    return this.request({
      path: `/schedule/colors/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post ScheduleColor
   * @param {number} id
   * @returns {Promise<ScheduleColor>}
   */
  postScheduleColorsByIdClear(id) {
    return this.request({
      path: `/schedule/colors/${id}/clear`,
      method: 'post',
    })
  }
  /**
   * Get Count of ScheduleColor
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
  getScheduleColorsCount(params = {}) {
    return this.request({
      path: `/schedule/colors/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post List of ScheduleColor
   
   * @returns {Promise<ScheduleColor[]>}
   */
  postScheduleColorsReset() {
    return this.request({
      path: `/schedule/colors/reset`,
      method: 'post',
    })
  }
  /**
   * Get List of ScheduleEntryDetail
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ScheduleEntryDetail[]>}
   */
  getScheduleDetails(params = {}) {
    return this.request({
      path: `/schedule/details`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ScheduleEntryDetail
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
   * @returns {Promise<ScheduleEntryDetail>}
   */
  getScheduleDetailsById(id, params = {}) {
    return this.request({
      path: `/schedule/details/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ScheduleEntryDetail
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
  getScheduleDetailsCount(params = {}) {
    return this.request({
      path: `/schedule/details/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ScheduleEntry
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ScheduleEntry[]>}
   */
  getScheduleEntries(params = {}) {
    return this.request({
      path: `/schedule/entries`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ScheduleEntry
   * @param {ScheduleEntry} scheduleEntry scheduleEntry
   * @returns {Promise<ScheduleEntry>}
   */
  postScheduleEntries(scheduleEntry) {
    return this.request({
      path: `/schedule/entries`,
      method: 'post',
      data: scheduleEntry,
    })
  }
  /**
   * Get ScheduleEntry
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
   * @returns {Promise<ScheduleEntry>}
   */
  getScheduleEntriesById(id, params = {}) {
    return this.request({
      path: `/schedule/entries/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ScheduleEntry
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteScheduleEntriesById(id) {
    return this.request({
      path: `/schedule/entries/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ScheduleEntry
   * @param {number} id
   * @param {ScheduleEntry} scheduleEntry scheduleEntry
   * @returns {Promise<ScheduleEntry>}
   */
  putScheduleEntriesById(id, scheduleEntry) {
    return this.request({
      path: `/schedule/entries/${id}`,
      method: 'put',
      data: scheduleEntry,
    })
  }

  /**
   * Patch ScheduleEntry
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ScheduleEntry>}
   */
  patchScheduleEntriesById(id, patchOperations) {
    return this.request({
      path: `/schedule/entries/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of ScheduleDetail
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
   * @returns {Promise<ScheduleDetail[]>}
   */
  getScheduleEntriesByParentIdDetails(parentId, params = {}) {
    return this.request({
      path: `/schedule/entries/${parentId}/details`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ScheduleDetail
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
   * @returns {Promise<ScheduleDetail>}
   */
  getScheduleEntriesByParentIdDetailsById(id, parentId, params = {}) {
    return this.request({
      path: `/schedule/entries/${parentId}/details/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ScheduleDetail
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
  getScheduleEntriesByParentIdDetailsCount(parentId, params = {}) {
    return this.request({
      path: `/schedule/entries/${parentId}/details/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ScheduleEntry
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
  getScheduleEntriesCount(params = {}) {
    return this.request({
      path: `/schedule/entries/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of HolidayList
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<HolidayList[]>}
   */
  getScheduleHolidayLists(params = {}) {
    return this.request({
      path: `/schedule/holidayLists`,
      method: 'get',
      params,
    })
  }

  /**
   * Post HolidayList
   * @param {HolidayList} holidayList holidayList
   * @returns {Promise<HolidayList>}
   */
  postScheduleHolidayLists(holidayList) {
    return this.request({
      path: `/schedule/holidayLists`,
      method: 'post',
      data: holidayList,
    })
  }
  /**
   * Get HolidayList
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
   * @returns {Promise<HolidayList>}
   */
  getScheduleHolidayListsById(id, params = {}) {
    return this.request({
      path: `/schedule/holidayLists/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete HolidayList
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteScheduleHolidayListsById(id) {
    return this.request({
      path: `/schedule/holidayLists/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put HolidayList
   * @param {number} id
   * @param {HolidayList} holidayList holidayList
   * @returns {Promise<HolidayList>}
   */
  putScheduleHolidayListsById(id, holidayList) {
    return this.request({
      path: `/schedule/holidayLists/${id}`,
      method: 'put',
      data: holidayList,
    })
  }

  /**
   * Patch HolidayList
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<HolidayList>}
   */
  patchScheduleHolidayListsById(id, patchOperations) {
    return this.request({
      path: `/schedule/holidayLists/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get HolidayListInfos
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
   * @returns {Promise<HolidayListInfo>}
   */
  getScheduleHolidaylistsByIdInfo(id, params = {}) {
    return this.request({
      path: `/schedule/holidaylists/${id}/info`,
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
  getScheduleHolidayListsByIdUsages(id, params = {}) {
    return this.request({
      path: `/schedule/holidayLists/${id}/usages`,
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
  getScheduleHolidayListsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/schedule/holidayLists/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Holiday
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
   * @returns {Promise<Holiday[]>}
   */
  getScheduleHolidayListsByParentIdHolidays(parentId, params = {}) {
    return this.request({
      path: `/schedule/holidayLists/${parentId}/holidays`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Holiday
   * @param {number} parentId
   * @param {Holiday} holiday holiday
   * @returns {Promise<Holiday>}
   */
  postScheduleHolidayListsByParentIdHolidays(parentId, holiday) {
    return this.request({
      path: `/schedule/holidayLists/${parentId}/holidays`,
      method: 'post',
      data: holiday,
    })
  }
  /**
   * Get Holiday
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
   * @returns {Promise<Holiday>}
   */
  getScheduleHolidayListsByParentIdHolidaysById(id, parentId, params = {}) {
    return this.request({
      path: `/schedule/holidayLists/${parentId}/holidays/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Holiday
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteScheduleHolidayListsByParentIdHolidaysById(id, parentId) {
    return this.request({
      path: `/schedule/holidayLists/${parentId}/holidays/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put Holiday
   * @param {number} id
   * @param {number} parentId
   * @param {Holiday} holiday holiday
   * @returns {Promise<Holiday>}
   */
  putScheduleHolidayListsByParentIdHolidaysById(id, parentId, holiday) {
    return this.request({
      path: `/schedule/holidayLists/${parentId}/holidays/{id}`,
      method: 'put',
      data: holiday,
    })
  }

  /**
   * Patch Holiday
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Holiday>}
   */
  patchScheduleHolidayListsByParentIdHolidaysById(id, parentId, patchOperations) {
    return this.request({
      path: `/schedule/holidayLists/${parentId}/holidays/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of Holiday
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
  getScheduleHolidayListsByParentIdHolidaysCount(parentId, params = {}) {
    return this.request({
      path: `/schedule/holidayLists/${parentId}/holidays/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post HolidayList
   * @param {HolidayList} copy copy
   * @returns {Promise<HolidayList>}
   */
  postScheduleHolidayListsCopy(copy) {
    return this.request({
      path: `/schedule/holidayLists/copy`,
      method: 'post',
      data: copy,
    })
  }
  /**
   * Get Count of Usage
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
  getScheduleHolidayListsCount(params = {}) {
    return this.request({
      path: `/schedule/holidayLists/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of HolidayListInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<HolidayListInfo[]>}
   */
  getScheduleHolidaylistsInfo(params = {}) {
    return this.request({
      path: `/schedule/holidaylists/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PortalCalendar
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PortalCalendar[]>}
   */
  getSchedulePortalcalendars(params = {}) {
    return this.request({
      path: `/schedule/portalcalendars`,
      method: 'get',
      params,
    })
  }
  /**
   * Get PortalCalendar
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
   * @returns {Promise<PortalCalendar>}
   */
  getSchedulePortalcalendarsById(id, params = {}) {
    return this.request({
      path: `/schedule/portalcalendars/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put PortalCalendar
   * @param {number} id
   * @param {PortalCalendar} portalCalendar portalCalendar
   * @returns {Promise<PortalCalendar>}
   */
  putSchedulePortalcalendarsById(id, portalCalendar) {
    return this.request({
      path: `/schedule/portalcalendars/${id}`,
      method: 'put',
      data: portalCalendar,
    })
  }

  /**
   * Patch PortalCalendar
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PortalCalendar>}
   */
  patchSchedulePortalcalendarsById(id, patchOperations) {
    return this.request({
      path: `/schedule/portalcalendars/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of PortalCalendar
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
  getSchedulePortalcalendarsCount(params = {}) {
    return this.request({
      path: `/schedule/portalcalendars/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ScheduleReminderTime
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ScheduleReminderTime[]>}
   */
  getScheduleReminderTimes(params = {}) {
    return this.request({
      path: `/schedule/reminderTimes`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ScheduleReminderTime
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
   * @returns {Promise<ScheduleReminderTime>}
   */
  getScheduleReminderTimesById(id, params = {}) {
    return this.request({
      path: `/schedule/reminderTimes/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put ScheduleReminderTime
   * @param {number} id
   * @param {ScheduleReminderTime} reminderTime reminderTime
   * @returns {Promise<ScheduleReminderTime>}
   */
  putScheduleReminderTimesById(id, reminderTime) {
    return this.request({
      path: `/schedule/reminderTimes/${id}`,
      method: 'put',
      data: reminderTime,
    })
  }

  /**
   * Patch ScheduleReminderTime
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ScheduleReminderTime>}
   */
  patchScheduleReminderTimesById(id, patchOperations) {
    return this.request({
      path: `/schedule/reminderTimes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ScheduleReminderTime
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
  getScheduleReminderTimesCount(params = {}) {
    return this.request({
      path: `/schedule/reminderTimes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ScheduleStatus
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ScheduleStatus[]>}
   */
  getScheduleStatuses(params = {}) {
    return this.request({
      path: `/schedule/statuses`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ScheduleStatus
   * @param {ScheduleStatus} scheduleStatus scheduleStatus
   * @returns {Promise<ScheduleStatus>}
   */
  postScheduleStatuses(scheduleStatus) {
    return this.request({
      path: `/schedule/statuses`,
      method: 'post',
      data: scheduleStatus,
    })
  }
  /**
   * Get ScheduleStatus
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
   * @returns {Promise<ScheduleStatus>}
   */
  getScheduleStatusesById(id, params = {}) {
    return this.request({
      path: `/schedule/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ScheduleStatus
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteScheduleStatusesById(id) {
    return this.request({
      path: `/schedule/statuses/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ScheduleStatus
   * @param {number} id
   * @param {ScheduleStatus} scheduleStatus scheduleStatus
   * @returns {Promise<ScheduleStatus>}
   */
  putScheduleStatusesById(id, scheduleStatus) {
    return this.request({
      path: `/schedule/statuses/${id}`,
      method: 'put',
      data: scheduleStatus,
    })
  }

  /**
   * Patch ScheduleStatus
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ScheduleStatus>}
   */
  patchScheduleStatusesById(id, patchOperations) {
    return this.request({
      path: `/schedule/statuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ScheduleStatus
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
  getScheduleStatusesCount(params = {}) {
    return this.request({
      path: `/schedule/statuses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ScheduleType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ScheduleType[]>}
   */
  getScheduleTypes(params = {}) {
    return this.request({
      path: `/schedule/types`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ScheduleType
   * @param {ScheduleType} scheduleType scheduleType
   * @returns {Promise<ScheduleType>}
   */
  postScheduleTypes(scheduleType) {
    return this.request({
      path: `/schedule/types`,
      method: 'post',
      data: scheduleType,
    })
  }
  /**
   * Get ScheduleType
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
   * @returns {Promise<ScheduleType>}
   */
  getScheduleTypesById(id, params = {}) {
    return this.request({
      path: `/schedule/types/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ScheduleType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteScheduleTypesById(id) {
    return this.request({
      path: `/schedule/types/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ScheduleType
   * @param {number} id
   * @param {ScheduleType} scheduleType scheduleType
   * @returns {Promise<ScheduleType>}
   */
  putScheduleTypesById(id, scheduleType) {
    return this.request({
      path: `/schedule/types/${id}`,
      method: 'put',
      data: scheduleType,
    })
  }

  /**
   * Patch ScheduleType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ScheduleType>}
   */
  patchScheduleTypesById(id, patchOperations) {
    return this.request({
      path: `/schedule/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ScheduleTypeInfo
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
   * @returns {Promise<ScheduleTypeInfo>}
   */
  getScheduleTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/schedule/types/${id}/info`,
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
  getScheduleTypesByIdUsages(id, params = {}) {
    return this.request({
      path: `/schedule/types/${id}/usages`,
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
  getScheduleTypesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/schedule/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ScheduleType
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
  getScheduleTypesCount(params = {}) {
    return this.request({
      path: `/schedule/types/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ScheduleTypeInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ScheduleTypeInfo[]>}
   */
  getScheduleTypesInfo(params = {}) {
    return this.request({
      path: `/schedule/types/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ScheduleTypeInfo
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
  getScheduleTypesInfoCount(params = {}) {
    return this.request({
      path: `/schedule/types/info/count`,
      method: 'get',
      params,
    })
  }
}
