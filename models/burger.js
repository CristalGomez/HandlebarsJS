//create the code that will call the ORM functions using burger specific input for the ORM
//export at the end of the burger.js file

var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res)
        })
    },
    insertOne: function(){
        
    },
    updateOne: function(){

    }
}

// Export the database functions for the controller (burgers_controller.js).
module.exports = burger;