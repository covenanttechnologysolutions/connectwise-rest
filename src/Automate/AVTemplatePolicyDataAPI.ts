/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions} from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsAVTemplatePolicyData = schemas['LabTech.Models.AVTemplatePolicyData']

/**
 * @internal
 */
export default class AVTemplatePolicyDataAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  
   AVTemplatePolicyData_GetAntivirusTemplatePolicyDataList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/AVTemplatePolicyData`, method: 'get', params
    })
   }

   AVTemplatePolicyData_PostAntivirusTemplatePolicyData(: object): Promise<LabTechModelsAVTemplatePolicyData> {
    return this.request({
      path: `/api/v1/AVTemplatePolicyData`, method: 'post', data: 
    })
   }
}
  