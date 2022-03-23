/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsRetiredAsset_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.RetiredAsset_']

/**
 * @internal
 */
export default class RetiredAssetsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  RetiredAssets_GetRetiredAssetList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsRetiredAsset_> {
    return this.request({
      path: `/api/v1/RetiredAssets`,
      method: 'get',
      params,
    })
  }
}
