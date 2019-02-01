/**
 * Created by kgrube on 1/31/2019
 */


/**
 * @private
 */
var inherits = require('util').inherits,
  ConnectWise = require('../ConnectWise.js');


/**
 * @typedef {Object} BoardItem
 * @property id
 * @property name
 * @property inactiveFlag added in 2019.1
 * @property {BoardHref} board added in 2019.1
 * @property boardId removed in 2019.1
 */

/**
 *
 * @param {CWOptions} options
 * @constructor
 */
function BoardItems(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(BoardItems, ConnectWise);


/**
 *
 * @param id
 * @param {Params} params
 * @returns {Promise<BoardItem[]>}
 */
BoardItems.prototype.getItems = function (id, params) {
  return this.api(`/service/boards/${id}/items`, 'GET', params);
};


/**
 *
 * @param boardId
 * @param {BoardItem} item
 * @returns {Promise<BoardItem>}
 */
BoardItems.prototype.createItem = function (boardId, item) {
  return this.api(`/service/boards/${boardId}/items`, 'POST', item);
};


/**
 *
 * @param boardId
 * @param itemId
 * @returns {Promise<UsageCount[]>}
 */
BoardItems.prototype.getItemUsagesCount = function (boardId, itemId) {
  return this.api(`/service/boards/${boardId}/items/${itemId}/usages`, 'GET');
};


/**
 *
 * @param boardId
 * @param itemId
 * @returns {Promise<Usage[]>}
 */
BoardItems.prototype.getItemUsages = function (boardId, itemId) {
  return this.api(`/service/boards/${boardId}/items/${itemId}/usages/list`, 'GET', params);
};


/**
 *
 * @param id
 * @param {Params} params
 * @returns {Promise<Count>}
 */
BoardItems.prototype.getItemsCount = function (id, params) {
  return this.api(`/service/boards/${id}/items/count`, 'GET', params);
};


/**
 *
 * @param boardId
 * @param itemId
 * @returns {Promise<BoardItem>}
 */
BoardItems.prototype.getItemById = function (boardId, itemId) {
  return this.api(`/service/boards/${boardId}/items/${itemId}`, 'GET');
};


/**
 *
 * @param boardId
 * @param itemId
 * @returns {Promise<DeleteResponse>}
 */
BoardItems.prototype.deleteItem = function (boardId, itemId) {
  return this.api(`/service/boards/${boardId}/items/${itemId}`, 'DELETE');
};


/**
 *
 * @param boardId
 * @param itemId
 * @param {BoardItem} item
 * @returns {Promise<BoardItem>}
 */
BoardItems.prototype.replaceItem = function (boardId, itemId, item) {
  return this.api(`/service/boards/${boardId}/items/${itemId}`, 'PUT', item);
};


/**
 *
 * @param boardId
 * @param itemId
 * @param {Operations[]} ops
 * @returns {Promise<BoardItem>}
 */
BoardItems.prototype.updateItem = function (boardId, itemId, ops) {
  return this.api(`/service/boards/${boardId}/items/${itemId}`, 'PATCH', ops);
};

module.exports = BoardItems;
