/**
 * Created by kgrube on 1/22/2016.
 */

/**
 * @private
 */
const inherits = require('util').inherits;
const ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} Addition
 * @property {number} agreementId
 * @property {string} billCustomer
 * @property {string} cancelledDate
 * @property {string} description
 * @property {string} effectiveDate
 * @property {number} extCost
 * @property {number} extPrice
 * @property {number} id
 * @property {string} invoiceDescription
 * @property {number} lessIncluded
 * @property {number} margin
 * @property {ProductHref} product
 * @property {boolean} purchaseItemFlag
 * @property {number} quantity
 * @property serialNumber
 * @property {boolean} specialOrderFlag
 * @property {boolean} taxableFlag
 * @property {number} unitCost
 * @property {number} unitPrice
 * @property {string} uom unit of measurement ['each', 'monthly', 'yearly', 'quarterly']
 * @property {object} _info
 * @property {string} _info.lastUpdated
 * @property {string} _info.updatedBy
 */

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function Additions(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(Additions, ConnectWise);

/**
 * GET
 * Returns non-cancelled active additions to an agreement
 * @param agreementId
 * @param {Params} params
 * @returns {Promise<Addition[]>}
 */
Additions.prototype.getAdditions = function (agreementId, params) {
  return this.api(`/finance/agreements/${agreementId}/additions`, 'GET', params);
};

/**
 * POST
 * @param agreementId
 * @param {Addition} addition
 * @returns {Promise<Addition>}
 */
Additions.prototype.createAddition = function (agreementId, addition) {
  return this.api(`/finance/agreements/${agreementId}/additions`, 'POST', addition);
};

/**
 * GET
 * @param agreementId
 * @param {ParamsConditions} params
 * @returns {Promise<Count>}
 */
Additions.prototype.getAdditionsCount = function (agreementId, params) {
  return this.api(`/finance/agreements/${agreementId}/additions/count`, 'GET', params);
};

/**
 * DELETE
 * @param agreementId
 * @param additionId
 * @returns {Promise<DeleteResponse>}
 */
Additions.prototype.deleteAdditionById = function (agreementId, additionId) {
  return this.api(`/finance/agreements/${agreementId}/additions/${additionId}`, 'DELETE');
};

/**
 * GET
 * @param agreementId
 * @param additionId
 * @returns {Promise<Addition>}
 */
Additions.prototype.getAdditionById = function (agreementId, additionId) {
  return this.api(`/finance/agreements/${agreementId}/additions/${additionId}`, 'GET');
};

/**
 * PATCH
 * @param agreementId
 * @param additionId
 * @param {Operations[]} operations
 * @returns {Promise<Addition>}
 */
Additions.prototype.updateAddition = function (agreementId, additionId, operations) {
  return this.api(`/finance/agreements/${agreementId}/additions/${additionId}`, 'PATCH', operations);
};

/**
 * PUT
 * @param agreementId
 * @param additionId
 * @param {Addition} addition
 * @returns {Promise<Addition>}
 */
Additions.prototype.replaceAddition = function (agreementId, additionId, addition) {
  return this.api(`/finance/agreements/${agreementId}/additions/${additionId}`, 'PUT', addition);
};

/**
 *
 * @type {Additions}
 */
module.exports = Additions;
