/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsDataViewFolder_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.DataViewFolder_']

/**
 * @internal
 */
export default class DataViewFoldersAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  DataViewFolders_GetDataViewFolderList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsDataViewFolder_> {
    return this.request({
      path: `/api/v1/DataViewFolders`,
      method: 'get',
      params,
    })
  }
}
