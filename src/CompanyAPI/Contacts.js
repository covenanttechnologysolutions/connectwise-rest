/**
 * Created by kgrube on 1/22/2016.
 */

/**
 * @private
 */
var inherits = require('util').inherits,
  ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} Contact
 * @property {string} addressLine1
 * @property {string} addressLine2
 * @property {string} anniversary
 * @property assistantContactId
 * @property {boolean} childrenFlag
 * @property city
 * @property {CommunicationItemHref[]} communicationItems
 * @property {CompanyHref} company
 * @property {CountryHref} country
 * @property {CustomField[]} customFields
 * @property {DepartmentHref} department
 * @property {boolean} disablePortalLoginFlag
 * @property {string} firstName
 * @property gender
 * @property {number} id numeric identifier
 * @property {boolean} inactiveFlag
 * @property {string} lastName
 * @property managerContactId
 * @property {boolean} marriedFlag
 * @property {string} nickName
 * @property portalPassword
 * @property {number} portalSecurityLevel
 * @property presence
 * @property {RelationshipHref} relationship
 * @property school
 * @property securityIdentifier
 * @property significantOther
 * @property {SiteHref} site
 * @property state
 * @property {string} title
 * @property {TypeHref} type
 * @property {boolean} unsubscribeFlag
 * @property zip
 * @property {object} _info
 * @property {string} _info.communications_href
 * @property {string} _info.image_href
 * @property {string} _info.notes_href
 * @property {string} _info.lastUpdated
 * @property {string} _info.portalSecurity_href
 * @property {string} _info.tracks_href
 * @property {string} _info.updatedBy
 */

/**
 * @typedef {object} ContactType
 * @property {number} id
 * @property {string} description
 * @property {boolean} defaultFlag
 * @property {object} _info
 * @property {string} _info.lastUpdated
 * @property {string} _info.updatedBy
 */

/**
 * @typedef {object} PortalSecurity
 * @property {string} identifier
 * @property {boolean} enabled
 */

/**
 * @typedef {object} ValidatePortalResponse
 * @property {boolean} success
 * @property {number} contactId
 */

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function Contacts(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(Contacts, ConnectWise);

/**
 * @param {Params} params
 * @returns {Promise<Contact[]>}
 */
Contacts.prototype.getContacts = function (params) {
  return this.api('/company/contacts', 'GET', params);
};

/**
 * @param {Contact} contact
 * @returns {Promise<Contact>}
 */
Contacts.prototype.createContact = function (contact) {
  return this.api('/company/contacts', 'POST', contact);
};

/**
 * @param {ParamsConditions} params
 * @returns {Promise<Count>}
 */
Contacts.prototype.getContactsCount = function (params) {
  return this.api('/company/contacts/count', 'GET', params);
};

/**
 * @param {ParamsConditions} params
 * @returns {Promise<ContactType>}
 */
Contacts.prototype.getContactTypes = function (params) {
  return this.api('/company/contacts/types', 'GET', params);
};

/**
 * @param {number|string} id
 * @param {number|string} transferContactId
 * @returns {Promise<DeleteResponse>}
 */
Contacts.prototype.deleteContactById = function (id, transferContactId) {
  return this.api('/company/contacts/' + id, 'DELETE', {transferContactId: transferContactId});
};

/**
 * @param {string|number} id
 * @returns {Promise<Contact>}
 */
Contacts.prototype.getContactById = function (id) {
  return this.api('/company/contacts/' + id, 'GET');
};

/**
 * @param {string|number} id
 * @param {Operations[]} operations
 * @returns {Promise<Contact>}
 */
Contacts.prototype.updateContact = function (id, operations) {
  return this.api('/company/contacts/' + id, 'PATCH', operations);
};

/**
 * @param {string|number} id
 * @param {Contact} contact
 * @returns {Promise<Contact>}
 */
Contacts.prototype.replaceContact = function (id, contact) {
  return this.api('/company/contacts/' + id, 'PUT', contact);
};

/**
 * @param {string|number} id
 * @returns {Promise<PortalSecurity[]>}
 */
Contacts.prototype.getPortalSecurity = function (id) {
  return this.api('/company/contacts/' + id + '/portalSecurity', 'GET');
};


/**
 * @param {string} email
 * @returns {Promise<PostResponse>}
 */
Contacts.prototype.requestPassword = function (email) {
  return this.api('/company/contacts/requestPassword', 'POST', {email: email});
};

/**
 *
 * @param {string} email
 * @param {string} password
 * @returns {Promise<ValidatePortalResponse>}
 */
Contacts.prototype.validatePortalCredentials = function (email, password) {
  return this.api('/company/contacts/validatePortalCredentials', 'POST', {email: email, password: password});
};

/**
 *
 * @param {string|number} id
 * @param {boolean} useDefaultFlag
 * @param {string} lastModified
 * @returns {Promise<*>} @TODO check return type
 */
Contacts.prototype.getContactImage = function (id, useDefaultFlag, lastModified) {
  return this.api('/company/contacts/' + id + '/image', 'GET', params);
};

/**
 *
 * @type {Contacts}
 */
module.exports = Contacts;
