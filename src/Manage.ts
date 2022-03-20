import axios, { AxiosError, AxiosInstance, AxiosResponse } from 'axios'
import promiseRetry from 'promise-retry'
import type { CWMOptions } from './ManageAPI'
import { CWLogger, DataResponse, ErrorResponse, RequestOptions, RetryOptions } from './types'

const CW_MANAGE_DEBUG = !!process.env.CW_MANAGE_DEBUG

export const DEFAULTS: {
  retryOptions: RetryOptions
  apiPath: string
  logger: CWLogger
} = {
  apiPath: '/apis/3.0',
  retryOptions: {
    retries: 4,
    minTimeout: 50,
    maxTimeout: 20000,
    randomize: true,
  },
  logger: (level, text, meta) => {
    switch (level) {
      case 'error':
        console.error(`${level}: ${text}`, meta)
        return
      case 'info': {
        if (CW_MANAGE_DEBUG) {
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

interface ManageConfig extends CWMOptions {
  authorization: string
}

export default class Manage {
  config: ManageConfig
  private instance: AxiosInstance

  constructor({
    companyId,
    publicKey,
    privateKey,
    companyUrl,
    clientId,
    entryPoint = 'v4_6_release',
    timeout = 20000,
    apiVersion = '3.0.0',
    retry = false,
    retryOptions = DEFAULTS.retryOptions,
    logger = DEFAULTS.logger,
  }: CWMOptions) {
    if (!companyId || !publicKey || !privateKey || !companyUrl || !clientId) {
      throw new Error('Missing options [companyId, publicKey, privateKey, companyUrl]')
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
      retryOptions: {
        ...DEFAULTS.retryOptions,
        ...retryOptions,
      },
      logger,
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
  }

  request({ path, method = 'get', params, data }: RequestOptions): Promise<any> {
    const retryCodes = ['ECONNRESET', 'ETIMEDOUT', 'ESOCKETTIMEDOUT']
    const startTime = Date.now()

    if (!path) {
      throw new Error('path must be defined.')
    }

    const { retry } = this.config

    if (retry) {
      return promiseRetry((retry, number) => {
        return this.#api({ path, method, params, data })
      })
    } else {
      return this.#api({ path, method, params, data })
    }
  }

  async #api({
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
