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
 * @property {CompanySites} CompanySites
 */

/**
 *
 * @param options
 * @returns {CompanyAPI}
 * @constructor
 */
function CompanyAPI(options) {
  const _Companies = require('./Companies');
  const _Contacts = require('./Contacts');
  const _Configurations = require('./Configurations');
  const _ContactRelationships = require('./ContactRelationships');
  const _ContactContactTypeAssociations = require('./ContactContactTypeAssociations');
  const _CompanyCompanyTypeAssociations = require('./CompanyCompanyTypeAssociations');
  const _CompanyTypes = require('./CompanyTypes');
  const _CompanyTypeInfos = require('./CompanyTypeInfos');
  const _CompanySites = require('./CompanySites');

  return {
    Companies: new _Companies(options),
    Contacts: new _Contacts(options),
    Configurations: new _Configurations(options),
    ContactRelationships: new _ContactRelationships(options),
    ContactContactTypeAssociations: new _ContactContactTypeAssociations(options),
    CompanyCompanyTypeAssociations: new _CompanyCompanyTypeAssociations(options),
    CompanyTypes: new _CompanyTypes(options),
    CompanyTypeInfos: new _CompanyTypeInfos(options),
    CompanySites: new _CompanySites(options),
  };
}

/**
 *
 * @type {CompanyAPI}
 */
module.exports = CompanyAPI;
