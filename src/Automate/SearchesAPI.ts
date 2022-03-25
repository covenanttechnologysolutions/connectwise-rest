/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
export type LabTechModelsSearch = schemas['LabTech.Models.Search']
export type LabTechModelsSearchFolder = schemas['LabTech.Models.SearchFolder']

/**
 * @internal
 */
export default class SearchesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  getSearchList(params: CommonParameters = {}): Promise<Array<LabTechModelsSearch>> {
    return this.request({
      path: `/api/v1/Searches`,
      method: 'get',
      params,
    })
  }

  getSearchFolderList(params: CommonParameters = {}): Promise<Array<LabTechModelsSearchFolder>> {
    return this.request({
      path: `/api/v1/SearchFolders`,
      method: 'get',
      params,
    })
  }

  postSearchFolder(SearchFolder: LabTechModelsSearchFolder): Promise<LabTechModelsSearchFolder> {
    return this.request({
      path: `/api/v1/SearchFolders`,
      method: 'post',
      data: SearchFolder,
    })
  }
}
