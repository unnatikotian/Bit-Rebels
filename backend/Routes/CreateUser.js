const { body, validationResult } = require("express-validator");
const express = require("express");
const router = express.Router();
const User = require("../models/User");
const jwt = require('jsonwebtoken')
const bcrypt  = require('bcrypt')

const jwtSecret = 'MyNameIsScott$#'


router.post(
  "/signup",
  body("email").isEmail(),
  body("pass").isLength({ min: 5 }),

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await bcrypt.hash(req.body.pass,salt)

    let secPassword2 = await bcrypt.hash(req.body.cpass,salt)

    let cpass = secPassword2;
    let pass = secPassword;
    if (cpass !== pass) {
      return res.status(400).json({ errors: "Passwords do not match" });
    }

    try {
      await User.create({
        name: req.body.name,
        email: req.body.email,
        type: req.body.type,
        image:req.body.img,
        pass: secPassword,
        cpass: secPassword2,
      }).then(res.json({ success: true }));
    } catch (e) {
      console.log(e);
      res.json({ success: false });
    }
  }
);

router.post("/login",
  [body("email").isEmail(),
  body("pass","Incorrect Password").isLength({ min: 5 })],

  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let email = req.body.email;

    try {
      let userData = await User.findOne({ email });

      if (!userData) {
        return res.status(400).json({ errors: "Try with proper credentials" });
      }

      const pwdC = await bcrypt.compare(req.body.pass,userData.pass) 
      if (!pwdC) {
        return res.status(400).json({ errors: "Try with proper credentials" });
      }

      const data={
        user:{
          id:userData.id
        }
      }

      const authToken = jwt.sign(data,jwtSecret)
      return res.json({success: true,authToken:authToken});
    } catch (error) {
      console.log(error);
      return res.json({success: false});
    }
  }
);



module.exports = router;
