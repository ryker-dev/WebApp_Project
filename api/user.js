const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const mongoose = require("mongoose");
const { body, validationResult } = require("express-validator");
const User = require("../models/Users");
const jwt = require("jsonwebtoken");
const multer = require("multer")
const storage = multer.memoryStorage();
const upload = multer({storage})

/* Register account */
router.post(
  "/register",
  body("email").isEmail().trim().escape(),
  body("password").isStrongPassword({ minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })
  .withMessage("Password must be greater than 8 and contain at least one uppercase letter, one lowercase letter, and one number"),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    User.findOne({ email: req.body.email }, (err, user) => {
      if (err) throw err;
      if (user) {
        return res.status(403).json({ username: "Email already in use!" });
      } else {
        bcrypt.genSalt(10, (err, salt) => {
          bcrypt.hash(req.body.password, salt, (err, hash) => {
            if (err) throw err;
            User.create(
              {
                email: req.body.email,
                password: hash
              },
              (err, ok) => {
                if (err) throw err;
                return res.redirect("/login");
              }
            );
          });
        });
      }
    });
  }
);

/* Log in with jwt check */
router.post(
  "/login",
  upload.none(),
  (req, res, next) => {
    const user = User.findOne({email: req.body.email}, (err, user) => {
      if(err) throw err;
      if(!user) {
        return res.status(403).json({message: "Login failed"});
      }
      bcrypt.compare(req.body.password, user.password, (err, isMatch) => {
        if (err) throw err;
        if(isMatch) {
          const jwtPayload = {
            id: user.id,
            email: user.email
          };
          jwt.sign(
            jwtPayload,
            process.env.SECRET,
            {
              expiresIn: "30m"
            },
            (err, token) => {
              res.json({success: true, token});
            }
          )
        }
        
      })
    })
  })


module.exports = router;
