/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
import { CommonParameters } from '../AutomateAPI'
import { NoContentResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link AutomateApiDomainContractsPatchingApprovalPolicy} */
export type AutomateApiDomainContractsPatchingApprovalPolicy =
  schemas['Automate.Api.Domain.Contracts.Patching.ApprovalPolicy']
/** {@link AutomateApiDomainContractsPatchingGroupPatchingPolicy} */
export type AutomateApiDomainContractsPatchingGroupPatchingPolicy =
  schemas['Automate.Api.Domain.Contracts.Patching.GroupPatchingPolicy']
/** {@link AutomateApiDomainContractsPatchingPatchHistory} */
export type AutomateApiDomainContractsPatchingPatchHistory =
  schemas['Automate.Api.Domain.Contracts.Patching.PatchHistory']
/** {@link AutomateApiDomainContractsPatchingThirdPartyUpdatePolicy} */
export type AutomateApiDomainContractsPatchingThirdPartyUpdatePolicy =
  schemas['Automate.Api.Domain.Contracts.Patching.ThirdPartyUpdatePolicy']
/** {@link AutomateApiDomainContractsPatchingv1_5UpdatePolicyMicrosoftUpdatePolicy} */
export type AutomateApiDomainContractsPatchingv1_5UpdatePolicyMicrosoftUpdatePolicy =
  schemas['Automate.Api.Domain.Contracts.Patching.v1_5.UpdatePolicy.MicrosoftUpdatePolicy']
/** {@link LabTechModelsPatchActionArgs} */
export type LabTechModelsPatchActionArgs = requestBodies['LabTech.Models.PatchActionArgs']

/**
 * Patching module
 * @public
 */
export class PatchingAPI extends AutomateBaseAPI {
  getApprovalPolicyListAsync(
    params: CommonParameters = {},
  ): Promise<Array<AutomateApiDomainContractsPatchingApprovalPolicy>> {
    return this.request({
      path: `/api/v1/ApprovalPolicies`,
      method: 'get',
      params,
    })
  }

  getGroupPatchingPolicyListAsync(
    params: CommonParameters = {},
  ): Promise<Array<AutomateApiDomainContractsPatchingGroupPatchingPolicy>> {
    return this.request({
      path: `/api/v1/GroupPatchingPolicies`,
      method: 'get',
      params,
    })
  }

  getMicrosoftUpdatePolicyListAsync(
    params: CommonParameters = {},
  ): Promise<Array<AutomateApiDomainContractsPatchingv1_5UpdatePolicyMicrosoftUpdatePolicy>> {
    return this.request({
      path: `/api/v1/MicrosoftUpdatePolicies`,
      method: 'get',
      params,
    })
  }

  deployAllApproved(PatchActionArgs: LabTechModelsPatchActionArgs): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/DeployAllApproved`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  deployAllSecurity(PatchActionArgs: LabTechModelsPatchActionArgs): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/DeployAllSecurity`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  reattemptFailed(PatchActionArgs: LabTechModelsPatchActionArgs): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/ReattemptFailed`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  setToPilotStage(PatchActionArgs: LabTechModelsPatchActionArgs): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/SetToPilotStage`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  setToProductionStage(PatchActionArgs: LabTechModelsPatchActionArgs): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/SetToProductionStage`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  setToTestStage(PatchActionArgs: LabTechModelsPatchActionArgs): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/SetToTestStage`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  getPatchHistoryListAsync(
    params: CommonParameters = {},
  ): Promise<Array<AutomateApiDomainContractsPatchingPatchHistory>> {
    return this.request({
      path: `/api/v1/PatchHistory`,
      method: 'get',
      params,
    })
  }

  getThirdPartyUpdatePolicyListAsync(
    params: CommonParameters = {},
  ): Promise<Array<AutomateApiDomainContractsPatchingThirdPartyUpdatePolicy>> {
    return this.request({
      path: `/api/v1/ThirdPartyUpdatePolicies`,
      method: 'get',
      params,
    })
  }
}
