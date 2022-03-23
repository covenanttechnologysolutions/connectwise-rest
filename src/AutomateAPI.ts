import Automate from './Automate'
import { CWLogger, RetryOptions } from './types'
import type { AutomateTypes } from './types'

/**
 * @public
 */
export type CWAOptions = {
  serverUrl: string
  username?: string
  password?: string
  twoFactorPasscode?: string
  token?: string
  clientId: string
  timeout?: number
  retry?: boolean
  retryOptions?: RetryOptions
  logger?: CWLogger
}

export type OrderBy = {
  name?: string
  type?: 'Undefined' | 'Ascending' | 'Descending'
}

/**
 * @public
 */
export type CommonParameters = {
  orderBy?: OrderBy
  page?: number
  pageSize?: number
  condition?: string
  expands?: {
    [key: string]: QueryOptionExpand
  }
  includedFields?: Array<string>
  excludedFields?: Array<string>
  ids?: Array<string>
  timeout?: number
}

export type QueryOptionExpand = {
  fieldName?: string
  page?: number
  pageSize?: number
  condition?: string
  expands?: {
    [key: string]: QueryOptionExpand
  }
  orderBy?: OrderBy
  includedFields?: string[]
  excludedFields?: string[]
}

/**
 * @public
 */
export default class AutomateAPI extends Automate {
  constructor(options: CWAOptions) {
    super(options)
  }
}