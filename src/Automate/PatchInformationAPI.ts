/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsPatchInformation = schemas['LabTech.Models.PatchInformation']

/**
 * @internal
 */
export default class PatchInformationAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  PatchInformation_GetPatchInformation(
    params: CommonParameters = {},
  ): Promise<LabTechModelsPatchInformation> {
    return this.request({
      path: `/api/v1/PatchInformation`,
      method: 'get',
      params,
    })
  }
}
