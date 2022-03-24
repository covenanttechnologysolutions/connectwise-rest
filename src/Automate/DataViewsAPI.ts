/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsDataViewFolder_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.DataViewFolder_']
type LabTechModelsDataView = schemas['LabTech.Models.DataView']

/**
 * @internal
 */
export default class DataViewsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GetDataViewFolderList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsDataViewFolder_> {
    return this.request({
      path: `/api/v1/DataViewFolders`,
      method: 'get',
      params,
    })
  }

  GetDataViewList(params: CommonParameters = {}): Promise<LabTechModelsDataView[]> {
    return this.request({
      path: `/api/v1/DataViews`,
      method: 'get',
      params,
    })
  }
}
