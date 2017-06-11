"use strict";
const gameService = require("../services/life-cycle");

class Game {

  static distribute(request, response){
    console.log("GameService : distribute card called");
     response.send(gameService.distributeCards(6));
  };

  static cards (request, response) {

  };

  static toss(request, response){

  };
}

module.exports = Game;
