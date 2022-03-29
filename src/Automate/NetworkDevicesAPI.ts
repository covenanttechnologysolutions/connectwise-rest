/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link LabTechModelsNetworkDevice} */
export type LabTechModelsNetworkDevice = schemas['LabTech.Models.NetworkDevice']
/** {@link LabTechModelsRouter} */
export type LabTechModelsRouter = schemas['LabTech.Models.Router']

/**
 * @module NetworkDevicesAPI
 */

/**
 * NetworkDevices module
 * @public
 */
export class NetworkDevicesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  getNetworkDeviceList(params: CommonParameters = {}): Promise<Array<LabTechModelsNetworkDevice>> {
    return this.request({
      path: `/api/v1/NetworkDevices`,
      method: 'get',
      params,
    })
  }

  postNetworkDevice(
    NetworkDevice: LabTechModelsNetworkDevice,
  ): Promise<LabTechModelsNetworkDevice> {
    return this.request({
      path: `/api/v1/NetworkDevices`,
      method: 'post',
      data: NetworkDevice,
    })
  }

  getRouters(params: CommonParameters = {}): Promise<Array<LabTechModelsRouter>> {
    return this.request({
      path: `/api/v1/routers`,
      method: 'get',
      params,
    })
  }
}
