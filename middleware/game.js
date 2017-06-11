"use strict";
const express = require("express");
const router = new express();
const gameController = require("../controlers/game");

router.get("/distribute/:sessionId", (request, response) => {
  gameController.distribute(request, response);
});

router.get("/toss", (request, response) => {
  gameController.toss(request, response);
});

module.exports =router;