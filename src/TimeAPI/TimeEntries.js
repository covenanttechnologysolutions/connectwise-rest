/**
 * Created by kgrube on 12/20/2015.
 * @author kgrube
 */

/**
 * @private
 */
var Q = require('q'),
    inherits = require('util').inherits,
    ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} TimeEntry
 * @property {number} id
 * @property {CompanyHref} company
 * @property {number} chargeToId
 * @property {string} chargeToType ['ServiceTicket', 'ProjectTicket', 'ChargeCode', 'Activity']
 * @property {MemberHref} member
 * @property {number} locationId
 * @property {number} businessUnitId
 * @property {WorkTypeHref} workType
 * @property {WorkRoleHref} workRole
 * @property {AgreementHref} agreement
 * @property {string} timeStart
 * @property {string} timeEnd
 * @property {number} hoursDeduct
 * @property {number} actualHours
 * @property {string} billableOption ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault']
 * @property {string} notes
 * @property {string} internalNotes
 * @property {boolean} addToDetailDescriptionFlag
 * @property {boolean} addToInternalAnalysisFlag
 * @property {boolean} addToResolutionFlag
 * @property {boolean} emailResourceFlag
 * @property {boolean} emailContactFlag
 * @property {boolean} emailCcFlag
 * @property {string} emailCc
 * @property {number} hoursBilled
 */

/**
 *
 * @param options
 * @constructor
 */
function TimeEntries(options) {
    ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(TimeEntries, ConnectWise);

/**
 * GET
 * @param {Params} params
 * @returns {TimeEntry|promise}
 */
TimeEntries.prototype.getTimeEntries = function (params) {
    return this.api('/time/entries', 'GET', params);
};

/**
 *
 * @param {TimeEntry} timeEntry
 * @returns {TimeEntry|promise}
 */
TimeEntries.prototype.createTimeEntry = function (timeEntry) {
    return this.api('/time/entries', 'POST', timeEntry);
};

/**
 *
 * @param {ParamsConditions} params
 * @returns {Count|promise}
 */
TimeEntries.prototype.getTimeEntriesCount = function (params) {
    return this.api('/time/entries/count', 'GET', params);
};

/**
 *
 * @param {number} id
 * @returns {promise}
 */
TimeEntries.prototype.deleteTimeEntryById = function (id) {
    return this.api('/time/entries/' + id, 'DELETE');
};

/**
 *
 * @param id
 * @returns {TimeEntry|promise}
 */
TimeEntries.prototype.getTimeEntryById = function(id){
    return this.api('/time/entries/' + id, 'GET');
};

/**
 *
 * @param id
 * @param {Operations} operations
 * @returns {TimeEntry|promise}
 */
TimeEntries.prototype.updateTimeEntry = function(id, operations){
    return this.api('/time/entries/' + id, 'PATCH', operations);
};

/**
 *
 * @param id
 * @param {TimeEntry|promise} timeEntry
 */
TimeEntries.prototype.replaceTimeEntry = function(id, timeEntry){
    return this.api('/time/entries/' + id, 'PUT', timeEntry);
};

/**
 *
 * @type {TimeEntries}
 */
module.exports = TimeEntries;