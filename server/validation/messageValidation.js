const { body } = require("express-validator");

const validationInput = [
  body("name")
    .trim()
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 3, max: 31 })
    .withMessage("Name should be at least 3-31 characters long"),
  body("email")
    .trim()
    .notEmpty()
    .withMessage("Email is required")
    .isEmail()
    .withMessage("Invalid email address"),
  body("subject")
    .trim()
    .notEmpty()
    .withMessage("subject is required")
    .isLength({ min: 3 })
    .withMessage("Name should be at least 3 characters long"),
  body("message")
    .trim()
    .notEmpty()
    .withMessage("message is required")
    .isLength({ min: 10 })
    .withMessage("message should be at least 10 characters long"),
];

module.exports = validationInput;
