/**
 * Created by kgrube on 3/10/2016.
 */


/**
 * @private
 */
var Q = require('q'),
  inherits = require('util').inherits,
  ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} Project
 * @property {string} actualEnd
 * @property {number} actualHours
 * @property {string} actualStart
 * @property {AgreementHref} agreement
 * @property {string} billExpenses ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault']
 * @property {string} billProducts ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault']
 * @property {boolean} billProjectAfterClosedFlag
 * @property {string} billTime ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault']
 * @property {boolean} billUnapprovedTimeAndExpense
 * @property {number} billingAmount
 * @property {string} billingAttention
 * @property {string} billingMethod ['ActualRates', 'FixedFee', 'NotToExceed', 'OverrideRate']
 * @property {string} billingRateType ['WorkRole', 'StaffMember']
 * @property {BoardHref} board
 * @property {string} budgetAnalysis ['ActualHours', 'BillableHours']
 * @property {boolean} budgetFlag
 * @property {number} budgetHours
 * @property {CompanyHref} company
 * @property {ContactHref} contact
 * @property {string} customerPO
 * @property {string} description
 * @property {number} downpayment note: as of CW2016.1, this is typo'd as 'downpayment' and not 'downPayment'
 * @property {string} estimatedEnd
 * @property {number} estimatedExpenseRevenue
 * @property {number} estimatedHours
 * @property {number} estimatedProductRevenue
 * @property {string} estimatedStart
 * @property {number} estimatedTimeRevenue
 * @property {MemberHref} expenseApprover
 * @property {number} id projectId
 * @property {MemberHref} manager
 * @property {string} name projectName
 * @property {OpportunityHref} opportunity
 * @property {number} projectTemplateId
 * @property {boolean} restrictDownPaymentFlag
 * @property {string} scheduledEnd
 * @property {number} scheduledHours
 * @property {string} scheduledStart
 * @property {SiteHref} site
 * @property {ProjectStatusHref} status
 * @property {MemberHref} timeApprover
 * @property {ProjectTypeHref} type
 * @property {object} _info
 * @property {string} _info.lastUpdated
 * @property {string} _info.updatedBy
 *
 */

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function Projects(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(Projects, ConnectWise);

/**
 *
 * @param {Params} params
 * @returns {Promise<Project[]>}
 */
Projects.prototype.getProjects = function (params) {
  return this.api('/project/projects', 'GET', params);
};

/**
 *
 * @param {Project} project
 * @returns {Promise<Project>}
 */
Projects.prototype.createProject = function (project) {
  return this.api('/project/projects', 'POST', project);
};

/**
 *
 * @param {ParamsConditions} conditions
 * @returns {Promise<Count>}
 */
Projects.prototype.getProjectsCount = function (conditions) {
  return this.api('/project/projects', 'GET', conditions);
};

/**
 *
 * @param {string|number} projectId
 * @returns {Promise<DeleteResponse>}
 */
Projects.prototype.deleteProjectById = function (projectId) {
  return this.api('/project/projects/' + projectId, 'DELETE');
};

/**
 *
 * @param {string|number} projectId
 * @returns {Promise<Project>}
 */
Projects.prototype.getProjectById = function (projectId) {
  return this.api('/project/projects/' + projectId, 'GET');
};

/**
 *
 * @param {string|number} projectId
 * @param {Operations} operations
 * @returns {Promise<Project>}
 */
Projects.prototype.updateProject = function (projectId, operations) {
  return this.api('/project/projects/' + projectId, 'PATCH', operations);
};

/**
 *
 * @param {string|number} projectId
 * @param {Project} project
 * @returns {Promise<Project>}
 */
Projects.prototype.replaceProject = function (projectId, project) {
  return this.api('/project/projects/' + projectId, 'PUT', project);
};

/**
 * @type {Projects}
 */
module.exports = Projects;
