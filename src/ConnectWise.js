/**
 * Created by kevin on 12/20/2015
 * @author kgrube
 */

/**
 * @private
 */
const request = require('request');
const promiseRetry = require('promise-retry');

/**
 * @const {string} DEFAULTS.apiPath
 * @const {string} DEFAULTS.apiVersion
 */
const DEFAULTS = {
  apiPath: '/apis/3.0',
};

/**
 * @property {CWOptions} options
 * @constructor
 */
function ConnectWise(options) {
  this.options = options;

  if (!options) {
    throw new Error('Options must be defined');
  }

  if (!options.companyId) {
    throw new Error('companyId must be defined');
  }

  if (!options.publicKey) {
    throw new Error('publicKey must be defined');
  }

  if (!options.privateKey) {
    throw new Error('privateKey must be defined');
  }

  if (!options.companyUrl) {
    throw new Error('companyUrl must be defined');
  }

  if (!options.entryPoint) {
    options.entryPoint = 'v4_6_release';
  }

  if (!options.timeout) {
    options.timeout = 20000;
  }

  if (!options.apiVersion) {
    options.apiVersion = '3.0.0';
  }

  if (!options.retry) {
    options.retry = false;
  }

  if (!options.retryOptions) {
    options.retryOptions = Object.assign({
      retries: 4,
      minTimeout: 50,
      maxTimeout: options.timeout,
      randomize: true,
    }, options.retryOptions);
  }

  if (!options.debug) {
    options.debug = !!process.env.CW_REST_DEBUG;
  }

  if (typeof options.logger === 'undefined') {
    options.logger = (level, text, meta) => {
      switch (level) {
        case 'error':
          console.error(`${level}: ${text}`, meta);
          return;
        case 'info': {
          if (options.debug) {
            console.info(`${level}: ${text}`, meta);
          }
          return;
        }
        default:
          console.log(`${level}: ${text}`, meta);
          return;
      }
    };
  }

  this.config = {};

  this.config.companyId = options.companyId;
  this.config.companyUrl = options.companyUrl;
  this.config.apiUrl = `https://${options.companyUrl}/${options.entryPoint}${DEFAULTS.apiPath}`;
  this.config.apiVersion = options.apiVersion;
  this.config.publicKey = options.publicKey;
  this.config.privateKey = options.privateKey;
  this.config.clientId = options.clientId;
  this.config.authRaw = `${options.companyId}+${options.publicKey}:${options.privateKey}`;
  this.config.auth = `Basic ${Buffer.from(this.config.authRaw).toString('base64')}`;
  this.config.timeout = options.timeout;
  this.config.retry = options.retry;
  this.config.retryOptions = options.retryOptions;
  this.config.debug = options.debug;
  this.config.logger = options.logger;
}

/**
 *
 * @param {string} path API method path or full URL to perform method upon
 * @param {string} method HTTP method, GET, POST, PUT, PATCH, DELETE
 * @param {object} [params] if required by route, include required params
 *                          if a GET request, the params are joined into a string
 *                          if a POST/PUT/PATCH, the params are included in the body
 * @returns {Promise<*>}
 */
ConnectWise.prototype.api = function (path, method, params) {
  const retryCodes = ['ECONNRESET', 'ETIMEDOUT', 'ESOCKETTIMEDOUT'];

  const config = this.config;
  let startTime = Date.now();

  // if retries are enabled
  if (config.retry) {
    return promiseRetry((retry, number) => {
      // use retry promises
      return apiPromise(path, method, params, config)
        .catch(err => {
          if (config.debug) {
            config.logger('warn',
              `${method} ${path} ${Date.now() - startTime}ms error occurred: ${err.code}, retry=${number}, params=${JSON.stringify(
                params)}`,
              err);
          }
          startTime = Date.now();
          if (retryCodes.indexOf(err.code) >= 0) {
            return retry(err);
          }
          throw err;
        });
    }, config.retryOptions)
      .then(res => {
        if (config.debug) {
          config.logger('info', `${method} ${path} ${Date.now() - startTime}ms params=${JSON.stringify(params)}`);
        }
        return res;
      })
      .catch(err => {
        if (config.debug) {
          config.logger('error',
            `${method} ${path} ${Date.now() - startTime}ms error occurred: ${err.code}, params=${JSON.stringify(params)}`,
            err);
        }
        throw err;
      });

    // retries are not enabled
  } else {
    return apiPromise(path, method, params, config)
      .then(res => {
        if (config.debug) {
          config.logger('info', `${method} ${path} ${Date.now() - startTime}ms params=${JSON.stringify(params)}`);
        }
        return res;
      })
      .catch(err => {
        if (config.debug) {
          config.logger('error', `${method} ${path} ${Date.now() - startTime}ms params=${JSON.stringify(params)}`, err);
        }
        throw err;
      });
  }
};

function apiPromise(path, method, params, config) {
  return new Promise((resolve, reject) => {
    if (!path) {
      return reject(new Error('path must be defined'));
    }
    if (!method) {
      return reject(new Error('method must be defined'));
    }

    const options = {
      url: config.apiUrl + path,
      headers: {
        'Accept': `application/vnd.connectwise.com+json; version=${config.apiVersion}, application/json`,
        'Cache-Control': 'no-cache',
        'Authorization': config.auth,
      },
      method: method,
      timeout: config.timeout,
    };

    if (config.clientId) {
      options.headers.clientid = config.clientId;
    }

    //@TODO perform URL validation here
    if (path.match(/http:\/\//i) || path.match(/https:\/\//i)) {
      options.url = path;
    }

    if (method === 'GET' && params) {
      options.url += parameterize(params);
    }

    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
      options.headers['Content-Type'] = 'application/json';
      options.body = JSON.stringify(params);
    }

    request(options, (err, res) => {
      if (err) {
        return reject({
          code: err.code,
          message: err.message,
          errors: [err],
        });
      } else {
        if (method === 'DELETE' && res.body === '' || method === 'POST' && res.statusCode === 204) {
          /** @type DeleteResponse */
          return resolve({});
        } else {
          try {
            const body = JSON.parse(res.body);
            if (body.code) {
              return reject(body);
            } else {
              return resolve(body);
            }
          } catch (e) {
            return reject({
              code: 'EPARSE',
              message: 'Error parsing response from server.',
              errors: [e],
            });
          }
        }
      }
    });
  });
}

/**
 * Wrap a module's function to get all results.
 * @param {function} fn
 * @param {object[]} args
 * @param {object} module
 * @param {string|number} [pageSize] defaults to 1000
 * @param {string|number} [startPage] defaults to 1
 * @returns {Promise<*>}
 */
ConnectWise.prototype.paginate = function (fn, args, module, pageSize, startPage) {
  return new Promise((resolve, reject) => {
    let results = [];

    let page = startPage;
    if (startPage === undefined || startPage < 1) {
      page = 1;
    }

    if (pageSize === undefined) {
      pageSize = 1000;
    }

    getPage(page);

    function getPage(pageNumber) {

      function pageHandler(res) {
        if (res.length > 0) {
          results = results.concat(res);
        }

        if (res.length === pageSize) {
          getPage(++pageNumber);
        } else {
          return resolve(results);
        }
      }

      //inject page key into params arg
      args.forEach(function (arg) {
        for (const key in arg) {
          if (arg.hasOwnProperty(key)) {
            if (key === 'page' || key === 'pageSize' || key === 'conditions' || key === 'orderBy') {
              arg.page = pageNumber;
              arg.pageSize = pageSize;
            }
          }
        }
      });

      fn.apply(module, args)
        .then(pageHandler)
        .catch(function (err) {
          return reject(err);
        });
    }

  });
};

/**
 * Create a parameterized string for GET requests.
 * Able to use contains, like, etc
 * Example params object: { id: 1234, conditions: 'board=CTS Helpdesk and , orderBy: 'id' }
 * Returns: ?id=1234&conditions%2Fboard%2Fboard=Service%20Board&orderBy=id
 * @private
 * @param {object|string} params
 * @returns {string}
 */
function parameterize(params) {
  if (typeof params === 'string') {
    return params;
  }

  const result = [];
  for (const param in params) {
    if (params.hasOwnProperty(param)) {
      result.push(`${param}=${encodeURIComponent(params[param])}`);
    }
  }

  return `?${result.join('&')}`;
}

/**
 *
 * @type {ConnectWise}
 */
module.exports = ConnectWise;
