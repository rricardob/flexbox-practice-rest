//Require Express Router 
const router = require('express').Router();

//Require Empresa 
const apiPost = require('./api/post');


//Define Path category
router.use('/post' , apiPost);


//Export
module.exports = router;
