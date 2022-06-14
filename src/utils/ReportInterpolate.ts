import type { ReportDataResponse } from '../Manage/SystemAPI'

/**
 * Transform a report column/value response object into an array
 * @param {ReportDataResponse} args
 */
export function reportInterpolate(...args: ReportDataResponse[]) {
  const data =
    args.length > 0 && args[0] !== undefined ? args[0] : { column_definitions: [], row_values: [] }

  /* report data comes in like this:
   *  {
   *    column_definitions: [{ ColumnName: { DataType: 'number', IsNullable: true/false } } ... { ... } ],
   *    row_values: [ [1, 2, 'some string', '1900-01-01etc', null, null, false, ... ], [ ... ] ]
   *  }
   */

  const column_definitions = data.column_definitions || []
  const row_values = data.row_values || []

  return row_values.map((rowArray: Array<unknown>) => {
    const rowObj: Record<string, unknown> = {}
    rowArray.forEach((value, idx) => {
      const key = Object.keys(column_definitions[idx])[0]
      rowObj[key] = value
    })
    return rowObj
  })
  // return an array like: [ { key: value, key2: value2 ... }, ... ]
}
