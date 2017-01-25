/**
 * Created by kgrube on 12/20/2015.
 * @author kgrube
 */

/**
 *
 * @param options
 * @returns {{TimeEntries: TimeEntries}}
 * @constructor
 */
function TimeAPI(options) {
  var _TimeEntries = require('./TimeEntries');
  return {
    TimeEntries: new _TimeEntries(options)
  }
}

/**
 *
 * @type {TimeEntries}
 */
module.exports = TimeAPI;