//Require Express Router
const router = require('express').Router();

//Require DB Comentary
const DBComentary = require('../../query/sql_comentario');

//Define Route
router.get('/', (req, res) => {
    DBComentary.getComentary().then(results => {
        console.log(`result ${JSON.stringify(results)}`); //convert to json
        res.send(results); //send json
    })

    .catch(function(err){
        console.log("Promise rejection error: " + err);
    })
});

//Export
module.exports = router;