/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsTemplateProperty = schemas['LabTech.Models.TemplateProperty']

/**
 * @internal
 */
export default class TemplatePropertiesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  TemplateProperties_GetTemplatePropertyList(
    params: CommonParameters = {},
  ): Promise<LabTechModelsTemplateProperty[]> {
    return this.request({
      path: `/api/v1/TemplateProperties`,
      method: 'get',
      params,
    })
  }

  TemplateProperties_PostTemplateProperty(
    TemplateProperty: LabTechModelsTemplateProperty,
  ): Promise<LabTechModelsTemplateProperty> {
    return this.request({
      path: `/api/v1/TemplateProperties`,
      method: 'post',
      data: TemplateProperty,
    })
  }
}
