const env = require("./env");
const mongoose = require("mongoose");

module.exports = () => {
  console.log("Connecting to database " + env.mongoUrl);
  return mongoose.connect(env.mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
};
