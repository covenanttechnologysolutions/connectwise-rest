/**
 * Created by kgrube on 1/24/2017.
 */

/**
 * @typedef {Object} ScheduleAPI
 * @property {ScheduleEntries} ScheduleEntries
 */

/**
 * @param options
 * @returns {ScheduleAPI}
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
