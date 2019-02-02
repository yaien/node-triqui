const validator = require("../../utils/validate");

exports.create = validator({
    player: "string|required|min:4|max:10"
});

exports.join = validator({
    room: "string|required|exists:Room,_id",
    player: "string|required|min:4|max:10"
});
