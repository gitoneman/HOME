var Vqq = require('../models/vqq');

module.exports = {
	movieLists:function(req,res){
		Vqq.find()
			.exec(function(err,doc){
				res.send(doc);
			});
		
	}
}