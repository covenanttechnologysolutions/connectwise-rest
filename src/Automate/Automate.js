import axios from 'axios'

const CW_AUTOMATE_DEBUG = !!process.env.CW_AUTOMATE_DEBUG

const DEFAULTS = {
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

/**
 * @typedef {object} Token
 * @property {string} AccessToken
 * @property {string} TokenType
 * @property {string} ExpirationDate
 * @property {string} AbsoluteExpirationDate
 * @property {string|number} UserId
 * @property {boolean} IsTwoFactorRequired
 * @property {boolean} IsInternalTwoFactorRequired
 */

export default class Automate {
  config = {}
  #axios
  #token

  /**
   * @param serverUrl
   * @param username
   * @param password
   * @param twoFactorPasscode
   * @param token
   * @param clientId
   * @param timeout
   * @param retry
   * @param retryOptions
   * @param logger
   */
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
  }) {
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

    if (token) {
      this.#token = token
    }
  }

  get token() {
    return this.#token
  }

  set token(token) {
    this.#token = token
  }

  /**
   * @param {object} params
   * @param {string} params.username
   * @param {string} params.password
   * @param {string} [params.twoFactorPasscode]
   * @param {string} params.serverUrl
   * @returns {Promise<Token>}
   */
  static async getToken({ username, password, twoFactorPasscode, serverUrl }) {
    const result = await axios.post(`https://${serverUrl}/${DEFAULTS.entryPoint}/api/v1/apitoken`, {
      username,
      password,
      twoFactorPasscode,
    })

    return result.data
  }

  static async refreshToken({ username, password, serverUrl }) {
    // @todo how
  }

  async verifyToken() {
    try {
      const result = await this.#api({ path: '/api/v1/FeatureFlags', method: 'get' })
      return true
    } catch (err) {
      return false
    }
  }

  async request({ path, method = 'get', params, data }) {
    return this.#api({ path, method, params, data })
  }

  async #api({ path, method, params, data }) {
    const { username, password, serverUrl, twoFactorPasscode } = this.config
    if (!this.#token) {
      const result = await Automate.getToken({ username, password, serverUrl, twoFactorPasscode })
      this.#token = result.AccessToken
      this.#createAxiosInstance()
    }

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

  #createAxiosInstance() {
    const { serverUrl, timeout, clientId } = this.config
    this.#axios = axios.create({
      timeout,
      baseURL: `https://${serverUrl}/${DEFAULTS.entryPoint}`,
      headers: {
        Accept: `application/json`,
        'Cache-Control': 'no-cache',
        Authorization: `Bearer ${this.#token}`,
        clientId,
      },
    })
  }
}
