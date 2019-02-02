const ObjectId = require("mongoose").Types.ObjectId;

module.exports = async (data, field, message, args, get) => {
    let id = get(data, field);
    if (ObjectId.isValid(id)) return;
    throw message;
};
