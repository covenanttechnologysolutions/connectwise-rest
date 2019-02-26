const inherits = require('util').inherits;
const ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} Relationship
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.lastUpdated
 * @property {string} _info.updatedBy
 */

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

/**
 * @type {ContactRelationships}
 */
module.exports = ContactRelationships;
