const { check, validationResult } = require("express-validator");

exports.signUpValidation = [
  check("firstname").notEmpty().withMessage("firstname cannot be empty"),
  check("lastname").notEmpty().withMessage("lastname cannot be empty"),
  check("_password").notEmpty().withMessage("password cannot be empty"),
  check("_password")
    .isLength({ min: 6 })
    .withMessage("password shoudl atleast be 6 characters long"),
  check("email").isEmail().withMessage("Use proper Email format"),
];

exports.signInValidation = [
  check("password").notEmpty().withMessage("password cannot be empty"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password should atleast be 6 characters long"),
  check("email").isEmail().withMessage("Use proper Email format"),
];
exports.validateRequestBody = (req, res, next) => {
  const { errors } = validationResult(req);
  if (errors.length > 0) {
    return res.status(400).json({ error: errors[0] });
  } else {
    next();
  }
};
