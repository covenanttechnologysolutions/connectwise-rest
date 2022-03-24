/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_AutomateApiDomainContractsMaintenanceMaintenanceWindowDefinition_ =
  schemas['LabTech.Database.ResultSetWithCount_Automate.Api.Domain.Contracts.Maintenance.MaintenanceWindowDefinition_']

/**
 * @internal
 */
export default class MaintenanceWindowDefinitionsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GetDefinitionList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_AutomateApiDomainContractsMaintenanceMaintenanceWindowDefinition_> {
    return this.request({
      path: `/api/v1/MaintenanceWindowDefinitions`,
      method: 'get',
      params,
    })
  }
}
