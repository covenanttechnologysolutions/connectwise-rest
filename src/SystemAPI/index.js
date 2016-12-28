/**
 * Created by kgrube on 7/14/2016.
 * @author kgrube
 */

/**
 * @typedef {object} SystemAPI
 * @property {Members} Members
 * @property {Reports} Reports
 */

/**
 *
 * @param options
 * @returns {SystemAPI}
 * @constructor
 */
function SystemAPI(options) {
  var _Members = require('./Members');
  var _Reports = require('./Reports');

  return {
    Members: new _Members(options),
    Reports: new _Reports(options)
  }
}

module.exports = SystemAPI;