//insert code to connect node to mySQL
var mysql = require("mysql");
var key = require("../key")

console.log(key)

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: key.password,
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
