const express = require("express");
const morgan = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const env = require("./env");
const swagger = require("./swagger");

const room = require("../app/room/room.routes");

function config(app) {
  app.use(env.prod ? compression() : morgan("dev"));
  app.use(bodyParser.json());
  app.use(helmet());
  swagger(app);
}

function routes(app) {
  room(app);
}

module.exports = () => {
  let app = express();
  config(app);
  routes(app);
  return app;
};
