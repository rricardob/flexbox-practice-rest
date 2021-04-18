const dbconnection = require("../db/db");

//Define DB Query
let login = (user, pass) => {
    //Promise
    return new Promise ((resolve, reject) => {
        //Define Query
        let sql = 'SELECT * FROM usuario WHERE usuario.cod_usuario = ? and usuario.password_usuario = ?';
        /*let sql = 'SELECT * FROM usuario u inner join perfil p on u.id_perfil = p.id_perfil where id_usuario = ?';*/

        //Execute Query
        dbconnection.query(sql , [user, pass], (err, results) => {
            //Condition
            if(err){
                return reject(err);
            }else{
                return resolve(results);
            }
        })
    });
}

//Define BD Query
function insertUser(comment){
    //Promise
    return new Promise ((resolve, reject) => {
        //Define Query
        let sql = 'INSERT into usuario set ?';
        /*'INSERT into usuario(cod_usuario, nom_usuario, ape_usuario, email_usuario, password_usuario, id_perfil)
        ' VALUES()';*/

        //Execute Query
        dbconnection.query(sql , comment, (err, results, fields) => {
            //Condition
            if(err){
                return reject(err);
            }else{
                return resolve(results);
            }
        })
    });
}

//Export
module.exports = {
    login,
    insertUser
};