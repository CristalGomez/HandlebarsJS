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
        console.log(bObject);
        res.render("index", bObject)
    })
})

router.post("/", function(req, res){
    burger.insertOne([
        "burger_name", "devoured"
    ],[
        req.body.burger_name, req.body.devoured
    ], function(){
        res.redirect("/")
    })
})

router.put("/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;
    // console.log("condition", condition);

    burger.updateOne({
        devoured: req.body.devoured
    }, condition, function(result){
        if (result.changedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end()
        }
    })
})

// Export routes for server.js to use.
module.exports = router;