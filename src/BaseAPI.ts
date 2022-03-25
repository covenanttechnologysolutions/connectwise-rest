import { RequestOptions } from './types'
import promiseRetry from 'promise-retry'
import Manage, { ManageConfig } from './Manage'
import Automate, { AutomateConfig } from './Automate'

/**
 * curried request function
 * @internal
 */
export const makeRequest =
  ({
    config,
    api,
    thisObj,
  }: {
    config: ManageConfig | AutomateConfig
    api: (args: RequestOptions) => Promise<unknown>
    thisObj: InstanceType<typeof Automate | typeof Manage>
  }): ((args: RequestOptions) => Promise<unknown>) =>
  ({ path, method = 'get', params, data }: RequestOptions): Promise<unknown> => {
    const retryCodes = ['ECONNRESET', 'ETIMEDOUT', 'ESOCKETTIMEDOUT']
    const boundApi = api.bind(thisObj)

    if (!path) {
      throw new Error('path must be defined.')
    }

    let startTime = Date.now()
    const { retry, retryOptions, logger } = config

    if (!retry) {
      return boundApi({ path, method, params, data })
        .then((result: any) => {
          logger(
            'info',
            `${method} ${path} ${Date.now() - startTime}ms params=${JSON.stringify(params)}`,
          )
          return result
        })
        .catch((error: Record<string, unknown> | undefined) => {
          logger(
            'error',
            `${method} ${path} ${Date.now() - startTime}ms params=${JSON.stringify(params)}`,
            error,
          )
          throw error
        })
    } else {
      return promiseRetry(retryOptions, (retry, number) => {
        return boundApi({ path, method, params, data }).catch((error) => {
          logger(
            'warn',
            `${method} ${path} ${Date.now() - startTime}ms error occurred: ${
              error.code
            }, retry=${number}, params=${JSON.stringify(params)}`,
          )
          startTime = Date.now()
          if (retryCodes.includes(error.code)) {
            return retry(error)
          }
          throw error
        })
      })
        .then((result) => {
          logger(
            'info',
            `${method} ${path} ${Date.now() - startTime}ms params=${JSON.stringify(params)}`,
          )

          return result
        })
        .catch((error) => {
          logger(
            'error',
            `${method} ${path} ${Date.now() - startTime}ms error occurred: ${
              error.code
            }, params=${JSON.stringify(params)}`,
            error,
          )
          throw error
        })
    }
  }
