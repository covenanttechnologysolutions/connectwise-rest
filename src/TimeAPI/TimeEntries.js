/**
 * Created by kgrube on 12/20/2015.
 * @author kgrube
 */

var Q = require('q'),
    inherits = require('util').inherits,
    ConnectWise = require('../ConnectWise.js');

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
 * @param {object} params
 * @param {string} params.conditions
 * @param {string} params.orderBy
 * @param {number} params.page
 * @param {number} params.pageSize
 */
TimeEntries.prototype.getTimeEntries = function (params) {
    this.api('/')
};

/**
 *
 * @type {TimeEntries}
 */
module.exports = TimeEntries;