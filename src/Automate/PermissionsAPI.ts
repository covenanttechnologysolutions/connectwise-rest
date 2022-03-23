/* This file was auto-generated, do not manually edit. */
import Automate from '../Automate'
import { components } from '../AutomateTypes'
import { CommonParameters, CWAOptions } from '../AutomateAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']

/**
 * @internal
 */
export default class PermissionsAPI extends Automate {
  constructor(props: CWAOptions) {
    super(props)
  }

  Permissions_GetClientPermissionList(clientId: number): Promise<Array<string>> {
    return this.request({
      path: `/api/v1/Permissions/Clients/${clientId}`,
      method: 'get',
    })
  }

  Permissions_GetUserPermissionList(): Promise<Array<string>> {
    return this.request({
      path: `/api/v1/Permissions/Users`,
      method: 'get',
    })
  }
}
