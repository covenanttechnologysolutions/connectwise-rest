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
 * @property {BoardItems} BoardItems
 * @property {BoardTypes} BoardTypes
 * @property {BoardSubTypes} BoardSubTypes
 */

/**
 *
 * @param {CWOptions} options
 * @returns {ServiceDeskAPI}
 * @constructor
 */
function ServiceDeskAPI(options) {
  var _Tickets = require('./Tickets'),
    _Boards = require('./Boards'),
    _Priorities = require('./Priorities'),
    _BoardTeams = require('./BoardTeams'),
    _Statuses = require('./Statuses'),
    _ServiceNotes = require('./ServiceNotes'),
    _BoardItems = require('./BoardItems'),
    _BoardTypes = require('./BoardTypes'),
    _BoardSubTypes = require('./BoardSubTypes');

  return {
    Tickets: new _Tickets(options),
    Boards: new _Boards(options),
    BoardTeams: new _BoardTeams(options),
    Priorities: new _Priorities(options),
    Statuses: new _Statuses(options),
    ServiceNotes: new _ServiceNotes(options),
    BoardItems: new _BoardItems(options),
    BoardTypes: new _BoardTypes(options),
    BoardSubTypes: new _BoardSubTypes(options),
  };
}

/**
 *
 * @type {ServiceDeskAPI}
 */
module.exports = ServiceDeskAPI;
