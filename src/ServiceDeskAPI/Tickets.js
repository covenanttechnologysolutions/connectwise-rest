/**
 * Created by kgrube on 12/15/2015.
 * @author kgrube
 */

var Q = require('q'),
    inherits = require('util').inherits,
    ConnectWise = require('../ConnectWise.js');

/**
 *
 * @param {object} options
 * @param {string} options.companyId
 * @param {string} options.publicKey
 * @param {string} options.privateKey
 * @param {string} options.companyUrl
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
 * @param {string} [params.orderBy]
 * @param {number} [params.page]
 * @param {number} [params.pageSize]
 * @returns {Ticket[]|promise}
 */
Tickets.prototype.getTickets = function (params) {
    return this.api('/service/tickets', 'GET', params);
};

/**
 * GET
 * @param {string|number} id ticketNbr
 * @returns {Ticket|promise}
 */
Tickets.prototype.getTicketById = function (id) {
    return this.api('/service/tickets/' + id, 'GET');
};

/**
 * POST
 * @param {object|Ticket} params ticket data
 * @param {string} params.body
 * @param {object} params.board
 * @param {string} params.board.name
 * @param {object} params.company
 * @param {string} params.company.identifier The CompanyID in ConnectWise
 * @param {string} params.summary
 * @param {string} [params.initialDescription]
 * @returns {Ticket|promise} The created ticket, or errors if any occured
 */
Tickets.prototype.createTicket = function (params) {
    return this.api('/service/tickets', 'POST', params);
};

/**
 * PATCH
 * @param {number} id
 * @param {object[]} params
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
 * @param {string} [params.conditions] Conditions string, e.g. 'Summary like "%blah%" AND board/name = "Service Board"'
 * @returns {number|promise} The number of tickets matching the conditions
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
 * @returns {number|promise} The number of activities associated with ticket number id
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
 * @param {number|string} id
 * @returns {number|promise} The count of time entries attached to ticket id
 */
Tickets.prototype.getTicketTimeEntriesCount = function(id){
    return this.api('/service/tickets/' + id + '/timeentries/count', 'GET');
};



/**
 * POST
 * @param {number|string} id
 * @param {object} params
 * @param {number|string} params.id
 * @param {string} params.deviceIdentifier
 * @param {object} params._info
 */
Tickets.prototype.createConfigurationAssociation = function(id, params){
    return this.api('/service/tickets/' + id + '/configurations', 'POST', params);
};

/**
 *
 * @type {Tickets}
 */
module.exports = Tickets;