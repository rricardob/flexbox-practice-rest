const mysql = require('mysql');

//Define Data Connection DB
const dbconnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ucv_project',
});

//Connect DB
// dbconnection.connect(function (err) {
//   if (err) {
//     console.log(`Connection Failed ${err.stack}`);
//     return;
//   }

//   console.log(`Connection Successful`);
// });

// Refactorizado por Tello - Revisar
dbconnection.connect(err => {
  err
    ? console.log(`Connection Failed ${err.stack}`)
    : console.log(`Connection Successful`);
});
module.exports = dbconnection;
