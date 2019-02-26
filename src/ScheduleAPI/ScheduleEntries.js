/**
 * Created by kgrube on 1/24/2017.
 */

/**
 * @private
 */
const inherits = require('util').inherits;
const ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} ScheduleEntry
 * @property id
 * @property objectId
 * @property name
 * @property {MemberHref} member
 * @property {ServiceLocationHref} where
 * @property dateStart
 * @property dateEnd
 * @property {ReminderHref} reminder
 * @property {ScheduleStatusHref} status
 * @property {ScheduleTypeHref} type
 * @property doneFlag
 * @property acknowledgedFlag
 * @property ownerFlag
 * @property allowScheduleConflictsFlag
 * @property addMemberToProjectFlag
 * @property projectRoleId
 * @property mobileGuid
 * @property closeDate
 * @property hours
 * @property {InfoHref} _info
 *
 */

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function ScheduleEntries(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(ScheduleEntries, ConnectWise);

/**
 * @param {Params} params
 * @returns {Promise<ScheduleEntry[]>}
 */
ScheduleEntries.prototype.getScheduleEntries = function (params) {
  return this.api('/schedule/entries', 'GET', params);
};

/**
 * @param {ScheduleEntry} scheduleEntry
 * @returns {Promise<ScheduleEntry>}
 */
ScheduleEntries.prototype.createSchedule = function (scheduleEntry) {
  return this.api('/schedule/entries', 'POST', scheduleEntry);
};

/**
 * @param {Params} params
 * @returns {Promise<Count>}
 */
ScheduleEntries.prototype.getScheduleEntriesCount = function (params) {
  return this.api('/schedule/entries/count', 'GET', params);
};

/**
 * @param id scheduleId
 * @returns {Promise<ScheduleEntry[]>}
 */
ScheduleEntries.prototype.getScheduleEntryById = function (id) {
  return this.api(`/schedule/entries/${id}`, 'GET');
};

/**
 * @param id scheduleId
 * @returns {Promise<ScheduleEntry[]>}
 */
ScheduleEntries.prototype.deleteById = function (id) {
  return this.api(`/schedule/entries/${id}`, 'DELETE');
};

/**
 * @param id scheduleId
 * @returns {Promise<ScheduleEntry[]>}
 */
ScheduleEntries.prototype.replaceSchedule = function (id) {
  return this.api(`/schedule/entries/${id}`, 'PUT');
};

/**
 * @param id scheduleId
 * @param {Operations[]} ops
 * @returns {Promise<ScheduleEntry[]>}
 */
ScheduleEntries.prototype.updateSchedule = function (id, ops) {
  return this.api(`/schedule/entries/${id}`, 'PATCH', ops);
};

/**
 *
 * @type {ScheduleEntries}
 */
module.exports = ScheduleEntries;
