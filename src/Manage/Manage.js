import axios from 'axios'
import promiseRetry from 'promise-retry'

const CW_MANAGE_DEBUG = !!process.env.CW_MANAGE_DEBUG

/**
 * @type {{retryOptions: {minTimeout: number, retries: number, maxTimeout: number, randomize: boolean}, apiPath: string, logger: DEFAULTS.logger}}
 */
export const DEFAULTS = {
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
        if (options.debug) {
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

export default class Manage {
  config = {}
  #axios

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
  } = {}) {
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

    this.#axios = axios.create({
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

  /**
   *
   * @param path
   * @param {string} method ['get', 'del', 'post', 'patch']
   * @param params
   * @param data
   * @returns {Promise|Promise<Object|Object[]>}
   */
  request({ path, method = 'get', params, data }) {
    const retryCodes = ['ECONNRESET', 'ETIMEDOUT', 'ESOCKETTIMEDOUT']
    let startTime = Date.now()

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

  /**
   * @param path
   * @param method
   * @param params
   * @param data
   * @returns {Promise<{data: *, message: *, status: *}|*>}
   */
  async #api({ path, method, params, data }) {
    try {
      const result = await this.#axios.request({
        url: path,
        method,
        params,
        data,
      })

      return result?.data
    } catch (error) {
      return {
        status: error.response?.status,
        data: error.response?.data,
        message: error?.message,
      }
    }
  }
}
