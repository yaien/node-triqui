const mongoose = require("mongoose");

module.exports = async (data, field, message, args, get) => {
  let value = get(data, field);
  let [modelName, key] = args;
  let model = mongoose.model(modelName);
  try {
    let count = await model.countDocuments({ [key || field]: value });
    if (count == 0) throw message;
  } catch {
    throw message;
  }
};
