/**
 * Created by kgrube on 12/15/2015.
 * @author kgrube
 */

/**
 *
 * @param options
 * @returns {{Tickets: *, Teams: {}}}
 * @constructor
 */
function ServiceDeskAPI(options) {
    return {
        Tickets: new require('./Tickets')(options),
        Teams: {}
    }
}

module.exports = ServiceDeskAPI;