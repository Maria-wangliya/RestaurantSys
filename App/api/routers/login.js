var bodyParser = require('body-parser');
var url = require('url');
var jwt = require('jsonwebtoken');//用来创建和确认用户信息摘要
var sql = require('../modules/SQLHelper.js');
module.exports = {
	
	Login: function(app){
		
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
		app.post('/login', function(req, res){
			var uesr = {
				username: req.body.username,
			}
			var token = jwt.sign(user, 'secret', {
				'expiresIn': 1440 // 设置过期时间
			})
			res.send({state: true, token: token});
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
		
	}
}