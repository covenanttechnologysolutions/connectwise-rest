/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link LabTechModelsSensorCheck} */
export type LabTechModelsSensorCheck = schemas['LabTech.Models.SensorCheck']
/** {@link LabTechRepositoriesMySQLDomainModelsMonitorDataCollectionSettings} */
export type LabTechRepositoriesMySQLDomainModelsMonitorDataCollectionSettings =
  schemas['LabTech.Repositories.MySQL.Domain.Models.MonitorDataCollectionSettings']

/**
 * @module MonitorsAPI
 */

/**
 * Monitors module
 * @public
 */
export class MonitorsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  getInternalMonitorResultList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/InternalMonitorResults`,
      method: 'get',
      params,
    })
  }

  getMonitorHistoryList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/MonitorHistory`,
      method: 'get',
      params,
    })
  }

  getDailyCollectedData(monitorId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/DailyAverages`,
      method: 'get',
      params,
    })
  }

  getMonthlyCollectedData(monitorId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/MonthlyAverages`,
      method: 'get',
      params,
    })
  }

  getWeeklyCollectedData(monitorId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/WeeklyAverages`,
      method: 'get',
      params,
    })
  }

  getYearlyCollectedData(monitorId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/YearlyAverages`,
      method: 'get',
      params,
    })
  }

  getDataCollectionSettingsForMonitorAsync(
    monitorId: number,
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsMonitorDataCollectionSettings> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/DataCollectionSettings`,
      method: 'get',
      params,
    })
  }

  getMonitorStatisticsList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/MonitorStatistics`,
      method: 'get',
      params,
    })
  }

  getSensorCheckList(params: CommonParameters = {}): Promise<Array<LabTechModelsSensorCheck>> {
    return this.request({
      path: `/api/v1/SensorChecks`,
      method: 'get',
      params,
    })
  }
}
