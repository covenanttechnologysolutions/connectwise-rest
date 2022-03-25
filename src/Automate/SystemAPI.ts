/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
export type AutomateApiDomainContractsPresentationLayerWebExtensionsUserClassWebExtensionRequest =
  schemas['Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionRequest']
export type AutomateApiDomainContractsPresentationLayerWebExtensionsUserClassWebExtensionViewModel =
  schemas['Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionViewModel']
export type AutomateApiDomainContractsSecurityAuthInformation =
  schemas['Automate.Api.Domain.Contracts.Security.AuthInformation']
export type AutomateApiDomainContractsSecurityTokenCredentials =
  schemas['Automate.Api.Domain.Contracts.Security.TokenCredentials']
export type AutomateApiDomainContractsSecurityTokenResult =
  schemas['Automate.Api.Domain.Contracts.Security.TokenResult']
export type AutomateApiDomainContractsSystemServerInformation =
  schemas['Automate.Api.Domain.Contracts.System.ServerInformation']
export type AutomateApiDomainContractsUsersChangePasswordRequest =
  schemas['Automate.Api.Domain.Contracts.Users.ChangePasswordRequest']
export type AutomateApiDomainContractsUsersUser =
  schemas['Automate.Api.Domain.Contracts.Users.User']
export type AutomateApiDomainContractsUsersUserAccess =
  schemas['Automate.Api.Domain.Contracts.Users.UserAccess']
export type AutomateApiDomainContractsUsersUserClass =
  schemas['Automate.Api.Domain.Contracts.Users.UserClass']
export type AutomateApiDomainContractsUsersUserFolder =
  schemas['Automate.Api.Domain.Contracts.Users.UserFolder']
export type LabTechModelsExternalSystemCredentials =
  schemas['LabTech.Models.ExternalSystemCredentials']
export type LabTechModelsFeatureFlag = schemas['LabTech.Models.FeatureFlag']
export type LabTechModelsLicensedProduct = schemas['LabTech.Models.LicensedProduct']
export type LabTechModelsLink = schemas['LabTech.Models.Link']
export type LabTechModelsPatchInformation = schemas['LabTech.Models.PatchInformation']
export type LabTechModelsUserAudit = schemas['LabTech.Models.UserAudit']
export type LabTechModelsUserFavorite = schemas['LabTech.Models.UserFavorite']
export type LabTechModelsUserSetting = schemas['LabTech.Models.UserSetting']
export type LabTechRESTApiModelsPatchOperationArray =
  requestBodies['LabTech.RESTApi.Models.PatchOperationArray']
export type LabTechRESTApiSecurityAuthServiceCredentials =
  schemas['LabTech.RESTApi.Security.AuthServiceCredentials']

/**
 * @internal
 */
export default class SystemAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  get(): Promise<AutomateApiDomainContractsSecurityAuthInformation> {
    return this.request({
      path: `/api/v1/APIToken`,
      method: 'get',
    })
  }

  post(
    TokenCredentials: AutomateApiDomainContractsSecurityTokenCredentials,
  ): Promise<AutomateApiDomainContractsSecurityTokenResult> {
    return this.request({
      path: `/api/v1/APIToken`,
      method: 'post',
      data: TokenCredentials,
    })
  }

  getServerInformationListAsync(
    params: CommonParameters = {},
  ): Promise<Array<AutomateApiDomainContractsSystemServerInformation>> {
    return this.request({
      path: `/api/v1/System/ServerInformation`,
      method: 'get',
      params,
    })
  }

  getDatabaseServerDateTimeWithUtcOffset(): Promise<string> {
    return this.request({
      path: `/api/v1/DatabaseServerTime`,
      method: 'get',
    })
  }

  getClientSystemCredentialsList(
    clientId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsExternalSystemCredentials>> {
    return this.request({
      path: `/api/v1/ExternalSystemCredentials/Clients/${clientId}`,
      method: 'get',
      params,
    })
  }

  getFeatureFlagList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/FeatureFlags`,
      method: 'get',
      params,
    })
  }

  postFeatureFlag(FeatureFlag: LabTechModelsFeatureFlag): Promise<LabTechModelsFeatureFlag> {
    return this.request({
      path: `/api/v1/FeatureFlags`,
      method: 'post',
      data: FeatureFlag,
    })
  }

  getLicensedProducts(params: CommonParameters = {}): Promise<Array<LabTechModelsLicensedProduct>> {
    return this.request({
      path: `/api/v1/LicensedProducts`,
      method: 'get',
      params,
    })
  }

  getLinkList(params: CommonParameters = {}): Promise<Array<LabTechModelsLink>> {
    return this.request({
      path: `/api/v1/Links`,
      method: 'get',
      params,
    })
  }

  getPatchInformation(params: CommonParameters = {}): Promise<LabTechModelsPatchInformation> {
    return this.request({
      path: `/api/v1/PatchInformation`,
      method: 'get',
      params,
    })
  }

  getClientPermissionList(clientId: number): Promise<Array<string>> {
    return this.request({
      path: `/api/v1/Permissions/Clients/${clientId}`,
      method: 'get',
    })
  }

  getUserPermissionList(): Promise<Array<string>> {
    return this.request({
      path: `/api/v1/Permissions/Users`,
      method: 'get',
    })
  }

  getPluginList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Plugins`,
      method: 'get',
      params,
    })
  }

  getRebootPolicyListAsync(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/RebootPolicies`,
      method: 'get',
      params,
    })
  }

  getUserAuditList(params: CommonParameters = {}): Promise<Array<LabTechModelsUserAudit>> {
    return this.request({
      path: `/api/v1/UserAudits`,
      method: 'get',
      params,
    })
  }

  postUserAudit(UserAudit: LabTechModelsUserAudit): Promise<LabTechModelsUserAudit> {
    return this.request({
      path: `/api/v1/UserAudits`,
      method: 'post',
      data: UserAudit,
    })
  }

  getUserClassList(
    params: CommonParameters = {},
  ): Promise<Array<AutomateApiDomainContractsUsersUserClass>> {
    return this.request({
      path: `/api/v1/UserClasses`,
      method: 'get',
      params,
    })
  }

  getUserClass(
    userClassId: number,
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsUsersUserClass> {
    return this.request({
      path: `/api/v1/UserClasses/${userClassId}`,
      method: 'get',
      params,
    })
  }

  getUserClassWebExtensionList(
    userClassId: number,
  ): Promise<
    Array<AutomateApiDomainContractsPresentationLayerWebExtensionsUserClassWebExtensionViewModel>
  > {
    return this.request({
      path: `/api/v1/UserClasses/${userClassId}/WebExtensions`,
      method: 'get',
    })
  }

  putUserClassWebExtensionList(
    userClassId: number,
    UserClassWebExtensionRequest: AutomateApiDomainContractsPresentationLayerWebExtensionsUserClassWebExtensionRequest,
  ): Promise<
    Array<AutomateApiDomainContractsPresentationLayerWebExtensionsUserClassWebExtensionViewModel>
  > {
    return this.request({
      path: `/api/v1/UserClasses/${userClassId}/WebExtensions`,
      method: 'put',
      data: UserClassWebExtensionRequest,
    })
  }

  getUserList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Users`,
      method: 'get',
      params,
    })
  }

  addUser(User: AutomateApiDomainContractsUsersUser): Promise<AutomateApiDomainContractsUsersUser> {
    return this.request({
      path: `/api/v1/Users`,
      method: 'post',
      data: User,
    })
  }

  getUser(
    userId: number,
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsUsersUser> {
    return this.request({
      path: `/api/v1/Users/${userId}`,
      method: 'get',
      params,
    })
  }

  deleteUser(userId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Users/${userId}`,
      method: 'delete',
    })
  }

  patchUser(
    userId: number,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<AutomateApiDomainContractsUsersUser> {
    return this.request({
      path: `/api/v1/Users/${userId}`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  postAuthorizationInitialLink(
    userId: number,
    AuthServiceCredentials: LabTechRESTApiSecurityAuthServiceCredentials,
  ): Promise<LabTechRESTApiSecurityAuthServiceCredentials> {
    return this.request({
      path: `/api/v1/Users/${userId}/AuthLink`,
      method: 'post',
      data: AuthServiceCredentials,
    })
  }

  changePassword(
    userId: number,
    ChangePasswordRequest: AutomateApiDomainContractsUsersChangePasswordRequest,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Users/${userId}/ChangePassword`,
      method: 'post',
      data: ChangePasswordRequest,
    })
  }

  getUserFavoriteList(userId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Users/${userId}/Favorites`,
      method: 'get',
      params,
    })
  }

  postUserFavorite(
    userId: number,
    UserFavorite: LabTechModelsUserFavorite,
  ): Promise<LabTechModelsUserFavorite> {
    return this.request({
      path: `/api/v1/Users/${userId}/Favorites`,
      method: 'post',
      data: UserFavorite,
    })
  }

  getUserPermissionsAsync(userId: number): Promise<AutomateApiDomainContractsUsersUserAccess> {
    return this.request({
      path: `/api/v1/Users/${userId}/UserAccess`,
      method: 'get',
    })
  }

  getUserSettingList(userId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Users/${userId}/Settings`,
      method: 'get',
      params,
    })
  }

  postUserSetting(
    userId: number,
    UserSetting: LabTechModelsUserSetting,
  ): Promise<LabTechModelsUserSetting> {
    return this.request({
      path: `/api/v1/Users/${userId}/Settings`,
      method: 'post',
      data: UserSetting,
    })
  }

  getUserFolderList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Users/Folders`,
      method: 'get',
      params,
    })
  }

  postUserFolder(
    UserFolder: AutomateApiDomainContractsUsersUserFolder,
  ): Promise<AutomateApiDomainContractsUsersUserFolder> {
    return this.request({
      path: `/api/v1/Users/Folders`,
      method: 'post',
      data: UserFolder,
    })
  }

  getUserFolder(
    userFolderId: number,
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsUsersUserFolder> {
    return this.request({
      path: `/api/v1/Users/Folders/${userFolderId}`,
      method: 'get',
      params,
    })
  }

  deleteUserFolder(userFolderId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Users/Folders/${userFolderId}`,
      method: 'delete',
    })
  }

  patchUserFolder(
    userFolderId: number,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<AutomateApiDomainContractsUsersUserFolder> {
    return this.request({
      path: `/api/v1/Users/Folders/${userFolderId}`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }
}
