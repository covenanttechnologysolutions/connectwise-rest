var inherits = require('util').inherits,
  ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} Activity
 * @property id
 * @property name
 * @property {object} type
 * @property type.id
 * @property type.name
 * @property {TypeHref} type._info
 * @property {object} company
 * @property company.id
 * @property company.identifier
 * @property company.name
 * @property {CompanyHref} company._info
 * @property {object} contact
 * @property contact.id
 * @property contact.name
 * @property {CompanyHref} company._info
 * @property email
 * @property {object} status
 * @property status.id
 * @property status.name
 * @property {StatusHref} status._info
 * @property {object} opportunity
 * @property opportunity.id
 * @property opportunity.name
 * @property {OpportunityHref} opportunity._info
 * @property notes
 * @property dateStart
 * @property {object} assignedBy
 * @property assignedBy.id
 * @property assignedBy.identifier
 * @property assignedBy.name
 * @property {MemberHref} assignedBy._info
 * @property {object} assignTo
 * @property assignTo.id
 * @property assignTo.identifier
 * @property assignTo.name
 * @property {MemberHref} assignTo._info
 * @property notifyFlag
 * @property mobileGuid
 * @property {object} currency
 * @property currency.id
 * @property currency.symbol
 * @property currency.isoCode
 * @property currency.name
 * @property {CurrencyHref} currency._info
 * @property {InfoHref} _info
 */

/**
 * @typedef {object} ActivityType
 * @property id
 * @property name
 * @property points
 * @property defaultFlag
 * @property inactiveFlag
 * @property emailFlag
 * @property memoFlag
 * @property _info
 * @property _info.lastUpdated
 * @property _info.updatedBy
 */


/**
 * @property {object} ActivityStatus
 * @property id
 * @property name
 * @property defaultFlag
 * @property inactiveFlag
 * @property spawnFollowupFlag
 * @property closedFlag
 * @property _info
 * @property _info.lastUpdated
 */

/**
 *
 * @constructor
 */
function Activities(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(Activities, ConnectWise);

Activities.prototype.createActivity = function (activity) {
  return this.api('/sales/activities', 'POST', activity);
};

/**
 * GET
 * @param {Params} params
 * @returns {Promise<Activity[]>}
 */
Activities.prototype.getActivities = function (params) {
  return this.api('/sales/activities', 'GET', params);
};

/**
 * GET
 * @returns {Promise<ActivityType[]>}
 */
Activities.prototype.getActivityTypes = function (params) {
  return this.api('/sales/activities/types', 'GET', params);
};

/**
 *
 * @returns {Promise<ActivityStatus[]>}
 */
Activities.prototype.getActivityStatuses = function () {
  return this.api('/sales/activities/statuses', 'GET');
};

/**
 *
 * @param id
 * @returns {Promise<{DeleteResponse}>}
 */
Activities.prototype.deleteActivityById = function (id) {
  return this.api('/sales/activities/' + id, 'DELETE');
};

/**
 *
 * @param id
 * @param {Operations[]} ops
 * @returns {Promise<Activity>}
 */
Activities.prototype.updateActivity = function (id, ops) {
  return this.api('/sales/activities/' + id, 'PATCH', ops);
};

/**
 *
 * @param id
 * @returns {Promise<Activity>}
 */
Activities.prototype.getActivityById = function (id) {
  return this.api('/sales/activities/' + id, 'GET');
};

module.exports = Activities;


