const express = require("express");
const bodyParser = require('body-parser')
const cors = require('cors')
const userRoute = require("./routes/userRouter");
const { errorResponse } = require("./service/responds");

const app = express();

app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(cors())

app.use("/api/user", userRoute)


app.use((req, res,next) => {
  return errorResponse(res, {
    statusCode: 404,
    message: "router was not found"
  })
})
app.use((err,req, res, next) => {
  return errorResponse(res, {
    statusCode: statusCode,
    message: message
  })
})


module.exports = app;