var url = require("url");

function logger(pathname){
	console.log("Routing a request for " + pathname);
}

exports.logger = logger;

exports.routes = {
	'get':[
		{
		path : '/', 
		method : function(req, res) {
				exports.logger(url.parse(req.url).pathname);
				var body = '';
				res.setHeader('Content-Type','text/html');
				res.setHeader('Content-Length',body.length);
				res.end(body);
			}
		},
		{
		path : '/login',
		method : function(req, res) {
				exports.logger(url.parse(req.url).pathname);
				var title = 'Log In Page';
				res.setHeader('Content-Type','text/html');
				// res.send('Hello World');
				res.render('index.jade');
				res.end();
			}
		}
	]
}