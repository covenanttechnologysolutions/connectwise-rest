/* This file was auto-generated, do not manually edit. */
import Manage from '../Manage'
import { components } from '../ManageTypes'
import { CommonParameters, CWMOptions } from '../ManageAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type ActivityReference = schemas['ActivityReference']
type Board = schemas['Board']
type BoardAutoAssignResource = schemas['BoardAutoAssignResource']
type BoardAutoTemplate = schemas['BoardAutoTemplate']
type BoardCopy = schemas['BoardCopy']
type BoardExcludedMember = schemas['BoardExcludedMember']
type BoardInfo = schemas['BoardInfo']
type BoardItem = schemas['BoardItem']
type BoardItemAssociation = schemas['BoardItemAssociation']
type BoardNotification = schemas['BoardNotification']
type BoardStatus = schemas['BoardStatus']
type BoardStatusInfo = schemas['BoardStatusInfo']
type BoardStatusNotification = schemas['BoardStatusNotification']
type BoardSubType = schemas['BoardSubType']
type BoardSubTypeInfo = schemas['BoardSubTypeInfo']
type BoardTeam = schemas['BoardTeam']
type BoardTeamInfo = schemas['BoardTeamInfo']
type BoardType = schemas['BoardType']
type BoardTypeInfo = schemas['BoardTypeInfo']
type BoardTypeSubTypeItemAssociation = schemas['BoardTypeSubTypeItemAssociation']
type Code = schemas['Code']
type ConfigurationReference = schemas['ConfigurationReference']
type ConvertToProject = schemas['ConvertToProject']
type Count = schemas['Count']
type DocumentReference = schemas['DocumentReference']
type FilterValues = schemas['FilterValues']
type Impact = schemas['Impact']
type KnowledgeBaseArticle = schemas['KnowledgeBaseArticle']
type KnowledgeBaseCategory = schemas['KnowledgeBaseCategory']
type KnowledgeBaseSettings = schemas['KnowledgeBaseSettings']
type KnowledgeBaseSubCategory = schemas['KnowledgeBaseSubCategory']
type PatchOperation = schemas['PatchOperation']
type Priority = schemas['Priority']
type PriorityInfo = schemas['PriorityInfo']
type ProductReference = schemas['ProductReference']
type SLA = schemas['SLA']
type SLAInfo = schemas['SLAInfo']
type SLAPriority = schemas['SLAPriority']
type ScheduleEntryReference = schemas['ScheduleEntryReference']
type SchedulingMemberInfo = schemas['SchedulingMemberInfo']
type ServiceEmailTemplate = schemas['ServiceEmailTemplate']
type ServiceLocation = schemas['ServiceLocation']
type ServiceLocationInfo = schemas['ServiceLocationInfo']
type ServiceNote = schemas['ServiceNote']
type ServiceSignoff = schemas['ServiceSignoff']
type ServiceSignoffInfo = schemas['ServiceSignoffInfo']
type ServiceSurvey = schemas['ServiceSurvey']
type ServiceSurveyQuestion = schemas['ServiceSurveyQuestion']
type ServiceTeam = schemas['ServiceTeam']
type ServiceTemplate = schemas['ServiceTemplate']
type ServiceTemplateInfo = schemas['ServiceTemplateInfo']
type ServiceTicketLink = schemas['ServiceTicketLink']
type ServiceTicketLinkInfo = schemas['ServiceTicketLinkInfo']
type ServiceTicketNote = schemas['ServiceTicketNote']
type Severity = schemas['Severity']
type Source = schemas['Source']
type SourceInfo = schemas['SourceInfo']
type SuccessResponse = schemas['SuccessResponse']
type SurveyOption = schemas['SurveyOption']
type SurveyResult = schemas['SurveyResult']
type Task = schemas['Task']
type TeamMember = schemas['TeamMember']
type TemplateGeneratedCountsModel = schemas['TemplateGeneratedCountsModel']
type Ticket = schemas['Ticket']
type TicketBundle = schemas['TicketBundle']
type TicketInfo = schemas['TicketInfo']
type TicketMerge = schemas['TicketMerge']
type TicketSync = schemas['TicketSync']
type TimeEntryReference = schemas['TimeEntryReference']
type Usage = schemas['Usage']

export default class ServiceAPI extends Manage {
  constructor(props: CWMOptions) {
    super(props)
  }

  getServiceBoards(params: CommonParameters = {}): Promise<Board[]> {
    return this.request({
      path: `/service/boards`,
      method: 'get',
      params,
    })
  }

  postServiceBoards(board: Board): Promise<Board> {
    return this.request({
      path: `/service/boards`,
      method: 'post',
      data: board,
    })
  }

  getServiceBoardsByGrandparentIdItemsByParentIdAssociations(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<BoardItemAssociation[]> {
    return this.request({
      path: `/service/boards/${grandparentId}/items/{parentId}/associations`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByGrandparentIdItemsByParentIdAssociationsById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<BoardItemAssociation> {
    return this.request({
      path: `/service/boards/${grandparentId}/items/{parentId}/associations/{id}`,
      method: 'get',
      params,
    })
  }

  putServiceBoardsByGrandparentIdItemsByParentIdAssociationsById(
    id: number,
    parentId: number,
    grandparentId: number,
    itemAssociation: BoardItemAssociation,
  ): Promise<BoardItemAssociation> {
    return this.request({
      path: `/service/boards/${grandparentId}/items/{parentId}/associations/{id}`,
      method: 'put',
      data: itemAssociation,
    })
  }

  patchServiceBoardsByGrandparentIdItemsByParentIdAssociationsById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: PatchOperation[],
  ): Promise<BoardItemAssociation> {
    return this.request({
      path: `/service/boards/${grandparentId}/items/{parentId}/associations/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceBoardsByGrandparentIdItemsByParentIdAssociationsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${grandparentId}/items/{parentId}/associations/count`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByGrandparentIdStatusesByParentIdNotifications(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<BoardStatusNotification[]> {
    return this.request({
      path: `/service/boards/${grandparentId}/statuses/{parentId}/notifications`,
      method: 'get',
      params,
    })
  }

  postServiceBoardsByGrandparentIdStatusesByParentIdNotifications(
    parentId: number,
    grandparentId: number,
    boardStatusNotification: BoardStatusNotification,
  ): Promise<BoardStatusNotification> {
    return this.request({
      path: `/service/boards/${grandparentId}/statuses/{parentId}/notifications`,
      method: 'post',
      data: boardStatusNotification,
    })
  }

  getServiceBoardsByGrandparentIdStatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<BoardStatusNotification> {
    return this.request({
      path: `/service/boards/${grandparentId}/statuses/{parentId}/notifications/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceBoardsByGrandparentIdStatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/service/boards/${grandparentId}/statuses/{parentId}/notifications/{id}`,
      method: 'delete',
    })
  }

  putServiceBoardsByGrandparentIdStatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
    grandparentId: number,
    boardStatusNotification: BoardStatusNotification,
  ): Promise<BoardStatusNotification> {
    return this.request({
      path: `/service/boards/${grandparentId}/statuses/{parentId}/notifications/{id}`,
      method: 'put',
      data: boardStatusNotification,
    })
  }

  patchServiceBoardsByGrandparentIdStatusesByParentIdNotificationsById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: PatchOperation[],
  ): Promise<BoardStatusNotification> {
    return this.request({
      path: `/service/boards/${grandparentId}/statuses/{parentId}/notifications/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceBoardsByGrandparentIdStatusesByParentIdNotificationsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${grandparentId}/statuses/{parentId}/notifications/count`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsById(id: number, params: CommonParameters = {}): Promise<Board> {
    return this.request({
      path: `/service/boards/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceBoardsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/boards/${id}`,
      method: 'delete',
    })
  }

  putServiceBoardsById(id: number, board: Board): Promise<Board> {
    return this.request({
      path: `/service/boards/${id}`,
      method: 'put',
      data: board,
    })
  }

  patchServiceBoardsById(id: number, patchOperations: PatchOperation[]): Promise<Board> {
    return this.request({
      path: `/service/boards/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceBoardsByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/service/boards/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByIdUsagesList(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/service/boards/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdAutoAssignResources(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardAutoAssignResource[]> {
    return this.request({
      path: `/service/boards/${parentId}/autoAssignResources`,
      method: 'get',
      params,
    })
  }

  postServiceBoardsByParentIdAutoAssignResources(
    parentId: number,
    boardAutoAssignResource: BoardAutoAssignResource,
  ): Promise<BoardAutoAssignResource> {
    return this.request({
      path: `/service/boards/${parentId}/autoAssignResources`,
      method: 'post',
      data: boardAutoAssignResource,
    })
  }

  getServiceBoardsByParentIdAutoAssignResourcesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardAutoAssignResource> {
    return this.request({
      path: `/service/boards/${parentId}/autoAssignResources/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceBoardsByParentIdAutoAssignResourcesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/service/boards/${parentId}/autoAssignResources/{id}`,
      method: 'delete',
    })
  }

  putServiceBoardsByParentIdAutoAssignResourcesById(
    id: number,
    parentId: number,
    boardAutoAssignResource: BoardAutoAssignResource,
  ): Promise<BoardAutoAssignResource> {
    return this.request({
      path: `/service/boards/${parentId}/autoAssignResources/{id}`,
      method: 'put',
      data: boardAutoAssignResource,
    })
  }

  patchServiceBoardsByParentIdAutoAssignResourcesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<BoardAutoAssignResource> {
    return this.request({
      path: `/service/boards/${parentId}/autoAssignResources/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceBoardsByParentIdAutoAssignResourcesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${parentId}/autoAssignResources/count`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdAutoTemplates(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardAutoTemplate[]> {
    return this.request({
      path: `/service/boards/${parentId}/autoTemplates`,
      method: 'get',
      params,
    })
  }

  postServiceBoardsByParentIdAutoTemplates(
    parentId: number,
    boardAutoTemplate: BoardAutoTemplate,
  ): Promise<BoardAutoTemplate> {
    return this.request({
      path: `/service/boards/${parentId}/autoTemplates`,
      method: 'post',
      data: boardAutoTemplate,
    })
  }

  getServiceBoardsByParentIdAutoTemplatesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardAutoTemplate> {
    return this.request({
      path: `/service/boards/${parentId}/autoTemplates/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceBoardsByParentIdAutoTemplatesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/service/boards/${parentId}/autoTemplates/{id}`,
      method: 'delete',
    })
  }

  putServiceBoardsByParentIdAutoTemplatesById(
    id: number,
    parentId: number,
    boardAutoTemplate: BoardAutoTemplate,
  ): Promise<BoardAutoTemplate> {
    return this.request({
      path: `/service/boards/${parentId}/autoTemplates/{id}`,
      method: 'put',
      data: boardAutoTemplate,
    })
  }

  patchServiceBoardsByParentIdAutoTemplatesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<BoardAutoTemplate> {
    return this.request({
      path: `/service/boards/${parentId}/autoTemplates/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceBoardsByParentIdAutoTemplatesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${parentId}/autoTemplates/count`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdExcludedMembers(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardExcludedMember[]> {
    return this.request({
      path: `/service/boards/${parentId}/excludedMembers`,
      method: 'get',
      params,
    })
  }

  postServiceBoardsByParentIdExcludedMembers(
    parentId: number,
    boardExcludedMember: BoardExcludedMember,
  ): Promise<BoardExcludedMember> {
    return this.request({
      path: `/service/boards/${parentId}/excludedMembers`,
      method: 'post',
      data: boardExcludedMember,
    })
  }

  getServiceBoardsByParentIdExcludedMembersById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardExcludedMember> {
    return this.request({
      path: `/service/boards/${parentId}/excludedMembers/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceBoardsByParentIdExcludedMembersById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/service/boards/${parentId}/excludedMembers/{id}`,
      method: 'delete',
    })
  }

  getServiceBoardsByParentIdExcludedMembersCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${parentId}/excludedMembers/count`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdItems(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardItem[]> {
    return this.request({
      path: `/service/boards/${parentId}/items`,
      method: 'get',
      params,
    })
  }

  postServiceBoardsByParentIdItems(parentId: number, boardItem: BoardItem): Promise<BoardItem> {
    return this.request({
      path: `/service/boards/${parentId}/items`,
      method: 'post',
      data: boardItem,
    })
  }

  getServiceBoardsByParentIdItemsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardItem> {
    return this.request({
      path: `/service/boards/${parentId}/items/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceBoardsByParentIdItemsById(id: number, parentId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/boards/${parentId}/items/{id}`,
      method: 'delete',
    })
  }

  putServiceBoardsByParentIdItemsById(
    id: number,
    parentId: number,
    boardItem: BoardItem,
  ): Promise<BoardItem> {
    return this.request({
      path: `/service/boards/${parentId}/items/{id}`,
      method: 'put',
      data: boardItem,
    })
  }

  patchServiceBoardsByParentIdItemsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<BoardItem> {
    return this.request({
      path: `/service/boards/${parentId}/items/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceBoardsByParentIdItemsByIdUsages(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/service/boards/${parentId}/items/{id}/usages`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdItemsByIdUsagesList(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/service/boards/${parentId}/items/{id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdItemsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${parentId}/items/count`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdNotifications(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardNotification[]> {
    return this.request({
      path: `/service/boards/${parentId}/notifications`,
      method: 'get',
      params,
    })
  }

  postServiceBoardsByParentIdNotifications(
    parentId: number,
    boardNotification: BoardNotification,
  ): Promise<BoardNotification> {
    return this.request({
      path: `/service/boards/${parentId}/notifications`,
      method: 'post',
      data: boardNotification,
    })
  }

  getServiceBoardsByParentIdNotificationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardNotification> {
    return this.request({
      path: `/service/boards/${parentId}/notifications/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceBoardsByParentIdNotificationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/service/boards/${parentId}/notifications/{id}`,
      method: 'delete',
    })
  }

  putServiceBoardsByParentIdNotificationsById(
    id: number,
    parentId: number,
    boardNotification: BoardNotification,
  ): Promise<BoardNotification> {
    return this.request({
      path: `/service/boards/${parentId}/notifications/{id}`,
      method: 'put',
      data: boardNotification,
    })
  }

  patchServiceBoardsByParentIdNotificationsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<BoardNotification> {
    return this.request({
      path: `/service/boards/${parentId}/notifications/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceBoardsByParentIdNotificationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${parentId}/notifications/count`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdStatuses(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardStatus[]> {
    return this.request({
      path: `/service/boards/${parentId}/statuses`,
      method: 'get',
      params,
    })
  }

  postServiceBoardsByParentIdStatuses(
    parentId: number,
    boardStatus: BoardStatus,
  ): Promise<BoardStatus> {
    return this.request({
      path: `/service/boards/${parentId}/statuses`,
      method: 'post',
      data: boardStatus,
    })
  }

  getServiceBoardsByParentIdStatusesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardStatus> {
    return this.request({
      path: `/service/boards/${parentId}/statuses/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceBoardsByParentIdStatusesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/service/boards/${parentId}/statuses/{id}`,
      method: 'delete',
    })
  }

  putServiceBoardsByParentIdStatusesById(
    id: number,
    parentId: number,
    boardStatus: BoardStatus,
  ): Promise<BoardStatus> {
    return this.request({
      path: `/service/boards/${parentId}/statuses/{id}`,
      method: 'put',
      data: boardStatus,
    })
  }

  patchServiceBoardsByParentIdStatusesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<BoardStatus> {
    return this.request({
      path: `/service/boards/${parentId}/statuses/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceBoardsByParentIdStatusesByIdInfo(
    parentId: number,
    id: number,
    params: CommonParameters = {},
  ): Promise<BoardStatusInfo> {
    return this.request({
      path: `/service/boards/${parentId}/statuses/{id}/info`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdStatusesByIdUsages(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/service/boards/${parentId}/statuses/{id}/usages`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdStatusesByIdUsagesList(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/service/boards/${parentId}/statuses/{id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdStatusesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${parentId}/statuses/count`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdStatusesInfo(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardStatusInfo[]> {
    return this.request({
      path: `/service/boards/${parentId}/statuses/info`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdStatusesInfoCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${parentId}/statuses/info/count`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdSubtypes(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardSubType[]> {
    return this.request({
      path: `/service/boards/${parentId}/subtypes`,
      method: 'get',
      params,
    })
  }

  postServiceBoardsByParentIdSubtypes(
    parentId: number,
    boardSubType: BoardSubType,
  ): Promise<BoardSubType> {
    return this.request({
      path: `/service/boards/${parentId}/subtypes`,
      method: 'post',
      data: boardSubType,
    })
  }

  getServiceBoardsByParentIdSubtypesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardSubType> {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceBoardsByParentIdSubtypesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/{id}`,
      method: 'delete',
    })
  }

  putServiceBoardsByParentIdSubtypesById(
    id: number,
    parentId: number,
    boardSubType: BoardSubType,
  ): Promise<BoardSubType> {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/{id}`,
      method: 'put',
      data: boardSubType,
    })
  }

  patchServiceBoardsByParentIdSubtypesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<BoardSubType> {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceBoardsByParentIdSubtypesByIdInfo(
    parentId: number,
    id: number,
    params: CommonParameters = {},
  ): Promise<BoardSubTypeInfo> {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/{id}/info`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdSubtypesByIdUsages(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/{id}/usages`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdSubtypesByIdUsagesList(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/{id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdSubtypesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/count`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdSubtypesInfo(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardSubTypeInfo[]> {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/info`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdSubtypesInfoCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/info/count`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdTeams(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardTeam[]> {
    return this.request({
      path: `/service/boards/${parentId}/teams`,
      method: 'get',
      params,
    })
  }

  postServiceBoardsByParentIdTeams(parentId: number, _boardTeam: BoardTeam): Promise<BoardTeam> {
    return this.request({
      path: `/service/boards/${parentId}/teams`,
      method: 'post',
      data: _boardTeam,
    })
  }

  getServiceBoardsByParentIdTeamsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardTeam> {
    return this.request({
      path: `/service/boards/${parentId}/teams/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceBoardsByParentIdTeamsById(id: number, parentId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/boards/${parentId}/teams/{id}`,
      method: 'delete',
    })
  }

  putServiceBoardsByParentIdTeamsById(
    id: number,
    parentId: number,
    _boardTeam: BoardTeam,
  ): Promise<BoardTeam> {
    return this.request({
      path: `/service/boards/${parentId}/teams/{id}`,
      method: 'put',
      data: _boardTeam,
    })
  }

  patchServiceBoardsByParentIdTeamsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<BoardTeam> {
    return this.request({
      path: `/service/boards/${parentId}/teams/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceBoardsByParentIdTeamsByIdInfo(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardTeamInfo> {
    return this.request({
      path: `/service/boards/${parentId}/teams/{id}/info`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdTeamsByIdUsagesList(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/service/boards/${parentId}/teams/{id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdTeamsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${parentId}/teams/count`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdTeamsInfo(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardTeamInfo[]> {
    return this.request({
      path: `/service/boards/${parentId}/teams/info`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdTeamsInfoCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${parentId}/teams/info/count`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdTypes(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardType[]> {
    return this.request({
      path: `/service/boards/${parentId}/types`,
      method: 'get',
      params,
    })
  }

  postServiceBoardsByParentIdTypes(parentId: number, boardType: BoardType): Promise<BoardType> {
    return this.request({
      path: `/service/boards/${parentId}/types`,
      method: 'post',
      data: boardType,
    })
  }

  getServiceBoardsByParentIdTypesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardType> {
    return this.request({
      path: `/service/boards/${parentId}/types/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceBoardsByParentIdTypesById(id: number, parentId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/boards/${parentId}/types/{id}`,
      method: 'delete',
    })
  }

  putServiceBoardsByParentIdTypesById(
    id: number,
    parentId: number,
    boardType: BoardType,
  ): Promise<BoardType> {
    return this.request({
      path: `/service/boards/${parentId}/types/{id}`,
      method: 'put',
      data: boardType,
    })
  }

  patchServiceBoardsByParentIdTypesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<BoardType> {
    return this.request({
      path: `/service/boards/${parentId}/types/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceBoardsByParentIdTypesByIdUsages(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/service/boards/${parentId}/types/{id}/usages`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdTypesByIdUsagesList(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/service/boards/${parentId}/types/{id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdTypesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${parentId}/types/count`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdTypeSubTypeItemAssociations(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardTypeSubTypeItemAssociation[]> {
    return this.request({
      path: `/service/boards/${parentId}/typeSubTypeItemAssociations`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdTypeSubTypeItemAssociationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardTypeSubTypeItemAssociation> {
    return this.request({
      path: `/service/boards/${parentId}/typeSubTypeItemAssociations/{id}`,
      method: 'get',
      params,
    })
  }

  getServiceBoardsByParentIdTypeSubTypeItemAssociationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/boards/${parentId}/typeSubTypeItemAssociations/count`,
      method: 'get',
      params,
    })
  }

  postServiceBoardsCopy(copy: BoardCopy): Promise<Board> {
    return this.request({
      path: `/service/boards/copy`,
      method: 'post',
      data: copy,
    })
  }

  getServiceBoardsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/boards/count`,
      method: 'get',
      params,
    })
  }

  getServiceCodes(params: CommonParameters = {}): Promise<Code[]> {
    return this.request({
      path: `/service/codes`,
      method: 'get',
      params,
    })
  }

  postServiceCodes(code: Code): Promise<Code> {
    return this.request({
      path: `/service/codes`,
      method: 'post',
      data: code,
    })
  }

  getServiceCodesById(id: number, params: CommonParameters = {}): Promise<Code> {
    return this.request({
      path: `/service/codes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceCodesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/codes/${id}`,
      method: 'delete',
    })
  }

  putServiceCodesById(id: number, code: Code): Promise<Code> {
    return this.request({
      path: `/service/codes/${id}`,
      method: 'put',
      data: code,
    })
  }

  patchServiceCodesById(id: number, patchOperations: PatchOperation[]): Promise<Code> {
    return this.request({
      path: `/service/codes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceCodesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/codes/count`,
      method: 'get',
      params,
    })
  }

  getServiceEmailTemplates(params: CommonParameters = {}): Promise<ServiceEmailTemplate[]> {
    return this.request({
      path: `/service/emailTemplates`,
      method: 'get',
      params,
    })
  }

  postServiceEmailTemplates(
    serviceEmailTemplate: ServiceEmailTemplate,
  ): Promise<ServiceEmailTemplate> {
    return this.request({
      path: `/service/emailTemplates`,
      method: 'post',
      data: serviceEmailTemplate,
    })
  }

  getServiceEmailTemplatesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ServiceEmailTemplate> {
    return this.request({
      path: `/service/emailTemplates/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceEmailTemplatesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/emailTemplates/${id}`,
      method: 'delete',
    })
  }

  putServiceEmailTemplatesById(
    id: number,
    serviceEmailTemplate: ServiceEmailTemplate,
  ): Promise<ServiceEmailTemplate> {
    return this.request({
      path: `/service/emailTemplates/${id}`,
      method: 'put',
      data: serviceEmailTemplate,
    })
  }

  patchServiceEmailTemplatesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<ServiceEmailTemplate> {
    return this.request({
      path: `/service/emailTemplates/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceEmailTemplatesByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/service/emailTemplates/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getServiceEmailTemplatesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/service/emailTemplates/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getServiceEmailTemplatesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/emailTemplates/count`,
      method: 'get',
      params,
    })
  }

  getServiceImpacts(params: CommonParameters = {}): Promise<Impact[]> {
    return this.request({
      path: `/service/impacts`,
      method: 'get',
      params,
    })
  }

  getServiceImpactsById(id: number, params: CommonParameters = {}): Promise<Impact> {
    return this.request({
      path: `/service/impacts/${id}`,
      method: 'get',
      params,
    })
  }

  putServiceImpactsById(id: number, impact: Impact): Promise<Impact> {
    return this.request({
      path: `/service/impacts/${id}`,
      method: 'put',
      data: impact,
    })
  }

  patchServiceImpactsById(id: number, patchOperations: PatchOperation[]): Promise<Impact> {
    return this.request({
      path: `/service/impacts/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceImpactsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/impacts/count`,
      method: 'get',
      params,
    })
  }

  getServiceInfoBoards(params: CommonParameters = {}): Promise<BoardInfo[]> {
    return this.request({
      path: `/service/info/boards`,
      method: 'get',
      params,
    })
  }

  getServiceInfoBoardsById(id: number, params: CommonParameters = {}): Promise<BoardInfo> {
    return this.request({
      path: `/service/info/boards/${id}`,
      method: 'get',
      params,
    })
  }

  getServiceInfoBoardsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/info/boards/count`,
      method: 'get',
      params,
    })
  }

  getServiceInfoBoardtypes(params: CommonParameters = {}): Promise<BoardTypeInfo[]> {
    return this.request({
      path: `/service/info/boardtypes`,
      method: 'get',
      params,
    })
  }

  getServiceInfoBoardtypesById(id: number, params: CommonParameters = {}): Promise<BoardTypeInfo> {
    return this.request({
      path: `/service/info/boardtypes/${id}`,
      method: 'get',
      params,
    })
  }

  getServiceInfoBoardtypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/info/boardtypes/count`,
      method: 'get',
      params,
    })
  }

  getServiceKnowledgeBaseArticles(params: CommonParameters = {}): Promise<KnowledgeBaseArticle[]> {
    return this.request({
      path: `/service/knowledgeBaseArticles`,
      method: 'get',
      params,
    })
  }

  postServiceKnowledgeBaseArticles(
    knowledgeBaseArticle: KnowledgeBaseArticle,
  ): Promise<KnowledgeBaseArticle> {
    return this.request({
      path: `/service/knowledgeBaseArticles`,
      method: 'post',
      data: knowledgeBaseArticle,
    })
  }

  getServiceKnowledgeBaseArticlesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<KnowledgeBaseArticle> {
    return this.request({
      path: `/service/knowledgeBaseArticles/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceKnowledgeBaseArticlesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/knowledgeBaseArticles/${id}`,
      method: 'delete',
    })
  }

  putServiceKnowledgeBaseArticlesById(
    id: number,
    knowledgeBaseArticle: KnowledgeBaseArticle,
  ): Promise<KnowledgeBaseArticle> {
    return this.request({
      path: `/service/knowledgeBaseArticles/${id}`,
      method: 'put',
      data: knowledgeBaseArticle,
    })
  }

  patchServiceKnowledgeBaseArticlesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<KnowledgeBaseArticle> {
    return this.request({
      path: `/service/knowledgeBaseArticles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceKnowledgeBaseArticlesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/knowledgeBaseArticles/count`,
      method: 'get',
      params,
    })
  }

  getServiceKnowledgeBaseCategories(
    params: CommonParameters = {},
  ): Promise<KnowledgeBaseCategory[]> {
    return this.request({
      path: `/service/knowledgeBaseCategories`,
      method: 'get',
      params,
    })
  }

  postServiceKnowledgeBaseCategories(
    knowledgeBaseCategory: KnowledgeBaseCategory,
  ): Promise<KnowledgeBaseCategory> {
    return this.request({
      path: `/service/knowledgeBaseCategories`,
      method: 'post',
      data: knowledgeBaseCategory,
    })
  }

  getServiceKnowledgeBaseCategoriesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<KnowledgeBaseCategory> {
    return this.request({
      path: `/service/knowledgeBaseCategories/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceKnowledgeBaseCategoriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/knowledgeBaseCategories/${id}`,
      method: 'delete',
    })
  }

  putServiceKnowledgeBaseCategoriesById(
    id: number,
    knowledgeBaseCategory: KnowledgeBaseCategory,
  ): Promise<KnowledgeBaseCategory> {
    return this.request({
      path: `/service/knowledgeBaseCategories/${id}`,
      method: 'put',
      data: knowledgeBaseCategory,
    })
  }

  patchServiceKnowledgeBaseCategoriesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<KnowledgeBaseCategory> {
    return this.request({
      path: `/service/knowledgeBaseCategories/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceKnowledgeBaseCategoriesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/knowledgeBaseCategories/count`,
      method: 'get',
      params,
    })
  }

  getServiceKnowledgebasesettings(params: CommonParameters = {}): Promise<KnowledgeBaseSettings> {
    return this.request({
      path: `/service/knowledgebasesettings`,
      method: 'get',
      params,
    })
  }

  postServiceKnowledgebasesettings(
    knowledgeBaseSettings: KnowledgeBaseSettings,
  ): Promise<KnowledgeBaseSettings> {
    return this.request({
      path: `/service/knowledgebasesettings`,
      method: 'post',
      data: knowledgeBaseSettings,
    })
  }

  getServiceKnowledgebasesettingsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<KnowledgeBaseSettings> {
    return this.request({
      path: `/service/knowledgebasesettings/${id}`,
      method: 'get',
      params,
    })
  }

  putServiceKnowledgebasesettingsById(
    id: number,
    knowledgeBaseSettings: KnowledgeBaseSettings,
  ): Promise<KnowledgeBaseSettings> {
    return this.request({
      path: `/service/knowledgebasesettings/${id}`,
      method: 'put',
      data: knowledgeBaseSettings,
    })
  }

  patchServiceKnowledgebasesettingsById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<KnowledgeBaseSettings> {
    return this.request({
      path: `/service/knowledgebasesettings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceKnowledgeBaseSubCategories(
    params: CommonParameters = {},
  ): Promise<KnowledgeBaseSubCategory[]> {
    return this.request({
      path: `/service/knowledgeBaseSubCategories`,
      method: 'get',
      params,
    })
  }

  postServiceKnowledgeBaseSubCategories(
    knowledgeBaseSubCategory: KnowledgeBaseSubCategory,
  ): Promise<KnowledgeBaseSubCategory> {
    return this.request({
      path: `/service/knowledgeBaseSubCategories`,
      method: 'post',
      data: knowledgeBaseSubCategory,
    })
  }

  getServiceKnowledgeBaseSubCategoriesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<KnowledgeBaseSubCategory> {
    return this.request({
      path: `/service/knowledgeBaseSubCategories/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceKnowledgeBaseSubCategoriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/knowledgeBaseSubCategories/${id}`,
      method: 'delete',
    })
  }

  putServiceKnowledgeBaseSubCategoriesById(
    id: number,
    knowledgeBaseSubCategory: KnowledgeBaseSubCategory,
  ): Promise<KnowledgeBaseSubCategory> {
    return this.request({
      path: `/service/knowledgeBaseSubCategories/${id}`,
      method: 'put',
      data: knowledgeBaseSubCategory,
    })
  }

  patchServiceKnowledgeBaseSubCategoriesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<KnowledgeBaseSubCategory> {
    return this.request({
      path: `/service/knowledgeBaseSubCategories/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceKnowledgeBaseSubCategoriesByIdUsages(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/service/knowledgeBaseSubCategories/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getServiceKnowledgeBaseSubCategoriesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/service/knowledgeBaseSubCategories/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getServiceKnowledgeBaseSubCategoriesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/knowledgeBaseSubCategories/count`,
      method: 'get',
      params,
    })
  }

  getServiceLocations(params: CommonParameters = {}): Promise<ServiceLocation[]> {
    return this.request({
      path: `/service/locations`,
      method: 'get',
      params,
    })
  }

  postServiceLocations(location: ServiceLocation): Promise<ServiceLocation> {
    return this.request({
      path: `/service/locations`,
      method: 'post',
      data: location,
    })
  }

  getServiceLocationsById(id: number, params: CommonParameters = {}): Promise<ServiceLocation> {
    return this.request({
      path: `/service/locations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceLocationsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/locations/${id}`,
      method: 'delete',
    })
  }

  putServiceLocationsById(id: number, location: ServiceLocation): Promise<ServiceLocation> {
    return this.request({
      path: `/service/locations/${id}`,
      method: 'put',
      data: location,
    })
  }

  patchServiceLocationsById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<ServiceLocation> {
    return this.request({
      path: `/service/locations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceLocationsByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<ServiceLocationInfo> {
    return this.request({
      path: `/service/locations/${id}/info`,
      method: 'get',
      params,
    })
  }

  getServiceLocationsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/locations/count`,
      method: 'get',
      params,
    })
  }

  getServiceLocationsInfo(params: CommonParameters = {}): Promise<ServiceLocationInfo[]> {
    return this.request({
      path: `/service/locations/info`,
      method: 'get',
      params,
    })
  }

  getServiceLocationsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/locations/info/count`,
      method: 'get',
      params,
    })
  }

  getServicePriorities(params: CommonParameters = {}): Promise<Priority[]> {
    return this.request({
      path: `/service/priorities`,
      method: 'get',
      params,
    })
  }

  postServicePriorities(priority: Priority): Promise<Priority> {
    return this.request({
      path: `/service/priorities`,
      method: 'post',
      data: priority,
    })
  }

  getServicePrioritiesById(id: number, params: CommonParameters = {}): Promise<Priority> {
    return this.request({
      path: `/service/priorities/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServicePrioritiesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/priorities/${id}`,
      method: 'delete',
    })
  }

  putServicePrioritiesById(id: number, priority: Priority): Promise<Priority> {
    return this.request({
      path: `/service/priorities/${id}`,
      method: 'put',
      data: priority,
    })
  }

  patchServicePrioritiesById(id: number, patchOperations: PatchOperation[]): Promise<Priority> {
    return this.request({
      path: `/service/priorities/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServicePrioritiesByIdImage(
    id: number,
    useDefaultFlag: boolean,
    lastModified: string,
    params: CommonParameters = {},
  ): Promise<OctetStreamResponse> {
    return this.request({
      path: `/service/priorities/${id}/image`,
      method: 'get',
      params,
    })
  }

  getServicePrioritiesByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/service/priorities/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getServicePrioritiesByIdUsagesList(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/service/priorities/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getServicePrioritiesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/priorities/count`,
      method: 'get',
      params,
    })
  }

  getServicePriorityByIdInfo(id: number, params: CommonParameters = {}): Promise<PriorityInfo> {
    return this.request({
      path: `/service/priority/${id}/info`,
      method: 'get',
      params,
    })
  }

  getServicePriorityInfo(params: CommonParameters = {}): Promise<PriorityInfo[]> {
    return this.request({
      path: `/service/priority/info`,
      method: 'get',
      params,
    })
  }

  getServiceSchedulingMembersByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<SchedulingMemberInfo> {
    return this.request({
      path: `/service/scheduling/members/${id}/info`,
      method: 'get',
      params,
    })
  }

  getServiceSchedulingMembersInfo(params: CommonParameters = {}): Promise<SchedulingMemberInfo[]> {
    return this.request({
      path: `/service/scheduling/members/info`,
      method: 'get',
      params,
    })
  }

  getServiceSchedulingMembersInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/scheduling/members/info/count`,
      method: 'get',
      params,
    })
  }

  getServiceServiceSignoff(params: CommonParameters = {}): Promise<ServiceSignoff[]> {
    return this.request({
      path: `/service/serviceSignoff`,
      method: 'get',
      params,
    })
  }

  postServiceServiceSignoff(serviceSignoff: ServiceSignoff): Promise<ServiceSignoff> {
    return this.request({
      path: `/service/serviceSignoff`,
      method: 'post',
      data: serviceSignoff,
    })
  }

  getServiceServiceSignoffById(id: number, params: CommonParameters = {}): Promise<ServiceSignoff> {
    return this.request({
      path: `/service/serviceSignoff/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceServiceSignoffById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/serviceSignoff/${id}`,
      method: 'delete',
    })
  }

  putServiceServiceSignoffById(
    id: number,
    serviceSignoff: ServiceSignoff,
  ): Promise<ServiceSignoff> {
    return this.request({
      path: `/service/serviceSignoff/${id}`,
      method: 'put',
      data: serviceSignoff,
    })
  }

  patchServiceServiceSignoffById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<ServiceSignoff> {
    return this.request({
      path: `/service/serviceSignoff/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceServiceSignoffByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<ServiceSignoffInfo> {
    return this.request({
      path: `/service/serviceSignoff/${id}/info`,
      method: 'get',
      params,
    })
  }

  getServiceServiceSignoffByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/service/serviceSignoff/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getServiceServiceSignoffByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/service/serviceSignoff/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getServiceServiceSignoffCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/serviceSignoff/count`,
      method: 'get',
      params,
    })
  }

  getServiceServiceSignoffInfo(params: CommonParameters = {}): Promise<ServiceSignoffInfo[]> {
    return this.request({
      path: `/service/serviceSignoff/info`,
      method: 'get',
      params,
    })
  }

  getServiceServiceSignoffInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/serviceSignoff/info/count`,
      method: 'get',
      params,
    })
  }

  getServiceSeverities(params: CommonParameters = {}): Promise<Severity[]> {
    return this.request({
      path: `/service/severities`,
      method: 'get',
      params,
    })
  }

  getServiceSeveritiesById(id: number, params: CommonParameters = {}): Promise<Severity> {
    return this.request({
      path: `/service/severities/${id}`,
      method: 'get',
      params,
    })
  }

  putServiceSeveritiesById(id: number, severity: Severity): Promise<Severity> {
    return this.request({
      path: `/service/severities/${id}`,
      method: 'put',
      data: severity,
    })
  }

  patchServiceSeveritiesById(id: number, patchOperations: PatchOperation[]): Promise<Severity> {
    return this.request({
      path: `/service/severities/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceSeveritiesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/severities/count`,
      method: 'get',
      params,
    })
  }

  getServiceSlainfoByIdInfo(id: number, params: CommonParameters = {}): Promise<SLAInfo> {
    return this.request({
      path: `/service/slainfo/${id}/info`,
      method: 'get',
      params,
    })
  }

  getServiceSlainfoInfo(params: CommonParameters = {}): Promise<SLAInfo[]> {
    return this.request({
      path: `/service/slainfo/info`,
      method: 'get',
      params,
    })
  }

  getServiceSLAs(params: CommonParameters = {}): Promise<SLA[]> {
    return this.request({
      path: `/service/SLAs`,
      method: 'get',
      params,
    })
  }

  postServiceSLAs(sLA: SLA): Promise<SLA> {
    return this.request({
      path: `/service/SLAs`,
      method: 'post',
      data: sLA,
    })
  }

  getServiceSLAsById(id: number, params: CommonParameters = {}): Promise<SLA> {
    return this.request({
      path: `/service/SLAs/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceSLAsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/SLAs/${id}`,
      method: 'delete',
    })
  }

  putServiceSLAsById(id: number, sLA: SLA): Promise<SLA> {
    return this.request({
      path: `/service/SLAs/${id}`,
      method: 'put',
      data: sLA,
    })
  }

  patchServiceSLAsById(id: number, patchOperations: PatchOperation[]): Promise<SLA> {
    return this.request({
      path: `/service/SLAs/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceSLAsByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/service/SLAs/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getServiceSLAsByIdUsagesList(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/service/SLAs/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getServiceSLAsByParentIdPriorities(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<SLAPriority[]> {
    return this.request({
      path: `/service/SLAs/${parentId}/priorities`,
      method: 'get',
      params,
    })
  }

  postServiceSLAsByParentIdPriorities(
    parentId: number,
    sLAPriority: SLAPriority,
  ): Promise<SLAPriority> {
    return this.request({
      path: `/service/SLAs/${parentId}/priorities`,
      method: 'post',
      data: sLAPriority,
    })
  }

  getServiceSLAsByParentIdPrioritiesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<SLAPriority> {
    return this.request({
      path: `/service/SLAs/${parentId}/priorities/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceSLAsByParentIdPrioritiesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/service/SLAs/${parentId}/priorities/{id}`,
      method: 'delete',
    })
  }

  putServiceSLAsByParentIdPrioritiesById(
    id: number,
    parentId: number,
    sLAPriority: SLAPriority,
  ): Promise<SLAPriority> {
    return this.request({
      path: `/service/SLAs/${parentId}/priorities/{id}`,
      method: 'put',
      data: sLAPriority,
    })
  }

  patchServiceSLAsByParentIdPrioritiesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<SLAPriority> {
    return this.request({
      path: `/service/SLAs/${parentId}/priorities/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceSLAsByParentIdPrioritiesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/SLAs/${parentId}/priorities/count`,
      method: 'get',
      params,
    })
  }

  getServiceSLAsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/SLAs/count`,
      method: 'get',
      params,
    })
  }

  getServiceSLAsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/SLAs/info/count`,
      method: 'get',
      params,
    })
  }

  getServiceSources(params: CommonParameters = {}): Promise<Source[]> {
    return this.request({
      path: `/service/sources`,
      method: 'get',
      params,
    })
  }

  postServiceSources(source: Source): Promise<Source> {
    return this.request({
      path: `/service/sources`,
      method: 'post',
      data: source,
    })
  }

  getServiceSourcesById(id: number, params: CommonParameters = {}): Promise<Source> {
    return this.request({
      path: `/service/sources/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceSourcesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/sources/${id}`,
      method: 'delete',
    })
  }

  putServiceSourcesById(id: number, source: Source): Promise<Source> {
    return this.request({
      path: `/service/sources/${id}`,
      method: 'put',
      data: source,
    })
  }

  patchServiceSourcesById(id: number, patchOperations: PatchOperation[]): Promise<Source> {
    return this.request({
      path: `/service/sources/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceSourcesByIdInfo(id: number, params: CommonParameters = {}): Promise<SourceInfo> {
    return this.request({
      path: `/service/sources/${id}/info`,
      method: 'get',
      params,
    })
  }

  getServiceSourcesByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/service/sources/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getServiceSourcesByIdUsagesList(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/service/sources/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getServiceSourcesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/sources/count`,
      method: 'get',
      params,
    })
  }

  getServiceSourcesInfo(params: CommonParameters = {}): Promise<SourceInfo[]> {
    return this.request({
      path: `/service/sources/info`,
      method: 'get',
      params,
    })
  }

  getServiceSourcesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/sources/info/count`,
      method: 'get',
      params,
    })
  }

  getServiceSurveys(params: CommonParameters = {}): Promise<ServiceSurvey[]> {
    return this.request({
      path: `/service/surveys`,
      method: 'get',
      params,
    })
  }

  postServiceSurveys(survey: ServiceSurvey): Promise<ServiceSurvey> {
    return this.request({
      path: `/service/surveys`,
      method: 'post',
      data: survey,
    })
  }

  getServiceSurveysByGrandparentIdQuestionsByParentIdOptions(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<SurveyOption[]> {
    return this.request({
      path: `/service/surveys/${grandparentId}/questions/{parentId}/options`,
      method: 'get',
      params,
    })
  }

  postServiceSurveysByGrandparentIdQuestionsByParentIdOptions(
    parentId: number,
    grandparentId: number,
    surveyOption: SurveyOption,
  ): Promise<SurveyOption> {
    return this.request({
      path: `/service/surveys/${grandparentId}/questions/{parentId}/options`,
      method: 'post',
      data: surveyOption,
    })
  }

  getServiceSurveysByGrandparentIdQuestionsByParentIdOptionsById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<SurveyOption> {
    return this.request({
      path: `/service/surveys/${grandparentId}/questions/{parentId}/options/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceSurveysByGrandparentIdQuestionsByParentIdOptionsById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/service/surveys/${grandparentId}/questions/{parentId}/options/{id}`,
      method: 'delete',
    })
  }

  putServiceSurveysByGrandparentIdQuestionsByParentIdOptionsById(
    id: number,
    parentId: number,
    grandparentId: number,
    surveyOption: SurveyOption,
  ): Promise<SurveyOption> {
    return this.request({
      path: `/service/surveys/${grandparentId}/questions/{parentId}/options/{id}`,
      method: 'put',
      data: surveyOption,
    })
  }

  patchServiceSurveysByGrandparentIdQuestionsByParentIdOptionsById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: PatchOperation[],
  ): Promise<SurveyOption> {
    return this.request({
      path: `/service/surveys/${grandparentId}/questions/{parentId}/options/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceSurveysByGrandparentIdQuestionsByParentIdOptionsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/surveys/${grandparentId}/questions/{parentId}/options/count`,
      method: 'get',
      params,
    })
  }

  getServiceSurveysById(id: number, params: CommonParameters = {}): Promise<ServiceSurvey> {
    return this.request({
      path: `/service/surveys/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceSurveysById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/surveys/${id}`,
      method: 'delete',
    })
  }

  putServiceSurveysById(id: number, survey: ServiceSurvey): Promise<ServiceSurvey> {
    return this.request({
      path: `/service/surveys/${id}`,
      method: 'put',
      data: survey,
    })
  }

  patchServiceSurveysById(id: number, patchOperations: PatchOperation[]): Promise<ServiceSurvey> {
    return this.request({
      path: `/service/surveys/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postServiceSurveysByIdCopy(id: number): Promise<ServiceSurvey> {
    return this.request({
      path: `/service/surveys/${id}/copy`,
      method: 'post',
    })
  }

  getServiceSurveysByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/service/surveys/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getServiceSurveysByIdUsagesList(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/service/surveys/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getServiceSurveysByParentIdQuestions(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ServiceSurveyQuestion[]> {
    return this.request({
      path: `/service/surveys/${parentId}/questions`,
      method: 'get',
      params,
    })
  }

  postServiceSurveysByParentIdQuestions(
    parentId: number,
    serviceSurveyQuestion: ServiceSurveyQuestion,
  ): Promise<ServiceSurveyQuestion> {
    return this.request({
      path: `/service/surveys/${parentId}/questions`,
      method: 'post',
      data: serviceSurveyQuestion,
    })
  }

  getServiceSurveysByParentIdQuestionsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ServiceSurveyQuestion> {
    return this.request({
      path: `/service/surveys/${parentId}/questions/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceSurveysByParentIdQuestionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/service/surveys/${parentId}/questions/{id}`,
      method: 'delete',
    })
  }

  putServiceSurveysByParentIdQuestionsById(
    id: number,
    parentId: number,
    serviceSurveyQuestion: ServiceSurveyQuestion,
  ): Promise<ServiceSurveyQuestion> {
    return this.request({
      path: `/service/surveys/${parentId}/questions/{id}`,
      method: 'put',
      data: serviceSurveyQuestion,
    })
  }

  patchServiceSurveysByParentIdQuestionsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<ServiceSurveyQuestion> {
    return this.request({
      path: `/service/surveys/${parentId}/questions/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postServiceSurveysByParentIdQuestionsByIdCopy(
    id: number,
    parentId: number,
  ): Promise<ServiceSurveyQuestion> {
    return this.request({
      path: `/service/surveys/${parentId}/questions/{id}/copy`,
      method: 'post',
    })
  }

  getServiceSurveysByParentIdQuestionsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/surveys/${parentId}/questions/count`,
      method: 'get',
      params,
    })
  }

  getServiceSurveysByParentIdResults(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<SurveyResult[]> {
    return this.request({
      path: `/service/surveys/${parentId}/results`,
      method: 'get',
      params,
    })
  }

  postServiceSurveysByParentIdResults(
    parentId: number,
    surveyResult: SurveyResult,
  ): Promise<SurveyResult> {
    return this.request({
      path: `/service/surveys/${parentId}/results`,
      method: 'post',
      data: surveyResult,
    })
  }

  getServiceSurveysByParentIdResultsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<SurveyResult> {
    return this.request({
      path: `/service/surveys/${parentId}/results/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceSurveysByParentIdResultsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/service/surveys/${parentId}/results/{id}`,
      method: 'delete',
    })
  }

  putServiceSurveysByParentIdResultsById(
    id: number,
    parentId: number,
    surveyResult: SurveyResult,
  ): Promise<SurveyResult> {
    return this.request({
      path: `/service/surveys/${parentId}/results/{id}`,
      method: 'put',
      data: surveyResult,
    })
  }

  patchServiceSurveysByParentIdResultsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<SurveyResult> {
    return this.request({
      path: `/service/surveys/${parentId}/results/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceSurveysByParentIdResultsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/surveys/${parentId}/results/count`,
      method: 'get',
      params,
    })
  }

  getServiceSurveysCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/surveys/count`,
      method: 'get',
      params,
    })
  }

  postServiceTeamMembers(teamMember: TeamMember): Promise<TeamMember> {
    return this.request({
      path: `/service/teamMembers`,
      method: 'post',
      data: teamMember,
    })
  }

  getServiceTeams(params: CommonParameters = {}): Promise<ServiceTeam[]> {
    return this.request({
      path: `/service/teams`,
      method: 'get',
      params,
    })
  }

  getServiceTeamsById(id: number, params: CommonParameters = {}): Promise<ServiceTeam> {
    return this.request({
      path: `/service/teams/${id}`,
      method: 'get',
      params,
    })
  }

  getServiceTeamsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/teams/count`,
      method: 'get',
      params,
    })
  }

  getServiceTemplates(params: CommonParameters = {}): Promise<ServiceTemplate[]> {
    return this.request({
      path: `/service/templates`,
      method: 'get',
      params,
    })
  }

  getServiceTemplatesById(id: number, params: CommonParameters = {}): Promise<ServiceTemplate> {
    return this.request({
      path: `/service/templates/${id}`,
      method: 'get',
      params,
    })
  }

  postServiceTemplatesByIdGenerate(id: number): Promise<TemplateGeneratedCountsModel> {
    return this.request({
      path: `/service/templates/${id}/generate`,
      method: 'post',
    })
  }

  getServiceTemplatesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<ServiceTemplateInfo> {
    return this.request({
      path: `/service/templates/${id}/info`,
      method: 'get',
      params,
    })
  }

  getServiceTemplatesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/templates/count`,
      method: 'get',
      params,
    })
  }

  getServiceTemplatesInfo(params: CommonParameters = {}): Promise<ServiceTemplateInfo[]> {
    return this.request({
      path: `/service/templates/info`,
      method: 'get',
      params,
    })
  }

  getServiceTemplatesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/templates/info/count`,
      method: 'get',
      params,
    })
  }

  getServiceTicketLinks(params: CommonParameters = {}): Promise<ServiceTicketLink[]> {
    return this.request({
      path: `/service/ticketLinks`,
      method: 'get',
      params,
    })
  }

  postServiceTicketLinks(serviceTicketLink: ServiceTicketLink): Promise<ServiceTicketLink> {
    return this.request({
      path: `/service/ticketLinks`,
      method: 'post',
      data: serviceTicketLink,
    })
  }

  getServiceTicketLinksById(id: number, params: CommonParameters = {}): Promise<ServiceTicketLink> {
    return this.request({
      path: `/service/ticketLinks/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceTicketLinksById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/ticketLinks/${id}`,
      method: 'delete',
    })
  }

  putServiceTicketLinksById(
    id: number,
    serviceTicketLink: ServiceTicketLink,
  ): Promise<ServiceTicketLink> {
    return this.request({
      path: `/service/ticketLinks/${id}`,
      method: 'put',
      data: serviceTicketLink,
    })
  }

  patchServiceTicketLinksById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<ServiceTicketLink> {
    return this.request({
      path: `/service/ticketLinks/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceTicketLinksByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<ServiceTicketLinkInfo> {
    return this.request({
      path: `/service/ticketLinks/${id}/info`,
      method: 'get',
      params,
    })
  }

  getServiceTicketLinksCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/ticketLinks/count`,
      method: 'get',
      params,
    })
  }

  getServiceTicketLinksInfo(params: CommonParameters = {}): Promise<ServiceTicketLinkInfo[]> {
    return this.request({
      path: `/service/ticketLinks/info`,
      method: 'get',
      params,
    })
  }

  getServiceTicketLinksInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/ticketLinks/info/count`,
      method: 'get',
      params,
    })
  }

  getServiceTickets(params: CommonParameters = {}): Promise<Ticket[]> {
    return this.request({
      path: `/service/tickets`,
      method: 'get',
      params,
    })
  }

  postServiceTickets(ticket: Ticket): Promise<Ticket> {
    return this.request({
      path: `/service/tickets`,
      method: 'post',
      data: ticket,
    })
  }

  getServiceTicketsById(id: number, params: CommonParameters = {}): Promise<Ticket> {
    return this.request({
      path: `/service/tickets/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceTicketsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/tickets/${id}`,
      method: 'delete',
    })
  }

  putServiceTicketsById(id: number, ticket: Ticket): Promise<Ticket> {
    return this.request({
      path: `/service/tickets/${id}`,
      method: 'put',
      data: ticket,
    })
  }

  patchServiceTicketsById(id: number, patchOperations: PatchOperation[]): Promise<Ticket> {
    return this.request({
      path: `/service/tickets/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceTicketsByIdInfo(id: number, params: CommonParameters = {}): Promise<TicketInfo> {
    return this.request({
      path: `/service/tickets/${id}/info`,
      method: 'get',
      params,
    })
  }

  getServiceTicketsByParentIdActivities(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ActivityReference[]> {
    return this.request({
      path: `/service/tickets/${parentId}/activities`,
      method: 'get',
      params,
    })
  }

  getServiceTicketsByParentIdActivitiesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/tickets/${parentId}/activities/count`,
      method: 'get',
      params,
    })
  }

  getServiceTicketsByParentIdAllNotes(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ServiceTicketNote[]> {
    return this.request({
      path: `/service/tickets/${parentId}/allNotes`,
      method: 'get',
      params,
    })
  }

  postServiceTicketsByParentIdAttachChildren(
    parentId: number,
    bundle: TicketBundle,
  ): Promise<SuccessResponse> {
    return this.request({
      path: `/service/tickets/${parentId}/attachChildren`,
      method: 'post',
      data: bundle,
    })
  }

  getServiceTicketsByParentIdConfigurations(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ConfigurationReference[]> {
    return this.request({
      path: `/service/tickets/${parentId}/configurations`,
      method: 'get',
      params,
    })
  }

  postServiceTicketsByParentIdConfigurations(
    parentId: number,
    configuration: ConfigurationReference,
  ): Promise<ConfigurationReference> {
    return this.request({
      path: `/service/tickets/${parentId}/configurations`,
      method: 'post',
      data: configuration,
    })
  }

  getServiceTicketsByParentIdConfigurationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ConfigurationReference> {
    return this.request({
      path: `/service/tickets/${parentId}/configurations/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceTicketsByParentIdConfigurationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/service/tickets/${parentId}/configurations/{id}`,
      method: 'delete',
    })
  }

  getServiceTicketsByParentIdConfigurationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/tickets/${parentId}/configurations/count`,
      method: 'get',
      params,
    })
  }

  postServiceTicketsByParentIdConvert(
    parentId: number,
    conversion: ConvertToProject,
  ): Promise<SuccessResponse> {
    return this.request({
      path: `/service/tickets/${parentId}/convert`,
      method: 'post',
      data: conversion,
    })
  }

  getServiceTicketsByParentIdDocuments(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<DocumentReference[]> {
    return this.request({
      path: `/service/tickets/${parentId}/documents`,
      method: 'get',
      params,
    })
  }

  getServiceTicketsByParentIdDocumentsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/tickets/${parentId}/documents/count`,
      method: 'get',
      params,
    })
  }

  postServiceTicketsByParentIdMerge(
    parentId: number,
    merge: TicketMerge,
  ): Promise<SuccessResponse> {
    return this.request({
      path: `/service/tickets/${parentId}/merge`,
      method: 'post',
      data: merge,
    })
  }

  getServiceTicketsByParentIdNotes(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ServiceNote[]> {
    return this.request({
      path: `/service/tickets/${parentId}/notes`,
      method: 'get',
      params,
    })
  }

  postServiceTicketsByParentIdNotes(
    parentId: number,
    serviceNote: ServiceNote,
  ): Promise<ServiceNote> {
    return this.request({
      path: `/service/tickets/${parentId}/notes`,
      method: 'post',
      data: serviceNote,
    })
  }

  getServiceTicketsByParentIdNotesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ServiceNote> {
    return this.request({
      path: `/service/tickets/${parentId}/notes/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceTicketsByParentIdNotesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/service/tickets/${parentId}/notes/{id}`,
      method: 'delete',
    })
  }

  putServiceTicketsByParentIdNotesById(
    id: number,
    parentId: number,
    serviceNote: ServiceNote,
  ): Promise<ServiceNote> {
    return this.request({
      path: `/service/tickets/${parentId}/notes/{id}`,
      method: 'put',
      data: serviceNote,
    })
  }

  patchServiceTicketsByParentIdNotesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<ServiceNote> {
    return this.request({
      path: `/service/tickets/${parentId}/notes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceTicketsByParentIdNotesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/tickets/${parentId}/notes/count`,
      method: 'get',
      params,
    })
  }

  getServiceTicketsByParentIdProducts(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProductReference[]> {
    return this.request({
      path: `/service/tickets/${parentId}/products`,
      method: 'get',
      params,
    })
  }

  getServiceTicketsByParentIdProductsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/tickets/${parentId}/products/count`,
      method: 'get',
      params,
    })
  }

  getServiceTicketsByParentIdScheduleentries(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ScheduleEntryReference[]> {
    return this.request({
      path: `/service/tickets/${parentId}/scheduleentries`,
      method: 'get',
      params,
    })
  }

  getServiceTicketsByParentIdScheduleentriesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/tickets/${parentId}/scheduleentries/count`,
      method: 'get',
      params,
    })
  }

  getServiceTicketsByParentIdTasks(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Task[]> {
    return this.request({
      path: `/service/tickets/${parentId}/tasks`,
      method: 'get',
      params,
    })
  }

  postServiceTicketsByParentIdTasks(parentId: number, task: Task): Promise<Task> {
    return this.request({
      path: `/service/tickets/${parentId}/tasks`,
      method: 'post',
      data: task,
    })
  }

  getServiceTicketsByParentIdTasksById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Task> {
    return this.request({
      path: `/service/tickets/${parentId}/tasks/{id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceTicketsByParentIdTasksById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/service/tickets/${parentId}/tasks/{id}`,
      method: 'delete',
    })
  }

  putServiceTicketsByParentIdTasksById(id: number, parentId: number, task: Task): Promise<Task> {
    return this.request({
      path: `/service/tickets/${parentId}/tasks/{id}`,
      method: 'put',
      data: task,
    })
  }

  patchServiceTicketsByParentIdTasksById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<Task> {
    return this.request({
      path: `/service/tickets/${parentId}/tasks/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceTicketsByParentIdTasksCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/tickets/${parentId}/tasks/count`,
      method: 'get',
      params,
    })
  }

  getServiceTicketsByParentIdTimeentries(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<TimeEntryReference[]> {
    return this.request({
      path: `/service/tickets/${parentId}/timeentries`,
      method: 'get',
      params,
    })
  }

  getServiceTicketsByParentIdTimeentriesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/service/tickets/${parentId}/timeentries/count`,
      method: 'get',
      params,
    })
  }

  getServiceTicketsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/tickets/count`,
      method: 'get',
      params,
    })
  }

  getServiceTicketsInfo(params: CommonParameters = {}): Promise<TicketInfo[]> {
    return this.request({
      path: `/service/tickets/info`,
      method: 'get',
      params,
    })
  }

  getServiceTicketsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/tickets/info/count`,
      method: 'get',
      params,
    })
  }

  postServiceTicketsSearch(filterValues: FilterValues): Promise<Ticket[]> {
    return this.request({
      path: `/service/tickets/search`,
      method: 'post',
      data: filterValues,
    })
  }

  getServiceTicketSyncs(params: CommonParameters = {}): Promise<TicketSync[]> {
    return this.request({
      path: `/service/ticketSyncs`,
      method: 'get',
      params,
    })
  }

  postServiceTicketSyncs(ticketSync: TicketSync): Promise<TicketSync> {
    return this.request({
      path: `/service/ticketSyncs`,
      method: 'post',
      data: ticketSync,
    })
  }

  getServiceTicketSyncsById(id: number, params: CommonParameters = {}): Promise<TicketSync> {
    return this.request({
      path: `/service/ticketSyncs/${id}`,
      method: 'get',
      params,
    })
  }

  deleteServiceTicketSyncsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/service/ticketSyncs/${id}`,
      method: 'delete',
    })
  }

  putServiceTicketSyncsById(id: number, ticketSync: TicketSync): Promise<TicketSync> {
    return this.request({
      path: `/service/ticketSyncs/${id}`,
      method: 'put',
      data: ticketSync,
    })
  }

  patchServiceTicketSyncsById(id: number, patchOperations: PatchOperation[]): Promise<TicketSync> {
    return this.request({
      path: `/service/ticketSyncs/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getServiceTicketSyncsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/service/ticketSyncs/count`,
      method: 'get',
      params,
    })
  }
}
