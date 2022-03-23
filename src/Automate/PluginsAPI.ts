/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @internal
 */
export default class PluginsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  Plugins_GetPluginList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/api/v1/Plugins`,
      method: 'get',
      params,
    })
  }
}
