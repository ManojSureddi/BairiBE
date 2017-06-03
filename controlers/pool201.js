const gameService = require("../services/life-cycle");

class Game{
  static show((request,response)=>{

  });

  static cards((request,response)=>{

  });

  static toss((request,response)=>{
    return gameService.toss(6)
  });
}
