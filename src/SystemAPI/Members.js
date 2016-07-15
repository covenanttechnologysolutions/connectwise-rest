/**
 * Created by kgrube on 12/15/2015.
 * @author kgrube
 */

/**
 *
 * @private
 */
var Q = require('q'),
  inherits = require('util').inherits,
  ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} Member
 * @property id
 * @property {boolean} adminFlag
 * @property billableForecast
 * @property {CalendarHref} calendar
 * @property {CountryHref} country
 * @property dailyCapacity
 * @property defaultEmail
 * @property {ProjectBoardHref} defaultProjectBoard
 * @property defaultProjectDepartmentId
 * @property defaultProjectLocationId
 * @property defaultSalesLocationId
 * @property defaultScheduleDepartmentId
 * @property defaultScheduleLocationId
 * @property {ServiceBoardHref} defaultServiceBoard
 * @property defaultServiceDepartmentId
 * @property defaultServiceLocationId
 * @property defaultSystemDepartmentId
 * @property defaultSystemLocationId
 * @property {boolean} disableOnlineFlag
 * @property emailAddress
 * @property enableGpsFlag
 * @property enableLdapAuthenticationFlag
 * @property enableMobileFlag
 * @property {MemberHref} expenseApprover
 * @property {string} firstName
 * @property {boolean} hideFromDispatchFlag
 * @property {string} hireDate
 * @property homeEmail
 * @property homeExtension
 * @property homePhone
 * @property identifier
 * @property inactiveDate
 * @property {boolean} inactiveFlag
 * @property lastName
 * @property {string} licenseClass
 * @property middleInitial
 * @property mobileEmail
 * @property mobileExtension
 * @property mobilePhone
 * @property notes
 * @property officeEmail
 * @property officeExtension
 * @property officePhone
 * @property {MemberHref} reportsTo
 * @property restrictDefaultSalesTerritoryFlag
 * @property restrictDefaultWarehouseBinFlag
 * @property restrictDefaultWarehouseFlag
 * @property restrictProjectDefaultDepartmentFlag
 * @property restrictProjectDefaultLocationFlag
 * @property restrictScheduleFlag
 * @property restrictServiceDefaultDepartmentFlag
 * @property restrictServiceDefaultLocationFlag
 * @property scheduleCapacity
 * @property {SecurityRoleHref} securityRole
 * @property securityLevel
 * @property securityLocationId
 * @property serviceLocation
 * @property serviceTeams
 * @property systemRestrictToDefaultDepartmentFlag
 * @property systemRestrictToDefaultLocationFlag
 * @property {MemberHref} timeApprover
 * @property {TimeZoneHref} timeZone
 * @property title
 * @property {MemberTypeHref} type
 * @property vendorNumber
 * @property warehouse
 * @property warehouseBin
 * @property {WorkRoleHref} workRole
 * @property {WorkTypeHref} workType
 * @property {object} _info
 * @property {string} _info.lastUpdated
 * @property {string} _info.updatedBy
 * @property {string} _info.image_href
 */

/**
 *
 * @param {CWOptions} options
 * @constructor
 */
function Members(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(Members, ConnectWise);

/**
 * GET
 * @param {Params} params
 * @returns {Member[]|promise}
 */
Members.prototype.getMembers = function (params) {
  return this.api('/system/members', 'GET', params);
};

/**
 * GET
 * @param {string} identifier
 * @returns {Member|promise}
 */
Members.prototype.getMemberByIdentifer = function (identifier) {
  return this.api('/system/members/' + identifier, 'GET');
};

/**
 *
 * @param identifier
 * @param {ParamsImage} params
 * @returns {promise}
 */
Members.prototype.getMemberImage = function (identifier, params) {
  return this.api('/system/members/' + identifier + '/image', 'GET', params)
};

/**
 *
 * @type {Members}
 */
module.exports = Members;