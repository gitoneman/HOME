var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var _User = new Schema({
	username:String,
	password:String
});

module.exports = mongoose.model("user",_User);