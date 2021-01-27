const express = require("express");
const { signup, signin } = require("../../controllers/admin/admin");
const router = express.Router();
const {
  validateRequestBody,
  signUpValidation,
  signInValidation,
} = require("../../helpers/validators");

router.post("/admin/signup", signUpValidation, validateRequestBody, signup);
router.post("/admin/signin", signInValidation, validateRequestBody, signin);

module.exports = router;
