/*
    ./api/thread/
*/

const express = require("express");
const router = express.Router();
const validateToken = require("../auth/validateToken.js");
const Thread = require("../models/Thread");

router.post("/create", /*validateToken,*/ (req, res, next) => {
    console.log(req.body);
    if(!req.body.threadname) return res.status(400).json({message: "Missing threadname"})
    Thread.create({
        threadname: req.body.threadname
    }, (err) => {
        if (err) throw err;
        return res.json({
            message: "Success",
            threadname: req.body.threadname
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