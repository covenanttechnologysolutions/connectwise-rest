/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
type schemas = components['schemas']
/** {@link LabTechRepositoriesMySQLDomainModelsPresentationLayerUserProfile} */
export type LabTechRepositoriesMySQLDomainModelsPresentationLayerUserProfile =
  schemas['LabTech.Repositories.MySQL.Domain.Models.PresentationLayer.UserProfile']

/**
 * PresentationLayer module
 * @public
 */
export class PresentationLayerAPI extends AutomateBaseAPI {
  getUserProfile(): Promise<LabTechRepositoriesMySQLDomainModelsPresentationLayerUserProfile> {
    return this.request({
      path: `/api/v1/UserProfiles`,
      method: 'get',
    })
  }
}
