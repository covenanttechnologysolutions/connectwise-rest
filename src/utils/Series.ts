/**
 * Created by kgrube on 4/3/2019
 */
import { isPromise } from 'util/types'

export type PromiseLikeFunction =
  | (() => Promise<unknown>)
  | Promise<unknown>
  | (() => unknown)
  | { then: () => void }

export type SeriesOptions = {
  series: Array<PromiseLikeFunction>
  concurrent?: number
  delay?: number
}

/**
 *
 * @param options - options object
 * @param options.series - functions or promises to be executed
 * @param options.concurrent - number of concurrent requests
 * @param options.delay - number of ms between request groups
 * @returns array of promise results
 * @public
 */
function all({ series = [], concurrent = 1, delay = 0 }: SeriesOptions): Promise<Array<unknown>> {
  const promises = series.slice()
  const concurrency = concurrent
  let results: Array<unknown> | null = null

  return new Promise((resolve, reject) => {
    function next(result?: unknown) {
      const concurrentPromises: PromiseLikeFunction[] = []

      if (!results) {
        results = []
      } else {
        results = results.concat(result)
      }

      if (promises.length) {
        while (concurrentPromises.length < concurrency && promises.length) {
          let promise = promises.shift()

          if (typeof promise === 'function') {
            promise = <PromiseLikeFunction>promise()
          }

          if (!promise || !isPromise(promise)) {
            promise = Promise.resolve(promise)
          }

          concurrentPromises.push(promise)
        }

        setTimeout(() => Promise.all(concurrentPromises).then(next).catch(reject), delay)
      } else {
        resolve(results)
      }
    }

    next()
  })
}

export default { all }
