//Require Express Router 
const router = require('express').Router();

//Require DBEmpresa
const DBProveedor = require('../../querys/sql_proveedor');

//Define Route 
router.get('/' , (req , res) => {

    DBProveedor.getProveedor().then(results => {
        console.log(`result ${JSON.stringify(results)}`);
        res.send(results);
    })

    .catch(function(err){
        console.log("Promise rejection error: " + err);
    })

});

//Export 
module.exports = router;


