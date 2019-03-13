//import: express & burger.js
var burger = require("../models/burger.js");
var express = require("express")
//create the routers for the app, & export the router at the end of your file
var router = express.Router();



// Export routes for server.js to use.
module.exports = router;