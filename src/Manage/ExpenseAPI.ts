/* This file was auto-generated, do not manually edit. */
import Manage from '../Manage'
import { components } from '../ManageTypes'
import { CommonParameters, CWMOptions } from '../ManageAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type Classification = schemas['Classification']
type Count = schemas['Count']
type ExpenseEntry = schemas['ExpenseEntry']
type ExpenseEntryAudit = schemas['ExpenseEntryAudit']
type ExpenseReport = schemas['ExpenseReport']
type ExpenseReportAudit = schemas['ExpenseReportAudit']
type ExpenseTaxTypeInfo = schemas['ExpenseTaxTypeInfo']
type ExpenseType = schemas['ExpenseType']
type ExpenseTypeInfo = schemas['ExpenseTypeInfo']
type PatchOperation = schemas['PatchOperation']
type PaymentType = schemas['PaymentType']
type PaymentTypeInfo = schemas['PaymentTypeInfo']
type SuccessResponse = schemas['SuccessResponse']

/**
 * @internal
 */
export default class ExpenseAPI extends Manage {
  constructor(props: CWMOptions) {
    super(props)
  }

  getExpenseClassifications(params: CommonParameters = {}): Promise<Classification[]> {
    return this.request({
      path: `/expense/classifications`,
      method: 'get',
      params,
    })
  }

  getExpenseClassificationsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<Classification> {
    return this.request({
      path: `/expense/classifications/${id}`,
      method: 'get',
      params,
    })
  }

  getExpenseClassificationsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/expense/classifications/count`,
      method: 'get',
      params,
    })
  }

  getExpenseEntries(params: CommonParameters = {}): Promise<ExpenseEntry[]> {
    return this.request({
      path: `/expense/entries`,
      method: 'get',
      params,
    })
  }

  postExpenseEntries(expenseEntry: ExpenseEntry): Promise<ExpenseEntry> {
    return this.request({
      path: `/expense/entries`,
      method: 'post',
      data: expenseEntry,
    })
  }

  getExpenseEntriesById(id: number, params: CommonParameters = {}): Promise<ExpenseEntry> {
    return this.request({
      path: `/expense/entries/${id}`,
      method: 'get',
      params,
    })
  }

  deleteExpenseEntriesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/expense/entries/${id}`,
      method: 'delete',
    })
  }

  putExpenseEntriesById(id: number, expenseEntry: ExpenseEntry): Promise<ExpenseEntry> {
    return this.request({
      path: `/expense/entries/${id}`,
      method: 'put',
      data: expenseEntry,
    })
  }

  patchExpenseEntriesById(id: number, patchOperations: PatchOperation[]): Promise<ExpenseEntry> {
    return this.request({
      path: `/expense/entries/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getExpenseEntriesByParentIdAudits(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ExpenseEntryAudit[]> {
    return this.request({
      path: `/expense/entries/${parentId}/audits`,
      method: 'get',
      params,
    })
  }

  getExpenseEntriesByParentIdAuditsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ExpenseEntryAudit> {
    return this.request({
      path: `/expense/entries/${parentId}/audits/{id}`,
      method: 'get',
      params,
    })
  }

  getExpenseEntriesByParentIdAuditsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/expense/entries/${parentId}/audits/count`,
      method: 'get',
      params,
    })
  }

  getExpenseEntriesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/expense/entries/count`,
      method: 'get',
      params,
    })
  }

  getExpenseInfoTaxTypes(params: CommonParameters = {}): Promise<ExpenseTaxTypeInfo[]> {
    return this.request({
      path: `/expense/info/taxTypes`,
      method: 'get',
      params,
    })
  }

  getExpenseInfoTaxTypesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<ExpenseTaxTypeInfo> {
    return this.request({
      path: `/expense/info/taxTypes/${id}`,
      method: 'get',
      params,
    })
  }

  getExpenseInfoTaxTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/expense/info/taxTypes/count`,
      method: 'get',
      params,
    })
  }

  getExpensePaymentTypes(params: CommonParameters = {}): Promise<PaymentType[]> {
    return this.request({
      path: `/expense/paymentTypes`,
      method: 'get',
      params,
    })
  }

  postExpensePaymentTypes(paymentType: PaymentType): Promise<PaymentType> {
    return this.request({
      path: `/expense/paymentTypes`,
      method: 'post',
      data: paymentType,
    })
  }

  getExpensePaymentTypesById(id: number, params: CommonParameters = {}): Promise<PaymentType> {
    return this.request({
      path: `/expense/paymentTypes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteExpensePaymentTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/expense/paymentTypes/${id}`,
      method: 'delete',
    })
  }

  putExpensePaymentTypesById(id: number, paymentType: PaymentType): Promise<PaymentType> {
    return this.request({
      path: `/expense/paymentTypes/${id}`,
      method: 'put',
      data: paymentType,
    })
  }

  patchExpensePaymentTypesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<PaymentType> {
    return this.request({
      path: `/expense/paymentTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getExpensePaymentTypesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<PaymentTypeInfo> {
    return this.request({
      path: `/expense/paymentTypes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getExpensePaymentTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/expense/paymentTypes/count`,
      method: 'get',
      params,
    })
  }

  getExpensePaymentTypesInfo(params: CommonParameters = {}): Promise<PaymentTypeInfo[]> {
    return this.request({
      path: `/expense/paymentTypes/info`,
      method: 'get',
      params,
    })
  }

  getExpenseReports(params: CommonParameters = {}): Promise<ExpenseReport[]> {
    return this.request({
      path: `/expense/reports`,
      method: 'get',
      params,
    })
  }

  getExpenseReportsById(id: number, params: CommonParameters = {}): Promise<ExpenseReport> {
    return this.request({
      path: `/expense/reports/${id}`,
      method: 'get',
      params,
    })
  }

  postExpenseReportsByIdReverse(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/expense/reports/${id}/reverse`,
      method: 'post',
    })
  }

  postExpenseReportsByIdSubmit(id: number): Promise<SuccessResponse> {
    return this.request({
      path: `/expense/reports/${id}/submit`,
      method: 'post',
    })
  }

  getExpenseReportsByParentIdAudits(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ExpenseReportAudit[]> {
    return this.request({
      path: `/expense/reports/${parentId}/audits`,
      method: 'get',
      params,
    })
  }

  getExpenseReportsByParentIdAuditsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ExpenseReportAudit> {
    return this.request({
      path: `/expense/reports/${parentId}/audits/{id}`,
      method: 'get',
      params,
    })
  }

  getExpenseReportsByParentIdAuditsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/expense/reports/${parentId}/audits/count`,
      method: 'get',
      params,
    })
  }

  getExpenseReportsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/expense/reports/count`,
      method: 'get',
      params,
    })
  }

  getExpenseTypes(params: CommonParameters = {}): Promise<ExpenseType[]> {
    return this.request({
      path: `/expense/types`,
      method: 'get',
      params,
    })
  }

  postExpenseTypes(expenseType: ExpenseType): Promise<ExpenseType> {
    return this.request({
      path: `/expense/types`,
      method: 'post',
      data: expenseType,
    })
  }

  getExpenseTypesById(id: number, params: CommonParameters = {}): Promise<ExpenseType> {
    return this.request({
      path: `/expense/types/${id}`,
      method: 'get',
      params,
    })
  }

  deleteExpenseTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/expense/types/${id}`,
      method: 'delete',
    })
  }

  putExpenseTypesById(id: number, expenseType: ExpenseType): Promise<ExpenseType> {
    return this.request({
      path: `/expense/types/${id}`,
      method: 'put',
      data: expenseType,
    })
  }

  patchExpenseTypesById(id: number, patchOperations: PatchOperation[]): Promise<ExpenseType> {
    return this.request({
      path: `/expense/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getExpenseTypesByIdInfo(id: number, params: CommonParameters = {}): Promise<ExpenseTypeInfo> {
    return this.request({
      path: `/expense/types/${id}/info`,
      method: 'get',
      params,
    })
  }

  getExpenseTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/expense/types/count`,
      method: 'get',
      params,
    })
  }

  getExpenseTypesInfo(params: CommonParameters = {}): Promise<ExpenseTypeInfo[]> {
    return this.request({
      path: `/expense/types/info`,
      method: 'get',
      params,
    })
  }
}
