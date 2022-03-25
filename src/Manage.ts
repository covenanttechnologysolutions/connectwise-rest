import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import { makeRequest } from './BaseAPI'
import promiseRetry from 'promise-retry'
import type { CWMOptions } from './ManageAPI'
import { CWLogger, DataResponse, ErrorResponse, RequestOptions, RetryOptions } from './types'

const CW_MANAGE_DEBUG = !!process.env.CW_MANAGE_DEBUG

export const DEFAULTS: {
  retryOptions: RetryOptions
  apiPath: string
  logger: (debug: boolean) => CWLogger
} = {
  apiPath: '/apis/3.0',
  retryOptions: {
    retries: 4,
    minTimeout: 50,
    maxTimeout: 20000,
    randomize: true,
  },
  logger:
    (debug = false) =>
    (level, text, meta) => {
      switch (level) {
        case 'error':
          console.error(`${level}: ${text}`, meta)
          return
        case 'warn':
          if (debug) {
            console.log(`${level}: ${text}`, meta)
          }
          return
        case 'info': {
          if (debug) {
            console.info(`${level}: ${text}`, meta)
          }
          return
        }
        default:
          console.log(`${level}: ${text}`, meta)
          return
      }
    },
}

export interface ManageConfig extends CWMOptions {
  authorization: string
  entryPoint: string
  timeout: number
  apiVersion: string
  retry: boolean
  retryOptions: RetryOptions
  logger: CWLogger
  debug: boolean
}

/**
 * @internal
 */
export default class Manage {
  config: ManageConfig
  private instance: AxiosInstance
  /**
   * @public
   */
  request: (args: RequestOptions) => Promise<any>

  constructor({
    companyId,
    publicKey,
    privateKey,
    companyUrl,
    clientId,
    entryPoint = 'v4_6_release',
    timeout = 20000,
    apiVersion = '2021.1',
    retry = false,
    retryOptions = DEFAULTS.retryOptions,
    logger,
    debug = false,
  }: CWMOptions) {
    if (!companyId || !publicKey || !privateKey || !companyUrl || !clientId) {
      throw new Error('Missing options [companyId, publicKey, privateKey, companyUrl, clientId]')
    }

    this.config = {
      companyId,
      publicKey,
      privateKey,
      companyUrl,
      clientId,
      entryPoint,
      apiVersion,
      retry,
      timeout,
      logger: logger ? logger : DEFAULTS.logger(debug || CW_MANAGE_DEBUG),
      debug: debug || CW_MANAGE_DEBUG,
      retryOptions: {
        ...DEFAULTS.retryOptions,
        ...retryOptions,
      },
      authorization: `Basic ${Buffer.from(`${companyId}+${publicKey}:${privateKey}`).toString(
        'base64',
      )}`,
    }

    this.instance = axios.create({
      timeout,
      baseURL: `https://${companyUrl}/${entryPoint}${DEFAULTS.apiPath}`,
      headers: {
        Accept: `application/vnd.connectwise.com+json; version=${apiVersion}, application/json`,
        'Cache-Control': 'no-cache',
        Authorization: this.config.authorization,
        clientId: this.config.clientId,
      },
    })

    this.request = makeRequest({ config: this.config, api: this.api, thisObj: this })
  }

  /**
   * @internal
   */
  private async api({
    path,
    method,
    params,
    data,
  }: RequestOptions): Promise<ErrorResponse | DataResponse> {
    try {
      const result = await this.instance({
        url: path,
        method,
        params,
        data,
      })

      return result?.data
    } catch (error: any) {
      if (error.isAxiosError()) {
        return {
          status: error.response?.status,
          data: error.response?.data,
          message: error?.message,
        }
      }

      // something else catastrophic went wrong
      throw error
    }
  }
}
