//Require DBConection
const dbconnection = require("../db/db");

//Define DB Query
let getComentary = () => {
    //Promise
    return new Promise ((resolve, reject) => {
        //Define Query
        let sql = 'SELECT * from comentario ORDER BY id_comentario DESC LIMIT 5';

        //Execute Query
        dbconnection.query(sql , (err, results) => {
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
    getComentary
};