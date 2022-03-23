/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsLicensedProduct_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.LicensedProduct_']

/**
 * @internal
 */
export default class LicensedProductsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  LicensedProducts_GetLicensedProducts(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsLicensedProduct_> {
    return this.request({
      path: `/api/v1/LicensedProducts`,
      method: 'get',
      params,
    })
  }
}
