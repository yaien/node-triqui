const ObjectId = require("mongoose").Types.ObjectId;

module.exports = (data, field, message, args, get) => {
  let id = get(data, field);
  return new Promise((resolve, reject) => {
    return ObjectId.isValid(id) ? resolve() : reject(message);
  });
};
