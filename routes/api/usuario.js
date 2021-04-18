//Require Express Router
const router = require("express").Router();

//Require DB User
const DBUser = require('../../query/sql_usuario');

router.post('/insertUser', (req, res) => {
    let data = req.body
    DBUser.insertUser(data).then((results) => {
        console.log(`result ${JSON.stringify(results)}`); //convert to json
        res.send(results);
    })
    .catch(function(err){
        console.log("Promise error" + err);
    });

});

router.get('/', (req, res) => {
    DBUser.getUsuario().then(results => {
        console.log(`result ${JSON.stringify(results)}`); //convert to json
        res.send(results); //send json
    })

    .catch(function(err){
        console.log("Promise rejection error: " + err);
    })
});

//Export
module.exports = router;

