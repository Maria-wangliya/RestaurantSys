var bodyparser = require('body-parser');
var db = require('../modules/SQLHelper.js');
module.exports = {
	tijiao: function(app) {
		app.use(bodyparser.json());
		app.use(bodyparser.urlencoded({
			extended: false
		}));
		app.post('/tijiao', function(request, response) {
			//在这个位置处理传过来的参数
			var now = new Date;
			var order1 = `insert into orderlistundown (num,price,details,name,type,status) values('${request.body.num}', '${request.body.price}','${now}','${request.body.foodName}','${request.body.type}','未完成')`;
			var order = `insert into orderlist (num,price,details,name,type,status) values('${request.body.num}', '${request.body.price}','${now}','${request.body.foodName}','${request.body.type}','未完成')`;
			//查询这个id所对应的这一条数据
			var order2 = `select id from orderlistundown where details = '${now}'`
			db.insert(order1, function(restul) {
				if(restul.status) {
					db.insert(order, function(restul) {
						if(restul.status) {
							db.select(order2, function(restul){
								response.send(restul);
							})
						} else {
							response.send({status: false, mesaage: "新增失败" });
						}
					})
				} else {
					response.send({status: false, mesaage: "新增失败" });
				}
			})
		})
	}
}