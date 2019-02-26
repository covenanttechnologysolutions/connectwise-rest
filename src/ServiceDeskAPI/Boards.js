/**
 * Created by kgrube on 12/24/2015.
 * @author kgrube
 */

/**
 * @private
 */
const inherits = require('util').inherits;
const ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} Board
 * @property {number} id
 * @property {string} name
 * @property {number} locationId
 * @property {number} businessUnitId
 * @property {boolean} inactive removed in 2019.1
 * @property {boolean} inactiveFlag added in 2019.1
 * @property {number} signOffTemplateId
 * @property {boolean} sendToContact
 * @property {number} contactTemplateId
 * @property {boolean} sendToResource
 * @property {number} resourceTemplateId
 * @property {object} _info
 *
 */

/**
 *
 * @param {CWOptions} options
 * @constructor
 */
function Boards(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(Boards, ConnectWise);

/**
 * GET
 * @param {Params} params
 * @returns {Promise<Board[]>}
 */
Boards.prototype.getBoards = function (params) {
  return this.api('/service/boards', 'GET', params);
};

/**
 * POST
 * @param {Board} board
 * @returns {Promise<Board[]>}
 */
Boards.prototype.createBoard = function (board) {
  return this.api('/service/boards', 'POST', board);
};

/**
 * GET
 * @param id
 * @returns {Promise<Board[]>}
 */
Boards.prototype.getBoardById = function (id) {
  return this.api(`/service/boards/${id}`, 'GET');
};

/**
 * GET
 * @param {ParamsConditions} params
 * @returns {Promise<Count>}
 */
Boards.prototype.getBoardsCount = function (params) {
  return this.api('/service/boards/count', 'GET', params);
};

/**
 * PATCH
 * @param id
 * @param {Operations[]} ops
 * @returns {Promise<Board>}
 */
Boards.prototype.updateBoard = function (id, ops) {
  return this.api(`/service/boards/${id}`, 'PATCH', ops);
};

/**
 *
 * @param id
 * @param {Board} board
 * @returns {Promise<Board>}
 */
Boards.prototype.replaceBoard = function (id, board) {
  return this.api(`/service/boards/${id}`, 'PUT', board);
};

/**
 *
 * @type {Boards}
 */
module.exports = Boards;
