/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
import { CommonParameters } from '../AutomateAPI'
type schemas = components['schemas']
/** {@link LabTechModelsSearch} */
export type LabTechModelsSearch = schemas['LabTech.Models.Search']
/** {@link LabTechModelsSearchFolder} */
export type LabTechModelsSearchFolder = schemas['LabTech.Models.SearchFolder']

/**
 * Searches module
 * @public
 */
export class SearchesAPI extends AutomateBaseAPI {
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
