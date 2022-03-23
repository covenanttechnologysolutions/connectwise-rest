/* This file was auto-generated, do not manually edit. */
import Manage from '../Manage'
import { components } from '../ManageTypes'
import { CommonParameters, CWMOptions } from '../ManageAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type ConfigurationTypeInfo = schemas['ConfigurationTypeInfo']
type ConfigurationTypeQuestionInfo = schemas['ConfigurationTypeQuestionInfo']
type ConfigurationTypeQuestionValueInfo = schemas['ConfigurationTypeQuestionValueInfo']
type Count = schemas['Count']

/**
 * @internal
 */
export default class ConfigurationsAPI extends Manage {
  constructor(props: CWMOptions) {
    super(props)
  }

  getConfigurationsTypesByGrandparentIdQuestionsByParentIdValuesByIdInfo(
    grandparentId: number,
    parentId: number,
    id: number,
    params: CommonParameters = {},
  ): Promise<ConfigurationTypeQuestionInfo> {
    return this.request({
      path: `/configurations/types/${grandparentId}/questions/{parentId}/values/{id}/info`,
      method: 'get',
      params,
    })
  }

  getConfigurationsTypesByGrandparentIdQuestionsByParentIdValuesInfo(
    grandparentId: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ConfigurationTypeQuestionValueInfo[]> {
    return this.request({
      path: `/configurations/types/${grandparentId}/questions/{parentId}/values/info`,
      method: 'get',
      params,
    })
  }

  getConfigurationsTypesByGrandparentIdQuestionsByParentIdValuesInfoCount(
    grandparentId: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/configurations/types/${grandparentId}/questions/{parentId}/values/info/count`,
      method: 'get',
      params,
    })
  }

  getConfigurationsTypesByParentIdQuestionsByIdInfo(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ConfigurationTypeQuestionInfo> {
    return this.request({
      path: `/configurations/types/${parentId}/questions/{id}/info`,
      method: 'get',
      params,
    })
  }

  getConfigurationsTypesByParentIdQuestionsInfo(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ConfigurationTypeQuestionInfo[]> {
    return this.request({
      path: `/configurations/types/${parentId}/questions/info`,
      method: 'get',
      params,
    })
  }

  getConfigurationsTypesByParentIdQuestionsInfoCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/configurations/types/${parentId}/questions/info/count`,
      method: 'get',
      params,
    })
  }

  getConfigurationsTypesInfo(params: CommonParameters = {}): Promise<ConfigurationTypeInfo[]> {
    return this.request({
      path: `/configurations/types/info`,
      method: 'get',
      params,
    })
  }

  getConfigurationsTypesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/configurations/types/info/count`,
      method: 'get',
      params,
    })
  }
}
