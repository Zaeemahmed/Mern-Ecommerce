const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../models/user");
const signup = async (req, res) => {
  const { firstname, lastname, email, _password, profilePic } = req.body;
  User.findOne({ email }).exec(async (err, result) => {
    if (err) {
      return res.status(400).json({
        error: err,
      });
    }
    if (result) {
      return res.status(400).json({
        message: "user already exists",
      });
    }
    const user = new User({
      firstname,
      lastname,
      email,
      password,
      profilePic,
    });
    const password = await bcrypt.hash(_password, 10);
    user.save((err, data) => {
      if (err)
        return res.status(400).json({
          error: err,
          message: "could not create user",
        });
      else {
        return res.json({
          firstname,
          lastname,
          email,
          password,
          profilePic,
        });
      }
    });
  });
};

const signin = async (req, res) => {
  const { email, password } = req.body;
  User.findOne({ email }).exec((err, user) => {
    if (err) return res.json({ error: err });
    if (user) {
      const isPasswordCorrect = user.validatePassword(password);
      if (isPasswordCorrect) {
        const { _id, email, firstname, lastname, profilePic } = user;
        const token = jwt.sign({ _id, email }, process.env.PRIVATE_KEY, {
          expiresIn: "1h",
        });
        return res.json({ _id, email, firstname, lastname, profilePic, token });
      } else {
        return res.status(400).json({ message: "password incorrect" });
      }
    } else return res.status(400).json({ message: "No user found" });
  });
};

module.exports = { signup, signin };
