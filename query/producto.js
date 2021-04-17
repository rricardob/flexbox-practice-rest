let connection = require('../db/db');

/*
 *  this function return the result of category of products
 */

//Define Query DB
let getCategoryProduct = () => {
  //Promise
  return new Promise((resolve, reject) => {
    //Define Query
    let sql = 'SELECT * from categoria';

    //Execute Query
    connection.query(sql, (err, results) => {
      //Condition
      err ? reject(err) : resolve(results);
    });
  });
};

//CREACION DE GETPRODUCTSBYCATEGORY
//Define Query DB
let getProductsByCategory = id => {
  //Promise
  return new Promise((resolve, reject) => {
    //Define Query

    let sql = 'SELECT * FROM producto WHERE id_categoria = ?';

    //Execute Query
    connection.query(sql, id, (err, results) => {
      //Condition
      if (err) {
        return reject(err);
      } else {
        return resolve(results);
      }
    });
  });
};

//CREACION DE GETPRODUCTBYID
let getProductById = id => {
  //Promise
  return new Promise((resolve, reject) => {
    //Define Query

    let sql = 'SELECT * FROM producto WHERE id_producto = ?';

    //Execute Query
    connection.query(sql, id, (err, results) => {
      //Condition
      err ? reject(err) : resolve(results);
    });
  });
};

module.exports = {
  getCategoryProduct,
  getProductsByCategory,
  getProductById,
};
