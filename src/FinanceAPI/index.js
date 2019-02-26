/**
 * Created by kgrube on 1/22/2015.
 * @author kgrube
 */

/**
 * @typedef {object} FinanceAPI
 * @property {Additions} Additions
 * @property {Adjustments} Adjustments
 * @property {Agreements} Agreements
 * @property {AgreementSites} AgreementSites
 * @property {BoardDefaults} BoardDefaults
 * @property {WorkRoles} WorkRoles
 * @property {WorkTypeExclusions} WorkTypeExclusions
 * @property {WorkTypes} WorkTypes
 */

/**
 *
 * @param options
 * @returns {FinanceAPI}
 * @constructor
 */
function FinanceAPI(options) {
  const _Additions = require('./Additions');
  const _Adjustments = require('./Adjustments');
  const _Agreements = require('./Agreements');
  const _AgreementSites = require('./AgreementSites');
  const _BoardDefaults = require('./BoardDefaults');
  const _WorkRoles = require('./WorkRoles');
  const _WorkTypeExclusions = require('./WorkTypeExclusions');
  const _WorkTypes = require('./WorkTypes');

  return {
    Additions: new _Additions(options),
    Adjustments: new _Adjustments(options),
    Agreements: new _Agreements(options),
    AgreementSites: new _AgreementSites(options),
    BoardDefaults: new _BoardDefaults(options),
    WorkRoles: new _WorkRoles(options),
    WorkTypeExclusions: new _WorkTypeExclusions(options),
    WorkTypes: new _WorkTypes(options)
  }
}

/**
 *
 * @type {FinanceAPI}
 */
module.exports = FinanceAPI;
