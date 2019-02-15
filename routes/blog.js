const express = require("express");
const bodyParser = require("body-parser");

const Article = require("./../model/articleSchema");

var router = express.Router();
router.use(bodyParser.json());

router
  .route("/")
  .get((req, res, next) => {
    Article.find({})
      .then(articles => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(articles);
      })
      .catch(error => {
        console.log(error);
      });
  })
  .post((req, res, next) => {
    res.setHeader("Content-Type", "application/json");

    Article.create(req.body).then(article => {
      res.statusCode = 200;
      res.json(article);
    });
  });

router
  .route("/:id")
  .put((req, res, next) => {
    res.setHeader("Content-Type", "application/json");
    Article.findByIdAndUpdate(
      { _id: req.params.id },
      {
        $set: req.body
      },
      { new: true }
    ).then(article => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.end("Hey: " + JSON.stringify(article));
    });
  })
  .delete((req, res) => {
    Article.findById(req.params.id).then(article => {
      if (article !== null) {
        article.remove();
        article.save().then(newArticle => {
          res.statusCode = 200;
          res.setHeader("Content-Type", "application/json");
          res.json(newArticle);
        });
      } else {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(article);
      }
    });
  })
  .get((req, res, next) => {
    Article.findById(req.params.id).then(article => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "application/json");
      res.json(article);
    });
  });

module.exports = router;
