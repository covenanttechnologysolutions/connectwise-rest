/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type requestBodies = components['requestBodies']
/** {@link ClientPermissions_PutUserClassPermissionsPermissions} */
export type ClientPermissions_PutUserClassPermissionsPermissions =
  requestBodies['ClientPermissions_PutUserClassPermissionsPermissions']
/** {@link LabTechModelsClient} */
export type LabTechModelsClient = schemas['LabTech.Models.Client']
/** {@link LabTechModelsDocument} */
export type LabTechModelsDocument = schemas['LabTech.Models.Document']
/** {@link LabTechModelsLocation} */
export type LabTechModelsLocation = schemas['LabTech.Models.Location']
/** {@link LabTechModelsManagedLicense} */
export type LabTechModelsManagedLicense = schemas['LabTech.Models.ManagedLicense']
/** {@link LabTechModelsProductKey} */
export type LabTechModelsProductKey = schemas['LabTech.Models.ProductKey']

/**
 * @module ClientsAPI
 */

/**
 * Clients module
 * @public
 */
export default class ClientsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  getClientList(params: CommonParameters = {}): Promise<Array<LabTechModelsClient>> {
    return this.request({
      path: `/api/v1/Clients`,
      method: 'get',
      params,
    })
  }

  postClient(Client: LabTechModelsClient): Promise<LabTechModelsClient> {
    return this.request({
      path: `/api/v1/Clients`,
      method: 'post',
      data: Client,
    })
  }

  getAllDocuments(
    clientId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsDocument>> {
    return this.request({
      path: `/api/v1/clients/${clientId}/documents`,
      method: 'get',
      params,
    })
  }

  postDocument(clientId: number, Document: LabTechModelsDocument): Promise<LabTechModelsDocument> {
    return this.request({
      path: `/api/v1/clients/${clientId}/documents`,
      method: 'post',
      data: Document,
    })
  }

  getManagedLicenses(
    clientId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsManagedLicense>> {
    return this.request({
      path: `/api/v1/clients/${clientId}/licenses`,
      method: 'get',
      params,
    })
  }

  postManagedLicense(
    clientId: number,
    ManagedLicense: LabTechModelsManagedLicense,
  ): Promise<LabTechModelsManagedLicense> {
    return this.request({
      path: `/api/v1/clients/${clientId}/licenses`,
      method: 'post',
      data: ManagedLicense,
    })
  }

  getUserClassPermissions(
    clientId: number,
    userClassId: number,
    params: CommonParameters = {},
  ): Promise<Array<string>> {
    return this.request({
      path: `/api/v1/clients/${clientId}/permissions/${userClassId}`,
      method: 'get',
      params,
    })
  }

  putUserClassPermissions(
    clientId: number,
    userClassId: number,
    PutUserClassPermissionsPermissions: ClientPermissions_PutUserClassPermissionsPermissions,
  ): Promise<Array<string>> {
    return this.request({
      path: `/api/v1/clients/${clientId}/permissions/${userClassId}`,
      method: 'put',
      data: PutUserClassPermissionsPermissions,
    })
  }

  postUserClassPermissions(
    clientId: number,
    userClassId: number,
    PutUserClassPermissionsPermissions: ClientPermissions_PutUserClassPermissionsPermissions,
  ): Promise<Array<string>> {
    return this.request({
      path: `/api/v1/clients/${clientId}/permissions/${userClassId}`,
      method: 'post',
      data: PutUserClassPermissionsPermissions,
    })
  }

  deleteUserClassPermissions(clientId: number, userClassId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/clients/${clientId}/permissions/${userClassId}`,
      method: 'delete',
    })
  }

  getProductKeys(
    clientId: number,
    params: CommonParameters = {},
  ): Promise<Array<LabTechModelsProductKey>> {
    return this.request({
      path: `/api/v1/clients/${clientId}/productkeys`,
      method: 'get',
      params,
    })
  }

  postProductKey(
    clientId: number,
    ProductKey: LabTechModelsProductKey,
  ): Promise<LabTechModelsProductKey> {
    return this.request({
      path: `/api/v1/clients/${clientId}/productkeys`,
      method: 'post',
      data: ProductKey,
    })
  }

  getLocationList(params: CommonParameters = {}): Promise<Array<LabTechModelsLocation>> {
    return this.request({
      path: `/api/v1/Locations`,
      method: 'get',
      params,
    })
  }

  postLocation(Location: LabTechModelsLocation): Promise<LabTechModelsLocation> {
    return this.request({
      path: `/api/v1/Locations`,
      method: 'post',
      data: Location,
    })
  }
}
