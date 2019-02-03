const swaggerUI = require("swagger-ui-express");
const yaml = require("yaml");
const fs = require("fs");
const path = require("path");

function doc() {
  let fileUrl = path.resolve(__dirname, "./swagger.yaml");
  let fileString = fs.readFileSync(fileUrl).toString("utf-8");
  return yaml.parse(fileString);
}

module.exports = app => {
  try {
    let swagger = doc();
    app.use("/docs", swaggerUI.serve, swaggerUI.setup(swagger));
  } catch (err) {
    console.error(err);
  }
};
