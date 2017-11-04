var SocketServer = require('ws').Server;
var ws = new SocketServer({
port:666
});
ws.on("connection",function(client){
    client.on("message",function(_data){
        ws.clients.forEach(function(item){
             if(_data == "支付成功"){
                item.send("您有新订单")
            }else{
            	item.send(_data)
            }
        })
    })
})
ws.on("close", function(_cls){
    console.log(_cls)
})
