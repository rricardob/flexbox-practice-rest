//Require Express Router 
const router = require('express').Router();


//Require Empresa 
const apiPost = require('./api/post');

//Require Info_Empresa 
const apiEmpresaRouter = require('./api/empresa');

//Require Proveedor 
const apiProveedorRouter = require('./api/proveedor');



//Define Path Category
router.use('/post' , apiPost);

//Define Path Info_Empresa
router.use('/empresa' , apiEmpresaRouter);

//Define Path Proveedor
router.use('/proveedor' , apiProveedorRouter);



//Export
module.exports = router;
