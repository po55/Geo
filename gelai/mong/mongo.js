var mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/glyh");
// 也可以设置解析数据的方式，当然不设置也可以
// mongoose.connect("mongodb://127.0.0.1:2701",{useMongoClient:true});

//根据连接状态，会触发不同的事件
mongoose.connection.on("connected",function(){
	console.log("成功");
})

mongoose.connection.on("error",function(){
	console.log("失败");
})

mongoose.connection.on("disconnected",function(){
	console.log("断开");
})