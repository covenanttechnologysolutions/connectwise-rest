/* This file was auto-generated, do not manually edit. */
import Manage from '../Manage'
import { components } from '../ManageTypes'
import { CommonParameters, CWMOptions } from '../ManageAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type Activity = schemas['Activity']
type ActivityStatus = schemas['ActivityStatus']
type ActivityStatusInfo = schemas['ActivityStatusInfo']
type ActivityType = schemas['ActivityType']
type Agreement = schemas['Agreement']
type Commission = schemas['Commission']
type Count = schemas['Count']
type Forecast = schemas['Forecast']
type ForecastItem = schemas['ForecastItem']
type Opportunity = schemas['Opportunity']
type OpportunityContact = schemas['OpportunityContact']
type OpportunityNote = schemas['OpportunityNote']
type OpportunityRating = schemas['OpportunityRating']
type OpportunityRatingInfo = schemas['OpportunityRatingInfo']
type OpportunityStage = schemas['OpportunityStage']
type OpportunityStageInfo = schemas['OpportunityStageInfo']
type OpportunityStatus = schemas['OpportunityStatus']
type OpportunityStatusInfo = schemas['OpportunityStatusInfo']
type OpportunityToAgreementConversion = schemas['OpportunityToAgreementConversion']
type OpportunityToProjectConversion = schemas['OpportunityToProjectConversion']
type OpportunityToSalesOrderConversion = schemas['OpportunityToSalesOrderConversion']
type OpportunityToServiceTicketConversion = schemas['OpportunityToServiceTicketConversion']
type OpportunityType = schemas['OpportunityType']
type OpportunityTypeInfo = schemas['OpportunityTypeInfo']
type Order = schemas['Order']
type OrderStatus = schemas['OrderStatus']
type OrderStatusEmailTemplate = schemas['OrderStatusEmailTemplate']
type OrderStatusInfo = schemas['OrderStatusInfo']
type OrderStatusNotification = schemas['OrderStatusNotification']
type PatchOperation = schemas['PatchOperation']
type Project = schemas['Project']
type Role = schemas['Role']
type SalesProbability = schemas['SalesProbability']
type SalesProbabilityInfo = schemas['SalesProbabilityInfo']
type SalesQuota = schemas['SalesQuota']
type SalesTeam = schemas['SalesTeam']
type SalesTeamMember = schemas['SalesTeamMember']
type SuccessResponse = schemas['SuccessResponse']
type Team = schemas['Team']
type Ticket = schemas['Ticket']
type Usage = schemas['Usage']

/**
 * @internal
 */
export default class SalesAPI extends Manage {
  constructor(props: CWMOptions) {
    super(props)
  }

  getSalesActivities(params: CommonParameters = {}): Promise<Activity[]> {
    return this.request({
      path: `/sales/activities`,
      method: 'get',
      params,
    })
  }

  postSalesActivities(activity: Activity): Promise<Activity> {
    return this.request({
      path: `/sales/activities`,
      method: 'post',
      data: activity,
    })
  }

  getSalesActivitiesById(id: number, params: CommonParameters = {}): Promise<Activity> {
    return this.request({
      path: `/sales/activities/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesActivitiesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/activities/${id}`,
      method: 'delete',
    })
  }

  putSalesActivitiesById(id: number, activity: Activity): Promise<Activity> {
    return this.request({
      path: `/sales/activities/${id}`,
      method: 'put',
      data: activity,
    })
  }

  patchSalesActivitiesById(id: number, patchOperations: PatchOperation[]): Promise<Activity> {
    return this.request({
      path: `/sales/activities/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesActivitiesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/activities/count`,
      method: 'get',
      params,
    })
  }

  getSalesActivitiesStatuses(params: CommonParameters = {}): Promise<ActivityStatus[]> {
    return this.request({
      path: `/sales/activities/statuses`,
      method: 'get',
      params,
    })
  }

  postSalesActivitiesStatuses(activityStatus: ActivityStatus): Promise<ActivityStatus> {
    return this.request({
      path: `/sales/activities/statuses`,
      method: 'post',
      data: activityStatus,
    })
  }

  getSalesActivitiesStatusesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ActivityStatus> {
    return this.request({
      path: `/sales/activities/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesActivitiesStatusesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/activities/statuses/${id}`,
      method: 'delete',
    })
  }

  putSalesActivitiesStatusesById(
    id: number,
    activityStatus: ActivityStatus,
  ): Promise<ActivityStatus> {
    return this.request({
      path: `/sales/activities/statuses/${id}`,
      method: 'put',
      data: activityStatus,
    })
  }

  patchSalesActivitiesStatusesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<ActivityStatus> {
    return this.request({
      path: `/sales/activities/statuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesActivitiesStatusesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<ActivityStatusInfo> {
    return this.request({
      path: `/sales/activities/statuses/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSalesActivitiesStatusesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/activities/statuses/count`,
      method: 'get',
      params,
    })
  }

  getSalesActivitiesStatusesInfo(params: CommonParameters = {}): Promise<ActivityStatusInfo[]> {
    return this.request({
      path: `/sales/activities/statuses/info`,
      method: 'get',
      params,
    })
  }

  getSalesActivitiesStatusesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/activities/statuses/info/count`,
      method: 'get',
      params,
    })
  }

  getSalesActivitiesTypes(params: CommonParameters = {}): Promise<ActivityType[]> {
    return this.request({
      path: `/sales/activities/types`,
      method: 'get',
      params,
    })
  }

  postSalesActivitiesTypes(activityType: ActivityType): Promise<ActivityType> {
    return this.request({
      path: `/sales/activities/types`,
      method: 'post',
      data: activityType,
    })
  }

  getSalesActivitiesTypesById(id: number, params: CommonParameters = {}): Promise<ActivityType> {
    return this.request({
      path: `/sales/activities/types/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesActivitiesTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/activities/types/${id}`,
      method: 'delete',
    })
  }

  putSalesActivitiesTypesById(id: number, activityType: ActivityType): Promise<ActivityType> {
    return this.request({
      path: `/sales/activities/types/${id}`,
      method: 'put',
      data: activityType,
    })
  }

  patchSalesActivitiesTypesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<ActivityType> {
    return this.request({
      path: `/sales/activities/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesActivitiesTypesByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/sales/activities/types/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getSalesActivitiesTypesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/sales/activities/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getSalesActivitiesTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/activities/types/count`,
      method: 'get',
      params,
    })
  }

  getSalesCommissions(params: CommonParameters = {}): Promise<Commission[]> {
    return this.request({
      path: `/sales/commissions`,
      method: 'get',
      params,
    })
  }

  postSalesCommissions(commission: Commission): Promise<Commission> {
    return this.request({
      path: `/sales/commissions`,
      method: 'post',
      data: commission,
    })
  }

  getSalesCommissionsById(id: number, params: CommonParameters = {}): Promise<Commission> {
    return this.request({
      path: `/sales/commissions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesCommissionsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/commissions/${id}`,
      method: 'delete',
    })
  }

  putSalesCommissionsById(id: number, commission: Commission): Promise<Commission> {
    return this.request({
      path: `/sales/commissions/${id}`,
      method: 'put',
      data: commission,
    })
  }

  patchSalesCommissionsById(id: number, patchOperations: PatchOperation[]): Promise<Commission> {
    return this.request({
      path: `/sales/commissions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesCommissionsByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/sales/commissions/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getSalesCommissionsByIdUsagesList(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/sales/commissions/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getSalesCommissionsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/commissions/count`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunities(params: CommonParameters = {}): Promise<Opportunity[]> {
    return this.request({
      path: `/sales/opportunities`,
      method: 'get',
      params,
    })
  }

  postSalesOpportunities(opportunity: Opportunity): Promise<Opportunity> {
    return this.request({
      path: `/sales/opportunities`,
      method: 'post',
      data: opportunity,
    })
  }

  getSalesOpportunitiesById(id: number, params: CommonParameters = {}): Promise<Opportunity> {
    return this.request({
      path: `/sales/opportunities/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesOpportunitiesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/opportunities/${id}`,
      method: 'delete',
    })
  }

  putSalesOpportunitiesById(id: number, opportunity: Opportunity): Promise<Opportunity> {
    return this.request({
      path: `/sales/opportunities/${id}`,
      method: 'put',
      data: opportunity,
    })
  }

  patchSalesOpportunitiesById(id: number, patchOperations: PatchOperation[]): Promise<Opportunity> {
    return this.request({
      path: `/sales/opportunities/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSalesOpportunitiesByIdConvertToAgreement(
    id: number,
    conversion: OpportunityToAgreementConversion,
  ): Promise<Agreement> {
    return this.request({
      path: `/sales/opportunities/${id}/convertToAgreement`,
      method: 'post',
      data: conversion,
    })
  }

  postSalesOpportunitiesByIdConvertToProject(
    id: number,
    conversion: OpportunityToProjectConversion,
  ): Promise<Project> {
    return this.request({
      path: `/sales/opportunities/${id}/convertToProject`,
      method: 'post',
      data: conversion,
    })
  }

  postSalesOpportunitiesByIdConvertToSalesOrder(
    id: number,
    conversion: OpportunityToSalesOrderConversion,
  ): Promise<Order> {
    return this.request({
      path: `/sales/opportunities/${id}/convertToSalesOrder`,
      method: 'post',
      data: conversion,
    })
  }

  postSalesOpportunitiesByIdConvertToServiceTicket(
    id: number,
    conversion: OpportunityToServiceTicketConversion,
  ): Promise<Ticket> {
    return this.request({
      path: `/sales/opportunities/${id}/convertToServiceTicket`,
      method: 'post',
      data: conversion,
    })
  }

  getSalesOpportunitiesByParentIdContacts(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<OpportunityContact[]> {
    return this.request({
      path: `/sales/opportunities/${parentId}/contacts`,
      method: 'get',
      params,
    })
  }

  postSalesOpportunitiesByParentIdContacts(
    parentId: number,
    opportunityContact: OpportunityContact,
  ): Promise<OpportunityContact> {
    return this.request({
      path: `/sales/opportunities/${parentId}/contacts`,
      method: 'post',
      data: opportunityContact,
    })
  }

  getSalesOpportunitiesByParentIdContactsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<OpportunityContact> {
    return this.request({
      path: `/sales/opportunities/${parentId}/contacts/{id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesOpportunitiesByParentIdContactsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/opportunities/${parentId}/contacts/{id}`,
      method: 'delete',
    })
  }

  putSalesOpportunitiesByParentIdContactsById(
    id: number,
    parentId: number,
    opportunityContact: OpportunityContact,
  ): Promise<OpportunityContact> {
    return this.request({
      path: `/sales/opportunities/${parentId}/contacts/{id}`,
      method: 'put',
      data: opportunityContact,
    })
  }

  patchSalesOpportunitiesByParentIdContactsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<OpportunityContact> {
    return this.request({
      path: `/sales/opportunities/${parentId}/contacts/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesOpportunitiesByParentIdContactsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/sales/opportunities/${parentId}/contacts/count`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesByParentIdForecast(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Forecast[]> {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast`,
      method: 'get',
      params,
    })
  }

  postSalesOpportunitiesByParentIdForecast(
    parentId: number,
    forecast: Forecast,
  ): Promise<Forecast> {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast`,
      method: 'post',
      data: forecast,
    })
  }

  deleteSalesOpportunitiesByParentIdForecast(parentId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/`,
      method: 'delete',
    })
  }

  putSalesOpportunitiesByParentIdForecast(parentId: number, forecast: Forecast): Promise<Forecast> {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/`,
      method: 'put',
      data: forecast,
    })
  }

  patchSalesOpportunitiesByParentIdForecast(
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<Forecast> {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesOpportunitiesByParentIdForecastById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ForecastItem> {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/{id}`,
      method: 'get',
      params,
    })
  }

  postSalesOpportunitiesByParentIdForecastById(
    id: number,
    parentId: number,
    forecast: ForecastItem,
  ): Promise<ForecastItem> {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/{id}`,
      method: 'post',
      data: forecast,
    })
  }

  deleteSalesOpportunitiesByParentIdForecastById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/{id}`,
      method: 'delete',
    })
  }

  putSalesOpportunitiesByParentIdForecastById(
    id: number,
    parentId: number,
    forecast: ForecastItem,
  ): Promise<ForecastItem> {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/{id}`,
      method: 'put',
      data: forecast,
    })
  }

  patchSalesOpportunitiesByParentIdForecastById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<ForecastItem> {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSalesOpportunitiesByParentIdForecastCopyById(
    id: number,
    parentId: number,
  ): Promise<SuccessResponse> {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/copy/{id}`,
      method: 'post',
    })
  }

  getSalesOpportunitiesByParentIdForecastCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/count`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesByParentIdNotes(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<OpportunityNote[]> {
    return this.request({
      path: `/sales/opportunities/${parentId}/notes`,
      method: 'get',
      params,
    })
  }

  postSalesOpportunitiesByParentIdNotes(
    parentId: number,
    note: OpportunityNote,
  ): Promise<OpportunityNote> {
    return this.request({
      path: `/sales/opportunities/${parentId}/notes`,
      method: 'post',
      data: note,
    })
  }

  getSalesOpportunitiesByParentIdNotesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<OpportunityNote> {
    return this.request({
      path: `/sales/opportunities/${parentId}/notes/{id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesOpportunitiesByParentIdNotesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/opportunities/${parentId}/notes/{id}`,
      method: 'delete',
    })
  }

  putSalesOpportunitiesByParentIdNotesById(
    id: number,
    parentId: number,
    note: OpportunityNote,
  ): Promise<OpportunityNote> {
    return this.request({
      path: `/sales/opportunities/${parentId}/notes/{id}`,
      method: 'put',
      data: note,
    })
  }

  patchSalesOpportunitiesByParentIdNotesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<OpportunityNote> {
    return this.request({
      path: `/sales/opportunities/${parentId}/notes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesOpportunitiesByParentIdNotesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<OpportunityNote[]> {
    return this.request({
      path: `/sales/opportunities/${parentId}/notes/count`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesByParentIdTeam(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Team[]> {
    return this.request({
      path: `/sales/opportunities/${parentId}/team`,
      method: 'get',
      params,
    })
  }

  postSalesOpportunitiesByParentIdTeam(parentId: number, team: Team): Promise<Team> {
    return this.request({
      path: `/sales/opportunities/${parentId}/team`,
      method: 'post',
      data: team,
    })
  }

  getSalesOpportunitiesByParentIdTeamById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Team> {
    return this.request({
      path: `/sales/opportunities/${parentId}/team/{id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesOpportunitiesByParentIdTeamById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/opportunities/${parentId}/team/{id}`,
      method: 'delete',
    })
  }

  putSalesOpportunitiesByParentIdTeamById(id: number, parentId: number, team: Team): Promise<Team> {
    return this.request({
      path: `/sales/opportunities/${parentId}/team/{id}`,
      method: 'put',
      data: team,
    })
  }

  patchSalesOpportunitiesByParentIdTeamById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<Team> {
    return this.request({
      path: `/sales/opportunities/${parentId}/team/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesOpportunitiesByParentIdTeamCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/sales/opportunities/${parentId}/team/count`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/opportunities/count`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesDefault(params: CommonParameters = {}): Promise<Opportunity> {
    return this.request({
      path: `/sales/opportunities/default`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesRatings(params: CommonParameters = {}): Promise<OpportunityRating[]> {
    return this.request({
      path: `/sales/opportunities/ratings`,
      method: 'get',
      params,
    })
  }

  postSalesOpportunitiesRatings(opportunityRating: OpportunityRating): Promise<OpportunityRating> {
    return this.request({
      path: `/sales/opportunities/ratings`,
      method: 'post',
      data: opportunityRating,
    })
  }

  getSalesOpportunitiesRatingsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<OpportunityRating> {
    return this.request({
      path: `/sales/opportunities/ratings/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesOpportunitiesRatingsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/opportunities/ratings/${id}`,
      method: 'delete',
    })
  }

  putSalesOpportunitiesRatingsById(
    id: number,
    opportunityRating: OpportunityRating,
  ): Promise<OpportunityRating> {
    return this.request({
      path: `/sales/opportunities/ratings/${id}`,
      method: 'put',
      data: opportunityRating,
    })
  }

  patchSalesOpportunitiesRatingsById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<OpportunityRating> {
    return this.request({
      path: `/sales/opportunities/ratings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesOpportunitiesRatingsByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<OpportunityRatingInfo> {
    return this.request({
      path: `/sales/opportunities/ratings/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesRatingsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/opportunities/ratings/count`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesRatingsInfo(
    params: CommonParameters = {},
  ): Promise<OpportunityRatingInfo[]> {
    return this.request({
      path: `/sales/opportunities/ratings/info`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesRatingsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/opportunities/ratings/info/count`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesStatuses(params: CommonParameters = {}): Promise<OpportunityStatus[]> {
    return this.request({
      path: `/sales/opportunities/statuses`,
      method: 'get',
      params,
    })
  }

  postSalesOpportunitiesStatuses(status: OpportunityStatus): Promise<OpportunityStatus> {
    return this.request({
      path: `/sales/opportunities/statuses`,
      method: 'post',
      data: status,
    })
  }

  getSalesOpportunitiesStatusesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<OpportunityStatus> {
    return this.request({
      path: `/sales/opportunities/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesOpportunitiesStatusesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/opportunities/statuses/${id}`,
      method: 'delete',
    })
  }

  putSalesOpportunitiesStatusesById(
    id: number,
    status: OpportunityStatus,
  ): Promise<OpportunityStatus> {
    return this.request({
      path: `/sales/opportunities/statuses/${id}`,
      method: 'put',
      data: status,
    })
  }

  patchSalesOpportunitiesStatusesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<OpportunityStatus> {
    return this.request({
      path: `/sales/opportunities/statuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesOpportunitiesStatusesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<OpportunityStatusInfo> {
    return this.request({
      path: `/sales/opportunities/statuses/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesStatusesByIdUsages(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/sales/opportunities/statuses/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesStatusesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/sales/opportunities/statuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesStatusesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/opportunities/statuses/count`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesStatusesInfo(
    params: CommonParameters = {},
  ): Promise<OpportunityStatusInfo[]> {
    return this.request({
      path: `/sales/opportunities/statuses/info`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesStatusesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/opportunities/statuses/info/count`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesTypes(params: CommonParameters = {}): Promise<OpportunityType[]> {
    return this.request({
      path: `/sales/opportunities/types`,
      method: 'get',
      params,
    })
  }

  postSalesOpportunitiesTypes(opportunityType: OpportunityType): Promise<OpportunityType> {
    return this.request({
      path: `/sales/opportunities/types`,
      method: 'post',
      data: opportunityType,
    })
  }

  getSalesOpportunitiesTypesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<OpportunityType> {
    return this.request({
      path: `/sales/opportunities/types/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesOpportunitiesTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/opportunities/types/${id}`,
      method: 'delete',
    })
  }

  putSalesOpportunitiesTypesById(
    id: number,
    opportunityType: OpportunityType,
  ): Promise<OpportunityType> {
    return this.request({
      path: `/sales/opportunities/types/${id}`,
      method: 'put',
      data: opportunityType,
    })
  }

  patchSalesOpportunitiesTypesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<OpportunityType> {
    return this.request({
      path: `/sales/opportunities/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesOpportunitiesTypesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<OpportunityTypeInfo> {
    return this.request({
      path: `/sales/opportunities/types/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesTypesByIdUsages(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/sales/opportunities/types/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesTypesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/sales/opportunities/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/opportunities/types/count`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesTypesInfo(params: CommonParameters = {}): Promise<OpportunityTypeInfo[]> {
    return this.request({
      path: `/sales/opportunities/types/info`,
      method: 'get',
      params,
    })
  }

  getSalesOpportunitiesTypesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/opportunities/types/info/count`,
      method: 'get',
      params,
    })
  }

  getSalesOrders(params: CommonParameters = {}): Promise<Order[]> {
    return this.request({
      path: `/sales/orders`,
      method: 'get',
      params,
    })
  }

  postSalesOrders(order: Order): Promise<Order> {
    return this.request({
      path: `/sales/orders`,
      method: 'post',
      data: order,
    })
  }

  getSalesOrdersById(id: number, params: CommonParameters = {}): Promise<Order> {
    return this.request({
      path: `/sales/orders/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesOrdersById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/orders/${id}`,
      method: 'delete',
    })
  }

  putSalesOrdersById(id: number, order: Order): Promise<Order> {
    return this.request({
      path: `/sales/orders/${id}`,
      method: 'put',
      data: order,
    })
  }

  patchSalesOrdersById(id: number, patchOperations: PatchOperation[]): Promise<Order> {
    return this.request({
      path: `/sales/orders/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSalesOrdersByIdConvertToServiceTicket(id: number): Promise<Ticket> {
    return this.request({
      path: `/sales/orders/${id}/convertToServiceTicket`,
      method: 'post',
    })
  }

  getSalesOrdersCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/orders/count`,
      method: 'get',
      params,
    })
  }

  getSalesOrdersStatuses(params: CommonParameters = {}): Promise<OrderStatus[]> {
    return this.request({
      path: `/sales/orders/statuses`,
      method: 'get',
      params,
    })
  }

  postSalesOrdersStatuses(status: OrderStatus): Promise<OrderStatus[]> {
    return this.request({
      path: `/sales/orders/statuses`,
      method: 'post',
      data: status,
    })
  }

  getSalesOrdersStatusesById(id: number, params: CommonParameters = {}): Promise<OrderStatus> {
    return this.request({
      path: `/sales/orders/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesOrdersStatusesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/orders/statuses/${id}`,
      method: 'delete',
    })
  }

  putSalesOrdersStatusesById(id: number, status: OrderStatus): Promise<OrderStatus> {
    return this.request({
      path: `/sales/orders/statuses/${id}`,
      method: 'put',
      data: status,
    })
  }

  patchSalesOrdersStatusesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<OrderStatus> {
    return this.request({
      path: `/sales/orders/statuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesOrdersStatusesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<OrderStatusInfo> {
    return this.request({
      path: `/sales/orders/statuses/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSalesOrdersStatusesByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/sales/orders/statuses/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getSalesOrdersStatusesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/sales/orders/statuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getSalesOrdersStatusesByParentIdEmailtemplates(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<OrderStatusEmailTemplate[]> {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/emailtemplates/`,
      method: 'get',
      params,
    })
  }

  postSalesOrdersStatusesByParentIdEmailtemplates(
    parentId: number,
    orderStatusEmailTemplate: OrderStatusEmailTemplate,
  ): Promise<OrderStatusEmailTemplate> {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/emailtemplates/`,
      method: 'post',
      data: orderStatusEmailTemplate,
    })
  }

  getSalesOrdersStatusesByParentIdEmailtemplatesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<OrderStatusEmailTemplate> {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/emailtemplates/{id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesOrdersStatusesByParentIdEmailtemplatesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/emailtemplates/{id}`,
      method: 'delete',
    })
  }

  putSalesOrdersStatusesByParentIdEmailtemplatesById(
    id: number,
    parentId: number,
    orderStatusEmailTemplate: OrderStatusEmailTemplate,
  ): Promise<OrderStatusEmailTemplate> {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/emailtemplates/{id}`,
      method: 'put',
      data: orderStatusEmailTemplate,
    })
  }

  patchSalesOrdersStatusesByParentIdEmailtemplatesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<OrderStatusEmailTemplate> {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/emailtemplates/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesOrdersStatusesByParentIdEmailtemplatesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/emailtemplates/count`,
      method: 'get',
      params,
    })
  }

  getSalesOrdersStatusesByParentIdNotifications(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<OrderStatusNotification[]> {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/notifications`,
      method: 'get',
      params,
    })
  }

  postSalesOrdersStatusesByParentIdNotifications(
    parentId: number,
    orderStatusNotification: OrderStatusNotification,
  ): Promise<OrderStatusNotification> {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/notifications`,
      method: 'post',
      data: orderStatusNotification,
    })
  }

  getSalesOrdersStatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<OrderStatusNotification> {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/notifications/{id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesOrdersStatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/notifications/{id}`,
      method: 'delete',
    })
  }

  putSalesOrdersStatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
    orderStatusNotification: OrderStatusNotification,
  ): Promise<OrderStatusNotification> {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/notifications/{id}`,
      method: 'put',
      data: orderStatusNotification,
    })
  }

  patchSalesOrdersStatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<OrderStatusNotification> {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/notifications/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesOrdersStatusesByParentIdNotificationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/notifications/count`,
      method: 'get',
      params,
    })
  }

  getSalesOrdersStatusesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/orders/statuses/count`,
      method: 'get',
      params,
    })
  }

  getSalesOrdersStatusesInfo(params: CommonParameters = {}): Promise<OrderStatusInfo[]> {
    return this.request({
      path: `/sales/orders/statuses/info`,
      method: 'get',
      params,
    })
  }

  getSalesOrdersStatusesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/orders/statuses/info/count`,
      method: 'get',
      params,
    })
  }

  getSalesProbabilities(params: CommonParameters = {}): Promise<SalesProbability[]> {
    return this.request({
      path: `/sales/probabilities`,
      method: 'get',
      params,
    })
  }

  postSalesProbabilities(probability: SalesProbability): Promise<SalesProbability> {
    return this.request({
      path: `/sales/probabilities`,
      method: 'post',
      data: probability,
    })
  }

  getSalesProbabilitiesById(id: number, params: CommonParameters = {}): Promise<SalesProbability> {
    return this.request({
      path: `/sales/probabilities/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesProbabilitiesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/probabilities/${id}`,
      method: 'delete',
    })
  }

  putSalesProbabilitiesById(id: number, probability: SalesProbability): Promise<SalesProbability> {
    return this.request({
      path: `/sales/probabilities/${id}`,
      method: 'put',
      data: probability,
    })
  }

  patchSalesProbabilitiesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<SalesProbability> {
    return this.request({
      path: `/sales/probabilities/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesProbabilitiesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<SalesProbabilityInfo> {
    return this.request({
      path: `/sales/probabilities/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSalesProbabilitiesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/probabilities/count`,
      method: 'get',
      params,
    })
  }

  getSalesProbabilitiesInfo(params: CommonParameters = {}): Promise<SalesProbabilityInfo[]> {
    return this.request({
      path: `/sales/probabilities/info`,
      method: 'get',
      params,
    })
  }

  getSalesProbabilitiesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/probabilities/info/count`,
      method: 'get',
      params,
    })
  }

  getSalesQuotas(params: CommonParameters = {}): Promise<SalesQuota[]> {
    return this.request({
      path: `/sales/quotas`,
      method: 'get',
      params,
    })
  }

  postSalesQuotas(salesQuota: SalesQuota): Promise<SalesQuota> {
    return this.request({
      path: `/sales/quotas`,
      method: 'post',
      data: salesQuota,
    })
  }

  getSalesQuotasById(id: number, params: CommonParameters = {}): Promise<SalesQuota> {
    return this.request({
      path: `/sales/quotas/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesQuotasById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/quotas/${id}`,
      method: 'delete',
    })
  }

  putSalesQuotasById(id: number, salesQuota: SalesQuota): Promise<SalesQuota> {
    return this.request({
      path: `/sales/quotas/${id}`,
      method: 'put',
      data: salesQuota,
    })
  }

  patchSalesQuotasById(id: number, patchOperations: PatchOperation[]): Promise<SalesQuota> {
    return this.request({
      path: `/sales/quotas/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesQuotasCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/quotas/count`,
      method: 'get',
      params,
    })
  }

  getSalesRoles(params: CommonParameters = {}): Promise<Role[]> {
    return this.request({
      path: `/sales/roles`,
      method: 'get',
      params,
    })
  }

  postSalesRoles(role: Role): Promise<Role> {
    return this.request({
      path: `/sales/roles`,
      method: 'post',
      data: role,
    })
  }

  getSalesRolesById(id: number, params: CommonParameters = {}): Promise<Role> {
    return this.request({
      path: `/sales/roles/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesRolesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/roles/${id}`,
      method: 'delete',
    })
  }

  putSalesRolesById(id: number, role: Role): Promise<Role> {
    return this.request({
      path: `/sales/roles/${id}`,
      method: 'put',
      data: role,
    })
  }

  patchSalesRolesById(id: number, patchOperations: PatchOperation[]): Promise<Role> {
    return this.request({
      path: `/sales/roles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesRolesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/roles/count`,
      method: 'get',
      params,
    })
  }

  getSalesSalesTeams(params: CommonParameters = {}): Promise<SalesTeam[]> {
    return this.request({
      path: `/sales/salesTeams`,
      method: 'get',
      params,
    })
  }

  postSalesSalesTeams(salesTeam: SalesTeam): Promise<SalesTeam> {
    return this.request({
      path: `/sales/salesTeams`,
      method: 'post',
      data: salesTeam,
    })
  }

  getSalesSalesTeamsById(id: number, params: CommonParameters = {}): Promise<SalesTeam> {
    return this.request({
      path: `/sales/salesTeams/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesSalesTeamsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/salesTeams/${id}`,
      method: 'delete',
    })
  }

  putSalesSalesTeamsById(id: number, salesTeam: SalesTeam): Promise<SalesTeam> {
    return this.request({
      path: `/sales/salesTeams/${id}`,
      method: 'put',
      data: salesTeam,
    })
  }

  patchSalesSalesTeamsById(id: number, patchOperations: PatchOperation[]): Promise<SalesTeam> {
    return this.request({
      path: `/sales/salesTeams/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesSalesTeamsByParentIdMembers(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<SalesTeamMember[]> {
    return this.request({
      path: `/sales/salesTeams/${parentId}/members`,
      method: 'get',
      params,
    })
  }

  postSalesSalesTeamsByParentIdMembers(
    parentId: number,
    salesTeamMember: SalesTeamMember,
  ): Promise<SalesTeamMember> {
    return this.request({
      path: `/sales/salesTeams/${parentId}/members`,
      method: 'post',
      data: salesTeamMember,
    })
  }

  getSalesSalesTeamsByParentIdMembersById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<SalesTeamMember> {
    return this.request({
      path: `/sales/salesTeams/${parentId}/members/{id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesSalesTeamsByParentIdMembersById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/salesTeams/${parentId}/members/{id}`,
      method: 'delete',
    })
  }

  putSalesSalesTeamsByParentIdMembersById(
    id: number,
    parentId: number,
    salesTeamMember: SalesTeamMember,
  ): Promise<SalesTeamMember> {
    return this.request({
      path: `/sales/salesTeams/${parentId}/members/{id}`,
      method: 'put',
      data: salesTeamMember,
    })
  }

  patchSalesSalesTeamsByParentIdMembersById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<SalesTeamMember> {
    return this.request({
      path: `/sales/salesTeams/${parentId}/members/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesSalesTeamsByParentIdMembersCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/sales/salesTeams/${parentId}/members/count`,
      method: 'get',
      params,
    })
  }

  getSalesSalesTeamsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/salesTeams/count`,
      method: 'get',
      params,
    })
  }

  getSalesScheduleHolidaylistsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/schedule/holidaylists/info/count`,
      method: 'get',
      params,
    })
  }

  getSalesServicePriorityInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/service/priority/info/count`,
      method: 'get',
      params,
    })
  }

  getSalesStages(params: CommonParameters = {}): Promise<OpportunityStage[]> {
    return this.request({
      path: `/sales/stages`,
      method: 'get',
      params,
    })
  }

  postSalesStages(stage: OpportunityStage): Promise<OpportunityStage> {
    return this.request({
      path: `/sales/stages`,
      method: 'post',
      data: stage,
    })
  }

  getSalesStagesById(id: number, params: CommonParameters = {}): Promise<OpportunityStage> {
    return this.request({
      path: `/sales/stages/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSalesStagesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/sales/stages/${id}`,
      method: 'delete',
    })
  }

  putSalesStagesById(id: number, stage: OpportunityStage): Promise<OpportunityStage> {
    return this.request({
      path: `/sales/stages/${id}`,
      method: 'put',
      data: stage,
    })
  }

  patchSalesStagesById(id: number, patchOperations: PatchOperation[]): Promise<OpportunityStage> {
    return this.request({
      path: `/sales/stages/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSalesStagesByIdInfo(id: number, params: CommonParameters = {}): Promise<OpportunityStageInfo> {
    return this.request({
      path: `/sales/stages/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSalesStagesByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/sales/stages/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getSalesStagesByIdUsagesList(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/sales/stages/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getSalesStagesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/stages/count`,
      method: 'get',
      params,
    })
  }

  getSalesStagesInfo(params: CommonParameters = {}): Promise<OpportunityStageInfo[]> {
    return this.request({
      path: `/sales/stages/info`,
      method: 'get',
      params,
    })
  }

  getSalesStagesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/sales/stages/info/count`,
      method: 'get',
      params,
    })
  }
}
