/**
 * Created by kgrube on 4/3/2019
 * @private
 */
import axios from 'axios'
import crypto from 'crypto'

/**
 * @typedef {Object} CallbackPayload
 * @property Action
 * @property CompanyId
 * @property Entity json string
 * @property FromUrl
 * @property ID
 * @property MemberId
 * @property {object} Metadata
 * @property Metadata.key_url
 * @property Type
 */

/**
 * @typedef {object} CWCallback
 * @property verifyCallback
 * @property verifyMessage
 * @property middleware
 *
 */

/**
 * Load signing key and verify the message
 * @param {CallbackPayload} callbackBody
 * @param {string} contentSignature base64 content signature req.headers[x-content-signature]
 * @return {Promise<boolean>}
 */
function verifyCallback(callbackBody, contentSignature) {
  return new Promise((resolve, reject) => {
    if (!callbackBody || !contentSignature) {
      throw new Error('callbackBody and contentSignature must be defined.')
    }

    const key_url = callbackBody.Metadata && callbackBody.Metadata.key_url

    axios
      .get(key_url)
      .then((response) => {
        const body = response.data
        try {
          const parsed = JSON.parse(body)
          const signingKey = parsed.signing_key

          return resolve(verifyMessage(callbackBody, contentSignature, signingKey))
        } catch (parseErr) {
          return reject(parseErr)
        }
      })
      .catch((err) => reject(err))
  })
}

/**
 * Validate a callback body against signed key
 * @param {CallbackPayload} callbackBody
 * @param {string} contentSignature
 * @param {string} signingKey
 * @returns {boolean}
 */
function verifyMessage(callbackBody, contentSignature, signingKey) {
  const hash = crypto.createHash('sha256').update(signingKey).digest()
  const hmac = crypto.createHmac('sha256', hash)

  return contentSignature === hmac.update(JSON.stringify(callbackBody)).digest('base64')
}

/**
 * Express style middleware
 * @example
 * app.post('/your/api', cw.utils.middleware((err, req, res, verified, payload) => {
 *  if (err) {
 *    //handle error
 *    res.status(500).end();
 *  } else if (!verified) {
 *    // send 403 on verification failure
 *    res.status(403).end();
 *  } else {
 *    res.status(200).end()
 *  }
 *  const {action, id} = req.query;
 *  // do something with the payload
 * }));
 *
 * @param {function} cb callback(err, req, res, verified, payload)
 */
function middleware(cb) {
  if (!cb || typeof cb !== 'function') {
    throw new Error('callback must be a function.')
  }

  return (req, res) => {
    if (!req || !req.body || !req.body.Metadata) {
      return cb(new Error('callback payload is invalid.'), req, res, false)
    }

    const contentSignature = req.headers['x-content-signature']
    const callbackBody = req.body

    let parsedEntity
    try {
      parsedEntity = JSON.parse(callbackBody.Entity)
    } catch (parseErr) {
      return cb(parseErr, req, res, false)
    }

    verifyCallback(callbackBody, contentSignature)
      .then((verified) => {
        return cb(null, req, res, verified, Object.assign(callbackBody, { Entity: parsedEntity }))
      })
      .catch((err) => {
        return cb(err, req, res, false)
      })
  }
}

module.exports = {
  verifyMessage,
  verifyCallback,
  middleware,
}
