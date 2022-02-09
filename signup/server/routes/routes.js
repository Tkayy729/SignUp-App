const { response } = require("express");
const express = require("express");
const router = express.Router();
const SignUpTemplate = require("../models/SignupModel");

router.post("/signup", (req, res, next) => {
  const signedUpUser = new SignUpTemplate({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  signedUpUser
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
