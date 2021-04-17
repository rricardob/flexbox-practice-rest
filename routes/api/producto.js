//Require Express Router
const router = require('express').Router();

//Require DBCategoriaProd
const DBCategoriaProd = require('../../query/producto');

//Define Route
router.get('/getCategoryProducts', (req, res) => {
  DBCategoriaProd.getCategoryProduct()
    .then(results => {
      // console.log(`result ${JSON.stringify(results)}`); //convert to json
      res.send(results); //send json
    })

    .catch(function (err) {
      console.log('Promise rejection error: ' + err);
    });
});

//Define Route products by category
router.get('/getProductsByCategory/:id', (req, res) => {
  let id = req.params.id;
  DBCategoriaProd.getProductsByCategory(id)
    .then(results => {
      // console.log(`result ${JSON.stringify(results)}`); //convert to json
      res.send(results); //send json
    })

    .catch(function (err) {
      console.log('Promise rejection error: ' + err);
    });
});

//Define Route products by Id
router.get('/getProductById/:id', (req, res) => {
  let id = req.params.id;
  DBCategoriaProd.getProductById(id)
    .then(results => {
      // console.log(`result ${JSON.stringify(results)}`); //convert to json
      res.send(results); //send json
    })

    .catch(function (err) {
      console.log('Promise rejection error: ' + err);
    });
});

//Export
module.exports = router;
