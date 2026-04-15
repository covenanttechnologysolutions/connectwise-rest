/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link AutomateApiDomainContractsBatchCommandsProbeExecuteProbeBatchRequest} */
export type AutomateApiDomainContractsBatchCommandsProbeExecuteProbeBatchRequest =
  schemas['Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeBatchRequest']
/** {@link AutomateApiDomainContractsBatchCommandsProbeExecuteProbeBatchResponse} */
export type AutomateApiDomainContractsBatchCommandsProbeExecuteProbeBatchResponse =
  schemas['Automate.Api.Domain.Contracts.BatchCommands.Probe.ExecuteProbeBatchResponse']
/** {@link AutomateApiDomainContractsBatchScriptsScheduleScriptBatchRequest} */
export type AutomateApiDomainContractsBatchScriptsScheduleScriptBatchRequest =
  requestBodies['Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchRequest']
/** {@link AutomateApiDomainContractsBatchScriptsScheduleScriptBatchResponse} */
export type AutomateApiDomainContractsBatchScriptsScheduleScriptBatchResponse =
  schemas['Automate.Api.Domain.Contracts.BatchScripts.ScheduleScriptBatchResponse']
/** {@link AutomateApiDomainContractsSearchesSendToSearchesBatchRequest} */
export type AutomateApiDomainContractsSearchesSendToSearchesBatchRequest =
  schemas['Automate.Api.Domain.Contracts.Searches.SendToSearchesBatchRequest']
/** {@link AutomateApiDomainContractsSearchesSendToSearchesBatchResponse} */
export type AutomateApiDomainContractsSearchesSendToSearchesBatchResponse =
  schemas['Automate.Api.Domain.Contracts.Searches.SendToSearchesBatchResponse']

/**
 * Batch module
 * @public
 */
export class BatchAPI extends AutomateBaseAPI {
  runDeviceDetection(
    ExecuteProbeBatchRequest: AutomateApiDomainContractsBatchCommandsProbeExecuteProbeBatchRequest,
  ): Promise<AutomateApiDomainContractsBatchCommandsProbeExecuteProbeBatchResponse> {
    return this.request({
      path: `/api/v1/Batch/ProbeCommands/RunDeviceDetection`,
      method: 'post',
      data: ExecuteProbeBatchRequest,
    })
  }

  executeScript(
    ScheduleScriptBatchRequest: AutomateApiDomainContractsBatchScriptsScheduleScriptBatchRequest,
  ): Promise<AutomateApiDomainContractsBatchScriptsScheduleScriptBatchResponse> {
    return this.request({
      path: `/api/v1/Batch/ScriptExecute`,
      method: 'post',
      data: ScheduleScriptBatchRequest,
    })
  }

  scheduleScript(
    ScheduleScriptBatchRequest: AutomateApiDomainContractsBatchScriptsScheduleScriptBatchRequest,
  ): Promise<AutomateApiDomainContractsBatchScriptsScheduleScriptBatchResponse> {
    return this.request({
      path: `/api/v1/Batch/ScriptSchedule`,
      method: 'post',
      data: ScheduleScriptBatchRequest,
    })
  }

  batchSendToSearches(
    SendToSearchesBatchRequest: AutomateApiDomainContractsSearchesSendToSearchesBatchRequest,
  ): Promise<AutomateApiDomainContractsSearchesSendToSearchesBatchResponse> {
    return this.request({
      path: `/api/v1/Batch/Searches/SendTo`,
      method: 'post',
      data: SendToSearchesBatchRequest,
    })
  }
}
