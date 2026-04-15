/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
import { CommonParameters } from '../AutomateAPI'
type schemas = components['schemas']
/** {@link LabTechModelsEventLog} */
export type LabTechModelsEventLog = schemas['LabTech.Models.EventLog']

/**
 * EventLogs module
 * @public
 */
export class EventLogsAPI extends AutomateBaseAPI {
  getEventLogsAsync(params: CommonParameters = {}): Promise<Array<LabTechModelsEventLog>> {
    return this.request({
      path: `/api/v1/EventLogs`,
      method: 'get',
      params,
    })
  }
}
