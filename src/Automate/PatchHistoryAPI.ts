/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @internal
 */
export default class PatchHistoryAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  PatchHistory_GetPatchHistoryListAsync(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/PatchHistory`,
      method: 'get',
      params,
    })
  }
}
