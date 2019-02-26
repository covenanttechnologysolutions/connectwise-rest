/**
 * Created by kgrube on 1/22/2016.
 */

/**
 * @private
 */
const inherits = require('util').inherits;
const ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} WorkTypeExclusion
 * @property {number} id
 * @property {WorkTypeHref} workType
 * @property {number} agreementId
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
function WorkTypeExclusions(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(WorkTypeExclusions, ConnectWise);

/**
 * GET
 * @param agreementId
 * @param {Params} params
 * @returns {Promise<WorkTypeExclusion[]>}
 */
WorkTypeExclusions.prototype.getWorkTypeExclusions = function (agreementId, params) {
  return this.api(`/finance/agreements/${agreementId}/workTypeExclusions`, 'GET', params);
};

/**
 * POST
 * @param agreementId
 * @param {WorkTypeExclusion} workTypeExclusion
 * @returns {Promise<WorkTypeExclusion>}
 */
WorkTypeExclusions.prototype.createWorkTypeExclusion = function (agreementId, workTypeExclusion) {
  return this.api(`/finance/agreements/${agreementId}/workTypeExclusions`, 'POST', workTypeExclusion);
};

/**
 * GET
 * @param agreementId
 * @param {ParamsConditions} params
 * @returns {Promise<Count>}
 */
WorkTypeExclusions.prototype.getWorkTypeExclusionsCount = function (agreementId, params) {
  return this.api(`/finance/agreements/${agreementId}/workTypeExclusions/count`, 'GET', params);
};

/**
 * DELETE
 * @param agreementId
 * @param workTypeExclusionId
 * @returns {Promise<DeleteResponse>}
 */
WorkTypeExclusions.prototype.deleteWorkTypeExclusionById = function (agreementId, workTypeExclusionId) {
  return this.api(`/finance/agreements/${agreementId}/workTypeExclusions/${workTypeExclusionId}`, 'DELETE');
};


/**
 *
 * @type {WorkTypeExclusions}
 */
module.exports = WorkTypeExclusions;

