//import: express & burger.js
var burger = require("../models/burger.js");
var express = require("express")
//create the routers for the app, & export the router at the end of your file
var router = express.Router();

router.get("/", function(req, res){
    burger.selectAll(function(data){
        var bObject = {
            burgers: data
        };
        res.render("index", bObject)
    })
})

router.post("/burgers", function(req, res){
    
})

router.put("/burgers/:id", function(req, res){
    
})

// Export routes for server.js to use.
module.exports = router;