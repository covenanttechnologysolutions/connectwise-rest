/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsExternalSystemCredentials_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ExternalSystemCredentials_']

/**
 * @internal
 */
export default class ExternalSystemCredentialsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  ExternalSystemCredentials_GetClientSystemCredentialsList(
    clientId: number,
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsExternalSystemCredentials_> {
    return this.request({
      path: `/api/v1/ExternalSystemCredentials/Clients/${clientId}`,
      method: 'get',
      params,
    })
  }
}
