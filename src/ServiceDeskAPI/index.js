/**
 * Created by kgrube on 12/15/2015.
 * @author kgrube
 */

/**
 *
 * @param options
 * @returns {{Tickets: (Tickets|exports|module.exports), Teams: {}}}
 * @constructor
 */
function ServiceDeskAPI(options) {
    var _Tickets = require('./Tickets');
    return {
        Tickets: new _Tickets(options),
        Teams: {}
    }
}

module.exports = ServiceDeskAPI;