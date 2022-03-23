import { PatchOperation } from './ManageAPI'

import * as AutomateTypes from './AutomateTypes'
import * as ManageTypes from './ManageTypes'

export type { AutomateTypes, ManageTypes }

export enum StatusCode {
  OK = 200,
  Created = 201,
  Accepted = 202,
  NoContent = 204,
  MovedPermanently = 301,
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  TooManyRequests = 429,
  InternalServerError = 500,
  BadGateway = 502,
  ServiceUnavailable = 503,
  GatewayTimeout = 504,
}

export type Methods = 'get' | 'put' | 'delete' | 'post' | 'patch'

export type RetryOptions = {
  minTimeout: number
  retries: number
  maxTimeout: number
  randomize: boolean
}

export type RequestOptions = {
  path: string
  method?: Methods
  params?: Record<string, unknown>
  data?: Record<string, unknown> | Record<string, unknown>[] | PatchOperation[] | null | undefined
}

export type LoggingLevels = 'error' | 'info' | 'debug'

export type CWLogger = (level: LoggingLevels, text: string, meta: Record<string, unknown>) => void

export type DataResponse =
  | Record<string, unknown>
  | Record<string, unknown>[]
  | string
  | number
  | null
  | undefined

export type ErrorResponse = {
  status: number | string
  data: DataResponse
  message: string
}

// missing types from api spec
export type NoContentResponse = undefined
export type OctetStreamResponse = Buffer
export type PDFResponse = Blob
export type HTMLResponse = string
