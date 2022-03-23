/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsLocation_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.Location_']
type LabTechModelsLocation = schemas['LabTech.Models.Location']
type LabTechRESTApiRpcContractsNewProbeConfiguration =
  schemas['LabTech.RESTApi.RpcContracts.NewProbeConfiguration']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration']

/**
 * @internal
 */
export default class LocationsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  ProbeConfiguration_GetProbeConfiguration(
    locationId: number,
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/ProbeConfiguration`,
      method: 'get',
      params,
    })
  }

  ProbeConfiguration_PostProbeConfiguration(
    locationId: number,
    NewProbeConfiguration: LabTechRESTApiRpcContractsNewProbeConfiguration,
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/ProbeConfiguration`,
      method: 'post',
      data: NewProbeConfiguration,
    })
  }

  ProbeConfiguration_DeleteProbeConfiguration(locationId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/ProbeConfiguration`,
      method: 'delete',
    })
  }

  ProbeConfiguration_PatchProbeConfiguration(
    locationId: number,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/ProbeConfiguration`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  ProbeConfiguration_UpgradeProbe(
    locationId: number,
    params: CommonParameters = {},
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/UpgradeProbe`,
      method: 'post',
      params,
    })
  }

  Locations_GetLocationList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsLocation_> {
    return this.request({
      path: `/api/v1/Locations`,
      method: 'get',
      params,
    })
  }

  Locations_PostLocation(Location: LabTechModelsLocation): Promise<LabTechModelsLocation> {
    return this.request({
      path: `/api/v1/Locations`,
      method: 'post',
      data: Location,
    })
  }
}
