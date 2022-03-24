/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsNetworkDevice = schemas['LabTech.Models.NetworkDevice']
type LabTechModelsRouter = schemas['LabTech.Models.Router']

/**
 * @internal
 */
export default class NetworkDevicesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GetNetworkDeviceList(params: CommonParameters = {}): Promise<LabTechModelsNetworkDevice[]> {
    return this.request({
      path: `/api/v1/NetworkDevices`,
      method: 'get',
      params,
    })
  }

  PostNetworkDevice(
    NetworkDevice: LabTechModelsNetworkDevice,
  ): Promise<LabTechModelsNetworkDevice> {
    return this.request({
      path: `/api/v1/NetworkDevices`,
      method: 'post',
      data: NetworkDevice,
    })
  }

  GetRouters(params: CommonParameters = {}): Promise<LabTechModelsRouter[]> {
    return this.request({
      path: `/api/v1/routers`,
      method: 'get',
      params,
    })
  }
}
