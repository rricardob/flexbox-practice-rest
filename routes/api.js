//Require Express Router
const router = require('express').Router();

//Require Empresa
const apiPost = require('./api/post');

//Require Info_Empresa
const apiEmpresaRouter = require('./api/empresa');

//Require Proveedor
const apiProveedorRouter = require('./api/proveedor');

//Require Info Categoria Productos
const apiProducto = require('./api/producto');

//Require Info Usuario
const apiUsuario = require('./api/usuario');

//Require Info Comentario
const apiComentario = require('./api/comentario');

//Define Path Category
router.use('/post', apiPost);

//Define Path Info_Empresa
router.use('/empresa', apiEmpresaRouter);

//Define Path Proveedor
router.use('/proveedor', apiProveedorRouter);

//Define Path Categoría Producto
router.use('/producto', apiProducto);

//Define Path Usuario
router.use('/usuario', apiUsuario);

//Define Path Comentario
router.use('/comentario', apiComentario);

//Export
module.exports = router;
