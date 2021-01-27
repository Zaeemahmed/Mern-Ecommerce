const express = require("express");
const { signup, signin } = require("../controllers/user");
const router = express.Router();
const {
  validateRequestBody,
  signUpValidation,
} = require("../helpers/validators");

router.post("/user/signup", signUpValidation, validateRequestBody, signup);
router.post("/user/signin", signin);

module.exports = router;
