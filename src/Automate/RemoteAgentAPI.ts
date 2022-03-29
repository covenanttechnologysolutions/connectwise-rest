/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link LabTechModelsRemoteAgentSchedule} */
export type LabTechModelsRemoteAgentSchedule = schemas['LabTech.Models.RemoteAgentSchedule']
/** {@link LabTechModelsRemoteAgentTemplate} */
export type LabTechModelsRemoteAgentTemplate = schemas['LabTech.Models.RemoteAgentTemplate']

/**
 * @module RemoteAgentAPI
 */

/**
 * RemoteAgent module
 * @public
 */
export default class RemoteAgentAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

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
