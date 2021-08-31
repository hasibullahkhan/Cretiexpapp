const mysql = require('mysql2')
// https://www.youtube.com/watch?v=hzAglgAT89k
const con = mysql.createConnection({
    host: 'localhost',
    user: 'sa',
    password: 'dell',
    database: 'EmployeeDB'
})
module.exports = 'con'