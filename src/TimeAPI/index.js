/**
 * Created by kgrube on 12/20/2015.
 * @author kgrube
 */

/**
 * @typedef {object} TimeAPI
 * @property TimeEntries
 */

/**
 * @param options
 * @returns {{TimeEntries: TimeEntries}}
 * @constructor
 */
function TimeAPI(options) {
  const _TimeEntries = require('./TimeEntries');
  return {
    TimeEntries: new _TimeEntries(options)
  }
}

/**
 *
 * @type {TimeAPI}
 */
module.exports = TimeAPI;
