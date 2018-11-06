var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var compression = require("compression");

var app = express();
var PORT = process.env.PORT || 8000;


app.use(compression());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/app', express.static('app'));


require("./app/routing/htmlRoutes.js")(app);





app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
