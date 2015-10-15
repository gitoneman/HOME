var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Vqq = new Schema({
	title:String,
	href:String,
	img: String
});

module.exports = mongoose.model("vqq",Vqq);