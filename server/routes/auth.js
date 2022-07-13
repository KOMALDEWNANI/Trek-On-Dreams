const express = require("express");
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const router = express.Router();
const saltRounds = 10;

// SignUp
router.post(
  "/signup",
  body("email").isEmail(),
  body("username").isLength({ min: 3 }),
  // password must be at least 8 chars long
  body("password").isLength({ min: 8 }),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array() });
    }

    const username = req.body.username;
    let password = req.body.password;
    const email = req.body.email;

    try {
      // bcrypt is an async function
      const hash = await bcrypt.hash(password, saltRounds);
      const user = await new User({ username, password: hash, email });

      await user.save();
      res.status(200).json(user);
    } catch(err) {
        res.status(500).json({error : err});
      }
  }
);

// Login any user
router.post("/login", body("username").isLength({ min: 3 }),
// password must be at least 8 chars long
body("password").isLength({ min: 8 }), async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  try {
    const user = await User.findOne({ username }).exec();
    console.log(user)
    if (!user) {
      res.status(400).json({error : "No such user found, Please signUp"});
    } else {
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        res.status(400).json({error: "Incorrect password"});
      } else {
        var token = jwt.sign({ id: user.id}, process.env.SECRET_KEY);

        res.status(200).json({
          authToken: token,
        });
      }
    }
  } catch(err) {
    res.status(500).json({error : err});
  }
});

module.exports = router;
