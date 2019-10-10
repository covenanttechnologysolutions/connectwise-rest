/**
 * @typedef {object} ProcurementAPI
 * @property CatalogItems
 */

/**
 * @param options
 * @returns {{CatalogItems: CatalogItems}}
 * @constructor
 */
function ProcurementAPI(options) {
  const _CatalogItems = require('./CatalogItems');
  return {
    CatalogItems: new _CatalogItems(options)
  }
}

/**
 *
 * @type {CatalogItems}
 */
module.exports = ProcurementAPI;
