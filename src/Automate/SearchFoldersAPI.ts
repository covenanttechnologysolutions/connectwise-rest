/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions} from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechDatabaseResultSetWithCount_LabTechModelsSearchFolder_ = schemas['LabTech.Database.ResultSetWithCount_LabTech.Models.SearchFolder_']
type LabTechModelsSearchFolder = schemas['LabTech.Models.SearchFolder']

/**
 * @internal
 */
export default class SearchFoldersAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  
   SearchFolders_GetSearchFolderList(params: CommonParameters = {}): Promise<LabTechDatabaseResultSetWithCount_LabTechModelsSearchFolder_> {
    return this.request({
      path: `/api/v1/SearchFolders`, method: 'get', params
    })
   }

   SearchFolders_PostSearchFolder(: object): Promise<LabTechModelsSearchFolder> {
    return this.request({
      path: `/api/v1/SearchFolders`, method: 'post', data: 
    })
   }
}
  