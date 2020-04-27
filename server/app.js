var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

// bring in the .env file and read data as config
require("dotenv").config();

// If import folder contains index.js,
// requiring the folder is enough to make  auto import of index contained within
const { notFound, errorHandler } = require("./middlewares");

const auth = require("./auth");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.get("/", (req, res, next) => {
  res.json({
    message: "Welcome to Community API",
  });
});

app.use("/auth", auth);

app.use(notFound);
app.use(errorHandler);

module.exports = app;
