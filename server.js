exports.start = function(){
	var express = require("express");
	var app = express();
	var router = require("./router");
	
	app.use('/static',express.static(__dirname + '/public'))
	for(var id in router.routes.get)
	{
		var route = router.routes.get[id];
		// console.log(routes.get[id]);
		app.get(route.path,route.method);
	}

	app.listen(8000);
	console.log("Node is listening on port 8000");
}