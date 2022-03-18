import Manage from './Manage.js'

/**
 * ConfigurationTypeQuestionInfo
 * @typedef {object} ConfigurationTypeQuestionInfo
 * @property {number} [id]  int32
 * @property {ConfigurationTypeReference} [configurationType]
 * @property {string} [fieldType]   nullable
 * @property {string} [entryType]   nullable
 * @property {number} [sequenceNumber]  double nullable
 * @property {string} [question]
 * @property {number} [numberOfDecimals]  int32 nullable
 * @property {boolean} [requiredFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ConfigurationTypeQuestionValueInfo
 * @typedef {object} ConfigurationTypeQuestionValueInfo
 * @property {number} [id]  int32
 * @property {ConfigurationTypeReference} [configurationType]
 * @property {ConfigurationTypeQuestionReference} [question]
 * @property {string} [value]
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * Count
 * @typedef {object} Count
 * @property {number} [count]  int32
 */

/**
 * ConfigurationTypeInfo
 * @typedef {object} ConfigurationTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [systemFlag]   nullable
 * @property {object} [_info]
 */

export default class Configurations extends Manage {
  constructor(props) {
    super(props)
  }

  /**
   * Get ConfigurationTypeQuestionValueInfo
   * @param {number} grandparentId
   * @param {number} parentId
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ConfigurationTypeQuestionInfo>}
   */
  getConfigurationsTypesByGrandparentIdQuestionsByParentIdValuesByIdInfo(
    grandparentId,
    parentId,
    id,
    params = {},
  ) {
    return this.request({
      path: `/configurations/types/${grandparentId}/questions/{parentId}/values/{id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ConfigurationTypeQuestionValueInfo
   * @param {number} grandparentId
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ConfigurationTypeQuestionValueInfo[]>}
   */
  getConfigurationsTypesByGrandparentIdQuestionsByParentIdValuesInfo(
    grandparentId,
    parentId,
    params = {},
  ) {
    return this.request({
      path: `/configurations/types/${grandparentId}/questions/{parentId}/values/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ConfigurationTypeQuestionValueInfos
   * @param {number} grandparentId
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getConfigurationsTypesByGrandparentIdQuestionsByParentIdValuesInfoCount(
    grandparentId,
    parentId,
    params = {},
  ) {
    return this.request({
      path: `/configurations/types/${grandparentId}/questions/{parentId}/values/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ConfigurationTypeQuestionInfo
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ConfigurationTypeQuestionInfo>}
   */
  getConfigurationsTypesByParentIdQuestionsByIdInfo(id, parentId, params = {}) {
    return this.request({
      path: `/configurations/types/${parentId}/questions/{id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ConfigurationTypeQuestionInfos
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ConfigurationTypeQuestionInfo[]>}
   */
  getConfigurationsTypesByParentIdQuestionsInfo(parentId, params = {}) {
    return this.request({
      path: `/configurations/types/${parentId}/questions/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ConfigurationTypeQuestionInfos
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getConfigurationsTypesByParentIdQuestionsInfoCount(parentId, params = {}) {
    return this.request({
      path: `/configurations/types/${parentId}/questions/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ConfigurationTypeInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ConfigurationTypeInfo[]>}
   */
  getConfigurationsTypesInfo(params = {}) {
    return this.request({
      path: `/configurations/types/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of AddressFormatInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getConfigurationsTypesInfoCount(params = {}) {
    return this.request({
      path: `/configurations/types/info/count`,
      method: 'get',
      params,
    })
  }
}
