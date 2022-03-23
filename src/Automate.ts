import axios, { AxiosInstance, AxiosError } from 'axios'
import { CWLogger, DataResponse, ErrorResponse, RequestOptions, RetryOptions } from './types'
import { CWAOptions } from './AutomateAPI'
import { components } from './AutomateTypes'
type schemas = components['schemas']
type TokenResult = schemas['Automate.Api.Domain.Contracts.Security.TokenResult']

const CW_AUTOMATE_DEBUG = !!process.env.CW_AUTOMATE_DEBUG

export const DEFAULTS: {
  entryPoint: string
  retryOptions: RetryOptions
  logger: CWLogger
} = {
  entryPoint: 'cwa',
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
        if (CW_AUTOMATE_DEBUG) {
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

/**
 * @internal
 */
export default class Automate {
  config: CWAOptions
  private instance: AxiosInstance

  constructor({
    serverUrl,
    username,
    password,
    twoFactorPasscode,
    token,
    clientId,
    timeout = 20000,
    retry = false,
    retryOptions = DEFAULTS.retryOptions,
    logger = DEFAULTS.logger,
  }: CWAOptions) {
    if (token && username && password) {
      throw new Error(
        'Authenticate with token or username and password only, do not pass both methods',
      )
    }

    if (!token && !username && !password) {
      throw new Error('token or username and password missing')
    }

    if (!clientId) {
      throw new Error('clientId is required')
    }

    this.config = {
      serverUrl,
      username,
      password,
      twoFactorPasscode,
      clientId,
      timeout,
      retry,
      retryOptions: { ...DEFAULTS.retryOptions, ...retryOptions },
      logger,
    }

    this.instance = axios.create()

    if (token) {
      this.config.token = token
      this.#createAxiosInstance()
    }
  }

  get token() {
    return this.config.token
  }

  set token(token) {
    this.config.token = token
  }

  static async getToken({
    username,
    password,
    twoFactorPasscode,
    serverUrl,
  }: {
    username?: string
    password?: string
    twoFactorPasscode?: string
    serverUrl: string
  }): Promise<TokenResult> {
    const result = await axios.post(`https://${serverUrl}/${DEFAULTS.entryPoint}/api/v1/apitoken`, {
      username,
      password,
      twoFactorPasscode,
    })

    return result.data
  }

  static async refreshToken({
    username,
    password,
    serverUrl,
  }: {
    username: string
    password: string
    serverUrl: string
  }) {
    // @todo how
  }

  async verifyToken() {
    try {
      const result = await this.api({ path: '/api/v1/FeatureFlags', method: 'get' })
      return true
    } catch (err) {
      return false
    }
  }

  async request({ path, method = 'get', params, data }: RequestOptions): Promise<any> {
    return this.api({ path, method, params, data })
  }

  private async api({
    path,
    method,
    params,
    data,
  }: RequestOptions): Promise<ErrorResponse | DataResponse> {
    const { username, password, serverUrl, twoFactorPasscode } = this.config
    if (!this.config.token || !this.instance) {
      const result = await Automate.getToken({ username, password, serverUrl, twoFactorPasscode })
      this.config.token = result.AccessToken
      this.#createAxiosInstance()
    }

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

  #createAxiosInstance() {
    const { serverUrl, timeout, clientId } = this.config
    this.instance = axios.create({
      timeout,
      baseURL: `https://${serverUrl}/${DEFAULTS.entryPoint}`,
      headers: {
        Accept: `application/json`,
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${this.config.token}`,
        clientId,
      },
    })
  }
}
