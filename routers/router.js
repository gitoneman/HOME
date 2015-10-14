var User = require('./user');
var fs = require('fs');

module.exports = {
	index:function(req,res){
		console.log(req.isAuthenticated())
		fs.readFile("index.html","utf-8",function(err,data){
			res.send(data);
	  	})
	},
	user: User
}