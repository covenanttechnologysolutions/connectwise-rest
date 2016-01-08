/**
 * Created by kgrube on 12/20/2015.
 * @author kgrube
 */

/**
 *
 * @param options
 * @returns {{TimeAPI: (TimeEntries|exports|module.exports)}}
 * @constructor
 */
function TimeAPI(options) {
    var _TimeEntries = require('./TimeEntries');
    return {
        TimeEntries: new _TimeEntries(options)
    }
}

/**
 *
 * @type {TimeEntries}
 */
module.exports = TimeAPI;