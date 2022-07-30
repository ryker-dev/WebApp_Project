var express = require("express");
var router = express.Router();
const fetch = require("node-fetch");

const PORT = process.env.PORT || 1234

router.get("/get/:id", (req, res, next) => {
  let thread = {};
  let comments = {};

  /* Get thread data */
  fetch(`http://localhost:${PORT}/api/thread/${req.params.id}`, {
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
        const format = {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        };
        const dateString = dateObj.toLocaleDateString("en-GB", format);
        thread = {
          threadname: data[0].threadname,
          threadId: req.params.id,
          description: data[0].description,
          code: data[0].code,
          date: dateString,
          upvotes: data[0].upvotes,
          downvotes: data[0].downvotes,
        };
        res.render("thread", thread);

        //res.render("comments", { message: "Hey Hey!" });
      }
    });
});

router.get("/create", (req, res, next) => {
  res.render("createThread", {});
});

module.exports = router;
