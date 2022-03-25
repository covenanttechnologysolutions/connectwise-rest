/* This file was auto-generated, do not manually edit. */
import Manage from '../Manage'
import { components } from '../ManageTypes'
import { CommonParameters, CWMOptions } from '../ManageAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

export type AllowedFileType = schemas['AllowedFileType']
export type AllowedOrigin = schemas['AllowedOrigin']
export type ApiMember = schemas['ApiMember']
export type AuditTrailEntry = schemas['AuditTrailEntry']
export type AuthAnvil = schemas['AuthAnvil']
export type AutoSyncTime = schemas['AutoSyncTime']
export type BulkResult = schemas['BulkResult']
export type BundleRequestsCollection = schemas['BundleRequestsCollection']
export type BundleResultsCollection = schemas['BundleResultsCollection']
export type CallbackEntry = schemas['CallbackEntry']
export type Certification = schemas['Certification']
export type ConnectWiseHostedScreen = schemas['ConnectWiseHostedScreen']
export type ConnectWiseHostedSetup = schemas['ConnectWiseHostedSetup']
export type CorporateStructure = schemas['CorporateStructure']
export type CorporateStructureInfo = schemas['CorporateStructureInfo']
export type CorporateStructureLevel = schemas['CorporateStructureLevel']
export type Count = schemas['Count']
export type Crm = schemas['Crm']
export type CrmInfo = schemas['CrmInfo']
export type CustomReport = schemas['CustomReport']
export type CustomReportParameter = schemas['CustomReportParameter']
export type CwTimeZone = schemas['CwTimeZone']
export type Department = schemas['Department']
export type DepartmentInfo = schemas['DepartmentInfo']
export type DepartmentLocation = schemas['DepartmentLocation']
export type DepartmentLocationInfo = schemas['DepartmentLocationInfo']
export type DocumentFormData = schemas['DocumentFormData']
export type DocumentInfo = schemas['DocumentInfo']
export type DocumentSetup = schemas['DocumentSetup']
export type EPayConfiguration = schemas['EPayConfiguration']
export type EmailConnector = schemas['EmailConnector']
export type EmailConnectorInfo = schemas['EmailConnectorInfo']
export type EmailConnectorParsingRule = schemas['EmailConnectorParsingRule']
export type EmailConnectorParsingStyle = schemas['EmailConnectorParsingStyle']
export type EmailExclusion = schemas['EmailExclusion']
export type EmailToken = schemas['EmailToken']
export type Experiment = schemas['Experiment']
export type FileUploadSetting = schemas['FileUploadSetting']
export type GoogleEmailSetup = schemas['GoogleEmailSetup']
export type IdCollection = schemas['IdCollection']
export type Imap = schemas['Imap']
export type ImapInfo = schemas['ImapInfo']
export type ImportMassMaintenance = schemas['ImportMassMaintenance']
export type InOutBoard = schemas['InOutBoard']
export type InOutType = schemas['InOutType']
export type InOutTypeInfo = schemas['InOutTypeInfo']
export type Info = schemas['Info']
export type IntegratorLogin = schemas['IntegratorLogin']
export type IntegratorTag = schemas['IntegratorTag']
export type KPI = schemas['KPI']
export type KPICategory = schemas['KPICategory']
export type LdapConfiguration = schemas['LdapConfiguration']
export type LdapConfigurationInfo = schemas['LdapConfigurationInfo']
export type LdapConfigurationTestLink = schemas['LdapConfigurationTestLink']
export type Link = schemas['Link']
export type LinkInfo = schemas['LinkInfo']
export type LinkResolveUrlInfo = schemas['LinkResolveUrlInfo']
export type LocaleInfo = schemas['LocaleInfo']
export type Location = schemas['Location']
export type LocationDepartment = schemas['LocationDepartment']
export type LocationInfo = schemas['LocationInfo']
export type LocationWorkRole = schemas['LocationWorkRole']
export type ManagedDeviceAccount = schemas['ManagedDeviceAccount']
export type ManagementNetworkSecurity = schemas['ManagementNetworkSecurity']
export type MarketplaceImport = schemas['MarketplaceImport']
export type Member = schemas['Member']
export type MemberAccrual = schemas['MemberAccrual']
export type MemberCertification = schemas['MemberCertification']
export type MemberDeactivation = schemas['MemberDeactivation']
export type MemberDelegation = schemas['MemberDelegation']
export type MemberInfo = schemas['MemberInfo']
export type MemberLinkSsoUser = schemas['MemberLinkSsoUser']
export type MemberNotificationSetting = schemas['MemberNotificationSetting']
export type MemberPersona = schemas['MemberPersona']
export type MemberSkill = schemas['MemberSkill']
export type MemberSsoToken = schemas['MemberSsoToken']
export type MemberType = schemas['MemberType']
export type MemberTypeInfo = schemas['MemberTypeInfo']
export type MenuEntry = schemas['MenuEntry']
export type MenuEntryLocation = schemas['MenuEntryLocation']
export type MyAccount = schemas['MyAccount']
export type MyMember = schemas['MyMember']
export type MyMemberInfo = schemas['MyMemberInfo']
export type MySecurity = schemas['MySecurity']
export type MySecurityCustomizeItem = schemas['MySecurityCustomizeItem']
export type NotificationRecipient = schemas['NotificationRecipient']
export type Office365EmailSetup = schemas['Office365EmailSetup']
export type OsGradeWeight = schemas['OsGradeWeight']
export type Other = schemas['Other']
export type ParsingType = schemas['ParsingType']
export type ParsingVariable = schemas['ParsingVariable']
export type PatchOperation = schemas['PatchOperation']
export type PersonasInfo = schemas['PersonasInfo']
export type PortalReport = schemas['PortalReport']
export type QuoteLink = schemas['QuoteLink']
export type Report = schemas['Report']
export type ReportCard = schemas['ReportCard']
export type ReportCardDetail = schemas['ReportCardDetail']
export type ReportCardInfo = schemas['ReportCardInfo']
export type ReportColumnDefinition = schemas['ReportColumnDefinition']
export type ReportDataResponse = schemas['ReportDataResponse']
export type ReportingService = schemas['ReportingService']
export type SecurityRole = schemas['SecurityRole']
export type SecurityRoleInfo = schemas['SecurityRoleInfo']
export type SecurityRoleSetting = schemas['SecurityRoleSetting']
export type Service = schemas['Service']
export type ServiceInfo = schemas['ServiceInfo']
export type SetupScreen = schemas['SetupScreen']
export type Skill = schemas['Skill']
export type SkillCategory = schemas['SkillCategory']
export type SkillInfo = schemas['SkillInfo']
export type SsoConfiguration = schemas['SsoConfiguration']
export type SsoUser = schemas['SsoUser']
export type StandardNote = schemas['StandardNote']
export type StandardNoteInfo = schemas['StandardNoteInfo']
export type SuccessResponse = schemas['SuccessResponse']
export type Survey = schemas['Survey']
export type SurveyInfo = schemas['SurveyInfo']
export type SurveyQuestion = schemas['SurveyQuestion']
export type SurveyQuestionValue = schemas['SurveyQuestionValue']
export type SystemSetting = schemas['SystemSetting']
export type TimeExpense = schemas['TimeExpense']
export type TimeZoneSetup = schemas['TimeZoneSetup']
export type TimeZoneSetupInfo = schemas['TimeZoneSetupInfo']
export type TodayPageCategory = schemas['TodayPageCategory']
export type Token = schemas['Token']
export type Usage = schemas['Usage']
export type UserDefinedField = schemas['UserDefinedField']
export type UserDefinedFieldInfo = schemas['UserDefinedFieldInfo']
export type Workflow = schemas['Workflow']
export type WorkflowAction = schemas['WorkflowAction']
export type WorkflowActionAutomateParameter = schemas['WorkflowActionAutomateParameter']
export type WorkflowActionUserDefinedField = schemas['WorkflowActionUserDefinedField']
export type WorkflowAttachment = schemas['WorkflowAttachment']
export type WorkflowEvent = schemas['WorkflowEvent']
export type WorkflowNotifyType = schemas['WorkflowNotifyType']
export type WorkflowNotifyTypeInfo = schemas['WorkflowNotifyTypeInfo']
export type WorkflowTableType = schemas['WorkflowTableType']
export type WorkflowTableTypeInfo = schemas['WorkflowTableTypeInfo']
export type WorkflowTrigger = schemas['WorkflowTrigger']
export type WorkflowTriggerOption = schemas['WorkflowTriggerOption']

/**
 * @internal
 */
export default class SystemAPI extends Manage {
  constructor(props: CWMOptions) {
    super(props)
  }

  getSystemAllowedfiletypes(params: CommonParameters = {}): Promise<Array<AllowedFileType>> {
    return this.request({
      path: `/system/allowedfiletypes/`,
      method: 'get',
      params,
    })
  }

  postSystemAllowedFileTypes(allowedFileType: AllowedFileType): Promise<AllowedFileType> {
    return this.request({
      path: `/system/AllowedFileTypes/`,
      method: 'post',
      data: allowedFileType,
    })
  }

  getSystemAllowedfiletypesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<AllowedFileType> {
    return this.request({
      path: `/system/allowedfiletypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemAllowedfiletypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/allowedfiletypes/${id}`,
      method: 'delete',
    })
  }

  putSystemAllowedfiletypesById(
    id: number,
    AllowedFileType: AllowedFileType,
  ): Promise<AllowedFileType> {
    return this.request({
      path: `/system/allowedfiletypes/${id}`,
      method: 'put',
      data: AllowedFileType,
    })
  }

  patchSystemAllowedfiletypesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AllowedFileType> {
    return this.request({
      path: `/system/allowedfiletypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemAllowedfiletypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/allowedfiletypes/count`,
      method: 'get',
      params,
    })
  }

  getSystemAllowedorigins(params: CommonParameters = {}): Promise<Array<AllowedOrigin>> {
    return this.request({
      path: `/system/allowedorigins`,
      method: 'get',
      params,
    })
  }

  postSystemAllowedorigins(origin: AllowedOrigin): Promise<AllowedOrigin> {
    return this.request({
      path: `/system/allowedorigins`,
      method: 'post',
      data: origin,
    })
  }

  getSystemAllowedoriginsById(id: number, params: CommonParameters = {}): Promise<AllowedOrigin> {
    return this.request({
      path: `/system/allowedorigins/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemAllowedoriginsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/allowedorigins/${id}`,
      method: 'delete',
    })
  }

  putSystemAllowedoriginsById(id: number, origin: AllowedOrigin): Promise<AllowedOrigin> {
    return this.request({
      path: `/system/allowedorigins/${id}`,
      method: 'put',
      data: origin,
    })
  }

  patchSystemAllowedoriginsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AllowedOrigin> {
    return this.request({
      path: `/system/allowedorigins/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemAllowedoriginsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/allowedorigins/count`,
      method: 'get',
      params,
    })
  }

  getSystemApiMembers(params: CommonParameters = {}): Promise<Array<ApiMember>> {
    return this.request({
      path: `/system/apiMembers`,
      method: 'get',
      params,
    })
  }

  postSystemApiMembers(apiMember: ApiMember): Promise<ApiMember> {
    return this.request({
      path: `/system/apiMembers`,
      method: 'post',
      data: apiMember,
    })
  }

  getSystemApiMembersById(id: number, params: CommonParameters = {}): Promise<ApiMember> {
    return this.request({
      path: `/system/apiMembers/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemApiMembersById(id: number, apiMember: ApiMember): Promise<ApiMember> {
    return this.request({
      path: `/system/apiMembers/${id}`,
      method: 'put',
      data: apiMember,
    })
  }

  patchSystemApiMembersById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ApiMember> {
    return this.request({
      path: `/system/apiMembers/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemApiMembersCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/apiMembers/count`,
      method: 'get',
      params,
    })
  }

  getSystemApiMembersDefault(params: CommonParameters = {}): Promise<ApiMember> {
    return this.request({
      path: `/system/apiMembers/default`,
      method: 'get',
      params,
    })
  }

  getSystemAudittrail(params: CommonParameters = {}): Promise<Array<AuditTrailEntry>> {
    return this.request({
      path: `/system/audittrail`,
      method: 'get',
      params,
    })
  }

  getSystemAudittrailCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/audittrail/count`,
      method: 'get',
      params,
    })
  }

  getSystemAuthAnvils(params: CommonParameters = {}): Promise<Array<AuthAnvil>> {
    return this.request({
      path: `/system/authAnvils`,
      method: 'get',
      params,
    })
  }

  getSystemAuthAnvilsById(id: number, params: CommonParameters = {}): Promise<AuthAnvil> {
    return this.request({
      path: `/system/authAnvils/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemAuthAnvilsById(id: number, authAnvil: AuthAnvil): Promise<AuthAnvil> {
    return this.request({
      path: `/system/authAnvils/${id}`,
      method: 'put',
      data: authAnvil,
    })
  }

  patchSystemAuthAnvilsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AuthAnvil> {
    return this.request({
      path: `/system/authAnvils/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemAuthAnvilsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/authAnvils/count`,
      method: 'get',
      params,
    })
  }

  getSystemAuthAnvilsTestConnection(params: CommonParameters = {}): Promise<SuccessResponse> {
    return this.request({
      path: `/system/authAnvils/testConnection`,
      method: 'get',
      params,
    })
  }

  getSystemAutoSyncTime(params: CommonParameters = {}): Promise<Array<AutoSyncTime>> {
    return this.request({
      path: `/system/autoSyncTime`,
      method: 'get',
      params,
    })
  }

  postSystemAutoSyncTime(autoSyncTime: AutoSyncTime): Promise<AutoSyncTime> {
    return this.request({
      path: `/system/autoSyncTime`,
      method: 'post',
      data: autoSyncTime,
    })
  }

  getSystemAutoSyncTimeById(id: number, params: CommonParameters = {}): Promise<AutoSyncTime> {
    return this.request({
      path: `/system/autoSyncTime/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemAutoSyncTimeById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/autoSyncTime/${id}`,
      method: 'delete',
    })
  }

  putSystemAutoSyncTimeById(id: number, autoSyncTime: AutoSyncTime): Promise<AutoSyncTime> {
    return this.request({
      path: `/system/autoSyncTime/${id}`,
      method: 'put',
      data: autoSyncTime,
    })
  }

  patchSystemAutoSyncTimeById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<AutoSyncTime> {
    return this.request({
      path: `/system/autoSyncTime/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemAutoSyncTimeCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/autoSyncTime/count`,
      method: 'get',
      params,
    })
  }

  postSystemBundles(requests: BundleRequestsCollection): Promise<BundleResultsCollection> {
    return this.request({
      path: `/system/bundles`,
      method: 'post',
      data: requests,
    })
  }

  postSystemBundlesCount(requests: BundleRequestsCollection): Promise<BundleResultsCollection> {
    return this.request({
      path: `/system/bundles/count`,
      method: 'post',
      data: requests,
    })
  }

  getSystemCallbacks(params: CommonParameters = {}): Promise<Array<CallbackEntry>> {
    return this.request({
      path: `/system/callbacks`,
      method: 'get',
      params,
    })
  }

  postSystemCallbacks(callbackEntry: CallbackEntry): Promise<CallbackEntry> {
    return this.request({
      path: `/system/callbacks`,
      method: 'post',
      data: callbackEntry,
    })
  }

  getSystemCallbacksById(id: number, params: CommonParameters = {}): Promise<CallbackEntry> {
    return this.request({
      path: `/system/callbacks/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemCallbacksById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/callbacks/${id}`,
      method: 'delete',
    })
  }

  putSystemCallbacksById(id: number, callbackEntry: CallbackEntry): Promise<CallbackEntry> {
    return this.request({
      path: `/system/callbacks/${id}`,
      method: 'put',
      data: callbackEntry,
    })
  }

  patchSystemCallbacksById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CallbackEntry> {
    return this.request({
      path: `/system/callbacks/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemCallbacksCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/callbacks/count`,
      method: 'get',
      params,
    })
  }

  getSystemCertifications(params: CommonParameters = {}): Promise<Array<Certification>> {
    return this.request({
      path: `/system/certifications`,
      method: 'get',
      params,
    })
  }

  postSystemCertifications(certification: Certification): Promise<Certification> {
    return this.request({
      path: `/system/certifications`,
      method: 'post',
      data: certification,
    })
  }

  getSystemCertificationsById(id: number, params: CommonParameters = {}): Promise<Certification> {
    return this.request({
      path: `/system/certifications/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemCertificationsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/certifications/${id}`,
      method: 'delete',
    })
  }

  putSystemCertificationsById(id: number, certification: Certification): Promise<Certification> {
    return this.request({
      path: `/system/certifications/${id}`,
      method: 'put',
      data: certification,
    })
  }

  patchSystemCertificationsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Certification> {
    return this.request({
      path: `/system/certifications/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemCertificationsByIdUsages(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/system/certifications/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getSystemCertificationsByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/system/certifications/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getSystemCertificationsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/certifications/count`,
      method: 'get',
      params,
    })
  }

  getSystemConnectWiseHostedScreens(
    params: CommonParameters = {},
  ): Promise<Array<ConnectWiseHostedScreen>> {
    return this.request({
      path: `/system/connectWiseHostedScreens`,
      method: 'get',
      params,
    })
  }

  getSystemConnectWiseHostedScreensById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ConnectWiseHostedScreen> {
    return this.request({
      path: `/system/connectWiseHostedScreens/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemConnectWiseHostedScreensCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/connectWiseHostedScreens/count`,
      method: 'get',
      params,
    })
  }

  getSystemConnectwisehostedsetups(
    params: CommonParameters = {},
  ): Promise<Array<ConnectWiseHostedSetup>> {
    return this.request({
      path: `/system/connectwisehostedsetups`,
      method: 'get',
      params,
    })
  }

  postSystemConnectwisehostedsetups(
    connectWiseHostedSetup: ConnectWiseHostedSetup,
  ): Promise<ConnectWiseHostedSetup> {
    return this.request({
      path: `/system/connectwisehostedsetups`,
      method: 'post',
      data: connectWiseHostedSetup,
    })
  }

  getSystemConnectwisehostedsetupsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ConnectWiseHostedSetup> {
    return this.request({
      path: `/system/connectwisehostedsetups/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemConnectwisehostedsetupsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/connectwisehostedsetups/${id}`,
      method: 'delete',
    })
  }

  putSystemConnectwisehostedsetupsById(
    id: number,
    connectWiseHostedSetup: ConnectWiseHostedSetup,
  ): Promise<ConnectWiseHostedSetup> {
    return this.request({
      path: `/system/connectwisehostedsetups/${id}`,
      method: 'put',
      data: connectWiseHostedSetup,
    })
  }

  patchSystemConnectwisehostedsetupsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ConnectWiseHostedSetup> {
    return this.request({
      path: `/system/connectwisehostedsetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemConnectwisehostedsetupsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/connectwisehostedsetups/count`,
      method: 'get',
      params,
    })
  }

  getSystemCustomReports(params: CommonParameters = {}): Promise<Array<CustomReport>> {
    return this.request({
      path: `/system/customReports`,
      method: 'get',
      params,
    })
  }

  postSystemCustomReports(customReport: CustomReport): Promise<CustomReport> {
    return this.request({
      path: `/system/customReports`,
      method: 'post',
      data: customReport,
    })
  }

  getSystemCustomReportsById(id: number, params: CommonParameters = {}): Promise<CustomReport> {
    return this.request({
      path: `/system/customReports/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemCustomReportsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/customReports/${id}`,
      method: 'delete',
    })
  }

  putSystemCustomReportsById(id: number, customReport: CustomReport): Promise<CustomReport> {
    return this.request({
      path: `/system/customReports/${id}`,
      method: 'put',
      data: customReport,
    })
  }

  patchSystemCustomReportsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CustomReport> {
    return this.request({
      path: `/system/customReports/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemCustomReportsByParentIdParameters(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<CustomReportParameter>> {
    return this.request({
      path: `/system/customReports/${parentId}/parameters`,
      method: 'get',
      params,
    })
  }

  postSystemCustomReportsByParentIdParameters(
    parentId: number,
    customReportParameter: CustomReportParameter,
  ): Promise<CustomReportParameter> {
    return this.request({
      path: `/system/customReports/${parentId}/parameters`,
      method: 'post',
      data: customReportParameter,
    })
  }

  getSystemCustomReportsByParentIdParametersById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<CustomReportParameter> {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemCustomReportsByParentIdParametersById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/${id}`,
      method: 'delete',
    })
  }

  putSystemCustomReportsByParentIdParametersById(
    id: number,
    parentId: number,
    customReportParameter: CustomReportParameter,
  ): Promise<CustomReportParameter> {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/${id}`,
      method: 'put',
      data: customReportParameter,
    })
  }

  patchSystemCustomReportsByParentIdParametersById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CustomReportParameter> {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemCustomReportsByParentIdParametersCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/count`,
      method: 'get',
      params,
    })
  }

  getSystemCustomReportsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/customReports/count`,
      method: 'get',
      params,
    })
  }

  getSystemCwTimeZones(params: CommonParameters = {}): Promise<Array<CwTimeZone>> {
    return this.request({
      path: `/system/cwTimeZones`,
      method: 'get',
      params,
    })
  }

  getSystemCwTimeZonesById(id: number, params: CommonParameters = {}): Promise<CwTimeZone> {
    return this.request({
      path: `/system/cwTimeZones/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemCwTimeZonesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/cwTimeZones/count`,
      method: 'get',
      params,
    })
  }

  getSystemDepartments(params: CommonParameters = {}): Promise<Array<Department>> {
    return this.request({
      path: `/system/departments`,
      method: 'get',
      params,
    })
  }

  postSystemDepartments(department: Department): Promise<Department> {
    return this.request({
      path: `/system/departments`,
      method: 'post',
      data: department,
    })
  }

  getSystemDepartmentsById(id: number, params: CommonParameters = {}): Promise<Department> {
    return this.request({
      path: `/system/departments/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemDepartmentsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/departments/${id}`,
      method: 'delete',
    })
  }

  putSystemDepartmentsById(id: number, department: Department): Promise<Department> {
    return this.request({
      path: `/system/departments/${id}`,
      method: 'put',
      data: department,
    })
  }

  patchSystemDepartmentsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Department> {
    return this.request({
      path: `/system/departments/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemDepartmentsByIdUsages(id: number, params: CommonParameters = {}): Promise<Array<Usage>> {
    return this.request({
      path: `/system/departments/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getSystemDepartmentsByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/system/departments/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getSystemDepartmentsByParentIdLocations(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<DepartmentLocation>> {
    return this.request({
      path: `/system/departments/${parentId}/locations`,
      method: 'get',
      params,
    })
  }

  postSystemDepartmentsByParentIdLocations(
    parentId: number,
    departmentLocation: DepartmentLocation,
  ): Promise<DepartmentLocation> {
    return this.request({
      path: `/system/departments/${parentId}/locations`,
      method: 'post',
      data: departmentLocation,
    })
  }

  getSystemDepartmentsByParentIdLocationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<DepartmentLocation> {
    return this.request({
      path: `/system/departments/${parentId}/locations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemDepartmentsByParentIdLocationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/departments/${parentId}/locations/${id}`,
      method: 'delete',
    })
  }

  putSystemDepartmentsByParentIdLocationsById(
    id: number,
    parentId: number,
    departmentLocation: DepartmentLocation,
  ): Promise<DepartmentLocation> {
    return this.request({
      path: `/system/departments/${parentId}/locations/${id}`,
      method: 'put',
      data: departmentLocation,
    })
  }

  patchSystemDepartmentsByParentIdLocationsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<DepartmentLocation> {
    return this.request({
      path: `/system/departments/${parentId}/locations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemDepartmentsByParentIdLocationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/departments/${parentId}/locations/count`,
      method: 'get',
      params,
    })
  }

  getSystemDepartmentsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/departments/count`,
      method: 'get',
      params,
    })
  }

  getSystemDocuments(params: CommonParameters = {}): Promise<Array<DocumentInfo>> {
    return this.request({
      path: `/system/documents`,
      method: 'get',
      params,
    })
  }

  postSystemDocuments(documentFormData: DocumentFormData): Promise<DocumentInfo> {
    return this.request({
      path: `/system/documents`,
      method: 'post',
      data: documentFormData,
    })
  }

  getSystemDocumentsById(id: number, params: CommonParameters = {}): Promise<DocumentInfo> {
    return this.request({
      path: `/system/documents/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemDocumentsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/documents/${id}`,
      method: 'delete',
    })
  }

  postSystemDocumentsById(id: number): Promise<DocumentInfo> {
    return this.request({
      path: `/system/documents/${id}`,
      method: 'post',
    })
  }

  getSystemDocumentsByIdDownload(id: number, params: CommonParameters = {}): Promise<string> {
    return this.request({
      path: `/system/documents/${id}/download`,
      method: 'get',
      params,
    })
  }

  getSystemDocumentsByIdThumbnail(id: number, params: CommonParameters = {}): Promise<string> {
    return this.request({
      path: `/system/documents/${id}/thumbnail`,
      method: 'get',
      params,
    })
  }

  getSystemDocumentsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/documents/count`,
      method: 'get',
      params,
    })
  }

  getSystemDocumentsUploadsample(params: CommonParameters = {}): Promise<HTMLResponse> {
    return this.request({
      path: `/system/documents/uploadsample`,
      method: 'get',
      params,
    })
  }

  getSystemEmailConnectors(params: CommonParameters = {}): Promise<Array<EmailConnector>> {
    return this.request({
      path: `/system/emailConnectors`,
      method: 'get',
      params,
    })
  }

  postSystemEmailConnectors(emailConnector: EmailConnector): Promise<EmailConnector> {
    return this.request({
      path: `/system/emailConnectors`,
      method: 'post',
      data: emailConnector,
    })
  }

  getSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRules(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Array<EmailConnectorParsingRule>> {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/${parentId}/parsingRules`,
      method: 'get',
      params,
    })
  }

  postSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRules(
    parentId: number,
    grandparentId: number,
    emailConnectorParsingRule: EmailConnectorParsingRule,
  ): Promise<EmailConnectorParsingRule> {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/${parentId}/parsingRules`,
      method: 'post',
      data: emailConnectorParsingRule,
    })
  }

  getSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<EmailConnectorParsingRule> {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/${parentId}/parsingRules/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/${parentId}/parsingRules/${id}`,
      method: 'delete',
    })
  }

  putSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesById(
    id: number,
    parentId: number,
    grandparentId: number,
    emailConnectorParsingRule: EmailConnectorParsingRule,
  ): Promise<EmailConnectorParsingRule> {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/${parentId}/parsingRules/${id}`,
      method: 'put',
      data: emailConnectorParsingRule,
    })
  }

  patchSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<EmailConnectorParsingRule> {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/${parentId}/parsingRules/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/${parentId}/parsingRules/count`,
      method: 'get',
      params,
    })
  }

  getSystemEmailConnectorsById(id: number, params: CommonParameters = {}): Promise<EmailConnector> {
    return this.request({
      path: `/system/emailConnectors/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemEmailConnectorsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/emailConnectors/${id}`,
      method: 'delete',
    })
  }

  putSystemEmailConnectorsById(
    id: number,
    emailConnector: EmailConnector,
  ): Promise<EmailConnector> {
    return this.request({
      path: `/system/emailConnectors/${id}`,
      method: 'put',
      data: emailConnector,
    })
  }

  patchSystemEmailConnectorsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<EmailConnector> {
    return this.request({
      path: `/system/emailConnectors/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemEmailConnectorsByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<EmailConnectorInfo> {
    return this.request({
      path: `/system/emailConnectors/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemEmailConnectorsByParentIdParsingStyles(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<EmailConnectorParsingStyle>> {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles`,
      method: 'get',
      params,
    })
  }

  postSystemEmailConnectorsByParentIdParsingStyles(
    parentId: number,
    emailConnectorParsingStyle: EmailConnectorParsingStyle,
  ): Promise<EmailConnectorParsingStyle> {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles`,
      method: 'post',
      data: emailConnectorParsingStyle,
    })
  }

  getSystemEmailConnectorsByParentIdParsingStylesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<EmailConnectorParsingStyle> {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemEmailConnectorsByParentIdParsingStylesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/${id}`,
      method: 'delete',
    })
  }

  putSystemEmailConnectorsByParentIdParsingStylesById(
    id: number,
    parentId: number,
    emailConnectorParsingStyle: EmailConnectorParsingStyle,
  ): Promise<EmailConnectorParsingStyle> {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/${id}`,
      method: 'put',
      data: emailConnectorParsingStyle,
    })
  }

  patchSystemEmailConnectorsByParentIdParsingStylesById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<EmailConnectorParsingStyle> {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemEmailConnectorsByParentIdParsingStylesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/count`,
      method: 'get',
      params,
    })
  }

  getSystemEmailConnectorsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/emailConnectors/count`,
      method: 'get',
      params,
    })
  }

  getSystemEmailConnectorsInfo(params: CommonParameters = {}): Promise<Array<EmailConnectorInfo>> {
    return this.request({
      path: `/system/emailConnectors/info`,
      method: 'get',
      params,
    })
  }

  getSystemEmailConnectorsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/emailConnectors/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemEmailExclusions(params: CommonParameters = {}): Promise<Array<EmailExclusion>> {
    return this.request({
      path: `/system/emailExclusions`,
      method: 'get',
      params,
    })
  }

  postSystemEmailExclusions(emailExclusion: EmailExclusion): Promise<EmailExclusion> {
    return this.request({
      path: `/system/emailExclusions`,
      method: 'post',
      data: emailExclusion,
    })
  }

  getSystemEmailExclusionsById(id: number, params: CommonParameters = {}): Promise<EmailExclusion> {
    return this.request({
      path: `/system/emailExclusions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemEmailExclusionsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/emailExclusions/${id}`,
      method: 'delete',
    })
  }

  putSystemEmailExclusionsById(
    id: number,
    emailExclusion: EmailExclusion,
  ): Promise<EmailExclusion> {
    return this.request({
      path: `/system/emailExclusions/${id}`,
      method: 'put',
      data: emailExclusion,
    })
  }

  patchSystemEmailExclusionsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<EmailExclusion> {
    return this.request({
      path: `/system/emailExclusions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemEmailExclusionsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/emailExclusions/count`,
      method: 'get',
      params,
    })
  }

  getSystemEmailTokens(params: CommonParameters = {}): Promise<Array<EmailToken>> {
    return this.request({
      path: `/system/emailTokens`,
      method: 'get',
      params,
    })
  }

  getSystemEmailTokensById(id: number, params: CommonParameters = {}): Promise<EmailToken> {
    return this.request({
      path: `/system/emailTokens/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemEmailTokensCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/emailTokens/count`,
      method: 'get',
      params,
    })
  }

  getSystemEPayConfigurations(params: CommonParameters = {}): Promise<Array<EPayConfiguration>> {
    return this.request({
      path: `/system/ePayConfigurations`,
      method: 'get',
      params,
    })
  }

  postSystemEPayConfigurations(ePayConfiguration: EPayConfiguration): Promise<EPayConfiguration> {
    return this.request({
      path: `/system/ePayConfigurations`,
      method: 'post',
      data: ePayConfiguration,
    })
  }

  getSystemEPayConfigurationsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<EPayConfiguration> {
    return this.request({
      path: `/system/ePayConfigurations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemEPayConfigurationsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/ePayConfigurations/${id}`,
      method: 'delete',
    })
  }

  putSystemEPayConfigurationsById(
    id: number,
    ePayConfiguration: EPayConfiguration,
  ): Promise<EPayConfiguration> {
    return this.request({
      path: `/system/ePayConfigurations/${id}`,
      method: 'put',
      data: ePayConfiguration,
    })
  }

  patchSystemEPayConfigurationsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<EPayConfiguration> {
    return this.request({
      path: `/system/ePayConfigurations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemEPayConfigurationsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/ePayConfigurations/count`,
      method: 'get',
      params,
    })
  }

  getSystemExperiments(params: CommonParameters = {}): Promise<Array<Experiment>> {
    return this.request({
      path: `/system/experiments`,
      method: 'get',
      params,
    })
  }

  getSystemExperimentsById(id: number, params: CommonParameters = {}): Promise<Experiment> {
    return this.request({
      path: `/system/experiments/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemExperimentsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/experiments/count`,
      method: 'get',
      params,
    })
  }

  getSystemFileuploadsettings(params: CommonParameters = {}): Promise<Array<FileUploadSetting>> {
    return this.request({
      path: `/system/fileuploadsettings/`,
      method: 'get',
      params,
    })
  }

  getSystemFileuploadsettingsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<FileUploadSetting> {
    return this.request({
      path: `/system/fileuploadsettings/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemFileuploadsettingsById(
    id: number,
    companyTypeAssociation: FileUploadSetting,
  ): Promise<FileUploadSetting> {
    return this.request({
      path: `/system/fileuploadsettings/${id}`,
      method: 'put',
      data: companyTypeAssociation,
    })
  }

  patchSystemFileuploadsettingsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<FileUploadSetting> {
    return this.request({
      path: `/system/fileuploadsettings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemFileuploadsettingsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/fileuploadsettings/count`,
      method: 'get',
      params,
    })
  }

  getSystemGoogleemailsetup(params: CommonParameters = {}): Promise<Array<GoogleEmailSetup>> {
    return this.request({
      path: `/system/googleemailsetup/`,
      method: 'get',
      params,
    })
  }

  postSystemGoogleemailsetup(GoogleEmailSetup: GoogleEmailSetup): Promise<GoogleEmailSetup> {
    return this.request({
      path: `/system/googleemailsetup/`,
      method: 'post',
      data: GoogleEmailSetup,
    })
  }

  getSystemGoogleemailsetupById(
    id: number,
    params: CommonParameters = {},
  ): Promise<GoogleEmailSetup> {
    return this.request({
      path: `/system/googleemailsetup/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemGoogleemailsetupById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/googleemailsetup/${id}`,
      method: 'delete',
    })
  }

  putSystemGoogleemailsetupById(
    id: number,
    companyTypeAssociation: GoogleEmailSetup,
  ): Promise<GoogleEmailSetup> {
    return this.request({
      path: `/system/googleemailsetup/${id}`,
      method: 'put',
      data: companyTypeAssociation,
    })
  }

  patchSystemGoogleemailsetupById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<GoogleEmailSetup> {
    return this.request({
      path: `/system/googleemailsetup/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSystemGoogleemailsetupByIdTestConnection(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/system/googleemailsetup/${id}/testConnection`,
      method: 'post',
    })
  }

  getSystemGoogleemailsetupCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/googleemailsetup/count`,
      method: 'get',
      params,
    })
  }

  getSystemImaps(params: CommonParameters = {}): Promise<Array<Imap>> {
    return this.request({
      path: `/system/imaps`,
      method: 'get',
      params,
    })
  }

  postSystemImaps(imap: Imap): Promise<Imap> {
    return this.request({
      path: `/system/imaps`,
      method: 'post',
      data: imap,
    })
  }

  getSystemImapsById(id: number, params: CommonParameters = {}): Promise<Imap> {
    return this.request({
      path: `/system/imaps/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemImapsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/imaps/${id}`,
      method: 'delete',
    })
  }

  putSystemImapsById(id: number, imap: Imap): Promise<Imap> {
    return this.request({
      path: `/system/imaps/${id}`,
      method: 'put',
      data: imap,
    })
  }

  patchSystemImapsById(id: number, patchOperations: Array<PatchOperation>): Promise<Imap> {
    return this.request({
      path: `/system/imaps/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemImapsByIdInfo(id: number, params: CommonParameters = {}): Promise<ImapInfo> {
    return this.request({
      path: `/system/imaps/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemImapsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/imaps/count`,
      method: 'get',
      params,
    })
  }

  getSystemImapsInfo(params: CommonParameters = {}): Promise<Array<ImapInfo>> {
    return this.request({
      path: `/system/imaps/info`,
      method: 'get',
      params,
    })
  }

  getSystemImapsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/imaps/info/count`,
      method: 'get',
      params,
    })
  }

  postSystemImportMassMaintenanceById(id: number): Promise<ImportMassMaintenance> {
    return this.request({
      path: `/system/importMassMaintenance/${id}`,
      method: 'post',
    })
  }

  getSystemInfo(params: CommonParameters = {}): Promise<Info> {
    return this.request({
      path: `/system/info`,
      method: 'get',
      params,
    })
  }

  getSystemInfoDepartmentlocations(
    params: CommonParameters = {},
  ): Promise<Array<DepartmentLocationInfo>> {
    return this.request({
      path: `/system/info/departmentlocations`,
      method: 'get',
      params,
    })
  }

  getSystemInfoDepartmentlocationsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<DepartmentLocationInfo> {
    return this.request({
      path: `/system/info/departmentlocations/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemInfoDepartmentlocationsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/info/departmentlocations/count`,
      method: 'get',
      params,
    })
  }

  getSystemInfoDepartments(params: CommonParameters = {}): Promise<Array<DepartmentInfo>> {
    return this.request({
      path: `/system/info/departments`,
      method: 'get',
      params,
    })
  }

  getSystemInfoDepartmentsById(id: number, params: CommonParameters = {}): Promise<DepartmentInfo> {
    return this.request({
      path: `/system/info/departments/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemInfoDepartmentsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/info/departments/count`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLinks(params: CommonParameters = {}): Promise<Array<LinkInfo>> {
    return this.request({
      path: `/system/info/links`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLinksById(id: number, params: CommonParameters = {}): Promise<LinkInfo> {
    return this.request({
      path: `/system/info/links/${id}`,
      method: 'get',
      params,
    })
  }

  postSystemInfoLinksByIdResolveurl(
    id: number,
    resolveInfo: LinkResolveUrlInfo,
  ): Promise<LinkResolveUrlInfo> {
    return this.request({
      path: `/system/info/links/${id}/resolveurl`,
      method: 'post',
      data: resolveInfo,
    })
  }

  getSystemInfoLinksCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/info/links/count`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLocales(params: CommonParameters = {}): Promise<Array<LocaleInfo>> {
    return this.request({
      path: `/system/info/locales`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLocalesById(id: number, params: CommonParameters = {}): Promise<LocaleInfo> {
    return this.request({
      path: `/system/info/locales/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLocalesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/info/locales/count`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLocations(params: CommonParameters = {}): Promise<Array<LocationInfo>> {
    return this.request({
      path: `/system/info/locations`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLocationsById(id: number, params: CommonParameters = {}): Promise<LocationInfo> {
    return this.request({
      path: `/system/info/locations/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemInfoLocationsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/info/locations/count`,
      method: 'get',
      params,
    })
  }

  getSystemInfoMembers(params: CommonParameters = {}): Promise<Array<MemberInfo>> {
    return this.request({
      path: `/system/info/members`,
      method: 'get',
      params,
    })
  }

  getSystemInfoMembersById(id: number, params: CommonParameters = {}): Promise<MemberInfo> {
    return this.request({
      path: `/system/info/members/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemInfoMembersmemberIdentifierregextypes(
    params: CommonParameters = {},
  ): Promise<MemberInfo> {
    return this.request({
      path: `/system/info/members/{memberIdentifier:regex(^(types. |(`,
      method: 'get',
      params,
    })
  }

  getSystemInfoMembersCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/info/members/count`,
      method: 'get',
      params,
    })
  }

  getSystemInfoPersonas(params: CommonParameters = {}): Promise<Array<PersonasInfo>> {
    return this.request({
      path: `/system/info/personas`,
      method: 'get',
      params,
    })
  }

  getSystemInfoPersonasById(id: number, params: CommonParameters = {}): Promise<PersonasInfo> {
    return this.request({
      path: `/system/info/personas/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemInfoPersonasCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/info/personas/count`,
      method: 'get',
      params,
    })
  }

  getSystemInfoStandardNotes(params: CommonParameters = {}): Promise<Array<StandardNoteInfo>> {
    return this.request({
      path: `/system/info/standardNotes`,
      method: 'get',
      params,
    })
  }

  getSystemInfoStandardNotesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<StandardNoteInfo> {
    return this.request({
      path: `/system/info/standardNotes/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemInfoStandardNotesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/info/standardNotes/count`,
      method: 'get',
      params,
    })
  }

  getSystemInOutBoards(params: CommonParameters = {}): Promise<Array<InOutBoard>> {
    return this.request({
      path: `/system/inOutBoards`,
      method: 'get',
      params,
    })
  }

  postSystemInOutBoards(inOutBoard: InOutBoard): Promise<InOutBoard> {
    return this.request({
      path: `/system/inOutBoards`,
      method: 'post',
      data: inOutBoard,
    })
  }

  getSystemInOutBoardsById(id: number, params: CommonParameters = {}): Promise<InOutBoard> {
    return this.request({
      path: `/system/inOutBoards/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemInOutBoardsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/inOutBoards/${id}`,
      method: 'delete',
    })
  }

  putSystemInOutBoardsById(id: number, inOutBoard: InOutBoard): Promise<InOutBoard> {
    return this.request({
      path: `/system/inOutBoards/${id}`,
      method: 'put',
      data: inOutBoard,
    })
  }

  patchSystemInOutBoardsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<InOutBoard> {
    return this.request({
      path: `/system/inOutBoards/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemInOutBoardsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/inOutBoards/count`,
      method: 'get',
      params,
    })
  }

  getSystemInOutTypes(params: CommonParameters = {}): Promise<Array<InOutType>> {
    return this.request({
      path: `/system/inOutTypes`,
      method: 'get',
      params,
    })
  }

  postSystemInOutTypes(inOutType: InOutType): Promise<InOutType> {
    return this.request({
      path: `/system/inOutTypes`,
      method: 'post',
      data: inOutType,
    })
  }

  getSystemInOutTypesById(id: number, params: CommonParameters = {}): Promise<InOutType> {
    return this.request({
      path: `/system/inOutTypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemInOutTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/inOutTypes/${id}`,
      method: 'delete',
    })
  }

  putSystemInOutTypesById(id: number, inOutType: InOutType): Promise<InOutType> {
    return this.request({
      path: `/system/inOutTypes/${id}`,
      method: 'put',
      data: inOutType,
    })
  }

  patchSystemInOutTypesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<InOutType> {
    return this.request({
      path: `/system/inOutTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemInOutTypesByIdInfo(id: number, params: CommonParameters = {}): Promise<InOutTypeInfo> {
    return this.request({
      path: `/system/inOutTypes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemInOutTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/inOutTypes/count`,
      method: 'get',
      params,
    })
  }

  getSystemInOutTypesCountInfo(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/inOutTypes/count/info`,
      method: 'get',
      params,
    })
  }

  getSystemInOutTypesInfo(params: CommonParameters = {}): Promise<Array<InOutTypeInfo>> {
    return this.request({
      path: `/system/inOutTypes/info`,
      method: 'get',
      params,
    })
  }

  getSystemIntegratorlogins(params: CommonParameters = {}): Promise<Array<IntegratorLogin>> {
    return this.request({
      path: `/system/integratorlogins`,
      method: 'get',
      params,
    })
  }

  postSystemIntegratorlogins(integratorLogin: IntegratorLogin): Promise<IntegratorLogin> {
    return this.request({
      path: `/system/integratorlogins`,
      method: 'post',
      data: integratorLogin,
    })
  }

  getSystemIntegratorloginsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<IntegratorLogin> {
    return this.request({
      path: `/system/integratorlogins/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemIntegratorloginsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/integratorlogins/${id}`,
      method: 'delete',
    })
  }

  putSystemIntegratorloginsById(
    id: number,
    integratorLogin: IntegratorLogin,
  ): Promise<IntegratorLogin> {
    return this.request({
      path: `/system/integratorlogins/${id}`,
      method: 'put',
      data: integratorLogin,
    })
  }

  patchSystemIntegratorloginsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<IntegratorLogin> {
    return this.request({
      path: `/system/integratorlogins/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemIntegratorloginsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/integratorlogins/count`,
      method: 'get',
      params,
    })
  }

  getSystemIntegratorTags(params: CommonParameters = {}): Promise<Array<IntegratorTag>> {
    return this.request({
      path: `/system/integratorTags`,
      method: 'get',
      params,
    })
  }

  postSystemIntegratorTags(tag: IntegratorTag): Promise<IntegratorTag> {
    return this.request({
      path: `/system/integratorTags`,
      method: 'post',
      data: tag,
    })
  }

  getSystemIntegratorTagsById(id: number, params: CommonParameters = {}): Promise<IntegratorTag> {
    return this.request({
      path: `/system/integratorTags/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemIntegratorTagsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/integratorTags/${id}`,
      method: 'delete',
    })
  }

  putSystemIntegratorTagsById(id: number, tag: IntegratorTag): Promise<IntegratorTag> {
    return this.request({
      path: `/system/integratorTags/${id}`,
      method: 'put',
      data: tag,
    })
  }

  patchSystemIntegratorTagsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<IntegratorTag> {
    return this.request({
      path: `/system/integratorTags/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemIntegratorTagsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/integratorTags/count`,
      method: 'get',
      params,
    })
  }

  getSystemKpiCategories(params: CommonParameters = {}): Promise<Array<KPICategory>> {
    return this.request({
      path: `/system/kpiCategories`,
      method: 'get',
      params,
    })
  }

  getSystemKpiCategoriesById(id: number, params: CommonParameters = {}): Promise<KPICategory> {
    return this.request({
      path: `/system/kpiCategories/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemKpiCategoriesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/kpiCategories/count`,
      method: 'get',
      params,
    })
  }

  getSystemKpis(params: CommonParameters = {}): Promise<Array<KPI>> {
    return this.request({
      path: `/system/kpis`,
      method: 'get',
      params,
    })
  }

  getSystemKpisById(id: number, params: CommonParameters = {}): Promise<KPI> {
    return this.request({
      path: `/system/kpis/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemKpisCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/kpis/count`,
      method: 'get',
      params,
    })
  }

  getSystemLdapConfigurations(params: CommonParameters = {}): Promise<Array<LdapConfiguration>> {
    return this.request({
      path: `/system/ldapConfigurations`,
      method: 'get',
      params,
    })
  }

  postSystemLdapConfigurations(ldapConfiguration: LdapConfiguration): Promise<LdapConfiguration> {
    return this.request({
      path: `/system/ldapConfigurations`,
      method: 'post',
      data: ldapConfiguration,
    })
  }

  getSystemLdapConfigurationsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<LdapConfiguration> {
    return this.request({
      path: `/system/ldapConfigurations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemLdapConfigurationsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/ldapConfigurations/${id}`,
      method: 'delete',
    })
  }

  putSystemLdapConfigurationsById(
    id: number,
    ldapConfiguration: LdapConfiguration,
  ): Promise<LdapConfiguration> {
    return this.request({
      path: `/system/ldapConfigurations/${id}`,
      method: 'put',
      data: ldapConfiguration,
    })
  }

  patchSystemLdapConfigurationsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<LdapConfiguration> {
    return this.request({
      path: `/system/ldapConfigurations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemLdapConfigurationsByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<LdapConfigurationInfo> {
    return this.request({
      path: `/system/ldapConfigurations/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemLdapConfigurationsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/ldapConfigurations/count`,
      method: 'get',
      params,
    })
  }

  getSystemLdapConfigurationsInfo(
    params: CommonParameters = {},
  ): Promise<Array<LdapConfigurationInfo>> {
    return this.request({
      path: `/system/ldapConfigurations/info`,
      method: 'get',
      params,
    })
  }

  getSystemLdapConfigurationsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/ldapConfigurations/info/count`,
      method: 'get',
      params,
    })
  }

  postSystemLdapConfigurationsTestLink(
    server: LdapConfigurationTestLink,
  ): Promise<SuccessResponse> {
    return this.request({
      path: `/system/ldapConfigurations/testLink`,
      method: 'post',
      data: server,
    })
  }

  getSystemLinks(params: CommonParameters = {}): Promise<Array<Link>> {
    return this.request({
      path: `/system/links`,
      method: 'get',
      params,
    })
  }

  postSystemLinks(link: Link): Promise<Link> {
    return this.request({
      path: `/system/links`,
      method: 'post',
      data: link,
    })
  }

  getSystemLinksById(id: number, params: CommonParameters = {}): Promise<Link> {
    return this.request({
      path: `/system/links/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemLinksById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/links/${id}`,
      method: 'delete',
    })
  }

  putSystemLinksById(id: number, link: Link): Promise<Link> {
    return this.request({
      path: `/system/links/${id}`,
      method: 'put',
      data: link,
    })
  }

  patchSystemLinksById(id: number, patchOperations: Array<PatchOperation>): Promise<Link> {
    return this.request({
      path: `/system/links/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemLinksCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/links/count`,
      method: 'get',
      params,
    })
  }

  getSystemLocations(params: CommonParameters = {}): Promise<Array<Location>> {
    return this.request({
      path: `/system/locations`,
      method: 'get',
      params,
    })
  }

  postSystemLocations(location: Location): Promise<Location> {
    return this.request({
      path: `/system/locations`,
      method: 'post',
      data: location,
    })
  }

  getSystemLocationsById(id: number, params: CommonParameters = {}): Promise<Location> {
    return this.request({
      path: `/system/locations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemLocationsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/locations/${id}`,
      method: 'delete',
    })
  }

  putSystemLocationsById(id: number, location: Location): Promise<Location> {
    return this.request({
      path: `/system/locations/${id}`,
      method: 'put',
      data: location,
    })
  }

  patchSystemLocationsById(id: number, patchOperations: Array<PatchOperation>): Promise<Location> {
    return this.request({
      path: `/system/locations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemLocationsByIdUsages(id: number, params: CommonParameters = {}): Promise<Array<Usage>> {
    return this.request({
      path: `/system/locations/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Array<Usage>> {
    return this.request({
      path: `/system/locations/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsByParentIdDepartments(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<LocationDepartment>> {
    return this.request({
      path: `/system/locations/${parentId}/departments`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsByParentIdDepartmentsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<LocationDepartment> {
    return this.request({
      path: `/system/locations/${parentId}/departments/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsByParentIdDepartmentsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/locations/${parentId}/departments/count`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsByParentIdWorkRoles(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<LocationWorkRole>> {
    return this.request({
      path: `/system/locations/${parentId}/workRoles`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsByParentIdWorkRolesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<LocationWorkRole> {
    return this.request({
      path: `/system/locations/${parentId}/workRoles/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsByParentIdWorkRolesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/locations/${parentId}/workRoles/count`,
      method: 'get',
      params,
    })
  }

  getSystemLocationsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/locations/count`,
      method: 'get',
      params,
    })
  }

  getSystemManagementNetworkSecurities(
    params: CommonParameters = {},
  ): Promise<Array<ManagementNetworkSecurity>> {
    return this.request({
      path: `/system/managementNetworkSecurities`,
      method: 'get',
      params,
    })
  }

  postSystemManagementNetworkSecurities(
    managementNetworkSecurity: ManagementNetworkSecurity,
  ): Promise<ManagementNetworkSecurity> {
    return this.request({
      path: `/system/managementNetworkSecurities`,
      method: 'post',
      data: managementNetworkSecurity,
    })
  }

  getSystemManagementNetworkSecuritiesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ManagementNetworkSecurity> {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemManagementNetworkSecuritiesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}`,
      method: 'delete',
    })
  }

  putSystemManagementNetworkSecuritiesById(
    id: number,
    managementNetworkSecurity: ManagementNetworkSecurity,
  ): Promise<ManagementNetworkSecurity> {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}`,
      method: 'put',
      data: managementNetworkSecurity,
    })
  }

  patchSystemManagementNetworkSecuritiesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ManagementNetworkSecurity> {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemManagementNetworkSecuritiesByIdTestCredentials(
    id: number,
    params: CommonParameters = {},
  ): Promise<SuccessResponse> {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}/testCredentials`,
      method: 'get',
      params,
    })
  }

  getSystemManagementNetworkSecuritiesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/managementNetworkSecurities/count`,
      method: 'get',
      params,
    })
  }

  getSystemMarketplaceimportGetdefinitionById(
    id: number,
    params: CommonParameters = {},
  ): Promise<MarketplaceImport> {
    return this.request({
      path: `/system/marketplaceimport/getdefinition/${id}`,
      method: 'get',
      params,
    })
  }

  postSystemMarketplaceimportImport(
    marketplaceImport: MarketplaceImport,
  ): Promise<MarketplaceImport> {
    return this.request({
      path: `/system/marketplaceimport/import`,
      method: 'post',
      data: marketplaceImport,
    })
  }

  getSystemMembers(params: CommonParameters = {}): Promise<Array<Member>> {
    return this.request({
      path: `/system/members`,
      method: 'get',
      params,
    })
  }

  postSystemMembers(member: Member): Promise<Member> {
    return this.request({
      path: `/system/members`,
      method: 'post',
      data: member,
    })
  }

  getSystemMembersById(id: number, params: CommonParameters = {}): Promise<Member> {
    return this.request({
      path: `/system/members/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMembersById(id: number, member: Member): Promise<Member> {
    return this.request({
      path: `/system/members/${id}`,
      method: 'put',
      data: member,
    })
  }

  patchSystemMembersById(id: number, patchOperations: Array<PatchOperation>): Promise<Member> {
    return this.request({
      path: `/system/members/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSystemMembersByIdDeactivate(
    id: number,
    item: MemberDeactivation,
  ): Promise<MemberDeactivation> {
    return this.request({
      path: `/system/members/${id}/deactivate`,
      method: 'post',
      data: item,
    })
  }

  getSystemMembersByIdImage(
    id: number,
    useDefaultFlag: boolean,
    lastmodified: string,
    params: CommonParameters = {},
  ): Promise<OctetStreamResponse> {
    return this.request({
      path: `/system/members/${id}/image`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByIdLinkSsoUser(id: number, item: MemberLinkSsoUser): Promise<SuccessResponse> {
    return this.request({
      path: `/system/members/${id}/linkSsoUser`,
      method: 'post',
      data: item,
    })
  }

  postSystemMembersByIdSubmit(id: number, item: MemberSsoToken): Promise<SuccessResponse> {
    return this.request({
      path: `/system/members/${id}/submit`,
      method: 'post',
      data: item,
    })
  }

  postSystemMembersByIdUnlinkSsoUser(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/system/members/${id}/unlinkSsoUser`,
      method: 'post',
    })
  }

  deleteSystemMembersByIdUnusedTimeSheets(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${id}/unusedTimeSheets`,
      method: 'delete',
    })
  }

  getSystemMembersByIdUsages(id: number, params: CommonParameters = {}): Promise<Array<Usage>> {
    return this.request({
      path: `/system/members/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByIdUsagesList(id: number, params: CommonParameters = {}): Promise<Array<Usage>> {
    return this.request({
      path: `/system/members/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getSystemMembersmemberIdentifierregextypes(
    memberIdentifier: string,
    params: CommonParameters = {},
  ): Promise<Member> {
    return this.request({
      path: `/system/members/{memberIdentifier:regex(^(types. |(`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByMemberIdentifierTokens(memberIdentifier: string): Promise<Token> {
    return this.request({
      path: `/system/members/${memberIdentifier}/tokens`,
      method: 'post',
    })
  }

  getSystemMembersByParentIdAccruals(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<MemberAccrual>> {
    return this.request({
      path: `/system/members/${parentId}/accruals`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByParentIdAccruals(
    parentId: number,
    memberAccrual: MemberAccrual,
  ): Promise<MemberAccrual> {
    return this.request({
      path: `/system/members/${parentId}/accruals`,
      method: 'post',
      data: memberAccrual,
    })
  }

  getSystemMembersByParentIdAccrualsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<MemberAccrual> {
    return this.request({
      path: `/system/members/${parentId}/accruals/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdAccrualsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${parentId}/accruals/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersByParentIdAccrualsById(
    id: number,
    parentId: number,
    memberAccrual: MemberAccrual,
  ): Promise<MemberAccrual> {
    return this.request({
      path: `/system/members/${parentId}/accruals/${id}`,
      method: 'put',
      data: memberAccrual,
    })
  }

  patchSystemMembersByParentIdAccrualsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberAccrual> {
    return this.request({
      path: `/system/members/${parentId}/accruals/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersByParentIdAccrualsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/members/${parentId}/accruals/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByParentIdCertifications(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<MemberCertification>> {
    return this.request({
      path: `/system/members/${parentId}/certifications`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByParentIdCertifications(
    parentId: number,
    memberCertification: MemberCertification,
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/certifications`,
      method: 'post',
      data: memberCertification,
    })
  }

  getSystemMembersByParentIdCertificationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/certifications/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdCertificationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${parentId}/certifications/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersByParentIdCertificationsById(
    id: number,
    parentId: number,
    memberCertification: MemberCertification,
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/certifications/${id}`,
      method: 'put',
      data: memberCertification,
    })
  }

  patchSystemMembersByParentIdCertificationsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/certifications/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersByParentIdCertificationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/members/${parentId}/certifications/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByParentIdDelegations(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<MemberDelegation>> {
    return this.request({
      path: `/system/members/${parentId}/delegations`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByParentIdDelegations(
    parentId: number,
    memberDelegation: MemberDelegation,
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/members/${parentId}/delegations`,
      method: 'post',
      data: memberDelegation,
    })
  }

  getSystemMembersByParentIdDelegationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/members/${parentId}/delegations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdDelegationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${parentId}/delegations/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersByParentIdDelegationsById(
    id: number,
    parentId: number,
    memberDelegation: MemberDelegation,
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/members/${parentId}/delegations/${id}`,
      method: 'put',
      data: memberDelegation,
    })
  }

  patchSystemMembersByParentIdDelegationsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/members/${parentId}/delegations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersByParentIdDelegationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/members/${parentId}/delegations/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByParentIdManagedDeviceAccounts(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<ManagedDeviceAccount>> {
    return this.request({
      path: `/system/members/${parentId}/managedDeviceAccounts`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdManagedDeviceAccountsBulk(
    parentId: number,
    managedDeviceAccounts: IdCollection,
  ): Promise<BulkResult> {
    return this.request({
      path: `/system/members/${parentId}/managedDeviceAccounts/bulk`,
      method: 'delete',
      data: managedDeviceAccounts,
    })
  }

  putSystemMembersByParentIdManagedDeviceAccountsBulk(
    parentId: number,
    managedDeviceAccounts: Array<ManagedDeviceAccount>,
  ): Promise<BulkResult> {
    return this.request({
      path: `/system/members/${parentId}/managedDeviceAccounts/bulk`,
      method: 'put',
      data: managedDeviceAccounts,
    })
  }

  getSystemMembersByParentIdMycertifications(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<MemberCertification>> {
    return this.request({
      path: `/system/members/${parentId}/mycertifications`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByParentIdMycertifications(
    parentId: number,
    memberCertification: MemberCertification,
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/mycertifications`,
      method: 'post',
      data: memberCertification,
    })
  }

  getSystemMembersByParentIdMycertificationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdMycertificationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersByParentIdMycertificationsById(
    id: number,
    parentId: number,
    memberCertification: MemberCertification,
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/${id}`,
      method: 'put',
      data: memberCertification,
    })
  }

  patchSystemMembersByParentIdMycertificationsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberCertification> {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersByParentIdMycertificationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByParentIdNotificationSettings(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<MemberNotificationSetting>> {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByParentIdNotificationSettings(
    parentId: number,
    memberNotificationSetting: MemberNotificationSetting,
  ): Promise<MemberNotificationSetting> {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings`,
      method: 'post',
      data: memberNotificationSetting,
    })
  }

  getSystemMembersByParentIdNotificationSettingsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<MemberNotificationSetting> {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdNotificationSettingsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersByParentIdNotificationSettingsById(
    id: number,
    parentId: number,
    memberNotificationSetting: MemberNotificationSetting,
  ): Promise<MemberNotificationSetting> {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/${id}`,
      method: 'put',
      data: memberNotificationSetting,
    })
  }

  patchSystemMembersByParentIdNotificationSettingsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberNotificationSetting> {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersByParentIdNotificationSettingsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByParentIdPersonas(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<MemberPersona>> {
    return this.request({
      path: `/system/members/${parentId}/personas`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByParentIdPersonasById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<MemberPersona> {
    return this.request({
      path: `/system/members/${parentId}/personas/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByParentIdPersonasCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/members/${parentId}/personas/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersByParentIdSkills(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<MemberSkill>> {
    return this.request({
      path: `/system/members/${parentId}/skills`,
      method: 'get',
      params,
    })
  }

  postSystemMembersByParentIdSkills(
    parentId: number,
    memberSkill: MemberSkill,
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/members/${parentId}/skills`,
      method: 'post',
      data: memberSkill,
    })
  }

  getSystemMembersByParentIdSkillsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/members/${parentId}/skills/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersByParentIdSkillsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/${parentId}/skills/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersByParentIdSkillsById(
    id: number,
    parentId: number,
    memberSkill: MemberSkill,
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/members/${parentId}/skills/${id}`,
      method: 'put',
      data: memberSkill,
    })
  }

  patchSystemMembersByParentIdSkillsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/members/${parentId}/skills/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersByParentIdSkillsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/members/${parentId}/skills/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/members/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersTypes(params: CommonParameters = {}): Promise<Array<MemberType>> {
    return this.request({
      path: `/system/members/types`,
      method: 'get',
      params,
    })
  }

  postSystemMembersTypes(type: MemberType): Promise<MemberType> {
    return this.request({
      path: `/system/members/types`,
      method: 'post',
      data: type,
    })
  }

  getSystemMembersTypesById(id: number, params: CommonParameters = {}): Promise<MemberType> {
    return this.request({
      path: `/system/members/types/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMembersTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/members/types/${id}`,
      method: 'delete',
    })
  }

  putSystemMembersTypesById(id: number, type: MemberType): Promise<MemberType> {
    return this.request({
      path: `/system/members/types/${id}`,
      method: 'put',
      data: type,
    })
  }

  patchSystemMembersTypesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberType> {
    return this.request({
      path: `/system/members/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMembersTypesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<MemberTypeInfo> {
    return this.request({
      path: `/system/members/types/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemMembersTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/members/types/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersTypesInfo(params: CommonParameters = {}): Promise<Array<MemberTypeInfo>> {
    return this.request({
      path: `/system/members/types/info`,
      method: 'get',
      params,
    })
  }

  getSystemMembersTypesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/members/types/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemMembersWithSso(params: CommonParameters = {}): Promise<Array<Member>> {
    return this.request({
      path: `/system/members/withSso`,
      method: 'get',
      params,
    })
  }

  getSystemMenuentries(params: CommonParameters = {}): Promise<Array<MenuEntry>> {
    return this.request({
      path: `/system/menuentries`,
      method: 'get',
      params,
    })
  }

  postSystemMenuentries(menuEntry: MenuEntry): Promise<MenuEntry> {
    return this.request({
      path: `/system/menuentries`,
      method: 'post',
      data: menuEntry,
    })
  }

  getSystemMenuentriesById(id: number, params: CommonParameters = {}): Promise<MenuEntry> {
    return this.request({
      path: `/system/menuentries/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMenuentriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/menuentries/${id}`,
      method: 'delete',
    })
  }

  putSystemMenuentriesById(id: number, menuEntry: MenuEntry): Promise<MenuEntry> {
    return this.request({
      path: `/system/menuentries/${id}`,
      method: 'put',
      data: menuEntry,
    })
  }

  patchSystemMenuentriesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MenuEntry> {
    return this.request({
      path: `/system/menuentries/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMenuentriesByIdImage(
    id: number,
    lastmodified: string,
    largeFlag: boolean,
    params: CommonParameters = {},
  ): Promise<OctetStreamResponse> {
    return this.request({
      path: `/system/menuentries/${id}/image`,
      method: 'get',
      params,
    })
  }

  postSystemMenuentriesByIdImage(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/menuentries/${id}/image`,
      method: 'post',
    })
  }

  getSystemMenuEntriesByParentIdLocations(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<MenuEntryLocation>> {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations`,
      method: 'get',
      params,
    })
  }

  postSystemMenuEntriesByParentIdLocations(
    parentId: number,
    menuEntryLocation: MenuEntryLocation,
  ): Promise<MenuEntryLocation> {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations`,
      method: 'post',
      data: menuEntryLocation,
    })
  }

  getSystemMenuEntriesByParentIdLocationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<MenuEntryLocation> {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMenuEntriesByParentIdLocationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations/${id}`,
      method: 'delete',
    })
  }

  getSystemMenuEntriesByParentIdLocationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations/count`,
      method: 'get',
      params,
    })
  }

  getSystemMenuentriesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/menuentries/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyAccountById(id: number, params: CommonParameters = {}): Promise<MyAccount> {
    return this.request({
      path: `/system/myAccount/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMyAccountById(id: number, myAccount: MyAccount): Promise<MyAccount> {
    return this.request({
      path: `/system/myAccount/${id}`,
      method: 'put',
      data: myAccount,
    })
  }

  patchSystemMyAccountById(id: number, patchOperations: Array<PatchOperation>): Promise<MyAccount> {
    return this.request({
      path: `/system/myAccount/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyAccountByParentIdDelegations(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<MemberDelegation>> {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations`,
      method: 'get',
      params,
    })
  }

  postSystemMyAccountByParentIdDelegations(
    parentId: number,
    memberDelegation: MemberDelegation,
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations`,
      method: 'post',
      data: memberDelegation,
    })
  }

  getSystemMyAccountByParentIdDelegationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMyAccountByParentIdDelegationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/${id}`,
      method: 'delete',
    })
  }

  putSystemMyAccountByParentIdDelegationsById(
    id: number,
    parentId: number,
    memberDelegation: MemberDelegation,
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/${id}`,
      method: 'put',
      data: memberDelegation,
    })
  }

  patchSystemMyAccountByParentIdDelegationsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberDelegation> {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyAccountByParentIdDelegationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyAccountByParentIdSkills(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<MemberSkill>> {
    return this.request({
      path: `/system/myAccount/${parentId}/skills`,
      method: 'get',
      params,
    })
  }

  postSystemMyAccountByParentIdSkills(
    parentId: number,
    memberSkill: MemberSkill,
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/myAccount/${parentId}/skills`,
      method: 'post',
      data: memberSkill,
    })
  }

  getSystemMyAccountByParentIdSkillsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemMyAccountByParentIdSkillsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/${id}`,
      method: 'delete',
    })
  }

  putSystemMyAccountByParentIdSkillsById(
    id: number,
    parentId: number,
    memberSkill: MemberSkill,
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/${id}`,
      method: 'put',
      data: memberSkill,
    })
  }

  patchSystemMyAccountByParentIdSkillsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<MemberSkill> {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyAccountByParentIdSkillsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructure(
    params: CommonParameters = {},
  ): Promise<Array<CorporateStructure>> {
    return this.request({
      path: `/system/myCompany/corporateStructure`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructureById(
    id: number,
    params: CommonParameters = {},
  ): Promise<CorporateStructure> {
    return this.request({
      path: `/system/myCompany/corporateStructure/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMyCompanyCorporateStructureById(
    id: number,
    corporateStructure: CorporateStructure,
  ): Promise<CorporateStructure> {
    return this.request({
      path: `/system/myCompany/corporateStructure/${id}`,
      method: 'put',
      data: corporateStructure,
    })
  }

  patchSystemMyCompanyCorporateStructureById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<CorporateStructure> {
    return this.request({
      path: `/system/myCompany/corporateStructure/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyCompanyCorporateStructureByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<CorporateStructureInfo> {
    return this.request({
      path: `/system/myCompany/corporateStructure/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructureCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/myCompany/corporateStructure/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructureInfo(
    params: CommonParameters = {},
  ): Promise<Array<CorporateStructureInfo>> {
    return this.request({
      path: `/system/myCompany/corporateStructure/info`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructureInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/myCompany/corporateStructure/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructureLevels(
    params: CommonParameters = {},
  ): Promise<Array<CorporateStructureLevel>> {
    return this.request({
      path: `/system/myCompany/corporateStructureLevels`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructureLevelsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<CorporateStructureLevel> {
    return this.request({
      path: `/system/myCompany/corporateStructureLevels/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCorporateStructureLevelsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/myCompany/corporateStructureLevels/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCrm(params: CommonParameters = {}): Promise<Array<Crm>> {
    return this.request({
      path: `/system/myCompany/crm`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCrmById(id: number, params: CommonParameters = {}): Promise<Crm> {
    return this.request({
      path: `/system/myCompany/crm/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMyCompanyCrmById(id: number, crm: Crm): Promise<Crm> {
    return this.request({
      path: `/system/myCompany/crm/${id}`,
      method: 'put',
      data: crm,
    })
  }

  patchSystemMyCompanyCrmById(id: number, patchOperations: Array<PatchOperation>): Promise<Crm> {
    return this.request({
      path: `/system/myCompany/crm/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyCompanyCrmByIdInfo(id: number, params: CommonParameters = {}): Promise<CrmInfo> {
    return this.request({
      path: `/system/myCompany/crm/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCrmCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/myCompany/crm/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCrmInfo(params: CommonParameters = {}): Promise<Array<CrmInfo>> {
    return this.request({
      path: `/system/myCompany/crm/info`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyCrmInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/myCompany/crm/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemMycompanyDocuments(params: CommonParameters = {}): Promise<Array<DocumentSetup>> {
    return this.request({
      path: `/system/mycompany/documents`,
      method: 'get',
      params,
    })
  }

  getSystemMycompanyDocumentsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<DocumentSetup> {
    return this.request({
      path: `/system/mycompany/documents/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMycompanyDocumentsById(id: number, document: DocumentSetup): Promise<DocumentSetup> {
    return this.request({
      path: `/system/mycompany/documents/${id}`,
      method: 'put',
      data: document,
    })
  }

  patchSystemMycompanyDocumentsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<DocumentSetup> {
    return this.request({
      path: `/system/mycompany/documents/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMycompanyInfoServices(params: CommonParameters = {}): Promise<Array<ServiceInfo>> {
    return this.request({
      path: `/system/mycompany/info/services`,
      method: 'get',
      params,
    })
  }

  getSystemMycompanyInfoServicesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ServiceInfo> {
    return this.request({
      path: `/system/mycompany/info/services/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyOther(params: CommonParameters = {}): Promise<Array<Other>> {
    return this.request({
      path: `/system/myCompany/other`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyOtherById(id: number, params: CommonParameters = {}): Promise<Other> {
    return this.request({
      path: `/system/myCompany/other/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMyCompanyOtherById(id: number, other: Other): Promise<Other> {
    return this.request({
      path: `/system/myCompany/other/${id}`,
      method: 'put',
      data: other,
    })
  }

  patchSystemMyCompanyOtherById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Other> {
    return this.request({
      path: `/system/myCompany/other/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyCompanyOtherCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/myCompany/other/count`,
      method: 'get',
      params,
    })
  }

  getSystemMycompanyReportingServices(
    params: CommonParameters = {},
  ): Promise<Array<ReportingService>> {
    return this.request({
      path: `/system/mycompany/reportingServices`,
      method: 'get',
      params,
    })
  }

  getSystemMycompanyReportingServicesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ReportingService> {
    return this.request({
      path: `/system/mycompany/reportingServices/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMycompanyReportingServicesById(
    id: number,
    service: ReportingService,
  ): Promise<ReportingService> {
    return this.request({
      path: `/system/mycompany/reportingServices/${id}`,
      method: 'put',
      data: service,
    })
  }

  patchSystemMycompanyReportingServicesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ReportingService> {
    return this.request({
      path: `/system/mycompany/reportingServices/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSystemMycompanyReportingServicesByIdTestConnection(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/system/mycompany/reportingServices/${id}/testConnection`,
      method: 'post',
    })
  }

  getSystemMycompanyServices(params: CommonParameters = {}): Promise<Array<Service>> {
    return this.request({
      path: `/system/mycompany/services`,
      method: 'get',
      params,
    })
  }

  getSystemMycompanyServicesById(id: number, params: CommonParameters = {}): Promise<Service> {
    return this.request({
      path: `/system/mycompany/services/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMycompanyServicesById(id: number, service: Service): Promise<Service> {
    return this.request({
      path: `/system/mycompany/services/${id}`,
      method: 'put',
      data: service,
    })
  }

  patchSystemMycompanyServicesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Service> {
    return this.request({
      path: `/system/mycompany/services/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyCompanyTimeExpense(params: CommonParameters = {}): Promise<Array<TimeExpense>> {
    return this.request({
      path: `/system/myCompany/timeExpense`,
      method: 'get',
      params,
    })
  }

  getSystemMyCompanyTimeExpenseById(
    id: number,
    params: CommonParameters = {},
  ): Promise<TimeExpense> {
    return this.request({
      path: `/system/myCompany/timeExpense/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemMyCompanyTimeExpenseById(id: number, timeExpense: TimeExpense): Promise<TimeExpense> {
    return this.request({
      path: `/system/myCompany/timeExpense/${id}`,
      method: 'put',
      data: timeExpense,
    })
  }

  patchSystemMyCompanyTimeExpenseById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TimeExpense> {
    return this.request({
      path: `/system/myCompany/timeExpense/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemMyCompanyTimeExpenseCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/myCompany/timeExpense/count`,
      method: 'get',
      params,
    })
  }

  getSystemMyMembers(params: CommonParameters = {}): Promise<MyMember> {
    return this.request({
      path: `/system/myMembers`,
      method: 'get',
      params,
    })
  }

  getSystemMyMembersInfo(params: CommonParameters = {}): Promise<MyMemberInfo> {
    return this.request({
      path: `/system/myMembers/info`,
      method: 'get',
      params,
    })
  }

  getSystemMySecurity(params: CommonParameters = {}): Promise<Array<MySecurity>> {
    return this.request({
      path: `/system/mySecurity`,
      method: 'get',
      params,
    })
  }

  getSystemMySecurityCustomizeItems(
    params: CommonParameters = {},
  ): Promise<Array<MySecurityCustomizeItem>> {
    return this.request({
      path: `/system/mySecurity/customizeItems/`,
      method: 'get',
      params,
    })
  }

  getSystemNotificationRecipients(
    params: CommonParameters = {},
  ): Promise<Array<NotificationRecipient>> {
    return this.request({
      path: `/system/notificationRecipients`,
      method: 'get',
      params,
    })
  }

  getSystemNotificationRecipientsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<NotificationRecipient> {
    return this.request({
      path: `/system/notificationRecipients/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemNotificationRecipientsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/notificationRecipients/count`,
      method: 'get',
      params,
    })
  }

  getSystemOffice365EmailSetups(
    params: CommonParameters = {},
  ): Promise<Array<Office365EmailSetup>> {
    return this.request({
      path: `/system/office365/emailSetups`,
      method: 'get',
      params,
    })
  }

  postSystemOffice365EmailSetups(entity: Office365EmailSetup): Promise<Office365EmailSetup> {
    return this.request({
      path: `/system/office365/emailSetups`,
      method: 'post',
      data: entity,
    })
  }

  getSystemOffice365EmailSetupsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<Office365EmailSetup> {
    return this.request({
      path: `/system/office365/emailSetups/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemOffice365EmailSetupsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/office365/emailSetups/${id}`,
      method: 'delete',
    })
  }

  putSystemOffice365EmailSetupsById(
    id: number,
    entity: Office365EmailSetup,
  ): Promise<Office365EmailSetup> {
    return this.request({
      path: `/system/office365/emailSetups/${id}`,
      method: 'put',
      data: entity,
    })
  }

  patchSystemOffice365EmailSetupsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<Office365EmailSetup> {
    return this.request({
      path: `/system/office365/emailSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSystemOffice365EmailSetupsByIdAuthorize(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/system/office365/emailSetups/${id}/authorize`,
      method: 'post',
    })
  }

  postSystemOffice365EmailSetupsByIdTestConnection(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/system/office365/emailSetups/${id}/testConnection`,
      method: 'post',
    })
  }

  getSystemOffice365EmailSetupsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/office365/emailSetups/count`,
      method: 'get',
      params,
    })
  }

  getSystemOsgradeweights(params: CommonParameters = {}): Promise<Array<OsGradeWeight>> {
    return this.request({
      path: `/system/osgradeweights`,
      method: 'get',
      params,
    })
  }

  getSystemOsgradeweightsById(id: number, params: CommonParameters = {}): Promise<OsGradeWeight> {
    return this.request({
      path: `/system/osgradeweights/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemOsgradeweightsById(id: number, osGradeWeight: OsGradeWeight): Promise<OsGradeWeight> {
    return this.request({
      path: `/system/osgradeweights/${id}`,
      method: 'put',
      data: osGradeWeight,
    })
  }

  patchSystemOsgradeweightsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<OsGradeWeight> {
    return this.request({
      path: `/system/osgradeweights/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemOsgradeweightsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/osgradeweights/count`,
      method: 'get',
      params,
    })
  }

  getSystemParsingTypes(params: CommonParameters = {}): Promise<Array<ParsingType>> {
    return this.request({
      path: `/system/parsingTypes`,
      method: 'get',
      params,
    })
  }

  getSystemParsingTypesById(id: number, params: CommonParameters = {}): Promise<ParsingType> {
    return this.request({
      path: `/system/parsingTypes/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemParsingTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/parsingTypes/count`,
      method: 'get',
      params,
    })
  }

  getSystemParsingVariables(params: CommonParameters = {}): Promise<Array<ParsingVariable>> {
    return this.request({
      path: `/system/parsingVariables`,
      method: 'get',
      params,
    })
  }

  getSystemParsingVariablesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ParsingVariable> {
    return this.request({
      path: `/system/parsingVariables/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemParsingVariablesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/parsingVariables/count`,
      method: 'get',
      params,
    })
  }

  getSystemPortalReports(params: CommonParameters = {}): Promise<Array<PortalReport>> {
    return this.request({
      path: `/system/portalReports`,
      method: 'get',
      params,
    })
  }

  postSystemPortalReports(portalReport: PortalReport): Promise<PortalReport> {
    return this.request({
      path: `/system/portalReports`,
      method: 'post',
      data: portalReport,
    })
  }

  getSystemPortalReportsById(id: number, params: CommonParameters = {}): Promise<PortalReport> {
    return this.request({
      path: `/system/portalReports/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemPortalReportsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/portalReports/${id}`,
      method: 'delete',
    })
  }

  putSystemPortalReportsById(id: number, portalReport: PortalReport): Promise<PortalReport> {
    return this.request({
      path: `/system/portalReports/${id}`,
      method: 'put',
      data: portalReport,
    })
  }

  patchSystemPortalReportsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<PortalReport> {
    return this.request({
      path: `/system/portalReports/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemPortalReportsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/portalReports/count`,
      method: 'get',
      params,
    })
  }

  getSystemQuoteLinkSetup(params: CommonParameters = {}): Promise<Array<QuoteLink>> {
    return this.request({
      path: `/system/quoteLinkSetup`,
      method: 'get',
      params,
    })
  }

  postSystemQuoteLinkSetup(quoteLink: QuoteLink): Promise<QuoteLink> {
    return this.request({
      path: `/system/quoteLinkSetup`,
      method: 'post',
      data: quoteLink,
    })
  }

  getSystemQuoteLinkSetupById(id: number, params: CommonParameters = {}): Promise<QuoteLink> {
    return this.request({
      path: `/system/quoteLinkSetup/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemQuoteLinkSetupById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/quoteLinkSetup/${id}`,
      method: 'delete',
    })
  }

  putSystemQuoteLinkSetupById(id: number, quoteLink: QuoteLink): Promise<QuoteLink> {
    return this.request({
      path: `/system/quoteLinkSetup/${id}`,
      method: 'put',
      data: quoteLink,
    })
  }

  patchSystemQuoteLinkSetupById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<QuoteLink> {
    return this.request({
      path: `/system/quoteLinkSetup/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemQuoteLinkSetupCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/quoteLinkSetup/count`,
      method: 'get',
      params,
    })
  }

  getSystemQuoteLinkSetupTestConnection(
    url: string,
    params: CommonParameters = {},
  ): Promise<SuccessResponse> {
    return this.request({
      path: `/system/quoteLinkSetup/testConnection`,
      method: 'get',
      params,
    })
  }

  getSystemReportCards(params: CommonParameters = {}): Promise<Array<ReportCard>> {
    return this.request({
      path: `/system/reportCards`,
      method: 'get',
      params,
    })
  }

  postSystemReportCards(reportCard: ReportCard): Promise<ReportCard> {
    return this.request({
      path: `/system/reportCards`,
      method: 'post',
      data: reportCard,
    })
  }

  getSystemReportCardsById(id: number, params: CommonParameters = {}): Promise<ReportCard> {
    return this.request({
      path: `/system/reportCards/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemReportCardsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/reportCards/${id}`,
      method: 'delete',
    })
  }

  putSystemReportCardsById(id: number, reportCard: ReportCard): Promise<ReportCard> {
    return this.request({
      path: `/system/reportCards/${id}`,
      method: 'put',
      data: reportCard,
    })
  }

  patchSystemReportCardsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ReportCard> {
    return this.request({
      path: `/system/reportCards/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemReportCardsByIdInfo(id: number, params: CommonParameters = {}): Promise<ReportCardInfo> {
    return this.request({
      path: `/system/reportCards/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemReportCardsByParentIdDetails(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<ReportCardDetail>> {
    return this.request({
      path: `/system/reportCards/${parentId}/details`,
      method: 'get',
      params,
    })
  }

  postSystemReportCardsByParentIdDetails(
    parentId: number,
    reportCardDetail: ReportCardDetail,
  ): Promise<ReportCardDetail> {
    return this.request({
      path: `/system/reportCards/${parentId}/details`,
      method: 'post',
      data: reportCardDetail,
    })
  }

  getSystemReportCardsByParentIdDetailsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ReportCardDetail> {
    return this.request({
      path: `/system/reportCards/${parentId}/details/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemReportCardsByParentIdDetailsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/reportCards/${parentId}/details/${id}`,
      method: 'delete',
    })
  }

  putSystemReportCardsByParentIdDetailsById(
    id: number,
    parentId: number,
    reportCardDetail: ReportCardDetail,
  ): Promise<ReportCardDetail> {
    return this.request({
      path: `/system/reportCards/${parentId}/details/${id}`,
      method: 'put',
      data: reportCardDetail,
    })
  }

  patchSystemReportCardsByParentIdDetailsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<ReportCardDetail> {
    return this.request({
      path: `/system/reportCards/${parentId}/details/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemReportCardsByParentIdDetailsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/reportCards/${parentId}/details/count`,
      method: 'get',
      params,
    })
  }

  getSystemReportCardsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/reportCards/count`,
      method: 'get',
      params,
    })
  }

  getSystemReportCardsInfo(params: CommonParameters = {}): Promise<Array<ReportCardInfo>> {
    return this.request({
      path: `/system/reportCards/info`,
      method: 'get',
      params,
    })
  }

  getSystemReportCardsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/reportCards/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemReports(params: CommonParameters = {}): Promise<Array<Report>> {
    return this.request({
      path: `/system/reports`,
      method: 'get',
      params,
    })
  }

  getSystemReportsByReportName(
    reportName: string,
    params: CommonParameters = {},
  ): Promise<ReportDataResponse> {
    return this.request({
      path: `/system/reports/${reportName}`,
      method: 'get',
      params,
    })
  }

  getSystemReportsByReportNameColumns(
    reportName: string,
    params: CommonParameters = {},
  ): Promise<Array<ReportColumnDefinition>> {
    return this.request({
      path: `/system/reports/${reportName}/columns`,
      method: 'get',
      params,
    })
  }

  getSystemReportsByReportNameCount(
    reportName: string,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/reports/${reportName}/count`,
      method: 'get',
      params,
    })
  }

  getSystemSecurityroles(params: CommonParameters = {}): Promise<Array<SecurityRole>> {
    return this.request({
      path: `/system/securityroles`,
      method: 'get',
      params,
    })
  }

  postSystemSecurityroles(securityRole: SecurityRole): Promise<SecurityRole> {
    return this.request({
      path: `/system/securityroles`,
      method: 'post',
      data: securityRole,
    })
  }

  getSystemSecurityrolesById(id: number, params: CommonParameters = {}): Promise<SecurityRole> {
    return this.request({
      path: `/system/securityroles/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemSecurityrolesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/securityroles/${id}`,
      method: 'delete',
    })
  }

  getSystemSecurityrolesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<SecurityRoleInfo> {
    return this.request({
      path: `/system/securityroles/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemSecurityRolesByParentIdSettings(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<SecurityRoleSetting>> {
    return this.request({
      path: `/system/securityRoles/${parentId}/settings`,
      method: 'get',
      params,
    })
  }

  getSystemSecurityRolesByParentIdSettingsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<SecurityRoleSetting> {
    return this.request({
      path: `/system/securityRoles/${parentId}/settings/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemSecurityRolesByParentIdSettingsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/securityRoles/${parentId}/settings/count`,
      method: 'get',
      params,
    })
  }

  getSystemSecurityrolesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/securityroles/count`,
      method: 'get',
      params,
    })
  }

  getSystemSecurityrolesInfo(params: CommonParameters = {}): Promise<Array<SecurityRoleInfo>> {
    return this.request({
      path: `/system/securityroles/info`,
      method: 'get',
      params,
    })
  }

  getSystemSecurityrolesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/securityroles/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemSettings(params: CommonParameters = {}): Promise<Array<SystemSetting>> {
    return this.request({
      path: `/system/settings`,
      method: 'get',
      params,
    })
  }

  getSystemSettingsById(id: number, params: CommonParameters = {}): Promise<SystemSetting> {
    return this.request({
      path: `/system/settings/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemSettingsById(id: number, systemSetting: SystemSetting): Promise<SystemSetting> {
    return this.request({
      path: `/system/settings/${id}`,
      method: 'put',
      data: systemSetting,
    })
  }

  patchSystemSettingsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<SystemSetting> {
    return this.request({
      path: `/system/settings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemSettingsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/settings/count`,
      method: 'get',
      params,
    })
  }

  getSystemSetupScreens(params: CommonParameters = {}): Promise<Array<SetupScreen>> {
    return this.request({
      path: `/system/setupScreens`,
      method: 'get',
      params,
    })
  }

  getSystemSetupScreensById(id: number, params: CommonParameters = {}): Promise<SetupScreen> {
    return this.request({
      path: `/system/setupScreens/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemSetupScreensCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/setupScreens/count`,
      method: 'get',
      params,
    })
  }

  getSystemSkillCategories(params: CommonParameters = {}): Promise<Array<SkillCategory>> {
    return this.request({
      path: `/system/skillCategories`,
      method: 'get',
      params,
    })
  }

  postSystemSkillCategories(skillCategory: SkillCategory): Promise<SkillCategory> {
    return this.request({
      path: `/system/skillCategories`,
      method: 'post',
      data: skillCategory,
    })
  }

  getSystemSkillCategoriesById(id: number, params: CommonParameters = {}): Promise<SkillCategory> {
    return this.request({
      path: `/system/skillCategories/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemSkillCategoriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/skillCategories/${id}`,
      method: 'delete',
    })
  }

  putSystemSkillCategoriesById(id: number, skillCategory: SkillCategory): Promise<SkillCategory> {
    return this.request({
      path: `/system/skillCategories/${id}`,
      method: 'put',
      data: skillCategory,
    })
  }

  patchSystemSkillCategoriesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<SkillCategory> {
    return this.request({
      path: `/system/skillCategories/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemSkillCategoriesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/skillCategories/count`,
      method: 'get',
      params,
    })
  }

  getSystemSkills(params: CommonParameters = {}): Promise<Array<Skill>> {
    return this.request({
      path: `/system/skills`,
      method: 'get',
      params,
    })
  }

  postSystemSkills(skill: Skill): Promise<Skill> {
    return this.request({
      path: `/system/skills`,
      method: 'post',
      data: skill,
    })
  }

  getSystemSkillsById(id: number, params: CommonParameters = {}): Promise<Skill> {
    return this.request({
      path: `/system/skills/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemSkillsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/skills/${id}`,
      method: 'delete',
    })
  }

  putSystemSkillsById(id: number, skill: Skill): Promise<Skill> {
    return this.request({
      path: `/system/skills/${id}`,
      method: 'put',
      data: skill,
    })
  }

  patchSystemSkillsById(id: number, patchOperations: Array<PatchOperation>): Promise<Skill> {
    return this.request({
      path: `/system/skills/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemSkillsByIdInfo(id: number, params: CommonParameters = {}): Promise<SkillInfo> {
    return this.request({
      path: `/system/skills/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemSkillsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/skills/count`,
      method: 'get',
      params,
    })
  }

  getSystemSkillsInfo(params: CommonParameters = {}): Promise<Array<SkillInfo>> {
    return this.request({
      path: `/system/skills/info`,
      method: 'get',
      params,
    })
  }

  getSystemSkillsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/skills/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemSsoConfigurations(params: CommonParameters = {}): Promise<Array<SsoConfiguration>> {
    return this.request({
      path: `/system/ssoConfigurations`,
      method: 'get',
      params,
    })
  }

  postSystemSsoConfigurations(ssoConfiguration: SsoConfiguration): Promise<SsoConfiguration> {
    return this.request({
      path: `/system/ssoConfigurations`,
      method: 'post',
      data: ssoConfiguration,
    })
  }

  getSystemSsoConfigurationsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<SsoConfiguration> {
    return this.request({
      path: `/system/ssoConfigurations/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemSsoConfigurationsById(
    id: number,
    ssoConfiguration: SsoConfiguration,
  ): Promise<SsoConfiguration> {
    return this.request({
      path: `/system/ssoConfigurations/${id}`,
      method: 'put',
      data: ssoConfiguration,
    })
  }

  patchSystemSsoConfigurationsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<SsoConfiguration> {
    return this.request({
      path: `/system/ssoConfigurations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  deleteSystemSsoConfigurationsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/ssoConfigurations/${id}`,
      method: 'delete',
    })
  }

  postSystemSsoConfigurationsByIdRegistertoken(
    id: number,
    ssoConfiguration: SsoConfiguration,
  ): Promise<SsoConfiguration> {
    return this.request({
      path: `/system/ssoConfigurations/${id}/registertoken`,
      method: 'post',
      data: ssoConfiguration,
    })
  }

  postSystemSsoConfigurationsByIdSubmitmembers(
    id: number,
    ssoConfiguration: SsoConfiguration,
  ): Promise<SsoConfiguration> {
    return this.request({
      path: `/system/ssoConfigurations/${id}/submitmembers`,
      method: 'post',
      data: ssoConfiguration,
    })
  }

  getSystemSsoConfigurationsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/ssoConfigurations/count`,
      method: 'get',
      params,
    })
  }

  getSystemSsoUsers(params: CommonParameters = {}): Promise<Array<SsoUser>> {
    return this.request({
      path: `/system/ssoUsers`,
      method: 'get',
      params,
    })
  }

  getSystemSsoUsersByExternalId(
    externalId: number,
    params: CommonParameters = {},
  ): Promise<SsoUser> {
    return this.request({
      path: `/system/ssoUsers/${externalId}`,
      method: 'get',
      params,
    })
  }

  getSystemSsoUsersCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/ssoUsers/count`,
      method: 'get',
      params,
    })
  }

  getSystemStandardNotes(params: CommonParameters = {}): Promise<Array<StandardNote>> {
    return this.request({
      path: `/system/standardNotes`,
      method: 'get',
      params,
    })
  }

  postSystemStandardNotes(standardNote: StandardNote): Promise<StandardNote> {
    return this.request({
      path: `/system/standardNotes`,
      method: 'post',
      data: standardNote,
    })
  }

  getSystemStandardNotesById(id: number, params: CommonParameters = {}): Promise<StandardNote> {
    return this.request({
      path: `/system/standardNotes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemStandardNotesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/standardNotes/${id}`,
      method: 'delete',
    })
  }

  putSystemStandardNotesById(id: number, standardNote: StandardNote): Promise<StandardNote> {
    return this.request({
      path: `/system/standardNotes/${id}`,
      method: 'put',
      data: standardNote,
    })
  }

  patchSystemStandardNotesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<StandardNote> {
    return this.request({
      path: `/system/standardNotes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemStandardNotesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/standardNotes/count`,
      method: 'get',
      params,
    })
  }

  getSystemSurveys(params: CommonParameters = {}): Promise<Array<Survey>> {
    return this.request({
      path: `/system/surveys`,
      method: 'get',
      params,
    })
  }

  postSystemSurveys(survey: Survey): Promise<Survey> {
    return this.request({
      path: `/system/surveys`,
      method: 'post',
      data: survey,
    })
  }

  getSystemSurveysByGrandparentIdQuestionsByParentIdValues(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Array<SurveyQuestionValue>> {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/${parentId}/values`,
      method: 'get',
      params,
    })
  }

  postSystemSurveysByGrandparentIdQuestionsByParentIdValues(
    parentId: number,
    grandparentId: number,
    surveyQuestionValue: SurveyQuestionValue,
  ): Promise<SurveyQuestionValue> {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/${parentId}/values`,
      method: 'post',
      data: surveyQuestionValue,
    })
  }

  getSystemSurveysByGrandparentIdQuestionsByParentIdValuesById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<SurveyQuestionValue> {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/${parentId}/values/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemSurveysByGrandparentIdQuestionsByParentIdValuesById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/${parentId}/values/${id}`,
      method: 'delete',
    })
  }

  putSystemSurveysByGrandparentIdQuestionsByParentIdValuesById(
    id: number,
    parentId: number,
    grandparentId: number,
    surveyQuestionValue: SurveyQuestionValue,
  ): Promise<SurveyQuestionValue> {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/${parentId}/values/${id}`,
      method: 'put',
      data: surveyQuestionValue,
    })
  }

  patchSystemSurveysByGrandparentIdQuestionsByParentIdValuesById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<SurveyQuestionValue> {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/${parentId}/values/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemSurveysById(id: number, params: CommonParameters = {}): Promise<Survey> {
    return this.request({
      path: `/system/surveys/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemSurveysById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/surveys/${id}`,
      method: 'delete',
    })
  }

  putSystemSurveysById(id: number, survey: Survey): Promise<Survey> {
    return this.request({
      path: `/system/surveys/${id}`,
      method: 'put',
      data: survey,
    })
  }

  patchSystemSurveysById(id: number, patchOperations: Array<PatchOperation>): Promise<Survey> {
    return this.request({
      path: `/system/surveys/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSystemSurveysByIdCopy(id: number): Promise<Survey> {
    return this.request({
      path: `/system/surveys/${id}/copy`,
      method: 'post',
    })
  }

  getSystemSurveysByIdInfo(id: number, params: CommonParameters = {}): Promise<SurveyInfo> {
    return this.request({
      path: `/system/surveys/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemSurveysByParentIdQuestions(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<SurveyQuestion>> {
    return this.request({
      path: `/system/surveys/${parentId}/questions`,
      method: 'get',
      params,
    })
  }

  postSystemSurveysByParentIdQuestions(
    parentId: number,
    surveyQuestion: SurveyQuestion,
  ): Promise<SurveyQuestion> {
    return this.request({
      path: `/system/surveys/${parentId}/questions`,
      method: 'post',
      data: surveyQuestion,
    })
  }

  getSystemSurveysByParentIdQuestionsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<SurveyQuestion> {
    return this.request({
      path: `/system/surveys/${parentId}/questions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemSurveysByParentIdQuestionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/surveys/${parentId}/questions/${id}`,
      method: 'delete',
    })
  }

  putSystemSurveysByParentIdQuestionsById(
    id: number,
    parentId: number,
    surveyQuestion: SurveyQuestion,
  ): Promise<SurveyQuestion> {
    return this.request({
      path: `/system/surveys/${parentId}/questions/${id}`,
      method: 'put',
      data: surveyQuestion,
    })
  }

  patchSystemSurveysByParentIdQuestionsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<SurveyQuestion> {
    return this.request({
      path: `/system/surveys/${parentId}/questions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemSurveysByParentIdQuestionsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/surveys/${parentId}/questions/count`,
      method: 'get',
      params,
    })
  }

  getSystemSurveysCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/surveys/count`,
      method: 'get',
      params,
    })
  }

  getSystemSurveysInfo(params: CommonParameters = {}): Promise<Array<SurveyInfo>> {
    return this.request({
      path: `/system/surveys/info`,
      method: 'get',
      params,
    })
  }

  getSystemSurveysInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/surveys/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemTimeZoneSetups(params: CommonParameters = {}): Promise<Array<TimeZoneSetup>> {
    return this.request({
      path: `/system/timeZoneSetups`,
      method: 'get',
      params,
    })
  }

  postSystemTimeZoneSetups(timeZoneSetup: TimeZoneSetup): Promise<TimeZoneSetup> {
    return this.request({
      path: `/system/timeZoneSetups`,
      method: 'post',
      data: timeZoneSetup,
    })
  }

  getSystemTimeZoneSetupsById(id: number, params: CommonParameters = {}): Promise<TimeZoneSetup> {
    return this.request({
      path: `/system/timeZoneSetups/${id}`,
      method: 'get',
      params,
    })
  }

  putSystemTimeZoneSetupsById(id: number, timeZoneSetup: TimeZoneSetup): Promise<TimeZoneSetup> {
    return this.request({
      path: `/system/timeZoneSetups/${id}`,
      method: 'put',
      data: timeZoneSetup,
    })
  }

  patchSystemTimeZoneSetupsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TimeZoneSetup> {
    return this.request({
      path: `/system/timeZoneSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  deleteSystemTimeZoneSetupsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/timeZoneSetups/${id}`,
      method: 'delete',
    })
  }

  getSystemTimeZoneSetupsByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<TimeZoneSetupInfo> {
    return this.request({
      path: `/system/timeZoneSetups/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemTimeZoneSetupsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/timeZoneSetups/count`,
      method: 'get',
      params,
    })
  }

  getSystemTimeZoneSetupsInfo(params: CommonParameters = {}): Promise<Array<TimeZoneSetupInfo>> {
    return this.request({
      path: `/system/timeZoneSetups/info`,
      method: 'get',
      params,
    })
  }

  getSystemTimeZoneSetupsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/timeZoneSetups/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemTodayPageCategories(params: CommonParameters = {}): Promise<Array<TodayPageCategory>> {
    return this.request({
      path: `/system/todayPageCategories`,
      method: 'get',
      params,
    })
  }

  postSystemTodayPageCategories(todayPageCategory: TodayPageCategory): Promise<TodayPageCategory> {
    return this.request({
      path: `/system/todayPageCategories`,
      method: 'post',
      data: todayPageCategory,
    })
  }

  getSystemTodayPageCategoriesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<TodayPageCategory> {
    return this.request({
      path: `/system/todayPageCategories/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemTodayPageCategoriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/todayPageCategories/${id}`,
      method: 'delete',
    })
  }

  putSystemTodayPageCategoriesById(
    id: number,
    todayPageCategory: TodayPageCategory,
  ): Promise<TodayPageCategory> {
    return this.request({
      path: `/system/todayPageCategories/${id}`,
      method: 'put',
      data: todayPageCategory,
    })
  }

  patchSystemTodayPageCategoriesById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<TodayPageCategory> {
    return this.request({
      path: `/system/todayPageCategories/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemTodayPageCategoriesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/todayPageCategories/count`,
      method: 'get',
      params,
    })
  }

  getSystemUserDefinedFields(params: CommonParameters = {}): Promise<Array<UserDefinedField>> {
    return this.request({
      path: `/system/userDefinedFields`,
      method: 'get',
      params,
    })
  }

  postSystemUserDefinedFields(userDefinedField: UserDefinedField): Promise<UserDefinedField> {
    return this.request({
      path: `/system/userDefinedFields`,
      method: 'post',
      data: userDefinedField,
    })
  }

  getSystemUserDefinedFieldsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<UserDefinedField> {
    return this.request({
      path: `/system/userDefinedFields/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemUserDefinedFieldsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/userDefinedFields/${id}`,
      method: 'delete',
    })
  }

  putSystemUserDefinedFieldsById(
    id: number,
    userDefinedField: UserDefinedField,
  ): Promise<UserDefinedField> {
    return this.request({
      path: `/system/userDefinedFields/${id}`,
      method: 'put',
      data: userDefinedField,
    })
  }

  patchSystemUserDefinedFieldsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<UserDefinedField> {
    return this.request({
      path: `/system/userDefinedFields/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemUserDefinedFieldsByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<UserDefinedFieldInfo> {
    return this.request({
      path: `/system/userDefinedFields/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemUserDefinedFieldsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/userDefinedFields/count`,
      method: 'get',
      params,
    })
  }

  getSystemUserDefinedFieldsInfo(
    params: CommonParameters = {},
  ): Promise<Array<UserDefinedFieldInfo>> {
    return this.request({
      path: `/system/userDefinedFields/info`,
      method: 'get',
      params,
    })
  }

  getSystemUserDefinedFieldsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/userDefinedFields/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowActionsByParentIdAutomateParameters(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<WorkflowActionAutomateParameter>> {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters`,
      method: 'get',
      params,
    })
  }

  postSystemWorkflowActionsByParentIdAutomateParameters(
    parentId: number,
    workflowActionAutomateParameter: WorkflowActionAutomateParameter,
  ): Promise<WorkflowActionAutomateParameter> {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters`,
      method: 'post',
      data: workflowActionAutomateParameter,
    })
  }

  getSystemWorkflowActionsByParentIdAutomateParametersById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<WorkflowActionAutomateParameter> {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemWorkflowActionsByParentIdAutomateParametersById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/${id}`,
      method: 'delete',
    })
  }

  putSystemWorkflowActionsByParentIdAutomateParametersById(
    id: number,
    parentId: number,
    workflowActionAutomateParameter: WorkflowActionAutomateParameter,
  ): Promise<WorkflowActionAutomateParameter> {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/${id}`,
      method: 'put',
      data: workflowActionAutomateParameter,
    })
  }

  patchSystemWorkflowActionsByParentIdAutomateParametersById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<WorkflowActionAutomateParameter> {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemWorkflowActionsByParentIdAutomateParametersCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflows(params: CommonParameters = {}): Promise<Array<Workflow>> {
    return this.request({
      path: `/system/workflows`,
      method: 'get',
      params,
    })
  }

  postSystemWorkflows(workflow: Workflow): Promise<Workflow> {
    return this.request({
      path: `/system/workflows`,
      method: 'post',
      data: workflow,
    })
  }

  getSystemWorkflowsByGrandparentIdEventsByParentIdActions(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Array<WorkflowAction>> {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/${parentId}/actions`,
      method: 'get',
      params,
    })
  }

  postSystemWorkflowsByGrandparentIdEventsByParentIdActions(
    parentId: number,
    grandparentId: number,
    workflowAction: WorkflowAction,
  ): Promise<WorkflowAction> {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/${parentId}/actions`,
      method: 'post',
      data: workflowAction,
    })
  }

  getSystemWorkflowsByGrandparentIdEventsByParentIdActionsById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<WorkflowAction> {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/${parentId}/actions/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemWorkflowsByGrandparentIdEventsByParentIdActionsById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/${parentId}/actions/${id}`,
      method: 'delete',
    })
  }

  putSystemWorkflowsByGrandparentIdEventsByParentIdActionsById(
    id: number,
    parentId: number,
    grandparentId: number,
    workflowAction: WorkflowAction,
  ): Promise<WorkflowAction> {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/${parentId}/actions/${id}`,
      method: 'put',
      data: workflowAction,
    })
  }

  patchSystemWorkflowsByGrandparentIdEventsByParentIdActionsById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<WorkflowAction> {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/${parentId}/actions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getSystemWorkflowsByGrandparentIdEventsByParentIdActionsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/${parentId}/actions/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByGrandparentIdTriggersByParentIdOptions(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Array<WorkflowTriggerOption>> {
    return this.request({
      path: `/system/workflows/${grandparentId}/triggers/${parentId}/options`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByGrandparentIdTriggersByParentIdOptionsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflows/${grandparentId}/triggers/${parentId}/options/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsById(id: number, params: CommonParameters = {}): Promise<Workflow> {
    return this.request({
      path: `/system/workflows/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemWorkflowsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/system/workflows/${id}`,
      method: 'delete',
    })
  }

  putSystemWorkflowsById(id: number, workflow: Workflow): Promise<Workflow> {
    return this.request({
      path: `/system/workflows/${id}`,
      method: 'put',
      data: workflow,
    })
  }

  patchSystemWorkflowsById(id: number, patchOperations: Array<PatchOperation>): Promise<Workflow> {
    return this.request({
      path: `/system/workflows/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSystemWorkflowsByIdCopy(id: number): Promise<Workflow> {
    return this.request({
      path: `/system/workflows/${id}/copy`,
      method: 'post',
    })
  }

  getSystemWorkflowsByParentIdAttachments(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<WorkflowAttachment>> {
    return this.request({
      path: `/system/workflows/${parentId}/attachments`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdAttachmentsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<WorkflowAttachment> {
    return this.request({
      path: `/system/workflows/${parentId}/attachments/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdAttachmentsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflows/${parentId}/attachments/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdEvents(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<WorkflowEvent>> {
    return this.request({
      path: `/system/workflows/${parentId}/events`,
      method: 'get',
      params,
    })
  }

  postSystemWorkflowsByParentIdEvents(
    parentId: number,
    workflowEvent: WorkflowEvent,
  ): Promise<WorkflowEvent> {
    return this.request({
      path: `/system/workflows/${parentId}/events`,
      method: 'post',
      data: workflowEvent,
    })
  }

  getSystemWorkflowsByParentIdEventsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<WorkflowEvent> {
    return this.request({
      path: `/system/workflows/${parentId}/events/${id}`,
      method: 'get',
      params,
    })
  }

  deleteSystemWorkflowsByParentIdEventsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/workflows/${parentId}/events/${id}`,
      method: 'delete',
    })
  }

  putSystemWorkflowsByParentIdEventsById(
    id: number,
    parentId: number,
    workflowEvent: WorkflowEvent,
  ): Promise<WorkflowEvent> {
    return this.request({
      path: `/system/workflows/${parentId}/events/${id}`,
      method: 'put',
      data: workflowEvent,
    })
  }

  patchSystemWorkflowsByParentIdEventsById(
    id: number,
    parentId: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<WorkflowEvent> {
    return this.request({
      path: `/system/workflows/${parentId}/events/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postSystemWorkflowsByParentIdEventsByIdCopy(
    id: number,
    parentId: number,
  ): Promise<WorkflowEvent> {
    return this.request({
      path: `/system/workflows/${parentId}/events/${id}/copy`,
      method: 'post',
    })
  }

  getSystemWorkflowsByParentIdEventsByIdTest(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<object>> {
    return this.request({
      path: `/system/workflows/${parentId}/events/${id}/test`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdEventsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflows/${parentId}/events/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdNotifyTypes(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<WorkflowNotifyType>> {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdNotifyTypesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<WorkflowNotifyType> {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdNotifyTypesByIdInfo(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<WorkflowNotifyTypeInfo> {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdNotifyTypesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdNotifyTypesInfo(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<WorkflowNotifyTypeInfo>> {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/info`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdNotifyTypesInfoCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/info/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdTriggers(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Array<WorkflowTrigger>> {
    return this.request({
      path: `/system/workflows/${parentId}/triggers`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsByParentIdTriggersCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/system/workflows/${parentId}/triggers/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/workflows/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsTableTypes(params: CommonParameters = {}): Promise<Array<WorkflowTableType>> {
    return this.request({
      path: `/system/workflows/tableTypes`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsTableTypesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<WorkflowTableType> {
    return this.request({
      path: `/system/workflows/tableTypes/${id}`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsTableTypesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<WorkflowTableTypeInfo> {
    return this.request({
      path: `/system/workflows/tableTypes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsTableTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/workflows/tableTypes/count`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsTableTypesInfo(
    params: CommonParameters = {},
  ): Promise<Array<WorkflowTableTypeInfo>> {
    return this.request({
      path: `/system/workflows/tableTypes/info`,
      method: 'get',
      params,
    })
  }

  getSystemWorkflowsTableTypesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/system/workflows/tableTypes/info/count`,
      method: 'get',
      params,
    })
  }

  putSystemWorkflowsUserdefinedfieldsById(
    id: number,
    workflowActionUserDefinedField: WorkflowActionUserDefinedField,
  ): Promise<WorkflowActionUserDefinedField> {
    return this.request({
      path: `/system/workflows/userdefinedfields/${id}`,
      method: 'put',
      data: workflowActionUserDefinedField,
    })
  }

  patchSystemWorkflowsUserdefinedfieldsById(
    id: number,
    patchOperations: Array<PatchOperation>,
  ): Promise<WorkflowActionUserDefinedField> {
    return this.request({
      path: `/system/workflows/userdefinedfields/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  deleteSystemWorkflowsUserdefinedfieldsActionsByParentId(
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/system/workflows/userdefinedfields/actions/${parentId}`,
      method: 'delete',
    })
  }

  postSystemWorkflowsUserdefinedfieldsEventsByGrandparentId(
    grandparentId: number,
    workflowActionUserDefinedField: WorkflowActionUserDefinedField,
  ): Promise<WorkflowActionUserDefinedField> {
    return this.request({
      path: `/system/workflows/userdefinedfields/events/${grandparentId}`,
      method: 'post',
      data: workflowActionUserDefinedField,
    })
  }

  getSystemWorkflowsUserdefinedfieldsByGrandparentIdActionsByParentId(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Array<WorkflowActionUserDefinedField>> {
    return this.request({
      path: `/system/workflows/userdefinedfields/events${grandparentId}/actions/${parentId}`,
      method: 'get',
      params,
    })
  }
}
