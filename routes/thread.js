var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

router.get("/get/:id", (req, res, next) => {
  fetch(`http://localhost:1234/api/thread/${req.params.id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        return res.render("thread", {
          threads: {},
          message: "Could not fetch thread",
        });
      } else {
        return res.render("thread", {
            threadname: data[0].threadname
        });
      }
    })
    .catch(error => {
        console.log(error);
    });
});

router.get("/create", (req, res, next) => {
  res.render('createThread', {});
});

module.exports = router;
