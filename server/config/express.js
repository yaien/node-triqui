const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const env = require("./env");

function config(app) {
  app.use(env.prod ? compression() : morgan("dev"));
  app.use(bodyParser.json());
  app.use(helmet());
}

function routes(app) {}

module.exports = () => {
  let app = express();
  config(app);
  routes(app);
  return app;
};
