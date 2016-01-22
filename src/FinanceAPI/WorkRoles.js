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
 * @typedef {object} WorkRole
 * @property {number} id
 * @property {WorkRoleHref} workRole
 * @property {number} locationId
 * @property {string} rateType ['AdjAmount', 'Custom', 'Multiplier']
 * @property {number} rate
 * @property {number} limitTo
 * @property {string} effectiveDate
 * @property {string} endingDate
 * @property {number} agreementId
 * @property {object} _info
 */

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function WorkRoles(options) {
    ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(WorkRoles, ConnectWise);

/**
 * GET
 * @param agreementId
 * @param {Params} params
 * @returns {promise|WorkRole[]}
 */
WorkRoles.prototype.getWorkRoles = function(agreementId, params){
    return this.api('/finance/agreements/' + agreementId + '/workroles', 'GET', params);
};

/**
 * POST
 * @param agreementId
 * @param {WorkRole} workRole
 * @returns {promise|WorkRole}
 */
WorkRoles.prototype.createWorkRole = function(agreementId, workRole){
    return this.api('/finance/agreements/' + agreementId + '/workroles', 'POST', workRole);
};

/**
 * GET
 * @param agreementId
 * @param {ParamsConditions} params
 * @returns {promise|Count}
 */
WorkRoles.prototype.getWorkRolesCount = function(agreementId, params){
    return this.api('/finance/agreements/' + agreementId + '/workroles/count', 'GET', params);
};

/**
 * DELETE
 * @param agreementId
 * @param workRoleId
 * @returns {promise|DeleteResponse}
 */
WorkRoles.prototype.deleteWorkRoleById = function(agreementId, workRoleId){
    return this.api('/finance/agreements/' + agreementId + '/workroles/' + workRoleId, 'DELETE');
};

/**
 * GET
 * @param agreementId
 * @param workRoleId
 * @returns {promise|WorkRole}
 */
WorkRoles.prototype.getWorkRoleById = function(agreementId, workRoleId){
    return this.api('/finance/agreements/' + agreementId + '/workroles/' + workRoleId, 'GET');
};

/**
 * PATCH
 * @param agreementId
 * @param workRoleId
 * @param {Operations} operations
 * @returns {promise|WorkRole}
 */
WorkRoles.prototype.updateWorkRole = function(agreementId, workRoleId, operations){
    return this.api('/finance/agreements/' + agreementId + '/workroles/' + workRoleId, 'PATCH', operations);
};

/**
 * PUT
 * @param agreementId
 * @param workRoleId
 * @param {WorkRole} workRole
 * @returns {promise|WorkRole}
 */
WorkRoles.prototype.replaceWorkRole = function(agreementId, workRoleId, workRole){
    return this.api('/finance/agreements/' + agreementId + '/workroles/' + workRoleId, 'PUT', workRole);
};

/**
 *
 * @type {WorkRoles}
 */
module.exports = WorkRoles;