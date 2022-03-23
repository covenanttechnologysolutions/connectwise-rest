/*
 * Created by kgrube on 4/3/2019
 */
import axios from 'axios'
import crypto from 'crypto'
import type { ClientRequest, ServerResponse } from 'http'

interface ExpressRequest extends ClientRequest {
  body: CallbackPayload
  headers: Record<string, string>
}

type CallbackPayload = {
  Action: string
  CompanyId: string | number
  Entity: string
  FromUrl: string
  ID: string | number
  MemberId: string | number
  Metadata: {
    key_url: string
  }
  Type: string
}

export type Entity = Record<string, unknown> | Array<Record<string, unknown>>

/**
 * Load signing key and verify the message
 * @param callbackBody -
 * @param contentSignature - base64 content signature req.headers[x-content-signature]
 * @returns verifies callback signature
 * @public
 */
export function verifyCallback(
  callbackBody: CallbackPayload,
  contentSignature: string,
): Promise<boolean> {
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
 * @param callbackBody -
 * @param contentSignature -
 * @param signingKey -
 * @returns boolean if verified
 * @public
 */
export function verifyMessage(
  callbackBody: CallbackPayload,
  contentSignature: string,
  signingKey: string,
): boolean {
  const hash = crypto.createHash('sha256').update(signingKey).digest()
  const hmac = crypto.createHmac('sha256', hash)

  return contentSignature === hmac.update(JSON.stringify(callbackBody)).digest('base64')
}

/**
 *
 * @example
 * Express style middleware
 * ```
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
 * ```
 *
 * @param cb - callback(err, req, res, verified, payload)
 * @public
 */
export function middleware(
  cb: (
    err: Error | null,
    req: ExpressRequest,
    res: ServerResponse,
    verified: boolean,
    payload: Entity | undefined,
  ) => void,
) {
  if (!cb || typeof cb !== 'function') {
    throw new Error('callback must be a function.')
  }

  return (req: ExpressRequest, res: ServerResponse) => {
    if (!req || !req.body || !req.body.Metadata) {
      return cb(new Error('callback payload is invalid.'), req, res, false, undefined)
    }

    const contentSignature = req.headers['x-content-signature']
    const callbackBody = req.body

    let parsedEntity: Entity
    try {
      parsedEntity = JSON.parse(callbackBody.Entity)
    } catch (parseErr) {
      if (parseErr instanceof Error) {
        return cb(parseErr, req, res, false, undefined)
      }
    }

    verifyCallback(callbackBody, contentSignature)
      .then((verified) => {
        return cb(null, req, res, verified, Object.assign(callbackBody, { Entity: parsedEntity }))
      })
      .catch((err) => {
        return cb(err, req, res, false, undefined)
      })
  }
}

export default { middleware, verifyCallback, verifyMessage }
