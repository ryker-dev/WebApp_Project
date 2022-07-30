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
        const dateObj = new Date(data[0].date);
        const format = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const dateString = dateObj.toLocaleDateString('en-GB', format);
        console.log(dateString);
        return res.render("thread", {
            threadname: data[0].threadname,
            description: data[0].description,
            code: data[0].code,
            date: dateString,
            upvotes: data[0].upvotes,
            downvotes: data[0].downvotes
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
