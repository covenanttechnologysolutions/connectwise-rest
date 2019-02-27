/**
 * Created by kgrube on 1/22/2016.
 */

/**
 * @private
 */
const inherits = require('util').inherits;
const ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} Configuration
 * @property {number} id
 * @property {string} name
 * @property {TypeHref} type
 * @property {StatusHref} status
 * @property {CompanyHref} company
 * @property {ContactHref} contact
 * @property {SiteHref} site
 * @property activeFlag
 * @property id
 * @property name
 * @property locationId
 * @property businessUnitId
 * @property deviceIdentifier
 * @property serialNumber
 * @property modelNumber
 * @property tagNumber
 * @property purchaseDate
 * @property installationDate
 * @property installedBy
 * @property warrantyExpirationDate
 * @property vendorNotes
 * @property notes
 * @property macAddress
 * @property lastLoginName
 * @property billFlag
 * @property backupSuccesses
 * @property backupIncomplete
 * @property backupFailed
 * @property backupRestores
 * @property lastBackupDate
 * @property backupServerName
 * @property backupBillableSpaceGb
 * @property backupProtectedDeviceList
 * @property backupYear
 * @property backupMonth
 * @property ipAddress
 * @property defaultGateway
 * @property osType
 * @property osInfo
 * @property cpuSpeed
 * @property ram
 * @property localHardDrives
 * @property parentConfigurationId
 * @property vendor
 * @property manufacturer
 * @property activeFlag
 * @property managementLink
 * @property remoteLink
 * @property {object} _info
 * @property {string} _info.lastUpdated
 * @property {string} _info.updatedBy
 */

/**
 * @typedef {object} ConfigurationQuestion
 * @property {number} answerId
 * @property {number} questionId
 * @property {string} question
 * @property {null|boolean|number|string} answer
 * @property {number} sequenceNumber
 * @property {number} numberOfDecimals
 * @property {string} fieldType ['Text', 'Button', 'Currency', 'Date', 'Hyperlink', 'IPAddress', 'Checkbox', 'Number', 'Percent', 'TextArea', 'Password']
 */

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function Configurations(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(Configurations, ConnectWise);

/**
 * @param {Params} params
 * @returns {Promise<Configuration[]>}
 */
Configurations.prototype.getConfigurations = function (params) {
  return this.api('/company/configurations', 'GET', params);
};
/**
 *
 * @param {Configuration} configuration
 * @returns {Promise<Configuration>}
 */
Configurations.prototype.createConfiguration = function (configuration) {
  return this.api('/company/configurations', 'POST', configuration);
};

/**
 * @param {ParamsConfig} params
 * @returns {Promise<Count>}
 */
Configurations.prototype.getConfigurationsCount = function (params) {
  return this.api('/company/configurations/count', 'GET', params);
};

/**
 * @param {string|number} id
 * @returns {Promise<DeleteResponse>}
 */
Configurations.prototype.deleteConfigurationById = function (id) {
  return this.api(`/company/configurations/${id}`, 'DELETE');
};

/**
 * @param {string|number} id
 * @returns {Promise<Configuration>}
 */
Configurations.prototype.getConfigurationById = function (id) {
  return this.api(`/company/configurations/${id}`, 'GET');
};

/**
 * @param {string|number} id
 * @param {Operations[]} ops
 * @param {ParamsConfigUpdate} [params] unused currently @todo figure this out
 * @returns {Promise<Configuration>}
 */
Configurations.prototype.updateConfiguration = function (id, ops, params) {
  return this.api(`/company/configurations/${id}`, 'PATCH', ops);
};

/**
 * @param {string|number} id
 * @param {Configuration} config
 * @returns {Promise<Configuration>}
 */
Configurations.prototype.replaceConfiguration = function (id, config) {
  return this.api(`/company/configurations/${id}`, 'PUT', config);
};

/**
 *
 * @type {Configurations}
 */
module.exports = Configurations;
