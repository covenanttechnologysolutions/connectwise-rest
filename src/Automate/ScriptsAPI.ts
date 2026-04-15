/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
import { CommonParameters } from '../AutomateAPI'
import { NoContentResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link AutomateApiDomainContractsScriptsRunningScriptsRunningScript} */
export type AutomateApiDomainContractsScriptsRunningScriptsRunningScript =
  schemas['Automate.Api.Domain.Contracts.Scripts.RunningScripts.RunningScript']
/** {@link AutomateApiDomainContractsScriptsScheduledScript} */
export type AutomateApiDomainContractsScriptsScheduledScript =
  schemas['Automate.Api.Domain.Contracts.Scripts.ScheduledScript']
/** {@link AutomateApiDomainContractsScriptsScript} */
export type AutomateApiDomainContractsScriptsScript =
  schemas['Automate.Api.Domain.Contracts.Scripts.Script']
/** {@link AutomateApiDomainContractsScriptsScriptSummary} */
export type AutomateApiDomainContractsScriptsScriptSummary =
  schemas['Automate.Api.Domain.Contracts.Scripts.ScriptSummary']
/** {@link AutomateApiDomainContractsScriptsSubmittableScriptFolder} */
export type AutomateApiDomainContractsScriptsSubmittableScriptFolder =
  schemas['Automate.Api.Domain.Contracts.Scripts.SubmittableScriptFolder']
/** {@link LabTechModelsScript} */
export type LabTechModelsScript = schemas['LabTech.Models.Script']
/** {@link LabTechModelsScriptFolder} */
export type LabTechModelsScriptFolder = schemas['LabTech.Models.ScriptFolder']
/** {@link LabTechRESTApiModelsPatchOperationArray} */
export type LabTechRESTApiModelsPatchOperationArray =
  requestBodies['LabTech.RESTApi.Models.PatchOperationArray']

/**
 * Scripts module
 * @public
 */
export class ScriptsAPI extends AutomateBaseAPI {
  getScriptFolderList(params: CommonParameters = {}): Promise<Array<LabTechModelsScriptFolder>> {
    return this.request({
      path: `/api/v1/ScriptFolders`,
      method: 'get',
      params,
    })
  }

  postScriptFolder(ScriptFolder: LabTechModelsScriptFolder): Promise<LabTechModelsScriptFolder> {
    return this.request({
      path: `/api/v1/ScriptFolders`,
      method: 'post',
      data: ScriptFolder,
    })
  }

  getScriptFolderHierarchy(): Promise<Array<LabTechModelsScriptFolder>> {
    return this.request({
      path: `/api/v1/ScriptFolders/Hierarchy`,
      method: 'get',
    })
  }

  getScriptFolder(
    entityId: string,
    params: CommonParameters = {},
  ): Promise<LabTechModelsScriptFolder> {
    return this.request({
      path: `/api/v1/ScriptFolders/${entityId}`,
      method: 'get',
      params,
    })
  }

  deleteScriptFolderApiv1ScriptFoldersByentityId_delete(
    entityId: string,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/ScriptFolders/${entityId}`,
      method: 'delete',
    })
  }

  patchScriptFolder(
    entityId: string,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<LabTechModelsScriptFolder> {
    return this.request({
      path: `/api/v1/ScriptFolders/${entityId}`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  getRunningScripts(
    params: CommonParameters = {},
  ): Promise<Array<AutomateApiDomainContractsScriptsRunningScriptsRunningScript>> {
    return this.request({
      path: `/api/v1/Scripting/RunningScripts`,
      method: 'get',
      params,
    })
  }

  getScheduledScripts(
    params: CommonParameters = {},
  ): Promise<Array<AutomateApiDomainContractsScriptsScheduledScript>> {
    return this.request({
      path: `/api/v1/Scripting/ScriptSchedules`,
      method: 'get',
      params,
    })
  }

  deleteScriptSchedule(scheduledId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Scripting/ScriptSchedules/${scheduledId}`,
      method: 'delete',
    })
  }

  patchScriptSchedule(
    scheduledId: number,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<AutomateApiDomainContractsScriptsScheduledScript> {
    return this.request({
      path: `/api/v1/Scripting/ScriptSchedules/${scheduledId}`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  getScriptList(params: CommonParameters = {}): Promise<Array<LabTechModelsScript>> {
    return this.request({
      path: `/api/v1/Scripts`,
      method: 'get',
      params,
    })
  }

  postScript(Script: LabTechModelsScript): Promise<LabTechModelsScript> {
    return this.request({
      path: `/api/v1/Scripts`,
      method: 'post',
      data: Script,
    })
  }

  getScriptCopyAsync(scriptId: number): Promise<number> {
    return this.request({
      path: `/api/v1/Scripts/${scriptId}/Copy`,
      method: 'post',
    })
  }

  getScript(
    scriptId: number,
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsScriptsScript> {
    return this.request({
      path: `/api/v2/Scripts/${scriptId}`,
      method: 'get',
      params,
    })
  }

  putScript(
    scriptId: number,
    Script: AutomateApiDomainContractsScriptsScript,
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsScriptsScript> {
    return this.request({
      path: `/api/v2/Scripts/${scriptId}`,
      method: 'put',
      data: Script,
      params,
    })
  }

  deleteScript(scriptId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v2/Scripts/${scriptId}`,
      method: 'delete',
    })
  }

  postScriptSummary(
    ScriptSummary: AutomateApiDomainContractsScriptsScriptSummary,
  ): Promise<AutomateApiDomainContractsScriptsScript> {
    return this.request({
      path: `/api/v2/Scripts`,
      method: 'post',
      data: ScriptSummary,
    })
  }

  postRootScriptFolder(
    SubmittableScriptFolder: AutomateApiDomainContractsScriptsSubmittableScriptFolder,
  ): Promise<AutomateApiDomainContractsScriptsSubmittableScriptFolder> {
    return this.request({
      path: `/api/v2/Scripts/ScriptFolders`,
      method: 'post',
      data: SubmittableScriptFolder,
    })
  }

  putRootScriptFolder(
    scriptFolderId: number,
    SubmittableScriptFolder: AutomateApiDomainContractsScriptsSubmittableScriptFolder,
  ): Promise<AutomateApiDomainContractsScriptsSubmittableScriptFolder> {
    return this.request({
      path: `/api/v2/Scripts/ScriptFolders/${scriptFolderId}`,
      method: 'put',
      data: SubmittableScriptFolder,
    })
  }

  deleteScriptFolderApiv2ScriptsScriptFoldersByscriptFolderId_delete(
    scriptFolderId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v2/Scripts/ScriptFolders/${scriptFolderId}`,
      method: 'delete',
    })
  }

  postChildScriptFolder(
    parentFolderId: number,
    SubmittableScriptFolder: AutomateApiDomainContractsScriptsSubmittableScriptFolder,
  ): Promise<AutomateApiDomainContractsScriptsSubmittableScriptFolder> {
    return this.request({
      path: `/api/v2/Scripts/ScriptFolders/${parentFolderId}`,
      method: 'post',
      data: SubmittableScriptFolder,
    })
  }
}
