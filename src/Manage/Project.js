import Manage from './Manage.js'

/**
 * ProjectBoardTeamMember
 * @typedef {object} ProjectBoardTeamMember
 * @property {number} [id]  int32
 * @property {MemberReference} [member]
 * @property {ProjectRoleReference} [projectRole]
 * @property {WorkRoleReference} [workRole]
 * @property {object} [_info]
 */

/**
 * ProjectBoardTeam
 * @typedef {object} ProjectBoardTeam
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ProjectBoardTeamInfo
 * @typedef {object} ProjectBoardTeamInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * Count
 * @typedef {object} Count
 * @property {number} [count]  int32
 */

/**
 * PhaseStatus
 * @typedef {object} PhaseStatus
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [collapsedFlag]   nullable
 * @property {boolean} [closedFlag]   nullable
 * @property {array} [boardAssociationIds]
 * @property {StatusIndicatorReference} [statusIndicator]
 * @property {string} [customStatusIndicatorName] Required when statusIndicator is Custom Max length: 30;
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
 * Project
 * @typedef {object} Project
 * @property {number} [id]  int32
 * @property {object} [_info]
 * @property {string} [actualEnd]  date-time
 * @property {number} [actualHours]  double nullable
 * @property {string} [actualStart]  date-time
 * @property {AgreementReference} [agreement]
 * @property {string} [billExpenses]  Required On Updates;  nullable
 * @property {number} [billingAmount]  double nullable
 * @property {string} [billingAttention]  Max length: 50;
 * @property {string} billingMethod   nullable
 * @property {string} [billingRateType]  Required On Updates;  nullable
 * @property {BillingTermsReference} [billingTerms]
 * @property {string} [billProducts]  Required On Updates;  nullable
 * @property {boolean} [billProjectAfterClosedFlag]   nullable
 * @property {string} [billTime]  Required On Updates;  nullable
 * @property {CompanyReference} [billToCompany]
 * @property {ContactReference} [billToContact]
 * @property {SiteReference} [billToSite]
 * @property {boolean} [billUnapprovedTimeAndExpense]   nullable
 * @property {ProjectBoardReference} [board]
 * @property {string} [budgetAnalysis]  Required On Updates;  nullable
 * @property {boolean} [budgetFlag]   nullable
 * @property {number} [budgetHours]  double nullable
 * @property {CompanyReference} [company]
 * @property {ContactReference} [contact]
 * @property {string} [customerPO]  Max length: 50;
 * @property {string} [description]
 * @property {CurrencyReference} [currency]
 * @property {number} [downpayment]  double nullable
 * @property {string} estimatedEnd  date-time
 * @property {number} [percentComplete]  double nullable
 * @property {number} [estimatedExpenseRevenue]  double nullable
 * @property {number} [estimatedHours]  double nullable
 * @property {number} [estimatedProductRevenue]  double nullable
 * @property {string} estimatedStart  date-time
 * @property {number} [estimatedTimeRevenue]  double nullable
 * @property {MemberReference} [expenseApprover]
 * @property {boolean} [includeDependenciesFlag]   nullable
 * @property {boolean} [includeEstimatesFlag]   nullable
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {MemberReference} [manager]
 * @property {string} name  Max length: 100;
 * @property {OpportunityReference} [opportunity]
 * @property {number} [projectTemplateId]  int32 nullable
 * @property {boolean} [restrictDownPaymentFlag]   nullable
 * @property {string} [scheduledEnd]  date-time
 * @property {number} [scheduledHours]  double nullable
 * @property {string} [scheduledStart]  date-time
 * @property {CompanyReference} [shipToCompany]
 * @property {ContactReference} [shipToContact]
 * @property {SiteReference} [shipToSite]
 * @property {SiteReference} [site]
 * @property {ProjectStatusReference} [status]
 * @property {boolean} [closedFlag]
 * @property {MemberReference} [timeApprover]
 * @property {ProjectTypeReference} [type]
 * @property {boolean} [doNotDisplayInPortalFlag]   nullable
 * @property {string} [billingStartDate]  date-time
 * @property {number} [estimatedTimeCost]  double nullable
 * @property {number} [estimatedExpenseCost]  double nullable
 * @property {number} [estimatedProductCost]  double nullable
 * @property {TaxCodeReference} [taxCode]
 * @property {SystemLocationReference} [companyLocation]
 * @property {array} [customFields]
 */

/**
 * ProjectContact
 * @typedef {object} ProjectContact
 * @property {number} [id]  int32
 * @property {number} [projectId]  int32
 * @property {ContactReference} [contact]
 * @property {object} [_info]
 */

/**
 * ProjectNote
 * @typedef {object} ProjectNote
 * @property {number} [id]  int32
 * @property {number} [projectId]  int32 nullable
 * @property {string} text
 * @property {NoteTypeReference} [type]
 * @property {boolean} [flagged]   nullable
 * @property {object} [_info]
 */

/**
 * ProjectPhase
 * @typedef {object} ProjectPhase
 * @property {number} [id]  int32
 * @property {number} [projectId]  int32 nullable
 * @property {string} description  Max length: 100;
 * @property {ProjectBoardReference} [board]
 * @property {PhaseStatusReference} [status]
 * @property {AgreementReference} [agreement]
 * @property {OpportunityReference} [opportunity]
 * @property {ProjectPhaseReference} [parentPhase]
 * @property {string} [wbsCode]  Max length: 50;
 * @property {string} [billTime]  Required On Updates;  nullable
 * @property {string} [billExpenses]  Required On Updates;  nullable
 * @property {string} [billProducts]  Required On Updates;  nullable
 * @property {boolean} [markAsMilestoneFlag]   nullable
 * @property {string} [notes]
 * @property {string} [deadlineDate]  date-time
 * @property {boolean} [billSeparatelyFlag]   nullable
 * @property {string} [billingMethod] billingMethod is required if the phase billSeparatelyFlag is true  nullable
 * @property {number} [scheduledHours]  double nullable
 * @property {string} [scheduledStart]
 * @property {string} [scheduledEnd]
 * @property {number} [actualHours]  double nullable
 * @property {string} [actualStart]
 * @property {string} [actualEnd]
 * @property {number} [budgetHours]  double nullable
 * @property {number} [locationId]  int32 nullable
 * @property {number} [businessUnitId]  int32 nullable
 * @property {number} [hourlyRate]  double nullable
 * @property {string} [billingStartDate]  date-time
 * @property {boolean} [billPhaseClosedFlag] This phase can only be billed after it has been closed  nullable
 * @property {boolean} [billProjectClosedFlag] This phase can only be billed after the project has been closed  nullable
 * @property {number} [downpayment]  double nullable
 * @property {string} [poNumber]  Max length: 25;
 * @property {number} [poAmount]  double nullable
 * @property {number} [estimatedTimeCost]  double nullable
 * @property {number} [estimatedExpenseCost]  double nullable
 * @property {number} [estimatedProductCost]  double nullable
 * @property {number} [estimatedTimeRevenue]  double nullable
 * @property {number} [estimatedExpenseRevenue]  double nullable
 * @property {number} [estimatedProductRevenue]  double nullable
 * @property {CurrencyReference} [currency]
 * @property {CompanyReference} [billToCompany]
 * @property {ContactReference} [billToContact]
 * @property {SiteReference} [billToSite]
 * @property {CompanyReference} [shipToCompany]
 * @property {ContactReference} [shipToContact]
 * @property {SiteReference} [shipToSite]
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * ProjectTeamMember
 * @typedef {object} ProjectTeamMember
 * @property {number} [id]  int32
 * @property {number} [projectId]  int32 nullable
 * @property {number} [hours]  double nullable
 * @property {MemberReference} [member]
 * @property {ProjectRoleReference} [projectRole]
 * @property {WorkRoleReference} [workRole]
 * @property {string} [startDate]  date-time
 * @property {string} [endDate]  date-time
 * @property {object} [_info]
 */

/**
 * ProjectType
 * @typedef {object} ProjectType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {string} [integrationXref]  Max length: 50;
 * @property {object} [_info]
 */

/**
 * ProjectTypeInfo
 * @typedef {object} ProjectTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * ProjectSecurityRole
 * @typedef {object} ProjectSecurityRole
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {boolean} [managerRoleFlag]   nullable
 * @property {boolean} [defaultContactFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ProjectSecurityRoleSetting
 * @typedef {object} ProjectSecurityRoleSetting
 * @property {number} [id]  int32
 * @property {string} [addLevel]   nullable
 * @property {string} [editLevel]   nullable
 * @property {string} [deleteLevel]   nullable
 * @property {string} [inquireLevel]   nullable
 * @property {string} [moduleIdentifier]  Max length: 50;
 * @property {boolean} [myFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ProjectStatus
 * @typedef {object} ProjectStatus
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [noTimeFlag]   nullable
 * @property {boolean} [closedFlag]   nullable
 * @property {StatusIndicatorReference} [statusIndicator]
 * @property {string} [customStatusIndicatorName] Required when statusIndicator is Custom Max length: 30;
 * @property {object} [_info]
 */

/**
 * ProjectStatusInfo
 * @typedef {object} ProjectStatusInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * StatusIndicator
 * @typedef {object} StatusIndicator
 * @property {number} [id]  int32
 * @property {string} [identifier]
 * @property {string} [name]
 * @property {string} [color]
 * @property {string} [icon]
 * @property {object} [_info]
 */

/**
 * ProjectTicket
 * @typedef {object} ProjectTicket
 * @property {number} [id]  int32
 * @property {string} summary  Max length: 100;
 * @property {boolean} [isIssueFlag]   nullable
 * @property {BoardReference} [board]
 * @property {ServiceStatusReference} [status]
 * @property {WorkRoleReference} [workRole]
 * @property {WorkTypeReference} [workType]
 * @property {ProjectReference} [project]
 * @property {ProjectPhaseReference} [phase]
 * @property {string} [wbsCode]  Max length: 50;
 * @property {CompanyReference} [company]
 * @property {SiteReference} [site]
 * @property {string} [siteName]  Max length: 50;
 * @property {string} [addressLine1]  Max length: 50;
 * @property {string} [addressLine2]  Max length: 50;
 * @property {string} [city]  Max length: 50;
 * @property {string} [stateIdentifier]  Max length: 50;
 * @property {string} [zip]  Max length: 12;
 * @property {CountryReference} [country]
 * @property {ContactReference} [contact]
 * @property {string} [contactName]  Max length: 62;
 * @property {string} [contactPhoneNumber]  Max length: 20;
 * @property {string} [contactPhoneExtension]  Max length: 15;
 * @property {string} [contactEmailAddress]  Max length: 250;
 * @property {ServiceTypeReference} [type]
 * @property {ServiceSubTypeReference} [subType]
 * @property {ServiceItemReference} [item]
 * @property {MemberReference} [owner]
 * @property {PriorityReference} [priority]
 * @property {ServiceLocationReference} [serviceLocation]
 * @property {ServiceSourceReference} [source]
 * @property {string} [requiredDate]  date-time
 * @property {number} [budgetHours]  double nullable
 * @property {OpportunityReference} [opportunity]
 * @property {AgreementReference} [agreement]
 * @property {number} [knowledgeBaseCategoryId]  int32 nullable
 * @property {number} [knowledgeBaseSubCategoryId]  int32 nullable
 * @property {number} [knowledgeBaseLinkId]  int32 nullable
 * @property {string} [knowledgeBaseLinkType]   nullable
 * @property {boolean} [allowAllClientsPortalView]   nullable
 * @property {boolean} [customerUpdatedFlag]   nullable
 * @property {boolean} [automaticEmailContactFlag]   nullable
 * @property {boolean} [automaticEmailResourceFlag]   nullable
 * @property {boolean} [automaticEmailCcFlag]   nullable
 * @property {string} [automaticEmailCc]  Max length: 1000;
 * @property {string} [closedDate]
 * @property {string} [closedBy]
 * @property {boolean} [closedFlag]   nullable
 * @property {number} [actualHours]  double nullable
 * @property {boolean} [approved]   nullable
 * @property {string} [subBillingMethod]   nullable
 * @property {number} [subBillingAmount]  double nullable
 * @property {string} [subDateAccepted]
 * @property {string} [resources]
 * @property {string} [billTime]   nullable
 * @property {string} [billExpenses]   nullable
 * @property {string} [billProducts]   nullable
 * @property {string} [predecessorType]   nullable
 * @property {number} [predecessorId]  int32 nullable
 * @property {boolean} [predecessorClosedFlag]   nullable
 * @property {number} [lagDays]  int32 nullable
 * @property {boolean} [lagNonworkingDaysFlag]   nullable
 * @property {string} [estimatedStartDate]  date-time
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {number} [duration]  int32 nullable
 * @property {string} [mobileGuid]  uuid nullable
 * @property {CurrencyReference} [currency]
 * @property {object} [_info]
 * @property {string} [initialDescription] Only available for POST, will not be returned in the response
 * @property {string} [initialInternalAnalysis] Only available for POST, will not be returned in the response
 * @property {string} [initialResolution] Only available for POST, will not be returned in the response
 * @property {string} [contactEmailLookup]
 * @property {boolean} [processNotifications] Can be set to false to skip notification processing when adding or updating a ticket (Defaults to True)  nullable
 * @property {boolean} [skipCallback]   nullable
 * @property {array} [customFields]
 */

/**
 * ActivityReference
 * @typedef {object} ActivityReference
 * @property {number} [id]  int32 nullable
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * ProjectTicketNote
 * @typedef {object} ProjectTicketNote
 * @property {number} [id]  int32
 * @property {string} [noteType]   nullable
 * @property {TicketReference} [ticket]
 * @property {string} [text]
 * @property {boolean} [detailDescriptionFlag]   nullable
 * @property {boolean} [internalAnalysisFlag]   nullable
 * @property {boolean} [resolutionFlag]   nullable
 * @property {string} [timeStart]  date-time
 * @property {string} [timeEnd]  date-time
 * @property {boolean} [bundledFlag]   nullable
 * @property {boolean} [mergedFlag]   nullable
 * @property {boolean} [issueFlag]   nullable
 * @property {string} [originalAuthor]
 * @property {MemberReference} [member]
 * @property {ContactReference} [contact]
 * @property {object} [_info]
 */

/**
 * ConfigurationReference
 * @typedef {object} ConfigurationReference
 * @property {number} [id]  int32 nullable
 * @property {string} [deviceIdentifier]
 * @property {object} [_info]
 */

/**
 * SuccessResponse
 * @typedef {object} SuccessResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * DocumentReference
 * @typedef {object} DocumentReference
 * @property {number} [id]  int32 nullable
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * TicketNote
 * @typedef {object} TicketNote
 * @property {number} [id]  int32
 * @property {number} [ticketId]  int32 nullable
 * @property {string} [text]
 * @property {boolean} [detailDescriptionFlag]   nullable
 * @property {boolean} [internalAnalysisFlag]   nullable
 * @property {boolean} [resolutionFlag]   nullable
 * @property {boolean} [issueFlag]   nullable
 * @property {MemberReference} [member]
 * @property {ContactReference} [contact]
 * @property {boolean} [customerUpdatedFlag]   nullable
 * @property {boolean} [processNotifications]   nullable
 * @property {boolean} [internalFlag]   nullable
 * @property {boolean} [externalFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ProductReference
 * @typedef {object} ProductReference
 * @property {number} [id]  int32 nullable
 * @property {string} [description]
 * @property {object} [_info]
 */

/**
 * ScheduleEntryReference
 * @typedef {object} ScheduleEntryReference
 * @property {number} [id]  int32 nullable
 * @property {string} [description]
 * @property {object} [_info]
 */

/**
 * TicketTask
 * @typedef {object} TicketTask
 * @property {number} [id]  int32
 * @property {number} [ticketId]  int32 nullable
 * @property {string} [notes]
 * @property {boolean} [closedFlag]   nullable
 * @property {number} [priority]  int32 nullable
 * @property {ScheduleEntryReference} [schedule]
 * @property {ServiceCodeReference} [code]
 * @property {string} [resolution]
 * @property {string} [childScheduleAction]   nullable
 * @property {number} [childTicketId]  int32 nullable
 * @property {object} [_info]
 */

/**
 * TimeEntryReference
 * @typedef {object} TimeEntryReference
 * @property {number} [id]  int32 nullable
 * @property {object} [_info]
 */

export default class Project extends Manage {
  constructor(props) {
    super(props)
  }

  /**
   * Get List of ProjectBoardTeamMember
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProjectBoardTeamMember[]>}
   */
  getProjectBoardsByGrandparentIdTeamsByParentIdMembers(parentId, grandparentId, params = {}) {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/{parentId}/members`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ProjectBoardTeamMember
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {ProjectBoardTeamMember} teamMember teamMember
   * @returns {Promise<ProjectBoardTeamMember>}
   */
  postProjectBoardsByGrandparentIdTeamsByParentIdMembers(parentId, grandparentId, teamMember) {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/{parentId}/members`,
      method: 'post',
      data: teamMember,
    })
  }
  /**
   * Get ProjectBoardTeamMember
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProjectBoardTeamMember>}
   */
  getProjectBoardsByGrandparentIdTeamsByParentIdMembersById(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/{parentId}/members/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProjectBoardTeamMember
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @returns {Promise<NoContent>}
   */
  deleteProjectBoardsByGrandparentIdTeamsByParentIdMembersById(id, parentId, grandparentId) {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/{parentId}/members/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ProjectBoardTeamMember
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {ProjectBoardTeamMember} teamMember teamMember
   * @returns {Promise<ProjectBoardTeamMember>}
   */
  putProjectBoardsByGrandparentIdTeamsByParentIdMembersById(
    id,
    parentId,
    grandparentId,
    teamMember,
  ) {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/{parentId}/members/{id}`,
      method: 'put',
      data: teamMember,
    })
  }

  /**
   * Patch ProjectBoardTeamMember
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProjectBoardTeamMember>}
   */
  patchProjectBoardsByGrandparentIdTeamsByParentIdMembersById(
    id,
    parentId,
    grandparentId,
    patchOperations,
  ) {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/{parentId}/members/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of ProjectBoardTeam
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
   * @returns {Promise<ProjectBoardTeam[]>}
   */
  getProjectBoardsByParentIdTeams(parentId, params = {}) {
    return this.request({
      path: `/project/boards/${parentId}/teams`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ProjectBoardTeam
   * @param {number} parentId
   * @param {ProjectBoardTeam} team team
   * @returns {Promise<ProjectBoardTeam>}
   */
  postProjectBoardsByParentIdTeams(parentId, team) {
    return this.request({
      path: `/project/boards/${parentId}/teams`,
      method: 'post',
      data: team,
    })
  }
  /**
   * Get ProjectBoardTeam
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
   * @returns {Promise<ProjectBoardTeam>}
   */
  getProjectBoardsByParentIdTeamsById(id, parentId, params = {}) {
    return this.request({
      path: `/project/boards/${parentId}/teams/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProjectBoardTeam
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProjectBoardsByParentIdTeamsById(id, parentId) {
    return this.request({
      path: `/project/boards/${parentId}/teams/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ProjectBoardTeam
   * @param {number} id
   * @param {number} parentId
   * @param {ProjectBoardTeam} team team
   * @returns {Promise<ProjectBoardTeam>}
   */
  putProjectBoardsByParentIdTeamsById(id, parentId, team) {
    return this.request({
      path: `/project/boards/${parentId}/teams/{id}`,
      method: 'put',
      data: team,
    })
  }

  /**
   * Patch ProjectBoardTeam
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProjectBoardTeam>}
   */
  patchProjectBoardsByParentIdTeamsById(id, parentId, patchOperations) {
    return this.request({
      path: `/project/boards/${parentId}/teams/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ProjectBoardTeamInfos
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
   * @returns {Promise<ProjectBoardTeamInfo>}
   */
  getProjectBoardsByParentIdTeamsByIdInfo(id, parentId, params = {}) {
    return this.request({
      path: `/project/boards/${parentId}/teams/{id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ProjectBoardTeamInfos
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
   * @returns {Promise<Count>}
   */
  getProjectBoardsByParentIdTeamsByIdInfoCount(id, parentId, params = {}) {
    return this.request({
      path: `/project/boards/${parentId}/teams/{id}/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ProjectBoardTeam
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
  getProjectBoardsByParentIdTeamsCount(parentId, params = {}) {
    return this.request({
      path: `/project/boards/${parentId}/teams/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProjectBoardTeamInfos
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
   * @returns {Promise<ProjectBoardTeamInfo[]>}
   */
  getProjectBoardsByParentIdTeamsInfo(parentId, params = {}) {
    return this.request({
      path: `/project/boards/${parentId}/teams/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PhaseStatus
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PhaseStatus[]>}
   */
  getProjectPhaseStatuses(params = {}) {
    return this.request({
      path: `/project/phaseStatuses`,
      method: 'get',
      params,
    })
  }

  /**
   * Post PhaseStatus
   * @param {PhaseStatus} phaseStatus phaseStatus
   * @returns {Promise<PhaseStatus>}
   */
  postProjectPhaseStatuses(phaseStatus) {
    return this.request({
      path: `/project/phaseStatuses`,
      method: 'post',
      data: phaseStatus,
    })
  }
  /**
   * Get PhaseStatus
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
   * @returns {Promise<PhaseStatus>}
   */
  getProjectPhaseStatusesById(id, params = {}) {
    return this.request({
      path: `/project/phaseStatuses/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete PhaseStatus
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProjectPhaseStatusesById(id) {
    return this.request({
      path: `/project/phaseStatuses/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put PhaseStatus
   * @param {number} id
   * @param {PhaseStatus} phaseStatus phaseStatus
   * @returns {Promise<PhaseStatus>}
   */
  putProjectPhaseStatusesById(id, phaseStatus) {
    return this.request({
      path: `/project/phaseStatuses/${id}`,
      method: 'put',
      data: phaseStatus,
    })
  }

  /**
   * Patch PhaseStatus
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PhaseStatus>}
   */
  patchProjectPhaseStatusesById(id, patchOperations) {
    return this.request({
      path: `/project/phaseStatuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of Usage Count
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
  getProjectPhaseStatusesByIdUsages(id, params = {}) {
    return this.request({
      path: `/project/phaseStatuses/${id}/usages`,
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
  getProjectPhaseStatusesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/project/phaseStatuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of PhaseStatus
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
  getProjectPhaseStatusesCount(params = {}) {
    return this.request({
      path: `/project/phaseStatuses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ApiProject
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Project[]>}
   */
  getProjectProjects(params = {}) {
    return this.request({
      path: `/project/projects`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ApiProject
   * @param {Project} project project
   * @returns {Promise<Project>}
   */
  postProjectProjects(project) {
    return this.request({
      path: `/project/projects`,
      method: 'post',
      data: project,
    })
  }
  /**
   * Get ApiProject
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
   * @returns {Promise<Project>}
   */
  getProjectProjectsById(id, params = {}) {
    return this.request({
      path: `/project/projects/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ApiProject
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProjectProjectsById(id) {
    return this.request({
      path: `/project/projects/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ApiProject
   * @param {number} id
   * @param {Project} project project
   * @returns {Promise<Project>}
   */
  putProjectProjectsById(id, project) {
    return this.request({
      path: `/project/projects/${id}`,
      method: 'put',
      data: project,
    })
  }

  /**
   * Patch ApiProject
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Project>}
   */
  patchProjectProjectsById(id, patchOperations) {
    return this.request({
      path: `/project/projects/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of ProjectContact
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
   * @returns {Promise<ProjectContact[]>}
   */
  getProjectProjectsByParentIdContacts(parentId, params = {}) {
    return this.request({
      path: `/project/projects/${parentId}/contacts`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ProjectContact
   * @param {number} parentId
   * @param {ProjectContact} contact contact
   * @returns {Promise<ProjectContact>}
   */
  postProjectProjectsByParentIdContacts(parentId, contact) {
    return this.request({
      path: `/project/projects/${parentId}/contacts`,
      method: 'post',
      data: contact,
    })
  }
  /**
   * Get ProjectContact
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
   * @returns {Promise<ProjectContact>}
   */
  getProjectProjectsByParentIdContactsById(id, parentId, params = {}) {
    return this.request({
      path: `/project/projects/${parentId}/contacts/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProjectContact
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProjectProjectsByParentIdContactsById(id, parentId) {
    return this.request({
      path: `/project/projects/${parentId}/contacts/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get List of ProjectNote
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
   * @returns {Promise<ProjectNote[]>}
   */
  getProjectProjectsByParentIdNotes(parentId, params = {}) {
    return this.request({
      path: `/project/projects/${parentId}/notes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ProjectNote
   * @param {number} parentId
   * @param {ProjectNote} note note
   * @returns {Promise<ProjectNote>}
   */
  postProjectProjectsByParentIdNotes(parentId, note) {
    return this.request({
      path: `/project/projects/${parentId}/notes`,
      method: 'post',
      data: note,
    })
  }
  /**
   * Get ProjectNote
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
   * @returns {Promise<ProjectNote>}
   */
  getProjectProjectsByParentIdNotesById(id, parentId, params = {}) {
    return this.request({
      path: `/project/projects/${parentId}/notes/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProjectNote
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProjectProjectsByParentIdNotesById(id, parentId) {
    return this.request({
      path: `/project/projects/${parentId}/notes/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ProjectNote
   * @param {number} id
   * @param {number} parentId
   * @param {ProjectNote} note note
   * @returns {Promise<ProjectNote>}
   */
  putProjectProjectsByParentIdNotesById(id, parentId, note) {
    return this.request({
      path: `/project/projects/${parentId}/notes/{id}`,
      method: 'put',
      data: note,
    })
  }

  /**
   * Patch ProjectNote
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProjectNote>}
   */
  patchProjectProjectsByParentIdNotesById(id, parentId, patchOperations) {
    return this.request({
      path: `/project/projects/${parentId}/notes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ProjectNote
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
  getProjectProjectsByParentIdNotesCount(parentId, params = {}) {
    return this.request({
      path: `/project/projects/${parentId}/notes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProjectPhase
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
   * @returns {Promise<ProjectPhase[]>}
   */
  getProjectProjectsByParentIdPhases(parentId, params = {}) {
    return this.request({
      path: `/project/projects/${parentId}/phases`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ProjectPhase
   * @param {number} parentId
   * @param {ProjectPhase} projectPhase projectPhase
   * @returns {Promise<ProjectPhase>}
   */
  postProjectProjectsByParentIdPhases(parentId, projectPhase) {
    return this.request({
      path: `/project/projects/${parentId}/phases`,
      method: 'post',
      data: projectPhase,
    })
  }
  /**
   * Get ProjectPhase
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
   * @returns {Promise<ProjectPhase>}
   */
  getProjectProjectsByParentIdPhasesById(id, parentId, params = {}) {
    return this.request({
      path: `/project/projects/${parentId}/phases/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProjectPhase
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProjectProjectsByParentIdPhasesById(id, parentId) {
    return this.request({
      path: `/project/projects/${parentId}/phases/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ProjectPhase
   * @param {number} id
   * @param {number} parentId
   * @param {ProjectPhase} projectPhase projectPhase
   * @returns {Promise<ProjectPhase>}
   */
  putProjectProjectsByParentIdPhasesById(id, parentId, projectPhase) {
    return this.request({
      path: `/project/projects/${parentId}/phases/{id}`,
      method: 'put',
      data: projectPhase,
    })
  }

  /**
   * Patch ProjectPhase
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProjectPhase>}
   */
  patchProjectProjectsByParentIdPhasesById(id, parentId, patchOperations) {
    return this.request({
      path: `/project/projects/${parentId}/phases/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ProjectPhase
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
  getProjectProjectsByParentIdPhasesCount(parentId, params = {}) {
    return this.request({
      path: `/project/projects/${parentId}/phases/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProjectTeamMember
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
   * @returns {Promise<ProjectTeamMember[]>}
   */
  getProjectProjectsByParentIdTeamMembers(parentId, params = {}) {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ProjectTeamMember
   * @param {number} parentId
   * @param {ProjectTeamMember} teamMember teamMember
   * @returns {Promise<ProjectTeamMember>}
   */
  postProjectProjectsByParentIdTeamMembers(parentId, teamMember) {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers`,
      method: 'post',
      data: teamMember,
    })
  }
  /**
   * Get ProjectTeamMember
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
   * @returns {Promise<ProjectTeamMember>}
   */
  getProjectProjectsByParentIdTeamMembersById(id, parentId, params = {}) {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProjectTeamMember
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProjectProjectsByParentIdTeamMembersById(id, parentId) {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ProjectTeamMember
   * @param {number} id
   * @param {number} parentId
   * @param {ProjectTeamMember} teamMember teamMember
   * @returns {Promise<ProjectTeamMember>}
   */
  putProjectProjectsByParentIdTeamMembersById(id, parentId, teamMember) {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/{id}`,
      method: 'put',
      data: teamMember,
    })
  }

  /**
   * Patch ProjectTeamMember
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProjectTeamMember>}
   */
  patchProjectProjectsByParentIdTeamMembersById(id, parentId, patchOperations) {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ProjectTeamMember
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
  getProjectProjectsByParentIdTeamMembersCount(parentId, params = {}) {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ApiProject
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
  getProjectProjectsCount(params = {}) {
    return this.request({
      path: `/project/projects/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProjectType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProjectType[]>}
   */
  getProjectProjectTypes(params = {}) {
    return this.request({
      path: `/project/projectTypes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ProjectType
   * @param {ProjectType} projectType projectType
   * @returns {Promise<ProjectType>}
   */
  postProjectProjectTypes(projectType) {
    return this.request({
      path: `/project/projectTypes`,
      method: 'post',
      data: projectType,
    })
  }
  /**
   * Get ProjectType
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
   * @returns {Promise<ProjectType>}
   */
  getProjectProjectTypesById(id, params = {}) {
    return this.request({
      path: `/project/projectTypes/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProjectType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProjectProjectTypesById(id) {
    return this.request({
      path: `/project/projectTypes/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ProjectType
   * @param {number} id
   * @param {ProjectType} projectType projectType
   * @returns {Promise<ProjectType>}
   */
  putProjectProjectTypesById(id, projectType) {
    return this.request({
      path: `/project/projectTypes/${id}`,
      method: 'put',
      data: projectType,
    })
  }

  /**
   * Patch ProjectType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProjectType>}
   */
  patchProjectProjectTypesById(id, patchOperations) {
    return this.request({
      path: `/project/projectTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ProjectTypeInfos
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
   * @returns {Promise<ProjectTypeInfo>}
   */
  getProjectProjectTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/project/projectTypes/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage Count
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
  getProjectProjectTypesByIdUsages(id, params = {}) {
    return this.request({
      path: `/project/projectTypes/${id}/usages`,
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
  getProjectProjectTypesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/project/projectTypes/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ProjectType
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
  getProjectProjectTypesCount(params = {}) {
    return this.request({
      path: `/project/projectTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProjectTypeInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProjectTypeInfo[]>}
   */
  getProjectProjectTypesInfo(params = {}) {
    return this.request({
      path: `/project/projectTypes/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ProjectTypeInfos
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
  getProjectProjectTypesInfoCount(params = {}) {
    return this.request({
      path: `/project/projectTypes/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProjectSecurityRole
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProjectSecurityRole[]>}
   */
  getProjectSecurityRoles(params = {}) {
    return this.request({
      path: `/project/securityRoles`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ProjectSecurityRole
   * @param {ProjectSecurityRole} projectSecurityRole projectSecurityRole
   * @returns {Promise<ProjectSecurityRole>}
   */
  postProjectSecurityRoles(projectSecurityRole) {
    return this.request({
      path: `/project/securityRoles`,
      method: 'post',
      data: projectSecurityRole,
    })
  }
  /**
   * Get ProjectSecurityRole
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
   * @returns {Promise<ProjectSecurityRole>}
   */
  getProjectSecurityRolesById(id, params = {}) {
    return this.request({
      path: `/project/securityRoles/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProjectSecurityRole
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProjectSecurityRolesById(id) {
    return this.request({
      path: `/project/securityRoles/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ProjectSecurityRole
   * @param {number} id
   * @param {ProjectSecurityRole} projectSecurityRole projectSecurityRole
   * @returns {Promise<ProjectSecurityRole>}
   */
  putProjectSecurityRolesById(id, projectSecurityRole) {
    return this.request({
      path: `/project/securityRoles/${id}`,
      method: 'put',
      data: projectSecurityRole,
    })
  }

  /**
   * Patch ProjectSecurityRole
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProjectSecurityRole>}
   */
  patchProjectSecurityRolesById(id, patchOperations) {
    return this.request({
      path: `/project/securityRoles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of ProjectSecurityRoleSetting
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
   * @returns {Promise<ProjectSecurityRoleSetting[]>}
   */
  getProjectSecurityRolesByParentIdSettings(parentId, params = {}) {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ProjectSecurityRoleSetting
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
   * @returns {Promise<ProjectSecurityRoleSetting>}
   */
  getProjectSecurityRolesByParentIdSettingsById(id, parentId, params = {}) {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put ProjectSecurityRoleSetting
   * @param {number} id
   * @param {number} parentId
   * @param {ProjectSecurityRoleSetting} projectSecurityRoleSetting projectSecurityRoleSetting
   * @returns {Promise<ProjectSecurityRoleSetting>}
   */
  putProjectSecurityRolesByParentIdSettingsById(id, parentId, projectSecurityRoleSetting) {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings/{id}`,
      method: 'put',
      data: projectSecurityRoleSetting,
    })
  }

  /**
   * Patch ProjectSecurityRoleSetting
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProjectSecurityRoleSetting>}
   */
  patchProjectSecurityRolesByParentIdSettingsById(id, parentId, patchOperations) {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ProjectSecurityRoleSetting
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
  getProjectSecurityRolesByParentIdSettingsCount(parentId, params = {}) {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ProjectSecurityRole
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
  getProjectSecurityRolesCount(params = {}) {
    return this.request({
      path: `/project/securityRoles/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProjectStatus
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProjectStatus[]>}
   */
  getProjectStatuses(params = {}) {
    return this.request({
      path: `/project/statuses`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ProjectStatus
   * @param {ProjectStatus} projectStatus projectStatus
   * @returns {Promise<ProjectStatus>}
   */
  postProjectStatuses(projectStatus) {
    return this.request({
      path: `/project/statuses`,
      method: 'post',
      data: projectStatus,
    })
  }
  /**
   * Get ProjectStatus
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
   * @returns {Promise<ProjectStatus>}
   */
  getProjectStatusesById(id, params = {}) {
    return this.request({
      path: `/project/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProjectStatus
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProjectStatusesById(id) {
    return this.request({
      path: `/project/statuses/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ProjectStatus
   * @param {number} id
   * @param {ProjectStatus} projectStatus projectStatus
   * @returns {Promise<ProjectStatus>}
   */
  putProjectStatusesById(id, projectStatus) {
    return this.request({
      path: `/project/statuses/${id}`,
      method: 'put',
      data: projectStatus,
    })
  }

  /**
   * Patch ProjectStatus
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProjectStatus>}
   */
  patchProjectStatusesById(id, patchOperations) {
    return this.request({
      path: `/project/statuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ProjectStatusesInfo
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
   * @returns {Promise<ProjectStatusInfo>}
   */
  getProjectStatusesByIdInfo(id, params = {}) {
    return this.request({
      path: `/project/statuses/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ProjectStatus
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
  getProjectStatusesCount(params = {}) {
    return this.request({
      path: `/project/statuses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProjectStatusesInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProjectStatusInfo[]>}
   */
  getProjectStatusesInfo(params = {}) {
    return this.request({
      path: `/project/statuses/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ProjectStatusInfo
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
  getProjectStatusesInfoCount(params = {}) {
    return this.request({
      path: `/project/statuses/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of StatusIndicator
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<StatusIndicator[]>}
   */
  getProjectStatusIndicators(params = {}) {
    return this.request({
      path: `/project/statusIndicators`,
      method: 'get',
      params,
    })
  }
  /**
   * Get StatusIndicator
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
   * @returns {Promise<StatusIndicator>}
   */
  getProjectStatusIndicatorsById(id, params = {}) {
    return this.request({
      path: `/project/statusIndicators/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of StatusIndicator
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
  getProjectStatusIndicatorsCount(params = {}) {
    return this.request({
      path: `/project/statusIndicators/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post ProjectTicketNote
   * @param {number} id
   * @param {ProjectTicketNote} item item
   * @returns {Promise<*>}
   */
  postProjectTicketNoteByIdMarkAs(id, item) {
    return this.request({
      path: `/project/ticketNote/${id}/markAs/`,
      method: 'post',
      data: item,
    })
  }
  /**
   * Get List of ProjectTicket
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProjectTicket[]>}
   */
  getProjectTickets(params = {}) {
    return this.request({
      path: `/project/tickets`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ProjectTicket
   * @param {ProjectTicket} ticket ticket
   * @returns {Promise<ProjectTicket>}
   */
  postProjectTickets(ticket) {
    return this.request({
      path: `/project/tickets`,
      method: 'post',
      data: ticket,
    })
  }
  /**
   * Get ProjectTicket
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
   * @returns {Promise<ProjectTicket>}
   */
  getProjectTicketsById(id, params = {}) {
    return this.request({
      path: `/project/tickets/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProjectTicket
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProjectTicketsById(id) {
    return this.request({
      path: `/project/tickets/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ProjectTicket
   * @param {number} id
   * @param {ProjectTicket} ticket ticket
   * @returns {Promise<ProjectTicket>}
   */
  putProjectTicketsById(id, ticket) {
    return this.request({
      path: `/project/tickets/${id}`,
      method: 'put',
      data: ticket,
    })
  }

  /**
   * Patch ProjectTicket
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProjectTicket>}
   */
  patchProjectTicketsById(id, patchOperations) {
    return this.request({
      path: `/project/tickets/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of ActivityReference
            Gets activities associated to the ticket
            Please use the /sales/activities?conditions=ticket/id={id} endpoint
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
   * @returns {Promise<ActivityReference[]>}
   */
  getProjectTicketsByParentIdActivities(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/activities`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ActivityReference
            Gets count of activities associated to the ticket
            Please use the /sales/activities/count?conditions=ticket/id={id} endpoint
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
  getProjectTicketsByParentIdActivitiesCount(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/activities/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProjectTicketNote
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
   * @returns {Promise<ProjectTicketNote[]>}
   */
  getProjectTicketsByParentIdAllNotes(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/allNotes`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ConfigurationReference
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
   * @returns {Promise<ConfigurationReference[]>}
   */
  getProjectTicketsByParentIdConfigurations(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/configurations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ConfigurationReference
   * @param {number} parentId
   * @param {ConfigurationReference} configuration configuration
   * @returns {Promise<ConfigurationReference>}
   */
  postProjectTicketsByParentIdConfigurations(parentId, configuration) {
    return this.request({
      path: `/project/tickets/${parentId}/configurations`,
      method: 'post',
      data: configuration,
    })
  }
  /**
   * Get ConfigurationReference
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
   * @returns {Promise<ConfigurationReference>}
   */
  getProjectTicketsByParentIdConfigurationsById(id, parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/configurations/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ConfigurationReference
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProjectTicketsByParentIdConfigurationsById(id, parentId) {
    return this.request({
      path: `/project/tickets/${parentId}/configurations/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of ConfigurationReference
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
  getProjectTicketsByParentIdConfigurationsCount(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/configurations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} parentId
   * @param {ConvertItem} item item
   * @returns {Promise<SuccessResponse>}
   */
  postProjectTicketsByParentIdConvert(parentId, item) {
    return this.request({
      path: `/project/tickets/${parentId}/convert`,
      method: 'post',
      data: item,
    })
  }
  /**
   * Get List of DocumentReference
            Gets the documents associated to the ticket
            Please use the /system/documents?recordType=Ticket&amp;recordId={id} endpoint
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
   * @returns {Promise<DocumentReference[]>}
   */
  getProjectTicketsByParentIdDocuments(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/documents`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of DocumentReference
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
  getProjectTicketsByParentIdDocumentsCount(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/documents/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TicketNote
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
   * @returns {Promise<TicketNote[]>}
   */
  getProjectTicketsByParentIdNotes(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/notes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TicketNote
   * @param {number} parentId
   * @param {TicketNote} ticketNote ticketNote
   * @returns {Promise<TicketNote>}
   */
  postProjectTicketsByParentIdNotes(parentId, ticketNote) {
    return this.request({
      path: `/project/tickets/${parentId}/notes`,
      method: 'post',
      data: ticketNote,
    })
  }
  /**
   * Get TicketNote
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
   * @returns {Promise<TicketNote>}
   */
  getProjectTicketsByParentIdNotesById(id, parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/notes/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TicketNote
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProjectTicketsByParentIdNotesById(id, parentId) {
    return this.request({
      path: `/project/tickets/${parentId}/notes/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put TicketNote
   * @param {number} id
   * @param {number} parentId
   * @param {TicketNote} ticketNote ticketNote
   * @returns {Promise<TicketNote>}
   */
  putProjectTicketsByParentIdNotesById(id, parentId, ticketNote) {
    return this.request({
      path: `/project/tickets/${parentId}/notes/{id}`,
      method: 'put',
      data: ticketNote,
    })
  }

  /**
   * Patch TicketNote
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TicketNote>}
   */
  patchProjectTicketsByParentIdNotesById(id, parentId, patchOperations) {
    return this.request({
      path: `/project/tickets/${parentId}/notes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of TicketNote
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
  getProjectTicketsByParentIdNotesCount(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/notes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProductReference
            Gets the products associated to the ticket
            Please use the /procurement/products?conditions=chargeToType='Ticket' AND chargeToId={id} endpoint
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
   * @returns {Promise<ProductReference[]>}
   */
  getProjectTicketsByParentIdProducts(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/products`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ProductReference
            Gets the products associated to the ticket
            Please use the /procurement/products/count?conditions=chargeToType='Ticket' AND chargeToId={id} endpoint
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
  getProjectTicketsByParentIdProductsCount(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/products/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ScheduleEntryReference
            Gets the schedule entries associated to the ticket
            Please use the /schedule/entries?conditions=type/id=4 AND objectId={id} endpoint
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
   * @returns {Promise<ScheduleEntryReference[]>}
   */
  getProjectTicketsByParentIdScheduleentries(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/scheduleentries`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ScheduleEntryReference
            Gets the schedule entries count associated to the ticket
            Please use the /schedule/entries/count?conditions=type/id=4 AND objectId={id} endpoint
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
  getProjectTicketsByParentIdScheduleentriesCount(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/scheduleentries/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TicketTask
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
   * @returns {Promise<TicketTask[]>}
   */
  getProjectTicketsByParentIdTasks(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/tasks`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TicketTask
   * @param {number} parentId
   * @param {TicketTask} ticketTask ticketTask
   * @returns {Promise<TicketTask>}
   */
  postProjectTicketsByParentIdTasks(parentId, ticketTask) {
    return this.request({
      path: `/project/tickets/${parentId}/tasks`,
      method: 'post',
      data: ticketTask,
    })
  }
  /**
   * Get TicketTask
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
   * @returns {Promise<TicketTask>}
   */
  getProjectTicketsByParentIdTasksById(id, parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TicketTask
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProjectTicketsByParentIdTasksById(id, parentId) {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put TicketTask
   * @param {number} id
   * @param {number} parentId
   * @param {TicketTask} ticketTask ticketTask
   * @returns {Promise<TicketTask>}
   */
  putProjectTicketsByParentIdTasksById(id, parentId, ticketTask) {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/{id}`,
      method: 'put',
      data: ticketTask,
    })
  }

  /**
   * Patch TicketTask
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TicketTask>}
   */
  patchProjectTicketsByParentIdTasksById(id, parentId, patchOperations) {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of TicketTask
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
  getProjectTicketsByParentIdTasksCount(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TimeEntryReference
            Gets time entries associated to the ticket
            Please use the /time/entries?conditions=(chargeToType="ServiceTicket" OR chargeToType="ProjectTicket") AND chargeToId={id} endpoint
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
   * @returns {Promise<TimeEntryReference[]>}
   */
  getProjectTicketsByParentIdTimeentries(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/timeentries`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TimeEntryReference
            Gets time entries count associated to the ticket
            Please use the /time/entries/count?conditions=(chargeToType="ServiceTicket" OR chargeToType="ProjectTicket") AND chargeToId={id} endpoint
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
  getProjectTicketsByParentIdTimeentriesCount(parentId, params = {}) {
    return this.request({
      path: `/project/tickets/${parentId}/timeentries/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ProjectTicket
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
  getProjectTicketsCount(params = {}) {
    return this.request({
      path: `/project/tickets/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post List of ProjectTicket
   * @param {FilterValues} filterValues filterValues
   * @returns {Promise<ProjectTicket[]>}
   */
  postProjectTicketsSearch(filterValues) {
    return this.request({
      path: `/project/tickets/search`,
      method: 'post',
      data: filterValues,
    })
  }
}
