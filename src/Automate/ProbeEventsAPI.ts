/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechRepositoriesMySQLDomainModelsProbeEvent =
  schemas['LabTech.Repositories.MySQL.Domain.Models.ProbeEvent']

/**
 * @internal
 */
export default class ProbeEventsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  ProbeEvents_GetProbeEventList(
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsProbeEvent[]> {
    return this.request({
      path: `/api/v1/ProbeEvents`,
      method: 'get',
      params,
    })
  }
}
