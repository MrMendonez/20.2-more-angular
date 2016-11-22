// Create an SPA with UI-Router of your 3 least favorite RCB topics
// Have a nested state
// Utilize the same controller for two different states
// Utilize the $stateParams to read data from the URL

var express = require('express');
var logger = require('morgan');

var app = express();

var PORT = process.env.PORT || 6543;

app.use(logger('dev'));
app.use(express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});

app.listen(PORT, function() {
  console.log("listening on port", PORT);
});
