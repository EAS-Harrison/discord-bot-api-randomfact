const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
module.exports = function (app) {
    app.get('/api/facts', (req, res, next) => {


        // sql to get all facts
        connection.query(`SELECT * FROM fact_table`, function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }

            res.json({ facts: result })

        });

        // return in the format


        // {
        //     "facts": [{...fact},{...fact},{...fact}]
        // }

    });
}