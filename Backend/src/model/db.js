const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "clientes",
  multipleStatements: "true",
});

connection.connect(function (err) {
  if (err) {
    console.log(err);
    //return
  } else {
    console.log("Connected");
  }
});

module.exports = connection;
