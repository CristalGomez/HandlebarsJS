var express = require("express");
var path = require("path")
var bodyParser = require("body-parser");
var PORT = process.env.PORT || 8080;

var app = express();
var env = require("dotenv").config()

// Serve static content for the app from the "public" directory in the application directory.
//style.css
app.use(express.static(path.join(__dirname, "/public")))

// Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Set Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/burgers_controller.js");

app.use(routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});