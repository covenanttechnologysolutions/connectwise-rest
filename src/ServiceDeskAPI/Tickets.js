/**
 * Created by kgrube on 12/15/2015.
 * @author kgrube
 */

var Q = require('q'),
    request = require('request'),
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
 */
Tickets.prototype.getTickets = function (params) {
    console.log('ServiceDeskAPI Tickets getTickets');
};

/**
 * GET
 * @param {string|number} id ticketNbr
 * @returns {*|promise}
 */
Tickets.prototype.getTicketById = function (id) {
    var deferred = Q.defer();

    this.api('/service/tickets/' + id, 'GET', function (err, res) {
        if (err) {
            deferred.reject(err);
        } else {
            deferred.resolve(res);
        }
    });

    return deferred.promise;
};

/**
 * POST
 * @param {object} params
 * @param {object} params.ticket
 */
Tickets.prototype.createTicket = function (params) {

};

/**
 * PATCH
 * @param {number} id
 * @param {object} params
 * @param {string} params.op
 * @param {string} params.path
 * @param {string} params.value
 */
Tickets.prototype.updateTicket = function (id, params) {

};

/**
 *
 * @type {Tickets}
 */
module.exports = Tickets;