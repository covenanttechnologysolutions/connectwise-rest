/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
import { CommonParameters } from '../AutomateAPI'
type schemas = components['schemas']
/** {@link LabTechModelsTicket} */
export type LabTechModelsTicket = schemas['LabTech.Models.Ticket']

/**
 * Tickets module
 * @public
 */
export class TicketsAPI extends AutomateBaseAPI {
  getTicketList(params: CommonParameters = {}): Promise<Array<LabTechModelsTicket>> {
    return this.request({
      path: `/api/v1/Tickets`,
      method: 'get',
      params,
    })
  }

  getTicket(ticketId: number, params: CommonParameters = {}): Promise<LabTechModelsTicket> {
    return this.request({
      path: `/api/v1/Tickets/${ticketId}`,
      method: 'get',
      params,
    })
  }
}
