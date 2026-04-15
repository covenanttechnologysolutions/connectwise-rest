/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
import { CommonParameters } from '../AutomateAPI'
type schemas = components['schemas']
/** {@link AutomateApiDomainContractsMaintenanceMaintenanceWindowDefinition} */
export type AutomateApiDomainContractsMaintenanceMaintenanceWindowDefinition =
  schemas['Automate.Api.Domain.Contracts.Maintenance.MaintenanceWindowDefinition']

/**
 * MaintenanceWindows module
 * @public
 */
export class MaintenanceWindowsAPI extends AutomateBaseAPI {
  getDefinitionList(
    params: CommonParameters = {},
  ): Promise<Array<AutomateApiDomainContractsMaintenanceMaintenanceWindowDefinition>> {
    return this.request({
      path: `/api/v1/MaintenanceWindowDefinitions`,
      method: 'get',
      params,
    })
  }
}
