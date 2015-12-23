/**
 * Created by kgrube on 12/15/2015.
 * @author kgrube
 */

/**
 *
 * @param {{}} options
 * @param options.companyId
 * @param options.publicKey
 * @param options.privateKey
 * @param options.companyUrl
 * @returns {{API: (ConnectWise|exports|module.exports), ServiceDeskAPI: (ServiceDeskAPI|exports|module.exports), TimeAPI: (TimeEntries|exports|module.exports)}}
 * @constructor
 */
function ConnectWiseRest(options) {
    var _ServiceDeskAPI = require('./ServiceDeskAPI'),
        _TimeAPI = require('./TimeAPI'),
        _ConnectWise = require('./ConnectWise');

    return {
        API: new _ConnectWise(options),
        ServiceDeskAPI: new _ServiceDeskAPI(options),
        TimeAPI: new _TimeAPI(options)
    }
}

/**
 *
 * @type {ConnectWiseRest}
 */
module.exports = ConnectWiseRest;


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
 * @typedef {object} AgreementHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.agreement_href
 */

/**
 * @typedef {object} BoardHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.board_href
 */

/**
 * @typedef {object} CompanyHref
 * @property {number} id
 * @property {string} identifier The company ID in ConnectWise
 * @property {object} _info
 * @property {string} _info.company_href
 */

/**
 * @typedef {object} ContactHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.contact_href
 */

/**
 * @typedef {object} CountryHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 */

/**
 * @typedef {object} ItemHref Service Item
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.item_href
 */

/**
 * @typedef {object} PriorityHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.image_href
 * @property {string} _info.priority_href
 */

/**
 * @typedef {object} ServiceLocationHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.location_href
 */

/**
 * @typedef {object} SiteHref
 * @property {number} id
 * @property {object} _info
 * @property {string} _info.name
 * @property {string} _info.site_href
 */

/**
 * @typedef {object} SourceHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.source_href
 */

 /**
  * @typedef {object} StatusHref
  * @property {number} id
  * @property {string} name
  * @property {object} _info
  * @property {string} _info.status_href
  */

/**
 * @typedef {object} SubTypeHref Service Subtype
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.subType_href
 */

/**
 * @typedef {object} TeamHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.team_href
 */

/**
 * @typedef {object} TypeHref
 * @property {number} id
 * @property {string} name
 * @property {object} _info
 * @property {string} _info.type_href
 */