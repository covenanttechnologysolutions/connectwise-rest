/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @internal
 */
export default class RebootPoliciesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  RebootPolicies_GetRebootPolicyListAsync(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/RebootPolicies`,
      method: 'get',
      params,
    })
  }
}
