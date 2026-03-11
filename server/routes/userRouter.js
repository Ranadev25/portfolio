const userRoute = require("express").Router();

userRoute.get("/", (req, res, next) => {
  res.json({message:"hello"})
})


module.exports = userRoute;