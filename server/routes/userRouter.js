const handelMessage = require("../controllers/massageMe");
const validationInput = require("../validation/messageValidation");
const runValidation = require("../validation/runValidation");

const userRoute = require("express").Router();

userRoute.post("/",validationInput, runValidation, handelMessage)


module.exports = userRoute;