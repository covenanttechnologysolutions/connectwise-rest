/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
import { CommonParameters } from '../AutomateAPI'
type schemas = components['schemas']
/** {@link LabTechModelsDataView} */
export type LabTechModelsDataView = schemas['LabTech.Models.DataView']
/** {@link LabTechModelsDataViewFolder} */
export type LabTechModelsDataViewFolder = schemas['LabTech.Models.DataViewFolder']

/**
 * DataViews module
 * @public
 */
export class DataViewsAPI extends AutomateBaseAPI {
  getDataViewFolderList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsDataViewFolder>> {
    return this.request({
      path: `/api/v1/DataViewFolders`,
      method: 'get',
      params,
    })
  }

  getDataViewList(params: CommonParameters = {}): Promise<Array<LabTechModelsDataView>> {
    return this.request({
      path: `/api/v1/DataViews`,
      method: 'get',
      params,
    })
  }
}
