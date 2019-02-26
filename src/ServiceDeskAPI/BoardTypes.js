/**
 * Created by kgrube on 1/31/2019
 */


/**
 * @private
 */
const inherits = require('util').inherits;
const ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} BoardType
 * @property id
 * @property name
 * @property category [Reactive, Proactive]
 * @property defaultFlag
 * @property inactiveFlag
 * @property requestForChangeFlag
 * @property integrationXref
 * @property board
 * @property location
 * @property department
 * @property {InfoHref} _info
 */

/**
 *
 * @param {CWOptions} options
 * @constructor
 */
function BoardTypes(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(BoardTypes, ConnectWise);


/**
 *
 * @param id
 * @param {Params} params
 * @returns {Promise<BoardType[]>}
 */
BoardTypes.prototype.getTypes = function (id, params) {
  return this.api(`/service/boards/${id}/types`, 'GET', params);
};


/**
 *
 * @param boardId
 * @param {BoardType} type
 * @returns {Promise<BoardType>}
 */
BoardTypes.prototype.createType = function (boardId, type) {
  return this.api(`/service/boards/${boardId}/types`, 'POST', type);
};


/**
 *
 * @param boardId
 * @param typeId
 * @returns {Promise<UsageCount[]>}
 */
BoardTypes.prototype.getTypeUsagesCount = function (boardId, typeId) {
  return this.api(`/service/boards/${boardId}/types/${typeId}/usages`, 'GET');
};


/**
 *
 * @param boardId
 * @param typeId
 * @returns {Promise<Usage[]>}
 */
BoardTypes.prototype.getTypeUsages = function (boardId, typeId) {
  return this.api(`/service/boards/${boardId}/types/${typeId}/usages/list`, 'GET', params);
};


/**
 *
 * @param id
 * @param {Params} params
 * @returns {Promise<Count>}
 */
BoardTypes.prototype.getTypesCount = function (id, params) {
  return this.api(`/service/boards/${id}/types/count`, 'GET', params);
};


/**
 *
 * @param boardId
 * @param typeId
 * @returns {Promise<BoardType>}
 */
BoardTypes.prototype.getTypeById = function (boardId, typeId) {
  return this.api(`/service/boards/${boardId}/types/${typeId}`, 'GET');
};


/**
 *
 * @param boardId
 * @param typeId
 * @returns {Promise<DeleteResponse>}
 */
BoardTypes.prototype.deleteType = function (boardId, typeId) {
  return this.api(`/service/boards/${boardId}/types/${typeId}`, 'DELETE');
};


/**
 *
 * @param boardId
 * @param typeId
 * @param {BoardType} type
 * @returns {Promise<BoardType>}
 */
BoardTypes.prototype.replaceType = function (boardId, typeId, type) {
  return this.api(`/service/boards/${boardId}/types/${typeId}`, 'PUT', type);
};


/**
 *
 * @param boardId
 * @param typeId
 * @param {Operations[]} ops
 * @returns {Promise<BoardType>}
 */
BoardTypes.prototype.updateType = function (boardId, typeId, ops) {
  return this.api(`/service/boards/${boardId}/types/${typeId}`, 'PATCH', ops);
};

module.exports = BoardTypes;
