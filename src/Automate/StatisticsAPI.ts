/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
import { CommonParameters } from '../AutomateAPI'
type schemas = components['schemas']
/** {@link LabTechRepositoriesMySQLDomainModelsDriveStatistics} */
export type LabTechRepositoriesMySQLDomainModelsDriveStatistics =
  schemas['LabTech.Repositories.MySQL.Domain.Models.DriveStatistics']
/** {@link LabTechRepositoriesMySQLDomainModelsDriveStats} */
export type LabTechRepositoriesMySQLDomainModelsDriveStats =
  schemas['LabTech.Repositories.MySQL.Domain.Models.DriveStats']

/**
 * Statistics module
 * @public
 */
export class StatisticsAPI extends AutomateBaseAPI {
  getDailyDriveStats(
    driveId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsDriveStats>> {
    return this.request({
      path: `/api/v1/drives/${driveId}/drivestats/daily`,
      method: 'get',
      params,
    })
  }

  getWeeklyDriveStats(
    driveId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsDriveStats>> {
    return this.request({
      path: `/api/v1/drives/${driveId}/drivestats/weekly`,
      method: 'get',
      params,
    })
  }

  getYearlyDriveStats(
    driveId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsDriveStats>> {
    return this.request({
      path: `/api/v1/drives/${driveId}/drivestats/yearly`,
      method: 'get',
      params,
    })
  }

  getMonthlyDriveStats(
    driveId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsDriveStats>> {
    return this.request({
      path: `/api/v1/drives/${driveId}/drivestats/monthly`,
      method: 'get',
      params,
    })
  }

  getDriveStatisticsList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsDriveStatistics>> {
    return this.request({
      path: `/api/v1/Statistics/Drives`,
      method: 'get',
      params,
    })
  }
}
