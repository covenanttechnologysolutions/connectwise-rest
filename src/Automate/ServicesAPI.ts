/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsServiceClassification = schemas['LabTech.Models.ServiceClassification']

/**
 * @internal
 */
export default class ServicesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  Services_ClassifyService(
    serviceId: number,
    ServiceClassification: LabTechModelsServiceClassification,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/services/${serviceId}/classify`,
      method: 'post',
      data: ServiceClassification,
    })
  }
}
