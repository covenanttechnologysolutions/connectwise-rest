/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions} from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration = schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfiguration']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentials = schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeConfigurationCredentials']
type LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeSnmpConfiguration = schemas['LabTech.Repositories.MySQL.Domain.Models.NetworkProbe.ProbeSnmpConfiguration']

/**
 * @internal
 */
export default class ProbeConfigurationAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  
   ProbeConfiguration_GetAgentPushCredentialsList(probeConfigurationId: number, params: CommonParameters = {}): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentials[]> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/AgentPushCredentials`, method: 'get', params
    })
   }

   ProbeConfiguration_PutAgentPushCredentialsList(probeConfigurationId: number, labTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentialss: LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentials[]): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentials[]> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/AgentPushCredentials`, method: 'put', data: labTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfigurationCredentialss
    })
   }

   ProbeConfiguration_DeleteAgentPushCredentials(probeConfigurationId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/AgentPushCredentials`, method: 'delete'
    })
   }

   ProbeConfiguration_GetProbeSnmpConfigurationAsync(probeConfigurationId: number, params: CommonParameters = {}): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeSnmpConfiguration> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/SnmpConfiguration`, method: 'get', params
    })
   }

   ProbeConfiguration_PatchProbeSnmpConfigurationAsync(probeConfigurationId: number, : object): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeSnmpConfiguration> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/${probeConfigurationId}/SnmpConfiguration`, method: 'patch', data: 
    })
   }

   ProbeConfiguration_EnableProbe(computerId: number): Promise<LabTechRepositoriesMySQLDomainModelsNetworkProbeProbeConfiguration> {
    return this.request({
      path: `/api/v1/ProbeConfiguration/EnableProbe/${computerId}`, method: 'post'
    })
   }
}
  