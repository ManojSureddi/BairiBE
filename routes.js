const express= require("express");
const router= new express();
const services=require("./services/life-cycle");
router.use("/game",(req,res)=>{
	res.send(services.toss(6));
});

router.get("/",(request,response)=>{

	response.send("manoj");
});


module.exports=router;
