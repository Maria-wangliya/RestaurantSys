var bodyparser = require('body-parser');
var db = require('../modules/SQLHelper.js');
module.exports = {
    
    Phone: function(app){
        app.use(bodyparser.json());
        app.use(bodyparser.urlencoded({ extended: false }));
        app.get('/getColdDrink', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            //var order = 'select  * from '表名' where id="传过来的参数"';
            var order = 'select  * from TelColdDrink'
            //查询这个id所对应的这一条数据
            db.select(order, function(restul){
                response.send(restul);
            })
        })
        app.get('/TelHotDish', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            //var order = 'select  * from '表名' where id="传过来的参数"';
            var order = 'select  * from TelHotDish'
            //查询这个id所对应的这一条数据
            db.select(order, function(restul){
                response.send(restul);
            })
        })
        app.get('/TelXiaoChao', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            //var order = 'select  * from '表名' where id="传过来的参数"';
            var order = 'select  * from TelXiaoChao'
            //查询这个id所对应的这一条数据
            db.select(order, function(restul){
                response.send(restul);
            })
        })
        app.get('/TelChuanFu', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            //var order = 'select  * from '表名' where id="传过来的参数"';
            var order = 'select  * from TelChuanFu'
            //查询这个id所对应的这一条数据
            db.select(order, function(restul){
                response.send(restul);
            })
        })
        app.get('/TelDianXin', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            //var order = 'select  * from '表名' where id="传过来的参数"';
            var order = 'select  * from TelDianXin'
            //查询这个id所对应的这一条数据
            db.select(order, function(restul){
                response.send(restul);
            })
        })
        app.get('/TelDrink', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            //var order = 'select  * from '表名' where id="传过来的参数"';
            var order = 'select  * from TelDrink'
            //查询这个id所对应的这一条数据
            db.select(order, function(restul){
                response.send(restul);
            })
        })
    }
}


