/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
import { CommonParameters } from '../AutomateAPI'
import { NoContentResponse } from '../types'
type schemas = components['schemas']
/** {@link AutomateApiDomainContractsClientsContact} */
export type AutomateApiDomainContractsClientsContact =
  schemas['Automate.Api.Domain.Contracts.Clients.Contact']
/** {@link LabTechModelsContact} */
export type LabTechModelsContact = schemas['LabTech.Models.Contact']

/**
 * Contacts module
 * @public
 */
export class ContactsAPI extends AutomateBaseAPI {
  getContactListApiv1Contacts(params: CommonParameters = {}): Promise<Array<LabTechModelsContact>> {
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

  getContactListApiv2Contacts(
    params: CommonParameters = {},
  ): Promise<Array<AutomateApiDomainContractsClientsContact>> {
    return this.request({
      path: `/api/v2/Contacts`,
      method: 'get',
      params,
    })
  }

  postContact(
    Contact: AutomateApiDomainContractsClientsContact,
  ): Promise<AutomateApiDomainContractsClientsContact> {
    return this.request({
      path: `/api/v2/Contacts`,
      method: 'post',
      data: Contact,
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

  putContact(
    contactId: number,
    Contact: AutomateApiDomainContractsClientsContact,
  ): Promise<AutomateApiDomainContractsClientsContact> {
    return this.request({
      path: `/api/v2/Contacts/${contactId}`,
      method: 'put',
      data: Contact,
    })
  }

  deleteContact(contactId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v2/Contacts/${contactId}`,
      method: 'delete',
    })
  }
}
