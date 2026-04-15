import assert from 'node:assert'
import { describe, it } from 'mocha'

export function isPromise(input) {
  return (
    !!input &&
    (typeof input === 'object' || typeof input === 'function') &&
    typeof input.then === 'function'
  )
}

export function isArrayOfPromises(input) {
  if (Array.isArray(input)) {
    if (input.length === 0) {
      return true
    }
    return isPromise(input[input.length - 1])
  }
  return false
}

describe('utils', () => {
  describe('isPromise', () => {
    it('recognizes a Promise', () => {
      assert.strictEqual(isPromise(Promise.resolve()), true)
    })
    it('rejects a plain object', () => {
      assert.strictEqual(isPromise({}), false)
    })
    it('rejects null', () => {
      assert.strictEqual(isPromise(null), false)
    })
  })

  describe('isArrayOfPromises', () => {
    it('recognizes an array whose last element is a Promise', () => {
      assert.strictEqual(isArrayOfPromises([Promise.resolve()]), true)
    })
    it('accepts an empty array', () => {
      assert.strictEqual(isArrayOfPromises([]), true)
    })
    it('rejects a non-array', () => {
      assert.strictEqual(isArrayOfPromises('nope'), false)
    })
  })
})
