/* This file was auto-generated, do not manually edit. */
import { AutomateBaseAPI } from '../BaseAPI'
import { components } from '../AutomateTypes'
import { CommonParameters } from '../AutomateAPI'
type schemas = components['schemas']
/** {@link LabTechModelsCommand} */
export type LabTechModelsCommand = schemas['LabTech.Models.Command']

/**
 * Commands module
 * @public
 */
export class CommandsAPI extends AutomateBaseAPI {
  getCommandList(params: CommonParameters = {}): Promise<Array<LabTechModelsCommand>> {
    return this.request({
      path: `/api/v1/Commands`,
      method: 'get',
      params,
    })
  }

  getCommand(entityId: string, params: CommonParameters = {}): Promise<LabTechModelsCommand> {
    return this.request({
      path: `/api/v1/Commands/${entityId}`,
      method: 'get',
      params,
    })
  }
}
