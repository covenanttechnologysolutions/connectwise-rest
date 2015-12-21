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
 * @returns {{ServiceDeskAPI: (*|{Tickets, Teams}|{Tickets: *, Teams: {}})}}
 * @constructor
 */
function ConnectWiseRest(options) {

    return {
        ServiceDeskAPI: new require('./ServiceDeskAPI')(options)
    }
}

/**
 *
 * @type {ConnectWiseRest}
 */
module.exports = ConnectWiseRest;