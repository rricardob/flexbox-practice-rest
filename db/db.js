const mysql = require('mysql');

//Define Data Connection DB
const dbconnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'node_js',
});

//Connect DB
dbconnection.connect(err => {
  err
    ? console.log(`Connection Failed ${err.stack}`)
    : console.log(`Connection Successful`);
});
module.exports = dbconnection;
