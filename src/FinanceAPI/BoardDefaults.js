/**
 * Created by kgrube on 1/22/2016.
 */

/**
 * @private
 */
var inherits = require('util').inherits,
  ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} BoardDefault
 * @property {number} id
 * @property {BoardHref} board
 * @property {ServiceTypeHref} serviceType
 * @property {boolean} defaultFlag
 * @property {number} agreementId
 * @property {object} _info
 */

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function BoardDefaults(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(BoardDefaults, ConnectWise);

/**
 * GET
 * @param agreementId
 * @param {Params} params
 * @returns {Promise<BoardDefault[]>}
 */
BoardDefaults.prototype.getBoardDefaults = function (agreementId, params) {
  return this.api('/finance/agreements/' + agreementId + '/boardDefaults', 'GET', params);
};

/**
 * POST
 * @param agreementId
 * @param {BoardDefault} boardDefault
 * @returns {Promise<BoardDefault>}
 */
BoardDefaults.prototype.createBoardDefault = function (agreementId, boardDefault) {
  return this.api('/finance/agreements/' + agreementId + '/boardDefaults', 'POST', boardDefault);
};

/**
 * GET
 * @param agreementId
 * @param {ParamsConditions} params
 * @returns {Promise<Count>}
 */
BoardDefaults.prototype.getBoardDefaultsCount = function (agreementId, params) {
  return this.api('/finance/agreements/' + agreementId + '/boardDefaults/count', 'GET', params);
};

/**
 * DELETE
 * @param agreementId
 * @param boardDefaultId
 * @returns {Promise<DeleteResponse>}
 */
BoardDefaults.prototype.deleteBoardDefaultById = function (agreementId, boardDefaultId) {
  return this.api('/finance/agreements/' + agreementId + '/boardDefaults/' + boardDefaultId, 'DELETE');
};

/**
 * GET
 * @param agreementId
 * @param boardDefaultId
 * @returns {Promise<BoardDefault>}
 */
BoardDefaults.prototype.getBoardDefaultById = function (agreementId, boardDefaultId) {
  return this.api('/finance/agreements/' + agreementId + '/boardDefaults/' + boardDefaultId, 'GET');
};

/**
 * PATCH
 * @param agreementId
 * @param boardDefaultId
 * @param {Operations[]} operations
 * @returns {Promise<BoardDefault>}
 */
BoardDefaults.prototype.updateBoardDefault = function (agreementId, boardDefaultId, operations) {
  return this.api('/finance/agreements/' + agreementId + '/boardDefaults/' + boardDefaultId, 'PATCH', operations);
};

/**
 * PUT
 * @param agreementId
 * @param boardDefaultId
 * @param {BoardDefault} boardDefault
 * @returns {Promise<BoardDefault>}
 */
BoardDefaults.prototype.replaceBoardDefault = function (agreementId, boardDefaultId, boardDefault) {
  return this.api('/finance/agreements/' + agreementId + '/boardDefaults/' + boardDefaultId, 'PUT', boardDefault);
};

/**
 *
 * @type {BoardDefaults}
 */
module.exports = BoardDefaults;
