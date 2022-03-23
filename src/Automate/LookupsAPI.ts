/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeEncryptionMethod =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.EncryptionMethod']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeHashMethod =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.HashMethod']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeScanFrequency =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ScanFrequency']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeStatusScanNetworkPortOption =
  schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.StatusScanNetworkPortOption']
type LabTechRepositoriesMySQLDomainModelsProbeEventLevel =
  schemas['LabTech.Repositories.MySQL.Domain.Models.ProbeEventLevel']

/**
 * @internal
 */
export default class LookupsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  Lookups_GetProbeEventLevelList(
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsProbeEventLevel[]> {
    return this.request({
      path: `/api/v1/Lookups/ProbeEventLevels`,
      method: 'get',
      params,
    })
  }

  Lookups_GetScanFrequencyList(
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeScanFrequency[]> {
    return this.request({
      path: `/api/v1/Lookups/ScanFrequencies`,
      method: 'get',
      params,
    })
  }

  Lookups_GetSnmpEncryptionMethodList(
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeEncryptionMethod[]> {
    return this.request({
      path: `/api/v1/Lookups/SnmpEncryptionMethods`,
      method: 'get',
      params,
    })
  }

  Lookups_GetSnmpHashMethodList(
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeHashMethod[]> {
    return this.request({
      path: `/api/v1/Lookups/SnmpHashMethods`,
      method: 'get',
      params,
    })
  }

  Lookups_GetStatusScanNetworkPortOptionList(
    params: CommonParameters = {},
  ): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeStatusScanNetworkPortOption[]> {
    return this.request({
      path: `/api/v1/Lookups/StatusScanNetworkPortOptions`,
      method: 'get',
      params,
    })
  }
}
