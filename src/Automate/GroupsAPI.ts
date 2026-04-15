/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
import { CommonParameters } from '../AutomateAPI'
import { NoContentResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link LabTechModelsAVTemplatePolicy} */
export type LabTechModelsAVTemplatePolicy = schemas['LabTech.Models.AVTemplatePolicy']
/** {@link LabTechModelsAVTemplatePolicyData} */
export type LabTechModelsAVTemplatePolicyData = schemas['LabTech.Models.AVTemplatePolicyData']
/** {@link LabTechModelsGroup} */
export type LabTechModelsGroup = schemas['LabTech.Models.Group']
/** {@link LabTechModelsGroupComputer} */
export type LabTechModelsGroupComputer = schemas['LabTech.Models.GroupComputer']
/** {@link LabTechModelsGroupNetworkDevice} */
export type LabTechModelsGroupNetworkDevice = schemas['LabTech.Models.GroupNetworkDevice']
/** {@link LabTechModelsTemplateAvailableProperty} */
export type LabTechModelsTemplateAvailableProperty =
  schemas['LabTech.Models.TemplateAvailableProperty']
/** {@link LabTechModelsTemplateProperty} */
export type LabTechModelsTemplateProperty = schemas['LabTech.Models.TemplateProperty']
/** {@link LabTechRESTApiModelsPatchOperationArray} */
export type LabTechRESTApiModelsPatchOperationArray =
  requestBodies['LabTech.RESTApi.Models.PatchOperationArray']

/**
 * Groups module
 * @public
 */
export class GroupsAPI extends AutomateBaseAPI {
  getAntivirusTemplatePolicyList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsAVTemplatePolicy>> {
    return this.request({
      path: `/api/v1/AVTemplatePolicies`,
      method: 'get',
      params,
    })
  }

  postAntivirusTemplatePolicy(
    AVTemplatePolicy: LabTechModelsAVTemplatePolicy,
  ): Promise<LabTechModelsAVTemplatePolicy> {
    return this.request({
      path: `/api/v1/AVTemplatePolicies`,
      method: 'post',
      data: AVTemplatePolicy,
    })
  }

  getAntivirusTemplatePolicyDataList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsAVTemplatePolicyData>> {
    return this.request({
      path: `/api/v1/AVTemplatePolicyData`,
      method: 'get',
      params,
    })
  }

  postAntivirusTemplatePolicyData(
    AVTemplatePolicyData: LabTechModelsAVTemplatePolicyData,
  ): Promise<LabTechModelsAVTemplatePolicyData> {
    return this.request({
      path: `/api/v1/AVTemplatePolicyData`,
      method: 'post',
      data: AVTemplatePolicyData,
    })
  }

  getGroupComputerList(params: CommonParameters = {}): Promise<Array<LabTechModelsGroupComputer>> {
    return this.request({
      path: `/api/v1/GroupComputers`,
      method: 'get',
      params,
    })
  }

  postGroupComputer(
    GroupComputer: LabTechModelsGroupComputer,
  ): Promise<LabTechModelsGroupComputer> {
    return this.request({
      path: `/api/v1/GroupComputers`,
      method: 'post',
      data: GroupComputer,
    })
  }

  getGroupComputer(
    entityId: string,
    params: CommonParameters = {},
  ): Promise<LabTechModelsGroupComputer> {
    return this.request({
      path: `/api/v1/GroupComputers/${entityId}`,
      method: 'get',
      params,
    })
  }

  putGroupComputer(
    entityId: string,
    GroupComputer: LabTechModelsGroupComputer,
  ): Promise<LabTechModelsGroupComputer> {
    return this.request({
      path: `/api/v1/GroupComputers/${entityId}`,
      method: 'put',
      data: GroupComputer,
    })
  }

  deleteGroupComputer(entityId: string): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/GroupComputers/${entityId}`,
      method: 'delete',
    })
  }

  patchGroupComputer(
    entityId: string,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<LabTechModelsGroupComputer> {
    return this.request({
      path: `/api/v1/GroupComputers/${entityId}`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  getGroupNetworkDeviceList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsGroupNetworkDevice>> {
    return this.request({
      path: `/api/v1/GroupNetworkDevices`,
      method: 'get',
      params,
    })
  }

  postGroupNetworkDevice(
    GroupNetworkDevice: LabTechModelsGroupNetworkDevice,
  ): Promise<LabTechModelsGroupNetworkDevice> {
    return this.request({
      path: `/api/v1/GroupNetworkDevices`,
      method: 'post',
      data: GroupNetworkDevice,
    })
  }

  getGroupNetworkDevice(
    entityId: string,
    params: CommonParameters = {},
  ): Promise<LabTechModelsGroupNetworkDevice> {
    return this.request({
      path: `/api/v1/GroupNetworkDevices/${entityId}`,
      method: 'get',
      params,
    })
  }

  putGroupNetworkDevice(
    entityId: string,
    GroupNetworkDevice: LabTechModelsGroupNetworkDevice,
  ): Promise<LabTechModelsGroupNetworkDevice> {
    return this.request({
      path: `/api/v1/GroupNetworkDevices/${entityId}`,
      method: 'put',
      data: GroupNetworkDevice,
    })
  }

  deleteGroupNetworkDevice(entityId: string): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/GroupNetworkDevices/${entityId}`,
      method: 'delete',
    })
  }

  patchGroupNetworkDevice(
    entityId: string,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<LabTechModelsGroupNetworkDevice> {
    return this.request({
      path: `/api/v1/GroupNetworkDevices/${entityId}`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  getGroupList(params: CommonParameters = {}): Promise<Array<LabTechModelsGroup>> {
    return this.request({
      path: `/api/v1/Groups`,
      method: 'get',
      params,
    })
  }

  postGroup(Group: LabTechModelsGroup): Promise<LabTechModelsGroup> {
    return this.request({
      path: `/api/v1/Groups`,
      method: 'post',
      data: Group,
    })
  }

  getGroup(entityId: number, params: CommonParameters = {}): Promise<LabTechModelsGroup> {
    return this.request({
      path: `/api/v1/Groups/${entityId}`,
      method: 'get',
      params,
    })
  }

  putGroup(entityId: number, Group: LabTechModelsGroup): Promise<LabTechModelsGroup> {
    return this.request({
      path: `/api/v1/Groups/${entityId}`,
      method: 'put',
      data: Group,
    })
  }

  deleteGroup(entityId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Groups/${entityId}`,
      method: 'delete',
    })
  }

  patchGroup(
    entityId: number,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<LabTechModelsGroup> {
    return this.request({
      path: `/api/v1/Groups/${entityId}`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  getTemplateAvailablePropertyList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsTemplateAvailableProperty>> {
    return this.request({
      path: `/api/v1/TemplateAvailableProperties`,
      method: 'get',
      params,
    })
  }

  postTemplateAvailableProperty(
    TemplateAvailableProperty: LabTechModelsTemplateAvailableProperty,
  ): Promise<LabTechModelsTemplateAvailableProperty> {
    return this.request({
      path: `/api/v1/TemplateAvailableProperties`,
      method: 'post',
      data: TemplateAvailableProperty,
    })
  }

  getTemplatePropertyList(
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsTemplateProperty>> {
    return this.request({
      path: `/api/v1/TemplateProperties`,
      method: 'get',
      params,
    })
  }

  postTemplateProperty(
    TemplateProperty: LabTechModelsTemplateProperty,
  ): Promise<LabTechModelsTemplateProperty> {
    return this.request({
      path: `/api/v1/TemplateProperties`,
      method: 'post',
      data: TemplateProperty,
    })
  }
}
