/**
 * @private
 */
var inherits = require('util').inherits,
  ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} BoardTeam
 * @property {number} id
 * @property {string} name
 * @property {MemberHref} teamLeader
 * @property {number[]} members
 * @property {boolean} defaultFlag
 * @property {boolean} notifyOnTicketDelete
 * @property {number} boardId
 * @property {number} locationId
 * @property {number} businessUnitId
 * @property {object} _info
 */

/**
 *
 * @param {CWOptions} options
 * @constructor
 */
function BoardTeams(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(BoardTeams, ConnectWise);

/**
 * GET
 * @param   boardId
 * @param   {Params} params
 * @returns {Promise<BoardTeam[]>}
 */
BoardTeams.prototype.getBoardTeams = function (boardId, params) {
  return this.api('/service/boards/' + boardId + '/teams', 'GET', params);
};

/**
 * POST
 * @param   boardId
 * @param   {BoardTeam} team
 * @returns {Promise<BoardTeam>}
 */
BoardTeams.prototype.createBoardTeam = function (boardId, team) {
  return this.api('/service/boards/' + boardId + '/teams', 'POST', team);
};

/**
 * GET
 * @param   boardId
 * @param   {Params} params
 * @returns {Promise<Count>}
 */
BoardTeams.prototype.getBoardTeamsCount = function (boardId, params) {
  return this.api('/service/boards/' + boardId + '/teams/count', 'GET', params);
};

/**
 * DELETE
 * @param   boardId
 * @param   teamId
 * @returns {Promise<DeleteResponse>}
 */
BoardTeams.prototype.deleteBoardTeamById = function (boardId, teamId) {
  return this.api('/service/boards/' + boardId + '/teams/' + teamId, 'DELETE');
};

/**
 * GET
 * @param   boardId
 * @param   teamId
 * @returns {Promise<BoardTeam>}
 */
BoardTeams.prototype.getBoardTeamById = function (boardId, teamId) {
  return this.api('/service/boards/' + boardId + '/teams/' + teamId, 'GET');
};

/**
 * PATCH
 * @param   boardId
 * @param   teamId
 * @param   {Operations[]} operations
 * @returns {Promise<BoardTeam>}
 */
BoardTeams.prototype.updateBoardTeamById = function (boardId, teamId, operations) {
  return this.api('/service/boards/' + boardId + '/teams/' + teamId, 'PATCH', operations);
};

/**
 * PUT
 * @param   boardId
 * @param   teamId
 * @param   {BoardTeam} team
 * @returns {Promise<BoardTeam>}
 */
BoardTeams.prototype.replaceBoardTeamById = function (boardId, teamId, team) {
  return this.api('/service/boards/' + boardId + '/teams/' + teamId, 'PUT', team);
};

/**
 *
 * @type {BoardTeams}
 */
module.exports = BoardTeams;
