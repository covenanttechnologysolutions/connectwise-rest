/**
 * Created by kgrube on 1/23/2017.
 */

/**
 * @private
 */
const inherits = require('util').inherits;
const ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} CompanyTeam
 * @property id
 * @property {CompanyHref} company
 * @property {TeamHref} teamRole
 * @property locationId
 * @property businessUnitId
 * @property {ContactHref} contact
 * @property {MemberHref} member
 * @property accountManagerFlag
 * @property techFlag
 * @property salesFlag
 * @property {InfoHref} _info
 *
 */

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function CompanyTeams(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(CompanyTeams, ConnectWise);

/**
 * @param id companyId
 * @param {Params} params
 * @returns {Promise<CompanyTeam[]>}
 */
CompanyTeams.prototype.getCompanyTeams = function (id, params) {
  return this.api(`/company/companies/${id}/teams`, 'GET', params);
};

/**
 * @param id companyId
 * @param {CompanyTeam} companyTeam
 * @returns {Promise<CompanyTeam>}
 */
CompanyTeams.prototype.createCompanyTeam = function (id, companyTeam) {
  return this.api(`/company/companies/${id}/teams`, 'POST', companyTeam);
};

/**
 * @param id companyId
 * @param {Params} params
 * @returns {Promise<Count[]>}
 */
CompanyTeams.prototype.getCompanyTeamsCount = function (id, params) {
  return this.api(`/company/companies/${id}/teams/count`, 'GET', params);
};

/**
 * @param id companyId
 * @param teamId
 * @returns {Promise<CompanyTeam>}
 */
CompanyTeams.prototype.getCompanyTeamById = function (id, teamId) {
  return this.api(`/company/companies/${id}/teams/${teamId}`, 'GET', params);
};

/**
 * @param id companyId
 * @param teamId
 * @returns {Promise<DeleteResponse>}
 */
CompanyTeams.prototype.deleteCompanyTeamById = function (id, teamId) {
  return this.api(`/company/companies/${id}/teams/${teamId}`, 'DELETE', params);
};

/**
 * @param id companyId
 * @param teamId
 * @param {CompanyTeam} companyTeam
 * @returns {Promise<CompanyTeam>}
 */
CompanyTeams.prototype.replaceCompanyTeam = function (id, teamId, companyTeam) {
  return this.api(`/company/companies/${id}/teams/${teamId}`, 'PUT', companyTeam);
};

/**
 * @param id companyId
 * @param teamId
 * @param {Operations[]} ops
 * @returns {Promise<CompanyTeam>}
 */
CompanyTeams.prototype.updateCompanyTeam = function (id, teamId, ops) {
  return this.api(`/company/companies/${id}/teams/${teamId}`, 'PATCH', ops);
};

/**
 *
 * @type {CompanyTeams}
 */
module.exports = CompanyTeams;
