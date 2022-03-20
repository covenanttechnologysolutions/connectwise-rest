/* This file was auto-generated, do not manually edit. */
import Manage from '../Manage'
import { components } from '../ManageTypes'
import { CommonParameters, CWMOptions } from '../ManageAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type ActivityReference = schemas['ActivityReference']
type ConfigurationReference = schemas['ConfigurationReference']
type ConvertItem = schemas['ConvertItem']
type Count = schemas['Count']
type DocumentReference = schemas['DocumentReference']
type FilterValues = schemas['FilterValues']
type PatchOperation = schemas['PatchOperation']
type PhaseStatus = schemas['PhaseStatus']
type ProductReference = schemas['ProductReference']
type Project = schemas['Project']
type ProjectBoardTeam = schemas['ProjectBoardTeam']
type ProjectBoardTeamInfo = schemas['ProjectBoardTeamInfo']
type ProjectBoardTeamMember = schemas['ProjectBoardTeamMember']
type ProjectContact = schemas['ProjectContact']
type ProjectNote = schemas['ProjectNote']
type ProjectPhase = schemas['ProjectPhase']
type ProjectSecurityRole = schemas['ProjectSecurityRole']
type ProjectSecurityRoleSetting = schemas['ProjectSecurityRoleSetting']
type ProjectStatus = schemas['ProjectStatus']
type ProjectStatusInfo = schemas['ProjectStatusInfo']
type ProjectTeamMember = schemas['ProjectTeamMember']
type ProjectTicket = schemas['ProjectTicket']
type ProjectTicketNote = schemas['ProjectTicketNote']
type ProjectType = schemas['ProjectType']
type ProjectTypeInfo = schemas['ProjectTypeInfo']
type ScheduleEntryReference = schemas['ScheduleEntryReference']
type StatusIndicator = schemas['StatusIndicator']
type SuccessResponse = schemas['SuccessResponse']
type TicketNote = schemas['TicketNote']
type TicketTask = schemas['TicketTask']
type TimeEntryReference = schemas['TimeEntryReference']
type Usage = schemas['Usage']

export default class ProjectAPI extends Manage {
  constructor(props: CWMOptions) {
    super(props)
  }

  getProjectBoardsByGrandparentIdTeamsByParentIdMembers(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectBoardTeamMember[]> {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/{parentId}/members`,
      method: 'get',
      params,
    })
  }

  postProjectBoardsByGrandparentIdTeamsByParentIdMembers(
    parentId: number,
    grandparentId: number,
    teamMember: ProjectBoardTeamMember,
  ): Promise<ProjectBoardTeamMember> {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/{parentId}/members`,
      method: 'post',
      data: teamMember,
    })
  }

  getProjectBoardsByGrandparentIdTeamsByParentIdMembersById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectBoardTeamMember> {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/{parentId}/members/{id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectBoardsByGrandparentIdTeamsByParentIdMembersById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/{parentId}/members/{id}`,
      method: 'delete',
    })
  }

  putProjectBoardsByGrandparentIdTeamsByParentIdMembersById(
    id: number,
    parentId: number,
    grandparentId: number,
    teamMember: ProjectBoardTeamMember,
  ): Promise<ProjectBoardTeamMember> {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/{parentId}/members/{id}`,
      method: 'put',
      data: teamMember,
    })
  }

  patchProjectBoardsByGrandparentIdTeamsByParentIdMembersById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: PatchOperation[],
  ): Promise<ProjectBoardTeamMember> {
    return this.request({
      path: `/project/boards/${grandparentId}/teams/{parentId}/members/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectBoardsByParentIdTeams(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectBoardTeam[]> {
    return this.request({
      path: `/project/boards/${parentId}/teams`,
      method: 'get',
      params,
    })
  }

  postProjectBoardsByParentIdTeams(
    parentId: number,
    team: ProjectBoardTeam,
  ): Promise<ProjectBoardTeam> {
    return this.request({
      path: `/project/boards/${parentId}/teams`,
      method: 'post',
      data: team,
    })
  }

  getProjectBoardsByParentIdTeamsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectBoardTeam> {
    return this.request({
      path: `/project/boards/${parentId}/teams/{id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectBoardsByParentIdTeamsById(id: number, parentId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/boards/${parentId}/teams/{id}`,
      method: 'delete',
    })
  }

  putProjectBoardsByParentIdTeamsById(
    id: number,
    parentId: number,
    team: ProjectBoardTeam,
  ): Promise<ProjectBoardTeam> {
    return this.request({
      path: `/project/boards/${parentId}/teams/{id}`,
      method: 'put',
      data: team,
    })
  }

  patchProjectBoardsByParentIdTeamsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<ProjectBoardTeam> {
    return this.request({
      path: `/project/boards/${parentId}/teams/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectBoardsByParentIdTeamsByIdInfo(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectBoardTeamInfo> {
    return this.request({
      path: `/project/boards/${parentId}/teams/{id}/info`,
      method: 'get',
      params,
    })
  }

  getProjectBoardsByParentIdTeamsByIdInfoCount(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/boards/${parentId}/teams/{id}/info/count`,
      method: 'get',
      params,
    })
  }

  getProjectBoardsByParentIdTeamsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/boards/${parentId}/teams/count`,
      method: 'get',
      params,
    })
  }

  getProjectBoardsByParentIdTeamsInfo(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectBoardTeamInfo[]> {
    return this.request({
      path: `/project/boards/${parentId}/teams/info`,
      method: 'get',
      params,
    })
  }

  getProjectPhaseStatuses(params: CommonParameters = {}): Promise<PhaseStatus[]> {
    return this.request({
      path: `/project/phaseStatuses`,
      method: 'get',
      params,
    })
  }

  postProjectPhaseStatuses(phaseStatus: PhaseStatus): Promise<PhaseStatus> {
    return this.request({
      path: `/project/phaseStatuses`,
      method: 'post',
      data: phaseStatus,
    })
  }

  getProjectPhaseStatusesById(id: number, params: CommonParameters = {}): Promise<PhaseStatus> {
    return this.request({
      path: `/project/phaseStatuses/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectPhaseStatusesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/phaseStatuses/${id}`,
      method: 'delete',
    })
  }

  putProjectPhaseStatusesById(id: number, phaseStatus: PhaseStatus): Promise<PhaseStatus> {
    return this.request({
      path: `/project/phaseStatuses/${id}`,
      method: 'put',
      data: phaseStatus,
    })
  }

  patchProjectPhaseStatusesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<PhaseStatus> {
    return this.request({
      path: `/project/phaseStatuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectPhaseStatusesByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/project/phaseStatuses/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getProjectPhaseStatusesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/project/phaseStatuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getProjectPhaseStatusesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/project/phaseStatuses/count`,
      method: 'get',
      params,
    })
  }

  getProjectProjects(params: CommonParameters = {}): Promise<Project[]> {
    return this.request({
      path: `/project/projects`,
      method: 'get',
      params,
    })
  }

  postProjectProjects(project: Project): Promise<Project> {
    return this.request({
      path: `/project/projects`,
      method: 'post',
      data: project,
    })
  }

  getProjectProjectsById(id: number, params: CommonParameters = {}): Promise<Project> {
    return this.request({
      path: `/project/projects/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projects/${id}`,
      method: 'delete',
    })
  }

  putProjectProjectsById(id: number, project: Project): Promise<Project> {
    return this.request({
      path: `/project/projects/${id}`,
      method: 'put',
      data: project,
    })
  }

  patchProjectProjectsById(id: number, patchOperations: PatchOperation[]): Promise<Project> {
    return this.request({
      path: `/project/projects/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectProjectsByParentIdContacts(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectContact[]> {
    return this.request({
      path: `/project/projects/${parentId}/contacts`,
      method: 'get',
      params,
    })
  }

  postProjectProjectsByParentIdContacts(
    parentId: number,
    contact: ProjectContact,
  ): Promise<ProjectContact> {
    return this.request({
      path: `/project/projects/${parentId}/contacts`,
      method: 'post',
      data: contact,
    })
  }

  getProjectProjectsByParentIdContactsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectContact> {
    return this.request({
      path: `/project/projects/${parentId}/contacts/{id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectsByParentIdContactsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projects/${parentId}/contacts/{id}`,
      method: 'delete',
    })
  }

  getProjectProjectsByParentIdNotes(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectNote[]> {
    return this.request({
      path: `/project/projects/${parentId}/notes`,
      method: 'get',
      params,
    })
  }

  postProjectProjectsByParentIdNotes(parentId: number, note: ProjectNote): Promise<ProjectNote> {
    return this.request({
      path: `/project/projects/${parentId}/notes`,
      method: 'post',
      data: note,
    })
  }

  getProjectProjectsByParentIdNotesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectNote> {
    return this.request({
      path: `/project/projects/${parentId}/notes/{id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectsByParentIdNotesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projects/${parentId}/notes/{id}`,
      method: 'delete',
    })
  }

  putProjectProjectsByParentIdNotesById(
    id: number,
    parentId: number,
    note: ProjectNote,
  ): Promise<ProjectNote> {
    return this.request({
      path: `/project/projects/${parentId}/notes/{id}`,
      method: 'put',
      data: note,
    })
  }

  patchProjectProjectsByParentIdNotesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<ProjectNote> {
    return this.request({
      path: `/project/projects/${parentId}/notes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectProjectsByParentIdNotesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/projects/${parentId}/notes/count`,
      method: 'get',
      params,
    })
  }

  getProjectProjectsByParentIdPhases(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectPhase[]> {
    return this.request({
      path: `/project/projects/${parentId}/phases`,
      method: 'get',
      params,
    })
  }

  postProjectProjectsByParentIdPhases(
    parentId: number,
    projectPhase: ProjectPhase,
  ): Promise<ProjectPhase> {
    return this.request({
      path: `/project/projects/${parentId}/phases`,
      method: 'post',
      data: projectPhase,
    })
  }

  getProjectProjectsByParentIdPhasesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectPhase> {
    return this.request({
      path: `/project/projects/${parentId}/phases/{id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectsByParentIdPhasesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projects/${parentId}/phases/{id}`,
      method: 'delete',
    })
  }

  putProjectProjectsByParentIdPhasesById(
    id: number,
    parentId: number,
    projectPhase: ProjectPhase,
  ): Promise<ProjectPhase> {
    return this.request({
      path: `/project/projects/${parentId}/phases/{id}`,
      method: 'put',
      data: projectPhase,
    })
  }

  patchProjectProjectsByParentIdPhasesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<ProjectPhase> {
    return this.request({
      path: `/project/projects/${parentId}/phases/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectProjectsByParentIdPhasesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/projects/${parentId}/phases/count`,
      method: 'get',
      params,
    })
  }

  getProjectProjectsByParentIdTeamMembers(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectTeamMember[]> {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers`,
      method: 'get',
      params,
    })
  }

  postProjectProjectsByParentIdTeamMembers(
    parentId: number,
    teamMember: ProjectTeamMember,
  ): Promise<ProjectTeamMember> {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers`,
      method: 'post',
      data: teamMember,
    })
  }

  getProjectProjectsByParentIdTeamMembersById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectTeamMember> {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/{id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectsByParentIdTeamMembersById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/{id}`,
      method: 'delete',
    })
  }

  putProjectProjectsByParentIdTeamMembersById(
    id: number,
    parentId: number,
    teamMember: ProjectTeamMember,
  ): Promise<ProjectTeamMember> {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/{id}`,
      method: 'put',
      data: teamMember,
    })
  }

  patchProjectProjectsByParentIdTeamMembersById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<ProjectTeamMember> {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectProjectsByParentIdTeamMembersCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/projects/${parentId}/teamMembers/count`,
      method: 'get',
      params,
    })
  }

  getProjectProjectsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/project/projects/count`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTypes(params: CommonParameters = {}): Promise<ProjectType[]> {
    return this.request({
      path: `/project/projectTypes`,
      method: 'get',
      params,
    })
  }

  postProjectProjectTypes(projectType: ProjectType): Promise<ProjectType> {
    return this.request({
      path: `/project/projectTypes`,
      method: 'post',
      data: projectType,
    })
  }

  getProjectProjectTypesById(id: number, params: CommonParameters = {}): Promise<ProjectType> {
    return this.request({
      path: `/project/projectTypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectProjectTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/projectTypes/${id}`,
      method: 'delete',
    })
  }

  putProjectProjectTypesById(id: number, projectType: ProjectType): Promise<ProjectType> {
    return this.request({
      path: `/project/projectTypes/${id}`,
      method: 'put',
      data: projectType,
    })
  }

  patchProjectProjectTypesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<ProjectType> {
    return this.request({
      path: `/project/projectTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectProjectTypesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<ProjectTypeInfo> {
    return this.request({
      path: `/project/projectTypes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTypesByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/project/projectTypes/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTypesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/project/projectTypes/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/project/projectTypes/count`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTypesInfo(params: CommonParameters = {}): Promise<ProjectTypeInfo[]> {
    return this.request({
      path: `/project/projectTypes/info`,
      method: 'get',
      params,
    })
  }

  getProjectProjectTypesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/project/projectTypes/info/count`,
      method: 'get',
      params,
    })
  }

  getProjectSecurityRoles(params: CommonParameters = {}): Promise<ProjectSecurityRole[]> {
    return this.request({
      path: `/project/securityRoles`,
      method: 'get',
      params,
    })
  }

  postProjectSecurityRoles(projectSecurityRole: ProjectSecurityRole): Promise<ProjectSecurityRole> {
    return this.request({
      path: `/project/securityRoles`,
      method: 'post',
      data: projectSecurityRole,
    })
  }

  getProjectSecurityRolesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ProjectSecurityRole> {
    return this.request({
      path: `/project/securityRoles/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectSecurityRolesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/securityRoles/${id}`,
      method: 'delete',
    })
  }

  putProjectSecurityRolesById(
    id: number,
    projectSecurityRole: ProjectSecurityRole,
  ): Promise<ProjectSecurityRole> {
    return this.request({
      path: `/project/securityRoles/${id}`,
      method: 'put',
      data: projectSecurityRole,
    })
  }

  patchProjectSecurityRolesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<ProjectSecurityRole> {
    return this.request({
      path: `/project/securityRoles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectSecurityRolesByParentIdSettings(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectSecurityRoleSetting[]> {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings`,
      method: 'get',
      params,
    })
  }

  getProjectSecurityRolesByParentIdSettingsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectSecurityRoleSetting> {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings/{id}`,
      method: 'get',
      params,
    })
  }

  putProjectSecurityRolesByParentIdSettingsById(
    id: number,
    parentId: number,
    projectSecurityRoleSetting: ProjectSecurityRoleSetting,
  ): Promise<ProjectSecurityRoleSetting> {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings/{id}`,
      method: 'put',
      data: projectSecurityRoleSetting,
    })
  }

  patchProjectSecurityRolesByParentIdSettingsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<ProjectSecurityRoleSetting> {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectSecurityRolesByParentIdSettingsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/securityRoles/${parentId}/settings/count`,
      method: 'get',
      params,
    })
  }

  getProjectSecurityRolesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/project/securityRoles/count`,
      method: 'get',
      params,
    })
  }

  getProjectStatuses(params: CommonParameters = {}): Promise<ProjectStatus[]> {
    return this.request({
      path: `/project/statuses`,
      method: 'get',
      params,
    })
  }

  postProjectStatuses(projectStatus: ProjectStatus): Promise<ProjectStatus> {
    return this.request({
      path: `/project/statuses`,
      method: 'post',
      data: projectStatus,
    })
  }

  getProjectStatusesById(id: number, params: CommonParameters = {}): Promise<ProjectStatus> {
    return this.request({
      path: `/project/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectStatusesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/statuses/${id}`,
      method: 'delete',
    })
  }

  putProjectStatusesById(id: number, projectStatus: ProjectStatus): Promise<ProjectStatus> {
    return this.request({
      path: `/project/statuses/${id}`,
      method: 'put',
      data: projectStatus,
    })
  }

  patchProjectStatusesById(id: number, patchOperations: PatchOperation[]): Promise<ProjectStatus> {
    return this.request({
      path: `/project/statuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectStatusesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<ProjectStatusInfo> {
    return this.request({
      path: `/project/statuses/${id}/info`,
      method: 'get',
      params,
    })
  }

  getProjectStatusesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/project/statuses/count`,
      method: 'get',
      params,
    })
  }

  getProjectStatusesInfo(params: CommonParameters = {}): Promise<ProjectStatusInfo[]> {
    return this.request({
      path: `/project/statuses/info`,
      method: 'get',
      params,
    })
  }

  getProjectStatusesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/project/statuses/info/count`,
      method: 'get',
      params,
    })
  }

  getProjectStatusIndicators(params: CommonParameters = {}): Promise<StatusIndicator[]> {
    return this.request({
      path: `/project/statusIndicators`,
      method: 'get',
      params,
    })
  }

  getProjectStatusIndicatorsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<StatusIndicator> {
    return this.request({
      path: `/project/statusIndicators/${id}`,
      method: 'get',
      params,
    })
  }

  getProjectStatusIndicatorsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/project/statusIndicators/count`,
      method: 'get',
      params,
    })
  }

  postProjectTicketNoteByIdMarkAs(id: number, item: ProjectTicketNote): Promise<any> {
    return this.request({
      path: `/project/ticketNote/${id}/markAs/`,
      method: 'post',
      data: item,
    })
  }

  getProjectTickets(params: CommonParameters = {}): Promise<ProjectTicket[]> {
    return this.request({
      path: `/project/tickets`,
      method: 'get',
      params,
    })
  }

  postProjectTickets(ticket: ProjectTicket): Promise<ProjectTicket> {
    return this.request({
      path: `/project/tickets`,
      method: 'post',
      data: ticket,
    })
  }

  getProjectTicketsById(id: number, params: CommonParameters = {}): Promise<ProjectTicket> {
    return this.request({
      path: `/project/tickets/${id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectTicketsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/project/tickets/${id}`,
      method: 'delete',
    })
  }

  putProjectTicketsById(id: number, ticket: ProjectTicket): Promise<ProjectTicket> {
    return this.request({
      path: `/project/tickets/${id}`,
      method: 'put',
      data: ticket,
    })
  }

  patchProjectTicketsById(id: number, patchOperations: PatchOperation[]): Promise<ProjectTicket> {
    return this.request({
      path: `/project/tickets/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectTicketsByParentIdActivities(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ActivityReference[]> {
    return this.request({
      path: `/project/tickets/${parentId}/activities`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdActivitiesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/activities/count`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdAllNotes(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProjectTicketNote[]> {
    return this.request({
      path: `/project/tickets/${parentId}/allNotes`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdConfigurations(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ConfigurationReference[]> {
    return this.request({
      path: `/project/tickets/${parentId}/configurations`,
      method: 'get',
      params,
    })
  }

  postProjectTicketsByParentIdConfigurations(
    parentId: number,
    configuration: ConfigurationReference,
  ): Promise<ConfigurationReference> {
    return this.request({
      path: `/project/tickets/${parentId}/configurations`,
      method: 'post',
      data: configuration,
    })
  }

  getProjectTicketsByParentIdConfigurationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ConfigurationReference> {
    return this.request({
      path: `/project/tickets/${parentId}/configurations/{id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectTicketsByParentIdConfigurationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/tickets/${parentId}/configurations/{id}`,
      method: 'delete',
    })
  }

  getProjectTicketsByParentIdConfigurationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/configurations/count`,
      method: 'get',
      params,
    })
  }

  postProjectTicketsByParentIdConvert(
    parentId: number,
    item: ConvertItem,
  ): Promise<SuccessResponse> {
    return this.request({
      path: `/project/tickets/${parentId}/convert`,
      method: 'post',
      data: item,
    })
  }

  getProjectTicketsByParentIdDocuments(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<DocumentReference[]> {
    return this.request({
      path: `/project/tickets/${parentId}/documents`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdDocumentsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/documents/count`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdNotes(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<TicketNote[]> {
    return this.request({
      path: `/project/tickets/${parentId}/notes`,
      method: 'get',
      params,
    })
  }

  postProjectTicketsByParentIdNotes(parentId: number, ticketNote: TicketNote): Promise<TicketNote> {
    return this.request({
      path: `/project/tickets/${parentId}/notes`,
      method: 'post',
      data: ticketNote,
    })
  }

  getProjectTicketsByParentIdNotesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<TicketNote> {
    return this.request({
      path: `/project/tickets/${parentId}/notes/{id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectTicketsByParentIdNotesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/tickets/${parentId}/notes/{id}`,
      method: 'delete',
    })
  }

  putProjectTicketsByParentIdNotesById(
    id: number,
    parentId: number,
    ticketNote: TicketNote,
  ): Promise<TicketNote> {
    return this.request({
      path: `/project/tickets/${parentId}/notes/{id}`,
      method: 'put',
      data: ticketNote,
    })
  }

  patchProjectTicketsByParentIdNotesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<TicketNote> {
    return this.request({
      path: `/project/tickets/${parentId}/notes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectTicketsByParentIdNotesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/notes/count`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdProducts(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProductReference[]> {
    return this.request({
      path: `/project/tickets/${parentId}/products`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdProductsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/products/count`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdScheduleentries(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ScheduleEntryReference[]> {
    return this.request({
      path: `/project/tickets/${parentId}/scheduleentries`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdScheduleentriesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/scheduleentries/count`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdTasks(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<TicketTask[]> {
    return this.request({
      path: `/project/tickets/${parentId}/tasks`,
      method: 'get',
      params,
    })
  }

  postProjectTicketsByParentIdTasks(parentId: number, ticketTask: TicketTask): Promise<TicketTask> {
    return this.request({
      path: `/project/tickets/${parentId}/tasks`,
      method: 'post',
      data: ticketTask,
    })
  }

  getProjectTicketsByParentIdTasksById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<TicketTask> {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/{id}`,
      method: 'get',
      params,
    })
  }

  deleteProjectTicketsByParentIdTasksById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/{id}`,
      method: 'delete',
    })
  }

  putProjectTicketsByParentIdTasksById(
    id: number,
    parentId: number,
    ticketTask: TicketTask,
  ): Promise<TicketTask> {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/{id}`,
      method: 'put',
      data: ticketTask,
    })
  }

  patchProjectTicketsByParentIdTasksById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<TicketTask> {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getProjectTicketsByParentIdTasksCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/tasks/count`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdTimeentries(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<TimeEntryReference[]> {
    return this.request({
      path: `/project/tickets/${parentId}/timeentries`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsByParentIdTimeentriesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/project/tickets/${parentId}/timeentries/count`,
      method: 'get',
      params,
    })
  }

  getProjectTicketsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/project/tickets/count`,
      method: 'get',
      params,
    })
  }

  postProjectTicketsSearch(filterValues: FilterValues): Promise<ProjectTicket[]> {
    return this.request({
      path: `/project/tickets/search`,
      method: 'post',
      data: filterValues,
    })
  }
}
