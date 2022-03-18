import Manage from './Manage.js'

/**
 * AddressFormat
 * @typedef {object} AddressFormat
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {string} format  Max length: 250;
 * @property {boolean} [defaultFlag]   nullable
 * @property {array} [countryIds]
 * @property {boolean} [addAllCountries]   nullable
 * @property {boolean} [removeAllCountries]   nullable
 * @property {object} [_info]
 */

/**
 * AddressFormatInfo
 * @typedef {object} AddressFormatInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * Count
 * @typedef {object} Count
 * @property {number} [count]  int32
 */

/**
 * CommunicationType
 * @typedef {object} CommunicationType
 * @property {number} [id]  int32
 * @property {string} description
 * @property {boolean} [phoneFlag] At least one flag is required to be true -- phone, fax, or email  nullable
 * @property {boolean} [faxFlag] At least one flag is required to be true -- phone, fax, or email  nullable
 * @property {boolean} [emailFlag] At least one flag is required to be true -- phone, fax, or email  nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {string} [exchangeXref] Exchange Xref required if phone or fax Max length: 50;
 * @property {string} iphoneXref  Max length: 50;
 * @property {string} androidXref  Max length: 50;
 * @property {string} [googleXref] Google Xref required if phone or fax Max length: 50;
 * @property {object} [_info]
 */

/**
 * CommunicationTypeInfo
 * @typedef {object} CommunicationTypeInfo
 * @property {number} [id]  int32
 * @property {string} [description]
 * @property {boolean} [phoneFlag]   nullable
 * @property {boolean} [faxFlag]   nullable
 * @property {boolean} [emailFlag]   nullable
 * @property {boolean} [defaultFlag]   nullable
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
 * Company
 * @typedef {object} Company
 * @property {number} [id]  int32  
  * @property {string} identifier  Max length: 25;  
  * @property {string} name  Max length: 50;  
  * @property {CompanyStatusReference} [status]    
  * @property {string} [addressLine1] At least one address field is required -- addressLine1, addressLine2, city, state, zip and/or country Max length: 50;   
  * @property {string} [addressLine2] At least one address field is required -- addressLine1, addressLine2, city, state, zip and/or country Max length: 50;   
  * @property {string} [city] At least one address field is required -- addressLine1, addressLine2, city, state, zip and/or country Max length: 50;   
  * @property {string} [state] At least one address field is required -- addressLine1, addressLine2, city, state, zip and/or country Max length: 50;   
  * @property {string} [zip] At least one address field is required -- addressLine1, addressLine2, city, state, zip and/or country Max length: 12;   
  * @property {CountryReference} [country]    
  * @property {string} [phoneNumber]  Max length: 30;   
  * @property {string} [faxNumber]  Max length: 30;   
  * @property {string} [website]  Max length: 255;   
  * @property {SystemLocationReference} [territory]    
  * @property {MarketDescriptionReference} [market]    
  * @property {string} [accountNumber]    
  * @property {ContactReference} [defaultContact]    
  * @property {string} [dateAcquired]  date-time  
  * @property {SicCodeReference} [sicCode]    
  * @property {CompanyReference} [parentCompany]    
  * @property {number} [annualRevenue]  double nullable 
  * @property {number} [numberOfEmployees]  int32 nullable 
  * @property {number} [yearEstablished]  int32 nullable 
  * @property {number} [revenueYear]  int32 nullable 
  * @property {OwnershipTypeReference} [ownershipType]    
  * @property {TimeZoneSetupReference} [timeZoneSetup]    
  * @property {string} [leadSource]  Max length: 50;   
  * @property {boolean} [leadFlag]   nullable 
  * @property {boolean} [unsubscribeFlag]   nullable 
  * @property {CalendarReference} [calendar]    
  * @property {string} [userDefinedField1]  Max length: 50;   
  * @property {string} [userDefinedField2]  Max length: 50;   
  * @property {string} [userDefinedField3]  Max length: 50;   
  * @property {string} [userDefinedField4]  Max length: 50;   
  * @property {string} [userDefinedField5]  Max length: 50;   
  * @property {string} [userDefinedField6]  Max length: 50;   
  * @property {string} [userDefinedField7]  Max length: 50;   
  * @property {string} [userDefinedField8]  Max length: 50;   
  * @property {string} [userDefinedField9]  Max length: 50;   
  * @property {string} [userDefinedField10]  Max length: 50;   
  * @property {string} [vendorIdentifier]    
  * @property {string} [taxIdentifier]    
  * @property {TaxCodeReference} [taxCode]    
  * @property {BillingTermsReference} [billingTerms]    
  * @property {InvoiceTemplateReference} [invoiceTemplate]    
  * @property {PricingScheduleReference} [pricingSchedule]    
  * @property {EntityTypeReference} [companyEntityType]    
  * @property {CompanyReference} [billToCompany]    
  * @property {SiteReference} [billingSite]    
  * @property {ContactReference} [billingContact]    
  * @property {BillingDeliveryReference} [invoiceDeliveryMethod]    
  * @property {string} [invoiceToEmailAddress]    
  * @property {string} [invoiceCCEmailAddress]    
  * @property {boolean} [deletedFlag]   nullable 
  * @property {string} [dateDeleted]  date-time  
  * @property {string} [deletedBy]    
  * @property {string} [mobileGuid]  uuid nullable 
  * @property {string} [facebookUrl]    
  * @property {string} [twitterUrl]    
  * @property {string} [linkedInUrl]    
  * @property {CurrencyReference} [currency]    
  * @property {MemberReference} [territoryManager]    
  * @property {string} [resellerIdentifier]    
  * @property {boolean} [isVendorFlag]   nullable 
  * @property {array} [types] Integrer array of Company_Type_Recids to be assigned to company that can be passed in only during new company creation (post)
            To update existing companies type, use the /company/companyTypeAssociations or /company/companies/{ID}/typeAssociations endpoints   
  * @property {SiteReference} [site]    
  * @property {array} [integratorTags]    
  * @property {object} [_info]    
  * @property {array} [customFields]    
 */

/**
 * SuccessResponse
 * @typedef {object} SuccessResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * CompanyCustomNote
 * @typedef {object} CompanyCustomNote
 * @property {number} [id]  int32
 * @property {string} customNote  Max length: 1500;
 * @property {CompanyStatusReference} [status]
 * @property {CompanyReference} [company]
 * @property {object} [_info]
 */

/**
 * CompanyGroup
 * @typedef {object} CompanyGroup
 * @property {number} [id]  Required On Updates; int32
 * @property {GroupReference} [group]
 * @property {CompanyReference} [company]
 * @property {boolean} [defaultContactFlag]   nullable
 * @property {boolean} [allContactsFlag]   nullable
 * @property {boolean} [removeAllContactsFlag]   nullable
 * @property {boolean} [unsubscribeFlag]   nullable
 * @property {array} [contactIds]
 * @property {object} [_info]
 */

/**
 * ManagementReportNotification
 * @typedef {object} ManagementReportNotification
 * @property {number} [id]  int32
 * @property {NotificationRecipientReference} [notifyWho]
 * @property {MemberReference} [member]
 * @property {string} [email]  Max length: 50;
 * @property {boolean} [globalFlag]   nullable
 * @property {CompanyReference} [company]
 * @property {object} [_info]
 */

/**
 * ManagementReportSetup
 * @typedef {object} ManagementReportSetup
 * @property {number} [id]  int32
 * @property {boolean} scheduledReportDisabledFlag
 * @property {object} [_info]
 */

/**
 * CompanyManagementSummary
 * @typedef {object} CompanyManagementSummary
 * @property {number} [id]  int32
 * @property {ManagementSolutionReference} [managementSolution]
 * @property {string} groupIdentifier  Max length: 100;
 * @property {string} [deviceType] deviceType is required if the managementSolution is Legacy  nullable
 * @property {AgreementReference} [agreement]
 * @property {number} [snmpMachines]  int32 nullable
 * @property {number} [totalWorkstations]  int32 nullable
 * @property {number} [totalServers]  int32 nullable
 * @property {number} [totalWindowsServers]  int32 nullable
 * @property {number} [totalWindowsWorkstations]  int32 nullable
 * @property {number} [totalManagedMachines]  int32 nullable
 * @property {number} [serversOffline]  int32 nullable
 * @property {number} [serversDiskSpaceLow]  int32 nullable
 * @property {number} [failedBackupJobs]  int32 nullable
 * @property {number} [totalNotifications]  int32 nullable
 * @property {number} [successfulBackupJobs]  int32 nullable
 * @property {number} [serverAvailability]  int32 nullable
 * @property {number} [virusesRemoved]  int32 nullable
 * @property {number} [spywareItemsRemoved]  int32 nullable
 * @property {number} [windowsPatchesInstalled]  int32 nullable
 * @property {number} [diskCleanups]  int32 nullable
 * @property {number} [diskDefragmentations]  int32 nullable
 * @property {number} [fullyPatchedMachines]  int32 nullable
 * @property {number} [missingOneTwoPatchesMachines]  int32 nullable
 * @property {number} [missingThreeFivePatchesMachines]  int32 nullable
 * @property {number} [missingMoreFivePatchesMachines]  int32 nullable
 * @property {number} [missingUnscannedPatchesMachines]  int32 nullable
 * @property {string} [alertsGenerated]
 * @property {number} [internetConnectivity]  double nullable
 * @property {number} [diskSpaceCleanedMb]  int32 nullable
 * @property {string} [missingSecurityPatches]
 * @property {number} [cpuUtilization]  double nullable
 * @property {number} [memoryUtilization]  double nullable
 * @property {CompanyReference} [company]
 * @property {object} [_info]
 */

/**
 * CompanyNote
 * @typedef {object} CompanyNote
 * @property {number} [id]  int32
 * @property {string} text
 * @property {NoteTypeReference} [type]
 * @property {boolean} [flagged]   nullable
 * @property {string} [enteredBy]
 * @property {CompanyReference} [company]
 * @property {object} [_info]
 */

/**
 * CompanySite
 * @typedef {object} CompanySite
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {string} [addressLine1]  Max length: 50;
 * @property {string} [addressLine2]  Max length: 50;
 * @property {string} [city]  Max length: 50;
 * @property {StateReference} [stateReference]
 * @property {string} [zip]  Max length: 12;
 * @property {CountryReference} [country]
 * @property {string} [addressFormat]
 * @property {string} [phoneNumber]  Max length: 30;
 * @property {string} [faxNumber]  Max length: 30;
 * @property {TaxCodeReference} [taxCode]
 * @property {EntityTypeReference} [entityType]
 * @property {number} [expenseReimbursement]  double nullable
 * @property {boolean} [primaryAddressFlag]   nullable
 * @property {boolean} [defaultShippingFlag]   nullable
 * @property {boolean} [defaultBillingFlag]   nullable
 * @property {boolean} [defaultMailingFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [billSeparateFlag]   nullable
 * @property {string} [mobileGuid]  uuid nullable
 * @property {CalendarReference} [calendar]
 * @property {TimeZoneSetupReference} [timeZone]
 * @property {CompanyReference} [company]
 * @property {object} [_info]
 */

/**
 * CompanyTeam
 * @typedef {object} CompanyTeam
 * @property {number} [id]  int32
 * @property {CompanyReference} [company]
 * @property {TeamRoleReference} [teamRole]
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {ContactReference} [contact]
 * @property {MemberReference} [member]
 * @property {boolean} [accountManagerFlag]   nullable
 * @property {boolean} [techFlag]   nullable
 * @property {boolean} [salesFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ContactTrack
 * @typedef {object} ContactTrack
 * @property {number} [id]  int32
 * @property {number} [trackId]  int32
 * @property {string} [name]
 * @property {string} [startDate]
 * @property {string} [endDate]
 * @property {number} [actionTaken]  int32 nullable
 * @property {number} [actionRemaining]  int32 nullable
 * @property {string} [startedBy]
 * @property {CompanyReference} [company]
 * @property {ContactReference} [contact]
 * @property {object} [_info]
 */

/**
 * CompanyCompanyTypeAssociationCompanyTypeAssociation
 * @typedef {object} CompanyCompanyTypeAssociationCompanyTypeAssociation
 * @property {number} [id]  int32
 * @property {CompanyTypeReference} [type]
 * @property {CompanyReference} [company]
 * @property {object} [_info]
 */

/**
 * CompanyTypeInfo
 * @typedef {object} CompanyTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [isVendor]
 * @property {object} [_info]
 */

/**
 * CompanyStatus
 * @typedef {object} CompanyStatus
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [notifyFlag]   nullable
 * @property {boolean} [disallowSavingFlag]   nullable
 * @property {string} [notificationMessage]  Max length: 500;
 * @property {boolean} [customNoteFlag]   nullable
 * @property {boolean} [cancelOpenTracksFlag]   nullable
 * @property {TrackReference} [track]
 * @property {object} [_info]
 */

/**
 * CompanyType
 * @typedef {object} CompanyType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [vendorFlag]   nullable
 * @property {boolean} [serviceAlertFlag]   nullable
 * @property {string} [serviceAlertMessage]  Max length: 150;
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
 * CompanyPickerItem
 * @typedef {object} CompanyPickerItem
 * @property {number} [id]  int32
 * @property {MemberReference} [member]
 * @property {CompanyReference} [company]
 * @property {CompanyStatusReference} [companyStatus]
 * @property {CompanyTypeReference} [companyType]
 * @property {SiteReference} [companySite]
 * @property {SystemLocationReference} [companyLocation]
 * @property {CountryReference} [companyCountry]
 * @property {boolean} [vendorPickerFlag] If true, this record was created by the vendor picker component. Otherwise, the record was created by the company picker component.  nullable
 * @property {object} [_info]
 */

/**
 * CompanyCompanyTypeAssociation
 * @typedef {object} CompanyCompanyTypeAssociation
 * @property {number} [id]  int32
 * @property {CompanyTypeReference} [type]
 * @property {CompanyReference} [company]
 * @property {object} [_info]
 */

/**
 * CompanyConfiguration
 * @typedef {object} CompanyConfiguration
 * @property {number} [id]  int32
 * @property {string} name  Max length: 100;
 * @property {ConfigurationTypeReference} [type]
 * @property {ConfigurationStatusReference} [status]
 * @property {CompanyReference} [company]
 * @property {ContactReference} [contact]
 * @property {SiteReference} [site]
 * @property {number} [locationId]  int32 nullable
 * @property {number} [businessUnitId]  int32 nullable
 * @property {string} [deviceIdentifier]  Max length: 100;
 * @property {string} [serialNumber]  Max length: 250;
 * @property {string} [modelNumber]  Max length: 50;
 * @property {string} [tagNumber]  Max length: 50;
 * @property {string} [purchaseDate]  date-time
 * @property {string} [installationDate]  date-time
 * @property {MemberReference} [installedBy]
 * @property {string} [warrantyExpirationDate]  date-time
 * @property {string} [vendorNotes]
 * @property {string} [notes]
 * @property {string} [macAddress]  Max length: 25;
 * @property {string} [lastLoginName]  Max length: 100;
 * @property {boolean} [billFlag]   nullable
 * @property {number} [backupSuccesses]  int32 nullable
 * @property {number} [backupIncomplete]  int32 nullable
 * @property {number} [backupFailed]  int32 nullable
 * @property {number} [backupRestores]  int32 nullable
 * @property {string} [lastBackupDate]  date-time
 * @property {string} [backupServerName]  Max length: 50;
 * @property {number} [backupBillableSpaceGb]  double nullable
 * @property {string} [backupProtectedDeviceList]
 * @property {number} [backupYear]  int32 nullable
 * @property {number} [backupMonth]  int32 nullable
 * @property {string} [ipAddress]  Max length: 50;
 * @property {string} [defaultGateway]  Max length: 50;
 * @property {string} [osType]  Max length: 250;
 * @property {string} [osInfo]  Max length: 250;
 * @property {string} [cpuSpeed]  Max length: 100;
 * @property {string} [ram]  Max length: 25;
 * @property {string} [localHardDrives]
 * @property {number} [parentConfigurationId]  int32 nullable
 * @property {CompanyReference} [vendor]
 * @property {ManufacturerReference} [manufacturer]
 * @property {array} [questions]
 * @property {boolean} [activeFlag]   nullable
 * @property {string} [managementLink]  Max length: 1000;
 * @property {string} [remoteLink]  Max length: 1000;
 * @property {SLAReference} [sla]
 * @property {string} [mobileGuid]  uuid nullable
 * @property {object} [_info]
 * @property {boolean} [displayVendorFlag]   nullable
 * @property {number} [companyLocationId]  int32 nullable
 * @property {boolean} [showRemoteFlag]   nullable
 * @property {boolean} [showAutomateFlag]   nullable
 * @property {boolean} [needsRenewalFlag]   nullable
 * @property {string} [manufacturerPartNumber]  Max length: 50;
 * @property {array} [customFields]
 */

/**
 * BulkResult
 * @typedef {object} BulkResult
 * @property {array} [payload]
 * @property {object} [_info]
 */

/**
 * ConfigurationStatus
 * @typedef {object} ConfigurationStatus
 * @property {number} [id]  int32
 * @property {string} description  Max length: 50;
 * @property {boolean} [closedFlag]   nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ConfigurationStatusInfo
 * @typedef {object} ConfigurationStatusInfo
 * @property {number} [id]  int32
 * @property {string} [description]
 * @property {boolean} [closedFlag]   nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ConfigurationType
 * @typedef {object} ConfigurationType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [systemFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ConfigurationTypeQuestionValue
 * @typedef {object} ConfigurationTypeQuestionValue
 * @property {number} [id]  int32
 * @property {ConfigurationTypeReference} [configurationType]
 * @property {ConfigurationTypeQuestionReference} [question]
 * @property {string} value  Max length: 1000;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ConfigurationTypeInfo
 * @typedef {object} ConfigurationTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [systemFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ConfigurationTypeQuestion
 * @typedef {object} ConfigurationTypeQuestion
 * @property {number} [id]  int32
 * @property {ConfigurationTypeReference} [configurationType]
 * @property {string} fieldType   nullable
 * @property {string} entryType   nullable
 * @property {number} sequenceNumber  double nullable
 * @property {string} question  Max length: 1000;
 * @property {number} [numberOfDecimals]  int32 nullable
 * @property {boolean} [requiredFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * Contact
 * @typedef {object} Contact
 * @property {number} [id]  int32  
  * @property {string} [firstName]    
  * @property {string} [lastName]    
  * @property {CompanyReference} [company]    
  * @property {SiteReference} [site]    
  * @property {string} [addressLine1]    
  * @property {string} [addressLine2]    
  * @property {string} [city]    
  * @property {string} [state]    
  * @property {string} [zip]    
  * @property {CountryReference} [country]    
  * @property {RelationshipReference} [relationship]    
  * @property {string} [relationshipOverride]    
  * @property {ContactDepartmentReference} [department]    
  * @property {boolean} [inactiveFlag]   nullable 
  * @property {number} [defaultMergeContactId]  int32 nullable 
  * @property {string} [securityIdentifier]    
  * @property {ContactReference} [managerContact]    
  * @property {ContactReference} [assistantContact]    
  * @property {string} [title]    
  * @property {string} [school]    
  * @property {string} [nickName]    
  * @property {boolean} [marriedFlag]   nullable 
  * @property {boolean} [childrenFlag]   nullable 
  * @property {string} [children]    
  * @property {string} [significantOther]    
  * @property {string} [portalPassword]    
  * @property {number} [portalSecurityLevel]  int32 nullable 
  * @property {boolean} [disablePortalLoginFlag]   nullable 
  * @property {boolean} [unsubscribeFlag]   nullable 
  * @property {string} [gender]   nullable 
  * @property {string} [birthDay]    
  * @property {string} [anniversary]    
  * @property {string} [presence]   nullable 
  * @property {string} [mobileGuid]  uuid nullable 
  * @property {string} [facebookUrl]    
  * @property {string} [twitterUrl]    
  * @property {string} [linkedInUrl]    
  * @property {string} [defaultPhoneType]    
  * @property {string} [defaultPhoneNbr]    
  * @property {string} [defaultPhoneExtension]    
  * @property {boolean} [defaultBillingFlag]   nullable 
  * @property {boolean} [defaultFlag]   nullable 
  * @property {string} [userDefinedField1]  Max length: 50;   
  * @property {string} [userDefinedField2]  Max length: 50;   
  * @property {string} [userDefinedField3]  Max length: 50;   
  * @property {string} [userDefinedField4]  Max length: 50;   
  * @property {string} [userDefinedField5]  Max length: 50;   
  * @property {string} [userDefinedField6]  Max length: 50;   
  * @property {string} [userDefinedField7]  Max length: 50;   
  * @property {string} [userDefinedField8]  Max length: 50;   
  * @property {string} [userDefinedField9]  Max length: 50;   
  * @property {string} [userDefinedField10]  Max length: 50;   
  * @property {SystemLocationReference} [companyLocation]    
  * @property {array} [communicationItems]    
  * @property {array} [types]    
  * @property {array} [integratorTags]    
  * @property {array} [customFields]    
  * @property {DocumentReference} [photo]    
  * @property {boolean} [ignoreDuplicates]    
  * @property {object} [_info]    
  * @property {array} [typeIds] Integrer array of Contact_Type_Recids to be assigned to contact that can be passed in only during new contact creation (post)
            To update existing contacts type, use the /company/contactTypeAssociations or /company/contacts/{ID}/typeAssociations endpoints   
 */

/**
 * PortalSecurity
 * @typedef {object} PortalSecurity
 * @property {string} [identifier]
 * @property {boolean} [enabled]   nullable
 */

/**
 * ContactCommunication
 * @typedef {object} ContactCommunication
 * @property {number} [id]  int32
 * @property {number} [contactId]  int32 nullable
 * @property {CommunicationTypeReference} [type]
 * @property {string} value  Max length: 250;
 * @property {string} [extension]  Max length: 15;
 * @property {boolean} [defaultFlag]   nullable
 * @property {string} [mobileGuid]  uuid nullable
 * @property {string} [communicationType]   nullable
 * @property {string} [domain]
 * @property {object} [_info]
 */

/**
 * ContactGroup
 * @typedef {object} ContactGroup
 * @property {number} [id]  int32
 * @property {GroupReference} [group]
 * @property {ContactReference} [contact]
 * @property {string} [description]  Max length: 50;
 * @property {boolean} [unsubscribeFlag]   nullable
 * @property {string} [companyUnsubcribedEmailMessage]
 * @property {string} [companyGroupUnsubscribedEmailMessage]
 * @property {string} [contactUnsubscribedEmailMessage]
 * @property {string} [contactGroupUnsubscribedEmailMessage]
 * @property {object} [_info]
 */

/**
 * ContactNote
 * @typedef {object} ContactNote
 * @property {number} [id]  int32
 * @property {number} [contactId]  int32 nullable
 * @property {string} text
 * @property {NoteTypeReference} [type]
 * @property {boolean} [flagged]   nullable
 * @property {string} [enteredBy]
 * @property {object} [_info]
 */

/**
 * ContactContactTypeAssociationContactTypeAssociation
 * @typedef {object} ContactContactTypeAssociationContactTypeAssociation
 * @property {number} [id]  int32
 * @property {ContactTypeReference} [type]
 * @property {ContactReference} [contact]
 * @property {object} [_info]
 */

/**
 * ContactDepartment
 * @typedef {object} ContactDepartment
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {object} [_info]
 */

/**
 * ContactDepartmentInfo
 * @typedef {object} ContactDepartmentInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * ContactRelationship
 * @typedef {object} ContactRelationship
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {object} [_info]
 */

/**
 * ContactType
 * @typedef {object} ContactType
 * @property {number} [id]  int32
 * @property {string} description  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [serviceAlertFlag]   nullable
 * @property {string} [serviceAlertMessage]  Max length: 150;
 * @property {object} [_info]
 */

/**
 * ContactTypeInfo
 * @typedef {object} ContactTypeInfo
 * @property {number} [id]  int32
 * @property {string} [description]
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [serviceAlertFlag]   nullable
 * @property {string} [serviceAlertMessage]
 * @property {object} [_info]
 */

/**
 * ValidatePortalResponse
 * @typedef {object} ValidatePortalResponse
 * @property {boolean} [success]
 * @property {number} [contactId]  int32
 */

/**
 * CompanyContactTypeAssociation
 * @typedef {object} CompanyContactTypeAssociation
 * @property {number} [id]  int32
 * @property {ContactTypeReference} [type]
 * @property {ContactReference} [contact]
 * @property {object} [_info]
 */

/**
 * Country
 * @typedef {object} Country
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {CurrencyReference} [currency]
 * @property {string} [cityCaption]  Max length: 25;
 * @property {string} [stateCaption]  Max length: 25;
 * @property {string} [zipCaption]  Max length: 25;
 * @property {number} [zipMinimumLength]  int32 nullable
 * @property {string} [dialingPrefix]  Max length: 5;
 * @property {AddressFormatReference} [addressFormat]
 * @property {string} [countryCode]  Max length: 2;
 * @property {string} [localizationCaptionOne]  Max length: 25;
 * @property {string} [localizationValueOne]  Max length: 50;
 * @property {object} [_info]
 */

/**
 * CountryInfo
 * @typedef {object} CountryInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [defaultFlag]   nullable
 * @property {string} [cityCaption]
 * @property {string} [stateCaption]
 * @property {string} [zipCaption]
 * @property {string} [dialingPrefix]
 * @property {string} [localizationCaptionOne]
 * @property {object} [_info]
 */

/**
 * EntityType
 * @typedef {object} EntityType
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} [code]
 */

/**
 * EntityTypeInfo
 * @typedef {object} EntityTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 */

/**
 * ManagedDevicesIntegration
 * @typedef {object} ManagedDevicesIntegration
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {string} solution  Max length: 30;
 * @property {string} [portalUrl]  Max length: 200;
 * @property {string} loginBy   nullable
 * @property {string} [globalLoginUsername] This is only required when globalLoginFlag = true Max length: 50;
 * @property {string} [globalLoginPassword] This is only required when globalLoginFlag = true Max length: 50;
 * @property {string} defaultBillingLevel   nullable
 * @property {string} [managementItSetupType]
 * @property {SystemLocationReference} [defaultLocation]
 * @property {SystemDepartmentReference} [defaultDepartment]
 * @property {IntegratorLoginReference} [integratorLogin]
 * @property {boolean} [matchOnSerialNumberFlag]   nullable
 * @property {boolean} [disableNewCrossReferencesFlag]   nullable
 * @property {boolean} [configBillCustomerFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ManagedDevicesIntegrationInfo
 * @typedef {object} ManagedDevicesIntegrationInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} [solution]
 * @property {string} [managementItSetupType]
 * @property {object} [_info]
 */

/**
 * ManagedDevicesIntegrationCrossReference
 * @typedef {object} ManagedDevicesIntegrationCrossReference
 * @property {number} [id]  int32
 * @property {ManagedDevicesIntegrationReference} [managedDevicesIntegration]
 * @property {string} [vendorType]  Max length: 255;
 * @property {string} [vendorLevel]  Max length: 255;
 * @property {AgreementTypeReference} [agreementType]
 * @property {IvItemReference} [product]
 * @property {ConfigurationTypeReference} [configurationType]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ManagedDevicesIntegrationLogin
 * @typedef {object} ManagedDevicesIntegrationLogin
 * @property {number} [id]  int32
 * @property {ManagedDevicesIntegrationReference} [managedDevicesIntegration]
 * @property {string} username  Max length: 50;
 * @property {string} [password]  Max length: 50;
 * @property {MemberReference} [member]
 * @property {object} [_info]
 */

/**
 * ManagedDevicesIntegrationNotification
 * @typedef {object} ManagedDevicesIntegrationNotification
 * @property {number} [id]  int32
 * @property {ManagedDevicesIntegrationReference} [managedDevicesIntegration]
 * @property {NotificationRecipientReference} [notifyWho]
 * @property {MemberReference} [member]
 * @property {string} logType   nullable
 * @property {object} [_info]
 */

/**
 * Management
 * @typedef {object} Management
 * @property {number} [id]  int32
 * @property {string} [runTime]  date-time
 * @property {ConfigurationStatusReference} [addedConfigurationStatus]
 * @property {ConfigurationStatusReference} [deletedConfigurationStatus]
 * @property {IntegratorLoginReference} [integratorLogin]
 * @property {boolean} scheduleExecutiveSummaryReportFlag   nullable
 * @property {number} [executiveSummaryReportScheduleDay] This is only required when scheduleExecutiveSummaryReportFlag = true int32 nullable
 * @property {number} [executiveSummaryReportScheduleHour] This is only required when scheduleExecutiveSummaryReportFlag = true. Input should be in 24 hour format, ie 2pm is 14 int32 nullable
 * @property {number} [executiveSummaryReportScheduleMinute] This is only required when scheduleExecutiveSummaryReportFlag = true int32 nullable
 * @property {object} [_info]
 */

/**
 * ManagementLogDocumentInfo
 * @typedef {object} ManagementLogDocumentInfo
 * @property {string} [fullPathFileName]
 * @property {string} [fileSize]
 */

/**
 * ManagementBackup
 * @typedef {object} ManagementBackup
 * @property {number} [id]  int32
 * @property {AgreementTypeReference} [type]
 * @property {CatalogItemReference} [item]
 * @property {string} billingLevel   nullable
 * @property {object} [_info]
 */

/**
 * ManagementItSolution
 * @typedef {object} ManagementItSolution
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {string} managementItSolutionType   nullable
 * @property {string} [managementSolutionName] This is only required when managementItSolutionType is Custom Max length: 30;
 * @property {string} [managementServerUrl] This is only required for Level Platforms Max length: 200;
 * @property {string} [webserviceOverrideUrl] This is only required for Level Platforms when overrideWebServiceLocationFlag is true Max length: 200;
 * @property {string} [portalOverrideLoginUrl] This is only required for Level Platforms when overrideLoginLocationFlag is true Max length: 200;
 * @property {boolean} [globalLoginFlag]   nullable
 * @property {string} [globalLoginUsername] This is only required when globalLoginFlag = true Max length: 50;
 * @property {string} [globalLoginPassword] This is only required when globalLoginFlag = true Max length: 50;
 * @property {boolean} [usingSslFlag]   nullable
 * @property {string} [nAbleUsername] This is only required for N-Able solution Max length: 50;
 * @property {string} [nAblePassword] This is only required for N-Able solution Max length: 50;
 * @property {boolean} [overrideWebServiceLocationFlag]   nullable
 * @property {boolean} [overrideLoginLocationFlag]   nullable
 * @property {string} [continuumApiUsername] This is only required for Continuum solution Max length: 100;
 * @property {string} [continuumApiPassword] This is only required for Continuum solution Max length: 100;
 * @property {string} [levelApiUsername] This is only required for Level Platforms solution Max length: 100;
 * @property {string} [levelApiPassword] This is only required for Level Platforms solution Max length: 100;
 * @property {string} [levelVarDomain] This is only required for Level Platforms solution Max length: 100;
 * @property {boolean} [noDisplayFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ManagementItSolutionAgreementInterfaceParameter
 * @typedef {object} ManagementItSolutionAgreementInterfaceParameter
 * @property {number} [id]  int32
 * @property {ManagedDevicesIntegrationReference} [managedDevicesIntegration]
 * @property {AgreementTypeReference} [agreementType]
 * @property {IvItemReference} [serverProduct]
 * @property {IvItemReference} [workstationProduct]
 * @property {IvItemReference} [spamStatsProduct]
 * @property {object} [_info]
 */

/**
 * MarketDescription
 * @typedef {object} MarketDescription
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {object} [_info]
 */

/**
 * MarketDescriptionInfo
 * @typedef {object} MarketDescriptionInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * CompanyNoteType
 * @typedef {object} CompanyNoteType
 * @property {number} [id]  int32
 * @property {string} [identifier]  Max length: 15;
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [importFlag]   nullable
 * @property {object} [_info]
 */

/**
 * CompanyNoteTypeInfo
 * @typedef {object} CompanyNoteTypeInfo
 * @property {number} [id]  int32
 * @property {string} [identifier]
 * @property {string} [name]
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * OwnershipType
 * @typedef {object} OwnershipType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 200;
 * @property {object} [_info]
 */

/**
 * OwnershipTypeInfo
 * @typedef {object} OwnershipTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * PortalConfiguration
 * @typedef {object} PortalConfiguration
 * @property {number} [id] An existing Portal Configuration id is required when copying a Portal Configuration. int32
 * @property {string} name  Max length: 150;
 * @property {boolean} [defaultFlag]   nullable
 * @property {CompanyReference} [company]
 * @property {string} [loginBackgroundColor]  Max length: 7;
 * @property {string} [portalBackgroundColor]  Max length: 7;
 * @property {string} [menuColor]  Max length: 7;
 * @property {string} [buttonColor]  Max length: 7;
 * @property {string} [headerColor]  Max length: 7;
 * @property {string} [url]  Max length: 1000;
 * @property {string} [language]   nullable
 * @property {string} [welcomeText]  Max length: 4000;
 * @property {array} [boardIds]
 * @property {array} [agreementTypeIds]
 * @property {array} [configTypeIds]
 * @property {array} [locationIds]
 * @property {boolean} [portalImageCopySuccessFlag]   nullable
 * @property {boolean} [displayVendorFlag]   nullable
 * @property {object} [_info]
 */

/**
 * PortalConfigurationInvoiceSetup
 * @typedef {object} PortalConfigurationInvoiceSetup
 * @property {number} [id]  int32
 * @property {PortalConfigurationReference} [portalConfiguration]
 * @property {boolean} [displayInvPmtFlag]   nullable
 * @property {boolean} [allowInvPmtFlag]   nullable
 * @property {SystemLocationReference} [location]
 * @property {PortalConfigurationPaymentProcessorReference} [paymentProcessor]
 * @property {string} [login]
 * @property {string} [password]
 * @property {string} [urlOverride]
 * @property {array} [billingStatusIds]
 * @property {boolean} [addAllStatuses]   nullable
 * @property {boolean} [removeAllStatuses]   nullable
 * @property {object} [_info]
 */

/**
 * PortalConfigurationOpportunitySetup
 * @typedef {object} PortalConfigurationOpportunitySetup
 * @property {number} [id]  int32
 * @property {array} [opportunityStatusRecIDs]
 * @property {boolean} [addAllOpportunityStatuses]   nullable
 * @property {boolean} [removeAllOpportunityStatuses]   nullable
 * @property {array} [opportunityTypeRecIDs]
 * @property {boolean} [addAllOpportunityTypes]   nullable
 * @property {boolean} [removeAllOpportunityTypes]   nullable
 * @property {boolean} [restrictViewByOpportunityStatusFlag]   nullable
 * @property {boolean} [restrictViewByOpportunityTypeFlag]   nullable
 * @property {boolean} [acceptanceChangeStatusFlag]   nullable
 * @property {boolean} [acceptanceCreateActivityFlag]   nullable
 * @property {OpportunityStatusReference} [acceptanceOpportunityStatus]
 * @property {boolean} [acceptanceSendEmailFlag]   nullable
 * @property {string} [acceptanceEmailFromFirstName]
 * @property {string} [acceptanceEmailFromLastName]
 * @property {string} [acceptanceEmailSubject]
 * @property {string} [acceptanceEmailBody]
 * @property {string} [acceptanceFromEmail] Required when acceptanceSendEmailFlag is true
 * @property {ActivityTypeReference} [acceptanceEmailActivityType]
 * @property {MemberReference} [acceptanceEmailAssignedByMember]
 * @property {boolean} [rejectionChangeStatusFlag]   nullable
 * @property {boolean} [rejectionCreateActivityFlag]   nullable
 * @property {OpportunityStatusReference} [rejectionOpportunityStatus]
 * @property {boolean} [rejectionSendEmailFlag]   nullable
 * @property {string} [rejectionEmailFromFirstName]
 * @property {string} [rejectionEmailFromLastName]
 * @property {string} [rejectionFromEmail] Required when rejectionSendEmailFlag is true
 * @property {string} [rejectionEmailSubject]
 * @property {string} [rejectionEmailBody]
 * @property {ActivityTypeReference} [rejectionEmailActivityType]
 * @property {MemberReference} [rejectionEmailAssignedByMember]
 * @property {boolean} [confirmationSendEmailFlag]   nullable
 * @property {boolean} [confirmationEmailUseDefaultCompanyEmailAddressFlag]   nullable
 * @property {string} [confirmationEmailFromFirstName]
 * @property {string} [confirmationEmailFromLastName]
 * @property {string} [confirmationFromEmail] Required when confirmationSendEmailFlag is true
 * @property {string} [confirmationEmailSubject]
 * @property {string} [confirmationEmailBody]
 * @property {object} [_info]
 */

/**
 * PortalConfigurationPasswordEmailSetup
 * @typedef {object} PortalConfigurationPasswordEmailSetup
 * @property {number} [id]  int32
 * @property {boolean} [validPasswordEmailUseCustomEmailFlag]   nullable
 * @property {string} [validPasswordEmailFromFirstName]
 * @property {string} [validPasswordEmailFromLastName]
 * @property {string} [validPasswordEmailFromEmail] Required when validPasswordEmailUseCustomEmailFlag is true
 * @property {string} [validPasswordEmailSubject]
 * @property {string} [validPasswordEmailBody]
 * @property {boolean} [invalidPasswordEmailUseCustomEmailFlag]   nullable
 * @property {string} [invalidPasswordEmailFromFirstName]
 * @property {string} [invalidPasswordEmailFromLastName]
 * @property {string} [invalidPasswordEmailFromEmail] Required when invalidPasswordEmailUseCustomEmailFlag is true
 * @property {string} [invalidPasswordEmailSubject]
 * @property {string} [invalidPasswordEmailBody]
 * @property {object} [_info]
 */

/**
 * PortalConfigurationProjectSetup
 * @typedef {object} PortalConfigurationProjectSetup
 * @property {number} [id]  int32
 * @property {PortalConfigurationReference} [portalConfig]
 * @property {boolean} [projectNameFlag]   nullable
 * @property {boolean} [projectTypeFlag]   nullable
 * @property {boolean} [statusFlag]   nullable
 * @property {boolean} [projectManagerFlag]   nullable
 * @property {boolean} [billingMethodFlag]   nullable
 * @property {boolean} [contactFlag]   nullable
 * @property {boolean} [estimatedStartFlag]   nullable
 * @property {boolean} [estimatedEndFlag]   nullable
 * @property {boolean} [descriptionFlag]   nullable
 * @property {boolean} [lastUpdatedFlag]   nullable
 * @property {string} onlyDisplay   nullable
 * @property {boolean} [timeMaterialBudgetHrsFlag]   nullable
 * @property {boolean} [timeMaterialScheduledStartFlag]   nullable
 * @property {boolean} [timeMaterialScheduledFinishFlag]   nullable
 * @property {boolean} [timeMaterialScheduledHrsFlag]   nullable
 * @property {boolean} [timeMaterialActualStartFlag]   nullable
 * @property {boolean} [timeMaterialActualFinishFlag]   nullable
 * @property {boolean} [timeMaterialActualHrsFlag]   nullable
 * @property {boolean} [timeMaterialBillFlag]   nullable
 * @property {boolean} [timeMaterialStatusFlag]   nullable
 * @property {boolean} [timeMaterialAssignedFlag]   nullable
 * @property {boolean} [fixedFeeBudgetHrsFlag]   nullable
 * @property {boolean} [fixedFeeScheduledStartFlag]   nullable
 * @property {boolean} [fixedFeeScheduledFinishFlag]   nullable
 * @property {boolean} [fixedFeeScheduledHrsFlag]   nullable
 * @property {boolean} [fixedFeeActualStartFlag]   nullable
 * @property {boolean} [fixedFeeActualFinishFlag]   nullable
 * @property {boolean} [fixedFeeActualHrsFlag]   nullable
 * @property {boolean} [fixedFeeBillFlag]   nullable
 * @property {boolean} [fixedFeeStatusFlag]   nullable
 * @property {boolean} [fixedFeeAssignedFlag]   nullable
 * @property {boolean} [projectIssueBudgetHrsFlag]   nullable
 * @property {boolean} [projectIssueScheduledStartFlag]   nullable
 * @property {boolean} [projectIssueScheduledFinishFlag]   nullable
 * @property {boolean} [projectIssueScheduledHrsFlag]   nullable
 * @property {boolean} [projectIssueActualStartFlag]   nullable
 * @property {boolean} [projectIssueActualFinishFlag]   nullable
 * @property {boolean} [projectIssueActualHrsFlag]   nullable
 * @property {boolean} [projectIssueBillFlag]   nullable
 * @property {boolean} [projectIssueStatusFlag]   nullable
 * @property {boolean} [projectIssueAssignedFlag]   nullable
 * @property {boolean} [projectDetailTotalHoursFlag]   nullable
 * @property {object} [_info]
 */

/**
 * PortalConfigurationServiceSetup
 * @typedef {object} PortalConfigurationServiceSetup
 * @property {number} [id]  int32
 * @property {boolean} [serviceTypeFlag]   nullable
 * @property {boolean} [serviceSubTypeFlag]   nullable
 * @property {boolean} [serviceSubTypeItemFlag]   nullable
 * @property {boolean} [statusFlag]   nullable
 * @property {boolean} [siteNameFlag]   nullable
 * @property {boolean} [enteredDateFlag]   nullable
 * @property {boolean} [lastUpdateFlag]   nullable
 * @property {boolean} [requiredDateFlag]   nullable
 * @property {boolean} [contactFlag]   nullable
 * @property {boolean} [assignedResourcesFlag]   nullable
 * @property {boolean} [slaInfoFlag]   nullable
 * @property {boolean} [serviceBoardFlag]   nullable
 * @property {boolean} [budgetHoursFlag]   nullable
 * @property {boolean} [actualHoursFlag]   nullable
 * @property {boolean} [approvalStatusFlag]   nullable
 * @property {boolean} [openTasksFlag]   nullable
 * @property {boolean} [closedTasksFlag]   nullable
 * @property {boolean} [enableChatAssistFlag]   nullable
 * @property {string} displayClosedTicketsOption   nullable
 * @property {ServiceSignoffReference} [timeMaterialsTicketTemplate]
 * @property {ServiceSignoffReference} [fixedFeeTicketTemplate]
 * @property {object} [_info]
 */

/**
 * PortalConfigurationPaymentProcessor
 * @typedef {object} PortalConfigurationPaymentProcessor
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} [testURL]
 */

/**
 * PortalSecurityLevel
 * @typedef {object} PortalSecurityLevel
 * @property {number} [id]  int32
 * @property {string} [captionIdentifier]
 * @property {boolean} [isDefaultFlag]   nullable
 * @property {string} [caption]  Max length: 50;
 * @property {object} [_info]
 */

/**
 * PortalSecuritySetting
 * @typedef {object} PortalSecuritySetting
 * @property {number} [id]  int32
 * @property {string} [functionIdentifier]
 * @property {string} [functionDescription]
 * @property {boolean} [levelOne]   nullable
 * @property {boolean} [levelTwo]   nullable
 * @property {boolean} [levelThree]   nullable
 * @property {boolean} [levelFour]   nullable
 * @property {boolean} [levelFive]   nullable
 * @property {boolean} [levelSix]   nullable
 * @property {object} [_info]
 */

/**
 * State
 * @typedef {object} State
 * @property {number} [id]  int32
 * @property {string} identifier  Max length: 50;
 * @property {string} name  Max length: 50;
 * @property {CountryReference} [country]
 * @property {object} [_info]
 */

/**
 * StateInfo
 * @typedef {object} StateInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} [identifier]
 * @property {CountryReference} [country]
 * @property {object} [_info]
 */

/**
 * TeamRole
 * @typedef {object} TeamRole
 * @property {number} [id]  int32
 * @property {string} name  Max length: 20;
 * @property {boolean} [accountManagerFlag]   nullable
 * @property {boolean} [techFlag]   nullable
 * @property {boolean} [salesFlag]   nullable
 * @property {object} [_info]
 */

/**
 * TeamRoleInfo
 * @typedef {object} TeamRoleInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * Track
 * @typedef {object} Track
 * @property {number} [id]  int32
 * @property {string} name  Max length: 100;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {array} [notifyActionIds]
 * @property {object} [_info]
 */

/**
 * TrackAction
 * @typedef {object} TrackAction
 * @property {number} [id]  int32
 * @property {string} notifyType
 * @property {ServiceTemplateReference} [serviceTemplate]
 * @property {MemberReference} [specificMemberTo]
 * @property {string} [emailRecipient]  Max length: 250;
 * @property {MemberReference} [specificMemberFrom]
 * @property {string} [emailFrom]  Max length: 250;
 * @property {string} [subject]  Max length: 100;
 * @property {string} [notes]
 * @property {ActivityTypeReference} [activityType]
 * @property {ActivityStatusReference} [activityStatus]
 * @property {CompanyStatusReference} [companyStatus]
 * @property {TrackReference} [track]
 * @property {TrackReference} [attachedTrack]
 * @property {GroupReference} [group]
 * @property {ContactReference} [ccContact]
 * @property {ContactReference} [bccContact]
 * @property {number} [daysToExecute]  int32 nullable
 * @property {NotificationRecipientReference} [notifyWho]
 * @property {NotificationRecipientReference} [notifyFrom]
 * @property {object} [_info]
 */

export default class Company extends Manage {
  constructor(props) {
    super(props)
  }

  /**
   * Get List of AddressFormat
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AddressFormat[]>}
   */
  getCompanyAddressFormats(params = {}) {
    return this.request({
      path: `/company/addressFormats`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AddressFormat
   * @param {AddressFormat} addressFormat addressFormat
   * @returns {Promise<AddressFormat>}
   */
  postCompanyAddressFormats(addressFormat) {
    return this.request({
      path: `/company/addressFormats`,
      method: 'post',
      data: addressFormat,
    })
  }
  /**
   * Get AddressFormat
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
   * @returns {Promise<AddressFormat>}
   */
  getCompanyAddressFormatsById(id, params = {}) {
    return this.request({
      path: `/company/addressFormats/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AddressFormat
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyAddressFormatsById(id) {
    return this.request({
      path: `/company/addressFormats/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put AddressFormat
   * @param {number} id
   * @param {AddressFormat} addressFormat addressFormat
   * @returns {Promise<AddressFormat>}
   */
  putCompanyAddressFormatsById(id, addressFormat) {
    return this.request({
      path: `/company/addressFormats/${id}`,
      method: 'put',
      data: addressFormat,
    })
  }

  /**
   * Patch AddressFormat
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AddressFormat>}
   */
  patchCompanyAddressFormatsById(id, patchOperations) {
    return this.request({
      path: `/company/addressFormats/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get AddressFormatInfos
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
   * @returns {Promise<AddressFormatInfo>}
   */
  getCompanyAddressFormatsByIdInfo(id, params = {}) {
    return this.request({
      path: `/company/addressFormats/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of AddressFormat
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
  getCompanyAddressFormatsCount(params = {}) {
    return this.request({
      path: `/company/addressFormats/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AddressFormatInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AddressFormatInfo[]>}
   */
  getCompanyAddressFormatsInfo(params = {}) {
    return this.request({
      path: `/company/addressFormats/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of AddressFormatInfos
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
  getCompanyAddressFormatsInfoCount(params = {}) {
    return this.request({
      path: `/company/addressFormats/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BillingSetupInfos
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
  getCompanyBillingSetupsInfoCount(params = {}) {
    return this.request({
      path: `/company/billingSetups/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CommunicationType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CommunicationType[]>}
   */
  getCompanyCommunicationTypes(params = {}) {
    return this.request({
      path: `/company/communicationTypes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CommunicationType
   * @param {CommunicationType} communicationType communicationType
   * @returns {Promise<CommunicationType>}
   */
  postCompanyCommunicationTypes(communicationType) {
    return this.request({
      path: `/company/communicationTypes`,
      method: 'post',
      data: communicationType,
    })
  }
  /**
   * Get CommunicationType
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
   * @returns {Promise<CommunicationType>}
   */
  getCompanyCommunicationTypesById(id, params = {}) {
    return this.request({
      path: `/company/communicationTypes/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CommunicationType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCommunicationTypesById(id) {
    return this.request({
      path: `/company/communicationTypes/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put CommunicationType
   * @param {number} id
   * @param {CommunicationType} communicationType communicationType
   * @returns {Promise<CommunicationType>}
   */
  putCompanyCommunicationTypesById(id, communicationType) {
    return this.request({
      path: `/company/communicationTypes/${id}`,
      method: 'put',
      data: communicationType,
    })
  }

  /**
   * Patch CommunicationType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CommunicationType>}
   */
  patchCompanyCommunicationTypesById(id, patchOperations) {
    return this.request({
      path: `/company/communicationTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get CommunicationTypeInfos
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
   * @returns {Promise<CommunicationTypeInfo>}
   */
  getCompanyCommunicationTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/company/communicationTypes/${id}/info`,
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
  getCompanyCommunicationTypesByIdUsages(id, params = {}) {
    return this.request({
      path: `/company/communicationTypes/${id}/usages`,
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
  getCompanyCommunicationTypesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/company/communicationTypes/${id}/usages/list`,
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
  getCompanyCommunicationTypesCount(params = {}) {
    return this.request({
      path: `/company/communicationTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CommunicationTypeInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CommunicationTypeInfo[]>}
   */
  getCompanyCommunicationTypesInfo(params = {}) {
    return this.request({
      path: `/company/communicationTypes/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CommunicationTypeInfos
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
  getCompanyCommunicationTypesInfoCount(params = {}) {
    return this.request({
      path: `/company/communicationTypes/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ConnectWise.Apis.v3_0.v2015_3.Company.Company.Company
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Company[]>}
   */
  getCompanyCompanies(params = {}) {
    return this.request({
      path: `/company/companies`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ConnectWise.Apis.v3_0.v2015_3.Company.Company.Company
   * @param {Company} company company
   * @returns {Promise<Company>}
   */
  postCompanyCompanies(company) {
    return this.request({
      path: `/company/companies`,
      method: 'post',
      data: company,
    })
  }
  /**
   * Get ConnectWise.Apis.v3_0.v2015_3.Company.Company.Company
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
   * @returns {Promise<Company>}
   */
  getCompanyCompaniesById(id, params = {}) {
    return this.request({
      path: `/company/companies/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ConnectWise.Apis.v3_0.v2015_3.Company.Company.Company
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCompaniesById(id) {
    return this.request({
      path: `/company/companies/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ConnectWise.Apis.v3_0.v2015_3.Company.Company.Company
   * @param {number} id
   * @param {Company} company company
   * @returns {Promise<Company>}
   */
  putCompanyCompaniesById(id, company) {
    return this.request({
      path: `/company/companies/${id}`,
      method: 'put',
      data: company,
    })
  }

  /**
   * Patch ConnectWise.Apis.v3_0.v2015_3.Company.Company.Company
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Company>}
   */
  patchCompanyCompaniesById(id, patchOperations) {
    return this.request({
      path: `/company/companies/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @param {CompanyMerge} merge merge
   * @returns {Promise<SuccessResponse>}
   */
  postCompanyCompaniesByIdMerge(id, merge) {
    return this.request({
      path: `/company/companies/${id}/merge`,
      method: 'post',
      data: merge,
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
  getCompanyCompaniesByIdUsages(id, params = {}) {
    return this.request({
      path: `/company/companies/${id}/usages`,
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
  getCompanyCompaniesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/company/companies/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CompanyCustomNote
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
   * @returns {Promise<CompanyCustomNote[]>}
   */
  getCompanyCompaniesByParentIdCustomStatusNotes(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/customStatusNotes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CompanyCustomNote
   * @param {number} parentId
   * @param {CompanyCustomNote} customNote customNote
   * @returns {Promise<CompanyCustomNote>}
   */
  postCompanyCompaniesByParentIdCustomStatusNotes(parentId, customNote) {
    return this.request({
      path: `/company/companies/${parentId}/customStatusNotes`,
      method: 'post',
      data: customNote,
    })
  }
  /**
   * Get CompanyCustomNote
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
   * @returns {Promise<CompanyCustomNote>}
   */
  getCompanyCompaniesByParentIdCustomStatusNotesById(id, parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/customStatusNotes/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CompanyCustomNote
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCompaniesByParentIdCustomStatusNotesById(id, parentId) {
    return this.request({
      path: `/company/companies/${parentId}/customStatusNotes/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put CompanyCustomNote
   * @param {number} id
   * @param {number} parentId
   * @param {CompanyCustomNote} customNote customNote
   * @returns {Promise<CompanyCustomNote>}
   */
  putCompanyCompaniesByParentIdCustomStatusNotesById(id, parentId, customNote) {
    return this.request({
      path: `/company/companies/${parentId}/customStatusNotes/{id}`,
      method: 'put',
      data: customNote,
    })
  }

  /**
   * Patch CompanyCustomNote
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CompanyCustomNote>}
   */
  patchCompanyCompaniesByParentIdCustomStatusNotesById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/companies/${parentId}/customStatusNotes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of CompanyCustomNote
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
  getCompanyCompaniesByParentIdCustomStatusNotesCount(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/customStatusNotes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CompanyGroup
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
   * @returns {Promise<CompanyGroup[]>}
   */
  getCompanyCompaniesByParentIdGroups(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/groups`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CompanyGroup
   * @param {number} parentId
   * @param {CompanyGroup} companyGroup companyGroup
   * @returns {Promise<CompanyGroup>}
   */
  postCompanyCompaniesByParentIdGroups(parentId, companyGroup) {
    return this.request({
      path: `/company/companies/${parentId}/groups`,
      method: 'post',
      data: companyGroup,
    })
  }
  /**
   * Get CompanyGroup
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
   * @returns {Promise<CompanyGroup>}
   */
  getCompanyCompaniesByParentIdGroupsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/groups/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CompanyGroup
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCompaniesByParentIdGroupsById(id, parentId) {
    return this.request({
      path: `/company/companies/${parentId}/groups/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put CompanyGroup
   * @param {number} id
   * @param {number} parentId
   * @param {CompanyGroup} companyGroup companyGroup
   * @returns {Promise<CompanyGroup>}
   */
  putCompanyCompaniesByParentIdGroupsById(id, parentId, companyGroup) {
    return this.request({
      path: `/company/companies/${parentId}/groups/{id}`,
      method: 'put',
      data: companyGroup,
    })
  }

  /**
   * Patch CompanyGroup
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CompanyGroup>}
   */
  patchCompanyCompaniesByParentIdGroupsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/companies/${parentId}/groups/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of CompanyGroup
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
  getCompanyCompaniesByParentIdGroupsCount(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/groups/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManagementReportNotification
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
   * @returns {Promise<ManagementReportNotification[]>}
   */
  getCompanyCompaniesByParentIdManagementReportNotifications(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/managementReportNotifications`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ManagementReportNotification
   * @param {number} parentId
   * @param {ManagementReportNotification} managementReportNotification managementReportNotification
   * @returns {Promise<ManagementReportNotification>}
   */
  postCompanyCompaniesByParentIdManagementReportNotifications(
    parentId,
    managementReportNotification,
  ) {
    return this.request({
      path: `/company/companies/${parentId}/managementReportNotifications`,
      method: 'post',
      data: managementReportNotification,
    })
  }
  /**
   * Get ManagementReportNotification
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
   * @returns {Promise<ManagementReportNotification>}
   */
  getCompanyCompaniesByParentIdManagementReportNotificationsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/managementReportNotifications/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ManagementReportNotification
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCompaniesByParentIdManagementReportNotificationsById(id, parentId) {
    return this.request({
      path: `/company/companies/${parentId}/managementReportNotifications/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ManagementReportNotification
   * @param {number} id
   * @param {number} parentId
   * @param {ManagementReportNotification} managementReportNotification managementReportNotification
   * @returns {Promise<ManagementReportNotification>}
   */
  putCompanyCompaniesByParentIdManagementReportNotificationsById(
    id,
    parentId,
    managementReportNotification,
  ) {
    return this.request({
      path: `/company/companies/${parentId}/managementReportNotifications/{id}`,
      method: 'put',
      data: managementReportNotification,
    })
  }

  /**
   * Patch ManagementReportNotification
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ManagementReportNotification>}
   */
  patchCompanyCompaniesByParentIdManagementReportNotificationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/companies/${parentId}/managementReportNotifications/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ManagementReportNotification
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
  getCompanyCompaniesByParentIdManagementReportNotificationsCount(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/managementReportNotifications/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManagementReportSetup
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
   * @returns {Promise<ManagementReportSetup[]>}
   */
  getCompanyCompaniesByParentIdManagementReportSetup(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/managementReportSetup`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ManagementReportSetup
   * @param {number} parentId
   * @param {ManagementReportSetup} managementReportSetup managementReportSetup
   * @returns {Promise<ManagementReportSetup>}
   */
  postCompanyCompaniesByParentIdManagementReportSetup(parentId, managementReportSetup) {
    return this.request({
      path: `/company/companies/${parentId}/managementReportSetup`,
      method: 'post',
      data: managementReportSetup,
    })
  }
  /**
   * Put ManagementReportSetup
   * @param {number} id
   * @param {number} parentId
   * @param {ManagementReportSetup} managementReportSetup managementReportSetup
   * @returns {Promise<ManagementReportSetup>}
   */
  putCompanyCompaniesByParentIdManagementReportSetupById(id, parentId, managementReportSetup) {
    return this.request({
      path: `/company/companies/${parentId}/managementReportSetup/{id}`,
      method: 'put',
      data: managementReportSetup,
    })
  }

  /**
   * Patch ManagementReportSetup
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ManagementReportSetup>}
   */
  patchCompanyCompaniesByParentIdManagementReportSetupById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/companies/${parentId}/managementReportSetup/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of CompanyManagementSummary
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
   * @returns {Promise<CompanyManagementSummary[]>}
   */
  getCompanyCompaniesByParentIdManagementSummaryReports(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/managementSummaryReports`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CompanyManagementSummary
   * @param {number} parentId
   * @param {CompanyManagementSummary} managementSummary managementSummary
   * @returns {Promise<CompanyManagementSummary>}
   */
  postCompanyCompaniesByParentIdManagementSummaryReports(parentId, managementSummary) {
    return this.request({
      path: `/company/companies/${parentId}/managementSummaryReports`,
      method: 'post',
      data: managementSummary,
    })
  }
  /**
   * Get CompanyManagementSummary
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
   * @returns {Promise<CompanyManagementSummary>}
   */
  getCompanyCompaniesByParentIdManagementSummaryReportsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/managementSummaryReports/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CompanyManagementSummary
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCompaniesByParentIdManagementSummaryReportsById(id, parentId) {
    return this.request({
      path: `/company/companies/${parentId}/managementSummaryReports/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put CompanyManagementSummary
   * @param {number} id
   * @param {number} parentId
   * @param {CompanyManagementSummary} managementSummary managementSummary
   * @returns {Promise<CompanyManagementSummary>}
   */
  putCompanyCompaniesByParentIdManagementSummaryReportsById(id, parentId, managementSummary) {
    return this.request({
      path: `/company/companies/${parentId}/managementSummaryReports/{id}`,
      method: 'put',
      data: managementSummary,
    })
  }

  /**
   * Patch CompanyManagementSummary
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CompanyManagementSummary>}
   */
  patchCompanyCompaniesByParentIdManagementSummaryReportsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/companies/${parentId}/managementSummaryReports/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of CompanyManagementSummary
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
  getCompanyCompaniesByParentIdManagementSummaryReportsCount(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/managementSummaryReports/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CompanyNote
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
   * @returns {Promise<CompanyNote[]>}
   */
  getCompanyCompaniesByParentIdNotes(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/notes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CompanyNote
   * @param {number} parentId
   * @param {CompanyNote} companyNote companyNote
   * @returns {Promise<CompanyNote>}
   */
  postCompanyCompaniesByParentIdNotes(parentId, companyNote) {
    return this.request({
      path: `/company/companies/${parentId}/notes`,
      method: 'post',
      data: companyNote,
    })
  }
  /**
   * Get CompanyNote
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
   * @returns {Promise<CompanyNote>}
   */
  getCompanyCompaniesByParentIdNotesById(id, parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/notes/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CompanyNote
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCompaniesByParentIdNotesById(id, parentId) {
    return this.request({
      path: `/company/companies/${parentId}/notes/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put CompanyNote
   * @param {number} id
   * @param {number} parentId
   * @param {CompanyNote} companyNote companyNote
   * @returns {Promise<CompanyNote>}
   */
  putCompanyCompaniesByParentIdNotesById(id, parentId, companyNote) {
    return this.request({
      path: `/company/companies/${parentId}/notes/{id}`,
      method: 'put',
      data: companyNote,
    })
  }

  /**
   * Patch CompanyNote
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CompanyNote>}
   */
  patchCompanyCompaniesByParentIdNotesById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/companies/${parentId}/notes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of CompanyNote
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
  getCompanyCompaniesByParentIdNotesCount(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/notes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CompanySite
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
   * @returns {Promise<CompanySite[]>}
   */
  getCompanyCompaniesByParentIdSites(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/sites`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CompanySite
   * @param {number} parentId
   * @param {CompanySite} site site
   * @returns {Promise<CompanySite>}
   */
  postCompanyCompaniesByParentIdSites(parentId, site) {
    return this.request({
      path: `/company/companies/${parentId}/sites`,
      method: 'post',
      data: site,
    })
  }
  /**
   * Get CompanySite
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
   * @returns {Promise<CompanySite>}
   */
  getCompanyCompaniesByParentIdSitesById(id, parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/sites/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CompanySite
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCompaniesByParentIdSitesById(id, parentId) {
    return this.request({
      path: `/company/companies/${parentId}/sites/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put CompanySite
   * @param {number} id
   * @param {number} parentId
   * @param {CompanySite} site site
   * @returns {Promise<CompanySite>}
   */
  putCompanyCompaniesByParentIdSitesById(id, parentId, site) {
    return this.request({
      path: `/company/companies/${parentId}/sites/{id}`,
      method: 'put',
      data: site,
    })
  }

  /**
   * Patch CompanySite
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CompanySite>}
   */
  patchCompanyCompaniesByParentIdSitesById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/companies/${parentId}/sites/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of Usage Count
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
   * @returns {Promise<Usage[]>}
   */
  getCompanyCompaniesByParentIdSitesByIdUsages(id, parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/sites/{id}/usages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage
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
   * @returns {Promise<Usage[]>}
   */
  getCompanyCompaniesByParentIdSitesByIdUsagesList(id, parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/sites/{id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CompanySite
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
  getCompanyCompaniesByParentIdSitesCount(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/sites/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of
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
  getCompanyCompaniesByParentIdSurveysCount(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/surveys/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CompanyTeam
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
   * @returns {Promise<CompanyTeam[]>}
   */
  getCompanyCompaniesByParentIdTeams(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/teams`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CompanyTeam
   * @param {number} parentId
   * @param {CompanyTeam} companyTeam companyTeam
   * @returns {Promise<CompanyTeam>}
   */
  postCompanyCompaniesByParentIdTeams(parentId, companyTeam) {
    return this.request({
      path: `/company/companies/${parentId}/teams`,
      method: 'post',
      data: companyTeam,
    })
  }
  /**
   * Get CompanyTeam
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
   * @returns {Promise<CompanyTeam>}
   */
  getCompanyCompaniesByParentIdTeamsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/teams/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CompanyTeam
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCompaniesByParentIdTeamsById(id, parentId) {
    return this.request({
      path: `/company/companies/${parentId}/teams/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put CompanyTeam
   * @param {number} id
   * @param {number} parentId
   * @param {CompanyTeam} companyTeam companyTeam
   * @returns {Promise<CompanyTeam>}
   */
  putCompanyCompaniesByParentIdTeamsById(id, parentId, companyTeam) {
    return this.request({
      path: `/company/companies/${parentId}/teams/{id}`,
      method: 'put',
      data: companyTeam,
    })
  }

  /**
   * Patch CompanyTeam
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CompanyTeam>}
   */
  patchCompanyCompaniesByParentIdTeamsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/companies/${parentId}/teams/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of CompanyTeam
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
  getCompanyCompaniesByParentIdTeamsCount(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/teams/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ContactTrack
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
   * @returns {Promise<ContactTrack[]>}
   */
  getCompanyCompaniesByParentIdTracks(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/tracks`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ContactTrack
   * @param {number} parentId
   * @param {ContactTrack} track track
   * @returns {Promise<ContactTrack>}
   */
  postCompanyCompaniesByParentIdTracks(parentId, track) {
    return this.request({
      path: `/company/companies/${parentId}/tracks`,
      method: 'post',
      data: track,
    })
  }
  /**
   * Get ContactTrack
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
   * @returns {Promise<ContactTrack>}
   */
  getCompanyCompaniesByParentIdTracksById(id, parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/tracks/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ContactTrack
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCompaniesByParentIdTracksById(id, parentId) {
    return this.request({
      path: `/company/companies/${parentId}/tracks/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of ContactTrack
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
  getCompanyCompaniesByParentIdTracksCount(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/tracks/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CompanyTypeAssociation
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
   * @returns {Promise<CompanyCompanyTypeAssociationCompanyTypeAssociation[]>}
   */
  getCompanyCompaniesByParentIdTypeAssociations(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/typeAssociations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CompanyTypeAssociation
   * @param {number} parentId
   * @param {CompanyCompanyTypeAssociationCompanyTypeAssociation} companyTypeAssociation companyTypeAssociation
   * @returns {Promise<CompanyCompanyTypeAssociationCompanyTypeAssociation>}
   */
  postCompanyCompaniesByParentIdTypeAssociations(parentId, companyTypeAssociation) {
    return this.request({
      path: `/company/companies/${parentId}/typeAssociations`,
      method: 'post',
      data: companyTypeAssociation,
    })
  }
  /**
   * Get CompanyTypeAssociation
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
   * @returns {Promise<CompanyCompanyTypeAssociationCompanyTypeAssociation>}
   */
  getCompanyCompaniesByParentIdTypeAssociationsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/typeAssociations/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CompanyTypeAssociation
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCompaniesByParentIdTypeAssociationsById(id, parentId) {
    return this.request({
      path: `/company/companies/${parentId}/typeAssociations/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put CompanyTypeAssociation
   * @param {number} id
   * @param {number} parentId
   * @param {CompanyCompanyTypeAssociationCompanyTypeAssociation} companyTypeAssociation companyTypeAssociation
   * @returns {Promise<CompanyCompanyTypeAssociationCompanyTypeAssociation>}
   */
  putCompanyCompaniesByParentIdTypeAssociationsById(id, parentId, companyTypeAssociation) {
    return this.request({
      path: `/company/companies/${parentId}/typeAssociations/{id}`,
      method: 'put',
      data: companyTypeAssociation,
    })
  }

  /**
   * Patch CompanyTypeAssociation
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CompanyCompanyTypeAssociationCompanyTypeAssociation>}
   */
  patchCompanyCompaniesByParentIdTypeAssociationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/companies/${parentId}/typeAssociations/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of CompanyTypeAssociation
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
  getCompanyCompaniesByParentIdTypeAssociationsCount(parentId, params = {}) {
    return this.request({
      path: `/company/companies/${parentId}/typeAssociations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ConnectWise.Apis.v3_0.v2015_3.Company.Company.Company
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
  getCompanyCompaniesCount(params = {}) {
    return this.request({
      path: `/company/companies/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ConnectWise.Apis.v3_0.v2015_3.Company.Company.Company
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Company>}
   */
  getCompanyCompaniesDefault(params = {}) {
    return this.request({
      path: `/company/companies/default`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CompanyTypeInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CompanyTypeInfo[]>}
   */
  getCompanyCompaniesInfoTypes(params = {}) {
    return this.request({
      path: `/company/companies/info/types`,
      method: 'get',
      params,
    })
  }
  /**
   * Get CompanyTypeInfo
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
   * @returns {Promise<CompanyTypeInfo>}
   */
  getCompanyCompaniesInfoTypesById(id, params = {}) {
    return this.request({
      path: `/company/companies/info/types/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CompanyTypeInfo
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
  getCompanyCompaniesInfoTypesCount(params = {}) {
    return this.request({
      path: `/company/companies/info/types/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CompanyStatus
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CompanyStatus[]>}
   */
  getCompanyCompaniesStatuses(params = {}) {
    return this.request({
      path: `/company/companies/statuses`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CompanyStatus
   * @param {CompanyStatus} companyStatus companyStatus
   * @returns {Promise<CompanyStatus>}
   */
  postCompanyCompaniesStatuses(companyStatus) {
    return this.request({
      path: `/company/companies/statuses`,
      method: 'post',
      data: companyStatus,
    })
  }
  /**
   * Get CompanyStatus
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
   * @returns {Promise<CompanyStatus>}
   */
  getCompanyCompaniesStatusesById(id, params = {}) {
    return this.request({
      path: `/company/companies/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CompanyStatus
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCompaniesStatusesById(id) {
    return this.request({
      path: `/company/companies/statuses/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put CompanyStatus
   * @param {number} id
   * @param {CompanyStatus} companyStatus companyStatus
   * @returns {Promise<CompanyStatus>}
   */
  putCompanyCompaniesStatusesById(id, companyStatus) {
    return this.request({
      path: `/company/companies/statuses/${id}`,
      method: 'put',
      data: companyStatus,
    })
  }

  /**
   * Patch CompanyStatus
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CompanyStatus>}
   */
  patchCompanyCompaniesStatusesById(id, patchOperations) {
    return this.request({
      path: `/company/companies/statuses/${id}`,
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
  getCompanyCompaniesStatusesByIdUsages(id, params = {}) {
    return this.request({
      path: `/company/companies/statuses/${id}/usages`,
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
  getCompanyCompaniesStatusesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/company/companies/statuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CompanyStatus
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
  getCompanyCompaniesStatusesCount(params = {}) {
    return this.request({
      path: `/company/companies/statuses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CompanyType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CompanyType[]>}
   */
  getCompanyCompaniesTypes(params = {}) {
    return this.request({
      path: `/company/companies/types`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CompanyType
   * @param {CompanyType} companyType companyType
   * @returns {Promise<CompanyType>}
   */
  postCompanyCompaniesTypes(companyType) {
    return this.request({
      path: `/company/companies/types`,
      method: 'post',
      data: companyType,
    })
  }
  /**
   * Get CompanyType
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
   * @returns {Promise<CompanyType>}
   */
  getCompanyCompaniesTypesById(id, params = {}) {
    return this.request({
      path: `/company/companies/types/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Usage
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCompaniesTypesById(id) {
    return this.request({
      path: `/company/companies/types/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put CompanyType
   * @param {number} id
   * @param {CompanyType} companyType companyType
   * @returns {Promise<CompanyType>}
   */
  putCompanyCompaniesTypesById(id, companyType) {
    return this.request({
      path: `/company/companies/types/${id}`,
      method: 'put',
      data: companyType,
    })
  }

  /**
   * Patch CompanyType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CompanyType>}
   */
  patchCompanyCompaniesTypesById(id, patchOperations) {
    return this.request({
      path: `/company/companies/types/${id}`,
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
  getCompanyCompaniesTypesByIdUsages(id, params = {}) {
    return this.request({
      path: `/company/companies/types/${id}/usages`,
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
  getCompanyCompaniesTypesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/company/companies/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CompanyType
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
  getCompanyCompaniesTypesCount(params = {}) {
    return this.request({
      path: `/company/companies/types/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Put CompanyFinance
   * @param {number} id
   * @param {CompanyFinance} CompanyFinance CompanyFinance
   * @returns {Promise<CompanyFinance>}
   */
  putCompanyCompanyFinanceById(id, CompanyFinance) {
    return this.request({
      path: `/company/companyFinance/${id}`,
      method: 'put',
      data: CompanyFinance,
    })
  }
  /**
   * Get List of CompanyPickerItem
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CompanyPickerItem[]>}
   */
  getCompanyCompanyPickerItems(params = {}) {
    return this.request({
      path: `/company/companyPickerItems`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CompanyPickerItem
   * @param {CompanyPickerItem} companyPickerItem companyPickerItem
   * @returns {Promise<CompanyPickerItem>}
   */
  postCompanyCompanyPickerItems(companyPickerItem) {
    return this.request({
      path: `/company/companyPickerItems`,
      method: 'post',
      data: companyPickerItem,
    })
  }
  /**
   * Get CompanyPickerItem
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
   * @returns {Promise<CompanyPickerItem>}
   */
  getCompanyCompanyPickerItemsById(id, params = {}) {
    return this.request({
      path: `/company/companyPickerItems/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CompanyPickerItem
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCompanyPickerItemsById(id) {
    return this.request({
      path: `/company/companyPickerItems/${id}`,
      method: 'delete',
    })
  }
  /**
   * Post ClearPickerRequest
   * @param {} clearPickerRequest
   * @returns {Promise<NoContent>}
   */
  postCompanyCompanyPickerItemsClear(clearPickerRequest) {
    return this.request({
      path: `/company/companyPickerItems/clear`,
      method: 'post',
    })
  }
  /**
   * Get Count of CompanyPickerItem
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
  getCompanyCompanyPickerItemsCount(params = {}) {
    return this.request({
      path: `/company/companyPickerItems/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CompanyTypeAssociation
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CompanyCompanyTypeAssociation[]>}
   */
  getCompanyCompanyTypeAssociations(params = {}) {
    return this.request({
      path: `/company/companyTypeAssociations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CompanyTypeAssociation
   * @param {CompanyCompanyTypeAssociation} companyTypeAssociation companyTypeAssociation
   * @returns {Promise<CompanyCompanyTypeAssociation>}
   */
  postCompanyCompanyTypeAssociations(companyTypeAssociation) {
    return this.request({
      path: `/company/companyTypeAssociations`,
      method: 'post',
      data: companyTypeAssociation,
    })
  }
  /**
   * Get CompanyTypeAssociation
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
   * @returns {Promise<CompanyCompanyTypeAssociation>}
   */
  getCompanyCompanyTypeAssociationsById(id, params = {}) {
    return this.request({
      path: `/company/companyTypeAssociations/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CompanyTypeAssociation
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCompanyTypeAssociationsById(id) {
    return this.request({
      path: `/company/companyTypeAssociations/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put CompanyTypeAssociation
   * @param {number} id
   * @param {CompanyCompanyTypeAssociation} companyTypeAssociation companyTypeAssociation
   * @returns {Promise<CompanyCompanyTypeAssociation>}
   */
  putCompanyCompanyTypeAssociationsById(id, companyTypeAssociation) {
    return this.request({
      path: `/company/companyTypeAssociations/${id}`,
      method: 'put',
      data: companyTypeAssociation,
    })
  }

  /**
   * Patch CompanyTypeAssociation
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CompanyCompanyTypeAssociation>}
   */
  patchCompanyCompanyTypeAssociationsById(id, patchOperations) {
    return this.request({
      path: `/company/companyTypeAssociations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of CompanyTypeAssociation
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
  getCompanyCompanyTypeAssociationsCount(params = {}) {
    return this.request({
      path: `/company/companyTypeAssociations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Configuration
   * @param {string} managedIdentifier
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CompanyConfiguration[]>}
   */
  getCompanyConfigurations(managedIdentifier, params = {}) {
    return this.request({
      path: `/company/configurations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Configuration
   * @param {CompanyConfiguration} configuration configuration
   * @param {object} params
   * @param {} [params.managedInformation]
   * @returns {Promise<CompanyConfiguration>}
   */
  postCompanyConfigurations(configuration, params = {}) {
    return this.request({
      path: `/company/configurations`,
      method: 'post',
      data: configuration,
      params,
    })
  }
  /**
   * Get Configuration
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
   * @returns {Promise<CompanyConfiguration>}
   */
  getCompanyConfigurationsById(id, params = {}) {
    return this.request({
      path: `/company/configurations/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Configuration
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyConfigurationsById(id) {
    return this.request({
      path: `/company/configurations/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Configuration
   * @param {number} id
   * @param {CompanyConfiguration} configuration configuration
   * @param {object} params
   * @param {} [params.managedInformation]
   * @returns {Promise<CompanyConfiguration>}
   */
  putCompanyConfigurationsById(id, configuration, params = {}) {
    return this.request({
      path: `/company/configurations/${id}`,
      method: 'put',
      data: configuration,
      params,
    })
  }

  /**
   * Patch Configuration
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @param {object} params
   * @param {} [params.managedInformation]
   * @returns {Promise<CompanyConfiguration>}
   */
  patchCompanyConfigurationsById(id, patchOperations, params = {}) {
    return this.request({
      path: `/company/configurations/${id}`,
      method: 'patch',
      data: patchOperations,
      params,
    })
  }
  /**
   * Patch Configuration
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CompanyConfiguration>}
   */
  patchCompanyConfigurationsByIdChangeType(id, patchOperations) {
    return this.request({
      path: `/company/configurations/${id}/changeType`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post Configuration
   * @param {CompanyConfiguration[]} companyConfigurations List of Configuration
   * @returns {Promise<CompanyConfiguration>}
   */
  postCompanyConfigurationsBulk(companyConfigurations) {
    return this.request({
      path: `/company/configurations/bulk`,
      method: 'post',
      data: companyConfigurations,
    })
  }

  /**
   * Delete BulkResult
   
   * @returns {Promise<BulkResult>}
   */
  deleteCompanyConfigurationsBulk() {
    return this.request({
      path: `/company/configurations/bulk`,
      method: 'delete',
    })
  }

  /**
   * Put Configuration
   * @param {CompanyConfiguration[]} companyConfigurations List of Configuration
   * @returns {Promise<CompanyConfiguration>}
   */
  putCompanyConfigurationsBulk(companyConfigurations) {
    return this.request({
      path: `/company/configurations/bulk`,
      method: 'put',
      data: companyConfigurations,
    })
  }
  /**
   * Get Count of Configuration
   * @param {string} managedIdentifier
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
  getCompanyConfigurationsCount(managedIdentifier, params = {}) {
    return this.request({
      path: `/company/configurations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ConfigurationStatus
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ConfigurationStatus[]>}
   */
  getCompanyConfigurationsStatuses(params = {}) {
    return this.request({
      path: `/company/configurations/statuses`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ConfigurationStatus
   * @param {ConfigurationStatus} configurationStatus configurationStatus
   * @returns {Promise<ConfigurationStatus>}
   */
  postCompanyConfigurationsStatuses(configurationStatus) {
    return this.request({
      path: `/company/configurations/statuses`,
      method: 'post',
      data: configurationStatus,
    })
  }
  /**
   * Get ConfigurationStatus
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
   * @returns {Promise<ConfigurationStatus>}
   */
  getCompanyConfigurationsStatusesById(id, params = {}) {
    return this.request({
      path: `/company/configurations/statuses/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ConfigurationStatus
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyConfigurationsStatusesById(id) {
    return this.request({
      path: `/company/configurations/statuses/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ConfigurationStatus
   * @param {number} id
   * @param {ConfigurationStatus} configurationStatus configurationStatus
   * @returns {Promise<ConfigurationStatus>}
   */
  putCompanyConfigurationsStatusesById(id, configurationStatus) {
    return this.request({
      path: `/company/configurations/statuses/${id}`,
      method: 'put',
      data: configurationStatus,
    })
  }

  /**
   * Patch ConfigurationStatus
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ConfigurationStatus>}
   */
  patchCompanyConfigurationsStatusesById(id, patchOperations) {
    return this.request({
      path: `/company/configurations/statuses/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ConfigurationStatusInfos
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
   * @returns {Promise<ConfigurationStatusInfo>}
   */
  getCompanyConfigurationsStatusesByIdInfo(id, params = {}) {
    return this.request({
      path: `/company/configurations/statuses/${id}/info`,
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
  getCompanyConfigurationsStatusesByIdUsages(id, params = {}) {
    return this.request({
      path: `/company/configurations/statuses/${id}/usages`,
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
  getCompanyConfigurationsStatusesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/company/configurations/statuses/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ConfigurationStatus
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
  getCompanyConfigurationsStatusesCount(params = {}) {
    return this.request({
      path: `/company/configurations/statuses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ConfigurationStatusInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ConfigurationStatusInfo[]>}
   */
  getCompanyConfigurationsStatusesInfo(params = {}) {
    return this.request({
      path: `/company/configurations/statuses/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ConfigurationStatusInfos
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
  getCompanyConfigurationsStatusesInfoCount(params = {}) {
    return this.request({
      path: `/company/configurations/statuses/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ConfigurationType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ConfigurationType[]>}
   */
  getCompanyConfigurationsTypes(params = {}) {
    return this.request({
      path: `/company/configurations/types`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ConfigurationType
   * @param {ConfigurationType} configurationType configurationType
   * @returns {Promise<ConfigurationType>}
   */
  postCompanyConfigurationsTypes(configurationType) {
    return this.request({
      path: `/company/configurations/types`,
      method: 'post',
      data: configurationType,
    })
  }
  /**
   * Get List of ConfigurationTypeQuestionValue
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
   * @returns {Promise<ConfigurationTypeQuestionValue[]>}
   */
  getCompanyConfigurationsTypesByGrandparentIdQuestionsByParentIdValues(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/company/configurations/types/${grandparentId}/questions/{parentId}/values`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ConfigurationTypeQuestionValue
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {ConfigurationTypeQuestionValue} configurationTypeQuestionValue configurationTypeQuestionValue
   * @returns {Promise<ConfigurationTypeQuestionValue>}
   */
  postCompanyConfigurationsTypesByGrandparentIdQuestionsByParentIdValues(
    parentId,
    grandparentId,
    configurationTypeQuestionValue,
  ) {
    return this.request({
      path: `/company/configurations/types/${grandparentId}/questions/{parentId}/values`,
      method: 'post',
      data: configurationTypeQuestionValue,
    })
  }
  /**
   * Get ConfigurationTypeQuestionValue
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
   * @returns {Promise<ConfigurationTypeQuestionValue>}
   */
  getCompanyConfigurationsTypesByGrandparentIdQuestionsByParentIdValuesById(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/company/configurations/types/${grandparentId}/questions/{parentId}/values/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ConfigurationTypeQuestionValue
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyConfigurationsTypesByGrandparentIdQuestionsByParentIdValuesById(
    id,
    parentId,
    grandparentId,
  ) {
    return this.request({
      path: `/company/configurations/types/${grandparentId}/questions/{parentId}/values/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ConfigurationTypeQuestionValue
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {ConfigurationTypeQuestionValue} configurationTypeQuestionValue configurationTypeQuestionValue
   * @returns {Promise<ConfigurationTypeQuestionValue>}
   */
  putCompanyConfigurationsTypesByGrandparentIdQuestionsByParentIdValuesById(
    id,
    parentId,
    grandparentId,
    configurationTypeQuestionValue,
  ) {
    return this.request({
      path: `/company/configurations/types/${grandparentId}/questions/{parentId}/values/{id}`,
      method: 'put',
      data: configurationTypeQuestionValue,
    })
  }

  /**
   * Patch ConfigurationTypeQuestionValue
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ConfigurationTypeQuestionValue>}
   */
  patchCompanyConfigurationsTypesByGrandparentIdQuestionsByParentIdValuesById(
    id,
    parentId,
    grandparentId,
    patchOperations,
  ) {
    return this.request({
      path: `/company/configurations/types/${grandparentId}/questions/{parentId}/values/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of Usage
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
   * @returns {Promise<Usage[]>}
   */
  getCompanyConfigurationsTypesByGrandparentIdQuestionsByParentIdValuesByIdUsages(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/company/configurations/types/${grandparentId}/questions/{parentId}/values/{id}/usages`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Usage
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
   * @returns {Promise<Usage[]>}
   */
  getCompanyConfigurationsTypesByGrandparentIdQuestionsByParentIdValuesByIdUsagesList(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/company/configurations/types/${grandparentId}/questions/{parentId}/values/{id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ConfigurationTypeQuestionValue
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
  getCompanyConfigurationsTypesByGrandparentIdQuestionsByParentIdValuesCount(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/company/configurations/types/${grandparentId}/questions/{parentId}/values/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ConfigurationType
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
   * @returns {Promise<ConfigurationType>}
   */
  getCompanyConfigurationsTypesById(id, params = {}) {
    return this.request({
      path: `/company/configurations/types/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ConfigurationType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyConfigurationsTypesById(id) {
    return this.request({
      path: `/company/configurations/types/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ConfigurationType
   * @param {number} id
   * @param {ConfigurationType} configurationType configurationType
   * @returns {Promise<ConfigurationType>}
   */
  putCompanyConfigurationsTypesById(id, configurationType) {
    return this.request({
      path: `/company/configurations/types/${id}`,
      method: 'put',
      data: configurationType,
    })
  }

  /**
   * Patch ConfigurationType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ConfigurationType>}
   */
  patchCompanyConfigurationsTypesById(id, patchOperations) {
    return this.request({
      path: `/company/configurations/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ConfigurationTypeInfos
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
   * @returns {Promise<ConfigurationTypeInfo>}
   */
  getCompanyConfigurationsTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/company/configurations/types/${id}/info`,
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
  getCompanyConfigurationsTypesByIdUsages(id, params = {}) {
    return this.request({
      path: `/company/configurations/types/${id}/usages`,
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
  getCompanyConfigurationsTypesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/company/configurations/types/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ConfigurationTypeQuestion
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
   * @returns {Promise<ConfigurationTypeQuestion[]>}
   */
  getCompanyConfigurationsTypesByParentIdQuestions(parentId, params = {}) {
    return this.request({
      path: `/company/configurations/types/${parentId}/questions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ConfigurationTypeQuestion
   * @param {number} parentId
   * @param {ConfigurationTypeQuestion} configurationTypeQuestion configurationTypeQuestion
   * @returns {Promise<ConfigurationTypeQuestion>}
   */
  postCompanyConfigurationsTypesByParentIdQuestions(parentId, configurationTypeQuestion) {
    return this.request({
      path: `/company/configurations/types/${parentId}/questions`,
      method: 'post',
      data: configurationTypeQuestion,
    })
  }
  /**
   * Get ConfigurationTypeQuestion
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
   * @returns {Promise<ConfigurationTypeQuestion>}
   */
  getCompanyConfigurationsTypesByParentIdQuestionsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/configurations/types/${parentId}/questions/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ConfigurationTypeQuestion
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyConfigurationsTypesByParentIdQuestionsById(id, parentId) {
    return this.request({
      path: `/company/configurations/types/${parentId}/questions/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ConfigurationTypeQuestion
   * @param {number} id
   * @param {number} parentId
   * @param {ConfigurationTypeQuestion} configurationTypeQuestion configurationTypeQuestion
   * @returns {Promise<ConfigurationTypeQuestion>}
   */
  putCompanyConfigurationsTypesByParentIdQuestionsById(id, parentId, configurationTypeQuestion) {
    return this.request({
      path: `/company/configurations/types/${parentId}/questions/{id}`,
      method: 'put',
      data: configurationTypeQuestion,
    })
  }

  /**
   * Patch ConfigurationTypeQuestion
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ConfigurationTypeQuestion>}
   */
  patchCompanyConfigurationsTypesByParentIdQuestionsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/configurations/types/${parentId}/questions/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ConfigurationTypeQuestion
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
  getCompanyConfigurationsTypesByParentIdQuestionsCount(parentId, params = {}) {
    return this.request({
      path: `/company/configurations/types/${parentId}/questions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ConfigurationType
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
  getCompanyConfigurationsTypesCount(params = {}) {
    return this.request({
      path: `/company/configurations/types/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ApiContact
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Contact[]>}
   */
  getCompanyContacts(params = {}) {
    return this.request({
      path: `/company/contacts`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ApiContact
   * @param {Contact} contact contact
   * @returns {Promise<Contact>}
   */
  postCompanyContacts(contact) {
    return this.request({
      path: `/company/contacts`,
      method: 'post',
      data: contact,
    })
  }
  /**
   * Get ApiContact
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
   * @returns {Promise<Contact>}
   */
  getCompanyContactsById(id, params = {}) {
    return this.request({
      path: `/company/contacts/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ApiContact
   * @param {number} id
   * @param {number} transferContactId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyContactsById(id, transferContactId) {
    return this.request({
      path: `/company/contacts/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ApiContact
   * @param {number} id
   * @param {Contact} contact contact
   * @returns {Promise<Contact>}
   */
  putCompanyContactsById(id, contact) {
    return this.request({
      path: `/company/contacts/${id}`,
      method: 'put',
      data: contact,
    })
  }

  /**
   * Patch ApiContact
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Contact>}
   */
  patchCompanyContactsById(id, patchOperations) {
    return this.request({
      path: `/company/contacts/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ValidatePortalResponse
   * @param {number} id
   * @param {boolean} useDefaultFlag
   * @param {string} lastModified
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<application/octet-stream>}
   */
  getCompanyContactsByIdImage(id, useDefaultFlag, lastModified, params = {}) {
    return this.request({
      path: `/company/contacts/${id}/image`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PortalSecurity
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
   * @returns {Promise<PortalSecurity[]>}
   */
  getCompanyContactsByIdPortalSecurity(id, params = {}) {
    return this.request({
      path: `/company/contacts/${id}/portalSecurity`,
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
  getCompanyContactsByIdUsages(id, params = {}) {
    return this.request({
      path: `/company/contacts/${id}/usages`,
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
  getCompanyContactsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/company/contacts/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ContactCommunication
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
   * @returns {Promise<ContactCommunication[]>}
   */
  getCompanyContactsByParentIdCommunications(parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/communications`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ContactCommunication
   * @param {number} parentId
   * @param {ContactCommunication} contactCommunication contactCommunication
   * @returns {Promise<ContactCommunication>}
   */
  postCompanyContactsByParentIdCommunications(parentId, contactCommunication) {
    return this.request({
      path: `/company/contacts/${parentId}/communications`,
      method: 'post',
      data: contactCommunication,
    })
  }
  /**
   * Get ContactCommunication
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
   * @returns {Promise<ContactCommunication>}
   */
  getCompanyContactsByParentIdCommunicationsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/communications/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ContactCommunication
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyContactsByParentIdCommunicationsById(id, parentId) {
    return this.request({
      path: `/company/contacts/${parentId}/communications/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ContactCommunication
   * @param {number} id
   * @param {number} parentId
   * @param {ContactCommunication} contactCommunication contactCommunication
   * @returns {Promise<ContactCommunication>}
   */
  putCompanyContactsByParentIdCommunicationsById(id, parentId, contactCommunication) {
    return this.request({
      path: `/company/contacts/${parentId}/communications/{id}`,
      method: 'put',
      data: contactCommunication,
    })
  }

  /**
   * Patch ContactCommunication
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ContactCommunication>}
   */
  patchCompanyContactsByParentIdCommunicationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/contacts/${parentId}/communications/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ContactCommunication
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
  getCompanyContactsByParentIdCommunicationsCount(parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/communications/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ContactGroup
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
   * @returns {Promise<ContactGroup[]>}
   */
  getCompanyContactsByParentIdGroups(parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/groups`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ContactGroup
   * @param {number} parentId
   * @param {ContactGroup} contactGroup contactGroup
   * @returns {Promise<ContactGroup>}
   */
  postCompanyContactsByParentIdGroups(parentId, contactGroup) {
    return this.request({
      path: `/company/contacts/${parentId}/groups`,
      method: 'post',
      data: contactGroup,
    })
  }
  /**
   * Get ContactGroup
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
   * @returns {Promise<ContactGroup>}
   */
  getCompanyContactsByParentIdGroupsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/groups/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ContactGroup
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyContactsByParentIdGroupsById(id, parentId) {
    return this.request({
      path: `/company/contacts/${parentId}/groups/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ContactGroup
   * @param {number} id
   * @param {number} parentId
   * @param {ContactGroup} contactGroup contactGroup
   * @returns {Promise<ContactGroup>}
   */
  putCompanyContactsByParentIdGroupsById(id, parentId, contactGroup) {
    return this.request({
      path: `/company/contacts/${parentId}/groups/{id}`,
      method: 'put',
      data: contactGroup,
    })
  }

  /**
   * Patch ContactGroup
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ContactGroup>}
   */
  patchCompanyContactsByParentIdGroupsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/contacts/${parentId}/groups/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ContactGroup
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
  getCompanyContactsByParentIdGroupsCount(parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/groups/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ContactNote
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
   * @returns {Promise<ContactNote[]>}
   */
  getCompanyContactsByParentIdNotes(parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/notes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ContactNote
   * @param {number} parentId
   * @param {ContactNote} contactNote contactNote
   * @returns {Promise<ContactNote>}
   */
  postCompanyContactsByParentIdNotes(parentId, contactNote) {
    return this.request({
      path: `/company/contacts/${parentId}/notes`,
      method: 'post',
      data: contactNote,
    })
  }
  /**
   * Get ContactNote
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
   * @returns {Promise<ContactNote>}
   */
  getCompanyContactsByParentIdNotesById(id, parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/notes/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ContactNote
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyContactsByParentIdNotesById(id, parentId) {
    return this.request({
      path: `/company/contacts/${parentId}/notes/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ContactNote
   * @param {number} id
   * @param {number} parentId
   * @param {ContactNote} contactNote contactNote
   * @returns {Promise<ContactNote>}
   */
  putCompanyContactsByParentIdNotesById(id, parentId, contactNote) {
    return this.request({
      path: `/company/contacts/${parentId}/notes/{id}`,
      method: 'put',
      data: contactNote,
    })
  }

  /**
   * Patch ContactNote
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ContactNote>}
   */
  patchCompanyContactsByParentIdNotesById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/contacts/${parentId}/notes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ContactNote
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
  getCompanyContactsByParentIdNotesCount(parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/notes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ContactTrack
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
   * @returns {Promise<ContactTrack[]>}
   */
  getCompanyContactsByParentIdTracks(parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/tracks`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ContactTrack
   * @param {number} parentId
   * @param {ContactTrack} track track
   * @returns {Promise<ContactTrack>}
   */
  postCompanyContactsByParentIdTracks(parentId, track) {
    return this.request({
      path: `/company/contacts/${parentId}/tracks`,
      method: 'post',
      data: track,
    })
  }
  /**
   * Get ContactTrack
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
   * @returns {Promise<ContactTrack>}
   */
  getCompanyContactsByParentIdTracksById(id, parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/tracks/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ContactTrack
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyContactsByParentIdTracksById(id, parentId) {
    return this.request({
      path: `/company/contacts/${parentId}/tracks/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of ContactTrack
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
  getCompanyContactsByParentIdTracksCount(parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/tracks/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ContactTypeAssociation
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
   * @returns {Promise<ContactContactTypeAssociationContactTypeAssociation[]>}
   */
  getCompanyContactsByParentIdTypeAssociations(parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/typeAssociations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ContactTypeAssociation
   * @param {number} parentId
   * @param {ContactContactTypeAssociationContactTypeAssociation} contactTypeAssociation contactTypeAssociation
   * @returns {Promise<ContactContactTypeAssociationContactTypeAssociation>}
   */
  postCompanyContactsByParentIdTypeAssociations(parentId, contactTypeAssociation) {
    return this.request({
      path: `/company/contacts/${parentId}/typeAssociations`,
      method: 'post',
      data: contactTypeAssociation,
    })
  }
  /**
   * Get ContactTypeAssociation
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
   * @returns {Promise<ContactContactTypeAssociationContactTypeAssociation>}
   */
  getCompanyContactsByParentIdTypeAssociationsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/typeAssociations/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ContactTypeAssociation
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyContactsByParentIdTypeAssociationsById(id, parentId) {
    return this.request({
      path: `/company/contacts/${parentId}/typeAssociations/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ContactTypeAssociation
   * @param {number} id
   * @param {number} parentId
   * @param {ContactContactTypeAssociationContactTypeAssociation} contactTypeAssociation contactTypeAssociation
   * @returns {Promise<ContactContactTypeAssociationContactTypeAssociation>}
   */
  putCompanyContactsByParentIdTypeAssociationsById(id, parentId, contactTypeAssociation) {
    return this.request({
      path: `/company/contacts/${parentId}/typeAssociations/{id}`,
      method: 'put',
      data: contactTypeAssociation,
    })
  }

  /**
   * Patch ContactTypeAssociation
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ContactContactTypeAssociationContactTypeAssociation>}
   */
  patchCompanyContactsByParentIdTypeAssociationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/contacts/${parentId}/typeAssociations/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ContactTypeAssociation
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
  getCompanyContactsByParentIdTypeAssociationsCount(parentId, params = {}) {
    return this.request({
      path: `/company/contacts/${parentId}/typeAssociations/count`,
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
  getCompanyContactsCount(params = {}) {
    return this.request({
      path: `/company/contacts/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ApiContact
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
   * @returns {Promise<Contact>}
   */
  getCompanyContactsDefault(companyId, params = {}) {
    return this.request({
      path: `/company/contacts/default`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ContactDepartment
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ContactDepartment[]>}
   */
  getCompanyContactsDepartments(params = {}) {
    return this.request({
      path: `/company/contacts/departments`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ContactDepartment
   * @param {ContactDepartment} contactDepartment contactDepartment
   * @returns {Promise<ContactDepartment>}
   */
  postCompanyContactsDepartments(contactDepartment) {
    return this.request({
      path: `/company/contacts/departments`,
      method: 'post',
      data: contactDepartment,
    })
  }
  /**
   * Get ContactDepartment
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
   * @returns {Promise<ContactDepartment>}
   */
  getCompanyContactsDepartmentsById(id, params = {}) {
    return this.request({
      path: `/company/contacts/departments/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Usage
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyContactsDepartmentsById(id) {
    return this.request({
      path: `/company/contacts/departments/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ContactDepartment
   * @param {number} id
   * @param {ContactDepartment} contactDepartment contactDepartment
   * @returns {Promise<ContactDepartment>}
   */
  putCompanyContactsDepartmentsById(id, contactDepartment) {
    return this.request({
      path: `/company/contacts/departments/${id}`,
      method: 'put',
      data: contactDepartment,
    })
  }

  /**
   * Patch ContactDepartment
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ContactDepartment>}
   */
  patchCompanyContactsDepartmentsById(id, patchOperations) {
    return this.request({
      path: `/company/contacts/departments/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ContactDepartmentInfos
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
   * @returns {Promise<ContactDepartmentInfo>}
   */
  getCompanyContactsDepartmentsByIdInfo(id, params = {}) {
    return this.request({
      path: `/company/contacts/departments/${id}/info`,
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
  getCompanyContactsDepartmentsByIdUsages(id, params = {}) {
    return this.request({
      path: `/company/contacts/departments/${id}/usages`,
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
  getCompanyContactsDepartmentsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/company/contacts/departments/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ContactDepartment
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
  getCompanyContactsDepartmentsCount(params = {}) {
    return this.request({
      path: `/company/contacts/departments/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ContactDepartmentInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ContactDepartmentInfo[]>}
   */
  getCompanyContactsDepartmentsInfo(params = {}) {
    return this.request({
      path: `/company/contacts/departments/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ContactDepartmentInfos
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
  getCompanyContactsDepartmentsInfoCount(params = {}) {
    return this.request({
      path: `/company/contacts/departments/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ContactRelationship
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ContactRelationship[]>}
   */
  getCompanyContactsRelationships(params = {}) {
    return this.request({
      path: `/company/contacts/relationships`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ContactRelationship
   * @param {ContactRelationship} contactRelationship contactRelationship
   * @returns {Promise<ContactRelationship>}
   */
  postCompanyContactsRelationships(contactRelationship) {
    return this.request({
      path: `/company/contacts/relationships`,
      method: 'post',
      data: contactRelationship,
    })
  }
  /**
   * Get ContactRelationship
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
   * @returns {Promise<ContactRelationship>}
   */
  getCompanyContactsRelationshipsById(id, params = {}) {
    return this.request({
      path: `/company/contacts/relationships/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ContactRelationship
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyContactsRelationshipsById(id) {
    return this.request({
      path: `/company/contacts/relationships/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ContactRelationship
   * @param {number} id
   * @param {ContactRelationship} contactRelationship contactRelationship
   * @returns {Promise<ContactRelationship>}
   */
  putCompanyContactsRelationshipsById(id, contactRelationship) {
    return this.request({
      path: `/company/contacts/relationships/${id}`,
      method: 'put',
      data: contactRelationship,
    })
  }

  /**
   * Patch ContactRelationship
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ContactRelationship>}
   */
  patchCompanyContactsRelationshipsById(id, patchOperations) {
    return this.request({
      path: `/company/contacts/relationships/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ContactRelationship
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
  getCompanyContactsRelationshipsCount(params = {}) {
    return this.request({
      path: `/company/contacts/relationships/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post PortalSecurity
   * @param {RequestPasswordRequest} request request
   * @returns {Promise<NoContent>}
   */
  postCompanyContactsRequestPassword(request) {
    return this.request({
      path: `/company/contacts/requestPassword`,
      method: 'post',
      data: request,
    })
  }
  /**
   * Get List of ContactType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ContactType[]>}
   */
  getCompanyContactsTypes(params = {}) {
    return this.request({
      path: `/company/contacts/types`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ContactType
   * @param {ContactType} contactType contactType
   * @returns {Promise<ContactType>}
   */
  postCompanyContactsTypes(contactType) {
    return this.request({
      path: `/company/contacts/types`,
      method: 'post',
      data: contactType,
    })
  }
  /**
   * Get ContactType
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
   * @returns {Promise<ContactType>}
   */
  getCompanyContactsTypesById(id, params = {}) {
    return this.request({
      path: `/company/contacts/types/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ContactType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyContactsTypesById(id) {
    return this.request({
      path: `/company/contacts/types/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ContactType
   * @param {number} id
   * @param {ContactType} contactType contactType
   * @returns {Promise<ContactType>}
   */
  putCompanyContactsTypesById(id, contactType) {
    return this.request({
      path: `/company/contacts/types/${id}`,
      method: 'put',
      data: contactType,
    })
  }

  /**
   * Patch ContactType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ContactType>}
   */
  patchCompanyContactsTypesById(id, patchOperations) {
    return this.request({
      path: `/company/contacts/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ContactTypeInfo
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
   * @returns {Promise<ContactTypeInfo>}
   */
  getCompanyContactsTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/company/contacts/types/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ContactType
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
  getCompanyContactsTypesCount(params = {}) {
    return this.request({
      path: `/company/contacts/types/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ContactTypeInfo
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
  getCompanyContactsTypesCountInfo(params = {}) {
    return this.request({
      path: `/company/contacts/types/count/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ContactTypeInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ContactTypeInfo[]>}
   */
  getCompanyContactsTypesInfo(params = {}) {
    return this.request({
      path: `/company/contacts/types/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Post ValidatePortalResponse
   * @param {ValidatePortalRequest} request request
   * @returns {Promise<ValidatePortalResponse>}
   */
  postCompanyContactsValidatePortalCredentials(request) {
    return this.request({
      path: `/company/contacts/validatePortalCredentials`,
      method: 'post',
      data: request,
    })
  }
  /**
   * Get List of ContactTypeAssociation
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CompanyContactTypeAssociation[]>}
   */
  getCompanyContactTypeAssociations(params = {}) {
    return this.request({
      path: `/company/contactTypeAssociations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ContactTypeAssociation
   * @param {CompanyContactTypeAssociation} contactTypeAssociation contactTypeAssociation
   * @returns {Promise<CompanyContactTypeAssociation>}
   */
  postCompanyContactTypeAssociations(contactTypeAssociation) {
    return this.request({
      path: `/company/contactTypeAssociations`,
      method: 'post',
      data: contactTypeAssociation,
    })
  }
  /**
   * Get ContactTypeAssociation
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
   * @returns {Promise<CompanyContactTypeAssociation>}
   */
  getCompanyContactTypeAssociationsById(id, params = {}) {
    return this.request({
      path: `/company/contactTypeAssociations/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ContactTypeAssociation
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyContactTypeAssociationsById(id) {
    return this.request({
      path: `/company/contactTypeAssociations/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ContactTypeAssociation
   * @param {number} id
   * @param {CompanyContactTypeAssociation} contactTypeAssociation contactTypeAssociation
   * @returns {Promise<CompanyContactTypeAssociation>}
   */
  putCompanyContactTypeAssociationsById(id, contactTypeAssociation) {
    return this.request({
      path: `/company/contactTypeAssociations/${id}`,
      method: 'put',
      data: contactTypeAssociation,
    })
  }

  /**
   * Patch ContactTypeAssociation
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CompanyContactTypeAssociation>}
   */
  patchCompanyContactTypeAssociationsById(id, patchOperations) {
    return this.request({
      path: `/company/contactTypeAssociations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ContactTypeAssociation
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
  getCompanyContactTypeAssociationsCount(params = {}) {
    return this.request({
      path: `/company/contactTypeAssociations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Country[]>}
   */
  getCompanyCountries(params = {}) {
    return this.request({
      path: `/company/countries`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Count of
   * @param {Country} country country
   * @returns {Promise<Country>}
   */
  postCompanyCountries(country) {
    return this.request({
      path: `/company/countries`,
      method: 'post',
      data: country,
    })
  }
  /**
   * Get Count of
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
   * @returns {Promise<Country>}
   */
  getCompanyCountriesById(id, params = {}) {
    return this.request({
      path: `/company/countries/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyCountriesById(id) {
    return this.request({
      path: `/company/countries/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Count of
   * @param {number} id
   * @param {Country} country country
   * @returns {Promise<Country>}
   */
  putCompanyCountriesById(id, country) {
    return this.request({
      path: `/company/countries/${id}`,
      method: 'put',
      data: country,
    })
  }

  /**
   * Patch Count of
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Country>}
   */
  patchCompanyCountriesById(id, patchOperations) {
    return this.request({
      path: `/company/countries/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get CountryInfos
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
   * @returns {Promise<CountryInfo>}
   */
  getCompanyCountriesByIdInfo(id, params = {}) {
    return this.request({
      path: `/company/countries/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of
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
  getCompanyCountriesCount(params = {}) {
    return this.request({
      path: `/company/countries/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CountryInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CountryInfo[]>}
   */
  getCompanyCountriesInfo(params = {}) {
    return this.request({
      path: `/company/countries/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CountryInfos
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
  getCompanyCountriesInfoCount(params = {}) {
    return this.request({
      path: `/company/countries/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of EntityType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<EntityType[]>}
   */
  getCompanyEntityTypes(params = {}) {
    return this.request({
      path: `/company/entityTypes`,
      method: 'get',
      params,
    })
  }
  /**
   * Get EntityType
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
   * @returns {Promise<EntityType>}
   */
  getCompanyEntityTypesById(id, params = {}) {
    return this.request({
      path: `/company/entityTypes/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get EntityTypeInfos
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
   * @returns {Promise<EntityTypeInfo>}
   */
  getCompanyEntitytypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/company/entitytypes/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of EntityType
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
  getCompanyEntityTypesCount(params = {}) {
    return this.request({
      path: `/company/entityTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of EntityTypeInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<EntityTypeInfo[]>}
   */
  getCompanyEntitytypesInfo(params = {}) {
    return this.request({
      path: `/company/entitytypes/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of EntityTypeInfos
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
  getCompanyEntityTypesInfoCount(params = {}) {
    return this.request({
      path: `/company/entityTypes/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ExpenseTypeInfos
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
  getCompanyExpenseTypesInfoCount(params = {}) {
    return this.request({
      path: `/company/expenseTypes/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManagedDevicesIntegration
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ManagedDevicesIntegration[]>}
   */
  getCompanyManagedDevicesIntegrations(params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ManagedDevicesIntegration
   * @param {ManagedDevicesIntegration} managedDevicesIntegration managedDevicesIntegration
   * @returns {Promise<ManagedDevicesIntegration>}
   */
  postCompanyManagedDevicesIntegrations(managedDevicesIntegration) {
    return this.request({
      path: `/company/managedDevicesIntegrations`,
      method: 'post',
      data: managedDevicesIntegration,
    })
  }
  /**
   * Get ManagedDevicesIntegration
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
   * @returns {Promise<ManagedDevicesIntegration>}
   */
  getCompanyManagedDevicesIntegrationsById(id, params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ManagedDevicesIntegration
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyManagedDevicesIntegrationsById(id) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ManagedDevicesIntegration
   * @param {number} id
   * @param {ManagedDevicesIntegration} managedDevicesIntegration managedDevicesIntegration
   * @returns {Promise<ManagedDevicesIntegration>}
   */
  putCompanyManagedDevicesIntegrationsById(id, managedDevicesIntegration) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${id}`,
      method: 'put',
      data: managedDevicesIntegration,
    })
  }

  /**
   * Patch ManagedDevicesIntegration
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ManagedDevicesIntegration>}
   */
  patchCompanyManagedDevicesIntegrationsById(id, patchOperations) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ManagedDevicesIntegrationInfos
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
   * @returns {Promise<ManagedDevicesIntegrationInfo>}
   */
  getCompanyManagedDevicesIntegrationsByIdInfo(id, params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${id}/info`,
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
  getCompanyManagedDevicesIntegrationsByIdUsages(id, params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${id}/usages`,
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
  getCompanyManagedDevicesIntegrationsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManagedDevicesIntegrationCrossReference
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
   * @returns {Promise<ManagedDevicesIntegrationCrossReference[]>}
   */
  getCompanyManagedDevicesIntegrationsByParentIdCrossReferences(parentId, params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/crossReferences`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ManagedDevicesIntegrationCrossReference
   * @param {number} parentId
   * @param {ManagedDevicesIntegrationCrossReference} crossReference crossReference
   * @returns {Promise<ManagedDevicesIntegrationCrossReference>}
   */
  postCompanyManagedDevicesIntegrationsByParentIdCrossReferences(parentId, crossReference) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/crossReferences`,
      method: 'post',
      data: crossReference,
    })
  }
  /**
   * Get ManagedDevicesIntegrationCrossReference
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
   * @returns {Promise<ManagedDevicesIntegrationCrossReference>}
   */
  getCompanyManagedDevicesIntegrationsByParentIdCrossReferencesById(id, parentId, params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/crossReferences/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put ManagedDevicesIntegrationCrossReference
   * @param {number} id
   * @param {number} parentId
   * @param {ManagedDevicesIntegrationCrossReference} crossReference crossReference
   * @returns {Promise<ManagedDevicesIntegrationCrossReference>}
   */
  putCompanyManagedDevicesIntegrationsByParentIdCrossReferencesById(id, parentId, crossReference) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/crossReferences/{id}`,
      method: 'put',
      data: crossReference,
    })
  }

  /**
   * Patch ManagedDevicesIntegrationCrossReference
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ManagedDevicesIntegrationCrossReference>}
   */
  patchCompanyManagedDevicesIntegrationsByParentIdCrossReferencesById(
    id,
    parentId,
    patchOperations,
  ) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/crossReferences/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  /**
   * Delete ManagedDevicesIntegrationCrossReference
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<ManagedDevicesIntegrationCrossReference>}
   */
  deleteCompanyManagedDevicesIntegrationsByParentIdCrossReferencesById(id, parentId) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/crossReferences/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of ManagedDevicesIntegrationCrossReference
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
  getCompanyManagedDevicesIntegrationsByParentIdCrossReferencesCount(parentId, params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/crossReferences/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManagedDevicesIntegrationLogin
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
   * @returns {Promise<ManagedDevicesIntegrationLogin[]>}
   */
  getCompanyManagedDevicesIntegrationsByParentIdLogins(parentId, params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/logins`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ManagedDevicesIntegrationLogin
   * @param {number} parentId
   * @param {ManagedDevicesIntegrationLogin} login login
   * @returns {Promise<ManagedDevicesIntegrationLogin>}
   */
  postCompanyManagedDevicesIntegrationsByParentIdLogins(parentId, login) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/logins`,
      method: 'post',
      data: login,
    })
  }
  /**
   * Get ManagedDevicesIntegrationLogin
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
   * @returns {Promise<ManagedDevicesIntegrationLogin>}
   */
  getCompanyManagedDevicesIntegrationsByParentIdLoginsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/logins/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put ManagedDevicesIntegrationLogin
   * @param {number} id
   * @param {number} parentId
   * @param {ManagedDevicesIntegrationLogin} login login
   * @returns {Promise<ManagedDevicesIntegrationLogin>}
   */
  putCompanyManagedDevicesIntegrationsByParentIdLoginsById(id, parentId, login) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/logins/{id}`,
      method: 'put',
      data: login,
    })
  }

  /**
   * Patch ManagedDevicesIntegrationLogin
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ManagedDevicesIntegrationLogin>}
   */
  patchCompanyManagedDevicesIntegrationsByParentIdLoginsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/logins/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  /**
   * Delete ManagedDevicesIntegrationLogin
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<ManagedDevicesIntegrationLogin>}
   */
  deleteCompanyManagedDevicesIntegrationsByParentIdLoginsById(id, parentId) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/logins/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of ManagedDevicesIntegrationLogin
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
  getCompanyManagedDevicesIntegrationsByParentIdLoginsCount(parentId, params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/logins/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManagedDevicesIntegrationNotification
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
   * @returns {Promise<ManagedDevicesIntegrationNotification[]>}
   */
  getCompanyManagedDevicesIntegrationsByParentIdNotifications(parentId, params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/notifications`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ManagedDevicesIntegrationNotification
   * @param {number} parentId
   * @param {ManagedDevicesIntegrationNotification} notification notification
   * @returns {Promise<ManagedDevicesIntegrationNotification>}
   */
  postCompanyManagedDevicesIntegrationsByParentIdNotifications(parentId, notification) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/notifications`,
      method: 'post',
      data: notification,
    })
  }
  /**
   * Get ManagedDevicesIntegrationNotification
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
   * @returns {Promise<ManagedDevicesIntegrationNotification>}
   */
  getCompanyManagedDevicesIntegrationsByParentIdNotificationsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/notifications/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put ManagedDevicesIntegrationNotification
   * @param {number} id
   * @param {number} parentId
   * @param {ManagedDevicesIntegrationNotification} notification notification
   * @returns {Promise<ManagedDevicesIntegrationNotification>}
   */
  putCompanyManagedDevicesIntegrationsByParentIdNotificationsById(id, parentId, notification) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/notifications/{id}`,
      method: 'put',
      data: notification,
    })
  }

  /**
   * Patch ManagedDevicesIntegrationNotification
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ManagedDevicesIntegrationNotification>}
   */
  patchCompanyManagedDevicesIntegrationsByParentIdNotificationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/notifications/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  /**
   * Delete ManagedDevicesIntegrationNotification
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<ManagedDevicesIntegrationNotification>}
   */
  deleteCompanyManagedDevicesIntegrationsByParentIdNotificationsById(id, parentId) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/notifications/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of ManagedDevicesIntegrationNotification
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
  getCompanyManagedDevicesIntegrationsByParentIdNotificationsCount(parentId, params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/${parentId}/notifications/count`,
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
  getCompanyManagedDevicesIntegrationsCount(params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManagedDevicesIntegrationInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ManagedDevicesIntegrationInfo[]>}
   */
  getCompanyManagedDevicesIntegrationsInfo(params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ManagedDevicesIntegrationInfos
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
  getCompanyManagedDevicesIntegrationsInfoCount(params = {}) {
    return this.request({
      path: `/company/managedDevicesIntegrations/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Management
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Management[]>}
   */
  getCompanyManagement(params = {}) {
    return this.request({
      path: `/company/management`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Management
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
   * @returns {Promise<Management>}
   */
  getCompanyManagementById(id, params = {}) {
    return this.request({
      path: `/company/management/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put Management
   * @param {number} id
   * @param {Management} management management
   * @returns {Promise<Management>}
   */
  putCompanyManagementById(id, management) {
    return this.request({
      path: `/company/management/${id}`,
      method: 'put',
      data: management,
    })
  }

  /**
   * Patch Management
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Management>}
   */
  patchCompanyManagementById(id, patchOperations) {
    return this.request({
      path: `/company/management/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @returns {Promise<SuccessResponse>}
   */
  postCompanyManagementByIdExecuteManagedItSync(id) {
    return this.request({
      path: `/company/management/${id}/executeManagedItSync`,
      method: 'post',
    })
  }
  /**
   * Get ManagementLogDocumentInfo
   * @param {number} id
   * @param {string} filePath
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<application/octet-stream>}
   */
  getCompanyManagementByIdLogDownload(id, filePath, params = {}) {
    return this.request({
      path: `/company/management/${id}/log/download`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManagementLogDocumentInfo
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
   * @returns {Promise<ManagementLogDocumentInfo[]>}
   */
  getCompanyManagementByIdLogs(id, params = {}) {
    return this.request({
      path: `/company/management/${id}/logs`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManagementReportNotification
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
   * @returns {Promise<ManagementReportNotification[]>}
   */
  getCompanyManagementByParentIdManagementReportNotifications(parentId, params = {}) {
    return this.request({
      path: `/company/management/${parentId}/managementReportNotifications`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ManagementReportNotification
   * @param {number} parentId
   * @param {ManagementReportNotification} managementReportNotification managementReportNotification
   * @returns {Promise<ManagementReportNotification>}
   */
  postCompanyManagementByParentIdManagementReportNotifications(
    parentId,
    managementReportNotification,
  ) {
    return this.request({
      path: `/company/management/${parentId}/managementReportNotifications`,
      method: 'post',
      data: managementReportNotification,
    })
  }
  /**
   * Get ManagementReportNotification
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
   * @returns {Promise<ManagementReportNotification>}
   */
  getCompanyManagementByParentIdManagementReportNotificationsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/management/${parentId}/managementReportNotifications/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ManagementReportNotification
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyManagementByParentIdManagementReportNotificationsById(id, parentId) {
    return this.request({
      path: `/company/management/${parentId}/managementReportNotifications/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ManagementReportNotification
   * @param {number} id
   * @param {number} parentId
   * @param {ManagementReportNotification} managementReportNotification managementReportNotification
   * @returns {Promise<ManagementReportNotification>}
   */
  putCompanyManagementByParentIdManagementReportNotificationsById(
    id,
    parentId,
    managementReportNotification,
  ) {
    return this.request({
      path: `/company/management/${parentId}/managementReportNotifications/{id}`,
      method: 'put',
      data: managementReportNotification,
    })
  }

  /**
   * Patch ManagementReportNotification
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ManagementReportNotification>}
   */
  patchCompanyManagementByParentIdManagementReportNotificationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/management/${parentId}/managementReportNotifications/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ManagementReportNotification
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
  getCompanyManagementByParentIdManagementReportNotificationsCount(parentId, params = {}) {
    return this.request({
      path: `/company/management/${parentId}/managementReportNotifications/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Management
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
  getCompanyManagementCount(params = {}) {
    return this.request({
      path: `/company/management/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManagementBackup
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ManagementBackup[]>}
   */
  getCompanyManagementBackups(params = {}) {
    return this.request({
      path: `/company/managementBackups`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ManagementBackup
   * @param {ManagementBackup} managementBackup managementBackup
   * @returns {Promise<ManagementBackup>}
   */
  postCompanyManagementBackups(managementBackup) {
    return this.request({
      path: `/company/managementBackups`,
      method: 'post',
      data: managementBackup,
    })
  }
  /**
   * Get ManagementBackup
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
   * @returns {Promise<ManagementBackup>}
   */
  getCompanyManagementBackupsById(id, params = {}) {
    return this.request({
      path: `/company/managementBackups/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ManagementBackup
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyManagementBackupsById(id) {
    return this.request({
      path: `/company/managementBackups/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ManagementBackup
   * @param {number} id
   * @param {ManagementBackup} managementBackup managementBackup
   * @returns {Promise<ManagementBackup>}
   */
  putCompanyManagementBackupsById(id, managementBackup) {
    return this.request({
      path: `/company/managementBackups/${id}`,
      method: 'put',
      data: managementBackup,
    })
  }

  /**
   * Patch ManagementBackup
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ManagementBackup>}
   */
  patchCompanyManagementBackupsById(id, patchOperations) {
    return this.request({
      path: `/company/managementBackups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ManagementBackup
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
  getCompanyManagementBackupsCount(params = {}) {
    return this.request({
      path: `/company/managementBackups/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManagementItSolution
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ManagementItSolution[]>}
   */
  getCompanyManagementItSolutions(params = {}) {
    return this.request({
      path: `/company/managementItSolutions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ManagementItSolution
   * @param {ManagementItSolution} managementItSolution managementItSolution
   * @returns {Promise<ManagementItSolution>}
   */
  postCompanyManagementItSolutions(managementItSolution) {
    return this.request({
      path: `/company/managementItSolutions`,
      method: 'post',
      data: managementItSolution,
    })
  }
  /**
   * Get ManagementItSolution
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
   * @returns {Promise<ManagementItSolution>}
   */
  getCompanyManagementItSolutionsById(id, params = {}) {
    return this.request({
      path: `/company/managementItSolutions/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ManagementItSolution
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyManagementItSolutionsById(id) {
    return this.request({
      path: `/company/managementItSolutions/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ManagementItSolution
   * @param {number} id
   * @param {ManagementItSolution} managementItSolution managementItSolution
   * @returns {Promise<ManagementItSolution>}
   */
  putCompanyManagementItSolutionsById(id, managementItSolution) {
    return this.request({
      path: `/company/managementItSolutions/${id}`,
      method: 'put',
      data: managementItSolution,
    })
  }

  /**
   * Patch ManagementItSolution
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ManagementItSolution>}
   */
  patchCompanyManagementItSolutionsById(id, patchOperations) {
    return this.request({
      path: `/company/managementItSolutions/${id}`,
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
  getCompanyManagementItSolutionsByIdUsages(id, params = {}) {
    return this.request({
      path: `/company/managementItSolutions/${id}/usages`,
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
  getCompanyManagementItSolutionsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/company/managementItSolutions/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManagementItSolutionAgreementInterfaceParameter
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
   * @returns {Promise<ManagementItSolutionAgreementInterfaceParameter[]>}
   */
  getCompanyManagementItSolutionsByParentIdManagementProducts(parentId, params = {}) {
    return this.request({
      path: `/company/managementItSolutions/${parentId}/managementProducts`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ManagementItSolutionAgreementInterfaceParameter
   * @param {number} parentId
   * @param {ManagementItSolutionAgreementInterfaceParameter} managementProduct managementProduct
   * @returns {Promise<ManagementItSolutionAgreementInterfaceParameter>}
   */
  postCompanyManagementItSolutionsByParentIdManagementProducts(parentId, managementProduct) {
    return this.request({
      path: `/company/managementItSolutions/${parentId}/managementProducts`,
      method: 'post',
      data: managementProduct,
    })
  }
  /**
   * Get ManagementItSolutionAgreementInterfaceParameter
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
   * @returns {Promise<ManagementItSolutionAgreementInterfaceParameter>}
   */
  getCompanyManagementItSolutionsByParentIdManagementProductsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/managementItSolutions/${parentId}/managementProducts/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put ManagementItSolutionAgreementInterfaceParameter
   * @param {number} id
   * @param {number} parentId
   * @param {ManagementItSolutionAgreementInterfaceParameter} managementProduct managementProduct
   * @returns {Promise<ManagementItSolutionAgreementInterfaceParameter>}
   */
  putCompanyManagementItSolutionsByParentIdManagementProductsById(id, parentId, managementProduct) {
    return this.request({
      path: `/company/managementItSolutions/${parentId}/managementProducts/{id}`,
      method: 'put',
      data: managementProduct,
    })
  }

  /**
   * Patch ManagementItSolutionAgreementInterfaceParameter
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ManagementItSolutionAgreementInterfaceParameter>}
   */
  patchCompanyManagementItSolutionsByParentIdManagementProductsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/managementItSolutions/${parentId}/managementProducts/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  /**
   * Delete ManagementItSolutionAgreementInterfaceParameter
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<ManagementItSolutionAgreementInterfaceParameter>}
   */
  deleteCompanyManagementItSolutionsByParentIdManagementProductsById(id, parentId) {
    return this.request({
      path: `/company/managementItSolutions/${parentId}/managementProducts/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of ManagementItSolutionAgreementInterfaceParameter
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
  getCompanyManagementItSolutionsByParentIdManagementProductsCount(parentId, params = {}) {
    return this.request({
      path: `/company/managementItSolutions/${parentId}/managementProducts/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ManagementItSolution
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
  getCompanyManagementItSolutionsCount(params = {}) {
    return this.request({
      path: `/company/managementItSolutions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MarketDescription
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<MarketDescription[]>}
   */
  getCompanyMarketDescriptions(params = {}) {
    return this.request({
      path: `/company/marketDescriptions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MarketDescription
   * @param {MarketDescription} marketDescription marketDescription
   * @returns {Promise<MarketDescription>}
   */
  postCompanyMarketDescriptions(marketDescription) {
    return this.request({
      path: `/company/marketDescriptions`,
      method: 'post',
      data: marketDescription,
    })
  }
  /**
   * Get MarketDescription
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
   * @returns {Promise<MarketDescription>}
   */
  getCompanyMarketDescriptionsById(id, params = {}) {
    return this.request({
      path: `/company/marketDescriptions/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MarketDescription
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyMarketDescriptionsById(id) {
    return this.request({
      path: `/company/marketDescriptions/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put MarketDescription
   * @param {number} id
   * @param {MarketDescription} marketDescription marketDescription
   * @returns {Promise<MarketDescription>}
   */
  putCompanyMarketDescriptionsById(id, marketDescription) {
    return this.request({
      path: `/company/marketDescriptions/${id}`,
      method: 'put',
      data: marketDescription,
    })
  }

  /**
   * Patch MarketDescription
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MarketDescription>}
   */
  patchCompanyMarketDescriptionsById(id, patchOperations) {
    return this.request({
      path: `/company/marketDescriptions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get MarketDescriptionInfos
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
   * @returns {Promise<MarketDescriptionInfo>}
   */
  getCompanyMarketDescriptionsByIdInfo(id, params = {}) {
    return this.request({
      path: `/company/marketDescriptions/${id}/info`,
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
  getCompanyMarketDescriptionsByIdUsages(id, params = {}) {
    return this.request({
      path: `/company/marketDescriptions/${id}/usages`,
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
  getCompanyMarketDescriptionsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/company/marketDescriptions/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of MarketDescription
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
  getCompanyMarketDescriptionsCount(params = {}) {
    return this.request({
      path: `/company/marketDescriptions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MarketDescriptionInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<MarketDescriptionInfo[]>}
   */
  getCompanyMarketDescriptionsInfo(params = {}) {
    return this.request({
      path: `/company/marketDescriptions/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of MarketDescriptionInfos
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
  getCompanyMarketDescriptionsInfoCount(params = {}) {
    return this.request({
      path: `/company/marketDescriptions/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CompanyNoteType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CompanyNoteType[]>}
   */
  getCompanyNoteTypes(params = {}) {
    return this.request({
      path: `/company/noteTypes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CompanyNoteType
   * @param {CompanyNoteType} noteType noteType
   * @returns {Promise<CompanyNoteType>}
   */
  postCompanyNoteTypes(noteType) {
    return this.request({
      path: `/company/noteTypes`,
      method: 'post',
      data: noteType,
    })
  }
  /**
   * Get CompanyNoteType
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
   * @returns {Promise<CompanyNoteType>}
   */
  getCompanyNoteTypesById(id, params = {}) {
    return this.request({
      path: `/company/noteTypes/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CompanyNoteType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyNoteTypesById(id) {
    return this.request({
      path: `/company/noteTypes/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put CompanyNoteType
   * @param {number} id
   * @param {CompanyNoteType} noteType noteType
   * @returns {Promise<CompanyNoteType>}
   */
  putCompanyNoteTypesById(id, noteType) {
    return this.request({
      path: `/company/noteTypes/${id}`,
      method: 'put',
      data: noteType,
    })
  }

  /**
   * Patch CompanyNoteType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CompanyNoteType>}
   */
  patchCompanyNoteTypesById(id, patchOperations) {
    return this.request({
      path: `/company/noteTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get CompanyNoteTypeInfo
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
   * @returns {Promise<CompanyNoteTypeInfo>}
   */
  getCompanyNoteTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/company/noteTypes/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CompanyNoteType
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
  getCompanyNoteTypesCount(params = {}) {
    return this.request({
      path: `/company/noteTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CompanyNoteTypeInfo
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
  getCompanyNoteTypesCountInfo(params = {}) {
    return this.request({
      path: `/company/noteTypes/count/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CompanyNoteTypeInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CompanyNoteTypeInfo[]>}
   */
  getCompanyNoteTypesInfo(params = {}) {
    return this.request({
      path: `/company/noteTypes/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OwnershipType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<OwnershipType[]>}
   */
  getCompanyOwnershipTypes(params = {}) {
    return this.request({
      path: `/company/ownershipTypes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post OwnershipType
   * @param {OwnershipType} ownershipType ownershipType
   * @returns {Promise<OwnershipType>}
   */
  postCompanyOwnershipTypes(ownershipType) {
    return this.request({
      path: `/company/ownershipTypes`,
      method: 'post',
      data: ownershipType,
    })
  }
  /**
   * Get OwnershipType
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
   * @returns {Promise<OwnershipType>}
   */
  getCompanyOwnershipTypesById(id, params = {}) {
    return this.request({
      path: `/company/ownershipTypes/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete OwnershipType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyOwnershipTypesById(id) {
    return this.request({
      path: `/company/ownershipTypes/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put OwnershipType
   * @param {number} id
   * @param {OwnershipType} ownershipType ownershipType
   * @returns {Promise<OwnershipType>}
   */
  putCompanyOwnershipTypesById(id, ownershipType) {
    return this.request({
      path: `/company/ownershipTypes/${id}`,
      method: 'put',
      data: ownershipType,
    })
  }

  /**
   * Patch OwnershipType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<OwnershipType>}
   */
  patchCompanyOwnershipTypesById(id, patchOperations) {
    return this.request({
      path: `/company/ownershipTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get OwnershipTypeInfos
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
   * @returns {Promise<OwnershipTypeInfo>}
   */
  getCompanyOwnershipTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/company/ownershipTypes/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of OwnershipType
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
  getCompanyOwnershipTypesCount(params = {}) {
    return this.request({
      path: `/company/ownershipTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OwnershipTypeInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<OwnershipTypeInfo[]>}
   */
  getCompanyOwnershipTypesInfo(params = {}) {
    return this.request({
      path: `/company/ownershipTypes/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of OwnershipTypeInfos
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
  getCompanyOwnershipTypesInfoCount(params = {}) {
    return this.request({
      path: `/company/ownershipTypes/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of PaymentTypeInfos
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
  getCompanyPaymentTypesInfoCount(params = {}) {
    return this.request({
      path: `/company/paymentTypes/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PortalConfiguration
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PortalConfiguration[]>}
   */
  getCompanyPortalConfigurations(params = {}) {
    return this.request({
      path: `/company/portalConfigurations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post PortalConfiguration
   * @param {PortalConfiguration} portalConfiguration portalConfiguration
   * @returns {Promise<PortalConfiguration>}
   */
  postCompanyPortalConfigurations(portalConfiguration) {
    return this.request({
      path: `/company/portalConfigurations`,
      method: 'post',
      data: portalConfiguration,
    })
  }
  /**
   * Get PortalConfiguration
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
   * @returns {Promise<PortalConfiguration>}
   */
  getCompanyPortalConfigurationsById(id, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete PortalConfiguration
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyPortalConfigurationsById(id) {
    return this.request({
      path: `/company/portalConfigurations/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put PortalConfiguration
   * @param {number} id
   * @param {PortalConfiguration} portalConfiguration portalConfiguration
   * @returns {Promise<PortalConfiguration>}
   */
  putCompanyPortalConfigurationsById(id, portalConfiguration) {
    return this.request({
      path: `/company/portalConfigurations/${id}`,
      method: 'put',
      data: portalConfiguration,
    })
  }

  /**
   * Patch PortalConfiguration
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PortalConfiguration>}
   */
  patchCompanyPortalConfigurationsById(id, patchOperations) {
    return this.request({
      path: `/company/portalConfigurations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of PortalConfigurationInvoiceSetup
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
   * @returns {Promise<PortalConfigurationInvoiceSetup[]>}
   */
  getCompanyPortalConfigurationsByParentIdInvoiceSetups(parentId, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/invoiceSetups`,
      method: 'get',
      params,
    })
  }
  /**
   * Get PortalConfigurationInvoiceSetup
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
   * @returns {Promise<PortalConfigurationInvoiceSetup>}
   */
  getCompanyPortalConfigurationsByParentIdInvoiceSetupsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/invoiceSetups/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put PortalConfigurationInvoiceSetup
   * @param {number} id
   * @param {number} parentId
   * @param {PortalConfigurationInvoiceSetup} portalConfigurationInvoiceSetup portalConfigurationInvoiceSetup
   * @returns {Promise<PortalConfigurationInvoiceSetup>}
   */
  putCompanyPortalConfigurationsByParentIdInvoiceSetupsById(
    id,
    parentId,
    portalConfigurationInvoiceSetup,
  ) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/invoiceSetups/{id}`,
      method: 'put',
      data: portalConfigurationInvoiceSetup,
    })
  }

  /**
   * Patch PortalConfigurationInvoiceSetup
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PortalConfigurationInvoiceSetup>}
   */
  patchCompanyPortalConfigurationsByParentIdInvoiceSetupsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/invoiceSetups/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @param {number} parentId
   * @param {PortalConfigurationInvoiceSetup} portalConfigurationInvoiceSetup portalConfigurationInvoiceSetup
   * @returns {Promise<SuccessResponse>}
   */
  postCompanyPortalConfigurationsByParentIdInvoiceSetupsByIdTestTransaction(
    id,
    parentId,
    portalConfigurationInvoiceSetup,
  ) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/invoiceSetups/{id}/testTransaction`,
      method: 'post',
      data: portalConfigurationInvoiceSetup,
    })
  }
  /**
   * Get Count of PortalConfigurationInvoiceSetup
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
  getCompanyPortalConfigurationsByParentIdInvoiceSetupsCount(parentId, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/invoiceSetups/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PortalConfigurationOpportunitySetup
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
   * @returns {Promise<PortalConfigurationOpportunitySetup[]>}
   */
  getCompanyPortalConfigurationsByParentIdOpportunitySetups(parentId, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/opportunitySetups`,
      method: 'get',
      params,
    })
  }

  /**
   * Put PortalConfigurationOpportunitySetup
   * @param {number} parentId
   * @param {PortalConfigurationOpportunitySetup} opportunitySetup opportunitySetup
   * @returns {Promise<PortalConfigurationOpportunitySetup>}
   */
  putCompanyPortalConfigurationsByParentIdOpportunitySetups(parentId, opportunitySetup) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/opportunitySetups`,
      method: 'put',
      data: opportunitySetup,
    })
  }

  /**
   * Patch PortalConfigurationOpportunitySetup
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PortalConfigurationOpportunitySetup>}
   */
  patchCompanyPortalConfigurationsByParentIdOpportunitySetups(parentId, patchOperations) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/opportunitySetups`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get PortalConfigurationOpportunitySetup
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
   * @returns {Promise<PortalConfigurationOpportunitySetup>}
   */
  getCompanyPortalConfigurationsByParentIdOpportunitySetupsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/opportunitySetups/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put PortalConfigurationOpportunitySetup
   * @param {number} id
   * @param {number} parentId
   * @param {PortalConfigurationOpportunitySetup} opportunitySetup opportunitySetup
   * @returns {Promise<PortalConfigurationOpportunitySetup>}
   */
  putCompanyPortalConfigurationsByParentIdOpportunitySetupsById(id, parentId, opportunitySetup) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/opportunitySetups/{id}`,
      method: 'put',
      data: opportunitySetup,
    })
  }

  /**
   * Patch PortalConfigurationOpportunitySetup
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PortalConfigurationOpportunitySetup>}
   */
  patchCompanyPortalConfigurationsByParentIdOpportunitySetupsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/opportunitySetups/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of PortalConfigurationPasswordEmailSetup
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
   * @returns {Promise<PortalConfigurationPasswordEmailSetup[]>}
   */
  getCompanyPortalConfigurationsByParentIdPasswordEmailSetups(parentId, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/passwordEmailSetups`,
      method: 'get',
      params,
    })
  }
  /**
   * Get PortalConfigurationPasswordEmailSetup
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
   * @returns {Promise<PortalConfigurationPasswordEmailSetup>}
   */
  getCompanyPortalConfigurationsByParentIdPasswordEmailSetupsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/passwordEmailSetups/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put PortalConfigurationPasswordEmailSetup
   * @param {number} id
   * @param {number} parentId
   * @param {PortalConfigurationPasswordEmailSetup} passwordEmailSetup passwordEmailSetup
   * @returns {Promise<PortalConfigurationPasswordEmailSetup>}
   */
  putCompanyPortalConfigurationsByParentIdPasswordEmailSetupsById(
    id,
    parentId,
    passwordEmailSetup,
  ) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/passwordEmailSetups/{id}`,
      method: 'put',
      data: passwordEmailSetup,
    })
  }

  /**
   * Patch PortalConfigurationPasswordEmailSetup
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PortalConfigurationPasswordEmailSetup>}
   */
  patchCompanyPortalConfigurationsByParentIdPasswordEmailSetupsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/passwordEmailSetups/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of PortalConfigurationProjectSetup
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
   * @returns {Promise<PortalConfigurationProjectSetup[]>}
   */
  getCompanyPortalConfigurationsByParentIdProjectSetups(parentId, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/projectSetups`,
      method: 'get',
      params,
    })
  }
  /**
   * Get PortalConfigurationProjectSetup
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
   * @returns {Promise<PortalConfigurationProjectSetup>}
   */
  getCompanyPortalConfigurationsByParentIdProjectSetupsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/projectSetups/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put PortalConfigurationProjectSetup
   * @param {number} id
   * @param {number} parentId
   * @param {PortalConfigurationProjectSetup} portalConfigurationProjectSetup portalConfigurationProjectSetup
   * @returns {Promise<PortalConfigurationProjectSetup>}
   */
  putCompanyPortalConfigurationsByParentIdProjectSetupsById(
    id,
    parentId,
    portalConfigurationProjectSetup,
  ) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/projectSetups/{id}`,
      method: 'put',
      data: portalConfigurationProjectSetup,
    })
  }

  /**
   * Patch PortalConfigurationProjectSetup
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PortalConfigurationProjectSetup>}
   */
  patchCompanyPortalConfigurationsByParentIdProjectSetupsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/projectSetups/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of PortalConfigurationProjectSetup
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
  getCompanyPortalConfigurationsByParentIdProjectSetupsCount(parentId, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/projectSetups/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PortalConfigurationServiceSetup
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
   * @returns {Promise<PortalConfigurationServiceSetup[]>}
   */
  getCompanyPortalConfigurationsByParentIdServiceSetups(parentId, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/serviceSetups`,
      method: 'get',
      params,
    })
  }
  /**
   * Get PortalConfigurationServiceSetup
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
   * @returns {Promise<PortalConfigurationServiceSetup>}
   */
  getCompanyPortalConfigurationsByParentIdServiceSetupsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/serviceSetups/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put PortalConfigurationServiceSetup
   * @param {number} id
   * @param {number} parentId
   * @param {PortalConfigurationServiceSetup} portalConfigurationServiceSetup portalConfigurationServiceSetup
   * @returns {Promise<PortalConfigurationServiceSetup>}
   */
  putCompanyPortalConfigurationsByParentIdServiceSetupsById(
    id,
    parentId,
    portalConfigurationServiceSetup,
  ) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/serviceSetups/{id}`,
      method: 'put',
      data: portalConfigurationServiceSetup,
    })
  }

  /**
   * Patch PortalConfigurationServiceSetup
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PortalConfigurationServiceSetup>}
   */
  patchCompanyPortalConfigurationsByParentIdServiceSetupsById(id, parentId, patchOperations) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/serviceSetups/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of PortalConfigurationServiceSetup
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
  getCompanyPortalConfigurationsByParentIdServiceSetupsCount(parentId, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/${parentId}/serviceSetups/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post PortalConfiguration
   * @param {PortalConfiguration} copy copy
   * @returns {Promise<PortalConfiguration>}
   */
  postCompanyPortalConfigurationsCopy(copy) {
    return this.request({
      path: `/company/portalConfigurations/copy`,
      method: 'post',
      data: copy,
    })
  }
  /**
   * Get Count of PortalConfiguration
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
  getCompanyPortalConfigurationsCount(params = {}) {
    return this.request({
      path: `/company/portalConfigurations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PortalConfigurationPaymentProcessor
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PortalConfigurationPaymentProcessor[]>}
   */
  getCompanyPortalConfigurationsInvoiceSetupPaymentProcessors(params = {}) {
    return this.request({
      path: `/company/portalConfigurations/invoiceSetup/paymentProcessors`,
      method: 'get',
      params,
    })
  }
  /**
   * Get PortalConfigurationPaymentProcessor
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
   * @returns {Promise<PortalConfigurationPaymentProcessor>}
   */
  getCompanyPortalConfigurationsInvoiceSetupPaymentProcessorsById(id, params = {}) {
    return this.request({
      path: `/company/portalConfigurations/invoiceSetup/paymentProcessors/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of PortalConfigurationPaymentProcessor
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
  getCompanyPortalConfigurationsInvoiceSetupPaymentProcessorsCount(params = {}) {
    return this.request({
      path: `/company/portalConfigurations/invoiceSetup/paymentProcessors/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PortalSecurityLevel
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PortalSecurityLevel[]>}
   */
  getCompanyPortalSecurityLevels(params = {}) {
    return this.request({
      path: `/company/portalSecurityLevels`,
      method: 'get',
      params,
    })
  }
  /**
   * Get PortalSecurityLevel
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
   * @returns {Promise<PortalSecurityLevel>}
   */
  getCompanyPortalSecurityLevelsById(id, params = {}) {
    return this.request({
      path: `/company/portalSecurityLevels/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put PortalSecurityLevel
   * @param {number} id
   * @param {PortalSecurityLevel} _portalSecurityLevel _portalSecurityLevel
   * @returns {Promise<PortalSecurityLevel>}
   */
  putCompanyPortalSecurityLevelsById(id, _portalSecurityLevel) {
    return this.request({
      path: `/company/portalSecurityLevels/${id}`,
      method: 'put',
      data: _portalSecurityLevel,
    })
  }

  /**
   * Patch PortalSecurityLevel
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PortalSecurityLevel>}
   */
  patchCompanyPortalSecurityLevelsById(id, patchOperations) {
    return this.request({
      path: `/company/portalSecurityLevels/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of PortalSecurityLevel
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
  getCompanyPortalSecurityLevelsCount(params = {}) {
    return this.request({
      path: `/company/portalSecurityLevels/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PortalSecuritySetting
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PortalSecuritySetting[]>}
   */
  getCompanyPortalSecuritySettings(params = {}) {
    return this.request({
      path: `/company/portalSecuritySettings`,
      method: 'get',
      params,
    })
  }
  /**
   * Get PortalSecuritySetting
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
   * @returns {Promise<PortalSecuritySetting>}
   */
  getCompanyPortalSecuritySettingsById(id, params = {}) {
    return this.request({
      path: `/company/portalSecuritySettings/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put PortalSecuritySetting
   * @param {number} id
   * @param {PortalSecuritySetting} portalSecurity portalSecurity
   * @returns {Promise<PortalSecuritySetting>}
   */
  putCompanyPortalSecuritySettingsById(id, portalSecurity) {
    return this.request({
      path: `/company/portalSecuritySettings/${id}`,
      method: 'put',
      data: portalSecurity,
    })
  }

  /**
   * Patch PortalSecuritySetting
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PortalSecuritySetting>}
   */
  patchCompanyPortalSecuritySettingsById(id, patchOperations) {
    return this.request({
      path: `/company/portalSecuritySettings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of PortalSecuritySetting
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
  getCompanyPortalSecuritySettingsCount(params = {}) {
    return this.request({
      path: `/company/portalSecuritySettings/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of State
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<State[]>}
   */
  getCompanyStates(params = {}) {
    return this.request({
      path: `/company/states`,
      method: 'get',
      params,
    })
  }

  /**
   * Post State
   * @param {State} state state
   * @returns {Promise<State>}
   */
  postCompanyStates(state) {
    return this.request({
      path: `/company/states`,
      method: 'post',
      data: state,
    })
  }
  /**
   * Get State
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
   * @returns {Promise<State>}
   */
  getCompanyStatesById(id, params = {}) {
    return this.request({
      path: `/company/states/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put State
   * @param {number} id
   * @param {State} state state
   * @returns {Promise<State>}
   */
  putCompanyStatesById(id, state) {
    return this.request({
      path: `/company/states/${id}`,
      method: 'put',
      data: state,
    })
  }

  /**
   * Patch State
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<State>}
   */
  patchCompanyStatesById(id, patchOperations) {
    return this.request({
      path: `/company/states/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  /**
   * Delete State
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyStatesById(id) {
    return this.request({
      path: `/company/states/${id}`,
      method: 'delete',
    })
  }
  /**
   * Get StateInfos
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
   * @returns {Promise<StateInfo>}
   */
  getCompanyStatesByIdInfo(id, params = {}) {
    return this.request({
      path: `/company/states/${id}/info`,
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
  getCompanyStatesByIdUsages(id, params = {}) {
    return this.request({
      path: `/company/states/${id}/usages`,
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
  getCompanyStatesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/company/states/${id}/usages/list`,
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
  getCompanyStatesCount(params = {}) {
    return this.request({
      path: `/company/states/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of StateInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<StateInfo[]>}
   */
  getCompanyStatesInfo(params = {}) {
    return this.request({
      path: `/company/states/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of StateInfos
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
  getCompanyStatesInfoCount(params = {}) {
    return this.request({
      path: `/company/states/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TeamRole
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TeamRole[]>}
   */
  getCompanyTeamRoles(params = {}) {
    return this.request({
      path: `/company/teamRoles`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TeamRole
   * @param {TeamRole} teamRole teamRole
   * @returns {Promise<TeamRole>}
   */
  postCompanyTeamRoles(teamRole) {
    return this.request({
      path: `/company/teamRoles`,
      method: 'post',
      data: teamRole,
    })
  }
  /**
   * Get TeamRole
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
   * @returns {Promise<TeamRole>}
   */
  getCompanyTeamRolesById(id, params = {}) {
    return this.request({
      path: `/company/teamRoles/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TeamRole
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyTeamRolesById(id) {
    return this.request({
      path: `/company/teamRoles/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put TeamRole
   * @param {number} id
   * @param {TeamRole} teamRole teamRole
   * @returns {Promise<TeamRole>}
   */
  putCompanyTeamRolesById(id, teamRole) {
    return this.request({
      path: `/company/teamRoles/${id}`,
      method: 'put',
      data: teamRole,
    })
  }

  /**
   * Patch TeamRole
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TeamRole>}
   */
  patchCompanyTeamRolesById(id, patchOperations) {
    return this.request({
      path: `/company/teamRoles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get TeamRoleInfos
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
   * @returns {Promise<TeamRoleInfo>}
   */
  getCompanyTeamRolesByIdInfo(id, params = {}) {
    return this.request({
      path: `/company/teamRoles/${id}/info`,
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
  getCompanyTeamRolesByIdUsages(id, params = {}) {
    return this.request({
      path: `/company/teamRoles/${id}/usages`,
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
  getCompanyTeamRolesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/company/teamRoles/${id}/usages/list`,
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
  getCompanyTeamRolesCount(params = {}) {
    return this.request({
      path: `/company/teamRoles/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TeamRoleInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TeamRoleInfo[]>}
   */
  getCompanyTeamRolesInfo(params = {}) {
    return this.request({
      path: `/company/teamRoles/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TeamRoleInfos
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
  getCompanyTeamRolesInfoCount(params = {}) {
    return this.request({
      path: `/company/teamRoles/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Track
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Track[]>}
   */
  getCompanyTracks(params = {}) {
    return this.request({
      path: `/company/tracks`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Track
   * @param {Track} track track
   * @returns {Promise<Track>}
   */
  postCompanyTracks(track) {
    return this.request({
      path: `/company/tracks`,
      method: 'post',
      data: track,
    })
  }
  /**
   * Get Track
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
   * @returns {Promise<Track>}
   */
  getCompanyTracksById(id, params = {}) {
    return this.request({
      path: `/company/tracks/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Track
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteCompanyTracksById(id) {
    return this.request({
      path: `/company/tracks/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Track
   * @param {number} id
   * @param {Track} track track
   * @returns {Promise<Track>}
   */
  putCompanyTracksById(id, track) {
    return this.request({
      path: `/company/tracks/${id}`,
      method: 'put',
      data: track,
    })
  }

  /**
   * Patch Track
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Track>}
   */
  patchCompanyTracksById(id, patchOperations) {
    return this.request({
      path: `/company/tracks/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of TrackAction
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
   * @returns {Promise<TrackAction[]>}
   */
  getCompanyTracksByParentIdActions(parentId, params = {}) {
    return this.request({
      path: `/company/tracks/${parentId}/actions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TrackAction
   * @param {number} parentId
   * @param {TrackAction} trackAction trackAction
   * @returns {Promise<TrackAction>}
   */
  postCompanyTracksByParentIdActions(parentId, trackAction) {
    return this.request({
      path: `/company/tracks/${parentId}/actions`,
      method: 'post',
      data: trackAction,
    })
  }
  /**
   * Get TrackAction
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
   * @returns {Promise<TrackAction>}
   */
  getCompanyTracksByParentIdActionsById(id, parentId, params = {}) {
    return this.request({
      path: `/company/tracks/${parentId}/actions/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put TrackAction
   * @param {number} id
   * @param {number} parentId
   * @param {TrackAction} trackAction trackAction
   * @returns {Promise<TrackAction>}
   */
  putCompanyTracksByParentIdActionsById(id, parentId, trackAction) {
    return this.request({
      path: `/company/tracks/${parentId}/actions/{id}`,
      method: 'put',
      data: trackAction,
    })
  }

  /**
   * Patch TrackAction
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<TrackAction>}
   */
  patchCompanyTracksByParentIdActionsById(id, parentId) {
    return this.request({
      path: `/company/tracks/${parentId}/actions/{id}`,
      method: 'patch',
    })
  }

  /**
   * Delete TrackAction
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteCompanyTracksByParentIdActionsById(id, parentId) {
    return this.request({
      path: `/company/tracks/${parentId}/actions/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of TrackAction
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
  getCompanyTracksByParentIdActionsCount(parentId, params = {}) {
    return this.request({
      path: `/company/tracks/${parentId}/actions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Track
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
  getCompanyTracksCount(params = {}) {
    return this.request({
      path: `/company/tracks/count`,
      method: 'get',
      params,
    })
  }
}
