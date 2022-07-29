const { request } = require("express");
const express = require("express");
const router = express.Router();
const fetch = require("node-fetch");

/* GET home page. */
router.get("/", function (req, res, next) {
  /* Fetch all threads and pass data to pug for render*/
  fetch("http://localhost:1234/api/thread", {
    method: "GET",
  })
    .then((response) => response.json())
    .then((data) => {
      if (!data) {
        return res.render("index", {
          threads: {},
          message: "Could not fetch threads",
        });
      }
      if (data.length > 0) {
        return res.render("index", { threads: data });
      } else {
        return res.render("index", {
          threads: {},
          message: "No threads posted",
        });
      }
    })
    .catch(console.log("Error"));
});
module.exports = router;
