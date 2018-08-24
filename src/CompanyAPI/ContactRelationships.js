var inherits = require('util').inherits,
ConnectWise = require('../ConnectWise.js');

/**
 *
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function ContactRelationships(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(ContactRelationships, ConnectWise);

/**
 * @param {Params} params
 * @returns {Promise<Relationship[]>}
 */
ContactRelationships.prototype.getRelationships = function (params) {
  return this.api('/company/contacts/relationships', 'GET', params);
};

module.exports = ContactRelationships;