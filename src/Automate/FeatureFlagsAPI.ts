/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsFeatureFlag = schemas['LabTech.Models.FeatureFlag']

/**
 * @internal
 */
export default class FeatureFlagsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  FeatureFlags_GetFeatureFlagList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/FeatureFlags`,
      method: 'get',
      params,
    })
  }

  FeatureFlags_PostFeatureFlag(
    FeatureFlag: LabTechModelsFeatureFlag,
  ): Promise<LabTechModelsFeatureFlag> {
    return this.request({
      path: `/api/v1/FeatureFlags`,
      method: 'post',
      data: FeatureFlag,
    })
  }
}
