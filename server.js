
// server.js

// modules

var express 		= require('express');
var app 			= express();
var bodyParser 		= require('body-parser');
var methodOverride	= require('method-override');

// Configuration

// Config files

var db = require('./config/db');

// set our port
var port = process.env.PORT || 8080;

// connect to mongDB database. credentials in config/db.js
//mongoose.connect(db.url);

// get all data/stuff of the body parameters
// parse application/json
app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port);

console.log('Started on port ' + port);

exports = module.exports = app;



