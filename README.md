# connectwise-rest
A nodejs module for interacting with the ConnectWise REST API.   This module is currently under construction starting with the ServiceDesk API.

## Requirements

- ConnectWise 2015.3+, though these functions are written for ConnectWise 2016.1 APIs. 
- ConnectWise API keys (available on ConnectWise 2015.3+), or API Only Member keys (only available on ConnectWise 2015.6+)

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

## Implemented APIs

| Module           | API           | Status    |
| ---------------- | ------------- | --------- |
| Service Desk API | Tickets       | Partial   |
| Time API         | TimeEntires   | Partial   |
