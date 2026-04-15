/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
import { CommonParameters } from '../AutomateAPI'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link LabTechModelsNetworkDevice} */
export type LabTechModelsNetworkDevice = schemas['LabTech.Models.NetworkDevice']
/** {@link LabTechModelsRouter} */
export type LabTechModelsRouter = schemas['LabTech.Models.Router']
/** {@link LabTechRESTApiModelsPatchOperationArray} */
export type LabTechRESTApiModelsPatchOperationArray =
  requestBodies['LabTech.RESTApi.Models.PatchOperationArray']

/**
 * NetworkDevices module
 * @public
 */
export class NetworkDevicesAPI extends AutomateBaseAPI {
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

  getNetworkDevice(
    deviceId: number,
    params: CommonParameters = {},
  ): Promise<LabTechModelsNetworkDevice> {
    return this.request({
      path: `/api/v1/NetworkDevices/${deviceId}`,
      method: 'get',
      params,
    })
  }

  patchNetworkDevice(
    deviceId: number,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<LabTechModelsNetworkDevice> {
    return this.request({
      path: `/api/v1/NetworkDevices/${deviceId}`,
      method: 'patch',
      data: PatchOperationArray,
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
