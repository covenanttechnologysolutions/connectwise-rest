/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsSensorCheck_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.SensorCheck_']
type LabTechRepositoriesMySQLDomainModelsMonitorDataCollectionSettings =
  schemas['LabTech.Repositories.MySQL.Domain.Models.MonitorDataCollectionSettings']

/**
 * @internal
 */
export default class MonitorsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GetInternalMonitorResultList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/InternalMonitorResults`,
      method: 'get',
      params,
    })
  }

  GetMonitorHistoryList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/MonitorHistory`,
      method: 'get',
      params,
    })
  }

  GetDailyCollectedData(monitorId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/DailyAverages`,
      method: 'get',
      params,
    })
  }

  GetMonthlyCollectedData(monitorId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/MonthlyAverages`,
      method: 'get',
      params,
    })
  }

  GetWeeklyCollectedData(monitorId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/WeeklyAverages`,
      method: 'get',
      params,
    })
  }

  GetYearlyCollectedData(monitorId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/YearlyAverages`,
      method: 'get',
      params,
    })
  }

  GetDataCollectionSettingsForMonitorAsync(
    monitorId: number,
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsMonitorDataCollectionSettings> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/DataCollectionSettings`,
      method: 'get',
      params,
    })
  }

  GetMonitorStatisticsList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/MonitorStatistics`,
      method: 'get',
      params,
    })
  }

  GetSensorCheckList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsSensorCheck_> {
    return this.request({
      path: `/api/v1/SensorChecks`,
      method: 'get',
      params,
    })
  }
}
