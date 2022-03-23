/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsUserAudit_ =
  schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.UserAudit_']
type LabTechModelsUserAudit = schemas['LabTech.Models.UserAudit']

/**
 * @internal
 */
export default class UserAuditsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  UserAudits_GetUserAuditList(
    params: CommonParameters = {},
  ): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsUserAudit_> {
    return this.request({
      path: `/api/v1/UserAudits`,
      method: 'get',
      params,
    })
  }

  UserAudits_PostUserAudit(UserAudit: LabTechModelsUserAudit): Promise<LabTechModelsUserAudit> {
    return this.request({
      path: `/api/v1/UserAudits`,
      method: 'post',
      data: UserAudit,
    })
  }
}
