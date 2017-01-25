/**
 * Created by kgrube on 12/20/2015.
 * @author kgrube
 */

/**
 * @typedef {object} ProjectAPI
 * @property Projects
 */

/**
 *
 * @param options
 * @returns {ProjectAPI}
 * @constructor
 */
function ProjectAPI(options) {
  var _Projects = require('./Projects');
  return {
    Projects: new _Projects(options)
  }
}

/**
 *
 * @type {ProjectAPI}
 */
module.exports = ProjectAPI;
