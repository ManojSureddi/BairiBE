
var app = require("express")();
var router=require("./routes");

app.use(router);

app.listen(3000,function() {
	console.log("listening to the port 3000");
});
