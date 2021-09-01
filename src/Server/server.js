var express = require('express');
var app = express();

app.get('/', function (req, res) {

    var sql = require("mssql");

    // config for your database
    let config = {
        server: 'localhost',
        authentication: {
            type: 'default',
            options: {
                userName: 'sa', // update me
                password: 'dell' // update me
            }
        },
        options: {
            database: 'EmployeeDB',
            validateBulkLoadParameters: true,
            encrypt: false,
        }
    }





    // connect to your database
    sql.connect(config, function (err) {

        if (err) console.log(err);

        // create Request object
        var request = new sql.Request();

        // query to the database and get the records
        request.query('select *from Employee', function (err, recordset) {

            if (err) console.log(err)

            // send records as a response
            res.send(recordset);

        });
    });
});

var server = app.listen(5000, function () {
    console.log('Server is running..');
});