//Require DBConnection 
const dbconnection = require('../db/db');


//Define Query DB 
let getEmpresa = () => {

        //Promise
        return new Promise ((resolve , reject) => {

            //Define Query 
            let sql = 'SELECT * from empresa' 
            
            //Execute Query 
            dbconnection.query(sql , (err,results) => {

                //Condition 
                if(err){
                    return reject(err);
                }
                else{
                    return resolve(results);
                }

            })
            
        });
}


//Export 
module.exports = {
    getEmpresa
};