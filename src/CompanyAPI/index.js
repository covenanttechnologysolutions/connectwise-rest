/**
 * Created by kgrube on 1/22/2015.
 * @author kgrube
 */

/**
 * @typedef {object} CompanyAPI
 * @property {Companies} Companies
 * @property {Contacts} Contacts
 * @property {Configurations} Configurations
 * @property {ContactRelationships} ContactRelationships
 * @property {ContactContactTypeAssociations} ContactContactTypeAssociations
 * @property {CompanyCompanyTypeAssociations} CompanyCompanyTypeAssociations
 * @property {CompanyTypes} CompanyTypes
 * @property {CompanyTypeInfos} CompanyTypeInfos
 */

/**
 *
 * @param options
 * @returns {CompanyAPI}
 * @constructor
 */
function CompanyAPI(options) {
  var _Companies = require('./Companies'),
    _Contacts = require('./Contacts'),
    _Configurations = require('./Configurations'),
    _ContactRelationships = require('./ContactRelationships'),
    _ContactContactTypeAssociations = require('./ContactContactTypeAssociations'),
    _CompanyCompanyTypeAssociations = require('./CompanyCompanyTypeAssociations'),
    _CompanyTypes = require('./CompanyTypes'),
    _CompanyTypeInfos = require('./CompanyTypeInfos');

  return {
    Companies: new _Companies(options),
    Contacts: new _Contacts(options),
    Configurations: new _Configurations(options),
    ContactRelationships: new _ContactRelationships(options),
    ContactContactTypeAssociations: new _ContactContactTypeAssociations(options),
    CompanyCompanyTypeAssociations: new _CompanyCompanyTypeAssociations(options),
    CompanyTypes: new _CompanyTypes(options),
    CompanyTypeInfos: new _CompanyTypeInfos(options),
  };
}

/**
 *
 * @type {CompanyAPI}
 */
module.exports = CompanyAPI;
