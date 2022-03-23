/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsVirusScannerDef = schemas['LabTech.Models.VirusScannerDef']

/**
 * @internal
 */
export default class VirusScannerDefsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  VirusScannerDefs_GetVirusScannerDefinitionList(
    params: CommonParameters = {},
  ): Promise<LabTechModelsVirusScannerDef[]> {
    return this.request({
      path: `/api/v1/VirusScannerDefs`,
      method: 'get',
      params,
    })
  }

  VirusScannerDefs_PostVirusScannerDefinition(
    VirusScannerDef: LabTechModelsVirusScannerDef,
  ): Promise<LabTechModelsVirusScannerDef> {
    return this.request({
      path: `/api/v1/VirusScannerDefs`,
      method: 'post',
      data: VirusScannerDef,
    })
  }
}
