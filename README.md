# connectwise-rest
A nodejs module for interacting with the ConnectWise REST API

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
        .then(function(result){
            //do something with results
        })
        .fail(function(error){
            //handle errors
        });
```