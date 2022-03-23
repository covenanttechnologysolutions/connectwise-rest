/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsRemoteAgentSchedule = schemas['LabTech.Models.RemoteAgentSchedule']

/**
 * @internal
 */
export default class RemoteAgentSchedulesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  RemoteAgentSchedules_GetRemoteAgentScheduleList(
    params: CommonParameters = {},
  ): Promise<LabTechModelsRemoteAgentSchedule[]> {
    return this.request({
      path: `/api/v1/RemoteAgentSchedules`,
      method: 'get',
      params,
    })
  }

  RemoteAgentSchedules_PostRemoteAgentSchedule(
    RemoteAgentSchedule: LabTechModelsRemoteAgentSchedule,
  ): Promise<LabTechModelsRemoteAgentSchedule> {
    return this.request({
      path: `/api/v1/RemoteAgentSchedules`,
      method: 'post',
      data: RemoteAgentSchedule,
    })
  }
}
