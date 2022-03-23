/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsLink_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.Link_']

/**
 * @internal
 */
export default class LinksAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  Links_GetLinkList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsLink_> {
    return this.request({
      path: `/api/v1/Links`,
      method: 'get',
      params,
    })
  }
}
