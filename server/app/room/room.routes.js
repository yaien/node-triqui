const express = require("express");
const room = require("./room.controller");
const valid = require("./room.validators");

module.exports = app => {
  let router = express.Router({});

  router.post("/create", valid.create, room.create);
  router.post("/join", valid.join, room.join);
  router.get("/:room", room.find);

  app.use("/v1/rooms", router);
};
