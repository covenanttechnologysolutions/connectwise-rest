/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsDataView = schemas['LabTech.Models.DataView']

/**
 * @internal
 */
export default class DataViewsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  DataViews_GetDataViewList(params: CommonParameters = {}): Promise<LabTechModelsDataView[]> {
    return this.request({
      path: `/api/v1/DataViews`,
      method: 'get',
      params,
    })
  }
}
