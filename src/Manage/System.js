import Manage from './Manage.js'

/**
 * AllowedFileType
 * @typedef {object} AllowedFileType
 * @property {number} [id]  int32
 * @property {string} fileType
 * @property {number} [sizeLimit]  int32 nullable
 * @property {object} [_info]
 */

/**
 * Count
 * @typedef {object} Count
 * @property {number} [count]  int32
 */

/**
 * AllowedOrigin
 * @typedef {object} AllowedOrigin
 * @property {number} [id]  int32
 * @property {string} origin  Max length: 2000;
 * @property {string} description  Max length: 2000;
 * @property {string} [lastUpdateUtc]  date-time
 * @property {string} [updatedBy]
 * @property {object} [_info]
 */

/**
 * ApiMember
 * @typedef {object} ApiMember
 * @property {number} [id]  int32
 * @property {string} identifier  Max length: 15;
 * @property {string} [name]  Max length: 30; Required On Updates;
 * @property {string} [emailAddress]  Max length: 250;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {string} [inactiveDate]  date-time
 * @property {TimeZoneSetupReference} [timeZone]
 * @property {SecurityRoleReference} [securityRole]
 * @property {StructureReference} [structureLevel]
 * @property {SystemLocationReference} [securityLocation]
 * @property {SystemLocationReference} [defaultLocation]
 * @property {SystemDepartmentReference} [defaultDepartment]
 * @property {SystemLocationReference} [salesDefaultLocation]
 * @property {BoardReference} [serviceDefaultBoard]
 * @property {string} [notes]
 * @property {array} [excludedServiceBoardIds]
 * @property {boolean} [blockPriceFlag]   nullable
 * @property {boolean} [blockCostFlag]   nullable
 * @property {object} [_info]
 */

/**
 * AuditTrailEntry
 * @typedef {object} AuditTrailEntry
 * @property {string} [text]
 * @property {string} [enteredDate]
 * @property {string} [enteredBy]
 * @property {string} [auditType]
 * @property {string} [auditSubType]
 * @property {string} [auditSource]
 */

/**
 * AuthAnvil
 * @typedef {object} AuthAnvil
 * @property {number} [id]  int32
 * @property {string} serverLocationUrl
 * @property {number} siteId  int32 nullable
 * @property {object} [_info]
 */

/**
 * SuccessResponse
 * @typedef {object} SuccessResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * AutoSyncTime
 * @typedef {object} AutoSyncTime
 * @property {number} [id]  int32
 * @property {string} syncTime
 * @property {TimeZoneSetupReference} [timeZone]
 * @property {object} [_info]
 */

/**
 * BundleResultsCollection
 * @typedef {object} BundleResultsCollection
 * @property {array} [results]
 * @property {object} [_info]
 */

/**
 * CallbackEntry
 * @typedef {object} CallbackEntry
 * @property {number} [id]  int32
 * @property {string} [description]  Max length: 100;
 * @property {string} [url]  Required Reference
 * @property {number} [objectId]  Required Reference int32 nullable
 * @property {string} [type]  Required Reference
 * @property {string} [level]  Required Reference
 * @property {number} [memberId]  int32 nullable
 * @property {string} [payloadVersion]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [isSoapCallbackFlag]   nullable
 * @property {boolean} [isSelfSuppressedFlag]   nullable
 * @property {object} [_info]
 */

/**
 * Certification
 * @typedef {object} Certification
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {CompanyReference} [company]
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
 * ConnectWiseHostedScreen
 * @typedef {object} ConnectWiseHostedScreen
 * @property {number} [id]  int32
 * @property {string} [screenId]
 * @property {string} [name]
 */

/**
 * ConnectWiseHostedSetup
 * @typedef {object} ConnectWiseHostedSetup
 * @property {number} [id]  int32
 * @property {number} screenId Can be obtained via ConnectWiseHostedApiScreen report int32 nullable
 * @property {string} description  Max length: 50;
 * @property {string} url  Max length: 1024;
 * @property {string} type   nullable
 * @property {string} [clientId] Only required if not already set Max length: 36;
 * @property {string} [origin]  Max length: 100;
 * @property {number} [podHeight]  int32 nullable
 * @property {number} [toolbarButtonDialogHeight]  int32 nullable
 * @property {number} [toolbarButtonDialogWidth]  int32 nullable
 * @property {string} [toolbarButtonText] Only required for ToolbarButtons Max length: 50;
 * @property {string} [toolbarButtonToolTip]  Max length: 50;
 * @property {number} [toolbarButtonIconDocumentId]  int32 nullable
 * @property {boolean} [disabledFlag]   nullable
 * @property {array} [locationIds]
 * @property {boolean} [locationsEnabledFlag]   nullable
 * @property {string} [createdBy]
 * @property {string} [dateCreated]
 * @property {object} [_info]
 */

/**
 * CustomReport
 * @typedef {object} CustomReport
 * @property {number} [id]  int32
 * @property {string} reportLink
 * @property {string} name  Max length: 100;
 * @property {string} module The Module Name  nullable
 * @property {string} description  Max length: 150;
 * @property {boolean} [generatedFlag]   nullable
 * @property {string} [parameterPrefix]  Max length: 50;
 * @property {string} [parameterSeparator]  Max length: 50;
 * @property {string} [parameterNameSeparator]  Max length: 50;
 * @property {string} [parameterSuffix]  Max length: 50;
 * @property {boolean} [locationFlag]   nullable
 * @property {number} [locationParamId] Parameter unique identifier for the Custom Report's Location parameter int32 nullable
 * @property {boolean} [locationDefaultFlag]   nullable
 * @property {string} [locationOverride]
 * @property {boolean} [departmentFlag]   nullable
 * @property {number} [departmentParamId] Parameter unique identifier for the Custom Report's Department parameter int32 nullable
 * @property {boolean} [departmentDefaultFlag]   nullable
 * @property {string} [departmentOverride]
 * @property {boolean} [territoryFlag]   nullable
 * @property {number} [territoryParamId] Parameter unique identifier for the Custom Report's Terriroty parameter int32 nullable
 * @property {boolean} [territoryDefaultFlag]   nullable
 * @property {string} [territoryOverride]
 * @property {boolean} [companyFlag]   nullable
 * @property {number} [companyParamId] Parameter unique identifier for the Custom Report's Company parameter int32 nullable
 * @property {string} [companyOverride]
 * @property {boolean} [memberFlag]   nullable
 * @property {number} [memberParamId] Parameter unique identifier for the Custom Report's Member parameter int32 nullable
 * @property {string} [memberOverride]
 * @property {boolean} [startDateFlag]   nullable
 * @property {number} [startDateParamId] Parameter unique identifier for the Custom Report's Start Date parameter int32 nullable
 * @property {string} [startDateOverride]
 * @property {boolean} [endDateFlag]   nullable
 * @property {number} [endDateParamId] Parameter unique identifier for the Custom Report's End Date parameter int32 nullable
 * @property {string} [endDateOverride]
 * @property {boolean} [oppTypeFlag]   nullable
 * @property {number} [oppTypeParamId] Parameter unique identifier for the Custom Report's Opportunity Type parameter int32 nullable
 * @property {string} [oppTypeOverride]
 * @property {boolean} [opportunityFlag]   nullable
 * @property {number} [opportunityParamId] Parameter unique identifier for the Custom Report's Opportunity parameter int32 nullable
 * @property {string} [opportunityOverride]
 * @property {boolean} [marketingCampaignFlag]   nullable
 * @property {number} [marketingCampaignParamId] Parameter unique identifier for the Custom Report's Marketing Campaign parameter int32 nullable
 * @property {string} [marketingCampaignOverride]
 * @property {boolean} [serviceBoardFlag]   nullable
 * @property {number} [serviceBoardParamId] Parameter unique identifier for the Custom Report's Service Board parameter int32 nullable
 * @property {boolean} [serviceBoardDefaultFlag]   nullable
 * @property {string} [serviceBoardOverride]
 * @property {boolean} [serviceTypeFlag]   nullable
 * @property {number} [serviceTypeParamId] Parameter unique identifier for the Custom Report's Service Type parameter int32 nullable
 * @property {string} [serviceTypeOverride]
 * @property {boolean} [serviceStatusFlag]   nullable
 * @property {number} [serviceStatusParamId] Parameter unique identifier for the Custom Report's Service Status parameter int32 nullable
 * @property {string} [serviceStatusOverride]
 * @property {boolean} [agreementTypeFlag]   nullable
 * @property {number} [agreementTypeParamId] Parameter unique identifier for the Custom Report's Agreement Type parameter int32 nullable
 * @property {string} [agreementTypeOverride]
 * @property {boolean} [agreementFlag]   nullable
 * @property {number} [agreementParamId] Parameter unique identifier for the Custom Report's Agreement parameter int32 nullable
 * @property {string} [agreementOverride]
 * @property {boolean} [projectTypeFlag]   nullable
 * @property {number} [projectTypeParamId] Parameter unique identifier for the Custom Report's Project Type parameter int32 nullable
 * @property {string} [projectTypeOverride]
 * @property {boolean} [projectFlag]   nullable
 * @property {number} [projectParamId] Parameter unique identifier for the Custom Report's Project parameter int32 nullable
 * @property {string} [projectOverride]
 * @property {boolean} [workRoleFlag]   nullable
 * @property {number} [workRoleParamId] Parameter unique identifier for the Custom Report's Work Role parameter int32 nullable
 * @property {string} [workRoleOverride]
 * @property {boolean} [workTypeFlag]   nullable
 * @property {number} [workTypeParamId] Parameter unique identifier for the Custom Report's Work Type parameter int32 nullable
 * @property {string} [workTypeOverride]
 * @property {boolean} [invoiceFlag]   nullable
 * @property {number} [invoiceParamId] Parameter unique identifier for the Custom Report's Invoice Type parameter int32 nullable
 * @property {string} [invoiceOverride]
 * @property {object} [_info]
 */

/**
 * CustomReportParameter
 * @typedef {object} CustomReportParameter
 * @property {number} [id]  int32
 * @property {string} [name] Either a caption name or parameter name is required Max length: 50;
 * @property {string} [captionName] Either a caption name or parameter name is required Max length: 50;
 * @property {CustomReportReference} [customReport]
 * @property {object} [_info]
 */

/**
 * CwTimeZone
 * @typedef {object} CwTimeZone
 * @property {number} [id]  int32  
  * @property {string} [name]    
  * @property {number} [offset] The hours offset (+/-) double  
  * @property {string} [startDate]    
  * @property {string} [endDate]    
  * @property {boolean} [daylightSavingsFlag] Determined based on system library value for specified timeZone.
            Not able to be used in query params at this time  nullable 
  * @property {object} [_info]    
 */

/**
 * Department
 * @typedef {object} Department
 * @property {number} [id]  int32
 * @property {string} identifier  Max length: 15;
 * @property {string} name  Max length: 50;
 * @property {object} [_info]
 */

/**
 * DepartmentLocation
 * @typedef {object} DepartmentLocation
 * @property {number} [id]  int32
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {MemberReference} [departmentManager]
 * @property {MemberReference} [dispatch]
 * @property {MemberReference} [serviceManager]
 * @property {MemberReference} [dutyManager]
 * @property {LdapConfigurationReference} [ldapConfig]
 * @property {boolean} [addAllLocations]   nullable
 * @property {boolean} [removeAllLocations]   nullable
 * @property {object} [_info]
 */

/**
 * DocumentInfo
 * @typedef {object} DocumentInfo
 * @property {number} [id]  int32
 * @property {string} [title]
 * @property {string} [fileName]
 * @property {string} [serverFileName]
 * @property {string} [owner]
 * @property {boolean} [linkFlag]   nullable
 * @property {boolean} [imageFlag]   nullable
 * @property {boolean} [publicFlag]   nullable
 * @property {boolean} [htmlTemplateFlag]   nullable
 * @property {boolean} [readOnlyFlag]   nullable
 * @property {number} [size]  int32 nullable
 * @property {boolean} [urlFlag]   nullable
 * @property {string} [guid]
 * @property {object} [_info]
 */

/**
 * EmailConnector
 * @typedef {object} EmailConnector
 * @property {number} [id]  int32
 * @property {string} [emailServerType]   nullable
 * @property {ImapSetupReference} [imapSetup]
 * @property {Office365EmailSetupReference} [office365EmailSetup]
 * @property {GoogleEmailSetupReference} [googleEmailSetup]
 * @property {BoardReference} [serviceBoard]
 * @property {CompanyReference} [defaultCompany]
 * @property {MemberReference} [defaultMember]
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {string} [emailNotifyFrom]  Max length: 50;
 * @property {string} [bccEmailTo]  Max length: 250;
 * @property {string} emailErrorsTo  Max length: 50;
 * @property {boolean} [setEmailToDefaultContactFlag]   nullable
 * @property {boolean} [noResponseFlag]   nullable
 * @property {boolean} [neverRespondFlag]   nullable
 * @property {boolean} [discardDuplicatesFlag]   nullable
 * @property {boolean} [postRepliesToTicketFlag]   nullable
 * @property {boolean} [createContactFlag]   nullable
 * @property {string} [responseEmailForNew]
 * @property {string} [responseEmailForExisting]
 * @property {ServiceSourceReference} [sourceOverride]
 * @property {PriorityReference} [priorityOverride]
 * @property {ServiceTypeReference} [typeOverride]
 * @property {ServiceSubTypeReference} [subTypeOverride]
 * @property {ServiceItemReference} [itemOverride]
 * @property {ServiceStatusReference} [statusOverride]
 * @property {boolean} [addCcFlag]   nullable
 * @property {object} [_info]
 */

/**
 * EmailConnectorParsingRule
 * @typedef {object} EmailConnectorParsingRule
 * @property {number} [id]  int32
 * @property {EmailConnectorParsingStyleReference} [parsingStyle]
 * @property {number} priority  int32 nullable
 * @property {EmailConnectorParsingVariableReference} [parsingVariable]
 * @property {string} searchTerm  Max length: 250;
 * @property {PriorityReference} [servicePriority]
 * @property {ServiceStatusReference} [serviceStatus]
 * @property {ServiceTypeReference} [serviceType]
 * @property {ServiceSubTypeReference} [serviceSubType]
 * @property {ServiceItemReference} [serviceItem]
 * @property {BoardReference} [serviceBoard]
 * @property {object} [_info]
 */

/**
 * EmailConnectorInfo
 * @typedef {object} EmailConnectorInfo
 * @property {number} [id]  int32
 * @property {ImapSetupReference} [imapSetup]
 * @property {object} [_info]
 */

/**
 * EmailConnectorParsingStyle
 * @typedef {object} EmailConnectorParsingStyle
 * @property {number} [id]  int32
 * @property {EmailConnectorParsingTypeReference} [parsingType]
 * @property {string} parseRule  Max length: 500;
 * @property {number} priority  int32 nullable
 * @property {object} [_info]
 */

/**
 * EmailExclusion
 * @typedef {object} EmailExclusion
 * @property {number} [id]  int32
 * @property {string} description  Max length: 100;
 * @property {object} [_info]
 */

/**
 * EmailToken
 * @typedef {object} EmailToken
 * @property {number} [id]  int32
 * @property {string} [token]
 * @property {string} [description]
 * @property {boolean} [addressFlag]   nullable
 * @property {boolean} [agreementFlag]   nullable
 * @property {boolean} [companyFlag]   nullable
 * @property {boolean} [configFlag]   nullable
 * @property {boolean} [contactFlag]   nullable
 * @property {boolean} [invoiceFlag]   nullable
 * @property {boolean} [purchaseOrderFlag]   nullable
 * @property {boolean} [purchaseOrderStatusFlag]   nullable
 * @property {boolean} [rmaFlag]   nullable
 * @property {boolean} [salesFlag]   nullable
 * @property {boolean} [serviceFlag]   nullable
 * @property {boolean} [tracksFlag]   nullable
 * @property {boolean} [workflowFlag]   nullable
 * @property {boolean} [portalPasswordFlag]   nullable
 */

/**
 * EPayConfiguration
 * @typedef {object} EPayConfiguration
 * @property {number} [id]  int32
 * @property {SystemLocationReference} [location]
 * @property {CurrencyReference} [currency]
 * @property {string} url  Max length: 400;
 * @property {string} storeIdentifier  Max length: 500;
 * @property {string} [encryptionKey]  Max length: 500;
 * @property {string} [initializationVector]  Max length: 500;
 * @property {object} [_info]
 */

/**
 * Experiment
 * @typedef {object} Experiment
 * @property {number} [id]  int32
 * @property {string} [experimentId]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [properties]
 * @property {boolean} [inactiveFlag]
 * @property {boolean} [memberInactiveFlag]
 * @property {object} [_info]
 */

/**
 * FileUploadSetting
 * @typedef {object} FileUploadSetting
 * @property {number} [id]  int32
 * @property {boolean} restrictFileTypesFlag   nullable
 * @property {number} [globalFileSizeLimit]  int32 nullable
 * @property {object} [_info]
 */

/**
 * GoogleEmailSetup
 * @typedef {object} GoogleEmailSetup
 * @property {number} [id]  int32
 * @property {string} name  Max length: 200;
 * @property {string} username  Max length: 100;
 * @property {string} inboxFolder  Max length: 40;
 * @property {string} processedFolder  Max length: 40;
 * @property {string} failedFolder  Max length: 40;
 * @property {string} [clientId]  Max length: 200;
 * @property {string} [privateKey]  Max length: 4000;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {EmailConnectorReference} [emailConnector]
 * @property {object} [_info]
 */

/**
 * Imap
 * @typedef {object} Imap
 * @property {number} [id]  int32
 * @property {string} name  Max length: 200;
 * @property {string} imapName  Max length: 40;
 * @property {string} processedName  Max length: 40;
 * @property {string} failedFolder  Max length: 40;
 * @property {string} server  Max length: 200;
 * @property {string} userName  Max length: 80;
 * @property {string} [password]  Max length: 80;
 * @property {number} port  int32 nullable
 * @property {boolean} [sslFlag]   nullable
 * @property {EmailConnectorReference} [emailConnector]
 * @property {object} [_info]
 */

/**
 * ImapInfo
 * @typedef {object} ImapInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {EmailConnectorReference} [emailConnector]
 * @property {object} [_info]
 */

/**
 * ImportMassMaintenance
 * @typedef {object} ImportMassMaintenance
 * @property {number} [deletedContactCount]  int32
 * @property {number} [deletedCompanyCount]  int32
 * @property {string} [message]
 * @property {boolean} [success]
 */

/**
 * Info
 * @typedef {object} Info
 * @property {string} [version]
 * @property {boolean} [isCloud]
 * @property {string} [serverTimeZone]
 * @property {array} [licenseBits]
 * @property {string} [cloudRegion]
 */

/**
 * DepartmentLocationInfo
 * @typedef {object} DepartmentLocationInfo
 * @property {number} [id]  int32
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {object} [_info]
 */

/**
 * DepartmentInfo
 * @typedef {object} DepartmentInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * LinkInfo
 * @typedef {object} LinkInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} [screenLink]   nullable
 * @property {object} [_info]
 */

/**
 * LinkResolveUrlInfo
 * @typedef {object} LinkResolveUrlInfo
 * @property {number} referenceId  int32 nullable
 * @property {string} [url]
 */

/**
 * LocaleInfo
 * @typedef {object} LocaleInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} [localeCode]
 */

/**
 * LocationInfo
 * @typedef {object} LocationInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [location_flag]
 * @property {CorporateStructureLevelReference} [structureLevel]
 * @property {object} [_info]
 */

/**
 * MemberInfo
 * @typedef {object} MemberInfo
 * @property {number} [id]  int32
 * @property {string} [identifier]
 * @property {string} [firstName]
 * @property {string} [middleInitial]
 * @property {string} [lastName]
 * @property {string} [fullName]
 * @property {string} [defaultEmail]
 * @property {DocumentReference} [photo]
 * @property {string} [licenseClass] F = Full Member, A = API Member, C = StreamlineIT Member, X = Subcontractor Member  nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * PersonasInfo
 * @typedef {object} PersonasInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 */

/**
 * StandardNoteInfo
 * @typedef {object} StandardNoteInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} [contents]
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {BoardReference} [board]
 * @property {object} [_info]
 */

/**
 * InOutBoard
 * @typedef {object} InOutBoard
 * @property {number} [id]  int32
 * @property {MemberReference} [member]
 * @property {InOutTypeReference} [inOutType]
 * @property {string} [additionalInfo]  Max length: 100;
 * @property {string} dateBack  date-time
 * @property {object} [_info]
 */

/**
 * InOutType
 * @typedef {object} InOutType
 * @property {number} [id]  int32
 * @property {string} description  Max length: 30;
 * @property {object} [_info]
 */

/**
 * InOutTypeInfo
 * @typedef {object} InOutTypeInfo
 * @property {number} [id]  int32
 * @property {string} [description]
 * @property {object} [_info]
 */

/**
 * IntegratorLogin
 * @typedef {object} IntegratorLogin
 * @property {number} [id]  int32  
  * @property {string} username  Max length: 50;  
  * @property {string} [password] The password will never be returned in response Max length: 50;   
  * @property {boolean} [canAccessAllRecordsFlag] This flag controls whether the integrator can access only the db records it created, or all system records  nullable 
  * @property {boolean} [canAccessAllApisFlag] Setting this flag to true will create an integrator that can access all of the available apis in the system.
            If this field is set to true, both the member and board fields are required.  nullable 
  * @property {boolean} [inactiveFlag]   nullable 
  * @property {string} [dateInactivated]  date-time  
  * @property {MemberReference} [inactivatedBy]    
  * @property {boolean} [serviceTicketApiFlag]   nullable 
  * @property {BoardReference} [board]    
  * @property {string} [serviceBoardCallbackUrl]  Max length: 1000;   
  * @property {boolean} [serviceBoardLegacyCallbackFlag]   nullable 
  * @property {boolean} [timeEntryApiFlag]   nullable 
  * @property {MemberReference} [member]    
  * @property {string} [timeEntryCallbackUrl]  Max length: 1000;   
  * @property {boolean} [timeEntryLegacyCallbackFlag]   nullable 
  * @property {boolean} [managedServicesApiFlag]   nullable 
  * @property {boolean} [managedServicesAutoChildFlag]   nullable 
  * @property {boolean} [managedServicesChildingFlag] True if integrator is allowed to child configurations  nullable 
  * @property {boolean} [contactApiFlag]   nullable 
  * @property {string} [contactCallbackUrl]  Max length: 1000;   
  * @property {boolean} [contactLegacyCallbackFlag]   nullable 
  * @property {boolean} [companyApiFlag]   nullable 
  * @property {string} [companyCallbackUrl]  Max length: 1000;   
  * @property {boolean} [companyLegacyCallbackFlag]   nullable 
  * @property {boolean} [activityApiFlag]   nullable 
  * @property {string} [activityCallbackUrl]  Max length: 1000;   
  * @property {boolean} [activityLegacyCallbackFlag]   nullable 
  * @property {boolean} [invoiceApiFlag]   nullable 
  * @property {boolean} [productApiFlag]   nullable 
  * @property {string} [productCallbackUrl]  Max length: 1000;   
  * @property {boolean} [productLegacyCallbackFlag]   nullable 
  * @property {boolean} [opportunityApiFlag]   nullable 
  * @property {string} [opportunityCallbackUrl]  Max length: 1000;   
  * @property {boolean} [opportunityLegacyCallbackFlag]   nullable 
  * @property {boolean} [opportunityConversionApiFlag] True if the member has access to the Opportunity Conversion Api  nullable 
  * @property {boolean} [memberApiFlag]   nullable 
  * @property {boolean} [marketingApiFlag]   nullable 
  * @property {boolean} [purchasingApiFlag]   nullable 
  * @property {string} [purchasingCallbackUrl]  Max length: 1000;   
  * @property {boolean} [purchasingLegacyCallbackFlag]   nullable 
  * @property {boolean} [reportingApiFlag]   nullable 
  * @property {boolean} [systemApiFlag]   nullable 
  * @property {boolean} [projectApiFlag]   nullable 
  * @property {string} [projectCallbackUrl]  Max length: 1000;   
  * @property {boolean} [projectLegacyCallbackFlag]   nullable 
  * @property {boolean} [configurationApiFlag]   nullable 
  * @property {boolean} [configurationAutoChildFlag]   nullable 
  * @property {boolean} [configurationChildlingFlag] True if integrator is allowed to child configurations  nullable 
  * @property {string} [configurationCallbackUrl]  Max length: 1000;   
  * @property {boolean} [configurationLegacyCallbackFlag]   nullable 
  * @property {boolean} [scheduleApiFlag]   nullable 
  * @property {string} [scheduleCallbackUrl]  Max length: 1000;   
  * @property {boolean} [scheduleLegacyCallbackFlag]   nullable 
  * @property {boolean} [agreementApiFlag]   nullable 
  * @property {string} [agreementCallbackUrl]  Max length: 1000;   
  * @property {boolean} [agreementCallbackLegacyFlag]   nullable 
  * @property {boolean} [documentApiFlag]   nullable 
  * @property {object} [_info]    
 */

/**
 * IntegratorTag
 * @typedef {object} IntegratorTag
 * @property {number} [id]  int32
 * @property {string} text  Max length: 50;
 * @property {object} [_info]
 */

/**
 * KPICategory
 * @typedef {object} KPICategory
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {number} [sortOrder]  int32 nullable
 */

/**
 * KPI
 * @typedef {object} KPI
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {KPICategoryReference} [category]
 * @property {string} [dateFilter]
 * @property {number} [sortOrder]  int32 nullable
 * @property {boolean} [inactiveFlag]   nullable
 */

/**
 * LdapConfiguration
 * @typedef {object} LdapConfiguration
 * @property {number} [id]  int32
 * @property {string} name  Max length: 100;
 * @property {string} server FQDN of the Server. Max length: 200;
 * @property {string} domain Domain Name of the server. Max length: 50;
 * @property {object} [_info]
 */

/**
 * LdapConfigurationInfo
 * @typedef {object} LdapConfigurationInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * Link
 * @typedef {object} Link
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {number} [tableReferenceId]  int32 nullable
 * @property {string} [url]  Max length: 1000;
 * @property {string} [screenLink]   nullable
 * @property {object} [_info]
 */

/**
 * Location
 * @typedef {object} Location
 * @property {number} [id]  int32
 * @property {number} [ownerLevelId]  int32 nullable
 * @property {CorporateStructureLevelReference} [structureLevel]
 * @property {string} name  Max length: 50;
 * @property {MemberReference} [manager]
 * @property {SystemLocationReference} [reportsTo]
 * @property {string} [salesRep]  Max length: 50;
 * @property {TimeZoneSetupReference} [timeZoneSetup]
 * @property {CalendarReference} [calendar]
 * @property {string} [overrideAddressLine1]  Max length: 50;
 * @property {string} [overrideAddressLine2]  Max length: 50;
 * @property {string} [overrideCity]  Max length: 50;
 * @property {string} [overrideState]  Max length: 50;
 * @property {string} [overrideZip]  Max length: 12;
 * @property {CountryReference} [overrideCountry]
 * @property {string} [overridePhoneNumber]  Max length: 15;
 * @property {string} [overrideFaxNumber]  Max length: 15;
 * @property {string} [owaUrl]  Max length: 100;
 * @property {string} [payrollXref]  Max length: 10;
 * @property {boolean} [locationFlag]   nullable
 * @property {boolean} [clientFlag]   nullable
 * @property {array} [workRoleIds]
 * @property {array} [departmentIds]
 * @property {object} [_info]
 */

/**
 * LocationDepartment
 * @typedef {object} LocationDepartment
 * @property {number} [id]  int32
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {object} [_info]
 */

/**
 * LocationWorkRole
 * @typedef {object} LocationWorkRole
 * @property {number} [id]  int32
 * @property {SystemLocationReference} [location]
 * @property {WorkRoleReference} [workRole]
 * @property {boolean} [workRoleInactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ManagementNetworkSecurity
 * @typedef {object} ManagementNetworkSecurity
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {string} [username]  Max length: 50;
 * @property {string} [password]  Max length: 50;
 * @property {string} site  Max length: 100;
 * @property {object} [_info]
 */

/**
 * MarketplaceImport
 * @typedef {object} MarketplaceImport
 * @property {number} [id]  int32
 * @property {string} [marketplaceImportType]
 * @property {array} [marketplaceObject]
 * @property {array} [requiredFields]
 */

/**
 * Member
 * @typedef {object} Member
 * @property {number} [id]  int32
 * @property {string} identifier  Max length: 15;
 * @property {string} [password] ConditionallyRequired. API Member will get random password generated Max length: 60;
 * @property {string} firstName  Max length: 30;
 * @property {string} [middleInitial]  Max length: 1;
 * @property {string} lastName  Max length: 30;
 * @property {string} [title]  Max length: 50;
 * @property {ReportCardReference} [reportCard]
 * @property {string} licenseClass F = Full Member, A = API Member, C = StreamlineIT Member, X = Subcontractor Member  nullable
 * @property {boolean} [disableOnlineFlag]   nullable
 * @property {boolean} [enableMobileFlag]   nullable
 * @property {MemberTypeReference} [type]
 * @property {string} [employeeIdentifer]  Max length: 10;
 * @property {string} [vendorNumber]
 * @property {string} [notes]
 * @property {TimeZoneSetupReference} [timeZone]
 * @property {CountryReference} [country]
 * @property {array} [serviceBoardTeamIds]
 * @property {boolean} [enableMobileGpsFlag]   nullable
 * @property {string} [inactiveDate]  date-time
 * @property {boolean} [inactiveFlag]   nullable
 * @property {string} [lastLogin]
 * @property {DocumentReference} [photo]
 * @property {boolean} [partnerPortalFlag]   nullable
 * @property {string} [clientId]
 * @property {string} [stsUserAdminUrl]
 * @property {string} [token]
 * @property {boolean} [toastNotificationFlag]   nullable
 * @property {array} [memberPersonas]
 * @property {MemberOffice365} [office365]
 * @property {string} [officeEmail]  Max length: 250;
 * @property {string} [officePhone]  Max length: 15;
 * @property {string} [officeExtension]  Max length: 10;
 * @property {string} [mobileEmail]  Max length: 250;
 * @property {string} [mobilePhone]  Max length: 15;
 * @property {string} [mobileExtension]  Max length: 10;
 * @property {string} [homeEmail]  Max length: 250;
 * @property {string} [homePhone]  Max length: 15;
 * @property {string} [homeExtension]  Max length: 10;
 * @property {string} defaultEmail   nullable
 * @property {string} [primaryEmail]  Max length: 250;
 * @property {string} defaultPhone   nullable
 * @property {SecurityRoleReference} [securityRole]
 * @property {boolean} [adminFlag]   nullable
 * @property {StructureReference} [structureLevel]
 * @property {SystemLocationReference} [securityLocation]
 * @property {SystemLocationReference} [defaultLocation]
 * @property {SystemDepartmentReference} [defaultDepartment]
 * @property {MemberReference} [reportsTo]
 * @property {boolean} [restrictLocationFlag]   nullable
 * @property {boolean} [restrictDepartmentFlag]   nullable
 * @property {WorkRoleReference} [workRole]
 * @property {WorkTypeReference} [workType]
 * @property {MemberReference} [timeApprover]
 * @property {MemberReference} [expenseApprover]
 * @property {number} [billableForecast]  double nullable
 * @property {number} [dailyCapacity]  double nullable
 * @property {number} [hourlyCost]  double nullable
 * @property {number} [hourlyRate]  double nullable
 * @property {boolean} [includeInUtilizationReportingFlag]   nullable
 * @property {boolean} [requireExpenseEntryFlag]   nullable
 * @property {boolean} [requireTimeSheetEntryFlag]   nullable
 * @property {boolean} [requireStartAndEndTimeOnTimeEntryFlag]   nullable
 * @property {boolean} [allowInCellEntryOnTimeSheet]   nullable
 * @property {boolean} [enterTimeAgainstCompanyFlag]   nullable
 * @property {boolean} [allowExpensesEnteredAgainstCompaniesFlag]   nullable
 * @property {boolean} [timeReminderEmailFlag]   nullable
 * @property {number} [daysTolerance]  int32 nullable
 * @property {number} [minimumHours]  double nullable
 * @property {string} [timeSheetStartDate]  date-time
 * @property {string} hireDate  date-time
 * @property {SystemLocationReference} [serviceDefaultLocation]
 * @property {SystemDepartmentReference} [serviceDefaultDepartment]
 * @property {BoardReference} [serviceDefaultBoard]
 * @property {boolean} [restrictServiceDefaultLocationFlag]   nullable
 * @property {boolean} [restrictServiceDefaultDepartmentFlag]   nullable
 * @property {array} [excludedServiceBoardIds]
 * @property {SystemLocationReference} [projectDefaultLocation]
 * @property {SystemDepartmentReference} [projectDefaultDepartment]
 * @property {ProjectBoardReference} [projectDefaultBoard]
 * @property {boolean} [restrictProjectDefaultLocationFlag]   nullable
 * @property {boolean} [restrictProjectDefaultDepartmentFlag]   nullable
 * @property {array} [excludedProjectBoardIds]
 * @property {SystemLocationReference} [scheduleDefaultLocation]
 * @property {SystemDepartmentReference} [scheduleDefaultDepartment]
 * @property {number} [scheduleCapacity]  double nullable
 * @property {ServiceLocationReference} [serviceLocation]
 * @property {boolean} [restrictScheduleFlag]   nullable
 * @property {boolean} [hideMemberInDispatchPortalFlag]   nullable
 * @property {CalendarReference} [calendar]
 * @property {SystemLocationReference} [salesDefaultLocation]
 * @property {boolean} [restrictDefaultSalesTerritoryFlag]   nullable
 * @property {WarehouseReference} [warehouse]
 * @property {WarehouseBinReference} [warehouseBin]
 * @property {boolean} [restrictDefaultWarehouseFlag]   nullable
 * @property {boolean} [restrictDefaultWarehouseBinFlag]   nullable
 * @property {string} [mapiName]
 * @property {boolean} [calendarSyncIntegrationFlag]   nullable
 * @property {boolean} [enableLdapAuthenticationFlag]   nullable
 * @property {LdapConfigurationReference} [ldapConfiguration]
 * @property {string} [ldapUserName]  Max length: 50;
 * @property {string} companyActivityTabFormat   nullable
 * @property {string} invoiceTimeTabFormat   nullable
 * @property {string} invoiceScreenDefaultTabFormat   nullable
 * @property {string} invoicingDisplayOptions   nullable
 * @property {string} agreementInvoicingDisplayOptions   nullable
 * @property {string} [authenticationServiceType]   nullable
 * @property {boolean} [timebasedOneTimePasswordActivated]   nullable
 * @property {MemberSsoSettingsReference} [ssoSettings]
 * @property {boolean} [autoStartStopwatch]   nullable
 * @property {boolean} [autoPopupQuickNotesWithStopwatch]   nullable
 * @property {string} [signature]
 * @property {string} [globalSearchDefaultTicketFilter]   nullable
 * @property {string} [globalSearchDefaultSort]   nullable
 * @property {string} [phoneSource]
 * @property {string} [phoneIntegrationType]   nullable
 * @property {boolean} [useBrowserLanguageFlag]   nullable
 * @property {object} [_info]
 * @property {boolean} [copyPodLayouts]
 * @property {boolean} [copySharedDefaultViews]
 * @property {boolean} [copyColumnLayoutsAndFilters]
 * @property {number} [fromMemberRecId]  int32
 * @property {array} [customFields]
 */

/**
 * MemberDeactivation
 * @typedef {object} MemberDeactivation
 * @property {MemberDeactivationSalesActivity} [activity]    
  * @property {MemberDeactivationServiceTeam} [serviceTeam]    
  * @property {array} [companyTeam] A list of customers for which the member holds a team role   
  * @property {MemberDeactivationWorkflow} [workflowEmail]    
  * @property {array} [serviceStatusWorkflow]    
  * @property {MemberDeactivationServiceTemplate} [ticketTemplate]    
  * @property {MemberDeactivationOpportunity} [opportunity]    
  * @property {MemberDeactivationSalesTeam} [salesTeam]    
  * @property {MemberDeactivationProjectManager} [projectManager]    
  * @property {MemberDeactivationProjectManager} [projectTimeApprover]    
  * @property {MemberDeactivationProjectManager} [projectExpenseApprover]    
  * @property {MemberDeactivationKnowledgebaseArticle} [knowledgeBaseArticle]    
  * @property {MemberDeactivationMyCompanyPresidentRole} [myCompanyPresident]    
  * @property {MemberDeactivationMyCompanyCOORole} [myCompanyCOO]    
  * @property {MemberDeactivationMyCompanyControllerRole} [myCompanyController]    
  * @property {MemberDeactivationMyCompanyDispatchRole} [myCompanyDispatch]    
  * @property {MemberDeactivationMyCompanyServiceManagerRole} [myCompanyServiceManager]    
  * @property {MemberDeactivationMyCompanyDutyManagerRole} [myCompanyDutyManagerRole]    
  * @property {MemberDeactivationDepartmentMananager} [departmentManager]    
  * @property {MemberDeactivationDispatchMember} [dispatchMember]    
  * @property {MemberDeactivationServiceManger} [serviceManager]    
  * @property {MemberDeactivationDutyManager} [dutyManager]    
  * @property {MemberDeactivationSendFromEmailNotify} [sendFromEmailNotify]    
  * @property {boolean} [deleteOpenTimeSheetsFlag] By default, this is set to false
            If there is any open timesheets, system will return error message
            that there is open timesheets still attached to this member
            If user would like to delete member with open timesheets, they can set this boolean to TRUE
            System will delete member and any associated open timesheets  nullable 
 */

/**
 * Token
 * @typedef {object} Token
 * @property {string} [publicKey]
 * @property {string} [privateKey]
 * @property {string} [expiration]
 */

/**
 * MemberAccrual
 * @typedef {object} MemberAccrual
 * @property {number} [id]  int32
 * @property {string} accrualType   nullable
 * @property {number} year  int32 nullable
 * @property {number} hours  double nullable
 * @property {string} reason
 * @property {MemberReference} [member]
 * @property {object} [_info]
 */

/**
 * MemberCertification
 * @typedef {object} MemberCertification
 * @property {number} [id]  int32
 * @property {CertificationReference} certification
 * @property {number} [percentComplete]  int32 nullable
 * @property {string} [dateReceived]  date-time
 * @property {string} [dateExpires]  date-time
 * @property {string} [certificationNumber]  Max length: 50;
 * @property {string} [notes]
 * @property {MemberReference} [member]
 * @property {CompanyReference} [company]
 * @property {object} [_info]
 */

/**
 * MemberDelegation
 * @typedef {object} MemberDelegation
 * @property {number} [id]  int32
 * @property {string} delegationType   nullable
 * @property {MemberReference} [delegatedTo]
 * @property {string} dateStart  date-time
 * @property {string} dateEnd  date-time
 * @property {MemberReference} [member]
 * @property {object} [_info]
 */

/**
 * ManagedDeviceAccount
 * @typedef {object} ManagedDeviceAccount
 * @property {number} [id]  int32
 * @property {string} [username]
 * @property {string} [password]
 * @property {ManagedDevicesIntegrationReference} [managedDevicesIntegration]
 * @property {object} [_info]
 */

/**
 * BulkResult
 * @typedef {object} BulkResult
 * @property {array} [payload]
 * @property {object} [_info]
 */

/**
 * MemberNotificationSetting
 * @typedef {object} MemberNotificationSetting
 * @property {number} [id]  int32
 * @property {string} notificationType   nullable
 * @property {string} notificationTrigger   nullable
 * @property {object} [_info]
 */

/**
 * MemberPersona
 * @typedef {object} MemberPersona
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {MemberReference} [member]
 * @property {object} [_info]
 */

/**
 * MemberSkill
 * @typedef {object} MemberSkill
 * @property {number} [id]  int32
 * @property {SkillReference} skill
 * @property {string} skillLevel   nullable
 * @property {boolean} [certifiedFlag]   nullable
 * @property {number} [yearsExperience]  int32 nullable
 * @property {string} [notes]
 * @property {MemberReference} [member]
 * @property {object} [_info]
 */

/**
 * MemberType
 * @typedef {object} MemberType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * MemberTypeInfo
 * @typedef {object} MemberTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * MenuEntry
 * @typedef {object} MenuEntry
 * @property {number} [id]  int32
 * @property {MenuLocationReference} [menuLocation]
 * @property {string} caption  Max length: 50;
 * @property {string} link  Max length: 2000;
 * @property {boolean} newWindowFlag   nullable
 * @property {array} [locationIds]
 * @property {string} [origin]  Max length: 2000;
 * @property {string} [clientId] Only required if not already set Max length: 36;
 * @property {boolean} [addAllLocations]   nullable
 * @property {boolean} [removeAllLocations]   nullable
 * @property {number} [smallMenuIconId]  int32 nullable
 * @property {number} [largeMenuIconId]  int32 nullable
 * @property {object} [_info]
 */

/**
 * MenuEntryLocation
 * @typedef {object} MenuEntryLocation
 * @property {number} [id]  int32
 * @property {SystemLocationReference} [location]
 * @property {SystemMenuEntryReference} [menuEntry]
 * @property {object} [_info]
 */

/**
 * MyAccount
 * @typedef {object} MyAccount
 * @property {number} [id]  int32
 * @property {string} identifier  Max length: 15;
 * @property {string} [password] ConditionallyRequired. API Member will get random password generated Max length: 60;
 * @property {string} firstName  Max length: 30;
 * @property {string} [middleInitial]  Max length: 1;
 * @property {string} lastName  Max length: 30;
 * @property {string} [title]  Max length: 50;
 * @property {ReportCardReference} [reportCard]
 * @property {string} licenseClass F = Full Member, A = API Member, C = StreamlineIT Member, X = Subcontractor Member  nullable
 * @property {boolean} [disableOnlineFlag]   nullable
 * @property {boolean} [enableMobileFlag]   nullable
 * @property {MemberTypeReference} [type]
 * @property {string} [employeeIdentifer]  Max length: 10;
 * @property {string} [vendorNumber]
 * @property {string} [notes]
 * @property {TimeZoneSetupReference} [timeZone]
 * @property {CountryReference} [country]
 * @property {array} [serviceBoardTeamIds]
 * @property {boolean} [enableMobileGpsFlag]   nullable
 * @property {string} [inactiveDate]  date-time
 * @property {boolean} [inactiveFlag]   nullable
 * @property {string} [lastLogin]
 * @property {DocumentReference} [photo]
 * @property {boolean} [partnerPortalFlag]   nullable
 * @property {string} [clientId]
 * @property {string} [stsUserAdminUrl]
 * @property {string} [token]
 * @property {boolean} [toastNotificationFlag]   nullable
 * @property {array} [memberPersonas]
 * @property {MemberOffice365} [office365]
 * @property {string} [officeEmail]  Max length: 250;
 * @property {string} [officePhone]  Max length: 15;
 * @property {string} [officeExtension]  Max length: 10;
 * @property {string} [mobileEmail]  Max length: 250;
 * @property {string} [mobilePhone]  Max length: 15;
 * @property {string} [mobileExtension]  Max length: 10;
 * @property {string} [homeEmail]  Max length: 250;
 * @property {string} [homePhone]  Max length: 15;
 * @property {string} [homeExtension]  Max length: 10;
 * @property {string} defaultEmail   nullable
 * @property {string} [primaryEmail]  Max length: 250;
 * @property {string} defaultPhone   nullable
 * @property {SystemLocationReference} [defaultLocation]
 * @property {SystemDepartmentReference} [defaultDepartment]
 * @property {MemberReference} [reportsTo]
 * @property {WorkRoleReference} [workRole]
 * @property {WorkTypeReference} [workType]
 * @property {MemberReference} [timeApprover]
 * @property {MemberReference} [expenseApprover]
 * @property {number} [billableForecast]  double nullable
 * @property {number} [dailyCapacity]  double nullable
 * @property {boolean} [includeInUtilizationReportingFlag]   nullable
 * @property {boolean} [requireExpenseEntryFlag]   nullable
 * @property {boolean} [requireTimeSheetEntryFlag]   nullable
 * @property {boolean} [requireStartAndEndTimeOnTimeEntryFlag]   nullable
 * @property {boolean} [allowInCellEntryOnTimeSheet]   nullable
 * @property {boolean} [enterTimeAgainstCompanyFlag]   nullable
 * @property {boolean} [allowExpensesEnteredAgainstCompaniesFlag]   nullable
 * @property {boolean} [timeReminderEmailFlag]   nullable
 * @property {number} [daysTolerance]  int32 nullable
 * @property {number} [minimumHours]  double nullable
 * @property {string} [timeSheetStartDate]  date-time
 * @property {string} hireDate  date-time
 * @property {SystemLocationReference} [serviceDefaultLocation]
 * @property {SystemDepartmentReference} [serviceDefaultDepartment]
 * @property {BoardReference} [serviceDefaultBoard]
 * @property {SystemLocationReference} [projectDefaultLocation]
 * @property {SystemDepartmentReference} [projectDefaultDepartment]
 * @property {ProjectBoardReference} [projectDefaultBoard]
 * @property {SystemLocationReference} [scheduleDefaultLocation]
 * @property {SystemDepartmentReference} [scheduleDefaultDepartment]
 * @property {number} [scheduleCapacity]  double nullable
 * @property {ServiceLocationReference} [serviceLocation]
 * @property {boolean} [hideMemberInDispatchPortalFlag]   nullable
 * @property {CalendarReference} [calendar]
 * @property {SystemLocationReference} [salesDefaultLocation]
 * @property {WarehouseReference} [warehouse]
 * @property {WarehouseBinReference} [warehouseBin]
 * @property {string} [mapiName]
 * @property {boolean} [calendarSyncIntegrationFlag]   nullable
 * @property {string} companyActivityTabFormat   nullable
 * @property {string} invoiceTimeTabFormat   nullable
 * @property {string} invoiceScreenDefaultTabFormat   nullable
 * @property {string} invoicingDisplayOptions   nullable
 * @property {string} agreementInvoicingDisplayOptions   nullable
 * @property {string} [authenticationServiceType]   nullable
 * @property {boolean} [timebasedOneTimePasswordActivated]   nullable
 * @property {boolean} [autoStartStopwatch]   nullable
 * @property {boolean} [autoPopupQuickNotesWithStopwatch]   nullable
 * @property {string} [signature]
 * @property {string} [globalSearchDefaultTicketFilter]   nullable
 * @property {string} [globalSearchDefaultSort]   nullable
 * @property {string} [phoneSource]
 * @property {string} [phoneIntegrationType]   nullable
 * @property {boolean} [useBrowserLanguageFlag]   nullable
 * @property {object} [_info]
 * @property {boolean} [copyPodLayouts]
 * @property {boolean} [copySharedDefaultViews]
 * @property {boolean} [copyColumnLayoutsAndFilters]
 * @property {number} [fromMemberRecId]  int32
 * @property {array} [customFields]
 */

/**
 * CorporateStructure
 * @typedef {object} CorporateStructure
 * @property {number} [id]  int32
 * @property {string} [levelCount]   nullable
 * @property {string} [level1Name]  Max length: 20;
 * @property {string} [level2Name]  Max length: 20;
 * @property {string} [level3Name]  Max length: 20;
 * @property {string} [level4Name]  Max length: 20;
 * @property {string} [level5Name]  Max length: 20;
 * @property {string} fiscalYearStart   nullable
 * @property {string} locationCaption  Max length: 50;
 * @property {string} groupCaption  Max length: 50;
 * @property {CurrencyReference} baseCurrency
 * @property {MemberReference} [president]
 * @property {MemberReference} [chiefOperatingOfficer]
 * @property {MemberReference} [controller]
 * @property {MemberReference} [dispatcher]
 * @property {MemberReference} [serviceManager]
 * @property {MemberReference} [dutyManager]
 * @property {object} [_info]
 */

/**
 * CorporateStructureInfo
 * @typedef {object} CorporateStructureInfo
 * @property {number} [id]  int32
 * @property {string} [locationCaption]
 * @property {string} [groupCaption]
 * @property {CurrencyReference} [baseCurrency]
 * @property {object} [_info]
 */

/**
 * CorporateStructureLevel
 * @typedef {object} CorporateStructureLevel
 * @property {number} [id]  int32
 * @property {string} [name]
 */

/**
 * Crm
 * @typedef {object} Crm
 * @property {number} [id]  int32
 * @property {number} [companyListCount]  int32 nullable
 * @property {boolean} [lockProbabilityFlag]   nullable
 * @property {TeamRoleReference} [accountManagerRole]
 * @property {TeamRoleReference} [technicalContactRole]
 * @property {TeamRoleReference} [salesRepRole]
 * @property {boolean} [companyIdGenerationFlag]   nullable
 * @property {boolean} [excludeSpacesFlag]   nullable
 * @property {string} [field1Caption]  Max length: 25;
 * @property {string} [field2Caption]  Max length: 25;
 * @property {string} [field3Caption]  Max length: 25;
 * @property {string} [field4Caption]  Max length: 25;
 * @property {string} [field5Caption]  Max length: 25;
 * @property {string} [field6Caption]  Max length: 25;
 * @property {string} [field7Caption]  Max length: 25;
 * @property {string} [field8Caption]  Max length: 25;
 * @property {string} [field9Caption]  Max length: 25;
 * @property {string} [field10Caption]  Max length: 25;
 * @property {string} [primaryRepCaption]  Max length: 50;
 * @property {string} [secondaryRepCaption]  Max length: 50;
 * @property {string} [other1Caption]  Max length: 50;
 * @property {string} [other2Caption]  Max length: 50;
 * @property {boolean} [defaultYear]   nullable
 * @property {object} [_info]
 */

/**
 * CrmInfo
 * @typedef {object} CrmInfo
 * @property {number} [id]  int32
 * @property {TeamRoleReference} [accountManagerRole]
 * @property {TeamRoleReference} [technicalContactRole]
 * @property {TeamRoleReference} [salesRepRole]
 * @property {string} [field1Caption]
 * @property {string} [field2Caption]
 * @property {string} [field3Caption]
 * @property {string} [field4Caption]
 * @property {string} [field5Caption]
 * @property {string} [field6Caption]
 * @property {string} [field7Caption]
 * @property {string} [field8Caption]
 * @property {string} [field9Caption]
 * @property {string} [field10Caption]
 * @property {string} [primaryRepCaption]
 * @property {string} [secondaryRepCaption]
 * @property {object} [_info]
 */

/**
 * DocumentSetup
 * @typedef {object} DocumentSetup
 * @property {number} [id]  int32
 * @property {boolean} [uploadAsLinkFlag]   nullable
 * @property {boolean} [isPublicFlag]   nullable
 * @property {string} [docPath]  Max length: 100;
 * @property {string} [templatePath]  Max length: 200;
 * @property {string} [templateOutputPath]  Max length: 200;
 * @property {object} [_info]
 */

/**
 * ServiceInfo
 * @typedef {object} ServiceInfo
 * @property {number} [id]  int32
 * @property {string} [headerColor]
 * @property {string} [memberColor]
 * @property {string} [contactColor]
 * @property {string} [unknownColor]
 * @property {object} [_info]
 */

/**
 * Other
 * @typedef {object} Other
 * @property {number} [id]  int32
 * @property {LdapConfigurationReference} [defaultLdap]
 * @property {string} defaultFromAddress  Max length: 50;
 * @property {string} portalUrlOverride  Max length: 100;
 * @property {string} siteUrl  Max length: 100;
 * @property {string} [logoPath]  Max length: 200;
 * @property {string} [contactSync]   nullable
 * @property {TimeZoneSetupReference} [serverTimeZone]
 * @property {CalendarReference} [defaultCalendar]
 * @property {AddressFormatReference} [defaultAddressFormat]
 * @property {boolean} [useSslFlag]   nullable
 * @property {boolean} [syncLeadsFlag]   nullable
 * @property {boolean} [includePortalLinkFlag]   nullable
 * @property {boolean} [useExpandedFormatTimeFlag]   nullable
 * @property {boolean} [useExpandedFormatActivityFlag]   nullable
 * @property {boolean} [disableZAdminLoginFlag]   nullable
 * @property {LocaleReference} [locale]
 * @property {boolean} [updateMemberTimeZonesFlag] If true, all Members time zone will also be set to serverTimeZone. Otherwise, only My Company time zone will be updated.  nullable
 * @property {object} [_info]
 */

/**
 * ReportingService
 * @typedef {object} ReportingService
 * @property {number} [id]  int32
 * @property {string} [reportingUserName]  Max length: 50;
 * @property {string} [reportingPassword] To blank out the password, enter an empty string here. Max length: 50;
 * @property {string} [reportingDomain]  Max length: 50;
 * @property {string} [reportingUrl]  Max length: 100;
 * @property {object} [_info]
 */

/**
 * Service
 * @typedef {object} Service
 * @property {number} [id]  int32
 * @property {string} srNotify   nullable
 * @property {string} scheduleSpan
 * @property {boolean} [hideDelimiterFlag]   nullable
 * @property {boolean} [allowCCFlag]   nullable
 * @property {boolean} [allowTOFlag]   nullable
 * @property {string} [headerColor]  Max length: 50;
 * @property {string} [memberColor]  Max length: 50;
 * @property {string} [contactColor]  Max length: 50;
 * @property {string} [unknownColor]  Max length: 50;
 * @property {CalendarSetupReference} [calendarSetup]
 * @property {boolean} [headerColorDisableFlag]   nullable
 * @property {boolean} [memberColorDisableFlag]   nullable
 * @property {boolean} [contactColorDisableFlag]   nullable
 * @property {boolean} [unknownColorDisableFlag]   nullable
 * @property {object} [_info]
 */

/**
 * TimeExpense
 * @typedef {object} TimeExpense
 * @property {number} [id]  int32
 * @property {boolean} [tier1ApprovalFlag]   nullable
 * @property {boolean} [tier2ApprovalFlag]   nullable
 * @property {boolean} [disableTimeEntryFlag]   nullable
 * @property {boolean} [requireTimeNoteFlag]   nullable
 * @property {boolean} [requireExpenseNoteFlag]   nullable
 * @property {number} [roundingFactor]  double nullable
 * @property {number} [invoiceStart]  int32 nullable
 * @property {string} [defaultSpecialInvoiceType]   nullable
 * @property {CompanyReference} [internalCompany]
 * @property {object} [_info]
 */

/**
 * MyMember
 * @typedef {object} MyMember
 * @property {number} [id]  int32
 * @property {string} [identifier]
 * @property {string} [password] ConditionallyRequired. API Member will get random password generated
 * @property {string} [firstName]
 * @property {string} [middleInitial]
 * @property {string} [lastName]
 * @property {string} [title]
 * @property {ReportCardReference} [reportCard]
 * @property {string} [licenseClass] F = Full Member, A = API Member, C = StreamlineIT Member, X = Subcontractor Member  nullable
 * @property {boolean} [disableOnlineFlag]   nullable
 * @property {boolean} [enableMobileFlag]   nullable
 * @property {MemberTypeReference} [type]
 * @property {string} [employeeIdentifer]
 * @property {string} [vendorNumber]
 * @property {string} [notes]
 * @property {TimeZoneSetupReference} [timeZone]
 * @property {CountryReference} [country]
 * @property {array} [serviceBoardTeamIds]
 * @property {boolean} [enableMobileGpsFlag]   nullable
 * @property {string} [inactiveDate]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {string} [lastLogin]
 * @property {DocumentReference} [photo]
 * @property {boolean} [toastNotificationFlag]   nullable
 * @property {string} [officeEmail]
 * @property {string} [officePhone]
 * @property {string} [officeExtension]
 * @property {string} [mobileEmail]
 * @property {string} [mobilePhone]
 * @property {string} [mobileExtension]
 * @property {string} [homeEmail]
 * @property {string} [homePhone]
 * @property {string} [homeExtension]
 * @property {string} [defaultEmail]   nullable
 * @property {string} [defaultPhone]   nullable
 * @property {SecurityRoleReference} [securityRole]
 * @property {boolean} [adminFlag]   nullable
 * @property {StructureReference} [structureLevel]
 * @property {SystemLocationReference} [securityLocation]
 * @property {SystemLocationReference} [defaultLocation]
 * @property {SystemDepartmentReference} [defaultDepartment]
 * @property {MemberReference} [reportsTo]
 * @property {boolean} [restrictLocationFlag]   nullable
 * @property {boolean} [restrictDepartmentFlag]   nullable
 * @property {WorkRoleReference} [workRole]
 * @property {WorkTypeReference} [workType]
 * @property {MemberReference} [timeApprover]
 * @property {MemberReference} [expenseApprover]
 * @property {number} [billableForecast]  double nullable
 * @property {number} [dailyCapacity]  double nullable
 * @property {number} [hourlyCost]  double nullable
 * @property {number} [hourlyRate]  double nullable
 * @property {boolean} [includeInUtilizationReportingFlag]   nullable
 * @property {boolean} [requireExpenseEntryFlag]   nullable
 * @property {boolean} [requireTimeSheetEntryFlag]   nullable
 * @property {boolean} [requireStartAndEndTimeOnTimeEntryFlag]   nullable
 * @property {boolean} [allowInCellEntryOnTimeSheet]   nullable
 * @property {boolean} [enterTimeAgainstCompanyFlag]   nullable
 * @property {boolean} [allowExpensesEnteredAgainstCompaniesFlag]   nullable
 * @property {boolean} [timeReminderEmailFlag]   nullable
 * @property {number} [daysTolerance]  int32 nullable
 * @property {number} [minimumHours]  double nullable
 * @property {string} [timeSheetStartDate]
 * @property {string} [hireDate]
 * @property {SystemLocationReference} [serviceDefaultLocation]
 * @property {SystemDepartmentReference} [serviceDefaultDepartment]
 * @property {BoardReference} [serviceDefaultBoard]
 * @property {boolean} [restrictServiceDefaultLocationFlag]   nullable
 * @property {boolean} [restrictServiceDefaultDepartmentFlag]   nullable
 * @property {array} [excludedServiceBoardIds]
 * @property {SystemLocationReference} [projectDefaultLocation]
 * @property {SystemDepartmentReference} [projectDefaultDepartment]
 * @property {ProjectBoardReference} [projectDefaultBoard]
 * @property {boolean} [restrictProjectDefaultLocationFlag]   nullable
 * @property {boolean} [restrictProjectDefaultDepartmentFlag]   nullable
 * @property {array} [excludedProjectBoardIds]
 * @property {SystemLocationReference} [scheduleDefaultLocation]
 * @property {SystemDepartmentReference} [scheduleDefaultDepartment]
 * @property {number} [scheduleCapacity]  double nullable
 * @property {ServiceLocationReference} [serviceLocation]
 * @property {boolean} [restrictScheduleFlag]   nullable
 * @property {boolean} [hideMemberInDispatchPortalFlag]   nullable
 * @property {CalendarReference} [calendar]
 * @property {SystemLocationReference} [salesDefaultLocation]
 * @property {boolean} [restrictDefaultSalesTerritoryFlag]   nullable
 * @property {WarehouseReference} [warehouse]
 * @property {WarehouseBinReference} [warehouseBin]
 * @property {boolean} [restrictDefaultWarehouseFlag]   nullable
 * @property {boolean} [restrictDefaultWarehouseBinFlag]   nullable
 * @property {string} [mapiName]
 * @property {boolean} [calendarSyncIntegrationFlag]   nullable
 * @property {boolean} [enableLdapAuthenticationFlag]   nullable
 * @property {LdapConfigurationReference} [ldapConfiguration]
 * @property {string} [ldapUserName]
 * @property {string} [companyActivityTabFormat]   nullable
 * @property {string} [invoiceTimeTabFormat]   nullable
 * @property {string} [invoiceScreenDefaultTabFormat]   nullable
 * @property {string} [invoicingDisplayOptions]   nullable
 * @property {string} [agreementInvoicingDisplayOptions]   nullable
 * @property {string} [corelyticsUsername]
 * @property {string} [corelyticsPassword]
 * @property {string} [authenticationServiceType]   nullable
 * @property {boolean} [timebasedOneTimePasswordActivated]   nullable
 * @property {boolean} [ssoSessionFlag]   nullable
 * @property {string} [ssoClientId]
 * @property {object} [_info]
 */

/**
 * MyMemberInfo
 * @typedef {object} MyMemberInfo
 * @property {number} [id]  int32
 * @property {string} [identifier]
 * @property {string} [firstName]
 * @property {string} [middleInitial]
 * @property {string} [lastName]
 * @property {string} [fullName]
 * @property {string} [defaultEmail]
 * @property {DocumentReference} [photo]
 * @property {string} [licenseClass] F = Full Member, A = API Member, C = StreamlineIT Member, X = Subcontractor Member  nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {TimeZoneSetupReference} [timeZone]
 * @property {boolean} [useBrowserLanguageFlag]   nullable
 * @property {SystemLocationReference} [defaultLocation]
 * @property {SystemDepartmentReference} [defaultDepartment]
 * @property {WorkRoleReference} [workRole]
 * @property {WorkTypeReference} [workType]
 * @property {number} [dailyCapacity]  double nullable
 * @property {boolean} [requireExpenseEntryFlag]   nullable
 * @property {boolean} [requireTimeSheetEntryFlag]   nullable
 * @property {boolean} [requireStartAndEndTimeOnTimeEntryFlag]   nullable
 * @property {boolean} [enterTimeAgainstCompanyFlag]   nullable
 * @property {boolean} [allowExpensesEnteredAgainstCompaniesFlag]   nullable
 * @property {BoardReference} [serviceDefaultBoard]
 * @property {SystemLocationReference} [serviceDefaultLocation]
 * @property {SystemDepartmentReference} [serviceDefaultDepartment]
 * @property {boolean} [restrictServiceDefaultLocationFlag]   nullable
 * @property {boolean} [restrictServiceDefaultDepartmentFlag]   nullable
 * @property {array} [excludedServiceBoardIds]
 * @property {SystemLocationReference} [projectDefaultLocation]
 * @property {SystemDepartmentReference} [projectDefaultDepartment]
 * @property {ProjectBoardReference} [projectDefaultBoard]
 * @property {boolean} [restrictProjectDefaultLocationFlag]   nullable
 * @property {boolean} [restrictProjectDefaultDepartmentFlag]   nullable
 * @property {array} [excludedProjectBoardIds]
 * @property {SystemLocationReference} [scheduleDefaultLocation]
 * @property {SystemDepartmentReference} [scheduleDefaultDepartment]
 * @property {number} [scheduleCapacity]  double nullable
 * @property {ServiceLocationReference} [serviceLocation]
 * @property {SystemLocationReference} [salesDefaultLocation]
 * @property {WarehouseReference} [warehouse]
 * @property {WarehouseBinReference} [warehouseBin]
 * @property {boolean} [restrictDefaultWarehouseFlag]   nullable
 * @property {boolean} [restrictDefaultWarehouseBinFlag]   nullable
 * @property {boolean} [ssoSessionFlag]   nullable
 * @property {string} [ssoClientId]
 * @property {object} [_info]
 */

/**
 * MySecurity
 * @typedef {object} MySecurity
 * @property {number} [id]  int32
 * @property {string} [addLevel]   nullable
 * @property {string} [editLevel]   nullable
 * @property {string} [deleteLevel]   nullable
 * @property {string} [inquireLevel]   nullable
 * @property {string} [moduleFunctionName]
 * @property {string} [moduleFunctionDescription]
 * @property {boolean} [myAllFlag]   nullable
 * @property {string} [moduleFunctionIdentifier]
 * @property {boolean} [reportFlag]   nullable
 * @property {boolean} [restrictFlag]   nullable
 * @property {boolean} [customFlag]   nullable
 * @property {string} [moduleDescription]
 * @property {string} [moduleIdentifier]
 * @property {string} [moduleName]
 * @property {number} [sortOrder]  int32 nullable
 * @property {MemberReference} [member]
 * @property {object} [_info]
 */

/**
 * MySecurityCustomizeItem
 * @typedef {object} MySecurityCustomizeItem
 * @property {number} [id]  int32
 * @property {string} [customizeIdentifier]   nullable
 * @property {string} [itemIdentifier]
 */

/**
 * NotificationRecipient
 * @typedef {object} NotificationRecipient
 * @property {number} [id]  int32
 * @property {string} [identifier]
 * @property {string} [name]
 * @property {boolean} [externalFlag]   nullable
 * @property {boolean} [serviceFlag]   nullable
 * @property {boolean} [salesFlag]   nullable
 * @property {boolean} [invoiceFlag]   nullable
 * @property {boolean} [agreementFlag]   nullable
 * @property {boolean} [memberFlag]   nullable
 * @property {boolean} [configFlag]   nullable
 * @property {boolean} [mspFlag]   nullable
 * @property {boolean} [trackFlag]   nullable
 * @property {boolean} [projectFlag]   nullable
 * @property {boolean} [procurementFlag]   nullable
 * @property {boolean} [knowledgeBaseFlag]   nullable
 * @property {object} [_info]
 */

/**
 * Office365EmailSetup
 * @typedef {object} Office365EmailSetup
 * @property {number} [id]  int32
 * @property {string} name  Max length: 200;
 * @property {string} username  Max length: 100;
 * @property {string} inboxFolder  Max length: 40;
 * @property {string} processedFolder  Max length: 40;
 * @property {string} failedFolder  Max length: 40;
 * @property {string} [tenantId]  Max length: 36;
 * @property {string} [clientId]  Max length: 36;
 * @property {string} [clientSecret]  Max length: 4000;
 * @property {boolean} [authorizedFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {EmailConnectorReference} [emailConnector]
 * @property {object} [_info]
 */

/**
 * OsGradeWeight
 * @typedef {object} OsGradeWeight
 * @property {number} [id]  int32
 * @property {number} [osGradeWeight]  double
 * @property {string} [osName]
 * @property {object} [_info]
 */

/**
 * ParsingType
 * @typedef {object} ParsingType
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} [parseRule]
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ParsingVariable
 * @typedef {object} ParsingVariable
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} [code]
 * @property {object} [_info]
 */

/**
 * PortalReport
 * @typedef {object} PortalReport
 * @property {number} [id]  int32
 * @property {PortalConfigurationReference} [portalConfiguration]
 * @property {string} name  Max length: 255;
 * @property {string} url  Max length: 255;
 * @property {boolean} [openSameWindowFlag]   nullable
 * @property {boolean} [customFlag]   nullable
 * @property {boolean} [displayFlag]   nullable
 * @property {object} [_info]
 */

/**
 * QuoteLink
 * @typedef {object} QuoteLink
 * @property {number} [id]  int32
 * @property {SystemLocationReference} [location]
 * @property {string} link  Max length: 2000;
 * @property {boolean} [allLocationsFlag]   nullable
 * @property {boolean} [newWindowFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ReportCard
 * @typedef {object} ReportCard
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {object} [_info]
 */

/**
 * ReportCardInfo
 * @typedef {object} ReportCardInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * ReportCardDetail
 * @typedef {object} ReportCardDetail
 * @property {number} [id]  int32
 * @property {KPIReference} [kpi]
 * @property {number} [sortOrder]  int32 nullable
 * @property {ReportCardReference} [reportCard]
 * @property {object} [_info]
 */

/**
 * Report
 * @typedef {object} Report
 * @property {string} [name]
 */

/**
 * ReportDataResponse
 * @typedef {object} ReportDataResponse
 * @property {array} [column_definitions]
 * @property {array} [row_values]
 */

/**
 * ReportColumnDefinition
 * @typedef {object} ReportColumnDefinition
 * @property {string} [type]
 * @property {boolean} [isNullable]
 * @property {boolean} [identityColumn]
 */

/**
 * SecurityRole
 * @typedef {object} SecurityRole
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {boolean} [adminFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * SecurityRoleInfo
 * @typedef {object} SecurityRoleInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * SecurityRoleSetting
 * @typedef {object} SecurityRoleSetting
 * @property {number} [id]  int32
 * @property {string} [addLevel]   nullable
 * @property {string} [editLevel]   nullable
 * @property {string} [deleteLevel]   nullable
 * @property {string} [inquireLevel]   nullable
 * @property {string} [moduleFunctionName]
 * @property {string} [moduleFunctionDescription]
 * @property {boolean} [myAllFlag]   nullable
 * @property {string} [moduleFunctionIdentifier]
 * @property {boolean} [reportFlag]   nullable
 * @property {boolean} [restrictFlag]   nullable
 * @property {boolean} [customFlag]   nullable
 * @property {string} [moduleDescription]
 * @property {string} [moduleIdentifier]
 * @property {string} [moduleName]
 * @property {number} [sortOrder]  int32 nullable
 * @property {object} [_info]
 */

/**
 * SystemSetting
 * @typedef {object} SystemSetting
 * @property {number} [id]  int32
 * @property {string} [description]
 * @property {string} value
 * @property {string} [valueType]
 * @property {object} [_info]
 */

/**
 * SetupScreen
 * @typedef {object} SetupScreen
 * @property {number} [id]  int32
 * @property {string} [category]
 * @property {string} [name]
 * @property {string} [description]
 * @property {string} [moduleDescription]
 * @property {string} [moduleIdentifier]
 * @property {string} [moduleName]
 * @property {object} [_info]
 */

/**
 * SkillCategory
 * @typedef {object} SkillCategory
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {object} [_info]
 */

/**
 * Skill
 * @typedef {object} Skill
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {SkillCategoryReference} [category]
 * @property {object} [_info]
 */

/**
 * SkillInfo
 * @typedef {object} SkillInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * SsoConfiguration
 * @typedef {object} SsoConfiguration
 * @property {number} [id] Unique identifier of the SSO Configuration int32
 * @property {string} name Descriptor of the SSO Configuration Max length: 100;
 * @property {string} ssoType Type of SSO Configuration  nullable
 * @property {boolean} [inactiveFlag] Whether the SSO configuration is not active  nullable
 * @property {string} [samlEntityId] SAML Identity Provider Id Max length: 1000;
 * @property {string} [samlSignInUrl] Sign in url for the SAML Identity Provider Max length: 1000;
 * @property {string} [samlIdpCertificate] Public certificate for Identity Provider signatures
 * @property {string} [samlCertificateName] Name of the SAML certificate. Metadata on SAML_Idp_Certificate
 * @property {string} [samlCertificateIssuedTo] Who the SAML certificate was issued to. Metadata on SAML_Idp_Certificate
 * @property {string} [samlCertificateThumbprint] Thumbprint of the SAML certificate. Metadata on SAML_Idp_Certificate
 * @property {string} [samlCertificateValidFrom] Date when the SAML certificate becomes valid. Metadata on SAML_Idp_Certificate date-time
 * @property {string} [samlCertificateValidTo] Date when the SAML certificate is no longer valid. Metadata on SAML_Idp_Certificate date-time
 * @property {array} locationIds The locations where the SAML Idp Configuration is used
 * @property {string} [clientId] Client identity for this configuration of ConnectWise SSO Max length: 1000;
 * @property {string} [stsBaseUrl] Sign in URL for ConnectWise SSO
 * @property {string} [stsUserAdminUrl] User Admin Url for ConnectWise SSO
 * @property {string} [token]
 * @property {number} [submittedMemberCount]  int32
 * @property {boolean} [allMembersSubmitted]
 * @property {object} [_info]
 * @property {boolean} [isSsoOnByDefault]
 */

/**
 * SsoUser
 * @typedef {object} SsoUser
 * @property {number} [id]  int32
 * @property {string} [ssoUserId]
 * @property {string} [userName]
 * @property {string} [firstName]
 * @property {string} [lastName]
 * @property {string} [email]
 * @property {boolean} [emailConfirmed]   nullable
 * @property {boolean} [disabledFlag]   nullable
 * @property {boolean} [linkedFlag]   nullable
 * @property {string} [dateEntered]
 * @property {string} [lastUpdated]
 * @property {MemberReference} [linkedMember]
 */

/**
 * StandardNote
 * @typedef {object} StandardNote
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {string} contents
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {BoardReference} [board]
 * @property {object} [_info]
 */

/**
 * Survey
 * @typedef {object} Survey
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {string} [instructions]  Max length: 1000;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * SurveyQuestionValue
 * @typedef {object} SurveyQuestionValue
 * @property {number} [id]  int32
 * @property {SurveyReference} [survey]
 * @property {SurveyQuestionReference} [question]
 * @property {string} value  Max length: 1000;
 * @property {boolean} [defaultFlag]   nullable
 * @property {number} [pointValue]  int32 nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * SurveyInfo
 * @typedef {object} SurveyInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * SurveyQuestion
 * @typedef {object} SurveyQuestion
 * @property {number} [id]  int32
 * @property {SurveyReference} [survey]
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
 * TimeZoneSetup
 * @typedef {object} TimeZoneSetup
 * @property {number} [id]  int32  
  * @property {string} name  Max length: 50;  
  * @property {TimeZoneReference} [timeZone]    
  * @property {number} [offset] The hours offset from UTC (+/-) double nullable 
  * @property {boolean} [defaultFlag] Identifies the default system time zone setup  nullable 
  * @property {boolean} [daylightSavingsFlag] Determined based on system library value for specified timeZone.
            Not able to be used in query params at this time  nullable 
  * @property {object} [_info]    
 */

/**
 * TimeZoneSetupInfo
 * @typedef {object} TimeZoneSetupInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {number} [offset]  double nullable
 * @property {object} [_info]
 */

/**
 * TodayPageCategory
 * @typedef {object} TodayPageCategory
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {number} sortOrder  int32 nullable
 * @property {SystemLocationReference} [location]
 * @property {object} [_info]
 */

/**
 * UserDefinedField
 * @typedef {object} UserDefinedField
 * @property {number} [id] ID of the custom user defined field int32
 * @property {number} podId Id of the Pod where the custom field will be placed int32 nullable
 * @property {string} caption Field caption Max length: 25;
 * @property {number} sequenceNumber Must be between 1 and 500.  This defines the order in which the custom fields will appear int32 nullable
 * @property {string} [helpText] Help text to accompany the custom field Max length: 1000;
 * @property {string} fieldTypeIdentifier   nullable
 * @property {number} [numberDecimals] Only valid for Number or percent int32 nullable
 * @property {string} [entryTypeIdentifier]   nullable
 * @property {boolean} [requiredFlag]   nullable
 * @property {boolean} [displayOnScreenFlag]   nullable
 * @property {boolean} [readOnlyFlag]   nullable
 * @property {boolean} [listViewFlag] Denotes that this custom field is included on a list view  nullable
 * @property {string} [buttonUrl] Only available with Button Field Type. Required when entryTypeIdentifier is button Max length: 1000;
 * @property {array} [options]
 * @property {array} [businessUnitIds]
 * @property {array} [locationIds]
 * @property {boolean} [addAllBusinessUnits]   nullable
 * @property {boolean} [removeAllBusinessUnits]   nullable
 * @property {boolean} [addAllLocations]   nullable
 * @property {boolean} [removeAllLocations]   nullable
 * @property {string} [dateCreated] Date in UTC the custom field was created date-time
 * @property {object} [_info]
 */

/**
 * UserDefinedFieldInfo
 * @typedef {object} UserDefinedFieldInfo
 * @property {number} [id] ID of the custom user defined field int32
 * @property {number} [podId] Id of the Pod where the custom field will be placed int32 nullable
 * @property {string} [caption] Field caption
 * @property {number} [sequenceNumber] Must be between 1 and 500.  This defines the order in which the custom fields will appear int32 nullable
 * @property {string} [helpText] Help text to accompany the custom field
 * @property {string} [fieldTypeIdentifier]   nullable
 * @property {number} [numberDecimals] Only valid for Number or percent int32 nullable
 * @property {string} [entryTypeIdentifier]   nullable
 * @property {boolean} [requiredFlag]   nullable
 * @property {boolean} [displayOnScreenFlag]   nullable
 * @property {boolean} [readOnlyFlag]   nullable
 * @property {boolean} [listViewFlag] Denotes that this custom field is included on a list view  nullable
 * @property {string} [buttonUrl] Only available with Button Field Type. Required when entryTypeIdentifier is button
 * @property {array} [options]
 * @property {array} [businessUnitIds] List of business unit ids using custom field
 * @property {array} [locationIds] List of locations ids using custom field
 * @property {string} [dateCreated] Date in UTC the custom field was created
 * @property {object} [_info]
 */

/**
 * WorkflowActionAutomateParameter
 * @typedef {object} WorkflowActionAutomateParameter
 * @property {number} [id]  int32
 * @property {string} name
 * @property {string} [value]
 */

/**
 * Workflow
 * @typedef {object} Workflow
 * @property {number} [id]  int32
 * @property {string} name  Max length: 100;
 * @property {WorkflowTableTypeReference} [tableType]
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {boolean} [activateFlag] Batches can not be turned on until after the workflow is created and it has atleast one event associated with it  nullable
 * @property {number} [batchInterval]  int32 nullable
 * @property {string} [batchFrequencyUnit] If not specified, defaults to Minutes. Months is not supported as month length varies  nullable
 * @property {string} [batchLastRan]  date-time
 * @property {string} [batchSchedule] If activateFlag is true, batchSchedule is required  nullable
 * @property {BoardReference} [board]
 * @property {object} [_info]
 */

/**
 * WorkflowAction
 * @typedef {object} WorkflowAction
 * @property {number} [id]  int32
 * @property {NotifyTypeReference} notifyType
 * @property {NotificationRecipientReference} [notifyWho]
 * @property {MemberReference} [specificMemberTo]
 * @property {string} [emailRecipient] Required when notifyWho is set to: "Email Address" Max length: 250;
 * @property {NotificationRecipientReference} [notifyFrom]
 * @property {MemberReference} [specificMemberFrom]
 * @property {string} [emailFrom] Required when notifyFrom is set to: "Email Address" Max length: 250;
 * @property {ContactReference} [ccContact]
 * @property {ContactReference} [bccContact]
 * @property {string} [subject] Required when notifyType is set to: "Create Activity", "Send Email", "Assign Resource" Max length: 100;
 * @property {string} [notes]
 * @property {ActivityStatusReference} [activityStatus]
 * @property {ActivityTypeReference} [activityType]
 * @property {TrackReference} [attachedTrack]
 * @property {number} [daysToExecute]  int32 nullable
 * @property {BoardReference} [board]
 * @property {ServiceStatusReference} [boardStatus]
 * @property {ServiceTypeReference} [serviceType]
 * @property {ServiceSubTypeReference} [serviceSubType]
 * @property {ServiceItemReference} [serviceItem]
 * @property {GroupReference} [group]
 * @property {ServiceTemplateReference} [serviceTemplate]
 * @property {number} [invoiceMinDays]  int32 nullable
 * @property {AutomateScriptReference} [automateScript]
 * @property {ServiceStatusReference} [scriptSuccessStatus]
 * @property {ServiceStatusReference} [scriptFailStatus]
 * @property {boolean} [detailNotesFlag]   nullable
 * @property {boolean} [internalNotesFlag]   nullable
 * @property {boolean} [auditNotesFlag]   nullable
 * @property {PriorityReference} [servicePriority]
 * @property {boolean} [updateOwnerFlag]   nullable
 * @property {OrderStatusReference} [salesOrderStatus]
 * @property {ProjectStatusReference} [projectStatus]
 * @property {CompanyStatusReference} [companyStatus]
 * @property {array} [attachments]
 * @property {ServiceSurveyReference} [serviceSurvey]
 * @property {GenericBoardTeamReference} [specificTeamTo]
 * @property {string} [attachConfigurationsFor] Required when notifyType is set to: "Attach Configuration"  nullable
 * @property {ConfigurationTypeReference} [configurationType]
 * @property {ConfigurationStatusReference} [configurationStatus]
 * @property {object} [_info]
 */

/**
 * WorkflowTriggerOption
 * @typedef {object} WorkflowTriggerOption
 * @property {string} [value]
 * @property {string} [name]
 * @property {UserDefinedFieldReference} [customField]
 * @property {object} [_info]
 */

/**
 * WorkflowAttachment
 * @typedef {object} WorkflowAttachment
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * WorkflowEvent
 * @typedef {object} WorkflowEvent
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} eventCondition
 * @property {string} [frequencyUnit] Required when exectionTimes is set to MultipleTimes or Continuously  nullable
 * @property {number} [frequencyOfExecution] Required when exectionTimes is set to MultipleTimes or Continuously int32 nullable
 * @property {number} [maxNumberOfExecution] Required when exectionTimes is set to MultipleTimes int32 nullable
 * @property {string} [executionTime] Defaults to Once when not specified  nullable
 * @property {object} [_info]
 */

/**
 * WorkflowNotifyType
 * @typedef {object} WorkflowNotifyType
 * @property {number} [id]  int32
 * @property {string} [identifier]
 * @property {string} [name]
 * @property {boolean} [isSetupFlag] If the current action is available because it is already set up. Pertains to integrations such as Automate  nullable
 * @property {boolean} [externalFlag] If the current action effects external objects e.g. integrations or sending an email  nullable
 * @property {object} [_info]
 */

/**
 * WorkflowNotifyTypeInfo
 * @typedef {object} WorkflowNotifyTypeInfo
 * @property {number} [id]  int32
 * @property {string} [identifier]
 * @property {string} [name]
 * @property {boolean} [isSetupFlag]   nullable
 * @property {object} [_info]
 */

/**
 * WorkflowTrigger
 * @typedef {object} WorkflowTrigger
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} [description]
 * @property {boolean} [hasOptionsFlag]   nullable
 * @property {boolean} [hasOperatorFlag]   nullable
 * @property {UserDefinedFieldReference} [customField]
 * @property {string} [expectedType]
 * @property {object} [_info]
 */

/**
 * WorkflowTableType
 * @typedef {object} WorkflowTableType
 * @property {number} [id]  int32
 * @property {string} [identifier]
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * WorkflowTableTypeInfo
 * @typedef {object} WorkflowTableTypeInfo
 * @property {number} [id]  int32
 * @property {string} [identifier]
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * WorkflowActionUserDefinedField
 * @typedef {object} WorkflowActionUserDefinedField
 * @property {number} [id]  int32
 * @property {number} [eventId]  int32
 * @property {number} [actionId]  int32
 * @property {string} [caption]
 * @property {number} [userDefinedFieldId]  int32
 * @property {string} [value]
 * @property {boolean} [overwriteFlag]   nullable
 * @property {string} [podDescription]
 * @property {string} [fieldTypeId]
 * @property {string} [entryTypeId]
 * @property {boolean} [requiredFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

export default class System extends Manage {
  constructor(props) {
    super(props)
  }

  /**
   * Get List of AllowedFileType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AllowedFileType[]>}
   */
  getSystemAllowedfiletypes(params = {}) {
    return this.request({
      path: `/system/allowedfiletypes/`,
      method: 'get',
      params,
    })
  }
  /**
   * Post AllowedFileType
   * @param {AllowedFileType} allowedFileType allowedFileType
   * @returns {Promise<AllowedFileType>}
   */
  postSystemAllowedFileTypes(allowedFileType) {
    return this.request({
      path: `/system/AllowedFileTypes/`,
      method: 'post',
      data: allowedFileType,
    })
  }
  /**
   * Get AllowedFileType
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
   * @returns {Promise<AllowedFileType>}
   */
  getSystemAllowedfiletypesById(id, params = {}) {
    return this.request({
      path: `/system/allowedfiletypes/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AllowedFileType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemAllowedfiletypesById(id) {
    return this.request({
      path: `/system/allowedfiletypes/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put AllowedFileType
   * @param {number} id
   * @param {AllowedFileType} AllowedFileType AllowedFileType
   * @returns {Promise<AllowedFileType>}
   */
  putSystemAllowedfiletypesById(id, AllowedFileType) {
    return this.request({
      path: `/system/allowedfiletypes/${id}`,
      method: 'put',
      data: AllowedFileType,
    })
  }

  /**
   * Patch AllowedFileType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AllowedFileType>}
   */
  patchSystemAllowedfiletypesById(id, patchOperations) {
    return this.request({
      path: `/system/allowedfiletypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of AllowedFileType
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
  getSystemAllowedfiletypesCount(params = {}) {
    return this.request({
      path: `/system/allowedfiletypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AllowedOrigin
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AllowedOrigin[]>}
   */
  getSystemAllowedorigins(params = {}) {
    return this.request({
      path: `/system/allowedorigins`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AllowedOrigin
   * @param {AllowedOrigin} origin origin
   * @returns {Promise<AllowedOrigin>}
   */
  postSystemAllowedorigins(origin) {
    return this.request({
      path: `/system/allowedorigins`,
      method: 'post',
      data: origin,
    })
  }
  /**
   * Get AllowedOrigin
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
   * @returns {Promise<AllowedOrigin>}
   */
  getSystemAllowedoriginsById(id, params = {}) {
    return this.request({
      path: `/system/allowedorigins/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AllowedOrigin
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemAllowedoriginsById(id) {
    return this.request({
      path: `/system/allowedorigins/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put AllowedOrigin
   * @param {number} id
   * @param {AllowedOrigin} origin origin
   * @returns {Promise<AllowedOrigin>}
   */
  putSystemAllowedoriginsById(id, origin) {
    return this.request({
      path: `/system/allowedorigins/${id}`,
      method: 'put',
      data: origin,
    })
  }

  /**
   * Patch AllowedOrigin
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AllowedOrigin>}
   */
  patchSystemAllowedoriginsById(id, patchOperations) {
    return this.request({
      path: `/system/allowedorigins/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of AllowedOrigin
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
  getSystemAllowedoriginsCount(params = {}) {
    return this.request({
      path: `/system/allowedorigins/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ApiMember
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ApiMember[]>}
   */
  getSystemApiMembers(params = {}) {
    return this.request({
      path: `/system/apiMembers`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ApiMember
   * @param {ApiMember} apiMember apiMember
   * @returns {Promise<ApiMember>}
   */
  postSystemApiMembers(apiMember) {
    return this.request({
      path: `/system/apiMembers`,
      method: 'post',
      data: apiMember,
    })
  }
  /**
   * Get ApiMember
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
   * @returns {Promise<ApiMember>}
   */
  getSystemApiMembersById(id, params = {}) {
    return this.request({
      path: `/system/apiMembers/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put ApiMember
   * @param {number} id
   * @param {ApiMember} apiMember apiMember
   * @returns {Promise<ApiMember>}
   */
  putSystemApiMembersById(id, apiMember) {
    return this.request({
      path: `/system/apiMembers/${id}`,
      method: 'put',
      data: apiMember,
    })
  }

  /**
   * Patch ApiMember
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ApiMember>}
   */
  patchSystemApiMembersById(id, patchOperations) {
    return this.request({
      path: `/system/apiMembers/${id}`,
      method: 'patch',
      data: patchOperations,
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
  getSystemApiMembersCount(params = {}) {
    return this.request({
      path: `/system/apiMembers/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ApiMember
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ApiMember>}
   */
  getSystemApiMembersDefault(params = {}) {
    return this.request({
      path: `/system/apiMembers/default`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AuditTrailEntry
   * @param {} getRequest
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AuditTrailEntry[]>}
   */
  getSystemAudittrail(getRequest, params = {}) {
    return this.request({
      path: `/system/audittrail`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of AuditTrailEntry
   * @param {} getRequest
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
  getSystemAudittrailCount(getRequest, params = {}) {
    return this.request({
      path: `/system/audittrail/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ConnectWise.Apis.v3_0.v2015_3.System.AuthAnvil.AuthAnvil
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AuthAnvil[]>}
   */
  getSystemAuthAnvils(params = {}) {
    return this.request({
      path: `/system/authAnvils`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ConnectWise.Apis.v3_0.v2015_3.System.AuthAnvil.AuthAnvil
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
   * @returns {Promise<AuthAnvil>}
   */
  getSystemAuthAnvilsById(id, params = {}) {
    return this.request({
      path: `/system/authAnvils/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put ConnectWise.Apis.v3_0.v2015_3.System.AuthAnvil.AuthAnvil
   * @param {number} id
   * @param {AuthAnvil} authAnvil authAnvil
   * @returns {Promise<AuthAnvil>}
   */
  putSystemAuthAnvilsById(id, authAnvil) {
    return this.request({
      path: `/system/authAnvils/${id}`,
      method: 'put',
      data: authAnvil,
    })
  }

  /**
   * Patch ConnectWise.Apis.v3_0.v2015_3.System.AuthAnvil.AuthAnvil
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AuthAnvil>}
   */
  patchSystemAuthAnvilsById(id, patchOperations) {
    return this.request({
      path: `/system/authAnvils/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of SuccessResponse
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
  getSystemAuthAnvilsCount(params = {}) {
    return this.request({
      path: `/system/authAnvils/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get SuccessResponse
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SuccessResponse>}
   */
  getSystemAuthAnvilsTestConnection(params = {}) {
    return this.request({
      path: `/system/authAnvils/testConnection`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of AutoSyncTime
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<AutoSyncTime[]>}
   */
  getSystemAutoSyncTime(params = {}) {
    return this.request({
      path: `/system/autoSyncTime`,
      method: 'get',
      params,
    })
  }

  /**
   * Post AutoSyncTime
   * @param {AutoSyncTime} autoSyncTime autoSyncTime
   * @returns {Promise<AutoSyncTime>}
   */
  postSystemAutoSyncTime(autoSyncTime) {
    return this.request({
      path: `/system/autoSyncTime`,
      method: 'post',
      data: autoSyncTime,
    })
  }
  /**
   * Get AutoSyncTime
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
   * @returns {Promise<AutoSyncTime>}
   */
  getSystemAutoSyncTimeById(id, params = {}) {
    return this.request({
      path: `/system/autoSyncTime/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete AutoSyncTime
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemAutoSyncTimeById(id) {
    return this.request({
      path: `/system/autoSyncTime/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put AutoSyncTime
   * @param {number} id
   * @param {AutoSyncTime} autoSyncTime autoSyncTime
   * @returns {Promise<AutoSyncTime>}
   */
  putSystemAutoSyncTimeById(id, autoSyncTime) {
    return this.request({
      path: `/system/autoSyncTime/${id}`,
      method: 'put',
      data: autoSyncTime,
    })
  }

  /**
   * Patch AutoSyncTime
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<AutoSyncTime>}
   */
  patchSystemAutoSyncTimeById(id, patchOperations) {
    return this.request({
      path: `/system/autoSyncTime/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of AutoSyncTime
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
  getSystemAutoSyncTimeCount(params = {}) {
    return this.request({
      path: `/system/autoSyncTime/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post BundleResultsCollection
   * @param {BundleRequestsCollection} requests requests
   * @returns {Promise<BundleResultsCollection>}
   */
  postSystemBundles(requests) {
    return this.request({
      path: `/system/bundles`,
      method: 'post',
      data: requests,
    })
  }
  /**
   * Post BundleResultsCollection
   * @param {BundleRequestsCollection} requests requests
   * @returns {Promise<BundleResultsCollection>}
   */
  postSystemBundlesCount(requests) {
    return this.request({
      path: `/system/bundles/count`,
      method: 'post',
      data: requests,
    })
  }
  /**
   * Get List of CallbackEntry
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CallbackEntry[]>}
   */
  getSystemCallbacks(params = {}) {
    return this.request({
      path: `/system/callbacks`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CallbackEntry
   * @param {CallbackEntry} callbackEntry callbackEntry
   * @returns {Promise<CallbackEntry>}
   */
  postSystemCallbacks(callbackEntry) {
    return this.request({
      path: `/system/callbacks`,
      method: 'post',
      data: callbackEntry,
    })
  }
  /**
   * Get CallbackEntry
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
   * @returns {Promise<CallbackEntry>}
   */
  getSystemCallbacksById(id, params = {}) {
    return this.request({
      path: `/system/callbacks/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CallbackEntry
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemCallbacksById(id) {
    return this.request({
      path: `/system/callbacks/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put CallbackEntry
   * @param {number} id
   * @param {CallbackEntry} callbackEntry callbackEntry
   * @returns {Promise<CallbackEntry>}
   */
  putSystemCallbacksById(id, callbackEntry) {
    return this.request({
      path: `/system/callbacks/${id}`,
      method: 'put',
      data: callbackEntry,
    })
  }

  /**
   * Patch CallbackEntry
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CallbackEntry>}
   */
  patchSystemCallbacksById(id, patchOperations) {
    return this.request({
      path: `/system/callbacks/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of CallbackEntry
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
  getSystemCallbacksCount(params = {}) {
    return this.request({
      path: `/system/callbacks/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Certification
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Certification[]>}
   */
  getSystemCertifications(params = {}) {
    return this.request({
      path: `/system/certifications`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Certification
   * @param {Certification} certification certification
   * @returns {Promise<Certification>}
   */
  postSystemCertifications(certification) {
    return this.request({
      path: `/system/certifications`,
      method: 'post',
      data: certification,
    })
  }
  /**
   * Get Certification
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
   * @returns {Promise<Certification>}
   */
  getSystemCertificationsById(id, params = {}) {
    return this.request({
      path: `/system/certifications/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Usage
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemCertificationsById(id) {
    return this.request({
      path: `/system/certifications/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Certification
   * @param {number} id
   * @param {Certification} certification certification
   * @returns {Promise<Certification>}
   */
  putSystemCertificationsById(id, certification) {
    return this.request({
      path: `/system/certifications/${id}`,
      method: 'put',
      data: certification,
    })
  }

  /**
   * Patch Certification
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Certification>}
   */
  patchSystemCertificationsById(id, patchOperations) {
    return this.request({
      path: `/system/certifications/${id}`,
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
  getSystemCertificationsByIdUsages(id, params = {}) {
    return this.request({
      path: `/system/certifications/${id}/usages`,
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
  getSystemCertificationsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/system/certifications/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Certification
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
  getSystemCertificationsCount(params = {}) {
    return this.request({
      path: `/system/certifications/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ConnectWiseHostedScreen
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ConnectWiseHostedScreen[]>}
   */
  getSystemConnectWiseHostedScreens(params = {}) {
    return this.request({
      path: `/system/connectWiseHostedScreens`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ConnectWiseHostedScreen
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
   * @returns {Promise<ConnectWiseHostedScreen>}
   */
  getSystemConnectWiseHostedScreensById(id, params = {}) {
    return this.request({
      path: `/system/connectWiseHostedScreens/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ConnectWiseHostedScreen
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
  getSystemConnectWiseHostedScreensCount(params = {}) {
    return this.request({
      path: `/system/connectWiseHostedScreens/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ConnectWiseHostedSetup
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ConnectWiseHostedSetup[]>}
   */
  getSystemConnectwisehostedsetups(params = {}) {
    return this.request({
      path: `/system/connectwisehostedsetups`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ConnectWiseHostedSetup
   * @param {ConnectWiseHostedSetup} connectWiseHostedSetup connectWiseHostedSetup
   * @returns {Promise<ConnectWiseHostedSetup>}
   */
  postSystemConnectwisehostedsetups(connectWiseHostedSetup) {
    return this.request({
      path: `/system/connectwisehostedsetups`,
      method: 'post',
      data: connectWiseHostedSetup,
    })
  }
  /**
   * Get ConnectWiseHostedSetup
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
   * @returns {Promise<ConnectWiseHostedSetup>}
   */
  getSystemConnectwisehostedsetupsById(id, params = {}) {
    return this.request({
      path: `/system/connectwisehostedsetups/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ConnectWiseHostedSetup
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemConnectwisehostedsetupsById(id) {
    return this.request({
      path: `/system/connectwisehostedsetups/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ConnectWiseHostedSetup
   * @param {number} id
   * @param {ConnectWiseHostedSetup} connectWiseHostedSetup connectWiseHostedSetup
   * @returns {Promise<ConnectWiseHostedSetup>}
   */
  putSystemConnectwisehostedsetupsById(id, connectWiseHostedSetup) {
    return this.request({
      path: `/system/connectwisehostedsetups/${id}`,
      method: 'put',
      data: connectWiseHostedSetup,
    })
  }

  /**
   * Patch ConnectWiseHostedSetup
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ConnectWiseHostedSetup>}
   */
  patchSystemConnectwisehostedsetupsById(id, patchOperations) {
    return this.request({
      path: `/system/connectwisehostedsetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ConnectWiseHostedSetup
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
  getSystemConnectwisehostedsetupsCount(params = {}) {
    return this.request({
      path: `/system/connectwisehostedsetups/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CustomReport
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CustomReport[]>}
   */
  getSystemCustomReports(params = {}) {
    return this.request({
      path: `/system/customReports`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CustomReport
   * @param {CustomReport} customReport customReport
   * @returns {Promise<CustomReport>}
   */
  postSystemCustomReports(customReport) {
    return this.request({
      path: `/system/customReports`,
      method: 'post',
      data: customReport,
    })
  }
  /**
   * Get CustomReport
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
   * @returns {Promise<CustomReport>}
   */
  getSystemCustomReportsById(id, params = {}) {
    return this.request({
      path: `/system/customReports/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CustomReport
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemCustomReportsById(id) {
    return this.request({
      path: `/system/customReports/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put CustomReport
   * @param {number} id
   * @param {CustomReport} customReport customReport
   * @returns {Promise<CustomReport>}
   */
  putSystemCustomReportsById(id, customReport) {
    return this.request({
      path: `/system/customReports/${id}`,
      method: 'put',
      data: customReport,
    })
  }

  /**
   * Patch CustomReport
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CustomReport>}
   */
  patchSystemCustomReportsById(id, patchOperations) {
    return this.request({
      path: `/system/customReports/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of CustomReportParameter
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
   * @returns {Promise<CustomReportParameter[]>}
   */
  getSystemCustomReportsByParentIdParameters(parentId, params = {}) {
    return this.request({
      path: `/system/customReports/${parentId}/parameters`,
      method: 'get',
      params,
    })
  }

  /**
   * Post CustomReportParameter
   * @param {number} parentId
   * @param {CustomReportParameter} customReportParameter customReportParameter
   * @returns {Promise<CustomReportParameter>}
   */
  postSystemCustomReportsByParentIdParameters(parentId, customReportParameter) {
    return this.request({
      path: `/system/customReports/${parentId}/parameters`,
      method: 'post',
      data: customReportParameter,
    })
  }
  /**
   * Get CustomReportParameter
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
   * @returns {Promise<CustomReportParameter>}
   */
  getSystemCustomReportsByParentIdParametersById(id, parentId, params = {}) {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete CustomReportParameter
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemCustomReportsByParentIdParametersById(id, parentId) {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put CustomReportParameter
   * @param {number} id
   * @param {number} parentId
   * @param {CustomReportParameter} customReportParameter customReportParameter
   * @returns {Promise<CustomReportParameter>}
   */
  putSystemCustomReportsByParentIdParametersById(id, parentId, customReportParameter) {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/{id}`,
      method: 'put',
      data: customReportParameter,
    })
  }

  /**
   * Patch CustomReportParameter
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CustomReportParameter>}
   */
  patchSystemCustomReportsByParentIdParametersById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of CustomReportParameter
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
  getSystemCustomReportsByParentIdParametersCount(parentId, params = {}) {
    return this.request({
      path: `/system/customReports/${parentId}/parameters/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CustomReport
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
  getSystemCustomReportsCount(params = {}) {
    return this.request({
      path: `/system/customReports/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CwTimeZone
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CwTimeZone[]>}
   */
  getSystemCwTimeZones(params = {}) {
    return this.request({
      path: `/system/cwTimeZones`,
      method: 'get',
      params,
    })
  }
  /**
   * Get CwTimeZone
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
   * @returns {Promise<CwTimeZone>}
   */
  getSystemCwTimeZonesById(id, params = {}) {
    return this.request({
      path: `/system/cwTimeZones/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CwTimeZone
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
  getSystemCwTimeZonesCount(params = {}) {
    return this.request({
      path: `/system/cwTimeZones/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Department
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Department[]>}
   */
  getSystemDepartments(params = {}) {
    return this.request({
      path: `/system/departments`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Department
   * @param {Department} department department
   * @returns {Promise<Department>}
   */
  postSystemDepartments(department) {
    return this.request({
      path: `/system/departments`,
      method: 'post',
      data: department,
    })
  }
  /**
   * Get Department
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
   * @returns {Promise<Department>}
   */
  getSystemDepartmentsById(id, params = {}) {
    return this.request({
      path: `/system/departments/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Department
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemDepartmentsById(id) {
    return this.request({
      path: `/system/departments/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Department
   * @param {number} id
   * @param {Department} department department
   * @returns {Promise<Department>}
   */
  putSystemDepartmentsById(id, department) {
    return this.request({
      path: `/system/departments/${id}`,
      method: 'put',
      data: department,
    })
  }

  /**
   * Patch Department
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Department>}
   */
  patchSystemDepartmentsById(id, patchOperations) {
    return this.request({
      path: `/system/departments/${id}`,
      method: 'patch',
      data: patchOperations,
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
  getSystemDepartmentsByIdUsages(id, params = {}) {
    return this.request({
      path: `/system/departments/${id}/usages`,
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
  getSystemDepartmentsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/system/departments/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of DepartmentLocation
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
   * @returns {Promise<DepartmentLocation[]>}
   */
  getSystemDepartmentsByParentIdLocations(parentId, params = {}) {
    return this.request({
      path: `/system/departments/${parentId}/locations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post DepartmentLocation
   * @param {number} parentId
   * @param {DepartmentLocation} departmentLocation departmentLocation
   * @returns {Promise<DepartmentLocation>}
   */
  postSystemDepartmentsByParentIdLocations(parentId, departmentLocation) {
    return this.request({
      path: `/system/departments/${parentId}/locations`,
      method: 'post',
      data: departmentLocation,
    })
  }
  /**
   * Get DepartmentLocation
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
   * @returns {Promise<DepartmentLocation>}
   */
  getSystemDepartmentsByParentIdLocationsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/departments/${parentId}/locations/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete DepartmentLocation
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemDepartmentsByParentIdLocationsById(id, parentId) {
    return this.request({
      path: `/system/departments/${parentId}/locations/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put DepartmentLocation
   * @param {number} id
   * @param {number} parentId
   * @param {DepartmentLocation} departmentLocation departmentLocation
   * @returns {Promise<DepartmentLocation>}
   */
  putSystemDepartmentsByParentIdLocationsById(id, parentId, departmentLocation) {
    return this.request({
      path: `/system/departments/${parentId}/locations/{id}`,
      method: 'put',
      data: departmentLocation,
    })
  }

  /**
   * Patch DepartmentLocation
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<DepartmentLocation>}
   */
  patchSystemDepartmentsByParentIdLocationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/departments/${parentId}/locations/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of DepartmentLocation
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
  getSystemDepartmentsByParentIdLocationsCount(parentId, params = {}) {
    return this.request({
      path: `/system/departments/${parentId}/locations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Department
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
  getSystemDepartmentsCount(params = {}) {
    return this.request({
      path: `/system/departments/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of DocumentInfo
   * @param {object} params
   * @param {number} [params.recordId]
   * @param {string} [params.recordType]
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<DocumentInfo[]>}
   */
  getSystemDocuments(params = {}) {
    return this.request({
      path: `/system/documents`,
      method: 'get',
      params,
    })
  }

  /**
   * Post DocumentInfo
   * @param {DocumentFormData} documentFormData Multipart
   * @returns {Promise<DocumentInfo>}
   */
  postSystemDocuments(documentFormData) {
    return this.request({
      path: `/system/documents`,
      method: 'post',
      data: documentFormData,
    })
  }
  /**
   * Get DocumentInfo
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
   * @returns {Promise<DocumentInfo>}
   */
  getSystemDocumentsById(id, params = {}) {
    return this.request({
      path: `/system/documents/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete DocumentInfo
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemDocumentsById(id) {
    return this.request({
      path: `/system/documents/${id}`,
      method: 'delete',
    })
  }

  /**
   * Post DocumentInfo
   * @param {number} id
   * @returns {Promise<DocumentInfo>}
   */
  postSystemDocumentsById(id) {
    return this.request({
      path: `/system/documents/${id}`,
      method: 'post',
    })
  }
  /**
   * Get DocumentInfo
   * @param {number} id
   * @param {object} params
   * @param {string} [params.lastModified]
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<string>}
   */
  getSystemDocumentsByIdDownload(id, params = {}) {
    return this.request({
      path: `/system/documents/${id}/download`,
      method: 'get',
      params,
    })
  }
  /**
   * Get DocumentInfo
   * @param {number} id
   * @param {object} params
   * @param {string} [params.lastModified]
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<string>}
   */
  getSystemDocumentsByIdThumbnail(id, params = {}) {
    return this.request({
      path: `/system/documents/${id}/thumbnail`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of DocumentInfo
   * @param {object} params
   * @param {number} [params.recordId]
   * @param {string} [params.recordType]
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
  getSystemDocumentsCount(params = {}) {
    return this.request({
      path: `/system/documents/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get DocumentInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<text/html>}
   */
  getSystemDocumentsUploadsample(params = {}) {
    return this.request({
      path: `/system/documents/uploadsample`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of EmailConnector
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<EmailConnector[]>}
   */
  getSystemEmailConnectors(params = {}) {
    return this.request({
      path: `/system/emailConnectors`,
      method: 'get',
      params,
    })
  }

  /**
   * Post EmailConnector
   * @param {EmailConnector} emailConnector emailConnector
   * @returns {Promise<EmailConnector>}
   */
  postSystemEmailConnectors(emailConnector) {
    return this.request({
      path: `/system/emailConnectors`,
      method: 'post',
      data: emailConnector,
    })
  }
  /**
   * Get List of EmailConnectorParsingRule
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
   * @returns {Promise<EmailConnectorParsingRule[]>}
   */
  getSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRules(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/{parentId}/parsingRules`,
      method: 'get',
      params,
    })
  }

  /**
   * Post EmailConnectorParsingRule
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {EmailConnectorParsingRule} emailConnectorParsingRule emailConnectorParsingRule
   * @returns {Promise<EmailConnectorParsingRule>}
   */
  postSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRules(
    parentId,
    grandparentId,
    emailConnectorParsingRule,
  ) {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/{parentId}/parsingRules`,
      method: 'post',
      data: emailConnectorParsingRule,
    })
  }
  /**
   * Get EmailConnectorParsingRule
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
   * @returns {Promise<EmailConnectorParsingRule>}
   */
  getSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesById(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/{parentId}/parsingRules/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete EmailConnectorParsingRule
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesById(
    id,
    parentId,
    grandparentId,
  ) {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/{parentId}/parsingRules/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put EmailConnectorParsingRule
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {EmailConnectorParsingRule} emailConnectorParsingRule emailConnectorParsingRule
   * @returns {Promise<EmailConnectorParsingRule>}
   */
  putSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesById(
    id,
    parentId,
    grandparentId,
    emailConnectorParsingRule,
  ) {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/{parentId}/parsingRules/{id}`,
      method: 'put',
      data: emailConnectorParsingRule,
    })
  }

  /**
   * Patch EmailConnectorParsingRule
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<EmailConnectorParsingRule>}
   */
  patchSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesById(
    id,
    parentId,
    grandparentId,
    patchOperations,
  ) {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/{parentId}/parsingRules/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of EmailConnectorParsingRule
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
  getSystemEmailConnectorsByGrandparentIdParsingStylesByParentIdParsingRulesCount(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/system/emailConnectors/${grandparentId}/parsingStyles/{parentId}/parsingRules/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get EmailConnector
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
   * @returns {Promise<EmailConnector>}
   */
  getSystemEmailConnectorsById(id, params = {}) {
    return this.request({
      path: `/system/emailConnectors/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete EmailConnector
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemEmailConnectorsById(id) {
    return this.request({
      path: `/system/emailConnectors/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put EmailConnector
   * @param {number} id
   * @param {EmailConnector} emailConnector emailConnector
   * @returns {Promise<EmailConnector>}
   */
  putSystemEmailConnectorsById(id, emailConnector) {
    return this.request({
      path: `/system/emailConnectors/${id}`,
      method: 'put',
      data: emailConnector,
    })
  }

  /**
   * Patch EmailConnector
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<EmailConnector>}
   */
  patchSystemEmailConnectorsById(id, patchOperations) {
    return this.request({
      path: `/system/emailConnectors/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get EmailConnectorInfos
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
   * @returns {Promise<EmailConnectorInfo>}
   */
  getSystemEmailConnectorsByIdInfo(id, params = {}) {
    return this.request({
      path: `/system/emailConnectors/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of EmailConnectorParsingStyle
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
   * @returns {Promise<EmailConnectorParsingStyle[]>}
   */
  getSystemEmailConnectorsByParentIdParsingStyles(parentId, params = {}) {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles`,
      method: 'get',
      params,
    })
  }

  /**
   * Post EmailConnectorParsingStyle
   * @param {number} parentId
   * @param {EmailConnectorParsingStyle} emailConnectorParsingStyle emailConnectorParsingStyle
   * @returns {Promise<EmailConnectorParsingStyle>}
   */
  postSystemEmailConnectorsByParentIdParsingStyles(parentId, emailConnectorParsingStyle) {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles`,
      method: 'post',
      data: emailConnectorParsingStyle,
    })
  }
  /**
   * Get EmailConnectorParsingStyle
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
   * @returns {Promise<EmailConnectorParsingStyle>}
   */
  getSystemEmailConnectorsByParentIdParsingStylesById(id, parentId, params = {}) {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete EmailConnectorParsingStyle
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemEmailConnectorsByParentIdParsingStylesById(id, parentId) {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put EmailConnectorParsingStyle
   * @param {number} id
   * @param {number} parentId
   * @param {EmailConnectorParsingStyle} emailConnectorParsingStyle emailConnectorParsingStyle
   * @returns {Promise<EmailConnectorParsingStyle>}
   */
  putSystemEmailConnectorsByParentIdParsingStylesById(id, parentId, emailConnectorParsingStyle) {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/{id}`,
      method: 'put',
      data: emailConnectorParsingStyle,
    })
  }

  /**
   * Patch EmailConnectorParsingStyle
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<EmailConnectorParsingStyle>}
   */
  patchSystemEmailConnectorsByParentIdParsingStylesById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of EmailConnectorParsingStyle
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
  getSystemEmailConnectorsByParentIdParsingStylesCount(parentId, params = {}) {
    return this.request({
      path: `/system/emailConnectors/${parentId}/parsingStyles/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of EmailConnector
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
  getSystemEmailConnectorsCount(params = {}) {
    return this.request({
      path: `/system/emailConnectors/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of EmailConnectorInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<EmailConnectorInfo[]>}
   */
  getSystemEmailConnectorsInfo(params = {}) {
    return this.request({
      path: `/system/emailConnectors/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of EmailConnectorInfos
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
  getSystemEmailConnectorsInfoCount(params = {}) {
    return this.request({
      path: `/system/emailConnectors/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of EmailExclusion
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<EmailExclusion[]>}
   */
  getSystemEmailExclusions(params = {}) {
    return this.request({
      path: `/system/emailExclusions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post EmailExclusion
   * @param {EmailExclusion} emailExclusion emailExclusion
   * @returns {Promise<EmailExclusion>}
   */
  postSystemEmailExclusions(emailExclusion) {
    return this.request({
      path: `/system/emailExclusions`,
      method: 'post',
      data: emailExclusion,
    })
  }
  /**
   * Get EmailExclusion
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
   * @returns {Promise<EmailExclusion>}
   */
  getSystemEmailExclusionsById(id, params = {}) {
    return this.request({
      path: `/system/emailExclusions/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete EmailExclusion
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemEmailExclusionsById(id) {
    return this.request({
      path: `/system/emailExclusions/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put EmailExclusion
   * @param {number} id
   * @param {EmailExclusion} emailExclusion emailExclusion
   * @returns {Promise<EmailExclusion>}
   */
  putSystemEmailExclusionsById(id, emailExclusion) {
    return this.request({
      path: `/system/emailExclusions/${id}`,
      method: 'put',
      data: emailExclusion,
    })
  }

  /**
   * Patch EmailExclusion
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<EmailExclusion>}
   */
  patchSystemEmailExclusionsById(id, patchOperations) {
    return this.request({
      path: `/system/emailExclusions/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of EmailExclusion
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
  getSystemEmailExclusionsCount(params = {}) {
    return this.request({
      path: `/system/emailExclusions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of EmailToken
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<EmailToken[]>}
   */
  getSystemEmailTokens(params = {}) {
    return this.request({
      path: `/system/emailTokens`,
      method: 'get',
      params,
    })
  }
  /**
   * Get EmailToken
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
   * @returns {Promise<EmailToken>}
   */
  getSystemEmailTokensById(id, params = {}) {
    return this.request({
      path: `/system/emailTokens/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of EmailToken
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
  getSystemEmailTokensCount(params = {}) {
    return this.request({
      path: `/system/emailTokens/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of EPayConfiguration
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<EPayConfiguration[]>}
   */
  getSystemEPayConfigurations(params = {}) {
    return this.request({
      path: `/system/ePayConfigurations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post EPayConfiguration
   * @param {EPayConfiguration} ePayConfiguration ePayConfiguration
   * @returns {Promise<EPayConfiguration>}
   */
  postSystemEPayConfigurations(ePayConfiguration) {
    return this.request({
      path: `/system/ePayConfigurations`,
      method: 'post',
      data: ePayConfiguration,
    })
  }
  /**
   * Get EPayConfiguration
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
   * @returns {Promise<EPayConfiguration>}
   */
  getSystemEPayConfigurationsById(id, params = {}) {
    return this.request({
      path: `/system/ePayConfigurations/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete EPayConfiguration
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemEPayConfigurationsById(id) {
    return this.request({
      path: `/system/ePayConfigurations/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put EPayConfiguration
   * @param {number} id
   * @param {EPayConfiguration} ePayConfiguration ePayConfiguration
   * @returns {Promise<EPayConfiguration>}
   */
  putSystemEPayConfigurationsById(id, ePayConfiguration) {
    return this.request({
      path: `/system/ePayConfigurations/${id}`,
      method: 'put',
      data: ePayConfiguration,
    })
  }

  /**
   * Patch EPayConfiguration
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<EPayConfiguration>}
   */
  patchSystemEPayConfigurationsById(id, patchOperations) {
    return this.request({
      path: `/system/ePayConfigurations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of EPayConfiguration
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
  getSystemEPayConfigurationsCount(params = {}) {
    return this.request({
      path: `/system/ePayConfigurations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Experiment
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Experiment[]>}
   */
  getSystemExperiments(params = {}) {
    return this.request({
      path: `/system/experiments`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Experiment
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
   * @returns {Promise<Experiment>}
   */
  getSystemExperimentsById(id, params = {}) {
    return this.request({
      path: `/system/experiments/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Experiment
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
  getSystemExperimentsCount(params = {}) {
    return this.request({
      path: `/system/experiments/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of FileUploadSettings
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<FileUploadSetting[]>}
   */
  getSystemFileuploadsettings(params = {}) {
    return this.request({
      path: `/system/fileuploadsettings/`,
      method: 'get',
      params,
    })
  }
  /**
   * Get FileUploadSettings
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
   * @returns {Promise<FileUploadSetting>}
   */
  getSystemFileuploadsettingsById(id, params = {}) {
    return this.request({
      path: `/system/fileuploadsettings/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put FileUploadSettings
   * @param {number} id
   * @param {FileUploadSetting} companyTypeAssociation companyTypeAssociation
   * @returns {Promise<FileUploadSetting>}
   */
  putSystemFileuploadsettingsById(id, companyTypeAssociation) {
    return this.request({
      path: `/system/fileuploadsettings/${id}`,
      method: 'put',
      data: companyTypeAssociation,
    })
  }

  /**
   * Patch FileUploadSettings
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<FileUploadSetting>}
   */
  patchSystemFileuploadsettingsById(id, patchOperations) {
    return this.request({
      path: `/system/fileuploadsettings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of FileUploadSettings
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
  getSystemFileuploadsettingsCount(params = {}) {
    return this.request({
      path: `/system/fileuploadsettings/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of GoogleEmailSetups
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<GoogleEmailSetup[]>}
   */
  getSystemGoogleemailsetup(params = {}) {
    return this.request({
      path: `/system/googleemailsetup/`,
      method: 'get',
      params,
    })
  }

  /**
   * Post GoogleEmailSetups
   * @param {GoogleEmailSetup} GoogleEmailSetup GoogleEmailSetup
   * @returns {Promise<GoogleEmailSetup>}
   */
  postSystemGoogleemailsetup(GoogleEmailSetup) {
    return this.request({
      path: `/system/googleemailsetup/`,
      method: 'post',
      data: GoogleEmailSetup,
    })
  }
  /**
   * Get GoogleEmailSetups
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
   * @returns {Promise<GoogleEmailSetup>}
   */
  getSystemGoogleemailsetupById(id, params = {}) {
    return this.request({
      path: `/system/googleemailsetup/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete GoogleEmailSetups
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemGoogleemailsetupById(id) {
    return this.request({
      path: `/system/googleemailsetup/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put GoogleEmailSetups
   * @param {number} id
   * @param {GoogleEmailSetup} companyTypeAssociation companyTypeAssociation
   * @returns {Promise<GoogleEmailSetup>}
   */
  putSystemGoogleemailsetupById(id, companyTypeAssociation) {
    return this.request({
      path: `/system/googleemailsetup/${id}`,
      method: 'put',
      data: companyTypeAssociation,
    })
  }

  /**
   * Patch GoogleEmailSetups
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<GoogleEmailSetup>}
   */
  patchSystemGoogleemailsetupById(id, patchOperations) {
    return this.request({
      path: `/system/googleemailsetup/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @returns {Promise<SuccessResponse>}
   */
  postSystemGoogleemailsetupByIdTestConnection(id) {
    return this.request({
      path: `/system/googleemailsetup/${id}/testConnection`,
      method: 'post',
    })
  }
  /**
   * Get Count of GoogleEmailSetups
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
  getSystemGoogleemailsetupCount(params = {}) {
    return this.request({
      path: `/system/googleemailsetup/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Imap
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Imap[]>}
   */
  getSystemImaps(params = {}) {
    return this.request({
      path: `/system/imaps`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Imap
   * @param {Imap} imap imap
   * @returns {Promise<Imap>}
   */
  postSystemImaps(imap) {
    return this.request({
      path: `/system/imaps`,
      method: 'post',
      data: imap,
    })
  }
  /**
   * Get Imap
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
   * @returns {Promise<Imap>}
   */
  getSystemImapsById(id, params = {}) {
    return this.request({
      path: `/system/imaps/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Imap
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemImapsById(id) {
    return this.request({
      path: `/system/imaps/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Imap
   * @param {number} id
   * @param {Imap} imap imap
   * @returns {Promise<Imap>}
   */
  putSystemImapsById(id, imap) {
    return this.request({
      path: `/system/imaps/${id}`,
      method: 'put',
      data: imap,
    })
  }

  /**
   * Patch Imap
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Imap>}
   */
  patchSystemImapsById(id, patchOperations) {
    return this.request({
      path: `/system/imaps/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ImapInfo
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
   * @returns {Promise<ImapInfo>}
   */
  getSystemImapsByIdInfo(id, params = {}) {
    return this.request({
      path: `/system/imaps/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Imap
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
  getSystemImapsCount(params = {}) {
    return this.request({
      path: `/system/imaps/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ImapInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ImapInfo[]>}
   */
  getSystemImapsInfo(params = {}) {
    return this.request({
      path: `/system/imaps/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ImapInfos
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
  getSystemImapsInfoCount(params = {}) {
    return this.request({
      path: `/system/imaps/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post ImportMassMaintenance
   * @param {number} id
   * @returns {Promise<ImportMassMaintenance>}
   */
  postSystemImportMassMaintenanceById(id) {
    return this.request({
      path: `/system/importMassMaintenance/${id}`,
      method: 'post',
    })
  }
  /**
   * Get Info
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Info>}
   */
  getSystemInfo(params = {}) {
    return this.request({
      path: `/system/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of DepartmentLocationInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<DepartmentLocationInfo[]>}
   */
  getSystemInfoDepartmentlocations(params = {}) {
    return this.request({
      path: `/system/info/departmentlocations`,
      method: 'get',
      params,
    })
  }
  /**
   * Get DepartmentLocationInfo
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
   * @returns {Promise<DepartmentLocationInfo>}
   */
  getSystemInfoDepartmentlocationsById(id, params = {}) {
    return this.request({
      path: `/system/info/departmentlocations/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of DepartmentLocationInfo
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
  getSystemInfoDepartmentlocationsCount(params = {}) {
    return this.request({
      path: `/system/info/departmentlocations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of DepartmentInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<DepartmentInfo[]>}
   */
  getSystemInfoDepartments(params = {}) {
    return this.request({
      path: `/system/info/departments`,
      method: 'get',
      params,
    })
  }
  /**
   * Get DepartmentInfo
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
   * @returns {Promise<DepartmentInfo>}
   */
  getSystemInfoDepartmentsById(id, params = {}) {
    return this.request({
      path: `/system/info/departments/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of DepartmentInfo
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
  getSystemInfoDepartmentsCount(params = {}) {
    return this.request({
      path: `/system/info/departments/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of LinkInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<LinkInfo[]>}
   */
  getSystemInfoLinks(params = {}) {
    return this.request({
      path: `/system/info/links`,
      method: 'get',
      params,
    })
  }
  /**
   * Get LinkInfo
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
   * @returns {Promise<LinkInfo>}
   */
  getSystemInfoLinksById(id, params = {}) {
    return this.request({
      path: `/system/info/links/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Post LinkResolveUrlInfo
   * @param {number} id
   * @param {LinkResolveUrlInfo} resolveInfo resolveInfo
   * @returns {Promise<LinkResolveUrlInfo>}
   */
  postSystemInfoLinksByIdResolveurl(id, resolveInfo) {
    return this.request({
      path: `/system/info/links/${id}/resolveurl`,
      method: 'post',
      data: resolveInfo,
    })
  }
  /**
   * Get Count of LinkInfo
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
  getSystemInfoLinksCount(params = {}) {
    return this.request({
      path: `/system/info/links/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of LocaleInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<LocaleInfo[]>}
   */
  getSystemInfoLocales(params = {}) {
    return this.request({
      path: `/system/info/locales`,
      method: 'get',
      params,
    })
  }
  /**
   * Get LocaleInfo
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
   * @returns {Promise<LocaleInfo>}
   */
  getSystemInfoLocalesById(id, params = {}) {
    return this.request({
      path: `/system/info/locales/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of LocaleInfo
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
  getSystemInfoLocalesCount(params = {}) {
    return this.request({
      path: `/system/info/locales/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of LocationInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<LocationInfo[]>}
   */
  getSystemInfoLocations(params = {}) {
    return this.request({
      path: `/system/info/locations`,
      method: 'get',
      params,
    })
  }
  /**
   * Get LocationInfo
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
   * @returns {Promise<LocationInfo>}
   */
  getSystemInfoLocationsById(id, params = {}) {
    return this.request({
      path: `/system/info/locations/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of LocationInfo
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
  getSystemInfoLocationsCount(params = {}) {
    return this.request({
      path: `/system/info/locations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MemberInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<MemberInfo[]>}
   */
  getSystemInfoMembers(params = {}) {
    return this.request({
      path: `/system/info/members`,
      method: 'get',
      params,
    })
  }
  /**
   * Get MemberInfo
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
   * @returns {Promise<MemberInfo>}
   */
  getSystemInfoMembersById(id, params = {}) {
    return this.request({
      path: `/system/info/members/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get MemberInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<MemberInfo>}
   */
  getSystemInfoMembersmemberIdentifierregextypes(params = {}) {
    return this.request({
      path: `/system/info/members/{memberIdentifier:regex(^(types. |(`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of MemberInfo
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
  getSystemInfoMembersCount(params = {}) {
    return this.request({
      path: `/system/info/members/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PersonasInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PersonasInfo[]>}
   */
  getSystemInfoPersonas(params = {}) {
    return this.request({
      path: `/system/info/personas`,
      method: 'get',
      params,
    })
  }
  /**
   * Get PersonasInfo
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
   * @returns {Promise<PersonasInfo>}
   */
  getSystemInfoPersonasById(id, params = {}) {
    return this.request({
      path: `/system/info/personas/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of PersonasInfo
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
  getSystemInfoPersonasCount(params = {}) {
    return this.request({
      path: `/system/info/personas/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of StandardNoteInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<StandardNoteInfo[]>}
   */
  getSystemInfoStandardNotes(params = {}) {
    return this.request({
      path: `/system/info/standardNotes`,
      method: 'get',
      params,
    })
  }
  /**
   * Get StandardNoteInfo
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
   * @returns {Promise<StandardNoteInfo>}
   */
  getSystemInfoStandardNotesById(id, params = {}) {
    return this.request({
      path: `/system/info/standardNotes/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of StandardNoteInfo
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
  getSystemInfoStandardNotesCount(params = {}) {
    return this.request({
      path: `/system/info/standardNotes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of InOutBoard
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<InOutBoard[]>}
   */
  getSystemInOutBoards(params = {}) {
    return this.request({
      path: `/system/inOutBoards`,
      method: 'get',
      params,
    })
  }

  /**
   * Post InOutBoard
   * @param {InOutBoard} inOutBoard inOutBoard
   * @returns {Promise<InOutBoard>}
   */
  postSystemInOutBoards(inOutBoard) {
    return this.request({
      path: `/system/inOutBoards`,
      method: 'post',
      data: inOutBoard,
    })
  }
  /**
   * Get InOutBoard
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
   * @returns {Promise<InOutBoard>}
   */
  getSystemInOutBoardsById(id, params = {}) {
    return this.request({
      path: `/system/inOutBoards/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete InOutBoard
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemInOutBoardsById(id) {
    return this.request({
      path: `/system/inOutBoards/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put InOutBoard
   * @param {number} id
   * @param {InOutBoard} inOutBoard inOutBoard
   * @returns {Promise<InOutBoard>}
   */
  putSystemInOutBoardsById(id, inOutBoard) {
    return this.request({
      path: `/system/inOutBoards/${id}`,
      method: 'put',
      data: inOutBoard,
    })
  }

  /**
   * Patch InOutBoard
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<InOutBoard>}
   */
  patchSystemInOutBoardsById(id, patchOperations) {
    return this.request({
      path: `/system/inOutBoards/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of InOutBoard
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
  getSystemInOutBoardsCount(params = {}) {
    return this.request({
      path: `/system/inOutBoards/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of InOutType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<InOutType[]>}
   */
  getSystemInOutTypes(params = {}) {
    return this.request({
      path: `/system/inOutTypes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post InOutType
   * @param {InOutType} inOutType inOutType
   * @returns {Promise<InOutType>}
   */
  postSystemInOutTypes(inOutType) {
    return this.request({
      path: `/system/inOutTypes`,
      method: 'post',
      data: inOutType,
    })
  }
  /**
   * Get InOutType
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
   * @returns {Promise<InOutType>}
   */
  getSystemInOutTypesById(id, params = {}) {
    return this.request({
      path: `/system/inOutTypes/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete InOutType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemInOutTypesById(id) {
    return this.request({
      path: `/system/inOutTypes/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put InOutType
   * @param {number} id
   * @param {InOutType} inOutType inOutType
   * @returns {Promise<InOutType>}
   */
  putSystemInOutTypesById(id, inOutType) {
    return this.request({
      path: `/system/inOutTypes/${id}`,
      method: 'put',
      data: inOutType,
    })
  }

  /**
   * Patch InOutType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<InOutType>}
   */
  patchSystemInOutTypesById(id, patchOperations) {
    return this.request({
      path: `/system/inOutTypes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get InOutTypeInfo
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
   * @returns {Promise<InOutTypeInfo>}
   */
  getSystemInOutTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/system/inOutTypes/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of InOutType
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
  getSystemInOutTypesCount(params = {}) {
    return this.request({
      path: `/system/inOutTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of InOutTypeInfo
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
  getSystemInOutTypesCountInfo(params = {}) {
    return this.request({
      path: `/system/inOutTypes/count/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of InOutTypeInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<InOutTypeInfo[]>}
   */
  getSystemInOutTypesInfo(params = {}) {
    return this.request({
      path: `/system/inOutTypes/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of IntegratorLogin
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<IntegratorLogin[]>}
   */
  getSystemIntegratorlogins(params = {}) {
    return this.request({
      path: `/system/integratorlogins`,
      method: 'get',
      params,
    })
  }

  /**
   * Post IntegratorLogin
   * @param {IntegratorLogin} integratorLogin integratorLogin
   * @returns {Promise<IntegratorLogin>}
   */
  postSystemIntegratorlogins(integratorLogin) {
    return this.request({
      path: `/system/integratorlogins`,
      method: 'post',
      data: integratorLogin,
    })
  }
  /**
   * Get IntegratorLogin
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
   * @returns {Promise<IntegratorLogin>}
   */
  getSystemIntegratorloginsById(id, params = {}) {
    return this.request({
      path: `/system/integratorlogins/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete IntegratorLogin
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemIntegratorloginsById(id) {
    return this.request({
      path: `/system/integratorlogins/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put IntegratorLogin
   * @param {number} id
   * @param {IntegratorLogin} integratorLogin integratorLogin
   * @returns {Promise<IntegratorLogin>}
   */
  putSystemIntegratorloginsById(id, integratorLogin) {
    return this.request({
      path: `/system/integratorlogins/${id}`,
      method: 'put',
      data: integratorLogin,
    })
  }

  /**
   * Patch IntegratorLogin
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<IntegratorLogin>}
   */
  patchSystemIntegratorloginsById(id, patchOperations) {
    return this.request({
      path: `/system/integratorlogins/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of IntegratorLogin
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
  getSystemIntegratorloginsCount(params = {}) {
    return this.request({
      path: `/system/integratorlogins/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of IntegratorTag
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<IntegratorTag[]>}
   */
  getSystemIntegratorTags(params = {}) {
    return this.request({
      path: `/system/integratorTags`,
      method: 'get',
      params,
    })
  }

  /**
   * Post IntegratorTag
   * @param {IntegratorTag} tag tag
   * @returns {Promise<IntegratorTag>}
   */
  postSystemIntegratorTags(tag) {
    return this.request({
      path: `/system/integratorTags`,
      method: 'post',
      data: tag,
    })
  }
  /**
   * Get IntegratorTag
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
   * @returns {Promise<IntegratorTag>}
   */
  getSystemIntegratorTagsById(id, params = {}) {
    return this.request({
      path: `/system/integratorTags/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete IntegratorTag
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemIntegratorTagsById(id) {
    return this.request({
      path: `/system/integratorTags/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put IntegratorTag
   * @param {number} id
   * @param {IntegratorTag} tag tag
   * @returns {Promise<IntegratorTag>}
   */
  putSystemIntegratorTagsById(id, tag) {
    return this.request({
      path: `/system/integratorTags/${id}`,
      method: 'put',
      data: tag,
    })
  }

  /**
   * Patch IntegratorTag
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<IntegratorTag>}
   */
  patchSystemIntegratorTagsById(id, patchOperations) {
    return this.request({
      path: `/system/integratorTags/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of IntegratorTag
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
  getSystemIntegratorTagsCount(params = {}) {
    return this.request({
      path: `/system/integratorTags/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of KPICategory
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<KPICategory[]>}
   */
  getSystemKpiCategories(params = {}) {
    return this.request({
      path: `/system/kpiCategories`,
      method: 'get',
      params,
    })
  }
  /**
   * Get KPICategory
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
   * @returns {Promise<KPICategory>}
   */
  getSystemKpiCategoriesById(id, params = {}) {
    return this.request({
      path: `/system/kpiCategories/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of KPICategory
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
  getSystemKpiCategoriesCount(params = {}) {
    return this.request({
      path: `/system/kpiCategories/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of KPI
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<KPI[]>}
   */
  getSystemKpis(params = {}) {
    return this.request({
      path: `/system/kpis`,
      method: 'get',
      params,
    })
  }
  /**
   * Get KPI
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
   * @returns {Promise<KPI>}
   */
  getSystemKpisById(id, params = {}) {
    return this.request({
      path: `/system/kpis/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of KPI
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
  getSystemKpisCount(params = {}) {
    return this.request({
      path: `/system/kpis/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of LdapConfiguration
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<LdapConfiguration[]>}
   */
  getSystemLdapConfigurations(params = {}) {
    return this.request({
      path: `/system/ldapConfigurations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post LdapConfiguration
   * @param {LdapConfiguration} ldapConfiguration ldapConfiguration
   * @returns {Promise<LdapConfiguration>}
   */
  postSystemLdapConfigurations(ldapConfiguration) {
    return this.request({
      path: `/system/ldapConfigurations`,
      method: 'post',
      data: ldapConfiguration,
    })
  }
  /**
   * Get LdapConfiguration
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
   * @returns {Promise<LdapConfiguration>}
   */
  getSystemLdapConfigurationsById(id, params = {}) {
    return this.request({
      path: `/system/ldapConfigurations/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete LdapConfiguration
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemLdapConfigurationsById(id) {
    return this.request({
      path: `/system/ldapConfigurations/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put LdapConfiguration
   * @param {number} id
   * @param {LdapConfiguration} ldapConfiguration ldapConfiguration
   * @returns {Promise<LdapConfiguration>}
   */
  putSystemLdapConfigurationsById(id, ldapConfiguration) {
    return this.request({
      path: `/system/ldapConfigurations/${id}`,
      method: 'put',
      data: ldapConfiguration,
    })
  }

  /**
   * Patch LdapConfiguration
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<LdapConfiguration>}
   */
  patchSystemLdapConfigurationsById(id, patchOperations) {
    return this.request({
      path: `/system/ldapConfigurations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get LdapConfigurationInfos
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
   * @returns {Promise<LdapConfigurationInfo>}
   */
  getSystemLdapConfigurationsByIdInfo(id, params = {}) {
    return this.request({
      path: `/system/ldapConfigurations/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of LdapConfiguration
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
  getSystemLdapConfigurationsCount(params = {}) {
    return this.request({
      path: `/system/ldapConfigurations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of LdapConfigurationInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<LdapConfigurationInfo[]>}
   */
  getSystemLdapConfigurationsInfo(params = {}) {
    return this.request({
      path: `/system/ldapConfigurations/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of LdapConfigurationInfos
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
  getSystemLdapConfigurationsInfoCount(params = {}) {
    return this.request({
      path: `/system/ldapConfigurations/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post SuccessResponse
   * @param {LdapConfigurationTestLink} server server
   * @returns {Promise<SuccessResponse>}
   */
  postSystemLdapConfigurationsTestLink(server) {
    return this.request({
      path: `/system/ldapConfigurations/testLink`,
      method: 'post',
      data: server,
    })
  }
  /**
   * Get List of Link
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Link[]>}
   */
  getSystemLinks(params = {}) {
    return this.request({
      path: `/system/links`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Link
   * @param {Link} link link
   * @returns {Promise<Link>}
   */
  postSystemLinks(link) {
    return this.request({
      path: `/system/links`,
      method: 'post',
      data: link,
    })
  }
  /**
   * Get Link
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
   * @returns {Promise<Link>}
   */
  getSystemLinksById(id, params = {}) {
    return this.request({
      path: `/system/links/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Link
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemLinksById(id) {
    return this.request({
      path: `/system/links/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Link
   * @param {number} id
   * @param {Link} link link
   * @returns {Promise<Link>}
   */
  putSystemLinksById(id, link) {
    return this.request({
      path: `/system/links/${id}`,
      method: 'put',
      data: link,
    })
  }

  /**
   * Patch Link
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Link>}
   */
  patchSystemLinksById(id, patchOperations) {
    return this.request({
      path: `/system/links/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of Link
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
  getSystemLinksCount(params = {}) {
    return this.request({
      path: `/system/links/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Location
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Location[]>}
   */
  getSystemLocations(params = {}) {
    return this.request({
      path: `/system/locations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Location
   * @param {Location} location location
   * @returns {Promise<Location>}
   */
  postSystemLocations(location) {
    return this.request({
      path: `/system/locations`,
      method: 'post',
      data: location,
    })
  }
  /**
   * Get Location
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
   * @returns {Promise<Location>}
   */
  getSystemLocationsById(id, params = {}) {
    return this.request({
      path: `/system/locations/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Location
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemLocationsById(id) {
    return this.request({
      path: `/system/locations/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Location
   * @param {number} id
   * @param {Location} location location
   * @returns {Promise<Location>}
   */
  putSystemLocationsById(id, location) {
    return this.request({
      path: `/system/locations/${id}`,
      method: 'put',
      data: location,
    })
  }

  /**
   * Patch Location
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Location>}
   */
  patchSystemLocationsById(id, patchOperations) {
    return this.request({
      path: `/system/locations/${id}`,
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
  getSystemLocationsByIdUsages(id, params = {}) {
    return this.request({
      path: `/system/locations/${id}/usages`,
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
  getSystemLocationsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/system/locations/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of LocationDepartment
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
   * @returns {Promise<LocationDepartment[]>}
   */
  getSystemLocationsByParentIdDepartments(parentId, params = {}) {
    return this.request({
      path: `/system/locations/${parentId}/departments`,
      method: 'get',
      params,
    })
  }
  /**
   * Get LocationDepartment
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
   * @returns {Promise<LocationDepartment>}
   */
  getSystemLocationsByParentIdDepartmentsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/locations/${parentId}/departments/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of LocationDepartment
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
  getSystemLocationsByParentIdDepartmentsCount(parentId, params = {}) {
    return this.request({
      path: `/system/locations/${parentId}/departments/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of LocationWorkRole
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
   * @returns {Promise<LocationWorkRole[]>}
   */
  getSystemLocationsByParentIdWorkRoles(parentId, params = {}) {
    return this.request({
      path: `/system/locations/${parentId}/workRoles`,
      method: 'get',
      params,
    })
  }
  /**
   * Get LocationWorkRole
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
   * @returns {Promise<LocationWorkRole>}
   */
  getSystemLocationsByParentIdWorkRolesById(id, parentId, params = {}) {
    return this.request({
      path: `/system/locations/${parentId}/workRoles/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of LocationWorkRole
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
  getSystemLocationsByParentIdWorkRolesCount(parentId, params = {}) {
    return this.request({
      path: `/system/locations/${parentId}/workRoles/count`,
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
  getSystemLocationsCount(params = {}) {
    return this.request({
      path: `/system/locations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManagementNetworkSecurity
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ManagementNetworkSecurity[]>}
   */
  getSystemManagementNetworkSecurities(params = {}) {
    return this.request({
      path: `/system/managementNetworkSecurities`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ManagementNetworkSecurity
   * @param {ManagementNetworkSecurity} managementNetworkSecurity managementNetworkSecurity
   * @returns {Promise<ManagementNetworkSecurity>}
   */
  postSystemManagementNetworkSecurities(managementNetworkSecurity) {
    return this.request({
      path: `/system/managementNetworkSecurities`,
      method: 'post',
      data: managementNetworkSecurity,
    })
  }
  /**
   * Get ManagementNetworkSecurity
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
   * @returns {Promise<ManagementNetworkSecurity>}
   */
  getSystemManagementNetworkSecuritiesById(id, params = {}) {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ManagementNetworkSecurity
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemManagementNetworkSecuritiesById(id) {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ManagementNetworkSecurity
   * @param {number} id
   * @param {ManagementNetworkSecurity} managementNetworkSecurity managementNetworkSecurity
   * @returns {Promise<ManagementNetworkSecurity>}
   */
  putSystemManagementNetworkSecuritiesById(id, managementNetworkSecurity) {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}`,
      method: 'put',
      data: managementNetworkSecurity,
    })
  }

  /**
   * Patch ManagementNetworkSecurity
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ManagementNetworkSecurity>}
   */
  patchSystemManagementNetworkSecuritiesById(id, patchOperations) {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get SuccessResponse
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
   * @returns {Promise<SuccessResponse>}
   */
  getSystemManagementNetworkSecuritiesByIdTestCredentials(id, params = {}) {
    return this.request({
      path: `/system/managementNetworkSecurities/${id}/testCredentials`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ManagementNetworkSecurity
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
  getSystemManagementNetworkSecuritiesCount(params = {}) {
    return this.request({
      path: `/system/managementNetworkSecurities/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get MarketplaceImport
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
   * @returns {Promise<MarketplaceImport>}
   */
  getSystemMarketplaceimportGetdefinitionById(id, params = {}) {
    return this.request({
      path: `/system/marketplaceimport/getdefinition/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Post MarketplaceImport
   * @param {MarketplaceImport} marketplaceImport marketplaceImport
   * @returns {Promise<MarketplaceImport>}
   */
  postSystemMarketplaceimportImport(marketplaceImport) {
    return this.request({
      path: `/system/marketplaceimport/import`,
      method: 'post',
      data: marketplaceImport,
    })
  }
  /**
   * Get List of Member
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Member[]>}
   */
  getSystemMembers(params = {}) {
    return this.request({
      path: `/system/members`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Member
   * @param {Member} member member
   * @returns {Promise<Member>}
   */
  postSystemMembers(member) {
    return this.request({
      path: `/system/members`,
      method: 'post',
      data: member,
    })
  }
  /**
   * Get Member
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
   * @returns {Promise<Member>}
   */
  getSystemMembersById(id, params = {}) {
    return this.request({
      path: `/system/members/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put Member
   * @param {number} id
   * @param {Member} member member
   * @returns {Promise<Member>}
   */
  putSystemMembersById(id, member) {
    return this.request({
      path: `/system/members/${id}`,
      method: 'put',
      data: member,
    })
  }

  /**
   * Patch Member
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Member>}
   */
  patchSystemMembersById(id, patchOperations) {
    return this.request({
      path: `/system/members/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post MemberDeactivation
   * @param {number} id
   * @param {MemberDeactivation} item item
   * @returns {Promise<MemberDeactivation>}
   */
  postSystemMembersByIdDeactivate(id, item) {
    return this.request({
      path: `/system/members/${id}/deactivate`,
      method: 'post',
      data: item,
    })
  }
  /**
   * Get
   * @param {number} id
   * @param {boolean} useDefaultFlag
   * @param {string} lastmodified
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
  getSystemMembersByIdImage(id, useDefaultFlag, lastmodified, params = {}) {
    return this.request({
      path: `/system/members/${id}/image`,
      method: 'get',
      params,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @param {MemberLinkSsoUser} item item
   * @returns {Promise<SuccessResponse>}
   */
  postSystemMembersByIdLinkSsoUser(id, item) {
    return this.request({
      path: `/system/members/${id}/linkSsoUser`,
      method: 'post',
      data: item,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @param {MemberSsoToken} item item
   * @returns {Promise<SuccessResponse>}
   */
  postSystemMembersByIdSubmit(id, item) {
    return this.request({
      path: `/system/members/${id}/submit`,
      method: 'post',
      data: item,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @returns {Promise<SuccessResponse>}
   */
  postSystemMembersByIdUnlinkSsoUser(id) {
    return this.request({
      path: `/system/members/${id}/unlinkSsoUser`,
      method: 'post',
    })
  }
  /**
   * Delete Member
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemMembersByIdUnusedTimeSheets(id) {
    return this.request({
      path: `/system/members/${id}/unusedTimeSheets`,
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
  getSystemMembersByIdUsages(id, params = {}) {
    return this.request({
      path: `/system/members/${id}/usages`,
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
  getSystemMembersByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/system/members/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Member
   * @param {string} memberIdentifier
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Member>}
   */
  getSystemMembersmemberIdentifierregextypes(memberIdentifier, params = {}) {
    return this.request({
      path: `/system/members/{memberIdentifier:regex(^(types. |(`,
      method: 'get',
      params,
    })
  }
  /**
   * Post Token
   * @param {string} memberIdentifier
   * @returns {Promise<Token>}
   */
  postSystemMembersByMemberIdentifierTokens(memberIdentifier) {
    return this.request({
      path: `/system/members/${memberIdentifier}/tokens`,
      method: 'post',
    })
  }
  /**
   * Get List of MemberAccrual
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
   * @returns {Promise<MemberAccrual[]>}
   */
  getSystemMembersByParentIdAccruals(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/accruals`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MemberAccrual
   * @param {number} parentId
   * @param {MemberAccrual} memberAccrual memberAccrual
   * @returns {Promise<MemberAccrual>}
   */
  postSystemMembersByParentIdAccruals(parentId, memberAccrual) {
    return this.request({
      path: `/system/members/${parentId}/accruals`,
      method: 'post',
      data: memberAccrual,
    })
  }
  /**
   * Get MemberAccrual
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
   * @returns {Promise<MemberAccrual>}
   */
  getSystemMembersByParentIdAccrualsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/accruals/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MemberAccrual
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemMembersByParentIdAccrualsById(id, parentId) {
    return this.request({
      path: `/system/members/${parentId}/accruals/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put MemberAccrual
   * @param {number} id
   * @param {number} parentId
   * @param {MemberAccrual} memberAccrual memberAccrual
   * @returns {Promise<MemberAccrual>}
   */
  putSystemMembersByParentIdAccrualsById(id, parentId, memberAccrual) {
    return this.request({
      path: `/system/members/${parentId}/accruals/{id}`,
      method: 'put',
      data: memberAccrual,
    })
  }

  /**
   * Patch MemberAccrual
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MemberAccrual>}
   */
  patchSystemMembersByParentIdAccrualsById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/members/${parentId}/accruals/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of MemberAccrual
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
  getSystemMembersByParentIdAccrualsCount(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/accruals/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MemberCertification
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
   * @returns {Promise<MemberCertification[]>}
   */
  getSystemMembersByParentIdCertifications(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/certifications`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MemberCertification
   * @param {number} parentId
   * @param {MemberCertification} memberCertification memberCertification
   * @returns {Promise<MemberCertification>}
   */
  postSystemMembersByParentIdCertifications(parentId, memberCertification) {
    return this.request({
      path: `/system/members/${parentId}/certifications`,
      method: 'post',
      data: memberCertification,
    })
  }
  /**
   * Get MemberCertification
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
   * @returns {Promise<MemberCertification>}
   */
  getSystemMembersByParentIdCertificationsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/certifications/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MemberCertification
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemMembersByParentIdCertificationsById(id, parentId) {
    return this.request({
      path: `/system/members/${parentId}/certifications/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put MemberCertification
   * @param {number} id
   * @param {number} parentId
   * @param {MemberCertification} memberCertification memberCertification
   * @returns {Promise<MemberCertification>}
   */
  putSystemMembersByParentIdCertificationsById(id, parentId, memberCertification) {
    return this.request({
      path: `/system/members/${parentId}/certifications/{id}`,
      method: 'put',
      data: memberCertification,
    })
  }

  /**
   * Patch MemberCertification
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MemberCertification>}
   */
  patchSystemMembersByParentIdCertificationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/members/${parentId}/certifications/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of MemberCertification
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
  getSystemMembersByParentIdCertificationsCount(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/certifications/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MemberDelegation
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
   * @returns {Promise<MemberDelegation[]>}
   */
  getSystemMembersByParentIdDelegations(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/delegations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MemberDelegation
   * @param {number} parentId
   * @param {MemberDelegation} memberDelegation memberDelegation
   * @returns {Promise<MemberDelegation>}
   */
  postSystemMembersByParentIdDelegations(parentId, memberDelegation) {
    return this.request({
      path: `/system/members/${parentId}/delegations`,
      method: 'post',
      data: memberDelegation,
    })
  }
  /**
   * Get MemberDelegation
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
   * @returns {Promise<MemberDelegation>}
   */
  getSystemMembersByParentIdDelegationsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/delegations/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MemberDelegation
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemMembersByParentIdDelegationsById(id, parentId) {
    return this.request({
      path: `/system/members/${parentId}/delegations/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put MemberDelegation
   * @param {number} id
   * @param {number} parentId
   * @param {MemberDelegation} memberDelegation memberDelegation
   * @returns {Promise<MemberDelegation>}
   */
  putSystemMembersByParentIdDelegationsById(id, parentId, memberDelegation) {
    return this.request({
      path: `/system/members/${parentId}/delegations/{id}`,
      method: 'put',
      data: memberDelegation,
    })
  }

  /**
   * Patch MemberDelegation
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MemberDelegation>}
   */
  patchSystemMembersByParentIdDelegationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/members/${parentId}/delegations/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of MemberDelegation
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
  getSystemMembersByParentIdDelegationsCount(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/delegations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ManagedDeviceAccount
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
   * @returns {Promise<ManagedDeviceAccount[]>}
   */
  getSystemMembersByParentIdManagedDeviceAccounts(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/managedDeviceAccounts`,
      method: 'get',
      params,
    })
  }
  /**
   * Delete BulkResult
   * @param {number} parentId
   * @param {IdCollection} managedDeviceAccounts managedDeviceAccounts
   * @returns {Promise<BulkResult>}
   */
  deleteSystemMembersByParentIdManagedDeviceAccountsBulk(parentId, managedDeviceAccounts) {
    return this.request({
      path: `/system/members/${parentId}/managedDeviceAccounts/bulk`,
      method: 'delete',
      data: managedDeviceAccounts,
    })
  }

  /**
   * Put BulkResult
   * @param {number} parentId
   * @param {ManagedDeviceAccount[]} managedDeviceAccounts List of ManagedDeviceAccount
   * @returns {Promise<BulkResult>}
   */
  putSystemMembersByParentIdManagedDeviceAccountsBulk(parentId, managedDeviceAccounts) {
    return this.request({
      path: `/system/members/${parentId}/managedDeviceAccounts/bulk`,
      method: 'put',
      data: managedDeviceAccounts,
    })
  }
  /**
   * Get List of MemberCertification
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
   * @returns {Promise<MemberCertification[]>}
   */
  getSystemMembersByParentIdMycertifications(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/mycertifications`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MemberCertification
   * @param {number} parentId
   * @param {MemberCertification} memberCertification memberCertification
   * @returns {Promise<MemberCertification>}
   */
  postSystemMembersByParentIdMycertifications(parentId, memberCertification) {
    return this.request({
      path: `/system/members/${parentId}/mycertifications`,
      method: 'post',
      data: memberCertification,
    })
  }
  /**
   * Get MemberCertification
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
   * @returns {Promise<MemberCertification>}
   */
  getSystemMembersByParentIdMycertificationsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MemberCertification
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemMembersByParentIdMycertificationsById(id, parentId) {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put MemberCertification
   * @param {number} id
   * @param {number} parentId
   * @param {MemberCertification} memberCertification memberCertification
   * @returns {Promise<MemberCertification>}
   */
  putSystemMembersByParentIdMycertificationsById(id, parentId, memberCertification) {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/{id}`,
      method: 'put',
      data: memberCertification,
    })
  }

  /**
   * Patch MemberCertification
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MemberCertification>}
   */
  patchSystemMembersByParentIdMycertificationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of MemberCertification
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
  getSystemMembersByParentIdMycertificationsCount(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/mycertifications/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MemberNotificationSetting
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
   * @returns {Promise<MemberNotificationSetting[]>}
   */
  getSystemMembersByParentIdNotificationSettings(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MemberNotificationSetting
   * @param {number} parentId
   * @param {MemberNotificationSetting} memberNotificationSetting memberNotificationSetting
   * @returns {Promise<MemberNotificationSetting>}
   */
  postSystemMembersByParentIdNotificationSettings(parentId, memberNotificationSetting) {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings`,
      method: 'post',
      data: memberNotificationSetting,
    })
  }
  /**
   * Get MemberNotificationSetting
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
   * @returns {Promise<MemberNotificationSetting>}
   */
  getSystemMembersByParentIdNotificationSettingsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MemberNotificationSetting
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemMembersByParentIdNotificationSettingsById(id, parentId) {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put MemberNotificationSetting
   * @param {number} id
   * @param {number} parentId
   * @param {MemberNotificationSetting} memberNotificationSetting memberNotificationSetting
   * @returns {Promise<MemberNotificationSetting>}
   */
  putSystemMembersByParentIdNotificationSettingsById(id, parentId, memberNotificationSetting) {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/{id}`,
      method: 'put',
      data: memberNotificationSetting,
    })
  }

  /**
   * Patch MemberNotificationSetting
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MemberNotificationSetting>}
   */
  patchSystemMembersByParentIdNotificationSettingsById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of MemberNotificationSetting
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
  getSystemMembersByParentIdNotificationSettingsCount(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/notificationSettings/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MemberPersona
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
   * @returns {Promise<MemberPersona[]>}
   */
  getSystemMembersByParentIdPersonas(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/personas`,
      method: 'get',
      params,
    })
  }
  /**
   * Get MemberPersona
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
   * @returns {Promise<MemberPersona>}
   */
  getSystemMembersByParentIdPersonasById(id, parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/personas/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of MemberPersona
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
  getSystemMembersByParentIdPersonasCount(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/personas/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MemberSkill
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
   * @returns {Promise<MemberSkill[]>}
   */
  getSystemMembersByParentIdSkills(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/skills`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MemberSkill
   * @param {number} parentId
   * @param {MemberSkill} memberSkill memberSkill
   * @returns {Promise<MemberSkill>}
   */
  postSystemMembersByParentIdSkills(parentId, memberSkill) {
    return this.request({
      path: `/system/members/${parentId}/skills`,
      method: 'post',
      data: memberSkill,
    })
  }
  /**
   * Get MemberSkill
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
   * @returns {Promise<MemberSkill>}
   */
  getSystemMembersByParentIdSkillsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/skills/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MemberSkill
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemMembersByParentIdSkillsById(id, parentId) {
    return this.request({
      path: `/system/members/${parentId}/skills/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put MemberSkill
   * @param {number} id
   * @param {number} parentId
   * @param {MemberSkill} memberSkill memberSkill
   * @returns {Promise<MemberSkill>}
   */
  putSystemMembersByParentIdSkillsById(id, parentId, memberSkill) {
    return this.request({
      path: `/system/members/${parentId}/skills/{id}`,
      method: 'put',
      data: memberSkill,
    })
  }

  /**
   * Patch MemberSkill
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MemberSkill>}
   */
  patchSystemMembersByParentIdSkillsById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/members/${parentId}/skills/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of MemberSkill
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
  getSystemMembersByParentIdSkillsCount(parentId, params = {}) {
    return this.request({
      path: `/system/members/${parentId}/skills/count`,
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
  getSystemMembersCount(params = {}) {
    return this.request({
      path: `/system/members/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MemberType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<MemberType[]>}
   */
  getSystemMembersTypes(params = {}) {
    return this.request({
      path: `/system/members/types`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MemberType
   * @param {MemberType} type type
   * @returns {Promise<MemberType>}
   */
  postSystemMembersTypes(type) {
    return this.request({
      path: `/system/members/types`,
      method: 'post',
      data: type,
    })
  }
  /**
   * Get MemberType
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
   * @returns {Promise<MemberType>}
   */
  getSystemMembersTypesById(id, params = {}) {
    return this.request({
      path: `/system/members/types/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MemberType
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemMembersTypesById(id) {
    return this.request({
      path: `/system/members/types/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put MemberType
   * @param {number} id
   * @param {MemberType} type type
   * @returns {Promise<MemberType>}
   */
  putSystemMembersTypesById(id, type) {
    return this.request({
      path: `/system/members/types/${id}`,
      method: 'put',
      data: type,
    })
  }

  /**
   * Patch MemberType
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MemberType>}
   */
  patchSystemMembersTypesById(id, patchOperations) {
    return this.request({
      path: `/system/members/types/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get MemberType
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
   * @returns {Promise<MemberTypeInfo>}
   */
  getSystemMembersTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/system/members/types/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of MemberType
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
  getSystemMembersTypesCount(params = {}) {
    return this.request({
      path: `/system/members/types/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MemberType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<MemberTypeInfo[]>}
   */
  getSystemMembersTypesInfo(params = {}) {
    return this.request({
      path: `/system/members/types/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of MemberType
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
  getSystemMembersTypesInfoCount(params = {}) {
    return this.request({
      path: `/system/members/types/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Member
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Member[]>}
   */
  getSystemMembersWithSso(params = {}) {
    return this.request({
      path: `/system/members/withSso`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MenuEntry
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<MenuEntry[]>}
   */
  getSystemMenuentries(params = {}) {
    return this.request({
      path: `/system/menuentries`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MenuEntry
   * @param {MenuEntry} menuEntry menuEntry
   * @returns {Promise<MenuEntry>}
   */
  postSystemMenuentries(menuEntry) {
    return this.request({
      path: `/system/menuentries`,
      method: 'post',
      data: menuEntry,
    })
  }
  /**
   * Get MenuEntry
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
   * @returns {Promise<MenuEntry>}
   */
  getSystemMenuentriesById(id, params = {}) {
    return this.request({
      path: `/system/menuentries/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MenuEntry
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemMenuentriesById(id) {
    return this.request({
      path: `/system/menuentries/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put MenuEntry
   * @param {number} id
   * @param {MenuEntry} menuEntry menuEntry
   * @returns {Promise<MenuEntry>}
   */
  putSystemMenuentriesById(id, menuEntry) {
    return this.request({
      path: `/system/menuentries/${id}`,
      method: 'put',
      data: menuEntry,
    })
  }

  /**
   * Patch MenuEntry
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MenuEntry>}
   */
  patchSystemMenuentriesById(id, patchOperations) {
    return this.request({
      path: `/system/menuentries/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get MenuEntry
   * @param {number} id
   * @param {string} lastmodified
   * @param {boolean} largeFlag
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
  getSystemMenuentriesByIdImage(id, lastmodified, largeFlag, params = {}) {
    return this.request({
      path: `/system/menuentries/${id}/image`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MenuEntry
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  postSystemMenuentriesByIdImage(id) {
    return this.request({
      path: `/system/menuentries/${id}/image`,
      method: 'post',
    })
  }
  /**
   * Get List of MenuEntryLocation
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
   * @returns {Promise<MenuEntryLocation[]>}
   */
  getSystemMenuEntriesByParentIdLocations(parentId, params = {}) {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MenuEntryLocation
   * @param {number} parentId
   * @param {MenuEntryLocation} menuEntryLocation menuEntryLocation
   * @returns {Promise<MenuEntryLocation>}
   */
  postSystemMenuEntriesByParentIdLocations(parentId, menuEntryLocation) {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations`,
      method: 'post',
      data: menuEntryLocation,
    })
  }
  /**
   * Get MenuEntryLocation
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
   * @returns {Promise<MenuEntryLocation>}
   */
  getSystemMenuEntriesByParentIdLocationsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MenuEntryLocation
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemMenuEntriesByParentIdLocationsById(id, parentId) {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of MenuEntryLocation
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
  getSystemMenuEntriesByParentIdLocationsCount(parentId, params = {}) {
    return this.request({
      path: `/system/menuEntries/${parentId}/locations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of MenuEntry
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
  getSystemMenuentriesCount(params = {}) {
    return this.request({
      path: `/system/menuentries/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get MyAccount
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
   * @returns {Promise<MyAccount>}
   */
  getSystemMyAccountById(id, params = {}) {
    return this.request({
      path: `/system/myAccount/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put MyAccount
   * @param {number} id
   * @param {MyAccount} myAccount myAccount
   * @returns {Promise<MyAccount>}
   */
  putSystemMyAccountById(id, myAccount) {
    return this.request({
      path: `/system/myAccount/${id}`,
      method: 'put',
      data: myAccount,
    })
  }

  /**
   * Patch MyAccount
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MyAccount>}
   */
  patchSystemMyAccountById(id, patchOperations) {
    return this.request({
      path: `/system/myAccount/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of MemberDelegation
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
   * @returns {Promise<MemberDelegation[]>}
   */
  getSystemMyAccountByParentIdDelegations(parentId, params = {}) {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MemberDelegation
   * @param {number} parentId
   * @param {MemberDelegation} memberDelegation memberDelegation
   * @returns {Promise<MemberDelegation>}
   */
  postSystemMyAccountByParentIdDelegations(parentId, memberDelegation) {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations`,
      method: 'post',
      data: memberDelegation,
    })
  }
  /**
   * Get MemberDelegation
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
   * @returns {Promise<MemberDelegation>}
   */
  getSystemMyAccountByParentIdDelegationsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MemberDelegation
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemMyAccountByParentIdDelegationsById(id, parentId) {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put MemberDelegation
   * @param {number} id
   * @param {number} parentId
   * @param {MemberDelegation} memberDelegation memberDelegation
   * @returns {Promise<MemberDelegation>}
   */
  putSystemMyAccountByParentIdDelegationsById(id, parentId, memberDelegation) {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/{id}`,
      method: 'put',
      data: memberDelegation,
    })
  }

  /**
   * Patch MemberDelegation
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MemberDelegation>}
   */
  patchSystemMyAccountByParentIdDelegationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of MemberDelegation
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
  getSystemMyAccountByParentIdDelegationsCount(parentId, params = {}) {
    return this.request({
      path: `/system/myAccount/${parentId}/delegations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MemberSkill
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
   * @returns {Promise<MemberSkill[]>}
   */
  getSystemMyAccountByParentIdSkills(parentId, params = {}) {
    return this.request({
      path: `/system/myAccount/${parentId}/skills`,
      method: 'get',
      params,
    })
  }

  /**
   * Post MemberSkill
   * @param {number} parentId
   * @param {MemberSkill} memberSkill memberSkill
   * @returns {Promise<MemberSkill>}
   */
  postSystemMyAccountByParentIdSkills(parentId, memberSkill) {
    return this.request({
      path: `/system/myAccount/${parentId}/skills`,
      method: 'post',
      data: memberSkill,
    })
  }
  /**
   * Get MemberSkill
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
   * @returns {Promise<MemberSkill>}
   */
  getSystemMyAccountByParentIdSkillsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete MemberSkill
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemMyAccountByParentIdSkillsById(id, parentId) {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put MemberSkill
   * @param {number} id
   * @param {number} parentId
   * @param {MemberSkill} memberSkill memberSkill
   * @returns {Promise<MemberSkill>}
   */
  putSystemMyAccountByParentIdSkillsById(id, parentId, memberSkill) {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/{id}`,
      method: 'put',
      data: memberSkill,
    })
  }

  /**
   * Patch MemberSkill
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<MemberSkill>}
   */
  patchSystemMyAccountByParentIdSkillsById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of MemberSkill
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
  getSystemMyAccountByParentIdSkillsCount(parentId, params = {}) {
    return this.request({
      path: `/system/myAccount/${parentId}/skills/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CorporateStructure
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CorporateStructure[]>}
   */
  getSystemMyCompanyCorporateStructure(params = {}) {
    return this.request({
      path: `/system/myCompany/corporateStructure`,
      method: 'get',
      params,
    })
  }
  /**
   * Get CorporateStructure
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
   * @returns {Promise<CorporateStructure>}
   */
  getSystemMyCompanyCorporateStructureById(id, params = {}) {
    return this.request({
      path: `/system/myCompany/corporateStructure/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put CorporateStructure
   * @param {number} id
   * @param {CorporateStructure} corporateStructure corporateStructure
   * @returns {Promise<CorporateStructure>}
   */
  putSystemMyCompanyCorporateStructureById(id, corporateStructure) {
    return this.request({
      path: `/system/myCompany/corporateStructure/${id}`,
      method: 'put',
      data: corporateStructure,
    })
  }

  /**
   * Patch CorporateStructure
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<CorporateStructure>}
   */
  patchSystemMyCompanyCorporateStructureById(id, patchOperations) {
    return this.request({
      path: `/system/myCompany/corporateStructure/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get CorporateStructureInfos
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
   * @returns {Promise<CorporateStructureInfo>}
   */
  getSystemMyCompanyCorporateStructureByIdInfo(id, params = {}) {
    return this.request({
      path: `/system/myCompany/corporateStructure/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CorporateStructure
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
  getSystemMyCompanyCorporateStructureCount(params = {}) {
    return this.request({
      path: `/system/myCompany/corporateStructure/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CorporateStructureInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CorporateStructureInfo[]>}
   */
  getSystemMyCompanyCorporateStructureInfo(params = {}) {
    return this.request({
      path: `/system/myCompany/corporateStructure/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CorporateStructureInfos
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
  getSystemMyCompanyCorporateStructureInfoCount(params = {}) {
    return this.request({
      path: `/system/myCompany/corporateStructure/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CorporateStructureLevel
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CorporateStructureLevel[]>}
   */
  getSystemMyCompanyCorporateStructureLevels(params = {}) {
    return this.request({
      path: `/system/myCompany/corporateStructureLevels`,
      method: 'get',
      params,
    })
  }
  /**
   * Get CorporateStructureLevel
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
   * @returns {Promise<CorporateStructureLevel>}
   */
  getSystemMyCompanyCorporateStructureLevelsById(id, params = {}) {
    return this.request({
      path: `/system/myCompany/corporateStructureLevels/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CorporateStructureLevel
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
  getSystemMyCompanyCorporateStructureLevelsCount(params = {}) {
    return this.request({
      path: `/system/myCompany/corporateStructureLevels/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Crm
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Crm[]>}
   */
  getSystemMyCompanyCrm(params = {}) {
    return this.request({
      path: `/system/myCompany/crm`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Crm
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
   * @returns {Promise<Crm>}
   */
  getSystemMyCompanyCrmById(id, params = {}) {
    return this.request({
      path: `/system/myCompany/crm/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put Crm
   * @param {number} id
   * @param {Crm} crm crm
   * @returns {Promise<Crm>}
   */
  putSystemMyCompanyCrmById(id, crm) {
    return this.request({
      path: `/system/myCompany/crm/${id}`,
      method: 'put',
      data: crm,
    })
  }

  /**
   * Patch Crm
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Crm>}
   */
  patchSystemMyCompanyCrmById(id, patchOperations) {
    return this.request({
      path: `/system/myCompany/crm/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get CrmInfos
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
   * @returns {Promise<CrmInfo>}
   */
  getSystemMyCompanyCrmByIdInfo(id, params = {}) {
    return this.request({
      path: `/system/myCompany/crm/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Crm
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
  getSystemMyCompanyCrmCount(params = {}) {
    return this.request({
      path: `/system/myCompany/crm/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of CrmInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<CrmInfo[]>}
   */
  getSystemMyCompanyCrmInfo(params = {}) {
    return this.request({
      path: `/system/myCompany/crm/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of CrmInfos
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
  getSystemMyCompanyCrmInfoCount(params = {}) {
    return this.request({
      path: `/system/myCompany/crm/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of DocumentSetup
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<DocumentSetup[]>}
   */
  getSystemMycompanyDocuments(params = {}) {
    return this.request({
      path: `/system/mycompany/documents`,
      method: 'get',
      params,
    })
  }
  /**
   * Get DocumentSetup
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
   * @returns {Promise<DocumentSetup>}
   */
  getSystemMycompanyDocumentsById(id, params = {}) {
    return this.request({
      path: `/system/mycompany/documents/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put DocumentSetup
   * @param {number} id
   * @param {DocumentSetup} document document
   * @returns {Promise<DocumentSetup>}
   */
  putSystemMycompanyDocumentsById(id, document) {
    return this.request({
      path: `/system/mycompany/documents/${id}`,
      method: 'put',
      data: document,
    })
  }

  /**
   * Patch DocumentSetup
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<DocumentSetup>}
   */
  patchSystemMycompanyDocumentsById(id, patchOperations) {
    return this.request({
      path: `/system/mycompany/documents/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of ServiceInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceInfo[]>}
   */
  getSystemMycompanyInfoServices(params = {}) {
    return this.request({
      path: `/system/mycompany/info/services`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ServiceInfo
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
   * @returns {Promise<ServiceInfo>}
   */
  getSystemMycompanyInfoServicesById(id, params = {}) {
    return this.request({
      path: `/system/mycompany/info/services/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Other
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Other[]>}
   */
  getSystemMyCompanyOther(params = {}) {
    return this.request({
      path: `/system/myCompany/other`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Other
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
   * @returns {Promise<Other>}
   */
  getSystemMyCompanyOtherById(id, params = {}) {
    return this.request({
      path: `/system/myCompany/other/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put Other
   * @param {number} id
   * @param {Other} other other
   * @returns {Promise<Other>}
   */
  putSystemMyCompanyOtherById(id, other) {
    return this.request({
      path: `/system/myCompany/other/${id}`,
      method: 'put',
      data: other,
    })
  }

  /**
   * Patch Other
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Other>}
   */
  patchSystemMyCompanyOtherById(id, patchOperations) {
    return this.request({
      path: `/system/myCompany/other/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of Other
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
  getSystemMyCompanyOtherCount(params = {}) {
    return this.request({
      path: `/system/myCompany/other/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ReportingService
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ReportingService[]>}
   */
  getSystemMycompanyReportingServices(params = {}) {
    return this.request({
      path: `/system/mycompany/reportingServices`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ReportingService
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
   * @returns {Promise<ReportingService>}
   */
  getSystemMycompanyReportingServicesById(id, params = {}) {
    return this.request({
      path: `/system/mycompany/reportingServices/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put ReportingService
   * @param {number} id
   * @param {ReportingService} service service
   * @returns {Promise<ReportingService>}
   */
  putSystemMycompanyReportingServicesById(id, service) {
    return this.request({
      path: `/system/mycompany/reportingServices/${id}`,
      method: 'put',
      data: service,
    })
  }

  /**
   * Patch ReportingService
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ReportingService>}
   */
  patchSystemMycompanyReportingServicesById(id, patchOperations) {
    return this.request({
      path: `/system/mycompany/reportingServices/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @returns {Promise<SuccessResponse>}
   */
  postSystemMycompanyReportingServicesByIdTestConnection(id) {
    return this.request({
      path: `/system/mycompany/reportingServices/${id}/testConnection`,
      method: 'post',
    })
  }
  /**
   * Get List of MyCompanyService
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Service[]>}
   */
  getSystemMycompanyServices(params = {}) {
    return this.request({
      path: `/system/mycompany/services`,
      method: 'get',
      params,
    })
  }
  /**
   * Get MyCompanyService
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
   * @returns {Promise<Service>}
   */
  getSystemMycompanyServicesById(id, params = {}) {
    return this.request({
      path: `/system/mycompany/services/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put MyCompanyService
   * @param {number} id
   * @param {Service} service service
   * @returns {Promise<Service>}
   */
  putSystemMycompanyServicesById(id, service) {
    return this.request({
      path: `/system/mycompany/services/${id}`,
      method: 'put',
      data: service,
    })
  }

  /**
   * Patch MyCompanyService
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Service>}
   */
  patchSystemMycompanyServicesById(id, patchOperations) {
    return this.request({
      path: `/system/mycompany/services/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of TimeExpense
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TimeExpense[]>}
   */
  getSystemMyCompanyTimeExpense(params = {}) {
    return this.request({
      path: `/system/myCompany/timeExpense`,
      method: 'get',
      params,
    })
  }
  /**
   * Get TimeExpense
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
   * @returns {Promise<TimeExpense>}
   */
  getSystemMyCompanyTimeExpenseById(id, params = {}) {
    return this.request({
      path: `/system/myCompany/timeExpense/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put TimeExpense
   * @param {number} id
   * @param {TimeExpense} timeExpense timeExpense
   * @returns {Promise<TimeExpense>}
   */
  putSystemMyCompanyTimeExpenseById(id, timeExpense) {
    return this.request({
      path: `/system/myCompany/timeExpense/${id}`,
      method: 'put',
      data: timeExpense,
    })
  }

  /**
   * Patch TimeExpense
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TimeExpense>}
   */
  patchSystemMyCompanyTimeExpenseById(id, patchOperations) {
    return this.request({
      path: `/system/myCompany/timeExpense/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of TimeExpense
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
  getSystemMyCompanyTimeExpenseCount(params = {}) {
    return this.request({
      path: `/system/myCompany/timeExpense/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get MyMember
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<MyMember>}
   */
  getSystemMyMembers(params = {}) {
    return this.request({
      path: `/system/myMembers`,
      method: 'get',
      params,
    })
  }
  /**
   * Get MyMemberInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<MyMemberInfo>}
   */
  getSystemMyMembersInfo(params = {}) {
    return this.request({
      path: `/system/myMembers/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MySecurity
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<MySecurity[]>}
   */
  getSystemMySecurity(params = {}) {
    return this.request({
      path: `/system/mySecurity`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of MySecurityCustomizeItems
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<MySecurityCustomizeItem[]>}
   */
  getSystemMySecurityCustomizeItems(params = {}) {
    return this.request({
      path: `/system/mySecurity/customizeItems/`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of NotificationRecipient
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<NotificationRecipient[]>}
   */
  getSystemNotificationRecipients(params = {}) {
    return this.request({
      path: `/system/notificationRecipients`,
      method: 'get',
      params,
    })
  }
  /**
   * Get NotificationRecipient
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
   * @returns {Promise<NotificationRecipient>}
   */
  getSystemNotificationRecipientsById(id, params = {}) {
    return this.request({
      path: `/system/notificationRecipients/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of NotificationRecipient
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
  getSystemNotificationRecipientsCount(params = {}) {
    return this.request({
      path: `/system/notificationRecipients/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Office365EmailSetup
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Office365EmailSetup[]>}
   */
  getSystemOffice365EmailSetups(params = {}) {
    return this.request({
      path: `/system/office365/emailSetups`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Office365EmailSetup
   * @param {Office365EmailSetup} entity entity
   * @returns {Promise<Office365EmailSetup>}
   */
  postSystemOffice365EmailSetups(entity) {
    return this.request({
      path: `/system/office365/emailSetups`,
      method: 'post',
      data: entity,
    })
  }
  /**
   * Get Office365EmailSetup
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
   * @returns {Promise<Office365EmailSetup>}
   */
  getSystemOffice365EmailSetupsById(id, params = {}) {
    return this.request({
      path: `/system/office365/emailSetups/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Office365EmailSetup
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemOffice365EmailSetupsById(id) {
    return this.request({
      path: `/system/office365/emailSetups/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Office365EmailSetup
   * @param {number} id
   * @param {Office365EmailSetup} entity entity
   * @returns {Promise<Office365EmailSetup>}
   */
  putSystemOffice365EmailSetupsById(id, entity) {
    return this.request({
      path: `/system/office365/emailSetups/${id}`,
      method: 'put',
      data: entity,
    })
  }

  /**
   * Patch Office365EmailSetup
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Office365EmailSetup>}
   */
  patchSystemOffice365EmailSetupsById(id, patchOperations) {
    return this.request({
      path: `/system/office365/emailSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @returns {Promise<SuccessResponse>}
   */
  postSystemOffice365EmailSetupsByIdAuthorize(id) {
    return this.request({
      path: `/system/office365/emailSetups/${id}/authorize`,
      method: 'post',
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} id
   * @returns {Promise<SuccessResponse>}
   */
  postSystemOffice365EmailSetupsByIdTestConnection(id) {
    return this.request({
      path: `/system/office365/emailSetups/${id}/testConnection`,
      method: 'post',
    })
  }
  /**
   * Get Count of Office365EmailSetup
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
  getSystemOffice365EmailSetupsCount(params = {}) {
    return this.request({
      path: `/system/office365/emailSetups/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of OsGradeWeight
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<OsGradeWeight[]>}
   */
  getSystemOsgradeweights(params = {}) {
    return this.request({
      path: `/system/osgradeweights`,
      method: 'get',
      params,
    })
  }
  /**
   * Get OsGradeWeight
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
   * @returns {Promise<OsGradeWeight>}
   */
  getSystemOsgradeweightsById(id, params = {}) {
    return this.request({
      path: `/system/osgradeweights/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put OsGradeWeight
   * @param {number} id
   * @param {OsGradeWeight} osGradeWeight osGradeWeight
   * @returns {Promise<OsGradeWeight>}
   */
  putSystemOsgradeweightsById(id, osGradeWeight) {
    return this.request({
      path: `/system/osgradeweights/${id}`,
      method: 'put',
      data: osGradeWeight,
    })
  }

  /**
   * Patch OsGradeWeight
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<OsGradeWeight>}
   */
  patchSystemOsgradeweightsById(id, patchOperations) {
    return this.request({
      path: `/system/osgradeweights/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of OsGradeWeight
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
  getSystemOsgradeweightsCount(params = {}) {
    return this.request({
      path: `/system/osgradeweights/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ParsingType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ParsingType[]>}
   */
  getSystemParsingTypes(params = {}) {
    return this.request({
      path: `/system/parsingTypes`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ParsingType
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
   * @returns {Promise<ParsingType>}
   */
  getSystemParsingTypesById(id, params = {}) {
    return this.request({
      path: `/system/parsingTypes/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ParsingType
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
  getSystemParsingTypesCount(params = {}) {
    return this.request({
      path: `/system/parsingTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ParsingVariable
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ParsingVariable[]>}
   */
  getSystemParsingVariables(params = {}) {
    return this.request({
      path: `/system/parsingVariables`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ParsingVariable
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
   * @returns {Promise<ParsingVariable>}
   */
  getSystemParsingVariablesById(id, params = {}) {
    return this.request({
      path: `/system/parsingVariables/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ParsingVariable
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
  getSystemParsingVariablesCount(params = {}) {
    return this.request({
      path: `/system/parsingVariables/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PortalReport
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PortalReport[]>}
   */
  getSystemPortalReports(params = {}) {
    return this.request({
      path: `/system/portalReports`,
      method: 'get',
      params,
    })
  }

  /**
   * Post PortalReport
   * @param {PortalReport} portalReport portalReport
   * @returns {Promise<PortalReport>}
   */
  postSystemPortalReports(portalReport) {
    return this.request({
      path: `/system/portalReports`,
      method: 'post',
      data: portalReport,
    })
  }
  /**
   * Get PortalReport
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
   * @returns {Promise<PortalReport>}
   */
  getSystemPortalReportsById(id, params = {}) {
    return this.request({
      path: `/system/portalReports/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete PortalReport
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemPortalReportsById(id) {
    return this.request({
      path: `/system/portalReports/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put PortalReport
   * @param {number} id
   * @param {PortalReport} portalReport portalReport
   * @returns {Promise<PortalReport>}
   */
  putSystemPortalReportsById(id, portalReport) {
    return this.request({
      path: `/system/portalReports/${id}`,
      method: 'put',
      data: portalReport,
    })
  }

  /**
   * Patch PortalReport
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<PortalReport>}
   */
  patchSystemPortalReportsById(id, patchOperations) {
    return this.request({
      path: `/system/portalReports/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of PortalReport
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
  getSystemPortalReportsCount(params = {}) {
    return this.request({
      path: `/system/portalReports/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of QuoteLink
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<QuoteLink[]>}
   */
  getSystemQuoteLinkSetup(params = {}) {
    return this.request({
      path: `/system/quoteLinkSetup`,
      method: 'get',
      params,
    })
  }

  /**
   * Post QuoteLink
   * @param {QuoteLink} quoteLink quoteLink
   * @returns {Promise<QuoteLink>}
   */
  postSystemQuoteLinkSetup(quoteLink) {
    return this.request({
      path: `/system/quoteLinkSetup`,
      method: 'post',
      data: quoteLink,
    })
  }
  /**
   * Get QuoteLink
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
   * @returns {Promise<QuoteLink>}
   */
  getSystemQuoteLinkSetupById(id, params = {}) {
    return this.request({
      path: `/system/quoteLinkSetup/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete QuoteLink
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemQuoteLinkSetupById(id) {
    return this.request({
      path: `/system/quoteLinkSetup/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put QuoteLink
   * @param {number} id
   * @param {QuoteLink} quoteLink quoteLink
   * @returns {Promise<QuoteLink>}
   */
  putSystemQuoteLinkSetupById(id, quoteLink) {
    return this.request({
      path: `/system/quoteLinkSetup/${id}`,
      method: 'put',
      data: quoteLink,
    })
  }

  /**
   * Patch QuoteLink
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<QuoteLink>}
   */
  patchSystemQuoteLinkSetupById(id, patchOperations) {
    return this.request({
      path: `/system/quoteLinkSetup/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of QuoteLink
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
  getSystemQuoteLinkSetupCount(params = {}) {
    return this.request({
      path: `/system/quoteLinkSetup/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get SuccessResponse
   * @param {string} url
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SuccessResponse>}
   */
  getSystemQuoteLinkSetupTestConnection(url, params = {}) {
    return this.request({
      path: `/system/quoteLinkSetup/testConnection`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ReportCard
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ReportCard[]>}
   */
  getSystemReportCards(params = {}) {
    return this.request({
      path: `/system/reportCards`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ReportCard
   * @param {ReportCard} reportCard reportCard
   * @returns {Promise<ReportCard>}
   */
  postSystemReportCards(reportCard) {
    return this.request({
      path: `/system/reportCards`,
      method: 'post',
      data: reportCard,
    })
  }
  /**
   * Get ReportCard
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
   * @returns {Promise<ReportCard>}
   */
  getSystemReportCardsById(id, params = {}) {
    return this.request({
      path: `/system/reportCards/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ReportCard
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemReportCardsById(id) {
    return this.request({
      path: `/system/reportCards/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ReportCard
   * @param {number} id
   * @param {ReportCard} reportCard reportCard
   * @returns {Promise<ReportCard>}
   */
  putSystemReportCardsById(id, reportCard) {
    return this.request({
      path: `/system/reportCards/${id}`,
      method: 'put',
      data: reportCard,
    })
  }

  /**
   * Patch ReportCard
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ReportCard>}
   */
  patchSystemReportCardsById(id, patchOperations) {
    return this.request({
      path: `/system/reportCards/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ReportCardInfo
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
   * @returns {Promise<ReportCardInfo>}
   */
  getSystemReportCardsByIdInfo(id, params = {}) {
    return this.request({
      path: `/system/reportCards/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ReportCardDetail
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
   * @returns {Promise<ReportCardDetail[]>}
   */
  getSystemReportCardsByParentIdDetails(parentId, params = {}) {
    return this.request({
      path: `/system/reportCards/${parentId}/details`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ReportCardDetail
   * @param {number} parentId
   * @param {ReportCardDetail} reportCardDetail reportCardDetail
   * @returns {Promise<ReportCardDetail>}
   */
  postSystemReportCardsByParentIdDetails(parentId, reportCardDetail) {
    return this.request({
      path: `/system/reportCards/${parentId}/details`,
      method: 'post',
      data: reportCardDetail,
    })
  }
  /**
   * Get ReportCardDetail
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
   * @returns {Promise<ReportCardDetail>}
   */
  getSystemReportCardsByParentIdDetailsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/reportCards/${parentId}/details/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ReportCardDetail
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemReportCardsByParentIdDetailsById(id, parentId) {
    return this.request({
      path: `/system/reportCards/${parentId}/details/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ReportCardDetail
   * @param {number} id
   * @param {number} parentId
   * @param {ReportCardDetail} reportCardDetail reportCardDetail
   * @returns {Promise<ReportCardDetail>}
   */
  putSystemReportCardsByParentIdDetailsById(id, parentId, reportCardDetail) {
    return this.request({
      path: `/system/reportCards/${parentId}/details/{id}`,
      method: 'put',
      data: reportCardDetail,
    })
  }

  /**
   * Patch ReportCardDetail
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ReportCardDetail>}
   */
  patchSystemReportCardsByParentIdDetailsById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/reportCards/${parentId}/details/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ReportCardDetail
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
  getSystemReportCardsByParentIdDetailsCount(parentId, params = {}) {
    return this.request({
      path: `/system/reportCards/${parentId}/details/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ReportCard
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
  getSystemReportCardsCount(params = {}) {
    return this.request({
      path: `/system/reportCards/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ReportCardInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ReportCardInfo[]>}
   */
  getSystemReportCardsInfo(params = {}) {
    return this.request({
      path: `/system/reportCards/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ReportCardInfo
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
  getSystemReportCardsInfoCount(params = {}) {
    return this.request({
      path: `/system/reportCards/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Report
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Report[]>}
   */
  getSystemReports(params = {}) {
    return this.request({
      path: `/system/reports`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ReportDataResponse
   * @param {string} reportName
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ReportDataResponse>}
   */
  getSystemReportsByReportName(reportName, params = {}) {
    return this.request({
      path: `/system/reports/${reportName}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of JObject
   * @param {string} reportName
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ReportColumnDefinition[]>}
   */
  getSystemReportsByReportNameColumns(reportName, params = {}) {
    return this.request({
      path: `/system/reports/${reportName}/columns`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ReportDataResponse
   * @param {string} reportName
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
  getSystemReportsByReportNameCount(reportName, params = {}) {
    return this.request({
      path: `/system/reports/${reportName}/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SecurityRole
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SecurityRole[]>}
   */
  getSystemSecurityroles(params = {}) {
    return this.request({
      path: `/system/securityroles`,
      method: 'get',
      params,
    })
  }

  /**
   * Post SecurityRole
   * @param {SecurityRole} securityRole securityRole
   * @returns {Promise<SecurityRole>}
   */
  postSystemSecurityroles(securityRole) {
    return this.request({
      path: `/system/securityroles`,
      method: 'post',
      data: securityRole,
    })
  }
  /**
   * Get SecurityRole
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
   * @returns {Promise<SecurityRole>}
   */
  getSystemSecurityrolesById(id, params = {}) {
    return this.request({
      path: `/system/securityroles/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete SecurityRole
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemSecurityrolesById(id) {
    return this.request({
      path: `/system/securityroles/${id}`,
      method: 'delete',
    })
  }
  /**
   * Get SecurityRoleInfo
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
   * @returns {Promise<SecurityRoleInfo>}
   */
  getSystemSecurityrolesByIdInfo(id, params = {}) {
    return this.request({
      path: `/system/securityroles/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SecurityRoleSetting
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
   * @returns {Promise<SecurityRoleSetting[]>}
   */
  getSystemSecurityRolesByParentIdSettings(parentId, params = {}) {
    return this.request({
      path: `/system/securityRoles/${parentId}/settings`,
      method: 'get',
      params,
    })
  }
  /**
   * Get SecurityRoleSetting
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
   * @returns {Promise<SecurityRoleSetting>}
   */
  getSystemSecurityRolesByParentIdSettingsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/securityRoles/${parentId}/settings/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SecurityRoleSetting
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
  getSystemSecurityRolesByParentIdSettingsCount(parentId, params = {}) {
    return this.request({
      path: `/system/securityRoles/${parentId}/settings/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SecurityRole
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
  getSystemSecurityrolesCount(params = {}) {
    return this.request({
      path: `/system/securityroles/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SecurityRoleInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SecurityRoleInfo[]>}
   */
  getSystemSecurityrolesInfo(params = {}) {
    return this.request({
      path: `/system/securityroles/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SecurityRoleInfo
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
  getSystemSecurityrolesInfoCount(params = {}) {
    return this.request({
      path: `/system/securityroles/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SystemSetting
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SystemSetting[]>}
   */
  getSystemSettings(params = {}) {
    return this.request({
      path: `/system/settings`,
      method: 'get',
      params,
    })
  }
  /**
   * Get SystemSetting
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
   * @returns {Promise<SystemSetting>}
   */
  getSystemSettingsById(id, params = {}) {
    return this.request({
      path: `/system/settings/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put SystemSetting
   * @param {number} id
   * @param {SystemSetting} systemSetting systemSetting
   * @returns {Promise<SystemSetting>}
   */
  putSystemSettingsById(id, systemSetting) {
    return this.request({
      path: `/system/settings/${id}`,
      method: 'put',
      data: systemSetting,
    })
  }

  /**
   * Patch SystemSetting
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<SystemSetting>}
   */
  patchSystemSettingsById(id, patchOperations) {
    return this.request({
      path: `/system/settings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of SystemSetting
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
  getSystemSettingsCount(params = {}) {
    return this.request({
      path: `/system/settings/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SetupScreen
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SetupScreen[]>}
   */
  getSystemSetupScreens(params = {}) {
    return this.request({
      path: `/system/setupScreens`,
      method: 'get',
      params,
    })
  }
  /**
   * Get SetupScreen
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
   * @returns {Promise<SetupScreen>}
   */
  getSystemSetupScreensById(id, params = {}) {
    return this.request({
      path: `/system/setupScreens/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SetupScreen
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
  getSystemSetupScreensCount(params = {}) {
    return this.request({
      path: `/system/setupScreens/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SkillCategory
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SkillCategory[]>}
   */
  getSystemSkillCategories(params = {}) {
    return this.request({
      path: `/system/skillCategories`,
      method: 'get',
      params,
    })
  }

  /**
   * Post SkillCategory
   * @param {SkillCategory} skillCategory skillCategory
   * @returns {Promise<SkillCategory>}
   */
  postSystemSkillCategories(skillCategory) {
    return this.request({
      path: `/system/skillCategories`,
      method: 'post',
      data: skillCategory,
    })
  }
  /**
   * Get SkillCategory
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
   * @returns {Promise<SkillCategory>}
   */
  getSystemSkillCategoriesById(id, params = {}) {
    return this.request({
      path: `/system/skillCategories/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete SkillCategory
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemSkillCategoriesById(id) {
    return this.request({
      path: `/system/skillCategories/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put SkillCategory
   * @param {number} id
   * @param {SkillCategory} skillCategory skillCategory
   * @returns {Promise<SkillCategory>}
   */
  putSystemSkillCategoriesById(id, skillCategory) {
    return this.request({
      path: `/system/skillCategories/${id}`,
      method: 'put',
      data: skillCategory,
    })
  }

  /**
   * Patch SkillCategory
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<SkillCategory>}
   */
  patchSystemSkillCategoriesById(id, patchOperations) {
    return this.request({
      path: `/system/skillCategories/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of SkillCategory
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
  getSystemSkillCategoriesCount(params = {}) {
    return this.request({
      path: `/system/skillCategories/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Skill
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Skill[]>}
   */
  getSystemSkills(params = {}) {
    return this.request({
      path: `/system/skills`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Skill
   * @param {Skill} skill skill
   * @returns {Promise<Skill>}
   */
  postSystemSkills(skill) {
    return this.request({
      path: `/system/skills`,
      method: 'post',
      data: skill,
    })
  }
  /**
   * Get Skill
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
   * @returns {Promise<Skill>}
   */
  getSystemSkillsById(id, params = {}) {
    return this.request({
      path: `/system/skills/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Skill
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemSkillsById(id) {
    return this.request({
      path: `/system/skills/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Skill
   * @param {number} id
   * @param {Skill} skill skill
   * @returns {Promise<Skill>}
   */
  putSystemSkillsById(id, skill) {
    return this.request({
      path: `/system/skills/${id}`,
      method: 'put',
      data: skill,
    })
  }

  /**
   * Patch Skill
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Skill>}
   */
  patchSystemSkillsById(id, patchOperations) {
    return this.request({
      path: `/system/skills/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get SkillInfos
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
   * @returns {Promise<SkillInfo>}
   */
  getSystemSkillsByIdInfo(id, params = {}) {
    return this.request({
      path: `/system/skills/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Skill
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
  getSystemSkillsCount(params = {}) {
    return this.request({
      path: `/system/skills/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SkillInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SkillInfo[]>}
   */
  getSystemSkillsInfo(params = {}) {
    return this.request({
      path: `/system/skills/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SkillInfos
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
  getSystemSkillsInfoCount(params = {}) {
    return this.request({
      path: `/system/skills/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SsoConfiguration
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SsoConfiguration[]>}
   */
  getSystemSsoConfigurations(params = {}) {
    return this.request({
      path: `/system/ssoConfigurations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post SsoConfiguration
   * @param {SsoConfiguration} ssoConfiguration ssoConfiguration
   * @returns {Promise<SsoConfiguration>}
   */
  postSystemSsoConfigurations(ssoConfiguration) {
    return this.request({
      path: `/system/ssoConfigurations`,
      method: 'post',
      data: ssoConfiguration,
    })
  }
  /**
   * Get SsoConfiguration
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
   * @returns {Promise<SsoConfiguration>}
   */
  getSystemSsoConfigurationsById(id, params = {}) {
    return this.request({
      path: `/system/ssoConfigurations/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put SsoConfiguration
   * @param {number} id
   * @param {SsoConfiguration} ssoConfiguration ssoConfiguration
   * @returns {Promise<SsoConfiguration>}
   */
  putSystemSsoConfigurationsById(id, ssoConfiguration) {
    return this.request({
      path: `/system/ssoConfigurations/${id}`,
      method: 'put',
      data: ssoConfiguration,
    })
  }

  /**
   * Patch SsoConfiguration
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<SsoConfiguration>}
   */
  patchSystemSsoConfigurationsById(id, patchOperations) {
    return this.request({
      path: `/system/ssoConfigurations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  /**
   * Delete SsoConfiguration
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemSsoConfigurationsById(id) {
    return this.request({
      path: `/system/ssoConfigurations/${id}`,
      method: 'delete',
    })
  }
  /**
   * Post SsoConfiguration
   * @param {number} id
   * @param {SsoConfiguration} ssoConfiguration ssoConfiguration
   * @returns {Promise<SsoConfiguration>}
   */
  postSystemSsoConfigurationsByIdRegistertoken(id, ssoConfiguration) {
    return this.request({
      path: `/system/ssoConfigurations/${id}/registertoken`,
      method: 'post',
      data: ssoConfiguration,
    })
  }
  /**
   * Post SsoConfiguration
   * @param {number} id
   * @param {SsoConfiguration} ssoConfiguration ssoConfiguration
   * @returns {Promise<SsoConfiguration>}
   */
  postSystemSsoConfigurationsByIdSubmitmembers(id, ssoConfiguration) {
    return this.request({
      path: `/system/ssoConfigurations/${id}/submitmembers`,
      method: 'post',
      data: ssoConfiguration,
    })
  }
  /**
   * Get Count of SsoConfiguration
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
  getSystemSsoConfigurationsCount(params = {}) {
    return this.request({
      path: `/system/ssoConfigurations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SsoUser
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SsoUser[]>}
   */
  getSystemSsoUsers(params = {}) {
    return this.request({
      path: `/system/ssoUsers`,
      method: 'get',
      params,
    })
  }
  /**
   * Get SsoUser
   * @param {number} externalId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SsoUser>}
   */
  getSystemSsoUsersByExternalId(externalId, params = {}) {
    return this.request({
      path: `/system/ssoUsers/${externalId}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SsoUser
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
  getSystemSsoUsersCount(params = {}) {
    return this.request({
      path: `/system/ssoUsers/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of StandardNote
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<StandardNote[]>}
   */
  getSystemStandardNotes(params = {}) {
    return this.request({
      path: `/system/standardNotes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post StandardNote
   * @param {StandardNote} standardNote standardNote
   * @returns {Promise<StandardNote>}
   */
  postSystemStandardNotes(standardNote) {
    return this.request({
      path: `/system/standardNotes`,
      method: 'post',
      data: standardNote,
    })
  }
  /**
   * Get StandardNote
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
   * @returns {Promise<StandardNote>}
   */
  getSystemStandardNotesById(id, params = {}) {
    return this.request({
      path: `/system/standardNotes/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete StandardNote
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemStandardNotesById(id) {
    return this.request({
      path: `/system/standardNotes/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put StandardNote
   * @param {number} id
   * @param {StandardNote} standardNote standardNote
   * @returns {Promise<StandardNote>}
   */
  putSystemStandardNotesById(id, standardNote) {
    return this.request({
      path: `/system/standardNotes/${id}`,
      method: 'put',
      data: standardNote,
    })
  }

  /**
   * Patch StandardNote
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<StandardNote>}
   */
  patchSystemStandardNotesById(id, patchOperations) {
    return this.request({
      path: `/system/standardNotes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of StandardNote
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
  getSystemStandardNotesCount(params = {}) {
    return this.request({
      path: `/system/standardNotes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Survey
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Survey[]>}
   */
  getSystemSurveys(params = {}) {
    return this.request({
      path: `/system/surveys`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Survey
   * @param {Survey} survey survey
   * @returns {Promise<Survey>}
   */
  postSystemSurveys(survey) {
    return this.request({
      path: `/system/surveys`,
      method: 'post',
      data: survey,
    })
  }
  /**
   * Get List of SurveyQuestionValue
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
   * @returns {Promise<SurveyQuestionValue[]>}
   */
  getSystemSurveysByGrandparentIdQuestionsByParentIdValues(parentId, grandparentId, params = {}) {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/{parentId}/values`,
      method: 'get',
      params,
    })
  }

  /**
   * Post SurveyQuestionValue
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {SurveyQuestionValue} surveyQuestionValue surveyQuestionValue
   * @returns {Promise<SurveyQuestionValue>}
   */
  postSystemSurveysByGrandparentIdQuestionsByParentIdValues(
    parentId,
    grandparentId,
    surveyQuestionValue,
  ) {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/{parentId}/values`,
      method: 'post',
      data: surveyQuestionValue,
    })
  }
  /**
   * Get SurveyQuestionValue
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
   * @returns {Promise<SurveyQuestionValue>}
   */
  getSystemSurveysByGrandparentIdQuestionsByParentIdValuesById(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/{parentId}/values/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete SurveyQuestionValue
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemSurveysByGrandparentIdQuestionsByParentIdValuesById(id, parentId, grandparentId) {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/{parentId}/values/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put SurveyQuestionValue
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {SurveyQuestionValue} surveyQuestionValue surveyQuestionValue
   * @returns {Promise<SurveyQuestionValue>}
   */
  putSystemSurveysByGrandparentIdQuestionsByParentIdValuesById(
    id,
    parentId,
    grandparentId,
    surveyQuestionValue,
  ) {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/{parentId}/values/{id}`,
      method: 'put',
      data: surveyQuestionValue,
    })
  }

  /**
   * Patch SurveyQuestionValue
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<SurveyQuestionValue>}
   */
  patchSystemSurveysByGrandparentIdQuestionsByParentIdValuesById(
    id,
    parentId,
    grandparentId,
    patchOperations,
  ) {
    return this.request({
      path: `/system/surveys/${grandparentId}/questions/{parentId}/values/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Survey
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
   * @returns {Promise<Survey>}
   */
  getSystemSurveysById(id, params = {}) {
    return this.request({
      path: `/system/surveys/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Survey
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemSurveysById(id) {
    return this.request({
      path: `/system/surveys/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Survey
   * @param {number} id
   * @param {Survey} survey survey
   * @returns {Promise<Survey>}
   */
  putSystemSurveysById(id, survey) {
    return this.request({
      path: `/system/surveys/${id}`,
      method: 'put',
      data: survey,
    })
  }

  /**
   * Patch Survey
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Survey>}
   */
  patchSystemSurveysById(id, patchOperations) {
    return this.request({
      path: `/system/surveys/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post Survey
   * @param {number} id
   * @returns {Promise<Survey>}
   */
  postSystemSurveysByIdCopy(id) {
    return this.request({
      path: `/system/surveys/${id}/copy`,
      method: 'post',
    })
  }
  /**
   * Get Survey
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
   * @returns {Promise<SurveyInfo>}
   */
  getSystemSurveysByIdInfo(id, params = {}) {
    return this.request({
      path: `/system/surveys/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SurveyQuestion
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
   * @returns {Promise<SurveyQuestion[]>}
   */
  getSystemSurveysByParentIdQuestions(parentId, params = {}) {
    return this.request({
      path: `/system/surveys/${parentId}/questions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post SurveyQuestion
   * @param {number} parentId
   * @param {SurveyQuestion} surveyQuestion surveyQuestion
   * @returns {Promise<SurveyQuestion>}
   */
  postSystemSurveysByParentIdQuestions(parentId, surveyQuestion) {
    return this.request({
      path: `/system/surveys/${parentId}/questions`,
      method: 'post',
      data: surveyQuestion,
    })
  }
  /**
   * Get SurveyQuestion
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
   * @returns {Promise<SurveyQuestion>}
   */
  getSystemSurveysByParentIdQuestionsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/surveys/${parentId}/questions/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete SurveyQuestion
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemSurveysByParentIdQuestionsById(id, parentId) {
    return this.request({
      path: `/system/surveys/${parentId}/questions/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put SurveyQuestion
   * @param {number} id
   * @param {number} parentId
   * @param {SurveyQuestion} surveyQuestion surveyQuestion
   * @returns {Promise<SurveyQuestion>}
   */
  putSystemSurveysByParentIdQuestionsById(id, parentId, surveyQuestion) {
    return this.request({
      path: `/system/surveys/${parentId}/questions/{id}`,
      method: 'put',
      data: surveyQuestion,
    })
  }

  /**
   * Patch SurveyQuestion
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<SurveyQuestion>}
   */
  patchSystemSurveysByParentIdQuestionsById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/surveys/${parentId}/questions/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of SurveyQuestion
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
  getSystemSurveysByParentIdQuestionsCount(parentId, params = {}) {
    return this.request({
      path: `/system/surveys/${parentId}/questions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Survey
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
  getSystemSurveysCount(params = {}) {
    return this.request({
      path: `/system/surveys/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SurveyInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SurveyInfo[]>}
   */
  getSystemSurveysInfo(params = {}) {
    return this.request({
      path: `/system/surveys/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SurveyInfos
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
  getSystemSurveysInfoCount(params = {}) {
    return this.request({
      path: `/system/surveys/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TimeZoneSetup
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TimeZoneSetup[]>}
   */
  getSystemTimeZoneSetups(params = {}) {
    return this.request({
      path: `/system/timeZoneSetups`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TimeZoneSetup
   * @param {TimeZoneSetup} timeZoneSetup timeZoneSetup
   * @returns {Promise<TimeZoneSetup>}
   */
  postSystemTimeZoneSetups(timeZoneSetup) {
    return this.request({
      path: `/system/timeZoneSetups`,
      method: 'post',
      data: timeZoneSetup,
    })
  }
  /**
   * Get TimeZoneSetup
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
   * @returns {Promise<TimeZoneSetup>}
   */
  getSystemTimeZoneSetupsById(id, params = {}) {
    return this.request({
      path: `/system/timeZoneSetups/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put TimeZoneSetup
   * @param {number} id
   * @param {TimeZoneSetup} timeZoneSetup timeZoneSetup
   * @returns {Promise<TimeZoneSetup>}
   */
  putSystemTimeZoneSetupsById(id, timeZoneSetup) {
    return this.request({
      path: `/system/timeZoneSetups/${id}`,
      method: 'put',
      data: timeZoneSetup,
    })
  }

  /**
   * Patch TimeZoneSetup
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TimeZoneSetup>}
   */
  patchSystemTimeZoneSetupsById(id, patchOperations) {
    return this.request({
      path: `/system/timeZoneSetups/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }

  /**
   * Delete TimeZoneSetup
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemTimeZoneSetupsById(id) {
    return this.request({
      path: `/system/timeZoneSetups/${id}`,
      method: 'delete',
    })
  }
  /**
   * Get TimeZoneSetupInfos
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
   * @returns {Promise<TimeZoneSetupInfo>}
   */
  getSystemTimeZoneSetupsByIdInfo(id, params = {}) {
    return this.request({
      path: `/system/timeZoneSetups/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TimeZoneSetup
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
  getSystemTimeZoneSetupsCount(params = {}) {
    return this.request({
      path: `/system/timeZoneSetups/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TimeZoneSetupInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TimeZoneSetupInfo[]>}
   */
  getSystemTimeZoneSetupsInfo(params = {}) {
    return this.request({
      path: `/system/timeZoneSetups/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TimeZoneSetupInfos
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
  getSystemTimeZoneSetupsInfoCount(params = {}) {
    return this.request({
      path: `/system/timeZoneSetups/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TodayPageCategory
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TodayPageCategory[]>}
   */
  getSystemTodayPageCategories(params = {}) {
    return this.request({
      path: `/system/todayPageCategories`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TodayPageCategory
   * @param {TodayPageCategory} todayPageCategory todayPageCategory
   * @returns {Promise<TodayPageCategory>}
   */
  postSystemTodayPageCategories(todayPageCategory) {
    return this.request({
      path: `/system/todayPageCategories`,
      method: 'post',
      data: todayPageCategory,
    })
  }
  /**
   * Get TodayPageCategory
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
   * @returns {Promise<TodayPageCategory>}
   */
  getSystemTodayPageCategoriesById(id, params = {}) {
    return this.request({
      path: `/system/todayPageCategories/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TodayPageCategory
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemTodayPageCategoriesById(id) {
    return this.request({
      path: `/system/todayPageCategories/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put TodayPageCategory
   * @param {number} id
   * @param {TodayPageCategory} todayPageCategory todayPageCategory
   * @returns {Promise<TodayPageCategory>}
   */
  putSystemTodayPageCategoriesById(id, todayPageCategory) {
    return this.request({
      path: `/system/todayPageCategories/${id}`,
      method: 'put',
      data: todayPageCategory,
    })
  }

  /**
   * Patch TodayPageCategory
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TodayPageCategory>}
   */
  patchSystemTodayPageCategoriesById(id, patchOperations) {
    return this.request({
      path: `/system/todayPageCategories/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of TodayPageCategory
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
  getSystemTodayPageCategoriesCount(params = {}) {
    return this.request({
      path: `/system/todayPageCategories/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of UserDefinedField
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UserDefinedField[]>}
   */
  getSystemUserDefinedFields(params = {}) {
    return this.request({
      path: `/system/userDefinedFields`,
      method: 'get',
      params,
    })
  }

  /**
   * Post UserDefinedField
   * @param {UserDefinedField} userDefinedField userDefinedField
   * @returns {Promise<UserDefinedField>}
   */
  postSystemUserDefinedFields(userDefinedField) {
    return this.request({
      path: `/system/userDefinedFields`,
      method: 'post',
      data: userDefinedField,
    })
  }
  /**
   * Get UserDefinedField
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
   * @returns {Promise<UserDefinedField>}
   */
  getSystemUserDefinedFieldsById(id, params = {}) {
    return this.request({
      path: `/system/userDefinedFields/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete UserDefinedField
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemUserDefinedFieldsById(id) {
    return this.request({
      path: `/system/userDefinedFields/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put UserDefinedField
   * @param {number} id
   * @param {UserDefinedField} userDefinedField userDefinedField
   * @returns {Promise<UserDefinedField>}
   */
  putSystemUserDefinedFieldsById(id, userDefinedField) {
    return this.request({
      path: `/system/userDefinedFields/${id}`,
      method: 'put',
      data: userDefinedField,
    })
  }

  /**
   * Patch UserDefinedField
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<UserDefinedField>}
   */
  patchSystemUserDefinedFieldsById(id, patchOperations) {
    return this.request({
      path: `/system/userDefinedFields/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get UserDefinedFieldInfos
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
   * @returns {Promise<UserDefinedFieldInfo>}
   */
  getSystemUserDefinedFieldsByIdInfo(id, params = {}) {
    return this.request({
      path: `/system/userDefinedFields/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of UserDefinedField
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
  getSystemUserDefinedFieldsCount(params = {}) {
    return this.request({
      path: `/system/userDefinedFields/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of UserDefinedFieldInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<UserDefinedFieldInfo[]>}
   */
  getSystemUserDefinedFieldsInfo(params = {}) {
    return this.request({
      path: `/system/userDefinedFields/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of UserDefinedFieldInfos
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
  getSystemUserDefinedFieldsInfoCount(params = {}) {
    return this.request({
      path: `/system/userDefinedFields/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WorkflowActionAutomateParameter
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
   * @returns {Promise<WorkflowActionAutomateParameter[]>}
   */
  getSystemWorkflowActionsByParentIdAutomateParameters(parentId, params = {}) {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters`,
      method: 'get',
      params,
    })
  }

  /**
   * Post WorkflowActionAutomateParameter
   * @param {number} parentId
   * @param {WorkflowActionAutomateParameter} workflowActionAutomateParameter workflowActionAutomateParameter
   * @returns {Promise<WorkflowActionAutomateParameter>}
   */
  postSystemWorkflowActionsByParentIdAutomateParameters(parentId, workflowActionAutomateParameter) {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters`,
      method: 'post',
      data: workflowActionAutomateParameter,
    })
  }
  /**
   * Get WorkflowActionAutomateParameter
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
   * @returns {Promise<WorkflowActionAutomateParameter>}
   */
  getSystemWorkflowActionsByParentIdAutomateParametersById(id, parentId, params = {}) {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete WorkflowActionAutomateParameter
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemWorkflowActionsByParentIdAutomateParametersById(id, parentId) {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put WorkflowActionAutomateParameter
   * @param {number} id
   * @param {number} parentId
   * @param {WorkflowActionAutomateParameter} workflowActionAutomateParameter workflowActionAutomateParameter
   * @returns {Promise<WorkflowActionAutomateParameter>}
   */
  putSystemWorkflowActionsByParentIdAutomateParametersById(
    id,
    parentId,
    workflowActionAutomateParameter,
  ) {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/{id}`,
      method: 'put',
      data: workflowActionAutomateParameter,
    })
  }

  /**
   * Patch WorkflowActionAutomateParameter
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<WorkflowActionAutomateParameter>}
   */
  patchSystemWorkflowActionsByParentIdAutomateParametersById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of WorkflowActionAutomateParameter
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
  getSystemWorkflowActionsByParentIdAutomateParametersCount(parentId, params = {}) {
    return this.request({
      path: `/system/workflowActions/${parentId}/automateParameters/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Workflow
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Workflow[]>}
   */
  getSystemWorkflows(params = {}) {
    return this.request({
      path: `/system/workflows`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Workflow
   * @param {Workflow} workflow workflow
   * @returns {Promise<Workflow>}
   */
  postSystemWorkflows(workflow) {
    return this.request({
      path: `/system/workflows`,
      method: 'post',
      data: workflow,
    })
  }
  /**
   * Get List of WorkflowAction
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
   * @returns {Promise<WorkflowAction[]>}
   */
  getSystemWorkflowsByGrandparentIdEventsByParentIdActions(parentId, grandparentId, params = {}) {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/{parentId}/actions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post WorkflowAction
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {WorkflowAction} workflowAction workflowAction
   * @returns {Promise<WorkflowAction>}
   */
  postSystemWorkflowsByGrandparentIdEventsByParentIdActions(
    parentId,
    grandparentId,
    workflowAction,
  ) {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/{parentId}/actions`,
      method: 'post',
      data: workflowAction,
    })
  }
  /**
   * Get WorkflowAction
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
   * @returns {Promise<WorkflowAction>}
   */
  getSystemWorkflowsByGrandparentIdEventsByParentIdActionsById(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/{parentId}/actions/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete WorkflowAction
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemWorkflowsByGrandparentIdEventsByParentIdActionsById(id, parentId, grandparentId) {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/{parentId}/actions/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put WorkflowAction
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {WorkflowAction} workflowAction workflowAction
   * @returns {Promise<WorkflowAction>}
   */
  putSystemWorkflowsByGrandparentIdEventsByParentIdActionsById(
    id,
    parentId,
    grandparentId,
    workflowAction,
  ) {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/{parentId}/actions/{id}`,
      method: 'put',
      data: workflowAction,
    })
  }

  /**
   * Patch WorkflowAction
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<WorkflowAction>}
   */
  patchSystemWorkflowsByGrandparentIdEventsByParentIdActionsById(
    id,
    parentId,
    grandparentId,
    patchOperations,
  ) {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/{parentId}/actions/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of WorkflowAction
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
  getSystemWorkflowsByGrandparentIdEventsByParentIdActionsCount(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/system/workflows/${grandparentId}/events/{parentId}/actions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WorkflowTriggerOption
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
   * @returns {Promise<WorkflowTriggerOption[]>}
   */
  getSystemWorkflowsByGrandparentIdTriggersByParentIdOptions(parentId, grandparentId, params = {}) {
    return this.request({
      path: `/system/workflows/${grandparentId}/triggers/{parentId}/options`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of WorkflowTriggerOption
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
  getSystemWorkflowsByGrandparentIdTriggersByParentIdOptionsCount(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/system/workflows/${grandparentId}/triggers/{parentId}/options/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Workflow
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
   * @returns {Promise<Workflow>}
   */
  getSystemWorkflowsById(id, params = {}) {
    return this.request({
      path: `/system/workflows/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Workflow
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteSystemWorkflowsById(id) {
    return this.request({
      path: `/system/workflows/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Workflow
   * @param {number} id
   * @param {Workflow} workflow workflow
   * @returns {Promise<Workflow>}
   */
  putSystemWorkflowsById(id, workflow) {
    return this.request({
      path: `/system/workflows/${id}`,
      method: 'put',
      data: workflow,
    })
  }

  /**
   * Patch Workflow
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Workflow>}
   */
  patchSystemWorkflowsById(id, patchOperations) {
    return this.request({
      path: `/system/workflows/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post Workflow
   * @param {number} id
   * @returns {Promise<Workflow>}
   */
  postSystemWorkflowsByIdCopy(id) {
    return this.request({
      path: `/system/workflows/${id}/copy`,
      method: 'post',
    })
  }
  /**
   * Get List of WorkflowAttachment
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
   * @returns {Promise<WorkflowAttachment[]>}
   */
  getSystemWorkflowsByParentIdAttachments(parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/attachments`,
      method: 'get',
      params,
    })
  }
  /**
   * Get WorkflowAttachment
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
   * @returns {Promise<WorkflowAttachment>}
   */
  getSystemWorkflowsByParentIdAttachmentsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/attachments/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of WorkflowAttachment
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
  getSystemWorkflowsByParentIdAttachmentsCount(parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/attachments/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WorkflowEvent
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
   * @returns {Promise<WorkflowEvent[]>}
   */
  getSystemWorkflowsByParentIdEvents(parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/events`,
      method: 'get',
      params,
    })
  }

  /**
   * Post WorkflowEvent
   * @param {number} parentId
   * @param {WorkflowEvent} workflowEvent workflowEvent
   * @returns {Promise<WorkflowEvent>}
   */
  postSystemWorkflowsByParentIdEvents(parentId, workflowEvent) {
    return this.request({
      path: `/system/workflows/${parentId}/events`,
      method: 'post',
      data: workflowEvent,
    })
  }
  /**
   * Get WorkflowEvent
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
   * @returns {Promise<WorkflowEvent>}
   */
  getSystemWorkflowsByParentIdEventsById(id, parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/events/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete WorkflowEvent
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemWorkflowsByParentIdEventsById(id, parentId) {
    return this.request({
      path: `/system/workflows/${parentId}/events/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put WorkflowEvent
   * @param {number} id
   * @param {number} parentId
   * @param {WorkflowEvent} workflowEvent workflowEvent
   * @returns {Promise<WorkflowEvent>}
   */
  putSystemWorkflowsByParentIdEventsById(id, parentId, workflowEvent) {
    return this.request({
      path: `/system/workflows/${parentId}/events/{id}`,
      method: 'put',
      data: workflowEvent,
    })
  }

  /**
   * Patch WorkflowEvent
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<WorkflowEvent>}
   */
  patchSystemWorkflowsByParentIdEventsById(id, parentId, patchOperations) {
    return this.request({
      path: `/system/workflows/${parentId}/events/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post WorkflowEvent
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<WorkflowEvent>}
   */
  postSystemWorkflowsByParentIdEventsByIdCopy(id, parentId) {
    return this.request({
      path: `/system/workflows/${parentId}/events/{id}/copy`,
      method: 'post',
    })
  }
  /**
   * Get workflow test results
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
   * @returns {Promise<*>}
   */
  getSystemWorkflowsByParentIdEventsByIdTest(id, parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/events/{id}/test`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of WorkflowEvent
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
  getSystemWorkflowsByParentIdEventsCount(parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/events/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WorkflowNotifyType
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
   * @returns {Promise<WorkflowNotifyType[]>}
   */
  getSystemWorkflowsByParentIdNotifyTypes(parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes`,
      method: 'get',
      params,
    })
  }
  /**
   * Get WorkflowNotifyType
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
   * @returns {Promise<WorkflowNotifyType>}
   */
  getSystemWorkflowsByParentIdNotifyTypesById(id, parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get WorkflowNotifyTypeInfo
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
   * @returns {Promise<WorkflowNotifyTypeInfo>}
   */
  getSystemWorkflowsByParentIdNotifyTypesByIdInfo(id, parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/{id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of WorkflowNotifyType
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
  getSystemWorkflowsByParentIdNotifyTypesCount(parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WorkflowNotifyTypeInfo
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
   * @returns {Promise<WorkflowNotifyTypeInfo[]>}
   */
  getSystemWorkflowsByParentIdNotifyTypesInfo(parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of WorkflowNotifyTypeInfo
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
  getSystemWorkflowsByParentIdNotifyTypesInfoCount(parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/notifyTypes/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WorkflowTrigger
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
   * @returns {Promise<WorkflowTrigger[]>}
   */
  getSystemWorkflowsByParentIdTriggers(parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/triggers`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of WorkflowTrigger
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
  getSystemWorkflowsByParentIdTriggersCount(parentId, params = {}) {
    return this.request({
      path: `/system/workflows/${parentId}/triggers/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Workflow
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
  getSystemWorkflowsCount(params = {}) {
    return this.request({
      path: `/system/workflows/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WorkflowTableType
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<WorkflowTableType[]>}
   */
  getSystemWorkflowsTableTypes(params = {}) {
    return this.request({
      path: `/system/workflows/tableTypes`,
      method: 'get',
      params,
    })
  }
  /**
   * Get WorkflowTableType
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
   * @returns {Promise<WorkflowTableType>}
   */
  getSystemWorkflowsTableTypesById(id, params = {}) {
    return this.request({
      path: `/system/workflows/tableTypes/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get WorkflowTableTypeInfo
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
   * @returns {Promise<WorkflowTableTypeInfo>}
   */
  getSystemWorkflowsTableTypesByIdInfo(id, params = {}) {
    return this.request({
      path: `/system/workflows/tableTypes/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of WorkflowTableType
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
  getSystemWorkflowsTableTypesCount(params = {}) {
    return this.request({
      path: `/system/workflows/tableTypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of WorkflowTableTypeInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<WorkflowTableTypeInfo[]>}
   */
  getSystemWorkflowsTableTypesInfo(params = {}) {
    return this.request({
      path: `/system/workflows/tableTypes/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of WorkflowTableTypeInfo
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
  getSystemWorkflowsTableTypesInfoCount(params = {}) {
    return this.request({
      path: `/system/workflows/tableTypes/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Put WorkflowActionUserDefinedField
   * @param {number} id
   * @param {WorkflowActionUserDefinedField} workflowActionUserDefinedField workflowActionUserDefinedField
   * @returns {Promise<WorkflowActionUserDefinedField>}
   */
  putSystemWorkflowsUserdefinedfieldsById(id, workflowActionUserDefinedField) {
    return this.request({
      path: `/system/workflows/userdefinedfields/${id}`,
      method: 'put',
      data: workflowActionUserDefinedField,
    })
  }

  /**
   * Patch WorkflowActionUserDefinedField
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<WorkflowActionUserDefinedField>}
   */
  patchSystemWorkflowsUserdefinedfieldsById(id, patchOperations) {
    return this.request({
      path: `/system/workflows/userdefinedfields/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Delete WorkflowActionUserDefinedField
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteSystemWorkflowsUserdefinedfieldsActionsByParentId(parentId) {
    return this.request({
      path: `/system/workflows/userdefinedfields/actions/${parentId}`,
      method: 'delete',
    })
  }
  /**
   * Post WorkflowActionUserDefinedField
   * @param {number} grandparentId
   * @param {WorkflowActionUserDefinedField} workflowActionUserDefinedField workflowActionUserDefinedField
   * @returns {Promise<WorkflowActionUserDefinedField>}
   */
  postSystemWorkflowsUserdefinedfieldsEventsByGrandparentId(
    grandparentId,
    workflowActionUserDefinedField,
  ) {
    return this.request({
      path: `/system/workflows/userdefinedfields/events/${grandparentId}`,
      method: 'post',
      data: workflowActionUserDefinedField,
    })
  }
  /**
   * Get List of WorkflowActionUserDefinedField
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
   * @returns {Promise<WorkflowActionUserDefinedField[]>}
   */
  getSystemWorkflowsUserdefinedfieldsByGrandparentIdActionsByParentId(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/system/workflows/userdefinedfields/events${grandparentId}/actions/{parentId}`,
      method: 'get',
      params,
    })
  }
}
