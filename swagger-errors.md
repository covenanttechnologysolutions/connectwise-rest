# API Spec Errors

Known issues in the ConnectWise-published OpenAPI specs that our generator has to
work around or that consumers should be aware of.

## Automate (swagger 25.0.5)

**Computers.getComputerSoftwareList (duplicate)**  
`Computers_GetComputerSoftwareList` is used as the operationId for two distinct
paths (`/api/v1/Computers/{computerId}/Software` and `/api/v1/Computers/Software`).
Our generator auto-disambiguates the globally-unique form for type emission and the
section-local method name by appending a path-derived suffix, so both endpoints are
reachable but under slightly different TypeScript method names.

**System.ApiToken_Get (renamed in 2025.16)**  
Previously `System.ApiToken_Get`; now exposed as `System.apiToken_GetAuthInformation`
in the new spec. Consumers on v1.x should expect the rename in v2.

## Manage (2025.16)

**Company.deleteCompanyContactsById**  
Defines `transferContactId` but its `in` location changed between spec versions. v1
treated it as a distinct parameter; v2 collapses it into the `params` query object.

**Company.postCompanyCompanyPickerItemsClear**  
Specifies `clearPickerRequest` as a `path` variable but it is not present in the URL
template. Our generator resolves the schema `$ref` to a typed body-shaped parameter.

**Project.postProjectTicketNoteByIdMarkAs**  
Missing explicit return type in the spec. Generator falls back to `unknown`/`any`.

**System.getSystemAudittrail / System.getSystemAudittrailCount**  
"Audittrail" is a typo in the spec (should be "AuditTrail"); `getRequest` specified
as `path` but should be `query`.

**System.getSystemWorkflowsByParentIdEventsByIdTest**  
Missing return type.

**System.getSystemWorkflowsUserdefinedfieldsByGrandparentIdActionsByParentId**  
Missing slash in path definition.
