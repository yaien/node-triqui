const Room = require("./room.model");

exports.create = async (req, res) => {
  let room = new Room({ players: [req.body.player] });
  await room.save();
  let player = room.players[0];
  res.send({ room, player });
};

exports.join = async (req, res) => {
  let room = req.room;
  let player = room.players.create({ name: req.body.player });
  room.players.push(player);
  await req.room.save();
  res.send({ room, player });
};
