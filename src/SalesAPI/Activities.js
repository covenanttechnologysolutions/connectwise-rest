var inherits = require('util').inherits,
  ConnectWise = require('../ConnectWise.js');

function Activities(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(Activities, ConnectWise);

Activities.prototype.createActivity = function(activity) {
  return this.api('/sales/activities', 'POST', activity)
}

/**
 * GET
 * @param {Params} params
 * @returns {Promise<Activity[]>}
 */
Activities.prototype.getActivities = function (params) {
  return this.api('/sales/activities', 'GET', params)
}

/**
 * GET
 * @returns {Promise<ActivityTypeResponse>}
 */
Activities.prototype.getActivityTypes = function (params) {
  return this.api('/sales/activities/types', 'GET', params);
};

Activities.prototype.getActivityStatuses = function() {
  return this.api('/sales/activities/statuses', 'GET')
}

module.exports = Activities;


