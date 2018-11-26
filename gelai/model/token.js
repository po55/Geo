var mongoose = require("../mong/mongo.js")
var Schema = mongoose.Schema;
	var TokenSchema = new Schema({
		username:{type:String},
		tokenID:{type:String},
		gettime:{type:String},
		overtime:{type:String}
	})
	var Token = mongoose.model("Token",TokenSchema);
	module.exports=Token;