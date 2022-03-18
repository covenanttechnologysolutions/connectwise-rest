import Manage from './Manage.js'

/**
 * Activity
 * @typedef {object} Activity
 * @property {number} [id]  int32
 * @property {string} name  Max length: 100;
 * @property {ActivityTypeReference} [type]
 * @property {CompanyReference} [company]
 * @property {ContactReference} [contact]
 * @property {string} [phoneNumber]  Max length: 30;
 * @property {string} [email]  Max length: 250;
 * @property {ActivityStatusReference} [status]
 * @property {OpportunityReference} [opportunity]
 * @property {TicketReference} [ticket]
 * @property {AgreementReference} [agreement]
 * @property {CampaignReference} [campaign]
 * @property {string} [notes]
 * @property {string} [dateStart]  date-time
 * @property {string} [dateEnd]  date-time
 * @property {MemberReference} [assignedBy]
 * @property {MemberReference} [assignTo]
 * @property {ScheduleStatusReference} [scheduleStatus]
 * @property {ReminderReference} [reminder]
 * @property {ServiceLocationReference} [where]
 * @property {boolean} [notifyFlag]   nullable
 * @property {string} [mobileGuid]  uuid nullable
 * @property {CurrencyReference} [currency]
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * Count
 * @typedef {object} Count
 * @property {number} [count]  int32
 */

/**
 * ActivityStatus
 * @typedef {object} ActivityStatus
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [spawnFollowupFlag]   nullable
 * @property {boolean} [closedFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ActivityStatusInfo
 * @typedef {object} ActivityStatusInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [closedFlag]   nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ActivityType
 * @typedef {object} ActivityType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {number} [points]  int32 nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [emailFlag]   nullable
 * @property {boolean} [memoFlag]   nullable
 * @property {boolean} [historyFlag]   nullable
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
 * Commission
 * @typedef {object} Commission
 * @property {number} [id]  int32
 * @property {MemberReference} [member]
 * @property {number} [commissionPercent]  double nullable
 * @property {string} [dateStart]  date-time
 * @property {string} [dateEnd]  date-time
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {CompanyReference} [company]
 * @property {SiteReference} [site]
 * @property {AgreementReference} [agreement]
 * @property {ProjectReference} [project]
 * @property {BoardReference} [serviceBoard]
 * @property {TicketReference} [ticket]
 * @property {SystemLocationReference} [territory]
 * @property {string} [billingMethod]   nullable
 * @property {ServiceTypeReference} [serviceType]
 * @property {ProjectBoardReference} [projectBoard]
 * @property {ProjectTypeReference} [projectType]
 * @property {AgreementTypeReference} [agreementType]
 * @property {number} [numberOfMonths]  int32 nullable
 * @property {ProductCategoryReference} [productCategory]
 * @property {ProductSubCategoryReference} [productSubCategory]
 * @property {IvItemReference} [item]
 * @property {string} [commissionBasis]   nullable
 * @property {string} [invoiceOption]   nullable
 * @property {boolean} [servicesFlag]   nullable
 * @property {boolean} [agreementsFlag]   nullable
 * @property {boolean} [productsFlag]   nullable
 * @property {boolean} [myOpportunitiesFlag]   nullable
 * @property {object} [_info]
 */

/**
 * Opportunity
 * @typedef {object} Opportunity
 * @property {number} [id]  int32
 * @property {string} name  Max length: 100;
 * @property {string} [expectedCloseDate]  Required On Updates; date-time
 * @property {OpportunityTypeReference} [type]
 * @property {OpportunityStageReference} [stage]
 * @property {OpportunityStatusReference} [status]
 * @property {OpportunityPriorityReference} [priority]
 * @property {string} [notes]
 * @property {OpportunityProbabilityReference} [probability]
 * @property {string} [source]  Max length: 50;
 * @property {OpportunityRatingReference} [rating]
 * @property {CampaignReference} [campaign]
 * @property {MemberReference} [primarySalesRep]
 * @property {MemberReference} [secondarySalesRep]
 * @property {number} [locationId]  Required On Updates; int32 nullable
 * @property {number} [businessUnitId]  Required On Updates; int32 nullable
 * @property {CompanyReference} [company]
 * @property {ContactReference} [contact]
 * @property {SiteReference} [site]
 * @property {string} [customerPO]  Max length: 25;
 * @property {string} [pipelineChangeDate]  date-time
 * @property {string} [dateBecameLead]  date-time
 * @property {string} [closedDate]  date-time
 * @property {MemberReference} [closedBy]
 * @property {number} [totalSalesTax]  double nullable
 * @property {CompanyReference} [shipToCompany]
 * @property {ContactReference} [shipToContact]
 * @property {SiteReference} [shipToSite]
 * @property {CompanyReference} [billToCompany]
 * @property {ContactReference} [billToContact]
 * @property {SiteReference} [billToSite]
 * @property {BillingTermsReference} [billingTerms]
 * @property {TaxCodeReference} [taxCode]
 * @property {CurrencyReference} [currency]
 * @property {number} [companyLocationId]  int32 nullable
 * @property {ContactReference} [technicalContact]
 * @property {object} [_info]
 * @property {array} [customFields]
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
 * Project
 * @typedef {object} Project
 * @property {number} [id]  int32
 * @property {object} [_info]
 * @property {string} [actualEnd]  date-time
 * @property {number} [actualHours]  double nullable
 * @property {string} [actualStart]  date-time
 * @property {AgreementReference} [agreement]
 * @property {string} [billExpenses]  Required On Updates;  nullable
 * @property {number} [billingAmount]  double nullable
 * @property {string} [billingAttention]  Max length: 50;
 * @property {string} billingMethod   nullable
 * @property {string} [billingRateType]  Required On Updates;  nullable
 * @property {BillingTermsReference} [billingTerms]
 * @property {string} [billProducts]  Required On Updates;  nullable
 * @property {boolean} [billProjectAfterClosedFlag]   nullable
 * @property {string} [billTime]  Required On Updates;  nullable
 * @property {CompanyReference} [billToCompany]
 * @property {ContactReference} [billToContact]
 * @property {SiteReference} [billToSite]
 * @property {boolean} [billUnapprovedTimeAndExpense]   nullable
 * @property {ProjectBoardReference} [board]
 * @property {string} [budgetAnalysis]  Required On Updates;  nullable
 * @property {boolean} [budgetFlag]   nullable
 * @property {number} [budgetHours]  double nullable
 * @property {CompanyReference} [company]
 * @property {ContactReference} [contact]
 * @property {string} [customerPO]  Max length: 50;
 * @property {string} [description]
 * @property {CurrencyReference} [currency]
 * @property {number} [downpayment]  double nullable
 * @property {string} estimatedEnd  date-time
 * @property {number} [percentComplete]  double nullable
 * @property {number} [estimatedExpenseRevenue]  double nullable
 * @property {number} [estimatedHours]  double nullable
 * @property {number} [estimatedProductRevenue]  double nullable
 * @property {string} estimatedStart  date-time
 * @property {number} [estimatedTimeRevenue]  double nullable
 * @property {MemberReference} [expenseApprover]
 * @property {boolean} [includeDependenciesFlag]   nullable
 * @property {boolean} [includeEstimatesFlag]   nullable
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {MemberReference} [manager]
 * @property {string} name  Max length: 100;
 * @property {OpportunityReference} [opportunity]
 * @property {number} [projectTemplateId]  int32 nullable
 * @property {boolean} [restrictDownPaymentFlag]   nullable
 * @property {string} [scheduledEnd]  date-time
 * @property {number} [scheduledHours]  double nullable
 * @property {string} [scheduledStart]  date-time
 * @property {CompanyReference} [shipToCompany]
 * @property {ContactReference} [shipToContact]
 * @property {SiteReference} [shipToSite]
 * @property {SiteReference} [site]
 * @property {ProjectStatusReference} [status]
 * @property {boolean} [closedFlag]
 * @property {MemberReference} [timeApprover]
 * @property {ProjectTypeReference} [type]
 * @property {boolean} [doNotDisplayInPortalFlag]   nullable
 * @property {string} [billingStartDate]  date-time
 * @property {number} [estimatedTimeCost]  double nullable
 * @property {number} [estimatedExpenseCost]  double nullable
 * @property {number} [estimatedProductCost]  double nullable
 * @property {TaxCodeReference} [taxCode]
 * @property {SystemLocationReference} [companyLocation]
 * @property {array} [customFields]
 */

/**
 * Order
 * @typedef {object} Order
 * @property {number} [id]  int32
 * @property {CompanyReference} [company]
 * @property {ContactReference} [contact]
 * @property {string} [phone]
 * @property {string} [phoneExt]
 * @property {string} [email]
 * @property {SiteReference} [site]
 * @property {OrderStatusReference} [status]
 * @property {OpportunityReference} [opportunity]
 * @property {string} [orderDate]  date-time
 * @property {string} [dueDate]  date-time
 * @property {BillingTermsReference} [billingTerms]
 * @property {TaxCodeReference} [taxCode]
 * @property {string} [poNumber]  Max length: 50;
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {MemberReference} [salesRep]
 * @property {string} [notes]
 * @property {boolean} [billClosedFlag]   nullable
 * @property {boolean} [billShippedFlag]   nullable
 * @property {boolean} [restrictDownpaymentFlag]   nullable
 * @property {string} [description]
 * @property {boolean} [topCommentFlag]   nullable
 * @property {boolean} [bottomCommentFlag]   nullable
 * @property {CompanyReference} [shipToCompany]
 * @property {ContactReference} [shipToContact]
 * @property {SiteReference} [shipToSite]
 * @property {CompanyReference} [billToCompany]
 * @property {ContactReference} [billToContact]
 * @property {SiteReference} [billToSite]
 * @property {array} [productIds]
 * @property {array} [documentIds]
 * @property {array} [invoiceIds]
 * @property {array} [configIds]
 * @property {number} [total]  double nullable
 * @property {number} [taxTotal]  double nullable
 * @property {CurrencyReference} [currency]
 * @property {SystemLocationReference} [companyLocation]
 * @property {number} [subTotal]  double
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * Ticket
 * @typedef {object} Ticket
 * @property {number} [id]  int32
 * @property {string} summary  Max length: 100;
 * @property {string} [recordType]   nullable
 * @property {BoardReference} [board]
 * @property {ServiceStatusReference} [status]
 * @property {WorkRoleReference} [workRole]
 * @property {WorkTypeReference} [workType]
 * @property {CompanyReference} [company]
 * @property {SiteReference} [site]
 * @property {string} [siteName]  Max length: 50;
 * @property {string} [addressLine1]  Max length: 50;
 * @property {string} [addressLine2]  Max length: 50;
 * @property {string} [city]  Max length: 50;
 * @property {string} [stateIdentifier]  Max length: 50;
 * @property {string} [zip]  Max length: 12;
 * @property {CountryReference} [country]
 * @property {ContactReference} [contact]
 * @property {string} [contactName]  Max length: 62;
 * @property {string} [contactPhoneNumber]  Max length: 20;
 * @property {string} [contactPhoneExtension]  Max length: 15;
 * @property {string} [contactEmailAddress]  Max length: 250;
 * @property {ServiceTypeReference} [type]
 * @property {ServiceSubTypeReference} [subType]
 * @property {ServiceItemReference} [item]
 * @property {ServiceTeamReference} [team]
 * @property {MemberReference} [owner]
 * @property {PriorityReference} [priority]
 * @property {ServiceLocationReference} [serviceLocation]
 * @property {ServiceSourceReference} [source]
 * @property {string} [requiredDate]  date-time
 * @property {number} [budgetHours]  double nullable
 * @property {OpportunityReference} [opportunity]
 * @property {AgreementReference} [agreement]
 * @property {string} [severity]  Required On Updates;  nullable
 * @property {string} [impact]  Required On Updates;  nullable
 * @property {string} [externalXRef]  Max length: 100;
 * @property {string} [poNumber]  Max length: 50;
 * @property {number} [knowledgeBaseCategoryId]  int32 nullable
 * @property {number} [knowledgeBaseSubCategoryId]  int32 nullable
 * @property {boolean} [allowAllClientsPortalView]   nullable
 * @property {boolean} [customerUpdatedFlag]   nullable
 * @property {boolean} [automaticEmailContactFlag]   nullable
 * @property {boolean} [automaticEmailResourceFlag]   nullable
 * @property {boolean} [automaticEmailCcFlag]   nullable
 * @property {string} [automaticEmailCc]  Max length: 1000;
 * @property {string} [initialDescription] Only available for POST, will not be returned in the response
 * @property {string} [initialInternalAnalysis] Only available for POST, will not be returned in the response
 * @property {string} [initialResolution] Only available for POST, will not be returned in the response
 * @property {string} [initialDescriptionFrom]
 * @property {string} [contactEmailLookup]
 * @property {boolean} [processNotifications] Can be set to false to skip notification processing when adding or updating a ticket (Defaults to True)  nullable
 * @property {boolean} [skipCallback]   nullable
 * @property {string} [closedDate]
 * @property {string} [closedBy]
 * @property {boolean} [closedFlag]   nullable
 * @property {number} [actualHours]  double nullable
 * @property {boolean} [approved]   nullable
 * @property {number} [estimatedExpenseCost]  double nullable
 * @property {number} [estimatedExpenseRevenue]  double nullable
 * @property {number} [estimatedProductCost]  double nullable
 * @property {number} [estimatedProductRevenue]  double nullable
 * @property {number} [estimatedTimeCost]  double nullable
 * @property {number} [estimatedTimeRevenue]  double nullable
 * @property {string} [billingMethod]   nullable
 * @property {number} [billingAmount]  double nullable
 * @property {number} [hourlyRate]  double nullable
 * @property {string} [subBillingMethod]   nullable
 * @property {number} [subBillingAmount]  double nullable
 * @property {string} [subDateAccepted]
 * @property {string} [dateResolved]
 * @property {string} [dateResplan]
 * @property {string} [dateResponded]
 * @property {number} [resolveMinutes]  int32 nullable
 * @property {number} [resPlanMinutes]  int32 nullable
 * @property {number} [respondMinutes]  int32 nullable
 * @property {boolean} [isInSla]   nullable
 * @property {number} [knowledgeBaseLinkId]  int32 nullable
 * @property {string} [resources]
 * @property {number} [parentTicketId]  int32 nullable
 * @property {boolean} [hasChildTicket]   nullable
 * @property {boolean} [hasMergedChildTicketFlag]   nullable
 * @property {string} [knowledgeBaseLinkType]   nullable
 * @property {string} [billTime]   nullable
 * @property {string} [billExpenses]   nullable
 * @property {string} [billProducts]   nullable
 * @property {string} [predecessorType]   nullable
 * @property {number} [predecessorId]  int32 nullable
 * @property {boolean} [predecessorClosedFlag]   nullable
 * @property {number} [lagDays]  int32 nullable
 * @property {boolean} [lagNonworkingDaysFlag]   nullable
 * @property {string} [estimatedStartDate]  date-time
 * @property {number} [duration]  int32 nullable
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {string} [mobileGuid]  uuid nullable
 * @property {SLAReference} [sla]
 * @property {string} [slaStatus]
 * @property {CurrencyReference} [currency]
 * @property {TicketReference} [mergedParentTicket]
 * @property {array} [integratorTags]
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * OpportunityContact
 * @typedef {object} OpportunityContact
 * @property {number} [id]  int32
 * @property {ContactReference} [contact]
 * @property {CompanyReference} [company]
 * @property {OpportunitySalesRoleReference} [role]
 * @property {string} [notes]
 * @property {boolean} [referralFlag]   nullable
 * @property {number} [opportunityId]  int32 nullable
 * @property {string} [phoneNumber]
 * @property {string} [emailAddress]
 * @property {object} [_info]
 */

/**
 * Forecast
 * @typedef {object} Forecast
 * @property {number} [id]  int32
 * @property {array} [forecastItems]
 * @property {ProductRevenueReference} [productRevenue]
 * @property {ServiceRevenueReference} [serviceRevenue]
 * @property {AgreementRevenueReference} [agreementRevenue]
 * @property {TimeRevenueReference} [timeRevenue]
 * @property {ExpenseRevenueReference} [expenseRevenue]
 * @property {ForecastRevenueReference} [forecastRevenueTotals]
 * @property {InclusiveRevenueReference} [inclusiveRevenueTotals]
 * @property {number} [recurringTotal]  double nullable
 * @property {WonRevenueReference} [wonRevenue]
 * @property {LostRevenueReference} [lostRevenue]
 * @property {OpenRevenueReference} [openRevenue]
 * @property {Other1RevenueReference} [otherRevenue1]
 * @property {Other2RevenueReference} [otherRevenue2]
 * @property {number} [salesTaxRevenue]  double nullable
 * @property {number} [forecastTotalWithTaxes]  double nullable
 * @property {number} [expectedProbability]  int32
 * @property {TaxCodeReference} [taxCode]
 * @property {BillingTermsReference} [billingTerms]
 * @property {CurrencyReference} [currency]
 * @property {object} [_info]
 */

/**
 * ForecastItem
 * @typedef {object} ForecastItem
 * @property {number} [id]  int32
 * @property {string} [forecastDescription]  Max length: 50;
 * @property {OpportunityReference} [opportunity]
 * @property {number} [quantity]  double
 * @property {OpportunityStatusReference} [status]
 * @property {IvItemReference} [catalogItem]
 * @property {string} [productDescription]
 * @property {string} [productClass]
 * @property {number} [revenue]  double
 * @property {number} [cost]  double nullable
 * @property {number} [margin]  double
 * @property {number} [percentage]  int32
 * @property {boolean} [includeFlag]
 * @property {string} [quoteWerksDocNo]  Max length: 20;
 * @property {string} [quoteWerksDocName]  Max length: 255;
 * @property {number} [quoteWerksQuantity]  int32
 * @property {string} forecastType   nullable
 * @property {boolean} [linkFlag]
 * @property {number} [recurringRevenue]  double
 * @property {number} [recurringCost]  double nullable
 * @property {string} [recurringDateStart]  date-time
 * @property {string} [recurringDateEnd]  date-time
 * @property {BillingCycleReference} [billCycle]
 * @property {string} [cycleBasis]
 * @property {number} [cycles]  int32
 * @property {boolean} [recurringFlag]
 * @property {number} [sequenceNumber]  double
 * @property {number} [subNumber]  int32
 * @property {boolean} [taxableFlag]
 * @property {object} [_info]
 */

/**
 * SuccessResponse
 * @typedef {object} SuccessResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * OpportunityNote
 * @typedef {object} OpportunityNote
 * @property {number} [id]  int32
 * @property {number} [opportunityId]  int32 nullable
 * @property {NoteTypeReference} [type]
 * @property {string} text
 * @property {boolean} [flagged]   nullable
 * @property {string} [enteredBy]
 * @property {string} [mobileGuid]  uuid nullable
 * @property {object} [_info]
 */

/**
 * Team
 * @typedef {object} Team
 * @property {number} [id]  int32
 * @property {string} type   nullable
 * @property {MemberReference} [member]
 * @property {SalesTeamReference} [salesTeam]
 * @property {number} [commissionPercent]  int32 nullable
 * @property {boolean} [referralFlag]   nullable
 * @property {number} [opportunityId]  int32 nullable
 * @property {boolean} [responsibleFlag]   nullable
 * @property {object} [_info]
 */

/**
 * OpportunityRating
 * @typedef {object} OpportunityRating
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {number} [sortOrder]  int32 nullable
 * @property {object} [_info]
 */

/**
 * OpportunityRatingInfo
 * @typedef {object} OpportunityRatingInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {number} [sortOrder]  int32 nullable
 * @property {object} [_info]
 */

/**
 * OpportunityStatus
 * @typedef {object} OpportunityStatus
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {boolean} [wonFlag]   nullable
 * @property {boolean} [lostFlag]   nullable
 * @property {boolean} [closedFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 * @property {string} [enteredBy]
 * @property {string} [dateEntered]  date-time
 */

/**
 * OpportunityStatusInfo
 * @typedef {object} OpportunityStatusInfo
 * @property {number} [id]  int32
 * @property {boolean} [closedFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * OpportunityType
 * @typedef {object} OpportunityType
 * @property {number} [id]  int32
 * @property {string} description  Max length: 50;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * OpportunityTypeInfo
 * @typedef {object} OpportunityTypeInfo
 * @property {number} [id]  int32
 * @property {string} [description]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * OrderStatus
 * @typedef {object} OrderStatus
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {number} [sortOrder]  int32 nullable
 * @property {boolean} [closedFlag]   nullable
 * @property {OrderStatusEmailTemplateReference} [emailTemplate]
 * @property {object} [_info]
 */

/**
 * OrderStatusInfo
 * @typedef {object} OrderStatusInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * OrderStatusEmailTemplate
 * @typedef {object} OrderStatusEmailTemplate
 * @property {number} [id]  int32
 * @property {OrderStatusReference} [status]
 * @property {boolean} [useSenderFlag]   nullable
 * @property {string} [firstName]  Max length: 100;
 * @property {string} [lastName]  Max length: 100;
 * @property {string} [emailAddress]  Max length: 100;
 * @property {string} subject  Max length: 200;
 * @property {string} body
 * @property {boolean} [copySenderFlag]   nullable
 * @property {object} [_info]
 */

/**
 * OrderStatusNotification
 * @typedef {object} OrderStatusNotification
 * @property {number} [id]  int32
 * @property {NotificationRecipientReference} [notifyWho]
 * @property {OrderStatusReference} [status]
 * @property {MemberReference} [member]
 * @property {string} [email] Order Status Notification sendEmail must be entered if the notify type is "Email Address" Max length: 50;
 * @property {number} [workflowStep]  int32 nullable
 * @property {object} [_info]
 */

/**
 * SalesProbability
 * @typedef {object} SalesProbability
 * @property {number} [id]  int32
 * @property {number} probability  int32
 * @property {object} [_info]
 */

/**
 * SalesProbabilityInfo
 * @typedef {object} SalesProbabilityInfo
 * @property {number} [id]  int32
 * @property {number} [probability]  int32
 * @property {object} [_info]
 */

/**
 * SalesQuota
 * @typedef {object} SalesQuota
 * @property {number} [id]  int32
 * @property {MemberReference} [member]
 * @property {number} [forecastYear]  int32 nullable
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {ProductCategoryReference} [category]
 * @property {ProductSubCategoryReference} [subCategory]
 * @property {number} [januaryRevenue]  double nullable
 * @property {number} [januaryMargin]  double nullable
 * @property {number} [februaryRevenue]  double nullable
 * @property {number} [februaryMargin]  double nullable
 * @property {number} [marchRevenue]  double nullable
 * @property {number} [marchMargin]  double nullable
 * @property {number} [aprilRevenue]  double nullable
 * @property {number} [aprilMargin]  double nullable
 * @property {number} [mayRevenue]  double nullable
 * @property {number} [mayMargin]  double nullable
 * @property {number} [juneRevenue]  double nullable
 * @property {number} [juneMargin]  double nullable
 * @property {number} [julyRevenue]  double nullable
 * @property {number} [julyMargin]  double nullable
 * @property {number} [augustRevenue]  double nullable
 * @property {number} [augustMargin]  double nullable
 * @property {number} [septemberRevenue]  double nullable
 * @property {number} [septemberMargin]  double nullable
 * @property {number} [octoberRevenue]  double nullable
 * @property {number} [octoberMargin]  double nullable
 * @property {number} [novemberRevenue]  double nullable
 * @property {number} [novemberMargin]  double nullable
 * @property {number} [decemberRevenue]  double nullable
 * @property {number} [decemberMargin]  double nullable
 * @property {CurrencyReference} [currency]
 * @property {object} [_info]
 */

/**
 * Role
 * @typedef {object} Role
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {object} [_info]
 */

/**
 * SalesTeam
 * @typedef {object} SalesTeam
 * @property {number} [id]  int32
 * @property {string} salesTeamIdentifier  Max length: 20;
 * @property {string} salesTeamDescription  Max length: 50;
 * @property {SystemLocationReference} [salesTeamLocation]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * SalesTeamMember
 * @typedef {object} SalesTeamMember
 * @property {number} [id]  int32
 * @property {MemberReference} [member]
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {boolean} [allowAccessFlag]   nullable
 * @property {object} [_info]
 */

/**
 * OpportunityStage
 * @typedef {object} OpportunityStage
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {OpportunityProbabilityReference} [probability]
 * @property {string} [color]  Max length: 25;
 * @property {number} [sequenceNumber]  int32 nullable
 * @property {object} [_info]
 */

/**
 * OpportunityStageInfo
 * @typedef {object} OpportunityStageInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {OpportunityProbabilityReference} [probability]
 * @property {string} [color]
 * @property {number} [sequenceNumber]  int32 nullable
 * @property {object} [_info]
 */

export default class Sales extends Manage {
  constructor(props) {
    super(props)
  }

  /**
   * Get List of Activity
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Activity[]>}
   */
  getSalesActivities(params = {}) {
    return this.request({
      path: `/sales/activities`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Activity
   * @param {Activity} activity activity
   * @returns {Promise<Activity>}
   */
  postSalesActivities(activity) {
    return this.request({
      path: `/sales/activities`,
      method: 'post',
      data: activity,
    })
  }
  /**
   * Get Activity
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
   * @returns {Promise<Activity>}
   */
  getSalesActivitiesById(id, params = {}) {
    return this.request({
      path: `/sales/activities/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Activity
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesActivitiesById(id) {
    return this.request({
      path: `/sales/activities/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Activity
   * @param {number} id
   * @param {Activity} activity activity
   * @returns {Promise<Activity>}
   */
  putSalesActivitiesById(id, activity) {
    return this.request({
      path: `/sales/activities/${id}`,
      method: 'put',
      data: activity,
    })
  }

  /**
   * Patch Activity
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Activity>}
   */
  patchSalesActivitiesById(id, patchOperations) {
    return this.request({
      path: `/sales/activities/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of Activity
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
  getSalesActivitiesCount(params = {}) {
    return this.request({
      path: `/sales/activities/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ActivityStatus
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ActivityStatus[]>}
   */
  getSalesActivitiesStatuses(params = {}) {
    return this.request({
      path: `/sales/activities/statuses`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ActivityStatus
   * @param {ActivityStatus} activityStatus activityStatus
   * @returns {Promise<ActivityStatus>}
   */
  postSalesActivitiesStatuses(activityStatus) {
    return this.request({
      path: `/sales/activities/statuses`,
      method: 'post',
      data: activityStatus,
    })
  }
  /**
   * Get ActivityStatus
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
   * @returns {Promise<ActivityStatus>}
   */
  getSalesActivitiesStatusesById(id, params = {}) {
    return this.request({
      path: `/sales/activities/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ActivityStatus
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesActivitiesStatusesById(id) {
    return this.request({
      path: `/sales/activities/statuses/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ActivityStatus
   * @param {number} id
   * @param {ActivityStatus} activityStatus activityStatus
   * @returns {Promise<ActivityStatus>}
   */
  putSalesActivitiesStatusesById(id, activityStatus) {
    return this.request({
      path: `/sales/activities/statuses/${id}`,
      method: 'put',
      data: activityStatus,
    })
  }

  /**
   * Patch ActivityStatus
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ActivityStatus>}
   */
  patchSalesActivitiesStatusesById(id, patchOperations) {
    return this.request({
      path: `/sales/activities/statuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ActivityStatusInfos
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
   * @returns {Promise<ActivityStatusInfo>}
   */
  getSalesActivitiesStatusesByIdInfo(id, params = {}) {
    return this.request({
      path: `/sales/activities/statuses/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ActivityStatus
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
  getSalesActivitiesStatusesCount(params = {}) {
    return this.request({
      path: `/sales/activities/statuses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ActivityStatusInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ActivityStatusInfo[]>}
   */
  getSalesActivitiesStatusesInfo(params = {}) {
    return this.request({
      path: `/sales/activities/statuses/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ActivityStatus
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
  getSalesActivitiesStatusesInfoCount(params = {}) {
    return this.request({
      path: `/sales/activities/statuses/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ActivityType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ActivityType[]>}
   */
  getSalesActivitiesTypes(params = {}) {
    return this.request({
      path: `/sales/activities/types`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ActivityType
   * @param {ActivityType} activityType activityType
   * @returns {Promise<ActivityType>}
   */
  postSalesActivitiesTypes(activityType) {
    return this.request({
      path: `/sales/activities/types`,
      method: 'post',
      data: activityType,
    })
  }
  /**
   * Get ActivityType
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
   * @returns {Promise<ActivityType>}
   */
  getSalesActivitiesTypesById(id, params = {}) {
    return this.request({
      path: `/sales/activities/types/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ActivityType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesActivitiesTypesById(id) {
    return this.request({
      path: `/sales/activities/types/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ActivityType
   * @param {number} id
   * @param {ActivityType} activityType activityType
   * @returns {Promise<ActivityType>}
   */
  putSalesActivitiesTypesById(id, activityType) {
    return this.request({
      path: `/sales/activities/types/${id}`,
      method: 'put',
      data: activityType,
    })
  }

  /**
   * Patch ActivityType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ActivityType>}
   */
  patchSalesActivitiesTypesById(id, patchOperations) {
    return this.request({
      path: `/sales/activities/types/${id}`,
      method: 'patch',
      data: patchOperations,
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
  getSalesActivitiesTypesByIdUsages(id, params = {}) {
    return this.request({
      path: `/sales/activities/types/${id}/usages`,
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
  getSalesActivitiesTypesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/sales/activities/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ActivityType
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
  getSalesActivitiesTypesCount(params = {}) {
    return this.request({
      path: `/sales/activities/types/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Commission
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Commission[]>}
   */
  getSalesCommissions(params = {}) {
    return this.request({
      path: `/sales/commissions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Commission
   * @param {Commission} commission commission
   * @returns {Promise<Commission>}
   */
  postSalesCommissions(commission) {
    return this.request({
      path: `/sales/commissions`,
      method: 'post',
      data: commission,
    })
  }
  /**
   * Get Commission
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
   * @returns {Promise<Commission>}
   */
  getSalesCommissionsById(id, params = {}) {
    return this.request({
      path: `/sales/commissions/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Commission
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesCommissionsById(id) {
    return this.request({
      path: `/sales/commissions/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Commission
   * @param {number} id
   * @param {Commission} commission commission
   * @returns {Promise<Commission>}
   */
  putSalesCommissionsById(id, commission) {
    return this.request({
      path: `/sales/commissions/${id}`,
      method: 'put',
      data: commission,
    })
  }

  /**
   * Patch Commission
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Commission>}
   */
  patchSalesCommissionsById(id, patchOperations) {
    return this.request({
      path: `/sales/commissions/${id}`,
      method: 'patch',
      data: patchOperations,
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
  getSalesCommissionsByIdUsages(id, params = {}) {
    return this.request({
      path: `/sales/commissions/${id}/usages`,
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
  getSalesCommissionsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/sales/commissions/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Commission
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
  getSalesCommissionsCount(params = {}) {
    return this.request({
      path: `/sales/commissions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ConnectWise.Apis.v3_0.v2015_3.Sales.Opportunity.Opportunity
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Opportunity[]>}
   */
  getSalesOpportunities(params = {}) {
    return this.request({
      path: `/sales/opportunities`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ConnectWise.Apis.v3_0.v2015_3.Sales.Opportunity.Opportunity
   * @param {Opportunity} opportunity opportunity
   * @returns {Promise<Opportunity>}
   */
  postSalesOpportunities(opportunity) {
    return this.request({
      path: `/sales/opportunities`,
      method: 'post',
      data: opportunity,
    })
  }
  /**
   * Get ConnectWise.Apis.v3_0.v2015_3.Sales.Opportunity.Opportunity
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
   * @returns {Promise<Opportunity>}
   */
  getSalesOpportunitiesById(id, params = {}) {
    return this.request({
      path: `/sales/opportunities/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ConnectWise.Apis.v3_0.v2015_3.Sales.Opportunity.Opportunity
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesOpportunitiesById(id) {
    return this.request({
      path: `/sales/opportunities/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ConnectWise.Apis.v3_0.v2015_3.Sales.Opportunity.Opportunity
   * @param {number} id
   * @param {Opportunity} opportunity opportunity
   * @returns {Promise<Opportunity>}
   */
  putSalesOpportunitiesById(id, opportunity) {
    return this.request({
      path: `/sales/opportunities/${id}`,
      method: 'put',
      data: opportunity,
    })
  }

  /**
   * Patch ConnectWise.Apis.v3_0.v2015_3.Sales.Opportunity.Opportunity
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Opportunity>}
   */
  patchSalesOpportunitiesById(id, patchOperations) {
    return this.request({
      path: `/sales/opportunities/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post ApiAgreement
   * @param {number} id
   * @param {OpportunityToAgreementConversion} conversion conversion
   * @returns {Promise<Agreement>}
   */
  postSalesOpportunitiesByIdConvertToAgreement(id, conversion) {
    return this.request({
      path: `/sales/opportunities/${id}/convertToAgreement`,
      method: 'post',
      data: conversion,
    })
  }
  /**
   * Post ApiProject
   * @param {number} id
   * @param {OpportunityToProjectConversion} conversion conversion
   * @returns {Promise<Project>}
   */
  postSalesOpportunitiesByIdConvertToProject(id, conversion) {
    return this.request({
      path: `/sales/opportunities/${id}/convertToProject`,
      method: 'post',
      data: conversion,
    })
  }
  /**
   * Post ApiSalesOrder
   * @param {number} id
   * @param {OpportunityToSalesOrderConversion} conversion conversion
   * @returns {Promise<Order>}
   */
  postSalesOpportunitiesByIdConvertToSalesOrder(id, conversion) {
    return this.request({
      path: `/sales/opportunities/${id}/convertToSalesOrder`,
      method: 'post',
      data: conversion,
    })
  }
  /**
   * Post ApiTicket
   * @param {number} id
   * @param {OpportunityToServiceTicketConversion} conversion conversion
   * @returns {Promise<Ticket>}
   */
  postSalesOpportunitiesByIdConvertToServiceTicket(id, conversion) {
    return this.request({
      path: `/sales/opportunities/${id}/convertToServiceTicket`,
      method: 'post',
      data: conversion,
    })
  }
  /**
   * Get List of OpportunityContact
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
   * @returns {Promise<OpportunityContact[]>}
   */
  getSalesOpportunitiesByParentIdContacts(parentId, params = {}) {
    return this.request({
      path: `/sales/opportunities/${parentId}/contacts`,
      method: 'get',
      params,
    })
  }

  /**
   * Post OpportunityContact
   * @param {number} parentId
   * @param {OpportunityContact} opportunityContact opportunityContact
   * @returns {Promise<OpportunityContact>}
   */
  postSalesOpportunitiesByParentIdContacts(parentId, opportunityContact) {
    return this.request({
      path: `/sales/opportunities/${parentId}/contacts`,
      method: 'post',
      data: opportunityContact,
    })
  }
  /**
   * Get OpportunityContact
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
   * @returns {Promise<OpportunityContact>}
   */
  getSalesOpportunitiesByParentIdContactsById(id, parentId, params = {}) {
    return this.request({
      path: `/sales/opportunities/${parentId}/contacts/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete OpportunityContact
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSalesOpportunitiesByParentIdContactsById(id, parentId) {
    return this.request({
      path: `/sales/opportunities/${parentId}/contacts/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put OpportunityContact
   * @param {number} id
   * @param {number} parentId
   * @param {OpportunityContact} opportunityContact opportunityContact
   * @returns {Promise<OpportunityContact>}
   */
  putSalesOpportunitiesByParentIdContactsById(id, parentId, opportunityContact) {
    return this.request({
      path: `/sales/opportunities/${parentId}/contacts/{id}`,
      method: 'put',
      data: opportunityContact,
    })
  }

  /**
   * Patch OpportunityContact
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<OpportunityContact>}
   */
  patchSalesOpportunitiesByParentIdContactsById(id, parentId, patchOperations) {
    return this.request({
      path: `/sales/opportunities/${parentId}/contacts/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of OpportunityContact
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
  getSalesOpportunitiesByParentIdContactsCount(parentId, params = {}) {
    return this.request({
      path: `/sales/opportunities/${parentId}/contacts/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Forecast
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
   * @returns {Promise<Forecast[]>}
   */
  getSalesOpportunitiesByParentIdForecast(parentId, params = {}) {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Forecast
   * @param {number} parentId
   * @param {Forecast} forecast forecast
   * @returns {Promise<Forecast>}
   */
  postSalesOpportunitiesByParentIdForecast(parentId, forecast) {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast`,
      method: 'post',
      data: forecast,
    })
  }
  /**
   * Delete Forecast
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSalesOpportunitiesByParentIdForecast(parentId) {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/`,
      method: 'delete',
    })
  }

  /**
   * Put Forecast
   * @param {number} parentId
   * @param {Forecast} forecast forecast
   * @returns {Promise<Forecast>}
   */
  putSalesOpportunitiesByParentIdForecast(parentId, forecast) {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/`,
      method: 'put',
      data: forecast,
    })
  }

  /**
   * Patch Forecast
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Forecast>}
   */
  patchSalesOpportunitiesByParentIdForecast(parentId, patchOperations) {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ForecastItem
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
   * @returns {Promise<ForecastItem>}
   */
  getSalesOpportunitiesByParentIdForecastById(id, parentId, params = {}) {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ForecastItem
   * @param {number} id
   * @param {number} parentId
   * @param {ForecastItem} forecast forecast
   * @returns {Promise<ForecastItem>}
   */
  postSalesOpportunitiesByParentIdForecastById(id, parentId, forecast) {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/{id}`,
      method: 'post',
      data: forecast,
    })
  }

  /**
   * Delete ForecastItem
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSalesOpportunitiesByParentIdForecastById(id, parentId) {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ForecastItem
   * @param {number} id
   * @param {number} parentId
   * @param {ForecastItem} forecast forecast
   * @returns {Promise<ForecastItem>}
   */
  putSalesOpportunitiesByParentIdForecastById(id, parentId, forecast) {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/{id}`,
      method: 'put',
      data: forecast,
    })
  }

  /**
   * Patch ForecastItem
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ForecastItem>}
   */
  patchSalesOpportunitiesByParentIdForecastById(id, parentId, patchOperations) {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<SuccessResponse>}
   */
  postSalesOpportunitiesByParentIdForecastCopyById(id, parentId) {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/copy/{id}`,
      method: 'post',
    })
  }
  /**
   * Get Count of Forecast
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
  getSalesOpportunitiesByParentIdForecastCount(parentId, params = {}) {
    return this.request({
      path: `/sales/opportunities/${parentId}/forecast/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OpportunityNote
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
   * @returns {Promise<OpportunityNote[]>}
   */
  getSalesOpportunitiesByParentIdNotes(parentId, params = {}) {
    return this.request({
      path: `/sales/opportunities/${parentId}/notes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post OpportunityNote
   * @param {number} parentId
   * @param {OpportunityNote} note note
   * @returns {Promise<OpportunityNote>}
   */
  postSalesOpportunitiesByParentIdNotes(parentId, note) {
    return this.request({
      path: `/sales/opportunities/${parentId}/notes`,
      method: 'post',
      data: note,
    })
  }
  /**
   * Get OpportunityNote
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
   * @returns {Promise<OpportunityNote>}
   */
  getSalesOpportunitiesByParentIdNotesById(id, parentId, params = {}) {
    return this.request({
      path: `/sales/opportunities/${parentId}/notes/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete OpportunityNote
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSalesOpportunitiesByParentIdNotesById(id, parentId) {
    return this.request({
      path: `/sales/opportunities/${parentId}/notes/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put OpportunityNote
   * @param {number} id
   * @param {number} parentId
   * @param {OpportunityNote} note note
   * @returns {Promise<OpportunityNote>}
   */
  putSalesOpportunitiesByParentIdNotesById(id, parentId, note) {
    return this.request({
      path: `/sales/opportunities/${parentId}/notes/{id}`,
      method: 'put',
      data: note,
    })
  }

  /**
   * Patch OpportunityNote
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<OpportunityNote>}
   */
  patchSalesOpportunitiesByParentIdNotesById(id, parentId, patchOperations) {
    return this.request({
      path: `/sales/opportunities/${parentId}/notes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of OpportunityNote
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
   * @returns {Promise<OpportunityNote[]>}
   */
  getSalesOpportunitiesByParentIdNotesCount(parentId, params = {}) {
    return this.request({
      path: `/sales/opportunities/${parentId}/notes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Team
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
   * @returns {Promise<Team[]>}
   */
  getSalesOpportunitiesByParentIdTeam(parentId, params = {}) {
    return this.request({
      path: `/sales/opportunities/${parentId}/team`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Team
   * @param {number} parentId
   * @param {Team} team team
   * @returns {Promise<Team>}
   */
  postSalesOpportunitiesByParentIdTeam(parentId, team) {
    return this.request({
      path: `/sales/opportunities/${parentId}/team`,
      method: 'post',
      data: team,
    })
  }
  /**
   * Get Team
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
   * @returns {Promise<Team>}
   */
  getSalesOpportunitiesByParentIdTeamById(id, parentId, params = {}) {
    return this.request({
      path: `/sales/opportunities/${parentId}/team/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Team
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSalesOpportunitiesByParentIdTeamById(id, parentId) {
    return this.request({
      path: `/sales/opportunities/${parentId}/team/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put Team
   * @param {number} id
   * @param {number} parentId
   * @param {Team} team team
   * @returns {Promise<Team>}
   */
  putSalesOpportunitiesByParentIdTeamById(id, parentId, team) {
    return this.request({
      path: `/sales/opportunities/${parentId}/team/{id}`,
      method: 'put',
      data: team,
    })
  }

  /**
   * Patch Team
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Team>}
   */
  patchSalesOpportunitiesByParentIdTeamById(id, parentId, patchOperations) {
    return this.request({
      path: `/sales/opportunities/${parentId}/team/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of Team
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
  getSalesOpportunitiesByParentIdTeamCount(parentId, params = {}) {
    return this.request({
      path: `/sales/opportunities/${parentId}/team/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ConnectWise.Apis.v3_0.v2015_3.Sales.Opportunity.Opportunity
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
  getSalesOpportunitiesCount(params = {}) {
    return this.request({
      path: `/sales/opportunities/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ConnectWise.Apis.v3_0.v2015_3.Sales.Opportunity.Opportunity
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Opportunity>}
   */
  getSalesOpportunitiesDefault(params = {}) {
    return this.request({
      path: `/sales/opportunities/default`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OpportunityRating
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<OpportunityRating[]>}
   */
  getSalesOpportunitiesRatings(params = {}) {
    return this.request({
      path: `/sales/opportunities/ratings`,
      method: 'get',
      params,
    })
  }

  /**
   * Post OpportunityRating
   * @param {OpportunityRating} opportunityRating opportunityRating
   * @returns {Promise<OpportunityRating>}
   */
  postSalesOpportunitiesRatings(opportunityRating) {
    return this.request({
      path: `/sales/opportunities/ratings`,
      method: 'post',
      data: opportunityRating,
    })
  }
  /**
   * Get OpportunityRating
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
   * @returns {Promise<OpportunityRating>}
   */
  getSalesOpportunitiesRatingsById(id, params = {}) {
    return this.request({
      path: `/sales/opportunities/ratings/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete OpportunityRating
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesOpportunitiesRatingsById(id) {
    return this.request({
      path: `/sales/opportunities/ratings/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put OpportunityRating
   * @param {number} id
   * @param {OpportunityRating} opportunityRating opportunityRating
   * @returns {Promise<OpportunityRating>}
   */
  putSalesOpportunitiesRatingsById(id, opportunityRating) {
    return this.request({
      path: `/sales/opportunities/ratings/${id}`,
      method: 'put',
      data: opportunityRating,
    })
  }

  /**
   * Patch OpportunityRating
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<OpportunityRating>}
   */
  patchSalesOpportunitiesRatingsById(id, patchOperations) {
    return this.request({
      path: `/sales/opportunities/ratings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get OpportunityRatingInfo
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
   * @returns {Promise<OpportunityRatingInfo>}
   */
  getSalesOpportunitiesRatingsByIdInfo(id, params = {}) {
    return this.request({
      path: `/sales/opportunities/ratings/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of OpportunityRating
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
  getSalesOpportunitiesRatingsCount(params = {}) {
    return this.request({
      path: `/sales/opportunities/ratings/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OpportunityRatingInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<OpportunityRatingInfo[]>}
   */
  getSalesOpportunitiesRatingsInfo(params = {}) {
    return this.request({
      path: `/sales/opportunities/ratings/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of OpportunityRatingInfo
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
  getSalesOpportunitiesRatingsInfoCount(params = {}) {
    return this.request({
      path: `/sales/opportunities/ratings/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OpportunityStatus
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<OpportunityStatus[]>}
   */
  getSalesOpportunitiesStatuses(params = {}) {
    return this.request({
      path: `/sales/opportunities/statuses`,
      method: 'get',
      params,
    })
  }

  /**
   * Post OpportunityStatus
   * @param {OpportunityStatus} status status
   * @returns {Promise<OpportunityStatus>}
   */
  postSalesOpportunitiesStatuses(status) {
    return this.request({
      path: `/sales/opportunities/statuses`,
      method: 'post',
      data: status,
    })
  }
  /**
   * Get OpportunityStatus
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
   * @returns {Promise<OpportunityStatus>}
   */
  getSalesOpportunitiesStatusesById(id, params = {}) {
    return this.request({
      path: `/sales/opportunities/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete OpportunityStatus
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesOpportunitiesStatusesById(id) {
    return this.request({
      path: `/sales/opportunities/statuses/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put OpportunityStatus
   * @param {number} id
   * @param {OpportunityStatus} status status
   * @returns {Promise<OpportunityStatus>}
   */
  putSalesOpportunitiesStatusesById(id, status) {
    return this.request({
      path: `/sales/opportunities/statuses/${id}`,
      method: 'put',
      data: status,
    })
  }

  /**
   * Patch OpportunityStatus
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<OpportunityStatus>}
   */
  patchSalesOpportunitiesStatusesById(id, patchOperations) {
    return this.request({
      path: `/sales/opportunities/statuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get OpportunityStatusInfos
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
   * @returns {Promise<OpportunityStatusInfo>}
   */
  getSalesOpportunitiesStatusesByIdInfo(id, params = {}) {
    return this.request({
      path: `/sales/opportunities/statuses/${id}/info`,
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
  getSalesOpportunitiesStatusesByIdUsages(id, params = {}) {
    return this.request({
      path: `/sales/opportunities/statuses/${id}/usages`,
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
  getSalesOpportunitiesStatusesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/sales/opportunities/statuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of OpportunityStatus
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
  getSalesOpportunitiesStatusesCount(params = {}) {
    return this.request({
      path: `/sales/opportunities/statuses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OpportunityStatusInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<OpportunityStatusInfo[]>}
   */
  getSalesOpportunitiesStatusesInfo(params = {}) {
    return this.request({
      path: `/sales/opportunities/statuses/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of OpportunityStatusInfos
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
  getSalesOpportunitiesStatusesInfoCount(params = {}) {
    return this.request({
      path: `/sales/opportunities/statuses/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OpportunityType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<OpportunityType[]>}
   */
  getSalesOpportunitiesTypes(params = {}) {
    return this.request({
      path: `/sales/opportunities/types`,
      method: 'get',
      params,
    })
  }

  /**
   * Post OpportunityType
   * @param {OpportunityType} opportunityType opportunityType
   * @returns {Promise<OpportunityType>}
   */
  postSalesOpportunitiesTypes(opportunityType) {
    return this.request({
      path: `/sales/opportunities/types`,
      method: 'post',
      data: opportunityType,
    })
  }
  /**
   * Get OpportunityType
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
   * @returns {Promise<OpportunityType>}
   */
  getSalesOpportunitiesTypesById(id, params = {}) {
    return this.request({
      path: `/sales/opportunities/types/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete OpportunityType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesOpportunitiesTypesById(id) {
    return this.request({
      path: `/sales/opportunities/types/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put OpportunityType
   * @param {number} id
   * @param {OpportunityType} opportunityType opportunityType
   * @returns {Promise<OpportunityType>}
   */
  putSalesOpportunitiesTypesById(id, opportunityType) {
    return this.request({
      path: `/sales/opportunities/types/${id}`,
      method: 'put',
      data: opportunityType,
    })
  }

  /**
   * Patch OpportunityType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<OpportunityType>}
   */
  patchSalesOpportunitiesTypesById(id, patchOperations) {
    return this.request({
      path: `/sales/opportunities/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get OpportunityTypeInfos
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
   * @returns {Promise<OpportunityTypeInfo>}
   */
  getSalesOpportunitiesTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/sales/opportunities/types/${id}/info`,
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
  getSalesOpportunitiesTypesByIdUsages(id, params = {}) {
    return this.request({
      path: `/sales/opportunities/types/${id}/usages`,
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
  getSalesOpportunitiesTypesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/sales/opportunities/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of OpportunityType
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
  getSalesOpportunitiesTypesCount(params = {}) {
    return this.request({
      path: `/sales/opportunities/types/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OpportunityTypeInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<OpportunityTypeInfo[]>}
   */
  getSalesOpportunitiesTypesInfo(params = {}) {
    return this.request({
      path: `/sales/opportunities/types/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of OpportunityType
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
  getSalesOpportunitiesTypesInfoCount(params = {}) {
    return this.request({
      path: `/sales/opportunities/types/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Order
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Order[]>}
   */
  getSalesOrders(params = {}) {
    return this.request({
      path: `/sales/orders`,
      method: 'get',
      params,
    })
  }

  /**
   * Post List of Order
   * @param {Order} order order
   * @returns {Promise<Order>}
   */
  postSalesOrders(order) {
    return this.request({
      path: `/sales/orders`,
      method: 'post',
      data: order,
    })
  }
  /**
   * Get Order
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
   * @returns {Promise<Order>}
   */
  getSalesOrdersById(id, params = {}) {
    return this.request({
      path: `/sales/orders/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Order
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesOrdersById(id) {
    return this.request({
      path: `/sales/orders/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Order
   * @param {number} id
   * @param {Order} order order
   * @returns {Promise<Order>}
   */
  putSalesOrdersById(id, order) {
    return this.request({
      path: `/sales/orders/${id}`,
      method: 'put',
      data: order,
    })
  }

  /**
   * Patch Order
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Order>}
   */
  patchSalesOrdersById(id, patchOperations) {
    return this.request({
      path: `/sales/orders/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post Ticket
   * @param {number} id
   * @returns {Promise<Ticket>}
   */
  postSalesOrdersByIdConvertToServiceTicket(id) {
    return this.request({
      path: `/sales/orders/${id}/convertToServiceTicket`,
      method: 'post',
    })
  }
  /**
   * Get Count of Order
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
  getSalesOrdersCount(params = {}) {
    return this.request({
      path: `/sales/orders/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OrderStatus
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<OrderStatus[]>}
   */
  getSalesOrdersStatuses(params = {}) {
    return this.request({
      path: `/sales/orders/statuses`,
      method: 'get',
      params,
    })
  }

  /**
   * Post List of OrderStatus
   * @param {OrderStatus} status status
   * @returns {Promise<OrderStatus[]>}
   */
  postSalesOrdersStatuses(status) {
    return this.request({
      path: `/sales/orders/statuses`,
      method: 'post',
      data: status,
    })
  }
  /**
   * Get OrderStatus
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
   * @returns {Promise<OrderStatus>}
   */
  getSalesOrdersStatusesById(id, params = {}) {
    return this.request({
      path: `/sales/orders/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete OrderStatus
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesOrdersStatusesById(id) {
    return this.request({
      path: `/sales/orders/statuses/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put OrderStatus
   * @param {number} id
   * @param {OrderStatus} status status
   * @returns {Promise<OrderStatus>}
   */
  putSalesOrdersStatusesById(id, status) {
    return this.request({
      path: `/sales/orders/statuses/${id}`,
      method: 'put',
      data: status,
    })
  }

  /**
   * Patch OrderStatus
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<OrderStatus>}
   */
  patchSalesOrdersStatusesById(id, patchOperations) {
    return this.request({
      path: `/sales/orders/statuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get OrderStatusInfos
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
   * @returns {Promise<OrderStatusInfo>}
   */
  getSalesOrdersStatusesByIdInfo(id, params = {}) {
    return this.request({
      path: `/sales/orders/statuses/${id}/info`,
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
  getSalesOrdersStatusesByIdUsages(id, params = {}) {
    return this.request({
      path: `/sales/orders/statuses/${id}/usages`,
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
  getSalesOrdersStatusesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/sales/orders/statuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OrderStatusEmailTemplate
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
   * @returns {Promise<OrderStatusEmailTemplate[]>}
   */
  getSalesOrdersStatusesByParentIdEmailtemplates(parentId, params = {}) {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/emailtemplates/`,
      method: 'get',
      params,
    })
  }

  /**
   * Post OrderStatusEmailTemplate
   * @param {number} parentId
   * @param {OrderStatusEmailTemplate} orderStatusEmailTemplate orderStatusEmailTemplate
   * @returns {Promise<OrderStatusEmailTemplate>}
   */
  postSalesOrdersStatusesByParentIdEmailtemplates(parentId, orderStatusEmailTemplate) {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/emailtemplates/`,
      method: 'post',
      data: orderStatusEmailTemplate,
    })
  }
  /**
   * Get OrderStatusEmailTemplate
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
   * @returns {Promise<OrderStatusEmailTemplate>}
   */
  getSalesOrdersStatusesByParentIdEmailtemplatesById(id, parentId, params = {}) {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/emailtemplates/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete OrderStatusEmailTemplate
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSalesOrdersStatusesByParentIdEmailtemplatesById(id, parentId) {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/emailtemplates/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put OrderStatusEmailTemplate
   * @param {number} id
   * @param {number} parentId
   * @param {OrderStatusEmailTemplate} orderStatusEmailTemplate orderStatusEmailTemplate
   * @returns {Promise<OrderStatusEmailTemplate>}
   */
  putSalesOrdersStatusesByParentIdEmailtemplatesById(id, parentId, orderStatusEmailTemplate) {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/emailtemplates/{id}`,
      method: 'put',
      data: orderStatusEmailTemplate,
    })
  }

  /**
   * Patch OrderStatusEmailTemplate
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<OrderStatusEmailTemplate>}
   */
  patchSalesOrdersStatusesByParentIdEmailtemplatesById(id, parentId, patchOperations) {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/emailtemplates/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of OrderStatusEmailTemplate
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
  getSalesOrdersStatusesByParentIdEmailtemplatesCount(parentId, params = {}) {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/emailtemplates/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OrderStatusNotification
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
   * @returns {Promise<OrderStatusNotification[]>}
   */
  getSalesOrdersStatusesByParentIdNotifications(parentId, params = {}) {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/notifications`,
      method: 'get',
      params,
    })
  }

  /**
   * Post OrderStatusNotification
   * @param {number} parentId
   * @param {OrderStatusNotification} orderStatusNotification orderStatusNotification
   * @returns {Promise<OrderStatusNotification>}
   */
  postSalesOrdersStatusesByParentIdNotifications(parentId, orderStatusNotification) {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/notifications`,
      method: 'post',
      data: orderStatusNotification,
    })
  }
  /**
   * Get OrderStatusNotification
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
   * @returns {Promise<OrderStatusNotification>}
   */
  getSalesOrdersStatusesByParentIdNotificationsById(id, parentId, params = {}) {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/notifications/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete OrderStatusNotification
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSalesOrdersStatusesByParentIdNotificationsById(id, parentId) {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/notifications/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put OrderStatusNotification
   * @param {number} id
   * @param {number} parentId
   * @param {OrderStatusNotification} orderStatusNotification orderStatusNotification
   * @returns {Promise<OrderStatusNotification>}
   */
  putSalesOrdersStatusesByParentIdNotificationsById(id, parentId, orderStatusNotification) {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/notifications/{id}`,
      method: 'put',
      data: orderStatusNotification,
    })
  }

  /**
   * Patch OrderStatusNotification
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<OrderStatusNotification>}
   */
  patchSalesOrdersStatusesByParentIdNotificationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/notifications/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of OrderStatusNotification
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
  getSalesOrdersStatusesByParentIdNotificationsCount(parentId, params = {}) {
    return this.request({
      path: `/sales/orders/statuses/${parentId}/notifications/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of OrderStatus
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
  getSalesOrdersStatusesCount(params = {}) {
    return this.request({
      path: `/sales/orders/statuses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OrderStatusInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<OrderStatusInfo[]>}
   */
  getSalesOrdersStatusesInfo(params = {}) {
    return this.request({
      path: `/sales/orders/statuses/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of OrderStatusInfos
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
  getSalesOrdersStatusesInfoCount(params = {}) {
    return this.request({
      path: `/sales/orders/statuses/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SalesProbability
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SalesProbability[]>}
   */
  getSalesProbabilities(params = {}) {
    return this.request({
      path: `/sales/probabilities`,
      method: 'get',
      params,
    })
  }

  /**
   * Post SalesProbability
   * @param {SalesProbability} probability probability
   * @returns {Promise<SalesProbability>}
   */
  postSalesProbabilities(probability) {
    return this.request({
      path: `/sales/probabilities`,
      method: 'post',
      data: probability,
    })
  }
  /**
   * Get SalesProbability
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
   * @returns {Promise<SalesProbability>}
   */
  getSalesProbabilitiesById(id, params = {}) {
    return this.request({
      path: `/sales/probabilities/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete SalesProbability
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesProbabilitiesById(id) {
    return this.request({
      path: `/sales/probabilities/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put SalesProbability
   * @param {number} id
   * @param {SalesProbability} probability probability
   * @returns {Promise<SalesProbability>}
   */
  putSalesProbabilitiesById(id, probability) {
    return this.request({
      path: `/sales/probabilities/${id}`,
      method: 'put',
      data: probability,
    })
  }

  /**
   * Patch SalesProbability
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<SalesProbability>}
   */
  patchSalesProbabilitiesById(id, patchOperations) {
    return this.request({
      path: `/sales/probabilities/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get SalesProbabilityInfos
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
   * @returns {Promise<SalesProbabilityInfo>}
   */
  getSalesProbabilitiesByIdInfo(id, params = {}) {
    return this.request({
      path: `/sales/probabilities/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SalesProbability
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
  getSalesProbabilitiesCount(params = {}) {
    return this.request({
      path: `/sales/probabilities/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SalesProbabilityInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SalesProbabilityInfo[]>}
   */
  getSalesProbabilitiesInfo(params = {}) {
    return this.request({
      path: `/sales/probabilities/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SalesProbabilityInfos
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
  getSalesProbabilitiesInfoCount(params = {}) {
    return this.request({
      path: `/sales/probabilities/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SalesQuota
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SalesQuota[]>}
   */
  getSalesQuotas(params = {}) {
    return this.request({
      path: `/sales/quotas`,
      method: 'get',
      params,
    })
  }

  /**
   * Post SalesQuota
   * @param {SalesQuota} salesQuota salesQuota
   * @returns {Promise<SalesQuota>}
   */
  postSalesQuotas(salesQuota) {
    return this.request({
      path: `/sales/quotas`,
      method: 'post',
      data: salesQuota,
    })
  }
  /**
   * Get SalesQuota
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
   * @returns {Promise<SalesQuota>}
   */
  getSalesQuotasById(id, params = {}) {
    return this.request({
      path: `/sales/quotas/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete SalesQuota
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesQuotasById(id) {
    return this.request({
      path: `/sales/quotas/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put SalesQuota
   * @param {number} id
   * @param {SalesQuota} salesQuota salesQuota
   * @returns {Promise<SalesQuota>}
   */
  putSalesQuotasById(id, salesQuota) {
    return this.request({
      path: `/sales/quotas/${id}`,
      method: 'put',
      data: salesQuota,
    })
  }

  /**
   * Patch SalesQuota
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<SalesQuota>}
   */
  patchSalesQuotasById(id, patchOperations) {
    return this.request({
      path: `/sales/quotas/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of SalesQuota
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
  getSalesQuotasCount(params = {}) {
    return this.request({
      path: `/sales/quotas/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Role
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Role[]>}
   */
  getSalesRoles(params = {}) {
    return this.request({
      path: `/sales/roles`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Role
   * @param {Role} role role
   * @returns {Promise<Role>}
   */
  postSalesRoles(role) {
    return this.request({
      path: `/sales/roles`,
      method: 'post',
      data: role,
    })
  }
  /**
   * Get Role
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
   * @returns {Promise<Role>}
   */
  getSalesRolesById(id, params = {}) {
    return this.request({
      path: `/sales/roles/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Role
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesRolesById(id) {
    return this.request({
      path: `/sales/roles/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Role
   * @param {number} id
   * @param {Role} role role
   * @returns {Promise<Role>}
   */
  putSalesRolesById(id, role) {
    return this.request({
      path: `/sales/roles/${id}`,
      method: 'put',
      data: role,
    })
  }

  /**
   * Patch Role
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Role>}
   */
  patchSalesRolesById(id, patchOperations) {
    return this.request({
      path: `/sales/roles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of Role
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
  getSalesRolesCount(params = {}) {
    return this.request({
      path: `/sales/roles/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SalesTeam
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SalesTeam[]>}
   */
  getSalesSalesTeams(params = {}) {
    return this.request({
      path: `/sales/salesTeams`,
      method: 'get',
      params,
    })
  }

  /**
   * Post SalesTeam
   * @param {SalesTeam} salesTeam salesTeam
   * @returns {Promise<SalesTeam>}
   */
  postSalesSalesTeams(salesTeam) {
    return this.request({
      path: `/sales/salesTeams`,
      method: 'post',
      data: salesTeam,
    })
  }
  /**
   * Get SalesTeam
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
   * @returns {Promise<SalesTeam>}
   */
  getSalesSalesTeamsById(id, params = {}) {
    return this.request({
      path: `/sales/salesTeams/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete SalesTeam
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesSalesTeamsById(id) {
    return this.request({
      path: `/sales/salesTeams/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put SalesTeam
   * @param {number} id
   * @param {SalesTeam} salesTeam salesTeam
   * @returns {Promise<SalesTeam>}
   */
  putSalesSalesTeamsById(id, salesTeam) {
    return this.request({
      path: `/sales/salesTeams/${id}`,
      method: 'put',
      data: salesTeam,
    })
  }

  /**
   * Patch SalesTeam
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<SalesTeam>}
   */
  patchSalesSalesTeamsById(id, patchOperations) {
    return this.request({
      path: `/sales/salesTeams/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of SalesTeamMember
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
   * @returns {Promise<SalesTeamMember[]>}
   */
  getSalesSalesTeamsByParentIdMembers(parentId, params = {}) {
    return this.request({
      path: `/sales/salesTeams/${parentId}/members`,
      method: 'get',
      params,
    })
  }

  /**
   * Post SalesTeamMember
   * @param {number} parentId
   * @param {SalesTeamMember} salesTeamMember salesTeamMember
   * @returns {Promise<SalesTeamMember>}
   */
  postSalesSalesTeamsByParentIdMembers(parentId, salesTeamMember) {
    return this.request({
      path: `/sales/salesTeams/${parentId}/members`,
      method: 'post',
      data: salesTeamMember,
    })
  }
  /**
   * Get SalesTeamMember
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
   * @returns {Promise<SalesTeamMember>}
   */
  getSalesSalesTeamsByParentIdMembersById(id, parentId, params = {}) {
    return this.request({
      path: `/sales/salesTeams/${parentId}/members/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete SalesTeamMember
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSalesSalesTeamsByParentIdMembersById(id, parentId) {
    return this.request({
      path: `/sales/salesTeams/${parentId}/members/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put SalesTeamMember
   * @param {number} id
   * @param {number} parentId
   * @param {SalesTeamMember} salesTeamMember salesTeamMember
   * @returns {Promise<SalesTeamMember>}
   */
  putSalesSalesTeamsByParentIdMembersById(id, parentId, salesTeamMember) {
    return this.request({
      path: `/sales/salesTeams/${parentId}/members/{id}`,
      method: 'put',
      data: salesTeamMember,
    })
  }

  /**
   * Patch SalesTeamMember
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<SalesTeamMember>}
   */
  patchSalesSalesTeamsByParentIdMembersById(id, parentId, patchOperations) {
    return this.request({
      path: `/sales/salesTeams/${parentId}/members/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of SalesTeamMember
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
  getSalesSalesTeamsByParentIdMembersCount(parentId, params = {}) {
    return this.request({
      path: `/sales/salesTeams/${parentId}/members/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SalesTeam
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
  getSalesSalesTeamsCount(params = {}) {
    return this.request({
      path: `/sales/salesTeams/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of HolidayListInfos
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
  getSalesScheduleHolidaylistsInfoCount(params = {}) {
    return this.request({
      path: `/sales/schedule/holidaylists/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of OrderStatusInfos
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
  getSalesServicePriorityInfoCount(params = {}) {
    return this.request({
      path: `/sales/service/priority/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Stage
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<OpportunityStage[]>}
   */
  getSalesStages(params = {}) {
    return this.request({
      path: `/sales/stages`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Stage
   * @param {OpportunityStage} stage stage
   * @returns {Promise<OpportunityStage>}
   */
  postSalesStages(stage) {
    return this.request({
      path: `/sales/stages`,
      method: 'post',
      data: stage,
    })
  }
  /**
   * Get Stage
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
   * @returns {Promise<OpportunityStage>}
   */
  getSalesStagesById(id, params = {}) {
    return this.request({
      path: `/sales/stages/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Stage
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSalesStagesById(id) {
    return this.request({
      path: `/sales/stages/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Stage
   * @param {number} id
   * @param {OpportunityStage} stage stage
   * @returns {Promise<OpportunityStage>}
   */
  putSalesStagesById(id, stage) {
    return this.request({
      path: `/sales/stages/${id}`,
      method: 'put',
      data: stage,
    })
  }

  /**
   * Patch Stage
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<OpportunityStage>}
   */
  patchSalesStagesById(id, patchOperations) {
    return this.request({
      path: `/sales/stages/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get StageInfo
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
   * @returns {Promise<OpportunityStageInfo>}
   */
  getSalesStagesByIdInfo(id, params = {}) {
    return this.request({
      path: `/sales/stages/${id}/info`,
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
  getSalesStagesByIdUsages(id, params = {}) {
    return this.request({
      path: `/sales/stages/${id}/usages`,
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
  getSalesStagesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/sales/stages/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Stage
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
  getSalesStagesCount(params = {}) {
    return this.request({
      path: `/sales/stages/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of StageInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<OpportunityStageInfo[]>}
   */
  getSalesStagesInfo(params = {}) {
    return this.request({
      path: `/sales/stages/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of StageInfo
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
  getSalesStagesInfoCount(params = {}) {
    return this.request({
      path: `/sales/stages/info/count`,
      method: 'get',
      params,
    })
  }
}
