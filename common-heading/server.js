// Work in pairs
// Create an AngularJS app that has a common heading across 5 different pages
// This site is about the five favorite classes you've at at Rutgers so far
// On two of the pages (any two), ng-include a shout out to the instructor

var express = require('express');
var logger = require('morgan');

var app = express();

var PORT = process.env.PORT || 4321;

app.use(logger('dev'));
app.use(express.static('public'));

app.get('*', function(req, res) {
  res.sendFile(process.cwd() + '/public/index.html');
});

app.listen(PORT, function() {
  console.log("listening on port", PORT);
});