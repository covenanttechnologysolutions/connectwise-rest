/**
 * Created by kgrube on 1/29/2019
 */

/**
 * @private
 */
var inherits = require('util').inherits,
  ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {Object} CompanyType
 * @property {boolean} defaultFlag
 * @property id
 * @property name
 * @property {boolean} serviceAlertFlag
 * @property {boolean} vendorFlag
 * @property _info
 */

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function CompanyTypes(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(CompanyTypes, ConnectWise);

/**
 *
 * @param {Params} params
 * @returns {Promise<CompanyType[]>}
 */
CompanyTypes.prototype.getCompanyTypes = function (params) {
  return this.api(`/company/companies/types`, 'GET', params);
};

/**
 *
 * @param id
 * @returns {Promise<CompanyType>}
 */
CompanyTypes.prototype.getCompanyTypeById = function (id) {
  return this.api(`/company/companies/types/${id}`, 'GET');
};


module.exports = CompanyTypes;
