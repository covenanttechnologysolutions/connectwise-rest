/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link LabTechRepositoriesMySQLDomainModelsDriveStatistics} */
export type LabTechRepositoriesMySQLDomainModelsDriveStatistics =
  schemas['LabTech.Repositories.MySQL.Domain.Models.DriveStatistics']
/** {@link LabTechRepositoriesMySQLDomainModelsDriveStats} */
export type LabTechRepositoriesMySQLDomainModelsDriveStats =
  schemas['LabTech.Repositories.MySQL.Domain.Models.DriveStats']

/**
 * @module DrivesAPI
 */

/**
 * Drives module
 * @public
 */
export class DrivesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

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
