//require connection.js
var connection = require("../config/connection.js");
//create the methods that will execute the necessary MySQL commands in the controllers

//change ? from [] to ""
function printQMarks(num){
    var arr = [];
    for (var i = 0; i < num; i++){
        arr.push("?");
    }
    return arr.toString()
}

//function that converts obj key/value pairs to SQL syntax
function objToSQL(ob){
    var arr = [];
    for(var key in ob){
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)){
            if (typeof value === "string" && value.indexOf(" ") >= 0){
                value = "" + value + "";
            }
            //change: {name: "name"} -> ["name='name'"]
            arr.push(key + "=" + value)
        }
    }
    //translate array of strings to a single comma-separated string
    return arr.toString();
}
//obj for SQL statement functions

var orm = {
    //selectAll()
    selectAll: function(tableInput, cb){
        var queryString = "SELECT * FROM" + tableInput + ";";

        connection.query(queryString, function(err, res){
            if (err){
                throw err
            } 
            cb(res)
        })
    },
    // insertOne()
    insertOne: function (table, cols, vals, cb){
        var queryString = "INSERT INTO" + table;
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQMarks(vals.length);
        queryString += ") ";
        console.log(queryString);

        connection.query(queryString, vals, function(err, res){
            if (err){
                throw err;
            }
            cb(res);
        })
    },
    //updateOne()
    updateOne: function(table, objColVals, con, cb){
        var queryString = "UPDATE" + table;
        queryString += " SET ";
        queryString += objToSQL(objColVals);
        queryString += " WHERE ";
        queryString += con;
        console.log(queryString);

        connection.query(queryString, function(err, res){
            if (err){
                throw err
            }
            cb(res);
        })
    }
}


//export the ORM object in the module.exports

module.exports = orm;