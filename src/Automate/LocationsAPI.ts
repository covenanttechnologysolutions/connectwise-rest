/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
export type LabTechRESTApiModelsPatchOperationArray =
  requestBodies['LabTech.RESTApi.Models.PatchOperationArray']
export type LabTechRESTApiRpcContractsNewProbeConfiguration =
  schemas['LabTech.RESTApi.RpcContracts.NewProbeConfiguration']
export type LabTechRepositoriesMySQLDomainModelsNetworkProbeEncryptionMethod =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.EncryptionMethod']
export type LabTechRepositoriesMySQLDomainModelsNetworkProbeHashMethod =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.HashMethod']
export type LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration']
export type LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentials =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials']
export type LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeSnmpConfiguration =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpConfiguration']
export type LabTechRepositoriesMySQLDomainModelsNetworkProbeScanFrequency =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ScanFrequency']
export type LabTechRepositoriesMySQLDomainModelsNetworkProbeStatusScanNetworkPortOption =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.StatusScanNetworkPortOption']
export type LabTechRepositoriesMySQLDomainModelsProbeEvent =
  schemas['LabTech.Repositories.MySQL.Domain.Models.ProbeEvent']
export type LabTechRepositoriesMySQLDomainModelsProbeEventLevel =
  schemas['LabTech.Repositories.MySQL.Domain.Models.ProbeEventLevel']

/**
 * @internal
 */
export default class LocationsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  getProbeConfiguration(
    locationId: number,
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/ProbeConfiguration`,
      method: 'get',
      params,
    })
  }

  postProbeConfiguration(
    locationId: number,
    NewProbeConfiguration: LabTechRESTApiRpcContractsNewProbeConfiguration,
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/ProbeConfiguration`,
      method: 'post',
      data: NewProbeConfiguration,
    })
  }

  deleteProbeConfiguration(locationId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/ProbeConfiguration`,
      method: 'delete',
    })
  }

  patchProbeConfiguration(
    locationId: number,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/ProbeConfiguration`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  upgradeProbe(locationId: number, params: CommonParameters = {}): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Locations/${locationId}/UpgradeProbe`,
      method: 'post',
      params,
    })
  }

  getProbeEventLevelList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsProbeEventLevel>> {
    return this.request({
      path: `/api/v1/Lookups/ProbeEventLevels`,
      method: 'get',
      params,
    })
  }

  getScanFrequencyList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsNetworkProbeScanFrequency>> {
    return this.request({
      path: `/api/v1/Lookups/ScanFrequencies`,
      method: 'get',
      params,
    })
  }

  getSnmpEncryptionMethodList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsNetworkProbeEncryptionMethod>> {
    return this.request({
      path: `/api/v1/Lookups/SnmpEncryptionMethods`,
      method: 'get',
      params,
    })
  }

  getSnmpHashMethodList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsNetworkProbeHashMethod>> {
    return this.request({
      path: `/api/v1/Lookups/SnmpHashMethods`,
      method: 'get',
      params,
    })
  }

  getStatusScanNetworkPortOptionList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsNetworkProbeStatusScanNetworkPortOption>> {
    return this.request({
      path: `/api/v1/Lookups/StatusScanNetworkPortOptions`,
      method: 'get',
      params,
    })
  }

  getAgentPushCredentialsList(
    probeConfigurationId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentials>> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/AgentPushCredentials`,
      method: 'get',
      params,
    })
  }

  putAgentPushCredentialsList(
    probeConfigurationId: number,
    labTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentialss: Array<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentials>,
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentials>> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/AgentPushCredentials`,
      method: 'put',
      data: labTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentialss,
    })
  }

  deleteAgentPushCredentials(probeConfigurationId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/AgentPushCredentials`,
      method: 'delete',
    })
  }

  getProbeSnmpConfigurationAsync(
    probeConfigurationId: number,
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeSnmpConfiguration> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/SnmpConfiguration`,
      method: 'get',
      params,
    })
  }

  patchProbeSnmpConfigurationAsync(
    probeConfigurationId: number,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeSnmpConfiguration> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/SnmpConfiguration`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  enableProbe(
    computerId: number,
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/EnableProbe/${computerId}`,
      method: 'post',
    })
  }

  getProbeEventList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechRepositoriesMySQLDomainModelsProbeEvent>> {
    return this.request({
      path: `/api/v1/ProbeEvents`,
      method: 'get',
      params,
    })
  }
}
