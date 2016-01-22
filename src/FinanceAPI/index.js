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
 * @param {CWOptions} options
 * @returns {FinanceAPI}
 */
function FinanceAPI(options) {
    var _Additions = require('./Additions'),
        _Adjustments = require('./Adjustments'),
        _Agreements = require('./Agreements'),
        _AgreementSites = require('./AgreementSites'),
        _BoardDefaults = require('./BoardDefaults'),
        _WorkRoles = require('./WorkRoles'),
        _WorkTypeExclusions = require('./WorkTypeExclusions'),
        _WorkTypes = require('./WorkTypes');

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
module.exports =  FinanceAPI
