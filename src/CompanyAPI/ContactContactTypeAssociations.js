var inherits = require('util').inherits,
  ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} ContactContactTypeAssociations
 */

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function ContactContactTypeAssociations(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}

inherits(ContactContactTypeAssociations, ConnectWise);

/**
 * @param {Params} params
 * @returns {Promise<ContactTypeAssociation[]>}
 */
ContactContactTypeAssociations.prototype.get = function (contactId, params) {
  var path = '/company/contacts/' + contactId + '/typeAssociations'
  return this.api(path, 'GET', params);
};

ContactContactTypeAssociations.prototype.update = function (contactId,  associationId, params) {
  var path ='/company/contacts/' + 
    contactId + '/typeAssociations/' + 
    associationId 

  return this.api(path, 'PUT', params);
};

ContactContactTypeAssociations.prototype.create = function (contactId, params) {
  var path ='/company/contacts/' + 
    contactId + '/typeAssociations'

  return this.api(path, 'POST', params);
};

/**
 * @type {ContactContactTypeAssociations}
 */
module.exports = ContactContactTypeAssociations;
