/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsRemoteAgentTemplate = schemas['LabTech.Models.RemoteAgentTemplate']

/**
 * @internal
 */
export default class RemoteAgentTemplatesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  RemoteAgentTemplates_GetRemoteAgentTemplateListAsync(
    params: CommonParameters = {},
  ): Promise<LabTechModelsRemoteAgentTemplate[]> {
    return this.request({
      path: `/api/v1/RemoteAgentTemplates`,
      method: 'get',
      params,
    })
  }

  RemoteAgentTemplates_PostRemoteAgentTemplateAsync(
    RemoteAgentTemplate: LabTechModelsRemoteAgentTemplate,
  ): Promise<LabTechModelsRemoteAgentTemplate> {
    return this.request({
      path: `/api/v1/RemoteAgentTemplates`,
      method: 'post',
      data: RemoteAgentTemplate,
    })
  }
}
