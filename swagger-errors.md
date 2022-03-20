# API Spec Errors

## Manage

**Company.deleteCompanyContactsById**

Defines `transferContactId` as path variable but does not specify location in path

**Company.postCompanyCompanyPickerItemsClear**

Specifies `clearPickerRequest` as query variable but probably should be `body` variable.


**Project.postProjectTicketNoteByIdMarkAs**

Missing return type

**System.getSystemAudittrail &**
**System.getSystemAudittrailCount**

Operation name Audittrail typo  
getRequest specified as path but should be query

**System.getSystemWorkflowsByParentIdEventsByIdTest**

Missing return type
