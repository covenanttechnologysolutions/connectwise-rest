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
 * @param {CWOptions} options
 * @returns {{Members: Members, Reports: Reports}}
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

/**
 *
 * @type {SystemAPI}
 */
module.exports = SystemAPI;
