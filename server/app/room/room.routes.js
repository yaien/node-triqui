const express = require("express");
const room = require("./room.controller");

module.exports = app => {
  let router = express.Router({});

  router.post("/create", room.create);
  router.post("/join", room.join);

  app.use(router);
};
