// let mongoose = require('../mong/mongo.js'),    //加载mongoose对象
//     Schema = mongoose.Schema;      
// let UserSchema = new Schema({        
//     username : { type: String },              
//     password: {type: String},
//     usertel: {type: String}  
// });
// module.exports = mongoose.model('User',UserSchema)
var mongoose=require("../mong/mongo.js");
	 const { Schema } = mongoose
		var UserSchema = new Schema({
			username:{type:String},
			password:{type:String},
			usertel:{type:String}
		})
var User = mongoose.model("User",UserSchema);
module.exports=User;