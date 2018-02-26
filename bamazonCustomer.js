var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
  host: "localhost",
  port:

  user:"root"

  password:""
  database:"bamazon_db"
});

connection.connect(function(err)){
  if(err) throw err;
  console.log("")
}
