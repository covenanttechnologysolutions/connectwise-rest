import Automate from './Automate'
import { CWLogger, RetryOptions } from './types'

/**
 * @public
 */
export interface CWAOptions {
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

export interface CommonParameters {
  page: number
  pageSize: number
  condition: string
  /* eslint-disable @typescript-eslint/no-explicit-any */
  expands: any
  includedFields: Array<string>
  excludedFields: Array<string>
  ids: Array<string>
  timeout: number
}

/**
 * @public
 */
export default class AutomateAPI extends Automate {
  constructor(options: CWAOptions) {
    super(options)
  }
}
