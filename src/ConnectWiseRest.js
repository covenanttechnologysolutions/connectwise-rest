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