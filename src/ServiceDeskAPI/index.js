/**
 * Created by kgrube on 12/15/2015.
 * @author kgrube
 */

/**
 * @typedef {object} ServiceDeskAPI
 * @property {Tickets} Tickets
 * @property {Boards} Boards
 * @property {Statuses} Statuses
 * @property {ServiceNotes} ServiceNotes
 */

/**
 *
 * @param options
 * @returns {ServiceDeskAPI}
 * @constructor
 */
function ServiceDeskAPI(options) {
    var _Tickets = require('./Tickets'),
        _Boards = require('./Boards'),
        _Statuses = require('./Statuses'),
        _ServiceNotes = require('./ServiceNotes');

    return {
        Tickets: new _Tickets(options),
        Boards: new _Boards(options),
        Statuses: new _Statuses(options),
        ServiceNotes: new _ServiceNotes(options)
    }
}

module.exports = ServiceDeskAPI;