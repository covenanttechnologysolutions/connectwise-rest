/**
 * Created by kgrube on 1/31/2019
 */

/**
 * @private
 */
const inherits = require('util').inherits;
const ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} BoardSubType
 * @property id
 * @property name
 * @property inactiveFlag
 * @property {Array} typeAssociationIds
 * @property addAllTypesFlag
 * @property {BoardHref} board
 * @property removeAllTypesFlag
 * @property {InfoHref} _info
 */

/**
 *
 * @param {CWOptions} options
 * @constructor
 */
function BoardSubTypes(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(BoardSubTypes, ConnectWise);


/**
 *
 * @param boardId
 * @param {Params} params
 * @returns {Promise<BoardSubType[]>}
 */
BoardSubTypes.prototype.getSubTypes = function (boardId, params) {
  return this.api(`/service/boards/${boardId}/subtypes`, 'GET', params);
};


/**
 *
 * @param boardId
 * @param {BoardSubType} subType
 * @returns {Promise<BoardSubType>}
 */
BoardSubTypes.prototype.createSubType = function (boardId, subType) {
  return this.api(`/service/boards/${boardId}/subtypes`, 'POST', subType);
};

/**
 *
 * @param id
 * @param {Params} params
 * @returns {Promise<Count>}
 */
BoardSubTypes.prototype.getSubTypesCount = function (id, params) {
  return this.api(`/service/boards/${id}/subtypes/count`, 'GET', params);
};


/**
 *
 * @param boardId
 * @param subTypeId
 * @returns {Promise<BoardSubType>}
 */
BoardSubTypes.prototype.getSubTypeById = function (boardId, subTypeId) {
  return this.api(`/service/boards/${boardId}/subtypes/${subTypeId}`, 'GET');
};


/**
 *
 * @param boardId
 * @param subTypeId
 * @returns {Promise<DeleteResponse>}
 */
BoardSubTypes.prototype.deleteSubType = function (boardId, subTypeId) {
  return this.api(`/service/boards/${boardId}/subtypes/${subTypeId}`, 'DELETE');
};


/**
 *
 * @param boardId
 * @param subTypeId
 * @param {BoardSubType} subType
 * @returns {Promise<BoardType>}
 */
BoardSubTypes.prototype.replaceType = function (boardId, subTypeId, subType) {
  return this.api(`/service/boards/${boardId}/subtypes/${subTypeId}`, 'PUT', subType);
};


/**
 *
 * @param boardId
 * @param subTypeId
 * @param {Operations[]} ops
 * @returns {Promise<BoardSubType>}
 */
BoardSubTypes.prototype.updateSubType = function (boardId, subTypeId, ops) {
  return this.api(`/service/boards/${boardId}/subtypes/${subTypeId}`, 'PATCH', ops);
};

module.exports = BoardSubTypes;
