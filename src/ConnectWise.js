/**
 * Created by kevin on 12/20/2015
 * @author kgrube
 */

var request = require('request'),
    btoa = require('btoa');

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
 * @param {{}} options
 * @param options.companyId
 * @param options.publicKey
 * @param options.privateKey
 * @param options.companyUrl
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
 * @param {string} path
 * @param {string} method HTTP method, GET, POST, PUT, PATCH, DELETE
 * @param {object} params if required by route, include params
 * @param {function} callback
 */
ConnectWise.prototype.api = function (path, method, params, callback) {

    if (!path) {
        throw new Error('path must be defined');
    }
    if (!method) {
        throw new Error('method must be defined');
    }
    if (!callback) {
        throw new Error('callback must be defined');
    }

    var cb = callback;
    var options = {
        url: this.config.apiUrl + path,
        headers: {
            'Accept': 'text/html,application/json,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Cache-Control': 'no-cache',
            'Authorization': this.config.auth
        },
        method: method
    };

    if(method === 'GET' && params){
        options.url += paramaterize(params);
    }

    request(options, function (err, res) {
        if (err) {
            cb(err.code + ': ' + err.message, null);
        } else {
            try {
                var body = JSON.parse(res.body);
                if (body.code) {
                    cb(body.code + ': ' + body.message, null);
                } else {
                    cb(null, body);
                }
            } catch (e) {
                cb(e, null);
            }
        }
    });
};

/**
 * Create a parameterized string for GET requests.
 * Example params object: { id: 1234, conditions: { board: { name: 'Service board' } }, orderBy: 'id' }
 * Returns: ?id=1234&conditions%2Fboard%2Fboard=Service%20Board&orderBy=id
 *
 * @param params
 * @returns {string}
 */
function paramaterize(params){


}

/**
 *
 * @type {ConnectWise}
 */
module.exports = ConnectWise;
