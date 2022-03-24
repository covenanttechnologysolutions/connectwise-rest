/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsEventLog_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.EventLog_']

/**
 * @internal
 */
export default class EventLogsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GetEventLogsAsync(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsEventLog_> {
    return this.request({
      path: `/api/v1/EventLogs`,
      method: 'get',
      params,
    })
  }
}
