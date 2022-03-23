/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsRouter = schemas['LabTech.Models.Router']

/**
 * @internal
 */
export default class RoutersAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  Routers_GetRouters(params: CommonParameters = {}): Promise<LabTechModelsRouter[]> {
    return this.request({
      path: `/api/v1/routers`,
      method: 'get',
      params,
    })
  }
}
