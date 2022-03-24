/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechRepositoriesMySQLDomainModelsDriveStats_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Repositories.MySQL.Domain.Models.DriveStats_']
type LabTechRepositoriesMySQLDomainModelsDriveStatistics =
  schemas['LabTech.Repositories.MySQL.Domain.Models.DriveStatistics']

/**
 * @internal
 */
export default class DrivesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GetDailyDriveStats(
    driveId: number,
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechRepositoriesMySQLDomainModelsDriveStats_> {
    return this.request({
      path: `/api/v1/drives/${driveId}/drivestats/daily`,
      method: 'get',
      params,
    })
  }

  GetWeeklyDriveStats(
    driveId: number,
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechRepositoriesMySQLDomainModelsDriveStats_> {
    return this.request({
      path: `/api/v1/drives/${driveId}/drivestats/weekly`,
      method: 'get',
      params,
    })
  }

  GetYearlyDriveStats(
    driveId: number,
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechRepositoriesMySQLDomainModelsDriveStats_> {
    return this.request({
      path: `/api/v1/drives/${driveId}/drivestats/yearly`,
      method: 'get',
      params,
    })
  }

  GetMonthlyDriveStats(
    driveId: number,
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechRepositoriesMySQLDomainModelsDriveStats_> {
    return this.request({
      path: `/api/v1/drives/${driveId}/drivestats/monthly`,
      method: 'get',
      params,
    })
  }

  GetDriveStatisticsList(
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsDriveStatistics[]> {
    return this.request({
      path: `/api/v1/Statistics/Drives`,
      method: 'get',
      params,
    })
  }
}
