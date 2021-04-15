//Require Express Router 
const router = require('express').Router();

//Require DBEmpresa
const DBEmpresa = require('../../querys/sql_empresa');

//Define Route 
router.get('/' , (req , res) => {

    DBEmpresa.getEmpresa().then(results => {
        console.log(`result ${JSON.stringify(results)}`); //convert to json 
        res.send(results); //send json 
    })

    .catch(function(err){
        console.log("Promise rejection error: " + err);
    })

});



//Export 
module.exports = router;


