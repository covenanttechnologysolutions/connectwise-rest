/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type AutomateApiDomainContractsUsersChangePasswordRequest =
  schemas['Automate.Api.Domain.Contracts.Users.ChangePasswordRequest']
type AutomateApiDomainContractsUsersUser = schemas['Automate.Api.Domain.Contracts.Users.User']
type AutomateApiDomainContractsUsersUserAccess =
  schemas['Automate.Api.Domain.Contracts.Users.UserAccess']
type AutomateApiDomainContractsUsersUserFolder =
  schemas['Automate.Api.Domain.Contracts.Users.UserFolder']
type LabTechModelsUserFavorite = schemas['LabTech.Models.UserFavorite']
type LabTechModelsUserSetting = schemas['LabTech.Models.UserSetting']
type LabTechRESTApiSecurityAuthServiceCredentials =
  schemas['LabTech.RESTApi.Security.AuthServiceCredentials']

/**
 * @internal
 */
export default class UsersAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  Users_GetUserList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Users`,
      method: 'get',
      params,
    })
  }

  Users_AddUser(
    User: AutomateApiDomainContractsUsersUser,
  ): Promise<AutomateApiDomainContractsUsersUser> {
    return this.request({
      path: `/api/v1/Users`,
      method: 'post',
      data: User,
    })
  }

  Users_GetUser(
    userId: number,
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsUsersUser> {
    return this.request({
      path: `/api/v1/Users/${userId}`,
      method: 'get',
      params,
    })
  }

  Users_DeleteUser(userId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Users/${userId}`,
      method: 'delete',
    })
  }

  Users_PatchUser(
    userId: number,
    PatchOperationArray: LabTechRESTApiModelsPatchOperationArray,
  ): Promise<AutomateApiDomainContractsUsersUser> {
    return this.request({
      path: `/api/v1/Users/${userId}`,
      method: 'patch',
      data: PatchOperationArray,
    })
  }

  UserAuthLink_PostAuthorizationInitialLink(
    userId: number,
    AuthServiceCredentials: LabTechRESTApiSecurityAuthServiceCredentials,
  ): Promise<LabTechRESTApiSecurityAuthServiceCredentials> {
    return this.request({
      path: `/api/v1/Users/${userId}/AuthLink`,
      method: 'post',
      data: AuthServiceCredentials,
    })
  }

  UserActions_ChangePassword(
    userId: number,
    ChangePasswordRequest: AutomateApiDomainContractsUsersChangePasswordRequest,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Users/${userId}/ChangePassword`,
      method: 'post',
      data: ChangePasswordRequest,
    })
  }

  UserFavorites_GetUserFavoriteList(
    userId: number,
    params: CommonParameters = {},
  ): Promise<object> {
    return this.request({
      path: `/api/v1/Users/${userId}/Favorites`,
      method: 'get',
      params,
    })
  }

  UserFavorites_PostUserFavorite(
    userId: number,
    UserFavorite: LabTechModelsUserFavorite,
  ): Promise<LabTechModelsUserFavorite> {
    return this.request({
      path: `/api/v1/Users/${userId}/Favorites`,
      method: 'post',
      data: UserFavorite,
    })
  }

  UserAccess_GetUserPermissionsAsync(
    userId: number,
  ): Promise<AutomateApiDomainContractsUsersUserAccess> {
    return this.request({
      path: `/api/v1/Users/${userId}/UserAccess`,
      method: 'get',
    })
  }

  UserSettings_GetUserSettingList(userId: number, params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Users/${userId}/Settings`,
      method: 'get',
      params,
    })
  }

  UserSettings_PostUserSetting(
    userId: number,
    UserSetting: LabTechModelsUserSetting,
  ): Promise<LabTechModelsUserSetting> {
    return this.request({
      path: `/api/v1/Users/${userId}/Settings`,
      method: 'post',
      data: UserSetting,
    })
  }

  UserFolders_GetUserFolderList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Users/Folders`,
      method: 'get',
      params,
    })
  }

  UserFolders_PostUserFolder(
    UserFolder: AutomateApiDomainContractsUsersUserFolder,
  ): Promise<AutomateApiDomainContractsUsersUserFolder> {
    return this.request({
      path: `/api/v1/Users/Folders`,
      method: 'post',
      data: UserFolder,
    })
  }

  UserFolders_GetUserFolder(
    userFolderId: number,
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsUsersUserFolder> {
    return this.request({
      path: `/api/v1/Users/Folders/${userFolderId}`,
      method: 'get',
      params,
    })
  }

  UserFolders_DeleteUserFolder(userFolderId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/Users/Folders/${userFolderId}`,
      method: 'delete',
    })
  }

  UserFolders_PatchUserFolder(
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
