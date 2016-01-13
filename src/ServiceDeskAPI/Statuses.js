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
 * @param boardId
 * @param {Params} params
 * @returns {Status[]|promise}
 */
Statuses.prototype.getStatusesByBoardId = function (boardId, params) {
    return this.api('/service/boards/' + boardId + '/statuses', 'GET', params);
};

/**
 *
 * @param boardId
 * @param {Status} status
 * @returns {Status|promise}
 */
Statuses.prototype.createStatuses = function (boardId, status) {
    return this.api('/service/boards/' + boardId + '/statuses', 'POST', status)
};

/**
 *
 * @param boardId
 * @returns {Count|promise}
 */
Statuses.prototype.getStatusesCount = function (boardId) {
    return this.api('/service/boards/' + boardId + '/statuses/count', 'GET');
};

/**
 *
 * @param boardId
 * @param statusId
 * @returns {DeleteResponse|promise}
 */
Statuses.prototype.deleteStatusById = function (boardId, statusId) {
    return this.api('/service/boards/' + boardId + '/statuses/' + statusId, 'DELETE')
};

/**
 *
 * @param boardId
 * @param statusId
 * @returns {Status|promise}
 */
Statuses.prototype.getStatusById = function (boardId, statusId) {
    return this.api('/service/boards/' + boardId + '/statuses/' + statusId, 'GET');
};

/**
 *
 * @param boardId
 * @param statusId
 * @param {Operations} operations
 * @returns {Status|promise}
 */
Statuses.prototype.updateStatus = function (boardId, statusId, operations) {
    return this.api('/service/boards/' + boardId + '/statuses/' + statusId, 'PATCH', operations);
};

/**
 *
 * @param boardId
 * @param statusId
 * @param {Status} status
 * @returns {Status|promise}
 */
Statuses.prototype.replaceStatuses = function (boardId, statusId, status) {
    return this.api('/service/boards/' + boardId + '/statuses/' + statusId, 'PUT', status);
};

/**
 *
 * @type {Statuses}
 */
module.exports = Statuses;