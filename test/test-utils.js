exports.isPromise = function isPromise(input) {
  return (
    !!input &&
    (typeof input === 'object' || typeof input === 'function') &&
    typeof input.then === 'function'
  )
}

exports.isArrayOfPromises = function isArrayOfPromises(input) {
  if (Array.isArray(input)) {
    if (Array.length === 0) {
      return true
    }
    if (exports.isPromise(input.pop)) {
      return true
    }
  }
  return false
}
