var bodyparser = require('body-parser');
var db = require('../modules/SQLHelper.js');
module.exports = {
	
	wlAll: function(app){
	    app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({ extended: false }));
//		app.get('/getfoods', function(request, response){
//			//在这个位置处理传过来的参数
//			var argument = request.body;
//			//var order = 'select  * from '表名' where id="传过来的参数"';
//			var order = 'select  * from menu'
//			//查询这个id所对应的这一条数据
//			db.select(order, function(restul){
//				response.send(restul);
//			})
//		})
		app.post('/objBianji', function(request, response){
			//在这个位置处理传过来的参数
			var order = `update memberlist set name = '${request.body.name}' , sex = '${request.body.sex}' , tel = '${request.body.tel}' , email = '${request.body.email}' , job = '${request.body.job}', address = '${request.body.address}' where id = ${request.body.id}`;
			db.update(order, function(restul){
				response.send(restul);
			})
		})
		app.post('/adminBianji', function(request, response){
			//在这个位置处理传过来的参数
			var order = `update adminlist set name = '${request.body.name}' , sex = '${request.body.sex}' , tel = '${request.body.tel}' , email = '${request.body.email}' , job = '${request.body.job}', address = '${request.body.address}' where id = ${request.body.id}`;
			db.update(order, function(restul){
				response.send(restul);
			})
		})
		app.post('/Objdelet', function(request, response){
			//在这个位置处理传过来的参数
			var argument = request.body.id;
			var order = `DELETE FROM memberlist where id=${argument}`;
			db.delete(order, function(restul){
				response.send(restul);
			})
		})
		app.post('/admindelet', function(request, response){
			//在这个位置处理传过来的参数
			var argument = request.body.id;
			var order = `DELETE FROM adminlist where id=${argument}`;
			db.delete(order, function(restul){
				response.send(restul);
			})
		})
		app.post('/orderlistselect', function(request, response){
			//在这个位置处理传过来的参数
			var argument = request.body.val;
			var order = `select * from orderlist where concat(id,num,price,detalis,orderNum,table,status) like '%${argument}%'`
			//查询这个id所对应的这一条数据
			db.select(order, function(restul){
				response.send(restul);
			})
		})
		app.post('/selectJob', function(request, response){
			//在这个位置处理传过来的参数
			var argument = request.body.val;
			var order = `select * from memberlist where concat(id,date,name,sex,tel,email,job,address) like '%${argument}%'`
			//查询这个id所对应的这一条数据
			db.select(order, function(restul){
				response.send(restul);
			})
		})
		app.post('/adminLimitselect', function(request, response){
			//在这个位置处理传过来的参数
			var argument = request.body.val;
			var order = `select * from adminlimit where concat(id,name,sex,date,limits) like '%${argument}%'`
			//查询这个id所对应的这一条数据
			db.select(order, function(restul){
				response.send(restul);
			})
		})
		app.post('/xinzeng', function(request, response){
			//在这个位置处理传过来的参数
			var argument = request.body.username;
			var order = `select * from adminlimit where name = '${argument}'`
			var order1 = `insert into adminlimit (name,sex,limits,date) values('${argument}', '保密','${request.body.lim}','2017.11.01')`;
			//查询这个id所对应的这一条数据
			db.select(order, function(restul){
				if(restul.message.length>0){
					response.send({status:false,mesaage:"用户已存在"});
				}else{
					db.insert(order1, function(restul){
						if(restul.status){
							response.send({status:true,mesaage:"新增成功"});
						}else{
							response.send({status:false,mesaage:"新增失败"});
						}
					})
				}
			})
		})
		app.post('/xiugai', function(request, response){
			//在这个位置处理传过来的参数
			var argument = request.body.username;
			var order = `select * from adminlimit where name = '${argument}'`
			var order1 = `update adminlimit set limits = '${request.body.lim}' where name = '${argument}'`;
			//查询这个id所对应的这一条数据
			db.select(order, function(restul){
				if(restul.message.length>0){
					db.update(order1, function(restul){
						if(restul.status){
							response.send({status:true,mesaage:"更新成功"});
						}else{
							response.send({status:false,mesaage:"更新失败"});
						}
					})
				}else{
					response.send({status:false,mesaage:"用户不存在"});
				}
			})
		})
		app.post('/adminLimitDelete', function(request, response){
			//在这个位置处理传过来的参数
			var argument = request.body.id;
			var order = `DELETE FROM adminlist where id=${argument}`
			//查询这个id所对应的这一条数据
			db.select(order, function(restul){
				response.send(restul);
			})
		})
		app.post('/adminsearch', function(request, response){
			//在这个位置处理传过来的参数
			var argument = request.body.val;
			var order = `select * from adminlist where concat(id,date,name,sex,tel,email,job,address) like '%${argument}%'`
			//查询这个id所对应的这一条数据
			db.select(order, function(restul){
				response.send(restul);
			})
		})
		app.post('/insertPeople', function(request, response){
			//在这个位置处理传过来的参数
					
			var order = `insert into memberlist (date,name,sex,tel,email,job,address) values('${request.body.date}', '${request.body.name}','${request.body.sex}','${request.body.tel}','${request.body.email}','${request.body.job}','${request.body.address}')`;
			//查询这个id所对应的这一条数据
			db.insert(order, function(restul){
				response.send(restul);
			})
		})
		app.post('/adminPeople', function(request, response){
			//在这个位置处理传过来的参数
			var order = `insert into adminlist (date,name,sex,tel,email,job,address) values('${request.body.date}', '${request.body.name}','${request.body.sex}','${request.body.tel}','${request.body.email}','${request.body.job}','${request.body.address}')`;
			//查询这个id所对应的这一条数据
			db.insert(order, function(restul){
				response.send(restul);
			})
		})
		app.post('/orderdelet', function(request, response){
			//在这个位置处理传过来的参数
			var now = new Date;
			var argument = request.body.id;
			var order = `DELETE FROM orderlistundown where id=${argument}`
			//查询这个id所对应的这一条数据
			var order1 = `insert into orderlistdown (num,price,details,name,type,status) values('${request.body.num}', '${request.body.price}','${now}','${request.body.name}','${request.body.type}','已完成')`
			var order2 = `insert into orderlist (num,price,details,name,type,status) values('${request.body.num}', '${request.body.price}','${now}','${request.body.name}','${request.body.type}','已完成')`
			
			db.delete(order, function(restul){
				if(restul.status){
					db.insert(order1, function(restul){
						if(restul.status){
							db.insert(order2, function(restul){
								response.send(restul);
							})
						}
						
					})
				}
			})
		})
	}
}


