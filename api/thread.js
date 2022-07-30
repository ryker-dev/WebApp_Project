/*
    ./api/thread/
*/

const express = require("express");
const router = express.Router();
const validateToken = require("../auth/validateToken.js");
const Thread = require("../models/Thread");
const multer = require("multer")
const storage = multer.memoryStorage();
const upload = multer({storage})

router.post("/create", upload.none(),
/*validateToken,*/ (req, res, next) => {
    if(!req.body.threadname) return res.status(400).json({message: "Missing threadname"})
    Thread.create({
        threadname: req.body.threadname,
        description: req.body.description,
        code: req.body.code,
        date: new Date(),
        upvotes: 0,
        downvotes: 0
    }, (err) => {
        if (err) throw err;
        return res.json({
            message: "Success",
            threadname: req.body.threadname,
            description: req.body.description,
            code: req.body.code,
            date: new Date(),
            upvotes: 0,
            downvotes: 0
        })
    })
  });

/* Returns all threads */
router.get("/", /*validateToken,*/ (req, res, next) => {
    Thread.find({}, (err, everything) => {
        if (err) throw err;
        res.json(everything);
    })
});

/* Returns a specific thread */
router.get("/:id", /*validateToken,*/ (req, res, next) => {
    const id = req.params.id;
    Thread.find({_id: id}, (err, data) => {
        if (err) throw err;
        res.json(data);
    })
});
  
module.exports = router;