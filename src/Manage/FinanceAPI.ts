/* This file was auto-generated, do not manually edit. */
import Manage from '../Manage'
import { components } from '../ManageTypes'
import { CommonParameters, CWMOptions } from '../ManageAPI'
import { NoContentResponse, OctetStreamResponse, PDFResponse, HTMLResponse } from '../types'
type schemas = components['schemas']
type AccountingBatch = schemas['AccountingBatch']
type AccountingPackage = schemas['AccountingPackage']
type AccountingPackageSetup = schemas['AccountingPackageSetup']
type Addition = schemas['Addition']
type Agreement = schemas['Agreement']
type AgreementAdjustment = schemas['Agreement.Adjustment']
type AgreementBatchSetup = schemas['AgreementBatchSetup']
type AgreementSite = schemas['AgreementSite']
type AgreementType = schemas['AgreementType']
type AgreementTypeBoardDefault = schemas['AgreementTypeBoardDefault']
type AgreementTypeInfo = schemas['AgreementTypeInfo']
type AgreementTypeWorkRole = schemas['AgreementTypeWorkRole']
type AgreementTypeWorkRoleExclusion = schemas['AgreementTypeWorkRoleExclusion']
type AgreementTypeWorkRoleInfo = schemas['AgreementTypeWorkRoleInfo']
type AgreementTypeWorkType = schemas['AgreementTypeWorkType']
type AgreementTypeWorkTypeExclusion = schemas['AgreementTypeWorkTypeExclusion']
type AgreementWorkRole = schemas['AgreementWorkRole']
type AgreementWorkRoleExclusion = schemas['AgreementWorkRoleExclusion']
type AgreementWorkType = schemas['AgreementWorkType']
type AgreementWorkTypeExclusion = schemas['AgreementWorkTypeExclusion']
type BatchEntry = schemas['BatchEntry']
type BillingCycle = schemas['BillingCycle']
type BillingCycleInfo = schemas['BillingCycleInfo']
type BillingSetup = schemas['BillingSetup']
type BillingSetupInfo = schemas['BillingSetupInfo']
type BillingSetupRouting = schemas['BillingSetupRouting']
type BillingStatus = schemas['BillingStatus']
type BillingStatusInfo = schemas['BillingStatusInfo']
type BillingTerm = schemas['BillingTerm']
type BillingTermInfo = schemas['BillingTermInfo']
type BoardDefault = schemas['BoardDefault']
type ClosedInvoice = schemas['ClosedInvoice']
type CompanyFinance = schemas['CompanyFinance']
type ConfigurationReference = schemas['ConfigurationReference']
type Count = schemas['Count']
type CreateAccountingBatchRequest = schemas['CreateAccountingBatchRequest']
type CurrencyCode = schemas['CurrencyCode']
type CurrencyInfo = schemas['CurrencyInfo']
type DeliveryMethod = schemas['DeliveryMethod']
type ExpenseTypeExemption = schemas['ExpenseTypeExemption']
type ExportAccountingBatchRequest = schemas['ExportAccountingBatchRequest']
type FinanceCurrency = schemas['Finance.Currency']
type GLAccount = schemas['GLAccount']
type GLCaption = schemas['GLCaption']
type GLExport = schemas['GLExport']
type GLPath = schemas['GLPath']
type Invoice = schemas['Invoice']
type InvoiceEmailTemplate = schemas['InvoiceEmailTemplate']
type InvoiceEmailTemplateInfo = schemas['InvoiceEmailTemplateInfo']
type InvoiceInfo = schemas['InvoiceInfo']
type InvoiceTemplate = schemas['InvoiceTemplate']
type InvoiceTemplateSetup = schemas['InvoiceTemplateSetup']
type MappedType = schemas['MappedType']
type PatchOperation = schemas['PatchOperation']
type Payment = schemas['Payment']
type ProductTypeExemption = schemas['ProductTypeExemption']
type TaxCode = schemas['TaxCode']
type TaxCodeInfo = schemas['TaxCodeInfo']
type TaxCodeLevel = schemas['TaxCodeLevel']
type TaxCodeXRef = schemas['TaxCodeXRef']
type TaxIntegration = schemas['TaxIntegration']
type TaxIntegrationInfo = schemas['TaxIntegrationInfo']
type TaxableExpenseTypeLevel = schemas['TaxableExpenseTypeLevel']
type TaxableProductTypeLevel = schemas['TaxableProductTypeLevel']
type TaxableWorkRoleLevel = schemas['TaxableWorkRoleLevel']
type TaxableXRefLevel = schemas['TaxableXRefLevel']
type UnpostedExpense = schemas['UnpostedExpense']
type UnpostedExpenseTaxableLevel = schemas['UnpostedExpenseTaxableLevel']
type UnpostedInvoice = schemas['UnpostedInvoice']
type UnpostedInvoiceTaxableLevel = schemas['UnpostedInvoiceTaxableLevel']
type UnpostedProcurement = schemas['UnpostedProcurement']
type UnpostedProcurementTaxableLevel = schemas['UnpostedProcurementTaxableLevel']
type Usage = schemas['Usage']
type WorkRoleExemption = schemas['WorkRoleExemption']

export default class FinanceAPI extends Manage {
  constructor(props: CWMOptions) {
    super(props)
  }

  getFinanceAccountingBatches(params: CommonParameters = {}): Promise<AccountingBatch[]> {
    return this.request({
      path: `/finance/accounting/batches`,
      method: 'get',
      params,
    })
  }

  postFinanceAccountingBatches(
    accountingBatchParameters: CreateAccountingBatchRequest,
  ): Promise<GLExport> {
    return this.request({
      path: `/finance/accounting/batches`,
      method: 'post',
      data: accountingBatchParameters,
    })
  }

  getFinanceAccountingBatchesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<AccountingBatch> {
    return this.request({
      path: `/finance/accounting/batches/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAccountingBatchesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/accounting/batches/${id}`,
      method: 'delete',
    })
  }

  postFinanceAccountingBatchesByIdExport(
    id: number,
    batchExportParameters: ExportAccountingBatchRequest,
  ): Promise<GLExport> {
    return this.request({
      path: `/finance/accounting/batches/${id}/export`,
      method: 'post',
      data: batchExportParameters,
    })
  }

  getFinanceAccountingBatchesByParentIdEntries(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BatchEntry[]> {
    return this.request({
      path: `/finance/accounting/batches/${parentId}/entries`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingBatchesByParentIdEntriesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BatchEntry> {
    return this.request({
      path: `/finance/accounting/batches/${parentId}/entries/{id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingBatchesByParentIdEntriesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/accounting/batches/${parentId}/entries/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingBatchesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/accounting/batches/count`,
      method: 'get',
      params,
    })
  }

  postFinanceAccountingExport(
    batchExportParameters: ExportAccountingBatchRequest,
  ): Promise<GLExport> {
    return this.request({
      path: `/finance/accounting/export`,
      method: 'post',
      data: batchExportParameters,
    })
  }

  getFinanceAccountingUnpostedexpenses(params: CommonParameters = {}): Promise<UnpostedExpense[]> {
    return this.request({
      path: `/finance/accounting/unpostedexpenses`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedexpensesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<UnpostedExpense> {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedexpensesByParentIdTaxableLevels(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<UnpostedExpenseTaxableLevel[]> {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/${parentId}/taxableLevels`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedexpensesByParentIdTaxableLevelsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<UnpostedExpenseTaxableLevel> {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/${parentId}/taxableLevels/{id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedexpensesByParentIdTaxableLevelsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/${parentId}/taxableLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedexpensesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedinvoices(params: CommonParameters = {}): Promise<UnpostedInvoice[]> {
    return this.request({
      path: `/finance/accounting/unpostedinvoices`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedinvoicesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<UnpostedInvoice> {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedinvoicesByParentIdTaxableLevels(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<UnpostedInvoiceTaxableLevel[]> {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/${parentId}/taxableLevels`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedinvoicesByParentIdTaxableLevelsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<UnpostedInvoiceTaxableLevel> {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/${parentId}/taxableLevels/{id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedinvoicesByParentIdTaxableLevelsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/${parentId}/taxableLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedinvoicesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedprocurement(
    params: CommonParameters = {},
  ): Promise<UnpostedProcurement[]> {
    return this.request({
      path: `/finance/accounting/unpostedprocurement`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedprocurementById(
    id: number,
    params: CommonParameters = {},
  ): Promise<UnpostedProcurement> {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedprocurementByParentIdTaxableLevels(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<UnpostedProcurementTaxableLevel[]> {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/${parentId}/taxableLevels`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedprocurementByParentIdTaxableLevelsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<UnpostedProcurementTaxableLevel> {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/${parentId}/taxableLevels/{id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedprocurementByParentIdTaxableLevelsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/${parentId}/taxableLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingUnpostedprocurementCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingPackages(params: CommonParameters = {}): Promise<AccountingPackage[]> {
    return this.request({
      path: `/finance/accountingPackages`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingPackagesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<AccountingPackage> {
    return this.request({
      path: `/finance/accountingPackages/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingPackagesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/accountingPackages/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingPackageSetup(
    params: CommonParameters = {},
  ): Promise<AccountingPackageSetup[]> {
    return this.request({
      path: `/finance/accountingPackageSetup`,
      method: 'get',
      params,
    })
  }

  getFinanceAccountingPackageSetupById(
    id: number,
    params: CommonParameters = {},
  ): Promise<AccountingPackageSetup> {
    return this.request({
      path: `/finance/accountingPackageSetup/${id}`,
      method: 'get',
      params,
    })
  }

  putFinanceAccountingPackageSetupById(
    id: number,
    accountingPackageSetup: AccountingPackageSetup,
  ): Promise<AccountingPackageSetup> {
    return this.request({
      path: `/finance/accountingPackageSetup/${id}`,
      method: 'put',
      data: accountingPackageSetup,
    })
  }

  patchFinanceAccountingPackageSetupById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<AccountingPackageSetup> {
    return this.request({
      path: `/finance/accountingPackageSetup/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAccountingPackageSetupCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/accountingPackageSetup/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreements(params: CommonParameters = {}): Promise<Agreement[]> {
    return this.request({
      path: `/finance/agreements`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreements(agreement: Agreement): Promise<Agreement> {
    return this.request({
      path: `/finance/agreements`,
      method: 'post',
      data: agreement,
    })
  }

  getFinanceAgreementsById(id: number, params: CommonParameters = {}): Promise<Agreement> {
    return this.request({
      path: `/finance/agreements/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsById(id: number, agreement: Agreement): Promise<Agreement> {
    return this.request({
      path: `/finance/agreements/${id}`,
      method: 'put',
      data: agreement,
    })
  }

  patchFinanceAgreementsById(id: number, patchOperations: PatchOperation[]): Promise<Agreement> {
    return this.request({
      path: `/finance/agreements/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsByParentIdAdditions(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Addition[]> {
    return this.request({
      path: `/finance/agreements/${parentId}/additions`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdAdditions(
    parentId: number,
    addition: Addition,
  ): Promise<Addition> {
    return this.request({
      path: `/finance/agreements/${parentId}/additions`,
      method: 'post',
      data: addition,
    })
  }

  getFinanceAgreementsByParentIdAdditionsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Addition> {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsByParentIdAdditionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/{id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsByParentIdAdditionsById(
    id: number,
    parentId: number,
    addition: Addition,
  ): Promise<Addition> {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/{id}`,
      method: 'put',
      data: addition,
    })
  }

  patchFinanceAgreementsByParentIdAdditionsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<Addition> {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsByParentIdAdditionsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdAdjustments(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementAdjustment[]> {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdAdjustments(
    parentId: number,
    adjustment: AgreementAdjustment,
  ): Promise<AgreementAdjustment> {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments`,
      method: 'post',
      data: adjustment,
    })
  }

  getFinanceAgreementsByParentIdAdjustmentsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementAdjustment> {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsByParentIdAdjustmentsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/{id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsByParentIdAdjustmentsById(
    id: number,
    parentId: number,
    adjustment: AgreementAdjustment,
  ): Promise<AgreementAdjustment> {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/{id}`,
      method: 'put',
      data: adjustment,
    })
  }

  patchFinanceAgreementsByParentIdAdjustmentsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<AgreementAdjustment> {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsByParentIdAdjustmentsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdBoardDefaults(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardDefault[]> {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdBoardDefaults(
    parentId: number,
    boardDefault: BoardDefault,
  ): Promise<BoardDefault> {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults`,
      method: 'post',
      data: boardDefault,
    })
  }

  getFinanceAgreementsByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BoardDefault> {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/{id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
    boardDefault: BoardDefault,
  ): Promise<BoardDefault> {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/{id}`,
      method: 'put',
      data: boardDefault,
    })
  }

  patchFinanceAgreementsByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<BoardDefault> {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsByParentIdBoardDefaultsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdConfigurations(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ConfigurationReference[]> {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdConfigurations(
    parentId: number,
    configuration: ConfigurationReference,
  ): Promise<ConfigurationReference> {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations`,
      method: 'post',
      data: configuration,
    })
  }

  getFinanceAgreementsByParentIdConfigurationsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ConfigurationReference> {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsByParentIdConfigurationsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations/{id}`,
      method: 'delete',
    })
  }

  getFinanceAgreementsByParentIdConfigurationsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdSites(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementSite[]> {
    return this.request({
      path: `/finance/agreements/${parentId}/sites`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdSites(
    parentId: number,
    site: AgreementSite,
  ): Promise<AgreementSite> {
    return this.request({
      path: `/finance/agreements/${parentId}/sites`,
      method: 'post',
      data: site,
    })
  }

  getFinanceAgreementsByParentIdSitesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementSite> {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsByParentIdSitesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/{id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsByParentIdSitesById(
    id: number,
    parentId: number,
    site: AgreementSite,
  ): Promise<AgreementSite> {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/{id}`,
      method: 'put',
      data: site,
    })
  }

  patchFinanceAgreementsByParentIdSitesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<AgreementSite> {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsByParentIdSitesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdWorkRoleExclusions(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementWorkRoleExclusion[]> {
    return this.request({
      path: `/finance/agreements/${parentId}/workRoleExclusions`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdWorkRoleExclusions(
    parentId: number,
    workRoleExclusion: AgreementWorkRoleExclusion,
  ): Promise<AgreementWorkRoleExclusion> {
    return this.request({
      path: `/finance/agreements/${parentId}/workRoleExclusions`,
      method: 'post',
      data: workRoleExclusion,
    })
  }

  deleteFinanceAgreementsByParentIdWorkRoleExclusionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/workRoleExclusions/{id}`,
      method: 'delete',
    })
  }

  getFinanceAgreementsByParentIdWorkRoleExclusionsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/workRoleExclusions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdWorkroles(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementWorkRole[]> {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdWorkroles(
    parentId: number,
    workRole: AgreementWorkRole,
  ): Promise<AgreementWorkRole> {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles`,
      method: 'post',
      data: workRole,
    })
  }

  getFinanceAgreementsByParentIdWorkrolesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementWorkRole> {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsByParentIdWorkrolesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/{id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsByParentIdWorkrolesById(
    id: number,
    parentId: number,
    workRole: AgreementWorkRole,
  ): Promise<AgreementWorkRole> {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/{id}`,
      method: 'put',
      data: workRole,
    })
  }

  patchFinanceAgreementsByParentIdWorkrolesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<AgreementWorkRole> {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsByParentIdWorkrolesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdWorkTypeExclusions(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementWorkTypeExclusion[]> {
    return this.request({
      path: `/finance/agreements/${parentId}/workTypeExclusions`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdWorkTypeExclusions(
    parentId: number,
    workTypeExclusion: AgreementWorkTypeExclusion,
  ): Promise<AgreementWorkTypeExclusion> {
    return this.request({
      path: `/finance/agreements/${parentId}/workTypeExclusions`,
      method: 'post',
      data: workTypeExclusion,
    })
  }

  deleteFinanceAgreementsByParentIdWorkTypeExclusionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/workTypeExclusions/{id}`,
      method: 'delete',
    })
  }

  getFinanceAgreementsByParentIdWorkTypeExclusionsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/workTypeExclusions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsByParentIdWorktypes(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementWorkType[]> {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsByParentIdWorktypes(
    parentId: number,
    workType: AgreementWorkType,
  ): Promise<AgreementWorkType> {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes`,
      method: 'post',
      data: workType,
    })
  }

  getFinanceAgreementsByParentIdWorktypesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementWorkType> {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsByParentIdWorktypesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/{id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsByParentIdWorktypesById(
    id: number,
    parentId: number,
    workType: AgreementWorkType,
  ): Promise<AgreementWorkType> {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/{id}`,
      method: 'put',
      data: workType,
    })
  }

  patchFinanceAgreementsByParentIdWorktypesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<AgreementWorkType> {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsByParentIdWorktypesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/agreements/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsTypes(params: CommonParameters = {}): Promise<AgreementType[]> {
    return this.request({
      path: `/finance/agreements/types`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementsTypes(agreementType: AgreementType): Promise<AgreementType> {
    return this.request({
      path: `/finance/agreements/types`,
      method: 'post',
      data: agreementType,
    })
  }

  getFinanceAgreementsTypesById(id: number, params: CommonParameters = {}): Promise<AgreementType> {
    return this.request({
      path: `/finance/agreements/types/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementsTypesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreements/types/${id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementsTypesById(id: number, agreementType: AgreementType): Promise<AgreementType> {
    return this.request({
      path: `/finance/agreements/types/${id}`,
      method: 'put',
      data: agreementType,
    })
  }

  patchFinanceAgreementsTypesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<AgreementType> {
    return this.request({
      path: `/finance/agreements/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementsTypesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<AgreementTypeInfo> {
    return this.request({
      path: `/finance/agreements/types/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsTypesByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/finance/agreements/types/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsTypesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/finance/agreements/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/agreements/types/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsTypesInfo(params: CommonParameters = {}): Promise<AgreementTypeInfo[]> {
    return this.request({
      path: `/finance/agreements/types/info`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementsTypesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/agreements/types/info/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdBoardDefaults(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementTypeBoardDefault[]> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementTypesByParentIdBoardDefaults(
    parentId: number,
    boardDefault: AgreementTypeBoardDefault,
  ): Promise<AgreementTypeBoardDefault> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults`,
      method: 'post',
      data: boardDefault,
    })
  }

  getFinanceAgreementTypesByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementTypeBoardDefault> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementTypesByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/{id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementTypesByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
    boardDefault: AgreementTypeBoardDefault,
  ): Promise<AgreementTypeBoardDefault> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/{id}`,
      method: 'put',
      data: boardDefault,
    })
  }

  patchFinanceAgreementTypesByParentIdBoardDefaultsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<AgreementTypeBoardDefault> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementTypesByParentIdBoardDefaultsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdWorkRoleExclusions(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementTypeWorkRoleExclusion[]> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementTypesByParentIdWorkRoleExclusions(
    parentId: number,
    workRoleExclusion: AgreementTypeWorkRoleExclusion,
  ): Promise<AgreementTypeWorkRoleExclusion> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions`,
      method: 'post',
      data: workRoleExclusion,
    })
  }

  getFinanceAgreementTypesByParentIdWorkRoleExclusionsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementTypeWorkRoleExclusion> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementTypesByParentIdWorkRoleExclusionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions/{id}`,
      method: 'delete',
    })
  }

  getFinanceAgreementTypesByParentIdWorkRoleExclusionsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdWorkroles(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementTypeWorkRole[]> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementTypesByParentIdWorkroles(
    parentId: number,
    workRole: AgreementTypeWorkRole,
  ): Promise<AgreementTypeWorkRole> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles`,
      method: 'post',
      data: workRole,
    })
  }

  getFinanceAgreementTypesByParentIdWorkrolesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementTypeWorkRole> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementTypesByParentIdWorkrolesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/{id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementTypesByParentIdWorkrolesById(
    id: number,
    parentId: number,
    workRole: AgreementTypeWorkRole,
  ): Promise<AgreementTypeWorkRole> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/{id}`,
      method: 'put',
      data: workRole,
    })
  }

  patchFinanceAgreementTypesByParentIdWorkrolesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<AgreementTypeWorkRole> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementTypesByParentIdWorkrolesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdWorkrolesInfo(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementTypeWorkRoleInfo[]> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/info`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdWorkrolesInfoById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementTypeWorkRoleInfo> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/info/{id}`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdWorkrolesInfoCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/info/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdWorkTypeExclusions(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementTypeWorkTypeExclusion[]> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementTypesByParentIdWorkTypeExclusions(
    parentId: number,
    workTypeExclusion: AgreementTypeWorkTypeExclusion,
  ): Promise<AgreementTypeWorkTypeExclusion> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions`,
      method: 'post',
      data: workTypeExclusion,
    })
  }

  getFinanceAgreementTypesByParentIdWorkTypeExclusionsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementTypeWorkTypeExclusion> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementTypesByParentIdWorkTypeExclusionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions/{id}`,
      method: 'delete',
    })
  }

  getFinanceAgreementTypesByParentIdWorkTypeExclusionsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceAgreementTypesByParentIdWorktypes(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementTypeWorkType[]> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes`,
      method: 'get',
      params,
    })
  }

  postFinanceAgreementTypesByParentIdWorktypes(
    parentId: number,
    workType: AgreementTypeWorkType,
  ): Promise<AgreementTypeWorkType> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes`,
      method: 'post',
      data: workType,
    })
  }

  getFinanceAgreementTypesByParentIdWorktypesById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<AgreementTypeWorkType> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceAgreementTypesByParentIdWorktypesById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/{id}`,
      method: 'delete',
    })
  }

  putFinanceAgreementTypesByParentIdWorktypesById(
    id: number,
    parentId: number,
    workType: AgreementTypeWorkType,
  ): Promise<AgreementTypeWorkType> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/{id}`,
      method: 'put',
      data: workType,
    })
  }

  patchFinanceAgreementTypesByParentIdWorktypesById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<AgreementTypeWorkType> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceAgreementTypesByParentIdWorktypesCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBatchSetups(params: CommonParameters = {}): Promise<AgreementBatchSetup[]> {
    return this.request({
      path: `/finance/batchSetups`,
      method: 'get',
      params,
    })
  }

  getFinanceBatchSetupsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<AgreementBatchSetup> {
    return this.request({
      path: `/finance/batchSetups/${id}`,
      method: 'get',
      params,
    })
  }

  putFinanceBatchSetupsById(
    id: number,
    batchSetup: AgreementBatchSetup,
  ): Promise<AgreementBatchSetup> {
    return this.request({
      path: `/finance/batchSetups/${id}`,
      method: 'put',
      data: batchSetup,
    })
  }

  patchFinanceBatchSetupsById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<AgreementBatchSetup> {
    return this.request({
      path: `/finance/batchSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceBatchSetupsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/batchSetups/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingCycles(params: CommonParameters = {}): Promise<BillingCycle[]> {
    return this.request({
      path: `/finance/billingCycles`,
      method: 'get',
      params,
    })
  }

  postFinanceBillingCycles(billingCycle: BillingCycle): Promise<BillingCycle> {
    return this.request({
      path: `/finance/billingCycles`,
      method: 'post',
      data: billingCycle,
    })
  }

  getFinanceBillingCyclesById(id: number, params: CommonParameters = {}): Promise<BillingCycle> {
    return this.request({
      path: `/finance/billingCycles/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceBillingCyclesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/billingCycles/${id}`,
      method: 'delete',
    })
  }

  putFinanceBillingCyclesById(id: number, billingCycle: BillingCycle): Promise<BillingCycle> {
    return this.request({
      path: `/finance/billingCycles/${id}`,
      method: 'put',
      data: billingCycle,
    })
  }

  patchFinanceBillingCyclesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<BillingCycle> {
    return this.request({
      path: `/finance/billingCycles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceBillingCyclesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<BillingCycleInfo> {
    return this.request({
      path: `/finance/billingCycles/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingCyclesByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/finance/billingCycles/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingCyclesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/finance/billingCycles/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingCyclesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingCycles/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingCyclesInfo(params: CommonParameters = {}): Promise<BillingCycleInfo[]> {
    return this.request({
      path: `/finance/billingCycles/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingCyclesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingCycles/info/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingSetups(params: CommonParameters = {}): Promise<BillingSetup[]> {
    return this.request({
      path: `/finance/billingSetups`,
      method: 'get',
      params,
    })
  }

  postFinanceBillingSetups(billingSetup: BillingSetup): Promise<BillingSetup> {
    return this.request({
      path: `/finance/billingSetups`,
      method: 'post',
      data: billingSetup,
    })
  }

  getFinanceBillingSetupsById(id: number, params: CommonParameters = {}): Promise<BillingSetup> {
    return this.request({
      path: `/finance/billingSetups/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceBillingSetupsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/billingSetups/${id}`,
      method: 'delete',
    })
  }

  putFinanceBillingSetupsById(id: number, billingSetup: BillingSetup): Promise<BillingSetup> {
    return this.request({
      path: `/finance/billingSetups/${id}`,
      method: 'put',
      data: billingSetup,
    })
  }

  patchFinanceBillingSetupsById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<BillingSetup> {
    return this.request({
      path: `/finance/billingSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceBillingSetupsByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<BillingSetupInfo> {
    return this.request({
      path: `/finance/billingSetups/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingSetupsByParentIdRoutings(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BillingSetupRouting[]> {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings`,
      method: 'get',
      params,
    })
  }

  postFinanceBillingSetupsByParentIdRoutings(
    parentId: number,
    billingSetupRouting: BillingSetupRouting,
  ): Promise<BillingSetupRouting> {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings`,
      method: 'post',
      data: billingSetupRouting,
    })
  }

  getFinanceBillingSetupsByParentIdRoutingsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<BillingSetupRouting> {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceBillingSetupsByParentIdRoutingsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/{id}`,
      method: 'delete',
    })
  }

  putFinanceBillingSetupsByParentIdRoutingsById(
    id: number,
    parentId: number,
    billingSetupRouting: BillingSetupRouting,
  ): Promise<BillingSetupRouting> {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/{id}`,
      method: 'put',
      data: billingSetupRouting,
    })
  }

  patchFinanceBillingSetupsByParentIdRoutingsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<BillingSetupRouting> {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceBillingSetupsByParentIdRoutingsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingSetupsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingSetups/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingSetupsInfo(params: CommonParameters = {}): Promise<BillingSetupInfo[]> {
    return this.request({
      path: `/finance/billingSetups/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingStatuses(params: CommonParameters = {}): Promise<BillingStatus[]> {
    return this.request({
      path: `/finance/billingStatuses`,
      method: 'get',
      params,
    })
  }

  postFinanceBillingStatuses(billingStatus: BillingStatus): Promise<BillingStatus> {
    return this.request({
      path: `/finance/billingStatuses`,
      method: 'post',
      data: billingStatus,
    })
  }

  getFinanceBillingStatusesById(id: number, params: CommonParameters = {}): Promise<BillingStatus> {
    return this.request({
      path: `/finance/billingStatuses/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceBillingStatusesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/billingStatuses/${id}`,
      method: 'delete',
    })
  }

  putFinanceBillingStatusesById(id: number, billingStatus: BillingStatus): Promise<BillingStatus> {
    return this.request({
      path: `/finance/billingStatuses/${id}`,
      method: 'put',
      data: billingStatus,
    })
  }

  patchFinanceBillingStatusesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<BillingStatus> {
    return this.request({
      path: `/finance/billingStatuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceBillingStatusesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<BillingStatusInfo> {
    return this.request({
      path: `/finance/billingStatuses/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingStatusesByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/finance/billingStatuses/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingStatusesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/finance/billingStatuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingStatusesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingStatuses/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingStatusesInfo(params: CommonParameters = {}): Promise<BillingStatusInfo[]> {
    return this.request({
      path: `/finance/billingStatuses/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingStatusesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingStatuses/info/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingTerms(params: CommonParameters = {}): Promise<BillingTerm[]> {
    return this.request({
      path: `/finance/billingTerms`,
      method: 'get',
      params,
    })
  }

  postFinanceBillingTerms(billingTerms: BillingTerm): Promise<BillingTerm> {
    return this.request({
      path: `/finance/billingTerms`,
      method: 'post',
      data: billingTerms,
    })
  }

  getFinanceBillingTermsById(id: number, params: CommonParameters = {}): Promise<BillingTerm> {
    return this.request({
      path: `/finance/billingTerms/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceBillingTermsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/billingTerms/${id}`,
      method: 'delete',
    })
  }

  putFinanceBillingTermsById(id: number, billingTerms: BillingTerm): Promise<BillingTerm> {
    return this.request({
      path: `/finance/billingTerms/${id}`,
      method: 'put',
      data: billingTerms,
    })
  }

  patchFinanceBillingTermsById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<BillingTerm> {
    return this.request({
      path: `/finance/billingTerms/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceBillingTermsByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<BillingTermInfo> {
    return this.request({
      path: `/finance/billingTerms/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingTermsByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/finance/billingTerms/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingTermsByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/finance/billingTerms/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingTermsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingTerms/count`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingTermsInfo(params: CommonParameters = {}): Promise<BillingTermInfo[]> {
    return this.request({
      path: `/finance/billingTerms/info`,
      method: 'get',
      params,
    })
  }

  getFinanceBillingTermsInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/billingTerms/info/count`,
      method: 'get',
      params,
    })
  }

  putFinanceClosedInvoicesById(id: number, closedInvoice: ClosedInvoice): Promise<ClosedInvoice> {
    return this.request({
      path: `/finance/closedInvoices/${id}`,
      method: 'put',
      data: closedInvoice,
    })
  }

  patchFinanceClosedInvoicesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<ClosedInvoice> {
    return this.request({
      path: `/finance/closedInvoices/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceCompanyFinance(params: CommonParameters = {}): Promise<CompanyFinance[]> {
    return this.request({
      path: `/finance/companyFinance/`,
      method: 'get',
      params,
    })
  }

  getFinanceCompanyFinanceById(id: number, params: CommonParameters = {}): Promise<CompanyFinance> {
    return this.request({
      path: `/finance/companyFinance/${id}`,
      method: 'get',
      params,
    })
  }

  patchFinanceCompanyFinanceById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<CompanyFinance> {
    return this.request({
      path: `/finance/companyFinance/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceCompanyFinanceCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/companyFinance/count`,
      method: 'get',
      params,
    })
  }

  getFinanceCurrencies(params: CommonParameters = {}): Promise<FinanceCurrency[]> {
    return this.request({
      path: `/finance/currencies`,
      method: 'get',
      params,
    })
  }

  postFinanceCurrencies(currency: FinanceCurrency): Promise<FinanceCurrency> {
    return this.request({
      path: `/finance/currencies`,
      method: 'post',
      data: currency,
    })
  }

  getFinanceCurrenciesById(id: number, params: CommonParameters = {}): Promise<FinanceCurrency> {
    return this.request({
      path: `/finance/currencies/${id}`,
      method: 'get',
      params,
    })
  }

  putFinanceCurrenciesById(id: number, currency: FinanceCurrency): Promise<FinanceCurrency> {
    return this.request({
      path: `/finance/currencies/${id}`,
      method: 'put',
      data: currency,
    })
  }

  patchFinanceCurrenciesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<FinanceCurrency> {
    return this.request({
      path: `/finance/currencies/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  deleteFinanceCurrenciesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/currencies/${id}`,
      method: 'delete',
    })
  }

  getFinanceCurrenciesByIdInfo(id: number, params: CommonParameters = {}): Promise<CurrencyInfo> {
    return this.request({
      path: `/finance/currencies/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceCurrenciesByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/finance/currencies/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceCurrenciesByIdUsagesList(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/finance/currencies/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceCurrenciesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/currencies/count`,
      method: 'get',
      params,
    })
  }

  getFinanceCurrenciesInfo(params: CommonParameters = {}): Promise<CurrencyInfo[]> {
    return this.request({
      path: `/finance/currencies/info`,
      method: 'get',
      params,
    })
  }

  getFinanceCurrenciesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/currencies/info/count`,
      method: 'get',
      params,
    })
  }

  getFinanceDeliveryMethods(params: CommonParameters = {}): Promise<DeliveryMethod[]> {
    return this.request({
      path: `/finance/deliveryMethods`,
      method: 'get',
      params,
    })
  }

  postFinanceDeliveryMethods(deliveryMethod: DeliveryMethod): Promise<DeliveryMethod> {
    return this.request({
      path: `/finance/deliveryMethods`,
      method: 'post',
      data: deliveryMethod,
    })
  }

  getFinanceDeliveryMethodsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<DeliveryMethod> {
    return this.request({
      path: `/finance/deliveryMethods/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceDeliveryMethodsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/deliveryMethods/${id}`,
      method: 'delete',
    })
  }

  putFinanceDeliveryMethodsById(
    id: number,
    deliveryMethod: DeliveryMethod,
  ): Promise<DeliveryMethod> {
    return this.request({
      path: `/finance/deliveryMethods/${id}`,
      method: 'put',
      data: deliveryMethod,
    })
  }

  patchFinanceDeliveryMethodsById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<DeliveryMethod> {
    return this.request({
      path: `/finance/deliveryMethods/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceDeliveryMethodsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/deliveryMethods/count`,
      method: 'get',
      params,
    })
  }

  getFinanceGlAccounts(params: CommonParameters = {}): Promise<GLAccount[]> {
    return this.request({
      path: `/finance/glAccounts`,
      method: 'get',
      params,
    })
  }

  postFinanceGlAccounts(glAccount: GLAccount): Promise<GLAccount> {
    return this.request({
      path: `/finance/glAccounts`,
      method: 'post',
      data: glAccount,
    })
  }

  getFinanceGlAccountsById(id: number, params: CommonParameters = {}): Promise<GLAccount> {
    return this.request({
      path: `/finance/glAccounts/${id}`,
      method: 'get',
      params,
    })
  }

  putFinanceGlAccountsById(id: number, glAccount: GLAccount): Promise<GLAccount> {
    return this.request({
      path: `/finance/glAccounts/${id}`,
      method: 'put',
      data: glAccount,
    })
  }

  patchFinanceGlAccountsById(id: number, patchOperations: PatchOperation[]): Promise<GLAccount> {
    return this.request({
      path: `/finance/glAccounts/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  deleteFinanceGlAccountsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/glAccounts/${id}`,
      method: 'delete',
    })
  }

  getFinanceGlAccountsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/glAccounts/count`,
      method: 'get',
      params,
    })
  }

  getFinanceGlAccountsMappedTypes(params: CommonParameters = {}): Promise<MappedType[]> {
    return this.request({
      path: `/finance/glAccounts/mappedTypes`,
      method: 'get',
      params,
    })
  }

  getFinanceGlAccountsMappedTypesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/glAccounts/mappedTypes/count`,
      method: 'get',
      params,
    })
  }

  getFinanceGlCaptions(params: CommonParameters = {}): Promise<GLCaption[]> {
    return this.request({
      path: `/finance/glCaptions`,
      method: 'get',
      params,
    })
  }

  getFinanceGlCaptionsById(id: number, params: CommonParameters = {}): Promise<GLCaption> {
    return this.request({
      path: `/finance/glCaptions/${id}`,
      method: 'get',
      params,
    })
  }

  putFinanceGlCaptionsById(id: number, glCaption: GLCaption): Promise<GLCaption> {
    return this.request({
      path: `/finance/glCaptions/${id}`,
      method: 'put',
      data: glCaption,
    })
  }

  patchFinanceGlCaptionsById(id: number, patchOperations: PatchOperation[]): Promise<GLCaption> {
    return this.request({
      path: `/finance/glCaptions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceGlCaptionsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/glCaptions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceGlpaths(params: CommonParameters = {}): Promise<GLPath[]> {
    return this.request({
      path: `/finance/glpaths`,
      method: 'get',
      params,
    })
  }

  postFinanceGlpaths(gLPath: GLPath): Promise<GLPath> {
    return this.request({
      path: `/finance/glpaths`,
      method: 'post',
      data: gLPath,
    })
  }

  getFinanceGlpathsById(id: number, params: CommonParameters = {}): Promise<GLPath> {
    return this.request({
      path: `/finance/glpaths/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceGlpathsById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/glpaths/${id}`,
      method: 'delete',
    })
  }

  putFinanceGlpathsById(id: number, gLPath: GLPath): Promise<GLPath> {
    return this.request({
      path: `/finance/glpaths/${id}`,
      method: 'put',
      data: gLPath,
    })
  }

  patchFinanceGlpathsById(id: number, patchOperations: PatchOperation[]): Promise<GLPath> {
    return this.request({
      path: `/finance/glpaths/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceGlpathsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/glpaths/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInfoCurrencyCodes(params: CommonParameters = {}): Promise<CurrencyCode[]> {
    return this.request({
      path: `/finance/info/currencyCodes`,
      method: 'get',
      params,
    })
  }

  getFinanceInfoCurrencyCodesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<CurrencyCode> {
    return this.request({
      path: `/finance/info/currencyCodes/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceInfoCurrencyCodesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/info/currencyCodes/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInfoInvoiceById(id: number, params: CommonParameters = {}): Promise<InvoiceInfo> {
    return this.request({
      path: `/finance/info/invoice/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceInfoTaxIntegrations(params: CommonParameters = {}): Promise<TaxIntegrationInfo[]> {
    return this.request({
      path: `/finance/info/taxIntegrations`,
      method: 'get',
      params,
    })
  }

  getFinanceInfoTaxIntegrationsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<TaxIntegrationInfo> {
    return this.request({
      path: `/finance/info/taxIntegrations/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceInfoTaxIntegrationsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/info/taxIntegrations/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceEmailTemplates(params: CommonParameters = {}): Promise<InvoiceEmailTemplate[]> {
    return this.request({
      path: `/finance/invoiceEmailTemplates`,
      method: 'get',
      params,
    })
  }

  postFinanceInvoiceEmailTemplates(
    invoiceEmailTemplate: InvoiceEmailTemplate,
  ): Promise<InvoiceEmailTemplate> {
    return this.request({
      path: `/finance/invoiceEmailTemplates`,
      method: 'post',
      data: invoiceEmailTemplate,
    })
  }

  getFinanceInvoiceEmailTemplatesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<InvoiceEmailTemplate> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceInvoiceEmailTemplatesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}`,
      method: 'delete',
    })
  }

  putFinanceInvoiceEmailTemplatesById(
    id: number,
    invoiceEmailTemplate: InvoiceEmailTemplate,
  ): Promise<InvoiceEmailTemplate> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}`,
      method: 'put',
      data: invoiceEmailTemplate,
    })
  }

  patchFinanceInvoiceEmailTemplatesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<InvoiceEmailTemplate> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceInvoiceEmailTemplatesByIdInfo(
    id: number,
    params: CommonParameters = {},
  ): Promise<InvoiceEmailTemplateInfo> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceEmailTemplatesByIdUsages(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceEmailTemplatesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceEmailTemplatesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceEmailTemplatesInfo(
    params: CommonParameters = {},
  ): Promise<InvoiceEmailTemplateInfo[]> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/info`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceEmailTemplatesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/invoiceEmailTemplates/info/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoices(params: CommonParameters = {}): Promise<Invoice[]> {
    return this.request({
      path: `/finance/invoices`,
      method: 'get',
      params,
    })
  }

  postFinanceInvoices(invoice: Invoice): Promise<Invoice> {
    return this.request({
      path: `/finance/invoices`,
      method: 'post',
      data: invoice,
    })
  }

  getFinanceInvoicesById(id: number, params: CommonParameters = {}): Promise<Invoice> {
    return this.request({
      path: `/finance/invoices/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceInvoicesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/invoices/${id}`,
      method: 'delete',
    })
  }

  putFinanceInvoicesById(id: number, invoice: Invoice): Promise<Invoice> {
    return this.request({
      path: `/finance/invoices/${id}`,
      method: 'put',
      data: invoice,
    })
  }

  patchFinanceInvoicesById(id: number, patchOperations: PatchOperation[]): Promise<Invoice> {
    return this.request({
      path: `/finance/invoices/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceInvoicesByIdPdf(id: number, params: CommonParameters = {}): Promise<PDFResponse> {
    return this.request({
      path: `/finance/invoices/${id}/pdf`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoicesByParentIdPayments(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Payment[]> {
    return this.request({
      path: `/finance/invoices/${parentId}/payments`,
      method: 'get',
      params,
    })
  }

  postFinanceInvoicesByParentIdPayments(parentId: number, payment: Payment): Promise<Payment> {
    return this.request({
      path: `/finance/invoices/${parentId}/payments`,
      method: 'post',
      data: payment,
    })
  }

  getFinanceInvoicesByParentIdPaymentsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Payment> {
    return this.request({
      path: `/finance/invoices/${parentId}/payments/{id}`,
      method: 'get',
      params,
    })
  }

  patchFinanceInvoicesByParentIdPaymentsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<Payment> {
    return this.request({
      path: `/finance/invoices/${parentId}/payments/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  putFinanceInvoicesByParentIdPaymentsById(
    id: number,
    parentId: number,
    payment: Payment,
  ): Promise<Payment> {
    return this.request({
      path: `/finance/invoices/${parentId}/payments/{id}`,
      method: 'put',
      data: payment,
    })
  }

  deleteFinanceInvoicesByParentIdPaymentsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/invoices/${parentId}/payments/{id}`,
      method: 'delete',
    })
  }

  getFinanceInvoicesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/invoices/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceTemplates(params: CommonParameters = {}): Promise<InvoiceTemplate[]> {
    return this.request({
      path: `/finance/invoiceTemplates`,
      method: 'get',
      params,
    })
  }

  postFinanceInvoiceTemplates(invoiceTemplate: InvoiceTemplate): Promise<InvoiceTemplate> {
    return this.request({
      path: `/finance/invoiceTemplates`,
      method: 'post',
      data: invoiceTemplate,
    })
  }

  getFinanceInvoiceTemplatesById(
    id: number,
    params: CommonParameters = {},
  ): Promise<InvoiceTemplate> {
    return this.request({
      path: `/finance/invoiceTemplates/${id}`,
      method: 'get',
      params,
    })
  }

  patchFinanceInvoiceTemplatesById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<InvoiceTemplate> {
    return this.request({
      path: `/finance/invoiceTemplates/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  putFinanceInvoiceTemplatesById(
    id: number,
    invoiceTemplate: InvoiceTemplate,
  ): Promise<InvoiceTemplate> {
    return this.request({
      path: `/finance/invoiceTemplates/${id}`,
      method: 'put',
      data: invoiceTemplate,
    })
  }

  deleteFinanceInvoiceTemplatesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/invoiceTemplates/${id}`,
      method: 'delete',
    })
  }

  getFinanceInvoiceTemplatesByIdUsages(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/finance/invoiceTemplates/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceTemplatesByIdUsagesList(
    id: number,
    params: CommonParameters = {},
  ): Promise<Usage[]> {
    return this.request({
      path: `/finance/invoiceTemplates/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceTemplatesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/invoiceTemplates/count`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceTemplateSetups(params: CommonParameters = {}): Promise<InvoiceTemplateSetup[]> {
    return this.request({
      path: `/finance/invoiceTemplateSetups`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceTemplateSetupsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<InvoiceTemplateSetup> {
    return this.request({
      path: `/finance/invoiceTemplateSetups/${id}`,
      method: 'get',
      params,
    })
  }

  getFinanceInvoiceTemplateSetupsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/invoiceTemplateSetups/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodes(params: CommonParameters = {}): Promise<TaxCode[]> {
    return this.request({
      path: `/finance/taxCodes`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodes(taxCode: TaxCode): Promise<TaxCode> {
    return this.request({
      path: `/finance/taxCodes`,
      method: 'post',
      data: taxCode,
    })
  }

  getFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevels(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<TaxableExpenseTypeLevel[]> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/{parentId}/taxableExpenseTypeLevels`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevels(
    parentId: number,
    grandparentId: number,
    taxableExpenseTypeLevel: TaxableExpenseTypeLevel,
  ): Promise<TaxableExpenseTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/{parentId}/taxableExpenseTypeLevels`,
      method: 'post',
      data: taxableExpenseTypeLevel,
    })
  }

  getFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<TaxableExpenseTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/{parentId}/taxableExpenseTypeLevels/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/{parentId}/taxableExpenseTypeLevels/{id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    taxableExpenseTypeLevel: TaxableExpenseTypeLevel,
  ): Promise<TaxableExpenseTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/{parentId}/taxableExpenseTypeLevels/{id}`,
      method: 'put',
      data: taxableExpenseTypeLevel,
    })
  }

  patchFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: PatchOperation[],
  ): Promise<TaxableExpenseTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/{parentId}/taxableExpenseTypeLevels/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/{parentId}/taxableExpenseTypeLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevels(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<TaxableProductTypeLevel[]> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/{parentId}/taxableProductTypeLevels`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevels(
    parentId: number,
    grandparentId: number,
    taxableProductTypeLevel: TaxableProductTypeLevel,
  ): Promise<TaxableProductTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/{parentId}/taxableProductTypeLevels`,
      method: 'post',
      data: taxableProductTypeLevel,
    })
  }

  getFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<TaxableProductTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/{parentId}/taxableProductTypeLevels/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/{parentId}/taxableProductTypeLevels/{id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    taxableProductTypeLevel: TaxableProductTypeLevel,
  ): Promise<TaxableProductTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/{parentId}/taxableProductTypeLevels/{id}`,
      method: 'put',
      data: taxableProductTypeLevel,
    })
  }

  patchFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: PatchOperation[],
  ): Promise<TaxableProductTypeLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/{parentId}/taxableProductTypeLevels/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/{parentId}/taxableProductTypeLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevels(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<TaxableXRefLevel[]> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/{parentId}/taxableXRefLevels`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevels(
    parentId: number,
    grandparentId: number,
    taxableXRefLevel: TaxableXRefLevel,
  ): Promise<TaxableXRefLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/{parentId}/taxableXRefLevels`,
      method: 'post',
      data: taxableXRefLevel,
    })
  }

  getFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<TaxableXRefLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/{parentId}/taxableXRefLevels/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/{parentId}/taxableXRefLevels/{id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    taxableXRefLevel: TaxableXRefLevel,
  ): Promise<TaxableXRefLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/{parentId}/taxableXRefLevels/{id}`,
      method: 'put',
      data: taxableXRefLevel,
    })
  }

  patchFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: PatchOperation[],
  ): Promise<TaxableXRefLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/{parentId}/taxableXRefLevels/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/{parentId}/taxableXRefLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevels(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<TaxableWorkRoleLevel[]> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/{parentId}/taxableWorkRoleLevels`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevels(
    parentId: number,
    grandparentId: number,
    taxableWorkRoleLevel: TaxableWorkRoleLevel,
  ): Promise<TaxableWorkRoleLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/{parentId}/taxableWorkRoleLevels`,
      method: 'post',
      data: taxableWorkRoleLevel,
    })
  }

  getFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<TaxableWorkRoleLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/{parentId}/taxableWorkRoleLevels/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/{parentId}/taxableWorkRoleLevels/{id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    taxableWorkRoleLevel: TaxableWorkRoleLevel,
  ): Promise<TaxableWorkRoleLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/{parentId}/taxableWorkRoleLevels/{id}`,
      method: 'put',
      data: taxableWorkRoleLevel,
    })
  }

  patchFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsById(
    id: number,
    parentId: number,
    grandparentId: number,
    patchOperations: PatchOperation[],
  ): Promise<TaxableWorkRoleLevel> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/{parentId}/taxableWorkRoleLevels/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsCount(
    parentId: number,
    grandparentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/{parentId}/taxableWorkRoleLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesById(id: number, params: CommonParameters = {}): Promise<TaxCode> {
    return this.request({
      path: `/finance/taxCodes/${id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesById(id: number): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesById(id: number, taxCode: TaxCode): Promise<TaxCode> {
    return this.request({
      path: `/finance/taxCodes/${id}`,
      method: 'put',
      data: taxCode,
    })
  }

  patchFinanceTaxCodesById(id: number, patchOperations: PatchOperation[]): Promise<TaxCode> {
    return this.request({
      path: `/finance/taxCodes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  postFinanceTaxCodesByIdCopy(id: number): Promise<TaxCode> {
    return this.request({
      path: `/finance/taxCodes/${id}/copy`,
      method: 'post',
    })
  }

  getFinanceTaxCodesByIdInfo(id: number, params: CommonParameters = {}): Promise<TaxCodeInfo> {
    return this.request({
      path: `/finance/taxCodes/${id}/info`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByIdUsages(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/finance/taxCodes/${id}/usages`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByIdUsagesList(id: number, params: CommonParameters = {}): Promise<Usage[]> {
    return this.request({
      path: `/finance/taxCodes/${id}/usages/list`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByParentIdExpenseTypeExemptions(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ExpenseTypeExemption[]> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByParentIdExpenseTypeExemptions(
    parentId: number,
    expenseTypeExemption: ExpenseTypeExemption,
  ): Promise<ExpenseTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions`,
      method: 'post',
      data: expenseTypeExemption,
    })
  }

  getFinanceTaxCodesByParentIdExpenseTypeExemptionsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ExpenseTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByParentIdExpenseTypeExemptionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/{id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByParentIdExpenseTypeExemptionsById(
    id: number,
    parentId: number,
    expenseTypeExemption: ExpenseTypeExemption,
  ): Promise<ExpenseTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/{id}`,
      method: 'put',
      data: expenseTypeExemption,
    })
  }

  patchFinanceTaxCodesByParentIdExpenseTypeExemptionsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<ExpenseTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByParentIdExpenseTypeExemptionsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByParentIdProductTypeExemptions(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProductTypeExemption[]> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByParentIdProductTypeExemptions(
    parentId: number,
    productTypeExemption: ProductTypeExemption,
  ): Promise<ProductTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions`,
      method: 'post',
      data: productTypeExemption,
    })
  }

  getFinanceTaxCodesByParentIdProductTypeExemptionsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<ProductTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByParentIdProductTypeExemptionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/{id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByParentIdProductTypeExemptionsById(
    id: number,
    parentId: number,
    productTypeExemption: ProductTypeExemption,
  ): Promise<ProductTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/{id}`,
      method: 'put',
      data: productTypeExemption,
    })
  }

  patchFinanceTaxCodesByParentIdProductTypeExemptionsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<ProductTypeExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByParentIdProductTypeExemptionsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByParentIdTaxCodeLevels(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<TaxCodeLevel[]> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByParentIdTaxCodeLevels(
    parentId: number,
    taxCodeLevel: TaxCodeLevel,
  ): Promise<TaxCodeLevel> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels`,
      method: 'post',
      data: taxCodeLevel,
    })
  }

  getFinanceTaxCodesByParentIdTaxCodeLevelsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<TaxCodeLevel> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByParentIdTaxCodeLevelsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/{id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByParentIdTaxCodeLevelsById(
    id: number,
    parentId: number,
    taxCodeLevel: TaxCodeLevel,
  ): Promise<TaxCodeLevel> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/{id}`,
      method: 'put',
      data: taxCodeLevel,
    })
  }

  patchFinanceTaxCodesByParentIdTaxCodeLevelsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<TaxCodeLevel> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByParentIdTaxCodeLevelsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByParentIdTaxCodeXRefs(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<TaxCodeXRef[]> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByParentIdTaxCodeXRefs(
    parentId: number,
    taxCodeXRef: TaxCodeXRef,
  ): Promise<TaxCodeXRef> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs`,
      method: 'post',
      data: taxCodeXRef,
    })
  }

  getFinanceTaxCodesByParentIdTaxCodeXRefsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<TaxCodeXRef> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByParentIdTaxCodeXRefsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/{id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByParentIdTaxCodeXRefsById(
    id: number,
    parentId: number,
    taxCodeXRef: TaxCodeXRef,
  ): Promise<TaxCodeXRef> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/{id}`,
      method: 'put',
      data: taxCodeXRef,
    })
  }

  patchFinanceTaxCodesByParentIdTaxCodeXRefsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<TaxCodeXRef> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByParentIdTaxCodeXRefsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesByParentIdWorkRoleExemptions(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<WorkRoleExemption[]> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions`,
      method: 'get',
      params,
    })
  }

  postFinanceTaxCodesByParentIdWorkRoleExemptions(
    parentId: number,
    workRoleExemption: WorkRoleExemption,
  ): Promise<WorkRoleExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions`,
      method: 'post',
      data: workRoleExemption,
    })
  }

  getFinanceTaxCodesByParentIdWorkRoleExemptionsById(
    id: number,
    parentId: number,
    params: CommonParameters = {},
  ): Promise<WorkRoleExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/{id}`,
      method: 'get',
      params,
    })
  }

  deleteFinanceTaxCodesByParentIdWorkRoleExemptionsById(
    id: number,
    parentId: number,
  ): Promise<NoContentResponse> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/{id}`,
      method: 'delete',
    })
  }

  putFinanceTaxCodesByParentIdWorkRoleExemptionsById(
    id: number,
    parentId: number,
    workRoleExemption: WorkRoleExemption,
  ): Promise<WorkRoleExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/{id}`,
      method: 'put',
      data: workRoleExemption,
    })
  }

  patchFinanceTaxCodesByParentIdWorkRoleExemptionsById(
    id: number,
    parentId: number,
    patchOperations: PatchOperation[],
  ): Promise<WorkRoleExemption> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxCodesByParentIdWorkRoleExemptionsCount(
    parentId: number,
    params: CommonParameters = {},
  ): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesInfo(params: CommonParameters = {}): Promise<TaxCodeInfo[]> {
    return this.request({
      path: `/finance/taxCodes/info`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxCodesInfoCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/taxCodes/info/count`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxIntegrations(params: CommonParameters = {}): Promise<TaxIntegration[]> {
    return this.request({
      path: `/finance/taxIntegrations`,
      method: 'get',
      params,
    })
  }

  getFinanceTaxIntegrationsById(
    id: number,
    params: CommonParameters = {},
  ): Promise<TaxIntegration> {
    return this.request({
      path: `/finance/taxIntegrations/${id}`,
      method: 'get',
      params,
    })
  }

  putFinanceTaxIntegrationsById(
    id: number,
    taxIntegration: TaxIntegration,
  ): Promise<TaxIntegration> {
    return this.request({
      path: `/finance/taxIntegrations/${id}`,
      method: 'put',
      data: taxIntegration,
    })
  }

  patchFinanceTaxIntegrationsById(
    id: number,
    patchOperations: PatchOperation[],
  ): Promise<TaxIntegration> {
    return this.request({
      path: `/finance/taxIntegrations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  getFinanceTaxIntegrationsCount(params: CommonParameters = {}): Promise<Count> {
    return this.request({
      path: `/finance/taxIntegrations/count`,
      method: 'get',
      params,
    })
  }
}
