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
type AutomateApiDomainContractsUsersUserClass =
  schemas['Automate.Api.Domain.Contracts.Users.UserClass']

/**
 * @internal
 */
export default class UserClassesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  UserClasses_GetUserClassList(
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsUsersUserClass[]> {
    return this.request({
      path: `/api/v1/UserClasses`,
      method: 'get',
      params,
    })
  }

  UserClasses_GetUserClass(
    userClassId: number,
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsUsersUserClass> {
    return this.request({
      path: `/api/v1/UserClasses/${userClassId}`,
      method: 'get',
      params,
    })
  }

  UserClasses_GetUserClassWebExtensionList(
    userClassId: number,
  ): Promise<
    AutomateApiDomainContractsPresentationLayerWebExtensionsUserClassWebExtensionViewModel[]
  > {
    return this.request({
      path: `/api/v1/UserClasses/${userClassId}/WebExtensions`,
      method: 'get',
    })
  }

  UserClasses_PutUserClassWebExtensionList(
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
}
