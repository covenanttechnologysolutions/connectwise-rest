/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type AutomateApiDomainContractsClientsContact =
  schemas['Automate.Api.Domain.Contracts.Clients.Contact']
type LabTechDatabaseResultSetWithCount_AutomateApiDomainContractsClientsContact_ =
  schemas['LabTech.Database.ResultSetWithCount_Automate.Api.Domain.Contracts.Clients.Contact_']
type LabTechDatabaseResultSetWithCount_LabTechModelsContact_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.Contact_']

/**
 * @internal
 */
export default class ContactsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GetContactList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsContact_> {
    return this.request({
      path: `/api/v1/Contacts`,
      method: 'get',
      params,
    })
  }

  GetSystemContactList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsContact_> {
    return this.request({
      path: `/api/v1/SystemContacts`,
      method: 'get',
      params,
    })
  }

  GetContactList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_AutomateApiDomainContractsClientsContact_> {
    return this.request({
      path: `/api/v2/Contacts`,
      method: 'get',
      params,
    })
  }

  GetContact(
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
