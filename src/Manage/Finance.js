import Manage from './Manage.js'

/**
 * AccountingBatch
 * @typedef {object} AccountingBatch
 * @property {number} [id]  int32
 * @property {string} [batchIdentifier]
 * @property {boolean} [exportInvoicesFlag]   nullable
 * @property {boolean} [exportExpensesFlag]   nullable
 * @property {boolean} [exportProductsFlag]   nullable
 * @property {boolean} [closedFlag]   nullable
 * @property {object} [_info]
 */

/**
 * GLExport
 * @typedef {object} GLExport
 * @property {GLExportSettings} [exportSettings]
 * @property {array} [vendors]
 * @property {array} [customers]
 * @property {array} [transactions]
 * @property {array} [expenses]
 * @property {array} [expenseBills]
 * @property {array} [purchaseTransactions]
 * @property {array} [adjustmentTransactions]
 * @property {array} [inventoryTransfers]
 */

/**
 * BatchEntry
 * @typedef {object} BatchEntry
 * @property {number} [id]  int32
 * @property {string} [accountType]
 * @property {string} [name]
 * @property {string} [accountNumber]
 * @property {number} [debit]  double nullable
 * @property {number} [credit]  double nullable
 * @property {number} [cost]  double
 * @property {string} [item]
 * @property {string} [salesCode]
 * @property {string} [costOfGoodsSoldAccountNumber]
 * @property {InvoiceReference} [invoice]
 * @property {PurchaseOrderReference} [purchaseOrder]
 * @property {PurchaseOrderLineItemReference} [lineItem]
 * @property {string} [transfer]
 * @property {ExpenseDetailReference} [expense]
 * @property {AdjustmentDetailReference} [adjustmentDetail]
 * @property {object} [_info]
 */

/**
 * Count
 * @typedef {object} Count
 * @property {number} [count]  int32
 */

/**
 * UnpostedExpense
 * @typedef {object} UnpostedExpense
 * @property {number} [id]  int32
 * @property {number} [locationId]  int32 nullable
 * @property {number} [departmentId]  int32 nullable
 * @property {CompanyReference} [company]
 * @property {string} [accountNumber]
 * @property {string} [creditAccount]
 * @property {number} [expenseDetailId]  int32 nullable
 * @property {ExpenseTypeReference} [expenseType]
 * @property {string} [classification]   nullable
 * @property {string} [glType]   nullable
 * @property {MemberReference} [member]
 * @property {string} [dateExpense]
 * @property {ChargeCodeReference} [chargeCode]
 * @property {string} [chargeDescription]
 * @property {boolean} [inPolicy]   nullable
 * @property {PaymentMethodReference} [paymentMethod]
 * @property {CurrencyReference} [currency]
 * @property {number} [total]  double nullable
 * @property {number} [billableAmount]  double nullable
 * @property {number} [nonBillableAmount]  double nullable
 * @property {AgreementReference} [agreement]
 * @property {number} [agreementAmountCovered]  double nullable
 * @property {TicketReference} [ticket]
 * @property {ProjectReference} [project]
 * @property {ProjectPhaseReference} [projectPhase]
 * @property {TaxCodeReference} [taxCode]
 * @property {boolean} [avalaraTaxFlag] Used to determine if Avalara tax is enabled.  nullable
 * @property {boolean} [itemTaxableFlag]   nullable
 * @property {number} [salesTaxAmount]  double nullable
 * @property {boolean} [stateTaxFlag] Set to true if transaction is taxable at the state level.  nullable
 * @property {string} [stateTaxXref]
 * @property {number} [stateTaxAmount]  double nullable
 * @property {boolean} [countyTaxFlag] Set to true if transaction is taxable at the county level.  nullable
 * @property {string} [countyTaxXref]
 * @property {number} [countyTaxAmount]  double nullable
 * @property {boolean} [cityTaxFlag] Set to true if transaction is taxable at the city level.  nullable
 * @property {string} [cityTaxXref]
 * @property {number} [cityTaxAmount]  double nullable
 * @property {boolean} [countryTaxFlag] Set to true if transaction is taxable at the country level.  nullable
 * @property {string} [countryTaxXref]
 * @property {number} [countryTaxAmount]  double nullable
 * @property {boolean} [compositeTaxFlag] Set to true if transaction is taxable at the composite level.  nullable
 * @property {string} [compositeTaxXref]
 * @property {number} [compositeTaxAmount]  double nullable
 * @property {boolean} [levelSixTaxFlag] Set to true if transaction is taxable at level six.  nullable
 * @property {string} [levelSixTaxXref]
 * @property {number} [levelSixTaxAmount]  double nullable
 * @property {string} [dateClosed]
 * @property {object} [_info]
 */

/**
 * UnpostedExpenseTaxableLevel
 * @typedef {object} UnpostedExpenseTaxableLevel
 * @property {number} [id]  int32
 * @property {number} [taxLevel]  int32
 * @property {string} [taxCodeXref]
 * @property {number} [taxAmount]  double nullable
 * @property {object} [_info]
 */

/**
 * UnpostedInvoice
 * @typedef {object} UnpostedInvoice
 * @property {number} [id]  int32
 * @property {number} [billingLogId]  int32 nullable
 * @property {number} [locationId]  int32 nullable
 * @property {number} [departmentId]  int32 nullable
 * @property {CompanyReference} [company]
 * @property {string} [accountNumber]
 * @property {CompanyReference} [billToCompany]
 * @property {SiteReference} [billToSite]
 * @property {CompanyReference} [shipToCompany]
 * @property {SiteReference} [shipToSite]
 * @property {string} [invoiceNumber]
 * @property {string} [invoiceDate]
 * @property {string} [invoiceType]   nullable
 * @property {string} [description]
 * @property {BillingTermsReference} [billingTerms]
 * @property {string} [dueDays]
 * @property {string} [dueDate]
 * @property {CurrencyReference} [currency]
 * @property {number} [subTotal]  double nullable
 * @property {number} [total]  double nullable
 * @property {boolean} [invoiceTaxableFlag]   nullable
 * @property {TaxCodeReference} [taxCode]
 * @property {boolean} [avalaraTaxFlag] Used to determine if Avalara tax is enabled.  nullable
 * @property {boolean} [itemTaxableFlag]   nullable
 * @property {number} [salesTaxAmount]  double nullable
 * @property {boolean} [stateTaxFlag] Set to true if transaction is taxable at the state level.  nullable
 * @property {string} [stateTaxXref]
 * @property {number} [stateTaxAmount]  double nullable
 * @property {boolean} [countyTaxFlag] Set to true if transaction is taxable at the county level.  nullable
 * @property {string} [countyTaxXref]
 * @property {number} [countyTaxAmount]  double nullable
 * @property {boolean} [cityTaxFlag] Set to true if transaction is taxable at the city level.  nullable
 * @property {string} [cityTaxXref]
 * @property {number} [cityTaxAmount]  double nullable
 * @property {boolean} [countryTaxFlag] Set to true if transaction is taxable at the country level.  nullable
 * @property {string} [countryTaxXref]
 * @property {number} [countryTaxAmount]  double nullable
 * @property {boolean} [compositeTaxFlag] Set to true if transaction is taxable at the composite level.  nullable
 * @property {string} [compositeTaxXref]
 * @property {number} [compositeTaxAmount]  double nullable
 * @property {boolean} [levelSixTaxFlag] Set to true if transaction is taxable at level six.  nullable
 * @property {string} [levelSixTaxXref]
 * @property {number} [levelSixTaxAmount]  double nullable
 * @property {string} [createdBy]
 * @property {string} [dateClosed]
 * @property {object} [_info]
 */

/**
 * UnpostedInvoiceTaxableLevel
 * @typedef {object} UnpostedInvoiceTaxableLevel
 * @property {number} [id]  int32
 * @property {number} [taxLevel]  int32
 * @property {string} [taxCodeXref]
 * @property {number} [taxAmount]  double nullable
 * @property {object} [_info]
 */

/**
 * UnpostedProcurement
 * @typedef {object} UnpostedProcurement
 * @property {number} [id]  int32
 * @property {string} [description]
 * @property {string} [unpostedProductId]
 * @property {number} [locationId]  int32 nullable
 * @property {number} [departmentId]  int32 nullable
 * @property {string} [procurementType]   nullable
 * @property {PurchaseOrderReference} [purchaseOrder]
 * @property {string} [purchaseDate]
 * @property {string} [trackingNumber]
 * @property {BillingTermsReference} [billingTerms]
 * @property {CurrencyReference} [currency]
 * @property {number} [total]  double nullable
 * @property {TaxCodeReference} [taxCode]
 * @property {boolean} [avalaraTaxFlag] Used to determine if Avalara tax is enabled.  nullable
 * @property {boolean} [itemTaxableFlag]   nullable
 * @property {boolean} [purchaseOrderTaxableFlag]   nullable
 * @property {boolean} [stateTaxFlag] Set to true if transaction is taxable at the state level.  nullable
 * @property {string} [stateTaxXref]
 * @property {number} [stateTaxAmount]  double nullable
 * @property {boolean} [countyTaxFlag] Set to true if transaction is taxable at the county level.  nullable
 * @property {string} [countyTaxXref]
 * @property {number} [countyTaxAmount]  double nullable
 * @property {boolean} [cityTaxFlag] Set to true if transaction is taxable at the city level.  nullable
 * @property {string} [cityTaxXref]
 * @property {number} [cityTaxAmount]  double nullable
 * @property {boolean} [countryTaxFlag] Set to true if transaction is taxable at the country level.  nullable
 * @property {string} [countryTaxXref]
 * @property {number} [countryTaxAmount]  double nullable
 * @property {boolean} [compositeTaxFlag] Set to true if transaction is taxable at the composite level.  nullable
 * @property {string} [compositeTaxXref]
 * @property {number} [compositeTaxAmount]  double nullable
 * @property {boolean} [levelSixTaxFlag] Set to true if transaction is taxable at level six.  nullable
 * @property {string} [levelSixTaxXref]
 * @property {number} [levelSixTaxAmount]  double nullable
 * @property {number} [taxTotal]  double nullable
 * @property {CompanyReference} [customer]
 * @property {CompanyReference} [vendor]
 * @property {string} [vendorAccountNumber]
 * @property {string} [vendorInvoiceNumber]
 * @property {string} [vendorInvoiceDate]
 * @property {boolean} [taxFreightFlag]   nullable
 * @property {number} [freightTaxTotal]  double nullable
 * @property {number} [freightCost]  double nullable
 * @property {string} [dateClosed]
 * @property {object} [_info]
 */

/**
 * UnpostedProcurementTaxableLevel
 * @typedef {object} UnpostedProcurementTaxableLevel
 * @property {number} [id]  int32
 * @property {number} [taxLevel]  int32
 * @property {string} [taxCodeXref]
 * @property {number} [taxAmount]  double nullable
 * @property {object} [_info]
 */

/**
 * AccountingPackage
 * @typedef {object} AccountingPackage
 * @property {number} [id]  int32
 * @property {string} [identifier]
 * @property {string} [name]
 */

/**
 * AccountingPackageSetup
 * @typedef {object} AccountingPackageSetup
 * @property {number} [id]  int32
 * @property {AccountingPackageReference} [accountingPackage]
 * @property {boolean} [directTransferFlag]   nullable
 * @property {boolean} [includeInvoicesFlag]   nullable
 * @property {string} [invoiceFormat]   nullable
 * @property {boolean} [includeExpensesFlag]   nullable
 * @property {boolean} [transferExpensesAsBillFlag]   nullable
 * @property {string} [expenseFormat]   nullable
 * @property {boolean} [suppressMemoFlag]   nullable
 * @property {boolean} [syncPaymentInfoFlag]   nullable
 * @property {boolean} [includeSalesTaxFlag]   nullable
 * @property {boolean} [enableTaxGroupsFlag]   nullable
 * @property {boolean} [zeroDollarTaxAmountsFlag]   nullable
 * @property {boolean} [includeItemsFlag]   nullable
 * @property {boolean} [inventorySOHFlag]   nullable
 * @property {boolean} [sendComponentAmountFlag]   nullable
 * @property {boolean} [sendUomFlag]   nullable
 * @property {boolean} [includeCogsEntriesFlag]   nullable
 * @property {boolean} [includeCogsDropShipFlag]   nullable
 */

/**
 * Agreement
 * @typedef {object} Agreement
 * @property {number} [id]  int32
 * @property {string} name  Max length: 100;
 * @property {AgreementTypeReference} [type]
 * @property {CompanyReference} [company]
 * @property {ContactReference} [contact]
 * @property {SiteReference} [site]
 * @property {CompanyReference} [subContractCompany]
 * @property {ContactReference} [subContractContact]
 * @property {AgreementReference} [parentAgreement]
 * @property {string} [customerPO]  Max length: 50;
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {boolean} [restrictLocationFlag]   nullable
 * @property {boolean} [restrictDepartmentFlag]   nullable
 * @property {string} [startDate]  date-time
 * @property {string} [endDate]  date-time
 * @property {boolean} [noEndingDateFlag]   nullable
 * @property {OpportunityReference} [opportunity]
 * @property {boolean} [cancelledFlag]   nullable
 * @property {string} [dateCancelled]  date-time
 * @property {string} [reasonCancelled]  Max length: 100;
 * @property {SLAReference} [sla]
 * @property {string} [workOrder]  Max length: 20;
 * @property {string} [internalNotes]
 * @property {string} [applicationUnits]   nullable
 * @property {number} [applicationLimit]  double nullable
 * @property {string} [applicationCycle]   nullable
 * @property {boolean} [applicationUnlimitedFlag]   nullable
 * @property {boolean} [oneTimeFlag]   nullable
 * @property {boolean} [coverAgreementTime]   nullable
 * @property {boolean} [coverAgreementProduct]   nullable
 * @property {boolean} [coverAgreementExpense]   nullable
 * @property {boolean} [coverSalesTax]   nullable
 * @property {boolean} [carryOverUnused]   nullable
 * @property {boolean} [allowOverruns]   nullable
 * @property {number} [expiredDays]  int32 nullable
 * @property {number} [limit]  int32 nullable
 * @property {boolean} [expireWhenZero]   nullable
 * @property {boolean} [chargeToFirm]   nullable
 * @property {string} [employeeCompRate]  Required On Updates;  nullable
 * @property {string} [employeeCompNotExceed]   nullable
 * @property {number} [compHourlyRate]  double nullable
 * @property {number} [compLimitAmount]  double nullable
 * @property {BillingCycleReference} [billingCycle]
 * @property {boolean} [billOneTimeFlag]   nullable
 * @property {BillingTermsReference} [billingTerms]
 * @property {string} [invoicingCycle]  Required On Updates;  nullable
 * @property {CompanyReference} [billToCompany]
 * @property {ContactReference} [billToContact]
 * @property {SiteReference} [billToSite]
 * @property {number} [billAmount]  double nullable
 * @property {boolean} [taxable]   nullable
 * @property {number} [prorateFirstBill]  double nullable
 * @property {string} [billStartDate]  date-time
 * @property {TaxCodeReference} [taxCode]
 * @property {boolean} [restrictDownPayment]   nullable
 * @property {boolean} [prorateFlag]   nullable
 * @property {string} [invoiceDescription]
 * @property {boolean} [topComment]   nullable
 * @property {boolean} [bottomComment]   nullable
 * @property {WorkRoleReference} [workRole]
 * @property {WorkTypeReference} [workType]
 * @property {ProjectTypeReference} [projectType]
 * @property {InvoiceTemplateReference} [invoiceTemplate]
 * @property {string} [billTime]  Required On Updates;  nullable
 * @property {string} [billExpenses]  Required On Updates;  nullable
 * @property {string} [billProducts]  Required On Updates;  nullable
 * @property {boolean} [billableTimeInvoice]   nullable
 * @property {boolean} [billableExpenseInvoice]   nullable
 * @property {boolean} [billableProductInvoice]   nullable
 * @property {CurrencyReference} [currency]
 * @property {string} [periodType]   nullable
 * @property {boolean} [autoInvoiceFlag]   nullable
 * @property {string} [nextInvoiceDate]
 * @property {SystemLocationReference} [companyLocation]
 * @property {string} [agreementStatus]   nullable
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * Addition
 * @typedef {object} Addition
 * @property {number} [id]  int32
 * @property {IvItemReference} [product]
 * @property {number} [quantity]  double nullable
 * @property {number} [lessIncluded]  double nullable
 * @property {number} [unitPrice]  double nullable
 * @property {number} [unitCost]  double nullable
 * @property {string} billCustomer   nullable
 * @property {string} [effectiveDate]  date-time
 * @property {string} [cancelledDate]  date-time
 * @property {boolean} [taxableFlag]   nullable
 * @property {string} [serialNumber]  Max length: 50;
 * @property {string} [invoiceDescription]  Max length: 6000;
 * @property {boolean} [purchaseItemFlag]   nullable
 * @property {boolean} [specialOrderFlag]   nullable
 * @property {number} [agreementId]  int32 nullable
 * @property {string} [description]
 * @property {number} [billedQuantity]  double nullable
 * @property {string} [uom]
 * @property {number} [extPrice]  double nullable
 * @property {number} [extCost]  double nullable
 * @property {number} [sequenceNumber]  double nullable
 * @property {number} [margin]  double nullable
 * @property {number} [prorateCost]  double nullable
 * @property {number} [proratePrice]  double nullable
 * @property {number} [extendedProrateCost]  double nullable
 * @property {number} [extendedProratePrice]  double nullable
 * @property {boolean} [prorateCurrentPeriodFlag]   nullable
 * @property {OpportunityReference} [opportunity]
 * @property {string} [agreementStatus]   nullable
 * @property {InvoiceGroupingReference} [invoiceGrouping]
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * AgreementAdjustment
 * @typedef {object} AgreementAdjustment
 * @property {number} [id]  int32
 * @property {number} [amount]  double nullable
 * @property {string} [description]  Max length: 1000;
 * @property {string} [effectiveDate]  date-time
 * @property {number} [agreementId]  int32 nullable
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * BoardDefault
 * @typedef {object} BoardDefault
 * @property {number} [id]  int32
 * @property {BoardReference} [board]
 * @property {ServiceTypeReference} [serviceType]
 * @property {boolean} [defaultFlag]   nullable
 * @property {number} [agreementId]  int32 nullable
 * @property {object} [_info]
 */

/**
 * ConfigurationReference
 * @typedef {object} ConfigurationReference
 * @property {number} [id]  int32 nullable
 * @property {string} [deviceIdentifier]
 * @property {object} [_info]
 */

/**
 * AgreementSite
 * @typedef {object} AgreementSite
 * @property {number} [id]  int32
 * @property {CompanyReference} [company]
 * @property {SiteReference} [site]
 * @property {number} [agreementId]  int32 nullable
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * AgreementWorkRoleExclusion
 * @typedef {object} AgreementWorkRoleExclusion
 * @property {number} [id]  int32
 * @property {WorkRoleReference} [workRole]
 * @property {number} [agreementId]  int32 nullable
 * @property {object} [_info]
 */

/**
 * AgreementWorkRole
 * @typedef {object} AgreementWorkRole
 * @property {number} [id]  int32
 * @property {WorkRoleReference} [workRole]
 * @property {number} [locationId]  int32 nullable
 * @property {string} rateType   nullable
 * @property {number} [rate]  double nullable
 * @property {number} [limitTo]  double nullable
 * @property {string} [effectiveDate]  date-time
 * @property {string} [endingDate]  date-time
 * @property {number} [agreementId]  int32 nullable
 * @property {object} [_info]
 */

/**
 * AgreementWorkTypeExclusion
 * @typedef {object} AgreementWorkTypeExclusion
 * @property {number} [id]  int32
 * @property {WorkTypeReference} [workType]
 * @property {number} [agreementId]  int32 nullable
 * @property {object} [_info]
 */

/**
 * AgreementWorkType
 * @typedef {object} AgreementWorkType
 * @property {number} [id]  int32
 * @property {WorkTypeReference} [workType]
 * @property {number} [locationId]  int32 nullable
 * @property {string} rateType   nullable
 * @property {string} billTime   nullable
 * @property {number} [rate]  double nullable
 * @property {number} [hoursMax]  double nullable
 * @property {number} [hoursMin]  double nullable
 * @property {number} [roundBillHours]  double nullable
 * @property {number} [overageRate]  double nullable
 * @property {string} [overageRateType]   nullable
 * @property {number} [agreementLimit]  double nullable
 * @property {SiteReference} [site]
 * @property {string} [effectiveDate]  date-time
 * @property {string} [endingDate]  date-time
 * @property {number} [agreementId]  int32 nullable
 * @property {CompanyReference} [company]
 * @property {object} [_info]
 */

/**
 * AgreementType
 * @typedef {object} AgreementType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {string} [prefixSuffixOption]   nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [prePaymentFlag]   nullable
 * @property {string} [invoicePreSuffix]  Max length: 5;
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {boolean} [restrictLocationFlag]   nullable
 * @property {boolean} [restrictDepartmentFlag]   nullable
 * @property {SLAReference} [sla]
 * @property {string} [applicationUnits]   nullable
 * @property {number} [applicationLimit]  double nullable
 * @property {string} [applicationCycle]   nullable
 * @property {boolean} [applicationUnlimitedFlag]   nullable
 * @property {boolean} [oneTimeFlag]   nullable
 * @property {boolean} [coverAgreementTimeFlag]   nullable
 * @property {boolean} [coverAgreementProductFlag]   nullable
 * @property {boolean} [coverAgreementExpenseFlag]   nullable
 * @property {boolean} [coverSalesTaxFlag]   nullable
 * @property {boolean} [carryOverUnusedFlag]   nullable
 * @property {boolean} [allowOverrunsFlag]   nullable
 * @property {number} [expiredDays]  int32 nullable
 * @property {number} [limit]  int32 nullable
 * @property {boolean} [expireWhenZero]   nullable
 * @property {boolean} [chargeToFirmFlag]   nullable
 * @property {string} employeeCompRate   nullable
 * @property {string} employeeCompNotExceed   nullable
 * @property {number} [compHourlyRate]  double nullable
 * @property {number} [compLimitAmount]  double nullable
 * @property {BillingCycleReference} [billingCycle]
 * @property {boolean} [billOneTimeFlag]   nullable
 * @property {BillingTermsReference} [billingTerms]
 * @property {string} invoicingCycle   nullable
 * @property {number} [billAmount]  double nullable
 * @property {boolean} [taxableFlag]   nullable
 * @property {boolean} [restrictDownPaymentFlag]   nullable
 * @property {string} [invoiceDescription]  Max length: 4000;
 * @property {boolean} [topCommentFlag]   nullable
 * @property {boolean} [bottomCommentFlag]   nullable
 * @property {WorkRoleReference} [workRole]
 * @property {WorkTypeReference} [workType]
 * @property {ProjectTypeReference} [projectType]
 * @property {InvoiceTemplateReference} [invoiceTemplate]
 * @property {string} billTime   nullable
 * @property {string} billExpenses   nullable
 * @property {string} billProducts   nullable
 * @property {boolean} [billableTimeInvoiceFlag]   nullable
 * @property {boolean} [billableExpenseInvoiceFlag]   nullable
 * @property {boolean} [billableProductInvoiceFlag]   nullable
 * @property {boolean} [copyWorkRolesFlag]   nullable
 * @property {boolean} [copyWorkTypesFlag]   nullable
 * @property {array} [exclusionWorkRoleIds]
 * @property {boolean} [addAllWorkRoleExclusions]   nullable
 * @property {boolean} [removeAllWorkRoleExclusions]   nullable
 * @property {array} [exclusionWorkTypeIds]
 * @property {boolean} [addAllWorkTypeExclusions]   nullable
 * @property {boolean} [removeAllWorkTypeExclusions]   nullable
 * @property {string} [integrationXRef]  Max length: 50;
 * @property {boolean} [prorateFlag]   nullable
 * @property {EmailTemplateReference} [emailTemplate]
 * @property {boolean} [autoInvoiceFlag]   nullable
 * @property {object} [_info]
 */

/**
 * AgreementTypeInfo
 * @typedef {object} AgreementTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {string} [applicationUnits]   nullable
 * @property {object} [_info]
 */

/**
 * Usage
 * @typedef {object} Usage
 * @property {string} [type]
 * @property {number} [count]  int32 nullable
 * @property {number} [id]  int32 nullable
 * @property {string} [description]
 * @property {string} [hyperlink]
 * @property {string} [typeKey]
 */

/**
 * AgreementTypeBoardDefault
 * @typedef {object} AgreementTypeBoardDefault
 * @property {number} [id]  int32
 * @property {AgreementTypeReference} [type]
 * @property {SystemLocationReference} location
 * @property {SystemDepartmentReference} [department]
 * @property {BoardReference} [board]
 * @property {ServiceTypeReference} [serviceType]
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * AgreementTypeWorkRoleExclusion
 * @typedef {object} AgreementTypeWorkRoleExclusion
 * @property {number} [id]  int32
 * @property {AgreementTypeReference} [type]
 * @property {WorkRoleReference} [workRole]
 * @property {object} [_info]
 */

/**
 * AgreementTypeWorkRole
 * @typedef {object} AgreementTypeWorkRole
 * @property {number} [id]  int32
 * @property {AgreementTypeReference} [type]
 * @property {WorkRoleReference} [workRole]
 * @property {string} [effectiveDate]  date-time
 * @property {string} [endingDate]  date-time
 * @property {number} [rate]  double nullable
 * @property {string} rateType   nullable
 * @property {number} [limitTo]  double nullable
 * @property {object} [_info]
 */

/**
 * AgreementTypeWorkRoleInfo
 * @typedef {object} AgreementTypeWorkRoleInfo
 * @property {number} [id]  int32
 * @property {AgreementTypeReference} [type]
 * @property {WorkRoleReference} [workRole]
 * @property {object} [_info]
 */

/**
 * AgreementTypeWorkTypeExclusion
 * @typedef {object} AgreementTypeWorkTypeExclusion
 * @property {number} [id]  int32
 * @property {AgreementTypeReference} [type]
 * @property {WorkTypeReference} [workType]
 * @property {object} [_info]
 */

/**
 * AgreementTypeWorkType
 * @typedef {object} AgreementTypeWorkType
 * @property {number} [id]  int32
 * @property {AgreementTypeReference} [type]
 * @property {WorkTypeReference} [workType]
 * @property {string} [effectiveDate]  date-time
 * @property {string} [endingDate]  date-time
 * @property {number} [rate]  double nullable
 * @property {string} rateType   nullable
 * @property {string} billTime   nullable
 * @property {number} [hoursMin]  double nullable
 * @property {number} [hoursMax]  double nullable
 * @property {number} [roundBillHours]  double nullable
 * @property {number} [overageRate]  double nullable
 * @property {string} overageRateType   nullable
 * @property {number} [limitTo]  double nullable
 * @property {object} [_info]
 */

/**
 * AgreementBatchSetup
 * @typedef {object} AgreementBatchSetup
 * @property {number} [id]  int32
 * @property {string} nextRunDate  date-time
 * @property {number} daysInAdvance  int32 nullable
 * @property {object} [_info]
 */

/**
 * BillingCycle
 * @typedef {object} BillingCycle
 * @property {number} [id]  int32
 * @property {string} identifier  Max length: 5;
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]
 * @property {string} billingOptions   nullable
 * @property {object} [_info]
 */

/**
 * BillingCycleInfo
 * @typedef {object} BillingCycleInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [defaultFlag]
 * @property {object} [_info]
 */

/**
 * BillingSetup
 * @typedef {object} BillingSetup
 * @property {number} [id]  int32
 * @property {string} remitName  Max length: 50;
 * @property {SystemLocationReference} location
 * @property {string} [addressOne]  Max length: 50;
 * @property {string} [addressTwo]  Max length: 50;
 * @property {string} [city]  Max length: 50;
 * @property {StateReference} [state]
 * @property {string} [zip]  Max length: 12;
 * @property {CountryReference} [country]
 * @property {string} [phone]  Max length: 15;
 * @property {string} invoiceTitle  Max length: 50;
 * @property {string} payableName  Max length: 50;
 * @property {string} [topcomment]  Max length: 4000;
 * @property {string} [invoiceFooter]  Max length: 500;
 * @property {string} [quoteFooter]  Max length: 1000;
 * @property {InvoiceTemplateReference} [overallInvoiceDefault]
 * @property {InvoiceTemplateReference} [standardInvoiceActual]
 * @property {InvoiceTemplateReference} [standardInvoiceFixed]
 * @property {InvoiceTemplateReference} [progressInvoice]
 * @property {InvoiceTemplateReference} [agreementInvoice]
 * @property {InvoiceTemplateReference} [creditMemoInvoice]
 * @property {InvoiceTemplateReference} [downPaymentInvoice]
 * @property {InvoiceTemplateReference} [miscInvoice]
 * @property {InvoiceTemplateReference} [salesOrderInvoice]
 * @property {boolean} [excludeDoNotBillTimeFlag]   nullable
 * @property {boolean} [excludeDoNotBillExpenseFlag]   nullable
 * @property {boolean} [excludeDoNotBillProductFlag]   nullable
 * @property {string} [prefixSuffixFlag]   nullable
 * @property {string} [prefixSuffixText]  Max length: 5;
 * @property {boolean} [chargeAdjToFirmFlag]   nullable
 * @property {boolean} [noWatermarkFlag]   nullable
 * @property {boolean} [displayTaxFlag]   nullable
 * @property {boolean} [allowRestrictedDeptOnRoutingFlag]   nullable
 * @property {boolean} [billTicketSeparatelyFlag]   nullable
 * @property {boolean} [billTicketCompleteFlag]   nullable
 * @property {boolean} [billTicketUnapprovedFlag]   nullable
 * @property {boolean} [billProjectCompleteFlag]   nullable
 * @property {boolean} [billProjectUnapprovedFlag]   nullable
 * @property {boolean} [progressTimeFlag]   nullable
 * @property {boolean} [restrictProjectDownpaymentFlag]   nullable
 * @property {boolean} [billSalesOrderCompleteFlag]   nullable
 * @property {boolean} [billProductAfterShipFlag]   nullable
 * @property {boolean} [restrictDownpaymentFlag]   nullable
 * @property {boolean} [copyNonServiceProductsFlag]   nullable
 * @property {boolean} [copyServiceProductsFlag]   nullable
 * @property {boolean} [copyAgreementProductsFlag]   nullable
 * @property {boolean} [printLogoFlag]   nullable
 * @property {boolean} [readReceiptFlag]   nullable
 * @property {boolean} [deliveryReceiptFlag]   nullable
 * @property {boolean} [disableRoutingEmailFlag]   nullable
 * @property {EmailTemplateReference} emailTemplate
 * @property {CountryReference} [localizedCountry]
 * @property {string} [businessNumber]  Max length: 50;
 * @property {CurrencyReference} [currency]
 * @property {string} [customLabel]  Max length: 50;
 * @property {string} [customText]  Max length: 500;
 * @property {string} [companyCode]  Max length: 250;
 * @property {boolean} [excludeAvalaraFlag]   nullable
 * @property {object} [_info]
 */

/**
 * BillingSetupInfo
 * @typedef {object} BillingSetupInfo
 * @property {number} [id]  int32
 * @property {string} [remitName]
 * @property {SystemLocationReference} [location]
 * @property {CurrencyReference} [currency]
 * @property {object} [_info]
 */

/**
 * BillingSetupRouting
 * @typedef {object} BillingSetupRouting
 * @property {number} [id]  int32
 * @property {number} sequenceNumber  int32 nullable
 * @property {string} invoiceRule   nullable
 * @property {string} routingRule   nullable
 * @property {MemberReference} [member]
 * @property {object} [_info]
 */

/**
 * BillingStatus
 * @typedef {object} BillingStatus
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {number} [sortOrder]  int32 nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [closedFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [sentFlag]   nullable
 * @property {object} [_info]
 */

/**
 * BillingStatusInfo
 * @typedef {object} BillingStatusInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {number} [sortOrder]  int32 nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * BillingTerm
 * @typedef {object} BillingTerm
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {number} dueDays  int32 nullable
 * @property {string} [termsXref]  Max length: 50;
 * @property {object} [_info]
 */

/**
 * BillingTermInfo
 * @typedef {object} BillingTermInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * ClosedInvoice
 * @typedef {object} ClosedInvoice
 * @property {number} [id]  int32
 * @property {BillingStatusReference} [status]
 * @property {object} [_info]
 */

/**
 * CompanyFinance
 * @typedef {object} CompanyFinance
 * @property {number} [id]  int32
 * @property {boolean} [billOverrideFlag]   nullable
 * @property {boolean} [billSrFlag]   nullable
 * @property {boolean} [billCompleteSrFlag]   nullable
 * @property {boolean} [billUnapprovedSrFlag]   nullable
 * @property {boolean} [billRestrictPmFlag]   nullable
 * @property {boolean} [billCompletePmFlag]   nullable
 * @property {boolean} [billUnapprovedPmFlag]   nullable
 * @property {EmailTemplateReference} [emailTemplate]
 * @property {CompanyReference} [company]
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * FinanceCurrency
 * @typedef {object} FinanceCurrency
 * @property {number} [id]  int32
 * @property {string} currencyIdentifier  Max length: 10;
 * @property {string} name  Max length: 50;
 * @property {string} [symbol]  Max length: 10;
 * @property {boolean} [displayIdFlag]   nullable
 * @property {boolean} [displaySymbolFlag]   nullable
 * @property {CurrencyCodeReference} [currencyCode]
 * @property {string} [thousandsSeparator]  Max length: 1;
 * @property {string} [decimalSeparator]  Max length: 1;
 * @property {boolean} [negativeParenthesesFlag]   nullable
 * @property {boolean} [rightAlign]   nullable
 * @property {number} [numberOfDecimals]  int32 nullable
 * @property {string} [reportFormat]
 * @property {object} [_info]
 */

/**
 * CurrencyInfo
 * @typedef {object} CurrencyInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * DeliveryMethod
 * @typedef {object} DeliveryMethod
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [emailFlag]   nullable
 * @property {boolean} [integrationEmailFlag]   nullable
 * @property {boolean} [integrationPrintFlag]   nullable
 * @property {boolean} [integrationActiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * GLAccount
 * @typedef {object} GLAccount
 * @property {number} [id]  int32
 * @property {string} glType   nullable
 * @property {MappedTypeReference} mappedType
 * @property {MappedRecordReference} mappedRecord
 * @property {string} [segment1]  Max length: 255;
 * @property {string} [segment2]  Max length: 255;
 * @property {string} [segment3]  Max length: 255;
 * @property {string} [segment4]  Max length: 255;
 * @property {string} [segment5]  Max length: 255;
 * @property {string} [segment6]  Max length: 255;
 * @property {string} [segment7]  Max length: 255;
 * @property {string} [segment8]  Max length: 255;
 * @property {string} [segment9]  Max length: 255;
 * @property {string} [segment10]  Max length: 255;
 * @property {string} [cogs1]  Max length: 255;
 * @property {string} [cogs2]  Max length: 255;
 * @property {string} [cogs3]  Max length: 255;
 * @property {string} [cogs4]  Max length: 255;
 * @property {string} [cogs5]  Max length: 255;
 * @property {string} [cogs6]  Max length: 255;
 * @property {string} [cogs7]  Max length: 255;
 * @property {string} [cogs8]  Max length: 255;
 * @property {string} [cogs9]  Max length: 255;
 * @property {string} [cogs10]  Max length: 255;
 * @property {string} [productId]  Max length: 255;
 * @property {string} [inventory]  Max length: 255;
 * @property {string} [salesCode]  Max length: 255;
 * @property {object} [_info]
 */

/**
 * MappedType
 * @typedef {object} MappedType
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} [table]
 * @property {string} [recIdField]
 * @property {string} [glType]   nullable
 * @property {number} [sortOrder]  int32
 */

/**
 * GLCaption
 * @typedef {object} GLCaption
 * @property {number} [id]  int32
 * @property {string} [segment1]  Max length: 255;
 * @property {string} [segment2]  Max length: 255;
 * @property {string} [segment3]  Max length: 255;
 * @property {string} [segment4]  Max length: 255;
 * @property {string} [segment5]  Max length: 255;
 * @property {string} [segment6]  Max length: 255;
 * @property {string} [segment7]  Max length: 255;
 * @property {string} [segment8]  Max length: 255;
 * @property {string} [segment9]  Max length: 255;
 * @property {string} [segment10]  Max length: 255;
 * @property {string} [segment1type]   nullable
 * @property {string} [segment2type]   nullable
 * @property {string} [segment3type]   nullable
 * @property {string} [segment4type]   nullable
 * @property {string} [segment5type]   nullable
 * @property {string} [segment6type]   nullable
 * @property {string} [segment7type]   nullable
 * @property {string} [segment8type]   nullable
 * @property {string} [segment9type]   nullable
 * @property {string} [segment10type]   nullable
 * @property {string} [cogs1]  Max length: 255;
 * @property {string} [cogs2]  Max length: 255;
 * @property {string} [cogs3]  Max length: 255;
 * @property {string} [cogs4]  Max length: 255;
 * @property {string} [cogs5]  Max length: 255;
 * @property {string} [cogs6]  Max length: 255;
 * @property {string} [cogs7]  Max length: 255;
 * @property {string} [cogs8]  Max length: 255;
 * @property {string} [cogs9]  Max length: 255;
 * @property {string} [cogs10]  Max length: 255;
 * @property {object} [_info]
 */

/**
 * GLPath
 * @typedef {object} GLPath
 * @property {number} [id]  int32
 * @property {SystemLocationReference} [location]
 * @property {string} [path]  Max length: 255;
 * @property {string} [sqlServerName]  Max length: 255;
 * @property {string} [databaseName]  Max length: 100;
 * @property {string} [lastPaymentSync]  date-time
 * @property {MemberReference} [lastPaymentSyncBy]
 * @property {object} [_info]
 */

/**
 * CurrencyCode
 * @typedef {object} CurrencyCode
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * InvoiceInfo
 * @typedef {object} InvoiceInfo
 * @property {number} [id]  int32
 * @property {Invoice} [invoice]
 * @property {InvoiceTemplate} [invoiceTemplate]
 * @property {array} [products]
 * @property {array} [bundledComponentsInfo]
 * @property {array} [expenses]
 * @property {array} [timeEntries]
 * @property {DocumentInfo} [logo]
 * @property {BillingSetup} [billingSetup]
 * @property {array} [agreementBillingInfo]
 * @property {object} [_info]
 */

/**
 * TaxIntegrationInfo
 * @typedef {object} TaxIntegrationInfo
 * @property {number} [id]  int32
 * @property {boolean} [enabledFlag]
 * @property {string} [taxIntegrationType]
 * @property {object} [_info]
 */

/**
 * InvoiceEmailTemplate
 * @typedef {object} InvoiceEmailTemplate
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {ServiceSurveyReference} [serviceSurvey]
 * @property {boolean} [useSenderFlag]   nullable
 * @property {string} [firstName] From fields (first name, last name, email address) are required if useSenderFlag is false Max length: 100;
 * @property {string} [lastName] From fields (first name, last name, email address) are required if useSenderFlag is false Max length: 100;
 * @property {string} [emailAddress] From fields (first name, last name, email address) are required if useSenderFlag is false Max length: 100;
 * @property {string} subject  Max length: 200;
 * @property {string} [body]
 * @property {boolean} [copySenderFlag]   nullable
 * @property {BillingStatusReference} [invoiceStatus]
 * @property {boolean} [attachInvoiceFlag]   nullable
 * @property {object} [_info]
 */

/**
 * InvoiceEmailTemplateInfo
 * @typedef {object} InvoiceEmailTemplateInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * Invoice
 * @typedef {object} Invoice
 * @property {number} [id]  int32
 * @property {string} [invoiceNumber]  Max length: 15; Required On Updates;
 * @property {string} type   nullable
 * @property {BillingStatusReference} [status]
 * @property {CompanyReference} [company]
 * @property {CompanyReference} [billToCompany]
 * @property {CompanyReference} [shipToCompany]
 * @property {string} [accountNumber]
 * @property {string} [applyToType]   nullable
 * @property {number} [applyToId]  int32 nullable
 * @property {string} [attention]  Max length: 60;
 * @property {string} [shipToAttention]  Max length: 60;
 * @property {SiteReference} [billingSite]
 * @property {string} [billingSiteAddressLine1]
 * @property {string} [billingSiteAddressLine2]
 * @property {string} [billingSiteCity]
 * @property {string} [billingSiteState]
 * @property {string} [billingSiteZip]
 * @property {string} [billingSiteCountry]
 * @property {SiteReference} [shippingSite]
 * @property {string} [shippingSiteAddressLine1]
 * @property {string} [shippingSiteAddressLine2]
 * @property {string} [shippingSiteCity]
 * @property {string} [shippingSiteState]
 * @property {string} [shippingSiteZip]
 * @property {string} [shippingSiteCountry]
 * @property {BillingTermsReference} [billingTerms]
 * @property {string} [reference]  Max length: 50;
 * @property {string} [customerPO]  Max length: 50;
 * @property {number} [templateSetupId] Can be obtained via InvoiceTemplate report int32 nullable
 * @property {InvoiceTemplateDetailReference} [invoiceTemplate]
 * @property {number} [emailTemplateId] Can be obtained via InvoiceEmailTemplate report int32 nullable
 * @property {boolean} [addToBatchEmailList]   nullable
 * @property {string} [date]  date-time
 * @property {boolean} [restrictDownpaymentFlag]   nullable
 * @property {number} [locationId]  Required On Updates; int32 nullable
 * @property {number} [departmentId] departmentId is only required for special invoices int32 nullable
 * @property {number} [territoryId]  int32 nullable
 * @property {string} [topComment]
 * @property {string} [bottomComment]
 * @property {boolean} [taxableFlag]   nullable
 * @property {TaxCodeReference} [taxCode]
 * @property {string} [internalNotes]
 * @property {boolean} [downpaymentPreviouslyTaxedFlag]   nullable
 * @property {number} [serviceTotal]  double nullable
 * @property {boolean} [overrideDownPaymentAmountFlag]   nullable
 * @property {CurrencyReference} [currency]
 * @property {string} [dueDate]  date-time
 * @property {number} [expenseTotal]  double nullable
 * @property {number} [productTotal]  double nullable
 * @property {number} [previousProgressApplied]  double nullable
 * @property {number} [serviceAdjustmentAmount]  double nullable
 * @property {number} [agreementAmount]  double nullable
 * @property {number} [downpaymentApplied]  double nullable
 * @property {number} [subtotal]  double nullable
 * @property {number} [total]  double nullable
 * @property {number} [remainingDownpayment]  double nullable
 * @property {number} [salesTax]  double nullable
 * @property {string} [adjustmentReason]
 * @property {string} [adjustedBy]
 * @property {number} [payments]  double nullable
 * @property {number} [credits]  double nullable
 * @property {number} [balance]  double nullable
 * @property {boolean} [specialInvoiceFlag]   nullable
 * @property {BillingSetupReference} [billingSetupReference]
 * @property {TicketReference} [ticket]
 * @property {ProjectReference} [project]
 * @property {ProjectPhaseReference} [phase]
 * @property {SalesOrderReference} [salesOrder]
 * @property {AgreementReference} [agreement]
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * Payment
 * @typedef {object} Payment
 * @property {number} [id]  int32
 * @property {string} [type]
 * @property {InvoiceReference} [invoice]
 * @property {InvoiceReference} [credit]
 * @property {number} [amount]  double nullable
 * @property {string} [paymentDate]  date-time
 * @property {string} [appliedBy]
 * @property {object} [_info]
 */

/**
 * InvoiceTemplate
 * @typedef {object} InvoiceTemplate
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {number} [marginLeft]  double nullable
 * @property {number} [marginRight]  double nullable
 * @property {number} [marginTop]  double nullable
 * @property {number} [marginBottom]  double nullable
 * @property {boolean} [logoVisibleFlag]   nullable
 * @property {string} [headerLogoPosition]   nullable
 * @property {boolean} [remitToVisibleFlag]   nullable
 * @property {string} [headerAddressPosition]   nullable
 * @property {boolean} [headerTitleVisibleFlag]   nullable
 * @property {string} [headerTitleCaption]  Max length: 50;
 * @property {string} [headerTitlePosition]   nullable
 * @property {string} [headerTitleFont]   nullable
 * @property {boolean} [headerTermsVisibleFlag]   nullable
 * @property {string} [headerTermsCaption]  Max length: 50;
 * @property {boolean} [headerDueDateVisibleFlag]   nullable
 * @property {string} [headerDueDateCaption]  Max length: 50;
 * @property {boolean} [headerPoNumberVisibleFlag]   nullable
 * @property {string} [headerPoNumberCaption]  Max length: 50;
 * @property {boolean} [headerReferenceVisibleFlag]   nullable
 * @property {string} [headerReferenceCaption]  Max length: 50;
 * @property {boolean} [headerAccountVisibleFlag]   nullable
 * @property {string} [headerAccountCaption]  Max length: 50;
 * @property {boolean} [headerTaxIdVisibleFlag]   nullable
 * @property {string} [headerTaxIdCaption]  Max length: 50;
 * @property {boolean} [headerShipToVisibleFlag]   nullable
 * @property {string} [headerShipToCaption]  Max length: 50;
 * @property {boolean} [headerHoursBasedExtendedAmountVisibleFlag]   nullable
 * @property {string} [payableCaption]  Max length: 1000;
 * @property {boolean} [serviceHeaderTicketNumberVisibleFlag]   nullable
 * @property {string} [serviceHeaderTicketNumberCaption]  Max length: 50;
 * @property {boolean} [serviceHeaderCompanyNameVisibleFlag]   nullable
 * @property {string} [serviceHeaderCompanyNameCaption]  Max length: 50;
 * @property {boolean} [serviceHeaderSummaryVisibleFlag]   nullable
 * @property {string} [serviceHeaderSummaryCaption]  Max length: 50;
 * @property {boolean} [serviceHeaderContactNameVisibleFlag]   nullable
 * @property {string} [serviceHeaderContactNameCaption]  Max length: 50;
 * @property {boolean} [serviceHeaderDetailDescriptionVisibleFlag]   nullable
 * @property {string} [serviceHeaderDetailDescriptionCaption]  Max length: 50;
 * @property {boolean} [serviceHeaderResolutionVisibleFlag]   nullable
 * @property {string} [serviceHeaderResolutionCaption]  Max length: 50;
 * @property {boolean} [serviceHeaderAmountVisibleFlag]   nullable
 * @property {string} [serviceHeaderAmountCaption]  Max length: 50;
 * @property {boolean} [serviceHeaderBillingMethodVisibleFlag]   nullable
 * @property {string} [serviceHeaderBillingMethodCaption]  Max length: 50;
 * @property {boolean} [serviceHeaderClosedTasksVisibleFlag]   nullable
 * @property {boolean} [serviceHeaderOpenTasksVisibleFlag]   nullable
 * @property {boolean} [serviceHeaderBundledTicketsVisibleFlag]   nullable
 * @property {boolean} [projectHeaderProjectNameVisibleFlag]   nullable
 * @property {string} [projectHeaderProjectNameCaption]  Max length: 50;
 * @property {boolean} [projectHeaderCompanyNameVisibleFlag]   nullable
 * @property {string} [projectHeaderCompanyNameCaption]  Max length: 50;
 * @property {boolean} [projectHeaderOriginalDownpaymentVisibleFlag]   nullable
 * @property {string} [projectHeaderOriginalDownpaymentCaption]  Max length: 50;
 * @property {boolean} [projectHeaderContactNameVisibleFlag]   nullable
 * @property {string} [projectHeaderContactNameCaption]  Max length: 50;
 * @property {boolean} [projectHeaderAmountVisibleFlag]   nullable
 * @property {string} [projectHeaderAmountCaption]  Max length: 50;
 * @property {boolean} [projectHeaderBillingMethodVisibleFlag]   nullable
 * @property {string} [projectHeaderBillingMethodCaption]  Max length: 50;
 * @property {boolean} [projectHeaderBillingTypeVisibleFlag]   nullable
 * @property {string} [projectHeaderBillingTypeCaption]  Max length: 50;
 * @property {boolean} [invoicePaymentAmountVisibleFlag]   nullable
 * @property {string} [invoicePaymentAmountCaption]  Max length: 50;
 * @property {boolean} [invoiceCreditAmountVisibleFlag]   nullable
 * @property {string} [invoiceCreditAmountCaption]  Max length: 50;
 * @property {boolean} [invoiceBalanceDueVisibleFlag]   nullable
 * @property {string} [invoiceBalanceDueCaption]  Max length: 50;
 * @property {boolean} [creditCreditAmountVisibleFlag]   nullable
 * @property {string} [creditCreditAmountCaption]  Max length: 50;
 * @property {boolean} [creditRemainingAmountVisibleFlag]   nullable
 * @property {string} [creditRemainingAmountCaption]  Max length: 50;
 * @property {boolean} [timeDetailVisibleFlag]   nullable
 * @property {string} [timeDetailPrimarySortField]
 * @property {string} [timeDetailPrimarySortDirection]
 * @property {string} [timeDetailSecondarySortField]
 * @property {string} [timeDetailSecondarySortDirection]
 * @property {boolean} [timeDetailSubtotalVisibleFlag]   nullable
 * @property {boolean} [timeDetailStartEndTimeVisibleFlag]   nullable
 * @property {boolean} [timeDetailHoursVisibleFlag]   nullable
 * @property {boolean} [timeDetailMembersVisibleFlag]   nullable
 * @property {boolean} [timeDetailBillableVisibleFlag]   nullable
 * @property {boolean} [timeDetailExtendedAmountVisibleFlag]   nullable
 * @property {boolean} [timeDetailDollarAmountsOnHourseBasedVisibleFlag]   nullable
 * @property {boolean} [timeDetailHourlyRateVisibleFlag]   nullable
 * @property {boolean} [timeDetailContactsVisibleFlag]   nullable
 * @property {boolean} [timeDetailNotesVisibleFlag]   nullable
 * @property {string} [timeDetailNonBillableCaption]  Max length: 50;
 * @property {boolean} [timeDetailAgreementVisibleFlag]   nullable
 * @property {boolean} [timeDetailHoursBasedHoursVisibleFlag]   nullable
 * @property {boolean} [timeDetailHoursBasedExtAmountVisibleFlag]   nullable
 * @property {boolean} [timeDetailHoursbasedHourlyRateVisibleFlag]   nullable
 * @property {boolean} [timeDetailAmountBasedHoursVisibleFlag]   nullable
 * @property {boolean} [timeDetailAmountBasedExtAmountVisibleFlag]   nullable
 * @property {boolean} [timeDetailAmountBasedHourlyRateVisibleFlag]   nullable
 * @property {boolean} [timeDetailSRTicketSummaryVisibleFlag]   nullable
 * @property {boolean} [timeDetailSRContactVisibleFlag]   nullable
 * @property {boolean} [timeDetailSRAddressVisibleFlag]   nullable
 * @property {boolean} [timeDetailPmPhaseVisibleFlag]   nullable
 * @property {boolean} [timeDetailPmSummaryVisibleFlag]   nullable
 * @property {boolean} [timeDetailTicketNumberVisibleFlag]   nullable
 * @property {boolean} [timeDetailDatesVisibleFlag]   nullable
 * @property {string} [servicesStaffCaption]  Max length: 50;
 * @property {boolean} [servicesStaffVisibleFlag]   nullable
 * @property {string} [servicesAmountCaption]  Max length: 50;
 * @property {boolean} [servicesAmountVisibleFlag]   nullable
 * @property {string} [servicesHoursCaption]  Max length: 50;
 * @property {boolean} [servicesHoursVisibleFlag]   nullable
 * @property {string} [servicesRateCaption]  Max length: 50;
 * @property {boolean} [servicesRateVisibleFlag]   nullable
 * @property {string} [servicesWorkRoleCaption]  Max length: 50;
 * @property {boolean} [servicesWorkRoleVisibleFlag]   nullable
 * @property {string} [servicesWorkTypeCaption]  Max length: 50;
 * @property {boolean} [servicesWorkTypeVisibleFlag]   nullable
 * @property {boolean} [servicesTotalVisibleFlag]   nullable
 * @property {boolean} [servicesMemberNameVisibleFlag]   nullable
 * @property {string} [servicesMemberNameCaption]  Max length: 50;
 * @property {boolean} [currencyIdVisibleFlag]   nullable
 * @property {boolean} [currencySymbolVisibleFlag]   nullable
 * @property {boolean} [portalFlag]   nullable
 * @property {boolean} [servicesCollapsedFlag]   nullable
 * @property {boolean} [expensesCollapsedFlag]   nullable
 * @property {boolean} [otherChargesCollapsedFlag]   nullable
 * @property {string} [expensesTypeCaption]  Max length: 50;
 * @property {string} [expensesStaffCaption]  Max length: 50;
 * @property {string} [expensesAmountCaption]  Max length: 50;
 * @property {boolean} [expensesTypeVisibleFlag]   nullable
 * @property {boolean} [expensesStaffVisibleFlag]   nullable
 * @property {boolean} [expensesAmountVisibleFlag]   nullable
 * @property {boolean} [expensesTotalVisibleFlag]   nullable
 * @property {boolean} [expenseDetailSubtotalVisibleFlag]   nullable
 * @property {boolean} [expenseDetailMembersVisibleFlag]   nullable
 * @property {boolean} [expenseDetailContactsVisibleFlag]   nullable
 * @property {boolean} [expenseDetailBillableVisibleFlag]   nullable
 * @property {boolean} [expenseDetailExtAmountVisibleFlag]   nullable
 * @property {boolean} [expenseDetailNotesVisibleFlag]   nullable
 * @property {string} [expenseDetailPrimarySortField]
 * @property {string} [expenseDetailPrimarySortDirection]
 * @property {string} [expenseDetailSecondarySortField]
 * @property {string} [expenseDetailSecondarySortDirection]
 * @property {string} [expenseDetailNonbillableCaption]  Max length: 50;
 * @property {boolean} [expenseDetailVisibleFlag]   nullable
 * @property {boolean} [expenseDetailAgreementVisibleFlag]   nullable
 * @property {boolean} [expenseDetailAgreementExtAmountVisibleFlag]   nullable
 * @property {boolean} [expenseDetailTicketNumberVisibleFlag]   nullable
 * @property {boolean} [expenseDetailSrTicketSummaryVisibleFlag]   nullable
 * @property {boolean} [expenseDetailSrContactVisibleFlag]   nullable
 * @property {boolean} [expenseDetailSrAddressVisibleFlag]   nullable
 * @property {boolean} [expenseDetailPmPhaseVisibleFlag]   nullable
 * @property {boolean} [expenseDetailPmSummaryVisibleFlag]   nullable
 * @property {string} [otherChargesAmountCaption]  Max length: 50;
 * @property {boolean} [otherChargesAmountVisibleFlag]   nullable
 * @property {string} [otherChargesDescriptionCaption]  Max length: 50;
 * @property {boolean} [otherChargesDescriptionVisibleFlag]   nullable
 * @property {boolean} [otherChargesDisplaySixDecimals]   nullable
 * @property {boolean} [otherChargesItemIdVisibleFlag]   nullable
 * @property {string} [otherChargesPriceCaption]  Max length: 50;
 * @property {boolean} [otherChargesPriceVisibleFlag]   nullable
 * @property {string} [otherChargesQuantityCaption]  Max length: 50;
 * @property {boolean} [otherChargesQuantityVisibleFlag]   nullable
 * @property {boolean} [otherChargesSerialNumberVisibleFlag]   nullable
 * @property {boolean} [otherChargesTotalVisibleFlag]   nullable
 * @property {boolean} [adjustmentDescriptionVisibleFlag]   nullable
 * @property {string} [adjustmentDescriptionCaption]  Max length: 50;
 * @property {boolean} [adjustmentQuantityVisibleFlag]   nullable
 * @property {string} [adjustmentQuantityCaption]  Max length: 50;
 * @property {boolean} [adjustmentAmountVisibleFlag]   nullable
 * @property {string} [adjustmentAmountCaption]  Max length: 50;
 * @property {boolean} [adjustmentAgrTypeVisibleFlag]   nullable
 * @property {boolean} [adjustmentTotalVisibleFlag]   nullable
 * @property {boolean} [adjustmentPriceVisibleFlag]   nullable
 * @property {string} [adjustmentPriceCaption]  Max length: 50;
 * @property {object} [_info]
 */

/**
 * InvoiceTemplateSetup
 * @typedef {object} InvoiceTemplateSetup
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [customFlag]   nullable
 * @property {object} [_info]
 */

/**
 * TaxCode
 * @typedef {object} TaxCode
 * @property {number} [id]  int32
 * @property {string} identifier  Max length: 8;
 * @property {string} description  Max length: 50;
 * @property {string} invoiceCaption  Max length: 25;
 * @property {CountryReference} [country]
 * @property {string} effectiveDate  date-time
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [displayOnInvoiceFlag]   nullable
 * @property {boolean} [canadaCalculateGSTFlag]   nullable
 * @property {string} [cancelDate]  date-time
 * @property {number} [levelOneRate]  double nullable
 * @property {string} [levelOneRateType]   nullable
 * @property {number} [levelOneTaxableMax]  double nullable
 * @property {string} [levelOneCaption]  Max length: 25;
 * @property {string} [levelOneTaxCodeXref]  Max length: 50;
 * @property {string} [levelOneAgencyXref]  Max length: 100;
 * @property {boolean} [levelOneServicesFlag]   nullable
 * @property {boolean} [levelOneExpensesFlag]   nullable
 * @property {boolean} [levelOneProductsFlag]   nullable
 * @property {boolean} [levelOneApplySingleUnitFlag]   nullable
 * @property {number} [levelOneApplySingleUnitMin]  double nullable
 * @property {number} [levelOneApplySingleUnitMax]  double nullable
 * @property {number} [levelTwoRate]  double nullable
 * @property {string} [levelTwoRateType]   nullable
 * @property {number} [levelTwoTaxableMax]  double nullable
 * @property {string} [levelTwoCaption]  Max length: 25;
 * @property {string} [levelTwoTaxCodeXref]  Max length: 50;
 * @property {string} [levelTwoAgencyXref]  Max length: 100;
 * @property {boolean} [levelTwoServicesFlag]   nullable
 * @property {boolean} [levelTwoExpensesFlag]   nullable
 * @property {boolean} [levelTwoProductsFlag]   nullable
 * @property {boolean} [levelTwoApplySingleUnitFlag]   nullable
 * @property {number} [levelTwoApplySingleUnitMin]  double nullable
 * @property {number} [levelTwoApplySingleUnitMax]  double nullable
 * @property {number} [levelThreeRate]  double nullable
 * @property {string} [levelThreeRateType]   nullable
 * @property {number} [levelThreeTaxableMax]  double nullable
 * @property {string} [levelThreeCaption]  Max length: 25;
 * @property {string} [levelThreeTaxCodeXref]  Max length: 50;
 * @property {string} [levelThreeAgencyXref]  Max length: 100;
 * @property {boolean} [levelThreeServicesFlag]   nullable
 * @property {boolean} [levelThreeExpensesFlag]   nullable
 * @property {boolean} [levelThreeProductsFlag]   nullable
 * @property {boolean} [levelThreeApplySingleUnitFlag]   nullable
 * @property {number} [levelThreeApplySingleUnitMin]  double nullable
 * @property {number} [levelThreeApplySingleUnitMax]  double nullable
 * @property {number} [levelFourRate]  double nullable
 * @property {string} [levelFourRateType]   nullable
 * @property {number} [levelFourTaxableMax]  double nullable
 * @property {string} [levelFourCaption]  Max length: 25;
 * @property {string} [levelFourTaxCodeXref]  Max length: 50;
 * @property {string} [levelFourAgencyXref]  Max length: 100;
 * @property {boolean} [levelFourServicesFlag]   nullable
 * @property {boolean} [levelFourExpensesFlag]   nullable
 * @property {boolean} [levelFourProductsFlag]   nullable
 * @property {boolean} [levelFourApplySingleUnitFlag]   nullable
 * @property {number} [levelFourApplySingleUnitMin]  double nullable
 * @property {number} [levelFourApplySingleUnitMax]  double nullable
 * @property {number} [levelFiveRate]  double nullable
 * @property {string} [levelFiveRateType]   nullable
 * @property {number} [levelFiveTaxableMax]  double nullable
 * @property {string} [levelFiveCaption]  Max length: 25;
 * @property {string} [levelFiveTaxCodeXref]  Max length: 50;
 * @property {string} [levelFiveAgencyXref]  Max length: 100;
 * @property {boolean} [levelFiveServicesFlag]   nullable
 * @property {boolean} [levelFiveExpensesFlag]   nullable
 * @property {boolean} [levelFiveProductsFlag]   nullable
 * @property {boolean} [levelFiveApplySingleUnitFlag]   nullable
 * @property {number} [levelFiveApplySingleUnitMin]  double nullable
 * @property {number} [levelFiveApplySingleUnitMax]  double nullable
 * @property {number} [levelSixRate]  double nullable
 * @property {string} [levelSixRateType]   nullable
 * @property {number} [levelSixTaxableMax]  double nullable
 * @property {string} [levelSixCaption]  Max length: 25;
 * @property {string} [levelSixTaxCodeXref]  Max length: 50;
 * @property {string} [levelSixAgencyXref]  Max length: 100;
 * @property {boolean} [levelSixServicesFlag]   nullable
 * @property {boolean} [levelSixExpensesFlag]   nullable
 * @property {boolean} [levelSixProductsFlag]   nullable
 * @property {boolean} [levelSixApplySingleUnitFlag]   nullable
 * @property {number} [levelSixApplySingleUnitMin]  double nullable
 * @property {number} [levelSixApplySingleUnitMax]  double nullable
 * @property {array} [workRoleIds] Array of work role exemptions for the tax code
 * @property {boolean} [addAllWorkRoles]   nullable
 * @property {boolean} [removeAllWorkRoles]   nullable
 * @property {array} [expenseTypeIds] Array of expense type exemptions for the tax code
 * @property {boolean} [addAllExpenseTypes]   nullable
 * @property {boolean} [removeAllExpenseTypes]   nullable
 * @property {array} [productTypeIds] Array of product type exemptions for the tax code
 * @property {boolean} [addAllProductTypes]   nullable
 * @property {boolean} [removeAllProductTypes]   nullable
 * @property {object} [_info]
 */

/**
 * TaxableExpenseTypeLevel
 * @typedef {object} TaxableExpenseTypeLevel
 * @property {number} [id]  int32
 * @property {TaxCodeLevelReference} [taxCodeLevel]
 * @property {object} [_info]
 */

/**
 * TaxableProductTypeLevel
 * @typedef {object} TaxableProductTypeLevel
 * @property {number} [id]  int32
 * @property {TaxCodeLevelReference} [taxCodeLevel]
 * @property {object} [_info]
 */

/**
 * TaxableXRefLevel
 * @typedef {object} TaxableXRefLevel
 * @property {number} [id]  int32
 * @property {TaxCodeLevelReference} [taxCodeLevel]
 * @property {object} [_info]
 */

/**
 * TaxableWorkRoleLevel
 * @typedef {object} TaxableWorkRoleLevel
 * @property {number} [id]  int32
 * @property {TaxCodeLevelReference} [taxCodeLevel]
 * @property {object} [_info]
 */

/**
 * TaxCodeInfo
 * @typedef {object} TaxCodeInfo
 * @property {number} [id]  int32
 * @property {string} [identifier]
 * @property {string} [description]
 * @property {string} [effectiveDate]
 * @property {string} [cancelDate]
 * @property {object} [_info]
 */

/**
 * ExpenseTypeExemption
 * @typedef {object} ExpenseTypeExemption
 * @property {number} [id]  int32
 * @property {ExpenseTypeReference} expenseType
 * @property {array} [taxableLevels]
 * @property {object} [_info]
 */

/**
 * ProductTypeExemption
 * @typedef {object} ProductTypeExemption
 * @property {number} [id]  int32
 * @property {ProductTypeReference} productType
 * @property {array} [taxableLevels]
 * @property {object} [_info]
 */

/**
 * TaxCodeLevel
 * @typedef {object} TaxCodeLevel
 * @property {number} [id]  int32
 * @property {number} [taxLevel]  int32
 * @property {number} taxRate  double nullable
 * @property {string} rateType   nullable
 * @property {number} [taxableMax]  double nullable
 * @property {string} [caption]  Max length: 25;
 * @property {string} [taxCodeXref]  Max length: 50;
 * @property {string} [agencyXref]  Max length: 100;
 * @property {boolean} [taxServicesFlag]   nullable
 * @property {boolean} [taxExpensesFlag]   nullable
 * @property {boolean} [taxProductsFlag]   nullable
 * @property {boolean} [singleUnitFlag]   nullable
 * @property {number} [singleUnitMinimum]  double nullable
 * @property {number} [singleUnitMaximum]  double nullable
 * @property {object} [_info]
 */

/**
 * TaxCodeXRef
 * @typedef {object} TaxCodeXRef
 * @property {number} [id]  int32
 * @property {string} description  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {string} [levelOne]   nullable
 * @property {string} [levelTwo]   nullable
 * @property {string} [levelThree]   nullable
 * @property {string} [levelFour]   nullable
 * @property {string} [levelFive]   nullable
 * @property {string} [levelSix]   nullable
 * @property {TaxCodeReference} [taxCode]
 * @property {array} [taxableLevels]
 * @property {object} [_info]
 */

/**
 * WorkRoleExemption
 * @typedef {object} WorkRoleExemption
 * @property {number} [id]  int32
 * @property {WorkRoleReference} workRole
 * @property {array} [taxableLevels]
 * @property {object} [_info]
 */

/**
 * TaxIntegration
 * @typedef {object} TaxIntegration
 * @property {string} [taxIntegrationType]
 * @property {number} [id]  int32
 * @property {string} [accountNumber]  Max length: 50;
 * @property {string} [licenseKey]  Max length: 50;
 * @property {string} [serviceUrl]  Max length: 250;
 * @property {string} [companyCode]  Max length: 50;
 * @property {string} [timeTaxCode]  Max length: 50;
 * @property {string} [expenseTaxCode]  Max length: 50;
 * @property {string} [productTaxCode]  Max length: 50;
 * @property {string} [invoiceAmountTaxCode]  Max length: 50;
 * @property {boolean} [enabledFlag]   nullable
 * @property {boolean} [commitTransactionsFlag]   nullable
 * @property {boolean} [salesInvoiceFlag]   nullable
 * @property {string} [freightTaxCode]  Max length: 50;
 * @property {boolean} [accountingIntegrationFlag]   nullable
 * @property {boolean} [taxLineFlag]   nullable
 * @property {object} [_info]
 */

export default class Finance extends Manage {
  constructor(props) {
    super(props)
  }

  /**
   * Get List of AccountingBatch
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AccountingBatch[]>}
   */
  getFinanceAccountingBatches(params = {}) {
    return this.request({
      path: `/finance/accounting/batches`,
      method: 'get',
      params,
    })
  }

  /**
   * Post GLExport
   * @param {CreateAccountingBatchRequest} accountingBatchParameters accountingBatchParameters
   * @returns {Promise<GLExport>}
   */
  postFinanceAccountingBatches(accountingBatchParameters) {
    return this.request({
      path: `/finance/accounting/batches`,
      method: 'post',
      data: accountingBatchParameters,
    })
  }
  /**
   * Get AccountingBatch
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AccountingBatch>}
   */
  getFinanceAccountingBatchesById(id, params = {}) {
    return this.request({
      path: `/finance/accounting/batches/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete GLExport
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAccountingBatchesById(id) {
    return this.request({
      path: `/finance/accounting/batches/${id}`,
      method: 'delete',
    })
  }
  /**
   * Post GLExport
   * @param {number} id
   * @param {ExportAccountingBatchRequest} batchExportParameters batchExportParameters
   * @returns {Promise<GLExport>}
   */
  postFinanceAccountingBatchesByIdExport(id, batchExportParameters) {
    return this.request({
      path: `/finance/accounting/batches/${id}/export`,
      method: 'post',
      data: batchExportParameters,
    })
  }
  /**
   * Get List of BatchEntry
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BatchEntry[]>}
   */
  getFinanceAccountingBatchesByParentIdEntries(parentId, params = {}) {
    return this.request({
      path: `/finance/accounting/batches/${parentId}/entries`,
      method: 'get',
      params,
    })
  }
  /**
   * Get BatchEntry
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BatchEntry>}
   */
  getFinanceAccountingBatchesByParentIdEntriesById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/accounting/batches/${parentId}/entries/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BatchEntry
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAccountingBatchesByParentIdEntriesCount(parentId, params = {}) {
    return this.request({
      path: `/finance/accounting/batches/${parentId}/entries/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of AccountingBatch
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAccountingBatchesCount(params = {}) {
    return this.request({
      path: `/finance/accounting/batches/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post GLExport
   * @param {ExportAccountingBatchRequest} batchExportParameters batchExportParameters
   * @returns {Promise<GLExport>}
   */
  postFinanceAccountingExport(batchExportParameters) {
    return this.request({
      path: `/finance/accounting/export`,
      method: 'post',
      data: batchExportParameters,
    })
  }
  /**
   * Get List of UnpostedExpense
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UnpostedExpense[]>}
   */
  getFinanceAccountingUnpostedexpenses(params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedexpenses`,
      method: 'get',
      params,
    })
  }
  /**
   * Get UnpostedExpense
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UnpostedExpense>}
   */
  getFinanceAccountingUnpostedexpensesById(id, params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of UnpostedExpenseTaxableLevel
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UnpostedExpenseTaxableLevel[]>}
   */
  getFinanceAccountingUnpostedexpensesByParentIdTaxableLevels(parentId, params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/${parentId}/taxableLevels`,
      method: 'get',
      params,
    })
  }
  /**
   * Get UnpostedExpenseTaxableLevel
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UnpostedExpenseTaxableLevel>}
   */
  getFinanceAccountingUnpostedexpensesByParentIdTaxableLevelsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/${parentId}/taxableLevels/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of UnpostedExpenseTaxableLevel
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAccountingUnpostedexpensesByParentIdTaxableLevelsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/${parentId}/taxableLevels/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of UnpostedExpense
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAccountingUnpostedexpensesCount(params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedexpenses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of UnpostedInvoice
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UnpostedInvoice[]>}
   */
  getFinanceAccountingUnpostedinvoices(params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedinvoices`,
      method: 'get',
      params,
    })
  }
  /**
   * Get UnpostedInvoice
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UnpostedInvoice>}
   */
  getFinanceAccountingUnpostedinvoicesById(id, params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of UnpostedInvoiceTaxableLevel
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UnpostedInvoiceTaxableLevel[]>}
   */
  getFinanceAccountingUnpostedinvoicesByParentIdTaxableLevels(parentId, params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/${parentId}/taxableLevels`,
      method: 'get',
      params,
    })
  }
  /**
   * Get UnpostedInvoiceTaxableLevel
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UnpostedInvoiceTaxableLevel>}
   */
  getFinanceAccountingUnpostedinvoicesByParentIdTaxableLevelsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/${parentId}/taxableLevels/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of UnpostedInvoiceTaxableLevel
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAccountingUnpostedinvoicesByParentIdTaxableLevelsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/${parentId}/taxableLevels/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of UnpostedInvoice
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAccountingUnpostedinvoicesCount(params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedinvoices/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of UnpostedProcurement
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UnpostedProcurement[]>}
   */
  getFinanceAccountingUnpostedprocurement(params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedprocurement`,
      method: 'get',
      params,
    })
  }
  /**
   * Get UnpostedProcurement
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UnpostedProcurement>}
   */
  getFinanceAccountingUnpostedprocurementById(id, params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of UnpostedProcurementTaxableLevel
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UnpostedProcurementTaxableLevel[]>}
   */
  getFinanceAccountingUnpostedprocurementByParentIdTaxableLevels(parentId, params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/${parentId}/taxableLevels`,
      method: 'get',
      params,
    })
  }
  /**
   * Get UnpostedProcurementTaxableLevel
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UnpostedProcurementTaxableLevel>}
   */
  getFinanceAccountingUnpostedprocurementByParentIdTaxableLevelsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/${parentId}/taxableLevels/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of UnpostedProcurementTaxableLevel
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAccountingUnpostedprocurementByParentIdTaxableLevelsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/${parentId}/taxableLevels/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of UnpostedProcurement
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAccountingUnpostedprocurementCount(params = {}) {
    return this.request({
      path: `/finance/accounting/unpostedprocurement/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AccountingPackage
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AccountingPackage[]>}
   */
  getFinanceAccountingPackages(params = {}) {
    return this.request({
      path: `/finance/accountingPackages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get AccountingPackage
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AccountingPackage>}
   */
  getFinanceAccountingPackagesById(id, params = {}) {
    return this.request({
      path: `/finance/accountingPackages/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of AccountingPackage
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAccountingPackagesCount(params = {}) {
    return this.request({
      path: `/finance/accountingPackages/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AccountingPackageSetup
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AccountingPackageSetup[]>}
   */
  getFinanceAccountingPackageSetup(params = {}) {
    return this.request({
      path: `/finance/accountingPackageSetup`,
      method: 'get',
      params,
    })
  }
  /**
   * Get AccountingPackageSetup
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AccountingPackageSetup>}
   */
  getFinanceAccountingPackageSetupById(id, params = {}) {
    return this.request({
      path: `/finance/accountingPackageSetup/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put AccountingPackageSetup
   * @param {number} id
   * @param {AccountingPackageSetup} accountingPackageSetup accountingPackageSetup
   * @returns {Promise<AccountingPackageSetup>}
   */
  putFinanceAccountingPackageSetupById(id, accountingPackageSetup) {
    return this.request({
      path: `/finance/accountingPackageSetup/${id}`,
      method: 'put',
      data: accountingPackageSetup,
    })
  }

  /**
   * Patch AccountingPackageSetup
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AccountingPackageSetup>}
   */
  patchFinanceAccountingPackageSetupById(id, patchOperations) {
    return this.request({
      path: `/finance/accountingPackageSetup/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of AccountingPackageSetup
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAccountingPackageSetupCount(params = {}) {
    return this.request({
      path: `/finance/accountingPackageSetup/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Agreement
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Agreement[]>}
   */
  getFinanceAgreements(params = {}) {
    return this.request({
      path: `/finance/agreements`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Agreement
   * @param {Agreement} agreement agreement
   * @returns {Promise<Agreement>}
   */
  postFinanceAgreements(agreement) {
    return this.request({
      path: `/finance/agreements`,
      method: 'post',
      data: agreement,
    })
  }
  /**
   * Get Agreement
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Agreement>}
   */
  getFinanceAgreementsById(id, params = {}) {
    return this.request({
      path: `/finance/agreements/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Agreement
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementsById(id) {
    return this.request({
      path: `/finance/agreements/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Agreement
   * @param {number} id
   * @param {Agreement} agreement agreement
   * @returns {Promise<Agreement>}
   */
  putFinanceAgreementsById(id, agreement) {
    return this.request({
      path: `/finance/agreements/${id}`,
      method: 'put',
      data: agreement,
    })
  }

  /**
   * Patch Agreement
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Agreement>}
   */
  patchFinanceAgreementsById(id, patchOperations) {
    return this.request({
      path: `/finance/agreements/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of Addition
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Addition[]>}
   */
  getFinanceAgreementsByParentIdAdditions(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/additions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Addition
   * @param {number} parentId
   * @param {Addition} addition addition
   * @returns {Promise<Addition>}
   */
  postFinanceAgreementsByParentIdAdditions(parentId, addition) {
    return this.request({
      path: `/finance/agreements/${parentId}/additions`,
      method: 'post',
      data: addition,
    })
  }
  /**
   * Get Addition
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Addition>}
   */
  getFinanceAgreementsByParentIdAdditionsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Addition
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementsByParentIdAdditionsById(id, parentId) {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put Addition
   * @param {number} id
   * @param {number} parentId
   * @param {Addition} addition addition
   * @returns {Promise<Addition>}
   */
  putFinanceAgreementsByParentIdAdditionsById(id, parentId, addition) {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/{id}`,
      method: 'put',
      data: addition,
    })
  }

  /**
   * Patch Addition
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Addition>}
   */
  patchFinanceAgreementsByParentIdAdditionsById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of Addition
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementsByParentIdAdditionsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/additions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Adjustment
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementAdjustment[]>}
   */
  getFinanceAgreementsByParentIdAdjustments(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Adjustment
   * @param {number} parentId
   * @param {AgreementAdjustment} adjustment adjustment
   * @returns {Promise<AgreementAdjustment>}
   */
  postFinanceAgreementsByParentIdAdjustments(parentId, adjustment) {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments`,
      method: 'post',
      data: adjustment,
    })
  }
  /**
   * Get Adjustment
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementAdjustment>}
   */
  getFinanceAgreementsByParentIdAdjustmentsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Adjustment
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementsByParentIdAdjustmentsById(id, parentId) {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put Adjustment
   * @param {number} id
   * @param {number} parentId
   * @param {AgreementAdjustment} adjustment adjustment
   * @returns {Promise<AgreementAdjustment>}
   */
  putFinanceAgreementsByParentIdAdjustmentsById(id, parentId, adjustment) {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/{id}`,
      method: 'put',
      data: adjustment,
    })
  }

  /**
   * Patch Adjustment
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AgreementAdjustment>}
   */
  patchFinanceAgreementsByParentIdAdjustmentsById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of Adjustment
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementsByParentIdAdjustmentsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/adjustments/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardDefault
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardDefault[]>}
   */
  getFinanceAgreementsByParentIdBoardDefaults(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BoardDefault
   * @param {number} parentId
   * @param {BoardDefault} boardDefault boardDefault
   * @returns {Promise<BoardDefault>}
   */
  postFinanceAgreementsByParentIdBoardDefaults(parentId, boardDefault) {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults`,
      method: 'post',
      data: boardDefault,
    })
  }
  /**
   * Get BoardDefault
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardDefault>}
   */
  getFinanceAgreementsByParentIdBoardDefaultsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BoardDefault
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementsByParentIdBoardDefaultsById(id, parentId) {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put BoardDefault
   * @param {number} id
   * @param {number} parentId
   * @param {BoardDefault} boardDefault boardDefault
   * @returns {Promise<BoardDefault>}
   */
  putFinanceAgreementsByParentIdBoardDefaultsById(id, parentId, boardDefault) {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/{id}`,
      method: 'put',
      data: boardDefault,
    })
  }

  /**
   * Patch BoardDefault
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BoardDefault>}
   */
  patchFinanceAgreementsByParentIdBoardDefaultsById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of BoardDefault
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementsByParentIdBoardDefaultsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/boardDefaults/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ConfigurationReference
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ConfigurationReference[]>}
   */
  getFinanceAgreementsByParentIdConfigurations(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ConfigurationReference
   * @param {number} parentId
   * @param {ConfigurationReference} configuration configuration
   * @returns {Promise<ConfigurationReference>}
   */
  postFinanceAgreementsByParentIdConfigurations(parentId, configuration) {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations`,
      method: 'post',
      data: configuration,
    })
  }
  /**
   * Get ConfigurationReference
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ConfigurationReference>}
   */
  getFinanceAgreementsByParentIdConfigurationsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ConfigurationReference
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementsByParentIdConfigurationsById(id, parentId) {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of ConfigurationReference
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementsByParentIdConfigurationsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/configurations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AgreementSite
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementSite[]>}
   */
  getFinanceAgreementsByParentIdSites(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/sites`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AgreementSite
   * @param {number} parentId
   * @param {AgreementSite} site site
   * @returns {Promise<AgreementSite>}
   */
  postFinanceAgreementsByParentIdSites(parentId, site) {
    return this.request({
      path: `/finance/agreements/${parentId}/sites`,
      method: 'post',
      data: site,
    })
  }
  /**
   * Get AgreementSite
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementSite>}
   */
  getFinanceAgreementsByParentIdSitesById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AgreementSite
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementsByParentIdSitesById(id, parentId) {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put AgreementSite
   * @param {number} id
   * @param {number} parentId
   * @param {AgreementSite} site site
   * @returns {Promise<AgreementSite>}
   */
  putFinanceAgreementsByParentIdSitesById(id, parentId, site) {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/{id}`,
      method: 'put',
      data: site,
    })
  }

  /**
   * Patch AgreementSite
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AgreementSite>}
   */
  patchFinanceAgreementsByParentIdSitesById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of AgreementSite
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementsByParentIdSitesCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/sites/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AgreementWorkRoleExclusion
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementWorkRoleExclusion[]>}
   */
  getFinanceAgreementsByParentIdWorkRoleExclusions(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/workRoleExclusions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AgreementWorkRoleExclusion
   * @param {number} parentId
   * @param {AgreementWorkRoleExclusion} workRoleExclusion workRoleExclusion
   * @returns {Promise<AgreementWorkRoleExclusion>}
   */
  postFinanceAgreementsByParentIdWorkRoleExclusions(parentId, workRoleExclusion) {
    return this.request({
      path: `/finance/agreements/${parentId}/workRoleExclusions`,
      method: 'post',
      data: workRoleExclusion,
    })
  }
  /**
   * Delete AgreementWorkRoleExclusion
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementsByParentIdWorkRoleExclusionsById(id, parentId) {
    return this.request({
      path: `/finance/agreements/${parentId}/workRoleExclusions/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of AgreementWorkRoleExclusion
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementsByParentIdWorkRoleExclusionsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/workRoleExclusions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AgreementWorkRole
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementWorkRole[]>}
   */
  getFinanceAgreementsByParentIdWorkroles(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AgreementWorkRole
   * @param {number} parentId
   * @param {AgreementWorkRole} workRole workRole
   * @returns {Promise<AgreementWorkRole>}
   */
  postFinanceAgreementsByParentIdWorkroles(parentId, workRole) {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles`,
      method: 'post',
      data: workRole,
    })
  }
  /**
   * Get AgreementWorkRole
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementWorkRole>}
   */
  getFinanceAgreementsByParentIdWorkrolesById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AgreementWorkRole
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementsByParentIdWorkrolesById(id, parentId) {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put AgreementWorkRole
   * @param {number} id
   * @param {number} parentId
   * @param {AgreementWorkRole} workRole workRole
   * @returns {Promise<AgreementWorkRole>}
   */
  putFinanceAgreementsByParentIdWorkrolesById(id, parentId, workRole) {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/{id}`,
      method: 'put',
      data: workRole,
    })
  }

  /**
   * Patch AgreementWorkRole
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AgreementWorkRole>}
   */
  patchFinanceAgreementsByParentIdWorkrolesById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of AgreementWorkRole
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementsByParentIdWorkrolesCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/workroles/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AgreementWorkTypeExclusion
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementWorkTypeExclusion[]>}
   */
  getFinanceAgreementsByParentIdWorkTypeExclusions(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/workTypeExclusions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AgreementWorkTypeExclusion
   * @param {number} parentId
   * @param {AgreementWorkTypeExclusion} workTypeExclusion workTypeExclusion
   * @returns {Promise<AgreementWorkTypeExclusion>}
   */
  postFinanceAgreementsByParentIdWorkTypeExclusions(parentId, workTypeExclusion) {
    return this.request({
      path: `/finance/agreements/${parentId}/workTypeExclusions`,
      method: 'post',
      data: workTypeExclusion,
    })
  }
  /**
   * Delete AgreementWorkTypeExclusion
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementsByParentIdWorkTypeExclusionsById(id, parentId) {
    return this.request({
      path: `/finance/agreements/${parentId}/workTypeExclusions/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of AgreementWorkTypeExclusion
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementsByParentIdWorkTypeExclusionsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/workTypeExclusions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AgreementWorkType
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementWorkType[]>}
   */
  getFinanceAgreementsByParentIdWorktypes(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AgreementWorkType
   * @param {number} parentId
   * @param {AgreementWorkType} workType workType
   * @returns {Promise<AgreementWorkType>}
   */
  postFinanceAgreementsByParentIdWorktypes(parentId, workType) {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes`,
      method: 'post',
      data: workType,
    })
  }
  /**
   * Get AgreementWorkType
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementWorkType>}
   */
  getFinanceAgreementsByParentIdWorktypesById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AgreementWorkType
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementsByParentIdWorktypesById(id, parentId) {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put AgreementWorkType
   * @param {number} id
   * @param {number} parentId
   * @param {AgreementWorkType} workType workType
   * @returns {Promise<AgreementWorkType>}
   */
  putFinanceAgreementsByParentIdWorktypesById(id, parentId, workType) {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/{id}`,
      method: 'put',
      data: workType,
    })
  }

  /**
   * Patch AgreementWorkType
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AgreementWorkType>}
   */
  patchFinanceAgreementsByParentIdWorktypesById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of AgreementWorkType
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementsByParentIdWorktypesCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreements/${parentId}/worktypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Agreement
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementsCount(params = {}) {
    return this.request({
      path: `/finance/agreements/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AgreementType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementType[]>}
   */
  getFinanceAgreementsTypes(params = {}) {
    return this.request({
      path: `/finance/agreements/types`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AgreementType
   * @param {AgreementType} agreementType agreementType
   * @returns {Promise<AgreementType>}
   */
  postFinanceAgreementsTypes(agreementType) {
    return this.request({
      path: `/finance/agreements/types`,
      method: 'post',
      data: agreementType,
    })
  }
  /**
   * Get AgreementType
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementType>}
   */
  getFinanceAgreementsTypesById(id, params = {}) {
    return this.request({
      path: `/finance/agreements/types/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AgreementType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementsTypesById(id) {
    return this.request({
      path: `/finance/agreements/types/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put AgreementType
   * @param {number} id
   * @param {AgreementType} agreementType agreementType
   * @returns {Promise<AgreementType>}
   */
  putFinanceAgreementsTypesById(id, agreementType) {
    return this.request({
      path: `/finance/agreements/types/${id}`,
      method: 'put',
      data: agreementType,
    })
  }

  /**
   * Patch AgreementType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AgreementType>}
   */
  patchFinanceAgreementsTypesById(id, patchOperations) {
    return this.request({
      path: `/finance/agreements/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get AgreementType
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementTypeInfo>}
   */
  getFinanceAgreementsTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/finance/agreements/types/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage Count
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceAgreementsTypesByIdUsages(id, params = {}) {
    return this.request({
      path: `/finance/agreements/types/${id}/usages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceAgreementsTypesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/finance/agreements/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of AgreementType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementsTypesCount(params = {}) {
    return this.request({
      path: `/finance/agreements/types/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AgreementTypeInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementTypeInfo[]>}
   */
  getFinanceAgreementsTypesInfo(params = {}) {
    return this.request({
      path: `/finance/agreements/types/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of AgreementTypeInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementsTypesInfoCount(params = {}) {
    return this.request({
      path: `/finance/agreements/types/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AgreementTypeBoardDefault
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementTypeBoardDefault[]>}
   */
  getFinanceAgreementTypesByParentIdBoardDefaults(parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AgreementTypeBoardDefault
   * @param {number} parentId
   * @param {AgreementTypeBoardDefault} boardDefault boardDefault
   * @returns {Promise<AgreementTypeBoardDefault>}
   */
  postFinanceAgreementTypesByParentIdBoardDefaults(parentId, boardDefault) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults`,
      method: 'post',
      data: boardDefault,
    })
  }
  /**
   * Get AgreementTypeBoardDefault
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementTypeBoardDefault>}
   */
  getFinanceAgreementTypesByParentIdBoardDefaultsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AgreementTypeBoardDefault
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementTypesByParentIdBoardDefaultsById(id, parentId) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put AgreementTypeBoardDefault
   * @param {number} id
   * @param {number} parentId
   * @param {AgreementTypeBoardDefault} boardDefault boardDefault
   * @returns {Promise<AgreementTypeBoardDefault>}
   */
  putFinanceAgreementTypesByParentIdBoardDefaultsById(id, parentId, boardDefault) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/{id}`,
      method: 'put',
      data: boardDefault,
    })
  }

  /**
   * Patch AgreementTypeBoardDefault
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AgreementTypeBoardDefault>}
   */
  patchFinanceAgreementTypesByParentIdBoardDefaultsById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of AgreementTypeBoardDefault
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementTypesByParentIdBoardDefaultsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/boardDefaults/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AgreementTypeWorkRoleExclusion
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementTypeWorkRoleExclusion[]>}
   */
  getFinanceAgreementTypesByParentIdWorkRoleExclusions(parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AgreementTypeWorkRoleExclusion
   * @param {number} parentId
   * @param {AgreementTypeWorkRoleExclusion} workRoleExclusion workRoleExclusion
   * @returns {Promise<AgreementTypeWorkRoleExclusion>}
   */
  postFinanceAgreementTypesByParentIdWorkRoleExclusions(parentId, workRoleExclusion) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions`,
      method: 'post',
      data: workRoleExclusion,
    })
  }
  /**
   * Get AgreementTypeWorkRoleExclusion
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementTypeWorkRoleExclusion>}
   */
  getFinanceAgreementTypesByParentIdWorkRoleExclusionsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AgreementTypeWorkRoleExclusion
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementTypesByParentIdWorkRoleExclusionsById(id, parentId) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of AgreementTypeWorkRoleExclusion
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementTypesByParentIdWorkRoleExclusionsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workRoleExclusions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AgreementTypeWorkRole
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementTypeWorkRole[]>}
   */
  getFinanceAgreementTypesByParentIdWorkroles(parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AgreementTypeWorkRole
   * @param {number} parentId
   * @param {AgreementTypeWorkRole} workRole workRole
   * @returns {Promise<AgreementTypeWorkRole>}
   */
  postFinanceAgreementTypesByParentIdWorkroles(parentId, workRole) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles`,
      method: 'post',
      data: workRole,
    })
  }
  /**
   * Get AgreementTypeWorkRole
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementTypeWorkRole>}
   */
  getFinanceAgreementTypesByParentIdWorkrolesById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AgreementTypeWorkRole
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementTypesByParentIdWorkrolesById(id, parentId) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put AgreementTypeWorkRole
   * @param {number} id
   * @param {number} parentId
   * @param {AgreementTypeWorkRole} workRole workRole
   * @returns {Promise<AgreementTypeWorkRole>}
   */
  putFinanceAgreementTypesByParentIdWorkrolesById(id, parentId, workRole) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/{id}`,
      method: 'put',
      data: workRole,
    })
  }

  /**
   * Patch AgreementTypeWorkRole
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AgreementTypeWorkRole>}
   */
  patchFinanceAgreementTypesByParentIdWorkrolesById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of AgreementTypeWorkRole
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementTypesByParentIdWorkrolesCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AgreementTypeWorkRole
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementTypeWorkRoleInfo[]>}
   */
  getFinanceAgreementTypesByParentIdWorkrolesInfo(parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get AgreementTypeWorkRoleInfo
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementTypeWorkRoleInfo>}
   */
  getFinanceAgreementTypesByParentIdWorkrolesInfoById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/info/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of AgreementTypeWorkRoleInfo
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementTypesByParentIdWorkrolesInfoCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workroles/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AgreementTypeWorkTypeExclusion
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementTypeWorkTypeExclusion[]>}
   */
  getFinanceAgreementTypesByParentIdWorkTypeExclusions(parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AgreementTypeWorkTypeExclusion
   * @param {number} parentId
   * @param {AgreementTypeWorkTypeExclusion} workTypeExclusion workTypeExclusion
   * @returns {Promise<AgreementTypeWorkTypeExclusion>}
   */
  postFinanceAgreementTypesByParentIdWorkTypeExclusions(parentId, workTypeExclusion) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions`,
      method: 'post',
      data: workTypeExclusion,
    })
  }
  /**
   * Get AgreementTypeWorkTypeExclusion
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementTypeWorkTypeExclusion>}
   */
  getFinanceAgreementTypesByParentIdWorkTypeExclusionsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AgreementTypeWorkTypeExclusion
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementTypesByParentIdWorkTypeExclusionsById(id, parentId) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of AgreementTypeWorkTypeExclusion
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementTypesByParentIdWorkTypeExclusionsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/workTypeExclusions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AgreementTypeWorkType
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementTypeWorkType[]>}
   */
  getFinanceAgreementTypesByParentIdWorktypes(parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AgreementTypeWorkType
   * @param {number} parentId
   * @param {AgreementTypeWorkType} workType workType
   * @returns {Promise<AgreementTypeWorkType>}
   */
  postFinanceAgreementTypesByParentIdWorktypes(parentId, workType) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes`,
      method: 'post',
      data: workType,
    })
  }
  /**
   * Get AgreementTypeWorkType
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementTypeWorkType>}
   */
  getFinanceAgreementTypesByParentIdWorktypesById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AgreementTypeWorkType
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceAgreementTypesByParentIdWorktypesById(id, parentId) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put AgreementTypeWorkType
   * @param {number} id
   * @param {number} parentId
   * @param {AgreementTypeWorkType} workType workType
   * @returns {Promise<AgreementTypeWorkType>}
   */
  putFinanceAgreementTypesByParentIdWorktypesById(id, parentId, workType) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/{id}`,
      method: 'put',
      data: workType,
    })
  }

  /**
   * Patch AgreementTypeWorkType
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AgreementTypeWorkType>}
   */
  patchFinanceAgreementTypesByParentIdWorktypesById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of AgreementTypeWorkType
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceAgreementTypesByParentIdWorktypesCount(parentId, params = {}) {
    return this.request({
      path: `/finance/agreementTypes/${parentId}/worktypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AgreementBatchSetup
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementBatchSetup[]>}
   */
  getFinanceBatchSetups(params = {}) {
    return this.request({
      path: `/finance/batchSetups`,
      method: 'get',
      params,
    })
  }
  /**
   * Get AgreementBatchSetup
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AgreementBatchSetup>}
   */
  getFinanceBatchSetupsById(id, params = {}) {
    return this.request({
      path: `/finance/batchSetups/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put AgreementBatchSetup
   * @param {number} id
   * @param {AgreementBatchSetup} batchSetup batchSetup
   * @returns {Promise<AgreementBatchSetup>}
   */
  putFinanceBatchSetupsById(id, batchSetup) {
    return this.request({
      path: `/finance/batchSetups/${id}`,
      method: 'put',
      data: batchSetup,
    })
  }

  /**
   * Patch AgreementBatchSetup
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AgreementBatchSetup>}
   */
  patchFinanceBatchSetupsById(id, patchOperations) {
    return this.request({
      path: `/finance/batchSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of AgreementBatchSetup
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceBatchSetupsCount(params = {}) {
    return this.request({
      path: `/finance/batchSetups/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BillingCycle
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingCycle[]>}
   */
  getFinanceBillingCycles(params = {}) {
    return this.request({
      path: `/finance/billingCycles`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BillingCycle
   * @param {BillingCycle} billingCycle billingCycle
   * @returns {Promise<BillingCycle>}
   */
  postFinanceBillingCycles(billingCycle) {
    return this.request({
      path: `/finance/billingCycles`,
      method: 'post',
      data: billingCycle,
    })
  }
  /**
   * Get BillingCycle
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingCycle>}
   */
  getFinanceBillingCyclesById(id, params = {}) {
    return this.request({
      path: `/finance/billingCycles/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BillingCycle
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceBillingCyclesById(id) {
    return this.request({
      path: `/finance/billingCycles/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put BillingCycle
   * @param {number} id
   * @param {BillingCycle} billingCycle billingCycle
   * @returns {Promise<BillingCycle>}
   */
  putFinanceBillingCyclesById(id, billingCycle) {
    return this.request({
      path: `/finance/billingCycles/${id}`,
      method: 'put',
      data: billingCycle,
    })
  }

  /**
   * Patch BillingCycle
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BillingCycle>}
   */
  patchFinanceBillingCyclesById(id, patchOperations) {
    return this.request({
      path: `/finance/billingCycles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get BillingCycleInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingCycleInfo>}
   */
  getFinanceBillingCyclesByIdInfo(id, params = {}) {
    return this.request({
      path: `/finance/billingCycles/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage Count
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceBillingCyclesByIdUsages(id, params = {}) {
    return this.request({
      path: `/finance/billingCycles/${id}/usages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceBillingCyclesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/finance/billingCycles/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BillingCycle
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceBillingCyclesCount(params = {}) {
    return this.request({
      path: `/finance/billingCycles/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BillingCycleInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingCycleInfo[]>}
   */
  getFinanceBillingCyclesInfo(params = {}) {
    return this.request({
      path: `/finance/billingCycles/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BillingCycleInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceBillingCyclesInfoCount(params = {}) {
    return this.request({
      path: `/finance/billingCycles/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BillingSetup
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingSetup[]>}
   */
  getFinanceBillingSetups(params = {}) {
    return this.request({
      path: `/finance/billingSetups`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BillingSetup
   * @param {BillingSetup} billingSetup billingSetup
   * @returns {Promise<BillingSetup>}
   */
  postFinanceBillingSetups(billingSetup) {
    return this.request({
      path: `/finance/billingSetups`,
      method: 'post',
      data: billingSetup,
    })
  }
  /**
   * Get BillingSetup
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingSetup>}
   */
  getFinanceBillingSetupsById(id, params = {}) {
    return this.request({
      path: `/finance/billingSetups/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BillingSetup
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceBillingSetupsById(id) {
    return this.request({
      path: `/finance/billingSetups/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put BillingSetup
   * @param {number} id
   * @param {BillingSetup} billingSetup billingSetup
   * @returns {Promise<BillingSetup>}
   */
  putFinanceBillingSetupsById(id, billingSetup) {
    return this.request({
      path: `/finance/billingSetups/${id}`,
      method: 'put',
      data: billingSetup,
    })
  }

  /**
   * Patch BillingSetup
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BillingSetup>}
   */
  patchFinanceBillingSetupsById(id, patchOperations) {
    return this.request({
      path: `/finance/billingSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get BillingSetupInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingSetupInfo>}
   */
  getFinanceBillingSetupsByIdInfo(id, params = {}) {
    return this.request({
      path: `/finance/billingSetups/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BillingSetupRouting
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingSetupRouting[]>}
   */
  getFinanceBillingSetupsByParentIdRoutings(parentId, params = {}) {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BillingSetupRouting
   * @param {number} parentId
   * @param {BillingSetupRouting} billingSetupRouting billingSetupRouting
   * @returns {Promise<BillingSetupRouting>}
   */
  postFinanceBillingSetupsByParentIdRoutings(parentId, billingSetupRouting) {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings`,
      method: 'post',
      data: billingSetupRouting,
    })
  }
  /**
   * Get BillingSetupRouting
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingSetupRouting>}
   */
  getFinanceBillingSetupsByParentIdRoutingsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BillingSetupRouting
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceBillingSetupsByParentIdRoutingsById(id, parentId) {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put BillingSetupRouting
   * @param {number} id
   * @param {number} parentId
   * @param {BillingSetupRouting} billingSetupRouting billingSetupRouting
   * @returns {Promise<BillingSetupRouting>}
   */
  putFinanceBillingSetupsByParentIdRoutingsById(id, parentId, billingSetupRouting) {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/{id}`,
      method: 'put',
      data: billingSetupRouting,
    })
  }

  /**
   * Patch BillingSetupRouting
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BillingSetupRouting>}
   */
  patchFinanceBillingSetupsByParentIdRoutingsById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of BillingSetupRouting
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceBillingSetupsByParentIdRoutingsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/billingSetups/${parentId}/routings/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BillingSetup
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceBillingSetupsCount(params = {}) {
    return this.request({
      path: `/finance/billingSetups/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BillingSetupInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingSetupInfo[]>}
   */
  getFinanceBillingSetupsInfo(params = {}) {
    return this.request({
      path: `/finance/billingSetups/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BillingStatus
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingStatus[]>}
   */
  getFinanceBillingStatuses(params = {}) {
    return this.request({
      path: `/finance/billingStatuses`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BillingStatus
   * @param {BillingStatus} billingStatus billingStatus
   * @returns {Promise<BillingStatus>}
   */
  postFinanceBillingStatuses(billingStatus) {
    return this.request({
      path: `/finance/billingStatuses`,
      method: 'post',
      data: billingStatus,
    })
  }
  /**
   * Get BillingStatus
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingStatus>}
   */
  getFinanceBillingStatusesById(id, params = {}) {
    return this.request({
      path: `/finance/billingStatuses/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BillingStatus
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceBillingStatusesById(id) {
    return this.request({
      path: `/finance/billingStatuses/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put BillingStatus
   * @param {number} id
   * @param {BillingStatus} billingStatus billingStatus
   * @returns {Promise<BillingStatus>}
   */
  putFinanceBillingStatusesById(id, billingStatus) {
    return this.request({
      path: `/finance/billingStatuses/${id}`,
      method: 'put',
      data: billingStatus,
    })
  }

  /**
   * Patch BillingStatus
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BillingStatus>}
   */
  patchFinanceBillingStatusesById(id, patchOperations) {
    return this.request({
      path: `/finance/billingStatuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get BillingStatusInfo
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingStatusInfo>}
   */
  getFinanceBillingStatusesByIdInfo(id, params = {}) {
    return this.request({
      path: `/finance/billingStatuses/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage Count
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceBillingStatusesByIdUsages(id, params = {}) {
    return this.request({
      path: `/finance/billingStatuses/${id}/usages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceBillingStatusesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/finance/billingStatuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BillingStatus
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceBillingStatusesCount(params = {}) {
    return this.request({
      path: `/finance/billingStatuses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BillingStatusInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingStatusInfo[]>}
   */
  getFinanceBillingStatusesInfo(params = {}) {
    return this.request({
      path: `/finance/billingStatuses/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BillingStatusInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceBillingStatusesInfoCount(params = {}) {
    return this.request({
      path: `/finance/billingStatuses/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BillingTerm
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingTerm[]>}
   */
  getFinanceBillingTerms(params = {}) {
    return this.request({
      path: `/finance/billingTerms`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BillingTerm
   * @param {BillingTerm} billingTerms billingTerms
   * @returns {Promise<BillingTerm>}
   */
  postFinanceBillingTerms(billingTerms) {
    return this.request({
      path: `/finance/billingTerms`,
      method: 'post',
      data: billingTerms,
    })
  }
  /**
   * Get BillingTerm
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingTerm>}
   */
  getFinanceBillingTermsById(id, params = {}) {
    return this.request({
      path: `/finance/billingTerms/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BillingTerm
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceBillingTermsById(id) {
    return this.request({
      path: `/finance/billingTerms/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put BillingTerm
   * @param {number} id
   * @param {BillingTerm} billingTerms billingTerms
   * @returns {Promise<BillingTerm>}
   */
  putFinanceBillingTermsById(id, billingTerms) {
    return this.request({
      path: `/finance/billingTerms/${id}`,
      method: 'put',
      data: billingTerms,
    })
  }

  /**
   * Patch BillingTerm
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BillingTerm>}
   */
  patchFinanceBillingTermsById(id, patchOperations) {
    return this.request({
      path: `/finance/billingTerms/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get BillingTermInfo
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingTermInfo>}
   */
  getFinanceBillingTermsByIdInfo(id, params = {}) {
    return this.request({
      path: `/finance/billingTerms/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage Count
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceBillingTermsByIdUsages(id, params = {}) {
    return this.request({
      path: `/finance/billingTerms/${id}/usages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceBillingTermsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/finance/billingTerms/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BillingTerm
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceBillingTermsCount(params = {}) {
    return this.request({
      path: `/finance/billingTerms/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BillingTermInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BillingTermInfo[]>}
   */
  getFinanceBillingTermsInfo(params = {}) {
    return this.request({
      path: `/finance/billingTerms/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BillingTermInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceBillingTermsInfoCount(params = {}) {
    return this.request({
      path: `/finance/billingTerms/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Put ClosedInvoice
   * @param {number} id
   * @param {ClosedInvoice} closedInvoice closedInvoice
   * @returns {Promise<ClosedInvoice>}
   */
  putFinanceClosedInvoicesById(id, closedInvoice) {
    return this.request({
      path: `/finance/closedInvoices/${id}`,
      method: 'put',
      data: closedInvoice,
    })
  }

  /**
   * Patch ClosedInvoice
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ClosedInvoice>}
   */
  patchFinanceClosedInvoicesById(id, patchOperations) {
    return this.request({
      path: `/finance/closedInvoices/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of CompanyFinances
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CompanyFinance[]>}
   */
  getFinanceCompanyFinance(params = {}) {
    return this.request({
      path: `/finance/companyFinance/`,
      method: 'get',
      params,
    })
  }
  /**
   * Get CompanyFinances
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CompanyFinance>}
   */
  getFinanceCompanyFinanceById(id, params = {}) {
    return this.request({
      path: `/finance/companyFinance/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Patch CompanyFinances
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CompanyFinance>}
   */
  patchFinanceCompanyFinanceById(id, patchOperations) {
    return this.request({
      path: `/finance/companyFinance/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of CompanyFinances
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceCompanyFinanceCount(params = {}) {
    return this.request({
      path: `/finance/companyFinance/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Currency
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<FinanceCurrency[]>}
   */
  getFinanceCurrencies(params = {}) {
    return this.request({
      path: `/finance/currencies`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Currency
   * @param {FinanceCurrency} currency currency
   * @returns {Promise<FinanceCurrency>}
   */
  postFinanceCurrencies(currency) {
    return this.request({
      path: `/finance/currencies`,
      method: 'post',
      data: currency,
    })
  }
  /**
   * Get Currency
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<FinanceCurrency>}
   */
  getFinanceCurrenciesById(id, params = {}) {
    return this.request({
      path: `/finance/currencies/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put Currency
   * @param {number} id
   * @param {FinanceCurrency} currency currency
   * @returns {Promise<FinanceCurrency>}
   */
  putFinanceCurrenciesById(id, currency) {
    return this.request({
      path: `/finance/currencies/${id}`,
      method: 'put',
      data: currency,
    })
  }

  /**
   * Patch Currency
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<FinanceCurrency>}
   */
  patchFinanceCurrenciesById(id, patchOperations) {
    return this.request({
      path: `/finance/currencies/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  /**
   * Delete Currency
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceCurrenciesById(id) {
    return this.request({
      path: `/finance/currencies/${id}`,
      method: 'delete',
    })
  }
  /**
   * Get CurrencyInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CurrencyInfo>}
   */
  getFinanceCurrenciesByIdInfo(id, params = {}) {
    return this.request({
      path: `/finance/currencies/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage Count
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceCurrenciesByIdUsages(id, params = {}) {
    return this.request({
      path: `/finance/currencies/${id}/usages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceCurrenciesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/finance/currencies/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Currency
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceCurrenciesCount(params = {}) {
    return this.request({
      path: `/finance/currencies/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CurrencyInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CurrencyInfo[]>}
   */
  getFinanceCurrenciesInfo(params = {}) {
    return this.request({
      path: `/finance/currencies/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Currency
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceCurrenciesInfoCount(params = {}) {
    return this.request({
      path: `/finance/currencies/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of DeliveryMethod
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<DeliveryMethod[]>}
   */
  getFinanceDeliveryMethods(params = {}) {
    return this.request({
      path: `/finance/deliveryMethods`,
      method: 'get',
      params,
    })
  }

  /**
   * Post DeliveryMethod
   * @param {DeliveryMethod} deliveryMethod deliveryMethod
   * @returns {Promise<DeliveryMethod>}
   */
  postFinanceDeliveryMethods(deliveryMethod) {
    return this.request({
      path: `/finance/deliveryMethods`,
      method: 'post',
      data: deliveryMethod,
    })
  }
  /**
   * Get DeliveryMethod
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<DeliveryMethod>}
   */
  getFinanceDeliveryMethodsById(id, params = {}) {
    return this.request({
      path: `/finance/deliveryMethods/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete DeliveryMethod
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceDeliveryMethodsById(id) {
    return this.request({
      path: `/finance/deliveryMethods/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put DeliveryMethod
   * @param {number} id
   * @param {DeliveryMethod} deliveryMethod deliveryMethod
   * @returns {Promise<DeliveryMethod>}
   */
  putFinanceDeliveryMethodsById(id, deliveryMethod) {
    return this.request({
      path: `/finance/deliveryMethods/${id}`,
      method: 'put',
      data: deliveryMethod,
    })
  }

  /**
   * Patch DeliveryMethod
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<DeliveryMethod>}
   */
  patchFinanceDeliveryMethodsById(id, patchOperations) {
    return this.request({
      path: `/finance/deliveryMethods/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of DeliveryMethod
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceDeliveryMethodsCount(params = {}) {
    return this.request({
      path: `/finance/deliveryMethods/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of GLAccount
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<GLAccount[]>}
   */
  getFinanceGlAccounts(params = {}) {
    return this.request({
      path: `/finance/glAccounts`,
      method: 'get',
      params,
    })
  }

  /**
   * Post GLAccount
   * @param {GLAccount} glAccount glAccount
   * @returns {Promise<GLAccount>}
   */
  postFinanceGlAccounts(glAccount) {
    return this.request({
      path: `/finance/glAccounts`,
      method: 'post',
      data: glAccount,
    })
  }
  /**
   * Get GLAccount
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<GLAccount>}
   */
  getFinanceGlAccountsById(id, params = {}) {
    return this.request({
      path: `/finance/glAccounts/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put GLAccount
   * @param {number} id
   * @param {GLAccount} glAccount glAccount
   * @returns {Promise<GLAccount>}
   */
  putFinanceGlAccountsById(id, glAccount) {
    return this.request({
      path: `/finance/glAccounts/${id}`,
      method: 'put',
      data: glAccount,
    })
  }

  /**
   * Patch GLAccount
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<GLAccount>}
   */
  patchFinanceGlAccountsById(id, patchOperations) {
    return this.request({
      path: `/finance/glAccounts/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  /**
   * Delete GLAccount
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceGlAccountsById(id) {
    return this.request({
      path: `/finance/glAccounts/${id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of GLAccount
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceGlAccountsCount(params = {}) {
    return this.request({
      path: `/finance/glAccounts/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MappedType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<MappedType[]>}
   */
  getFinanceGlAccountsMappedTypes(params = {}) {
    return this.request({
      path: `/finance/glAccounts/mappedTypes`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of MappedType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceGlAccountsMappedTypesCount(params = {}) {
    return this.request({
      path: `/finance/glAccounts/mappedTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of GLCaption
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<GLCaption[]>}
   */
  getFinanceGlCaptions(params = {}) {
    return this.request({
      path: `/finance/glCaptions`,
      method: 'get',
      params,
    })
  }
  /**
   * Get GLCaption
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<GLCaption>}
   */
  getFinanceGlCaptionsById(id, params = {}) {
    return this.request({
      path: `/finance/glCaptions/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put GLCaption
   * @param {number} id
   * @param {GLCaption} glCaption glCaption
   * @returns {Promise<GLCaption>}
   */
  putFinanceGlCaptionsById(id, glCaption) {
    return this.request({
      path: `/finance/glCaptions/${id}`,
      method: 'put',
      data: glCaption,
    })
  }

  /**
   * Patch GLCaption
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<GLCaption>}
   */
  patchFinanceGlCaptionsById(id, patchOperations) {
    return this.request({
      path: `/finance/glCaptions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of GLCaption
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceGlCaptionsCount(params = {}) {
    return this.request({
      path: `/finance/glCaptions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of GLPath
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<GLPath[]>}
   */
  getFinanceGlpaths(params = {}) {
    return this.request({
      path: `/finance/glpaths`,
      method: 'get',
      params,
    })
  }

  /**
   * Post GLPath
   * @param {GLPath} gLPath gLPath
   * @returns {Promise<GLPath>}
   */
  postFinanceGlpaths(gLPath) {
    return this.request({
      path: `/finance/glpaths`,
      method: 'post',
      data: gLPath,
    })
  }
  /**
   * Get GLPath
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<GLPath>}
   */
  getFinanceGlpathsById(id, params = {}) {
    return this.request({
      path: `/finance/glpaths/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete GLPath
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceGlpathsById(id) {
    return this.request({
      path: `/finance/glpaths/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put GLPath
   * @param {number} id
   * @param {GLPath} gLPath gLPath
   * @returns {Promise<GLPath>}
   */
  putFinanceGlpathsById(id, gLPath) {
    return this.request({
      path: `/finance/glpaths/${id}`,
      method: 'put',
      data: gLPath,
    })
  }

  /**
   * Patch GLPath
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<GLPath>}
   */
  patchFinanceGlpathsById(id, patchOperations) {
    return this.request({
      path: `/finance/glpaths/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of GLPath
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceGlpathsCount(params = {}) {
    return this.request({
      path: `/finance/glpaths/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CurrencyCode
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CurrencyCode[]>}
   */
  getFinanceInfoCurrencyCodes(params = {}) {
    return this.request({
      path: `/finance/info/currencyCodes`,
      method: 'get',
      params,
    })
  }
  /**
   * Get CurrencyCode
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CurrencyCode>}
   */
  getFinanceInfoCurrencyCodesById(id, params = {}) {
    return this.request({
      path: `/finance/info/currencyCodes/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CurrencyCode
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceInfoCurrencyCodesCount(params = {}) {
    return this.request({
      path: `/finance/info/currencyCodes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get InvoiceInfo
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<InvoiceInfo>}
   */
  getFinanceInfoInvoiceById(id, params = {}) {
    return this.request({
      path: `/finance/info/invoice/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TaxIntegrationInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxIntegrationInfo[]>}
   */
  getFinanceInfoTaxIntegrations(params = {}) {
    return this.request({
      path: `/finance/info/taxIntegrations`,
      method: 'get',
      params,
    })
  }
  /**
   * Get TaxIntegrationInfo
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxIntegrationInfo>}
   */
  getFinanceInfoTaxIntegrationsById(id, params = {}) {
    return this.request({
      path: `/finance/info/taxIntegrations/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TaxIntegrationInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceInfoTaxIntegrationsCount(params = {}) {
    return this.request({
      path: `/finance/info/taxIntegrations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of InvoiceEmailTemplate
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<InvoiceEmailTemplate[]>}
   */
  getFinanceInvoiceEmailTemplates(params = {}) {
    return this.request({
      path: `/finance/invoiceEmailTemplates`,
      method: 'get',
      params,
    })
  }

  /**
   * Post InvoiceEmailTemplate
   * @param {InvoiceEmailTemplate} invoiceEmailTemplate invoiceEmailTemplate
   * @returns {Promise<InvoiceEmailTemplate>}
   */
  postFinanceInvoiceEmailTemplates(invoiceEmailTemplate) {
    return this.request({
      path: `/finance/invoiceEmailTemplates`,
      method: 'post',
      data: invoiceEmailTemplate,
    })
  }
  /**
   * Get InvoiceEmailTemplate
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<InvoiceEmailTemplate>}
   */
  getFinanceInvoiceEmailTemplatesById(id, params = {}) {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete InvoiceEmailTemplate
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceInvoiceEmailTemplatesById(id) {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put InvoiceEmailTemplate
   * @param {number} id
   * @param {InvoiceEmailTemplate} invoiceEmailTemplate invoiceEmailTemplate
   * @returns {Promise<InvoiceEmailTemplate>}
   */
  putFinanceInvoiceEmailTemplatesById(id, invoiceEmailTemplate) {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}`,
      method: 'put',
      data: invoiceEmailTemplate,
    })
  }

  /**
   * Patch InvoiceEmailTemplate
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<InvoiceEmailTemplate>}
   */
  patchFinanceInvoiceEmailTemplatesById(id, patchOperations) {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get InvoiceEmailTemplateInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<InvoiceEmailTemplateInfo>}
   */
  getFinanceInvoiceEmailTemplatesByIdInfo(id, params = {}) {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage Count
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceInvoiceEmailTemplatesByIdUsages(id, params = {}) {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}/usages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceInvoiceEmailTemplatesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/finance/invoiceEmailTemplates/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of InvoiceEmailTemplate
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceInvoiceEmailTemplatesCount(params = {}) {
    return this.request({
      path: `/finance/invoiceEmailTemplates/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of InvoiceEmailTemplateInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<InvoiceEmailTemplateInfo[]>}
   */
  getFinanceInvoiceEmailTemplatesInfo(params = {}) {
    return this.request({
      path: `/finance/invoiceEmailTemplates/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of InvoiceEmailTemplateInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceInvoiceEmailTemplatesInfoCount(params = {}) {
    return this.request({
      path: `/finance/invoiceEmailTemplates/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Invoice
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Invoice[]>}
   */
  getFinanceInvoices(params = {}) {
    return this.request({
      path: `/finance/invoices`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Invoice
   * @param {Invoice} invoice invoice
   * @returns {Promise<Invoice>}
   */
  postFinanceInvoices(invoice) {
    return this.request({
      path: `/finance/invoices`,
      method: 'post',
      data: invoice,
    })
  }
  /**
   * Get Invoice
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Invoice>}
   */
  getFinanceInvoicesById(id, params = {}) {
    return this.request({
      path: `/finance/invoices/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Invoice
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceInvoicesById(id) {
    return this.request({
      path: `/finance/invoices/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Invoice
   * @param {number} id
   * @param {Invoice} invoice invoice
   * @returns {Promise<Invoice>}
   */
  putFinanceInvoicesById(id, invoice) {
    return this.request({
      path: `/finance/invoices/${id}`,
      method: 'put',
      data: invoice,
    })
  }

  /**
   * Patch Invoice
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Invoice>}
   */
  patchFinanceInvoicesById(id, patchOperations) {
    return this.request({
      path: `/finance/invoices/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Invoice
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<application/pdf>}
   */
  getFinanceInvoicesByIdPdf(id, params = {}) {
    return this.request({
      path: `/finance/invoices/${id}/pdf`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Payment
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Payment[]>}
   */
  getFinanceInvoicesByParentIdPayments(parentId, params = {}) {
    return this.request({
      path: `/finance/invoices/${parentId}/payments`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Payment
   * @param {number} parentId
   * @param {Payment} payment payment
   * @returns {Promise<Payment>}
   */
  postFinanceInvoicesByParentIdPayments(parentId, payment) {
    return this.request({
      path: `/finance/invoices/${parentId}/payments`,
      method: 'post',
      data: payment,
    })
  }
  /**
   * Get Payment
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Payment>}
   */
  getFinanceInvoicesByParentIdPaymentsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/invoices/${parentId}/payments/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Patch Payment
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Payment>}
   */
  patchFinanceInvoicesByParentIdPaymentsById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/invoices/${parentId}/payments/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  /**
   * Put Payment
   * @param {number} id
   * @param {number} parentId
   * @param {Payment} payment payment
   * @returns {Promise<Payment>}
   */
  putFinanceInvoicesByParentIdPaymentsById(id, parentId, payment) {
    return this.request({
      path: `/finance/invoices/${parentId}/payments/{id}`,
      method: 'put',
      data: payment,
    })
  }

  /**
   * Delete Payment
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceInvoicesByParentIdPaymentsById(id, parentId) {
    return this.request({
      path: `/finance/invoices/${parentId}/payments/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of Invoice
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceInvoicesCount(params = {}) {
    return this.request({
      path: `/finance/invoices/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of InvoiceTemplate
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<InvoiceTemplate[]>}
   */
  getFinanceInvoiceTemplates(params = {}) {
    return this.request({
      path: `/finance/invoiceTemplates`,
      method: 'get',
      params,
    })
  }

  /**
   * Post InvoiceTemplate
   * @param {InvoiceTemplate} invoiceTemplate invoiceTemplate
   * @returns {Promise<InvoiceTemplate>}
   */
  postFinanceInvoiceTemplates(invoiceTemplate) {
    return this.request({
      path: `/finance/invoiceTemplates`,
      method: 'post',
      data: invoiceTemplate,
    })
  }
  /**
   * Get InvoiceTemplate
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<InvoiceTemplate>}
   */
  getFinanceInvoiceTemplatesById(id, params = {}) {
    return this.request({
      path: `/finance/invoiceTemplates/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Patch InvoiceTemplate
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<InvoiceTemplate>}
   */
  patchFinanceInvoiceTemplatesById(id, patchOperations) {
    return this.request({
      path: `/finance/invoiceTemplates/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  /**
   * Put InvoiceTemplate
   * @param {number} id
   * @param {InvoiceTemplate} invoiceTemplate invoiceTemplate
   * @returns {Promise<InvoiceTemplate>}
   */
  putFinanceInvoiceTemplatesById(id, invoiceTemplate) {
    return this.request({
      path: `/finance/invoiceTemplates/${id}`,
      method: 'put',
      data: invoiceTemplate,
    })
  }

  /**
   * Delete Usage
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceInvoiceTemplatesById(id) {
    return this.request({
      path: `/finance/invoiceTemplates/${id}`,
      method: 'delete',
    })
  }
  /**
   * Get List of Usage Count
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceInvoiceTemplatesByIdUsages(id, params = {}) {
    return this.request({
      path: `/finance/invoiceTemplates/${id}/usages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceInvoiceTemplatesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/finance/invoiceTemplates/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of InvoiceTemplate
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceInvoiceTemplatesCount(params = {}) {
    return this.request({
      path: `/finance/invoiceTemplates/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of InvoiceTemplateSetup
            Retrieves a list of standard and custom invoice templates
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<InvoiceTemplateSetup[]>}
   */
  getFinanceInvoiceTemplateSetups(params = {}) {
    return this.request({
      path: `/finance/invoiceTemplateSetups`,
      method: 'get',
      params,
    })
  }
  /**
   * Get InvoiceTemplateSetup
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<InvoiceTemplateSetup>}
   */
  getFinanceInvoiceTemplateSetupsById(id, params = {}) {
    return this.request({
      path: `/finance/invoiceTemplateSetups/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of InvoiceTemplateSetup
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceInvoiceTemplateSetupsCount(params = {}) {
    return this.request({
      path: `/finance/invoiceTemplateSetups/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TaxCode
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxCode[]>}
   */
  getFinanceTaxCodes(params = {}) {
    return this.request({
      path: `/finance/taxCodes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TaxCode
   * @param {TaxCode} taxCode taxCode
   * @returns {Promise<TaxCode>}
   */
  postFinanceTaxCodes(taxCode) {
    return this.request({
      path: `/finance/taxCodes`,
      method: 'post',
      data: taxCode,
    })
  }
  /**
   * Get List of TaxableExpenseTypeLevel
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxableExpenseTypeLevel[]>}
   */
  getFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevels(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/{parentId}/taxableExpenseTypeLevels`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TaxableExpenseTypeLevel
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {TaxableExpenseTypeLevel} taxableExpenseTypeLevel taxableExpenseTypeLevel
   * @returns {Promise<TaxableExpenseTypeLevel>}
   */
  postFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevels(
    parentId,
    grandparentId,
    taxableExpenseTypeLevel,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/{parentId}/taxableExpenseTypeLevels`,
      method: 'post',
      data: taxableExpenseTypeLevel,
    })
  }
  /**
   * Get TaxableExpenseTypeLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxableExpenseTypeLevel>}
   */
  getFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsById(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/{parentId}/taxableExpenseTypeLevels/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TaxableExpenseTypeLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsById(
    id,
    parentId,
    grandparentId,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/{parentId}/taxableExpenseTypeLevels/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put TaxableExpenseTypeLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {TaxableExpenseTypeLevel} taxableExpenseTypeLevel taxableExpenseTypeLevel
   * @returns {Promise<TaxableExpenseTypeLevel>}
   */
  putFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsById(
    id,
    parentId,
    grandparentId,
    taxableExpenseTypeLevel,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/{parentId}/taxableExpenseTypeLevels/{id}`,
      method: 'put',
      data: taxableExpenseTypeLevel,
    })
  }

  /**
   * Patch TaxableExpenseTypeLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TaxableExpenseTypeLevel>}
   */
  patchFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsById(
    id,
    parentId,
    grandparentId,
    patchOperations,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/{parentId}/taxableExpenseTypeLevels/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of TaxableExpenseTypeLevel
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceTaxCodesByGrandparentIdExpenseTypeExemptionsByParentIdTaxableExpenseTypeLevelsCount(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/expenseTypeExemptions/{parentId}/taxableExpenseTypeLevels/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TaxableProductTypeLevel
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxableProductTypeLevel[]>}
   */
  getFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevels(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/{parentId}/taxableProductTypeLevels`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TaxableProductTypeLevel
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {TaxableProductTypeLevel} taxableProductTypeLevel taxableProductTypeLevel
   * @returns {Promise<TaxableProductTypeLevel>}
   */
  postFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevels(
    parentId,
    grandparentId,
    taxableProductTypeLevel,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/{parentId}/taxableProductTypeLevels`,
      method: 'post',
      data: taxableProductTypeLevel,
    })
  }
  /**
   * Get TaxableProductTypeLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxableProductTypeLevel>}
   */
  getFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsById(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/{parentId}/taxableProductTypeLevels/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TaxableProductTypeLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsById(
    id,
    parentId,
    grandparentId,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/{parentId}/taxableProductTypeLevels/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put TaxableProductTypeLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {TaxableProductTypeLevel} taxableProductTypeLevel taxableProductTypeLevel
   * @returns {Promise<TaxableProductTypeLevel>}
   */
  putFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsById(
    id,
    parentId,
    grandparentId,
    taxableProductTypeLevel,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/{parentId}/taxableProductTypeLevels/{id}`,
      method: 'put',
      data: taxableProductTypeLevel,
    })
  }

  /**
   * Patch TaxableProductTypeLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TaxableProductTypeLevel>}
   */
  patchFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsById(
    id,
    parentId,
    grandparentId,
    patchOperations,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/{parentId}/taxableProductTypeLevels/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of TaxableProductTypeLevel
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceTaxCodesByGrandparentIdProductTypeExemptionsByParentIdTaxableProductTypeLevelsCount(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/productTypeExemptions/{parentId}/taxableProductTypeLevels/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TaxableXRefLevel
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxableXRefLevel[]>}
   */
  getFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevels(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/{parentId}/taxableXRefLevels`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TaxableXRefLevel
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {TaxableXRefLevel} taxableXRefLevel taxableXRefLevel
   * @returns {Promise<TaxableXRefLevel>}
   */
  postFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevels(
    parentId,
    grandparentId,
    taxableXRefLevel,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/{parentId}/taxableXRefLevels`,
      method: 'post',
      data: taxableXRefLevel,
    })
  }
  /**
   * Get TaxableXRefLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxableXRefLevel>}
   */
  getFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsById(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/{parentId}/taxableXRefLevels/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TaxableXRefLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsById(
    id,
    parentId,
    grandparentId,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/{parentId}/taxableXRefLevels/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put TaxableXRefLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {TaxableXRefLevel} taxableXRefLevel taxableXRefLevel
   * @returns {Promise<TaxableXRefLevel>}
   */
  putFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsById(
    id,
    parentId,
    grandparentId,
    taxableXRefLevel,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/{parentId}/taxableXRefLevels/{id}`,
      method: 'put',
      data: taxableXRefLevel,
    })
  }

  /**
   * Patch TaxableXRefLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TaxableXRefLevel>}
   */
  patchFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsById(
    id,
    parentId,
    grandparentId,
    patchOperations,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/{parentId}/taxableXRefLevels/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of TaxableXRefLevel
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceTaxCodesByGrandparentIdTaxCodeXRefsByParentIdTaxableXRefLevelsCount(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/taxCodeXRefs/{parentId}/taxableXRefLevels/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TaxableWorkRoleLevel
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxableWorkRoleLevel[]>}
   */
  getFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevels(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/{parentId}/taxableWorkRoleLevels`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TaxableWorkRoleLevel
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {TaxableWorkRoleLevel} taxableWorkRoleLevel taxableWorkRoleLevel
   * @returns {Promise<TaxableWorkRoleLevel>}
   */
  postFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevels(
    parentId,
    grandparentId,
    taxableWorkRoleLevel,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/{parentId}/taxableWorkRoleLevels`,
      method: 'post',
      data: taxableWorkRoleLevel,
    })
  }
  /**
   * Get TaxableWorkRoleLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxableWorkRoleLevel>}
   */
  getFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsById(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/{parentId}/taxableWorkRoleLevels/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TaxableWorkRoleLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsById(
    id,
    parentId,
    grandparentId,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/{parentId}/taxableWorkRoleLevels/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put TaxableWorkRoleLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {TaxableWorkRoleLevel} taxableWorkRoleLevel taxableWorkRoleLevel
   * @returns {Promise<TaxableWorkRoleLevel>}
   */
  putFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsById(
    id,
    parentId,
    grandparentId,
    taxableWorkRoleLevel,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/{parentId}/taxableWorkRoleLevels/{id}`,
      method: 'put',
      data: taxableWorkRoleLevel,
    })
  }

  /**
   * Patch TaxableWorkRoleLevel
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TaxableWorkRoleLevel>}
   */
  patchFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsById(
    id,
    parentId,
    grandparentId,
    patchOperations,
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/{parentId}/taxableWorkRoleLevels/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of TaxableWorkRoleLevel
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceTaxCodesByGrandparentIdWorkRoleExemptionsByParentIdTaxableWorkRoleLevelsCount(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/finance/taxCodes/${grandparentId}/workRoleExemptions/{parentId}/taxableWorkRoleLevels/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get TaxCode
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxCode>}
   */
  getFinanceTaxCodesById(id, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Usage
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteFinanceTaxCodesById(id) {
    return this.request({
      path: `/finance/taxCodes/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put TaxCode
   * @param {number} id
   * @param {TaxCode} taxCode taxCode
   * @returns {Promise<TaxCode>}
   */
  putFinanceTaxCodesById(id, taxCode) {
    return this.request({
      path: `/finance/taxCodes/${id}`,
      method: 'put',
      data: taxCode,
    })
  }

  /**
   * Patch TaxCode
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TaxCode>}
   */
  patchFinanceTaxCodesById(id, patchOperations) {
    return this.request({
      path: `/finance/taxCodes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post TaxCode
   * @param {number} id
   * @returns {Promise<TaxCode>}
   */
  postFinanceTaxCodesByIdCopy(id) {
    return this.request({
      path: `/finance/taxCodes/${id}/copy`,
      method: 'post',
    })
  }
  /**
   * Get TaxCodeInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxCodeInfo>}
   */
  getFinanceTaxCodesByIdInfo(id, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage Count
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceTaxCodesByIdUsages(id, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${id}/usages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Usage[]>}
   */
  getFinanceTaxCodesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ExpenseTypeExemption
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseTypeExemption[]>}
   */
  getFinanceTaxCodesByParentIdExpenseTypeExemptions(parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ExpenseTypeExemption
   * @param {number} parentId
   * @param {ExpenseTypeExemption} expenseTypeExemption expenseTypeExemption
   * @returns {Promise<ExpenseTypeExemption>}
   */
  postFinanceTaxCodesByParentIdExpenseTypeExemptions(parentId, expenseTypeExemption) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions`,
      method: 'post',
      data: expenseTypeExemption,
    })
  }
  /**
   * Get ExpenseTypeExemption
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ExpenseTypeExemption>}
   */
  getFinanceTaxCodesByParentIdExpenseTypeExemptionsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ExpenseTypeExemption
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceTaxCodesByParentIdExpenseTypeExemptionsById(id, parentId) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ExpenseTypeExemption
   * @param {number} id
   * @param {number} parentId
   * @param {ExpenseTypeExemption} expenseTypeExemption expenseTypeExemption
   * @returns {Promise<ExpenseTypeExemption>}
   */
  putFinanceTaxCodesByParentIdExpenseTypeExemptionsById(id, parentId, expenseTypeExemption) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/{id}`,
      method: 'put',
      data: expenseTypeExemption,
    })
  }

  /**
   * Patch ExpenseTypeExemption
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ExpenseTypeExemption>}
   */
  patchFinanceTaxCodesByParentIdExpenseTypeExemptionsById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ExpenseTypeExemption
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceTaxCodesByParentIdExpenseTypeExemptionsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/expenseTypeExemptions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProductTypeExemption
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProductTypeExemption[]>}
   */
  getFinanceTaxCodesByParentIdProductTypeExemptions(parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ProductTypeExemption
   * @param {number} parentId
   * @param {ProductTypeExemption} productTypeExemption productTypeExemption
   * @returns {Promise<ProductTypeExemption>}
   */
  postFinanceTaxCodesByParentIdProductTypeExemptions(parentId, productTypeExemption) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions`,
      method: 'post',
      data: productTypeExemption,
    })
  }
  /**
   * Get ProductTypeExemption
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProductTypeExemption>}
   */
  getFinanceTaxCodesByParentIdProductTypeExemptionsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProductTypeExemption
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceTaxCodesByParentIdProductTypeExemptionsById(id, parentId) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ProductTypeExemption
   * @param {number} id
   * @param {number} parentId
   * @param {ProductTypeExemption} productTypeExemption productTypeExemption
   * @returns {Promise<ProductTypeExemption>}
   */
  putFinanceTaxCodesByParentIdProductTypeExemptionsById(id, parentId, productTypeExemption) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/{id}`,
      method: 'put',
      data: productTypeExemption,
    })
  }

  /**
   * Patch ProductTypeExemption
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProductTypeExemption>}
   */
  patchFinanceTaxCodesByParentIdProductTypeExemptionsById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ProductTypeExemption
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceTaxCodesByParentIdProductTypeExemptionsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/productTypeExemptions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TaxCodeLevel
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxCodeLevel[]>}
   */
  getFinanceTaxCodesByParentIdTaxCodeLevels(parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TaxCodeLevel
   * @param {number} parentId
   * @param {TaxCodeLevel} taxCodeLevel taxCodeLevel
   * @returns {Promise<TaxCodeLevel>}
   */
  postFinanceTaxCodesByParentIdTaxCodeLevels(parentId, taxCodeLevel) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels`,
      method: 'post',
      data: taxCodeLevel,
    })
  }
  /**
   * Get TaxCodeLevel
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxCodeLevel>}
   */
  getFinanceTaxCodesByParentIdTaxCodeLevelsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TaxCodeLevel
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceTaxCodesByParentIdTaxCodeLevelsById(id, parentId) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put TaxCodeLevel
   * @param {number} id
   * @param {number} parentId
   * @param {TaxCodeLevel} taxCodeLevel taxCodeLevel
   * @returns {Promise<TaxCodeLevel>}
   */
  putFinanceTaxCodesByParentIdTaxCodeLevelsById(id, parentId, taxCodeLevel) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/{id}`,
      method: 'put',
      data: taxCodeLevel,
    })
  }

  /**
   * Patch TaxCodeLevel
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TaxCodeLevel>}
   */
  patchFinanceTaxCodesByParentIdTaxCodeLevelsById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of TaxCodeLevel
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceTaxCodesByParentIdTaxCodeLevelsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeLevels/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TaxCodeXRef
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxCodeXRef[]>}
   */
  getFinanceTaxCodesByParentIdTaxCodeXRefs(parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TaxCodeXRef
   * @param {number} parentId
   * @param {TaxCodeXRef} taxCodeXRef taxCodeXRef
   * @returns {Promise<TaxCodeXRef>}
   */
  postFinanceTaxCodesByParentIdTaxCodeXRefs(parentId, taxCodeXRef) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs`,
      method: 'post',
      data: taxCodeXRef,
    })
  }
  /**
   * Get TaxCodeXRef
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxCodeXRef>}
   */
  getFinanceTaxCodesByParentIdTaxCodeXRefsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TaxCodeXRef
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceTaxCodesByParentIdTaxCodeXRefsById(id, parentId) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put TaxCodeXRef
   * @param {number} id
   * @param {number} parentId
   * @param {TaxCodeXRef} taxCodeXRef taxCodeXRef
   * @returns {Promise<TaxCodeXRef>}
   */
  putFinanceTaxCodesByParentIdTaxCodeXRefsById(id, parentId, taxCodeXRef) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/{id}`,
      method: 'put',
      data: taxCodeXRef,
    })
  }

  /**
   * Patch TaxCodeXRef
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TaxCodeXRef>}
   */
  patchFinanceTaxCodesByParentIdTaxCodeXRefsById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of TaxCodeXRef
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceTaxCodesByParentIdTaxCodeXRefsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/taxCodeXRefs/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WorkRoleExemption
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<WorkRoleExemption[]>}
   */
  getFinanceTaxCodesByParentIdWorkRoleExemptions(parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post WorkRoleExemption
   * @param {number} parentId
   * @param {WorkRoleExemption} workRoleExemption workRoleExemption
   * @returns {Promise<WorkRoleExemption>}
   */
  postFinanceTaxCodesByParentIdWorkRoleExemptions(parentId, workRoleExemption) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions`,
      method: 'post',
      data: workRoleExemption,
    })
  }
  /**
   * Get WorkRoleExemption
   * @param {number} id
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<WorkRoleExemption>}
   */
  getFinanceTaxCodesByParentIdWorkRoleExemptionsById(id, parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete WorkRoleExemption
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteFinanceTaxCodesByParentIdWorkRoleExemptionsById(id, parentId) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put WorkRoleExemption
   * @param {number} id
   * @param {number} parentId
   * @param {WorkRoleExemption} workRoleExemption workRoleExemption
   * @returns {Promise<WorkRoleExemption>}
   */
  putFinanceTaxCodesByParentIdWorkRoleExemptionsById(id, parentId, workRoleExemption) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/{id}`,
      method: 'put',
      data: workRoleExemption,
    })
  }

  /**
   * Patch WorkRoleExemption
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<WorkRoleExemption>}
   */
  patchFinanceTaxCodesByParentIdWorkRoleExemptionsById(id, parentId, patchOperations) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of WorkRoleExemption
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceTaxCodesByParentIdWorkRoleExemptionsCount(parentId, params = {}) {
    return this.request({
      path: `/finance/taxCodes/${parentId}/workRoleExemptions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TaxCode
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceTaxCodesCount(params = {}) {
    return this.request({
      path: `/finance/taxCodes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TaxCodeInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxCodeInfo[]>}
   */
  getFinanceTaxCodesInfo(params = {}) {
    return this.request({
      path: `/finance/taxCodes/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TaxCodeInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceTaxCodesInfoCount(params = {}) {
    return this.request({
      path: `/finance/taxCodes/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TaxIntegration
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxIntegration[]>}
   */
  getFinanceTaxIntegrations(params = {}) {
    return this.request({
      path: `/finance/taxIntegrations`,
      method: 'get',
      params,
    })
  }
  /**
   * Get TaxIntegration
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TaxIntegration>}
   */
  getFinanceTaxIntegrationsById(id, params = {}) {
    return this.request({
      path: `/finance/taxIntegrations/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put TaxIntegration
   * @param {number} id
   * @param {TaxIntegration} taxIntegration taxIntegration
   * @returns {Promise<TaxIntegration>}
   */
  putFinanceTaxIntegrationsById(id, taxIntegration) {
    return this.request({
      path: `/finance/taxIntegrations/${id}`,
      method: 'put',
      data: taxIntegration,
    })
  }

  /**
   * Patch TaxIntegration
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TaxIntegration>}
   */
  patchFinanceTaxIntegrationsById(id, patchOperations) {
    return this.request({
      path: `/finance/taxIntegrations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of TaxIntegration
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getFinanceTaxIntegrationsCount(params = {}) {
    return this.request({
      path: `/finance/taxIntegrations/count`,
      method: 'get',
      params,
    })
  }
}
