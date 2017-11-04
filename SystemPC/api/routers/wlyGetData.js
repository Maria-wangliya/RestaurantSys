var bodyparser = require('body-parser');
var urlencode = bodyparser.urlencoded({extended: true});
var db = require('../modules/SQLHelper.js');
module.exports = {
    
    wlyData: function(app){
        app.get('/getMembers', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            var order = 'select * from memberList';
            //var order = 'select  * from '表名' where id="传过来的参数"';
            //查询这个id所对应的这一条数据
            db.select(order, function(restul){
                response.send(restul);
            })
        })
        app.get('/getAdmin', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            var order = 'select * from adminList';
            //var order = 'select  * from '表名' where id="传过来的参数"';
            //查询这个id所对应的这一条数据
            db.select(order, function(restul){
                response.send(restul);
            })
        })
        app.get('/getAdminLimit', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            var order = 'select * from adminLimit';
            //var order = 'select  * from '表名' where id="传过来的参数"';
            //查询这个id所对应的这一条数据
            db.select(order, function(restul){
                response.send(restul);
            })
        })
        app.get('/getOrderList', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            var order = 'select * from orderList';
            //var order = 'select  * from '表名' where id="传过来的参数"';
            //查询这个id所对应的这一条数据
            db.select(order, function(restul){
                response.send(restul);
            })
        })
        app.get('/orderlistUndown', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            var order = 'select * from orderlistUndown';
            //var order = 'select  * from '表名' where id="传过来的参数"';
            //查询这个id所对应的这一条数据
            db.select(order, function(restul){
                response.send(restul);
            })
        })
        app.get('/orderlistDown', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            var order = 'select * from orderlistDown';
            //var order = 'select  * from '表名' where id="传过来的参数"';
            //查询这个id所对应的这一条数据
            db.select(order, function(restul){
                response.send(restul);
            })
        })
        app.get('/getMenu', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            var order = 'select * from menu';
            //var order = 'select  * from '表名' where id="传过来的参数"';
            //查询这个id所对应的这一条数据
            db.select(order, function(restul){
                response.send(restul);
            })
        })


        app.get('/getMembers2', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            var order = 'select * from memberList';
            //var order = "insert into '表名' ('字段名','字段名','字段名'...) values('传过来参数','传过来参数','传过来参数')";
            //给这个吗表中插入这些数据
            db.insert(order, function(result){
                response.send(result);
            })
        })
        app.get('/getAdmin2', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            var order = 'select * from adminList';
            //var order = "update '表名' set '想要设置的字段名'='原来的数据'+'传过来的数据' where id='传过来的id'";
            db.update(order, function(restul){
                response.send(restul);
            })
        })
        app.get('/getAdminLimit2', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            var order = 'select * from adminLimit';
            //var order = "update '表名' set '想要设置的字段名'='原来的数据'+'传过来的数据' where id='传过来的id'";
            db.update(order, function(restul){
                response.send(restul);
            })
        })
        app.get('/getgoods4', function(request, response){
            //在这个位置处理传过来的参数
            var argument = request.body;
            var order = "DELETE FROM '表名' where id='传过来的参数'";
            var orderFind = "select  '查询id' from '表名' where id='传过来的参数'";
            db.select(orderFind, function(restul){
                if(restul.message.length>0){
                    db.delete(order, function(restul){
                        response.send({status:true,message:'数据已经删除'});
                    })
                }else{
                    response.send({status:false,message:'数据不存在'});
                }
            })
            
        })
    }
}


