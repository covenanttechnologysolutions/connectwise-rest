import Manage from './Manage.js'

/**
 * Campaign
 * @typedef {object} Campaign
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {CampaignTypeReference} [type]
 * @property {CampaignSubTypeReference} [subType]
 * @property {CampaignStatusReference} [status]
 * @property {string} startDate  date-time
 * @property {string} [endDate]  date-time
 * @property {number} [locationId]  int32 nullable
 * @property {MemberReference} [member]
 * @property {boolean} [inactive]   nullable
 * @property {number} [inactiveDaysAfterEnd]  int32 nullable
 * @property {string} [notes]
 * @property {GroupReference} [defaultGroup]
 * @property {number} [marketingManagerDefaultTrackId]  int32 nullable
 * @property {number} [opportunityDefaultTrackId]  int32 nullable
 * @property {number} [impressions]  int32 nullable
 * @property {number} [budgetRevenue]  double nullable
 * @property {number} [budgetCost]  double nullable
 * @property {number} [actualCost]  double nullable
 * @property {number} [budgetGrossMargin]  double nullable
 * @property {number} [budgetROI]  double nullable
 * @property {number} [actualRevenue]  double nullable
 * @property {number} [actualGrossMargin]  double nullable
 * @property {number} [actualROI]  double nullable
 * @property {number} [emailsSent]  int32 nullable
 * @property {object} [_info]
 */

/**
 * ActivityReference
 * @typedef {object} ActivityReference
 * @property {number} [id]  int32 nullable
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * Count
 * @typedef {object} Count
 * @property {number} [count]  int32
 */

/**
 * OpportunityReference
 * @typedef {object} OpportunityReference
 * @property {number} [id]  int32 nullable
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * CampaignAudit
 * @typedef {object} CampaignAudit
 * @property {number} [id]  int32
 * @property {number} emailsSent  int32 nullable
 * @property {number} [emailsUnsent]  int32 nullable
 * @property {number} [documentsCreated]  int32 nullable
 * @property {string} [emailSubject]  Max length: 1000;
 * @property {GroupReference} [group]
 * @property {number} [campaignId]  int32 nullable
 * @property {string} [createdBy]
 * @property {string} [dateCreated]
 */

/**
 * EmailOpened
 * @typedef {object} EmailOpened
 * @property {number} [id]  int32
 * @property {number} [campaignId]  int32 nullable
 * @property {number} contactId  int32 nullable
 * @property {string} [dateOpened]  date-time
 */

/**
 * FormSubmitted
 * @typedef {object} FormSubmitted
 * @property {number} [id]  int32
 * @property {number} [campaignId]  int32 nullable
 * @property {number} contactId  int32 nullable
 * @property {string} [dateSubmitted]  date-time
 * @property {string} url  Max length: 2083;
 * @property {string} [queryString]
 * @property {string} [pageType]
 * @property {string} [pageSubType]
 * @property {string} [topic]
 * @property {string} [version]
 * @property {string} [status]
 */

/**
 * LinkClicked
 * @typedef {object} LinkClicked
 * @property {number} [id]  int32
 * @property {number} [campaignId]  int32 nullable
 * @property {number} contactId  int32 nullable
 * @property {string} [dateClicked]  date-time
 * @property {string} url  Max length: 2083;
 * @property {string} [queryString]
 */

/**
 * CampaignStatus
 * @typedef {object} CampaignStatus
 * @property {number} [id]  int32
 * @property {string} name  Max length: 100;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * CampaignSubTypeCampaignSubType
 * @typedef {object} CampaignSubTypeCampaignSubType
 * @property {number} [id]  int32
 * @property {CampaignTypeReference} [type]
 * @property {string} name  Max length: 100;
 * @property {object} [_info]
 */

/**
 * CampaignType
 * @typedef {object} CampaignType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 100;
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * CampaignTypeInfo
 * @typedef {object} CampaignTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * TypeSubTypeCampaignSubType
 * @typedef {object} TypeSubTypeCampaignSubType
 * @property {number} [id]  int32
 * @property {number} [typeId]  int32 nullable
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * Group
 * @typedef {object} Group
 * @property {number} [id]  int32
 * @property {string} name
 * @property {string} [publicDescription]  Max length: 255;
 * @property {boolean} [publicFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * Usage
 * @typedef {object} Usage
 * @property {string} [type]
 * @property {number} [count]  int32 nullable
 * @property {number} [id]  int32 nullable
 * @property {string} [description]
 * @property {string} [hyperlink]
 * @property {string} [typeKey]
 */

/**
 * MarketingCompany
 * @typedef {object} MarketingCompany
 * @property {number} [id]  int32
 * @property {number} [groupId]  int32 nullable
 * @property {boolean} [defaultContactFlag]   nullable
 * @property {boolean} [allContactsFlag]   nullable
 * @property {boolean} [unsubscribeFlag]   nullable
 * @property {object} [_info]
 */

/**
 * MarketingContact
 * @typedef {object} MarketingContact
 * @property {number} [id]  int32
 * @property {number} [groupId]  int32 nullable
 * @property {string} [note]  Max length: 50;
 * @property {boolean} [unsubscribeFlag]   nullable
 * @property {object} [_info]
 */

export default class Marketing extends Manage {
  constructor(props) {
    super(props)
  }

  /**
   * Get List of Campaign
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Campaign[]>}
   */
  getMarketingCampaigns(params = {}) {
    return this.request({
      path: `/marketing/campaigns`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Campaign
   * @param {Campaign} campaign campaign
   * @returns {Promise<Campaign>}
   */
  postMarketingCampaigns(campaign) {
    return this.request({
      path: `/marketing/campaigns`,
      method: 'post',
      data: campaign,
    })
  }
  /**
   * Get Campaign
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
   * @returns {Promise<Campaign>}
   */
  getMarketingCampaignsById(id, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Campaign
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteMarketingCampaignsById(id) {
    return this.request({
      path: `/marketing/campaigns/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Campaign
   * @param {number} id
   * @param {Campaign} campaign campaign
   * @returns {Promise<Campaign>}
   */
  putMarketingCampaignsById(id, campaign) {
    return this.request({
      path: `/marketing/campaigns/${id}`,
      method: 'put',
      data: campaign,
    })
  }

  /**
   * Patch Campaign
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Campaign>}
   */
  patchMarketingCampaignsById(id, patchOperations) {
    return this.request({
      path: `/marketing/campaigns/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of ActivityReference
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
   * @returns {Promise<ActivityReference[]>}
   */
  getMarketingCampaignsByIdActivities(id, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${id}/activities`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ActivityReference
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
   * @returns {Promise<Count>}
   */
  getMarketingCampaignsByIdActivitiesCount(id, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${id}/activities/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OpportunityReference
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
   * @returns {Promise<OpportunityReference[]>}
   */
  getMarketingCampaignsByIdOpportunities(id, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${id}/opportunities`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of OpportunityReference
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
   * @returns {Promise<Count>}
   */
  getMarketingCampaignsByIdOpportunitiesCount(id, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${id}/opportunities/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CampaignAudit
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
   * @returns {Promise<CampaignAudit[]>}
   */
  getMarketingCampaignsByParentIdAudits(parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/audits`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CampaignAudit
   * @param {number} parentId
   * @param {CampaignAudit} campaignAudit campaignAudit
   * @returns {Promise<CampaignAudit>}
   */
  postMarketingCampaignsByParentIdAudits(parentId, campaignAudit) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/audits`,
      method: 'post',
      data: campaignAudit,
    })
  }
  /**
   * Get CampaignAudit
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
   * @returns {Promise<CampaignAudit>}
   */
  getMarketingCampaignsByParentIdAuditsById(id, parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/audits/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CampaignAudit
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteMarketingCampaignsByParentIdAuditsById(id, parentId) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/audits/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put CampaignAudit
   * @param {number} id
   * @param {number} parentId
   * @param {CampaignAudit} campaignAudit campaignAudit
   * @returns {Promise<CampaignAudit>}
   */
  putMarketingCampaignsByParentIdAuditsById(id, parentId, campaignAudit) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/audits/{id}`,
      method: 'put',
      data: campaignAudit,
    })
  }

  /**
   * Patch CampaignAudit
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CampaignAudit>}
   */
  patchMarketingCampaignsByParentIdAuditsById(id, parentId, patchOperations) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/audits/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of CampaignAudit
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
  getMarketingCampaignsByParentIdAuditsCount(parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/audits/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of EmailOpened
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
   * @returns {Promise<EmailOpened[]>}
   */
  getMarketingCampaignsByParentIdEmailsOpened(parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/emailsOpened`,
      method: 'get',
      params,
    })
  }

  /**
   * Post EmailOpened
   * @param {number} parentId
   * @param {EmailOpened} emailOpened emailOpened
   * @returns {Promise<EmailOpened>}
   */
  postMarketingCampaignsByParentIdEmailsOpened(parentId, emailOpened) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/emailsOpened`,
      method: 'post',
      data: emailOpened,
    })
  }
  /**
   * Get EmailOpened
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
   * @returns {Promise<EmailOpened>}
   */
  getMarketingCampaignsByParentIdEmailsOpenedById(id, parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/emailsOpened/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete EmailOpened
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteMarketingCampaignsByParentIdEmailsOpenedById(id, parentId) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/emailsOpened/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put EmailOpened
   * @param {number} id
   * @param {number} parentId
   * @param {EmailOpened} emailOpened emailOpened
   * @returns {Promise<EmailOpened>}
   */
  putMarketingCampaignsByParentIdEmailsOpenedById(id, parentId, emailOpened) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/emailsOpened/{id}`,
      method: 'put',
      data: emailOpened,
    })
  }

  /**
   * Patch EmailOpened
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<EmailOpened>}
   */
  patchMarketingCampaignsByParentIdEmailsOpenedById(id, parentId, patchOperations) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/emailsOpened/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of EmailOpened
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
  getMarketingCampaignsByParentIdEmailsOpenedCount(parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/emailsOpened/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of FormSubmitted
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
   * @returns {Promise<FormSubmitted[]>}
   */
  getMarketingCampaignsByParentIdFormsSubmitted(parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/formsSubmitted`,
      method: 'get',
      params,
    })
  }

  /**
   * Post FormSubmitted
   * @param {number} parentId
   * @param {FormSubmitted} formSubmitted formSubmitted
   * @returns {Promise<FormSubmitted>}
   */
  postMarketingCampaignsByParentIdFormsSubmitted(parentId, formSubmitted) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/formsSubmitted`,
      method: 'post',
      data: formSubmitted,
    })
  }
  /**
   * Get FormSubmitted
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
   * @returns {Promise<FormSubmitted>}
   */
  getMarketingCampaignsByParentIdFormsSubmittedById(id, parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/formsSubmitted/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete FormSubmitted
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteMarketingCampaignsByParentIdFormsSubmittedById(id, parentId) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/formsSubmitted/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put FormSubmitted
   * @param {number} id
   * @param {number} parentId
   * @param {FormSubmitted} formSubmitted formSubmitted
   * @returns {Promise<FormSubmitted>}
   */
  putMarketingCampaignsByParentIdFormsSubmittedById(id, parentId, formSubmitted) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/formsSubmitted/{id}`,
      method: 'put',
      data: formSubmitted,
    })
  }

  /**
   * Patch FormSubmitted
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<FormSubmitted>}
   */
  patchMarketingCampaignsByParentIdFormsSubmittedById(id, parentId, patchOperations) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/formsSubmitted/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of FormSubmitted
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
  getMarketingCampaignsByParentIdFormsSubmittedCount(parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/formsSubmitted/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of LinkClicked
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
   * @returns {Promise<LinkClicked[]>}
   */
  getMarketingCampaignsByParentIdLinksClicked(parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/linksClicked`,
      method: 'get',
      params,
    })
  }

  /**
   * Post LinkClicked
   * @param {number} parentId
   * @param {LinkClicked} linkClicked linkClicked
   * @returns {Promise<LinkClicked>}
   */
  postMarketingCampaignsByParentIdLinksClicked(parentId, linkClicked) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/linksClicked`,
      method: 'post',
      data: linkClicked,
    })
  }
  /**
   * Get LinkClicked
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
   * @returns {Promise<LinkClicked>}
   */
  getMarketingCampaignsByParentIdLinksClickedById(id, parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/linksClicked/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete LinkClicked
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteMarketingCampaignsByParentIdLinksClickedById(id, parentId) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/linksClicked/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put LinkClicked
   * @param {number} id
   * @param {number} parentId
   * @param {LinkClicked} linkClicked linkClicked
   * @returns {Promise<LinkClicked>}
   */
  putMarketingCampaignsByParentIdLinksClickedById(id, parentId, linkClicked) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/linksClicked/{id}`,
      method: 'put',
      data: linkClicked,
    })
  }

  /**
   * Patch LinkClicked
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<LinkClicked>}
   */
  patchMarketingCampaignsByParentIdLinksClickedById(id, parentId, patchOperations) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/linksClicked/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of LinkClicked
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
  getMarketingCampaignsByParentIdLinksClickedCount(parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/${parentId}/linksClicked/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Campaign
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
  getMarketingCampaignsCount(params = {}) {
    return this.request({
      path: `/marketing/campaigns/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CampaignStatus
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CampaignStatus[]>}
   */
  getMarketingCampaignsStatuses(params = {}) {
    return this.request({
      path: `/marketing/campaigns/statuses`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CampaignStatus
   * @param {CampaignStatus} campaignStatus campaignStatus
   * @returns {Promise<CampaignStatus>}
   */
  postMarketingCampaignsStatuses(campaignStatus) {
    return this.request({
      path: `/marketing/campaigns/statuses`,
      method: 'post',
      data: campaignStatus,
    })
  }
  /**
   * Get CampaignStatus
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
   * @returns {Promise<CampaignStatus>}
   */
  getMarketingCampaignsStatusesById(id, params = {}) {
    return this.request({
      path: `/marketing/campaigns/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CampaignStatus
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteMarketingCampaignsStatusesById(id) {
    return this.request({
      path: `/marketing/campaigns/statuses/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put CampaignStatus
   * @param {number} id
   * @param {CampaignStatus} campaignStatus campaignStatus
   * @returns {Promise<CampaignStatus>}
   */
  putMarketingCampaignsStatusesById(id, campaignStatus) {
    return this.request({
      path: `/marketing/campaigns/statuses/${id}`,
      method: 'put',
      data: campaignStatus,
    })
  }

  /**
   * Patch CampaignStatus
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CampaignStatus>}
   */
  patchMarketingCampaignsStatusesById(id, patchOperations) {
    return this.request({
      path: `/marketing/campaigns/statuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of CampaignStatus
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
  getMarketingCampaignsStatusesCount(params = {}) {
    return this.request({
      path: `/marketing/campaigns/statuses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CampaignSubType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CampaignSubTypeCampaignSubType[]>}
   */
  getMarketingCampaignsSubTypes(params = {}) {
    return this.request({
      path: `/marketing/campaigns/subTypes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CampaignSubType
   * @param {CampaignSubTypeCampaignSubType} campaignSubType campaignSubType
   * @returns {Promise<CampaignSubTypeCampaignSubType>}
   */
  postMarketingCampaignsSubTypes(campaignSubType) {
    return this.request({
      path: `/marketing/campaigns/subTypes`,
      method: 'post',
      data: campaignSubType,
    })
  }
  /**
   * Get CampaignSubType
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
   * @returns {Promise<CampaignSubTypeCampaignSubType>}
   */
  getMarketingCampaignsSubTypesById(id, params = {}) {
    return this.request({
      path: `/marketing/campaigns/subTypes/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CampaignSubType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteMarketingCampaignsSubTypesById(id) {
    return this.request({
      path: `/marketing/campaigns/subTypes/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put CampaignSubType
   * @param {number} id
   * @param {CampaignSubTypeCampaignSubType} campaignSubType campaignSubType
   * @returns {Promise<CampaignSubTypeCampaignSubType>}
   */
  putMarketingCampaignsSubTypesById(id, campaignSubType) {
    return this.request({
      path: `/marketing/campaigns/subTypes/${id}`,
      method: 'put',
      data: campaignSubType,
    })
  }

  /**
   * Patch CampaignSubType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CampaignSubTypeCampaignSubType>}
   */
  patchMarketingCampaignsSubTypesById(id, patchOperations) {
    return this.request({
      path: `/marketing/campaigns/subTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of CampaignSubType
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
  getMarketingCampaignsSubTypesCount(params = {}) {
    return this.request({
      path: `/marketing/campaigns/subTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CampaignType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CampaignType[]>}
   */
  getMarketingCampaignsTypes(params = {}) {
    return this.request({
      path: `/marketing/campaigns/types`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CampaignType
   * @param {CampaignType} campaignType campaignType
   * @returns {Promise<CampaignType>}
   */
  postMarketingCampaignsTypes(campaignType) {
    return this.request({
      path: `/marketing/campaigns/types`,
      method: 'post',
      data: campaignType,
    })
  }
  /**
   * Get CampaignType
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
   * @returns {Promise<CampaignType>}
   */
  getMarketingCampaignsTypesById(id, params = {}) {
    return this.request({
      path: `/marketing/campaigns/types/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CampaignType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteMarketingCampaignsTypesById(id) {
    return this.request({
      path: `/marketing/campaigns/types/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put CampaignType
   * @param {number} id
   * @param {CampaignType} campaignType campaignType
   * @returns {Promise<CampaignType>}
   */
  putMarketingCampaignsTypesById(id, campaignType) {
    return this.request({
      path: `/marketing/campaigns/types/${id}`,
      method: 'put',
      data: campaignType,
    })
  }

  /**
   * Patch CampaignType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CampaignType>}
   */
  patchMarketingCampaignsTypesById(id, patchOperations) {
    return this.request({
      path: `/marketing/campaigns/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get CampaignTypeInfo
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
   * @returns {Promise<CampaignTypeInfo>}
   */
  getMarketingCampaignsTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/marketing/campaigns/types/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CampaignSubType
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
   * @returns {Promise<TypeSubTypeCampaignSubType[]>}
   */
  getMarketingCampaignsTypesByParentIdSubTypes(parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/types/${parentId}/subTypes`,
      method: 'get',
      params,
    })
  }
  /**
   * Get CampaignSubType
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
   * @returns {Promise<TypeSubTypeCampaignSubType>}
   */
  getMarketingCampaignsTypesByParentIdSubTypesById(id, parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/types/${parentId}/subTypes/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CampaignSubType
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
  getMarketingCampaignsTypesByParentIdSubTypesCount(parentId, params = {}) {
    return this.request({
      path: `/marketing/campaigns/types/${parentId}/subTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CampaignType
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
  getMarketingCampaignsTypesCount(params = {}) {
    return this.request({
      path: `/marketing/campaigns/types/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CampaignTypeInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CampaignTypeInfo[]>}
   */
  getMarketingCampaignsTypesInfo(params = {}) {
    return this.request({
      path: `/marketing/campaigns/types/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CampaignTypeInfos
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
  getMarketingCampaignsTypesInfoCount(params = {}) {
    return this.request({
      path: `/marketing/campaigns/types/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Group
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Group[]>}
   */
  getMarketingGroups(params = {}) {
    return this.request({
      path: `/marketing/groups`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Group
   * @param {Group} group group
   * @returns {Promise<Group>}
   */
  postMarketingGroups(group) {
    return this.request({
      path: `/marketing/groups`,
      method: 'post',
      data: group,
    })
  }
  /**
   * Get Group
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
   * @returns {Promise<Group>}
   */
  getMarketingGroupsById(id, params = {}) {
    return this.request({
      path: `/marketing/groups/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Group
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteMarketingGroupsById(id) {
    return this.request({
      path: `/marketing/groups/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Group
   * @param {number} id
   * @param {Group} group group
   * @returns {Promise<Group>}
   */
  putMarketingGroupsById(id, group) {
    return this.request({
      path: `/marketing/groups/${id}`,
      method: 'put',
      data: group,
    })
  }

  /**
   * Patch Group
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Group>}
   */
  patchMarketingGroupsById(id, patchOperations) {
    return this.request({
      path: `/marketing/groups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of Usage
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
   * @returns {Promise<Usage[]>}
   */
  getMarketingGroupsByIdUsages(id, params = {}) {
    return this.request({
      path: `/marketing/groups/${id}/usages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage
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
   * @returns {Promise<Usage[]>}
   */
  getMarketingGroupsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/marketing/groups/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MarketingCompany
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
   * @returns {Promise<MarketingCompany[]>}
   */
  getMarketingGroupsByParentIdCompanies(parentId, params = {}) {
    return this.request({
      path: `/marketing/groups/${parentId}/companies`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MarketingCompany
   * @param {number} parentId
   * @param {MarketingCompany} marketingCompany marketingCompany
   * @returns {Promise<MarketingCompany>}
   */
  postMarketingGroupsByParentIdCompanies(parentId, marketingCompany) {
    return this.request({
      path: `/marketing/groups/${parentId}/companies`,
      method: 'post',
      data: marketingCompany,
    })
  }
  /**
   * Get MarketingCompany
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
   * @returns {Promise<MarketingCompany>}
   */
  getMarketingGroupsByParentIdCompaniesById(id, parentId, params = {}) {
    return this.request({
      path: `/marketing/groups/${parentId}/companies/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MarketingCompany
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteMarketingGroupsByParentIdCompaniesById(id, parentId) {
    return this.request({
      path: `/marketing/groups/${parentId}/companies/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put MarketingCompany
   * @param {number} id
   * @param {number} parentId
   * @param {MarketingCompany} marketingCompany marketingCompany
   * @returns {Promise<MarketingCompany>}
   */
  putMarketingGroupsByParentIdCompaniesById(id, parentId, marketingCompany) {
    return this.request({
      path: `/marketing/groups/${parentId}/companies/{id}`,
      method: 'put',
      data: marketingCompany,
    })
  }

  /**
   * Patch MarketingCompany
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MarketingCompany>}
   */
  patchMarketingGroupsByParentIdCompaniesById(id, parentId, patchOperations) {
    return this.request({
      path: `/marketing/groups/${parentId}/companies/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of MarketingCompany
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
  getMarketingGroupsByParentIdCompaniesCount(parentId, params = {}) {
    return this.request({
      path: `/marketing/groups/${parentId}/companies/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MarketingContact
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
   * @returns {Promise<MarketingContact[]>}
   */
  getMarketingGroupsByParentIdContacts(parentId, params = {}) {
    return this.request({
      path: `/marketing/groups/${parentId}/contacts`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MarketingContact
   * @param {number} parentId
   * @param {MarketingContact} marketingContact marketingContact
   * @returns {Promise<MarketingContact>}
   */
  postMarketingGroupsByParentIdContacts(parentId, marketingContact) {
    return this.request({
      path: `/marketing/groups/${parentId}/contacts`,
      method: 'post',
      data: marketingContact,
    })
  }
  /**
   * Get MarketingContact
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
   * @returns {Promise<MarketingContact>}
   */
  getMarketingGroupsByParentIdContactsById(id, parentId, params = {}) {
    return this.request({
      path: `/marketing/groups/${parentId}/contacts/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MarketingContact
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteMarketingGroupsByParentIdContactsById(id, parentId) {
    return this.request({
      path: `/marketing/groups/${parentId}/contacts/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put MarketingContact
   * @param {number} id
   * @param {number} parentId
   * @param {MarketingContact} marketingContact marketingContact
   * @returns {Promise<MarketingContact>}
   */
  putMarketingGroupsByParentIdContactsById(id, parentId, marketingContact) {
    return this.request({
      path: `/marketing/groups/${parentId}/contacts/{id}`,
      method: 'put',
      data: marketingContact,
    })
  }

  /**
   * Patch MarketingContact
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MarketingContact>}
   */
  patchMarketingGroupsByParentIdContactsById(id, parentId, patchOperations) {
    return this.request({
      path: `/marketing/groups/${parentId}/contacts/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of MarketingContact
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
  getMarketingGroupsByParentIdContactsCount(parentId, params = {}) {
    return this.request({
      path: `/marketing/groups/${parentId}/contacts/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Group
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
  getMarketingGroupsCount(params = {}) {
    return this.request({
      path: `/marketing/groups/count`,
      method: 'get',
      params,
    })
  }
}
