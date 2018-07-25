/**
 * @typedef {object} SalesAPI
 * @property {Activities} Activities
**/

function SalesAPI(options) {
  var _Activities = require('./Activities')

  return {
    Activities: new _Activities(options)
  }
}

module.exports = SalesAPI;