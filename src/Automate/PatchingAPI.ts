/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link AutomateApiDomainContractsPatchingGroupPatchingPolicy} */
export type AutomateApiDomainContractsPatchingGroupPatchingPolicy =
  schemas['Automate.Api.Domain.Contracts.Patching.GroupPatchingPolicy']
/** {@link LabTechModelsPatchActionArgs} */
export type LabTechModelsPatchActionArgs = requestBodies['LabTech.Models.PatchActionArgs']

/**
 * @module PatchingAPI
 */

/**
 * Patching module
 * @public
 */
export default class PatchingAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  getApprovalPolicyListAsync(params: CommonParameters = {}): Promise<object> {
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

  getMicrosoftUpdatePolicyListAsync(params: CommonParameters = {}): Promise<object> {
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

  getPatchHistoryListAsync(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/PatchHistory`,
      method: 'get',
      params,
    })
  }

  getThirdPartyUpdatePolicyListAsync(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/ThirdPartyUpdatePolicies`,
      method: 'get',
      params,
    })
  }
}
