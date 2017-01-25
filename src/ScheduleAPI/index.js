/**
 * Created by kgrube on 1/24/2017.
 */

/**
 * @param options
 * @returns {{ScheduleEntries: ScheduleEntries}}
 * @constructor
 */
function ScheduleAPI(options) {
  var _ScheduleEntries = require('./ScheduleEntries');

  return {
    ScheduleEntries: new _ScheduleEntries(options)
  }
}

/**
 *
 * @type {ScheduleAPI}
 */
module.exports = ScheduleAPI;
