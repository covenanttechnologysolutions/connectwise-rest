/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions} from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsScript = schemas['LabTech.Models.Script']

/**
 * @internal
 */
export default class ScriptsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  
   Scripts_GetScriptList(params: CommonParameters = {}): Promise<LabTechModelsScript[]> {
    return this.request({
      path: `/api/v1/Scripts`, method: 'get', params
    })
   }

   Scripts_PostScript(: object): Promise<LabTechModelsScript> {
    return this.request({
      path: `/api/v1/Scripts`, method: 'post', data: 
    })
   }

   ScriptActions_GetScriptCopyAsync(scriptId: number): Promise<number> {
    return this.request({
      path: `/api/v1/Scripts/${scriptId}/Copy`, method: 'post'
    })
   }
}
  