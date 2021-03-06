const mysql = require('mysql');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: 'mysql'
});

connection.connect();
module.exports = function (app) {
    app.post('/api/facts/add', (req, res, next) => {
        query = `INSERT INTO fact_table
        (fact,topic) 
         VALUES (?, ?)`;
        connection.query(query, [req.body.fact, req.body.topic], function (err, result, fields) {
            if (err) {
                res.json({ error: "something went wrong." })
            }
            res.json({ facts: result })

        });
    })
}
