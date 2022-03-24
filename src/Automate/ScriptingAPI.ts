/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type AutomateApiDomainContractsScriptsRunningScriptsRunningScript =
  schemas['Automate.Api.Domain.Contracts.Scripts.RunningScripts.RunningScript']
type AutomateApiDomainContractsScriptsScheduledScript =
  schemas['Automate.Api.Domain.Contracts.Scripts.ScheduledScript']
type LabTechModelsScript = schemas['LabTech.Models.Script']
type LabTechModelsScriptFolder = schemas['LabTech.Models.ScriptFolder']

/**
 * @internal
 */
export default class ScriptingAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GetScriptFolderList(params: CommonParameters = {}): Promise<LabTechModelsScriptFolder[]> {
    return this.request({
      path: `/api/v1/ScriptFolders`,
      method: 'get',
      params,
    })
  }

  PostScriptFolder(ScriptFolder: LabTechModelsScriptFolder): Promise<LabTechModelsScriptFolder> {
    return this.request({
      path: `/api/v1/ScriptFolders`,
      method: 'post',
      data: ScriptFolder,
    })
  }

  GetScriptFolderHierarchy(): Promise<LabTechModelsScriptFolder[]> {
    return this.request({
      path: `/api/v1/ScriptFolders/Hierarchy`,
      method: 'get',
    })
  }

  GetScriptFolder(
    entityId: string,
    params: CommonParameters = {},
  ): Promise<LabTechModelsScriptFolder> {
    return this.request({
      path: `/api/v1/ScriptFolders/${entityId}`,
      method: 'get',
      params,
    })
  }

  DeleteScriptFolder(entityId: string): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/ScriptFolders/${entityId}`,
      method: 'delete',
    })
  }

  PatchScriptFolder(
    entityId: string,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<LabTechModelsScriptFolder> {
    return this.request({
      path: `/api/v1/ScriptFolders/${entityId}`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  GetRunningScripts(
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsScriptsRunningScriptsRunningScript[]> {
    return this.request({
      path: `/api/v1/Scripting/RunningScripts`,
      method: 'get',
      params,
    })
  }

  GetScheduledScripts(
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsScriptsScheduledScript[]> {
    return this.request({
      path: `/api/v1/Scripting/ScriptSchedules`,
      method: 'get',
      params,
    })
  }

  DeleteScriptSchedule(scheduledId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Scripting/ScriptSchedules/${scheduledId}`,
      method: 'delete',
    })
  }

  PatchScriptSchedule(
    scheduledId: number,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<AutomateApiDomainContractsScriptsScheduledScript> {
    return this.request({
      path: `/api/v1/Scripting/ScriptSchedules/${scheduledId}`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  GetScriptList(params: CommonParameters = {}): Promise<LabTechModelsScript[]> {
    return this.request({
      path: `/api/v1/Scripts`,
      method: 'get',
      params,
    })
  }

  PostScript(Script: LabTechModelsScript): Promise<LabTechModelsScript> {
    return this.request({
      path: `/api/v1/Scripts`,
      method: 'post',
      data: Script,
    })
  }

  GetScriptCopyAsync(scriptId: number): Promise<number> {
    return this.request({
      path: `/api/v1/Scripts/${scriptId}/Copy`,
      method: 'post',
    })
  }
}
