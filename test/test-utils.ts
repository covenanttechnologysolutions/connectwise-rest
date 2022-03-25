import { types } from 'util'
export type PromiseArray<T> = Array<Promise<T>>

export function isPromiseType(input: unknown): input is Promise<unknown> {
  return types.isPromise(input)
}

export function isArrayOfPromises(input: unknown): input is PromiseArray<unknown> {
  if (Array.isArray(input)) {
    if (Array.length === 0) {
      return true
    }
    if (types.isPromise(input.pop)) {
      return true
    }
  }
  return false
}
