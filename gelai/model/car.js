var mongoose = require("../mongo/mongo.js");
var Schema = mongoose.Schema;
var CarSchema = new Schema({
	"id": {type:String},
	"title": {type:String},
	"imgUrl": {type:String},
	"price": {type:String},
	"reviews": {type:String},
	"rate": {type:String}
})
var Car = mongoose.model("Car",CarSchema);
module.express = Car;