var bodyParser = require('body-parser');
var url = require('url');
var jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要
var db = require('../modules/SQLHelper.js');
module.exports = {
	
	Login: function(app){
		app.use(bodyParser.json());
		app.use(bodyParser.urlencoded({extended: false}));
		//session过滤器
		// app.use(function(req, res, next){
		// 	if(!req.session.name && url.parse(req.url).pathname != "/login"){
		// 		next('{state: false, message: "当前没有权限访问"}');
		// 	} else {
		// 		next();
		// 	}
		// 	//你可以执行下一步操作
		// })
		//登录token验证
		app.post('/login', function(request, response){
			var order = `select name from login where name = '${request.body.username}'`
			var order1 = `select password from login where name = '${request.body.username}'`
			var order2 = `select limits from login where name = '${request.body.username}'`
			//查询这个id所对应的这一条数据
			db.select(order, function(restul){
				if(restul.message.length>0){
					db.select(order1, function(restul){
						if(restul.message[0].password == request.body.password){
							db.select(order2, function(restul){
								if(restul.message[0].limits == request.body.identity){
										var user = {
											username: request.body.username,
										}
										var token = jwt.sign(user, 'secret', {
											'expiresIn': 1440 // 设置过期时间
										})
										response.send({statue: true, token: token});
								}else{
									response.send({status:false,message:"职位错误"})
								}
							})
						}else{
							response.send({status:false,message:"密码错误"})
						}
					})
				}else{
					response.send({status:false,message:"用户名不存在"})
				}
			})
		})
		//进入主页进行身份验证的操作
		app.post('/token', function(req, res){
			var token = req.body.token || req.query.token || req.headers['authorization'];
			if (token) {
				jwt.verify(token, 'secret', function(err, decoded) {
					if (err) {
						return res.send({ success: false, message: err.message });
					} else {
						// 如果没问题就把解码后的信息保存到请求中，供后面的路由使用
						res.send({ success: true, decoded: decoded });
					}					
				})
			} else {
				res.send({ success: false, message: "token不存在" });
			}
		})
		app.post('/loginSelect', function(req, res){
			var order = `select limits from login where name = '${req.body.username}'`
			db.select(order, function(restul){
				res.send({status:true, message: restul.message[0].limits})
			})
		})
	}
}

//app.get('/a', function(){
//	req.username => 001
//})
//app.get('/getuser', function(req, res){
//	//db
//	if(req.usernname == "001"){
//		
//	}
//	
//	res.send({});
//})
//
//
//$.get('/getuser?username=001', function(res){
//	
//})