var bodyparser = require('body-parser');
var db = require('../modules/SQLHelper.js');
module.exports = {
	
	Product: function(app){
	    app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({ extended: false }));
		app.get('/getfoods', function(request, response){
			//在这个位置处理传过来的参数
			var argument = request.body;
			//var order = 'select  * from '表名' where id="传过来的参数"';
			var order = 'select  * from menu'
			//查询这个id所对应的这一条数据
			db.select(order, function(restul){
				response.send(restul);
			})
		})
		app.post('/update', function(request, response){
			//在这个位置处理传过来的参数
			var order = `update menu set name = '${request.body.name}' , price = '${request.body.price}' , description = '${request.body.description}' , remark = '${request.body.remark}'  where id = ${request.body.id}`;
			db.update(order, function(restul){
				response.send(restul);
			})
		})
		app.get('/getgoods3', function(request, response){
			//在这个位置处理传过来的参数
			var argument = request.body;
			//var order = "update '表名' set '想要设置的字段名'='原来的数据'+'传过来的数据' where id='传过来的id'";
			db.update(order, function(restul){
				response.send(restul);
			})
		})
		app.post('/removefoods', function(request, response){
			//在这个位置处理传过来的参数
			var argument = request.body.id;
			var order = `DELETE FROM menu where id=${argument}`;
			db.delete(order, function(restul){
				response.send(restul);
			})
		})
		app.post('/search', function(request, response){
			//在这个位置处理传过来的参数
			var argument = request.body.val;
			var type = request.body.type;
			//var order = 'select  * from '表名' where id="传过来的参数"';
			var order;
			if(type == "模糊查询"){
				 order = `select * from menu where concat(name,id,price,type,remark,description) like '%${argument}%'`
			}else if(type == "序号查询"){
				order = `select * from menu where id like '%${argument}%'`
			}else if(type == "菜名查询"){
				order = `select * from menu where name like '%${argument}%'`
			}else if(type == "价格查询"){
				order = `select * from menu where price like '%${argument}%'`
			}else if(type == "描述查询"){
				order = `select * from menu where description like '%${argument}%'`
			}else if(type == "备注查询"){
				order = `select * from menu where remark like '%${argument}%'`
			}
			//查询这个id所对应的这一条数据
			db.select(order, function(restul){
				response.send(restul);
			})
		})
			app.post('/inser', function(request, response){
			//在这个位置处理传过来的参数
			var type
			if(request.body.type == "精致冷藏"){
				type = "jzld"
			}else if(request.body.type == "精选热菜"){
				type = "jxrc"
			}else if(request.body.type == "特色小炒"){
				type = "tsxc"
			}else if(request.body.type == "川府菜肴"){
				type = "cfjy"
			}else if(request.body.type == "精品点心"){
				type = "jpdx"
			}else if(request.body.type == "酒水饮料"){
				type = "yl"
			}
			var order = `insert into menu (name,price,type,description,remark) values('${request.body.name}','${request.body.price}','${type}','${request.body.description}','${request.body.remark}')`;
			//查询这个id所对应的这一条数据
			db.insert(order, function(restul){
				response.send(restul);
			})
		})
	}
}


