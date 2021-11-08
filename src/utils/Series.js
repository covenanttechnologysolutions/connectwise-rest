/**
 * Created by kgrube on 4/3/2019
 */

/**
 * @typedef {Object} CWSeries
 * @property {function} all
 */

/**
 *
 * @param {array<Function|Promise>} series
 * @param {number} concurrent number of concurrent requests
 * @param {number} delay number of ms between request groups
 * @returns {Promise<*>}
 */
function all({series, concurrent = 1, delay = 0}) {
  const promises = series.slice();
  const concurrency = concurrent;
  let results = null;

  return new Promise((resolve, reject) => {
    function next(result) {
      const concurrentPromises = [];

      if (!results) {
        results = [];
      } else {
        results = results.concat(result);
      }

      if (promises.length) {
        while (concurrentPromises.length < concurrency && promises.length) {
          let promise = promises.shift();

          if (typeof promise === 'function') {
            promise = promise();
          }

          if (!promise || typeof promise.then !== 'function') {
            promise = Promise.resolve(promise);
          }

          concurrentPromises.push(promise);
        }

        setTimeout(() => {
          Promise.all(concurrentPromises)
            .then(next)
            .catch(reject);
        }, delay);
      } else {
        resolve(results);
      }
    }

    next();
  });
}

module.exports = {
  all,
};
