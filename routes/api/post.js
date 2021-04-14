const router = require("express").Router();

const Post = require("../../query/post");

const Comment = require("../../models/comentario")

//Define Route
router.get("/getCategory", (req, res) => {
  Post.getCategoryPost()
    .then((results) => {
      console.log(`result ${JSON.stringify(results)}`); //convert to json
      res.send(results); //send json
    })

    .catch(function (err) {
      console.log("Promise rejection error: " + err);
    });
});

//
router.get("/getPostById/:id", (req, res) => {
  let idPost = req.params.id;
  Post.getPostById(idPost)
    .then((results) => {
      console.log(`result ${JSON.stringify(results)}`); //convert to json
      res.send(results); //send json
    })

    .catch(function (err) {
      console.log("Promise rejection error: " + err);
    });
});

router.get("/getPosts", (req, res) => {
  Post.getPosts()
    .then((results) => {
      console.log(`result ${JSON.stringify(results)}`); //convert to json
      res.send(results); //send json
    })

    .catch(function (err) {
      console.log("Promise rejection error: " + err);
    });
});

router.get("/getComentsByPost/:id", (req, res) => {
  let idPost = req.params.id;
  Post.getComentsByPost(idPost)
    .then((results) => {
      console.log(`result ${JSON.stringify(results)}`); //convert to json
      res.send(results); //send json
    })

    .catch(function (err) {
      console.log("Promise rejection error: " + err);
    });
});

router.post("/publishComment", (req, res) => {
    let data = req.body
  Post.publishComment(data)
    .then((results) => {
      console.log(`result ${JSON.stringify(results)}`); //convert to json
      res.send(results); //send json
    })

    .catch(function (err) {
      console.log("Promise rejection error: " + err);
    });
});

//Export
module.exports = router;
