/**
 * Created by kgrube on 1/22/2016.
 */

/**
 * @private
 */
var Q = require('q'),
    inherits = require('util').inherits,
    ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} AgreementSite
 * @property {number} id
 * @property {CompanyHref} company
 * @property {SiteHref} site
 * @property {number} agreementId
 * @property {object} _info
 */

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function AgreementSites(options) {
    ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(AgreementSites, ConnectWise);

/**
 * GET
 * @param agreementId
 * @param {Params} params
 * @returns {promise|AgreementSite[]}
 */
AgreementSites.prototype.getAgreementSites = function(agreementId, params){
    return this.api('/finance/agreements/' + agreementId + '/sites', 'GET', params);
};

/**
 * POST
 * @param agreementId
 * @param {AgreementSite} site
 * @returns {promise|AgreementSite}
 */
AgreementSites.prototype.createAgreementSite = function(agreementId, site){
    return this.api('/finance/agreements/' + agreementId + '/sites', 'POST', site);
};

/**
 * GET
 * @param agreementId
 * @param {ParamsConditions} params
 * @returns {promise|Count}
 */
AgreementSites.prototype.getAgreementSitesCount = function(agreementId, params){
    return this.api('/finance/agreements/' + agreementId + '/sites/count', 'GET', params);
};

/**
 * DELETE
 * @param agreementId
 * @param siteId
 * @returns {promise|DeleteResponse}
 */
AgreementSites.prototype.deleteAgreementSiteById = function(agreementId, siteId){
    return this.api('/finance/agreements/' + agreementId + '/sites/' + siteId, 'DELETE');
};

/**
 * GET
 * @param agreementId
 * @param siteId
 * @returns {promise|AgreementSite}
 */
AgreementSites.prototype.getAgreementSiteById = function(agreementId, siteId){
    return this.api('/finance/agreements/' + agreementId + '/sites/' + siteId, 'GET');
};

/**
 * PATCH
 * @param agreementId
 * @param siteId
 * @param {Operations} operations
 * @returns {promise|AgreementSite}
 */
AgreementSites.prototype.updateAgreementSite = function(agreementId, siteId, operations){
    return this.api('/finance/agreements/' + agreementId + '/sites/' + siteId, 'PATCH', operations);
};

/**
 * PUT
 * @param agreementId
 * @param siteId
 * @param {AgreementSite} site
 * @returns {promise|AgreementSite}
 */
AgreementSites.prototype.replaceAgreementSite = function(agreementId, siteId, site){
    return this.api('/finance/agreements/' + agreementId + '/sites/' + siteId, 'PUT', site);
};

/**
 *
 * @type {AgreementSites}
 */
module.exports = AgreementSites;