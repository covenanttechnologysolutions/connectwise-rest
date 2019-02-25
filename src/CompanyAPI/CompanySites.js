/**
 * Created by jvohwinkel on 2/25/2019
 */

/**
 * @private
 */
var inherits = require('util').inherits,
    ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {Object} CompanySite
 * @property {number} id
 * @property {string} name
 * @property {string} addressLine1
 * @property {string} addressLine2
 * @property {string} city
 * @property {string} state
 * @property {string} zip
 * @property {CountryHref} country
 * @property {string} addressFormat
 * @property {string} phoneNumber
 * @property {string} faxNumber
 * @property {number} taxCodeId
 * @property entityType
 * @property {number} expenseReimbursement
 * @property {boolean} primaryAddressFlag
 * @property {boolean} defaultShippingFlag
 * @property {boolean} defaultBillingFlag
 * @property {boolean} defaultMailingFlag
 * @property {boolean} inactiveFlag
 * @property {uuid} mobileGuid
 * @property calendar
 * @property timeZone
 * @property {CompanyHref} company
 * @property {InfoHref} _info
 */

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function CompanySites(options) {
    ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(CompanySites, ConnectWise);

/**
 *
 * @param companyId
 * @returns {Promise<CompanySite[]>}
 */
CompanySites.prototype.getCompanySites = function (companyId) {
    return this.api(`/company/companies/${companyId}/sites`, 'GET');
};

/**
 *
 * @param companyId
 * @param id
 * @returns {Promise<CompanySite>}
 */
CompanySites.prototype.getCompanySiteById = function (companyId, id) {
    return this.api(`/company/companies/${companyId}/sites/${id}`, 'GET');
};

module.exports = CompanySites;