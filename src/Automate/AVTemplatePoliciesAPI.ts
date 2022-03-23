/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsAVTemplatePolicy = schemas['LabTech.Models.AVTemplatePolicy']

/**
 * @internal
 */
export default class AVTemplatePoliciesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  AVTemplatePolicies_GetAntivirusTemplatePolicyList(
    params: CommonParameters = {},
  ): Promise<object> {
    return this.request({
      path: `/api/v1/AVTemplatePolicies`,
      method: 'get',
      params,
    })
  }

  AVTemplatePolicies_PostAntivirusTemplatePolicy(
    AVTemplatePolicy: LabTechModelsAVTemplatePolicy,
  ): Promise<LabTechModelsAVTemplatePolicy> {
    return this.request({
      path: `/api/v1/AVTemplatePolicies`,
      method: 'post',
      data: AVTemplatePolicy,
    })
  }
}
