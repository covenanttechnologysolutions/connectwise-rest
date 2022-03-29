/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link AutomateApiDomainContractsClientsContact} */
export type AutomateApiDomainContractsClientsContact =
  schemas['Automate.Api.Domain.Contracts.Clients.Contact']
/** {@link LabTechModelsContact} */
export type LabTechModelsContact = schemas['LabTech.Models.Contact']

/**
 * @module ContactsAPI
 */

/**
 * Contacts module
 * @public
 */
export class ContactsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  getContactList(params: CommonParameters = {}): Promise<Array<LabTechModelsContact>> {
    return this.request({
      path: `/api/v1/Contacts`,
      method: 'get',
      params,
    })
  }

  getSystemContactList(params: CommonParameters = {}): Promise<Array<LabTechModelsContact>> {
    return this.request({
      path: `/api/v1/SystemContacts`,
      method: 'get',
      params,
    })
  }

  getContactListV2(
    params: CommonParameters = {},
  ): Promise<Array<AutomateApiDomainContractsClientsContact>> {
    return this.request({
      path: `/api/v2/Contacts`,
      method: 'get',
      params,
    })
  }

  getContact(
    contactId: number,
    params: CommonParameters = {},
  ): Promise<AutomateApiDomainContractsClientsContact> {
    return this.request({
      path: `/api/v2/Contacts/${contactId}`,
      method: 'get',
      params,
    })
  }
}
