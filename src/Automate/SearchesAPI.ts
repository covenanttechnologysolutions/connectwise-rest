/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsSearch = schemas['LabTech.Models.Search']

/**
 * @internal
 */
export default class SearchesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  Searches_GetSearchList(params: CommonParameters = {}): Promise<LabTechModelsSearch[]> {
    return this.request({
      path: `/api/v1/Searches`,
      method: 'get',
      params,
    })
  }
}
