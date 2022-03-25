# connectwise-rest

 [![npm version](https://img.shields.io/npm/v/connectwise-rest.svg)](https://www.npmjs.com/package/connectwise-rest) [![npm downloads](https://img.shields.io/npm/dt/connectwise-rest.svg)](https://www.npmjs.com/package/connectwise-rest) [![travis build](https://api.travis-ci.org/covenanttechnologysolutions/connectwise-rest.svg?branch=master)](https://travis-ci.org/covenanttechnologysolutions/connectwise-rest)

A Node.JS TypeScript module for interacting with the ConnectWise Manage and Automate REST APIs.  This module provides bindings for ease of development against the ConnectWise REST APIs. 

## Requirements

### Manage 

- ConnectWise Manage 2018.1+, though these functions are written for ConnectWise Manage 2021.1 APIs.
- ConnectWise Manage API keys (available on ConnectWise 2015.3+), or API Only Member keys (only available on ConnectWise 2015.6+).  See the [documentation](https://developer.connectwise.com/Authentication) for more details. 
### Automate

- ConnectWise Automate 2020+
- ConnectWise Automate integrator login, your own generated token, or user account with 2FA.

## Documentation

See the full documentation [here](https://covenanttechnologysolutions.github.io/connectwise-rest/index.html)

## Usage

### Manage

```javascript
    // CommonJS
    import { ManageAPI } from 'connectwise-rest';
    // ESM
    const { ManageAPI } = require('connectwise-rest');
    
    const cwm = new ManageAPI({
        companyId: 'company',
        companyUrl: 'your.connectwise.com',
        publicKey: '<public key>',
        privateKey: '<private key>',
        clientId: '<your client id>',
        entryPoint: 'v4_6_release', // optional, defaults to 'v4_6_release'
        apiVersion: '3.0.0',        // optional, defaults to '3.0.0'
        timeout: 20000,             // optional, request connection timeout in ms, defaults to 20000
        retry: false,               // optional, defaults to false
        retryOptions: {             // optional, override retry behavior, defaults as shown
          retries: 4,               // maximum number of retries
          minTimeout: 50,           // number of ms to wait between retries
          maxTimeout: 20000,        // maximum number of ms between retries
          randomize: true,          // randomize timeouts
        },
        debug: false,               // optional, enable debug logging
        logger: (level, text, meta) => { } // optional, pass in logging function
    });
    
    cwm.ServiceDeskAPI.Tickets.getTicketById(1234)
        .then((ticket) => {
            //do something with results
        })
        .catch((error) => {
            //handle errors
        });
```


### Automate

```javascript
    // CommonJS
    import { AutomateAPI } from 'connectwise-rest';
    // ESM
    const { AutomateAPI } = require('connectwise-rest');
    
    const cwa = new ManageAPI({
        companyId: 'company',
        serverUrl: 'your.connectwise.com',
        clientId: '<your client id>',
        // One of the following: token, integrator username and password or username, password and two-factor code
        token: '<bearer token>',
      
        // or integrator username/password:
        username: '<username>',
        password: '<private key>',
        twoFactorPasscode: '<2fa code>',

        timeout: 20000,             // optional, request connection timeout in ms, defaults to 20000
        retry: false,               // optional, defaults to false
        retryOptions: {             // optional, override retry behavior, defaults as shown
          retries: 4,               // maximum number of retries
          minTimeout: 50,           // number of ms to wait between retries
          maxTimeout: 20000,        // maximum number of ms between retries
          randomize: true,          // randomize timeouts
        },
        debug: false,               // optional, enable debug logging
        logger: (level, text, meta) => { } // optional, pass in logging function
    });
    
    cwa.ComputersAPI.getComputerList()
        .then((computers) => {
            //do something with results
        })
        .catch((error) => {
            //handle errors
        });
```

### APIs Without Typings

You can also manually access the API without typings:

```javascript

    const { Manage, Automate } = require('connectwise-rest');

    const cwm = new Manage(CWMOptions);
    const cwa = new Automate(CWAOptions);
    
    // use cwa.request or cwm.request
    cwm.request({
      path: '/path/to/api',
      method: 'POST', 
      params: {
        'queryParam1': 'val1',
        'queryParam2': 'val2'
      },
      data: {
        'dataValue': 'val1',
    })
      .then((result) => {
          //do something with results
      })
      .catch((error) => {
          //handle errors
      });
```

### Cloud-Hosted ConnectWise Manage

To access cloud-hosted ConnectWise, use the `companyUrl` of `api-na.myconnectwise.net` and override the default `entryPoint`.

| Region | URL                            |
| --- |--------------------------------|
| North America | api-na.myconnectwise.net       |
| Europe | api-eu.myconnectwise.net       |
| Australia | api-aus.myconnectwise.net      |
| Demo | api-staging.connectwisedev.com |

```javascript
    options = {
        companyId: 'company',
        companyUrl: 'api-na.myconnectwise.net',
        entryPoint: 'v2022.1', // change to the current hosted version 
        publicKey: '<public key>',
        privateKey: '<private key>'
    }
```

## Examples

### Code Examples

Get ticket 1234 and print ticket number, summary and status. 

```javascript

    cwm.ServiceAPI.getServiceTicketsById(1234)
        .then((ticket) => { console.log(ticket.id, ticket.summary, ticket.status.name); })
        .catch((err) => { console.log(err); });
```

Create new ticket on service board, then print the returned ticket number, or any errors

```javascript
    cwm.ServiceAPI.postServiceTickets({
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
    .then((ticket) => { console.log(ticket.id); })
    .catch((err) => { console.log(err); });    
    
```

Change the status of a ticket

```javascript
    cwa.ServiceAPI.patchServiceTicketsById(1234, [{
        op: 'replace',
        path: 'status',
        value: {id: 123} //id of the status to change to, find with boards.getBoards and status.getStatuses
    }, {
        //second or more operations
    }])
    .then((res) => { 
      //do something with returned ticket 
    })
    .catch((err) => { 
      //do something with errors 
    });    

```

### Manage Conditions Example

Valid example conditions string:
  
```javascript

    const conditions = '(contact/name like "Fred%" and closedFlag = false) and dateEntered > [2015-12-23T05:53:27Z] or summary contains "test" AND  summary != "Some Summary"'

```

Error message returned from server when invalid conditions are passed in:
> Expected a boolean value, not a numeric. String values should be enclosed with double or single quotes; DateTime values should be enclosed in square brackets; numbers should consist of only digits, and optionally a decimal point and a negation sign; boolean values should be indicated with the keywords true or false; null values should be indicated by the keyword null.


### Callbacks

This library includes an express style callback middleware that will parse and verify the payload signature.

```javascript
  const {utils} = require('connectwise-rest')
  const CWCallback = utils.Callback;
  
  router.post('/your/callback', CWCallback.middleware((err, req, res, verified, payload) => {
    if (err) {
      //handle error, parsing, malformed object, etc
      res.status(500).end();
    } else if (!verified) {
      // send 403 on verification failure, 
      // or handle some other way
      res.status(403).end();
    } else {
      res.status(200).end()
    }
    const {action, id} = req.query;
    // do something with the payload
  }));

```
