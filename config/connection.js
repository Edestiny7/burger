// Set up MySQL connection.
let mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: "3306",
        user: "root",
        password: "root",
        database: "burgers_db"
    });
};

// Make connection.
connection.connect(function(err) {
    if (err) {
        console.log("Error connecting; " + err.stack);
        return;
    } else {
        console.log("Connected as: " + connection.threadId);
    }
});

// Export connection for our ORM to use.
module.exports = connection;