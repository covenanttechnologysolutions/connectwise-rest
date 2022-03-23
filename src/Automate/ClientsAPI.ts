/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions} from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsClient_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.Client_']
type LabTechDatabaseResultSetWithCount_LabTechModelsDocument_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.Document_']
type LabTechDatabaseResultSetWithCount_LabTechModelsManagedLicense_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ManagedLicense_']
type LabTechDatabaseResultSetWithCount_LabTechModelsProductKey_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.ProductKey_']
type LabTechModelsClient = schemas['LabTech.Models.Client']
type LabTechModelsDocument = schemas['LabTech.Models.Document']
type LabTechModelsManagedLicense = schemas['LabTech.Models.ManagedLicense']
type LabTechModelsProductKey = schemas['LabTech.Models.ProductKey']

/**
 * @internal
 */
export default class ClientsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  
   Clients_GetClientList(params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsClient_> {
    return this.request({
      path: `/api/v1/Clients`, method: 'get', params
    })
   }

   Clients_PostClient(: object): Promise<LabTechModelsClient> {
    return this.request({
      path: `/api/v1/Clients`, method: 'post', data: 
    })
   }

   Documents_GetAllDocuments(clientId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsDocument_> {
    return this.request({
      path: `/api/v1/clients/${clientId}/documents`, method: 'get', params
    })
   }

   Documents_PostDocument(clientId: number, : LabTechModelsDocument): Promise<LabTechModelsDocument> {
    return this.request({
      path: `/api/v1/clients/${clientId}/documents`, method: 'post', data: 
    })
   }

   ManagedLicenses_GetManagedLicenses(clientId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsManagedLicense_> {
    return this.request({
      path: `/api/v1/clients/${clientId}/licenses`, method: 'get', params
    })
   }

   ManagedLicenses_PostManagedLicense(clientId: number, : object): Promise<LabTechModelsManagedLicense> {
    return this.request({
      path: `/api/v1/clients/${clientId}/licenses`, method: 'post', data: 
    })
   }

   ClientPermissions_GetUserClassPermissions(clientId: number, userClassId: number, params: CommonParameters = {}): Promise<any> {
    return this.request({
      path: `/api/v1/clients/${clientId}/permissions/{userClassId}`, method: 'get', params
    })
   }

   ClientPermissions_PutUserClassPermissions(clientId: number, userClassId: number, : object): Promise<any> {
    return this.request({
      path: `/api/v1/clients/${clientId}/permissions/{userClassId}`, method: 'put', data: 
    })
   }

   ClientPermissions_PostUserClassPermissions(clientId: number, userClassId: number, : object): Promise<any> {
    return this.request({
      path: `/api/v1/clients/${clientId}/permissions/{userClassId}`, method: 'post', data: 
    })
   }

   ClientPermissions_DeleteUserClassPermissions(clientId: number, userClassId: number): Promise<NoContentResponse> {
    return this.request({
      path: `/api/v1/clients/${clientId}/permissions/{userClassId}`, method: 'delete'
    })
   }

   ProductKeys_GetProductKeys(clientId: number, params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsProductKey_> {
    return this.request({
      path: `/api/v1/clients/${clientId}/productkeys`, method: 'get', params
    })
   }

   ProductKeys_PostProductKey(clientId: number, : object): Promise<LabTechModelsProductKey> {
    return this.request({
      path: `/api/v1/clients/${clientId}/productkeys`, method: 'post', data: 
    })
   }
}
  