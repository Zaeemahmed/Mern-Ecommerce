const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const user = new mongoose.Schema({
  firstname: {
    type: String,
    maxlength: 20,
    minlength: 5,
    required: true,
  },
  lastname: {
    type: String,
    maxlength: 20,
    minlength: 5,
  },
  email: {
    type: String,
    unique: true,
  },
  profilePic: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
});

user.methods = {
  validatePassword: function (password) {
    return bcrypt.compareSync(password, this.password);
  },
};

const User = mongoose.model("User", user);

module.exports = { User };
