/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
import { CommonParameters } from '../AutomateAPI'
type schemas = components['schemas']
/** {@link LabTechModelsRemoteAgentSchedule} */
export type LabTechModelsRemoteAgentSchedule = schemas['LabTech.Models.RemoteAgentSchedule']
/** {@link LabTechModelsRemoteAgentTemplate} */
export type LabTechModelsRemoteAgentTemplate = schemas['LabTech.Models.RemoteAgentTemplate']

/**
 * RemoteAgent module
 * @public
 */
export class RemoteAgentAPI extends AutomateBaseAPI {
  getRemoteAgentScheduleList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsRemoteAgentSchedule>> {
    return this.request({
      path: `/api/v1/RemoteAgentSchedules`,
      method: 'get',
      params,
    })
  }

  postRemoteAgentSchedule(
    RemoteAgentSchedule: LabTechModelsRemoteAgentSchedule,
  ): Promise<LabTechModelsRemoteAgentSchedule> {
    return this.request({
      path: `/api/v1/RemoteAgentSchedules`,
      method: 'post',
      data: RemoteAgentSchedule,
    })
  }

  getRemoteAgentTemplateListAsync(
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsRemoteAgentTemplate>> {
    return this.request({
      path: `/api/v1/RemoteAgentTemplates`,
      method: 'get',
      params,
    })
  }

  postRemoteAgentTemplateAsync(
    RemoteAgentTemplate: LabTechModelsRemoteAgentTemplate,
  ): Promise<LabTechModelsRemoteAgentTemplate> {
    return this.request({
      path: `/api/v1/RemoteAgentTemplates`,
      method: 'post',
      data: RemoteAgentTemplate,
    })
  }
}
