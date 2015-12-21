/**
 * Created by kevin on 12/20/2015
 * @author kgrube
 */

var request = require('request'),
    btoa = require('btoa');

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
    this.config.auth = btoa(this.config.authRaw);

    console.log(this.config.authRaw, this.config.auth);
}

/**
 *
 * @param path
 * @param method
 * @param callback
 */
ConnectWise.prototype.api = function (path, method, callback) {

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
            //'Basic': this.config.auth,
            //'www-authenticate': this.config.auth,
            //'x-cw-usertype': 'integrator',
            //'Basic': this.config.auth,
            'Authorization': this.config.auth
        },
        method: method
    };

    console.log(options);

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

module.exports = ConnectWise;
