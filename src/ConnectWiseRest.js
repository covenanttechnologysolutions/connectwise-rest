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