export type PromiseArray<T> = Array<Promise<T>>

export function isPromise(input: unknown): input is Promise<unknown> {
  return (
    !!input &&
    (typeof input === 'object' || typeof input === 'function') &&
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    typeof input.then === 'function'
  )
}

export function isPromiseType(input: unknown): input is Promise<unknown> {
  return isPromise(input)
}

export function isArrayOfPromises(input: unknown): input is PromiseArray<unknown> {
  if (Array.isArray(input)) {
    if (Array.length === 0) {
      return true
    }
    if (isPromise(input.pop)) {
      return true
    }
  }
  return false
}
