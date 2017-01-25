/**
 * Created by kgrube on 12/15/2015.
 * @author kgrube
 */

/**
 * @typedef {object} ServiceDeskAPI
 * @property {Tickets} Tickets
 * @property {Boards} Boards
 * @property {BoardTeams} BoardTeams
 * @property {Priorities} Priorities
 * @property {Statuses} Statuses
 * @property {ServiceNotes} ServiceNotes
 */

/**
 *
 * @param {CWOptions} options
 * @returns {{Tickets: Tickets, Boards: Boards, BoardTeams: BoardTeams, Priorities: Priorities, Statuses: Statuses, ServiceNotes: ServiceNotes}}
 * @constructor
 */
function ServiceDeskAPI(options) {
  var _Tickets = require('./Tickets'),
    _Boards = require('./Boards'),
    _Priorities = require('./Priorities'),
    _BoardTeams = require('./BoardTeams'),
    _Statuses = require('./Statuses'),
    _ServiceNotes = require('./ServiceNotes');

  return {
    Tickets: new _Tickets(options),
    Boards: new _Boards(options),
    BoardTeams: new _BoardTeams(options),
    Priorities: new _Priorities(options),
    Statuses: new _Statuses(options),
    ServiceNotes: new _ServiceNotes(options)
  }
}

/**
 *
 * @type {ServiceDeskAPI}
 */
module.exports = ServiceDeskAPI;
