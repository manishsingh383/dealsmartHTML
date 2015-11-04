var express = require("express"),
    app =express();
	app.use('/', express.static(__dirname + '/'));
var server = require("http").createServer(app);
    server.listen(5020);

    app.get("/",function(req , res){
    	res.sendfile('DS_signUp.html');
    	// res.sendfile('home.html');
    });
	console.log('fucking server is running at 5010');