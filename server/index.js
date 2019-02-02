const express = require("./config/express");
const mongoose = require("./config/mongoose");
const env = require("./config/env");

let app = express();

async function init() {
  try {
    await mongoose();
    app.listen(env.port);
    console.log("Server listening on http://localhost:" + env.port);
  } catch (err) {
    console.error(err);
  }
}

init();
