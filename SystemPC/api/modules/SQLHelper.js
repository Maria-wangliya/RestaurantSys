var mysql = require('mysql');

//创建连接池
var pool  = mysql.createPool({
  host     : 'localhost',
  user     : 'root',
  password : '',
  port: 3306,
  database: 'teamproject',//数据库库名
  waitForConnections:true,  //当连接池没有连接或超出最大限制时，设置为true且会把连接放入队列，设置为false会返回error
	queueLimit:0, //最大连接请求队列限制，设置为0表示不限制，默认：0
});

module.exports = {
	   //tsql操作命令字符串
		select: function(tsql, callback){
				pool.query(tsql, function(error, rows){
						if(error){
						callback({status:false,message:error});
					}else{
						callback({status:true,message:rows});
					}
				})
		},
		insert: function(tsql, callback){
				pool.query(tsql, function(error, rows){
						if(error){
						callback({status:false,message:error});
					}else{
						callback({status:true,message:rows});
					}
				})
		},
		update: function(tsql, callback){
				pool.query(tsql, function(error, rows){
						if(error){
						callback({status:false,message:error});
					}else{
						callback({status:true,message:rows});
					}
				})
		},
		delete: function(tsql, callback){
				pool.query(tsql, function(error, rows){
					if(error){
						callback({status:false,message:error});
					}else{
						callback({status:true,message:rows});
					}
				})
		}
		
}
