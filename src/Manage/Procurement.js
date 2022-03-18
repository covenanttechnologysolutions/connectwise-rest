import Manage from './Manage.js'

/**
 * ProcurementAdjustment
 * @typedef {object} ProcurementAdjustment
 * @property {number} [id]  int32
 * @property {string} identifier  Max length: 50;
 * @property {AdjustmentTypeReference} [type]
 * @property {string} [reason]  Max length: 100;
 * @property {string} [notes]
 * @property {boolean} [closedFlag]   nullable
 * @property {string} [closedBy]
 * @property {string} [closedDate]  date-time
 * @property {array} [adjustmentDetails]
 * @property {object} [_info]
 */

/**
 * AdjustmentDetail
 * @typedef {object} AdjustmentDetail
 * @property {number} [id]  int32
 * @property {CatalogItemReference} [catalogItem]
 * @property {string} [description]  Max length: 50;
 * @property {number} [quantityOnHand]  double nullable
 * @property {number} [unitCost]  double nullable
 * @property {WarehouseReference} [warehouse]
 * @property {WarehouseBinReference} [warehouseBin]
 * @property {number} quantityAdjusted  int32 nullable
 * @property {string} [serialNumber]  Max length: 1000;
 * @property {AdjustmentReference} [adjustment]
 * @property {object} [_info]
 */

/**
 * Count
 * @typedef {object} Count
 * @property {number} [count]  int32
 */

/**
 * AdjustmentType
 * @typedef {object} AdjustmentType
 * @property {number} [id]  int32
 * @property {string} identifier  Max length: 50;
 * @property {string} [name]  Max length: 100;
 * @property {boolean} [auditTrailFlag]   nullable
 * @property {string} [dateCreated]  date-time
 * @property {string} [createdBy]
 * @property {object} [_info]
 */

/**
 * AdjustmentTypeInfo
 * @typedef {object} AdjustmentTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
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
 * CatalogItem
 * @typedef {object} CatalogItem
 * @property {number} [id]  int32
 * @property {string} identifier  Max length: 60;
 * @property {string} description  Max length: 60;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {ProductSubCategoryReference} [subcategory]
 * @property {ProductTypeReference} [type]
 * @property {string} [productClass] Defaults to Non-Inventory  nullable
 * @property {boolean} [serializedFlag]   nullable
 * @property {boolean} [serializedCostFlag]   nullable
 * @property {boolean} [phaseProductFlag]   nullable
 * @property {UnitOfMeasureReference} [unitOfMeasure]
 * @property {number} [minStockLevel]  int32 nullable
 * @property {number} [price]  double nullable
 * @property {number} [cost]  double nullable
 * @property {string} [priceAttribute]   nullable
 * @property {boolean} [taxableFlag]   nullable
 * @property {boolean} [dropShipFlag]   nullable
 * @property {boolean} [specialOrderFlag]   nullable
 * @property {string} customerDescription  Max length: 6000;
 * @property {ManufacturerReference} [manufacturer]
 * @property {string} [manufacturerPartNumber]  Max length: 50;
 * @property {CompanyReference} [vendor]
 * @property {string} [vendorSku]  Max length: 50;
 * @property {string} [notes]
 * @property {string} [integrationXRef]  Max length: 50;
 * @property {SLAReference} [sla]
 * @property {EntityTypeReference} [entityType]
 * @property {boolean} [recurringFlag]   nullable
 * @property {number} [recurringRevenue]  double nullable
 * @property {number} [recurringCost]  double nullable
 * @property {boolean} [recurringOneTimeFlag]   nullable
 * @property {BillingCycleReference} [recurringBillCycle]
 * @property {string} [recurringCycleType]   nullable
 * @property {string} [dateEntered]
 * @property {boolean} [calculatedPriceFlag]   nullable
 * @property {boolean} [calculatedCostFlag]   nullable
 * @property {ProductCategoryReference} [category]
 * @property {number} [calculatedPrice]  double nullable
 * @property {number} [calculatedCost]  double nullable
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * CatalogItemInfo
 * @typedef {object} CatalogItemInfo
 * @property {number} [id]  int32
 * @property {string} [identifier]
 * @property {string} [description]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {string} [productClass]   nullable
 * @property {boolean} [serializedCostFlag]   nullable
 * @property {number} [price]  double nullable
 * @property {number} [cost]  double nullable
 * @property {boolean} [taxableFlag]   nullable
 * @property {boolean} [dropShipFlag]   nullable
 * @property {boolean} [specialOrderFlag]   nullable
 * @property {string} [customerDescription]
 * @property {string} [manufacturerPartNumber]
 * @property {string} [vendorSku]
 * @property {object} [_info]
 */

/**
 * CatalogPricing
 * @typedef {object} CatalogPricing
 * @property {CatalogItemReference} [catalogItem]
 * @property {CompanyReference} [company]
 * @property {SystemLocationReference} [location]
 * @property {number} [quantity]  int32
 * @property {string} [date]
 * @property {number} [price]  double nullable
 */

/**
 * CatalogComponent
 * @typedef {object} CatalogComponent
 * @property {number} [id]  int32
 * @property {number} [sequenceNumber]  int32 nullable
 * @property {number} quantity  double nullable
 * @property {CatalogItemReference} [catalogItem]
 * @property {boolean} [hidePriceFlag]   nullable
 * @property {boolean} [hideItemIdentifierFlag]   nullable
 * @property {boolean} [hideDescriptionFlag]   nullable
 * @property {boolean} [hideQuantityFlag]   nullable
 * @property {boolean} [hideExtendedPriceFlag]   nullable
 * @property {CatalogItemReference} [parentCatalogItem]
 * @property {number} [price]  double nullable
 * @property {number} [cost]  double nullable
 * @property {object} [_info]
 */

/**
 * CatalogInventory
 * @typedef {object} CatalogInventory
 * @property {number} [id]  int32
 * @property {CatalogItemReference} [catalogItem]
 * @property {WarehouseReference} [warehouse]
 * @property {WarehouseBinReference} [warehouseBin]
 * @property {number} [onHand]  int32 nullable
 * @property {array} [serialNumbers]
 * @property {object} [_info]
 */

/**
 * MinimumStockByWarehouse
 * @typedef {object} MinimumStockByWarehouse
 * @property {number} [id]  int32
 * @property {WarehouseReference} warehouse
 * @property {number} minimumStock  int32 nullable
 * @property {object} [_info]
 */

/**
 * Category
 * @typedef {object} Category
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {string} [priceLevelXref]  Max length: 10;
 * @property {string} [integrationXref]  Max length: 50;
 * @property {array} [locationIds]
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [addAllLocations]   nullable
 * @property {boolean} [removeAllLocations]   nullable
 * @property {object} [_info]
 */

/**
 * CategoryInfo
 * @typedef {object} CategoryInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * LegacySubCategory
 * @typedef {object} LegacySubCategory
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * LegacySubCategoryInfo
 * @typedef {object} LegacySubCategoryInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * Manufacturer
 * @typedef {object} Manufacturer
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ManufacturerInfo
 * @typedef {object} ManufacturerInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * OnHandSerialNumber
 * @typedef {object} OnHandSerialNumber
 * @property {number} [id]  int32
 * @property {string} [serial]
 * @property {CatalogItemReference} [catalogItem]
 * @property {WarehouseReference} [warehouse]
 * @property {WarehouseBinReference} [warehouseBin]
 * @property {object} [_info]
 */

/**
 * PricingSchedule
 * @typedef {object} PricingSchedule
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {CurrencyReference} [currency]
 * @property {array} [companies]
 * @property {boolean} [setAllCompaniesFlag]   nullable
 * @property {boolean} [removeAllCompaniesFlag]   nullable
 * @property {object} [_info]
 */

/**
 * PricingBreak
 * @typedef {object} PricingBreak
 * @property {number} [id]  int32
 * @property {number} [detailId]  int32 nullable
 * @property {number} [amount]  double nullable
 * @property {number} quantityStart  double nullable
 * @property {number} [quantityEnd]  double nullable
 * @property {boolean} [unlimited]
 * @property {string} priceMethod   nullable
 * @property {object} [_info]
 */

/**
 * PricingDetail
 * @typedef {object} PricingDetail
 * @property {number} [id]  int32
 * @property {CatalogItemReference} [product]
 * @property {ProductCategoryReference} [category]
 * @property {ProductSubCategoryReference} [subCategory]
 * @property {string} startDate  date-time
 * @property {string} [endDate]  date-time
 * @property {boolean} [noEndDate]
 * @property {object} [_info]
 */

/**
 * ProductItem
 * @typedef {object} ProductItem
 * @property {number} [id]  int32
 * @property {CatalogItemReference} [catalogItem]
 * @property {string} [description]  Max length: 2000;
 * @property {number} [sequenceNumber]  double nullable
 * @property {number} [quantity]  double nullable
 * @property {number} [price]  double nullable
 * @property {number} [cost]  double nullable
 * @property {number} [discount]  double nullable
 * @property {number} [agreementAmount]  double nullable
 * @property {string} [priceMethod]   nullable
 * @property {string} billableOption   nullable
 * @property {AgreementReference} [agreement]
 * @property {number} [locationId]  Required On Updates; int32 nullable
 * @property {number} [businessUnitId]  Required On Updates; int32 nullable
 * @property {CompanyReference} [vendor]
 * @property {string} [vendorSku]  Max length: 50;
 * @property {boolean} [taxableFlag]   nullable
 * @property {boolean} [dropshipFlag]   nullable
 * @property {boolean} [specialOrderFlag]   nullable
 * @property {boolean} [phaseProductFlag]   nullable
 * @property {boolean} [cancelledFlag]   nullable
 * @property {number} [quantityCancelled]  double nullable
 * @property {string} [cancelledReason]  Max length: 100;
 * @property {string} [customerDescription]  Max length: 6000; Required On Updates;
 * @property {string} [internalNotes]  Max length: 1000;
 * @property {boolean} [productSuppliedFlag]   nullable
 * @property {number} [subContractorShipToId]  int32 nullable
 * @property {number} [subContractorAmountLimit]  double nullable
 * @property {ProductRecurring} [recurring]
 * @property {SLAReference} [sla]
 * @property {EntityTypeReference} [entityType]
 * @property {TicketReference} [ticket]
 * @property {ProjectReference} [project]
 * @property {ProjectPhaseReference} [phase]
 * @property {SalesOrderReference} [salesOrder]
 * @property {OpportunityReference} [opportunity]
 * @property {InvoiceReference} [invoice]
 * @property {number} [warehouseId]  int32 nullable
 * @property {number} [warehouseBinId]  int32 nullable
 * @property {boolean} [calculatedPriceFlag]   nullable
 * @property {boolean} [calculatedCostFlag]   nullable
 * @property {number} [forecastDetailId]  int32 nullable
 * @property {number} [cancelledBy]  int32 nullable
 * @property {string} [cancelledDate]  date-time
 * @property {string} [warehouse]
 * @property {string} [warehouseBin]
 * @property {string} [purchaseDate]  date-time
 * @property {string} [integrationXRef]
 * @property {number} [listPrice]  double nullable
 * @property {array} [serialNumberIds]
 * @property {CompanyReference} [company]
 * @property {OpportunityStatusReference} [forecastStatus]
 * @property {string} [productClass]   nullable
 * @property {boolean} [needToPurchaseFlag]   nullable
 * @property {number} [needToOrderQuantity]  int32 nullable
 * @property {boolean} [minimumStockFlag]   nullable
 * @property {string} [shipSet]  Max length: 10;
 * @property {number} [calculatedPrice]  double nullable
 * @property {number} [calculatedCost]  double nullable
 * @property {InvoiceGroupingReference} [invoiceGrouping]
 * @property {boolean} [poApprovedFlag]   nullable
 * @property {boolean} [addComponentsFlag]   nullable
 * @property {boolean} [ignorePricingSchedulesFlag]   nullable
 * @property {object} [_info]
 * @property {boolean} [bypassForecastUpdate]   nullable
 * @property {array} [customFields]
 */

/**
 * ProductComponent
 * @typedef {object} ProductComponent
 * @property {number} [id]  int32
 * @property {number} [sequenceNumber]  Required On Updates; int32 nullable
 * @property {number} quantity  double nullable
 * @property {CatalogItemReference} [catalogItem]
 * @property {boolean} [hidePriceFlag]   nullable
 * @property {boolean} [hideItemIdentifierFlag]   nullable
 * @property {boolean} [hideDescriptionFlag]   nullable
 * @property {boolean} [hideQuantityFlag]   nullable
 * @property {boolean} [hideExtendedPriceFlag]   nullable
 * @property {CompanyReference} [vendor]
 * @property {ProductItemReference} [parentProductItem]
 * @property {ProductItemReference} [productItem]
 * @property {number} [price]  double nullable
 * @property {number} [cost]  double nullable
 * @property {object} [_info]
 */

/**
 * ProductPickingShippingDetail
 * @typedef {object} ProductPickingShippingDetail
 * @property {number} [id]  int32
 * @property {number} [pickedQuantity]  int32 nullable
 * @property {number} [shippedQuantity]  int32 nullable
 * @property {WarehouseReference} [warehouse]
 * @property {WarehouseBinReference} [warehouseBin]
 * @property {ShipmentMethodReference} [shipmentMethod]
 * @property {string} [serialNumber]
 * @property {array} [serialNumberIds]
 * @property {string} [trackingNumber]
 * @property {ProductItemReference} [productItem]
 * @property {number} [lineNumber]  int32 nullable
 * @property {number} [quantity]  int32 nullable
 * @property {object} [_info]
 */

/**
 * PurchaseOrder
 * @typedef {object} PurchaseOrder
 * @property {number} [id]  int32
 * @property {number} [businessUnitId]  int32 nullable
 * @property {string} [cancelReason]
 * @property {boolean} [closedFlag] The closed flag can only be updated via updating the purchase order status to a closed/open status.  nullable
 * @property {string} [customerCity]
 * @property {CompanyReference} [customerCompany]
 * @property {ContactReference} [customerContact]
 * @property {CountryReference} [customerCountry]
 * @property {string} [customerExtension]
 * @property {string} [customerName]
 * @property {string} [customerPhone]
 * @property {SiteReference} [customerSite]
 * @property {string} [customerSiteName]
 * @property {string} [customerState]
 * @property {string} [customerStreetLine1]
 * @property {string} [customerStreetLine2]
 * @property {string} [customerZip]
 * @property {string} [dateClosed]  date-time
 * @property {boolean} [dropShipCustomerFlag]   nullable
 * @property {string} [enteredBy]
 * @property {number} [freightCost]  double nullable
 * @property {string} [freightPackingSlip]
 * @property {number} [freightTaxTotal]  double nullable
 * @property {string} [internalNotes]
 * @property {number} [locationId]  int32 nullable
 * @property {string} [poDate]  Required On Updates; date-time
 * @property {string} [poNumber]  Required On Updates; Max length: 50;
 * @property {number} [salesTax]  double nullable
 * @property {string} [shipmentDate]  date-time
 * @property {ShipmentMethodReference} [shipmentMethod]
 * @property {string} [shippingInstructions]
 * @property {PurchaseOrderStatusReference} [status]
 * @property {number} [subTotal]  double nullable
 * @property {TaxCodeReference} [taxCode]
 * @property {boolean} [taxFreightFlag]   nullable
 * @property {boolean} [taxPoFlag]   nullable
 * @property {BillingTermsReference} [terms]
 * @property {number} [total]  double nullable
 * @property {string} [trackingNumber]  Max length: 50;
 * @property {boolean} [updateShipmentInfo] Determines whether or not to update all of the shipment info for each associated line item when new shipment info is passed in  nullable
 * @property {boolean} [updateVendorOrderNumber] Determines whether or not to update vendor order number for each associated line item when new vendor order number is passed in  nullable
 * @property {CompanyReference} [vendorCompany]
 * @property {ContactReference} [vendorContact]
 * @property {string} [vendorInvoiceDate]  date-time
 * @property {string} [vendorInvoiceNumber]  Max length: 50;
 * @property {string} [vendorOrderNumber]  Max length: 50;
 * @property {SiteReference} [vendorSite]
 * @property {WarehouseReference} [warehouse]
 * @property {CurrencyReference} [currency]
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * PurchaseOrderLineItem
 * @typedef {object} PurchaseOrderLineItem
 * @property {number} [id]  int32
 * @property {boolean} [backorderedFlag]   nullable
 * @property {string} [canceledBy]
 * @property {boolean} [canceledFlag]   nullable
 * @property {string} [canceledReason]  Max length: 100;
 * @property {boolean} [closedFlag]   nullable
 * @property {string} [dateCanceled]  date-time
 * @property {string} [dateCanceledUtc]  date-time
 * @property {string} description  Max length: 6000;
 * @property {boolean} [displayInternalNotesFlag]   nullable
 * @property {string} [expectedShipDate]  date-time
 * @property {string} [internalNotes]  Max length: 1000;
 * @property {number} lineNumber  int32 nullable
 * @property {string} [packingSlip]  Max length: 50;
 * @property {IvItemReference} [product]
 * @property {number} [purchaseOrderId]  int32 nullable
 * @property {number} quantity  double nullable
 * @property {number} [receivedQuantity]  int32 nullable
 * @property {string} [serialNumbers]
 * @property {string} [shipDate]  date-time
 * @property {ShipmentMethodReference} [shipmentMethod]
 * @property {number} [tax]  double nullable
 * @property {string} [trackingNumber]  Max length: 50;
 * @property {number} [unitCost]  double nullable
 * @property {UnitOfMeasureReference} [unitOfMeasure]
 * @property {string} [vendorOrderNumber]  Max length: 50;
 * @property {string} [vendorSku]  Max length: 50;
 * @property {WarehouseReference} [warehouse]
 * @property {WarehouseBinReference} [warehouseBin]
 * @property {string} [shipSet]  Max length: 10;
 * @property {string} [dateReceived]  date-time
 * @property {string} [receivedStatus]   nullable
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * BulkResult
 * @typedef {object} BulkResult
 * @property {array} [payload]
 * @property {object} [_info]
 */

/**
 * PurchaseOrderStatus
 * @typedef {object} PurchaseOrderStatus
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [closedFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [defaultClosedFlag]   nullable
 * @property {number} [sortOrder]  int32 nullable
 * @property {PurchaseOrderStatusEmailTemplateReference} [emailTemplate]
 * @property {object} [_info]
 */

/**
 * PurchaseOrderStatusEmailTemplate
 * @typedef {object} PurchaseOrderStatusEmailTemplate
 * @property {number} [id]  int32
 * @property {PurchaseOrderStatusReference} [status]
 * @property {boolean} [useSenderFlag]   nullable
 * @property {string} [firstName]  Max length: 100;
 * @property {string} [lastName]  Max length: 100;
 * @property {string} [emailAddress]  Max length: 100;
 * @property {string} subject  Max length: 200;
 * @property {string} [body]
 * @property {boolean} [copySenderFlag]   nullable
 * @property {object} [_info]
 */

/**
 * PurchaseOrderStatusNotification
 * @typedef {object} PurchaseOrderStatusNotification
 * @property {number} [id]  int32
 * @property {NotificationRecipientReference} [notifyWho]
 * @property {PurchaseOrderStatusReference} [status]
 * @property {MemberReference} [member]
 * @property {string} [email] Purchase Order Status Notification email must be entered if the notify type is "Email Address" Max length: 50;
 * @property {number} [workflowStep]  int32 nullable
 * @property {object} [_info]
 */

/**
 * PurchasingDemand
 * @typedef {object} PurchasingDemand
 * @property {WarehouseReference} [warehouse]
 * @property {CompanyReference} [vendor]
 * @property {array} [products]
 * @property {PurchaseOrder} [purchaseOrder]
 */

/**
 * RmaAction
 * @typedef {object} RmaAction
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * RmaActionInfo
 * @typedef {object} RmaActionInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * RmaDisposition
 * @typedef {object} RmaDisposition
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * RmaDispositionInfo
 * @typedef {object} RmaDispositionInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * RmaStatus
 * @typedef {object} RmaStatus
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {number} [sortOrder]  int32 nullable
 * @property {boolean} [closedFlag]   nullable
 * @property {RmaStatusEmailTemplateReference} [emailTemplate]
 * @property {object} [_info]
 */

/**
 * RmaStatusInfo
 * @typedef {object} RmaStatusInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {number} [sortOrder]  int32 nullable
 * @property {object} [_info]
 */

/**
 * RmaStatusEmailTemplate
 * @typedef {object} RmaStatusEmailTemplate
 * @property {number} [id]  int32
 * @property {RmaStatusReference} [status]
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
 * RmaStatusNotification
 * @typedef {object} RmaStatusNotification
 * @property {number} [id]  int32
 * @property {NotificationRecipientReference} [notifyWho]
 * @property {RmaStatusReference} [status]
 * @property {MemberReference} [member]
 * @property {string} [email] RMA Status Notification sendEmail must be entered if the notify type is "Email Address" Max length: 50;
 * @property {number} [workflowStep]  int32 nullable
 * @property {object} [_info]
 */

/**
 * RmaTag
 * @typedef {object} RmaTag
 * @property {number} [id]  int32
 * @property {TicketReference} [serviceTicket]
 * @property {SalesOrderReference} [salesOrder]
 * @property {InvoiceReference} [invoice]
 * @property {ProjectReference} [project]
 * @property {string} [summary]  Max length: 150;
 * @property {IvItemReference} [product]
 * @property {string} [ivDescription]
 * @property {string} productDescription  Max length: 200;
 * @property {string} [serialNumber]
 * @property {string} [mfgItemID]  Max length: 100;
 * @property {RmaStatusReference} [status]
 * @property {number} [listPrice]  double
 * @property {number} [unitPrice]  double nullable
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {string} [problemDescription]  Max length: 1000;
 * @property {CompanyReference} [returnedCompany]
 * @property {ContactReference} [returnedContact]
 * @property {string} [returnedContactType]
 * @property {string} [returnedContactPhone]
 * @property {string} [returnedContactExtension]
 * @property {string} [returnedContactEmail]
 * @property {string} [returnedContactAddressLine1]  Max length: 50;
 * @property {string} [returnedContactAddressLine2]  Max length: 50;
 * @property {string} [returnedContactCity]  Max length: 50;
 * @property {string} [returnedContactState]  Max length: 50;
 * @property {string} [returnedContactZip]  Max length: 12;
 * @property {CountryReference} [returnedContactCountry]
 * @property {RmaDispositionReference} [rmaDisposition]
 * @property {SiteReference} [returnedSite]
 * @property {CompanyReference} [purchasedCompany]
 * @property {ContactReference} [purchasedContact]
 * @property {string} [purchasedContactType]
 * @property {string} [purchasedContactPhone]
 * @property {string} [purchasedContactExtension]
 * @property {string} [purchasedContactEmail]
 * @property {string} [purchasedContactAddressLine1]  Max length: 50;
 * @property {string} [purchasedContactAddressLine2]  Max length: 50;
 * @property {string} [purchasedContactCity]  Max length: 50;
 * @property {string} [purchasedContactState]  Max length: 50;
 * @property {string} [purchasedContactZip]  Max length: 12;
 * @property {CountryReference} [purchasedContactCountry]
 * @property {string} [purchasedInvoiceNumber]  Max length: 50;
 * @property {string} [purchasedInvoiceDate]  date
 * @property {string} [purchasedOrderNumber]  Max length: 50;
 * @property {RmaActionReference} [purchasedVendorAction]
 * @property {string} [purchasedVendorRmaNumber]  Max length: 50;
 * @property {SiteReference} [purchasedSite]
 * @property {string} [purchasedNotes]  Max length: 1000;
 * @property {CompanyReference} [warrantyCompany]
 * @property {ContactReference} [warrantyContact]
 * @property {string} [warrantyContactType]
 * @property {string} [warrantyContactPhone]
 * @property {string} [warrantyContactEmail]
 * @property {string} [warrantyContactExtension]
 * @property {string} [warrantyContactAddressLine1]  Max length: 50;
 * @property {string} [warrantyContactAddressLine2]  Max length: 50;
 * @property {string} [warrantyContactCity]  Max length: 50;
 * @property {string} [warrantyContactState]  Max length: 50;
 * @property {string} [warrantyContactZip]  Max length: 12;
 * @property {CountryReference} [warrantyContactCountry]
 * @property {SiteReference} [warrantySite]
 * @property {string} [warrantyNotes]  Max length: 1000;
 * @property {CompanyReference} [repairCompany]
 * @property {ContactReference} [repairContact]
 * @property {string} [repairContactType]
 * @property {string} [repairContactPhone]
 * @property {string} [repairContactExtension]
 * @property {string} [repairContactEmail]
 * @property {string} [repairContactAddressLine1]  Max length: 50;
 * @property {string} [repairContactAddressLine2]  Max length: 50;
 * @property {string} [repairContactCity]  Max length: 50;
 * @property {string} [repairContactState]  Max length: 50;
 * @property {string} [repairContactZip]  Max length: 12;
 * @property {CountryReference} [repairContactCountry]
 * @property {string} [repairOrderNumber]  Max length: 50;
 * @property {SiteReference} [repairSite]
 * @property {string} [repairNotes]  Max length: 1000;
 * @property {boolean} [dropShipFlag]   nullable
 * @property {ShipmentMethodReference} [shipMethod]
 * @property {string} [shippingDate]  date
 * @property {string} [shippingTrackingNumber]  Max length: 50;
 * @property {string} [internalNotes]  Max length: 1000;
 * @property {string} [closingNotes]  Max length: 1000;
 * @property {string} [dateClosed]
 * @property {MemberReference} [accountManager]
 * @property {MemberReference} [technicalContact]
 * @property {CurrencyReference} [currency]
 * @property {MemberReference} [closedBy]
 * @property {object} [_info]
 * @property {array} [customFields]
 */

/**
 * ProcurementSetting
 * @typedef {object} ProcurementSetting
 * @property {number} [id]  int32
 * @property {number} startingPurchaseOrderNum  int32
 * @property {string} [purchaseOrderPrefix]  Max length: 5;
 * @property {string} [purchaseOrderSuffix]  Max length: 5;
 * @property {string} [prefixSuffixType]   nullable
 * @property {boolean} [disableCostUpdatesFlag]   nullable
 * @property {boolean} [disableNegativeInventoryFlag]   nullable
 * @property {string} costingMethod   nullable
 * @property {boolean} [autoClosePurchaseOrderFlag]   nullable
 * @property {boolean} [autoClosePurchaseOrderItemFlag]   nullable
 * @property {boolean} [autoApprovePurchaseOrderFlag]   nullable
 * @property {boolean} [taxPurchaseOrderFlag]   nullable
 * @property {boolean} [taxFreightFlag]   nullable
 * @property {boolean} [useVendorTaxCodeFlag]   nullable
 * @property {number} [numDecimalPlaces]  int32 nullable
 * @property {boolean} [disableAutoPickFlag]   nullable
 * @property {boolean} [defaultProductTaxableFlag]   nullable
 * @property {string} [eoriNumber]  Max length: 50;
 * @property {object} [_info]
 */

/**
 * ShipmentMethod
 * @typedef {object} ShipmentMethod
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {string} [trackingUrl]  Max length: 200;
 * @property {object} [_info]
 */

/**
 * ShipmentMethodInfo
 * @typedef {object} ShipmentMethodInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * SubCategory
 * @typedef {object} SubCategory
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {string} [integrationXref]  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {ProductCategoryReference} category
 * @property {object} [_info]
 */

/**
 * SubCategoryInfo
 * @typedef {object} SubCategoryInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {ProductCategoryReference} [category]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ProductType
 * @typedef {object} ProductType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {string} [typeXref]   nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ProductTypeInfo
 * @typedef {object} ProductTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * UnitOfMeasure
 * @typedef {object} UnitOfMeasure
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {string} [uomScheduleXref]  Max length: 31;
 * @property {object} [_info]
 */

/**
 * Conversion
 * @typedef {object} Conversion
 * @property {number} [id]  int32
 * @property {number} [quantity]  double nullable
 * @property {UnitOfMeasureReference} [uomType]
 * @property {UnitOfMeasureReference} [parentUOM]
 * @property {object} [_info]
 */

/**
 * WarehouseBin
 * @typedef {object} WarehouseBin
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {WarehouseReference} [warehouse]
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {number} [minQuantity]  double nullable
 * @property {number} [maxQuantity]  double nullable
 * @property {WarehouseBinReference} [overflowBin]
 * @property {MemberReference} [manager]
 * @property {number} [length]  double nullable
 * @property {number} [width]  double nullable
 * @property {number} [height]  double nullable
 * @property {number} [weight]  double nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {number} [quantityOnHand]  int32 nullable
 * @property {CompanyReference} [company]
 * @property {WarehouseBinReference} [transferBin]
 * @property {object} [_info]
 */

/**
 * WarehouseBinInfo
 * @typedef {object} WarehouseBinInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {WarehouseReference} [warehouse]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * InventoryOnHand
 * @typedef {object} InventoryOnHand
 * @property {number} [id]  int32
 * @property {CatalogItemReference} [catalogItem]
 * @property {WarehouseReference} [warehouse]
 * @property {WarehouseBinReference} [warehouseBin]
 * @property {number} [onHand]  int32 nullable
 * @property {array} [serialNumbers]
 * @property {object} [_info]
 */

/**
 * Warehouse
 * @typedef {object} Warehouse
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {CompanyReference} [company]
 * @property {SystemLocationReference} [location]
 * @property {ContactReference} [contact]
 * @property {SystemDepartmentReference} [department]
 * @property {MemberReference} [manager]
 * @property {SiteReference} [site]
 * @property {string} [locationXref]  Max length: 10;
 * @property {boolean} [locationDefaultFlag]   nullable
 * @property {boolean} [overallDefaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [lockedFlag]   nullable
 * @property {CurrencyReference} [currency]
 * @property {object} [_info]
 */

/**
 * WarehouseInfo
 * @typedef {object} WarehouseInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

export default class Procurement extends Manage {
  constructor(props) {
    super(props)
  }

  /**
   * Get List of ProcurementAdjustment
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProcurementAdjustment[]>}
   */
  getProcurementAdjustments(params = {}) {
    return this.request({
      path: `/procurement/adjustments`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ProcurementAdjustment
   * @param {ProcurementAdjustment} adjustment adjustment
   * @returns {Promise<ProcurementAdjustment>}
   */
  postProcurementAdjustments(adjustment) {
    return this.request({
      path: `/procurement/adjustments`,
      method: 'post',
      data: adjustment,
    })
  }
  /**
   * Get ProcurementAdjustment
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
   * @returns {Promise<ProcurementAdjustment>}
   */
  getProcurementAdjustmentsById(id, params = {}) {
    return this.request({
      path: `/procurement/adjustments/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProcurementAdjustment
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementAdjustmentsById(id) {
    return this.request({
      path: `/procurement/adjustments/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ProcurementAdjustment
   * @param {number} id
   * @param {ProcurementAdjustment} adjustment adjustment
   * @returns {Promise<ProcurementAdjustment>}
   */
  putProcurementAdjustmentsById(id, adjustment) {
    return this.request({
      path: `/procurement/adjustments/${id}`,
      method: 'put',
      data: adjustment,
    })
  }

  /**
   * Patch ProcurementAdjustment
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProcurementAdjustment>}
   */
  patchProcurementAdjustmentsById(id, patchOperations) {
    return this.request({
      path: `/procurement/adjustments/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of AdjustmentDetail
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
   * @returns {Promise<AdjustmentDetail[]>}
   */
  getProcurementAdjustmentsByParentIdDetails(parentId, params = {}) {
    return this.request({
      path: `/procurement/adjustments/${parentId}/details`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AdjustmentDetail
   * @param {number} parentId
   * @param {AdjustmentDetail} adjustmentDetail adjustmentDetail
   * @returns {Promise<AdjustmentDetail>}
   */
  postProcurementAdjustmentsByParentIdDetails(parentId, adjustmentDetail) {
    return this.request({
      path: `/procurement/adjustments/${parentId}/details`,
      method: 'post',
      data: adjustmentDetail,
    })
  }
  /**
   * Get AdjustmentDetail
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
   * @returns {Promise<AdjustmentDetail>}
   */
  getProcurementAdjustmentsByParentIdDetailsById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/adjustments/${parentId}/details/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AdjustmentDetail
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProcurementAdjustmentsByParentIdDetailsById(id, parentId) {
    return this.request({
      path: `/procurement/adjustments/${parentId}/details/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of AdjustmentDetail
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
  getProcurementAdjustmentsByParentIdDetailsCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/adjustments/${parentId}/details/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ProcurementAdjustment
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
  getProcurementAdjustmentsCount(params = {}) {
    return this.request({
      path: `/procurement/adjustments/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AdjustmentType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AdjustmentType[]>}
   */
  getProcurementAdjustmentsTypes(params = {}) {
    return this.request({
      path: `/procurement/adjustments/types`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AdjustmentType
   * @param {AdjustmentType} adjustmentTypes adjustmentTypes
   * @returns {Promise<AdjustmentType>}
   */
  postProcurementAdjustmentsTypes(adjustmentTypes) {
    return this.request({
      path: `/procurement/adjustments/types`,
      method: 'post',
      data: adjustmentTypes,
    })
  }
  /**
   * Get AdjustmentType
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
   * @returns {Promise<AdjustmentType>}
   */
  getProcurementAdjustmentsTypesById(id, params = {}) {
    return this.request({
      path: `/procurement/adjustments/types/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AdjustmentType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementAdjustmentsTypesById(id) {
    return this.request({
      path: `/procurement/adjustments/types/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put AdjustmentType
   * @param {number} id
   * @param {AdjustmentType} adjustmentTypes adjustmentTypes
   * @returns {Promise<AdjustmentType>}
   */
  putProcurementAdjustmentsTypesById(id, adjustmentTypes) {
    return this.request({
      path: `/procurement/adjustments/types/${id}`,
      method: 'put',
      data: adjustmentTypes,
    })
  }

  /**
   * Patch AdjustmentType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AdjustmentType>}
   */
  patchProcurementAdjustmentsTypesById(id, patchOperations) {
    return this.request({
      path: `/procurement/adjustments/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get AdjustmentTypeInfos
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
   * @returns {Promise<AdjustmentTypeInfo>}
   */
  getProcurementAdjustmentsTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/procurement/adjustments/types/${id}/info`,
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
  getProcurementAdjustmentsTypesByIdUsages(id, params = {}) {
    return this.request({
      path: `/procurement/adjustments/types/${id}/usages`,
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
  getProcurementAdjustmentsTypesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/procurement/adjustments/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Usage
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
  getProcurementAdjustmentsTypesCount(params = {}) {
    return this.request({
      path: `/procurement/adjustments/types/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AdjustmentTypeInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AdjustmentTypeInfo[]>}
   */
  getProcurementAdjustmentsTypesInfo(params = {}) {
    return this.request({
      path: `/procurement/adjustments/types/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of AdjustmentTypeInfos
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
  getProcurementAdjustmentsTypesInfoCount(params = {}) {
    return this.request({
      path: `/procurement/adjustments/types/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CatalogItem
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CatalogItem[]>}
   */
  getProcurementCatalog(params = {}) {
    return this.request({
      path: `/procurement/catalog`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CatalogItem
   * @param {CatalogItem} catalogItem catalogItem
   * @returns {Promise<CatalogItem>}
   */
  postProcurementCatalog(catalogItem) {
    return this.request({
      path: `/procurement/catalog`,
      method: 'post',
      data: catalogItem,
    })
  }
  /**
   * Get Count of CatalogItem
   * @param {string} catalogItemIdentifier
   * @param {number} warehouseBinId
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
  getProcurementCatalogByCatalogItemIdentifierQuantityOnHand(
    catalogItemIdentifier,
    warehouseBinId,
    params = {},
  ) {
    return this.request({
      path: `/procurement/catalog/${catalogItemIdentifier}/quantityOnHand`,
      method: 'get',
      params,
    })
  }
  /**
   * Get CatalogItem
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
   * @returns {Promise<CatalogItem>}
   */
  getProcurementCatalogById(id, params = {}) {
    return this.request({
      path: `/procurement/catalog/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CatalogItem
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementCatalogById(id) {
    return this.request({
      path: `/procurement/catalog/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put CatalogItem
   * @param {number} id
   * @param {CatalogItem} catalogItem catalogItem
   * @returns {Promise<CatalogItem>}
   */
  putProcurementCatalogById(id, catalogItem) {
    return this.request({
      path: `/procurement/catalog/${id}`,
      method: 'put',
      data: catalogItem,
    })
  }

  /**
   * Patch CatalogItem
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CatalogItem>}
   */
  patchProcurementCatalogById(id, patchOperations) {
    return this.request({
      path: `/procurement/catalog/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get CatalogItemInfo
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
   * @returns {Promise<CatalogItemInfo>}
   */
  getProcurementCatalogByIdInfo(id, params = {}) {
    return this.request({
      path: `/procurement/catalog/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Post CatalogPricing
   * @param {number} id
   * @param {CatalogPricing} catalogPricing catalogPricing
   * @returns {Promise<CatalogPricing>}
   */
  postProcurementCatalogByIdPricing(id, catalogPricing) {
    return this.request({
      path: `/procurement/catalog/${id}/pricing`,
      method: 'post',
      data: catalogPricing,
    })
  }
  /**
   * Get List of CatalogComponent
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
   * @returns {Promise<CatalogComponent[]>}
   */
  getProcurementCatalogByParentIdComponents(parentId, params = {}) {
    return this.request({
      path: `/procurement/catalog/${parentId}/components`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CatalogComponent
   * @param {number} parentId
   * @param {CatalogComponent} catalogComponent catalogComponent
   * @returns {Promise<CatalogComponent>}
   */
  postProcurementCatalogByParentIdComponents(parentId, catalogComponent) {
    return this.request({
      path: `/procurement/catalog/${parentId}/components`,
      method: 'post',
      data: catalogComponent,
    })
  }
  /**
   * Get CatalogComponent
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
   * @returns {Promise<CatalogComponent>}
   */
  getProcurementCatalogByParentIdComponentsById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/catalog/${parentId}/components/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CatalogComponent
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProcurementCatalogByParentIdComponentsById(id, parentId) {
    return this.request({
      path: `/procurement/catalog/${parentId}/components/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put CatalogComponent
   * @param {number} id
   * @param {number} parentId
   * @param {CatalogComponent} catalogComponent catalogComponent
   * @returns {Promise<CatalogComponent>}
   */
  putProcurementCatalogByParentIdComponentsById(id, parentId, catalogComponent) {
    return this.request({
      path: `/procurement/catalog/${parentId}/components/{id}`,
      method: 'put',
      data: catalogComponent,
    })
  }

  /**
   * Patch CatalogComponent
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CatalogComponent>}
   */
  patchProcurementCatalogByParentIdComponentsById(id, parentId, patchOperations) {
    return this.request({
      path: `/procurement/catalog/${parentId}/components/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of CatalogComponent
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
  getProcurementCatalogByParentIdComponentsCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/catalog/${parentId}/components/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CatalogInventory
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
   * @returns {Promise<CatalogInventory[]>}
   */
  getProcurementCatalogByParentIdInventory(parentId, params = {}) {
    return this.request({
      path: `/procurement/catalog/${parentId}/inventory`,
      method: 'get',
      params,
    })
  }
  /**
   * Get CatalogInventory
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
   * @returns {Promise<CatalogInventory>}
   */
  getProcurementCatalogByParentIdInventoryById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/catalog/${parentId}/inventory/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CatalogInventory
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
  getProcurementCatalogByParentIdInventoryCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/catalog/${parentId}/inventory/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MinimumStockByWarehouse
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
   * @returns {Promise<MinimumStockByWarehouse[]>}
   */
  getProcurementCatalogByParentIdMinimumStockByWarehouse(parentId, params = {}) {
    return this.request({
      path: `/procurement/catalog/${parentId}/minimumStockByWarehouse`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MinimumStockByWarehouse
   * @param {number} parentId
   * @param {MinimumStockByWarehouse} minimumStockByWarehouse minimumStockByWarehouse
   * @returns {Promise<MinimumStockByWarehouse>}
   */
  postProcurementCatalogByParentIdMinimumStockByWarehouse(parentId, minimumStockByWarehouse) {
    return this.request({
      path: `/procurement/catalog/${parentId}/minimumStockByWarehouse`,
      method: 'post',
      data: minimumStockByWarehouse,
    })
  }
  /**
   * Get MinimumStockByWarehouse
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
   * @returns {Promise<MinimumStockByWarehouse>}
   */
  getProcurementCatalogByParentIdMinimumStockByWarehouseById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/catalog/${parentId}/minimumStockByWarehouse/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MinimumStockByWarehouse
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProcurementCatalogByParentIdMinimumStockByWarehouseById(id, parentId) {
    return this.request({
      path: `/procurement/catalog/${parentId}/minimumStockByWarehouse/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put MinimumStockByWarehouse
   * @param {number} id
   * @param {number} parentId
   * @param {MinimumStockByWarehouse} minimumStockByWarehouse minimumStockByWarehouse
   * @returns {Promise<MinimumStockByWarehouse>}
   */
  putProcurementCatalogByParentIdMinimumStockByWarehouseById(
    id,
    parentId,
    minimumStockByWarehouse,
  ) {
    return this.request({
      path: `/procurement/catalog/${parentId}/minimumStockByWarehouse/{id}`,
      method: 'put',
      data: minimumStockByWarehouse,
    })
  }

  /**
   * Patch MinimumStockByWarehouse
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MinimumStockByWarehouse>}
   */
  patchProcurementCatalogByParentIdMinimumStockByWarehouseById(id, parentId, patchOperations) {
    return this.request({
      path: `/procurement/catalog/${parentId}/minimumStockByWarehouse/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of MinimumStockByWarehouse
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
  getProcurementCatalogByParentIdMinimumStockByWarehouseCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/catalog/${parentId}/minimumStockByWarehouse/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CatalogItem
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
  getProcurementCatalogCount(params = {}) {
    return this.request({
      path: `/procurement/catalog/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CatalogItemInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CatalogItemInfo[]>}
   */
  getProcurementCatalogInfo(params = {}) {
    return this.request({
      path: `/procurement/catalog/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CatalogItemInfo
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
  getProcurementCatalogInfoCount(params = {}) {
    return this.request({
      path: `/procurement/catalog/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Category
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Category[]>}
   */
  getProcurementCategories(params = {}) {
    return this.request({
      path: `/procurement/categories`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Category
   * @param {Category} category category
   * @returns {Promise<Category>}
   */
  postProcurementCategories(category) {
    return this.request({
      path: `/procurement/categories`,
      method: 'post',
      data: category,
    })
  }
  /**
   * Get Category
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
   * @returns {Promise<Category>}
   */
  getProcurementCategoriesById(id, params = {}) {
    return this.request({
      path: `/procurement/categories/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Category
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementCategoriesById(id) {
    return this.request({
      path: `/procurement/categories/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Category
   * @param {number} id
   * @param {Category} category category
   * @returns {Promise<Category>}
   */
  putProcurementCategoriesById(id, category) {
    return this.request({
      path: `/procurement/categories/${id}`,
      method: 'put',
      data: category,
    })
  }

  /**
   * Patch Category
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Category>}
   */
  patchProcurementCategoriesById(id, patchOperations) {
    return this.request({
      path: `/procurement/categories/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get CategoryInfo
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
   * @returns {Promise<CategoryInfo>}
   */
  getProcurementCategoriesByIdInfo(id, params = {}) {
    return this.request({
      path: `/procurement/categories/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of LegacySubCategory
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
   * @returns {Promise<LegacySubCategory[]>}
   */
  getProcurementCategoriesByParentIdSubcategories(parentId, params = {}) {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/`,
      method: 'get',
      params,
    })
  }

  /**
   * Post LegacySubCategory
   * @param {number} parentId
   * @param {LegacySubCategory} subCategory subCategory
   * @returns {Promise<LegacySubCategory>}
   */
  postProcurementCategoriesByParentIdSubcategories(parentId, subCategory) {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/`,
      method: 'post',
      data: subCategory,
    })
  }
  /**
   * Get LegacySubCategory
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
   * @returns {Promise<LegacySubCategory>}
   */
  getProcurementCategoriesByParentIdSubcategoriesById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete LegacySubCategory
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProcurementCategoriesByParentIdSubcategoriesById(id, parentId) {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put LegacySubCategory
   * @param {number} id
   * @param {number} parentId
   * @param {LegacySubCategory} subCategory subCategory
   * @returns {Promise<LegacySubCategory>}
   */
  putProcurementCategoriesByParentIdSubcategoriesById(id, parentId, subCategory) {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/{id}`,
      method: 'put',
      data: subCategory,
    })
  }

  /**
   * Patch LegacySubCategory
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<LegacySubCategory>}
   */
  patchProcurementCategoriesByParentIdSubcategoriesById(id, parentId, patchOperations) {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get LegacySubCategoryInfos
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
   * @returns {Promise<LegacySubCategoryInfo>}
   */
  getProcurementCategoriesByParentIdSubcategoriesByIdInfo(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/{id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of LegacySubCategory
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
  getProcurementCategoriesByParentIdSubcategoriesCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of LegacySubCategoryInfos
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
   * @returns {Promise<LegacySubCategoryInfo[]>}
   */
  getProcurementCategoriesByParentIdSubcategoriesInfo(parentId, params = {}) {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of LegacySubCategoryInfos
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
  getProcurementCategoriesByParentIdSubcategoriesInfoCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/categories/${parentId}/subcategories/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Category
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
  getProcurementCategoriesCount(params = {}) {
    return this.request({
      path: `/procurement/categories/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CategoryInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CategoryInfo[]>}
   */
  getProcurementCategoriesInfo(params = {}) {
    return this.request({
      path: `/procurement/categories/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CategoryInfo
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
  getProcurementCategoriesInfoCount(params = {}) {
    return this.request({
      path: `/procurement/categories/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Manufacturer
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Manufacturer[]>}
   */
  getProcurementManufacturers(params = {}) {
    return this.request({
      path: `/procurement/manufacturers`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Manufacturer
   * @param {Manufacturer} manufacturer manufacturer
   * @returns {Promise<Manufacturer>}
   */
  postProcurementManufacturers(manufacturer) {
    return this.request({
      path: `/procurement/manufacturers`,
      method: 'post',
      data: manufacturer,
    })
  }
  /**
   * Get Manufacturer
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
   * @returns {Promise<Manufacturer>}
   */
  getProcurementManufacturersById(id, params = {}) {
    return this.request({
      path: `/procurement/manufacturers/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Manufacturer
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementManufacturersById(id) {
    return this.request({
      path: `/procurement/manufacturers/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Manufacturer
   * @param {number} id
   * @param {Manufacturer} manufacturer manufacturer
   * @returns {Promise<Manufacturer>}
   */
  putProcurementManufacturersById(id, manufacturer) {
    return this.request({
      path: `/procurement/manufacturers/${id}`,
      method: 'put',
      data: manufacturer,
    })
  }

  /**
   * Patch Manufacturer
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Manufacturer>}
   */
  patchProcurementManufacturersById(id, patchOperations) {
    return this.request({
      path: `/procurement/manufacturers/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ManufacturerInfo
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
   * @returns {Promise<ManufacturerInfo>}
   */
  getProcurementManufacturersByIdInfo(id, params = {}) {
    return this.request({
      path: `/procurement/manufacturers/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Manufacturer
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
  getProcurementManufacturersCount(params = {}) {
    return this.request({
      path: `/procurement/manufacturers/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ManufacturerInfos
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
  getProcurementManufacturersCountInfo(params = {}) {
    return this.request({
      path: `/procurement/manufacturers/count/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManufacturerInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ManufacturerInfo[]>}
   */
  getProcurementManufacturersInfo(params = {}) {
    return this.request({
      path: `/procurement/manufacturers/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OnHandSerialNumber
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<OnHandSerialNumber[]>}
   */
  getProcurementOnhandserialnumbers(params = {}) {
    return this.request({
      path: `/procurement/onhandserialnumbers`,
      method: 'get',
      params,
    })
  }
  /**
   * Get OnHandSerialNumber
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
   * @returns {Promise<OnHandSerialNumber>}
   */
  getProcurementOnhandserialnumbersById(id, params = {}) {
    return this.request({
      path: `/procurement/onhandserialnumbers/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of OnHandSerialNumber
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
  getProcurementOnhandserialnumbersCount(params = {}) {
    return this.request({
      path: `/procurement/onhandserialnumbers/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PricingSchedule
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PricingSchedule[]>}
   */
  getProcurementPricingschedules(params = {}) {
    return this.request({
      path: `/procurement/pricingschedules`,
      method: 'get',
      params,
    })
  }

  /**
   * Post PricingSchedule
   * @param {PricingSchedule} pricingSchedule pricingSchedule
   * @returns {Promise<PricingSchedule>}
   */
  postProcurementPricingschedules(pricingSchedule) {
    return this.request({
      path: `/procurement/pricingschedules`,
      method: 'post',
      data: pricingSchedule,
    })
  }
  /**
   * Get List of PricingBreak
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
   * @returns {Promise<PricingBreak[]>}
   */
  getProcurementPricingschedulesByGrandparentIdDetailsByParentIdBreaks(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/procurement/pricingschedules/${grandparentId}/details/{parentId}/breaks`,
      method: 'get',
      params,
    })
  }

  /**
   * Post PricingBreak
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PricingBreak} pricingBreak pricingBreak
   * @returns {Promise<PricingBreak>}
   */
  postProcurementPricingschedulesByGrandparentIdDetailsByParentIdBreaks(
    parentId,
    grandparentId,
    pricingBreak,
  ) {
    return this.request({
      path: `/procurement/pricingschedules/${grandparentId}/details/{parentId}/breaks`,
      method: 'post',
      data: pricingBreak,
    })
  }
  /**
   * Get PricingBreak
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
   * @returns {Promise<PricingBreak>}
   */
  getProcurementPricingschedulesByGrandparentIdDetailsByParentIdBreaksById(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/procurement/pricingschedules/${grandparentId}/details/{parentId}/breaks/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete PricingBreak
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @returns {Promise<NoContent>}
   */
  deleteProcurementPricingschedulesByGrandparentIdDetailsByParentIdBreaksById(
    id,
    parentId,
    grandparentId,
  ) {
    return this.request({
      path: `/procurement/pricingschedules/${grandparentId}/details/{parentId}/breaks/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put PricingBreak
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PricingBreak} pricingBreak pricingBreak
   * @returns {Promise<PricingBreak>}
   */
  putProcurementPricingschedulesByGrandparentIdDetailsByParentIdBreaksById(
    id,
    parentId,
    grandparentId,
    pricingBreak,
  ) {
    return this.request({
      path: `/procurement/pricingschedules/${grandparentId}/details/{parentId}/breaks/{id}`,
      method: 'put',
      data: pricingBreak,
    })
  }

  /**
   * Patch PricingBreak
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PricingBreak>}
   */
  patchProcurementPricingschedulesByGrandparentIdDetailsByParentIdBreaksById(
    id,
    parentId,
    grandparentId,
    patchOperations,
  ) {
    return this.request({
      path: `/procurement/pricingschedules/${grandparentId}/details/{parentId}/breaks/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of PricingBreak
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
  getProcurementPricingschedulesByGrandparentIdDetailsByParentIdBreaksCount(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/procurement/pricingschedules/${grandparentId}/details/{parentId}/breaks/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get PricingSchedule
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
   * @returns {Promise<PricingSchedule>}
   */
  getProcurementPricingschedulesById(id, params = {}) {
    return this.request({
      path: `/procurement/pricingschedules/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete PricingSchedule
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementPricingschedulesById(id) {
    return this.request({
      path: `/procurement/pricingschedules/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put PricingSchedule
   * @param {number} id
   * @param {PricingSchedule} pricingSchedule pricingSchedule
   * @returns {Promise<PricingSchedule>}
   */
  putProcurementPricingschedulesById(id, pricingSchedule) {
    return this.request({
      path: `/procurement/pricingschedules/${id}`,
      method: 'put',
      data: pricingSchedule,
    })
  }

  /**
   * Patch PricingSchedule
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PricingSchedule>}
   */
  patchProcurementPricingschedulesById(id, patchOperations) {
    return this.request({
      path: `/procurement/pricingschedules/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of PricingDetail
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
   * @returns {Promise<PricingDetail[]>}
   */
  getProcurementPricingschedulesByParentIdDetails(parentId, params = {}) {
    return this.request({
      path: `/procurement/pricingschedules/${parentId}/details`,
      method: 'get',
      params,
    })
  }

  /**
   * Post PricingDetail
   * @param {number} parentId
   * @param {PricingDetail} pricingDetail pricingDetail
   * @returns {Promise<PricingDetail>}
   */
  postProcurementPricingschedulesByParentIdDetails(parentId, pricingDetail) {
    return this.request({
      path: `/procurement/pricingschedules/${parentId}/details`,
      method: 'post',
      data: pricingDetail,
    })
  }
  /**
   * Get PricingDetail
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
   * @returns {Promise<PricingDetail>}
   */
  getProcurementPricingschedulesByParentIdDetailsById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/pricingschedules/${parentId}/details/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete PricingDetail
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProcurementPricingschedulesByParentIdDetailsById(id, parentId) {
    return this.request({
      path: `/procurement/pricingschedules/${parentId}/details/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put PricingDetail
   * @param {number} id
   * @param {number} parentId
   * @param {PricingDetail} pricingDetail pricingDetail
   * @returns {Promise<PricingDetail>}
   */
  putProcurementPricingschedulesByParentIdDetailsById(id, parentId, pricingDetail) {
    return this.request({
      path: `/procurement/pricingschedules/${parentId}/details/{id}`,
      method: 'put',
      data: pricingDetail,
    })
  }

  /**
   * Patch PricingDetail
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PricingDetail>}
   */
  patchProcurementPricingschedulesByParentIdDetailsById(id, parentId, patchOperations) {
    return this.request({
      path: `/procurement/pricingschedules/${parentId}/details/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of PricingDetail
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
  getProcurementPricingschedulesByParentIdDetailsCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/pricingschedules/${parentId}/details/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of PricingSchedule
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
  getProcurementPricingschedulesCount(params = {}) {
    return this.request({
      path: `/procurement/pricingschedules/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProductItem
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProductItem[]>}
   */
  getProcurementProducts(params = {}) {
    return this.request({
      path: `/procurement/products`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ProductItem
   * @param {ProductItem} productItem productItem
   * @returns {Promise<ProductItem>}
   */
  postProcurementProducts(productItem) {
    return this.request({
      path: `/procurement/products`,
      method: 'post',
      data: productItem,
    })
  }
  /**
   * Get ProductItem
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
   * @returns {Promise<ProductItem>}
   */
  getProcurementProductsById(id, params = {}) {
    return this.request({
      path: `/procurement/products/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProductItem
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementProductsById(id) {
    return this.request({
      path: `/procurement/products/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ProductItem
   * @param {number} id
   * @param {ProductItem} productItem productItem
   * @returns {Promise<ProductItem>}
   */
  putProcurementProductsById(id, productItem) {
    return this.request({
      path: `/procurement/products/${id}`,
      method: 'put',
      data: productItem,
    })
  }

  /**
   * Patch ProductItem
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProductItem>}
   */
  patchProcurementProductsById(id, patchOperations) {
    return this.request({
      path: `/procurement/products/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post ProductDetach
   * @param {number} id
   * @param {ProductDetach} detach detach
   * @returns {Promise<NoContent>}
   */
  postProcurementProductsByIdDetach(id, detach) {
    return this.request({
      path: `/procurement/products/${id}/detach`,
      method: 'post',
      data: detach,
    })
  }
  /**
   * Get List of ProductComponent
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
   * @returns {Promise<ProductComponent[]>}
   */
  getProcurementProductsByParentIdComponents(parentId, params = {}) {
    return this.request({
      path: `/procurement/products/${parentId}/components`,
      method: 'get',
      params,
    })
  }

  /**
   * Post List of ProductComponent
   * @param {number} parentId
   * @param {ProductComponent} productComponent productComponent
   * @returns {Promise<ProductComponent[]>}
   */
  postProcurementProductsByParentIdComponents(parentId, productComponent) {
    return this.request({
      path: `/procurement/products/${parentId}/components`,
      method: 'post',
      data: productComponent,
    })
  }
  /**
   * Get List of ProductComponent
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
   * @returns {Promise<ProductComponent[]>}
   */
  getProcurementProductsByParentIdComponentsById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/products/${parentId}/components/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProductComponent
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProcurementProductsByParentIdComponentsById(id, parentId) {
    return this.request({
      path: `/procurement/products/${parentId}/components/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put List of ProductComponent
   * @param {number} id
   * @param {number} parentId
   * @param {ProductComponent} productComponent productComponent
   * @returns {Promise<ProductComponent[]>}
   */
  putProcurementProductsByParentIdComponentsById(id, parentId, productComponent) {
    return this.request({
      path: `/procurement/products/${parentId}/components/{id}`,
      method: 'put',
      data: productComponent,
    })
  }

  /**
   * Patch List of ProductComponent
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProductComponent[]>}
   */
  patchProcurementProductsByParentIdComponentsById(id, parentId, patchOperations) {
    return this.request({
      path: `/procurement/products/${parentId}/components/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ProductComponent
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
  getProcurementProductsByParentIdComponentsCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/products/${parentId}/components/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProductPickingShippingDetail
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
   * @returns {Promise<ProductPickingShippingDetail[]>}
   */
  getProcurementProductsByParentIdPickingShippingDetails(parentId, params = {}) {
    return this.request({
      path: `/procurement/products/${parentId}/pickingShippingDetails`,
      method: 'get',
      params,
    })
  }

  /**
   * Post List of ProductPickingShippingDetail
   * @param {number} parentId
   * @param {ProductPickingShippingDetail} productPickingShippingDetails productPickingShippingDetails
   * @returns {Promise<ProductPickingShippingDetail[]>}
   */
  postProcurementProductsByParentIdPickingShippingDetails(parentId, productPickingShippingDetails) {
    return this.request({
      path: `/procurement/products/${parentId}/pickingShippingDetails`,
      method: 'post',
      data: productPickingShippingDetails,
    })
  }
  /**
   * Get List of ProductPickingShippingDetail
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
   * @returns {Promise<ProductPickingShippingDetail[]>}
   */
  getProcurementProductsByParentIdPickingShippingDetailsById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/products/${parentId}/pickingShippingDetails/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProductPickingShippingDetail
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProcurementProductsByParentIdPickingShippingDetailsById(id, parentId) {
    return this.request({
      path: `/procurement/products/${parentId}/pickingShippingDetails/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put List of ProductPickingShippingDetail
   * @param {number} id
   * @param {number} parentId
   * @param {ProductPickingShippingDetail} productPickingShippingDetails productPickingShippingDetails
   * @returns {Promise<ProductPickingShippingDetail[]>}
   */
  putProcurementProductsByParentIdPickingShippingDetailsById(
    id,
    parentId,
    productPickingShippingDetails,
  ) {
    return this.request({
      path: `/procurement/products/${parentId}/pickingShippingDetails/{id}`,
      method: 'put',
      data: productPickingShippingDetails,
    })
  }

  /**
   * Patch List of ProductPickingShippingDetail
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProductPickingShippingDetail[]>}
   */
  patchProcurementProductsByParentIdPickingShippingDetailsById(id, parentId, patchOperations) {
    return this.request({
      path: `/procurement/products/${parentId}/pickingShippingDetails/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ProductPickingShippingDetail
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
  getProcurementProductsByParentIdPickingShippingDetailsCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/products/${parentId}/pickingShippingDetails/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ProductItem
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
  getProcurementProductsCount(params = {}) {
    return this.request({
      path: `/procurement/products/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PurchaseOrder
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PurchaseOrder[]>}
   */
  getProcurementPurchaseorders(params = {}) {
    return this.request({
      path: `/procurement/purchaseorders`,
      method: 'get',
      params,
    })
  }

  /**
   * Post PurchaseOrder
   * @param {PurchaseOrder} purchaseOrder purchaseOrder
   * @returns {Promise<PurchaseOrder>}
   */
  postProcurementPurchaseorders(purchaseOrder) {
    return this.request({
      path: `/procurement/purchaseorders`,
      method: 'post',
      data: purchaseOrder,
    })
  }
  /**
   * Get PurchaseOrder
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
   * @returns {Promise<PurchaseOrder>}
   */
  getProcurementPurchaseordersById(id, params = {}) {
    return this.request({
      path: `/procurement/purchaseorders/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete PurchaseOrder
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementPurchaseordersById(id) {
    return this.request({
      path: `/procurement/purchaseorders/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put PurchaseOrder
   * @param {number} id
   * @param {PurchaseOrder} purchaseOrder purchaseOrder
   * @returns {Promise<PurchaseOrder>}
   */
  putProcurementPurchaseordersById(id, purchaseOrder) {
    return this.request({
      path: `/procurement/purchaseorders/${id}`,
      method: 'put',
      data: purchaseOrder,
    })
  }

  /**
   * Patch PurchaseOrder
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PurchaseOrder>}
   */
  patchProcurementPurchaseordersById(id, patchOperations) {
    return this.request({
      path: `/procurement/purchaseorders/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of PurchaseOrderLineItem
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
   * @returns {Promise<PurchaseOrderLineItem[]>}
   */
  getProcurementPurchaseordersByParentIdLineitems(parentId, params = {}) {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems`,
      method: 'get',
      params,
    })
  }

  /**
   * Post PurchaseOrderLineItem
   * @param {number} parentId
   * @param {PurchaseOrderLineItem} purchaseOrderLineItem purchaseOrderLineItem
   * @returns {Promise<PurchaseOrderLineItem>}
   */
  postProcurementPurchaseordersByParentIdLineitems(parentId, purchaseOrderLineItem) {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems`,
      method: 'post',
      data: purchaseOrderLineItem,
    })
  }
  /**
   * Get PurchaseOrderLineItem
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
   * @returns {Promise<PurchaseOrderLineItem>}
   */
  getProcurementPurchaseordersByParentIdLineitemsById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete PurchaseOrderLineItem
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProcurementPurchaseordersByParentIdLineitemsById(id, parentId) {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put PurchaseOrderLineItem
   * @param {number} id
   * @param {number} parentId
   * @param {PurchaseOrderLineItem} purchaseOrderLineItem purchaseOrderLineItem
   * @returns {Promise<PurchaseOrderLineItem>}
   */
  putProcurementPurchaseordersByParentIdLineitemsById(id, parentId, purchaseOrderLineItem) {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/{id}`,
      method: 'put',
      data: purchaseOrderLineItem,
    })
  }

  /**
   * Patch PurchaseOrderLineItem
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PurchaseOrderLineItem>}
   */
  patchProcurementPurchaseordersByParentIdLineitemsById(id, parentId, patchOperations) {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post BulkResult
   * @param {number} parentId
   * @param {PurchaseOrderLineItem[]} purchaseOrderLineItems List of PurchaseOrderLineItem
   * @returns {Promise<BulkResult>}
   */
  postProcurementPurchaseordersByParentIdLineitemsBulk(parentId, purchaseOrderLineItems) {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/bulk`,
      method: 'post',
      data: purchaseOrderLineItems,
    })
  }

  /**
   * Delete BulkResult
   * @param {number} parentId
   * @param {IdCollection} purchaseOrderLineItems purchaseOrderLineItems
   * @returns {Promise<BulkResult>}
   */
  deleteProcurementPurchaseordersByParentIdLineitemsBulk(parentId, purchaseOrderLineItems) {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/bulk`,
      method: 'delete',
      data: purchaseOrderLineItems,
    })
  }

  /**
   * Put BulkResult
   * @param {number} parentId
   * @param {PurchaseOrderLineItem[]} purchaseOrderLineItems List of PurchaseOrderLineItem
   * @returns {Promise<BulkResult>}
   */
  putProcurementPurchaseordersByParentIdLineitemsBulk(parentId, purchaseOrderLineItems) {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/bulk`,
      method: 'put',
      data: purchaseOrderLineItems,
    })
  }
  /**
   * Get Count of PurchaseOrderLineItem
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
  getProcurementPurchaseordersByParentIdLineitemsCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/purchaseorders/${parentId}/lineitems/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of PurchaseOrder
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
  getProcurementPurchaseordersCount(params = {}) {
    return this.request({
      path: `/procurement/purchaseorders/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PurchaseOrderStatus
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PurchaseOrderStatus[]>}
   */
  getProcurementPurchaseorderstatuses(params = {}) {
    return this.request({
      path: `/procurement/purchaseorderstatuses`,
      method: 'get',
      params,
    })
  }

  /**
   * Post PurchaseOrderStatus
   * @param {PurchaseOrderStatus} poStatus poStatus
   * @returns {Promise<PurchaseOrderStatus>}
   */
  postProcurementPurchaseorderstatuses(poStatus) {
    return this.request({
      path: `/procurement/purchaseorderstatuses`,
      method: 'post',
      data: poStatus,
    })
  }
  /**
   * Get PurchaseOrderStatus
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
   * @returns {Promise<PurchaseOrderStatus>}
   */
  getProcurementPurchaseorderstatusesById(id, params = {}) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete PurchaseOrderStatus
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementPurchaseorderstatusesById(id) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${id}`,
      method: 'delete',
    })
  }

  /**
   * Patch PurchaseOrderStatus
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PurchaseOrderStatus>}
   */
  patchProcurementPurchaseorderstatusesById(id, patchOperations) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  /**
   * Put PurchaseOrderStatus
   * @param {number} id
   * @param {PurchaseOrderStatus} purchaseOrderStatus purchaseOrderStatus
   * @returns {Promise<PurchaseOrderStatus>}
   */
  putProcurementPurchaseorderstatusesById(id, purchaseOrderStatus) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${id}`,
      method: 'put',
      data: purchaseOrderStatus,
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
  getProcurementPurchaseorderstatusesByIdUsages(id, params = {}) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${id}/usages`,
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
  getProcurementPurchaseorderstatusesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PurchaseOrderStatusEmailTemplate
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
   * @returns {Promise<PurchaseOrderStatusEmailTemplate[]>}
   */
  getProcurementPurchaseorderstatusesByParentIdEmailtemplates(parentId, params = {}) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/emailtemplates/`,
      method: 'get',
      params,
    })
  }

  /**
   * Post PurchaseOrderStatusEmailTemplate
   * @param {number} parentId
   * @param {PurchaseOrderStatusEmailTemplate} purchaseOrderStatusEmailTemplate purchaseOrderStatusEmailTemplate
   * @returns {Promise<PurchaseOrderStatusEmailTemplate>}
   */
  postProcurementPurchaseorderstatusesByParentIdEmailtemplates(
    parentId,
    purchaseOrderStatusEmailTemplate,
  ) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/emailtemplates/`,
      method: 'post',
      data: purchaseOrderStatusEmailTemplate,
    })
  }
  /**
   * Get PurchaseOrderStatusEmailTemplate
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
   * @returns {Promise<PurchaseOrderStatusEmailTemplate>}
   */
  getProcurementPurchaseorderstatusesByParentIdEmailtemplatesById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/emailtemplates/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete PurchaseOrderStatusEmailTemplate
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProcurementPurchaseorderstatusesByParentIdEmailtemplatesById(id, parentId) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/emailtemplates/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put PurchaseOrderStatusEmailTemplate
   * @param {number} id
   * @param {number} parentId
   * @param {PurchaseOrderStatusEmailTemplate} purchaseOrderStatusEmailTemplate purchaseOrderStatusEmailTemplate
   * @returns {Promise<PurchaseOrderStatusEmailTemplate>}
   */
  putProcurementPurchaseorderstatusesByParentIdEmailtemplatesById(
    id,
    parentId,
    purchaseOrderStatusEmailTemplate,
  ) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/emailtemplates/{id}`,
      method: 'put',
      data: purchaseOrderStatusEmailTemplate,
    })
  }

  /**
   * Patch PurchaseOrderStatusEmailTemplate
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PurchaseOrderStatusEmailTemplate>}
   */
  patchProcurementPurchaseorderstatusesByParentIdEmailtemplatesById(id, parentId, patchOperations) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/emailtemplates/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of PurchaseOrderStatusEmailTemplate
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
  getProcurementPurchaseorderstatusesByParentIdEmailtemplatesCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/emailtemplates/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PurchaseOrderStatusNotification
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
   * @returns {Promise<PurchaseOrderStatusNotification[]>}
   */
  getProcurementPurchaseorderstatusesByParentIdNotifications(parentId, params = {}) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/notifications`,
      method: 'get',
      params,
    })
  }

  /**
   * Post PurchaseOrderStatusNotification
   * @param {number} parentId
   * @param {PurchaseOrderStatusNotification} purchaseOrderStatusNotification purchaseOrderStatusNotification
   * @returns {Promise<PurchaseOrderStatusNotification>}
   */
  postProcurementPurchaseorderstatusesByParentIdNotifications(
    parentId,
    purchaseOrderStatusNotification,
  ) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/notifications`,
      method: 'post',
      data: purchaseOrderStatusNotification,
    })
  }
  /**
   * Get PurchaseOrderStatusNotification
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
   * @returns {Promise<PurchaseOrderStatusNotification>}
   */
  getProcurementPurchaseorderstatusesByParentIdNotificationsById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/notifications/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete PurchaseOrderStatusNotification
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProcurementPurchaseorderstatusesByParentIdNotificationsById(id, parentId) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/notifications/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put PurchaseOrderStatusNotification
   * @param {number} id
   * @param {number} parentId
   * @param {PurchaseOrderStatusNotification} purchaseOrderStatusNotification purchaseOrderStatusNotification
   * @returns {Promise<PurchaseOrderStatusNotification>}
   */
  putProcurementPurchaseorderstatusesByParentIdNotificationsById(
    id,
    parentId,
    purchaseOrderStatusNotification,
  ) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/notifications/{id}`,
      method: 'put',
      data: purchaseOrderStatusNotification,
    })
  }

  /**
   * Patch PurchaseOrderStatusNotification
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PurchaseOrderStatusNotification>}
   */
  patchProcurementPurchaseorderstatusesByParentIdNotificationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/notifications/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of PurchaseOrderStatusNotification
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
  getProcurementPurchaseorderstatusesByParentIdNotificationsCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/${parentId}/notifications/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of PurchaseOrderStatus
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
  getProcurementPurchaseorderstatusesCount(params = {}) {
    return this.request({
      path: `/procurement/purchaseorderstatuses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post PurchasingDemand
   * @param {PurchasingDemand} purchasingDemand purchasingDemand
   * @returns {Promise<PurchasingDemand>}
   */
  postProcurementPurchasingDemands(purchasingDemand) {
    return this.request({
      path: `/procurement/purchasingDemands`,
      method: 'post',
      data: purchasingDemand,
    })
  }
  /**
   * Get List of RmaAction
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<RmaAction[]>}
   */
  getProcurementRmaActions(params = {}) {
    return this.request({
      path: `/procurement/rmaActions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post RmaAction
   * @param {RmaAction} rmaAction rmaAction
   * @returns {Promise<RmaAction>}
   */
  postProcurementRmaActions(rmaAction) {
    return this.request({
      path: `/procurement/rmaActions`,
      method: 'post',
      data: rmaAction,
    })
  }
  /**
   * Get RmaAction
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
   * @returns {Promise<RmaAction>}
   */
  getProcurementRmaActionsById(id, params = {}) {
    return this.request({
      path: `/procurement/rmaActions/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete RmaAction
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementRmaActionsById(id) {
    return this.request({
      path: `/procurement/rmaActions/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put RmaAction
   * @param {number} id
   * @param {RmaAction} rmaAction rmaAction
   * @returns {Promise<RmaAction>}
   */
  putProcurementRmaActionsById(id, rmaAction) {
    return this.request({
      path: `/procurement/rmaActions/${id}`,
      method: 'put',
      data: rmaAction,
    })
  }

  /**
   * Patch RmaAction
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<RmaAction>}
   */
  patchProcurementRmaActionsById(id, patchOperations) {
    return this.request({
      path: `/procurement/rmaActions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get RmaActionInfos
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
   * @returns {Promise<RmaActionInfo>}
   */
  getProcurementRmaActionsByIdInfo(id, params = {}) {
    return this.request({
      path: `/procurement/rmaActions/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of RmaAction
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
  getProcurementRmaActionsCount(params = {}) {
    return this.request({
      path: `/procurement/rmaActions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of RmaActionInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<RmaActionInfo[]>}
   */
  getProcurementRmaActionsInfo(params = {}) {
    return this.request({
      path: `/procurement/rmaActions/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of RmaActionInfos
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
  getProcurementRmaActionsInfoCount(params = {}) {
    return this.request({
      path: `/procurement/rmaActions/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of RmaDisposition
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<RmaDisposition[]>}
   */
  getProcurementRMADispositions(params = {}) {
    return this.request({
      path: `/procurement/RMADispositions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post RmaDisposition
   * @param {RmaDisposition} rmaDisposition rmaDisposition
   * @returns {Promise<RmaDisposition>}
   */
  postProcurementRMADispositions(rmaDisposition) {
    return this.request({
      path: `/procurement/RMADispositions`,
      method: 'post',
      data: rmaDisposition,
    })
  }
  /**
   * Get RmaDisposition
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
   * @returns {Promise<RmaDisposition>}
   */
  getProcurementRMADispositionsById(id, params = {}) {
    return this.request({
      path: `/procurement/RMADispositions/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete RmaDisposition
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementRMADispositionsById(id) {
    return this.request({
      path: `/procurement/RMADispositions/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put RmaDisposition
   * @param {number} id
   * @param {RmaDisposition} rmaDisposition rmaDisposition
   * @returns {Promise<RmaDisposition>}
   */
  putProcurementRMADispositionsById(id, rmaDisposition) {
    return this.request({
      path: `/procurement/RMADispositions/${id}`,
      method: 'put',
      data: rmaDisposition,
    })
  }

  /**
   * Patch RmaDisposition
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<RmaDisposition>}
   */
  patchProcurementRMADispositionsById(id, patchOperations) {
    return this.request({
      path: `/procurement/RMADispositions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get RmaDispositionInfos
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
   * @returns {Promise<RmaDispositionInfo>}
   */
  getProcurementRMADispositionsByIdInfo(id, params = {}) {
    return this.request({
      path: `/procurement/RMADispositions/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of RmaDisposition
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
  getProcurementRMADispositionsCount(params = {}) {
    return this.request({
      path: `/procurement/RMADispositions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of RmaDispositionInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<RmaDispositionInfo[]>}
   */
  getProcurementRMADispositionsInfo(params = {}) {
    return this.request({
      path: `/procurement/RMADispositions/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of RmaDispositionInfos
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
  getProcurementRMADispositionsInfoCount(params = {}) {
    return this.request({
      path: `/procurement/RMADispositions/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of RmaStatus
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<RmaStatus[]>}
   */
  getProcurementRmaStatuses(params = {}) {
    return this.request({
      path: `/procurement/rmaStatuses`,
      method: 'get',
      params,
    })
  }

  /**
   * Post RmaStatus
   * @param {RmaStatus} rmaStatus rmaStatus
   * @returns {Promise<RmaStatus>}
   */
  postProcurementRmaStatuses(rmaStatus) {
    return this.request({
      path: `/procurement/rmaStatuses`,
      method: 'post',
      data: rmaStatus,
    })
  }
  /**
   * Get RmaStatus
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
   * @returns {Promise<RmaStatus>}
   */
  getProcurementRmaStatusesById(id, params = {}) {
    return this.request({
      path: `/procurement/rmaStatuses/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete RmaStatus
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementRmaStatusesById(id) {
    return this.request({
      path: `/procurement/rmaStatuses/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put RmaStatus
   * @param {number} id
   * @param {RmaStatus} rmaStatus rmaStatus
   * @returns {Promise<RmaStatus>}
   */
  putProcurementRmaStatusesById(id, rmaStatus) {
    return this.request({
      path: `/procurement/rmaStatuses/${id}`,
      method: 'put',
      data: rmaStatus,
    })
  }

  /**
   * Patch RmaStatus
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<RmaStatus>}
   */
  patchProcurementRmaStatusesById(id, patchOperations) {
    return this.request({
      path: `/procurement/rmaStatuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get RmaStatusInfos
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
   * @returns {Promise<RmaStatusInfo>}
   */
  getProcurementRmaStatusesByIdInfo(id, params = {}) {
    return this.request({
      path: `/procurement/rmaStatuses/${id}/info`,
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
  getProcurementRmaStatusesByIdUsages(id, params = {}) {
    return this.request({
      path: `/procurement/rmaStatuses/${id}/usages`,
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
  getProcurementRmaStatusesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/procurement/rmaStatuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Post RmaStatusEmailTemplate
   * @param {number} parentId
   * @param {RmaStatusEmailTemplate} rmaStatusEmailTemplate rmaStatusEmailTemplate
   * @returns {Promise<RmaStatusEmailTemplate>}
   */
  postProcurementRmaStatusesByParentIdEmailtemplates(parentId, rmaStatusEmailTemplate) {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/emailtemplates/`,
      method: 'post',
      data: rmaStatusEmailTemplate,
    })
  }
  /**
   * Get List of RmaStatusEmailTemplate
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
   * @returns {Promise<RmaStatusEmailTemplate[]>}
   */
  getProcurementRmaStatusesByParentIdEmailTemplates(parentId, params = {}) {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/emailTemplates/`,
      method: 'get',
      params,
    })
  }
  /**
   * Get RmaStatusEmailTemplate
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
   * @returns {Promise<RmaStatusEmailTemplate>}
   */
  getProcurementRmaStatusesByParentIdEmailtemplatesById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/emailtemplates/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete RmaStatusEmailTemplate
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProcurementRmaStatusesByParentIdEmailtemplatesById(id, parentId) {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/emailtemplates/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put RmaStatusEmailTemplate
   * @param {number} id
   * @param {number} parentId
   * @param {RmaStatusEmailTemplate} rmaStatusEmailTemplate rmaStatusEmailTemplate
   * @returns {Promise<RmaStatusEmailTemplate>}
   */
  putProcurementRmaStatusesByParentIdEmailtemplatesById(id, parentId, rmaStatusEmailTemplate) {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/emailtemplates/{id}`,
      method: 'put',
      data: rmaStatusEmailTemplate,
    })
  }

  /**
   * Patch RmaStatusEmailTemplate
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<RmaStatusEmailTemplate>}
   */
  patchProcurementRmaStatusesByParentIdEmailtemplatesById(id, parentId, patchOperations) {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/emailtemplates/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of RmaStatusEmailTemplate
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
  getProcurementRmaStatusesByParentIdEmailtemplatesCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/emailtemplates/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of RmaStatusNotification
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
   * @returns {Promise<RmaStatusNotification[]>}
   */
  getProcurementRmaStatusesByParentIdNotifications(parentId, params = {}) {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/notifications`,
      method: 'get',
      params,
    })
  }

  /**
   * Post RmaStatusNotification
   * @param {number} parentId
   * @param {RmaStatusNotification} rmaStatusNotification rmaStatusNotification
   * @returns {Promise<RmaStatusNotification>}
   */
  postProcurementRmaStatusesByParentIdNotifications(parentId, rmaStatusNotification) {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/notifications`,
      method: 'post',
      data: rmaStatusNotification,
    })
  }
  /**
   * Get RmaStatusNotification
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
   * @returns {Promise<RmaStatusNotification>}
   */
  getProcurementRmaStatusesByParentIdNotificationsById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/notifications/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete RmaStatusNotification
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProcurementRmaStatusesByParentIdNotificationsById(id, parentId) {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/notifications/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put RmaStatusNotification
   * @param {number} id
   * @param {number} parentId
   * @param {RmaStatusNotification} rmaStatusNotification rmaStatusNotification
   * @returns {Promise<RmaStatusNotification>}
   */
  putProcurementRmaStatusesByParentIdNotificationsById(id, parentId, rmaStatusNotification) {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/notifications/{id}`,
      method: 'put',
      data: rmaStatusNotification,
    })
  }

  /**
   * Patch RmaStatusNotification
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<RmaStatusNotification>}
   */
  patchProcurementRmaStatusesByParentIdNotificationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/notifications/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of RmaStatusNotification
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
  getProcurementRmaStatusesByParentIdNotificationsCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/rmaStatuses/${parentId}/notifications/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of RmaStatus
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
  getProcurementRmaStatusesCount(params = {}) {
    return this.request({
      path: `/procurement/rmaStatuses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of RmaStatusInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<RmaStatusInfo[]>}
   */
  getProcurementRmaStatusesInfo(params = {}) {
    return this.request({
      path: `/procurement/rmaStatuses/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of RmaStatusInfos
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
  getProcurementRmaStatusesInfoCount(params = {}) {
    return this.request({
      path: `/procurement/rmaStatuses/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of RmaTag
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<RmaTag[]>}
   */
  getProcurementRmaTags(params = {}) {
    return this.request({
      path: `/procurement/rmaTags`,
      method: 'get',
      params,
    })
  }

  /**
   * Post RmaTag
   * @param {RmaTag} rmaTag rmaTag
   * @returns {Promise<RmaTag>}
   */
  postProcurementRmaTags(rmaTag) {
    return this.request({
      path: `/procurement/rmaTags`,
      method: 'post',
      data: rmaTag,
    })
  }
  /**
   * Get RmaTag
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
   * @returns {Promise<RmaTag>}
   */
  getProcurementRmaTagsById(id, params = {}) {
    return this.request({
      path: `/procurement/rmaTags/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete RmaTag
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementRmaTagsById(id) {
    return this.request({
      path: `/procurement/rmaTags/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put RmaTag
   * @param {number} id
   * @param {RmaTag} rmaTag rmaTag
   * @returns {Promise<RmaTag>}
   */
  putProcurementRmaTagsById(id, rmaTag) {
    return this.request({
      path: `/procurement/rmaTags/${id}`,
      method: 'put',
      data: rmaTag,
    })
  }

  /**
   * Patch RmaTag
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<RmaTag>}
   */
  patchProcurementRmaTagsById(id, patchOperations) {
    return this.request({
      path: `/procurement/rmaTags/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of RmaTag
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
  getProcurementRmaTagsCount(params = {}) {
    return this.request({
      path: `/procurement/rmaTags/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get RmaTag
   * @param {number} productId
   * @param {number} billingLogId
   * @param {number} ticketId
   * @param {number} projectId
   * @param {number} salesOrderId
   * @param {number} companyId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<RmaTag>}
   */
  getProcurementRmaTagsDefault(
    productId,
    billingLogId,
    ticketId,
    projectId,
    salesOrderId,
    companyId,
    params = {},
  ) {
    return this.request({
      path: `/procurement/rmaTags/default`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProcurementSetting
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProcurementSetting[]>}
   */
  getProcurementSettings(params = {}) {
    return this.request({
      path: `/procurement/settings`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ProcurementSetting
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
   * @returns {Promise<ProcurementSetting>}
   */
  getProcurementSettingsById(id, params = {}) {
    return this.request({
      path: `/procurement/settings/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put ProcurementSetting
   * @param {number} id
   * @param {ProcurementSetting} procurementSetting procurementSetting
   * @returns {Promise<ProcurementSetting>}
   */
  putProcurementSettingsById(id, procurementSetting) {
    return this.request({
      path: `/procurement/settings/${id}`,
      method: 'put',
      data: procurementSetting,
    })
  }

  /**
   * Patch ProcurementSetting
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProcurementSetting>}
   */
  patchProcurementSettingsById(id, patchOperations) {
    return this.request({
      path: `/procurement/settings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ProcurementSetting
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
  getProcurementSettingsCount(params = {}) {
    return this.request({
      path: `/procurement/settings/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ShipmentMethod
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ShipmentMethod[]>}
   */
  getProcurementShipmentmethods(params = {}) {
    return this.request({
      path: `/procurement/shipmentmethods`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ShipmentMethod
   * @param {ShipmentMethod} shipmentMethod shipmentMethod
   * @returns {Promise<ShipmentMethod>}
   */
  postProcurementShipmentmethods(shipmentMethod) {
    return this.request({
      path: `/procurement/shipmentmethods`,
      method: 'post',
      data: shipmentMethod,
    })
  }
  /**
   * Get ShipmentMethod
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
   * @returns {Promise<ShipmentMethod>}
   */
  getProcurementShipmentmethodsById(id, params = {}) {
    return this.request({
      path: `/procurement/shipmentmethods/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ShipmentMethod
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementShipmentmethodsById(id) {
    return this.request({
      path: `/procurement/shipmentmethods/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ShipmentMethod
   * @param {number} id
   * @param {ShipmentMethod} shipmentMethod shipmentMethod
   * @returns {Promise<ShipmentMethod>}
   */
  putProcurementShipmentmethodsById(id, shipmentMethod) {
    return this.request({
      path: `/procurement/shipmentmethods/${id}`,
      method: 'put',
      data: shipmentMethod,
    })
  }

  /**
   * Patch ShipmentMethod
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ShipmentMethod>}
   */
  patchProcurementShipmentmethodsById(id, patchOperations) {
    return this.request({
      path: `/procurement/shipmentmethods/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ShipmentMethodInfos
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
   * @returns {Promise<ShipmentMethodInfo>}
   */
  getProcurementShipmentmethodsByIdInfo(id, params = {}) {
    return this.request({
      path: `/procurement/shipmentmethods/${id}/info`,
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
  getProcurementShipmentmethodsByIdUsages(id, params = {}) {
    return this.request({
      path: `/procurement/shipmentmethods/${id}/usages`,
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
  getProcurementShipmentmethodsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/procurement/shipmentmethods/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ShipmentMethod
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
  getProcurementShipmentmethodsCount(params = {}) {
    return this.request({
      path: `/procurement/shipmentmethods/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ShipmentMethodInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ShipmentMethodInfo[]>}
   */
  getProcurementShipmentmethodsInfo(params = {}) {
    return this.request({
      path: `/procurement/shipmentmethods/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ShipmentMethodInfos
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
  getProcurementShipmentmethodsInfoCount(params = {}) {
    return this.request({
      path: `/procurement/shipmentmethods/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SubCategory
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SubCategory[]>}
   */
  getProcurementSubcategories(params = {}) {
    return this.request({
      path: `/procurement/subcategories/`,
      method: 'get',
      params,
    })
  }

  /**
   * Post SubCategory
   * @param {SubCategory} subCategory subCategory
   * @returns {Promise<SubCategory>}
   */
  postProcurementSubcategories(subCategory) {
    return this.request({
      path: `/procurement/subcategories/`,
      method: 'post',
      data: subCategory,
    })
  }
  /**
   * Get SubCategory
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
   * @returns {Promise<SubCategory>}
   */
  getProcurementSubcategoriesById(id, params = {}) {
    return this.request({
      path: `/procurement/subcategories/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete SubCategory
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementSubcategoriesById(id) {
    return this.request({
      path: `/procurement/subcategories/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put SubCategory
   * @param {number} id
   * @param {SubCategory} subCategory subCategory
   * @returns {Promise<SubCategory>}
   */
  putProcurementSubcategoriesById(id, subCategory) {
    return this.request({
      path: `/procurement/subcategories/${id}`,
      method: 'put',
      data: subCategory,
    })
  }

  /**
   * Patch SubCategory
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<SubCategory>}
   */
  patchProcurementSubcategoriesById(id, patchOperations) {
    return this.request({
      path: `/procurement/subcategories/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get SubCategoryInfo
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
   * @returns {Promise<SubCategoryInfo>}
   */
  getProcurementSubcategoriesByIdInfo(id, params = {}) {
    return this.request({
      path: `/procurement/subcategories/${id}/info`,
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
  getProcurementSubcategoriesByIdUsages(id, params = {}) {
    return this.request({
      path: `/procurement/subcategories/${id}/usages`,
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
  getProcurementSubcategoriesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/procurement/subcategories/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SubCategory
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
  getProcurementSubcategoriesCount(params = {}) {
    return this.request({
      path: `/procurement/subcategories/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SubCategoryInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SubCategoryInfo[]>}
   */
  getProcurementSubcategoriesInfo(params = {}) {
    return this.request({
      path: `/procurement/subcategories/info/`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SubCategoryInfo
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
  getProcurementSubcategoriesInfoCount(params = {}) {
    return this.request({
      path: `/procurement/subcategories/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProductType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProductType[]>}
   */
  getProcurementTypes(params = {}) {
    return this.request({
      path: `/procurement/types`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ProductType
   * @param {ProductType} productTypes productTypes
   * @returns {Promise<ProductType>}
   */
  postProcurementTypes(productTypes) {
    return this.request({
      path: `/procurement/types`,
      method: 'post',
      data: productTypes,
    })
  }
  /**
   * Get ProductType
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
   * @returns {Promise<ProductType>}
   */
  getProcurementTypesById(id, params = {}) {
    return this.request({
      path: `/procurement/types/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ProductType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementTypesById(id) {
    return this.request({
      path: `/procurement/types/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ProductType
   * @param {number} id
   * @param {ProductType} productTypes productTypes
   * @returns {Promise<ProductType>}
   */
  putProcurementTypesById(id, productTypes) {
    return this.request({
      path: `/procurement/types/${id}`,
      method: 'put',
      data: productTypes,
    })
  }

  /**
   * Patch ProductType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ProductType>}
   */
  patchProcurementTypesById(id, patchOperations) {
    return this.request({
      path: `/procurement/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ProductTypeInfo
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
   * @returns {Promise<ProductTypeInfo>}
   */
  getProcurementTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/procurement/types/${id}/info`,
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
  getProcurementTypesByIdUsages(id, params = {}) {
    return this.request({
      path: `/procurement/types/${id}/usages`,
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
  getProcurementTypesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/procurement/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ProductType
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
  getProcurementTypesCount(params = {}) {
    return this.request({
      path: `/procurement/types/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProductTypeInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProductTypeInfo[]>}
   */
  getProcurementTypesInfo(params = {}) {
    return this.request({
      path: `/procurement/types/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ProductTypeInfo
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
  getProcurementTypesInfoCount(params = {}) {
    return this.request({
      path: `/procurement/types/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of UnitOfMeasure
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UnitOfMeasure[]>}
   */
  getProcurementUnitOfMeasures(params = {}) {
    return this.request({
      path: `/procurement/unitOfMeasures`,
      method: 'get',
      params,
    })
  }

  /**
   * Post UnitOfMeasure
   * @param {UnitOfMeasure} unitOfMeasure unitOfMeasure
   * @returns {Promise<UnitOfMeasure>}
   */
  postProcurementUnitOfMeasures(unitOfMeasure) {
    return this.request({
      path: `/procurement/unitOfMeasures`,
      method: 'post',
      data: unitOfMeasure,
    })
  }
  /**
   * Get UnitOfMeasure
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
   * @returns {Promise<UnitOfMeasure>}
   */
  getProcurementUnitOfMeasuresById(id, params = {}) {
    return this.request({
      path: `/procurement/unitOfMeasures/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete UnitOfMeasure
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementUnitOfMeasuresById(id) {
    return this.request({
      path: `/procurement/unitOfMeasures/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put UnitOfMeasure
   * @param {number} id
   * @param {UnitOfMeasure} unitOfMeasure unitOfMeasure
   * @returns {Promise<UnitOfMeasure>}
   */
  putProcurementUnitOfMeasuresById(id, unitOfMeasure) {
    return this.request({
      path: `/procurement/unitOfMeasures/${id}`,
      method: 'put',
      data: unitOfMeasure,
    })
  }

  /**
   * Patch UnitOfMeasure
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<UnitOfMeasure>}
   */
  patchProcurementUnitOfMeasuresById(id, patchOperations) {
    return this.request({
      path: `/procurement/unitOfMeasures/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of Conversion
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
   * @returns {Promise<Conversion[]>}
   */
  getProcurementUnitOfMeasuresByParentIdConversions(parentId, params = {}) {
    return this.request({
      path: `/procurement/unitOfMeasures/${parentId}/conversions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Conversion
   * @param {number} parentId
   * @param {Conversion} conversion conversion
   * @returns {Promise<Conversion>}
   */
  postProcurementUnitOfMeasuresByParentIdConversions(parentId, conversion) {
    return this.request({
      path: `/procurement/unitOfMeasures/${parentId}/conversions`,
      method: 'post',
      data: conversion,
    })
  }
  /**
   * Get Conversion
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
   * @returns {Promise<Conversion>}
   */
  getProcurementUnitOfMeasuresByParentIdConversionsById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/unitOfMeasures/${parentId}/conversions/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Conversion
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteProcurementUnitOfMeasuresByParentIdConversionsById(id, parentId) {
    return this.request({
      path: `/procurement/unitOfMeasures/${parentId}/conversions/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put Conversion
   * @param {number} id
   * @param {number} parentId
   * @param {Conversion} conversion conversion
   * @returns {Promise<Conversion>}
   */
  putProcurementUnitOfMeasuresByParentIdConversionsById(id, parentId, conversion) {
    return this.request({
      path: `/procurement/unitOfMeasures/${parentId}/conversions/{id}`,
      method: 'put',
      data: conversion,
    })
  }

  /**
   * Patch Conversion
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Conversion>}
   */
  patchProcurementUnitOfMeasuresByParentIdConversionsById(id, parentId, patchOperations) {
    return this.request({
      path: `/procurement/unitOfMeasures/${parentId}/conversions/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of Conversion
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
  getProcurementUnitOfMeasuresByParentIdConversionsCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/unitOfMeasures/${parentId}/conversions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of UnitOfMeasure
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
  getProcurementUnitOfMeasuresCount(params = {}) {
    return this.request({
      path: `/procurement/unitOfMeasures/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WarehouseBin
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<WarehouseBin[]>}
   */
  getProcurementWarehouseBins(params = {}) {
    return this.request({
      path: `/procurement/warehouseBins`,
      method: 'get',
      params,
    })
  }

  /**
   * Post WarehouseBin
   * @param {WarehouseBin} warehouseBin warehouseBin
   * @returns {Promise<WarehouseBin>}
   */
  postProcurementWarehouseBins(warehouseBin) {
    return this.request({
      path: `/procurement/warehouseBins`,
      method: 'post',
      data: warehouseBin,
    })
  }
  /**
   * Get WarehouseBin
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
   * @returns {Promise<WarehouseBin>}
   */
  getProcurementWarehouseBinsById(id, params = {}) {
    return this.request({
      path: `/procurement/warehouseBins/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete WarehouseBin
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementWarehouseBinsById(id) {
    return this.request({
      path: `/procurement/warehouseBins/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put WarehouseBin
   * @param {number} id
   * @param {WarehouseBin} warehouseBin warehouseBin
   * @returns {Promise<WarehouseBin>}
   */
  putProcurementWarehouseBinsById(id, warehouseBin) {
    return this.request({
      path: `/procurement/warehouseBins/${id}`,
      method: 'put',
      data: warehouseBin,
    })
  }

  /**
   * Patch WarehouseBin
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<WarehouseBin>}
   */
  patchProcurementWarehouseBinsById(id, patchOperations) {
    return this.request({
      path: `/procurement/warehouseBins/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get WarehouseBinInfos
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
   * @returns {Promise<WarehouseBinInfo>}
   */
  getProcurementWarehouseBinsByIdInfo(id, params = {}) {
    return this.request({
      path: `/procurement/warehouseBins/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of InventoryOnHand
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
   * @returns {Promise<InventoryOnHand[]>}
   */
  getProcurementWarehouseBinsByParentIdInventoryOnHand(parentId, params = {}) {
    return this.request({
      path: `/procurement/warehouseBins/${parentId}/inventoryOnHand`,
      method: 'get',
      params,
    })
  }
  /**
   * Get InventoryOnHand
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
   * @returns {Promise<InventoryOnHand>}
   */
  getProcurementWarehouseBinsByParentIdInventoryOnHandById(id, parentId, params = {}) {
    return this.request({
      path: `/procurement/warehouseBins/${parentId}/inventoryOnHand/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of InventoryOnHand
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
  getProcurementWarehouseBinsByParentIdInventoryOnHandCount(parentId, params = {}) {
    return this.request({
      path: `/procurement/warehouseBins/${parentId}/inventoryOnHand/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of WarehouseBin
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
  getProcurementWarehouseBinsCount(params = {}) {
    return this.request({
      path: `/procurement/warehouseBins/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WarehouseBinInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<WarehouseBinInfo[]>}
   */
  getProcurementWarehouseBinsInfo(params = {}) {
    return this.request({
      path: `/procurement/warehouseBins/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of WarehouseBins
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
  getProcurementWarehouseBinsInfoCount(params = {}) {
    return this.request({
      path: `/procurement/warehouseBins/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Warehouse
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Warehouse[]>}
   */
  getProcurementWarehouses(params = {}) {
    return this.request({
      path: `/procurement/warehouses`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Warehouse
   * @param {Warehouse} warehouse warehouse
   * @returns {Promise<Warehouse>}
   */
  postProcurementWarehouses(warehouse) {
    return this.request({
      path: `/procurement/warehouses`,
      method: 'post',
      data: warehouse,
    })
  }
  /**
   * Get Warehouse
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
   * @returns {Promise<Warehouse>}
   */
  getProcurementWarehousesById(id, params = {}) {
    return this.request({
      path: `/procurement/warehouses/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Warehouse
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteProcurementWarehousesById(id) {
    return this.request({
      path: `/procurement/warehouses/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Warehouse
   * @param {number} id
   * @param {Warehouse} warehouse warehouse
   * @returns {Promise<Warehouse>}
   */
  putProcurementWarehousesById(id, warehouse) {
    return this.request({
      path: `/procurement/warehouses/${id}`,
      method: 'put',
      data: warehouse,
    })
  }

  /**
   * Patch Warehouse
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Warehouse>}
   */
  patchProcurementWarehousesById(id, patchOperations) {
    return this.request({
      path: `/procurement/warehouses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get WarehouseInfos
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
   * @returns {Promise<WarehouseInfo>}
   */
  getProcurementWarehousesByIdInfo(id, params = {}) {
    return this.request({
      path: `/procurement/warehouses/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Warehouse
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
  getProcurementWarehousesCount(params = {}) {
    return this.request({
      path: `/procurement/warehouses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WarehouseInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<WarehouseInfo[]>}
   */
  getProcurementWarehousesInfo(params = {}) {
    return this.request({
      path: `/procurement/warehouses/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Warehouses
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
  getProcurementWarehousesInfoCount(params = {}) {
    return this.request({
      path: `/procurement/warehouses/info/count`,
      method: 'get',
      params,
    })
  }
}
