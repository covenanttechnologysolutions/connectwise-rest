/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechRepositoriesMySQLDomainModelsPresentationLayerUserProfile =
  schemas['LabTech.Repositories.MySQL.Domain.Models.PresentationLayer.UserProfile']

/**
 * @internal
 */
export default class UserProfilesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  GetUserProfile(): Promise<LabTechRepositoriesMySQLDomainModelsPresentationLayerUserProfile> {
    return this.request({
      path: `/api/v1/UserProfiles`,
      method: 'get',
    })
  }
}
