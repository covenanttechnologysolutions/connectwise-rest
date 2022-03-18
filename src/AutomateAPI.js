import Automate from './Automate/Automate.js'

export default class AutomateAPI extends Automate {
  /**
   *
   * @param {object} options
   * @param {string} options.serverUrl fdqn format, i.e. server.domain.com
   * @param {string} options.username
   * @param {string} options.password
   * @param {string} [options.twoFactorPasscode]
   * @param {string} [options.token]
   * @param {string} options.clientId
   * @param {number} [options.timeout]
   * @param {boolean} [options.retry]
   * @param {object} [options.retryOptions]
   * @param {function} [options.logger]
   */
  constructor(options) {
    super(options)
  }
}
