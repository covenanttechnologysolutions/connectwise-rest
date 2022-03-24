/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type AutomateApiDomainContractsPresentationLayerWebExtensionsUserClassWebExtensionRequest =
  schemas['Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionRequest']
type AutomateApiDomainContractsPresentationLayerWebExtensionsUserClassWebExtensionViewModel =
  schemas['Automate.Api.Domain.Contracts.PresentationLayer.WebExtensions.UserClassWebExtensionViewModel']
type AutomateApiDomainContractsSecurityAuthInformation =
  schemas['Automate.Api.Domain.Contracts.Security.AuthInformation']
type AutomateApiDomainContractsSecurityTokenCredentials =
  schemas['Automate.Api.Domain.Contracts.Security.TokenCredentials']
type AutomateApiDomainContractsSecurityTokenResult =
  schemas['Automate.Api.Domain.Contracts.Security.TokenResult']
type AutomateApiDomainContractsUsersChangePasswordRequest =
  schemas['Automate.Api.Domain.Contracts.Users.ChangePasswordRequest']
type AutomateApiDomainContractsUsersUser = schemas['Automate.Api.Domain.Contracts.Users.User']
type AutomateApiDomainContractsUsersUserAccess =
  schemas['Automate.Api.Domain.Contracts.Users.UserAccess']
type AutomateApiDomainContractsUsersUserClass =
  schemas['Automate.Api.Domain.Contracts.Users.UserClass']
type AutomateApiDomainContractsUsersUserFolder =
  schemas['Automate.Api.Domain.Contracts.Users.UserFolder']
type LabTechDatabaseResultSetWithCount_AutomateApiDomainContractsSystemServerInformation_ =
  schemas['LabTech.Database.ResultSetWithCount_Automate.Api.Domain.Contracts.System.ServerInformation_']
type LabTechDatabaseResultSetWithCount_LabTechModelsExternalSystemCredentials_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ExternalSystemCredentials_']
type LabTechDatabaseResultSetWithCount_LabTechModelsLicensedProduct_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.LicensedProduct_']
type LabTechDatabaseResultSetWithCount_LabTechModelsLink_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.Link_']
type LabTechDatabaseResultSetWithCount_LabTechModelsUserAudit_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.UserAudit_']
type LabTechModelsFeatureFlag = schemas['LabTech.Models.FeatureFlag']
type LabTechModelsPatchInformation = schemas['LabTech.Models.PatchInformation']
type LabTechModelsUserAudit = schemas['LabTech.Models.UserAudit']
type LabTechModelsUserFavorite = schemas['LabTech.Models.UserFavorite']
type LabTechModelsUserSetting = schemas['LabTech.Models.UserSetting']
type LabTechRESTApiSecurityAuthServiceCredentials =
  schemas['LabTech.RESTApi.Security.AuthServiceCredentials']

/**
 * @internal
 */
export default class SystemAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  Get(): Promise<AutomateApiDomainContractsSecurityAuthInformation> {
    return this.request({
      path: `/api/v1/APIToken`,
      method: 'get',
    })
  }

  Post(
    TokenCredentials: AutomateApiDomainContractsSecurityTokenCredentials,
  ): Promise<AutomateApiDomainContractsSecurityTokenResult> {
    return this.request({
      path: `/api/v1/APIToken`,
      method: 'post',
      data: TokenCredentials,
    })
  }

  GetServerInformationListAsync(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_AutomateApiDomainContractsSystemServerInformation_> {
    return this.request({
      path: `/api/v1/System/ServerInformation`,
      method: 'get',
      params,
    })
  }

  GetDatabaseServerDateTimeWithUtcOffset(): Promise<string> {
    return this.request({
      path: `/api/v1/DatabaseServerTime`,
      method: 'get',
    })
  }

  GetClientSystemCredentialsList(
    clientId: number,
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsExternalSystemCredentials_> {
    return this.request({
      path: `/api/v1/ExternalSystemCredentials/Clients/${clientId}`,
      method: 'get',
      params,
    })
  }

  GetFeatureFlagList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/FeatureFlags`,
      method: 'get',
      params,
    })
  }

  PostFeatureFlag(FeatureFlag: LabTechModelsFeatureFlag): Promise<LabTechModelsFeatureFlag> {
    return this.request({
      path: `/api/v1/FeatureFlags`,
      method: 'post',
      data: FeatureFlag,
    })
  }

  GetLicensedProducts(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsLicensedProduct_> {
    return this.request({
      path: `/api/v1/LicensedProducts`,
      method: 'get',
      params,
    })
  }

  GetLinkList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsLink_> {
    return this.request({
      path: `/api/v1/Links`,
      method: 'get',
      params,
    })
  }

  GetPatchInformation(params: CommonParameters = {}): Promise<LabTechModelsPatchInformation> {
    return this.request({
      path: `/api/v1/PatchInformation`,
      method: 'get',
      params,
    })
  }

  GetClientPermissionList(clientId: number): Promise<Array<string>> {
    return this.request({
      path: `/api/v1/Permissions/Clients/${clientId}`,
      method: 'get',
    })
  }

  GetUserPermissionList(): Promise<Array<string>> {
    return this.request({
      path: `/api/v1/Permissions/Users`,
      method: 'get',
    })
  }

  GetPluginList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Plugins`,
      method: 'get',
      params,
    })
  }

  GetRebootPolicyListAsync(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/RebootPolicies`,
      method: 'get',
      params,
    })
  }

  GetUserAuditList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsUserAudit_> {
    return this.request({
      path: `/api/v1/UserAudits`,
      method: 'get',
      params,
    })
  }

  PostUserAudit(UserAudit: LabTechModelsUserAudit): Promise<LabTechModelsUserAudit> {
    return this.request({
      path: `/api/v1/UserAudits`,
      method: 'post',
      data: UserAudit,
    })
  }

  GetUserClassList(
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsUsersUserClass[]> {
    return this.request({
      path: `/api/v1/UserClasses`,
      method: 'get',
      params,
    })
  }

  GetUserClass(
    userClassId: number,
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsUsersUserClass> {
    return this.request({
      path: `/api/v1/UserClasses/${userClassId}`,
      method: 'get',
      params,
    })
  }

  GetUserClassWebExtensionList(
    userClassId: number,
  ): Promise<
    AutomateApiDomainContractsPresentationLayerWebExtensionsUserClassWebExtensionViewModel[]
  > {
    return this.request({
      path: `/api/v1/UserClasses/${userClassId}/WebExtensions`,
      method: 'get',
    })
  }

  PutUserClassWebExtensionList(
    userClassId: number,
    UserClassWebExtensionRequest: AutomateApiDomainContractsPresentationLayerWebExtensionsUserClassWebExtensionRequest,
  ): Promise<
    AutomateApiDomainContractsPresentationLayerWebExtensionsUserClassWebExtensionViewModel[]
  > {
    return this.request({
      path: `/api/v1/UserClasses/${userClassId}/WebExtensions`,
      method: 'put',
      data: UserClassWebExtensionRequest,
    })
  }

  GetUserList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Users`,
      method: 'get',
      params,
    })
  }

  AddUser(User: AutomateApiDomainContractsUsersUser): Promise<AutomateApiDomainContractsUsersUser> {
    return this.request({
      path: `/api/v1/Users`,
      method: 'post',
      data: User,
    })
  }

  GetUser(
    userId: number,
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsUsersUser> {
    return this.request({
      path: `/api/v1/Users/${userId}`,
      method: 'get',
      params,
    })
  }

  DeleteUser(userId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Users/${userId}`,
      method: 'delete',
    })
  }

  PatchUser(
    userId: number,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<AutomateApiDomainContractsUsersUser> {
    return this.request({
      path: `/api/v1/Users/${userId}`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  PostAuthorizationInitialLink(
    userId: number,
    AuthServiceCredentials: LabTechRESTApiSecurityAuthServiceCredentials,
  ): Promise<LabTechRESTApiSecurityAuthServiceCredentials> {
    return this.request({
      path: `/api/v1/Users/${userId}/AuthLink`,
      method: 'post',
      data: AuthServiceCredentials,
    })
  }

  ChangePassword(
    userId: number,
    ChangePasswordRequest: AutomateApiDomainContractsUsersChangePasswordRequest,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Users/${userId}/ChangePassword`,
      method: 'post',
      data: ChangePasswordRequest,
    })
  }

  GetUserFavoriteList(userId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Users/${userId}/Favorites`,
      method: 'get',
      params,
    })
  }

  PostUserFavorite(
    userId: number,
    UserFavorite: LabTechModelsUserFavorite,
  ): Promise<LabTechModelsUserFavorite> {
    return this.request({
      path: `/api/v1/Users/${userId}/Favorites`,
      method: 'post',
      data: UserFavorite,
    })
  }

  GetUserPermissionsAsync(userId: number): Promise<AutomateApiDomainContractsUsersUserAccess> {
    return this.request({
      path: `/api/v1/Users/${userId}/UserAccess`,
      method: 'get',
    })
  }

  GetUserSettingList(userId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Users/${userId}/Settings`,
      method: 'get',
      params,
    })
  }

  PostUserSetting(
    userId: number,
    UserSetting: LabTechModelsUserSetting,
  ): Promise<LabTechModelsUserSetting> {
    return this.request({
      path: `/api/v1/Users/${userId}/Settings`,
      method: 'post',
      data: UserSetting,
    })
  }

  GetUserFolderList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Users/Folders`,
      method: 'get',
      params,
    })
  }

  PostUserFolder(
    UserFolder: AutomateApiDomainContractsUsersUserFolder,
  ): Promise<AutomateApiDomainContractsUsersUserFolder> {
    return this.request({
      path: `/api/v1/Users/Folders`,
      method: 'post',
      data: UserFolder,
    })
  }

  GetUserFolder(
    userFolderId: number,
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsUsersUserFolder> {
    return this.request({
      path: `/api/v1/Users/Folders/${userFolderId}`,
      method: 'get',
      params,
    })
  }

  DeleteUserFolder(userFolderId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Users/Folders/${userFolderId}`,
      method: 'delete',
    })
  }

  PatchUserFolder(
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
