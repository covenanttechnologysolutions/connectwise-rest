/**
 * Created by kgrube on 1/29/2019
 */

/**
 * @private
 */
const inherits = require('util').inherits;
const ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {Object} CompanyTypeInfo
 * @property {number} id
 * @property  name
 * @property _info
 */


/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function CompanyTypeInfos(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(CompanyTypeInfos, ConnectWise);

/**
 *
 * @param {Params} params
 * @returns {Promise<CompanyTypeInfo[]>}
 */
CompanyTypeInfos.prototype.getCompanyTypeInfos = function (params) {
  return this.api('/company/companies/info/types', 'GET', params);
};

/**
 *
 * @param {Params} params
 * @returns {Promise<CompanyTypeInfo[]>}
 */
CompanyTypeInfos.prototype.getCompanyTypeInfosCount = function (params) {
  return this.api('/company/companies/info/types/count', 'GET', params);
};

/**
 *
 * @param id
 * @returns {Promise<CompanyTypeInfo>}
 */
CompanyTypeInfos.prototype.getCompanyTypeInfoById = function (id) {
  return this.api(`/company/companies/info/types/${id}`, 'GET', params);
};

module.exports = CompanyTypeInfos;
