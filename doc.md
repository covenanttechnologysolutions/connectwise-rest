## Classes

<dl>
<dt><a href="#Companies">Companies</a></dt>
<dd></dd>
<dt><a href="#CompanyCompanyTypeAssociations">CompanyCompanyTypeAssociations</a></dt>
<dd></dd>
<dt><a href="#CompanySites">CompanySites</a></dt>
<dd></dd>
<dt><a href="#CompanyTeams">CompanyTeams</a></dt>
<dd></dd>
<dt><a href="#CompanyTypeInfos">CompanyTypeInfos</a></dt>
<dd></dd>
<dt><a href="#CompanyTypes">CompanyTypes</a></dt>
<dd></dd>
<dt><a href="#Configurations">Configurations</a></dt>
<dd></dd>
<dt><a href="#ContactContactTypeAssociations">ContactContactTypeAssociations</a></dt>
<dd></dd>
<dt><a href="#ContactRelationships">ContactRelationships</a></dt>
<dd></dd>
<dt><a href="#Contacts">Contacts</a></dt>
<dd></dd>
<dt><a href="#CompanyAPI">CompanyAPI</a></dt>
<dd></dd>
<dt><a href="#ConnectWise">ConnectWise</a></dt>
<dd></dd>
<dt><a href="#ConnectWiseRest">ConnectWiseRest</a> : <code><a href="#ConnectWiseRest">ConnectWiseRest</a></code></dt>
<dd><p>ConnectWiseRest</p>
</dd>
<dt><a href="#Additions">Additions</a></dt>
<dd></dd>
<dt><a href="#Adjustments">Adjustments</a></dt>
<dd></dd>
<dt><a href="#Agreements">Agreements</a></dt>
<dd></dd>
<dt><a href="#AgreementSites">AgreementSites</a></dt>
<dd></dd>
<dt><a href="#BoardDefaults">BoardDefaults</a></dt>
<dd></dd>
<dt><a href="#FinanceAPI">FinanceAPI</a></dt>
<dd></dd>
<dt><a href="#WorkRoles">WorkRoles</a></dt>
<dd></dd>
<dt><a href="#WorkTypeExclusions">WorkTypeExclusions</a></dt>
<dd></dd>
<dt><a href="#WorkTypes">WorkTypes</a></dt>
<dd></dd>
<dt><a href="#ProjectAPI">ProjectAPI</a></dt>
<dd></dd>
<dt><a href="#Projects">Projects</a></dt>
<dd></dd>
<dt><a href="#Activities">Activities</a></dt>
<dd></dd>
<dt><a href="#ScheduleAPI">ScheduleAPI</a></dt>
<dd></dd>
<dt><a href="#ScheduleEntries">ScheduleEntries</a></dt>
<dd></dd>
<dt><a href="#ScheduleTypes">ScheduleTypes</a></dt>
<dd></dd>
<dt><a href="#BoardItems">BoardItems</a></dt>
<dd></dd>
<dt><a href="#Boards">Boards</a></dt>
<dd></dd>
<dt><a href="#BoardSubTypes">BoardSubTypes</a></dt>
<dd></dd>
<dt><a href="#BoardTeams">BoardTeams</a></dt>
<dd></dd>
<dt><a href="#BoardTypes">BoardTypes</a></dt>
<dd></dd>
<dt><a href="#ServiceDeskAPI">ServiceDeskAPI</a></dt>
<dd></dd>
<dt><a href="#Priorities">Priorities</a></dt>
<dd></dd>
<dt><a href="#ServiceNotes">ServiceNotes</a></dt>
<dd></dd>
<dt><a href="#Statuses">Statuses</a></dt>
<dd></dd>
<dt><a href="#Tickets">Tickets</a></dt>
<dd></dd>
<dt><a href="#SystemAPI">SystemAPI</a></dt>
<dd></dd>
<dt><a href="#Members">Members</a></dt>
<dd></dd>
<dt><a href="#Reports">Reports</a></dt>
<dd></dd>
<dt><a href="#TimeAPI">TimeAPI</a></dt>
<dd></dd>
<dt><a href="#TimeEntries">TimeEntries</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#verifyCallback">verifyCallback(callbackBody, contentSignature)</a> ⇒ <code>Promise.&lt;boolean&gt;</code></dt>
<dd><p>Load signing key and verify the message</p>
</dd>
<dt><a href="#verifyMessage">verifyMessage(callbackBody, contentSignature, signingKey)</a> ⇒ <code>boolean</code></dt>
<dd><p>Validate a callback body against signed key</p>
</dd>
<dt><a href="#middleware">middleware(cb)</a></dt>
<dd><p>Express style middleware</p>
</dd>
<dt><a href="#all">all(series, concurrent, delay)</a> ⇒ <code>Promise.&lt;*&gt;</code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#Company">Company</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CompanyNote">CompanyNote</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CompanyTypeAssociation">CompanyTypeAssociation</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#CompanyTypeHref">CompanyTypeHref</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#CompanySite">CompanySite</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#CompanyTeam">CompanyTeam</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CompanyTypeInfo">CompanyTypeInfo</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#CompanyType">CompanyType</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Configuration">Configuration</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ConfigurationQuestion">ConfigurationQuestion</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ContactTypeAssociation">ContactTypeAssociation</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Relationship">Relationship</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Contact">Contact</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ContactType">ContactType</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#PortalSecurity">PortalSecurity</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ValidatePortalResponse">ValidatePortalResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CompanyAPI">CompanyAPI</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#InfoHref">InfoHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#AgreementHref">AgreementHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#AgreementTypeHref">AgreementTypeHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#BoardHref">BoardHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CompanyHref">CompanyHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ContactHref">ContactHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CountryHref">CountryHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DocumentHref">DocumentHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ItemHref">ItemHref</a> : <code>object</code></dt>
<dd><p>Service Item</p>
</dd>
<dt><a href="#PriorityHref">PriorityHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ProductHref">ProductHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ServiceLocationHref">ServiceLocationHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ServiceTypeHref">ServiceTypeHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ScheduleEntryHref">ScheduleEntryHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#SiteHref">SiteHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#SourceHref">SourceHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#StatusHref">StatusHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#SubTypeHref">SubTypeHref</a> : <code>object</code></dt>
<dd><p>Service Subtype</p>
</dd>
<dt><a href="#TeamHref">TeamHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#TypeHref">TypeHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#OpportunityHref">OpportunityHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Params">Params</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ParamsPage">ParamsPage</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ParamsConditions">ParamsConditions</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ParamsImage">ParamsImage</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ParamsConfig">ParamsConfig</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ParamsConfigUpdate">ParamsConfigUpdate</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ProductHref">ProductHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#WorkRoleHref">WorkRoleHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#WorkTypeHref">WorkTypeHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Operations">Operations</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Count">Count</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ConfigurationHref">ConfigurationHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CurrencyHref">CurrencyHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#MemberHref">MemberHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DeleteResponse">DeleteResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#PostResponse">PostResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ErrorResponse">ErrorResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CustomField">CustomField</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ProjectStatusHref">ProjectStatusHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ProjectTypeHref">ProjectTypeHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#OwnerHref">OwnerHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CountryHref">CountryHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CustomField">CustomField</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CommunicationItemHref">CommunicationItemHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DepartmentHref">DepartmentHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#RelationshipHref">RelationshipHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ScheduleTypeHref">ScheduleTypeHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ScheduleStatusHref">ScheduleStatusHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ScheduleSpanHref">ScheduleSpanHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ReminderHref">ReminderHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ServiceLocationHref">ServiceLocationHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ChargeCodeHref">ChargeCodeHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Usage">Usage</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#UsageCount">UsageCount</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#CWOptions">CWOptions</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ConnectWiseRest">ConnectWiseRest</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Addition">Addition</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Adjustment">Adjustment</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Agreement">Agreement</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#AgreementSite">AgreementSite</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#BoardDefault">BoardDefault</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#FinanceAPI">FinanceAPI</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#WorkRole">WorkRole</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#WorkTypeExclusion">WorkTypeExclusion</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#WorkType">WorkType</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ProjectAPI">ProjectAPI</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Project">Project</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Activity">Activity</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ActivityType">ActivityType</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#SalesAPI">SalesAPI</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ScheduleAPI">ScheduleAPI</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#ScheduleEntry">ScheduleEntry</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ScheduleType">ScheduleType</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#BoardItem">BoardItem</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#Board">Board</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#BoardSubType">BoardSubType</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#BoardTeam">BoardTeam</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#BoardType">BoardType</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ServiceDeskAPI">ServiceDeskAPI</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Priority">Priority</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ServiceNote">ServiceNote</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Status">Status</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Ticket">Ticket</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#SystemAPI">SystemAPI</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Member">Member</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ReportNames">ReportNames</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ReportData">ReportData</a> : <code>object</code></dt>
<dd><p>row_values is not a keyed array</p>
</dd>
<dt><a href="#ReportDataInterpolated">ReportDataInterpolated</a> : <code>object</code></dt>
<dd><p>Key-Vals interpolated into one object per row</p>
</dd>
<dt><a href="#ReportColumn">ReportColumn</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#TimeAPI">TimeAPI</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#TimeEntry">TimeEntry</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CallbackPayload">CallbackPayload</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#CWCallback">CWCallback</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#CWUtils">CWUtils</a> : <code>Object</code></dt>
<dd></dd>
<dt><a href="#CWSeries">CWSeries</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="Companies"></a>

## Companies
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [Companies](#Companies)
    * [new Companies(options)](#new_Companies_new)
    * [.getCompanies(params)](#Companies+getCompanies) ⇒ <code>Promise.&lt;Array.&lt;Company&gt;&gt;</code>
    * [.createCompany(company)](#Companies+createCompany) ⇒ [<code>Promise.&lt;Company&gt;</code>](#Company)
    * [.getCompaniesCount(params)](#Companies+getCompaniesCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.getCompanyById(id)](#Companies+getCompanyById) ⇒ [<code>Promise.&lt;Company&gt;</code>](#Company)
    * [.replaceCompany(id, company)](#Companies+replaceCompany) ⇒ [<code>Promise.&lt;Company&gt;</code>](#Company)
    * [.deleteCompanyById(id)](#Companies+deleteCompanyById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.updateCompany(id, ops)](#Companies+updateCompany) ⇒ [<code>Promise.&lt;Company&gt;</code>](#Company)
    * [.mergeCompany()](#Companies+mergeCompany) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="new_Companies_new"></a>

### new Companies(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Companies+getCompanies"></a>

### companies.getCompanies(params) ⇒ <code>Promise.&lt;Array.&lt;Company&gt;&gt;</code>
**Kind**: instance method of [<code>Companies</code>](#Companies)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="Companies+createCompany"></a>

### companies.createCompany(company) ⇒ [<code>Promise.&lt;Company&gt;</code>](#Company)
**Kind**: instance method of [<code>Companies</code>](#Companies)  

| Param | Type |
| --- | --- |
| company | [<code>Company</code>](#Company) | 

<a name="Companies+getCompaniesCount"></a>

### companies.getCompaniesCount(params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
**Kind**: instance method of [<code>Companies</code>](#Companies)  

| Param | Type |
| --- | --- |
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="Companies+getCompanyById"></a>

### companies.getCompanyById(id) ⇒ [<code>Promise.&lt;Company&gt;</code>](#Company)
**Kind**: instance method of [<code>Companies</code>](#Companies)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>number</code> | numeric ID of company, not the company ID in ConnectWise. |

<a name="Companies+replaceCompany"></a>

### companies.replaceCompany(id, company) ⇒ [<code>Promise.&lt;Company&gt;</code>](#Company)
**Kind**: instance method of [<code>Companies</code>](#Companies)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 
| company | [<code>Company</code>](#Company) | 

<a name="Companies+deleteCompanyById"></a>

### companies.deleteCompanyById(id) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
**Kind**: instance method of [<code>Companies</code>](#Companies)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 

<a name="Companies+updateCompany"></a>

### companies.updateCompany(id, ops) ⇒ [<code>Promise.&lt;Company&gt;</code>](#Company)
**Kind**: instance method of [<code>Companies</code>](#Companies)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 
| ops | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="Companies+mergeCompany"></a>

### companies.mergeCompany() ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>Companies</code>](#Companies)  
**Todo**

- [ ] finish this one

<a name="CompanyCompanyTypeAssociations"></a>

## CompanyCompanyTypeAssociations
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [CompanyCompanyTypeAssociations](#CompanyCompanyTypeAssociations)
    * [new CompanyCompanyTypeAssociations(options)](#new_CompanyCompanyTypeAssociations_new)
    * [.getCompanyTypeAssociations(id, params)](#CompanyCompanyTypeAssociations+getCompanyTypeAssociations) ⇒ <code>Promise.&lt;Array.&lt;CompanyTypeAssociation&gt;&gt;</code>
    * [.createCompanyTypeAssociation(id, companyTypeAssociation)](#CompanyCompanyTypeAssociations+createCompanyTypeAssociation) ⇒ [<code>Promise.&lt;CompanyTypeAssociation&gt;</code>](#CompanyTypeAssociation)
    * [.getCompanyTypeAssociationsCount(id, params)](#CompanyCompanyTypeAssociations+getCompanyTypeAssociationsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.getCompanyTypeAssociationById(id, typeAssociationId)](#CompanyCompanyTypeAssociations+getCompanyTypeAssociationById) ⇒ [<code>Promise.&lt;CompanyTypeAssociation&gt;</code>](#CompanyTypeAssociation)
    * [.deleteCompanyTypeAssociationById(id, typeAssociationId)](#CompanyCompanyTypeAssociations+deleteCompanyTypeAssociationById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.replaceCompanyTypeAssociation(id, typeAssociationId, newTypeAssociation)](#CompanyCompanyTypeAssociations+replaceCompanyTypeAssociation) ⇒ [<code>Promise.&lt;CompanyTypeAssociation&gt;</code>](#CompanyTypeAssociation)
    * [.updateCompanyTypeAssociation(id, typeAssociationId, operations)](#CompanyCompanyTypeAssociations+updateCompanyTypeAssociation) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="new_CompanyCompanyTypeAssociations_new"></a>

### new CompanyCompanyTypeAssociations(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="CompanyCompanyTypeAssociations+getCompanyTypeAssociations"></a>

### companyCompanyTypeAssociations.getCompanyTypeAssociations(id, params) ⇒ <code>Promise.&lt;Array.&lt;CompanyTypeAssociation&gt;&gt;</code>
**Kind**: instance method of [<code>CompanyCompanyTypeAssociations</code>](#CompanyCompanyTypeAssociations)  

| Param | Type |
| --- | --- |
| id |  | 
| params | [<code>Params</code>](#Params) | 

<a name="CompanyCompanyTypeAssociations+createCompanyTypeAssociation"></a>

### companyCompanyTypeAssociations.createCompanyTypeAssociation(id, companyTypeAssociation) ⇒ [<code>Promise.&lt;CompanyTypeAssociation&gt;</code>](#CompanyTypeAssociation)
**Kind**: instance method of [<code>CompanyCompanyTypeAssociations</code>](#CompanyCompanyTypeAssociations)  

| Param | Type |
| --- | --- |
| id |  | 
| companyTypeAssociation | [<code>CompanyTypeAssociation</code>](#CompanyTypeAssociation) | 

<a name="CompanyCompanyTypeAssociations+getCompanyTypeAssociationsCount"></a>

### companyCompanyTypeAssociations.getCompanyTypeAssociationsCount(id, params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
**Kind**: instance method of [<code>CompanyCompanyTypeAssociations</code>](#CompanyCompanyTypeAssociations)  

| Param |
| --- |
| id | 
| params | 

<a name="CompanyCompanyTypeAssociations+getCompanyTypeAssociationById"></a>

### companyCompanyTypeAssociations.getCompanyTypeAssociationById(id, typeAssociationId) ⇒ [<code>Promise.&lt;CompanyTypeAssociation&gt;</code>](#CompanyTypeAssociation)
**Kind**: instance method of [<code>CompanyCompanyTypeAssociations</code>](#CompanyCompanyTypeAssociations)  

| Param |
| --- |
| id | 
| typeAssociationId | 

<a name="CompanyCompanyTypeAssociations+deleteCompanyTypeAssociationById"></a>

### companyCompanyTypeAssociations.deleteCompanyTypeAssociationById(id, typeAssociationId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
**Kind**: instance method of [<code>CompanyCompanyTypeAssociations</code>](#CompanyCompanyTypeAssociations)  

| Param |
| --- |
| id | 
| typeAssociationId | 

<a name="CompanyCompanyTypeAssociations+replaceCompanyTypeAssociation"></a>

### companyCompanyTypeAssociations.replaceCompanyTypeAssociation(id, typeAssociationId, newTypeAssociation) ⇒ [<code>Promise.&lt;CompanyTypeAssociation&gt;</code>](#CompanyTypeAssociation)
**Kind**: instance method of [<code>CompanyCompanyTypeAssociations</code>](#CompanyCompanyTypeAssociations)  

| Param |
| --- |
| id | 
| typeAssociationId | 
| newTypeAssociation | 

<a name="CompanyCompanyTypeAssociations+updateCompanyTypeAssociation"></a>

### companyCompanyTypeAssociations.updateCompanyTypeAssociation(id, typeAssociationId, operations) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>CompanyCompanyTypeAssociations</code>](#CompanyCompanyTypeAssociations)  

| Param | Type |
| --- | --- |
| id |  | 
| typeAssociationId |  | 
| operations | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="CompanySites"></a>

## CompanySites
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [CompanySites](#CompanySites)
    * [new CompanySites(options)](#new_CompanySites_new)
    * [.getCompanySites(companyId)](#CompanySites+getCompanySites) ⇒ <code>Promise.&lt;Array.&lt;CompanySite&gt;&gt;</code>
    * [.getCompanySiteById(companyId, id)](#CompanySites+getCompanySiteById) ⇒ [<code>Promise.&lt;CompanySite&gt;</code>](#CompanySite)

<a name="new_CompanySites_new"></a>

### new CompanySites(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="CompanySites+getCompanySites"></a>

### companySites.getCompanySites(companyId) ⇒ <code>Promise.&lt;Array.&lt;CompanySite&gt;&gt;</code>
**Kind**: instance method of [<code>CompanySites</code>](#CompanySites)  

| Param |
| --- |
| companyId | 

<a name="CompanySites+getCompanySiteById"></a>

### companySites.getCompanySiteById(companyId, id) ⇒ [<code>Promise.&lt;CompanySite&gt;</code>](#CompanySite)
**Kind**: instance method of [<code>CompanySites</code>](#CompanySites)  

| Param |
| --- |
| companyId | 
| id | 

<a name="CompanyTeams"></a>

## CompanyTeams
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [CompanyTeams](#CompanyTeams)
    * [new CompanyTeams(options)](#new_CompanyTeams_new)
    * [.getCompanyTeams(id, params)](#CompanyTeams+getCompanyTeams) ⇒ <code>Promise.&lt;Array.&lt;CompanyTeam&gt;&gt;</code>
    * [.createCompanyTeam(id, companyTeam)](#CompanyTeams+createCompanyTeam) ⇒ [<code>Promise.&lt;CompanyTeam&gt;</code>](#CompanyTeam)
    * [.getCompanyTeamsCount(id, params)](#CompanyTeams+getCompanyTeamsCount) ⇒ <code>Promise.&lt;Array.&lt;Count&gt;&gt;</code>
    * [.getCompanyTeamById(id, teamId)](#CompanyTeams+getCompanyTeamById) ⇒ [<code>Promise.&lt;CompanyTeam&gt;</code>](#CompanyTeam)
    * [.deleteCompanyTeamById(id, teamId)](#CompanyTeams+deleteCompanyTeamById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.replaceCompanyTeam(id, teamId, companyTeam)](#CompanyTeams+replaceCompanyTeam) ⇒ [<code>Promise.&lt;CompanyTeam&gt;</code>](#CompanyTeam)
    * [.updateCompanyTeam(id, teamId, ops)](#CompanyTeams+updateCompanyTeam) ⇒ [<code>Promise.&lt;CompanyTeam&gt;</code>](#CompanyTeam)

<a name="new_CompanyTeams_new"></a>

### new CompanyTeams(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="CompanyTeams+getCompanyTeams"></a>

### companyTeams.getCompanyTeams(id, params) ⇒ <code>Promise.&lt;Array.&lt;CompanyTeam&gt;&gt;</code>
**Kind**: instance method of [<code>CompanyTeams</code>](#CompanyTeams)  

| Param | Type | Description |
| --- | --- | --- |
| id |  | companyId |
| params | [<code>Params</code>](#Params) |  |

<a name="CompanyTeams+createCompanyTeam"></a>

### companyTeams.createCompanyTeam(id, companyTeam) ⇒ [<code>Promise.&lt;CompanyTeam&gt;</code>](#CompanyTeam)
**Kind**: instance method of [<code>CompanyTeams</code>](#CompanyTeams)  

| Param | Type | Description |
| --- | --- | --- |
| id |  | companyId |
| companyTeam | [<code>CompanyTeam</code>](#CompanyTeam) |  |

<a name="CompanyTeams+getCompanyTeamsCount"></a>

### companyTeams.getCompanyTeamsCount(id, params) ⇒ <code>Promise.&lt;Array.&lt;Count&gt;&gt;</code>
**Kind**: instance method of [<code>CompanyTeams</code>](#CompanyTeams)  

| Param | Type | Description |
| --- | --- | --- |
| id |  | companyId |
| params | [<code>Params</code>](#Params) |  |

<a name="CompanyTeams+getCompanyTeamById"></a>

### companyTeams.getCompanyTeamById(id, teamId) ⇒ [<code>Promise.&lt;CompanyTeam&gt;</code>](#CompanyTeam)
**Kind**: instance method of [<code>CompanyTeams</code>](#CompanyTeams)  

| Param | Description |
| --- | --- |
| id | companyId |
| teamId |  |

<a name="CompanyTeams+deleteCompanyTeamById"></a>

### companyTeams.deleteCompanyTeamById(id, teamId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
**Kind**: instance method of [<code>CompanyTeams</code>](#CompanyTeams)  

| Param | Description |
| --- | --- |
| id | companyId |
| teamId |  |

<a name="CompanyTeams+replaceCompanyTeam"></a>

### companyTeams.replaceCompanyTeam(id, teamId, companyTeam) ⇒ [<code>Promise.&lt;CompanyTeam&gt;</code>](#CompanyTeam)
**Kind**: instance method of [<code>CompanyTeams</code>](#CompanyTeams)  

| Param | Type | Description |
| --- | --- | --- |
| id |  | companyId |
| teamId |  |  |
| companyTeam | [<code>CompanyTeam</code>](#CompanyTeam) |  |

<a name="CompanyTeams+updateCompanyTeam"></a>

### companyTeams.updateCompanyTeam(id, teamId, ops) ⇒ [<code>Promise.&lt;CompanyTeam&gt;</code>](#CompanyTeam)
**Kind**: instance method of [<code>CompanyTeams</code>](#CompanyTeams)  

| Param | Type | Description |
| --- | --- | --- |
| id |  | companyId |
| teamId |  |  |
| ops | [<code>Array.&lt;Operations&gt;</code>](#Operations) |  |

<a name="CompanyTypeInfos"></a>

## CompanyTypeInfos
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [CompanyTypeInfos](#CompanyTypeInfos)
    * [new CompanyTypeInfos(options)](#new_CompanyTypeInfos_new)
    * [.getCompanyTypeInfos(params)](#CompanyTypeInfos+getCompanyTypeInfos) ⇒ <code>Promise.&lt;Array.&lt;CompanyTypeInfo&gt;&gt;</code>
    * [.getCompanyTypeInfosCount(params)](#CompanyTypeInfos+getCompanyTypeInfosCount) ⇒ <code>Promise.&lt;Array.&lt;CompanyTypeInfo&gt;&gt;</code>
    * [.getCompanyTypeInfoById(id)](#CompanyTypeInfos+getCompanyTypeInfoById) ⇒ [<code>Promise.&lt;CompanyTypeInfo&gt;</code>](#CompanyTypeInfo)

<a name="new_CompanyTypeInfos_new"></a>

### new CompanyTypeInfos(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="CompanyTypeInfos+getCompanyTypeInfos"></a>

### companyTypeInfos.getCompanyTypeInfos(params) ⇒ <code>Promise.&lt;Array.&lt;CompanyTypeInfo&gt;&gt;</code>
**Kind**: instance method of [<code>CompanyTypeInfos</code>](#CompanyTypeInfos)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="CompanyTypeInfos+getCompanyTypeInfosCount"></a>

### companyTypeInfos.getCompanyTypeInfosCount(params) ⇒ <code>Promise.&lt;Array.&lt;CompanyTypeInfo&gt;&gt;</code>
**Kind**: instance method of [<code>CompanyTypeInfos</code>](#CompanyTypeInfos)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="CompanyTypeInfos+getCompanyTypeInfoById"></a>

### companyTypeInfos.getCompanyTypeInfoById(id) ⇒ [<code>Promise.&lt;CompanyTypeInfo&gt;</code>](#CompanyTypeInfo)
**Kind**: instance method of [<code>CompanyTypeInfos</code>](#CompanyTypeInfos)  

| Param |
| --- |
| id | 

<a name="CompanyTypes"></a>

## CompanyTypes
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [CompanyTypes](#CompanyTypes)
    * [new CompanyTypes(options)](#new_CompanyTypes_new)
    * [.getCompanyTypes(params)](#CompanyTypes+getCompanyTypes) ⇒ <code>Promise.&lt;Array.&lt;CompanyType&gt;&gt;</code>
    * [.getCompanyTypeById(id)](#CompanyTypes+getCompanyTypeById) ⇒ [<code>Promise.&lt;CompanyType&gt;</code>](#CompanyType)

<a name="new_CompanyTypes_new"></a>

### new CompanyTypes(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="CompanyTypes+getCompanyTypes"></a>

### companyTypes.getCompanyTypes(params) ⇒ <code>Promise.&lt;Array.&lt;CompanyType&gt;&gt;</code>
**Kind**: instance method of [<code>CompanyTypes</code>](#CompanyTypes)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="CompanyTypes+getCompanyTypeById"></a>

### companyTypes.getCompanyTypeById(id) ⇒ [<code>Promise.&lt;CompanyType&gt;</code>](#CompanyType)
**Kind**: instance method of [<code>CompanyTypes</code>](#CompanyTypes)  

| Param |
| --- |
| id | 

<a name="Configurations"></a>

## Configurations
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [Configurations](#Configurations)
    * [new Configurations(options)](#new_Configurations_new)
    * [.getConfigurations(params)](#Configurations+getConfigurations) ⇒ <code>Promise.&lt;Array.&lt;Configuration&gt;&gt;</code>
    * [.createConfiguration(configuration)](#Configurations+createConfiguration) ⇒ [<code>Promise.&lt;Configuration&gt;</code>](#Configuration)
    * [.getConfigurationsCount(params)](#Configurations+getConfigurationsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteConfigurationById(id)](#Configurations+deleteConfigurationById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getConfigurationById(id)](#Configurations+getConfigurationById) ⇒ [<code>Promise.&lt;Configuration&gt;</code>](#Configuration)
    * [.updateConfiguration(id, ops, [params])](#Configurations+updateConfiguration) ⇒ [<code>Promise.&lt;Configuration&gt;</code>](#Configuration)
    * [.replaceConfiguration(id, config)](#Configurations+replaceConfiguration) ⇒ [<code>Promise.&lt;Configuration&gt;</code>](#Configuration)

<a name="new_Configurations_new"></a>

### new Configurations(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Configurations+getConfigurations"></a>

### configurations.getConfigurations(params) ⇒ <code>Promise.&lt;Array.&lt;Configuration&gt;&gt;</code>
**Kind**: instance method of [<code>Configurations</code>](#Configurations)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="Configurations+createConfiguration"></a>

### configurations.createConfiguration(configuration) ⇒ [<code>Promise.&lt;Configuration&gt;</code>](#Configuration)
**Kind**: instance method of [<code>Configurations</code>](#Configurations)  

| Param | Type |
| --- | --- |
| configuration | [<code>Configuration</code>](#Configuration) | 

<a name="Configurations+getConfigurationsCount"></a>

### configurations.getConfigurationsCount(params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
**Kind**: instance method of [<code>Configurations</code>](#Configurations)  

| Param | Type |
| --- | --- |
| params | [<code>ParamsConfig</code>](#ParamsConfig) | 

<a name="Configurations+deleteConfigurationById"></a>

### configurations.deleteConfigurationById(id) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
**Kind**: instance method of [<code>Configurations</code>](#Configurations)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 

<a name="Configurations+getConfigurationById"></a>

### configurations.getConfigurationById(id) ⇒ [<code>Promise.&lt;Configuration&gt;</code>](#Configuration)
**Kind**: instance method of [<code>Configurations</code>](#Configurations)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 

<a name="Configurations+updateConfiguration"></a>

### configurations.updateConfiguration(id, ops, [params]) ⇒ [<code>Promise.&lt;Configuration&gt;</code>](#Configuration)
**Kind**: instance method of [<code>Configurations</code>](#Configurations)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>number</code> |  |
| ops | [<code>Array.&lt;Operations&gt;</code>](#Operations) |  |
| [params] | [<code>ParamsConfigUpdate</code>](#ParamsConfigUpdate) | unused currently @todo figure this out |

<a name="Configurations+replaceConfiguration"></a>

### configurations.replaceConfiguration(id, config) ⇒ [<code>Promise.&lt;Configuration&gt;</code>](#Configuration)
**Kind**: instance method of [<code>Configurations</code>](#Configurations)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 
| config | [<code>Configuration</code>](#Configuration) | 

<a name="ContactContactTypeAssociations"></a>

## ContactContactTypeAssociations
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [ContactContactTypeAssociations](#ContactContactTypeAssociations)
    * [new ContactContactTypeAssociations(options)](#new_ContactContactTypeAssociations_new)
    * [.get(contactId, params)](#ContactContactTypeAssociations+get) ⇒ <code>Promise.&lt;Array.&lt;ContactTypeAssociation&gt;&gt;</code>

<a name="new_ContactContactTypeAssociations_new"></a>

### new ContactContactTypeAssociations(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="ContactContactTypeAssociations+get"></a>

### contactContactTypeAssociations.get(contactId, params) ⇒ <code>Promise.&lt;Array.&lt;ContactTypeAssociation&gt;&gt;</code>
**Kind**: instance method of [<code>ContactContactTypeAssociations</code>](#ContactContactTypeAssociations)  

| Param | Type |
| --- | --- |
| contactId |  | 
| params | [<code>Params</code>](#Params) | 

<a name="ContactRelationships"></a>

## ContactRelationships
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [ContactRelationships](#ContactRelationships)
    * [new ContactRelationships(options)](#new_ContactRelationships_new)
    * [.getRelationships(params)](#ContactRelationships+getRelationships) ⇒ <code>Promise.&lt;Array.&lt;Relationship&gt;&gt;</code>

<a name="new_ContactRelationships_new"></a>

### new ContactRelationships(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="ContactRelationships+getRelationships"></a>

### contactRelationships.getRelationships(params) ⇒ <code>Promise.&lt;Array.&lt;Relationship&gt;&gt;</code>
**Kind**: instance method of [<code>ContactRelationships</code>](#ContactRelationships)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="Contacts"></a>

## Contacts
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [Contacts](#Contacts)
    * [new Contacts(options)](#new_Contacts_new)
    * [.getContacts(params)](#Contacts+getContacts) ⇒ <code>Promise.&lt;Array.&lt;Contact&gt;&gt;</code>
    * [.createContact(contact)](#Contacts+createContact) ⇒ [<code>Promise.&lt;Contact&gt;</code>](#Contact)
    * [.getContactsCount(params)](#Contacts+getContactsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.getContactTypes(params)](#Contacts+getContactTypes) ⇒ [<code>Promise.&lt;ContactType&gt;</code>](#ContactType)
    * [.deleteContactById(id, transferContactId)](#Contacts+deleteContactById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getContactById(id)](#Contacts+getContactById) ⇒ [<code>Promise.&lt;Contact&gt;</code>](#Contact)
    * [.updateContact(id, operations)](#Contacts+updateContact) ⇒ [<code>Promise.&lt;Contact&gt;</code>](#Contact)
    * [.replaceContact(id, contact)](#Contacts+replaceContact) ⇒ [<code>Promise.&lt;Contact&gt;</code>](#Contact)
    * [.getPortalSecurity(id)](#Contacts+getPortalSecurity) ⇒ <code>Promise.&lt;Array.&lt;PortalSecurity&gt;&gt;</code>
    * [.requestPassword(email)](#Contacts+requestPassword) ⇒ [<code>Promise.&lt;PostResponse&gt;</code>](#PostResponse)
    * [.validatePortalCredentials(email, password)](#Contacts+validatePortalCredentials) ⇒ [<code>Promise.&lt;ValidatePortalResponse&gt;</code>](#ValidatePortalResponse)
    * [.getContactImage(id, useDefaultFlag, lastModified)](#Contacts+getContactImage) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="new_Contacts_new"></a>

### new Contacts(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Contacts+getContacts"></a>

### contacts.getContacts(params) ⇒ <code>Promise.&lt;Array.&lt;Contact&gt;&gt;</code>
**Kind**: instance method of [<code>Contacts</code>](#Contacts)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="Contacts+createContact"></a>

### contacts.createContact(contact) ⇒ [<code>Promise.&lt;Contact&gt;</code>](#Contact)
**Kind**: instance method of [<code>Contacts</code>](#Contacts)  

| Param | Type |
| --- | --- |
| contact | [<code>Contact</code>](#Contact) | 

<a name="Contacts+getContactsCount"></a>

### contacts.getContactsCount(params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
**Kind**: instance method of [<code>Contacts</code>](#Contacts)  

| Param | Type |
| --- | --- |
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="Contacts+getContactTypes"></a>

### contacts.getContactTypes(params) ⇒ [<code>Promise.&lt;ContactType&gt;</code>](#ContactType)
**Kind**: instance method of [<code>Contacts</code>](#Contacts)  

| Param | Type |
| --- | --- |
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="Contacts+deleteContactById"></a>

### contacts.deleteContactById(id, transferContactId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
**Kind**: instance method of [<code>Contacts</code>](#Contacts)  

| Param | Type |
| --- | --- |
| id | <code>number</code> \| <code>string</code> | 
| transferContactId | <code>number</code> \| <code>string</code> | 

<a name="Contacts+getContactById"></a>

### contacts.getContactById(id) ⇒ [<code>Promise.&lt;Contact&gt;</code>](#Contact)
**Kind**: instance method of [<code>Contacts</code>](#Contacts)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 

<a name="Contacts+updateContact"></a>

### contacts.updateContact(id, operations) ⇒ [<code>Promise.&lt;Contact&gt;</code>](#Contact)
**Kind**: instance method of [<code>Contacts</code>](#Contacts)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 
| operations | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="Contacts+replaceContact"></a>

### contacts.replaceContact(id, contact) ⇒ [<code>Promise.&lt;Contact&gt;</code>](#Contact)
**Kind**: instance method of [<code>Contacts</code>](#Contacts)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 
| contact | [<code>Contact</code>](#Contact) | 

<a name="Contacts+getPortalSecurity"></a>

### contacts.getPortalSecurity(id) ⇒ <code>Promise.&lt;Array.&lt;PortalSecurity&gt;&gt;</code>
**Kind**: instance method of [<code>Contacts</code>](#Contacts)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 

<a name="Contacts+requestPassword"></a>

### contacts.requestPassword(email) ⇒ [<code>Promise.&lt;PostResponse&gt;</code>](#PostResponse)
**Kind**: instance method of [<code>Contacts</code>](#Contacts)  

| Param | Type |
| --- | --- |
| email | <code>string</code> | 

<a name="Contacts+validatePortalCredentials"></a>

### contacts.validatePortalCredentials(email, password) ⇒ [<code>Promise.&lt;ValidatePortalResponse&gt;</code>](#ValidatePortalResponse)
**Kind**: instance method of [<code>Contacts</code>](#Contacts)  

| Param | Type |
| --- | --- |
| email | <code>string</code> | 
| password | <code>string</code> | 

<a name="Contacts+getContactImage"></a>

### contacts.getContactImage(id, useDefaultFlag, lastModified) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>Contacts</code>](#Contacts)  
**Returns**: <code>Promise.&lt;\*&gt;</code> - @TODO check return type  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 
| useDefaultFlag | <code>boolean</code> | 
| lastModified | <code>string</code> | 

<a name="CompanyAPI"></a>

## CompanyAPI
**Kind**: global class  
<a name="new_CompanyAPI_new"></a>

### new CompanyAPI(options)

| Param |
| --- |
| options | 

<a name="ConnectWise"></a>

## ConnectWise
**Kind**: global class  
**Properties**

| Name | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 


* [ConnectWise](#ConnectWise)
    * [.api(path, method, [params])](#ConnectWise+api) ⇒ <code>Promise.&lt;\*&gt;</code>
    * [.paginate(fn, args, module, [pageSize], [startPage])](#ConnectWise+paginate) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="ConnectWise+api"></a>

### connectWise.api(path, method, [params]) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>ConnectWise</code>](#ConnectWise)  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | API method path or full URL to perform method upon |
| method | <code>string</code> | HTTP method, GET, POST, PUT, PATCH, DELETE |
| [params] | <code>object</code> | if required by route, include required params                          if a GET request, the params are joined into a string                          if a POST/PUT/PATCH, the params are included in the body |

<a name="ConnectWise+paginate"></a>

### connectWise.paginate(fn, args, module, [pageSize], [startPage]) ⇒ <code>Promise.&lt;\*&gt;</code>
Wrap a module's function to get all results.

**Kind**: instance method of [<code>ConnectWise</code>](#ConnectWise)  

| Param | Type | Description |
| --- | --- | --- |
| fn | <code>function</code> |  |
| args | <code>Array.&lt;object&gt;</code> |  |
| module | <code>object</code> |  |
| [pageSize] | <code>string</code> \| <code>number</code> | defaults to 1000 |
| [startPage] | <code>string</code> \| <code>number</code> | defaults to 1 |

<a name="ConnectWiseRest"></a>

## ConnectWiseRest : [<code>ConnectWiseRest</code>](#ConnectWiseRest)
ConnectWiseRest

**Kind**: global class  
<a name="new_ConnectWiseRest_new"></a>

### new ConnectWiseRest(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Additions"></a>

## Additions
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [Additions](#Additions)
    * [new Additions(options)](#new_Additions_new)
    * [.getAdditions(agreementId, params)](#Additions+getAdditions) ⇒ <code>Promise.&lt;Array.&lt;Addition&gt;&gt;</code>
    * [.createAddition(agreementId, addition)](#Additions+createAddition) ⇒ [<code>Promise.&lt;Addition&gt;</code>](#Addition)
    * [.getAdditionsCount(agreementId, params)](#Additions+getAdditionsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteAdditionById(agreementId, additionId)](#Additions+deleteAdditionById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getAdditionById(agreementId, additionId)](#Additions+getAdditionById) ⇒ [<code>Promise.&lt;Addition&gt;</code>](#Addition)
    * [.updateAddition(agreementId, additionId, operations)](#Additions+updateAddition) ⇒ [<code>Promise.&lt;Addition&gt;</code>](#Addition)
    * [.replaceAddition(agreementId, additionId, addition)](#Additions+replaceAddition) ⇒ [<code>Promise.&lt;Addition&gt;</code>](#Addition)

<a name="new_Additions_new"></a>

### new Additions(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Additions+getAdditions"></a>

### additions.getAdditions(agreementId, params) ⇒ <code>Promise.&lt;Array.&lt;Addition&gt;&gt;</code>
GETReturns non-cancelled active additions to an agreement

**Kind**: instance method of [<code>Additions</code>](#Additions)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>Params</code>](#Params) | 

<a name="Additions+createAddition"></a>

### additions.createAddition(agreementId, addition) ⇒ [<code>Promise.&lt;Addition&gt;</code>](#Addition)
POST

**Kind**: instance method of [<code>Additions</code>](#Additions)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| addition | [<code>Addition</code>](#Addition) | 

<a name="Additions+getAdditionsCount"></a>

### additions.getAdditionsCount(agreementId, params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>Additions</code>](#Additions)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="Additions+deleteAdditionById"></a>

### additions.deleteAdditionById(agreementId, additionId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
DELETE

**Kind**: instance method of [<code>Additions</code>](#Additions)  

| Param |
| --- |
| agreementId | 
| additionId | 

<a name="Additions+getAdditionById"></a>

### additions.getAdditionById(agreementId, additionId) ⇒ [<code>Promise.&lt;Addition&gt;</code>](#Addition)
GET

**Kind**: instance method of [<code>Additions</code>](#Additions)  

| Param |
| --- |
| agreementId | 
| additionId | 

<a name="Additions+updateAddition"></a>

### additions.updateAddition(agreementId, additionId, operations) ⇒ [<code>Promise.&lt;Addition&gt;</code>](#Addition)
PATCH

**Kind**: instance method of [<code>Additions</code>](#Additions)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| additionId |  | 
| operations | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="Additions+replaceAddition"></a>

### additions.replaceAddition(agreementId, additionId, addition) ⇒ [<code>Promise.&lt;Addition&gt;</code>](#Addition)
PUT

**Kind**: instance method of [<code>Additions</code>](#Additions)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| additionId |  | 
| addition | [<code>Addition</code>](#Addition) | 

<a name="Adjustments"></a>

## Adjustments
**Kind**: global class  

* [Adjustments](#Adjustments)
    * [new Adjustments(options)](#new_Adjustments_new)
    * [.getAdjustments(agreementId, params)](#Adjustments+getAdjustments) ⇒ <code>Promise.&lt;Array.&lt;Adjustment&gt;&gt;</code>
    * [.createAdjustments(agreementId, addition)](#Adjustments+createAdjustments) ⇒ [<code>Promise.&lt;Adjustment&gt;</code>](#Adjustment)
    * [.getAdjustmentsCount(agreementId, params)](#Adjustments+getAdjustmentsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteAdjustmentById(agreementId, additionId)](#Adjustments+deleteAdjustmentById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getAdjustmentById(agreementId, additionId)](#Adjustments+getAdjustmentById) ⇒ [<code>Promise.&lt;Adjustment&gt;</code>](#Adjustment)
    * [.updateAdjustment(agreementId, additionId, {Operations)](#Adjustments+updateAdjustment) ⇒ [<code>Promise.&lt;Adjustment&gt;</code>](#Adjustment)
    * [.replaceAdjustment(agreementId, additionId, addition)](#Adjustments+replaceAdjustment) ⇒ [<code>Promise.&lt;Adjustment&gt;</code>](#Adjustment)

<a name="new_Adjustments_new"></a>

### new Adjustments(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Adjustments+getAdjustments"></a>

### adjustments.getAdjustments(agreementId, params) ⇒ <code>Promise.&lt;Array.&lt;Adjustment&gt;&gt;</code>
GET

**Kind**: instance method of [<code>Adjustments</code>](#Adjustments)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>Params</code>](#Params) | 

<a name="Adjustments+createAdjustments"></a>

### adjustments.createAdjustments(agreementId, addition) ⇒ [<code>Promise.&lt;Adjustment&gt;</code>](#Adjustment)
POST

**Kind**: instance method of [<code>Adjustments</code>](#Adjustments)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| addition | [<code>Adjustment</code>](#Adjustment) | 

<a name="Adjustments+getAdjustmentsCount"></a>

### adjustments.getAdjustmentsCount(agreementId, params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>Adjustments</code>](#Adjustments)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="Adjustments+deleteAdjustmentById"></a>

### adjustments.deleteAdjustmentById(agreementId, additionId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
DELETE

**Kind**: instance method of [<code>Adjustments</code>](#Adjustments)  

| Param |
| --- |
| agreementId | 
| additionId | 

<a name="Adjustments+getAdjustmentById"></a>

### adjustments.getAdjustmentById(agreementId, additionId) ⇒ [<code>Promise.&lt;Adjustment&gt;</code>](#Adjustment)
GET

**Kind**: instance method of [<code>Adjustments</code>](#Adjustments)  

| Param |
| --- |
| agreementId | 
| additionId | 

<a name="Adjustments+updateAdjustment"></a>

### adjustments.updateAdjustment(agreementId, additionId, {Operations) ⇒ [<code>Promise.&lt;Adjustment&gt;</code>](#Adjustment)
PATCH

**Kind**: instance method of [<code>Adjustments</code>](#Adjustments)  

| Param | Description |
| --- | --- |
| agreementId |  |
| additionId |  |
| {Operations | operations |

<a name="Adjustments+replaceAdjustment"></a>

### adjustments.replaceAdjustment(agreementId, additionId, addition) ⇒ [<code>Promise.&lt;Adjustment&gt;</code>](#Adjustment)
PUT

**Kind**: instance method of [<code>Adjustments</code>](#Adjustments)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| additionId |  | 
| addition | [<code>Adjustment</code>](#Adjustment) | 

<a name="Agreements"></a>

## Agreements
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [Agreements](#Agreements)
    * [new Agreements(options)](#new_Agreements_new)
    * [.getAgreements(params)](#Agreements+getAgreements) ⇒ <code>Promise.&lt;Array.&lt;Agreement&gt;&gt;</code>
    * [.createAgreement(agreement)](#Agreements+createAgreement) ⇒ [<code>Promise.&lt;Agreement&gt;</code>](#Agreement)
    * [.getAgreementsCount(params)](#Agreements+getAgreementsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteAgreementById(agreementId)](#Agreements+deleteAgreementById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getAgreementById(agreementId)](#Agreements+getAgreementById) ⇒ [<code>Promise.&lt;Agreement&gt;</code>](#Agreement)
    * [.updateAgreement(agreementId, operations)](#Agreements+updateAgreement) ⇒ [<code>Promise.&lt;Agreement&gt;</code>](#Agreement)
    * [.replaceAgreement(agreementId, agreement)](#Agreements+replaceAgreement) ⇒ [<code>Promise.&lt;Agreement&gt;</code>](#Agreement)
    * [.getAgreementConfigurations(agreementId, params)](#Agreements+getAgreementConfigurations) ⇒ <code>Promise.&lt;Array.&lt;ConfigurationHref&gt;&gt;</code>
    * [.createConfigurationAssociation(agreementId, configuration)](#Agreements+createConfigurationAssociation) ⇒ [<code>Promise.&lt;ConfigurationHref&gt;</code>](#ConfigurationHref)
    * [.getAgreementConfigurationsCount(agreementId)](#Agreements+getAgreementConfigurationsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteConfigurationAssociation(agreementId, configurationId)](#Agreements+deleteConfigurationAssociation) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getConfigurationAssociation(agreementId, configurationId)](#Agreements+getConfigurationAssociation) ⇒ [<code>Promise.&lt;ConfigurationHref&gt;</code>](#ConfigurationHref)

<a name="new_Agreements_new"></a>

### new Agreements(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Agreements+getAgreements"></a>

### agreements.getAgreements(params) ⇒ <code>Promise.&lt;Array.&lt;Agreement&gt;&gt;</code>
GET

**Kind**: instance method of [<code>Agreements</code>](#Agreements)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="Agreements+createAgreement"></a>

### agreements.createAgreement(agreement) ⇒ [<code>Promise.&lt;Agreement&gt;</code>](#Agreement)
POST

**Kind**: instance method of [<code>Agreements</code>](#Agreements)  

| Param | Type |
| --- | --- |
| agreement | [<code>Agreement</code>](#Agreement) | 

<a name="Agreements+getAgreementsCount"></a>

### agreements.getAgreementsCount(params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>Agreements</code>](#Agreements)  

| Param | Type |
| --- | --- |
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="Agreements+deleteAgreementById"></a>

### agreements.deleteAgreementById(agreementId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
DELETE

**Kind**: instance method of [<code>Agreements</code>](#Agreements)  

| Param | Type |
| --- | --- |
| agreementId | <code>string</code> \| <code>number</code> | 

<a name="Agreements+getAgreementById"></a>

### agreements.getAgreementById(agreementId) ⇒ [<code>Promise.&lt;Agreement&gt;</code>](#Agreement)
**Kind**: instance method of [<code>Agreements</code>](#Agreements)  

| Param | Type |
| --- | --- |
| agreementId | <code>string</code> \| <code>number</code> | 

<a name="Agreements+updateAgreement"></a>

### agreements.updateAgreement(agreementId, operations) ⇒ [<code>Promise.&lt;Agreement&gt;</code>](#Agreement)
**Kind**: instance method of [<code>Agreements</code>](#Agreements)  

| Param | Type |
| --- | --- |
| agreementId | <code>string</code> \| <code>number</code> | 
| operations | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="Agreements+replaceAgreement"></a>

### agreements.replaceAgreement(agreementId, agreement) ⇒ [<code>Promise.&lt;Agreement&gt;</code>](#Agreement)
**Kind**: instance method of [<code>Agreements</code>](#Agreements)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| agreement | [<code>Agreement</code>](#Agreement) | 

<a name="Agreements+getAgreementConfigurations"></a>

### agreements.getAgreementConfigurations(agreementId, params) ⇒ <code>Promise.&lt;Array.&lt;ConfigurationHref&gt;&gt;</code>
**Kind**: instance method of [<code>Agreements</code>](#Agreements)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>ParamsPage</code>](#ParamsPage) | 

<a name="Agreements+createConfigurationAssociation"></a>

### agreements.createConfigurationAssociation(agreementId, configuration) ⇒ [<code>Promise.&lt;ConfigurationHref&gt;</code>](#ConfigurationHref)
POST

**Kind**: instance method of [<code>Agreements</code>](#Agreements)  

| Param |
| --- |
| agreementId | 
| configuration | 

<a name="Agreements+getAgreementConfigurationsCount"></a>

### agreements.getAgreementConfigurationsCount(agreementId) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>Agreements</code>](#Agreements)  

| Param |
| --- |
| agreementId | 

<a name="Agreements+deleteConfigurationAssociation"></a>

### agreements.deleteConfigurationAssociation(agreementId, configurationId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
**Kind**: instance method of [<code>Agreements</code>](#Agreements)  

| Param |
| --- |
| agreementId | 
| configurationId | 

<a name="Agreements+getConfigurationAssociation"></a>

### agreements.getConfigurationAssociation(agreementId, configurationId) ⇒ [<code>Promise.&lt;ConfigurationHref&gt;</code>](#ConfigurationHref)
**Kind**: instance method of [<code>Agreements</code>](#Agreements)  

| Param |
| --- |
| agreementId | 
| configurationId | 

<a name="AgreementSites"></a>

## AgreementSites
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [AgreementSites](#AgreementSites)
    * [new AgreementSites(options)](#new_AgreementSites_new)
    * [.getAgreementSites(agreementId, params)](#AgreementSites+getAgreementSites) ⇒ <code>Promise.&lt;Array.&lt;AgreementSite&gt;&gt;</code>
    * [.createAgreementSite(agreementId, site)](#AgreementSites+createAgreementSite) ⇒ [<code>Promise.&lt;AgreementSite&gt;</code>](#AgreementSite)
    * [.getAgreementSitesCount(agreementId, params)](#AgreementSites+getAgreementSitesCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteAgreementSiteById(agreementId, siteId)](#AgreementSites+deleteAgreementSiteById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getAgreementSiteById(agreementId, siteId)](#AgreementSites+getAgreementSiteById) ⇒ [<code>Promise.&lt;AgreementSite&gt;</code>](#AgreementSite)
    * [.updateAgreementSite(agreementId, siteId, operations)](#AgreementSites+updateAgreementSite) ⇒ [<code>Promise.&lt;AgreementSite&gt;</code>](#AgreementSite)
    * [.replaceAgreementSite(agreementId, siteId, site)](#AgreementSites+replaceAgreementSite) ⇒ [<code>Promise.&lt;AgreementSite&gt;</code>](#AgreementSite)

<a name="new_AgreementSites_new"></a>

### new AgreementSites(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="AgreementSites+getAgreementSites"></a>

### agreementSites.getAgreementSites(agreementId, params) ⇒ <code>Promise.&lt;Array.&lt;AgreementSite&gt;&gt;</code>
GET

**Kind**: instance method of [<code>AgreementSites</code>](#AgreementSites)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>Params</code>](#Params) | 

<a name="AgreementSites+createAgreementSite"></a>

### agreementSites.createAgreementSite(agreementId, site) ⇒ [<code>Promise.&lt;AgreementSite&gt;</code>](#AgreementSite)
POST

**Kind**: instance method of [<code>AgreementSites</code>](#AgreementSites)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| site | [<code>AgreementSite</code>](#AgreementSite) | 

<a name="AgreementSites+getAgreementSitesCount"></a>

### agreementSites.getAgreementSitesCount(agreementId, params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>AgreementSites</code>](#AgreementSites)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="AgreementSites+deleteAgreementSiteById"></a>

### agreementSites.deleteAgreementSiteById(agreementId, siteId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
DELETE

**Kind**: instance method of [<code>AgreementSites</code>](#AgreementSites)  

| Param |
| --- |
| agreementId | 
| siteId | 

<a name="AgreementSites+getAgreementSiteById"></a>

### agreementSites.getAgreementSiteById(agreementId, siteId) ⇒ [<code>Promise.&lt;AgreementSite&gt;</code>](#AgreementSite)
GET

**Kind**: instance method of [<code>AgreementSites</code>](#AgreementSites)  

| Param |
| --- |
| agreementId | 
| siteId | 

<a name="AgreementSites+updateAgreementSite"></a>

### agreementSites.updateAgreementSite(agreementId, siteId, operations) ⇒ [<code>Promise.&lt;AgreementSite&gt;</code>](#AgreementSite)
PATCH

**Kind**: instance method of [<code>AgreementSites</code>](#AgreementSites)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| siteId |  | 
| operations | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="AgreementSites+replaceAgreementSite"></a>

### agreementSites.replaceAgreementSite(agreementId, siteId, site) ⇒ [<code>Promise.&lt;AgreementSite&gt;</code>](#AgreementSite)
PUT

**Kind**: instance method of [<code>AgreementSites</code>](#AgreementSites)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| siteId |  | 
| site | [<code>AgreementSite</code>](#AgreementSite) | 

<a name="BoardDefaults"></a>

## BoardDefaults
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [BoardDefaults](#BoardDefaults)
    * [new BoardDefaults(options)](#new_BoardDefaults_new)
    * [.getBoardDefaults(agreementId, params)](#BoardDefaults+getBoardDefaults) ⇒ <code>Promise.&lt;Array.&lt;BoardDefault&gt;&gt;</code>
    * [.createBoardDefault(agreementId, boardDefault)](#BoardDefaults+createBoardDefault) ⇒ [<code>Promise.&lt;BoardDefault&gt;</code>](#BoardDefault)
    * [.getBoardDefaultsCount(agreementId, params)](#BoardDefaults+getBoardDefaultsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteBoardDefaultById(agreementId, boardDefaultId)](#BoardDefaults+deleteBoardDefaultById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getBoardDefaultById(agreementId, boardDefaultId)](#BoardDefaults+getBoardDefaultById) ⇒ [<code>Promise.&lt;BoardDefault&gt;</code>](#BoardDefault)
    * [.updateBoardDefault(agreementId, boardDefaultId, operations)](#BoardDefaults+updateBoardDefault) ⇒ [<code>Promise.&lt;BoardDefault&gt;</code>](#BoardDefault)
    * [.replaceBoardDefault(agreementId, boardDefaultId, boardDefault)](#BoardDefaults+replaceBoardDefault) ⇒ [<code>Promise.&lt;BoardDefault&gt;</code>](#BoardDefault)

<a name="new_BoardDefaults_new"></a>

### new BoardDefaults(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="BoardDefaults+getBoardDefaults"></a>

### boardDefaults.getBoardDefaults(agreementId, params) ⇒ <code>Promise.&lt;Array.&lt;BoardDefault&gt;&gt;</code>
GET

**Kind**: instance method of [<code>BoardDefaults</code>](#BoardDefaults)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>Params</code>](#Params) | 

<a name="BoardDefaults+createBoardDefault"></a>

### boardDefaults.createBoardDefault(agreementId, boardDefault) ⇒ [<code>Promise.&lt;BoardDefault&gt;</code>](#BoardDefault)
POST

**Kind**: instance method of [<code>BoardDefaults</code>](#BoardDefaults)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| boardDefault | [<code>BoardDefault</code>](#BoardDefault) | 

<a name="BoardDefaults+getBoardDefaultsCount"></a>

### boardDefaults.getBoardDefaultsCount(agreementId, params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>BoardDefaults</code>](#BoardDefaults)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="BoardDefaults+deleteBoardDefaultById"></a>

### boardDefaults.deleteBoardDefaultById(agreementId, boardDefaultId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
DELETE

**Kind**: instance method of [<code>BoardDefaults</code>](#BoardDefaults)  

| Param |
| --- |
| agreementId | 
| boardDefaultId | 

<a name="BoardDefaults+getBoardDefaultById"></a>

### boardDefaults.getBoardDefaultById(agreementId, boardDefaultId) ⇒ [<code>Promise.&lt;BoardDefault&gt;</code>](#BoardDefault)
GET

**Kind**: instance method of [<code>BoardDefaults</code>](#BoardDefaults)  

| Param |
| --- |
| agreementId | 
| boardDefaultId | 

<a name="BoardDefaults+updateBoardDefault"></a>

### boardDefaults.updateBoardDefault(agreementId, boardDefaultId, operations) ⇒ [<code>Promise.&lt;BoardDefault&gt;</code>](#BoardDefault)
PATCH

**Kind**: instance method of [<code>BoardDefaults</code>](#BoardDefaults)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| boardDefaultId |  | 
| operations | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="BoardDefaults+replaceBoardDefault"></a>

### boardDefaults.replaceBoardDefault(agreementId, boardDefaultId, boardDefault) ⇒ [<code>Promise.&lt;BoardDefault&gt;</code>](#BoardDefault)
PUT

**Kind**: instance method of [<code>BoardDefaults</code>](#BoardDefaults)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| boardDefaultId |  | 
| boardDefault | [<code>BoardDefault</code>](#BoardDefault) | 

<a name="FinanceAPI"></a>

## FinanceAPI
**Kind**: global class  
<a name="new_FinanceAPI_new"></a>

### new FinanceAPI(options)

| Param |
| --- |
| options | 

<a name="WorkRoles"></a>

## WorkRoles
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [WorkRoles](#WorkRoles)
    * [new WorkRoles(options)](#new_WorkRoles_new)
    * [.getWorkRoles(agreementId, params)](#WorkRoles+getWorkRoles) ⇒ <code>Promise.&lt;Array.&lt;WorkRole&gt;&gt;</code>
    * [.createWorkRole(agreementId, workRole)](#WorkRoles+createWorkRole) ⇒ [<code>Promise.&lt;WorkRole&gt;</code>](#WorkRole)
    * [.getWorkRolesCount(agreementId, params)](#WorkRoles+getWorkRolesCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteWorkRoleById(agreementId, workRoleId)](#WorkRoles+deleteWorkRoleById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getWorkRoleById(agreementId, workRoleId)](#WorkRoles+getWorkRoleById) ⇒ [<code>Promise.&lt;WorkRole&gt;</code>](#WorkRole)
    * [.updateWorkRole(agreementId, workRoleId, operations)](#WorkRoles+updateWorkRole) ⇒ [<code>Promise.&lt;WorkRole&gt;</code>](#WorkRole)
    * [.replaceWorkRole(agreementId, workRoleId, workRole)](#WorkRoles+replaceWorkRole) ⇒ [<code>Promise.&lt;WorkRole&gt;</code>](#WorkRole)

<a name="new_WorkRoles_new"></a>

### new WorkRoles(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="WorkRoles+getWorkRoles"></a>

### workRoles.getWorkRoles(agreementId, params) ⇒ <code>Promise.&lt;Array.&lt;WorkRole&gt;&gt;</code>
GET

**Kind**: instance method of [<code>WorkRoles</code>](#WorkRoles)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>Params</code>](#Params) | 

<a name="WorkRoles+createWorkRole"></a>

### workRoles.createWorkRole(agreementId, workRole) ⇒ [<code>Promise.&lt;WorkRole&gt;</code>](#WorkRole)
POST

**Kind**: instance method of [<code>WorkRoles</code>](#WorkRoles)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| workRole | [<code>WorkRole</code>](#WorkRole) | 

<a name="WorkRoles+getWorkRolesCount"></a>

### workRoles.getWorkRolesCount(agreementId, params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>WorkRoles</code>](#WorkRoles)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="WorkRoles+deleteWorkRoleById"></a>

### workRoles.deleteWorkRoleById(agreementId, workRoleId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
DELETE

**Kind**: instance method of [<code>WorkRoles</code>](#WorkRoles)  

| Param |
| --- |
| agreementId | 
| workRoleId | 

<a name="WorkRoles+getWorkRoleById"></a>

### workRoles.getWorkRoleById(agreementId, workRoleId) ⇒ [<code>Promise.&lt;WorkRole&gt;</code>](#WorkRole)
GET

**Kind**: instance method of [<code>WorkRoles</code>](#WorkRoles)  

| Param |
| --- |
| agreementId | 
| workRoleId | 

<a name="WorkRoles+updateWorkRole"></a>

### workRoles.updateWorkRole(agreementId, workRoleId, operations) ⇒ [<code>Promise.&lt;WorkRole&gt;</code>](#WorkRole)
PATCH

**Kind**: instance method of [<code>WorkRoles</code>](#WorkRoles)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| workRoleId |  | 
| operations | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="WorkRoles+replaceWorkRole"></a>

### workRoles.replaceWorkRole(agreementId, workRoleId, workRole) ⇒ [<code>Promise.&lt;WorkRole&gt;</code>](#WorkRole)
PUT

**Kind**: instance method of [<code>WorkRoles</code>](#WorkRoles)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| workRoleId |  | 
| workRole | [<code>WorkRole</code>](#WorkRole) | 

<a name="WorkTypeExclusions"></a>

## WorkTypeExclusions
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [WorkTypeExclusions](#WorkTypeExclusions)
    * [new WorkTypeExclusions(options)](#new_WorkTypeExclusions_new)
    * [.getWorkTypeExclusions(agreementId, params)](#WorkTypeExclusions+getWorkTypeExclusions) ⇒ <code>Promise.&lt;Array.&lt;WorkTypeExclusion&gt;&gt;</code>
    * [.createWorkTypeExclusion(agreementId, workTypeExclusion)](#WorkTypeExclusions+createWorkTypeExclusion) ⇒ [<code>Promise.&lt;WorkTypeExclusion&gt;</code>](#WorkTypeExclusion)
    * [.getWorkTypeExclusionsCount(agreementId, params)](#WorkTypeExclusions+getWorkTypeExclusionsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteWorkTypeExclusionById(agreementId, workTypeExclusionId)](#WorkTypeExclusions+deleteWorkTypeExclusionById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)

<a name="new_WorkTypeExclusions_new"></a>

### new WorkTypeExclusions(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="WorkTypeExclusions+getWorkTypeExclusions"></a>

### workTypeExclusions.getWorkTypeExclusions(agreementId, params) ⇒ <code>Promise.&lt;Array.&lt;WorkTypeExclusion&gt;&gt;</code>
GET

**Kind**: instance method of [<code>WorkTypeExclusions</code>](#WorkTypeExclusions)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>Params</code>](#Params) | 

<a name="WorkTypeExclusions+createWorkTypeExclusion"></a>

### workTypeExclusions.createWorkTypeExclusion(agreementId, workTypeExclusion) ⇒ [<code>Promise.&lt;WorkTypeExclusion&gt;</code>](#WorkTypeExclusion)
POST

**Kind**: instance method of [<code>WorkTypeExclusions</code>](#WorkTypeExclusions)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| workTypeExclusion | [<code>WorkTypeExclusion</code>](#WorkTypeExclusion) | 

<a name="WorkTypeExclusions+getWorkTypeExclusionsCount"></a>

### workTypeExclusions.getWorkTypeExclusionsCount(agreementId, params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>WorkTypeExclusions</code>](#WorkTypeExclusions)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="WorkTypeExclusions+deleteWorkTypeExclusionById"></a>

### workTypeExclusions.deleteWorkTypeExclusionById(agreementId, workTypeExclusionId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
DELETE

**Kind**: instance method of [<code>WorkTypeExclusions</code>](#WorkTypeExclusions)  

| Param |
| --- |
| agreementId | 
| workTypeExclusionId | 

<a name="WorkTypes"></a>

## WorkTypes
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [WorkTypes](#WorkTypes)
    * [new WorkTypes(options)](#new_WorkTypes_new)
    * [.getWorkTypes(agreementId, params)](#WorkTypes+getWorkTypes) ⇒ <code>Promise.&lt;Array.&lt;WorkType&gt;&gt;</code>
    * [.createWorkType(agreementId, workType)](#WorkTypes+createWorkType) ⇒ [<code>Promise.&lt;WorkType&gt;</code>](#WorkType)
    * [.getWorkTypesCount(agreementId, params)](#WorkTypes+getWorkTypesCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteWorkTypeById(agreementId, workTypeId)](#WorkTypes+deleteWorkTypeById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getWorkTypeById(agreementId, workTypeId)](#WorkTypes+getWorkTypeById) ⇒ [<code>Promise.&lt;WorkType&gt;</code>](#WorkType)
    * [.updateWorkType(agreementId, workTypeId, operations)](#WorkTypes+updateWorkType) ⇒ [<code>Promise.&lt;WorkType&gt;</code>](#WorkType)
    * [.replaceWorkType(agreementId, workTypeId, workType)](#WorkTypes+replaceWorkType) ⇒ [<code>Promise.&lt;WorkType&gt;</code>](#WorkType)

<a name="new_WorkTypes_new"></a>

### new WorkTypes(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="WorkTypes+getWorkTypes"></a>

### workTypes.getWorkTypes(agreementId, params) ⇒ <code>Promise.&lt;Array.&lt;WorkType&gt;&gt;</code>
GET

**Kind**: instance method of [<code>WorkTypes</code>](#WorkTypes)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>Params</code>](#Params) | 

<a name="WorkTypes+createWorkType"></a>

### workTypes.createWorkType(agreementId, workType) ⇒ [<code>Promise.&lt;WorkType&gt;</code>](#WorkType)
POST

**Kind**: instance method of [<code>WorkTypes</code>](#WorkTypes)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| workType | [<code>WorkType</code>](#WorkType) | 

<a name="WorkTypes+getWorkTypesCount"></a>

### workTypes.getWorkTypesCount(agreementId, params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>WorkTypes</code>](#WorkTypes)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="WorkTypes+deleteWorkTypeById"></a>

### workTypes.deleteWorkTypeById(agreementId, workTypeId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
DELETE

**Kind**: instance method of [<code>WorkTypes</code>](#WorkTypes)  

| Param |
| --- |
| agreementId | 
| workTypeId | 

<a name="WorkTypes+getWorkTypeById"></a>

### workTypes.getWorkTypeById(agreementId, workTypeId) ⇒ [<code>Promise.&lt;WorkType&gt;</code>](#WorkType)
GET

**Kind**: instance method of [<code>WorkTypes</code>](#WorkTypes)  

| Param |
| --- |
| agreementId | 
| workTypeId | 

<a name="WorkTypes+updateWorkType"></a>

### workTypes.updateWorkType(agreementId, workTypeId, operations) ⇒ [<code>Promise.&lt;WorkType&gt;</code>](#WorkType)
PATCH

**Kind**: instance method of [<code>WorkTypes</code>](#WorkTypes)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| workTypeId |  | 
| operations | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="WorkTypes+replaceWorkType"></a>

### workTypes.replaceWorkType(agreementId, workTypeId, workType) ⇒ [<code>Promise.&lt;WorkType&gt;</code>](#WorkType)
PUT

**Kind**: instance method of [<code>WorkTypes</code>](#WorkTypes)  

| Param | Type |
| --- | --- |
| agreementId |  | 
| workTypeId |  | 
| workType | [<code>WorkType</code>](#WorkType) | 

<a name="ProjectAPI"></a>

## ProjectAPI
**Kind**: global class  
<a name="new_ProjectAPI_new"></a>

### new ProjectAPI(options)

| Param |
| --- |
| options | 

<a name="Projects"></a>

## Projects
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [Projects](#Projects)
    * [new Projects(options)](#new_Projects_new)
    * [.getProjects(params)](#Projects+getProjects) ⇒ <code>Promise.&lt;Array.&lt;Project&gt;&gt;</code>
    * [.createProject(project)](#Projects+createProject) ⇒ [<code>Promise.&lt;Project&gt;</code>](#Project)
    * [.getProjectsCount(conditions)](#Projects+getProjectsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteProjectById(projectId)](#Projects+deleteProjectById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getProjectById(projectId)](#Projects+getProjectById) ⇒ [<code>Promise.&lt;Project&gt;</code>](#Project)
    * [.updateProject(projectId, operations)](#Projects+updateProject) ⇒ [<code>Promise.&lt;Project&gt;</code>](#Project)
    * [.replaceProject(projectId, project)](#Projects+replaceProject) ⇒ [<code>Promise.&lt;Project&gt;</code>](#Project)

<a name="new_Projects_new"></a>

### new Projects(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Projects+getProjects"></a>

### projects.getProjects(params) ⇒ <code>Promise.&lt;Array.&lt;Project&gt;&gt;</code>
**Kind**: instance method of [<code>Projects</code>](#Projects)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="Projects+createProject"></a>

### projects.createProject(project) ⇒ [<code>Promise.&lt;Project&gt;</code>](#Project)
**Kind**: instance method of [<code>Projects</code>](#Projects)  

| Param | Type |
| --- | --- |
| project | [<code>Project</code>](#Project) | 

<a name="Projects+getProjectsCount"></a>

### projects.getProjectsCount(conditions) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
**Kind**: instance method of [<code>Projects</code>](#Projects)  

| Param | Type |
| --- | --- |
| conditions | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="Projects+deleteProjectById"></a>

### projects.deleteProjectById(projectId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
**Kind**: instance method of [<code>Projects</code>](#Projects)  

| Param | Type |
| --- | --- |
| projectId | <code>string</code> \| <code>number</code> | 

<a name="Projects+getProjectById"></a>

### projects.getProjectById(projectId) ⇒ [<code>Promise.&lt;Project&gt;</code>](#Project)
**Kind**: instance method of [<code>Projects</code>](#Projects)  

| Param | Type |
| --- | --- |
| projectId | <code>string</code> \| <code>number</code> | 

<a name="Projects+updateProject"></a>

### projects.updateProject(projectId, operations) ⇒ [<code>Promise.&lt;Project&gt;</code>](#Project)
**Kind**: instance method of [<code>Projects</code>](#Projects)  

| Param | Type |
| --- | --- |
| projectId | <code>string</code> \| <code>number</code> | 
| operations | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="Projects+replaceProject"></a>

### projects.replaceProject(projectId, project) ⇒ [<code>Promise.&lt;Project&gt;</code>](#Project)
**Kind**: instance method of [<code>Projects</code>](#Projects)  

| Param | Type |
| --- | --- |
| projectId | <code>string</code> \| <code>number</code> | 
| project | [<code>Project</code>](#Project) | 

<a name="Activities"></a>

## Activities
**Kind**: global class  

* [Activities](#Activities)
    * [.getActivities(params)](#Activities+getActivities) ⇒ <code>Promise.&lt;Array.&lt;Activity&gt;&gt;</code>
    * [.getActivityTypes()](#Activities+getActivityTypes) ⇒ <code>Promise.&lt;Array.&lt;ActivityType&gt;&gt;</code>
    * [.getActivityStatuses()](#Activities+getActivityStatuses) ⇒ <code>Promise.&lt;Array.&lt;ActivityStatus&gt;&gt;</code>
    * [.deleteActivityById(id)](#Activities+deleteActivityById) ⇒ <code>Promise.&lt;{DeleteResponse}&gt;</code>
    * [.updateActivity(id, ops)](#Activities+updateActivity) ⇒ [<code>Promise.&lt;Activity&gt;</code>](#Activity)
    * [.getActivityById(id)](#Activities+getActivityById) ⇒ [<code>Promise.&lt;Activity&gt;</code>](#Activity)

<a name="Activities+getActivities"></a>

### activities.getActivities(params) ⇒ <code>Promise.&lt;Array.&lt;Activity&gt;&gt;</code>
GET

**Kind**: instance method of [<code>Activities</code>](#Activities)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="Activities+getActivityTypes"></a>

### activities.getActivityTypes() ⇒ <code>Promise.&lt;Array.&lt;ActivityType&gt;&gt;</code>
GET

**Kind**: instance method of [<code>Activities</code>](#Activities)  
<a name="Activities+getActivityStatuses"></a>

### activities.getActivityStatuses() ⇒ <code>Promise.&lt;Array.&lt;ActivityStatus&gt;&gt;</code>
**Kind**: instance method of [<code>Activities</code>](#Activities)  
<a name="Activities+deleteActivityById"></a>

### activities.deleteActivityById(id) ⇒ <code>Promise.&lt;{DeleteResponse}&gt;</code>
**Kind**: instance method of [<code>Activities</code>](#Activities)  

| Param |
| --- |
| id | 

<a name="Activities+updateActivity"></a>

### activities.updateActivity(id, ops) ⇒ [<code>Promise.&lt;Activity&gt;</code>](#Activity)
**Kind**: instance method of [<code>Activities</code>](#Activities)  

| Param | Type |
| --- | --- |
| id |  | 
| ops | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="Activities+getActivityById"></a>

### activities.getActivityById(id) ⇒ [<code>Promise.&lt;Activity&gt;</code>](#Activity)
**Kind**: instance method of [<code>Activities</code>](#Activities)  

| Param |
| --- |
| id | 

<a name="ScheduleAPI"></a>

## ScheduleAPI
**Kind**: global class  
<a name="new_ScheduleAPI_new"></a>

### new ScheduleAPI(options)

| Param |
| --- |
| options | 

<a name="ScheduleEntries"></a>

## ScheduleEntries
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [ScheduleEntries](#ScheduleEntries)
    * [new ScheduleEntries(options)](#new_ScheduleEntries_new)
    * [.getScheduleEntries(params)](#ScheduleEntries+getScheduleEntries) ⇒ <code>Promise.&lt;Array.&lt;ScheduleEntry&gt;&gt;</code>
    * [.createSchedule(scheduleEntry)](#ScheduleEntries+createSchedule) ⇒ [<code>Promise.&lt;ScheduleEntry&gt;</code>](#ScheduleEntry)
    * [.getScheduleEntriesCount(params)](#ScheduleEntries+getScheduleEntriesCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.getScheduleEntryById(id)](#ScheduleEntries+getScheduleEntryById) ⇒ <code>Promise.&lt;Array.&lt;ScheduleEntry&gt;&gt;</code>
    * [.deleteById(id)](#ScheduleEntries+deleteById) ⇒ <code>Promise.&lt;Array.&lt;ScheduleEntry&gt;&gt;</code>
    * [.replaceSchedule(id)](#ScheduleEntries+replaceSchedule) ⇒ <code>Promise.&lt;Array.&lt;ScheduleEntry&gt;&gt;</code>
    * [.updateSchedule(id, ops)](#ScheduleEntries+updateSchedule) ⇒ <code>Promise.&lt;Array.&lt;ScheduleEntry&gt;&gt;</code>

<a name="new_ScheduleEntries_new"></a>

### new ScheduleEntries(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="ScheduleEntries+getScheduleEntries"></a>

### scheduleEntries.getScheduleEntries(params) ⇒ <code>Promise.&lt;Array.&lt;ScheduleEntry&gt;&gt;</code>
**Kind**: instance method of [<code>ScheduleEntries</code>](#ScheduleEntries)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="ScheduleEntries+createSchedule"></a>

### scheduleEntries.createSchedule(scheduleEntry) ⇒ [<code>Promise.&lt;ScheduleEntry&gt;</code>](#ScheduleEntry)
**Kind**: instance method of [<code>ScheduleEntries</code>](#ScheduleEntries)  

| Param | Type |
| --- | --- |
| scheduleEntry | [<code>ScheduleEntry</code>](#ScheduleEntry) | 

<a name="ScheduleEntries+getScheduleEntriesCount"></a>

### scheduleEntries.getScheduleEntriesCount(params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
**Kind**: instance method of [<code>ScheduleEntries</code>](#ScheduleEntries)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="ScheduleEntries+getScheduleEntryById"></a>

### scheduleEntries.getScheduleEntryById(id) ⇒ <code>Promise.&lt;Array.&lt;ScheduleEntry&gt;&gt;</code>
**Kind**: instance method of [<code>ScheduleEntries</code>](#ScheduleEntries)  

| Param | Description |
| --- | --- |
| id | scheduleId |

<a name="ScheduleEntries+deleteById"></a>

### scheduleEntries.deleteById(id) ⇒ <code>Promise.&lt;Array.&lt;ScheduleEntry&gt;&gt;</code>
**Kind**: instance method of [<code>ScheduleEntries</code>](#ScheduleEntries)  

| Param | Description |
| --- | --- |
| id | scheduleId |

<a name="ScheduleEntries+replaceSchedule"></a>

### scheduleEntries.replaceSchedule(id) ⇒ <code>Promise.&lt;Array.&lt;ScheduleEntry&gt;&gt;</code>
**Kind**: instance method of [<code>ScheduleEntries</code>](#ScheduleEntries)  

| Param | Description |
| --- | --- |
| id | scheduleId |

<a name="ScheduleEntries+updateSchedule"></a>

### scheduleEntries.updateSchedule(id, ops) ⇒ <code>Promise.&lt;Array.&lt;ScheduleEntry&gt;&gt;</code>
**Kind**: instance method of [<code>ScheduleEntries</code>](#ScheduleEntries)  

| Param | Type | Description |
| --- | --- | --- |
| id |  | scheduleId |
| ops | [<code>Array.&lt;Operations&gt;</code>](#Operations) |  |

<a name="ScheduleTypes"></a>

## ScheduleTypes
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [ScheduleTypes](#ScheduleTypes)
    * [new ScheduleTypes(options)](#new_ScheduleTypes_new)
    * [.getScheduleTypes(params)](#ScheduleTypes+getScheduleTypes) ⇒ <code>Promise.&lt;Array.&lt;ScheduleType&gt;&gt;</code>
    * [.createScheduleType(scheduleType)](#ScheduleTypes+createScheduleType) ⇒ [<code>Promise.&lt;ScheduleType&gt;</code>](#ScheduleType)
    * [.getScheduleTypesCount(params)](#ScheduleTypes+getScheduleTypesCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.getScheduleTypeById(scheduleTypeId)](#ScheduleTypes+getScheduleTypeById) ⇒ [<code>Promise.&lt;ScheduleType&gt;</code>](#ScheduleType)
    * [.deleteScheduleTypeById(scheduleTypeId)](#ScheduleTypes+deleteScheduleTypeById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.replaceScheduleType(scheduleTypeId, scheduleType)](#ScheduleTypes+replaceScheduleType) ⇒ [<code>Promise.&lt;ScheduleType&gt;</code>](#ScheduleType)
    * [.updateScheduleType(scheduleTypeId, ops)](#ScheduleTypes+updateScheduleType) ⇒ [<code>Promise.&lt;ScheduleType&gt;</code>](#ScheduleType)

<a name="new_ScheduleTypes_new"></a>

### new ScheduleTypes(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="ScheduleTypes+getScheduleTypes"></a>

### scheduleTypes.getScheduleTypes(params) ⇒ <code>Promise.&lt;Array.&lt;ScheduleType&gt;&gt;</code>
**Kind**: instance method of [<code>ScheduleTypes</code>](#ScheduleTypes)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="ScheduleTypes+createScheduleType"></a>

### scheduleTypes.createScheduleType(scheduleType) ⇒ [<code>Promise.&lt;ScheduleType&gt;</code>](#ScheduleType)
**Kind**: instance method of [<code>ScheduleTypes</code>](#ScheduleTypes)  

| Param | Type |
| --- | --- |
| scheduleType | [<code>ScheduleEntry</code>](#ScheduleEntry) | 

<a name="ScheduleTypes+getScheduleTypesCount"></a>

### scheduleTypes.getScheduleTypesCount(params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
**Kind**: instance method of [<code>ScheduleTypes</code>](#ScheduleTypes)  

| Param | Type |
| --- | --- |
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="ScheduleTypes+getScheduleTypeById"></a>

### scheduleTypes.getScheduleTypeById(scheduleTypeId) ⇒ [<code>Promise.&lt;ScheduleType&gt;</code>](#ScheduleType)
**Kind**: instance method of [<code>ScheduleTypes</code>](#ScheduleTypes)  

| Param |
| --- |
| scheduleTypeId | 

<a name="ScheduleTypes+deleteScheduleTypeById"></a>

### scheduleTypes.deleteScheduleTypeById(scheduleTypeId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
**Kind**: instance method of [<code>ScheduleTypes</code>](#ScheduleTypes)  

| Param |
| --- |
| scheduleTypeId | 

<a name="ScheduleTypes+replaceScheduleType"></a>

### scheduleTypes.replaceScheduleType(scheduleTypeId, scheduleType) ⇒ [<code>Promise.&lt;ScheduleType&gt;</code>](#ScheduleType)
**Kind**: instance method of [<code>ScheduleTypes</code>](#ScheduleTypes)  

| Param | Type |
| --- | --- |
| scheduleTypeId |  | 
| scheduleType | [<code>ScheduleType</code>](#ScheduleType) | 

<a name="ScheduleTypes+updateScheduleType"></a>

### scheduleTypes.updateScheduleType(scheduleTypeId, ops) ⇒ [<code>Promise.&lt;ScheduleType&gt;</code>](#ScheduleType)
**Kind**: instance method of [<code>ScheduleTypes</code>](#ScheduleTypes)  

| Param | Type |
| --- | --- |
| scheduleTypeId |  | 
| ops | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="BoardItems"></a>

## BoardItems
**Kind**: global class  

* [BoardItems](#BoardItems)
    * [new BoardItems(options)](#new_BoardItems_new)
    * [.getItems(id, params)](#BoardItems+getItems) ⇒ <code>Promise.&lt;Array.&lt;BoardItem&gt;&gt;</code>
    * [.createItem(boardId, item)](#BoardItems+createItem) ⇒ [<code>Promise.&lt;BoardItem&gt;</code>](#BoardItem)
    * [.getItemUsagesCount(boardId, itemId)](#BoardItems+getItemUsagesCount) ⇒ <code>Promise.&lt;Array.&lt;UsageCount&gt;&gt;</code>
    * [.getItemUsages(boardId, itemId)](#BoardItems+getItemUsages) ⇒ <code>Promise.&lt;Array.&lt;Usage&gt;&gt;</code>
    * [.getItemsCount(id, params)](#BoardItems+getItemsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.getItemById(boardId, itemId)](#BoardItems+getItemById) ⇒ [<code>Promise.&lt;BoardItem&gt;</code>](#BoardItem)
    * [.deleteItem(boardId, itemId)](#BoardItems+deleteItem) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.replaceItem(boardId, itemId, item)](#BoardItems+replaceItem) ⇒ [<code>Promise.&lt;BoardItem&gt;</code>](#BoardItem)
    * [.updateItem(boardId, itemId, ops)](#BoardItems+updateItem) ⇒ [<code>Promise.&lt;BoardItem&gt;</code>](#BoardItem)

<a name="new_BoardItems_new"></a>

### new BoardItems(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="BoardItems+getItems"></a>

### boardItems.getItems(id, params) ⇒ <code>Promise.&lt;Array.&lt;BoardItem&gt;&gt;</code>
**Kind**: instance method of [<code>BoardItems</code>](#BoardItems)  

| Param | Type |
| --- | --- |
| id |  | 
| params | [<code>Params</code>](#Params) | 

<a name="BoardItems+createItem"></a>

### boardItems.createItem(boardId, item) ⇒ [<code>Promise.&lt;BoardItem&gt;</code>](#BoardItem)
**Kind**: instance method of [<code>BoardItems</code>](#BoardItems)  

| Param | Type |
| --- | --- |
| boardId |  | 
| item | [<code>BoardItem</code>](#BoardItem) | 

<a name="BoardItems+getItemUsagesCount"></a>

### boardItems.getItemUsagesCount(boardId, itemId) ⇒ <code>Promise.&lt;Array.&lt;UsageCount&gt;&gt;</code>
**Kind**: instance method of [<code>BoardItems</code>](#BoardItems)  

| Param |
| --- |
| boardId | 
| itemId | 

<a name="BoardItems+getItemUsages"></a>

### boardItems.getItemUsages(boardId, itemId) ⇒ <code>Promise.&lt;Array.&lt;Usage&gt;&gt;</code>
**Kind**: instance method of [<code>BoardItems</code>](#BoardItems)  

| Param |
| --- |
| boardId | 
| itemId | 

<a name="BoardItems+getItemsCount"></a>

### boardItems.getItemsCount(id, params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
**Kind**: instance method of [<code>BoardItems</code>](#BoardItems)  

| Param | Type |
| --- | --- |
| id |  | 
| params | [<code>Params</code>](#Params) | 

<a name="BoardItems+getItemById"></a>

### boardItems.getItemById(boardId, itemId) ⇒ [<code>Promise.&lt;BoardItem&gt;</code>](#BoardItem)
**Kind**: instance method of [<code>BoardItems</code>](#BoardItems)  

| Param |
| --- |
| boardId | 
| itemId | 

<a name="BoardItems+deleteItem"></a>

### boardItems.deleteItem(boardId, itemId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
**Kind**: instance method of [<code>BoardItems</code>](#BoardItems)  

| Param |
| --- |
| boardId | 
| itemId | 

<a name="BoardItems+replaceItem"></a>

### boardItems.replaceItem(boardId, itemId, item) ⇒ [<code>Promise.&lt;BoardItem&gt;</code>](#BoardItem)
**Kind**: instance method of [<code>BoardItems</code>](#BoardItems)  

| Param | Type |
| --- | --- |
| boardId |  | 
| itemId |  | 
| item | [<code>BoardItem</code>](#BoardItem) | 

<a name="BoardItems+updateItem"></a>

### boardItems.updateItem(boardId, itemId, ops) ⇒ [<code>Promise.&lt;BoardItem&gt;</code>](#BoardItem)
**Kind**: instance method of [<code>BoardItems</code>](#BoardItems)  

| Param | Type |
| --- | --- |
| boardId |  | 
| itemId |  | 
| ops | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="Boards"></a>

## Boards
**Kind**: global class  

* [Boards](#Boards)
    * [new Boards(options)](#new_Boards_new)
    * [.getBoards(params)](#Boards+getBoards) ⇒ <code>Promise.&lt;Array.&lt;Board&gt;&gt;</code>
    * [.createBoard(board)](#Boards+createBoard) ⇒ <code>Promise.&lt;Array.&lt;Board&gt;&gt;</code>
    * [.getBoardById(id)](#Boards+getBoardById) ⇒ <code>Promise.&lt;Array.&lt;Board&gt;&gt;</code>
    * [.getBoardsCount(params)](#Boards+getBoardsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.updateBoard(id, ops)](#Boards+updateBoard) ⇒ [<code>Promise.&lt;Board&gt;</code>](#Board)
    * [.replaceBoard(id, board)](#Boards+replaceBoard) ⇒ [<code>Promise.&lt;Board&gt;</code>](#Board)

<a name="new_Boards_new"></a>

### new Boards(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Boards+getBoards"></a>

### boards.getBoards(params) ⇒ <code>Promise.&lt;Array.&lt;Board&gt;&gt;</code>
GET

**Kind**: instance method of [<code>Boards</code>](#Boards)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="Boards+createBoard"></a>

### boards.createBoard(board) ⇒ <code>Promise.&lt;Array.&lt;Board&gt;&gt;</code>
POST

**Kind**: instance method of [<code>Boards</code>](#Boards)  

| Param | Type |
| --- | --- |
| board | [<code>Board</code>](#Board) | 

<a name="Boards+getBoardById"></a>

### boards.getBoardById(id) ⇒ <code>Promise.&lt;Array.&lt;Board&gt;&gt;</code>
GET

**Kind**: instance method of [<code>Boards</code>](#Boards)  

| Param |
| --- |
| id | 

<a name="Boards+getBoardsCount"></a>

### boards.getBoardsCount(params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>Boards</code>](#Boards)  

| Param | Type |
| --- | --- |
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="Boards+updateBoard"></a>

### boards.updateBoard(id, ops) ⇒ [<code>Promise.&lt;Board&gt;</code>](#Board)
PATCH

**Kind**: instance method of [<code>Boards</code>](#Boards)  

| Param | Type |
| --- | --- |
| id |  | 
| ops | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="Boards+replaceBoard"></a>

### boards.replaceBoard(id, board) ⇒ [<code>Promise.&lt;Board&gt;</code>](#Board)
**Kind**: instance method of [<code>Boards</code>](#Boards)  

| Param | Type |
| --- | --- |
| id |  | 
| board | [<code>Board</code>](#Board) | 

<a name="BoardSubTypes"></a>

## BoardSubTypes
**Kind**: global class  

* [BoardSubTypes](#BoardSubTypes)
    * [new BoardSubTypes(options)](#new_BoardSubTypes_new)
    * [.getSubTypes(boardId, params)](#BoardSubTypes+getSubTypes) ⇒ <code>Promise.&lt;Array.&lt;BoardSubType&gt;&gt;</code>
    * [.createSubType(boardId, subType)](#BoardSubTypes+createSubType) ⇒ [<code>Promise.&lt;BoardSubType&gt;</code>](#BoardSubType)
    * [.getSubTypesCount(id, params)](#BoardSubTypes+getSubTypesCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.getSubTypeById(boardId, subTypeId)](#BoardSubTypes+getSubTypeById) ⇒ [<code>Promise.&lt;BoardSubType&gt;</code>](#BoardSubType)
    * [.deleteSubType(boardId, subTypeId)](#BoardSubTypes+deleteSubType) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.replaceType(boardId, subTypeId, subType)](#BoardSubTypes+replaceType) ⇒ [<code>Promise.&lt;BoardType&gt;</code>](#BoardType)
    * [.updateSubType(boardId, subTypeId, ops)](#BoardSubTypes+updateSubType) ⇒ [<code>Promise.&lt;BoardSubType&gt;</code>](#BoardSubType)

<a name="new_BoardSubTypes_new"></a>

### new BoardSubTypes(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="BoardSubTypes+getSubTypes"></a>

### boardSubTypes.getSubTypes(boardId, params) ⇒ <code>Promise.&lt;Array.&lt;BoardSubType&gt;&gt;</code>
**Kind**: instance method of [<code>BoardSubTypes</code>](#BoardSubTypes)  

| Param | Type |
| --- | --- |
| boardId |  | 
| params | [<code>Params</code>](#Params) | 

<a name="BoardSubTypes+createSubType"></a>

### boardSubTypes.createSubType(boardId, subType) ⇒ [<code>Promise.&lt;BoardSubType&gt;</code>](#BoardSubType)
**Kind**: instance method of [<code>BoardSubTypes</code>](#BoardSubTypes)  

| Param | Type |
| --- | --- |
| boardId |  | 
| subType | [<code>BoardSubType</code>](#BoardSubType) | 

<a name="BoardSubTypes+getSubTypesCount"></a>

### boardSubTypes.getSubTypesCount(id, params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
**Kind**: instance method of [<code>BoardSubTypes</code>](#BoardSubTypes)  

| Param | Type |
| --- | --- |
| id |  | 
| params | [<code>Params</code>](#Params) | 

<a name="BoardSubTypes+getSubTypeById"></a>

### boardSubTypes.getSubTypeById(boardId, subTypeId) ⇒ [<code>Promise.&lt;BoardSubType&gt;</code>](#BoardSubType)
**Kind**: instance method of [<code>BoardSubTypes</code>](#BoardSubTypes)  

| Param |
| --- |
| boardId | 
| subTypeId | 

<a name="BoardSubTypes+deleteSubType"></a>

### boardSubTypes.deleteSubType(boardId, subTypeId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
**Kind**: instance method of [<code>BoardSubTypes</code>](#BoardSubTypes)  

| Param |
| --- |
| boardId | 
| subTypeId | 

<a name="BoardSubTypes+replaceType"></a>

### boardSubTypes.replaceType(boardId, subTypeId, subType) ⇒ [<code>Promise.&lt;BoardType&gt;</code>](#BoardType)
**Kind**: instance method of [<code>BoardSubTypes</code>](#BoardSubTypes)  

| Param | Type |
| --- | --- |
| boardId |  | 
| subTypeId |  | 
| subType | [<code>BoardSubType</code>](#BoardSubType) | 

<a name="BoardSubTypes+updateSubType"></a>

### boardSubTypes.updateSubType(boardId, subTypeId, ops) ⇒ [<code>Promise.&lt;BoardSubType&gt;</code>](#BoardSubType)
**Kind**: instance method of [<code>BoardSubTypes</code>](#BoardSubTypes)  

| Param | Type |
| --- | --- |
| boardId |  | 
| subTypeId |  | 
| ops | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="BoardTeams"></a>

## BoardTeams
**Kind**: global class  

* [BoardTeams](#BoardTeams)
    * [new BoardTeams(options)](#new_BoardTeams_new)
    * [.getBoardTeams(boardId, params)](#BoardTeams+getBoardTeams) ⇒ <code>Promise.&lt;Array.&lt;BoardTeam&gt;&gt;</code>
    * [.createBoardTeam(boardId, team)](#BoardTeams+createBoardTeam) ⇒ [<code>Promise.&lt;BoardTeam&gt;</code>](#BoardTeam)
    * [.getBoardTeamsCount(boardId, params)](#BoardTeams+getBoardTeamsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteBoardTeamById(boardId, teamId)](#BoardTeams+deleteBoardTeamById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getBoardTeamById(boardId, teamId)](#BoardTeams+getBoardTeamById) ⇒ [<code>Promise.&lt;BoardTeam&gt;</code>](#BoardTeam)
    * [.updateBoardTeamById(boardId, teamId, operations)](#BoardTeams+updateBoardTeamById) ⇒ [<code>Promise.&lt;BoardTeam&gt;</code>](#BoardTeam)
    * [.replaceBoardTeamById(boardId, teamId, team)](#BoardTeams+replaceBoardTeamById) ⇒ [<code>Promise.&lt;BoardTeam&gt;</code>](#BoardTeam)

<a name="new_BoardTeams_new"></a>

### new BoardTeams(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="BoardTeams+getBoardTeams"></a>

### boardTeams.getBoardTeams(boardId, params) ⇒ <code>Promise.&lt;Array.&lt;BoardTeam&gt;&gt;</code>
GET

**Kind**: instance method of [<code>BoardTeams</code>](#BoardTeams)  

| Param | Type |
| --- | --- |
| boardId |  | 
| params | [<code>Params</code>](#Params) | 

<a name="BoardTeams+createBoardTeam"></a>

### boardTeams.createBoardTeam(boardId, team) ⇒ [<code>Promise.&lt;BoardTeam&gt;</code>](#BoardTeam)
POST

**Kind**: instance method of [<code>BoardTeams</code>](#BoardTeams)  

| Param | Type |
| --- | --- |
| boardId |  | 
| team | [<code>BoardTeam</code>](#BoardTeam) | 

<a name="BoardTeams+getBoardTeamsCount"></a>

### boardTeams.getBoardTeamsCount(boardId, params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>BoardTeams</code>](#BoardTeams)  

| Param | Type |
| --- | --- |
| boardId |  | 
| params | [<code>Params</code>](#Params) | 

<a name="BoardTeams+deleteBoardTeamById"></a>

### boardTeams.deleteBoardTeamById(boardId, teamId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
DELETE

**Kind**: instance method of [<code>BoardTeams</code>](#BoardTeams)  

| Param |
| --- |
| boardId | 
| teamId | 

<a name="BoardTeams+getBoardTeamById"></a>

### boardTeams.getBoardTeamById(boardId, teamId) ⇒ [<code>Promise.&lt;BoardTeam&gt;</code>](#BoardTeam)
GET

**Kind**: instance method of [<code>BoardTeams</code>](#BoardTeams)  

| Param |
| --- |
| boardId | 
| teamId | 

<a name="BoardTeams+updateBoardTeamById"></a>

### boardTeams.updateBoardTeamById(boardId, teamId, operations) ⇒ [<code>Promise.&lt;BoardTeam&gt;</code>](#BoardTeam)
PATCH

**Kind**: instance method of [<code>BoardTeams</code>](#BoardTeams)  

| Param | Type |
| --- | --- |
| boardId |  | 
| teamId |  | 
| operations | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="BoardTeams+replaceBoardTeamById"></a>

### boardTeams.replaceBoardTeamById(boardId, teamId, team) ⇒ [<code>Promise.&lt;BoardTeam&gt;</code>](#BoardTeam)
PUT

**Kind**: instance method of [<code>BoardTeams</code>](#BoardTeams)  

| Param | Type |
| --- | --- |
| boardId |  | 
| teamId |  | 
| team | [<code>BoardTeam</code>](#BoardTeam) | 

<a name="BoardTypes"></a>

## BoardTypes
**Kind**: global class  

* [BoardTypes](#BoardTypes)
    * [new BoardTypes(options)](#new_BoardTypes_new)
    * [.getTypes(id, params)](#BoardTypes+getTypes) ⇒ <code>Promise.&lt;Array.&lt;BoardType&gt;&gt;</code>
    * [.createType(boardId, type)](#BoardTypes+createType) ⇒ [<code>Promise.&lt;BoardType&gt;</code>](#BoardType)
    * [.getTypeUsagesCount(boardId, typeId)](#BoardTypes+getTypeUsagesCount) ⇒ <code>Promise.&lt;Array.&lt;UsageCount&gt;&gt;</code>
    * [.getTypeUsages(boardId, typeId)](#BoardTypes+getTypeUsages) ⇒ <code>Promise.&lt;Array.&lt;Usage&gt;&gt;</code>
    * [.getTypesCount(id, params)](#BoardTypes+getTypesCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.getTypeById(boardId, typeId)](#BoardTypes+getTypeById) ⇒ [<code>Promise.&lt;BoardType&gt;</code>](#BoardType)
    * [.deleteType(boardId, typeId)](#BoardTypes+deleteType) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.replaceType(boardId, typeId, type)](#BoardTypes+replaceType) ⇒ [<code>Promise.&lt;BoardType&gt;</code>](#BoardType)
    * [.updateType(boardId, typeId, ops)](#BoardTypes+updateType) ⇒ [<code>Promise.&lt;BoardType&gt;</code>](#BoardType)

<a name="new_BoardTypes_new"></a>

### new BoardTypes(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="BoardTypes+getTypes"></a>

### boardTypes.getTypes(id, params) ⇒ <code>Promise.&lt;Array.&lt;BoardType&gt;&gt;</code>
**Kind**: instance method of [<code>BoardTypes</code>](#BoardTypes)  

| Param | Type |
| --- | --- |
| id |  | 
| params | [<code>Params</code>](#Params) | 

<a name="BoardTypes+createType"></a>

### boardTypes.createType(boardId, type) ⇒ [<code>Promise.&lt;BoardType&gt;</code>](#BoardType)
**Kind**: instance method of [<code>BoardTypes</code>](#BoardTypes)  

| Param | Type |
| --- | --- |
| boardId |  | 
| type | [<code>BoardType</code>](#BoardType) | 

<a name="BoardTypes+getTypeUsagesCount"></a>

### boardTypes.getTypeUsagesCount(boardId, typeId) ⇒ <code>Promise.&lt;Array.&lt;UsageCount&gt;&gt;</code>
**Kind**: instance method of [<code>BoardTypes</code>](#BoardTypes)  

| Param |
| --- |
| boardId | 
| typeId | 

<a name="BoardTypes+getTypeUsages"></a>

### boardTypes.getTypeUsages(boardId, typeId) ⇒ <code>Promise.&lt;Array.&lt;Usage&gt;&gt;</code>
**Kind**: instance method of [<code>BoardTypes</code>](#BoardTypes)  

| Param |
| --- |
| boardId | 
| typeId | 

<a name="BoardTypes+getTypesCount"></a>

### boardTypes.getTypesCount(id, params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
**Kind**: instance method of [<code>BoardTypes</code>](#BoardTypes)  

| Param | Type |
| --- | --- |
| id |  | 
| params | [<code>Params</code>](#Params) | 

<a name="BoardTypes+getTypeById"></a>

### boardTypes.getTypeById(boardId, typeId) ⇒ [<code>Promise.&lt;BoardType&gt;</code>](#BoardType)
**Kind**: instance method of [<code>BoardTypes</code>](#BoardTypes)  

| Param |
| --- |
| boardId | 
| typeId | 

<a name="BoardTypes+deleteType"></a>

### boardTypes.deleteType(boardId, typeId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
**Kind**: instance method of [<code>BoardTypes</code>](#BoardTypes)  

| Param |
| --- |
| boardId | 
| typeId | 

<a name="BoardTypes+replaceType"></a>

### boardTypes.replaceType(boardId, typeId, type) ⇒ [<code>Promise.&lt;BoardType&gt;</code>](#BoardType)
**Kind**: instance method of [<code>BoardTypes</code>](#BoardTypes)  

| Param | Type |
| --- | --- |
| boardId |  | 
| typeId |  | 
| type | [<code>BoardType</code>](#BoardType) | 

<a name="BoardTypes+updateType"></a>

### boardTypes.updateType(boardId, typeId, ops) ⇒ [<code>Promise.&lt;BoardType&gt;</code>](#BoardType)
**Kind**: instance method of [<code>BoardTypes</code>](#BoardTypes)  

| Param | Type |
| --- | --- |
| boardId |  | 
| typeId |  | 
| ops | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="ServiceDeskAPI"></a>

## ServiceDeskAPI
**Kind**: global class  
<a name="new_ServiceDeskAPI_new"></a>

### new ServiceDeskAPI(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Priorities"></a>

## Priorities
**Kind**: global class  

* [Priorities](#Priorities)
    * [new Priorities(options)](#new_Priorities_new)
    * [.getPriorities(params)](#Priorities+getPriorities) ⇒ <code>Promise.&lt;Array.&lt;Priority&gt;&gt;</code>

<a name="new_Priorities_new"></a>

### new Priorities(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Priorities+getPriorities"></a>

### priorities.getPriorities(params) ⇒ <code>Promise.&lt;Array.&lt;Priority&gt;&gt;</code>
**Kind**: instance method of [<code>Priorities</code>](#Priorities)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="ServiceNotes"></a>

## ServiceNotes
**Kind**: global class  

* [ServiceNotes](#ServiceNotes)
    * [new ServiceNotes(options)](#new_ServiceNotes_new)
    * [.getServiceNotes(ticketId, params)](#ServiceNotes+getServiceNotes) ⇒ <code>Promise.&lt;Array.&lt;ServiceNote&gt;&gt;</code>
    * [.createServiceNote(ticketId, note)](#ServiceNotes+createServiceNote) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
    * [.getServiceNotesCount(ticketId, params)](#ServiceNotes+getServiceNotesCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteServiceNoteById(ticketId, noteId)](#ServiceNotes+deleteServiceNoteById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getServiceNoteById(ticketId, noteId)](#ServiceNotes+getServiceNoteById) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
    * [.updateServiceNote(ticketId, noteId, note)](#ServiceNotes+updateServiceNote) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
    * [.replaceServiceNote(ticketId, noteId, note)](#ServiceNotes+replaceServiceNote) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
    * [.createServiceNoteInternal(ticketId, text)](#ServiceNotes+createServiceNoteInternal) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
    * [.createServiceNoteDetail(ticketId, text)](#ServiceNotes+createServiceNoteDetail) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
    * [.createServiceNoteResolution(ticketId, text)](#ServiceNotes+createServiceNoteResolution) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
    * [.createServiceNoteDetailAndResolution(ticketId, text)](#ServiceNotes+createServiceNoteDetailAndResolution) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)

<a name="new_ServiceNotes_new"></a>

### new ServiceNotes(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="ServiceNotes+getServiceNotes"></a>

### serviceNotes.getServiceNotes(ticketId, params) ⇒ <code>Promise.&lt;Array.&lt;ServiceNote&gt;&gt;</code>
GET

**Kind**: instance method of [<code>ServiceNotes</code>](#ServiceNotes)  

| Param | Type |
| --- | --- |
| ticketId |  | 
| params | [<code>Params</code>](#Params) | 

<a name="ServiceNotes+createServiceNote"></a>

### serviceNotes.createServiceNote(ticketId, note) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
POST

**Kind**: instance method of [<code>ServiceNotes</code>](#ServiceNotes)  

| Param | Type |
| --- | --- |
| ticketId | <code>string</code> \| <code>number</code> | 
| note | [<code>ServiceNote</code>](#ServiceNote) | 

<a name="ServiceNotes+getServiceNotesCount"></a>

### serviceNotes.getServiceNotesCount(ticketId, params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>ServiceNotes</code>](#ServiceNotes)  

| Param | Type |
| --- | --- |
| ticketId |  | 
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="ServiceNotes+deleteServiceNoteById"></a>

### serviceNotes.deleteServiceNoteById(ticketId, noteId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
**Kind**: instance method of [<code>ServiceNotes</code>](#ServiceNotes)  

| Param |
| --- |
| ticketId | 
| noteId | 

<a name="ServiceNotes+getServiceNoteById"></a>

### serviceNotes.getServiceNoteById(ticketId, noteId) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
**Kind**: instance method of [<code>ServiceNotes</code>](#ServiceNotes)  

| Param |
| --- |
| ticketId | 
| noteId | 

<a name="ServiceNotes+updateServiceNote"></a>

### serviceNotes.updateServiceNote(ticketId, noteId, note) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
**Kind**: instance method of [<code>ServiceNotes</code>](#ServiceNotes)  

| Param | Type |
| --- | --- |
| ticketId |  | 
| noteId |  | 
| note | [<code>ServiceNote</code>](#ServiceNote) | 

<a name="ServiceNotes+replaceServiceNote"></a>

### serviceNotes.replaceServiceNote(ticketId, noteId, note) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
**Kind**: instance method of [<code>ServiceNotes</code>](#ServiceNotes)  

| Param | Type |
| --- | --- |
| ticketId |  | 
| noteId |  | 
| note | [<code>ServiceNote</code>](#ServiceNote) | 

<a name="ServiceNotes+createServiceNoteInternal"></a>

### serviceNotes.createServiceNoteInternal(ticketId, text) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
**Kind**: instance method of [<code>ServiceNotes</code>](#ServiceNotes)  

| Param | Type |
| --- | --- |
| ticketId | <code>string</code> \| <code>number</code> | 
| text | <code>string</code> | 

<a name="ServiceNotes+createServiceNoteDetail"></a>

### serviceNotes.createServiceNoteDetail(ticketId, text) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
**Kind**: instance method of [<code>ServiceNotes</code>](#ServiceNotes)  

| Param | Type |
| --- | --- |
| ticketId | <code>string</code> \| <code>number</code> | 
| text | <code>string</code> | 

<a name="ServiceNotes+createServiceNoteResolution"></a>

### serviceNotes.createServiceNoteResolution(ticketId, text) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
**Kind**: instance method of [<code>ServiceNotes</code>](#ServiceNotes)  

| Param | Type |
| --- | --- |
| ticketId | <code>string</code> \| <code>number</code> | 
| text | <code>string</code> | 

<a name="ServiceNotes+createServiceNoteDetailAndResolution"></a>

### serviceNotes.createServiceNoteDetailAndResolution(ticketId, text) ⇒ [<code>Promise.&lt;ServiceNote&gt;</code>](#ServiceNote)
**Kind**: instance method of [<code>ServiceNotes</code>](#ServiceNotes)  

| Param | Type |
| --- | --- |
| ticketId | <code>string</code> \| <code>number</code> | 
| text | <code>string</code> | 

<a name="Statuses"></a>

## Statuses
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [Statuses](#Statuses)
    * [new Statuses(options)](#new_Statuses_new)
    * [.getStatusesByBoardId(boardId, params)](#Statuses+getStatusesByBoardId) ⇒ <code>Promise.&lt;Array.&lt;Status&gt;&gt;</code>
    * [.createStatuses(boardId, status)](#Statuses+createStatuses) ⇒ [<code>Promise.&lt;Status&gt;</code>](#Status)
    * [.getStatusesCount(boardId)](#Statuses+getStatusesCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteStatusById(boardId, statusId)](#Statuses+deleteStatusById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getStatusById(boardId, statusId)](#Statuses+getStatusById) ⇒ [<code>Promise.&lt;Status&gt;</code>](#Status)
    * [.updateStatus(boardId, statusId, operations)](#Statuses+updateStatus) ⇒ [<code>Promise.&lt;Status&gt;</code>](#Status)
    * [.replaceStatuses(boardId, statusId, status)](#Statuses+replaceStatuses) ⇒ [<code>Promise.&lt;Status&gt;</code>](#Status)

<a name="new_Statuses_new"></a>

### new Statuses(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Statuses+getStatusesByBoardId"></a>

### statuses.getStatusesByBoardId(boardId, params) ⇒ <code>Promise.&lt;Array.&lt;Status&gt;&gt;</code>
**Kind**: instance method of [<code>Statuses</code>](#Statuses)  

| Param | Type |
| --- | --- |
| boardId |  | 
| params | [<code>Params</code>](#Params) | 

<a name="Statuses+createStatuses"></a>

### statuses.createStatuses(boardId, status) ⇒ [<code>Promise.&lt;Status&gt;</code>](#Status)
**Kind**: instance method of [<code>Statuses</code>](#Statuses)  

| Param | Type |
| --- | --- |
| boardId |  | 
| status | [<code>Status</code>](#Status) | 

<a name="Statuses+getStatusesCount"></a>

### statuses.getStatusesCount(boardId) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
**Kind**: instance method of [<code>Statuses</code>](#Statuses)  

| Param |
| --- |
| boardId | 

<a name="Statuses+deleteStatusById"></a>

### statuses.deleteStatusById(boardId, statusId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
**Kind**: instance method of [<code>Statuses</code>](#Statuses)  

| Param |
| --- |
| boardId | 
| statusId | 

<a name="Statuses+getStatusById"></a>

### statuses.getStatusById(boardId, statusId) ⇒ [<code>Promise.&lt;Status&gt;</code>](#Status)
**Kind**: instance method of [<code>Statuses</code>](#Statuses)  

| Param |
| --- |
| boardId | 
| statusId | 

<a name="Statuses+updateStatus"></a>

### statuses.updateStatus(boardId, statusId, operations) ⇒ [<code>Promise.&lt;Status&gt;</code>](#Status)
**Kind**: instance method of [<code>Statuses</code>](#Statuses)  

| Param | Type |
| --- | --- |
| boardId |  | 
| statusId |  | 
| operations | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="Statuses+replaceStatuses"></a>

### statuses.replaceStatuses(boardId, statusId, status) ⇒ [<code>Promise.&lt;Status&gt;</code>](#Status)
**Kind**: instance method of [<code>Statuses</code>](#Statuses)  

| Param | Type |
| --- | --- |
| boardId |  | 
| statusId |  | 
| status | [<code>Status</code>](#Status) | 

<a name="Tickets"></a>

## Tickets
**Kind**: global class  

* [Tickets](#Tickets)
    * [new Tickets(options)](#new_Tickets_new)
    * [.getTickets(params)](#Tickets+getTickets) ⇒ <code>Promise.&lt;Array.&lt;Ticket&gt;&gt;</code>
    * [.getTicketById(id)](#Tickets+getTicketById) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
    * [.createTicket(ticket)](#Tickets+createTicket) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
    * [.updateTicket(id, operations)](#Tickets+updateTicket) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
    * [.getTicketsCount(params)](#Tickets+getTicketsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteTicketsById(id)](#Tickets+deleteTicketsById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.replaceTicket(id, ticket)](#Tickets+replaceTicket) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
    * [.getTicketActivities(id, [params])](#Tickets+getTicketActivities) ⇒ <code>Promise.&lt;Array.&lt;Activity&gt;&gt;</code>
    * [.getTicketActivitiesCount(id)](#Tickets+getTicketActivitiesCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.getTicketTimeEntries(id, params)](#Tickets+getTicketTimeEntries) ⇒ <code>Promise.&lt;Array.&lt;TimeEntry&gt;&gt;</code>
    * [.getTicketTimeEntriesCount(id)](#Tickets+getTicketTimeEntriesCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.createConfigurationAssociation(id, configId)](#Tickets+createConfigurationAssociation) ⇒ [<code>Promise.&lt;ConfigurationHref&gt;</code>](#ConfigurationHref)
    * [.getTicketConfigurations(id)](#Tickets+getTicketConfigurations) ⇒ <code>Promise.&lt;Array.&lt;ConfigurationHref&gt;&gt;</code>
    * [.getTicketConfigurationsCount(id)](#Tickets+getTicketConfigurationsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteConfigurationAssociation(id, configId)](#Tickets+deleteConfigurationAssociation) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getConfigurationAssociation(id, configId)](#Tickets+getConfigurationAssociation) ⇒ [<code>Promise.&lt;ConfigurationHref&gt;</code>](#ConfigurationHref)
    * [.getTicketScheduleEntries(id, [params])](#Tickets+getTicketScheduleEntries) ⇒ <code>Promise.&lt;Array.&lt;ScheduleEntryHref&gt;&gt;</code>
    * [.getTicketScheduleEntriesCount(id)](#Tickets+getTicketScheduleEntriesCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.getTicketDocuments(id, [params])](#Tickets+getTicketDocuments) ⇒ <code>Promise.&lt;Array.&lt;DocumentHref&gt;&gt;</code>
    * [.getTicketDocumentsCount(id)](#Tickets+getTicketDocumentsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.getTicketProducts(id)](#Tickets+getTicketProducts) ⇒ <code>Promise.&lt;Array.&lt;ProductHref&gt;&gt;</code>
    * [.getTicketProductsCount(id)](#Tickets+getTicketProductsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.updateTicketStatusByName(id, status)](#Tickets+updateTicketStatusByName) ⇒ <code>Promise.&lt;Array.&lt;Ticket&gt;&gt;</code>
    * [.updateTicketPriority(id, priority)](#Tickets+updateTicketPriority) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
    * [.updateTicketServiceType(id, serviceType)](#Tickets+updateTicketServiceType) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
    * [.updateTicketServiceSubType(id, serviceSubType)](#Tickets+updateTicketServiceSubType) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
    * [.updateTicketTypeSubTypeItem(id, type, subtype, item)](#Tickets+updateTicketTypeSubTypeItem) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
    * [.updateTicketServiceItem(id, serviceItem)](#Tickets+updateTicketServiceItem) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
    * [.updateTicketCustomFieldByIndex(id, index, value)](#Tickets+updateTicketCustomFieldByIndex) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
    * [.updateTicketCustomFieldById(id, customFieldId, value)](#Tickets+updateTicketCustomFieldById) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
    * [.updateTicketCustomFieldByCaption(id, caption, value)](#Tickets+updateTicketCustomFieldByCaption) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)

<a name="new_Tickets_new"></a>

### new Tickets(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Tickets+getTickets"></a>

### tickets.getTickets(params) ⇒ <code>Promise.&lt;Array.&lt;Ticket&gt;&gt;</code>
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="Tickets+getTicketById"></a>

### tickets.getTicketById(id) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>number</code> | ticketNbr |

<a name="Tickets+createTicket"></a>

### tickets.createTicket(ticket) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
POST

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  
**Returns**: [<code>Promise.&lt;Ticket&gt;</code>](#Ticket) - The created ticket, or errors if any occured  

| Param | Type | Description |
| --- | --- | --- |
| ticket | <code>object</code> \| [<code>Ticket</code>](#Ticket) | the new ticket data |
| ticket.board | <code>object</code> |  |
| ticket.board.name | <code>string</code> |  |
| ticket.company | <code>object</code> |  |
| ticket.company.identifier | <code>string</code> | The CompanyID in ConnectWise |
| ticket.summary | <code>string</code> |  |
| [ticket.initialDescription] | <code>string</code> |  |

<a name="Tickets+updateTicket"></a>

### tickets.updateTicket(id, operations) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
PATCH

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  
**Returns**: [<code>Promise.&lt;Ticket&gt;</code>](#Ticket) - The updated ticket  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| operations | [<code>Array.&lt;Operations&gt;</code>](#Operations) |  |
| operations.op | <code>string</code> | the operation to perform, possible values: ['replace', ?] |
| operations.path | <code>string</code> |  |
| operations.value | <code>string</code> \| <code>number</code> |  |

<a name="Tickets+getTicketsCount"></a>

### tickets.getTicketsCount(params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  
**Returns**: [<code>Promise.&lt;Count&gt;</code>](#Count) - The number of tickets matching the conditions  

| Param | Type | Description |
| --- | --- | --- |
| params | [<code>ParamsConditions</code>](#ParamsConditions) |  |
| [params.conditions] | <code>string</code> | Conditions string, e.g. 'Summary like "%blah%" AND board/name = "Service Board"' |

<a name="Tickets+deleteTicketsById"></a>

### tickets.deleteTicketsById(id) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
DELETE

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 

<a name="Tickets+replaceTicket"></a>

### tickets.replaceTicket(id, ticket) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
PUT

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type |
| --- | --- |
| id |  | 
| ticket | [<code>Ticket</code>](#Ticket) | 

<a name="Tickets+getTicketActivities"></a>

### tickets.getTicketActivities(id, [params]) ⇒ <code>Promise.&lt;Array.&lt;Activity&gt;&gt;</code>
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type |
| --- | --- |
| id |  | 
| [params] | [<code>Params</code>](#Params) | 

<a name="Tickets+getTicketActivitiesCount"></a>

### tickets.getTicketActivitiesCount(id) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  
**Returns**: [<code>Promise.&lt;Count&gt;</code>](#Count) - The number of activities associated with ticket number id  

| Param | Type |
| --- | --- |
| id | <code>number</code> \| <code>string</code> | 

<a name="Tickets+getTicketTimeEntries"></a>

### tickets.getTicketTimeEntries(id, params) ⇒ <code>Promise.&lt;Array.&lt;TimeEntry&gt;&gt;</code>
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type |
| --- | --- |
| id | <code>number</code> \| <code>string</code> | 
| params | [<code>Params</code>](#Params) | 

<a name="Tickets+getTicketTimeEntriesCount"></a>

### tickets.getTicketTimeEntriesCount(id) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  
**Returns**: [<code>Promise.&lt;Count&gt;</code>](#Count) - The count of time entries attached to ticket id  

| Param | Type |
| --- | --- |
| id | <code>number</code> \| <code>string</code> | 

<a name="Tickets+createConfigurationAssociation"></a>

### tickets.createConfigurationAssociation(id, configId) ⇒ [<code>Promise.&lt;ConfigurationHref&gt;</code>](#ConfigurationHref)
POST

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> \| <code>string</code> | ticketNbr |
| configId | <code>number</code> \| <code>string</code> |  |

<a name="Tickets+getTicketConfigurations"></a>

### tickets.getTicketConfigurations(id) ⇒ <code>Promise.&lt;Array.&lt;ConfigurationHref&gt;&gt;</code>
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Description |
| --- | --- |
| id | ticketNbr |

<a name="Tickets+getTicketConfigurationsCount"></a>

### tickets.getTicketConfigurationsCount(id) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Description |
| --- | --- |
| id | ticketNbr |

<a name="Tickets+deleteConfigurationAssociation"></a>

### tickets.deleteConfigurationAssociation(id, configId) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
DELETE

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  
**Throws**:

- [<code>ErrorResponse</code>](#ErrorResponse) 


| Param |
| --- |
| id | 
| configId | 

<a name="Tickets+getConfigurationAssociation"></a>

### tickets.getConfigurationAssociation(id, configId) ⇒ [<code>Promise.&lt;ConfigurationHref&gt;</code>](#ConfigurationHref)
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param |
| --- |
| id | 
| configId | 

<a name="Tickets+getTicketScheduleEntries"></a>

### tickets.getTicketScheduleEntries(id, [params]) ⇒ <code>Promise.&lt;Array.&lt;ScheduleEntryHref&gt;&gt;</code>
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 
| [params] | [<code>ParamsPage</code>](#ParamsPage) | 

<a name="Tickets+getTicketScheduleEntriesCount"></a>

### tickets.getTicketScheduleEntriesCount(id) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param |
| --- |
| id | 

<a name="Tickets+getTicketDocuments"></a>

### tickets.getTicketDocuments(id, [params]) ⇒ <code>Promise.&lt;Array.&lt;DocumentHref&gt;&gt;</code>
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 
| [params] | [<code>ParamsPage</code>](#ParamsPage) | 

<a name="Tickets+getTicketDocumentsCount"></a>

### tickets.getTicketDocumentsCount(id) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param |
| --- |
| id | 

<a name="Tickets+getTicketProducts"></a>

### tickets.getTicketProducts(id) ⇒ <code>Promise.&lt;Array.&lt;ProductHref&gt;&gt;</code>
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param |
| --- |
| id | 

<a name="Tickets+getTicketProductsCount"></a>

### tickets.getTicketProductsCount(id) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
GET

**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param |
| --- |
| id | 

<a name="Tickets+updateTicketStatusByName"></a>

### tickets.updateTicketStatusByName(id, status) ⇒ <code>Promise.&lt;Array.&lt;Ticket&gt;&gt;</code>
**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type |
| --- | --- |
| id | <code>string</code> \| <code>number</code> | 
| status | <code>string</code> | 

<a name="Tickets+updateTicketPriority"></a>

### tickets.updateTicketPriority(id, priority) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type | Description |
| --- | --- | --- |
| id |  |  |
| priority | <code>string</code> | do a %like% match on priority |

<a name="Tickets+updateTicketServiceType"></a>

### tickets.updateTicketServiceType(id, serviceType) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type |
| --- | --- |
| id |  | 
| serviceType | <code>string</code> | 

<a name="Tickets+updateTicketServiceSubType"></a>

### tickets.updateTicketServiceSubType(id, serviceSubType) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type |
| --- | --- |
| id |  | 
| serviceSubType | <code>string</code> | 

<a name="Tickets+updateTicketTypeSubTypeItem"></a>

### tickets.updateTicketTypeSubTypeItem(id, type, subtype, item) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type |
| --- | --- |
| id |  | 
| type | <code>string</code> | 
| subtype | <code>string</code> | 
| item | <code>string</code> | 

<a name="Tickets+updateTicketServiceItem"></a>

### tickets.updateTicketServiceItem(id, serviceItem) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type |
| --- | --- |
| id |  | 
| serviceItem | <code>string</code> | 

<a name="Tickets+updateTicketCustomFieldByIndex"></a>

### tickets.updateTicketCustomFieldByIndex(id, index, value) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>number</code> | ticketNbr |
| index | <code>string</code> \| <code>number</code> |  |
| value | <code>string</code> \| <code>number</code> \| <code>boolean</code> |  |

<a name="Tickets+updateTicketCustomFieldById"></a>

### tickets.updateTicketCustomFieldById(id, customFieldId, value) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>number</code> | ticketNbr |
| customFieldId | <code>string</code> \| <code>number</code> |  |
| value | <code>string</code> \| <code>number</code> \| <code>boolean</code> |  |

<a name="Tickets+updateTicketCustomFieldByCaption"></a>

### tickets.updateTicketCustomFieldByCaption(id, caption, value) ⇒ [<code>Promise.&lt;Ticket&gt;</code>](#Ticket)
**Kind**: instance method of [<code>Tickets</code>](#Tickets)  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> \| <code>number</code> | ticketNbr |
| caption | <code>string</code> \| <code>number</code> |  |
| value | <code>string</code> \| <code>number</code> \| <code>boolean</code> |  |

<a name="SystemAPI"></a>

## SystemAPI
**Kind**: global class  
<a name="new_SystemAPI_new"></a>

### new SystemAPI(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Members"></a>

## Members
**Kind**: global class  

* [Members](#Members)
    * [new Members(options)](#new_Members_new)
    * [.getMemberByIdentifer](#Members+getMemberByIdentifer) ⇒ [<code>Promise.&lt;Member&gt;</code>](#Member)
    * [.getMembers(params)](#Members+getMembers) ⇒ <code>Promise.&lt;Array.&lt;Member&gt;&gt;</code>
    * [.getMemberByIdentifier(identifier)](#Members+getMemberByIdentifier) ⇒ [<code>Promise.&lt;Member&gt;</code>](#Member)
    * [.getMemberImage(identifier, params)](#Members+getMemberImage) ⇒ <code>Promise.&lt;\*&gt;</code>

<a name="new_Members_new"></a>

### new Members(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Members+getMemberByIdentifer"></a>

### members.getMemberByIdentifer ⇒ [<code>Promise.&lt;Member&gt;</code>](#Member)
Alias for getMemberByIdentifier because I keep spelling it wrong

**Kind**: instance property of [<code>Members</code>](#Members)  

| Param |
| --- |
| identifier | 

<a name="Members+getMembers"></a>

### members.getMembers(params) ⇒ <code>Promise.&lt;Array.&lt;Member&gt;&gt;</code>
GET

**Kind**: instance method of [<code>Members</code>](#Members)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="Members+getMemberByIdentifier"></a>

### members.getMemberByIdentifier(identifier) ⇒ [<code>Promise.&lt;Member&gt;</code>](#Member)
GET

**Kind**: instance method of [<code>Members</code>](#Members)  

| Param | Type |
| --- | --- |
| identifier | <code>string</code> | 

<a name="Members+getMemberImage"></a>

### members.getMemberImage(identifier, params) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: instance method of [<code>Members</code>](#Members)  

| Param | Type |
| --- | --- |
| identifier |  | 
| params | [<code>ParamsImage</code>](#ParamsImage) | 

<a name="Reports"></a>

## Reports
**Kind**: global class  
**Inherits**: [<code>ConnectWise</code>](#ConnectWise)  

* [Reports](#Reports)
    * [new Reports(options)](#new_Reports_new)
    * [.getReports([params])](#Reports+getReports) ⇒ <code>Promise.&lt;Array.&lt;ReportNames&gt;&gt;</code>
    * [.getReport(reportName, [params], [disableInterpolate])](#Reports+getReport) ⇒ <code>Promise.&lt;(Array.&lt;ReportData&gt;\|Array.&lt;ReportDataInterpolated&gt;)&gt;</code>
    * [.getReportResultsCount(reportName, params)](#Reports+getReportResultsCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.getColumnDefinitions(reportName)](#Reports+getColumnDefinitions) ⇒ <code>Promise.&lt;Array.&lt;ReportColumn&gt;&gt;</code>

<a name="new_Reports_new"></a>

### new Reports(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Reports+getReports"></a>

### reports.getReports([params]) ⇒ <code>Promise.&lt;Array.&lt;ReportNames&gt;&gt;</code>
**Kind**: instance method of [<code>Reports</code>](#Reports)  

| Param | Type |
| --- | --- |
| [params] | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="Reports+getReport"></a>

### reports.getReport(reportName, [params], [disableInterpolate]) ⇒ <code>Promise.&lt;(Array.&lt;ReportData&gt;\|Array.&lt;ReportDataInterpolated&gt;)&gt;</code>
**Kind**: instance method of [<code>Reports</code>](#Reports)  

| Param | Type |
| --- | --- |
| reportName | <code>string</code> | 
| [params] | [<code>Params</code>](#Params) | 
| [disableInterpolate] | <code>boolean</code> | 

<a name="Reports+getReportResultsCount"></a>

### reports.getReportResultsCount(reportName, params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
**Kind**: instance method of [<code>Reports</code>](#Reports)  

| Param | Type |
| --- | --- |
| reportName | <code>string</code> | 
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="Reports+getColumnDefinitions"></a>

### reports.getColumnDefinitions(reportName) ⇒ <code>Promise.&lt;Array.&lt;ReportColumn&gt;&gt;</code>
**Kind**: instance method of [<code>Reports</code>](#Reports)  

| Param |
| --- |
| reportName | 

<a name="TimeAPI"></a>

## TimeAPI
**Kind**: global class  
<a name="new_TimeAPI_new"></a>

### new TimeAPI(options)

| Param |
| --- |
| options | 

<a name="TimeEntries"></a>

## TimeEntries
**Kind**: global class  

* [TimeEntries](#TimeEntries)
    * [new TimeEntries(options)](#new_TimeEntries_new)
    * [.getTimeEntries(params)](#TimeEntries+getTimeEntries) ⇒ [<code>Promise.&lt;TimeEntry&gt;</code>](#TimeEntry)
    * [.createTimeEntry(timeEntry)](#TimeEntries+createTimeEntry) ⇒ [<code>Promise.&lt;TimeEntry&gt;</code>](#TimeEntry)
    * [.getTimeEntriesCount(params)](#TimeEntries+getTimeEntriesCount) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
    * [.deleteTimeEntryById(id)](#TimeEntries+deleteTimeEntryById) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
    * [.getTimeEntryById(id)](#TimeEntries+getTimeEntryById) ⇒ [<code>Promise.&lt;TimeEntry&gt;</code>](#TimeEntry)
    * [.updateTimeEntry(id, operations)](#TimeEntries+updateTimeEntry) ⇒ [<code>Promise.&lt;TimeEntry&gt;</code>](#TimeEntry)
    * [.replaceTimeEntry(id, timeEntry)](#TimeEntries+replaceTimeEntry) ⇒ [<code>Promise.&lt;TimeEntry&gt;</code>](#TimeEntry)

<a name="new_TimeEntries_new"></a>

### new TimeEntries(options)

| Param |
| --- |
| options | 

<a name="TimeEntries+getTimeEntries"></a>

### timeEntries.getTimeEntries(params) ⇒ [<code>Promise.&lt;TimeEntry&gt;</code>](#TimeEntry)
GET

**Kind**: instance method of [<code>TimeEntries</code>](#TimeEntries)  

| Param | Type |
| --- | --- |
| params | [<code>Params</code>](#Params) | 

<a name="TimeEntries+createTimeEntry"></a>

### timeEntries.createTimeEntry(timeEntry) ⇒ [<code>Promise.&lt;TimeEntry&gt;</code>](#TimeEntry)
**Kind**: instance method of [<code>TimeEntries</code>](#TimeEntries)  

| Param | Type |
| --- | --- |
| timeEntry | [<code>TimeEntry</code>](#TimeEntry) | 

<a name="TimeEntries+getTimeEntriesCount"></a>

### timeEntries.getTimeEntriesCount(params) ⇒ [<code>Promise.&lt;Count&gt;</code>](#Count)
**Kind**: instance method of [<code>TimeEntries</code>](#TimeEntries)  

| Param | Type |
| --- | --- |
| params | [<code>ParamsConditions</code>](#ParamsConditions) | 

<a name="TimeEntries+deleteTimeEntryById"></a>

### timeEntries.deleteTimeEntryById(id) ⇒ [<code>Promise.&lt;DeleteResponse&gt;</code>](#DeleteResponse)
**Kind**: instance method of [<code>TimeEntries</code>](#TimeEntries)  

| Param | Type |
| --- | --- |
| id | <code>number</code> | 

<a name="TimeEntries+getTimeEntryById"></a>

### timeEntries.getTimeEntryById(id) ⇒ [<code>Promise.&lt;TimeEntry&gt;</code>](#TimeEntry)
**Kind**: instance method of [<code>TimeEntries</code>](#TimeEntries)  

| Param |
| --- |
| id | 

<a name="TimeEntries+updateTimeEntry"></a>

### timeEntries.updateTimeEntry(id, operations) ⇒ [<code>Promise.&lt;TimeEntry&gt;</code>](#TimeEntry)
**Kind**: instance method of [<code>TimeEntries</code>](#TimeEntries)  

| Param | Type |
| --- | --- |
| id |  | 
| operations | [<code>Array.&lt;Operations&gt;</code>](#Operations) | 

<a name="TimeEntries+replaceTimeEntry"></a>

### timeEntries.replaceTimeEntry(id, timeEntry) ⇒ [<code>Promise.&lt;TimeEntry&gt;</code>](#TimeEntry)
**Kind**: instance method of [<code>TimeEntries</code>](#TimeEntries)  

| Param | Type |
| --- | --- |
| id |  | 
| timeEntry | [<code>TimeEntry</code>](#TimeEntry) | 

<a name="verifyCallback"></a>

## verifyCallback(callbackBody, contentSignature) ⇒ <code>Promise.&lt;boolean&gt;</code>
Load signing key and verify the message

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| callbackBody | [<code>CallbackPayload</code>](#CallbackPayload) |  |
| contentSignature | <code>string</code> | base64 content signature req.headers[x-content-signature] |

<a name="verifyMessage"></a>

## verifyMessage(callbackBody, contentSignature, signingKey) ⇒ <code>boolean</code>
Validate a callback body against signed key

**Kind**: global function  

| Param | Type |
| --- | --- |
| callbackBody | [<code>CallbackPayload</code>](#CallbackPayload) | 
| contentSignature | <code>string</code> | 
| signingKey | <code>string</code> | 

<a name="middleware"></a>

## middleware(cb)
Express style middleware

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| cb | <code>function</code> | callback(err, req, res, verified, payload) |

**Example**  
```js
app.post('/your/api', cw.utils.middleware((err, req, res, verified, payload) => { if (err) {   //handle error   res.status(500).end(); } else if (!verified) {   // send 403 on verification failure   res.status(403).end(); } else {   res.status(200).end() } const {action, id} = req.query; // do something with the payload}));
```
<a name="all"></a>

## all(series, concurrent, delay) ⇒ <code>Promise.&lt;\*&gt;</code>
**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| series | <code>array.&lt;(function()\|Promise)&gt;</code> |  |
| concurrent | <code>number</code> | number of concurrent requests |
| delay | <code>number</code> | number of ms between request groups |

<a name="Company"></a>

## Company : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| accountNumber | <code>string</code> |  |
| addressLine1 | <code>string</code> |  |
| addressLine2 | <code>string</code> |  |
| annualRevenue | <code>number</code> |  |
| calendarId |  |  |
| country | [<code>CountryHref</code>](#CountryHref) |  |
| customFields | [<code>Array.&lt;CustomField&gt;</code>](#CustomField) |  |
| dateAcquired | <code>string</code> |  |
| dateDeleted | <code>string</code> |  |
| defaultContactId | <code>number</code> |  |
| deletedBy |  |  |
| deletedFlag | <code>boolean</code> |  |
| faxNumber |  |  |
| id | <code>number</code> | numeric identifier |
| identifier | <code>string</code> | short name of Company |
| leadFlag | <code>boolean</code> |  |
| leadSource |  |  |
| marketId | <code>number</code> |  |
| name | <code>string</code> | full name of Company |
| numberOfEmployees |  |  |
| ownershipType |  |  |
| parentCompany |  |  |
| phoneNumber | <code>string</code> |  |
| sicCode |  |  |
| state | <code>string</code> | state's abbreviation |
| status | [<code>StatusHref</code>](#StatusHref) |  |
| territoryId | <code>number</code> |  |
| timeZone |  |  |
| type | [<code>TypeHref</code>](#TypeHref) | removed in 2019.1 |
| typeIds |  | added in 2019.1 |
| unsubscribeFlag | <code>boolean</code> |  |
| website | <code>string</code> |  |
| zip | <code>string</code> |  |
| _info | <code>object</code> |  |
| _info.lastUpdated | <code>string</code> |  |
| _info.updatedBy | <code>string</code> |  |

<a name="CompanyNote"></a>

## CompanyNote : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| text | <code>string</code> |  |
| type | [<code>TypeHref</code>](#TypeHref) | @TODO check if this is the same as regular {Type} |
| flagged | <code>boolean</code> |  |
| enteredBy | <code>string</code> |  |
| company | [<code>CompanyHref</code>](#CompanyHref) |  |
| _info | <code>object</code> |  |
| _info.lastUpdated | <code>string</code> |  |
| _info.updatedBy | <code>string</code> |  |

<a name="CompanyTypeAssociation"></a>

## CompanyTypeAssociation : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| type | [<code>CompanyTypeHref</code>](#CompanyTypeHref) | 
| company | [<code>CompanyHref</code>](#CompanyHref) | 
| _info |  | 

<a name="CompanyTypeHref"></a>

## CompanyTypeHref : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| id | 
| identifier | 
| name | 
| _info | 

<a name="CompanySite"></a>

## CompanySite : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| addressLine1 | <code>string</code> | 
| addressLine2 | <code>string</code> | 
| city | <code>string</code> | 
| state | <code>string</code> | 
| zip | <code>string</code> | 
| country | [<code>CountryHref</code>](#CountryHref) | 
| addressFormat | <code>string</code> | 
| phoneNumber | <code>string</code> | 
| faxNumber | <code>string</code> | 
| taxCodeId | <code>number</code> | 
| entityType |  | 
| expenseReimbursement | <code>number</code> | 
| primaryAddressFlag | <code>boolean</code> | 
| defaultShippingFlag | <code>boolean</code> | 
| defaultBillingFlag | <code>boolean</code> | 
| defaultMailingFlag | <code>boolean</code> | 
| inactiveFlag | <code>boolean</code> | 
| mobileGuid | <code>string</code> | 
| calendar |  | 
| timeZone |  | 
| company | [<code>CompanyHref</code>](#CompanyHref) | 
| _info | [<code>InfoHref</code>](#InfoHref) | 

<a name="CompanyTeam"></a>

## CompanyTeam : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id |  | 
| company | [<code>CompanyHref</code>](#CompanyHref) | 
| teamRole | [<code>TeamHref</code>](#TeamHref) | 
| locationId |  | 
| businessUnitId |  | 
| contact | [<code>ContactHref</code>](#ContactHref) | 
| member | [<code>MemberHref</code>](#MemberHref) | 
| accountManagerFlag |  | 
| techFlag |  | 
| salesFlag |  | 
| _info | [<code>InfoHref</code>](#InfoHref) | 

<a name="CompanyTypeInfo"></a>

## CompanyTypeInfo : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name |  | 
| _info |  | 

<a name="CompanyType"></a>

## CompanyType : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| defaultFlag | <code>boolean</code> | 
| id |  | 
| name |  | 
| serviceAlertFlag | <code>boolean</code> | 
| vendorFlag | <code>boolean</code> | 
| _info |  | 

<a name="Configuration"></a>

## Configuration : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| type | [<code>TypeHref</code>](#TypeHref) | 
| status | [<code>StatusHref</code>](#StatusHref) | 
| company | [<code>CompanyHref</code>](#CompanyHref) | 
| contact | [<code>ContactHref</code>](#ContactHref) | 
| site | [<code>SiteHref</code>](#SiteHref) | 
| activeFlag |  | 
| id |  | 
| name |  | 
| locationId |  | 
| businessUnitId |  | 
| deviceIdentifier |  | 
| serialNumber |  | 
| modelNumber |  | 
| tagNumber |  | 
| purchaseDate |  | 
| installationDate |  | 
| installedBy |  | 
| warrantyExpirationDate |  | 
| vendorNotes |  | 
| notes |  | 
| macAddress |  | 
| lastLoginName |  | 
| billFlag |  | 
| backupSuccesses |  | 
| backupIncomplete |  | 
| backupFailed |  | 
| backupRestores |  | 
| lastBackupDate |  | 
| backupServerName |  | 
| backupBillableSpaceGb |  | 
| backupProtectedDeviceList |  | 
| backupYear |  | 
| backupMonth |  | 
| ipAddress |  | 
| defaultGateway |  | 
| osType |  | 
| osInfo |  | 
| cpuSpeed |  | 
| ram |  | 
| localHardDrives |  | 
| parentConfigurationId |  | 
| vendor |  | 
| manufacturer |  | 
| activeFlag |  | 
| managementLink |  | 
| remoteLink |  | 
| _info | <code>object</code> | 
| _info.lastUpdated | <code>string</code> | 
| _info.updatedBy | <code>string</code> | 

<a name="ConfigurationQuestion"></a>

## ConfigurationQuestion : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| answerId | <code>number</code> |  |
| questionId | <code>number</code> |  |
| question | <code>string</code> |  |
| answer | <code>null</code> \| <code>boolean</code> \| <code>number</code> \| <code>string</code> |  |
| sequenceNumber | <code>number</code> |  |
| numberOfDecimals | <code>number</code> |  |
| fieldType | <code>string</code> | ['Text', 'Button', 'Currency', 'Date', 'Hyperlink', 'IPAddress', 'Checkbox', 'Number', 'Percent', 'TextArea', 'Password'] |

<a name="ContactTypeAssociation"></a>

## ContactTypeAssociation : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id |  | 
| type | [<code>ContactType</code>](#ContactType) | 
| contact | [<code>ContactHref</code>](#ContactHref) | 
| _info |  | 

<a name="Relationship"></a>

## Relationship : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.lastUpdated | <code>string</code> | 
| _info.updatedBy | <code>string</code> | 

<a name="Contact"></a>

## Contact : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| addressLine1 | <code>string</code> |  |
| addressLine2 | <code>string</code> |  |
| anniversary | <code>string</code> |  |
| assistantContactId |  |  |
| childrenFlag | <code>boolean</code> |  |
| city |  |  |
| communicationItems | [<code>Array.&lt;CommunicationItemHref&gt;</code>](#CommunicationItemHref) |  |
| company | [<code>CompanyHref</code>](#CompanyHref) |  |
| country | [<code>CountryHref</code>](#CountryHref) |  |
| customFields | [<code>Array.&lt;CustomField&gt;</code>](#CustomField) |  |
| department | [<code>DepartmentHref</code>](#DepartmentHref) |  |
| disablePortalLoginFlag | <code>boolean</code> |  |
| firstName | <code>string</code> |  |
| gender |  |  |
| id | <code>number</code> | numeric identifier |
| inactiveFlag | <code>boolean</code> |  |
| lastName | <code>string</code> |  |
| managerContactId |  |  |
| marriedFlag | <code>boolean</code> |  |
| nickName | <code>string</code> |  |
| portalPassword |  |  |
| portalSecurityLevel | <code>number</code> |  |
| presence |  |  |
| relationship | [<code>RelationshipHref</code>](#RelationshipHref) |  |
| school |  |  |
| securityIdentifier |  |  |
| significantOther |  |  |
| site | [<code>SiteHref</code>](#SiteHref) |  |
| state |  |  |
| title | <code>string</code> |  |
| type | [<code>TypeHref</code>](#TypeHref) |  |
| unsubscribeFlag | <code>boolean</code> |  |
| zip |  |  |
| _info | <code>object</code> |  |
| _info.communications_href | <code>string</code> |  |
| _info.image_href | <code>string</code> |  |
| _info.notes_href | <code>string</code> |  |
| _info.lastUpdated | <code>string</code> |  |
| _info.portalSecurity_href | <code>string</code> |  |
| _info.tracks_href | <code>string</code> |  |
| _info.updatedBy | <code>string</code> |  |

<a name="ContactType"></a>

## ContactType : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| description | <code>string</code> | 
| defaultFlag | <code>boolean</code> | 
| _info | <code>object</code> | 
| _info.lastUpdated | <code>string</code> | 
| _info.updatedBy | <code>string</code> | 

<a name="PortalSecurity"></a>

## PortalSecurity : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| identifier | <code>string</code> | 
| enabled | <code>boolean</code> | 

<a name="ValidatePortalResponse"></a>

## ValidatePortalResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| success | <code>boolean</code> | 
| contactId | <code>number</code> | 

<a name="CompanyAPI"></a>

## CompanyAPI : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| Companies | [<code>Companies</code>](#Companies) | 
| Contacts | [<code>Contacts</code>](#Contacts) | 
| Configurations | [<code>Configurations</code>](#Configurations) | 
| ContactRelationships | [<code>ContactRelationships</code>](#ContactRelationships) | 
| ContactContactTypeAssociations | [<code>ContactContactTypeAssociations</code>](#ContactContactTypeAssociations) | 
| CompanyCompanyTypeAssociations | [<code>CompanyCompanyTypeAssociations</code>](#CompanyCompanyTypeAssociations) | 
| CompanyTypes | [<code>CompanyTypes</code>](#CompanyTypes) | 
| CompanyTypeInfos | [<code>CompanyTypeInfos</code>](#CompanyTypeInfos) | 
| CompanySites | [<code>CompanySites</code>](#CompanySites) | 

<a name="new_CompanyAPI_new"></a>

### new CompanyAPI(options)

| Param |
| --- |
| options | 

<a name="InfoHref"></a>

## InfoHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| lastUpdated | 
| updatedBy | 

<a name="AgreementHref"></a>

## AgreementHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.agreement_href | <code>string</code> | 

<a name="AgreementTypeHref"></a>

## AgreementTypeHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.type_href | <code>string</code> | 

<a name="BoardHref"></a>

## BoardHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.board_href | <code>string</code> | 

<a name="CompanyHref"></a>

## CompanyHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| identifier | <code>string</code> | The company ID in ConnectWise |
| _info | <code>object</code> |  |
| _info.company_href | <code>string</code> |  |

<a name="ContactHref"></a>

## ContactHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.contact_href | <code>string</code> | 

<a name="CountryHref"></a>

## CountryHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 

<a name="DocumentHref"></a>

## DocumentHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| _info | <code>object</code> | 
| _info.filename | <code>string</code> | 

<a name="ItemHref"></a>

## ItemHref : <code>object</code>
Service Item

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.item_href | <code>string</code> | 

<a name="PriorityHref"></a>

## PriorityHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.image_href | <code>string</code> | 
| _info.priority_href | <code>string</code> | 

<a name="ProductHref"></a>

## ProductHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| identifier | <code>string</code> | 
| _info | <code>object</code> | 
| _info.identifier | <code>string</code> | 

<a name="ServiceLocationHref"></a>

## ServiceLocationHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.location_href | <code>string</code> | 

<a name="ServiceTypeHref"></a>

## ServiceTypeHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 

<a name="ScheduleEntryHref"></a>

## ScheduleEntryHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| _info | <code>object</code> | 
| _info.description | <code>string</code> | 
| _info.schedule_href | <code>string</code> | 

<a name="SiteHref"></a>

## SiteHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| _info | <code>object</code> | 
| _info.name | <code>string</code> | 
| _info.site_href | <code>string</code> | 

<a name="SourceHref"></a>

## SourceHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.source_href | <code>string</code> | 

<a name="StatusHref"></a>

## StatusHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.status_href | <code>string</code> | 

<a name="SubTypeHref"></a>

## SubTypeHref : <code>object</code>
Service Subtype

**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.subType_href | <code>string</code> | 

<a name="TeamHref"></a>

## TeamHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.team_href | <code>string</code> | 

<a name="TypeHref"></a>

## TypeHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.type_href | <code>string</code> | 

<a name="OpportunityHref"></a>

## OpportunityHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| opportunity_href | <code>string</code> | 

<a name="Params"></a>

## Params : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [conditions] | <code>string</code> | Search results based on the fields returned in a GET, board/name="Integration" and summary="xyz" or board/id in (3, 2, 4) and lastUpdated > [2016-08-20T18:04:26Z] |
| [orderBy] | <code>string</code> | Choose which field to sort the results by, 'contact/name asc' |
| [page] | <code>string</code> \| <code>number</code> | Used in pagination to cycle through results |
| [pageSize] | <code>string</code> \| <code>number</code> | Number of results returned per page (Defaults to 25) (Max page size was increased to 1,000 in 2016.2.) |
| [childConditions] | <code>string</code> | Allows searching arrays on endpoints that list childConditions under parameters |
| [customFieldConditions] | <code>string</code> | Allows searching custom fields when customFieldConditions is listed in the parameters |
| [fields] | <code>string</code> | Limits which information is returned in the response - Not available on the reporting endpoints |
| [columns] | <code>string</code> | Limits which information is returned in the response - Only used for the Reporting Endpoints |

<a name="ParamsPage"></a>

## ParamsPage : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [page] | <code>string</code> \| <code>number</code> | 
| [pageSize] | <code>string</code> \| <code>number</code> | 

<a name="ParamsConditions"></a>

## ParamsConditions : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [conditions] | <code>string</code> | 
| [orderBy] | <code>string</code> | 

<a name="ParamsImage"></a>

## ParamsImage : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| [useDefaultFlag] | <code>boolean</code> |  |
| [lastmodifier] | <code>string</code> | note the lower case M (not a typo) |

<a name="ParamsConfig"></a>

## ParamsConfig : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [conditions] | <code>string</code> | 
| [managedIdentifier] | <code>string</code> | 

<a name="ParamsConfigUpdate"></a>

## ParamsConfigUpdate : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| [managementSolutionName] | <code>string</code> | 
| [managedIdentifier] | <code>string</code> | 
| [type] | <code>string</code> | 
| [level] | <code>string</code> | 
| [childConfigurationsMatchingOn] | <code>string</code> | 
| [inactivateConfigurationsMatchingOn] | <code>string</code> | 
| [inactiveConfigurationStatusId] | <code>number</code> | 

<a name="ProductHref"></a>

## ProductHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| _info | <code>object</code> | 
| _info.description | <code>string</code> | 

<a name="WorkRoleHref"></a>

## WorkRoleHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.role_href | <code>string</code> | 

<a name="WorkTypeHref"></a>

## WorkTypeHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.type_href | <code>string</code> | 

<a name="Operations"></a>

## Operations : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| op | <code>string</code> | ['replace','remove'] |
| path | <code>string</code> | the relative path to the variable to be updated, e.g. status |
| value | <code>string</code> \| <code>boolean</code> \| <code>object</code> \| <code>number</code> | the value of the object property to replace, e.g. { id: 123 } |

<a name="Count"></a>

## Count : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| count | <code>number</code> | the number of matched records. |

<a name="ConfigurationHref"></a>

## ConfigurationHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| deviceIdentifier | <code>string</code> | 
| _info | <code>object</code> | 
| _info.name | <code>string</code> | 
| _info.configuration_href | <code>string</code> | 

<a name="CurrencyHref"></a>

## CurrencyHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| currency_href | <code>string</code> | 

<a name="MemberHref"></a>

## MemberHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| identifier | <code>string</code> | the member's ID in CW |
| _info | <code>object</code> |  |
| _info.lastUpdated | <code>string</code> |  |
| _info.updatedBy | <code>string</code> |  |

<a name="DeleteResponse"></a>

## DeleteResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| error | <code>string</code> | null if no error |

<a name="PostResponse"></a>

## PostResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| error | <code>string</code> | null if no error |

<a name="ErrorResponse"></a>

## ErrorResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| code | <code>string</code> | 
| message | <code>string</code> | 
| errors | <code>Array.&lt;object&gt;</code> | 

<a name="CustomField"></a>

## CustomField : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| caption | <code>string</code> | 
| entryMethod | <code>string</code> | 
| id | <code>number</code> | 
| numberOfDecimals | <code>number</code> | 
| type | <code>string</code> | 
| value | <code>string</code> | 

<a name="ProjectStatusHref"></a>

## ProjectStatusHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 

<a name="ProjectTypeHref"></a>

## ProjectTypeHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 

<a name="OwnerHref"></a>

## OwnerHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| identifier | <code>string</code> | 
| _info | <code>object</code> | 
| image_href | <code>string</code> | 
| member_href | <code>string</code> | 

<a name="CountryHref"></a>

## CountryHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 

<a name="CustomField"></a>

## CustomField : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| caption | <code>string</code> | 
| entryMethod | <code>string</code> | 
| id | <code>number</code> | 
| numberOfDecimals | <code>number</code> | 
| type | <code>string</code> | 
| value | <code>string</code> | 

<a name="CommunicationItemHref"></a>

## CommunicationItemHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| communicationType | <code>string</code> | 
| defaultFlag | <code>boolean</code> | 
| extension |  | 
| id | <code>number</code> | 
| type | [<code>TypeHref</code>](#TypeHref) | 
| value | <code>string</code> | 

<a name="DepartmentHref"></a>

## DepartmentHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| _info.department_href | <code>string</code> | 

<a name="RelationshipHref"></a>

## RelationshipHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 
| relationship_href | <code>string</code> | 

<a name="ScheduleTypeHref"></a>

## ScheduleTypeHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id |  | 
| identifier |  | 
| _info | <code>object</code> | 
| _info.type_href |  | 

<a name="ScheduleStatusHref"></a>

## ScheduleStatusHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id |  | 
| name |  | 
| _info | <code>object</code> | 
| _info.status_href |  | 

<a name="ScheduleSpanHref"></a>

## ScheduleSpanHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| id | 
| name | 
| _info | 

<a name="ReminderHref"></a>

## ReminderHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| id | 
| name | 
| _info | 

<a name="ServiceLocationHref"></a>

## ServiceLocationHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| id | 
| name | 
| _info | 
| _info.location_href | 

<a name="ChargeCodeHref"></a>

## ChargeCodeHref : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| _info | <code>object</code> | 

<a name="Usage"></a>

## Usage : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| type | 
| count | 
| id | 
| description | 
| hyperlink | 

<a name="UsageCount"></a>

## UsageCount : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| type | 
| count | 

<a name="CWOptions"></a>

## CWOptions : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| companyId |  |  |
| publicKey |  |  |
| privateKey |  |  |
| clientId |  | register for a clientId at https://developer.connectwise.com/ClientID |
| companyUrl |  |  |
| [entryPoint] | <code>string</code> | defaults to 'v4_6_release' |
| [timeout] | <code>number</code> | defaults to 20000 (20 seconds) |
| [retry] | <code>boolean</code> | defaults to false |
| [retryOptions] | <code>object</code> | defaults to {       retries: 4,       minTimeout: 50,       maxTimeout: 20000,       randomize: true,     } |
| [debug] | <code>boolean</code> | defaults to false |
| [logger] | <code>function</code> | function(String:level, String:text, *:Object) defaults to console |

<a name="ConnectWiseRest"></a>

## ConnectWiseRest : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| API | [<code>ConnectWise</code>](#ConnectWise) | 
| CompanyAPI | [<code>CompanyAPI</code>](#CompanyAPI) | 
| FinanceAPI | [<code>FinanceAPI</code>](#FinanceAPI) | 
| ServiceDeskAPI | [<code>ServiceDeskAPI</code>](#ServiceDeskAPI) | 
| TimeAPI | [<code>TimeAPI</code>](#TimeAPI) | 
| ProjectAPI | [<code>ProjectAPI</code>](#ProjectAPI) | 
| ScheduleAPI | [<code>ScheduleAPI</code>](#ScheduleAPI) | 
| SystemAPI | [<code>SystemAPI</code>](#SystemAPI) | 
| SalesAPI | [<code>SalesAPI</code>](#SalesAPI) | 
| utils | [<code>CWUtils</code>](#CWUtils) | 

<a name="new_ConnectWiseRest_new"></a>

### new ConnectWiseRest(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Addition"></a>

## Addition : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| agreementId | <code>number</code> |  |
| billCustomer | <code>string</code> |  |
| cancelledDate | <code>string</code> |  |
| description | <code>string</code> |  |
| effectiveDate | <code>string</code> |  |
| extCost | <code>number</code> |  |
| extPrice | <code>number</code> |  |
| id | <code>number</code> |  |
| invoiceDescription | <code>string</code> |  |
| lessIncluded | <code>number</code> |  |
| margin | <code>number</code> |  |
| product | [<code>ProductHref</code>](#ProductHref) |  |
| purchaseItemFlag | <code>boolean</code> |  |
| quantity | <code>number</code> |  |
| serialNumber |  |  |
| specialOrderFlag | <code>boolean</code> |  |
| taxableFlag | <code>boolean</code> |  |
| unitCost | <code>number</code> |  |
| unitPrice | <code>number</code> |  |
| uom | <code>string</code> | unit of measurement ['each', 'monthly', 'yearly', 'quarterly'] |
| _info | <code>object</code> |  |
| _info.lastUpdated | <code>string</code> |  |
| _info.updatedBy | <code>string</code> |  |

<a name="Adjustment"></a>

## Adjustment : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| agreementId | <code>number</code> | 
| amount | <code>number</code> | 
| description | <code>string</code> | 
| effectiveDate | <code>string</code> | 
| id | <code>number</code> | 
| _info | <code>object</code> | 
| _info.lastUpdated | <code>string</code> | 
| _info.updatedBy | <code>string</code> | 

<a name="Agreement"></a>

## Agreement : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| allowOverruns | <code>boolean</code> |  |
| applicationCycle | <code>string</code> | ['CalendarMonth', 'Contract2Weeks', 'Contract4Weeks', 'CalendarQuarter', 'CalendarWeek', 'ContractQuarter', 'CalendarYear'] |
| applicationLimit | <code>number</code> |  |
| applicationUnits | <code>string</code> | ['Amount', 'Hours', 'Incidents'] |
| applicationUnlimitedFlag | <code>boolean</code> |  |
| billAmount | <code>number</code> |  |
| billCycleId | <code>number</code> |  |
| billExpenses | <code>string</code> | ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault'] |
| billOneTimeFlag | <code>boolean</code> |  |
| billProducts | <code>string</code> | ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault'] |
| billStartDate | <code>string</code> |  |
| billTermsId | <code>number</code> |  |
| billTime | <code>string</code> | ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault'] |
| billToCompany | <code>object</code> |  |
| billToCompany.id | <code>number</code> |  |
| billToCompany.identifier | <code>string</code> |  |
| billToCompany._info | <code>object</code> |  |
| billToSite | <code>object</code> |  |
| billToSite.id | <code>number</code> |  |
| billToSite.name | <code>string</code> |  |
| billToSite._info | <code>object</code> |  |
| billableExpenseInvoice | <code>boolean</code> |  |
| billableProductInvoice | <code>boolean</code> |  |
| billableTimeInvoice | <code>boolean</code> |  |
| bottomComment | <code>boolean</code> |  |
| businessUnitId | <code>number</code> |  |
| cancelledFlag | <code>boolean</code> |  |
| carryOverUnused | <code>boolean</code> |  |
| chargeToFirm | <code>boolean</code> |  |
| compHourlyRate | <code>number</code> |  |
| compLimitAmount | <code>number</code> |  |
| company | [<code>CompanyHref</code>](#CompanyHref) |  |
| contact | [<code>ContactHref</code>](#ContactHref) |  |
| coverAgreementExpense | <code>boolean</code> |  |
| coverAgreementProduct | <code>boolean</code> |  |
| coverAgreementTime | <code>boolean</code> |  |
| coverSalesTax | <code>boolean</code> |  |
| customerPO | <code>string</code> |  |
| dateCancelled | <code>string</code> |  |
| employeeCompNotExceed | <code>string</code> | ['Billing', 'Percent', 'Amount] |
| employeeCompRate | <code>string</code> | ['Actual', 'Hourly'] |
| endDate | <code>string</code> |  |
| expireWhenZero | <code>boolean</code> |  |
| expiredDays | <code>number</code> |  |
| id | <code>number</code> | agreementId |
| internalNotes | <code>string</code> |  |
| invoiceDescription | <code>string</code> |  |
| invoiceTemplateId | <code>number</code> |  |
| invoicingCycle | <code>string</code> | ['CalendarMonth', 'Contract2Weeks', 'Contract4Weeks', 'CalendarQuarter', 'CalendarWeek', 'ContractQuarter', 'CalendarYear'] |
| limit | <code>number</code> |  |
| locationId | <code>number</code> |  |
| name | <code>string</code> | agreementName |
| noEndingDateFlag | <code>boolean</code> |  |
| oneTimeFlag | <code>boolean</code> |  |
| opportunity | [<code>OpportunityHref</code>](#OpportunityHref) |  |
| parentAgreementId | <code>number</code> |  |
| periodType | <code>string</code> | ['Current', 'Future', 'Both', 'Undefined'] |
| projectTypeId | <code>number</code> |  |
| prorateFirstBill | <code>number</code> |  |
| restrictDepartmentFlag | <code>boolean</code> |  |
| restrictDownPayment | <code>boolean</code> |  |
| restrictLocationFlag | <code>boolean</code> |  |
| slaId | <code>number</code> |  |
| startDate | <code>string</code> |  |
| subContractCompany | [<code>CompanyHref</code>](#CompanyHref) |  |
| subContractContact | [<code>ContactHref</code>](#ContactHref) |  |
| taxCodeId | <code>number</code> |  |
| taxable | <code>boolean</code> |  |
| topComment | <code>boolean</code> |  |
| type | [<code>AgreementTypeHref</code>](#AgreementTypeHref) |  |
| workOrder | <code>string</code> |  |
| workRole | [<code>WorkRoleHref</code>](#WorkRoleHref) |  |
| workType | [<code>WorkTypeHref</code>](#WorkTypeHref) |  |

<a name="AgreementSite"></a>

## AgreementSite : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| company | [<code>CompanyHref</code>](#CompanyHref) | 
| site | [<code>SiteHref</code>](#SiteHref) | 
| agreementId | <code>number</code> | 
| _info | <code>object</code> | 

<a name="BoardDefault"></a>

## BoardDefault : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| board | [<code>BoardHref</code>](#BoardHref) | 
| serviceType | [<code>ServiceTypeHref</code>](#ServiceTypeHref) | 
| defaultFlag | <code>boolean</code> | 
| agreementId | <code>number</code> | 
| _info | <code>object</code> | 

<a name="FinanceAPI"></a>

## FinanceAPI : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| Additions | [<code>Additions</code>](#Additions) | 
| Adjustments | [<code>Adjustments</code>](#Adjustments) | 
| Agreements | [<code>Agreements</code>](#Agreements) | 
| AgreementSites | [<code>AgreementSites</code>](#AgreementSites) | 
| BoardDefaults | [<code>BoardDefaults</code>](#BoardDefaults) | 
| WorkRoles | [<code>WorkRoles</code>](#WorkRoles) | 
| WorkTypeExclusions | [<code>WorkTypeExclusions</code>](#WorkTypeExclusions) | 
| WorkTypes | [<code>WorkTypes</code>](#WorkTypes) | 

<a name="new_FinanceAPI_new"></a>

### new FinanceAPI(options)

| Param |
| --- |
| options | 

<a name="WorkRole"></a>

## WorkRole : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| workRole | [<code>WorkRoleHref</code>](#WorkRoleHref) |  |
| locationId | <code>number</code> |  |
| rateType | <code>string</code> | ['AdjAmount', 'Custom', 'Multiplier'] |
| rate | <code>number</code> |  |
| limitTo | <code>number</code> |  |
| effectiveDate | <code>string</code> |  |
| endingDate | <code>string</code> |  |
| agreementId | <code>number</code> |  |
| _info | <code>object</code> |  |

<a name="WorkTypeExclusion"></a>

## WorkTypeExclusion : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| workType | [<code>WorkTypeHref</code>](#WorkTypeHref) | 
| agreementId | <code>number</code> | 
| _info | <code>object</code> | 
| _info.lastUpdated | <code>string</code> | 
| _info.updatedBy | <code>string</code> | 

<a name="WorkType"></a>

## WorkType : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| workType | [<code>WorkTypeHref</code>](#WorkTypeHref) |  |
| locationId | <code>number</code> |  |
| rateType | <code>string</code> | ['AdjAmount', 'Custom', 'Multiplier'] |
| billTime | <code>string</code> | ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault'] |
| rate | <code>number</code> |  |
| hoursMax | <code>number</code> |  |
| hoursMin | <code>number</code> |  |
| roundBillHours | <code>number</code> |  |
| overageRate | <code>number</code> |  |
| overageRateType | <code>string</code> | ['AdjAmount', 'Custom', 'Multiplier'] |
| agreementLimit | <code>number</code> |  |
| site | [<code>SiteHref</code>](#SiteHref) |  |
| effectiveDate | <code>string</code> |  |
| endingDate | <code>string</code> |  |
| agreementId | <code>number</code> |  |
| company | [<code>CompanyHref</code>](#CompanyHref) |  |
| _info | <code>object</code> |  |
| _info.lastUpdated | <code>string</code> |  |
| _info.updatedBy | <code>string</code> |  |

<a name="ProjectAPI"></a>

## ProjectAPI : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| Projects | 

<a name="new_ProjectAPI_new"></a>

### new ProjectAPI(options)

| Param |
| --- |
| options | 

<a name="Project"></a>

## Project : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| actualEnd | <code>string</code> |  |
| actualHours | <code>number</code> |  |
| actualStart | <code>string</code> |  |
| agreement | [<code>AgreementHref</code>](#AgreementHref) |  |
| billExpenses | <code>string</code> | ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault'] |
| billProducts | <code>string</code> | ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault'] |
| billProjectAfterClosedFlag | <code>boolean</code> |  |
| billTime | <code>string</code> | ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault'] |
| billUnapprovedTimeAndExpense | <code>boolean</code> |  |
| billingAmount | <code>number</code> |  |
| billingAttention | <code>string</code> |  |
| billingMethod | <code>string</code> | ['ActualRates', 'FixedFee', 'NotToExceed', 'OverrideRate'] |
| billingRateType | <code>string</code> | ['WorkRole', 'StaffMember'] |
| board | [<code>BoardHref</code>](#BoardHref) |  |
| budgetAnalysis | <code>string</code> | ['ActualHours', 'BillableHours'] |
| budgetFlag | <code>boolean</code> |  |
| budgetHours | <code>number</code> |  |
| company | [<code>CompanyHref</code>](#CompanyHref) |  |
| contact | [<code>ContactHref</code>](#ContactHref) |  |
| customerPO | <code>string</code> |  |
| description | <code>string</code> |  |
| downpayment | <code>number</code> | note: as of CW2016.1, this is typo'd as 'downpayment' and not 'downPayment' |
| estimatedEnd | <code>string</code> |  |
| estimatedExpenseRevenue | <code>number</code> |  |
| estimatedHours | <code>number</code> |  |
| estimatedProductRevenue | <code>number</code> |  |
| estimatedStart | <code>string</code> |  |
| estimatedTimeRevenue | <code>number</code> |  |
| expenseApprover | [<code>MemberHref</code>](#MemberHref) |  |
| id | <code>number</code> | projectId |
| manager | [<code>MemberHref</code>](#MemberHref) |  |
| name | <code>string</code> | projectName |
| opportunity | [<code>OpportunityHref</code>](#OpportunityHref) |  |
| projectTemplateId | <code>number</code> |  |
| restrictDownPaymentFlag | <code>boolean</code> |  |
| scheduledEnd | <code>string</code> |  |
| scheduledHours | <code>number</code> |  |
| scheduledStart | <code>string</code> |  |
| site | [<code>SiteHref</code>](#SiteHref) |  |
| status | [<code>ProjectStatusHref</code>](#ProjectStatusHref) |  |
| timeApprover | [<code>MemberHref</code>](#MemberHref) |  |
| type | [<code>ProjectTypeHref</code>](#ProjectTypeHref) |  |
| _info | <code>object</code> |  |
| _info.lastUpdated | <code>string</code> |  |
| _info.updatedBy | <code>string</code> |  |

<a name="Activity"></a>

## Activity : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id |  | 
| name |  | 
| type | <code>object</code> | 
| type.id |  | 
| type.name |  | 
| type._info | [<code>TypeHref</code>](#TypeHref) | 
| company | <code>object</code> | 
| company.id |  | 
| company.identifier |  | 
| company.name |  | 
| company._info | [<code>CompanyHref</code>](#CompanyHref) | 
| contact | <code>object</code> | 
| contact.id |  | 
| contact.name |  | 
| company._info | [<code>CompanyHref</code>](#CompanyHref) | 
| email |  | 
| status | <code>object</code> | 
| status.id |  | 
| status.name |  | 
| status._info | [<code>StatusHref</code>](#StatusHref) | 
| opportunity | <code>object</code> | 
| opportunity.id |  | 
| opportunity.name |  | 
| opportunity._info | [<code>OpportunityHref</code>](#OpportunityHref) | 
| notes |  | 
| dateStart |  | 
| assignedBy | <code>object</code> | 
| assignedBy.id |  | 
| assignedBy.identifier |  | 
| assignedBy.name |  | 
| assignedBy._info | [<code>MemberHref</code>](#MemberHref) | 
| assignTo | <code>object</code> | 
| assignTo.id |  | 
| assignTo.identifier |  | 
| assignTo.name |  | 
| assignTo._info | [<code>MemberHref</code>](#MemberHref) | 
| notifyFlag |  | 
| mobileGuid |  | 
| currency | <code>object</code> | 
| currency.id |  | 
| currency.symbol |  | 
| currency.isoCode |  | 
| currency.name |  | 
| currency._info | [<code>CurrencyHref</code>](#CurrencyHref) | 
| _info | [<code>InfoHref</code>](#InfoHref) | 

<a name="ActivityType"></a>

## ActivityType : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| id | 
| name | 
| points | 
| defaultFlag | 
| inactiveFlag | 
| emailFlag | 
| memoFlag | 
| _info | 
| _info.lastUpdated | 
| _info.updatedBy | 

<a name="SalesAPI"></a>

## SalesAPI : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| Activities | [<code>Activities</code>](#Activities) | 

<a name="ScheduleAPI"></a>

## ScheduleAPI : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| ScheduleEntries | [<code>ScheduleEntries</code>](#ScheduleEntries) | 
| ScheduleTypes | [<code>ScheduleTypes</code>](#ScheduleTypes) | 

<a name="new_ScheduleAPI_new"></a>

### new ScheduleAPI(options)

| Param |
| --- |
| options | 

<a name="ScheduleEntry"></a>

## ScheduleEntry : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id |  | 
| objectId |  | 
| name |  | 
| member | [<code>MemberHref</code>](#MemberHref) | 
| where | [<code>ServiceLocationHref</code>](#ServiceLocationHref) | 
| dateStart |  | 
| dateEnd |  | 
| reminder | [<code>ReminderHref</code>](#ReminderHref) | 
| status | [<code>ScheduleStatusHref</code>](#ScheduleStatusHref) | 
| type | [<code>ScheduleTypeHref</code>](#ScheduleTypeHref) | 
| doneFlag |  | 
| acknowledgedFlag |  | 
| ownerFlag |  | 
| allowScheduleConflictsFlag |  | 
| addMemberToProjectFlag |  | 
| projectRoleId |  | 
| mobileGuid |  | 
| closeDate |  | 
| hours |  | 
| _info | [<code>InfoHref</code>](#InfoHref) | 

<a name="ScheduleType"></a>

## ScheduleType : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| name | <code>string</code> | required |
| identifier | <code>string</code> | required |
| chargeCode | [<code>ChargeCodeHref</code>](#ChargeCodeHref) |  |
| where | [<code>ServiceLocationHref</code>](#ServiceLocationHref) |  |
| systemFlag | <code>boolean</code> |  |

<a name="BoardItem"></a>

## BoardItem : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id |  |  |
| name |  |  |
| inactiveFlag |  | added in 2019.1 |
| board | [<code>BoardHref</code>](#BoardHref) | added in 2019.1 |
| boardId |  | removed in 2019.1 |

<a name="Board"></a>

## Board : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| name | <code>string</code> |  |
| locationId | <code>number</code> |  |
| businessUnitId | <code>number</code> |  |
| inactive | <code>boolean</code> | removed in 2019.1 |
| inactiveFlag | <code>boolean</code> | added in 2019.1 |
| signOffTemplateId | <code>number</code> |  |
| sendToContact | <code>boolean</code> |  |
| contactTemplateId | <code>number</code> |  |
| sendToResource | <code>boolean</code> |  |
| resourceTemplateId | <code>number</code> |  |
| _info | <code>object</code> |  |

<a name="BoardSubType"></a>

## BoardSubType : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id |  | 
| name |  | 
| inactiveFlag |  | 
| typeAssociationIds | <code>Array</code> | 
| addAllTypesFlag |  | 
| board | [<code>BoardHref</code>](#BoardHref) | 
| removeAllTypesFlag |  | 
| _info | [<code>InfoHref</code>](#InfoHref) | 

<a name="BoardTeam"></a>

## BoardTeam : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| teamLeader | [<code>MemberHref</code>](#MemberHref) | 
| members | <code>Array.&lt;number&gt;</code> | 
| defaultFlag | <code>boolean</code> | 
| notifyOnTicketDelete | <code>boolean</code> | 
| boardId | <code>number</code> | 
| locationId | <code>number</code> | 
| businessUnitId | <code>number</code> | 
| _info | <code>object</code> | 

<a name="BoardType"></a>

## BoardType : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id |  |  |
| name |  |  |
| category |  | [Reactive, Proactive] |
| defaultFlag |  |  |
| inactiveFlag |  |  |
| requestForChangeFlag |  |  |
| integrationXref |  |  |
| board |  |  |
| location |  |  |
| department |  |  |
| _info | [<code>InfoHref</code>](#InfoHref) |  |

<a name="ServiceDeskAPI"></a>

## ServiceDeskAPI : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| Tickets | [<code>Tickets</code>](#Tickets) | 
| Boards | [<code>Boards</code>](#Boards) | 
| BoardTeams | [<code>BoardTeams</code>](#BoardTeams) | 
| Priorities | [<code>Priorities</code>](#Priorities) | 
| Statuses | [<code>Statuses</code>](#Statuses) | 
| ServiceNotes | [<code>ServiceNotes</code>](#ServiceNotes) | 
| BoardItems | [<code>BoardItems</code>](#BoardItems) | 
| BoardTypes | [<code>BoardTypes</code>](#BoardTypes) | 
| BoardSubTypes | [<code>BoardSubTypes</code>](#BoardSubTypes) | 

<a name="new_ServiceDeskAPI_new"></a>

### new ServiceDeskAPI(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Priority"></a>

## Priority : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| color | <code>string</code> | 
| sortOrder | <code>number</code> | 
| defaultFlag | <code>boolean</code> | 
| imageLink | <code>string</code> | 
| _info | <code>object</code> | 

<a name="ServiceNote"></a>

## ServiceNote : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| ticketId | <code>number</code> |  |
| text | <code>string</code> | the text of the particular note |
| detailDescriptionFlag | <code>boolean</code> |  |
| internalAnalysisFlag | <code>boolean</code> |  |
| resolutionFlag | <code>boolean</code> |  |
| member | [<code>MemberHref</code>](#MemberHref) | null if not applicable |
| contact | [<code>ContactHref</code>](#ContactHref) | null if not applicable |
| [customerUpdatedFlag] | <code>boolean</code> |  |
| [processNotifications] | <code>boolean</code> |  |
| dateCreated | <code>string</code> |  |
| createdBy | <code>string</code> |  |
| internalFlag | <code>boolean</code> |  |
| externalFlag | <code>boolean</code> |  |
| _info | <code>object</code> |  |
| _info.lastUpdated | <code>string</code> |  |
| _info.updatedBy | <code>string</code> |  |

<a name="Status"></a>

## Status : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| name | <code>string</code> |  |
| boardId | <code>number</code> |  |
| sortOrder | <code>number</code> |  |
| displayOnBoard | <code>boolean</code> |  |
| inactive | <code>boolean</code> | removed in 2019.1 |
| inactiveFlag | <code>boolean</code> | added in 2019.1 |
| closedStatus | <code>boolean</code> |  |
| timeEntryNotAllowed | <code>boolean</code> |  |
| defaultFlag | <code>boolean</code> |  |
| escalationStatus | <code>string</code> | ['NotResponded', 'Responded', 'Plan', 'Resolved', 'NoEscalation'] |
| _info | <code>object</code> |  |

<a name="Ticket"></a>

## Ticket : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| actualHours | <code>string</code> |  |
| addressLine1 | <code>string</code> |  |
| addressLine2 | <code>string</code> |  |
| agreement | [<code>AgreementHref</code>](#AgreementHref) |  |
| allowAllClientsPortalView | <code>boolean</code> |  |
| approved | <code>boolean</code> |  |
| automaticEmailCc |  |  |
| automaticEmailCcFlag |  |  |
| automaticEmailContactFlag |  |  |
| automaticEmailResourceFlag |  |  |
| board | [<code>BoardHref</code>](#BoardHref) |  |
| budgetHours | <code>number</code> |  |
| city | <code>string</code> |  |
| closedBy |  |  |
| closedDate |  |  |
| closedFlag |  |  |
| company | [<code>CompanyHref</code>](#CompanyHref) |  |
| contact | [<code>ContactHref</code>](#ContactHref) |  |
| contactEmailAddress | <code>string</code> |  |
| contactEmailLookup |  |  |
| contactPhoneExtension |  |  |
| contactPhoneNumber | <code>string</code> |  |
| country | [<code>CountryHref</code>](#CountryHref) |  |
| customerUpdatedFlag | <code>boolean</code> |  |
| customFields | [<code>Array.&lt;CustomField&gt;</code>](#CustomField) |  |
| dateEntered | <code>string</code> |  |
| dateResolved | <code>string</code> |  |
| dateResplan | <code>string</code> |  |
| dateResponded | <code>string</code> |  |
| enteredBy | <code>string</code> |  |
| externalXRef |  |  |
| hasChildTicket | <code>boolean</code> |  |
| id | <code>number</code> | TicketNbr |
| impact | <code>string</code> |  |
| initialDescription |  |  |
| initialInternalAnalysis |  |  |
| initialResolution |  |  |
| isInSla | <code>boolean</code> |  |
| item | [<code>ItemHref</code>](#ItemHref) |  |
| knowledgeBaseCategoryId |  |  |
| knowledgeBaseLinkId |  |  |
| knowledgeBaseLinkType |  |  |
| knowledgeBaseSubCategoryId |  |  |
| opportunity |  |  |
| owner | [<code>OwnerHref</code>](#OwnerHref) |  |
| parentTicketId |  |  |
| phase |  |  |
| poNumber |  |  |
| priority | [<code>PriorityHref</code>](#PriorityHref) |  |
| processNotifications |  |  |
| project |  |  |
| recordType | <code>string</code> |  |
| requiredDate | <code>string</code> |  |
| resPlanMinutes | <code>number</code> |  |
| resolveMinutes | <code>number</code> |  |
| resources | <code>string</code> |  |
| respondMinutes | <code>number</code> |  |
| serviceLocation | [<code>ServiceLocationHref</code>](#ServiceLocationHref) |  |
| severity | <code>string</code> |  |
| site | [<code>SiteHref</code>](#SiteHref) |  |
| siteName | <code>string</code> |  |
| skipCallback |  |  |
| source | [<code>SourceHref</code>](#SourceHref) |  |
| stateIdentifier | <code>string</code> |  |
| status | [<code>StatusHref</code>](#StatusHref) |  |
| subBillingAmount |  |  |
| subBillingMethod | <code>string</code> |  |
| subDateAccepted |  |  |
| subType | [<code>SubTypeHref</code>](#SubTypeHref) |  |
| summary | <code>string</code> |  |
| team | [<code>TeamHref</code>](#TeamHref) |  |
| type | [<code>TypeHref</code>](#TypeHref) |  |
| wbsCode |  |  |
| zip | <code>string</code> |  |
| _info | <code>object</code> |  |
| _info.activities_href | <code>string</code> |  |
| _info.childtasks_href | <code>string</code> |  |
| _info.configurations_href | <code>string</code> |  |
| _info.documents_href | <code>string</code> |  |
| _info.lastUpdated | <code>string</code> |  |
| _info.notes_href | <code>string</code> |  |
| _info.products_href | <code>string</code> |  |
| _info.scheduleentries_href | <code>string</code> |  |
| _info.tasks_href | <code>string</code> |  |
| _info.timeentries_href | <code>string</code> |  |
| _info.updatedBy | <code>string</code> |  |

<a name="SystemAPI"></a>

## SystemAPI : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| Members | [<code>Members</code>](#Members) | 
| Reports | [<code>Reports</code>](#Reports) | 

<a name="new_SystemAPI_new"></a>

### new SystemAPI(options)

| Param | Type |
| --- | --- |
| options | [<code>CWOptions</code>](#CWOptions) | 

<a name="Member"></a>

## Member : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id |  | 
| adminFlag | <code>boolean</code> | 
| billableForecast |  | 
| calendar | <code>CalendarHref</code> | 
| country | [<code>CountryHref</code>](#CountryHref) | 
| dailyCapacity |  | 
| defaultEmail |  | 
| defaultProjectBoard | <code>ProjectBoardHref</code> | 
| defaultProjectDepartmentId |  | 
| defaultProjectLocationId |  | 
| defaultSalesLocationId |  | 
| defaultScheduleDepartmentId |  | 
| defaultScheduleLocationId |  | 
| defaultServiceBoard | <code>ServiceBoardHref</code> | 
| defaultServiceDepartmentId |  | 
| defaultServiceLocationId |  | 
| defaultSystemDepartmentId |  | 
| defaultSystemLocationId |  | 
| disableOnlineFlag | <code>boolean</code> | 
| emailAddress |  | 
| enableGpsFlag |  | 
| enableLdapAuthenticationFlag |  | 
| enableMobileFlag |  | 
| expenseApprover | [<code>MemberHref</code>](#MemberHref) | 
| firstName | <code>string</code> | 
| hideFromDispatchFlag | <code>boolean</code> | 
| hireDate | <code>string</code> | 
| homeEmail |  | 
| homeExtension |  | 
| homePhone |  | 
| identifier |  | 
| inactiveDate |  | 
| inactiveFlag | <code>boolean</code> | 
| lastName |  | 
| licenseClass | <code>string</code> | 
| middleInitial |  | 
| mobileEmail |  | 
| mobileExtension |  | 
| mobilePhone |  | 
| notes |  | 
| officeEmail |  | 
| officeExtension |  | 
| officePhone |  | 
| reportsTo | [<code>MemberHref</code>](#MemberHref) | 
| restrictDefaultSalesTerritoryFlag |  | 
| restrictDefaultWarehouseBinFlag |  | 
| restrictDefaultWarehouseFlag |  | 
| restrictProjectDefaultDepartmentFlag |  | 
| restrictProjectDefaultLocationFlag |  | 
| restrictScheduleFlag |  | 
| restrictServiceDefaultDepartmentFlag |  | 
| restrictServiceDefaultLocationFlag |  | 
| scheduleCapacity |  | 
| securityRole | <code>SecurityRoleHref</code> | 
| securityLevel |  | 
| securityLocationId |  | 
| serviceLocation |  | 
| serviceTeams |  | 
| systemRestrictToDefaultDepartmentFlag |  | 
| systemRestrictToDefaultLocationFlag |  | 
| timeApprover | [<code>MemberHref</code>](#MemberHref) | 
| timeZone | <code>TimeZoneHref</code> | 
| title |  | 
| type | <code>MemberTypeHref</code> | 
| vendorNumber |  | 
| warehouse |  | 
| warehouseBin |  | 
| workRole | [<code>WorkRoleHref</code>](#WorkRoleHref) | 
| workType | [<code>WorkTypeHref</code>](#WorkTypeHref) | 
| _info | <code>object</code> | 
| _info.lastUpdated | <code>string</code> | 
| _info.updatedBy | <code>string</code> | 
| _info.image_href | <code>string</code> | 

<a name="ReportNames"></a>

## ReportNames : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| name | <code>string</code> | 

<a name="ReportData"></a>

## ReportData : <code>object</code>
row_values is not a keyed array

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| column_definitions | <code>Array.&lt;object&gt;</code> |  |
| row_values | <code>Array</code> | mixed types, may be null, string, numeric, etc |

<a name="ReportDataInterpolated"></a>

## ReportDataInterpolated : <code>object</code>
Key-Vals interpolated into one object per row

**Kind**: global typedef  
<a name="ReportColumn"></a>

## ReportColumn : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| ColumnName | <code>object</code> | the key of the object is the name of the column (not ColumnName) |
| ColumnName.isNullable | <code>boolean</code> |  |
| ColumnName.type | <code>string</code> | ['Numeric', 'Text', 'DateTime', 'Boolean'] |

<a name="TimeAPI"></a>

## TimeAPI : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| TimeEntries | 

<a name="new_TimeAPI_new"></a>

### new TimeAPI(options)

| Param |
| --- |
| options | 

<a name="TimeEntry"></a>

## TimeEntry : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| company | [<code>CompanyHref</code>](#CompanyHref) |  |
| chargeToId | <code>number</code> |  |
| chargeToType | <code>string</code> | ['ServiceTicket', 'ProjectTicket', 'ChargeCode', 'Activity'] |
| member | [<code>MemberHref</code>](#MemberHref) |  |
| locationId | <code>number</code> |  |
| businessUnitId | <code>number</code> |  |
| workType | [<code>WorkTypeHref</code>](#WorkTypeHref) |  |
| workRole | [<code>WorkRoleHref</code>](#WorkRoleHref) |  |
| agreement | [<code>AgreementHref</code>](#AgreementHref) |  |
| timeStart | <code>string</code> |  |
| timeEnd | <code>string</code> |  |
| hoursDeduct | <code>number</code> |  |
| actualHours | <code>number</code> |  |
| billableOption | <code>string</code> | ['Billable', 'DoNotBill', 'NoCharge', 'NoDefault'] |
| notes | <code>string</code> |  |
| internalNotes | <code>string</code> |  |
| addToDetailDescriptionFlag | <code>boolean</code> |  |
| addToInternalAnalysisFlag | <code>boolean</code> |  |
| addToResolutionFlag | <code>boolean</code> |  |
| emailResourceFlag | <code>boolean</code> |  |
| emailContactFlag | <code>boolean</code> |  |
| emailCcFlag | <code>boolean</code> |  |
| emailCc | <code>string</code> |  |
| hoursBilled | <code>number</code> |  |

<a name="CallbackPayload"></a>

## CallbackPayload : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Action |  |  |
| CompanyId |  |  |
| Entity |  | json string |
| FromUrl |  |  |
| ID |  |  |
| MemberId |  |  |
| Metadata | <code>object</code> |  |
| Metadata.key_url |  |  |
| Type |  |  |

<a name="CWCallback"></a>

## CWCallback : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| verifyCallback | 
| verifyMessage | 
| middleware | 

<a name="CWUtils"></a>

## CWUtils : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| Series | [<code>CWCallback</code>](#CWCallback) | 
| Callback | [<code>CWCallback</code>](#CWCallback) | 

<a name="CWSeries"></a>

## CWSeries : <code>Object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| all | <code>function</code> | 

