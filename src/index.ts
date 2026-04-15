import ManageAPI, { CWMOptions, PatchOperation, SECTIONS as ManageSECTIONS } from './ManageAPI'
import AutomateAPI, { CWAOptions, SECTIONS as AutomateSECTIONS } from './AutomateAPI'
import type * as types from './types'
import type * as Automate from './AutomateAPI'
import type * as Manage from './ManageAPI'
import * as utils from './utils'

export type { CWMOptions, PatchOperation, CWAOptions, types, Automate, Manage }

/**
 * @public
 */
export { AutomateAPI, ManageAPI, utils, AutomateSECTIONS, ManageSECTIONS }
