"use strict";
const GameService = require("../services/life-cycle");
const gameService = new GameService();
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
