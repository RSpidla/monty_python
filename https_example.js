// GOAL of EXCERCISE - To further practice working with streams in NodeJS as well as begin using the http (https) module to make simple GET requests for data.


// STEP 1 - Initialze variable and require node https module
var https = require('https');

// STEP 2 - 
var options = {
    host: 'www.example.org',
    path: '/'
};

// STEP 3 - 
// called by https when the request is made.
var callback = function(response) {
    console.log('In response handler callback!');
    console.log('Response: ', response);
  }
  
  console.log("I'm about to make the request!");
  
  https.request(options, callback).end();
  
  console.log("I've made the request!");