/**
 * Created by kgrube on 12/15/2015.
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
function Tickets(options) {
    ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(Tickets, ConnectWise);

/**
 * GET
 * @param {object} params
 * @param {string} params.conditions
 * @param {string} params.orderBy
 * @param {number} params.page
 * @param {number} params.pageSize
 * @returns {*|promise}
 */
Tickets.prototype.getTickets = function (params) {
    return this.api('/service/tickets', 'GET', params);
};

/**
 * GET
 * @param {string|number} id ticketNbr
 * @returns {*|promise}
 */
Tickets.prototype.getTicketById = function (id) {
    return this.api('/service/tickets/' + id, 'GET');
};

/**
 * POST
 * @param {object} params ticket data
 * @returns {*|promise}
 */
Tickets.prototype.createTicket = function (params) {
    return this.api('/service/tickets', 'POST', params);
};

/**
 * PATCH
 * @param {number} id
 * @param {object} params
 * @param {string} params.op
 * @param {string} params.path
 * @param {string} params.value
 * @returns {*|promise}
 */
Tickets.prototype.updateTicket = function (id, params) {
    return this.api('/service/tickets/' + id, 'PATCH', params);
};

/**
 * GET
 * @param {object} params
 * @param {string} params.conditions
 * @returns {*|promise}
 */
Tickets.prototype.getTicketsCount = function (params) {
    return this.api('/service/tickets/count', 'GET', params);
};

/**
 * DELETE
 * @param {string|number} id
 * @returns {*|promise}
 */
Tickets.prototype.deleteTicketsById = function (id) {
    return this.api('/service/tickets/' + id, 'DELETE');
};

/**
 * PUT
 * @param id
 * @param {{}} params ticket
 * @returns {*|promise}
 */
Tickets.prototype.replaceTicket = function (id, params) {
    return this.api('/service/tickets/' + id, 'PUT', params);
};

/**
 * GET
 * @param id
 * @param {object} [params]
 * @param params.page
 * @param params.pageSize
 * @returns {*|promise}
 */
Tickets.prototype.getTicketActivities = function (id, params) {
    return this.api('/service/tickets/' + id + '/activities', 'GET', params);
};

/**
 * GET
 * @param {number|string} id
 * @returns {*|promise}
 */
Tickets.prototype.getTicketActivitiesCount = function (id) {
    return this.api('/service/tickets/' + id + '/activities/count', 'GET');
};

/**
 * GET
 * @param {number|string} id
 * @param {object} [params]
 * @param params.page
 * @param params.pageSize
 * @returns {*|promise}
 */
Tickets.prototype.getTicketTimeEntries = function(id, params){
    return this.api('/service/tickets/' + id + '/timeentries', 'GET', params);
};

/**
 * GET
 * @param id
 * @returns {*|promise}
 */
Tickets.prototype.getTicketTimeEntriesCount = function(id){
    return this.api('/service/tickets/' + id + '/timeentries/count', 'GET');
};



/**
 * POST
 * @param id
 * @param params
 * @param {number|string} params.id
 * @param {string} params.deviceIdentifier
 * @param {{}} params._info
 */
Tickets.prototype.createConfigurationAssociation = function(id, params){
    return this.api('/service/tickets/' + id + '/configurations', 'POST', params);
};

/**
 *
 * @type {Tickets}
 */
module.exports = Tickets;