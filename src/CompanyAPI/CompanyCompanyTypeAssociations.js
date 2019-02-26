/**
 * Created by kgrube on 1/29/2019
 */

/**
 * @private
 */
const inherits = require('util').inherits;
const ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {Object} CompanyTypeAssociation
 * @property {number} id
 * @property {CompanyTypeHref} type
 * @property {CompanyHref} company
 * @property _info
 */

/**
 * @typedef {Object} CompanyTypeHref
 * @property id
 * @property identifier
 * @property name
 * @property _info
 */

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function CompanyCompanyTypeAssociations(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(CompanyCompanyTypeAssociations, ConnectWise);

/**
 *
 * @param id
 * @param {Params} params
 * @returns {Promise<CompanyTypeAssociation[]>}
 */
CompanyCompanyTypeAssociations.prototype.getCompanyTypeAssociations = function (id, params) {
  return this.api(`/company/companies/${id}/typeAssociations`, 'GET', params);
};

/**
 *
 * @param id
 * @param {CompanyTypeAssociation} companyTypeAssociation
 * @returns {Promise<CompanyTypeAssociation>}
 */
CompanyCompanyTypeAssociations.prototype.createCompanyTypeAssociation = function (id, companyTypeAssociation) {
  return this.api(`/company/companies/${id}/typeAssociations`, 'POST', companyTypeAssociation);
};

/**
 *
 * @param id
 * @param params
 * @returns {Promise<Count>}
 */
CompanyCompanyTypeAssociations.prototype.getCompanyTypeAssociationsCount = function (id, params) {
  return this.api(`/company/companies/${id}/typeAssociations/count`, 'GET', params);
};

/**
 *
 * @param id
 * @param typeAssociationId
 * @returns {Promise<CompanyTypeAssociation>}
 */
CompanyCompanyTypeAssociations.prototype.getCompanyTypeAssociationById = function (id, typeAssociationId) {
  return this.api(`/company/companies/${id}/typeAssociations/${typeAssociationId}`, 'GET');
};

/**
 *
 * @param id
 * @param typeAssociationId
 * @returns {Promise<DeleteResponse>}
 */
CompanyCompanyTypeAssociations.prototype.deleteCompanyTypeAssociationById = function (id, typeAssociationId) {
  return this.api(`/company/companies/${id}/typeAssociations/${typeAssociationId}`, 'DELETE');
};

/**
 * @param id
 * @param typeAssociationId
 * @param newTypeAssociation
 * @returns {Promise<CompanyTypeAssociation>}
 */
CompanyCompanyTypeAssociations.prototype.replaceCompanyTypeAssociation = function (id, typeAssociationId, newTypeAssociation) {
  return this.api(`/company/companies/${id}/typeAssociations/${typeAssociationId}`, 'PUT', newTypeAssociation);
};

/**
 *
 * @param id
 * @param typeAssociationId
 * @param {Operations[]} operations
 * @returns {Promise<*>}
 */
CompanyCompanyTypeAssociations.prototype.updateCompanyTypeAssociation = function (id, typeAssociationId, operations) {
  return this.api(`/company/companies/${id}/typeAssociations/${typeAssociationId}`, 'PATCH', operations);
};


module.exports = CompanyCompanyTypeAssociations;
