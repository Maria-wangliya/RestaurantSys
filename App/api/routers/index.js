var express = require('express');
//引进关联路由模块
var loginRouter = require("./login.js");

var productRouter = require('./product');

var wlyRouter = require('./wlyGetData');

var wlAll =  require('./wlAll');

var phone =  require('./phone');

var app = express();

module.exports ={
	start: function(port){
		app.all('*', function(req, res, next) {
//		    res.writeHead(200, {"Content-Type"})
		    res.header("Access-Control-Allow-Origin", "*");
		    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
		    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		    res.header("X-Powered-By",' 3.2.1')
		    if(req.method=="OPTIONS") {
		      	res.sendStatus(200);/*让options请求快速返回*/
		    } else{
		      	next();
		    }
		});
		//使用关联路由模块
		loginRouter.Login(app);
		
		productRouter.Product(app);
		
		wlyRouter.wlyData(app);
		
		wlAll.tijiao(app);
		

		phone.Phone(app);
		
		app.listen(port);
	}
}