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
    var _Tickets = require('./Tickets'),
        _Boards = require('./Boards');
    return {
        Tickets: new _Tickets(options),
        Boards: new _Boards(options)
    }
}

module.exports = ServiceDeskAPI;