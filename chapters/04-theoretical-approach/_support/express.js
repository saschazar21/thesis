const express = require('express');             // require base module
const app = express();                          // Create instance

app.get('/', function rootRoute(req, res) {     // Listen for GET request
  return res.send('Hello World!');              // Send response
});

app.listen(3000);                               // Listen on port 3000
