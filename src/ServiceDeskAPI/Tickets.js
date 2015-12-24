/**
 * Created by kgrube on 12/15/2015.
 * @author kgrube
 */

var Q = require('q'),
    inherits = require('util').inherits,
    ConnectWise = require('../ConnectWise.js');

/**
 * @typedef {object} Ticket
 * @property {string} actualHours
 * @property {string} addressLine1
 * @property {string} addressLine2
 * @property {AgreementHref} agreement
 * @property {boolean} allowAllClientsPortalView
 * @property {boolean} approved
 * @property automaticEmailCc
 * @property automaticEmailCcFlag
 * @property automaticEmailContactFlag
 * @property automaticEmailResourceFlag
 * @property {BoardHref} board
 * @property {number} budgetHours
 * @property {string} city
 * @property closedBy
 * @property closedDate
 * @property closedFlag
 * @property {CompanyHref} company
 * @property {ContactHref} contact
 * @property {string} contactEmailAddress
 * @property contactEmailLookup
 * @property contactPhoneExtension
 * @property {string} contactPhoneNumber
 * @property {CountryHref} country
 * @property {boolean} customerUpdatedFlag
 * @property {string} dateEntered
 * @property {string} dateResolved
 * @property {string} dateResplan
 * @property {string} dateResponded
 * @property {string} enteredBy
 * @property externalXRef
 * @property {boolean} hasChildTicket
 * @property {number} id TicketNbr
 * @property {string} impact
 * @property initialDescription
 * @property initialInternalAnalysis
 * @property initialResolution
 * @property {boolean} isInSla
 * @property {ItemHref} item
 * @property knowledgeBaseCategoryId
 * @property knowledgeBaseLinkId
 * @property knowledgeBaseLinkType
 * @property knowledgeBaseSubCategoryId
 * @property opportunity
 * @property parentTicketId
 * @property phase
 * @property poNumber
 * @property {PriorityHref} priority
 * @property processNotifications
 * @property project
 * @property {string} recordType
 * @property {string} requiredDate
 * @property {number} resPlanMinutes
 * @property {number} resolveMinutes
 * @property {string} resources
 * @property {number} respondMinutes
 * @property {ServiceLocationHref} serviceLocation
 * @property {string} severity
 * @property {SiteHref} site
 * @property {string} siteName
 * @property skipCallback
 * @property {SourceHref} source
 * @property {string} stateIdentifier
 * @property {StatusHref} status
 * @property subBillingAmount
 * @property {string} subBillingMethod
 * @property subDateAccepted
 * @property {SubTypeHref} subType
 * @property {string} summary
 * @property {TeamHref} team
 * @property {TypeHref} type
 * @property wbsCode
 * @property {string} zip
 * @property {object} _info
 * @property {string} _info.activities_href
 * @property {string} _info.childtasks_href
 * @property {string} _info.configurations_href
 * @property {string} _info.documents_href
 * @property {string} _info.lastUpdated
 * @property {string} _info.notes_href
 * @property {string} _info.products_href
 * @property {string} _info.scheduleentries_href
 * @property {string} _info.tasks_href
 * @property {string} _info.timeentries_href
 * @property {string} _info.updatedBy
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
function Tickets(options) {
    ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(Tickets, ConnectWise);

/**
 * GET
 * @param {object} params
 * @param {string} params.conditions
 * @param {string} [params.orderBy]
 * @param {number} [params.page]
 * @param {number} [params.pageSize]
 * @returns {Ticket[]|promise}
 */
Tickets.prototype.getTickets = function (params) {
    return this.api('/service/tickets', 'GET', params);
};

/**
 * GET
 * @param {string|number} id ticketNbr
 * @returns {Ticket|promise}
 */
Tickets.prototype.getTicketById = function (id) {
    return this.api('/service/tickets/' + id, 'GET');
};

/**
 * POST
 * @param {object|Ticket} params ticket data
 * @param {string} params.body
 * @param {object} params.board
 * @param {string} params.board.name
 * @param {object} params.company
 * @param {string} params.company.identifier The CompanyID in ConnectWise
 * @param {string} params.summary
 * @param {string} [params.initialDescription]
 * @returns {Ticket|promise} The created ticket, or errors if any occured
 */
Tickets.prototype.createTicket = function (params) {
    return this.api('/service/tickets', 'POST', params);
};

/**
 * PATCH
 * @param {number} id
 * @param {object[]} params
 * @param {string} params.op the operation to perform, possible values: ['replace', ?]
 * @param {string} params.path
 * @param {string} params.value
 * @returns {Ticket|promise} The updated ticket
 */
Tickets.prototype.updateTicket = function (id, params) {
    return this.api('/service/tickets/' + id, 'PATCH', params);
};

/**
 * GET
 * @param {object} params
 * @param {string} [params.conditions] Conditions string, e.g. 'Summary like "%blah%" AND board/name = "Service Board"'
 * @returns {number|promise} The number of tickets matching the conditions
 */
Tickets.prototype.getTicketsCount = function (params) {
    return this.api('/service/tickets/count', 'GET', params);
};

/**
 * DELETE
 * @param {string|number} id
 * @returns {*|promise}
 */
Tickets.prototype.deleteTicketsById = function (id) {
    return this.api('/service/tickets/' + id, 'DELETE');
};

/**
 * PUT
 * @param id
 * @param {{}} params ticket
 * @returns {*|promise}
 */
Tickets.prototype.replaceTicket = function (id, params) {
    return this.api('/service/tickets/' + id, 'PUT', params);
};

/**
 * GET
 * @param id
 * @param {object} [params]
 * @param params.page
 * @param params.pageSize
 * @returns {*|promise}
 */
Tickets.prototype.getTicketActivities = function (id, params) {
    return this.api('/service/tickets/' + id + '/activities', 'GET', params);
};

/**
 * GET
 * @param {number|string} id
 * @returns {number|promise} The number of activities associated with ticket number id
 */
Tickets.prototype.getTicketActivitiesCount = function (id) {
    return this.api('/service/tickets/' + id + '/activities/count', 'GET');
};

/**
 * GET
 * @param {number|string} id
 * @param {object} [params]
 * @param params.page
 * @param params.pageSize
 * @returns {*|promise}
 */
Tickets.prototype.getTicketTimeEntries = function(id, params){
    return this.api('/service/tickets/' + id + '/timeentries', 'GET', params);
};

/**
 * GET
 * @param {number|string} id
 * @returns {number|promise} The count of time entries attached to ticket id
 */
Tickets.prototype.getTicketTimeEntriesCount = function(id){
    return this.api('/service/tickets/' + id + '/timeentries/count', 'GET');
};



/**
 * POST
 * @param {number|string} id
 * @param {object} params
 * @param {number|string} params.id
 * @param {string} params.deviceIdentifier
 * @param {object} params._info
 */
Tickets.prototype.createConfigurationAssociation = function(id, params){
    return this.api('/service/tickets/' + id + '/configurations', 'POST', params);
};

/**
 *
 * @type {Tickets}
 */
module.exports = Tickets;