const express = require("express");
const morgan = require("morgan");
const errorHandler = require("./middlewares/error");

const router = require("./routes");

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

app.use(errorHandler);

module.exports = app;
