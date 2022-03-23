/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions} from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']


/**
 * @internal
 */
export default class PatchActionsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  
   PatchActions_DeployAllApproved(: object): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/DeployAllApproved`, method: 'post', data: 
    })
   }

   PatchActions_DeployAllSecurity(: object): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/DeployAllSecurity`, method: 'post', data: 
    })
   }

   PatchActions_ReattemptFailed(: object): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/ReattemptFailed`, method: 'post', data: 
    })
   }

   PatchActions_SetToPilotStage(: object): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/SetToPilotStage`, method: 'post', data: 
    })
   }

   PatchActions_SetToProductionStage(: object): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/SetToProductionStage`, method: 'post', data: 
    })
   }

   PatchActions_SetToTestStage(: object): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/SetToTestStage`, method: 'post', data: 
    })
   }
}
  