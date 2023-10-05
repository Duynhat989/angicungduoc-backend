require('dotenv').config();
const mysql = require('mysql');

var dbConn = mysql.createConnection({
    host: process.env.HOST_DATABASE,
    user: process.env.USER_DATABASE,
    password: process.env.PASS_DATABASE,
    database: process.env.NAME_DATABASE
});
dbConn.connect()
module.exports = {
    dbConn
}