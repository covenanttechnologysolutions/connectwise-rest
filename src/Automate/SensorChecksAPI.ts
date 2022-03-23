/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsSensorCheck_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.SensorCheck_']

/**
 * @internal
 */
export default class SensorChecksAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  SensorChecks_GetSensorCheckList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsSensorCheck_> {
    return this.request({
      path: `/api/v1/SensorChecks`,
      method: 'get',
      params,
    })
  }
}
