/**
 * Created by kgrube on 1/8/2016.
 * @author kgrube
 */

/**
 * @private
 */
var Q = require('q'),
    inherits = require('util').inherits,
    ConnectWise = require('../ConnectWise.js');
/**
 * @typedef {object} Status
 * @property {number} id
 * @property {string} name
 * @property {number} boardId
 * @property {number} sortOrder
 * @property {boolean} displayOnBoard
 * @property {boolean} inactive
 * @property {boolean} closedStatus
 * @property {boolean} timeEntryNotAllowed
 * @property {boolean} defaultFlag
 * @property {string} escalationStatus ['NotResponded', 'Responded', 'Plan', 'Resolved', 'NoEscalation']
 * @property {object} _info
 *
 */

/**
 *
 * @param {object} options
 * @param {string} options.companyId
 * @param {string} options.publicKey
 * @param {string} options.privateKey
 * @param {string} options.companyUrl
 * @constructor
 */
function Statuses(options) {
    ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(Statuses, ConnectWise);

/**
 *
 * @param id
 * @param params
 * @returns {Status[]|promise}
 */
Statuses.prototype.getStatusesByBoardId = function (id, params) {
    return this.api('/service/boards/' + id + '/statuses', 'GET', params);
};

/**
 *
 * @type {Statuses}
 */
module.exports = Statuses;