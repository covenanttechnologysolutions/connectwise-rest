import { RequestOptions } from './types'
import promiseRetry from 'promise-retry'
import Manage, { ManageConfig } from './Manage'
import Automate, { AutomateConfig } from './Automate'
import { CommonParameters } from './AutomateAPI'

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

export interface PaginationConfig {
  thisObj: InstanceType<typeof Automate | typeof Manage>
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type PaginationApiMethod = Function

export type PaginationOptions = {
  pageSize?: number
  startPage?: number
}

/**
 * curried paginate function
 * @internal
 */
export const makePaginate =
  ({ thisObj }: PaginationConfig) =>
  (
    apiMethod: PaginationApiMethod,
    paginateArgs: PaginationOptions = {},
    ...methodArgs: Record<string, unknown>[]
  ): Promise<unknown[]> => {
    const { startPage = 1, pageSize = 1000 } = paginateArgs

    return new Promise(async (resolve, reject) => {
      let results: unknown[] = []

      let page = startPage

      if (startPage === undefined || startPage < 1) {
        page = 1
      }

      while (true) {
        try {
          const pageResults = await getPage(apiMethod, methodArgs, thisObj, page++, pageSize)
          // complete page returned, loop again
          if (Array.isArray(pageResults) && pageResults.length > 0) {
            results = [...results, ...pageResults]
            if (pageResults.length !== pageSize) {
              // incomplete page, there are no more pages
              break
            }
          } else {
            // no results returned, this is the last page, previous page was full
            break
          }
        } catch (error: unknown) {
          return reject(error)
        }
      }

      return resolve(results)
    })
  }

/**
 * @internal
 */
function getPage(
  apiMethod: PaginationApiMethod,
  methodArgs: Record<string, unknown>[],
  thisObj: InstanceType<typeof Automate | typeof Manage>,
  page = 1,
  pageSize = 1000,
): Promise<unknown[]> {
  // Javascript Function.length returns number of non-default values
  // the method args will always be greater than the api method args
  // due to this, if params is not passed in, even as an empty object,
  // we need to throw an error
  if (methodArgs.length < apiMethod.length) {
    throw new Error(
      `CommonParams must be passed in for pagination to work properly for function ${apiMethod.name}`,
    )
  }

  // look for CommonParams and inject page and pageSize
  // check for apiMethod function args length
  // get last arg
  const commonParams = <CommonParameters>methodArgs.pop()
  commonParams.page = page
  commonParams.pageSize = pageSize

  methodArgs.push(commonParams)

  return apiMethod.apply(thisObj, methodArgs)
}

/**
 * @internal
 */
function isCommonParametersLike(input: unknown): input is CommonParameters {
  if (typeof input === 'object' && input !== null) {
    return true
  } else {
    return false
  }
}
