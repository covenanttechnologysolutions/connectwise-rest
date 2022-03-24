/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsRemoteAgentSchedule = schemas['LabTech.Models.RemoteAgentSchedule']
type LabTechModelsRemoteAgentTemplate = schemas['LabTech.Models.RemoteAgentTemplate']

/**
 * @internal
 */
export default class RemoteAgentAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GetRemoteAgentScheduleList(
    params: CommonParameters = {},
  ): Promise<LabTechModelsRemoteAgentSchedule[]> {
    return this.request({
      path: `/api/v1/RemoteAgentSchedules`,
      method: 'get',
      params,
    })
  }

  PostRemoteAgentSchedule(
    RemoteAgentSchedule: LabTechModelsRemoteAgentSchedule,
  ): Promise<LabTechModelsRemoteAgentSchedule> {
    return this.request({
      path: `/api/v1/RemoteAgentSchedules`,
      method: 'post',
      data: RemoteAgentSchedule,
    })
  }

  GetRemoteAgentTemplateListAsync(
    params: CommonParameters = {},
  ): Promise<LabTechModelsRemoteAgentTemplate[]> {
    return this.request({
      path: `/api/v1/RemoteAgentTemplates`,
      method: 'get',
      params,
    })
  }

  PostRemoteAgentTemplateAsync(
    RemoteAgentTemplate: LabTechModelsRemoteAgentTemplate,
  ): Promise<LabTechModelsRemoteAgentTemplate> {
    return this.request({
      path: `/api/v1/RemoteAgentTemplates`,
      method: 'post',
      data: RemoteAgentTemplate,
    })
  }
}
