/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_AutomateApiDomainContractsPatchingGroupPatchingPolicy_ =
  schemas['LabTech.Database.ResultSetWithCount_Automate.Api.Domain.Contracts.Patching.GroupPatchingPolicy_']

/**
 * @internal
 */
export default class GroupPatchingPoliciesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GroupPatchingPolicies_GetGroupPatchingPolicyListAsync(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_AutomateApiDomainContractsPatchingGroupPatchingPolicy_> {
    return this.request({
      path: `/api/v1/GroupPatchingPolicies`,
      method: 'get',
      params,
    })
  }
}
