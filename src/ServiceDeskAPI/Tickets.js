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
 * @property {CustomField[]} customFields
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
 * @param {CWOptions} options
 * @constructor
 */
function Tickets(options) {
    ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(Tickets, ConnectWise);

/**
 * GET
 * @param {Params} params
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
 * @param {object|Ticket} ticket the new ticket data
 * @param {object} ticket.board
 * @param {string} ticket.board.name
 * @param {object} ticket.company
 * @param {string} ticket.company.identifier The CompanyID in ConnectWise
 * @param {string} ticket.summary
 * @param {string} [ticket.initialDescription]
 * @returns {Ticket|promise} The created ticket, or errors if any occured
 */
Tickets.prototype.createTicket = function (ticket) {
    return this.api('/service/tickets', 'POST', ticket);
};

/**
 * PATCH
 * @param {number} id
 * @param {Operations[]} operations
 * @param {string} operations.op the operation to perform, possible values: ['replace', ?]
 * @param {string} operations.path
 * @param {string|number} operations.value
 * @returns {Ticket|promise} The updated ticket
 */
Tickets.prototype.updateTicket = function (id, operations) {
    return this.api('/service/tickets/' + id, 'PATCH', operations);
};

/**
 * GET
 * @param {ParamsConditions} params
 * @param {string} [params.conditions] Conditions string, e.g. 'Summary like "%blah%" AND board/name = "Service Board"'
 * @returns {Count|promise} The number of tickets matching the conditions
 */
Tickets.prototype.getTicketsCount = function (params) {
    return this.api('/service/tickets/count', 'GET', params);
};

/**
 * DELETE
 * @param {string|number} id
 * @returns {promise}
 */
Tickets.prototype.deleteTicketsById = function (id) {
    return this.api('/service/tickets/' + id, 'DELETE');
};

/**
 * PUT
 * @param id
 * @param {Ticket} ticket
 * @returns {Ticket|promise}
 */
Tickets.prototype.replaceTicket = function (id, ticket) {
    return this.api('/service/tickets/' + id, 'PUT', ticket);
};

/**
 * GET
 * @param id
 * @param {Params} [params]
 * @returns {*|promise}
 */
Tickets.prototype.getTicketActivities = function (id, params) {
    return this.api('/service/tickets/' + id + '/activities', 'GET', params);
};

/**
 * GET
 * @param {number|string} id
 * @returns {Count|promise} The number of activities associated with ticket number id
 */
Tickets.prototype.getTicketActivitiesCount = function (id) {
    return this.api('/service/tickets/' + id + '/activities/count', 'GET');
};

/**
 * GET
 * @param {number|string} id
 * @param {Params} params
 * @returns {TimeEntry[]|promise}
 */
Tickets.prototype.getTicketTimeEntries = function (id, params) {
    return this.api('/service/tickets/' + id + '/timeentries', 'GET', params);
};

/**
 * GET
 * @param {number|string} id
 * @returns {Count|promise} The count of time entries attached to ticket id
 */
Tickets.prototype.getTicketTimeEntriesCount = function (id) {
    return this.api('/service/tickets/' + id + '/timeentries/count', 'GET');
};

/**
 * POST
 * @param {number|string} id ticketNbr
 * @param {number|string} configId
 * @returns {*|promise|ConfigurationHref}
 */
Tickets.prototype.createConfigurationAssociation = function (id, configId) {
    return this.api('/service/tickets/' + id + '/configurations', 'POST', {
        id: configId
    });
};

/**
 * GET
 * @param id ticketNbr
 * @returns {promise|ConfigurationHref[]}
 */
Tickets.prototype.getTicketConfigurations = function (id) {
    return this.api('/service/tickets/' + id + '/configurations', 'GET');
};

/**
 * GET
 * @param id ticketNbr
 * @returns {promise|Count}
 */
Tickets.prototype.getTicketConfigurationsCount = function (id) {
    return this.api('/service/tickets/' + id + '/configurations/count', 'GET');
};

/**
 * DELETE
 * @param id
 * @param configId
 * @throws {ErrorResponse}
 * @returns {promise|DeleteResponse}
 */
Tickets.prototype.deleteConfigurationAssociation = function (id, configId) {
    return this.api('/service/tickets/' + id + '/configurations/' + configId, 'DELETE');
};

/**
 * GET
 * @param id
 * @param configId
 * @returns {promise|ConfigurationHref}
 */
Tickets.prototype.getConfigurationAssociation = function (id, configId) {
    return this.api('/service/tickets/' + id + '/configurations/' + configId, 'GET');
};

/**
 * GET
 * @param {string|number} id
 * @param {ParamsPage} [params]
 * @returns {promise|ScheduleEntryHref[]}
 */
Tickets.prototype.getTicketScheduleEntries = function (id, params) {
    return this.api('/service/tickets/' + id + '/scheduleentries', 'GET', params);
};

/**
 * GET
 * @param id
 * @returns {promise|Count}
 */
Tickets.prototype.getTicketScheduleEntriesCount = function (id) {
    return this.api('/service/tickets/' + id + '/scheduleentries/count', 'GET');
};

/**
 * GET
 * @param {string|number} id
 * @param {ParamsPage} [params]
 * @returns {promise|DocumentHref[]}
 */
Tickets.prototype.getTicketDocuments = function (id, params) {
    return this.api('/service/tickets/' + id + '/documents', 'GET', params);
};

/**
 * GET
 * @param id
 * @returns {promise|Count}
 */
Tickets.prototype.getTicketDocumentsCount = function (id) {
    return this.api('/service/tickets/' + id + '/documents/count', 'GET');
};

/**
 * GET
 * @param id
 * @returns {promise|ProductHref[]}
 */
Tickets.prototype.getTicketProducts = function (id) {
    return this.api('/service/tickets/' + id + '/products', 'GET');
};

/**
 * GET
 * @param id
 * @returns {promise|Count}
 */
Tickets.prototype.getTicketProductsCount = function (id) {
    return this.api('/service/tickets/' + id + '/products/count', 'GET');
};

/**
 *
 * @param {string|number} id
 * @param {string} status
 * @returns {Ticket[]|promise}
 */
Tickets.prototype.updateTicketStatusByName = function (id, status) {
    var deferred = Q.defer(),
        self = this;

    self.getTicketById(id)
        .then(function (ticket) {
            var boardId = ticket.board.id;
            self.api('/service/boards/' + boardId + '/statuses', 'GET', {conditions: 'name = "' + status + '"'})
                .then(function (statuses) {
                    if (statuses.length > 0) {
                        var statusId = statuses[0].id;
                        self.updateTicket(id, [{
                                "op": 'replace',
                                "path": 'status/id',
                                "value": statusId
                            }])
                            .then(deferred.resolve)
                            .fail(deferred.reject);
                    } else {
                        deferred.reject({
                            code: 'NotFound',
                            errors: null,
                            message: 'Status ' + status + ' not found'
                        });
                    }

                })
                .fail(function (err) {
                    deferred.reject(err);
                });
        })
        .fail(function (err) {
            deferred.reject(err);
        });
    return deferred.promise;
};

/**
 *
 * @param id
 * @param {string} priority - do a %like% match on priority
 * @returns {promise|Ticket}
 */
Tickets.prototype.updateTicketPriority = function (id, priority) {
    var self = this;
    return self.api('/service/priorities', 'GET', {
        conditions: 'name like "%' + priority + '%"'
    }).then(function (res) {
        if (res.length > 0) {
            var priorityId = res[0].id;
            return self.updateTicket(id, [{
                op: 'replace',
                path: 'priority/id',
                value: priorityId
            }]);
        } else {
            throw {
                code: 'NotFound',
                message: 'Could not find any matching priority.',
                errors: null
            };
        }
    });
};

/**
 *
 * @param id
 * @param {string} serviceType
 * @returns {promise|Ticket}
 */
Tickets.prototype.updateTicketServiceType = function (id, serviceType) {
    var self = this;
    return self.getTicketById(id)
        .then(function (ticket) {
            var boardId = ticket.board.id;
            return self.api('/service/boards/' + boardId + '/types', 'GET', {
                conditions: 'name = "' + serviceType + '"'
            }).then(function (types) {
                if (types.length > 0) {
                    var serviceTypeId = types[0].id;
                    return self.updateTicket(id, [{
                        op: 'replace',
                        path: 'type/id',
                        value: serviceTypeId
                    }]);
                } else {
                    throw {
                        code: 'NotFound',
                        message: 'Could not find any matching service types.',
                        errors: null
                    };
                }
            });
        });
};

/**
 *
 * @param id
 * @param {string} serviceSubType
 * @returns {promise|Ticket}
 */
Tickets.prototype.updateTicketServiceSubType = function (id, serviceSubType) {
    var self = this;
    return self.getTicketById(id)
        .then(function (ticket) {
            var boardId = ticket.board.id;
            return self.api('/service/boards/' + boardId + '/subtypes', 'GET', {
                conditions: 'name = "' + serviceSubType + '"'
            }).then(function (types) {
                if (types.length > 0) {
                    var serviceSubTypeId = types[0].id;
                    return self.updateTicket(id, [{
                        op: 'replace',
                        path: 'subType/id',
                        value: serviceSubTypeId
                    }]);
                } else {
                    throw {
                        code: 'NotFound',
                        message: 'Could not find any matching service subtypes.',
                        errors: null
                    };
                }
            });
        });
};

/**
 *
 * @param id
 * @param {string} type
 * @param {string} subtype
 * @param {string} item
 * @returns {promise|Ticket}
 */
Tickets.prototype.updateTicketTypeSubTypeItem = function (id, type, subtype, item) {
    var self = this;
    return self.updateTicketServiceType(id, type).then(function () {
        return self.updateTicketServiceSubType(id, subtype).then(function () {
            return self.updateTicketServiceItem(id, item);
        })
    })
};

/**
 *
 * @param id
 * @param {string} serviceItem
 * @returns {promise|Ticket}
 */
Tickets.prototype.updateTicketServiceItem = function (id, serviceItem) {
    var self = this;
    return self.getTicketById(id)
        .then(function (ticket) {
            var boardId = ticket.board.id;
            return self.api('/service/boards/' + boardId + '/items', 'GET', {
                conditions: 'name = "' + serviceItem + '"'
            }).then(function (items) {
                if (items.length > 0) {
                    var serviceItemId = items[0].id;
                    return self.updateTicket(id, [{
                        op: 'replace',
                        path: 'item/id',
                        value: serviceItemId
                    }]);
                } else {
                    throw {
                        code: 'NotFound',
                        message: 'Could not find any matching service items.',
                        errors: null
                    };
                }
            });
        });
};

/**
 *
 * @type {Tickets}
 */
module.exports = Tickets;