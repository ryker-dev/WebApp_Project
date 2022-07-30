/*
    ./api/comment/
*/

const express = require("express");
const router = express.Router();
const validateToken = require("../auth/validateToken.js");
const Comment = require("../models/Comment");
const multer = require("multer");
const storage = multer.memoryStorage();
const upload = multer({ storage });

router.post(
    "/create",
    upload.none(),
    validateToken,
    (req, res, next) => {
        console.log(req.body);
      if (!req.body.text)
        return res.status(400).json({ message: "Missing text" });
      const obj = {
        text: req.body.text,
        threadId: req.body.threadId,
        date: new Date()
      };
      Comment.create(obj,
        (err) => {
          if (err) throw err;
          return res.json(obj);
        }
      );
    }
  );
  
  /* Returns all comments with threadId */
router.get(
    "/:id", (req, res, next) => {
      Comment.find({threadId: req.params.id}, (err, everything) => {
        if (err) throw err;
        res.json(everything);
      });
    }
  );

module.exports = router;
