/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @internal
 */
export default class TicketsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  Tickets_GetTicketList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/cwa/api/v1/Tickets`,
      method: 'get',
      params,
    })
  }
}
