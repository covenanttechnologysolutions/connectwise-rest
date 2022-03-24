/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsAVTemplatePolicy = schemas['LabTech.Models.AVTemplatePolicy']
type LabTechModelsAVTemplatePolicyData = schemas['LabTech.Models.AVTemplatePolicyData']
type LabTechModelsGroup = schemas['LabTech.Models.Group']
type LabTechModelsTemplateAvailableProperty = schemas['LabTech.Models.TemplateAvailableProperty']
type LabTechModelsTemplateProperty = schemas['LabTech.Models.TemplateProperty']

/**
 * @internal
 */
export default class AVTemplatePoliciesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GetAntivirusTemplatePolicyList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/AVTemplatePolicies`,
      method: 'get',
      params,
    })
  }

  PostAntivirusTemplatePolicy(
    AVTemplatePolicy: LabTechModelsAVTemplatePolicy,
  ): Promise<LabTechModelsAVTemplatePolicy> {
    return this.request({
      path: `/api/v1/AVTemplatePolicies`,
      method: 'post',
      data: AVTemplatePolicy,
    })
  }

  GetAntivirusTemplatePolicyDataList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/AVTemplatePolicyData`,
      method: 'get',
      params,
    })
  }

  PostAntivirusTemplatePolicyData(
    AVTemplatePolicyData: LabTechModelsAVTemplatePolicyData,
  ): Promise<LabTechModelsAVTemplatePolicyData> {
    return this.request({
      path: `/api/v1/AVTemplatePolicyData`,
      method: 'post',
      data: AVTemplatePolicyData,
    })
  }

  GetGroupList(params: CommonParameters = {}): Promise<LabTechModelsGroup[]> {
    return this.request({
      path: `/api/v1/Groups`,
      method: 'get',
      params,
    })
  }

  PostGroup(Group: LabTechModelsGroup): Promise<LabTechModelsGroup> {
    return this.request({
      path: `/api/v1/Groups`,
      method: 'post',
      data: Group,
    })
  }

  GetTemplateAvailablePropertyList(
    params: CommonParameters = {},
  ): Promise<LabTechModelsTemplateAvailableProperty[]> {
    return this.request({
      path: `/api/v1/TemplateAvailableProperties`,
      method: 'get',
      params,
    })
  }

  PostTemplateAvailableProperty(
    TemplateAvailableProperty: LabTechModelsTemplateAvailableProperty,
  ): Promise<LabTechModelsTemplateAvailableProperty> {
    return this.request({
      path: `/api/v1/TemplateAvailableProperties`,
      method: 'post',
      data: TemplateAvailableProperty,
    })
  }

  GetTemplatePropertyList(params: CommonParameters = {}): Promise<LabTechModelsTemplateProperty[]> {
    return this.request({
      path: `/api/v1/TemplateProperties`,
      method: 'get',
      params,
    })
  }

  PostTemplateProperty(
    TemplateProperty: LabTechModelsTemplateProperty,
  ): Promise<LabTechModelsTemplateProperty> {
    return this.request({
      path: `/api/v1/TemplateProperties`,
      method: 'post',
      data: TemplateProperty,
    })
  }
}
