/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions} from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type AutomateApiDomainContractsScriptsRunningScriptsRunningScript = schemas['Automate.Api.Domain.Contracts.Scripts.RunningScripts.RunningScript']
type AutomateApiDomainContractsScriptsScheduledScript = schemas['Automate.Api.Domain.Contracts.Scripts.ScheduledScript']

/**
 * @internal
 */
export default class ScriptingAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  
   RunningScript_GetRunningScripts(params: CommonParameters = {}): Promise<AutomateApiDomainContractsScriptsRunningScriptsRunningScript[]> {
    return this.request({
      path: `/api/v1/Scripting/RunningScripts`, method: 'get', params
    })
   }

   ScheduledScript_GetScheduledScripts(params: CommonParameters = {}): Promise<AutomateApiDomainContractsScriptsScheduledScript[]> {
    return this.request({
      path: `/api/v1/Scripting/ScriptSchedules`, method: 'get', params
    })
   }

   ScheduledScript_DeleteScriptSchedule(scheduledId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Scripting/ScriptSchedules/${scheduledId}`, method: 'delete'
    })
   }

   ScheduledScript_PatchScriptSchedule(scheduledId: number, : object): Promise<AutomateApiDomainContractsScriptsScheduledScript> {
    return this.request({
      path: `/api/v1/Scripting/ScriptSchedules/${scheduledId}`, method: 'patch', data: 
    })
   }
}
  