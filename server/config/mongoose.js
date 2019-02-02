const env = require("./env");
const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(env.mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true
  });
};
