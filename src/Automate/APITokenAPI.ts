/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type AutomateApiDomainContractsSecurityAuthInformation =
  schemas['Automate.Api.Domain.Contracts.Security.AuthInformation']
type AutomateApiDomainContractsSecurityTokenCredentials =
  schemas['Automate.Api.Domain.Contracts.Security.TokenCredentials']
type AutomateApiDomainContractsSecurityTokenResult =
  schemas['Automate.Api.Domain.Contracts.Security.TokenResult']

/**
 * @internal
 */
export default class APITokenAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  ApiToken_Get(): Promise<AutomateApiDomainContractsSecurityAuthInformation> {
    return this.request({
      path: `/api/v1/APIToken`,
      method: 'get',
    })
  }

  ApiToken_Post(
    TokenCredentials: AutomateApiDomainContractsSecurityTokenCredentials,
  ): Promise<AutomateApiDomainContractsSecurityTokenResult> {
    return this.request({
      path: `/api/v1/APIToken`,
      method: 'post',
      data: TokenCredentials,
    })
  }
}
