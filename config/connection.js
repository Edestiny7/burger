//setup the code to connect Node to MySQ
let mysql = require("mysql");

let connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "root",
    database: "burgers_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("Error connecting; " + err.stack);
        return;
    } else {
        console.log("Connected as: " + connection.threadId);
    }
});

//Export the connection
module.exports = connection;