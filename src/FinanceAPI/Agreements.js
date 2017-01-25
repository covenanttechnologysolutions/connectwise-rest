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
 * @typedef {object} Agreement
 * @property {boolean} allowOverruns
 * @property {string} applicationCycle ['CalendarMonth', 'Contract2Weeks', 'Contract4Weeks', 'CalendarQuarter', 'CalendarWeek', 'ContractQuarter', 'CalendarYear']
 * @property {number} applicationLimit
 * @property {string} applicationUnits ['Amount', 'Hours', 'Incidents']
 * @property {boolean} applicationUnlimitedFlag
 * @property {number} billAmount
 * @property {number} billCycleId
 * @property {string} billExpenses ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault']
 * @property {boolean} billOneTimeFlag
 * @property {string} billProducts ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault']
 * @property {string} billStartDate
 * @property {number} billTermsId
 * @property {string} billTime ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault']
 * @property {object} billToCompany
 * @property {number} billToCompany.id
 * @property {string} billToCompany.identifier
 * @property {object} billToCompany._info
 * @property {object} billToSite
 * @property {number} billToSite.id
 * @property {string} billToSite.name
 * @property {object} billToSite._info
 * @property {boolean} billableExpenseInvoice
 * @property {boolean} billableProductInvoice
 * @property {boolean} billableTimeInvoice
 * @property {boolean} bottomComment
 * @property {number} businessUnitId
 * @property {boolean} cancelledFlag
 * @property {boolean} carryOverUnused
 * @property {boolean} chargeToFirm
 * @property {number} compHourlyRate
 * @property {number} compLimitAmount
 * @property {CompanyHref} company
 * @property {ContactHref} contact
 * @property {boolean} coverAgreementExpense
 * @property {boolean} coverAgreementProduct
 * @property {boolean} coverAgreementTime
 * @property {boolean} coverSalesTax
 * @property {string} customerPO
 * @property {string} dateCancelled
 * @property {string} employeeCompNotExceed ['Billing', 'Percent', 'Amount]
 * @property {string} employeeCompRate ['Actual', 'Hourly']
 * @property {string} endDate
 * @property {boolean} expireWhenZero
 * @property {number} expiredDays
 * @property {number} id agreementId
 * @property {string} internalNotes
 * @property {string} invoiceDescription
 * @property {number} invoiceTemplateId
 * @property {string} invoicingCycle ['CalendarMonth', 'Contract2Weeks', 'Contract4Weeks', 'CalendarQuarter', 'CalendarWeek', 'ContractQuarter', 'CalendarYear']
 * @property {number} limit
 * @property {number} locationId
 * @property {string} name agreementName
 * @property {boolean} noEndingDateFlag
 * @property {boolean} oneTimeFlag
 * @property {OpportunityHref} opportunity
 * @property {number} parentAgreementId
 * @property {string} periodType ['Current', 'Future', 'Both', 'Undefined']
 * @property {number} projectTypeId
 * @property {number} prorateFirstBill
 * @property {boolean} restrictDepartmentFlag
 * @property {boolean} restrictDownPayment
 * @property {boolean} restrictLocationFlag
 * @property {number} slaId
 * @property {string} startDate
 * @property {CompanyHref} subContractCompany
 * @property {ContactHref} subContractContact
 * @property {number} taxCodeId
 * @property {boolean} taxable
 * @property {boolean} topComment
 * @property {AgreementTypeHref} type
 * @property {string} workOrder
 * @property {WorkRoleHref} workRole
 * @property {WorkTypeHref} workType
 *
 */


/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function Agreements(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(Agreements, ConnectWise);

/**
 * GET
 * @param {Params} params
 * @returns {Promise<Agreement[]>}
 */
Agreements.prototype.getAgreements = function (params) {
  return this.api('/finance/agreements', 'GET', params);
};

/**
 * POST
 * @param {Agreement} agreement
 * @returns {Promise<Agreement>}
 */
Agreements.prototype.createAgreement = function (agreement) {
  return this.api('/finance/agreements', 'POST', agreement);
};

/**
 * GET
 * @param {ParamsConditions} params
 * @returns {Promise<Count>}
 */
Agreements.prototype.getAgreementsCount = function (params) {
  return this.api('/finance/agreements/count', 'GET', params);
};

/**
 * DELETE
 * @param {string|number} agreementId
 * @returns {Promise<DeleteResponse>}
 */
Agreements.prototype.deleteAgreementById = function (agreementId) {
  return this.api('/finance/agreements/' + agreementId, 'DELETE');
};

/**
 *
 * @param {string|number} agreementId
 * @returns {Promise<Agreement>}
 */
Agreements.prototype.getAgreementById = function (agreementId) {
  return this.api('/finance/agreements/' + agreementId, 'GET');
};

/**
 *
 * @param {string|number} agreementId
 * @param {Operations} operations
 * @returns {Promise<Agreement>}
 */
Agreements.prototype.updateAgreement = function (agreementId, operations) {
  return this.api('/finance/agreements/' + agreementId, 'PATCH', operations);
};

/**
 *
 * @param agreementId
 * @param {Agreement} agreement
 * @returns {Promise<Agreement>}
 */
Agreements.prototype.replaceAgreement = function (agreementId, agreement) {
  return this.api('/finance/agreements/' + agreementId, 'PUT', agreement);
};

/**
 *
 * @param agreementId
 * @param {ParamsPage} params
 * @returns {Promise<ConfigurationHref[]>}
 */
Agreements.prototype.getAgreementConfigurations = function (agreementId, params) {
  return this.api('/finance/agreements/' + agreementId + '/configurations', 'GET', params);
};

/**
 * POST
 * @param agreementId
 * @param configuration
 * @returns {Promise<ConfigurationHref>}
 */
Agreements.prototype.createConfigurationAssociation = function (agreementId, configuration) {
  return this.api('/finance/agreements/' + agreementId + '/configurations', 'POST', configuration)
};

/**
 * GET
 * @param agreementId
 * @returns {Promise<Count>}
 */
Agreements.prototype.getAgreementConfigurationsCount = function (agreementId) {
  return this.api('/finance/agreements/' + agreementId + '/configurations/count', 'GET');
};

/**
 *
 * @param agreementId
 * @param configurationId
 * @returns {Promise<DeleteResponse>}
 */
Agreements.prototype.deleteConfigurationAssociation = function (agreementId, configurationId) {
  return this.api('/finance/agreements/' + agreementId + '/configurations/' + configurationId, 'DELETE');
};

/**
 *
 * @param agreementId
 * @param configurationId
 * @returns {Promise<ConfigurationHref>}
 */
Agreements.prototype.getConfigurationAssociation = function (agreementId, configurationId) {
  return this.api('/finance/agreements/' + agreementId + '/configurations/' + configurationId, 'GET');
};

/**
 *
 * @type {Agreements}
 */
module.exports = Agreements;
