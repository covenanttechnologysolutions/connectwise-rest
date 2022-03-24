/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechRESTApiRpcContractsNewProbeConfiguration =
  schemas['LabTech.RESTApi.RpcContracts.NewProbeConfiguration']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeEncryptionMethod =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.EncryptionMethod']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeHashMethod =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.HashMethod']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentials =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeSnmpConfiguration =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpConfiguration']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeScanFrequency =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ScanFrequency']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeStatusScanNetworkPortOption =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.StatusScanNetworkPortOption']
type LabTechRepositoriesMySQLDomainModelsProbeEvent =
  schemas['LabTech.Repositories.MySQL.Domain.Models.ProbeEvent']
type LabTechRepositoriesMySQLDomainModelsProbeEventLevel =
  schemas['LabTech.Repositories.MySQL.Domain.Models.ProbeEventLevel']

/**
 * @internal
 */
export default class LocationsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GetProbeConfiguration(
    locationId: number,
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/ProbeConfiguration`,
      method: 'get',
      params,
    })
  }

  PostProbeConfiguration(
    locationId: number,
    NewProbeConfiguration: LabTechRESTApiRpcContractsNewProbeConfiguration,
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/ProbeConfiguration`,
      method: 'post',
      data: NewProbeConfiguration,
    })
  }

  DeleteProbeConfiguration(locationId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/ProbeConfiguration`,
      method: 'delete',
    })
  }

  PatchProbeConfiguration(
    locationId: number,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/ProbeConfiguration`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  UpgradeProbe(locationId: number, params: CommonParameters = {}): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/UpgradeProbe`,
      method: 'post',
      params,
    })
  }

  GetProbeEventLevelList(
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsProbeEventLevel[]> {
    return this.request({
      path: `/api/v1/Lookups/ProbeEventLevels`,
      method: 'get',
      params,
    })
  }

  GetScanFrequencyList(
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeScanFrequency[]> {
    return this.request({
      path: `/api/v1/Lookups/ScanFrequencies`,
      method: 'get',
      params,
    })
  }

  GetSnmpEncryptionMethodList(
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeEncryptionMethod[]> {
    return this.request({
      path: `/api/v1/Lookups/SnmpEncryptionMethods`,
      method: 'get',
      params,
    })
  }

  GetSnmpHashMethodList(
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeHashMethod[]> {
    return this.request({
      path: `/api/v1/Lookups/SnmpHashMethods`,
      method: 'get',
      params,
    })
  }

  GetStatusScanNetworkPortOptionList(
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeStatusScanNetworkPortOption[]> {
    return this.request({
      path: `/api/v1/Lookups/StatusScanNetworkPortOptions`,
      method: 'get',
      params,
    })
  }

  GetAgentPushCredentialsList(
    probeConfigurationId: number,
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentials[]> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/AgentPushCredentials`,
      method: 'get',
      params,
    })
  }

  PutAgentPushCredentialsList(
    probeConfigurationId: number,
    labTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentialss: LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentials[],
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentials[]> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/AgentPushCredentials`,
      method: 'put',
      data: labTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentialss,
    })
  }

  DeleteAgentPushCredentials(probeConfigurationId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/AgentPushCredentials`,
      method: 'delete',
    })
  }

  GetProbeSnmpConfigurationAsync(
    probeConfigurationId: number,
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeSnmpConfiguration> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/SnmpConfiguration`,
      method: 'get',
      params,
    })
  }

  PatchProbeSnmpConfigurationAsync(
    probeConfigurationId: number,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeSnmpConfiguration> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/SnmpConfiguration`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  EnableProbe(
    computerId: number,
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/EnableProbe/${computerId}`,
      method: 'post',
    })
  }

  GetProbeEventList(
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsProbeEvent[]> {
    return this.request({
      path: `/api/v1/ProbeEvents`,
      method: 'get',
      params,
    })
  }
}
