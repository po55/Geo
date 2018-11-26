var express = require('express');
var  bodyParser = require('body-parser');
var User = require('./model/user.js')
var app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(function (req, res, next) {    
  	res.header("Access-Control-Allow-Credentials","true");   
    res.header("Access-Control-Allow-Origin", req.headers.origin);    
  	res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");    
  	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");    
  	next();
  });

app.use(express.static("public"));

app.post("/login",function(req,res){
	User.find({username:req.body.username,password:req.body.password},function(err,data){
		console.log("用户登录已存在")
		if(data.length!=0){
			var username = req.body.username;
			var tokenname = req.body.username+parseInt(Math.random()*10000)
			var gettime = new Data().getTime();
			var overtime = gettime + 1000*60*24;

			new Token({
				username:username,
				tokenID:tokenID,
				overtime:overtime
			}).save(function(err,result){
				if(err){
					console.log("用户验证信息存储失败")
					res.send();
				}else{
					console.log("用户验证信息存储成功，马上响应")
					res.seng({
						errCode:0,
						errMsg:"登录成功",
						tokenID:req.body.username+parseInt(Math.random()*10000),
						username:req.body.username
					})
				}
			})
		}else{
			res.send();
		}
	})
})

app.post("/reg",function(req,res){
	if(req.body.telCode!=1234){
		res.send({
			errCode:2,
			errMsg:"验证码错误"
		})
	}else{
		User.find({
			username:req.body.username
		},function(err,data){
			if(data.length!=0){
				res.send({
					errCode:1,
					errMsg:"用户名已经存在"
				})
			}else{
				User.find({
				usertel:req.body.userTel
				},function(err,data){
					if(data.length!=0){
						res.send({
							errCode:3,
							errMsg:"手机号已存在"
						})
					}else{
						new User({
							username:req.body.username,
							password:req.body.password,
							usertel:req.body.userTel,
						}).save(function(err,result){
							if(!err){
								console.log("用户注册信息写入成功马上发送响应")
								res.send({
									errCode:0,
									errMsg:"注册成功"
								})
							}
						})
					}
				})
			}
		})
	}
})

app.listen(3000,function(){
	console.log("server is running")
})