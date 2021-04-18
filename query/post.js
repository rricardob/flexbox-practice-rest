var connection = require("../db/db");

/*
 *  this function return the result of categorypost
 */

function getCategoryPost() {
  return new Promise((resolve, reject) => {
    let sql = "SELECT * from categoriapost WHERE categoriapost.estado_categoriaPost = 1 ORDER BY categoriapost.cantidadpost_categoriaPost";
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
    let sql = "SELECT post.*,	CONCAT( u.nom_usuario, ' ', u.ape_usuario ) AS usuario FROM	post	LEFT JOIN usuario u ON u.id_usuario = post.id_usuario WHERE	id_post = ?";
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
    let sql = "SELECT post.*, cp.nombre_categoriaPost, CONCAT( u.nom_usuario, ' ', u.ape_usuario ) AS usuario  FROM post LEFT JOIN categoriapost cp ON cp.id_categoriaPost = post.id_categoriaPost LEFT JOIN usuario u ON u.id_usuario = post.id_usuario  WHERE cp.estado_categoriaPost = 1 AND post.estado_post = 1 ORDER BY peso_post";
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
