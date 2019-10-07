/**
 * @private
 */
const inherits = require('util').inherits;
const ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} CatalogItem
 * @property {number} id
 * @property {string} identifier
 * @property {string} description
 * @property {boolean} inactiveFlag
 * @property {ProductSubCategoryHref} subcategory
 * @property {ProductTypeHref} type
 * @property {string} productClass ['Agreement', 'Bundle', 'Inventory', 'NonInventory', 'Service']
 * @property {boolean} serializedFlag
 * @property {boolean} serializedCostFlag
 * @property {boolean} phaseProductFlag
 * @property {UnitOfMeasureHref} unitOfMeasure
 * @property {number} minStockLevel
 * @property {number} price
 * @property {number} cost
 * @property {string} priceAttribute ['FixedFee', 'NotToExceed', 'TimeAndMaterials', 'OverrideRate']
 * @property {boolean} taxableFlag
 * @property {boolean} dropshipFlag
 * @property {boolean} specialOrderFlag
 * @property {string} customerDescription
 * @property {ManufacturerHref} manufacturer
 * @property {CompanyHref} vendor
 * @property {string} vendorSku
 * @property {string} notes
 * @property {string} integrationXRef
 * @property {SLAHref} sla
 * @property {EntityTypeHref} entityType
 * @property {boolean} recurringFlag
 * @property {number} recurringRevenue
 * @property {number} recurringCost
 * @property {boolean} recurringOneTimeFlag
 * @property {BillingCycleHref} recurringBillCycle
 * @property {string} recurringCycleType ['CalendarYear', 'ContractYear']
 * @property {string} dateEntered
 * @property {boolean} calculatedPriceFlag
 * @property {boolean} calculatedCostFlag
 * @property {number} calculatedPrice
 * @property {number} calculatedCost
 */

/**
 *
 * @param options
 * @constructor
 */
function CatalogItems(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(CatalogItems, ConnectWise);

/**
 * GET
 * @param {Params} params
 * @returns {Promise<CatalogItem>}
 */
CatalogItems.prototype.getCatalog = function (params) {
  return this.api('/procurement/catalog', 'GET', params);
};

/**
 * PATCH
 * @param {number} id
 * @param {Operations[]} operations
 * @param {string} operations.op the operation to perform, possible values: ['replace', ?]
 * @param {string} operations.path
 * @param {string|number} operations.value
 * @returns {Promise<CatalogItem>} The updated catalog item
 */
CatalogItems.prototype.updateCatalog = function (id, operations) {
  return this.api(`/procurement/catalog/${id}`, 'PATCH', operations);
};

/**
 * POST
 * @param {CatalogItem} CatalogItem
 * @returns {Promise<CatalogItem>} The created catalog item
 */
CatalogItems.prototype.createCatalog = function(catalogItem) {
  return this.api('/procurement/catalog', 'POST', catalogItem);
};

/**
 *
 * @type {CatalogItems}
 */
module.exports = CatalogItems;
