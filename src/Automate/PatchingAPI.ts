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
export default class PatchingAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GetApprovalPolicyListAsync(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/ApprovalPolicies`,
      method: 'get',
      params,
    })
  }

  GetGroupPatchingPolicyListAsync(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_AutomateApiDomainContractsPatchingGroupPatchingPolicy_> {
    return this.request({
      path: `/api/v1/GroupPatchingPolicies`,
      method: 'get',
      params,
    })
  }

  GetMicrosoftUpdatePolicyListAsync(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/MicrosoftUpdatePolicies`,
      method: 'get',
      params,
    })
  }

  DeployAllApproved(PatchActionArgs: LabTechModelsPatchActionArgs): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/DeployAllApproved`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  DeployAllSecurity(PatchActionArgs: LabTechModelsPatchActionArgs): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/DeployAllSecurity`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  ReattemptFailed(PatchActionArgs: LabTechModelsPatchActionArgs): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/ReattemptFailed`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  SetToPilotStage(PatchActionArgs: LabTechModelsPatchActionArgs): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/SetToPilotStage`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  SetToProductionStage(PatchActionArgs: LabTechModelsPatchActionArgs): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/SetToProductionStage`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  SetToTestStage(PatchActionArgs: LabTechModelsPatchActionArgs): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/SetToTestStage`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  GetPatchHistoryListAsync(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/PatchHistory`,
      method: 'get',
      params,
    })
  }

  GetThirdPartyUpdatePolicyListAsync(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/ThirdPartyUpdatePolicies`,
      method: 'get',
      params,
    })
  }
}
