const mysql = require("mysql");

const config = mysql.createConnection({
    host: 'localhost',
    port: 8889,
    user: 'root',
    password: 'root',
    database: 'db_hvbds_test'
});

module.exports = config;