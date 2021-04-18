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

router.post('/login', (req, res) => {
    let obj = req.body
    let user = obj.cod_usuario
    let pass = obj.password_usuario
    
    DBUser.login(user, pass).then(results => {
        console.log(`result ${JSON.stringify(results)}`); //convert to json
        res.send(results); //send json
    })

    .catch(function(err){
        console.log("Promise rejection error: " + err);
    })
});

//Export
module.exports = router;

