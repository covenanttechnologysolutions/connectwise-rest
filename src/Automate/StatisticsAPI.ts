/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechRepositoriesMySQLDomainModelsDriveStatistics =
  schemas['LabTech.Repositories.MySQL.Domain.Models.DriveStatistics']

/**
 * @internal
 */
export default class StatisticsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  Statistics_GetDriveStatisticsList(
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsDriveStatistics[]> {
    return this.request({
      path: `/api/v1/Statistics/Drives`,
      method: 'get',
      params,
    })
  }
}
