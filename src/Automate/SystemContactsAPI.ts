/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsContact_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.Contact_']

/**
 * @internal
 */
export default class SystemContactsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  SystemContacts_GetSystemContactList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsContact_> {
    return this.request({
      path: `/api/v1/SystemContacts`,
      method: 'get',
      params,
    })
  }
}
