/**
 * Created by kevin on 12/20/2015
 * @author kgrube
 */

/**
 * @private
 */
var request = require('request'),
    btoa = require('btoa'),
    Q = require('q');

/**
 * @const {string} DEFAULTS.entryPoint
 * @const {string} DEFAULTS.apiVersion
 * @type {{entryPoint: string, apiVersion: string}}
 */
var DEFAULTS = {
    entryPoint: '/v4_6_release/apis/3.0',
    apiVersion: '3.0'
};

/**
 * @param {object} options
 * @param {string} options.companyId
 * @param {string} options.publicKey
 * @param {string} options.privateKey
 * @param {string} options.companyUrl
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

    this.config = {};

    this.config.companyId = options.companyId;
    this.config.companyUrl = options.companyUrl;
    this.config.apiUrl = 'https://' + options.companyUrl + DEFAULTS.entryPoint;
    this.config.publicKey = options.publicKey;
    this.config.privateKey = options.privateKey;
    this.config.authRaw = options.companyId + '+' + options.publicKey + ':' + options.privateKey;
    this.config.auth = 'Basic ' + btoa(this.config.authRaw);

}

/**
 *
 * @param {string} path API method path or full URL to perform method upon
 * @param {string} method HTTP method, GET, POST, PUT, PATCH, DELETE
 * @param {object} [params] if required by route, include required params
 *                          if a GET request, the params are joined into a string
 *                          if a POST/PUT/PATCH, the params are included in the body
 */
ConnectWise.prototype.api = function (path, method, params) {
    var deferred = Q.defer();

    if (!path) {
        throw new Error('path must be defined');
    }
    if (!method) {
        throw new Error('method must be defined');
    }

    var options = {
        url: this.config.apiUrl + path,
        headers: {
            'Accept': 'text/html,application/json,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Cache-Control': 'no-cache',
            'Authorization': this.config.auth
        },
        method: method
    };

    //@TODO perform URL validation here
    if(path.match(/http:\/\//)){
        options.url = path;
    }

    if (method === 'GET' && params) {
        options.url += parameterize(params);
    }

    if (method === 'POST' || method === 'PUT' || method === 'PATCH') {
        options.headers['Content-Type'] = 'application/json';
        options.body = JSON.stringify(params);
    }

    request(options, function (err, res) {
        if (err) {
            deferred.reject(err.code + ': ' + err.message);
        } else {
            try {
                var body = JSON.parse(res.body);
                if (body.code) {
                    deferred.reject(body);
                } else {
                    deferred.resolve(body);
                }
            } catch (e) {
                deferred.reject(e);
            }
        }
    });

    return deferred.promise;
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
    if (typeof params === "string") {
        return params;
    }

    var result = [];
    for (var param in params) {
        if (params.hasOwnProperty(param)) {
            result.push(param + '=' + params[param]);
        }
    }

    return encodeURI('?' + result.join('&'));
}

/**
 *
 * @type {ConnectWise}
 */
module.exports = ConnectWise;
