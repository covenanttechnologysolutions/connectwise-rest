/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsSearchFolder_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.SearchFolder_']
type LabTechModelsSearch = schemas['LabTech.Models.Search']
type LabTechModelsSearchFolder = schemas['LabTech.Models.SearchFolder']

/**
 * @internal
 */
export default class SearchesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GetSearchList(params: CommonParameters = {}): Promise<LabTechModelsSearch[]> {
    return this.request({
      path: `/api/v1/Searches`,
      method: 'get',
      params,
    })
  }

  GetSearchFolderList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsSearchFolder_> {
    return this.request({
      path: `/api/v1/SearchFolders`,
      method: 'get',
      params,
    })
  }

  PostSearchFolder(SearchFolder: LabTechModelsSearchFolder): Promise<LabTechModelsSearchFolder> {
    return this.request({
      path: `/api/v1/SearchFolders`,
      method: 'post',
      data: SearchFolder,
    })
  }
}
