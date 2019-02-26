/**
 * Created by kgrube on 12/28/2016.
 */

/**
 * @private
 */
const inherits = require('util').inherits;
const ConnectWise = require('../ConnectWise');

/**
 * @typedef {object} ReportNames
 * @property {string} name
 */

/**
 * row_values is not a keyed array
 * @typedef {object} ReportData
 * @property {object[]} column_definitions
 * @property {Array} row_values mixed types, may be null, string, numeric, etc
 */

/**
 * Key-Vals interpolated into one object per row
 * @typedef {object} ReportDataInterpolated
 */

/**
 *
 * @typedef {object} ReportColumn
 * @property {object} ColumnName the key of the object is the name of the column (not ColumnName)
 * @property {boolean} ColumnName.isNullable
 * @property {string} ColumnName.type ['Numeric', 'Text', 'DateTime', 'Boolean']
 */

/**
 * @param {CWOptions} options
 * @inherits {ConnectWise}
 * @constructor
 */
function Reports(options) {
  ConnectWise.apply(this, Array.prototype.slice.call(arguments));
}
inherits(Reports, ConnectWise);

function reportInterpolate() {
  const data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {column_definitions: [], row_values: []};

  /* report data comes in like this:
   *  {
   *    column_definitions: [{ ColumnName: { DataType: 'number', IsNullable: true/false } } ... { ... } ],
   *    row_values: [ [1, 2, 'some string', '1900-01-01etc', null, null, false, ... ], [ ... ] ]
   *  }
   */

  const column_definitions = data.column_definitions;
  const row_values = data.row_values;

  return row_values.map(function (rowArray) {
    const rowObj = {};
    rowArray.forEach(function (value, idx) {
      const key = Object.keys(column_definitions[idx])[0];
      rowObj[key] = value;
    });
    return rowObj;
  });
  // return an array like: [ { key: value, key2: value2 ... }, ... ]
}

/**
 * @param {ParamsConditions} [params]
 * @returns {Promise<ReportNames[]>}
 */
Reports.prototype.getReports = function (params) {
  return this.api('/system/reports', 'GET', params);
};

/**
 *
 * @param {string} reportName
 * @param {Params} [params]
 * @param {boolean} [disableInterpolate]
 * @returns {Promise<ReportData[]|ReportDataInterpolated[]>}
 */
Reports.prototype.getReport = function (reportName, params, disableInterpolate) {
  return this.api(`/system/reports/${reportName}/`, 'GET', params)
    .then(function (data) {
      if (disableInterpolate) return data;
      return reportInterpolate(data);
    });
};

/**
 *
 * @param {string} reportName
 * @param {ParamsConditions} params
 * @returns {Promise<Count>}
 */
Reports.prototype.getReportResultsCount = function (reportName, params) {
  return this.api(`/system/reports/${reportName}/count`, 'GET', params);
};

/**
 *
 * @param reportName
 * @returns {Promise<ReportColumn[]>}
 */
Reports.prototype.getColumnDefinitions = function (reportName) {
  return this.api(`/system/reports/${reportName}/columns`, 'GET');
};

/**
 *
 * @type {Reports}
 */
module.exports = Reports;
