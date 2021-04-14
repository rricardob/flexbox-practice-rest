var connection = require("../db/db");

/*
 *  this function return the result of categorypost
 */

function getCategoryPost() {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * from categoriapost";
    connection.query(sql, (err, results, fields) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getPostById(id) {
  return new Promise((resolve, reject) => {
    let sql = "select * from post WHERE id_post = ?";
    connection.query(sql, id, (err, results, fields) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getPosts() {
  return new Promise((resolve, reject) => {
    let sql = "select * from post ORDER BY fechareg_post desc limit 3";
    connection.query(sql, (err, results, fields) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function getComentsByPost(id) {
  return new Promise((resolve, reject) => {
    let sql =
      "select c.* from comentario c left join post p on c.id_post = p.id_post where p.id_post = ?";
    connection.query(sql, id, (err, results, fields) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

function publishComment(comment) {
  return new Promise((resolve, reject) => {
    let sql = "INSERT INTO comentario set ?";
    connection.query(sql, comment, (err, results, fields) => {
      if (err) {
        return reject(err);
      }
      return resolve(results);
    });
  });
}

module.exports = {
  getCategoryPost,
  getPostById,
  getPosts,
  getComentsByPost,
  publishComment
};
