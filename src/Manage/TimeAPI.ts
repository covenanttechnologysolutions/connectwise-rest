/* This file was auto-generated, do not manually edit. */
import Manage from '../Manage'
import { components } from '../ManageTypes'
import { CommonParameters, CWMOptions } from '../ManageAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

export type ActivityStopwatch = schemas['ActivityStopwatch']
export type ChargeCode = schemas['ChargeCode']
export type ChargeCodeExpenseType = schemas['ChargeCodeExpenseType']
export type ChargeCodeInfo = schemas['ChargeCodeInfo']
export type Count = schemas['Count']
export type PatchOperation = schemas['PatchOperation']
export type ScheduleStopwatch = schemas['ScheduleStopwatch']
export type SuccessResponse = schemas['SuccessResponse']
export type TicketStopwatch = schemas['TicketStopwatch']
export type TimeAccrual = schemas['TimeAccrual']
export type TimeAccrualDetail = schemas['TimeAccrualDetail']
export type TimeEntry = schemas['TimeEntry']
export type TimeEntryAudit = schemas['TimeEntryAudit']
export type TimePeriod = schemas['TimePeriod']
export type TimePeriodSetup = schemas['TimePeriodSetup']
export type TimePeriodSetupDefaults = schemas['TimePeriodSetupDefaults']
export type TimeSheet = schemas['TimeSheet']
export type TimeSheetAudit = schemas['TimeSheetAudit']
export type TimeSheetTierUpdate = schemas['TimeSheetTierUpdate']
export type Usage = schemas['Usage']
export type WorkRole = schemas['WorkRole']
export type WorkRoleInfo = schemas['WorkRoleInfo']
export type WorkRoleLocation = schemas['WorkRoleLocation']
export type WorkType = schemas['WorkType']
export type WorkTypeInfo = schemas['WorkTypeInfo']

/**
 * @public
 */
export default class TimeAPI extends Manage {
  constructor(props: CWMOptions) {
    super(props)
  }

  getTimeAccruals(params: CommonParameters = {}): Promise<Array<TimeAccrual>> {
    return this.request({
      path: `/time/accruals`,
      method: 'get',
      params,
    })
  }

  postTimeAccruals(timeAccrual: TimeAccrual): Promise<TimeAccrual> {
    return this.request({
      path: `/time/accruals`,
      method: 'post',
      data: timeAccrual,
    })
  }

  getTimeAccrualsById(id: number, params: CommonParameters = {}): Promise<TimeAccrual> {
    return this.request({
      path: `/time/accruals/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeAccrualsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/accruals/${id}`,
      method: 'delete',
    })
  }

  putTimeAccrualsById(id: number, timeAccrual: TimeAccrual): Promise<TimeAccrual> {
    return this.request({
      path: `/time/accruals/${id}`,
      method: 'put',
      data: timeAccrual,
    })
  }

  patchTimeAccrualsById(id: number, patchOperations: Array<PatchOperation>): Promise<TimeAccrual> {
    return this.request({
      path: `/time/accruals/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeAccrualsByParentIdDetails(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<TimeAccrualDetail>> {
    return this.request({
      path: `/time/accruals/${parentId}/details`,
      method: 'get',
      params,
    })
  }

  postTimeAccrualsByParentIdDetails(
    parentId: number,
    timeAccrualDetail: TimeAccrualDetail,
  ): Promise<TimeAccrualDetail> {
    return this.request({
      path: `/time/accruals/${parentId}/details/`,
      method: 'post',
      data: timeAccrualDetail,
    })
  }

  getTimeAccrualsByParentIdDetailsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<TimeAccrualDetail> {
    return this.request({
      path: `/time/accruals/${parentId}/details/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeAccrualsByParentIdDetailsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/time/accruals/${parentId}/details/${id}`,
      method: 'delete',
    })
  }

  putTimeAccrualsByParentIdDetailsById(
    id: number,
    parentId: number,
    timeAccrualDetail: TimeAccrualDetail,
  ): Promise<TimeAccrualDetail> {
    return this.request({
      path: `/time/accruals/${parentId}/details/${id}`,
      method: 'put',
      data: timeAccrualDetail,
    })
  }

  patchTimeAccrualsByParentIdDetailsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TimeAccrualDetail> {
    return this.request({
      path: `/time/accruals/${parentId}/details/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeAccrualsByParentIdDetailsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/time/accruals/${parentId}/details/count`,
      method: 'get',
      params,
    })
  }

  getTimeAccrualsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/time/accruals/count`,
      method: 'get',
      params,
    })
  }

  getTimeActivitystopwatches(params: CommonParameters = {}): Promise<Array<ActivityStopwatch>> {
    return this.request({
      path: `/time/activitystopwatches`,
      method: 'get',
      params,
    })
  }

  postTimeActivitystopwatches(activityStopwatch: ActivityStopwatch): Promise<ActivityStopwatch> {
    return this.request({
      path: `/time/activitystopwatches`,
      method: 'post',
      data: activityStopwatch,
    })
  }

  getTimeActivitystopwatchesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ActivityStopwatch> {
    return this.request({
      path: `/time/activitystopwatches/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeActivitystopwatchesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/activitystopwatches/${id}`,
      method: 'delete',
    })
  }

  putTimeActivitystopwatchesById(
    id: number,
    activityStopwatch: ActivityStopwatch,
  ): Promise<ActivityStopwatch> {
    return this.request({
      path: `/time/activitystopwatches/${id}`,
      method: 'put',
      data: activityStopwatch,
    })
  }

  patchTimeActivitystopwatchesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ActivityStopwatch> {
    return this.request({
      path: `/time/activitystopwatches/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeActivitystopwatchesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/time/activitystopwatches/count`,
      method: 'get',
      params,
    })
  }

  getTimeChargeCodes(params: CommonParameters = {}): Promise<Array<ChargeCode>> {
    return this.request({
      path: `/time/chargeCodes`,
      method: 'get',
      params,
    })
  }

  postTimeChargeCodes(chargeCode: ChargeCode): Promise<ChargeCode> {
    return this.request({
      path: `/time/chargeCodes`,
      method: 'post',
      data: chargeCode,
    })
  }

  getTimeChargeCodesById(id: number, params: CommonParameters = {}): Promise<ChargeCode> {
    return this.request({
      path: `/time/chargeCodes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeChargeCodesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/chargeCodes/${id}`,
      method: 'delete',
    })
  }

  putTimeChargeCodesById(id: number, chargeCode: ChargeCode): Promise<ChargeCode> {
    return this.request({
      path: `/time/chargeCodes/${id}`,
      method: 'put',
      data: chargeCode,
    })
  }

  patchTimeChargeCodesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ChargeCode> {
    return this.request({
      path: `/time/chargeCodes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeChargeCodesByIdInfo(id: number, params: CommonParameters = {}): Promise<ChargeCodeInfo> {
    return this.request({
      path: `/time/chargeCodes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getTimeChargeCodesByIdUsages(id: number, params: CommonParameters = {}): Promise<Array<Usage>> {
    return this.request({
      path: `/time/chargeCodes/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getTimeChargeCodesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/time/chargeCodes/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getTimeChargeCodesByParentIdExpenseTypes(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<ChargeCodeExpenseType>> {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes`,
      method: 'get',
      params,
    })
  }

  postTimeChargeCodesByParentIdExpenseTypes(
    parentId: number,
    chargeCodeExpenseType: ChargeCodeExpenseType,
  ): Promise<ChargeCodeExpenseType> {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes`,
      method: 'post',
      data: chargeCodeExpenseType,
    })
  }

  getTimeChargeCodesByParentIdExpenseTypesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ChargeCodeExpenseType> {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeChargeCodesByParentIdExpenseTypesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/${id}`,
      method: 'delete',
    })
  }

  putTimeChargeCodesByParentIdExpenseTypesById(
    id: number,
    parentId: number,
    chargeCodeExpenseType: ChargeCodeExpenseType,
  ): Promise<ChargeCodeExpenseType> {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/${id}`,
      method: 'put',
      data: chargeCodeExpenseType,
    })
  }

  patchTimeChargeCodesByParentIdExpenseTypesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ChargeCodeExpenseType> {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeChargeCodesByParentIdExpenseTypesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/time/chargeCodes/${parentId}/expenseTypes/count`,
      method: 'get',
      params,
    })
  }

  getTimeChargeCodesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/time/chargeCodes/count`,
      method: 'get',
      params,
    })
  }

  getTimeChargeCodesInfo(params: CommonParameters = {}): Promise<Array<ChargeCodeInfo>> {
    return this.request({
      path: `/time/chargeCodes/info`,
      method: 'get',
      params,
    })
  }

  getTimeChargeCodesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/time/chargeCodes/info/count`,
      method: 'get',
      params,
    })
  }

  getTimeEntries(params: CommonParameters = {}): Promise<Array<TimeEntry>> {
    return this.request({
      path: `/time/entries`,
      method: 'get',
      params,
    })
  }

  postTimeEntries(timeEntry: TimeEntry): Promise<TimeEntry> {
    return this.request({
      path: `/time/entries`,
      method: 'post',
      data: timeEntry,
    })
  }

  getTimeEntriesById(id: number, params: CommonParameters = {}): Promise<TimeEntry> {
    return this.request({
      path: `/time/entries/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeEntriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/entries/${id}`,
      method: 'delete',
    })
  }

  putTimeEntriesById(id: number, timeEntry: TimeEntry): Promise<TimeEntry> {
    return this.request({
      path: `/time/entries/${id}`,
      method: 'put',
      data: timeEntry,
    })
  }

  patchTimeEntriesById(id: number, patchOperations: Array<PatchOperation>): Promise<TimeEntry> {
    return this.request({
      path: `/time/entries/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeEntriesByParentIdAudits(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<TimeEntryAudit>> {
    return this.request({
      path: `/time/entries/${parentId}/audits`,
      method: 'get',
      params,
    })
  }

  getTimeEntriesByParentIdAuditsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<TimeEntryAudit> {
    return this.request({
      path: `/time/entries/${parentId}/audits/${id}`,
      method: 'get',
      params,
    })
  }

  getTimeEntriesByParentIdAuditsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/time/entries/${parentId}/audits/count`,
      method: 'get',
      params,
    })
  }

  getTimeEntriesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/time/entries/count`,
      method: 'get',
      params,
    })
  }

  postTimeEntriesDefaults(timeEntry: TimeEntry): Promise<TimeEntry> {
    return this.request({
      path: `/time/entries/defaults`,
      method: 'post',
      data: timeEntry,
    })
  }

  getTimeInfoChargeCodeExpenseTypes(
    params: CommonParameters = {},
  ): Promise<Array<ChargeCodeExpenseType>> {
    return this.request({
      path: `/time/info/chargeCodeExpenseTypes`,
      method: 'get',
      params,
    })
  }

  getTimeInfoChargeCodeExpenseTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/time/info/chargeCodeExpenseTypes/count`,
      method: 'get',
      params,
    })
  }

  getTimeSchedulestopwatches(params: CommonParameters = {}): Promise<Array<ScheduleStopwatch>> {
    return this.request({
      path: `/time/schedulestopwatches`,
      method: 'get',
      params,
    })
  }

  postTimeSchedulestopwatches(scheduleStopwatch: ScheduleStopwatch): Promise<ScheduleStopwatch> {
    return this.request({
      path: `/time/schedulestopwatches`,
      method: 'post',
      data: scheduleStopwatch,
    })
  }

  getTimeSchedulestopwatchesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ScheduleStopwatch> {
    return this.request({
      path: `/time/schedulestopwatches/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeSchedulestopwatchesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/schedulestopwatches/${id}`,
      method: 'delete',
    })
  }

  putTimeSchedulestopwatchesById(
    id: number,
    scheduleStopwatch: ScheduleStopwatch,
  ): Promise<ScheduleStopwatch> {
    return this.request({
      path: `/time/schedulestopwatches/${id}`,
      method: 'put',
      data: scheduleStopwatch,
    })
  }

  patchTimeSchedulestopwatchesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ScheduleStopwatch> {
    return this.request({
      path: `/time/schedulestopwatches/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeSchedulestopwatchesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/time/schedulestopwatches/count`,
      method: 'get',
      params,
    })
  }

  getTimeSheets(params: CommonParameters = {}): Promise<Array<TimeSheet>> {
    return this.request({
      path: `/time/sheets`,
      method: 'get',
      params,
    })
  }

  getTimeSheetsById(id: number, params: CommonParameters = {}): Promise<TimeSheet> {
    return this.request({
      path: `/time/sheets/${id}`,
      method: 'get',
      params,
    })
  }

  postTimeSheetsByIdApprove(id: number, sheetId: TimeSheetTierUpdate): Promise<SuccessResponse> {
    return this.request({
      path: `/time/sheets/${id}/approve`,
      method: 'post',
      data: sheetId,
    })
  }

  postTimeSheetsByIdReject(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/time/sheets/${id}/reject`,
      method: 'post',
    })
  }

  postTimeSheetsByIdReverse(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/time/sheets/${id}/reverse`,
      method: 'post',
    })
  }

  postTimeSheetsByIdSubmit(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/time/sheets/${id}/submit`,
      method: 'post',
    })
  }

  getTimeSheetsByParentIdAudits(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<TimeSheetAudit>> {
    return this.request({
      path: `/time/sheets/${parentId}/audits`,
      method: 'get',
      params,
    })
  }

  getTimeSheetsByParentIdAuditsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<TimeSheetAudit> {
    return this.request({
      path: `/time/sheets/${parentId}/audits/${id}`,
      method: 'get',
      params,
    })
  }

  getTimeSheetsByParentIdAuditsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/time/sheets/${parentId}/audits/count`,
      method: 'get',
      params,
    })
  }

  getTimeSheetsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/time/sheets/count`,
      method: 'get',
      params,
    })
  }

  getTimeTicketstopwatches(params: CommonParameters = {}): Promise<Array<TicketStopwatch>> {
    return this.request({
      path: `/time/ticketstopwatches`,
      method: 'get',
      params,
    })
  }

  postTimeTicketstopwatches(ticketStopwatch: TicketStopwatch): Promise<TicketStopwatch> {
    return this.request({
      path: `/time/ticketstopwatches`,
      method: 'post',
      data: ticketStopwatch,
    })
  }

  getTimeTicketstopwatchesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<TicketStopwatch> {
    return this.request({
      path: `/time/ticketstopwatches/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeTicketstopwatchesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/ticketstopwatches/${id}`,
      method: 'delete',
    })
  }

  putTimeTicketstopwatchesById(
    id: number,
    ticketStopwatch: TicketStopwatch,
  ): Promise<TicketStopwatch> {
    return this.request({
      path: `/time/ticketstopwatches/${id}`,
      method: 'put',
      data: ticketStopwatch,
    })
  }

  patchTimeTicketstopwatchesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TicketStopwatch> {
    return this.request({
      path: `/time/ticketstopwatches/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeTicketstopwatchesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/time/ticketstopwatches/count`,
      method: 'get',
      params,
    })
  }

  getTimeTimePeriodSetups(params: CommonParameters = {}): Promise<Array<TimePeriodSetup>> {
    return this.request({
      path: `/time/timePeriodSetups`,
      method: 'get',
      params,
    })
  }

  postTimeTimePeriodSetups(timePeriodSetup: TimePeriodSetup): Promise<TimePeriodSetup> {
    return this.request({
      path: `/time/timePeriodSetups`,
      method: 'post',
      data: timePeriodSetup,
    })
  }

  getTimeTimePeriodSetupsById(id: number, params: CommonParameters = {}): Promise<TimePeriodSetup> {
    return this.request({
      path: `/time/timePeriodSetups/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeTimePeriodSetupsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/timePeriodSetups/${id}`,
      method: 'delete',
    })
  }

  putTimeTimePeriodSetupsById(
    id: number,
    timePeriodSetup: TimePeriodSetup,
  ): Promise<TimePeriodSetup> {
    return this.request({
      path: `/time/timePeriodSetups/${id}`,
      method: 'put',
      data: timePeriodSetup,
    })
  }

  patchTimeTimePeriodSetupsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TimePeriodSetup> {
    return this.request({
      path: `/time/timePeriodSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeTimePeriodSetupsByParentIdPeriods(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<TimePeriod>> {
    return this.request({
      path: `/time/timePeriodSetups/${parentId}/periods`,
      method: 'get',
      params,
    })
  }

  getTimeTimePeriodSetupsByParentIdPeriodsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<TimePeriod> {
    return this.request({
      path: `/time/timePeriodSetups/${parentId}/periods/${id}`,
      method: 'get',
      params,
    })
  }

  getTimeTimePeriodSetupsByParentIdPeriodsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/time/timePeriodSetups/${parentId}/periods/count`,
      method: 'get',
      params,
    })
  }

  getTimeTimePeriodSetupsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/time/timePeriodSetups/count`,
      method: 'get',
      params,
    })
  }

  getTimeTimePeriodSetupsDefault(params: CommonParameters = {}): Promise<TimePeriodSetupDefaults> {
    return this.request({
      path: `/time/timePeriodSetups/default`,
      method: 'get',
      params,
    })
  }

  getTimeWorkRoles(params: CommonParameters = {}): Promise<Array<WorkRole>> {
    return this.request({
      path: `/time/workRoles`,
      method: 'get',
      params,
    })
  }

  postTimeWorkRoles(workRole: WorkRole): Promise<WorkRole> {
    return this.request({
      path: `/time/workRoles`,
      method: 'post',
      data: workRole,
    })
  }

  getTimeWorkRolesById(id: number, params: CommonParameters = {}): Promise<WorkRole> {
    return this.request({
      path: `/time/workRoles/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeWorkRolesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/workRoles/${id}`,
      method: 'delete',
    })
  }

  putTimeWorkRolesById(id: number, workRole: WorkRole): Promise<WorkRole> {
    return this.request({
      path: `/time/workRoles/${id}`,
      method: 'put',
      data: workRole,
    })
  }

  patchTimeWorkRolesById(id: number, patchOperations: Array<PatchOperation>): Promise<WorkRole> {
    return this.request({
      path: `/time/workRoles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeWorkRolesByIdInfo(id: number, params: CommonParameters = {}): Promise<WorkRoleInfo> {
    return this.request({
      path: `/time/workRoles/${id}/info`,
      method: 'get',
      params,
    })
  }

  getTimeWorkRolesByIdUsages(id: number, params: CommonParameters = {}): Promise<Array<Usage>> {
    return this.request({
      path: `/time/workRoles/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getTimeWorkRolesByIdUsagesList(id: number, params: CommonParameters = {}): Promise<Array<Usage>> {
    return this.request({
      path: `/time/workRoles/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getTimeWorkRolesByParentIdLocations(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<WorkRoleLocation>> {
    return this.request({
      path: `/time/workRoles/${parentId}/locations`,
      method: 'get',
      params,
    })
  }

  postTimeWorkRolesByParentIdLocations(
    parentId: number,
    workRoleLocation: WorkRoleLocation,
  ): Promise<WorkRoleLocation> {
    return this.request({
      path: `/time/workRoles/${parentId}/locations`,
      method: 'post',
      data: workRoleLocation,
    })
  }

  getTimeWorkRolesByParentIdLocationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<WorkRoleLocation> {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeWorkRolesByParentIdLocationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/${id}`,
      method: 'delete',
    })
  }

  putTimeWorkRolesByParentIdLocationsById(
    id: number,
    parentId: number,
    workRoleLocation: WorkRoleLocation,
  ): Promise<WorkRoleLocation> {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/${id}`,
      method: 'put',
      data: workRoleLocation,
    })
  }

  patchTimeWorkRolesByParentIdLocationsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<WorkRoleLocation> {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeWorkRolesByParentIdLocationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/time/workRoles/${parentId}/locations/count`,
      method: 'get',
      params,
    })
  }

  getTimeWorkRolesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/time/workRoles/count`,
      method: 'get',
      params,
    })
  }

  getTimeWorkRolesInfo(params: CommonParameters = {}): Promise<Array<WorkRoleInfo>> {
    return this.request({
      path: `/time/workRoles/info`,
      method: 'get',
      params,
    })
  }

  getTimeWorkRolesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/time/workRoles/info/count`,
      method: 'get',
      params,
    })
  }

  getTimeWorkTypes(params: CommonParameters = {}): Promise<Array<WorkType>> {
    return this.request({
      path: `/time/workTypes`,
      method: 'get',
      params,
    })
  }

  postTimeWorkTypes(workType: WorkType): Promise<WorkType> {
    return this.request({
      path: `/time/workTypes`,
      method: 'post',
      data: workType,
    })
  }

  getTimeWorkTypesById(id: number, params: CommonParameters = {}): Promise<WorkType> {
    return this.request({
      path: `/time/workTypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteTimeWorkTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/time/workTypes/${id}`,
      method: 'delete',
    })
  }

  putTimeWorkTypesById(id: number, workType: WorkType): Promise<WorkType> {
    return this.request({
      path: `/time/workTypes/${id}`,
      method: 'put',
      data: workType,
    })
  }

  patchTimeWorkTypesById(id: number, patchOperations: Array<PatchOperation>): Promise<WorkType> {
    return this.request({
      path: `/time/workTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getTimeWorkTypesByIdInfo(id: number, params: CommonParameters = {}): Promise<WorkTypeInfo> {
    return this.request({
      path: `/time/workTypes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getTimeWorkTypesByIdUsages(id: number, params: CommonParameters = {}): Promise<Array<Usage>> {
    return this.request({
      path: `/time/workTypes/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getTimeWorkTypesByIdUsagesList(id: number, params: CommonParameters = {}): Promise<Array<Usage>> {
    return this.request({
      path: `/time/workTypes/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getTimeWorkTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/time/workTypes/count`,
      method: 'get',
      params,
    })
  }

  getTimeWorkTypesInfo(params: CommonParameters = {}): Promise<Array<WorkTypeInfo>> {
    return this.request({
      path: `/time/workTypes/info`,
      method: 'get',
      params,
    })
  }

  getTimeWorkTypesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/time/workTypes/info/count`,
      method: 'get',
      params,
    })
  }
}
