var express = require('express');
var logger = require('morgan');

var app = express();

var PORT = process.env.NODE_ENV || 4321;

app.use(logger('dev'));
app.use(express.static('public'));

app.listen(PORT, function() {
  console.log("Listening on ", PORT);
});
