const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const user = new mongoose.Schema({
  firstname: {
    type: String,
  },
  lastname: {
    type: String,
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
  },
  role: {
    type: String,
  },
});

user.methods = {
  validatePassword: async function (password) {
    //console.log(password, this.password);
    const isValid = await bcrypt.compare(password, this.password, () => {});
    return isValid;
  },
};

const User = mongoose.model("User", user);

module.exports = { User };
