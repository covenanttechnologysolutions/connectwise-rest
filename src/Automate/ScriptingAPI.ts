/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link AutomateApiDomainContractsScriptsRunningScriptsRunningScript} */
export type AutomateApiDomainContractsScriptsRunningScriptsRunningScript =
  schemas['Automate.Api.Domain.Contracts.Scripts.RunningScripts.RunningScript']
/** {@link AutomateApiDomainContractsScriptsScheduledScript} */
export type AutomateApiDomainContractsScriptsScheduledScript =
  schemas['Automate.Api.Domain.Contracts.Scripts.ScheduledScript']
/** {@link LabTechModelsScript} */
export type LabTechModelsScript = schemas['LabTech.Models.Script']
/** {@link LabTechModelsScriptFolder} */
export type LabTechModelsScriptFolder = schemas['LabTech.Models.ScriptFolder']
/** {@link LabTechRESTApiModelsPatchOperationArray} */
export type LabTechRESTApiModelsPatchOperationArray =
  requestBodies['LabTech.RESTApi.Models.PatchOperationArray']

/**
 * @module ScriptingAPI
 */

/**
 * Scripting module
 * @public
 */
export default class ScriptingAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

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

  deleteScriptFolder(entityId: string): Promise<NoContentResponse> {
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
}
