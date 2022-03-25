/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']

/**
 * @public
 */
export default class TicketsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  getTicketList(params: CommonParameters = {}): Promise<object> {
    return this.request({
      path: `/cwa/api/v1/Tickets`,
      method: 'get',
      params,
    })
  }
}
