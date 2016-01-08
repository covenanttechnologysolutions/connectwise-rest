/**
 * Created by kgrube on 12/15/2015.
 * @author kgrube
 */

/**
 *
 * @param {CWOptions} options
 * @returns {{Tickets: (Tickets|exports|module.exports), Boards: (Boards|exports|module.exports), Statuses}}
 * @constructor
 */
function ServiceDeskAPI(options) {
    var _Tickets = require('./Tickets'),
        _Boards = require('./Boards'),
        _Statuses = require('./Statuses');

    return {
        Tickets: new _Tickets(options),
        Boards: new _Boards(options),
        Statuses: new _Statuses(options)
    }
}

module.exports = ServiceDeskAPI;