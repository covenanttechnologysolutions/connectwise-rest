import Manage from './Manage.js'

/**
 * Board
 * @typedef {object} Board
 * @property {number} [id]  int32  
  * @property {string} name  Max length: 50;  
  * @property {SystemLocationReference} [location]    
  * @property {SystemDepartmentReference} [department]    
  * @property {boolean} [inactiveFlag]   nullable 
  * @property {ServiceSignoffReference} [signOffTemplate]    
  * @property {boolean} [sendToContactFlag]   nullable 
  * @property {ServiceEmailTemplateReference} [contactTemplate]    
  * @property {boolean} [sendToResourceFlag]   nullable 
  * @property {ServiceEmailTemplateReference} [resourceTemplate]    
  * @property {boolean} [projectFlag]   nullable 
  * @property {boolean} [showDependenciesFlag] This field only shows if it is Project Board.  nullable 
  * @property {boolean} [showEstimatesFlag] This field only shows if it is Project Board.  nullable 
  * @property {DocumentReference} [boardIcon]    
  * @property {boolean} [billTicketsAfterClosedFlag]   nullable 
  * @property {boolean} [billTicketSeparatelyFlag]   nullable 
  * @property {boolean} [billUnapprovedTimeExpenseFlag]   nullable 
  * @property {boolean} [overrideBillingSetupFlag]   nullable 
  * @property {MemberReference} [dispatchMember]    
  * @property {MemberReference} [serviceManagerMember]    
  * @property {MemberReference} [dutyManagerMember]    
  * @property {MemberReference} [oncallMember]    
  * @property {WorkRoleReference} [workRole]    
  * @property {WorkTypeReference} [workType]    
  * @property {string} [billTime]   nullable 
  * @property {string} [billExpense]   nullable 
  * @property {string} [billProduct]   nullable 
  * @property {ServiceStatusReference} [autoCloseStatus]    
  * @property {boolean} [autoAssignNewTicketsFlag]   nullable 
  * @property {boolean} [autoAssignNewECTicketsFlag]   nullable 
  * @property {boolean} [autoAssignNewPortalTicketsFlag]   nullable 
  * @property {boolean} [discussionsLockedFlag]   nullable 
  * @property {boolean} [timeEntryLockedFlag]   nullable 
  * @property {string} [notifyEmailFrom]  Max length: 50;   
  * @property {string} [notifyEmailFromName]  Max length: 60;   
  * @property {boolean} [closedLoopDiscussionsFlag]   nullable 
  * @property {boolean} [closedLoopResolutionFlag]   nullable 
  * @property {boolean} [closedLoopInternalAnalysisFlag]   nullable 
  * @property {boolean} [timeEntryDiscussionFlag]   nullable 
  * @property {boolean} [timeEntryResolutionFlag]   nullable 
  * @property {boolean} [timeEntryInternalAnalysisFlag]   nullable 
  * @property {string} [problemSort]   nullable 
  * @property {string} [resolutionSort]   nullable 
  * @property {string} [internalAnalysisSort]   nullable 
  * @property {boolean} [emailConnectorAllowReopenClosedFlag]   nullable 
  * @property {ServiceStatusReference} [emailConnectorReopenStatus]    
  * @property {boolean} [emailConnectorReopenResourcesFlag] This field can only be set when emailConnectorAllowReopenClosed is true  nullable 
  * @property {boolean} [emailConnectorNewTicketNoMatchFlag] This field can only be set when emailConnectorAllowReopenClosed is true  nullable 
  * @property {boolean} [emailConnectorNeverReopenByDaysFlag] This field can only be set when emailConnectorAllowReopenClosed is true  nullable 
  * @property {number} [emailConnectorReopenDaysLimit] This field can only be set when emailConnectorNeverReopenByDaysFlag and emailConnectorAllowReopenClosed are both true
            This field is required when emailConnectorNeverReopenByDaysFlag is true int32 nullable 
  * @property {boolean} [emailConnectorNeverReopenByDaysClosedFlag] This field can only be set when emailConnectorAllowReopenClosed is true  nullable 
  * @property {number} [emailConnectorReopenDaysClosedLimit] This field can only be set when emailConnectorNeverReopenByDaysClosedFlag and emailConnectorAllowReopenClosed are both true
            This field is required when emailConnectorNeverReopenByDaysClosedFlag is true int32 nullable 
  * @property {boolean} [useMemberDisplayNameFlag]   nullable 
  * @property {boolean} [sendToCCFlag]   nullable 
  * @property {boolean} [autoAssignTicketOwnerFlag]   nullable 
  * @property {boolean} [closedLoopAllFlag]   nullable 
  * @property {string} [percentageCalculation]   nullable 
  * @property {string} [allSort]   nullable 
  * @property {boolean} [markFirstNoteIssueFlag]   nullable 
  * @property {boolean} [restrictBoardByDefaultFlag]   nullable 
  * @property {object} [_info]    
 */

/**
 * BoardItemAssociation
 * @typedef {object} BoardItemAssociation
 * @property {number} id  int32
 * @property {array} [subTypeAssociationIds] If addAllSubTypesFlag and removeAllSubTypesFlag are both false, this field is required.
 * @property {boolean} [addAllSubTypesFlag]   nullable
 * @property {boolean} [removeAllSubTypesFlag]   nullable
 * @property {ServiceItemReference} [item]
 * @property {BoardReference} [board]
 * @property {object} [_info]
 */

/**
 * Count
 * @typedef {object} Count
 * @property {number} [count]  int32
 */

/**
 * BoardStatusNotification
 * @typedef {object} BoardStatusNotification
 * @property {number} [id]  int32
 * @property {NotificationRecipientReference} [notifyWho]
 * @property {ServiceStatusReference} [status]
 * @property {MemberReference} [member]
 * @property {string} [email] Service Status Notification email must be entered if the notify type is "Email Address" Max length: 255;
 * @property {number} [workflowStep]  int32 nullable
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
 * BoardAutoAssignResource
 * @typedef {object} BoardAutoAssignResource
 * @property {number} [id]  int32
 * @property {NotificationRecipientReference} [notifyWho]
 * @property {MemberReference} [member]
 * @property {object} [_info]
 */

/**
 * BoardAutoTemplate
 * @typedef {object} BoardAutoTemplate
 * @property {number} [id]  int32
 * @property {ServiceTypeReference} [type]
 * @property {ServiceSubTypeReference} [subtype]
 * @property {ServiceItemReference} [item]
 * @property {ServiceTemplateReference} [serviceTemplate]
 * @property {BoardReference} [board]
 * @property {string} [summarySetting]   nullable
 * @property {string} [discussionSetting]   nullable
 * @property {string} [internalAnalysisSetting]   nullable
 * @property {string} [resolutionSetting]   nullable
 * @property {string} [tasksSetting]   nullable
 * @property {string} [documentsSetting]   nullable
 * @property {string} [resourcesSetting]   nullable
 * @property {string} [budgetHoursSetting]   nullable
 * @property {string} [financeInformationSetting]   nullable
 * @property {string} [sendNotesAsEmailSetting]   nullable
 * @property {boolean} [autoApplyFlag]   nullable
 * @property {object} [_info]
 */

/**
 * BoardExcludedMember
 * @typedef {object} BoardExcludedMember
 * @property {number} [id]  int32
 * @property {number} [memberId]  int32
 * @property {number} [boardId]  int32 nullable
 * @property {object} [_info]
 */

/**
 * BoardItem
 * @typedef {object} BoardItem
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {BoardReference} [board]
 * @property {object} [_info]
 */

/**
 * BoardNotification
 * @typedef {object} BoardNotification
 * @property {number} [id]  int32
 * @property {NotificationRecipientReference} [notifyWho]
 * @property {MemberReference} [member]
 * @property {string} [email]  Max length: 50;
 * @property {object} [_info]
 */

/**
 * BoardStatus
 * @typedef {object} BoardStatus
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {BoardReference} [board]
 * @property {number} [sortOrder]  int32 nullable
 * @property {boolean} [displayOnBoard]   nullable
 * @property {boolean} [inactive]   nullable
 * @property {boolean} [closedStatus]   nullable
 * @property {boolean} [timeEntryNotAllowed]   nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {string} [escalationStatus]   nullable
 * @property {string} [customerPortalDescription]  Max length: 500;
 * @property {boolean} [customerPortalFlag]   nullable
 * @property {ServiceEmailTemplateReference} [emailTemplate]
 * @property {StatusIndicatorReference} [statusIndicator]
 * @property {string} [customStatusIndicatorName]  Max length: 30;
 * @property {object} [_info]
 */

/**
 * BoardStatusInfo
 * @typedef {object} BoardStatusInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {number} [sortOrder]  int32 nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [closedFlag]   nullable
 * @property {object} [_info]
 */

/**
 * BoardSubType
 * @typedef {object} BoardSubType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {array} [typeAssociationIds]
 * @property {boolean} [addAllTypesFlag]   nullable
 * @property {boolean} [removeAllTypesFlag]   nullable
 * @property {BoardReference} [board]
 * @property {object} [_info]
 */

/**
 * BoardSubTypeInfo
 * @typedef {object} BoardSubTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {array} [typeAssociationIds]
 * @property {object} [_info]
 */

/**
 * BoardTeam
 * @typedef {object} BoardTeam
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {MemberReference} [teamLeader]
 * @property {array} [members]
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [notifyOnTicketDelete]   nullable
 * @property {number} [boardId]  int32 nullable
 * @property {number} [locationId]  int32 nullable
 * @property {number} [businessUnitId]  int32 nullable
 * @property {object} [_info]
 */

/**
 * BoardTeamInfo
 * @typedef {object} BoardTeamInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * BoardType
 * @typedef {object} BoardType
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {string} [category]   nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [requestForChangeFlag]   nullable
 * @property {string} [integrationXref]  Max length: 50;
 * @property {BoardReference} [board]
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {object} [_info]
 */

/**
 * BoardTypeSubTypeItemAssociation
 * @typedef {object} BoardTypeSubTypeItemAssociation
 * @property {number} [id]  int32
 * @property {ServiceTypeReference} [type]
 * @property {ServiceSubTypeReference} [subType]
 * @property {ServiceItemReference} [item]
 * @property {BoardReference} [board]
 * @property {object} [_info]
 */

/**
 * Code
 * @typedef {object} Code
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {string} description
 * @property {number} [boardId]  int32 nullable
 * @property {number} [locationId]  int32 nullable
 * @property {number} [businessUnitId]  int32 nullable
 * @property {object} [_info]
 */

/**
 * ServiceEmailTemplate
 * @typedef {object} ServiceEmailTemplate
 * @property {number} [id]  int32
 * @property {string} type   nullable
 * @property {ServiceSurveyReference} [serviceSurvey]
 * @property {BoardReference} [serviceBoard]
 * @property {boolean} [useSenderFlag]   nullable
 * @property {string} [firstName] From fields (first name, last name, email address) are required if useSenderFlag is false. Max length: 100;
 * @property {string} [lastName] From fields (first name, last name, email address) are required if useSenderFlag is false. Max length: 100;
 * @property {string} [emailAddress] From fields (first name, last name, email address) are required if useSenderFlag is false. Max length: 100;
 * @property {string} [subject]  Max length: 200;
 * @property {string} [body]
 * @property {boolean} [copySenderFlag]   nullable
 * @property {boolean} [tasksFlag]   nullable
 * @property {boolean} [resourceRecordsFlag]   nullable
 * @property {boolean} [externalContactNotifications]   nullable
 * @property {boolean} [internalContactNotifications]   nullable
 * @property {ServiceStatusReference} [serviceStatus]
 * @property {object} [_info]
 */

/**
 * Impact
 * @typedef {object} Impact
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} description  Max length: 200;
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * BoardInfo
 * @typedef {object} BoardInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {boolean} [projectFlag]   nullable
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [closedLoopDiscussionsFlag]   nullable
 * @property {boolean} [closedLoopInternalAnalysisFlag]   nullable
 * @property {boolean} [closedLoopResolutionFlag]   nullable
 * @property {boolean} [closedLoopAllFlag]   nullable
 * @property {string} [problemSort]   nullable
 * @property {string} [internalAnalysisSort]   nullable
 * @property {string} [resolutionSort]   nullable
 * @property {string} [allSort]   nullable
 * @property {object} [_info]
 */

/**
 * BoardTypeInfo
 * @typedef {object} BoardTypeInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {BoardReference} [board]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * KnowledgeBaseArticle
 * @typedef {object} KnowledgeBaseArticle
 * @property {number} [id]  int32
 * @property {string} title
 * @property {string} issue
 * @property {string} resolution
 * @property {number} [locationId]  int32 nullable
 * @property {number} [businessUnitId]  int32 nullable
 * @property {BoardReference} [board]
 * @property {number} [categoryId]  int32 nullable
 * @property {number} [subCategoryId]  int32 nullable
 * @property {string} [dateCreated]
 * @property {string} [createdBy]
 * @property {object} [_info]
 */

/**
 * KnowledgeBaseCategory
 * @typedef {object} KnowledgeBaseCategory
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {MemberReference} [approver]
 * @property {object} [_info]
 */

/**
 * KnowledgeBaseSettings
 * @typedef {object} KnowledgeBaseSettings
 * @property {number} [id]  int32
 * @property {boolean} requireApproval   nullable
 * @property {MemberReference} [defaultApprover]
 * @property {object} [_info]
 */

/**
 * KnowledgeBaseSubCategory
 * @typedef {object} KnowledgeBaseSubCategory
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {KBCategoryReference} category
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {object} [_info]
 */

/**
 * ServiceLocation
 * @typedef {object} ServiceLocation
 * @property {number} [id]  int32
 * @property {string} name  Max length: 30;
 * @property {string} where   nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ServiceLocationInfo
 * @typedef {object} ServiceLocationInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * Priority
 * @typedef {object} Priority
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {string} color   nullable
 * @property {number} [sortOrder]  int32 nullable
 * @property {boolean} [defaultFlag]   nullable
 * @property {string} [imageLink]
 * @property {object} [_info]
 */

/**
 * PriorityInfo
 * @typedef {object} PriorityInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {number} [sortOrder]  int32 nullable
 * @property {object} [_info]
 */

/**
 * SchedulingMemberInfo
 * @typedef {object} SchedulingMemberInfo
 * @property {number} [id]  int32
 * @property {string} [identifier]
 * @property {string} [firstName]
 * @property {string} [middleInitial]
 * @property {string} [lastName]
 * @property {string} [fullName]
 * @property {string} [defaultEmail]
 * @property {boolean} [inactiveFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ServiceSignoff
 * @typedef {object} ServiceSignoff
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {boolean} [visibleLogoFlag]   nullable
 * @property {boolean} [companyInfoFlag]   nullable
 * @property {boolean} [billingTermsFlag]   nullable
 * @property {boolean} [summaryFlag]   nullable
 * @property {boolean} [discussionFlag]   nullable
 * @property {boolean} [taskFlag] On add/post, if this is set to true but no value is set for task, task is defaulted to ServiceTasks.All  nullable
 * @property {string} [task] On add/post, if this is set but no value is set for taskFlag, taskFlag is set to true  nullable
 * @property {boolean} [configurationsFlag]   nullable
 * @property {boolean} [internalNotesFlag]   nullable
 * @property {boolean} [resolutionFlag]   nullable
 * @property {boolean} [timeFlag] On add/post, if any time related flag is set to true, this is also set to true  nullable
 * @property {boolean} [timeMemberFlag]   nullable
 * @property {boolean} [timeDateFlag]   nullable
 * @property {boolean} [timeStartEndFlag]   nullable
 * @property {boolean} [timeBillFlag]   nullable
 * @property {boolean} [timeHoursFlag]   nullable
 * @property {boolean} [timeRateFlag]   nullable
 * @property {boolean} [timeExtendedAmountFlag]   nullable
 * @property {boolean} [timeWorkTypeFlag]   nullable
 * @property {boolean} [timeAgreementFlag]   nullable
 * @property {boolean} [timeNotesFlag]   nullable
 * @property {boolean} [timeManualFlag]   nullable
 * @property {number} [timeManualEntry]  int32 nullable
 * @property {boolean} [timeTaxFlag]   nullable
 * @property {boolean} [expenseFlag] On add/post, if any expense related flag is set to true, this is also set to true  nullable
 * @property {boolean} [expenseDateFlag]   nullable
 * @property {boolean} [expenseMemberFlag]   nullable
 * @property {boolean} [expenseTypeFlag]   nullable
 * @property {boolean} [expenseBillFlag]   nullable
 * @property {boolean} [expenseAmountFlag]   nullable
 * @property {boolean} [expenseAgreementFlag]   nullable
 * @property {boolean} [expenseNotesFlag]   nullable
 * @property {boolean} [expenseTaxFlag]   nullable
 * @property {boolean} [expenseManualFlag]   nullable
 * @property {number} [expenseManualEntry]  int32 nullable
 * @property {boolean} [productFlag] On add/post, if any product related flag is set to true, this is also set to true  nullable
 * @property {boolean} [productDescriptionFlag]   nullable
 * @property {boolean} [productBillFlag]   nullable
 * @property {boolean} [productQuantityFlag]   nullable
 * @property {boolean} [productPriceFlag]   nullable
 * @property {boolean} [productExtendedAmountFlag]   nullable
 * @property {boolean} [productAgreementFlag]   nullable
 * @property {boolean} [productManualFlag]   nullable
 * @property {number} [productManualEntry]  int32 nullable
 * @property {boolean} [productTaxFlag]   nullable
 * @property {boolean} [technicianSignoffFlag]   nullable
 * @property {boolean} [customerSignoffTextFlag] On add/post, if customerSignoffText.Length > 0, this is set to true  nullable
 * @property {string} [customerSignoffText]  Max length: 4000;
 * @property {boolean} [customerSignoffFieldsFlag]   nullable
 * @property {boolean} [billingMethodsTextFlag] On add/post, if billingMethodsText.Length > 0, this is set to true  nullable
 * @property {string} [billingMethodsText]  Max length: 2000;
 * @property {boolean} [creditCardFieldsFlag]   nullable
 * @property {boolean} [defaultFFFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ServiceSignoffInfo
 * @typedef {object} ServiceSignoffInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * Severity
 * @typedef {object} Severity
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} description  Max length: 200;
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 */

/**
 * SLAInfo
 * @typedef {object} SLAInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * SLA
 * @typedef {object} SLA
 * @property {number} [id]  int32
 * @property {string} name  Max length: 25;
 * @property {string} basedOn   nullable
 * @property {CalendarReference} [customCalendar]
 * @property {boolean} [defaultFlag]   nullable
 * @property {number} [applicationOrder]  int32 nullable
 * @property {PriorityReference} [hiImpactHiUrgency]
 * @property {PriorityReference} [hiImpactMedUrgency]
 * @property {PriorityReference} [hiImpactLowUrgency]
 * @property {PriorityReference} [medImpactHiUrgency]
 * @property {PriorityReference} [medImpactMedUrgency]
 * @property {PriorityReference} [medImpactLowUrgency]
 * @property {PriorityReference} [lowImpactHiUrgency]
 * @property {PriorityReference} [lowImpactMedUrgency]
 * @property {PriorityReference} [lowImpactLowUrgency]
 * @property {number} [respondHours]  double nullable
 * @property {number} [respondPercent]  int32 nullable
 * @property {number} [planWithin]  double nullable
 * @property {number} [planWithinPercent]  int32 nullable
 * @property {number} [resolutionHours]  double nullable
 * @property {number} [resolutionPercent]  int32 nullable
 * @property {object} [_info]
 */

/**
 * SLAPriority
 * @typedef {object} SLAPriority
 * @property {number} [id]  int32
 * @property {PriorityReference} [priority]
 * @property {number} [respondHours]  double nullable
 * @property {number} [respondPercent]  int32 nullable
 * @property {number} [planWithin]  double nullable
 * @property {number} [planWithinPercent]  int32 nullable
 * @property {number} [resolutionHours]  double nullable
 * @property {number} [resolutionPercent]  int32 nullable
 * @property {SLAReference} [sla]
 * @property {object} [_info]
 */

/**
 * Source
 * @typedef {object} Source
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [defaultFlag]   nullable
 * @property {object} [_info]
 * @property {string} [enteredBy]
 * @property {string} [dateEntered]  date-time
 */

/**
 * SourceInfo
 * @typedef {object} SourceInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * ServiceSurvey
 * @typedef {object} ServiceSurvey
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [inactiveFlag]   nullable
 * @property {boolean} [headerIncludeLogoFlag]   nullable
 * @property {string} [headerText]  Max length: 4000;
 * @property {boolean} [headerTextVisibleFlag]   nullable
 * @property {string} [footerText]  Max length: 500;
 * @property {boolean} [footerTextVisibleFlag]   nullable
 * @property {string} [thankYouText]  Max length: 4000;
 * @property {GenericIdIdentifierReference} [notifyWho]
 * @property {boolean} [notifyWhoVisibleFlag]   nullable
 * @property {MemberReference} [notifyMember]
 * @property {object} [_info]
 */

/**
 * SurveyOption
 * @typedef {object} SurveyOption
 * @property {number} [id]  int32
 * @property {string} caption  Max length: 100;
 * @property {number} points  int32 nullable
 * @property {boolean} [visibleflag]   nullable
 * @property {object} [_info]
 */

/**
 * ServiceSurveyQuestion
 * @typedef {object} ServiceSurveyQuestion
 * @property {number} [id]  int32
 * @property {number} [sequenceNumber]  int32 nullable
 * @property {string} type   nullable
 * @property {string} question  Max length: 1000;
 * @property {array} [options]
 * @property {boolean} [includeFlag]   nullable
 * @property {boolean} [requiredFlag]   nullable
 * @property {number} [noAnswerPoints]  int32 nullable
 * @property {number} [surveyId]  int32 nullable
 * @property {object} [_info]
 */

/**
 * SurveyResult
 * @typedef {object} SurveyResult
 * @property {number} [id]  int32
 * @property {number} ticketId  int32 nullable
 * @property {string} [emailAddress]
 * @property {string} [footerResponse]
 * @property {boolean} [contactMeFlag]   nullable
 * @property {ContactReference} [contact]
 * @property {array} [results]
 * @property {number} [totalPoints]  int32 nullable
 * @property {CompanyReference} [company]
 * @property {number} [surveyId]  int32 nullable
 * @property {object} [_info]
 */

/**
 * TeamMember
 * @typedef {object} TeamMember
 * @property {number} [id]  int32
 * @property {BoardReference} [board]
 * @property {ServiceTeamReference} [team]
 * @property {MemberReference} [member]
 * @property {boolean} [teamLeaderFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ServiceTeam
 * @typedef {object} ServiceTeam
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {MemberReference} [leader]
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {boolean} [deleteNotifyFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ServiceTemplate
 * @typedef {object} ServiceTemplate
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {BoardReference} [board]
 * @property {ServiceTypeReference} [type]
 * @property {ServiceItemReference} [item]
 * @property {ServiceSubTypeReference} [subtype]
 * @property {ServiceLocationReference} [serviceLocation]
 * @property {ServiceStatusReference} [status]
 * @property {ServiceSourceReference} [source]
 * @property {PriorityReference} [priority]
 * @property {ServiceTeamReference} [team]
 * @property {CompanyReference} [company]
 * @property {ContactReference} [contact]
 * @property {SiteReference} [site]
 * @property {boolean} [assignedNotifyFlag]   nullable
 * @property {SystemLocationReference} [location]
 * @property {SystemDepartmentReference} [department]
 * @property {string} [summary]
 * @property {string} [problem]
 * @property {number} [hoursBudget]  double nullable
 * @property {string} [internalAnalysis]
 * @property {boolean} [timeBillableFlag]   nullable
 * @property {boolean} [expenseBillableFlag]   nullable
 * @property {string} [purchaseOrderNumber]
 * @property {string} [reference]
 * @property {boolean} [billComplete_Flag]   nullable
 * @property {boolean} [billServiceSeparatelyFlag]   nullable
 * @property {number} [billingAmount]  double nullable
 * @property {boolean} [billUnapprovedTimeAndExpensesFlag]   nullable
 * @property {boolean} [overrideFlag]   nullable
 * @property {boolean} [timeInvoiceFlag]   nullable
 * @property {boolean} [expenseInvoiceFlag]   nullable
 * @property {boolean} [productInvoiceFlag]   nullable
 * @property {AgreementReference} [agreement]
 * @property {string} [billingMethod]
 * @property {string} [severity]
 * @property {string} [impact]
 * @property {MemberReference} [assignedBy]
 * @property {number} [scheduleDaysBefore]  int32 nullable
 * @property {number} [serviceDaysBefore]  int32 nullable
 * @property {boolean} [attachScheduleToNewServiceFlag]   nullable
 * @property {boolean} [templateFlag]   nullable
 * @property {boolean} [emailContactFlag]   nullable
 * @property {boolean} [emailResourceFlag]   nullable
 * @property {boolean} [emailCCFlag]   nullable
 * @property {string} [emailCC]
 * @property {boolean} [restrictDownpaymentFlag]   nullable
 * @property {object} [_info]
 */

/**
 * TemplateGeneratedCountsModel
 * @typedef {object} TemplateGeneratedCountsModel
 * @property {number} [serviceCount]  int32
 * @property {number} [scheduleCount]  int32
 */

/**
 * ServiceTemplateInfo
 * @typedef {object} ServiceTemplateInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {boolean} [templateFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ServiceTicketLink
 * @typedef {object} ServiceTicketLink
 * @property {number} [id]  int32
 * @property {string} name  Max length: 50;
 * @property {boolean} [enabledFlag]   nullable
 * @property {string} linkText  Max length: 50;
 * @property {string} url  Max length: 1000;
 * @property {object} [_info]
 */

/**
 * ServiceTicketLinkInfo
 * @typedef {object} ServiceTicketLinkInfo
 * @property {number} [id]  int32
 * @property {string} [name]
 * @property {string} [linkText]
 * @property {string} [url]
 * @property {object} [_info]
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
 * TicketInfo
 * @typedef {object} TicketInfo
 * @property {number} [id]  int32
 * @property {string} [summary]
 * @property {CompanyReference} [company]
 * @property {object} [_info]
 */

/**
 * ActivityReference
 * @typedef {object} ActivityReference
 * @property {number} [id]  int32 nullable
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * ServiceTicketNote
 * @typedef {object} ServiceTicketNote
 * @property {number} [id]  int32
 * @property {string} [noteType]   nullable
 * @property {TicketReference} [ticket]
 * @property {string} [text]
 * @property {boolean} [isMarkdownFlag]   nullable
 * @property {boolean} [detailDescriptionFlag]   nullable
 * @property {boolean} [internalAnalysisFlag]   nullable
 * @property {boolean} [resolutionFlag]   nullable
 * @property {string} [timeStart]
 * @property {string} [timeEnd]
 * @property {boolean} [bundledFlag]   nullable
 * @property {boolean} [mergedFlag]   nullable
 * @property {boolean} [issueFlag]   nullable
 * @property {string} [originalAuthor]
 * @property {MemberReference} [member]
 * @property {ContactReference} [contact]
 * @property {object} [_info]
 */

/**
 * SuccessResponse
 * @typedef {object} SuccessResponse
 * @property {boolean} [success]
 * @property {string} [message]
 */

/**
 * ConfigurationReference
 * @typedef {object} ConfigurationReference
 * @property {number} [id]  int32 nullable
 * @property {string} [deviceIdentifier]
 * @property {object} [_info]
 */

/**
 * DocumentReference
 * @typedef {object} DocumentReference
 * @property {number} [id]  int32 nullable
 * @property {string} [name]
 * @property {object} [_info]
 */

/**
 * ServiceNote
 * @typedef {object} ServiceNote
 * @property {number} [id]  int32
 * @property {number} [ticketId]  int32 nullable
 * @property {string} [text]
 * @property {boolean} [detailDescriptionFlag]   nullable
 * @property {boolean} [internalAnalysisFlag]   nullable
 * @property {boolean} [resolutionFlag]   nullable
 * @property {boolean} [issueFlag]   nullable
 * @property {MemberReference} [member]
 * @property {ContactReference} [contact]
 * @property {boolean} [customerUpdatedFlag]   nullable
 * @property {boolean} [processNotifications]   nullable
 * @property {string} [dateCreated]
 * @property {string} [createdBy]
 * @property {boolean} [internalFlag]   nullable
 * @property {boolean} [externalFlag]   nullable
 * @property {object} [_info]
 */

/**
 * ProductReference
 * @typedef {object} ProductReference
 * @property {number} [id]  int32 nullable
 * @property {string} [description]
 * @property {object} [_info]
 */

/**
 * ScheduleEntryReference
 * @typedef {object} ScheduleEntryReference
 * @property {number} [id]  int32 nullable
 * @property {string} [description]
 * @property {object} [_info]
 */

/**
 * Task
 * @typedef {object} Task
 * @property {number} [id]  int32
 * @property {number} [ticketId]  int32 nullable
 * @property {string} [notes]
 * @property {boolean} [closedFlag]   nullable
 * @property {number} [priority]  int32 nullable
 * @property {ScheduleEntryReference} [schedule]
 * @property {ServiceCodeReference} [code]
 * @property {string} [resolution]
 * @property {string} [childScheduleAction]   nullable
 * @property {number} [childTicketId]  int32 nullable
 * @property {object} [_info]
 */

/**
 * TimeEntryReference
 * @typedef {object} TimeEntryReference
 * @property {number} [id]  int32 nullable
 * @property {object} [_info]
 */

/**
 * TicketSync
 * @typedef {object} TicketSync
 * @property {number} [id]  int32
 * @property {string} name  Max length: 80;
 * @property {string} vendorType   nullable
 * @property {IntegratorLoginReference} [integratorLogin]
 * @property {CompanyReference} [company]
 * @property {string} url
 * @property {string} [userName]
 * @property {string} [password]
 * @property {string} [psg]
 * @property {boolean} [problemDescriptionFlag]   nullable
 * @property {boolean} [internalAnalysisFlag]   nullable
 * @property {boolean} [resolutionFlag]   nullable
 * @property {object} [_info]
 */

export default class Service extends Manage {
  constructor(props) {
    super(props)
  }

  /**
   * Get List of Board
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Board[]>}
   */
  getServiceBoards(params = {}) {
    return this.request({
      path: `/service/boards`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Board
   * @param {Board} board board
   * @returns {Promise<Board>}
   */
  postServiceBoards(board) {
    return this.request({
      path: `/service/boards`,
      method: 'post',
      data: board,
    })
  }
  /**
   * Get List of BoardItemAssociation
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
   * @returns {Promise<BoardItemAssociation[]>}
   */
  getServiceBoardsByGrandparentIdItemsByParentIdAssociations(parentId, grandparentId, params = {}) {
    return this.request({
      path: `/service/boards/${grandparentId}/items/{parentId}/associations`,
      method: 'get',
      params,
    })
  }
  /**
   * Get BoardItemAssociation
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
   * @returns {Promise<BoardItemAssociation>}
   */
  getServiceBoardsByGrandparentIdItemsByParentIdAssociationsById(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/service/boards/${grandparentId}/items/{parentId}/associations/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put BoardItemAssociation
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {BoardItemAssociation} itemAssociation itemAssociation
   * @returns {Promise<BoardItemAssociation>}
   */
  putServiceBoardsByGrandparentIdItemsByParentIdAssociationsById(
    id,
    parentId,
    grandparentId,
    itemAssociation,
  ) {
    return this.request({
      path: `/service/boards/${grandparentId}/items/{parentId}/associations/{id}`,
      method: 'put',
      data: itemAssociation,
    })
  }

  /**
   * Patch BoardItemAssociation
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BoardItemAssociation>}
   */
  patchServiceBoardsByGrandparentIdItemsByParentIdAssociationsById(
    id,
    parentId,
    grandparentId,
    patchOperations,
  ) {
    return this.request({
      path: `/service/boards/${grandparentId}/items/{parentId}/associations/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of BoardItemAssociation
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
  getServiceBoardsByGrandparentIdItemsByParentIdAssociationsCount(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/service/boards/${grandparentId}/items/{parentId}/associations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardStatusNotification
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
   * @returns {Promise<BoardStatusNotification[]>}
   */
  getServiceBoardsByGrandparentIdStatusesByParentIdNotifications(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/service/boards/${grandparentId}/statuses/{parentId}/notifications`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BoardStatusNotification
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {BoardStatusNotification} boardStatusNotification boardStatusNotification
   * @returns {Promise<BoardStatusNotification>}
   */
  postServiceBoardsByGrandparentIdStatusesByParentIdNotifications(
    parentId,
    grandparentId,
    boardStatusNotification,
  ) {
    return this.request({
      path: `/service/boards/${grandparentId}/statuses/{parentId}/notifications`,
      method: 'post',
      data: boardStatusNotification,
    })
  }
  /**
   * Get BoardStatusNotification
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
   * @returns {Promise<BoardStatusNotification>}
   */
  getServiceBoardsByGrandparentIdStatusesByParentIdNotificationsById(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/service/boards/${grandparentId}/statuses/{parentId}/notifications/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BoardStatusNotification
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceBoardsByGrandparentIdStatusesByParentIdNotificationsById(
    id,
    parentId,
    grandparentId,
  ) {
    return this.request({
      path: `/service/boards/${grandparentId}/statuses/{parentId}/notifications/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put BoardStatusNotification
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {BoardStatusNotification} boardStatusNotification boardStatusNotification
   * @returns {Promise<BoardStatusNotification>}
   */
  putServiceBoardsByGrandparentIdStatusesByParentIdNotificationsById(
    id,
    parentId,
    grandparentId,
    boardStatusNotification,
  ) {
    return this.request({
      path: `/service/boards/${grandparentId}/statuses/{parentId}/notifications/{id}`,
      method: 'put',
      data: boardStatusNotification,
    })
  }

  /**
   * Patch BoardStatusNotification
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BoardStatusNotification>}
   */
  patchServiceBoardsByGrandparentIdStatusesByParentIdNotificationsById(
    id,
    parentId,
    grandparentId,
    patchOperations,
  ) {
    return this.request({
      path: `/service/boards/${grandparentId}/statuses/{parentId}/notifications/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of BoardStatusNotification
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
  getServiceBoardsByGrandparentIdStatusesByParentIdNotificationsCount(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/service/boards/${grandparentId}/statuses/{parentId}/notifications/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Board
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Board>}
   */
  getServiceBoardsById(id, params = {}) {
    return this.request({
      path: `/service/boards/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Board
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServiceBoardsById(id) {
    return this.request({
      path: `/service/boards/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Board
   * @param {number} id
   * @param {Board} board board
   * @returns {Promise<Board>}
   */
  putServiceBoardsById(id, board) {
    return this.request({
      path: `/service/boards/${id}`,
      method: 'put',
      data: board,
    })
  }

  /**
   * Patch Board
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Board>}
   */
  patchServiceBoardsById(id, patchOperations) {
    return this.request({
      path: `/service/boards/${id}`,
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
  getServiceBoardsByIdUsages(id, params = {}) {
    return this.request({
      path: `/service/boards/${id}/usages`,
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
  getServiceBoardsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/service/boards/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardAutoAssignResource
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardAutoAssignResource[]>}
   */
  getServiceBoardsByParentIdAutoAssignResources(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/autoAssignResources`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BoardAutoAssignResource
   * @param {number} parentId
   * @param {BoardAutoAssignResource} boardAutoAssignResource boardAutoAssignResource
   * @returns {Promise<BoardAutoAssignResource>}
   */
  postServiceBoardsByParentIdAutoAssignResources(parentId, boardAutoAssignResource) {
    return this.request({
      path: `/service/boards/${parentId}/autoAssignResources`,
      method: 'post',
      data: boardAutoAssignResource,
    })
  }
  /**
   * Get BoardAutoAssignResource
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
   * @returns {Promise<BoardAutoAssignResource>}
   */
  getServiceBoardsByParentIdAutoAssignResourcesById(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/autoAssignResources/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BoardAutoAssignResource
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceBoardsByParentIdAutoAssignResourcesById(id, parentId) {
    return this.request({
      path: `/service/boards/${parentId}/autoAssignResources/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put BoardAutoAssignResource
   * @param {number} id
   * @param {number} parentId
   * @param {BoardAutoAssignResource} boardAutoAssignResource boardAutoAssignResource
   * @returns {Promise<BoardAutoAssignResource>}
   */
  putServiceBoardsByParentIdAutoAssignResourcesById(id, parentId, boardAutoAssignResource) {
    return this.request({
      path: `/service/boards/${parentId}/autoAssignResources/{id}`,
      method: 'put',
      data: boardAutoAssignResource,
    })
  }

  /**
   * Patch BoardAutoAssignResource
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BoardAutoAssignResource>}
   */
  patchServiceBoardsByParentIdAutoAssignResourcesById(id, parentId, patchOperations) {
    return this.request({
      path: `/service/boards/${parentId}/autoAssignResources/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of BoardAutoAssignResource
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceBoardsByParentIdAutoAssignResourcesCount(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/autoAssignResources/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardAutoTemplate
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardAutoTemplate[]>}
   */
  getServiceBoardsByParentIdAutoTemplates(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/autoTemplates`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BoardAutoTemplate
   * @param {number} parentId
   * @param {BoardAutoTemplate} boardAutoTemplate boardAutoTemplate
   * @returns {Promise<BoardAutoTemplate>}
   */
  postServiceBoardsByParentIdAutoTemplates(parentId, boardAutoTemplate) {
    return this.request({
      path: `/service/boards/${parentId}/autoTemplates`,
      method: 'post',
      data: boardAutoTemplate,
    })
  }
  /**
   * Get BoardAutoTemplate
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
   * @returns {Promise<BoardAutoTemplate>}
   */
  getServiceBoardsByParentIdAutoTemplatesById(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/autoTemplates/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BoardAutoTemplate
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceBoardsByParentIdAutoTemplatesById(id, parentId) {
    return this.request({
      path: `/service/boards/${parentId}/autoTemplates/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put BoardAutoTemplate
   * @param {number} id
   * @param {number} parentId
   * @param {BoardAutoTemplate} boardAutoTemplate boardAutoTemplate
   * @returns {Promise<BoardAutoTemplate>}
   */
  putServiceBoardsByParentIdAutoTemplatesById(id, parentId, boardAutoTemplate) {
    return this.request({
      path: `/service/boards/${parentId}/autoTemplates/{id}`,
      method: 'put',
      data: boardAutoTemplate,
    })
  }

  /**
   * Patch BoardAutoTemplate
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BoardAutoTemplate>}
   */
  patchServiceBoardsByParentIdAutoTemplatesById(id, parentId, patchOperations) {
    return this.request({
      path: `/service/boards/${parentId}/autoTemplates/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of BoardAutoTemplate
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceBoardsByParentIdAutoTemplatesCount(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/autoTemplates/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardExcludedMember
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardExcludedMember[]>}
   */
  getServiceBoardsByParentIdExcludedMembers(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/excludedMembers`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BoardExcludedMember
   * @param {number} parentId
   * @param {BoardExcludedMember} boardExcludedMember boardExcludedMember
   * @returns {Promise<BoardExcludedMember>}
   */
  postServiceBoardsByParentIdExcludedMembers(parentId, boardExcludedMember) {
    return this.request({
      path: `/service/boards/${parentId}/excludedMembers`,
      method: 'post',
      data: boardExcludedMember,
    })
  }
  /**
   * Get BoardExcludedMember
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
   * @returns {Promise<BoardExcludedMember>}
   */
  getServiceBoardsByParentIdExcludedMembersById(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/excludedMembers/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BoardExcludedMember
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceBoardsByParentIdExcludedMembersById(id, parentId) {
    return this.request({
      path: `/service/boards/${parentId}/excludedMembers/{id}`,
      method: 'delete',
    })
  }
  /**
   * Get Count of BoardExcludedMember
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceBoardsByParentIdExcludedMembersCount(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/excludedMembers/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardItem
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardItem[]>}
   */
  getServiceBoardsByParentIdItems(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/items`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BoardItem
   * @param {number} parentId
   * @param {BoardItem} boardItem boardItem
   * @returns {Promise<BoardItem>}
   */
  postServiceBoardsByParentIdItems(parentId, boardItem) {
    return this.request({
      path: `/service/boards/${parentId}/items`,
      method: 'post',
      data: boardItem,
    })
  }
  /**
   * Get BoardItem
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
   * @returns {Promise<BoardItem>}
   */
  getServiceBoardsByParentIdItemsById(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/items/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BoardItem
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceBoardsByParentIdItemsById(id, parentId) {
    return this.request({
      path: `/service/boards/${parentId}/items/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put BoardItem
   * @param {number} id
   * @param {number} parentId
   * @param {BoardItem} boardItem boardItem
   * @returns {Promise<BoardItem>}
   */
  putServiceBoardsByParentIdItemsById(id, parentId, boardItem) {
    return this.request({
      path: `/service/boards/${parentId}/items/{id}`,
      method: 'put',
      data: boardItem,
    })
  }

  /**
   * Patch BoardItem
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BoardItem>}
   */
  patchServiceBoardsByParentIdItemsById(id, parentId, patchOperations) {
    return this.request({
      path: `/service/boards/${parentId}/items/{id}`,
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
  getServiceBoardsByParentIdItemsByIdUsages(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/items/{id}/usages`,
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
  getServiceBoardsByParentIdItemsByIdUsagesList(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/items/{id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Usage
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceBoardsByParentIdItemsCount(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/items/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardNotification
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardNotification[]>}
   */
  getServiceBoardsByParentIdNotifications(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/notifications`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BoardNotification
   * @param {number} parentId
   * @param {BoardNotification} boardNotification boardNotification
   * @returns {Promise<BoardNotification>}
   */
  postServiceBoardsByParentIdNotifications(parentId, boardNotification) {
    return this.request({
      path: `/service/boards/${parentId}/notifications`,
      method: 'post',
      data: boardNotification,
    })
  }
  /**
   * Get BoardNotification
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
   * @returns {Promise<BoardNotification>}
   */
  getServiceBoardsByParentIdNotificationsById(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/notifications/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BoardNotification
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceBoardsByParentIdNotificationsById(id, parentId) {
    return this.request({
      path: `/service/boards/${parentId}/notifications/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put BoardNotification
   * @param {number} id
   * @param {number} parentId
   * @param {BoardNotification} boardNotification boardNotification
   * @returns {Promise<BoardNotification>}
   */
  putServiceBoardsByParentIdNotificationsById(id, parentId, boardNotification) {
    return this.request({
      path: `/service/boards/${parentId}/notifications/{id}`,
      method: 'put',
      data: boardNotification,
    })
  }

  /**
   * Patch BoardNotification
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BoardNotification>}
   */
  patchServiceBoardsByParentIdNotificationsById(id, parentId, patchOperations) {
    return this.request({
      path: `/service/boards/${parentId}/notifications/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of BoardNotification
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceBoardsByParentIdNotificationsCount(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/notifications/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardStatus
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardStatus[]>}
   */
  getServiceBoardsByParentIdStatuses(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/statuses`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BoardStatus
   * @param {number} parentId
   * @param {BoardStatus} boardStatus boardStatus
   * @returns {Promise<BoardStatus>}
   */
  postServiceBoardsByParentIdStatuses(parentId, boardStatus) {
    return this.request({
      path: `/service/boards/${parentId}/statuses`,
      method: 'post',
      data: boardStatus,
    })
  }
  /**
   * Get BoardStatus
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
   * @returns {Promise<BoardStatus>}
   */
  getServiceBoardsByParentIdStatusesById(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/statuses/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BoardStatus
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceBoardsByParentIdStatusesById(id, parentId) {
    return this.request({
      path: `/service/boards/${parentId}/statuses/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put BoardStatus
   * @param {number} id
   * @param {number} parentId
   * @param {BoardStatus} boardStatus boardStatus
   * @returns {Promise<BoardStatus>}
   */
  putServiceBoardsByParentIdStatusesById(id, parentId, boardStatus) {
    return this.request({
      path: `/service/boards/${parentId}/statuses/{id}`,
      method: 'put',
      data: boardStatus,
    })
  }

  /**
   * Patch BoardStatus
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BoardStatus>}
   */
  patchServiceBoardsByParentIdStatusesById(id, parentId, patchOperations) {
    return this.request({
      path: `/service/boards/${parentId}/statuses/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get BoardStatusInfos
   * @param {number} parentId
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardStatusInfo>}
   */
  getServiceBoardsByParentIdStatusesByIdInfo(parentId, id, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/statuses/{id}/info`,
      method: 'get',
      params,
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
  getServiceBoardsByParentIdStatusesByIdUsages(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/statuses/{id}/usages`,
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
  getServiceBoardsByParentIdStatusesByIdUsagesList(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/statuses/{id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BoardStatus
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceBoardsByParentIdStatusesCount(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/statuses/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardStatusInfos
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardStatusInfo[]>}
   */
  getServiceBoardsByParentIdStatusesInfo(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/statuses/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BoardStatusInfos
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceBoardsByParentIdStatusesInfoCount(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/statuses/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardSubType
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardSubType[]>}
   */
  getServiceBoardsByParentIdSubtypes(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/subtypes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BoardSubType
   * @param {number} parentId
   * @param {BoardSubType} boardSubType boardSubType
   * @returns {Promise<BoardSubType>}
   */
  postServiceBoardsByParentIdSubtypes(parentId, boardSubType) {
    return this.request({
      path: `/service/boards/${parentId}/subtypes`,
      method: 'post',
      data: boardSubType,
    })
  }
  /**
   * Get BoardSubType
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
   * @returns {Promise<BoardSubType>}
   */
  getServiceBoardsByParentIdSubtypesById(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Usage
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceBoardsByParentIdSubtypesById(id, parentId) {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put BoardSubType
   * @param {number} id
   * @param {number} parentId
   * @param {BoardSubType} boardSubType boardSubType
   * @returns {Promise<BoardSubType>}
   */
  putServiceBoardsByParentIdSubtypesById(id, parentId, boardSubType) {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/{id}`,
      method: 'put',
      data: boardSubType,
    })
  }

  /**
   * Patch BoardSubType
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BoardSubType>}
   */
  patchServiceBoardsByParentIdSubtypesById(id, parentId, patchOperations) {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get BoardSubTypeInfos
   * @param {number} parentId
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardSubTypeInfo>}
   */
  getServiceBoardsByParentIdSubtypesByIdInfo(parentId, id, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/{id}/info`,
      method: 'get',
      params,
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
  getServiceBoardsByParentIdSubtypesByIdUsages(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/{id}/usages`,
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
  getServiceBoardsByParentIdSubtypesByIdUsagesList(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/{id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BoardSubType
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceBoardsByParentIdSubtypesCount(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardSubTypeInfos
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardSubTypeInfo[]>}
   */
  getServiceBoardsByParentIdSubtypesInfo(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BoardSubType
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceBoardsByParentIdSubtypesInfoCount(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/subtypes/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardTeam
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardTeam[]>}
   */
  getServiceBoardsByParentIdTeams(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/teams`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BoardTeam
   * @param {number} parentId
   * @param {BoardTeam} _boardTeam _boardTeam
   * @returns {Promise<BoardTeam>}
   */
  postServiceBoardsByParentIdTeams(parentId, _boardTeam) {
    return this.request({
      path: `/service/boards/${parentId}/teams`,
      method: 'post',
      data: _boardTeam,
    })
  }
  /**
   * Get BoardTeam
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
   * @returns {Promise<BoardTeam>}
   */
  getServiceBoardsByParentIdTeamsById(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/teams/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BoardTeam
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceBoardsByParentIdTeamsById(id, parentId) {
    return this.request({
      path: `/service/boards/${parentId}/teams/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put BoardTeam
   * @param {number} id
   * @param {number} parentId
   * @param {BoardTeam} _boardTeam _boardTeam
   * @returns {Promise<BoardTeam>}
   */
  putServiceBoardsByParentIdTeamsById(id, parentId, _boardTeam) {
    return this.request({
      path: `/service/boards/${parentId}/teams/{id}`,
      method: 'put',
      data: _boardTeam,
    })
  }

  /**
   * Patch BoardTeam
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BoardTeam>}
   */
  patchServiceBoardsByParentIdTeamsById(id, parentId, patchOperations) {
    return this.request({
      path: `/service/boards/${parentId}/teams/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get BoardTeamInfos
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
   * @returns {Promise<BoardTeamInfo>}
   */
  getServiceBoardsByParentIdTeamsByIdInfo(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/teams/{id}/info`,
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
  getServiceBoardsByParentIdTeamsByIdUsagesList(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/teams/{id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BoardTeam
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceBoardsByParentIdTeamsCount(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/teams/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardTeamInfos
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardTeamInfo[]>}
   */
  getServiceBoardsByParentIdTeamsInfo(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/teams/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BoardTeamInfo
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceBoardsByParentIdTeamsInfoCount(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/teams/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardType
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardType[]>}
   */
  getServiceBoardsByParentIdTypes(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/types`,
      method: 'get',
      params,
    })
  }

  /**
   * Post BoardType
   * @param {number} parentId
   * @param {BoardType} boardType boardType
   * @returns {Promise<BoardType>}
   */
  postServiceBoardsByParentIdTypes(parentId, boardType) {
    return this.request({
      path: `/service/boards/${parentId}/types`,
      method: 'post',
      data: boardType,
    })
  }
  /**
   * Get BoardType
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
   * @returns {Promise<BoardType>}
   */
  getServiceBoardsByParentIdTypesById(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/types/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete BoardType
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceBoardsByParentIdTypesById(id, parentId) {
    return this.request({
      path: `/service/boards/${parentId}/types/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put BoardType
   * @param {number} id
   * @param {number} parentId
   * @param {BoardType} boardType boardType
   * @returns {Promise<BoardType>}
   */
  putServiceBoardsByParentIdTypesById(id, parentId, boardType) {
    return this.request({
      path: `/service/boards/${parentId}/types/{id}`,
      method: 'put',
      data: boardType,
    })
  }

  /**
   * Patch BoardType
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<BoardType>}
   */
  patchServiceBoardsByParentIdTypesById(id, parentId, patchOperations) {
    return this.request({
      path: `/service/boards/${parentId}/types/{id}`,
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
  getServiceBoardsByParentIdTypesByIdUsages(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/types/{id}/usages`,
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
  getServiceBoardsByParentIdTypesByIdUsagesList(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/types/{id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BoardType
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceBoardsByParentIdTypesCount(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/types/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardTypeSubTypeItemAssociation
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardTypeSubTypeItemAssociation[]>}
   */
  getServiceBoardsByParentIdTypeSubTypeItemAssociations(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/typeSubTypeItemAssociations`,
      method: 'get',
      params,
    })
  }
  /**
   * Get BoardTypeSubTypeItemAssociation
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
   * @returns {Promise<BoardTypeSubTypeItemAssociation>}
   */
  getServiceBoardsByParentIdTypeSubTypeItemAssociationsById(id, parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/typeSubTypeItemAssociations/{id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BoardTypeSubTypeItemAssociation
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceBoardsByParentIdTypeSubTypeItemAssociationsCount(parentId, params = {}) {
    return this.request({
      path: `/service/boards/${parentId}/typeSubTypeItemAssociations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post Board
   * @param {BoardCopy} copy copy
   * @returns {Promise<Board>}
   */
  postServiceBoardsCopy(copy) {
    return this.request({
      path: `/service/boards/copy`,
      method: 'post',
      data: copy,
    })
  }
  /**
   * Get Count of Board
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceBoardsCount(params = {}) {
    return this.request({
      path: `/service/boards/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Code
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Code[]>}
   */
  getServiceCodes(params = {}) {
    return this.request({
      path: `/service/codes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Code
   * @param {Code} code code
   * @returns {Promise<Code>}
   */
  postServiceCodes(code) {
    return this.request({
      path: `/service/codes`,
      method: 'post',
      data: code,
    })
  }
  /**
   * Get Code
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Code>}
   */
  getServiceCodesById(id, params = {}) {
    return this.request({
      path: `/service/codes/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Code
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServiceCodesById(id) {
    return this.request({
      path: `/service/codes/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Code
   * @param {number} id
   * @param {Code} code code
   * @returns {Promise<Code>}
   */
  putServiceCodesById(id, code) {
    return this.request({
      path: `/service/codes/${id}`,
      method: 'put',
      data: code,
    })
  }

  /**
   * Patch Code
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Code>}
   */
  patchServiceCodesById(id, patchOperations) {
    return this.request({
      path: `/service/codes/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of Code
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceCodesCount(params = {}) {
    return this.request({
      path: `/service/codes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ServiceEmailTemplate
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceEmailTemplate[]>}
   */
  getServiceEmailTemplates(params = {}) {
    return this.request({
      path: `/service/emailTemplates`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ServiceEmailTemplate
   * @param {ServiceEmailTemplate} serviceEmailTemplate serviceEmailTemplate
   * @returns {Promise<ServiceEmailTemplate>}
   */
  postServiceEmailTemplates(serviceEmailTemplate) {
    return this.request({
      path: `/service/emailTemplates`,
      method: 'post',
      data: serviceEmailTemplate,
    })
  }
  /**
   * Get ServiceEmailTemplate
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceEmailTemplate>}
   */
  getServiceEmailTemplatesById(id, params = {}) {
    return this.request({
      path: `/service/emailTemplates/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ServiceEmailTemplate
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServiceEmailTemplatesById(id) {
    return this.request({
      path: `/service/emailTemplates/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ServiceEmailTemplate
   * @param {number} id
   * @param {ServiceEmailTemplate} serviceEmailTemplate serviceEmailTemplate
   * @returns {Promise<ServiceEmailTemplate>}
   */
  putServiceEmailTemplatesById(id, serviceEmailTemplate) {
    return this.request({
      path: `/service/emailTemplates/${id}`,
      method: 'put',
      data: serviceEmailTemplate,
    })
  }

  /**
   * Patch ServiceEmailTemplate
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ServiceEmailTemplate>}
   */
  patchServiceEmailTemplatesById(id, patchOperations) {
    return this.request({
      path: `/service/emailTemplates/${id}`,
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
  getServiceEmailTemplatesByIdUsages(id, params = {}) {
    return this.request({
      path: `/service/emailTemplates/${id}/usages`,
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
  getServiceEmailTemplatesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/service/emailTemplates/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ServiceEmailTemplate
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceEmailTemplatesCount(params = {}) {
    return this.request({
      path: `/service/emailTemplates/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Impact
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Impact[]>}
   */
  getServiceImpacts(params = {}) {
    return this.request({
      path: `/service/impacts`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Impact
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Impact>}
   */
  getServiceImpactsById(id, params = {}) {
    return this.request({
      path: `/service/impacts/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put Impact
   * @param {number} id
   * @param {Impact} impact impact
   * @returns {Promise<Impact>}
   */
  putServiceImpactsById(id, impact) {
    return this.request({
      path: `/service/impacts/${id}`,
      method: 'put',
      data: impact,
    })
  }

  /**
   * Patch Impact
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Impact>}
   */
  patchServiceImpactsById(id, patchOperations) {
    return this.request({
      path: `/service/impacts/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of Impact
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceImpactsCount(params = {}) {
    return this.request({
      path: `/service/impacts/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardInfo[]>}
   */
  getServiceInfoBoards(params = {}) {
    return this.request({
      path: `/service/info/boards`,
      method: 'get',
      params,
    })
  }
  /**
   * Get BoardInfo
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardInfo>}
   */
  getServiceInfoBoardsById(id, params = {}) {
    return this.request({
      path: `/service/info/boards/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BoardInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceInfoBoardsCount(params = {}) {
    return this.request({
      path: `/service/info/boards/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of BoardTypeInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardTypeInfo[]>}
   */
  getServiceInfoBoardtypes(params = {}) {
    return this.request({
      path: `/service/info/boardtypes`,
      method: 'get',
      params,
    })
  }
  /**
   * Get BoardTypeInfo
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<BoardTypeInfo>}
   */
  getServiceInfoBoardtypesById(id, params = {}) {
    return this.request({
      path: `/service/info/boardtypes/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of BoardTypeInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceInfoBoardtypesCount(params = {}) {
    return this.request({
      path: `/service/info/boardtypes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of KnowledgeBaseArticle
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<KnowledgeBaseArticle[]>}
   */
  getServiceKnowledgeBaseArticles(params = {}) {
    return this.request({
      path: `/service/knowledgeBaseArticles`,
      method: 'get',
      params,
    })
  }

  /**
   * Post KnowledgeBaseArticle
   * @param {KnowledgeBaseArticle} knowledgeBaseArticle knowledgeBaseArticle
   * @returns {Promise<KnowledgeBaseArticle>}
   */
  postServiceKnowledgeBaseArticles(knowledgeBaseArticle) {
    return this.request({
      path: `/service/knowledgeBaseArticles`,
      method: 'post',
      data: knowledgeBaseArticle,
    })
  }
  /**
   * Get KnowledgeBaseArticle
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<KnowledgeBaseArticle>}
   */
  getServiceKnowledgeBaseArticlesById(id, params = {}) {
    return this.request({
      path: `/service/knowledgeBaseArticles/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete KnowledgeBaseArticle
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServiceKnowledgeBaseArticlesById(id) {
    return this.request({
      path: `/service/knowledgeBaseArticles/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put KnowledgeBaseArticle
   * @param {number} id
   * @param {KnowledgeBaseArticle} knowledgeBaseArticle knowledgeBaseArticle
   * @returns {Promise<KnowledgeBaseArticle>}
   */
  putServiceKnowledgeBaseArticlesById(id, knowledgeBaseArticle) {
    return this.request({
      path: `/service/knowledgeBaseArticles/${id}`,
      method: 'put',
      data: knowledgeBaseArticle,
    })
  }

  /**
   * Patch KnowledgeBaseArticle
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<KnowledgeBaseArticle>}
   */
  patchServiceKnowledgeBaseArticlesById(id, patchOperations) {
    return this.request({
      path: `/service/knowledgeBaseArticles/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of KnowledgeBaseArticle
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceKnowledgeBaseArticlesCount(params = {}) {
    return this.request({
      path: `/service/knowledgeBaseArticles/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of KnowledgeBaseCategory
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<KnowledgeBaseCategory[]>}
   */
  getServiceKnowledgeBaseCategories(params = {}) {
    return this.request({
      path: `/service/knowledgeBaseCategories`,
      method: 'get',
      params,
    })
  }

  /**
   * Post KnowledgeBaseCategory
   * @param {KnowledgeBaseCategory} knowledgeBaseCategory knowledgeBaseCategory
   * @returns {Promise<KnowledgeBaseCategory>}
   */
  postServiceKnowledgeBaseCategories(knowledgeBaseCategory) {
    return this.request({
      path: `/service/knowledgeBaseCategories`,
      method: 'post',
      data: knowledgeBaseCategory,
    })
  }
  /**
   * Get KnowledgeBaseCategory
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<KnowledgeBaseCategory>}
   */
  getServiceKnowledgeBaseCategoriesById(id, params = {}) {
    return this.request({
      path: `/service/knowledgeBaseCategories/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete KnowledgeBaseCategory
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServiceKnowledgeBaseCategoriesById(id) {
    return this.request({
      path: `/service/knowledgeBaseCategories/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put KnowledgeBaseCategory
   * @param {number} id
   * @param {KnowledgeBaseCategory} knowledgeBaseCategory knowledgeBaseCategory
   * @returns {Promise<KnowledgeBaseCategory>}
   */
  putServiceKnowledgeBaseCategoriesById(id, knowledgeBaseCategory) {
    return this.request({
      path: `/service/knowledgeBaseCategories/${id}`,
      method: 'put',
      data: knowledgeBaseCategory,
    })
  }

  /**
   * Patch KnowledgeBaseCategory
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<KnowledgeBaseCategory>}
   */
  patchServiceKnowledgeBaseCategoriesById(id, patchOperations) {
    return this.request({
      path: `/service/knowledgeBaseCategories/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of KnowledgeBaseCategory
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceKnowledgeBaseCategoriesCount(params = {}) {
    return this.request({
      path: `/service/knowledgeBaseCategories/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get KnowledgeBaseSettings
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<KnowledgeBaseSettings>}
   */
  getServiceKnowledgebasesettings(params = {}) {
    return this.request({
      path: `/service/knowledgebasesettings`,
      method: 'get',
      params,
    })
  }

  /**
   * Post KnowledgeBaseSettings
   * @param {KnowledgeBaseSettings} knowledgeBaseSettings knowledgeBaseSettings
   * @returns {Promise<KnowledgeBaseSettings>}
   */
  postServiceKnowledgebasesettings(knowledgeBaseSettings) {
    return this.request({
      path: `/service/knowledgebasesettings`,
      method: 'post',
      data: knowledgeBaseSettings,
    })
  }
  /**
   * Get KnowledgeBaseSettings
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<KnowledgeBaseSettings>}
   */
  getServiceKnowledgebasesettingsById(id, params = {}) {
    return this.request({
      path: `/service/knowledgebasesettings/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put KnowledgeBaseSettings
   * @param {number} id
   * @param {KnowledgeBaseSettings} knowledgeBaseSettings knowledgeBaseSettings
   * @returns {Promise<KnowledgeBaseSettings>}
   */
  putServiceKnowledgebasesettingsById(id, knowledgeBaseSettings) {
    return this.request({
      path: `/service/knowledgebasesettings/${id}`,
      method: 'put',
      data: knowledgeBaseSettings,
    })
  }

  /**
   * Patch KnowledgeBaseSettings
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<KnowledgeBaseSettings>}
   */
  patchServiceKnowledgebasesettingsById(id, patchOperations) {
    return this.request({
      path: `/service/knowledgebasesettings/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get List of KnowledgeBaseSubCategory
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<KnowledgeBaseSubCategory[]>}
   */
  getServiceKnowledgeBaseSubCategories(params = {}) {
    return this.request({
      path: `/service/knowledgeBaseSubCategories`,
      method: 'get',
      params,
    })
  }

  /**
   * Post KnowledgeBaseSubCategory
   * @param {KnowledgeBaseSubCategory} knowledgeBaseSubCategory knowledgeBaseSubCategory
   * @returns {Promise<KnowledgeBaseSubCategory>}
   */
  postServiceKnowledgeBaseSubCategories(knowledgeBaseSubCategory) {
    return this.request({
      path: `/service/knowledgeBaseSubCategories`,
      method: 'post',
      data: knowledgeBaseSubCategory,
    })
  }
  /**
   * Get KnowledgeBaseSubCategory
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<KnowledgeBaseSubCategory>}
   */
  getServiceKnowledgeBaseSubCategoriesById(id, params = {}) {
    return this.request({
      path: `/service/knowledgeBaseSubCategories/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete KnowledgeBaseSubCategory
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServiceKnowledgeBaseSubCategoriesById(id) {
    return this.request({
      path: `/service/knowledgeBaseSubCategories/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put KnowledgeBaseSubCategory
   * @param {number} id
   * @param {KnowledgeBaseSubCategory} knowledgeBaseSubCategory knowledgeBaseSubCategory
   * @returns {Promise<KnowledgeBaseSubCategory>}
   */
  putServiceKnowledgeBaseSubCategoriesById(id, knowledgeBaseSubCategory) {
    return this.request({
      path: `/service/knowledgeBaseSubCategories/${id}`,
      method: 'put',
      data: knowledgeBaseSubCategory,
    })
  }

  /**
   * Patch KnowledgeBaseSubCategory
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<KnowledgeBaseSubCategory>}
   */
  patchServiceKnowledgeBaseSubCategoriesById(id, patchOperations) {
    return this.request({
      path: `/service/knowledgeBaseSubCategories/${id}`,
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
  getServiceKnowledgeBaseSubCategoriesByIdUsages(id, params = {}) {
    return this.request({
      path: `/service/knowledgeBaseSubCategories/${id}/usages`,
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
  getServiceKnowledgeBaseSubCategoriesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/service/knowledgeBaseSubCategories/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of KnowledgeBaseSubCategory
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceKnowledgeBaseSubCategoriesCount(params = {}) {
    return this.request({
      path: `/service/knowledgeBaseSubCategories/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ServiceLocation
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceLocation[]>}
   */
  getServiceLocations(params = {}) {
    return this.request({
      path: `/service/locations`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ServiceLocation
   * @param {ServiceLocation} location location
   * @returns {Promise<ServiceLocation>}
   */
  postServiceLocations(location) {
    return this.request({
      path: `/service/locations`,
      method: 'post',
      data: location,
    })
  }
  /**
   * Get ServiceLocation
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceLocation>}
   */
  getServiceLocationsById(id, params = {}) {
    return this.request({
      path: `/service/locations/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ServiceLocation
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServiceLocationsById(id) {
    return this.request({
      path: `/service/locations/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ServiceLocation
   * @param {number} id
   * @param {ServiceLocation} location location
   * @returns {Promise<ServiceLocation>}
   */
  putServiceLocationsById(id, location) {
    return this.request({
      path: `/service/locations/${id}`,
      method: 'put',
      data: location,
    })
  }

  /**
   * Patch ServiceLocation
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ServiceLocation>}
   */
  patchServiceLocationsById(id, patchOperations) {
    return this.request({
      path: `/service/locations/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ServiceLocationInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceLocationInfo>}
   */
  getServiceLocationsByIdInfo(id, params = {}) {
    return this.request({
      path: `/service/locations/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ServiceLocation
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceLocationsCount(params = {}) {
    return this.request({
      path: `/service/locations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ServiceLocationInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceLocationInfo[]>}
   */
  getServiceLocationsInfo(params = {}) {
    return this.request({
      path: `/service/locations/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ServiceLocationInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceLocationsInfoCount(params = {}) {
    return this.request({
      path: `/service/locations/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Priority
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Priority[]>}
   */
  getServicePriorities(params = {}) {
    return this.request({
      path: `/service/priorities`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Priority
   * @param {Priority} priority priority
   * @returns {Promise<Priority>}
   */
  postServicePriorities(priority) {
    return this.request({
      path: `/service/priorities`,
      method: 'post',
      data: priority,
    })
  }
  /**
   * Get Priority
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Priority>}
   */
  getServicePrioritiesById(id, params = {}) {
    return this.request({
      path: `/service/priorities/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Priority
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServicePrioritiesById(id) {
    return this.request({
      path: `/service/priorities/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Priority
   * @param {number} id
   * @param {Priority} priority priority
   * @returns {Promise<Priority>}
   */
  putServicePrioritiesById(id, priority) {
    return this.request({
      path: `/service/priorities/${id}`,
      method: 'put',
      data: priority,
    })
  }

  /**
   * Patch Priority
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Priority>}
   */
  patchServicePrioritiesById(id, patchOperations) {
    return this.request({
      path: `/service/priorities/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Priority
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
  getServicePrioritiesByIdImage(id, useDefaultFlag, lastModified, params = {}) {
    return this.request({
      path: `/service/priorities/${id}/image`,
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
  getServicePrioritiesByIdUsages(id, params = {}) {
    return this.request({
      path: `/service/priorities/${id}/usages`,
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
  getServicePrioritiesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/service/priorities/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Priority
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServicePrioritiesCount(params = {}) {
    return this.request({
      path: `/service/priorities/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get PriorityInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PriorityInfo>}
   */
  getServicePriorityByIdInfo(id, params = {}) {
    return this.request({
      path: `/service/priority/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of PriorityInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<PriorityInfo[]>}
   */
  getServicePriorityInfo(params = {}) {
    return this.request({
      path: `/service/priority/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get SchedulingMemberInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SchedulingMemberInfo>}
   */
  getServiceSchedulingMembersByIdInfo(id, params = {}) {
    return this.request({
      path: `/service/scheduling/members/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SchedulingMemberInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SchedulingMemberInfo[]>}
   */
  getServiceSchedulingMembersInfo(params = {}) {
    return this.request({
      path: `/service/scheduling/members/info`,
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
  getServiceSchedulingMembersInfoCount(params = {}) {
    return this.request({
      path: `/service/scheduling/members/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ServiceSignoff
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceSignoff[]>}
   */
  getServiceServiceSignoff(params = {}) {
    return this.request({
      path: `/service/serviceSignoff`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ServiceSignoff
   * @param {ServiceSignoff} serviceSignoff serviceSignoff
   * @returns {Promise<ServiceSignoff>}
   */
  postServiceServiceSignoff(serviceSignoff) {
    return this.request({
      path: `/service/serviceSignoff`,
      method: 'post',
      data: serviceSignoff,
    })
  }
  /**
   * Get ServiceSignoff
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceSignoff>}
   */
  getServiceServiceSignoffById(id, params = {}) {
    return this.request({
      path: `/service/serviceSignoff/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ServiceSignoff
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServiceServiceSignoffById(id) {
    return this.request({
      path: `/service/serviceSignoff/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ServiceSignoff
   * @param {number} id
   * @param {ServiceSignoff} serviceSignoff serviceSignoff
   * @returns {Promise<ServiceSignoff>}
   */
  putServiceServiceSignoffById(id, serviceSignoff) {
    return this.request({
      path: `/service/serviceSignoff/${id}`,
      method: 'put',
      data: serviceSignoff,
    })
  }

  /**
   * Patch ServiceSignoff
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ServiceSignoff>}
   */
  patchServiceServiceSignoffById(id, patchOperations) {
    return this.request({
      path: `/service/serviceSignoff/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ServiceSignoffInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceSignoffInfo>}
   */
  getServiceServiceSignoffByIdInfo(id, params = {}) {
    return this.request({
      path: `/service/serviceSignoff/${id}/info`,
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
  getServiceServiceSignoffByIdUsages(id, params = {}) {
    return this.request({
      path: `/service/serviceSignoff/${id}/usages`,
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
  getServiceServiceSignoffByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/service/serviceSignoff/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ServiceSignoff
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceServiceSignoffCount(params = {}) {
    return this.request({
      path: `/service/serviceSignoff/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ServiceSignoffInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceSignoffInfo[]>}
   */
  getServiceServiceSignoffInfo(params = {}) {
    return this.request({
      path: `/service/serviceSignoff/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ServiceSignoffInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceServiceSignoffInfoCount(params = {}) {
    return this.request({
      path: `/service/serviceSignoff/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Severity
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Severity[]>}
   */
  getServiceSeverities(params = {}) {
    return this.request({
      path: `/service/severities`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Severity
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Severity>}
   */
  getServiceSeveritiesById(id, params = {}) {
    return this.request({
      path: `/service/severities/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Put Severity
   * @param {number} id
   * @param {Severity} severity severity
   * @returns {Promise<Severity>}
   */
  putServiceSeveritiesById(id, severity) {
    return this.request({
      path: `/service/severities/${id}`,
      method: 'put',
      data: severity,
    })
  }

  /**
   * Patch Severity
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Severity>}
   */
  patchServiceSeveritiesById(id, patchOperations) {
    return this.request({
      path: `/service/severities/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of Severity
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceSeveritiesCount(params = {}) {
    return this.request({
      path: `/service/severities/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get SLAInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SLAInfo>}
   */
  getServiceSlainfoByIdInfo(id, params = {}) {
    return this.request({
      path: `/service/slainfo/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SLAInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SLAInfo[]>}
   */
  getServiceSlainfoInfo(params = {}) {
    return this.request({
      path: `/service/slainfo/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SLA
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SLA[]>}
   */
  getServiceSLAs(params = {}) {
    return this.request({
      path: `/service/SLAs`,
      method: 'get',
      params,
    })
  }

  /**
   * Post SLA
   * @param {SLA} sLA sLA
   * @returns {Promise<SLA>}
   */
  postServiceSLAs(sLA) {
    return this.request({
      path: `/service/SLAs`,
      method: 'post',
      data: sLA,
    })
  }
  /**
   * Get SLA
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SLA>}
   */
  getServiceSLAsById(id, params = {}) {
    return this.request({
      path: `/service/SLAs/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete SLA
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServiceSLAsById(id) {
    return this.request({
      path: `/service/SLAs/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put SLA
   * @param {number} id
   * @param {SLA} sLA sLA
   * @returns {Promise<SLA>}
   */
  putServiceSLAsById(id, sLA) {
    return this.request({
      path: `/service/SLAs/${id}`,
      method: 'put',
      data: sLA,
    })
  }

  /**
   * Patch SLA
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<SLA>}
   */
  patchServiceSLAsById(id, patchOperations) {
    return this.request({
      path: `/service/SLAs/${id}`,
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
  getServiceSLAsByIdUsages(id, params = {}) {
    return this.request({
      path: `/service/SLAs/${id}/usages`,
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
  getServiceSLAsByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/service/SLAs/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SLAPriority
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SLAPriority[]>}
   */
  getServiceSLAsByParentIdPriorities(parentId, params = {}) {
    return this.request({
      path: `/service/SLAs/${parentId}/priorities`,
      method: 'get',
      params,
    })
  }

  /**
   * Post SLAPriority
   * @param {number} parentId
   * @param {SLAPriority} sLAPriority sLAPriority
   * @returns {Promise<SLAPriority>}
   */
  postServiceSLAsByParentIdPriorities(parentId, sLAPriority) {
    return this.request({
      path: `/service/SLAs/${parentId}/priorities`,
      method: 'post',
      data: sLAPriority,
    })
  }
  /**
   * Get SLAPriority
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
   * @returns {Promise<SLAPriority>}
   */
  getServiceSLAsByParentIdPrioritiesById(id, parentId, params = {}) {
    return this.request({
      path: `/service/SLAs/${parentId}/priorities/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete SLAPriority
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceSLAsByParentIdPrioritiesById(id, parentId) {
    return this.request({
      path: `/service/SLAs/${parentId}/priorities/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put SLAPriority
   * @param {number} id
   * @param {number} parentId
   * @param {SLAPriority} sLAPriority sLAPriority
   * @returns {Promise<SLAPriority>}
   */
  putServiceSLAsByParentIdPrioritiesById(id, parentId, sLAPriority) {
    return this.request({
      path: `/service/SLAs/${parentId}/priorities/{id}`,
      method: 'put',
      data: sLAPriority,
    })
  }

  /**
   * Patch SLAPriority
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<SLAPriority>}
   */
  patchServiceSLAsByParentIdPrioritiesById(id, parentId, patchOperations) {
    return this.request({
      path: `/service/SLAs/${parentId}/priorities/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of SLAPriority
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceSLAsByParentIdPrioritiesCount(parentId, params = {}) {
    return this.request({
      path: `/service/SLAs/${parentId}/priorities/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SLA
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceSLAsCount(params = {}) {
    return this.request({
      path: `/service/SLAs/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SLAInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceSLAsInfoCount(params = {}) {
    return this.request({
      path: `/service/SLAs/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Source
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Source[]>}
   */
  getServiceSources(params = {}) {
    return this.request({
      path: `/service/sources`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Source
   * @param {Source} source source
   * @returns {Promise<Source>}
   */
  postServiceSources(source) {
    return this.request({
      path: `/service/sources`,
      method: 'post',
      data: source,
    })
  }
  /**
   * Get Source
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Source>}
   */
  getServiceSourcesById(id, params = {}) {
    return this.request({
      path: `/service/sources/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Source
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServiceSourcesById(id) {
    return this.request({
      path: `/service/sources/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Source
   * @param {number} id
   * @param {Source} source source
   * @returns {Promise<Source>}
   */
  putServiceSourcesById(id, source) {
    return this.request({
      path: `/service/sources/${id}`,
      method: 'put',
      data: source,
    })
  }

  /**
   * Patch Source
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Source>}
   */
  patchServiceSourcesById(id, patchOperations) {
    return this.request({
      path: `/service/sources/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get SourceInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SourceInfo>}
   */
  getServiceSourcesByIdInfo(id, params = {}) {
    return this.request({
      path: `/service/sources/${id}/info`,
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
  getServiceSourcesByIdUsages(id, params = {}) {
    return this.request({
      path: `/service/sources/${id}/usages`,
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
  getServiceSourcesByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/service/sources/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of Source
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceSourcesCount(params = {}) {
    return this.request({
      path: `/service/sources/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SourceInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SourceInfo[]>}
   */
  getServiceSourcesInfo(params = {}) {
    return this.request({
      path: `/service/sources/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of SourceInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceSourcesInfoCount(params = {}) {
    return this.request({
      path: `/service/sources/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ServiceSurvey
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceSurvey[]>}
   */
  getServiceSurveys(params = {}) {
    return this.request({
      path: `/service/surveys`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ServiceSurvey
   * @param {ServiceSurvey} survey survey
   * @returns {Promise<ServiceSurvey>}
   */
  postServiceSurveys(survey) {
    return this.request({
      path: `/service/surveys`,
      method: 'post',
      data: survey,
    })
  }
  /**
   * Get List of SurveyOption
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
   * @returns {Promise<SurveyOption[]>}
   */
  getServiceSurveysByGrandparentIdQuestionsByParentIdOptions(parentId, grandparentId, params = {}) {
    return this.request({
      path: `/service/surveys/${grandparentId}/questions/{parentId}/options`,
      method: 'get',
      params,
    })
  }

  /**
   * Post SurveyOption
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {SurveyOption} surveyOption surveyOption
   * @returns {Promise<SurveyOption>}
   */
  postServiceSurveysByGrandparentIdQuestionsByParentIdOptions(
    parentId,
    grandparentId,
    surveyOption,
  ) {
    return this.request({
      path: `/service/surveys/${grandparentId}/questions/{parentId}/options`,
      method: 'post',
      data: surveyOption,
    })
  }
  /**
   * Get SurveyOption
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
   * @returns {Promise<SurveyOption>}
   */
  getServiceSurveysByGrandparentIdQuestionsByParentIdOptionsById(
    id,
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/service/surveys/${grandparentId}/questions/{parentId}/options/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete SurveyOption
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceSurveysByGrandparentIdQuestionsByParentIdOptionsById(id, parentId, grandparentId) {
    return this.request({
      path: `/service/surveys/${grandparentId}/questions/{parentId}/options/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put SurveyOption
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {SurveyOption} surveyOption surveyOption
   * @returns {Promise<SurveyOption>}
   */
  putServiceSurveysByGrandparentIdQuestionsByParentIdOptionsById(
    id,
    parentId,
    grandparentId,
    surveyOption,
  ) {
    return this.request({
      path: `/service/surveys/${grandparentId}/questions/{parentId}/options/{id}`,
      method: 'put',
      data: surveyOption,
    })
  }

  /**
   * Patch SurveyOption
   * @param {number} id
   * @param {number} parentId
   * @param {number} grandparentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<SurveyOption>}
   */
  patchServiceSurveysByGrandparentIdQuestionsByParentIdOptionsById(
    id,
    parentId,
    grandparentId,
    patchOperations,
  ) {
    return this.request({
      path: `/service/surveys/${grandparentId}/questions/{parentId}/options/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of SurveyOption
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
  getServiceSurveysByGrandparentIdQuestionsByParentIdOptionsCount(
    parentId,
    grandparentId,
    params = {},
  ) {
    return this.request({
      path: `/service/surveys/${grandparentId}/questions/{parentId}/options/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ServiceSurvey
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceSurvey>}
   */
  getServiceSurveysById(id, params = {}) {
    return this.request({
      path: `/service/surveys/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ServiceSurvey
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServiceSurveysById(id) {
    return this.request({
      path: `/service/surveys/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ServiceSurvey
   * @param {number} id
   * @param {ServiceSurvey} survey survey
   * @returns {Promise<ServiceSurvey>}
   */
  putServiceSurveysById(id, survey) {
    return this.request({
      path: `/service/surveys/${id}`,
      method: 'put',
      data: survey,
    })
  }

  /**
   * Patch ServiceSurvey
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ServiceSurvey>}
   */
  patchServiceSurveysById(id, patchOperations) {
    return this.request({
      path: `/service/surveys/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post ServiceSurvey
   * @param {number} id
   * @returns {Promise<ServiceSurvey>}
   */
  postServiceSurveysByIdCopy(id) {
    return this.request({
      path: `/service/surveys/${id}/copy`,
      method: 'post',
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
  getServiceSurveysByIdUsages(id, params = {}) {
    return this.request({
      path: `/service/surveys/${id}/usages`,
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
  getServiceSurveysByIdUsagesList(id, params = {}) {
    return this.request({
      path: `/service/surveys/${id}/usages/list`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ServiceSurveyQuestion
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceSurveyQuestion[]>}
   */
  getServiceSurveysByParentIdQuestions(parentId, params = {}) {
    return this.request({
      path: `/service/surveys/${parentId}/questions`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ServiceSurveyQuestion
   * @param {number} parentId
   * @param {ServiceSurveyQuestion} serviceSurveyQuestion serviceSurveyQuestion
   * @returns {Promise<ServiceSurveyQuestion>}
   */
  postServiceSurveysByParentIdQuestions(parentId, serviceSurveyQuestion) {
    return this.request({
      path: `/service/surveys/${parentId}/questions`,
      method: 'post',
      data: serviceSurveyQuestion,
    })
  }
  /**
   * Get ServiceSurveyQuestion
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
   * @returns {Promise<ServiceSurveyQuestion>}
   */
  getServiceSurveysByParentIdQuestionsById(id, parentId, params = {}) {
    return this.request({
      path: `/service/surveys/${parentId}/questions/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ServiceSurveyQuestion
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceSurveysByParentIdQuestionsById(id, parentId) {
    return this.request({
      path: `/service/surveys/${parentId}/questions/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ServiceSurveyQuestion
   * @param {number} id
   * @param {number} parentId
   * @param {ServiceSurveyQuestion} serviceSurveyQuestion serviceSurveyQuestion
   * @returns {Promise<ServiceSurveyQuestion>}
   */
  putServiceSurveysByParentIdQuestionsById(id, parentId, serviceSurveyQuestion) {
    return this.request({
      path: `/service/surveys/${parentId}/questions/{id}`,
      method: 'put',
      data: serviceSurveyQuestion,
    })
  }

  /**
   * Patch ServiceSurveyQuestion
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ServiceSurveyQuestion>}
   */
  patchServiceSurveysByParentIdQuestionsById(id, parentId, patchOperations) {
    return this.request({
      path: `/service/surveys/${parentId}/questions/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Post ServiceSurveyQuestion
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<ServiceSurveyQuestion>}
   */
  postServiceSurveysByParentIdQuestionsByIdCopy(id, parentId) {
    return this.request({
      path: `/service/surveys/${parentId}/questions/{id}/copy`,
      method: 'post',
    })
  }
  /**
   * Get Count of ServiceSurveyQuestion
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceSurveysByParentIdQuestionsCount(parentId, params = {}) {
    return this.request({
      path: `/service/surveys/${parentId}/questions/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of SurveyResult
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<SurveyResult[]>}
   */
  getServiceSurveysByParentIdResults(parentId, params = {}) {
    return this.request({
      path: `/service/surveys/${parentId}/results`,
      method: 'get',
      params,
    })
  }

  /**
   * Post SurveyResult
   * @param {number} parentId
   * @param {SurveyResult} surveyResult surveyResult
   * @returns {Promise<SurveyResult>}
   */
  postServiceSurveysByParentIdResults(parentId, surveyResult) {
    return this.request({
      path: `/service/surveys/${parentId}/results`,
      method: 'post',
      data: surveyResult,
    })
  }
  /**
   * Get SurveyResult
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
   * @returns {Promise<SurveyResult>}
   */
  getServiceSurveysByParentIdResultsById(id, parentId, params = {}) {
    return this.request({
      path: `/service/surveys/${parentId}/results/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete SurveyResult
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceSurveysByParentIdResultsById(id, parentId) {
    return this.request({
      path: `/service/surveys/${parentId}/results/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put SurveyResult
   * @param {number} id
   * @param {number} parentId
   * @param {SurveyResult} surveyResult surveyResult
   * @returns {Promise<SurveyResult>}
   */
  putServiceSurveysByParentIdResultsById(id, parentId, surveyResult) {
    return this.request({
      path: `/service/surveys/${parentId}/results/{id}`,
      method: 'put',
      data: surveyResult,
    })
  }

  /**
   * Patch SurveyResult
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<SurveyResult>}
   */
  patchServiceSurveysByParentIdResultsById(id, parentId, patchOperations) {
    return this.request({
      path: `/service/surveys/${parentId}/results/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of SurveyResult
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceSurveysByParentIdResultsCount(parentId, params = {}) {
    return this.request({
      path: `/service/surveys/${parentId}/results/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ServiceSurvey
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceSurveysCount(params = {}) {
    return this.request({
      path: `/service/surveys/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post TeamMember
   * @param {TeamMember} teamMember teamMember
   * @returns {Promise<TeamMember>}
   */
  postServiceTeamMembers(teamMember) {
    return this.request({
      path: `/service/teamMembers`,
      method: 'post',
      data: teamMember,
    })
  }
  /**
   * Get List of ServiceTeam
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceTeam[]>}
   */
  getServiceTeams(params = {}) {
    return this.request({
      path: `/service/teams`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ServiceTeam
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceTeam>}
   */
  getServiceTeamsById(id, params = {}) {
    return this.request({
      path: `/service/teams/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ServiceTeam
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTeamsCount(params = {}) {
    return this.request({
      path: `/service/teams/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ServiceTemplate
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceTemplate[]>}
   */
  getServiceTemplates(params = {}) {
    return this.request({
      path: `/service/templates`,
      method: 'get',
      params,
    })
  }
  /**
   * Get ServiceTemplate
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceTemplate>}
   */
  getServiceTemplatesById(id, params = {}) {
    return this.request({
      path: `/service/templates/${id}`,
      method: 'get',
      params,
    })
  }
  /**
   * Post Count of ServiceTemplate
   * @param {number} id
   * @returns {Promise<TemplateGeneratedCountsModel>}
   */
  postServiceTemplatesByIdGenerate(id) {
    return this.request({
      path: `/service/templates/${id}/generate`,
      method: 'post',
    })
  }
  /**
   * Get ServiceTemplateInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceTemplateInfo>}
   */
  getServiceTemplatesByIdInfo(id, params = {}) {
    return this.request({
      path: `/service/templates/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ServiceTemplate
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTemplatesCount(params = {}) {
    return this.request({
      path: `/service/templates/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ServiceTemplateInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceTemplateInfo[]>}
   */
  getServiceTemplatesInfo(params = {}) {
    return this.request({
      path: `/service/templates/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ServiceTemplateInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTemplatesInfoCount(params = {}) {
    return this.request({
      path: `/service/templates/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ServiceTicketLink
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceTicketLink[]>}
   */
  getServiceTicketLinks(params = {}) {
    return this.request({
      path: `/service/ticketLinks`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ServiceTicketLink
   * @param {ServiceTicketLink} serviceTicketLink serviceTicketLink
   * @returns {Promise<ServiceTicketLink>}
   */
  postServiceTicketLinks(serviceTicketLink) {
    return this.request({
      path: `/service/ticketLinks`,
      method: 'post',
      data: serviceTicketLink,
    })
  }
  /**
   * Get ServiceTicketLink
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceTicketLink>}
   */
  getServiceTicketLinksById(id, params = {}) {
    return this.request({
      path: `/service/ticketLinks/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ServiceTicketLink
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServiceTicketLinksById(id) {
    return this.request({
      path: `/service/ticketLinks/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put ServiceTicketLink
   * @param {number} id
   * @param {ServiceTicketLink} serviceTicketLink serviceTicketLink
   * @returns {Promise<ServiceTicketLink>}
   */
  putServiceTicketLinksById(id, serviceTicketLink) {
    return this.request({
      path: `/service/ticketLinks/${id}`,
      method: 'put',
      data: serviceTicketLink,
    })
  }

  /**
   * Patch ServiceTicketLink
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ServiceTicketLink>}
   */
  patchServiceTicketLinksById(id, patchOperations) {
    return this.request({
      path: `/service/ticketLinks/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get ServiceTicketLinkInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceTicketLinkInfo>}
   */
  getServiceTicketLinksByIdInfo(id, params = {}) {
    return this.request({
      path: `/service/ticketLinks/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ServiceTicketLink
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTicketLinksCount(params = {}) {
    return this.request({
      path: `/service/ticketLinks/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ServiceTicketLinkInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceTicketLinkInfo[]>}
   */
  getServiceTicketLinksInfo(params = {}) {
    return this.request({
      path: `/service/ticketLinks/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ServiceTicketLinkInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTicketLinksInfoCount(params = {}) {
    return this.request({
      path: `/service/ticketLinks/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ConnectWise.Apis.v3_0.v2015_3.Service.Ticket.Ticket
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Ticket[]>}
   */
  getServiceTickets(params = {}) {
    return this.request({
      path: `/service/tickets`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Ticket
   * @param {Ticket} ticket ticket
   * @returns {Promise<Ticket>}
   */
  postServiceTickets(ticket) {
    return this.request({
      path: `/service/tickets`,
      method: 'post',
      data: ticket,
    })
  }
  /**
   * Get Ticket
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Ticket>}
   */
  getServiceTicketsById(id, params = {}) {
    return this.request({
      path: `/service/tickets/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Ticket
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServiceTicketsById(id) {
    return this.request({
      path: `/service/tickets/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put Ticket
   * @param {number} id
   * @param {Ticket} ticket ticket
   * @returns {Promise<Ticket>}
   */
  putServiceTicketsById(id, ticket) {
    return this.request({
      path: `/service/tickets/${id}`,
      method: 'put',
      data: ticket,
    })
  }

  /**
   * Patch Ticket
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Ticket>}
   */
  patchServiceTicketsById(id, patchOperations) {
    return this.request({
      path: `/service/tickets/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get TicketInfos
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TicketInfo>}
   */
  getServiceTicketsByIdInfo(id, params = {}) {
    return this.request({
      path: `/service/tickets/${id}/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ActivityReference
            Gets activities associated to the ticket
            Please use the /sales/activities?conditions=ticket/id={id} endpoint
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ActivityReference[]>}
   */
  getServiceTicketsByParentIdActivities(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/activities`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ActivityReference
            Gets count of activities associated to the ticket
            Please use the /sales/activities/count?conditions=ticket/id={id} endpoint
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTicketsByParentIdActivitiesCount(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/activities/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ServiceTicketNote
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceTicketNote[]>}
   */
  getServiceTicketsByParentIdAllNotes(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/allNotes`,
      method: 'get',
      params,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} parentId
   * @param {TicketBundle} bundle bundle
   * @returns {Promise<SuccessResponse>}
   */
  postServiceTicketsByParentIdAttachChildren(parentId, bundle) {
    return this.request({
      path: `/service/tickets/${parentId}/attachChildren`,
      method: 'post',
      data: bundle,
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
  getServiceTicketsByParentIdConfigurations(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/configurations`,
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
  postServiceTicketsByParentIdConfigurations(parentId, configuration) {
    return this.request({
      path: `/service/tickets/${parentId}/configurations`,
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
  getServiceTicketsByParentIdConfigurationsById(id, parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/configurations/{id}`,
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
  deleteServiceTicketsByParentIdConfigurationsById(id, parentId) {
    return this.request({
      path: `/service/tickets/${parentId}/configurations/{id}`,
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
  getServiceTicketsByParentIdConfigurationsCount(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/configurations/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} parentId
   * @param {ConvertToProject} conversion conversion
   * @returns {Promise<SuccessResponse>}
   */
  postServiceTicketsByParentIdConvert(parentId, conversion) {
    return this.request({
      path: `/service/tickets/${parentId}/convert`,
      method: 'post',
      data: conversion,
    })
  }
  /**
   * Get List of DocumentReference
            Gets the documents associated to the ticket
            Please use the /system/documents?recordType=Ticket&amp;recordId={id} endpoint
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<DocumentReference[]>}
   */
  getServiceTicketsByParentIdDocuments(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/documents`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of DocumentReference
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTicketsByParentIdDocumentsCount(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/documents/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post SuccessResponse
   * @param {number} parentId
   * @param {TicketMerge} merge merge
   * @returns {Promise<SuccessResponse>}
   */
  postServiceTicketsByParentIdMerge(parentId, merge) {
    return this.request({
      path: `/service/tickets/${parentId}/merge`,
      method: 'post',
      data: merge,
    })
  }
  /**
   * Get List of ServiceNote
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ServiceNote[]>}
   */
  getServiceTicketsByParentIdNotes(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/notes`,
      method: 'get',
      params,
    })
  }

  /**
   * Post ServiceNote
   * @param {number} parentId
   * @param {ServiceNote} serviceNote serviceNote
   * @returns {Promise<ServiceNote>}
   */
  postServiceTicketsByParentIdNotes(parentId, serviceNote) {
    return this.request({
      path: `/service/tickets/${parentId}/notes`,
      method: 'post',
      data: serviceNote,
    })
  }
  /**
   * Get ServiceNote
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
   * @returns {Promise<ServiceNote>}
   */
  getServiceTicketsByParentIdNotesById(id, parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/notes/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete ServiceNote
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceTicketsByParentIdNotesById(id, parentId) {
    return this.request({
      path: `/service/tickets/${parentId}/notes/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put ServiceNote
   * @param {number} id
   * @param {number} parentId
   * @param {ServiceNote} serviceNote serviceNote
   * @returns {Promise<ServiceNote>}
   */
  putServiceTicketsByParentIdNotesById(id, parentId, serviceNote) {
    return this.request({
      path: `/service/tickets/${parentId}/notes/{id}`,
      method: 'put',
      data: serviceNote,
    })
  }

  /**
   * Patch ServiceNote
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<ServiceNote>}
   */
  patchServiceTicketsByParentIdNotesById(id, parentId, patchOperations) {
    return this.request({
      path: `/service/tickets/${parentId}/notes/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of ServiceNote
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTicketsByParentIdNotesCount(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/notes/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ProductReference
            Gets the products associated to the ticket
            Please use the /procurement/products?conditions=chargeToType='Ticket' AND chargeToId={id} endpoint
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ProductReference[]>}
   */
  getServiceTicketsByParentIdProducts(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/products`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ProductReference
            Gets the products associated to the ticket
            Please use the /procurement/products/count?conditions=chargeToType='Ticket' AND chargeToId={id} endpoint
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTicketsByParentIdProductsCount(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/products/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of ScheduleEntryReference
            Gets the schedule entries associated to the ticket
            Please use the /schedule/entries?conditions=type/id=4 AND objectId={id} endpoint
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<ScheduleEntryReference[]>}
   */
  getServiceTicketsByParentIdScheduleentries(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/scheduleentries`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ScheduleEntryReference
            Gets the schedule entries count associated to the ticket
            Please use the /schedule/entries/count?conditions=type/id=4 AND objectId={id} endpoint
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTicketsByParentIdScheduleentriesCount(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/scheduleentries/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of Task
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Task[]>}
   */
  getServiceTicketsByParentIdTasks(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/tasks`,
      method: 'get',
      params,
    })
  }

  /**
   * Post Task
   * @param {number} parentId
   * @param {Task} task task
   * @returns {Promise<Task>}
   */
  postServiceTicketsByParentIdTasks(parentId, task) {
    return this.request({
      path: `/service/tickets/${parentId}/tasks`,
      method: 'post',
      data: task,
    })
  }
  /**
   * Get Task
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
   * @returns {Promise<Task>}
   */
  getServiceTicketsByParentIdTasksById(id, parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/tasks/{id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete Task
   * @param {number} id
   * @param {number} parentId
   * @returns {Promise<NoContent>}
   */
  deleteServiceTicketsByParentIdTasksById(id, parentId) {
    return this.request({
      path: `/service/tickets/${parentId}/tasks/{id}`,
      method: 'delete',
    })
  }

  /**
   * Put Task
   * @param {number} id
   * @param {number} parentId
   * @param {Task} task task
   * @returns {Promise<Task>}
   */
  putServiceTicketsByParentIdTasksById(id, parentId, task) {
    return this.request({
      path: `/service/tickets/${parentId}/tasks/{id}`,
      method: 'put',
      data: task,
    })
  }

  /**
   * Patch Task
   * @param {number} id
   * @param {number} parentId
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<Task>}
   */
  patchServiceTicketsByParentIdTasksById(id, parentId, patchOperations) {
    return this.request({
      path: `/service/tickets/${parentId}/tasks/{id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of Task
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTicketsByParentIdTasksCount(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/tasks/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TimeEntryReference
            Gets time entries associated to the ticket
            Please use the /time/entries?conditions=(chargeToType="ServiceTicket" OR chargeToType="ProjectTicket") AND chargeToId={id} endpoint
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TimeEntryReference[]>}
   */
  getServiceTicketsByParentIdTimeentries(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/timeentries`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TimeEntryReference
            Gets time entries count associated to the ticket
            Please use the /time/entries/count?conditions=(chargeToType="ServiceTicket" OR chargeToType="ProjectTicket") AND chargeToId={id} endpoint
   * @param {number} parentId
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTicketsByParentIdTimeentriesCount(parentId, params = {}) {
    return this.request({
      path: `/service/tickets/${parentId}/timeentries/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of ConnectWise.Apis.v3_0.v2015_3.Service.Ticket.Ticket
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTicketsCount(params = {}) {
    return this.request({
      path: `/service/tickets/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Get List of TicketInfos
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TicketInfo[]>}
   */
  getServiceTicketsInfo(params = {}) {
    return this.request({
      path: `/service/tickets/info`,
      method: 'get',
      params,
    })
  }
  /**
   * Get Count of TicketInfo
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTicketsInfoCount(params = {}) {
    return this.request({
      path: `/service/tickets/info/count`,
      method: 'get',
      params,
    })
  }
  /**
   * Post List of Ticket
   * @param {FilterValues} filterValues filterValues
   * @returns {Promise<Ticket[]>}
   */
  postServiceTicketsSearch(filterValues) {
    return this.request({
      path: `/service/tickets/search`,
      method: 'post',
      data: filterValues,
    })
  }
  /**
   * Get List of TicketSync
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TicketSync[]>}
   */
  getServiceTicketSyncs(params = {}) {
    return this.request({
      path: `/service/ticketSyncs`,
      method: 'get',
      params,
    })
  }

  /**
   * Post TicketSync
   * @param {TicketSync} ticketSync ticketSync
   * @returns {Promise<TicketSync>}
   */
  postServiceTicketSyncs(ticketSync) {
    return this.request({
      path: `/service/ticketSyncs`,
      method: 'post',
      data: ticketSync,
    })
  }
  /**
   * Get TicketSync
   * @param {number} id
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<TicketSync>}
   */
  getServiceTicketSyncsById(id, params = {}) {
    return this.request({
      path: `/service/ticketSyncs/${id}`,
      method: 'get',
      params,
    })
  }

  /**
   * Delete TicketSync
   * @param {number} id
   * @returns {Promise<NoContent>}
   */
  deleteServiceTicketSyncsById(id) {
    return this.request({
      path: `/service/ticketSyncs/${id}`,
      method: 'delete',
    })
  }

  /**
   * Put TicketSync
   * @param {number} id
   * @param {TicketSync} ticketSync ticketSync
   * @returns {Promise<TicketSync>}
   */
  putServiceTicketSyncsById(id, ticketSync) {
    return this.request({
      path: `/service/ticketSyncs/${id}`,
      method: 'put',
      data: ticketSync,
    })
  }

  /**
   * Patch TicketSync
   * @param {number} id
   * @param {PatchOperation[]} patchOperations List of PatchOperation
   * @returns {Promise<TicketSync>}
   */
  patchServiceTicketSyncsById(id, patchOperations) {
    return this.request({
      path: `/service/ticketSyncs/${id}`,
      method: 'patch',
      data: patchOperations,
    })
  }
  /**
   * Get Count of TicketSync
   * @param {object} params
   * @param {string} [params.conditions]
   * @param {string} [params.childConditions]
   * @param {string} [params.customFieldConditions]
   * @param {string} [params.orderBy]
   * @param {string} [params.fields]
   * @param {number} [params.page]
   * @param {number} [params.pageSize]
   * @param {number} [params.pageId]
   * @returns {Promise<Count>}
   */
  getServiceTicketSyncsCount(params = {}) {
    return this.request({
      path: `/service/ticketSyncs/count`,
      method: 'get',
      params,
    })
  }
}
