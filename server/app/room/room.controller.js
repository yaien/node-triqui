const Room = require("./room.model");
const isValid = require("mongoose").Types.ObjectId.isValid;

exports.create = async (req, res) => {
  try {
    let playerData = { name: req.body.player };
    let room = new Room({ players: [playerData] });
    await room.save();
    let player = room.players[0];
    res.send({ room, player });
  } catch (err) {
    next(err);
  }
};

exports.join = async (req, res, next) => {
  try {
    let room = await Room.findById(req.body.room);
    if (room.players.length >= 2) {
      return res.status(400).send({ message: "room is full" });
    }
    let player = room.players.create({ name: req.body.player });
    room.players.push(player);
    await room.save();
    res.send({ room, player });
  } catch (err) {
    next(err);
  }
};

exports.find = async (req, res, next) => {
  try {
    let id = req.params.room;
    if (isValid(id)) {
      let room = await Room.findById(req.params.room);
      if (room) return res.send(room);
    }
    res.status(404).send({ message: "Room Not Found" });
  } catch (err) {
    next(err);
  }
};
