/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechRepositoriesMySQLDomainModelsMonitorDataCollectionSettings =
  schemas['LabTech.Repositories.MySQL.Domain.Models.MonitorDataCollectionSettings']

/**
 * @internal
 */
export default class MonitorsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  MonitorsCollectedData_GetDailyCollectedData(
    monitorId: number,
    params: CommonParameters = {},
  ): Promise<object> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/DailyAverages`,
      method: 'get',
      params,
    })
  }

  MonitorsCollectedData_GetMonthlyCollectedData(
    monitorId: number,
    params: CommonParameters = {},
  ): Promise<object> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/MonthlyAverages`,
      method: 'get',
      params,
    })
  }

  MonitorsCollectedData_GetWeeklyCollectedData(
    monitorId: number,
    params: CommonParameters = {},
  ): Promise<object> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/WeeklyAverages`,
      method: 'get',
      params,
    })
  }

  MonitorsCollectedData_GetYearlyCollectedData(
    monitorId: number,
    params: CommonParameters = {},
  ): Promise<object> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/YearlyAverages`,
      method: 'get',
      params,
    })
  }

  MonitorDataCollectionSettings_GetDataCollectionSettingsForMonitorAsync(
    monitorId: number,
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsMonitorDataCollectionSettings> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/DataCollectionSettings`,
      method: 'get',
      params,
    })
  }
}
