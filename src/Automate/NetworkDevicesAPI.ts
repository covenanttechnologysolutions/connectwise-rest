/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions} from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsNetworkDevice = schemas['LabTech.Models.NetworkDevice']

/**
 * @internal
 */
export default class NetworkDevicesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  
   NetworkDevices_GetNetworkDeviceList(params: CommonParameters = {}): Promise<LabTechModelsNetworkDevice[]> {
    return this.request({
      path: `/api/v1/NetworkDevices`, method: 'get', params
    })
   }

   NetworkDevices_PostNetworkDevice(: LabTechModelsNetworkDevice): Promise<LabTechModelsNetworkDevice> {
    return this.request({
      path: `/api/v1/NetworkDevices`, method: 'post', data: 
    })
   }
}
  