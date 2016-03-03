# connectwise-rest
A nodejs module for interacting with the ConnectWise REST API.   This module is currently under construction starting with the ServiceDesk API.

## Requirements

- ConnectWise 2015.3+, though these functions are written for ConnectWise 2016.1 APIs (API3.0 v1.0.0). 
- ConnectWise API keys (available on ConnectWise 2015.3+), or API Only Member keys (only available on ConnectWise 2015.6+).  See the [documentation](https://developer.connectwise.com/Authentication) for more details. 

## Usage

Create a new API key, or API Only Member, then instantiate the module.  

```javascript
    
    var ConnectWiseRest = require('connectwise-rest');
    
    var cw = new ConnectWiseRest({
        companyId: 'company',
        companyUrl: 'your.connectwise.com',
        publicKey: '<public key>',
        privateKey: '<private key>'
    });
    
    cw.ServiceDeskAPI.Tickets.getTicketById(1234)
        .then(function (result){
            //do something with results
        })
        .fail(function (error){
            //handle errors
        });
```

Or if you only require access to one API component:

```javascript

    var ConnectWiseRest = require('connectwise-rest');
    
    var tickets = new ConnectWiseRest(options).ServiceDeskAPI.Tickets;
    
    tickets.getTicketById(1234)
        .then(function (result){
            //do something with results
        })
        .fail(function (error){
            //handle errors
        });
```

You can also manually access the API:

```javascript

    var ConnectWiseRest = require('connectwise-rest');

    var api = new ConnectWiseRest(options).API.api;

    api('/path/to/api', 'POST', {
        'param1': 'val1',
        'param2': 'val2'
    }).then(function (result){
        //do something with results
    })
    .fail(function (error){
        //handle errors
    });
```

### Cloud-Hosted ConnectWise 

To access cloud-hosted ConnectWise, use the `companyUrl` of `api-na.myconnectwise.net` and override the default `entryPoint`.

```javascript
    options = {
        companyId: 'company',
        companyUrl: 'api-na.myconnectwise.net',
        entryPoint: 'v2016_2'
        publicKey: '<public key>',
        privateKey: '<private key>'
    }

```


## Implemented APIs

| Module           | API                 | Status                        |
| ---------------- | ------------------- | ----------------------------- |
| Finance API      | Additions           | Complete                      |
| Finance API      | Adjustments         | Complete                      |
| Finance API      | Agreements          | Complete                      |
| Finance API      | AgreementSites      | Complete                      |
| Finance API      | BoardDefaults       | Complete                      |
| Finance API      | WorkRoles           | Complete                      |
| Finance API      | WorkTypeExclusions  | Complete                      |
| Finance API      | WorkTypes           | Complete                      |
| Service Desk API | Boards              | Complete, helpers incomplete  |
| Service Desk API | Tickets             | Complete                      |
| Service Desk API | Statuses            | Complete                      |
| Service Desk API | ServiceNotes        | Complete                      |
| Time API         | TimeEntries         | Complete                      |


## Examples

### Code Examples

Get ticket 1234 and print ticket number, summary and status. 

```javascript

    tickets.getTicketById(1234)
        .then(function (res) { console.log(res.id, res.summary, res.status.name); })
        .fail(function (err) { console.log(err); });
```

Create new ticket on service board, then print the returned ticket number, or any errors

```javascript

    tickets.createTicket({
        summary: "This is the summary",
        board: {
            name: "Service Board"
        },
        company: {
            identifier: "ABC" //company ID
        },
        initialDescription: "ticket description",
        recordType: "ServiceTicket"
        //can also pass in any other Ticket object settings as needed
    })
    .then(function (res) { console.log(res.id); });
    .fail(function (err) { console.log(err); });    
    
```

Change the status of a ticket

```javascript

    updateTicket(1234, [{
        op: 'replace',
        path: 'status/id',
        value: 123 //id of the status to change to, find with boards.getBoards and status.getStatuses
    }, {
        //second or more operations
    }])
    .then(function(res) { //do something with returned ticket });
    .fail(function(err) { //do something with errors });    

```

### Conditions 

Valid example conditions string
  
```javascript

    var conditions = '(contact/name like "Fred%" and closedFlag = false) and dateEntered > [2015-12-23T05:53:27Z] or summary contains "test" AND  summary != "Some Summary"'

```

## Classes

<dl>
<dt><a href="#ConnectWise">ConnectWise</a></dt>
<dd></dd>
<dt><a href="#ConnectWiseRest">ConnectWiseRest</a></dt>
<dd></dd>
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
<dt><a href="#WorkRoles">WorkRoles</a></dt>
<dd></dd>
<dt><a href="#WorkTypeExclusions">WorkTypeExclusions</a></dt>
<dd></dd>
<dt><a href="#WorkTypes">WorkTypes</a></dt>
<dd></dd>
<dt><a href="#Boards">Boards</a></dt>
<dd></dd>
<dt><a href="#ServiceDeskAPI">ServiceDeskAPI</a></dt>
<dd></dd>
<dt><a href="#ServiceNotes">ServiceNotes</a></dt>
<dd></dd>
<dt><a href="#Statuses">Statuses</a></dt>
<dd></dd>
<dt><a href="#Tickets">Tickets</a></dt>
<dd></dd>
<dt><a href="#TimeAPI">TimeAPI</a></dt>
<dd></dd>
<dt><a href="#TimeEntries">TimeEntries</a></dt>
<dd></dd>
</dl>

## Functions

<dl>
<dt><a href="#FinanceAPI">FinanceAPI(options)</a> ⇒ <code><a href="#FinanceAPI">FinanceAPI</a></code></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#CWOptions">CWOptions</a> : <code>object</code></dt>
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
<dt><a href="#ProductHref">ProductHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#WorkRoleHref">WorkRoleHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#WorkTypeHref">WorkTypeHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Operations">Operations</a> : <code>Array.&lt;object&gt;</code></dt>
<dd></dd>
<dt><a href="#Count">Count</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ConfigurationHref">ConfigurationHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#MemberHref">MemberHref</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#DeleteResponse">DeleteResponse</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ErrorResponse">ErrorResponse</a> : <code>object</code></dt>
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
<dt><a href="#Board">Board</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ServiceDeskAPI">ServiceDeskAPI</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#ServiceNote">ServiceNote</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Status">Status</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#Ticket">Ticket</a> : <code>object</code></dt>
<dd></dd>
<dt><a href="#TimeEntry">TimeEntry</a> : <code>object</code></dt>
<dd></dd>
</dl>

<a name="ConnectWise"></a>
## ConnectWise
**Kind**: global class  

* [ConnectWise](#ConnectWise)
    * [new ConnectWise(options)](#new_ConnectWise_new)
    * [.api(path, method, [params])](#ConnectWise+api)

<a name="new_ConnectWise_new"></a>
### new ConnectWise(options)

| Param | Type | Description |
| --- | --- | --- |
| options | <code>object</code> |  |
| options.companyId | <code>string</code> |  |
| options.publicKey | <code>string</code> |  |
| options.privateKey | <code>string</code> |  |
| options.companyUrl | <code>string</code> |  |
| [options.entryPoint] | <code>string</code> | defaults to 'v4_6_release' |

<a name="ConnectWise+api"></a>
### connectWise.api(path, method, [params])
**Kind**: instance method of <code>[ConnectWise](#ConnectWise)</code>  

| Param | Type | Description |
| --- | --- | --- |
| path | <code>string</code> | API method path or full URL to perform method upon |
| method | <code>string</code> | HTTP method, GET, POST, PUT, PATCH, DELETE |
| [params] | <code>object</code> | if required by route, include required params                          if a GET request, the params are joined into a string                          if a POST/PUT/PATCH, the params are included in the body |

<a name="ConnectWiseRest"></a>
## ConnectWiseRest
**Kind**: global class  
<a name="new_ConnectWiseRest_new"></a>
### new ConnectWiseRest(options)

| Param | Type |
| --- | --- |
| options | <code>[CWOptions](#CWOptions)</code> | 

<a name="Additions"></a>
## Additions
**Kind**: global class  
**Inherits**: <code>[ConnectWise](#ConnectWise)</code>  

* [Additions](#Additions)
    * [new Additions(options)](#new_Additions_new)
    * [.getAdditions(agreementId, params)](#Additions+getAdditions) ⇒ <code>promise</code> &#124; <code>[Array.&lt;Addition&gt;](#Addition)</code>
    * [.createAddition(agreementId, addition)](#Additions+createAddition) ⇒ <code>promise</code> &#124; <code>[Addition](#Addition)</code>
    * [.getAdditionsCount(agreementId, params)](#Additions+getAdditionsCount) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
    * [.deleteAdditionById(agreementId, additionId)](#Additions+deleteAdditionById) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
    * [.getAdditionById(agreementId, additionId)](#Additions+getAdditionById) ⇒ <code>promise</code> &#124; <code>[Addition](#Addition)</code>
    * [.updateAddition(agreementId, additionId, operations)](#Additions+updateAddition) ⇒ <code>promise</code> &#124; <code>[Addition](#Addition)</code>
    * [.replaceAddition(agreementId, additionId, addition)](#Additions+replaceAddition) ⇒ <code>promise</code> &#124; <code>[Addition](#Addition)</code>

<a name="new_Additions_new"></a>
### new Additions(options)

| Param | Type |
| --- | --- |
| options | <code>[CWOptions](#CWOptions)</code> | 

<a name="Additions+getAdditions"></a>
### additions.getAdditions(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Array.&lt;Addition&gt;](#Addition)</code>
GET
Returns non-cancelled active additions to an agreement

**Kind**: instance method of <code>[Additions](#Additions)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[Params](#Params)</code> | 

<a name="Additions+createAddition"></a>
### additions.createAddition(agreementId, addition) ⇒ <code>promise</code> &#124; <code>[Addition](#Addition)</code>
POST

**Kind**: instance method of <code>[Additions](#Additions)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| addition | <code>[Addition](#Addition)</code> | 

<a name="Additions+getAdditionsCount"></a>
### additions.getAdditionsCount(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
GET

**Kind**: instance method of <code>[Additions](#Additions)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[ParamsConditions](#ParamsConditions)</code> | 

<a name="Additions+deleteAdditionById"></a>
### additions.deleteAdditionById(agreementId, additionId) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
DELETE

**Kind**: instance method of <code>[Additions](#Additions)</code>  

| Param |
| --- |
| agreementId | 
| additionId | 

<a name="Additions+getAdditionById"></a>
### additions.getAdditionById(agreementId, additionId) ⇒ <code>promise</code> &#124; <code>[Addition](#Addition)</code>
GET

**Kind**: instance method of <code>[Additions](#Additions)</code>  

| Param |
| --- |
| agreementId | 
| additionId | 

<a name="Additions+updateAddition"></a>
### additions.updateAddition(agreementId, additionId, operations) ⇒ <code>promise</code> &#124; <code>[Addition](#Addition)</code>
PATCH

**Kind**: instance method of <code>[Additions](#Additions)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| additionId |  | 
| operations | <code>[Operations](#Operations)</code> | 

<a name="Additions+replaceAddition"></a>
### additions.replaceAddition(agreementId, additionId, addition) ⇒ <code>promise</code> &#124; <code>[Addition](#Addition)</code>
PUT

**Kind**: instance method of <code>[Additions](#Additions)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| additionId |  | 
| addition | <code>[Addition](#Addition)</code> | 

<a name="Adjustments"></a>
## Adjustments
**Kind**: global class  
**Inherits**: <code>[ConnectWise](#ConnectWise)</code>  

* [Adjustments](#Adjustments)
    * [new Adjustments(options)](#new_Adjustments_new)
    * [.getAdjustments(agreementId, params)](#Adjustments+getAdjustments) ⇒ <code>promise</code> &#124; <code>[Array.&lt;Adjustment&gt;](#Adjustment)</code>
    * [.createAdjustments(agreementId, addition)](#Adjustments+createAdjustments) ⇒ <code>promise</code> &#124; <code>[Adjustment](#Adjustment)</code>
    * [.getAdjustmentsCount(agreementId, params)](#Adjustments+getAdjustmentsCount) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
    * [.deleteAdjustmentById(agreementId, additionId)](#Adjustments+deleteAdjustmentById) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
    * [.getAdjustmentById(agreementId, additionId)](#Adjustments+getAdjustmentById) ⇒ <code>promise</code> &#124; <code>[Adjustment](#Adjustment)</code>
    * [.updateAdjustment(agreementId, additionId, {Operations)](#Adjustments+updateAdjustment) ⇒ <code>promise</code> &#124; <code>[Adjustment](#Adjustment)</code>
    * [.replaceAdjustment(agreementId, additionId, addition)](#Adjustments+replaceAdjustment) ⇒ <code>promise</code> &#124; <code>[Adjustment](#Adjustment)</code>

<a name="new_Adjustments_new"></a>
### new Adjustments(options)

| Param | Type |
| --- | --- |
| options | <code>[CWOptions](#CWOptions)</code> | 

<a name="Adjustments+getAdjustments"></a>
### adjustments.getAdjustments(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Array.&lt;Adjustment&gt;](#Adjustment)</code>
GET

**Kind**: instance method of <code>[Adjustments](#Adjustments)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[Params](#Params)</code> | 

<a name="Adjustments+createAdjustments"></a>
### adjustments.createAdjustments(agreementId, addition) ⇒ <code>promise</code> &#124; <code>[Adjustment](#Adjustment)</code>
POST

**Kind**: instance method of <code>[Adjustments](#Adjustments)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| addition | <code>[Adjustment](#Adjustment)</code> | 

<a name="Adjustments+getAdjustmentsCount"></a>
### adjustments.getAdjustmentsCount(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
GET

**Kind**: instance method of <code>[Adjustments](#Adjustments)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[ParamsConditions](#ParamsConditions)</code> | 

<a name="Adjustments+deleteAdjustmentById"></a>
### adjustments.deleteAdjustmentById(agreementId, additionId) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
DELETE

**Kind**: instance method of <code>[Adjustments](#Adjustments)</code>  

| Param |
| --- |
| agreementId | 
| additionId | 

<a name="Adjustments+getAdjustmentById"></a>
### adjustments.getAdjustmentById(agreementId, additionId) ⇒ <code>promise</code> &#124; <code>[Adjustment](#Adjustment)</code>
GET

**Kind**: instance method of <code>[Adjustments](#Adjustments)</code>  

| Param |
| --- |
| agreementId | 
| additionId | 

<a name="Adjustments+updateAdjustment"></a>
### adjustments.updateAdjustment(agreementId, additionId, {Operations) ⇒ <code>promise</code> &#124; <code>[Adjustment](#Adjustment)</code>
PATCH

**Kind**: instance method of <code>[Adjustments](#Adjustments)</code>  

| Param | Description |
| --- | --- |
| agreementId |  |
| additionId |  |
| {Operations | operations |

<a name="Adjustments+replaceAdjustment"></a>
### adjustments.replaceAdjustment(agreementId, additionId, addition) ⇒ <code>promise</code> &#124; <code>[Adjustment](#Adjustment)</code>
PUT

**Kind**: instance method of <code>[Adjustments](#Adjustments)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| additionId |  | 
| addition | <code>[Adjustment](#Adjustment)</code> | 

<a name="Agreements"></a>
## Agreements
**Kind**: global class  
**Inherits**: <code>[ConnectWise](#ConnectWise)</code>  

* [Agreements](#Agreements)
    * [new Agreements(options)](#new_Agreements_new)
    * [.getAgreements(params)](#Agreements+getAgreements) ⇒ <code>promise</code> &#124; <code>[Array.&lt;Agreement&gt;](#Agreement)</code>
    * [.createAgreement(agreement)](#Agreements+createAgreement) ⇒ <code>promise</code> &#124; <code>[Agreement](#Agreement)</code>
    * [.getAgreementsCount(params)](#Agreements+getAgreementsCount) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
    * [.deleteAgreementById(agreementId)](#Agreements+deleteAgreementById) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
    * [.getAgreementById(agreementId)](#Agreements+getAgreementById) ⇒ <code>promise</code> &#124; <code>[Agreement](#Agreement)</code>
    * [.updateAgreement(agreementId, operations)](#Agreements+updateAgreement) ⇒ <code>promise</code> &#124; <code>[Agreement](#Agreement)</code>
    * [.replaceAgreement(agreementId, agreement)](#Agreements+replaceAgreement) ⇒ <code>promise</code> &#124; <code>[Agreement](#Agreement)</code>
    * [.getAgreementConfigurations(agreementId, params)](#Agreements+getAgreementConfigurations) ⇒ <code>promise</code> &#124; <code>[Array.&lt;ConfigurationHref&gt;](#ConfigurationHref)</code>
    * [.createConfigurationAssociation(agreementId, configuration)](#Agreements+createConfigurationAssociation) ⇒ <code>promise</code> &#124; <code>[ConfigurationHref](#ConfigurationHref)</code>
    * [.getAgreementConfigurationsCount(agreementId)](#Agreements+getAgreementConfigurationsCount) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
    * [.deleteConfigurationAssociation(agreementId, configurationId)](#Agreements+deleteConfigurationAssociation) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
    * [.getConfigurationAssociation(agreementId, configurationId)](#Agreements+getConfigurationAssociation) ⇒ <code>promise</code> &#124; <code>[ConfigurationHref](#ConfigurationHref)</code>

<a name="new_Agreements_new"></a>
### new Agreements(options)

| Param | Type |
| --- | --- |
| options | <code>[CWOptions](#CWOptions)</code> | 

<a name="Agreements+getAgreements"></a>
### agreements.getAgreements(params) ⇒ <code>promise</code> &#124; <code>[Array.&lt;Agreement&gt;](#Agreement)</code>
GET

**Kind**: instance method of <code>[Agreements](#Agreements)</code>  

| Param | Type |
| --- | --- |
| params | <code>[Params](#Params)</code> | 

<a name="Agreements+createAgreement"></a>
### agreements.createAgreement(agreement) ⇒ <code>promise</code> &#124; <code>[Agreement](#Agreement)</code>
POST

**Kind**: instance method of <code>[Agreements](#Agreements)</code>  

| Param | Type |
| --- | --- |
| agreement | <code>[Agreement](#Agreement)</code> | 

<a name="Agreements+getAgreementsCount"></a>
### agreements.getAgreementsCount(params) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
GET

**Kind**: instance method of <code>[Agreements](#Agreements)</code>  

| Param | Type |
| --- | --- |
| params | <code>[ParamsConditions](#ParamsConditions)</code> | 

<a name="Agreements+deleteAgreementById"></a>
### agreements.deleteAgreementById(agreementId) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
DELETE

**Kind**: instance method of <code>[Agreements](#Agreements)</code>  

| Param | Type |
| --- | --- |
| agreementId | <code>string</code> &#124; <code>number</code> | 

<a name="Agreements+getAgreementById"></a>
### agreements.getAgreementById(agreementId) ⇒ <code>promise</code> &#124; <code>[Agreement](#Agreement)</code>
**Kind**: instance method of <code>[Agreements](#Agreements)</code>  

| Param | Type |
| --- | --- |
| agreementId | <code>string</code> &#124; <code>number</code> | 

<a name="Agreements+updateAgreement"></a>
### agreements.updateAgreement(agreementId, operations) ⇒ <code>promise</code> &#124; <code>[Agreement](#Agreement)</code>
**Kind**: instance method of <code>[Agreements](#Agreements)</code>  

| Param | Type |
| --- | --- |
| agreementId | <code>string</code> &#124; <code>number</code> | 
| operations | <code>[Operations](#Operations)</code> | 

<a name="Agreements+replaceAgreement"></a>
### agreements.replaceAgreement(agreementId, agreement) ⇒ <code>promise</code> &#124; <code>[Agreement](#Agreement)</code>
**Kind**: instance method of <code>[Agreements](#Agreements)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| agreement | <code>[Agreement](#Agreement)</code> | 

<a name="Agreements+getAgreementConfigurations"></a>
### agreements.getAgreementConfigurations(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Array.&lt;ConfigurationHref&gt;](#ConfigurationHref)</code>
**Kind**: instance method of <code>[Agreements](#Agreements)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[ParamsPage](#ParamsPage)</code> | 

<a name="Agreements+createConfigurationAssociation"></a>
### agreements.createConfigurationAssociation(agreementId, configuration) ⇒ <code>promise</code> &#124; <code>[ConfigurationHref](#ConfigurationHref)</code>
POST

**Kind**: instance method of <code>[Agreements](#Agreements)</code>  

| Param |
| --- |
| agreementId | 
| configuration | 

<a name="Agreements+getAgreementConfigurationsCount"></a>
### agreements.getAgreementConfigurationsCount(agreementId) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
GET

**Kind**: instance method of <code>[Agreements](#Agreements)</code>  

| Param |
| --- |
| agreementId | 

<a name="Agreements+deleteConfigurationAssociation"></a>
### agreements.deleteConfigurationAssociation(agreementId, configurationId) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
**Kind**: instance method of <code>[Agreements](#Agreements)</code>  

| Param |
| --- |
| agreementId | 
| configurationId | 

<a name="Agreements+getConfigurationAssociation"></a>
### agreements.getConfigurationAssociation(agreementId, configurationId) ⇒ <code>promise</code> &#124; <code>[ConfigurationHref](#ConfigurationHref)</code>
**Kind**: instance method of <code>[Agreements](#Agreements)</code>  

| Param |
| --- |
| agreementId | 
| configurationId | 

<a name="AgreementSites"></a>
## AgreementSites
**Kind**: global class  
**Inherits**: <code>[ConnectWise](#ConnectWise)</code>  

* [AgreementSites](#AgreementSites)
    * [new AgreementSites(options)](#new_AgreementSites_new)
    * [.getAgreementSites(agreementId, params)](#AgreementSites+getAgreementSites) ⇒ <code>promise</code> &#124; <code>[Array.&lt;AgreementSite&gt;](#AgreementSite)</code>
    * [.createAgreementSite(agreementId, site)](#AgreementSites+createAgreementSite) ⇒ <code>promise</code> &#124; <code>[AgreementSite](#AgreementSite)</code>
    * [.getAgreementSitesCount(agreementId, params)](#AgreementSites+getAgreementSitesCount) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
    * [.deleteAgreementSiteById(agreementId, siteId)](#AgreementSites+deleteAgreementSiteById) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
    * [.getAgreementSiteById(agreementId, siteId)](#AgreementSites+getAgreementSiteById) ⇒ <code>promise</code> &#124; <code>[AgreementSite](#AgreementSite)</code>
    * [.updateAgreementSite(agreementId, siteId, operations)](#AgreementSites+updateAgreementSite) ⇒ <code>promise</code> &#124; <code>[AgreementSite](#AgreementSite)</code>
    * [.replaceAgreementSite(agreementId, siteId, site)](#AgreementSites+replaceAgreementSite) ⇒ <code>promise</code> &#124; <code>[AgreementSite](#AgreementSite)</code>

<a name="new_AgreementSites_new"></a>
### new AgreementSites(options)

| Param | Type |
| --- | --- |
| options | <code>[CWOptions](#CWOptions)</code> | 

<a name="AgreementSites+getAgreementSites"></a>
### agreementSites.getAgreementSites(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Array.&lt;AgreementSite&gt;](#AgreementSite)</code>
GET

**Kind**: instance method of <code>[AgreementSites](#AgreementSites)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[Params](#Params)</code> | 

<a name="AgreementSites+createAgreementSite"></a>
### agreementSites.createAgreementSite(agreementId, site) ⇒ <code>promise</code> &#124; <code>[AgreementSite](#AgreementSite)</code>
POST

**Kind**: instance method of <code>[AgreementSites](#AgreementSites)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| site | <code>[AgreementSite](#AgreementSite)</code> | 

<a name="AgreementSites+getAgreementSitesCount"></a>
### agreementSites.getAgreementSitesCount(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
GET

**Kind**: instance method of <code>[AgreementSites](#AgreementSites)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[ParamsConditions](#ParamsConditions)</code> | 

<a name="AgreementSites+deleteAgreementSiteById"></a>
### agreementSites.deleteAgreementSiteById(agreementId, siteId) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
DELETE

**Kind**: instance method of <code>[AgreementSites](#AgreementSites)</code>  

| Param |
| --- |
| agreementId | 
| siteId | 

<a name="AgreementSites+getAgreementSiteById"></a>
### agreementSites.getAgreementSiteById(agreementId, siteId) ⇒ <code>promise</code> &#124; <code>[AgreementSite](#AgreementSite)</code>
GET

**Kind**: instance method of <code>[AgreementSites](#AgreementSites)</code>  

| Param |
| --- |
| agreementId | 
| siteId | 

<a name="AgreementSites+updateAgreementSite"></a>
### agreementSites.updateAgreementSite(agreementId, siteId, operations) ⇒ <code>promise</code> &#124; <code>[AgreementSite](#AgreementSite)</code>
PATCH

**Kind**: instance method of <code>[AgreementSites](#AgreementSites)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| siteId |  | 
| operations | <code>[Operations](#Operations)</code> | 

<a name="AgreementSites+replaceAgreementSite"></a>
### agreementSites.replaceAgreementSite(agreementId, siteId, site) ⇒ <code>promise</code> &#124; <code>[AgreementSite](#AgreementSite)</code>
PUT

**Kind**: instance method of <code>[AgreementSites](#AgreementSites)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| siteId |  | 
| site | <code>[AgreementSite](#AgreementSite)</code> | 

<a name="BoardDefaults"></a>
## BoardDefaults
**Kind**: global class  
**Inherits**: <code>[ConnectWise](#ConnectWise)</code>  

* [BoardDefaults](#BoardDefaults)
    * [new BoardDefaults(options)](#new_BoardDefaults_new)
    * [.getBoardDefaults(agreementId, params)](#BoardDefaults+getBoardDefaults) ⇒ <code>promise</code> &#124; <code>[Array.&lt;BoardDefault&gt;](#BoardDefault)</code>
    * [.createBoardDefault(agreementId, boardDefault)](#BoardDefaults+createBoardDefault) ⇒ <code>promise</code> &#124; <code>[BoardDefault](#BoardDefault)</code>
    * [.getBoardDefaultsCount(agreementId, params)](#BoardDefaults+getBoardDefaultsCount) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
    * [.deleteBoardDefaultById(agreementId, boardDefaultId)](#BoardDefaults+deleteBoardDefaultById) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
    * [.getBoardDefaultById(agreementId, boardDefaultId)](#BoardDefaults+getBoardDefaultById) ⇒ <code>promise</code> &#124; <code>[BoardDefault](#BoardDefault)</code>
    * [.updateBoardDefault(agreementId, boardDefaultId, operations)](#BoardDefaults+updateBoardDefault) ⇒ <code>promise</code> &#124; <code>[BoardDefault](#BoardDefault)</code>
    * [.replaceBoardDefault(agreementId, boardDefaultId, boardDefault)](#BoardDefaults+replaceBoardDefault) ⇒ <code>promise</code> &#124; <code>[BoardDefault](#BoardDefault)</code>

<a name="new_BoardDefaults_new"></a>
### new BoardDefaults(options)

| Param | Type |
| --- | --- |
| options | <code>[CWOptions](#CWOptions)</code> | 

<a name="BoardDefaults+getBoardDefaults"></a>
### boardDefaults.getBoardDefaults(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Array.&lt;BoardDefault&gt;](#BoardDefault)</code>
GET

**Kind**: instance method of <code>[BoardDefaults](#BoardDefaults)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[Params](#Params)</code> | 

<a name="BoardDefaults+createBoardDefault"></a>
### boardDefaults.createBoardDefault(agreementId, boardDefault) ⇒ <code>promise</code> &#124; <code>[BoardDefault](#BoardDefault)</code>
POST

**Kind**: instance method of <code>[BoardDefaults](#BoardDefaults)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| boardDefault | <code>[BoardDefault](#BoardDefault)</code> | 

<a name="BoardDefaults+getBoardDefaultsCount"></a>
### boardDefaults.getBoardDefaultsCount(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
GET

**Kind**: instance method of <code>[BoardDefaults](#BoardDefaults)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[ParamsConditions](#ParamsConditions)</code> | 

<a name="BoardDefaults+deleteBoardDefaultById"></a>
### boardDefaults.deleteBoardDefaultById(agreementId, boardDefaultId) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
DELETE

**Kind**: instance method of <code>[BoardDefaults](#BoardDefaults)</code>  

| Param |
| --- |
| agreementId | 
| boardDefaultId | 

<a name="BoardDefaults+getBoardDefaultById"></a>
### boardDefaults.getBoardDefaultById(agreementId, boardDefaultId) ⇒ <code>promise</code> &#124; <code>[BoardDefault](#BoardDefault)</code>
GET

**Kind**: instance method of <code>[BoardDefaults](#BoardDefaults)</code>  

| Param |
| --- |
| agreementId | 
| boardDefaultId | 

<a name="BoardDefaults+updateBoardDefault"></a>
### boardDefaults.updateBoardDefault(agreementId, boardDefaultId, operations) ⇒ <code>promise</code> &#124; <code>[BoardDefault](#BoardDefault)</code>
PATCH

**Kind**: instance method of <code>[BoardDefaults](#BoardDefaults)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| boardDefaultId |  | 
| operations | <code>[Operations](#Operations)</code> | 

<a name="BoardDefaults+replaceBoardDefault"></a>
### boardDefaults.replaceBoardDefault(agreementId, boardDefaultId, boardDefault) ⇒ <code>promise</code> &#124; <code>[BoardDefault](#BoardDefault)</code>
PUT

**Kind**: instance method of <code>[BoardDefaults](#BoardDefaults)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| boardDefaultId |  | 
| boardDefault | <code>[BoardDefault](#BoardDefault)</code> | 

<a name="WorkRoles"></a>
## WorkRoles
**Kind**: global class  
**Inherits**: <code>[ConnectWise](#ConnectWise)</code>  

* [WorkRoles](#WorkRoles)
    * [new WorkRoles(options)](#new_WorkRoles_new)
    * [.getWorkRoles(agreementId, params)](#WorkRoles+getWorkRoles) ⇒ <code>promise</code> &#124; <code>[Array.&lt;WorkRole&gt;](#WorkRole)</code>
    * [.createWorkRole(agreementId, workRole)](#WorkRoles+createWorkRole) ⇒ <code>promise</code> &#124; <code>[WorkRole](#WorkRole)</code>
    * [.getWorkRolesCount(agreementId, params)](#WorkRoles+getWorkRolesCount) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
    * [.deleteWorkRoleById(agreementId, workRoleId)](#WorkRoles+deleteWorkRoleById) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
    * [.getWorkRoleById(agreementId, workRoleId)](#WorkRoles+getWorkRoleById) ⇒ <code>promise</code> &#124; <code>[WorkRole](#WorkRole)</code>
    * [.updateWorkRole(agreementId, workRoleId, operations)](#WorkRoles+updateWorkRole) ⇒ <code>promise</code> &#124; <code>[WorkRole](#WorkRole)</code>
    * [.replaceWorkRole(agreementId, workRoleId, workRole)](#WorkRoles+replaceWorkRole) ⇒ <code>promise</code> &#124; <code>[WorkRole](#WorkRole)</code>

<a name="new_WorkRoles_new"></a>
### new WorkRoles(options)

| Param | Type |
| --- | --- |
| options | <code>[CWOptions](#CWOptions)</code> | 

<a name="WorkRoles+getWorkRoles"></a>
### workRoles.getWorkRoles(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Array.&lt;WorkRole&gt;](#WorkRole)</code>
GET

**Kind**: instance method of <code>[WorkRoles](#WorkRoles)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[Params](#Params)</code> | 

<a name="WorkRoles+createWorkRole"></a>
### workRoles.createWorkRole(agreementId, workRole) ⇒ <code>promise</code> &#124; <code>[WorkRole](#WorkRole)</code>
POST

**Kind**: instance method of <code>[WorkRoles](#WorkRoles)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| workRole | <code>[WorkRole](#WorkRole)</code> | 

<a name="WorkRoles+getWorkRolesCount"></a>
### workRoles.getWorkRolesCount(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
GET

**Kind**: instance method of <code>[WorkRoles](#WorkRoles)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[ParamsConditions](#ParamsConditions)</code> | 

<a name="WorkRoles+deleteWorkRoleById"></a>
### workRoles.deleteWorkRoleById(agreementId, workRoleId) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
DELETE

**Kind**: instance method of <code>[WorkRoles](#WorkRoles)</code>  

| Param |
| --- |
| agreementId | 
| workRoleId | 

<a name="WorkRoles+getWorkRoleById"></a>
### workRoles.getWorkRoleById(agreementId, workRoleId) ⇒ <code>promise</code> &#124; <code>[WorkRole](#WorkRole)</code>
GET

**Kind**: instance method of <code>[WorkRoles](#WorkRoles)</code>  

| Param |
| --- |
| agreementId | 
| workRoleId | 

<a name="WorkRoles+updateWorkRole"></a>
### workRoles.updateWorkRole(agreementId, workRoleId, operations) ⇒ <code>promise</code> &#124; <code>[WorkRole](#WorkRole)</code>
PATCH

**Kind**: instance method of <code>[WorkRoles](#WorkRoles)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| workRoleId |  | 
| operations | <code>[Operations](#Operations)</code> | 

<a name="WorkRoles+replaceWorkRole"></a>
### workRoles.replaceWorkRole(agreementId, workRoleId, workRole) ⇒ <code>promise</code> &#124; <code>[WorkRole](#WorkRole)</code>
PUT

**Kind**: instance method of <code>[WorkRoles](#WorkRoles)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| workRoleId |  | 
| workRole | <code>[WorkRole](#WorkRole)</code> | 

<a name="WorkTypeExclusions"></a>
## WorkTypeExclusions
**Kind**: global class  
**Inherits**: <code>[ConnectWise](#ConnectWise)</code>  

* [WorkTypeExclusions](#WorkTypeExclusions)
    * [new WorkTypeExclusions(options)](#new_WorkTypeExclusions_new)
    * [.getWorkTypeExclusions(agreementId, params)](#WorkTypeExclusions+getWorkTypeExclusions) ⇒ <code>promise</code> &#124; <code>[Array.&lt;WorkTypeExclusion&gt;](#WorkTypeExclusion)</code>
    * [.createWorkTypeExclusion(agreementId, workTypeExclusion)](#WorkTypeExclusions+createWorkTypeExclusion) ⇒ <code>promise</code> &#124; <code>[WorkTypeExclusion](#WorkTypeExclusion)</code>
    * [.getWorkTypeExclusionsCount(agreementId, params)](#WorkTypeExclusions+getWorkTypeExclusionsCount) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
    * [.deleteWorkTypeExclusionById(agreementId, workTypeExclusionId)](#WorkTypeExclusions+deleteWorkTypeExclusionById)

<a name="new_WorkTypeExclusions_new"></a>
### new WorkTypeExclusions(options)

| Param | Type |
| --- | --- |
| options | <code>[CWOptions](#CWOptions)</code> | 

<a name="WorkTypeExclusions+getWorkTypeExclusions"></a>
### workTypeExclusions.getWorkTypeExclusions(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Array.&lt;WorkTypeExclusion&gt;](#WorkTypeExclusion)</code>
GET

**Kind**: instance method of <code>[WorkTypeExclusions](#WorkTypeExclusions)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[Params](#Params)</code> | 

<a name="WorkTypeExclusions+createWorkTypeExclusion"></a>
### workTypeExclusions.createWorkTypeExclusion(agreementId, workTypeExclusion) ⇒ <code>promise</code> &#124; <code>[WorkTypeExclusion](#WorkTypeExclusion)</code>
POST

**Kind**: instance method of <code>[WorkTypeExclusions](#WorkTypeExclusions)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| workTypeExclusion | <code>[WorkTypeExclusion](#WorkTypeExclusion)</code> | 

<a name="WorkTypeExclusions+getWorkTypeExclusionsCount"></a>
### workTypeExclusions.getWorkTypeExclusionsCount(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
GET

**Kind**: instance method of <code>[WorkTypeExclusions](#WorkTypeExclusions)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[ParamsConditions](#ParamsConditions)</code> | 

<a name="WorkTypeExclusions+deleteWorkTypeExclusionById"></a>
### workTypeExclusions.deleteWorkTypeExclusionById(agreementId, workTypeExclusionId)
DELETE

**Kind**: instance method of <code>[WorkTypeExclusions](#WorkTypeExclusions)</code>  

| Param |
| --- |
| agreementId | 
| workTypeExclusionId | 

<a name="WorkTypes"></a>
## WorkTypes
**Kind**: global class  
**Inherits**: <code>[ConnectWise](#ConnectWise)</code>  

* [WorkTypes](#WorkTypes)
    * [new WorkTypes(options)](#new_WorkTypes_new)
    * [.getWorkTypes(agreementId, params)](#WorkTypes+getWorkTypes) ⇒ <code>promise</code> &#124; <code>[Array.&lt;WorkType&gt;](#WorkType)</code>
    * [.createWorkType(agreementId, workType)](#WorkTypes+createWorkType) ⇒ <code>promise</code> &#124; <code>[WorkType](#WorkType)</code>
    * [.getWorkTypesCount(agreementId, params)](#WorkTypes+getWorkTypesCount) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
    * [.deleteWorkTypeById(agreementId, workTypeId)](#WorkTypes+deleteWorkTypeById) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
    * [.getWorkTypeById(agreementId, workTypeId)](#WorkTypes+getWorkTypeById) ⇒ <code>promise</code> &#124; <code>[WorkType](#WorkType)</code>
    * [.updateWorkType(agreementId, workTypeId, operations)](#WorkTypes+updateWorkType) ⇒ <code>promise</code> &#124; <code>[WorkType](#WorkType)</code>
    * [.replaceWorkType(agreementId, workTypeId, workType)](#WorkTypes+replaceWorkType) ⇒ <code>promise</code> &#124; <code>[WorkType](#WorkType)</code>

<a name="new_WorkTypes_new"></a>
### new WorkTypes(options)

| Param | Type |
| --- | --- |
| options | <code>[CWOptions](#CWOptions)</code> | 

<a name="WorkTypes+getWorkTypes"></a>
### workTypes.getWorkTypes(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Array.&lt;WorkType&gt;](#WorkType)</code>
GET

**Kind**: instance method of <code>[WorkTypes](#WorkTypes)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[Params](#Params)</code> | 

<a name="WorkTypes+createWorkType"></a>
### workTypes.createWorkType(agreementId, workType) ⇒ <code>promise</code> &#124; <code>[WorkType](#WorkType)</code>
POST

**Kind**: instance method of <code>[WorkTypes](#WorkTypes)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| workType | <code>[WorkType](#WorkType)</code> | 

<a name="WorkTypes+getWorkTypesCount"></a>
### workTypes.getWorkTypesCount(agreementId, params) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
GET

**Kind**: instance method of <code>[WorkTypes](#WorkTypes)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| params | <code>[ParamsConditions](#ParamsConditions)</code> | 

<a name="WorkTypes+deleteWorkTypeById"></a>
### workTypes.deleteWorkTypeById(agreementId, workTypeId) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
DELETE

**Kind**: instance method of <code>[WorkTypes](#WorkTypes)</code>  

| Param |
| --- |
| agreementId | 
| workTypeId | 

<a name="WorkTypes+getWorkTypeById"></a>
### workTypes.getWorkTypeById(agreementId, workTypeId) ⇒ <code>promise</code> &#124; <code>[WorkType](#WorkType)</code>
GET

**Kind**: instance method of <code>[WorkTypes](#WorkTypes)</code>  

| Param |
| --- |
| agreementId | 
| workTypeId | 

<a name="WorkTypes+updateWorkType"></a>
### workTypes.updateWorkType(agreementId, workTypeId, operations) ⇒ <code>promise</code> &#124; <code>[WorkType](#WorkType)</code>
PATCH

**Kind**: instance method of <code>[WorkTypes](#WorkTypes)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| workTypeId |  | 
| operations | <code>[Operations](#Operations)</code> | 

<a name="WorkTypes+replaceWorkType"></a>
### workTypes.replaceWorkType(agreementId, workTypeId, workType) ⇒ <code>promise</code> &#124; <code>[WorkType](#WorkType)</code>
PUT

**Kind**: instance method of <code>[WorkTypes](#WorkTypes)</code>  

| Param | Type |
| --- | --- |
| agreementId |  | 
| workTypeId |  | 
| workType | <code>[WorkType](#WorkType)</code> | 

<a name="Boards"></a>
## Boards
**Kind**: global class  

* [Boards](#Boards)
    * [new Boards(options)](#new_Boards_new)
    * [.getBoards(params)](#Boards+getBoards) ⇒ <code>[Array.&lt;Board&gt;](#Board)</code> &#124; <code>promise</code>
    * [.createBoard(board)](#Boards+createBoard) ⇒ <code>[Array.&lt;Board&gt;](#Board)</code> &#124; <code>promise</code>
    * [.getBoardById(id)](#Boards+getBoardById) ⇒ <code>[Array.&lt;Board&gt;](#Board)</code> &#124; <code>promise</code>
    * [.getBoardsCount(params)](#Boards+getBoardsCount) ⇒ <code>[Count](#Count)</code> &#124; <code>promise</code>
    * [.updateBoard(id, ops)](#Boards+updateBoard) ⇒ <code>[Board](#Board)</code> &#124; <code>promise</code>
    * [.replaceBoard(id, board)](#Boards+replaceBoard) ⇒ <code>[Board](#Board)</code> &#124; <code>promise</code>

<a name="new_Boards_new"></a>
### new Boards(options)

| Param | Type |
| --- | --- |
| options | <code>object</code> | 
| options.companyId | <code>string</code> | 
| options.publicKey | <code>string</code> | 
| options.privateKey | <code>string</code> | 
| options.companyUrl | <code>string</code> | 

<a name="Boards+getBoards"></a>
### boards.getBoards(params) ⇒ <code>[Array.&lt;Board&gt;](#Board)</code> &#124; <code>promise</code>
GET

**Kind**: instance method of <code>[Boards](#Boards)</code>  

| Param | Type |
| --- | --- |
| params | <code>[Params](#Params)</code> | 

<a name="Boards+createBoard"></a>
### boards.createBoard(board) ⇒ <code>[Array.&lt;Board&gt;](#Board)</code> &#124; <code>promise</code>
POST

**Kind**: instance method of <code>[Boards](#Boards)</code>  

| Param | Type |
| --- | --- |
| board | <code>[Board](#Board)</code> | 

<a name="Boards+getBoardById"></a>
### boards.getBoardById(id) ⇒ <code>[Array.&lt;Board&gt;](#Board)</code> &#124; <code>promise</code>
GET

**Kind**: instance method of <code>[Boards](#Boards)</code>  

| Param |
| --- |
| id | 

<a name="Boards+getBoardsCount"></a>
### boards.getBoardsCount(params) ⇒ <code>[Count](#Count)</code> &#124; <code>promise</code>
GET

**Kind**: instance method of <code>[Boards](#Boards)</code>  

| Param | Type |
| --- | --- |
| params | <code>[ParamsConditions](#ParamsConditions)</code> | 

<a name="Boards+updateBoard"></a>
### boards.updateBoard(id, ops) ⇒ <code>[Board](#Board)</code> &#124; <code>promise</code>
PATCH

**Kind**: instance method of <code>[Boards](#Boards)</code>  

| Param | Type |
| --- | --- |
| id |  | 
| ops | <code>[Operations](#Operations)</code> | 

<a name="Boards+replaceBoard"></a>
### boards.replaceBoard(id, board) ⇒ <code>[Board](#Board)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[Boards](#Boards)</code>  

| Param | Type |
| --- | --- |
| id |  | 
| board | <code>[Board](#Board)</code> | 

<a name="ServiceDeskAPI"></a>
## ServiceDeskAPI
**Kind**: global class  
<a name="new_ServiceDeskAPI_new"></a>
### new ServiceDeskAPI(options)

| Param |
| --- |
| options | 

<a name="ServiceNotes"></a>
## ServiceNotes
**Kind**: global class  

* [ServiceNotes](#ServiceNotes)
    * [new ServiceNotes(options)](#new_ServiceNotes_new)
    * [.getServiceNotes(ticketId, params)](#ServiceNotes+getServiceNotes) ⇒ <code>[Array.&lt;ServiceNote&gt;](#ServiceNote)</code> &#124; <code>promise</code>
    * [.createServiceNote(ticketId, note)](#ServiceNotes+createServiceNote) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
    * [.getServiceNotesCount(ticketId, params)](#ServiceNotes+getServiceNotesCount) ⇒ <code>[Count](#Count)</code> &#124; <code>promise</code>
    * [.deleteServiceNoteById(ticketId, noteId)](#ServiceNotes+deleteServiceNoteById) ⇒ <code>[DeleteResponse](#DeleteResponse)</code> &#124; <code>promise</code>
    * [.getServiceNoteById(ticketId, noteId)](#ServiceNotes+getServiceNoteById) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
    * [.updateServiceNote(ticketId, noteId, note)](#ServiceNotes+updateServiceNote) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
    * [.replaceServiceNote(ticketId, noteId, note)](#ServiceNotes+replaceServiceNote) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
    * [.createServiceNoteInternal(ticketId, text)](#ServiceNotes+createServiceNoteInternal) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
    * [.createServiceNoteDetail(ticketId, text)](#ServiceNotes+createServiceNoteDetail) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
    * [.createServiceNoteResolution(ticketId, text)](#ServiceNotes+createServiceNoteResolution) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
    * [.createServiceNoteDetailAndResolution(ticketId, text)](#ServiceNotes+createServiceNoteDetailAndResolution) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>

<a name="new_ServiceNotes_new"></a>
### new ServiceNotes(options)

| Param | Type |
| --- | --- |
| options | <code>object</code> | 
| options.companyId | <code>string</code> | 
| options.publicKey | <code>string</code> | 
| options.privateKey | <code>string</code> | 
| options.companyUrl | <code>string</code> | 

<a name="ServiceNotes+getServiceNotes"></a>
### serviceNotes.getServiceNotes(ticketId, params) ⇒ <code>[Array.&lt;ServiceNote&gt;](#ServiceNote)</code> &#124; <code>promise</code>
GET

**Kind**: instance method of <code>[ServiceNotes](#ServiceNotes)</code>  

| Param | Type |
| --- | --- |
| ticketId |  | 
| params | <code>[Params](#Params)</code> | 

<a name="ServiceNotes+createServiceNote"></a>
### serviceNotes.createServiceNote(ticketId, note) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
POST

**Kind**: instance method of <code>[ServiceNotes](#ServiceNotes)</code>  

| Param | Type |
| --- | --- |
| ticketId | <code>string</code> &#124; <code>number</code> | 
| note | <code>[ServiceNote](#ServiceNote)</code> | 

<a name="ServiceNotes+getServiceNotesCount"></a>
### serviceNotes.getServiceNotesCount(ticketId, params) ⇒ <code>[Count](#Count)</code> &#124; <code>promise</code>
GET

**Kind**: instance method of <code>[ServiceNotes](#ServiceNotes)</code>  

| Param | Type |
| --- | --- |
| ticketId |  | 
| params | <code>[ParamsConditions](#ParamsConditions)</code> | 

<a name="ServiceNotes+deleteServiceNoteById"></a>
### serviceNotes.deleteServiceNoteById(ticketId, noteId) ⇒ <code>[DeleteResponse](#DeleteResponse)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[ServiceNotes](#ServiceNotes)</code>  

| Param |
| --- |
| ticketId | 
| noteId | 

<a name="ServiceNotes+getServiceNoteById"></a>
### serviceNotes.getServiceNoteById(ticketId, noteId) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[ServiceNotes](#ServiceNotes)</code>  

| Param |
| --- |
| ticketId | 
| noteId | 

<a name="ServiceNotes+updateServiceNote"></a>
### serviceNotes.updateServiceNote(ticketId, noteId, note) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[ServiceNotes](#ServiceNotes)</code>  

| Param | Type |
| --- | --- |
| ticketId |  | 
| noteId |  | 
| note | <code>[ServiceNote](#ServiceNote)</code> | 

<a name="ServiceNotes+replaceServiceNote"></a>
### serviceNotes.replaceServiceNote(ticketId, noteId, note) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[ServiceNotes](#ServiceNotes)</code>  

| Param | Type |
| --- | --- |
| ticketId |  | 
| noteId |  | 
| note | <code>[ServiceNote](#ServiceNote)</code> | 

<a name="ServiceNotes+createServiceNoteInternal"></a>
### serviceNotes.createServiceNoteInternal(ticketId, text) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[ServiceNotes](#ServiceNotes)</code>  

| Param | Type |
| --- | --- |
| ticketId | <code>string</code> &#124; <code>number</code> | 
| text | <code>string</code> | 

<a name="ServiceNotes+createServiceNoteDetail"></a>
### serviceNotes.createServiceNoteDetail(ticketId, text) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[ServiceNotes](#ServiceNotes)</code>  

| Param | Type |
| --- | --- |
| ticketId | <code>string</code> &#124; <code>number</code> | 
| text | <code>string</code> | 

<a name="ServiceNotes+createServiceNoteResolution"></a>
### serviceNotes.createServiceNoteResolution(ticketId, text) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[ServiceNotes](#ServiceNotes)</code>  

| Param | Type |
| --- | --- |
| ticketId | <code>string</code> &#124; <code>number</code> | 
| text | <code>string</code> | 

<a name="ServiceNotes+createServiceNoteDetailAndResolution"></a>
### serviceNotes.createServiceNoteDetailAndResolution(ticketId, text) ⇒ <code>[ServiceNote](#ServiceNote)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[ServiceNotes](#ServiceNotes)</code>  

| Param | Type |
| --- | --- |
| ticketId | <code>string</code> &#124; <code>number</code> | 
| text | <code>string</code> | 

<a name="Statuses"></a>
## Statuses
**Kind**: global class  
**Inherits**: <code>[ConnectWise](#ConnectWise)</code>  

* [Statuses](#Statuses)
    * [new Statuses(options)](#new_Statuses_new)
    * [.getStatusesByBoardId(boardId, params)](#Statuses+getStatusesByBoardId) ⇒ <code>[Array.&lt;Status&gt;](#Status)</code> &#124; <code>promise</code>
    * [.createStatuses(boardId, status)](#Statuses+createStatuses) ⇒ <code>[Status](#Status)</code> &#124; <code>promise</code>
    * [.getStatusesCount(boardId)](#Statuses+getStatusesCount) ⇒ <code>[Count](#Count)</code> &#124; <code>promise</code>
    * [.deleteStatusById(boardId, statusId)](#Statuses+deleteStatusById) ⇒ <code>[DeleteResponse](#DeleteResponse)</code> &#124; <code>promise</code>
    * [.getStatusById(boardId, statusId)](#Statuses+getStatusById) ⇒ <code>[Status](#Status)</code> &#124; <code>promise</code>
    * [.updateStatus(boardId, statusId, operations)](#Statuses+updateStatus) ⇒ <code>[Status](#Status)</code> &#124; <code>promise</code>
    * [.replaceStatuses(boardId, statusId, status)](#Statuses+replaceStatuses) ⇒ <code>[Status](#Status)</code> &#124; <code>promise</code>

<a name="new_Statuses_new"></a>
### new Statuses(options)

| Param | Type |
| --- | --- |
| options | <code>[CWOptions](#CWOptions)</code> | 

<a name="Statuses+getStatusesByBoardId"></a>
### statuses.getStatusesByBoardId(boardId, params) ⇒ <code>[Array.&lt;Status&gt;](#Status)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[Statuses](#Statuses)</code>  

| Param | Type |
| --- | --- |
| boardId |  | 
| params | <code>[Params](#Params)</code> | 

<a name="Statuses+createStatuses"></a>
### statuses.createStatuses(boardId, status) ⇒ <code>[Status](#Status)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[Statuses](#Statuses)</code>  

| Param | Type |
| --- | --- |
| boardId |  | 
| status | <code>[Status](#Status)</code> | 

<a name="Statuses+getStatusesCount"></a>
### statuses.getStatusesCount(boardId) ⇒ <code>[Count](#Count)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[Statuses](#Statuses)</code>  

| Param |
| --- |
| boardId | 

<a name="Statuses+deleteStatusById"></a>
### statuses.deleteStatusById(boardId, statusId) ⇒ <code>[DeleteResponse](#DeleteResponse)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[Statuses](#Statuses)</code>  

| Param |
| --- |
| boardId | 
| statusId | 

<a name="Statuses+getStatusById"></a>
### statuses.getStatusById(boardId, statusId) ⇒ <code>[Status](#Status)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[Statuses](#Statuses)</code>  

| Param |
| --- |
| boardId | 
| statusId | 

<a name="Statuses+updateStatus"></a>
### statuses.updateStatus(boardId, statusId, operations) ⇒ <code>[Status](#Status)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[Statuses](#Statuses)</code>  

| Param | Type |
| --- | --- |
| boardId |  | 
| statusId |  | 
| operations | <code>[Operations](#Operations)</code> | 

<a name="Statuses+replaceStatuses"></a>
### statuses.replaceStatuses(boardId, statusId, status) ⇒ <code>[Status](#Status)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[Statuses](#Statuses)</code>  

| Param | Type |
| --- | --- |
| boardId |  | 
| statusId |  | 
| status | <code>[Status](#Status)</code> | 

<a name="Tickets"></a>
## Tickets
**Kind**: global class  

* [Tickets](#Tickets)
    * [new Tickets(options)](#new_Tickets_new)
    * [.getTickets(params)](#Tickets+getTickets) ⇒ <code>[Array.&lt;Ticket&gt;](#Ticket)</code> &#124; <code>promise</code>
    * [.getTicketById(id)](#Tickets+getTicketById) ⇒ <code>[Ticket](#Ticket)</code> &#124; <code>promise</code>
    * [.createTicket(ticket)](#Tickets+createTicket) ⇒ <code>[Ticket](#Ticket)</code> &#124; <code>promise</code>
    * [.updateTicket(id, operations)](#Tickets+updateTicket) ⇒ <code>[Ticket](#Ticket)</code> &#124; <code>promise</code>
    * [.getTicketsCount(params)](#Tickets+getTicketsCount) ⇒ <code>[Count](#Count)</code> &#124; <code>promise</code>
    * [.deleteTicketsById(id)](#Tickets+deleteTicketsById) ⇒ <code>promise</code>
    * [.replaceTicket(id, ticket)](#Tickets+replaceTicket) ⇒ <code>[Ticket](#Ticket)</code> &#124; <code>promise</code>
    * [.getTicketActivities(id, [params])](#Tickets+getTicketActivities) ⇒ <code>\*</code> &#124; <code>promise</code>
    * [.getTicketActivitiesCount(id)](#Tickets+getTicketActivitiesCount) ⇒ <code>[Count](#Count)</code> &#124; <code>promise</code>
    * [.getTicketTimeEntries(id, params)](#Tickets+getTicketTimeEntries) ⇒ <code>[Array.&lt;TimeEntry&gt;](#TimeEntry)</code> &#124; <code>promise</code>
    * [.getTicketTimeEntriesCount(id)](#Tickets+getTicketTimeEntriesCount) ⇒ <code>[Count](#Count)</code> &#124; <code>promise</code>
    * [.createConfigurationAssociation(id, configId)](#Tickets+createConfigurationAssociation) ⇒ <code>\*</code> &#124; <code>promise</code> &#124; <code>[ConfigurationHref](#ConfigurationHref)</code>
    * [.getTicketConfigurations(id)](#Tickets+getTicketConfigurations) ⇒ <code>promise</code> &#124; <code>[Array.&lt;ConfigurationHref&gt;](#ConfigurationHref)</code>
    * [.getTicketConfigurationsCount(id)](#Tickets+getTicketConfigurationsCount) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
    * [.deleteConfigurationAssociation(id, configId)](#Tickets+deleteConfigurationAssociation) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
    * [.getConfigurationAssociation(id, configId)](#Tickets+getConfigurationAssociation) ⇒ <code>promise</code> &#124; <code>[ConfigurationHref](#ConfigurationHref)</code>
    * [.getTicketScheduleEntries(id, [params])](#Tickets+getTicketScheduleEntries) ⇒ <code>promise</code> &#124; <code>[Array.&lt;ScheduleEntryHref&gt;](#ScheduleEntryHref)</code>
    * [.getTicketScheduleEntriesCount(id)](#Tickets+getTicketScheduleEntriesCount) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
    * [.getTicketDocuments(id, [params])](#Tickets+getTicketDocuments) ⇒ <code>promise</code> &#124; <code>[Array.&lt;DocumentHref&gt;](#DocumentHref)</code>
    * [.getTicketDocumentsCount(id)](#Tickets+getTicketDocumentsCount) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
    * [.getTicketProducts(id)](#Tickets+getTicketProducts) ⇒ <code>promise</code> &#124; <code>[Array.&lt;ProductHref&gt;](#ProductHref)</code>
    * [.getTicketProductsCount(id)](#Tickets+getTicketProductsCount) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
    * [.updateTicketStatusByName(id, status)](#Tickets+updateTicketStatusByName) ⇒ <code>[Array.&lt;Ticket&gt;](#Ticket)</code> &#124; <code>promise</code>
    * [.updateTicketPriority(id, priority)](#Tickets+updateTicketPriority) ⇒ <code>promise</code> &#124; <code>[Ticket](#Ticket)</code>
    * [.updateTicketServiceType(id, serviceType)](#Tickets+updateTicketServiceType) ⇒ <code>promise</code> &#124; <code>[Ticket](#Ticket)</code>
    * [.updateTicketServiceSubType(id, serviceSubType)](#Tickets+updateTicketServiceSubType) ⇒ <code>promise</code> &#124; <code>[Ticket](#Ticket)</code>
    * [.updateTicketTypeSubTypeItem(id, type, subtype, item)](#Tickets+updateTicketTypeSubTypeItem) ⇒ <code>promise</code> &#124; <code>[Ticket](#Ticket)</code>
    * [.updateTicketServiceItem(id, serviceItem)](#Tickets+updateTicketServiceItem) ⇒ <code>promise</code> &#124; <code>[Ticket](#Ticket)</code>

<a name="new_Tickets_new"></a>
### new Tickets(options)

| Param | Type |
| --- | --- |
| options | <code>[CWOptions](#CWOptions)</code> | 

<a name="Tickets+getTickets"></a>
### tickets.getTickets(params) ⇒ <code>[Array.&lt;Ticket&gt;](#Ticket)</code> &#124; <code>promise</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type |
| --- | --- |
| params | <code>[Params](#Params)</code> | 

<a name="Tickets+getTicketById"></a>
### tickets.getTicketById(id) ⇒ <code>[Ticket](#Ticket)</code> &#124; <code>promise</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>string</code> &#124; <code>number</code> | ticketNbr |

<a name="Tickets+createTicket"></a>
### tickets.createTicket(ticket) ⇒ <code>[Ticket](#Ticket)</code> &#124; <code>promise</code>
POST

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  
**Returns**: <code>[Ticket](#Ticket)</code> &#124; <code>promise</code> - The created ticket, or errors if any occured  

| Param | Type | Description |
| --- | --- | --- |
| ticket | <code>object</code> &#124; <code>[Ticket](#Ticket)</code> | the new ticket data |
| ticket.board | <code>object</code> |  |
| ticket.board.name | <code>string</code> |  |
| ticket.company | <code>object</code> |  |
| ticket.company.identifier | <code>string</code> | The CompanyID in ConnectWise |
| ticket.summary | <code>string</code> |  |
| [ticket.initialDescription] | <code>string</code> |  |

<a name="Tickets+updateTicket"></a>
### tickets.updateTicket(id, operations) ⇒ <code>[Ticket](#Ticket)</code> &#124; <code>promise</code>
PATCH

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  
**Returns**: <code>[Ticket](#Ticket)</code> &#124; <code>promise</code> - The updated ticket  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| operations | <code>[Array.&lt;Operations&gt;](#Operations)</code> |  |
| operations.op | <code>string</code> | the operation to perform, possible values: ['replace', ?] |
| operations.path | <code>string</code> |  |
| operations.value | <code>string</code> &#124; <code>number</code> |  |

<a name="Tickets+getTicketsCount"></a>
### tickets.getTicketsCount(params) ⇒ <code>[Count](#Count)</code> &#124; <code>promise</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  
**Returns**: <code>[Count](#Count)</code> &#124; <code>promise</code> - The number of tickets matching the conditions  

| Param | Type | Description |
| --- | --- | --- |
| params | <code>[ParamsConditions](#ParamsConditions)</code> |  |
| [params.conditions] | <code>string</code> | Conditions string, e.g. 'Summary like "%blah%" AND board/name = "Service Board"' |

<a name="Tickets+deleteTicketsById"></a>
### tickets.deleteTicketsById(id) ⇒ <code>promise</code>
DELETE

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type |
| --- | --- |
| id | <code>string</code> &#124; <code>number</code> | 

<a name="Tickets+replaceTicket"></a>
### tickets.replaceTicket(id, ticket) ⇒ <code>[Ticket](#Ticket)</code> &#124; <code>promise</code>
PUT

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type |
| --- | --- |
| id |  | 
| ticket | <code>[Ticket](#Ticket)</code> | 

<a name="Tickets+getTicketActivities"></a>
### tickets.getTicketActivities(id, [params]) ⇒ <code>\*</code> &#124; <code>promise</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type |
| --- | --- |
| id |  | 
| [params] | <code>[Params](#Params)</code> | 

<a name="Tickets+getTicketActivitiesCount"></a>
### tickets.getTicketActivitiesCount(id) ⇒ <code>[Count](#Count)</code> &#124; <code>promise</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  
**Returns**: <code>[Count](#Count)</code> &#124; <code>promise</code> - The number of activities associated with ticket number id  

| Param | Type |
| --- | --- |
| id | <code>number</code> &#124; <code>string</code> | 

<a name="Tickets+getTicketTimeEntries"></a>
### tickets.getTicketTimeEntries(id, params) ⇒ <code>[Array.&lt;TimeEntry&gt;](#TimeEntry)</code> &#124; <code>promise</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type |
| --- | --- |
| id | <code>number</code> &#124; <code>string</code> | 
| params | <code>[Params](#Params)</code> | 

<a name="Tickets+getTicketTimeEntriesCount"></a>
### tickets.getTicketTimeEntriesCount(id) ⇒ <code>[Count](#Count)</code> &#124; <code>promise</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  
**Returns**: <code>[Count](#Count)</code> &#124; <code>promise</code> - The count of time entries attached to ticket id  

| Param | Type |
| --- | --- |
| id | <code>number</code> &#124; <code>string</code> | 

<a name="Tickets+createConfigurationAssociation"></a>
### tickets.createConfigurationAssociation(id, configId) ⇒ <code>\*</code> &#124; <code>promise</code> &#124; <code>[ConfigurationHref](#ConfigurationHref)</code>
POST

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id | <code>number</code> &#124; <code>string</code> | ticketNbr |
| configId | <code>number</code> &#124; <code>string</code> |  |

<a name="Tickets+getTicketConfigurations"></a>
### tickets.getTicketConfigurations(id) ⇒ <code>promise</code> &#124; <code>[Array.&lt;ConfigurationHref&gt;](#ConfigurationHref)</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Description |
| --- | --- |
| id | ticketNbr |

<a name="Tickets+getTicketConfigurationsCount"></a>
### tickets.getTicketConfigurationsCount(id) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Description |
| --- | --- |
| id | ticketNbr |

<a name="Tickets+deleteConfigurationAssociation"></a>
### tickets.deleteConfigurationAssociation(id, configId) ⇒ <code>promise</code> &#124; <code>[DeleteResponse](#DeleteResponse)</code>
DELETE

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  
**Throws**:

- <code>[ErrorResponse](#ErrorResponse)</code> 


| Param |
| --- |
| id | 
| configId | 

<a name="Tickets+getConfigurationAssociation"></a>
### tickets.getConfigurationAssociation(id, configId) ⇒ <code>promise</code> &#124; <code>[ConfigurationHref](#ConfigurationHref)</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param |
| --- |
| id | 
| configId | 

<a name="Tickets+getTicketScheduleEntries"></a>
### tickets.getTicketScheduleEntries(id, [params]) ⇒ <code>promise</code> &#124; <code>[Array.&lt;ScheduleEntryHref&gt;](#ScheduleEntryHref)</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type |
| --- | --- |
| id | <code>string</code> &#124; <code>number</code> | 
| [params] | <code>[ParamsPage](#ParamsPage)</code> | 

<a name="Tickets+getTicketScheduleEntriesCount"></a>
### tickets.getTicketScheduleEntriesCount(id) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param |
| --- |
| id | 

<a name="Tickets+getTicketDocuments"></a>
### tickets.getTicketDocuments(id, [params]) ⇒ <code>promise</code> &#124; <code>[Array.&lt;DocumentHref&gt;](#DocumentHref)</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type |
| --- | --- |
| id | <code>string</code> &#124; <code>number</code> | 
| [params] | <code>[ParamsPage](#ParamsPage)</code> | 

<a name="Tickets+getTicketDocumentsCount"></a>
### tickets.getTicketDocumentsCount(id) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param |
| --- |
| id | 

<a name="Tickets+getTicketProducts"></a>
### tickets.getTicketProducts(id) ⇒ <code>promise</code> &#124; <code>[Array.&lt;ProductHref&gt;](#ProductHref)</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param |
| --- |
| id | 

<a name="Tickets+getTicketProductsCount"></a>
### tickets.getTicketProductsCount(id) ⇒ <code>promise</code> &#124; <code>[Count](#Count)</code>
GET

**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param |
| --- |
| id | 

<a name="Tickets+updateTicketStatusByName"></a>
### tickets.updateTicketStatusByName(id, status) ⇒ <code>[Array.&lt;Ticket&gt;](#Ticket)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type |
| --- | --- |
| id | <code>string</code> &#124; <code>number</code> | 
| status | <code>string</code> | 

<a name="Tickets+updateTicketPriority"></a>
### tickets.updateTicketPriority(id, priority) ⇒ <code>promise</code> &#124; <code>[Ticket](#Ticket)</code>
**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type | Description |
| --- | --- | --- |
| id |  |  |
| priority | <code>string</code> | do a %like% match on priority |

<a name="Tickets+updateTicketServiceType"></a>
### tickets.updateTicketServiceType(id, serviceType) ⇒ <code>promise</code> &#124; <code>[Ticket](#Ticket)</code>
**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type |
| --- | --- |
| id |  | 
| serviceType | <code>string</code> | 

<a name="Tickets+updateTicketServiceSubType"></a>
### tickets.updateTicketServiceSubType(id, serviceSubType) ⇒ <code>promise</code> &#124; <code>[Ticket](#Ticket)</code>
**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type |
| --- | --- |
| id |  | 
| serviceSubType | <code>string</code> | 

<a name="Tickets+updateTicketTypeSubTypeItem"></a>
### tickets.updateTicketTypeSubTypeItem(id, type, subtype, item) ⇒ <code>promise</code> &#124; <code>[Ticket](#Ticket)</code>
**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type |
| --- | --- |
| id |  | 
| type | <code>string</code> | 
| subtype | <code>string</code> | 
| item | <code>string</code> | 

<a name="Tickets+updateTicketServiceItem"></a>
### tickets.updateTicketServiceItem(id, serviceItem) ⇒ <code>promise</code> &#124; <code>[Ticket](#Ticket)</code>
**Kind**: instance method of <code>[Tickets](#Tickets)</code>  

| Param | Type |
| --- | --- |
| id |  | 
| serviceItem | <code>string</code> | 

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
    * [.getTimeEntries(params)](#TimeEntries+getTimeEntries) ⇒ <code>[TimeEntry](#TimeEntry)</code> &#124; <code>promise</code>
    * [.createTimeEntry(timeEntry)](#TimeEntries+createTimeEntry) ⇒ <code>[TimeEntry](#TimeEntry)</code> &#124; <code>promise</code>
    * [.getTimeEntriesCount(params)](#TimeEntries+getTimeEntriesCount) ⇒ <code>[Count](#Count)</code> &#124; <code>promise</code>
    * [.deleteTimeEntryById(id)](#TimeEntries+deleteTimeEntryById) ⇒ <code>promise</code>
    * [.getTimeEntryById(id)](#TimeEntries+getTimeEntryById) ⇒ <code>[TimeEntry](#TimeEntry)</code> &#124; <code>promise</code>
    * [.updateTimeEntry(id, operations)](#TimeEntries+updateTimeEntry) ⇒ <code>[TimeEntry](#TimeEntry)</code> &#124; <code>promise</code>
    * [.replaceTimeEntry(id, timeEntry)](#TimeEntries+replaceTimeEntry)

<a name="new_TimeEntries_new"></a>
### new TimeEntries(options)

| Param |
| --- |
| options | 

<a name="TimeEntries+getTimeEntries"></a>
### timeEntries.getTimeEntries(params) ⇒ <code>[TimeEntry](#TimeEntry)</code> &#124; <code>promise</code>
GET

**Kind**: instance method of <code>[TimeEntries](#TimeEntries)</code>  

| Param | Type |
| --- | --- |
| params | <code>[Params](#Params)</code> | 

<a name="TimeEntries+createTimeEntry"></a>
### timeEntries.createTimeEntry(timeEntry) ⇒ <code>[TimeEntry](#TimeEntry)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[TimeEntries](#TimeEntries)</code>  

| Param | Type |
| --- | --- |
| timeEntry | <code>[TimeEntry](#TimeEntry)</code> | 

<a name="TimeEntries+getTimeEntriesCount"></a>
### timeEntries.getTimeEntriesCount(params) ⇒ <code>[Count](#Count)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[TimeEntries](#TimeEntries)</code>  

| Param | Type |
| --- | --- |
| params | <code>[ParamsConditions](#ParamsConditions)</code> | 

<a name="TimeEntries+deleteTimeEntryById"></a>
### timeEntries.deleteTimeEntryById(id) ⇒ <code>promise</code>
**Kind**: instance method of <code>[TimeEntries](#TimeEntries)</code>  

| Param | Type |
| --- | --- |
| id | <code>number</code> | 

<a name="TimeEntries+getTimeEntryById"></a>
### timeEntries.getTimeEntryById(id) ⇒ <code>[TimeEntry](#TimeEntry)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[TimeEntries](#TimeEntries)</code>  

| Param |
| --- |
| id | 

<a name="TimeEntries+updateTimeEntry"></a>
### timeEntries.updateTimeEntry(id, operations) ⇒ <code>[TimeEntry](#TimeEntry)</code> &#124; <code>promise</code>
**Kind**: instance method of <code>[TimeEntries](#TimeEntries)</code>  

| Param | Type |
| --- | --- |
| id |  | 
| operations | <code>[Operations](#Operations)</code> | 

<a name="TimeEntries+replaceTimeEntry"></a>
### timeEntries.replaceTimeEntry(id, timeEntry)
**Kind**: instance method of <code>[TimeEntries](#TimeEntries)</code>  

| Param | Type |
| --- | --- |
| id |  | 
| timeEntry | <code>[TimeEntry](#TimeEntry)</code> &#124; <code>promise</code> | 

<a name="FinanceAPI"></a>
## FinanceAPI(options) ⇒ <code>[FinanceAPI](#FinanceAPI)</code>
**Kind**: global function  

| Param | Type |
| --- | --- |
| options | <code>[CWOptions](#CWOptions)</code> | 

<a name="CWOptions"></a>
## CWOptions : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name |
| --- |
| companyId | 
| publicKey | 
| privateKey | 
| companyUrl | 

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

| Name | Type |
| --- | --- |
| conditions | <code>string</code> | 
| orderBy | <code>string</code> | 
| page | <code>string</code> &#124; <code>number</code> | 
| pageSize | <code>string</code> &#124; <code>number</code> | 

<a name="ParamsPage"></a>
## ParamsPage : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| page | <code>string</code> &#124; <code>number</code> | 
| pageSize | <code>string</code> &#124; <code>number</code> | 

<a name="ParamsConditions"></a>
## ParamsConditions : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| conditions | <code>string</code> | 

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
## Operations : <code>Array.&lt;object&gt;</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| op | <code>string</code> | ['replace','remove'] |
| path | <code>string</code> | the relative path to the variable to be updated, e.g. status/id |
| value | <code>string</code> |  |

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

<a name="ErrorResponse"></a>
## ErrorResponse : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| code | <code>string</code> | 
| message | <code>string</code> | 
| errors | <code>Array.&lt;object&gt;</code> | 

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
| product | <code>[ProductHref](#ProductHref)</code> |  |
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
| company | <code>[CompanyHref](#CompanyHref)</code> |  |
| contact | <code>[ContactHref](#ContactHref)</code> |  |
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
| opportunity | <code>[OpportunityHref](#OpportunityHref)</code> |  |
| parentAgreementId | <code>number</code> |  |
| periodType | <code>string</code> | ['Current', 'Future', 'Both', 'Undefined'] |
| projectTypeId | <code>number</code> |  |
| prorateFirstBill | <code>number</code> |  |
| restrictDepartmentFlag | <code>boolean</code> |  |
| restrictDownPayment | <code>boolean</code> |  |
| restrictLocationFlag | <code>boolean</code> |  |
| slaId | <code>number</code> |  |
| startDate | <code>string</code> |  |
| subContractCompany | <code>[CompanyHref](#CompanyHref)</code> |  |
| subContractContact | <code>[ContactHref](#ContactHref)</code> |  |
| taxCodeId | <code>number</code> |  |
| taxable | <code>boolean</code> |  |
| topComment | <code>boolean</code> |  |
| type | <code>[AgreementTypeHref](#AgreementTypeHref)</code> |  |
| workOrder | <code>string</code> |  |
| workRole | <code>[WorkRoleHref](#WorkRoleHref)</code> |  |
| workType | <code>[WorkTypeHref](#WorkTypeHref)</code> |  |

<a name="AgreementSite"></a>
## AgreementSite : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| company | <code>[CompanyHref](#CompanyHref)</code> | 
| site | <code>[SiteHref](#SiteHref)</code> | 
| agreementId | <code>number</code> | 
| _info | <code>object</code> | 

<a name="BoardDefault"></a>
## BoardDefault : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| board | <code>[BoardHref](#BoardHref)</code> | 
| serviceType | <code>[ServiceTypeHref](#ServiceTypeHref)</code> | 
| defaultFlag | <code>boolean</code> | 
| agreementId | <code>number</code> | 
| _info | <code>object</code> | 

<a name="FinanceAPI"></a>
## FinanceAPI : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| Additions | <code>[Additions](#Additions)</code> | 
| Adjustments | <code>[Adjustments](#Adjustments)</code> | 
| Agreements | <code>[Agreements](#Agreements)</code> | 
| AgreementSites | <code>[AgreementSites](#AgreementSites)</code> | 
| BoardDefaults | <code>[BoardDefaults](#BoardDefaults)</code> | 
| WorkRoles | <code>[WorkRoles](#WorkRoles)</code> | 
| WorkTypeExclusions | <code>[WorkTypeExclusions](#WorkTypeExclusions)</code> | 
| WorkTypes | <code>[WorkTypes](#WorkTypes)</code> | 

<a name="WorkRole"></a>
## WorkRole : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| workRole | <code>[WorkRoleHref](#WorkRoleHref)</code> |  |
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
| workType | <code>[WorkTypeHref](#WorkTypeHref)</code> | 
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
| workType | <code>[WorkTypeHref](#WorkTypeHref)</code> |  |
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
| site | <code>[SiteHref](#SiteHref)</code> |  |
| effectiveDate | <code>string</code> |  |
| endingDate | <code>string</code> |  |
| agreementId | <code>number</code> |  |
| company | <code>[CompanyHref](#CompanyHref)</code> |  |
| _info | <code>object</code> |  |
| _info.lastUpdated | <code>string</code> |  |
| _info.updatedBy | <code>string</code> |  |

<a name="Board"></a>
## Board : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| id | <code>number</code> | 
| name | <code>string</code> | 
| locationId | <code>number</code> | 
| businessUnitId | <code>number</code> | 
| inactive | <code>boolean</code> | 
| signOffTemplateId | <code>number</code> | 
| sendToContact | <code>boolean</code> | 
| contactTemplateId | <code>number</code> | 
| sendToResource | <code>boolean</code> | 
| resourceTemplateId | <code>number</code> | 
| _info | <code>object</code> | 

<a name="ServiceDeskAPI"></a>
## ServiceDeskAPI : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type |
| --- | --- |
| Tickets | <code>[Tickets](#Tickets)</code> | 
| Boards | <code>[Boards](#Boards)</code> | 
| Statuses | <code>[Statuses](#Statuses)</code> | 
| ServiceNotes | <code>[ServiceNotes](#ServiceNotes)</code> | 

<a name="new_ServiceDeskAPI_new"></a>
### new ServiceDeskAPI(options)

| Param |
| --- |
| options | 

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
| member | <code>[MemberHref](#MemberHref)</code> | null if not applicable |
| contact | <code>[ContactHref](#ContactHref)</code> | null if not applicable |
| customerUpdatedFlag | <code>boolean</code> |  |
| processNotifications | <code>boolean</code> |  |
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
| inactive | <code>boolean</code> |  |
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
| agreement | <code>[AgreementHref](#AgreementHref)</code> |  |
| allowAllClientsPortalView | <code>boolean</code> |  |
| approved | <code>boolean</code> |  |
| automaticEmailCc |  |  |
| automaticEmailCcFlag |  |  |
| automaticEmailContactFlag |  |  |
| automaticEmailResourceFlag |  |  |
| board | <code>[BoardHref](#BoardHref)</code> |  |
| budgetHours | <code>number</code> |  |
| city | <code>string</code> |  |
| closedBy |  |  |
| closedDate |  |  |
| closedFlag |  |  |
| company | <code>[CompanyHref](#CompanyHref)</code> |  |
| contact | <code>[ContactHref](#ContactHref)</code> |  |
| contactEmailAddress | <code>string</code> |  |
| contactEmailLookup |  |  |
| contactPhoneExtension |  |  |
| contactPhoneNumber | <code>string</code> |  |
| country | <code>[CountryHref](#CountryHref)</code> |  |
| customerUpdatedFlag | <code>boolean</code> |  |
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
| item | <code>[ItemHref](#ItemHref)</code> |  |
| knowledgeBaseCategoryId |  |  |
| knowledgeBaseLinkId |  |  |
| knowledgeBaseLinkType |  |  |
| knowledgeBaseSubCategoryId |  |  |
| opportunity |  |  |
| parentTicketId |  |  |
| phase |  |  |
| poNumber |  |  |
| priority | <code>[PriorityHref](#PriorityHref)</code> |  |
| processNotifications |  |  |
| project |  |  |
| recordType | <code>string</code> |  |
| requiredDate | <code>string</code> |  |
| resPlanMinutes | <code>number</code> |  |
| resolveMinutes | <code>number</code> |  |
| resources | <code>string</code> |  |
| respondMinutes | <code>number</code> |  |
| serviceLocation | <code>[ServiceLocationHref](#ServiceLocationHref)</code> |  |
| severity | <code>string</code> |  |
| site | <code>[SiteHref](#SiteHref)</code> |  |
| siteName | <code>string</code> |  |
| skipCallback |  |  |
| source | <code>[SourceHref](#SourceHref)</code> |  |
| stateIdentifier | <code>string</code> |  |
| status | <code>[StatusHref](#StatusHref)</code> |  |
| subBillingAmount |  |  |
| subBillingMethod | <code>string</code> |  |
| subDateAccepted |  |  |
| subType | <code>[SubTypeHref](#SubTypeHref)</code> |  |
| summary | <code>string</code> |  |
| team | <code>[TeamHref](#TeamHref)</code> |  |
| type | <code>[TypeHref](#TypeHref)</code> |  |
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

<a name="TimeEntry"></a>
## TimeEntry : <code>object</code>
**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| id | <code>number</code> |  |
| company | <code>[CompanyHref](#CompanyHref)</code> |  |
| chargeToId | <code>number</code> |  |
| chargeToType | <code>string</code> | ['ServiceTicket', 'ProjectTicket', 'ChargeCode', 'Activity'] |
| member | <code>[MemberHref](#MemberHref)</code> |  |
| locationId | <code>number</code> |  |
| businessUnitId | <code>number</code> |  |
| workType | <code>[WorkTypeHref](#WorkTypeHref)</code> |  |
| workRole | <code>[WorkRoleHref](#WorkRoleHref)</code> |  |
| agreement | <code>[AgreementHref](#AgreementHref)</code> |  |
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
