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
  const _Tickets = require('./Tickets');
  const _Boards = require('./Boards');
  const _Priorities = require('./Priorities');
  const _BoardTeams = require('./BoardTeams');
  const _Statuses = require('./Statuses');
  const _ServiceNotes = require('./ServiceNotes');
  const _BoardItems = require('./BoardItems');
  const _BoardTypes = require('./BoardTypes');
  const _BoardSubTypes = require('./BoardSubTypes');

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
