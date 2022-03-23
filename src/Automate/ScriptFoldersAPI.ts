/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsScriptFolder = schemas['LabTech.Models.ScriptFolder']

/**
 * @internal
 */
export default class ScriptFoldersAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  ScriptFolders_GetScriptFolderList(
    params: CommonParameters = {},
  ): Promise<LabTechModelsScriptFolder[]> {
    return this.request({
      path: `/api/v1/ScriptFolders`,
      method: 'get',
      params,
    })
  }

  ScriptFolders_PostScriptFolder(
    ScriptFolder: LabTechModelsScriptFolder,
  ): Promise<LabTechModelsScriptFolder> {
    return this.request({
      path: `/api/v1/ScriptFolders`,
      method: 'post',
      data: ScriptFolder,
    })
  }

  ScriptFolders_GetScriptFolderHierarchy(): Promise<LabTechModelsScriptFolder[]> {
    return this.request({
      path: `/api/v1/ScriptFolders/Hierarchy`,
      method: 'get',
    })
  }

  ScriptFolders_GetScriptFolder(
    entityId: string,
    params: CommonParameters = {},
  ): Promise<LabTechModelsScriptFolder> {
    return this.request({
      path: `/api/v1/ScriptFolders/${entityId}`,
      method: 'get',
      params,
    })
  }

  ScriptFolders_DeleteScriptFolder(entityId: string): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/ScriptFolders/${entityId}`,
      method: 'delete',
    })
  }

  ScriptFolders_PatchScriptFolder(
    entityId: string,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<LabTechModelsScriptFolder> {
    return this.request({
      path: `/api/v1/ScriptFolders/${entityId}`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }
}
