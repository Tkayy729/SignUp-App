
const express = require("express");
const router = express.Router();
const SignUpTemplate = require("../models/SignupModel");
const bcrypt = require('bcrypt')

router.post("/signup", async (req, res, next) => {
  const saltPassword = await bcrypt.genSalt(10);
  const securePassword = await bcrypt.hash(req.body.password, saltPassword);

  const signedUpUser = new SignUpTemplate({
    fullName: req.body.fullName,
    username: req.body.username,
    email: req.body.email,
    password: securePassword,
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
