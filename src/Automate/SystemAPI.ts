/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_AutomateApiDomainContractsSystemServerInformation_ =
  schemas['LabTech.Database.ResultSetWithCount_Automate.Api.Domain.Contracts.System.ServerInformation_']

/**
 * @internal
 */
export default class SystemAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  ServerInformation_GetServerInformationListAsync(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_AutomateApiDomainContractsSystemServerInformation_> {
    return this.request({
      path: `/api/v1/System/ServerInformation`,
      method: 'get',
      params,
    })
  }
}
