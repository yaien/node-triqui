const mongoose = require("mongoose");

const PlayerSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  sign: { type: String }
});

const RoomSchema = new mongoose.Schema({
  players: [PlayerSchema]
});

const Room = mongoose.model("Room", RoomSchema);

module.exports = Room;
