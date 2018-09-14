/**
 * @typedef {object} SalesAPI
 * @property {Activities} Activities
 **/

function SalesAPI(options) {
  const _Activities = require('./Activities');

  return {
    Activities: new _Activities(options),
  };
}

module.exports = SalesAPI;
