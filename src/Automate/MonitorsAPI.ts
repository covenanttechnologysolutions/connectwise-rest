/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
import { CommonParameters } from '../AutomateAPI'
type schemas = components['schemas']
/** {@link LabTechModelsMonitorsInternalMonitorResult} */
export type LabTechModelsMonitorsInternalMonitorResult =
  schemas['LabTech.Models.Monitors.InternalMonitorResult']
/** {@link LabTechModelsSensorCheck} */
export type LabTechModelsSensorCheck = schemas['LabTech.Models.SensorCheck']
/** {@link LabTechRepositoriesMySQLDomainModelsMonitorDataCollectionSettings} */
export type LabTechRepositoriesMySQLDomainModelsMonitorDataCollectionSettings =
  schemas['LabTech.Repositories.MySQL.Domain.Models.MonitorDataCollectionSettings']
/** {@link LabTechRepositoriesMySQLDomainModelsMonitorHistory} */
export type LabTechRepositoriesMySQLDomainModelsMonitorHistory =
  schemas['LabTech.Repositories.MySQL.Domain.Models.MonitorHistory']
/** {@link LabTechRepositoriesMySQLDomainModelsMonitorStatistic} */
export type LabTechRepositoriesMySQLDomainModelsMonitorStatistic =
  schemas['LabTech.Repositories.MySQL.Domain.Models.MonitorStatistic']
/** {@link LabTechRepositoriesMySQLDomainModelsMonitorsMonitorCollectedDatapoint} */
export type LabTechRepositoriesMySQLDomainModelsMonitorsMonitorCollectedDatapoint =
  schemas['LabTech.Repositories.MySQL.Domain.Models.Monitors.MonitorCollectedDatapoint']

/**
 * Monitors module
 * @public
 */
export class MonitorsAPI extends AutomateBaseAPI {
  getInternalMonitorResultList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsMonitorsInternalMonitorResult>> {
    return this.request({
      path: `/api/v1/InternalMonitorResults`,
      method: 'get',
      params,
    })
  }

  getMonitorHistoryList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsMonitorHistory>> {
    return this.request({
      path: `/api/v1/MonitorHistory`,
      method: 'get',
      params,
    })
  }

  getMonitorHistoryListById(
    monitorId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsMonitorHistory>> {
    return this.request({
      path: `/api/v1/MonitorHistory/${monitorId}`,
      method: 'get',
      params,
    })
  }

  getDailyCollectedData(
    monitorId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsMonitorsMonitorCollectedDatapoint>> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/DailyAverages`,
      method: 'get',
      params,
    })
  }

  getMonthlyCollectedData(
    monitorId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsMonitorsMonitorCollectedDatapoint>> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/MonthlyAverages`,
      method: 'get',
      params,
    })
  }

  getWeeklyCollectedData(
    monitorId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsMonitorsMonitorCollectedDatapoint>> {
    return this.request({
      path: `/api/v1/Monitors/${monitorId}/CollectedData/WeeklyAverages`,
      method: 'get',
      params,
    })
  }

  getYearlyCollectedData(
    monitorId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsMonitorsMonitorCollectedDatapoint>> {
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

  getMonitorStatisticsList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsMonitorStatistic>> {
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
