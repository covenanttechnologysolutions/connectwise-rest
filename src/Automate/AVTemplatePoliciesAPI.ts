/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
export type LabTechModelsAVTemplatePolicy = schemas['LabTech.Models.AVTemplatePolicy']
export type LabTechModelsAVTemplatePolicyData = schemas['LabTech.Models.AVTemplatePolicyData']
export type LabTechModelsGroup = schemas['LabTech.Models.Group']
export type LabTechModelsTemplateAvailableProperty =
  schemas['LabTech.Models.TemplateAvailableProperty']
export type LabTechModelsTemplateProperty = schemas['LabTech.Models.TemplateProperty']

/**
 * @public
 */
export default class AVTemplatePoliciesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  getAntivirusTemplatePolicyList(params: CommonParameters = {}): Promise<object> {
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

  getAntivirusTemplatePolicyDataList(params: CommonParameters = {}): Promise<object> {
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
