/**
 * Created by kgrube on 1/24/2017.
 */

/**
 * @typedef {Object} ScheduleAPI
 * @property {ScheduleEntries} ScheduleEntries
 * @property {ScheduleTypes} ScheduleTypes
 */

/**
 * @param options
 * @returns {ScheduleAPI}
 * @constructor
 */
function ScheduleAPI(options) {
  var _ScheduleEntries = require('./ScheduleEntries');
  var _ScheduleTypes = require('./ScheduleTypes');

  return {
    ScheduleEntries: new _ScheduleEntries(options),
    ScheduleTypes: new _ScheduleTypes(options)
  }
}

/**
 *
 * @type {ScheduleAPI}
 */
module.exports = ScheduleAPI;
