// GOAL of EXCERCISE - To further practice working with streams in NodeJS as well as begin using the http (https) module to make simple GET requests for data.


// STEP 1 - Initialze variable and set it's value to require node https module
const https = require('https');

// STEP 2 - Initialize variable and set node https module options
  // Option 1 - URL
  // Option 2 - Path
const options = {
    host: 'stream-large-file.herokuapp.com',
    path: '/give-me-stuff-now'
};

// STEP 3 - Declare function expression which is called by https when the request is made.
let callback = function(response) {
  console.log('In response handler callback!');

  // STEP 4 - Output data as it comes in.
    // Label response data as 'chunk'
    // Print chunk.length
  response.on('data', function(chunk) {
      console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --]');
  });
}

// STEP 5 - Print to standard output 'I'm about to make the request!'.
console.log("I'm about to make the request!");

// STEP 6 - Make request to secure web server
https.request(options, callback).end();

// STEP 7 - Print to standard output 'I've made the request!'.
console.log("I've made the request!");