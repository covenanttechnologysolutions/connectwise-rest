/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @internal
 */
export default class PatchActionsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  PatchActions_DeployAllApproved(
    PatchActionArgs: LabTechModelsPatchActionArgs,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/DeployAllApproved`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  PatchActions_DeployAllSecurity(
    PatchActionArgs: LabTechModelsPatchActionArgs,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/DeployAllSecurity`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  PatchActions_ReattemptFailed(
    PatchActionArgs: LabTechModelsPatchActionArgs,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/ReattemptFailed`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  PatchActions_SetToPilotStage(
    PatchActionArgs: LabTechModelsPatchActionArgs,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/SetToPilotStage`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  PatchActions_SetToProductionStage(
    PatchActionArgs: LabTechModelsPatchActionArgs,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/SetToProductionStage`,
      method: 'post',
      data: PatchActionArgs,
    })
  }

  PatchActions_SetToTestStage(
    PatchActionArgs: LabTechModelsPatchActionArgs,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/PatchActions/SetToTestStage`,
      method: 'post',
      data: PatchActionArgs,
    })
  }
}
