/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions} from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsGroup = schemas['LabTech.Models.Group']

/**
 * @internal
 */
export default class GroupsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  
   Groups_GetGroupList(params: CommonParameters = {}): Promise<LabTechModelsGroup[]> {
    return this.request({
      path: `/api/v1/Groups`, method: 'get', params
    })
   }

   Groups_PostGroup(: object): Promise<LabTechModelsGroup> {
    return this.request({
      path: `/api/v1/Groups`, method: 'post', data: 
    })
   }
}
  