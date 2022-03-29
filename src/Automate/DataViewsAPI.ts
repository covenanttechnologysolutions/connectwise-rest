/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link LabTechModelsDataView} */
export type LabTechModelsDataView = schemas['LabTech.Models.DataView']
/** {@link LabTechModelsDataViewFolder} */
export type LabTechModelsDataViewFolder = schemas['LabTech.Models.DataViewFolder']

/**
 * @module DataViewsAPI
 */

/**
 * DataViews module
 * @public
 */
export class DataViewsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

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
