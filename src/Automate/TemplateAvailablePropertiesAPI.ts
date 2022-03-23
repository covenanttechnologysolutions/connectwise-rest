/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsTemplateAvailableProperty = schemas['LabTech.Models.TemplateAvailableProperty']

/**
 * @internal
 */
export default class TemplateAvailablePropertiesAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  TemplateAvailableProperties_GetTemplateAvailablePropertyList(
    params: CommonParameters = {},
  ): Promise<LabTechModelsTemplateAvailableProperty[]> {
    return this.request({
      path: `/api/v1/TemplateAvailableProperties`,
      method: 'get',
      params,
    })
  }

  TemplateAvailableProperties_PostTemplateAvailableProperty(
    TemplateAvailableProperty: LabTechModelsTemplateAvailableProperty,
  ): Promise<LabTechModelsTemplateAvailableProperty> {
    return this.request({
      path: `/api/v1/TemplateAvailableProperties`,
      method: 'post',
      data: TemplateAvailableProperty,
    })
  }
}
