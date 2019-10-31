// Dependencies
var express    = require("express");
var exphbs     = require('express-handlebars');
var router     = require('./controllers/burger_controller');
var bodyParser = require("body-parser");

// EXPRESS
var app    = express();
var PORT   = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.text());

// Link to CSS and images
app.use(express.static(__dirname + '/public'));





// Handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Router
app.use(router);


// Listening on PORT
app.listen(PORT, function() {
    console.log('Application is listening on PORT: ' + PORT);
  });