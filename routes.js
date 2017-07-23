const express= require("express");
const router= new express();
const gameMiddleware=require("./middleware/game");

router.use("/game",gameMiddleware);

/*router.use("/gam",(req,res)=>{
  res.send(services.toss(6));
});*/

router.get("/",(request,response)=>{

	response.send("manoj");
});


module.exports=router;
