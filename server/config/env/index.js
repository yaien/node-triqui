const dev = require("./dev");
const prod = require("./prod");

function env() {
  return process.env.NODE_ENV === "production" ? prod : dev;
}

module.exports = { ...env(), load: env };
