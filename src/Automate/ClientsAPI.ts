/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsClient_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.Client_']
type LabTechDatabaseResultSetWithCount_LabTechModelsDocument_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.Document_']
type LabTechDatabaseResultSetWithCount_LabTechModelsLocation_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.Location_']
type LabTechDatabaseResultSetWithCount_LabTechModelsManagedLicense_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ManagedLicense_']
type LabTechDatabaseResultSetWithCount_LabTechModelsProductKey_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ProductKey_']
type LabTechModelsClient = schemas['LabTech.Models.Client']
type LabTechModelsDocument = schemas['LabTech.Models.Document']
type LabTechModelsLocation = schemas['LabTech.Models.Location']
type LabTechModelsManagedLicense = schemas['LabTech.Models.ManagedLicense']
type LabTechModelsProductKey = schemas['LabTech.Models.ProductKey']

/**
 * @internal
 */
export default class ClientsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  
   GetClientList(params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsClient_> {
    return this.request({
      path: `/api/v1/Clients`, method: 'get', params
    })
   }

   PostClient(Client: LabTechModelsClient): Promise<LabTechModelsClient> {
    return this.request({
      path: `/api/v1/Clients`, method: 'post', data: Client
    })
   }

   GetAllDocuments(clientId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsDocument_> {
    return this.request({
      path: `/api/v1/clients/${clientId}/documents`, method: 'get', params
    })
   }

   PostDocument(clientId: number, Document: LabTechModelsDocument): Promise<LabTechModelsDocument> {
    return this.request({
      path: `/api/v1/clients/${clientId}/documents`, method: 'post', data: Document
    })
   }

   GetManagedLicenses(clientId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsManagedLicense_> {
    return this.request({
      path: `/api/v1/clients/${clientId}/licenses`, method: 'get', params
    })
   }

   PostManagedLicense(clientId: number, ManagedLicense: LabTechModelsManagedLicense): Promise<LabTechModelsManagedLicense> {
    return this.request({
      path: `/api/v1/clients/${clientId}/licenses`, method: 'post', data: ManagedLicense
    })
   }

   GetUserClassPermissions(clientId: number, userClassId: number, params: CommonParameters = {}): Promise<Array<string>> {
    return this.request({
      path: `/api/v1/clients/${clientId}/permissions/{userClassId}`, method: 'get', params
    })
   }

   PutUserClassPermissions(clientId: number, userClassId: number, #componentsrequestBodiesClientPermissions_PutUserClassPermissionsPermissions: ClientPermissions_PutUserClassPermissionsPermissions): Promise<Array<string>> {
    return this.request({
      path: `/api/v1/clients/${clientId}/permissions/{userClassId}`, method: 'put', data: #componentsrequestBodiesClientPermissions_PutUserClassPermissionsPermissions
    })
   }

   PostUserClassPermissions(clientId: number, userClassId: number, #componentsrequestBodiesClientPermissions_PutUserClassPermissionsPermissions: ClientPermissions_PutUserClassPermissionsPermissions): Promise<Array<string>> {
    return this.request({
      path: `/api/v1/clients/${clientId}/permissions/{userClassId}`, method: 'post', data: #componentsrequestBodiesClientPermissions_PutUserClassPermissionsPermissions
    })
   }

   DeleteUserClassPermissions(clientId: number, userClassId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/clients/${clientId}/permissions/{userClassId}`, method: 'delete'
    })
   }

   GetProductKeys(clientId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsProductKey_> {
    return this.request({
      path: `/api/v1/clients/${clientId}/productkeys`, method: 'get', params
    })
   }

   PostProductKey(clientId: number, ProductKey: LabTechModelsProductKey): Promise<LabTechModelsProductKey> {
    return this.request({
      path: `/api/v1/clients/${clientId}/productkeys`, method: 'post', data: ProductKey
    })
   }

   GetLocationList(params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsLocation_> {
    return this.request({
      path: `/api/v1/Locations`, method: 'get', params
    })
   }

   PostLocation(Location: LabTechModelsLocation): Promise<LabTechModelsLocation> {
    return this.request({
      path: `/api/v1/Locations`, method: 'post', data: Location
    })
   }
}
  