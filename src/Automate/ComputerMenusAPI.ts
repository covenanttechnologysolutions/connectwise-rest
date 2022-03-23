/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type LabTechModelsComputerMenu = schemas['LabTech.Models.ComputerMenu']

/**
 * @internal
 */
export default class ComputerMenusAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  ComputerMenus_GetComputerMenuList(
    params: CommonParameters = {},
  ): Promise<LabTechModelsComputerMenu[]> {
    return this.request({
      path: `/api/v1/ComputerMenus`,
      method: 'get',
      params,
    })
  }

  ComputerMenus_PostComputerMenu(
    ComputerMenu: LabTechModelsComputerMenu,
  ): Promise<LabTechModelsComputerMenu> {
    return this.request({
      path: `/api/v1/ComputerMenus`,
      method: 'post',
      data: ComputerMenu,
    })
  }
}
