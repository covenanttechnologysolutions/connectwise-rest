/**
 * Created by kgrube on 12/24/2015.
 * @author kgrube
 */

var Q = require('q'),
    inherits = require('util').inherits,
    ConnectWise = require('../ConnectWise.js');
/**
 * @typedef {object} Boards
 * @property {number} id
 * @property {string} name
 * @property {number} locationId
 * @property {number} businessUnitId
 * @property {boolean} inactive
 * @property {number} signOffTemplateId
 * @property {boolean} sendToContact
 * @property {number} contactTemplateId
 * @property {boolean} sendToResource
 * @property {number} resourceTemplateId
 * @property {object} _info
 *
 */

/**
 *
 * @param {object} options
 * @param {string} options.companyId
 * @param {string} options.publicKey
 * @param {string} options.privateKey
 * @param {string} options.companyUrl
 * @constructor
 */
function Boards(options) {
    ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(Boards, ConnectWise);

/**
 * GET
 * @param {object} params
 * @param {string} params.conditions
 * @param {string} params.orderBy
 * @param {string|number}  params.page
 * @Param {string|number} params.pageSize
 * @returns {Boards[]|promise}
 */
Boards.prototype.getBoards = function(params){
    return this.api('/service/boards', 'GET', params);
};

/**
 *
 * @param params
 */
Boards.prototype.createBoard = function(params){

}

/**
 *
 * @type {Tickets}
 */
module.exports = Boards;