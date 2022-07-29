const express = require("express");
const router = express.Router();
const validateToken = require("../auth/validateToken.js");

router.get("/create", /*validateToken,*/ (req, res, next) => {
    res.json({message: "Hey"});
  });
  
module.exports = router;