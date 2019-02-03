const validator = require("../../utils/validate");

exports.create = validator({
  player: "string|required|min:4|max:30"
});

exports.join = validator({
  room: "string|required|exists:Room,_id|mongo",
  player: "string|required|min:4|max:30"
});
