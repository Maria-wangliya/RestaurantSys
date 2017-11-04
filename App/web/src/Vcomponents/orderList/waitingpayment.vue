<template>
    <div class="allOrder">
        <div class="top1" v-for="item in selectList">
            <h1>CM美食<i class="glyphicon glyphicon-menu-right"></i><span>未付款</span></h1>
            <div class="allDiv">
            <img :src="item.imgurl"><p><span>类型: {{item.type}}</span><span>名称: {{item.name}}</span><span>价格: {{item.price}}</span><i>x1</i></p>
            </div>
              <div class="time"></div>
              <el-button type="danger" @click = "delet($event)"  >删除订单</el-button>
              <el-button  type="warning" @click = "pay($event)" >去支付</el-button>
        </div>
        <div class="top1">
            <h1>CM美食<i class="glyphicon glyphicon-menu-right"></i><span>未付款</span></h1>
            <div class="allDiv">
            <img src="../../../static/img/foods/qiyiguo.jpg"><p><span>类型: 冰饮</span><span>名称: 苹果汁</span><span>价格: ￥5.00</span><i>x1</i></p>
            </div>
              <div class="time"></div>
              <el-button type="danger" @click = "delet($event)"  >删除订单</el-button>
              <el-button  type="warning" @click = "pay($event)" >去支付</el-button>
        </div>
    </div>
     
</template>
<script>
    import $ from "jquery"
    var ws;
    ws = new WebSocket("ws://10.3.131.9:666");
    ws.onmessage = function(_msg) {
        if(_msg.data !== "您有新订单"){
            alert(_msg.data)
        }
    };
    export default{
        data() {
            var selectList = [];
            var cookies = document.cookie;
            if(cookies.length>0){
                cookies = cookies.split('; ');
                cookies.forEach(function(cookie){
                    var temp = cookie.split('=');
                    if(temp[0] === 'selectList'){
                        selectList = JSON.parse(temp[1]);
                    }
                })
            }
            return {
                one:false,
                two: false,
                selectList:selectList
            }
        },
        methods: {
            pay(event) {
                $(event.target).html("支付中...").parent().css("background","#58bc58")
                var type = $($(event.target).parents(".top1").children(".allDiv").find("span").eq(0)).html().split(":")[1]
                var foodName = $($(event.target).parents(".top1").children(".allDiv").find("span").eq(1)).html().split(":")[1]
                var price = $($(event.target).parents(".top1").children(".allDiv").find("span").eq(2)).html().split(":")[1]
                var num = $($(event.target).parents(".top1").children(".allDiv").find("i").eq(0)).html().slice(1)
                var now = new Date;
                var now1 = Date.parse(now)*1 + 1800000;
                this.two = true;
                var self = this;
                $.post("http://10.3.131.9:100/tijiao", {type:type, foodName:foodName, price:price, num:num}, function(res){
                    $($(event.target).parents(".top1").children(".allDiv").find("i").eq(0)).html(`${res.message[0].id}号`)
                    console.log(res)
                    if(res.status){
                        $(event.target).parents(".top1").children(".time").show()
                        var daojishi = setInterval(function(){
                            var nowTime = Date.now();
                            var offset = parseInt((now1 - nowTime)/1000);
                            if(offset<=0){
                                $(event.target).parents(".top1").children(".time").hide()
                                clearInterval(daojishi);
                                return;
                            }
                            var secLeft = offset%60;
                            var minLeft = parseInt(offset/60)%60;
                            $(event.target).parents(".top1").children(".time").html(`预计等待时间:${minLeft}分${secLeft}秒`) ;
                        },1000);
                        $(event.target).html("支付完成").parent().css("background","#58bc58");
//                          ws.onopen = function(){
                            ws.send("支付成功");
//                      }
                        self.two = false;
                        self.one = true;
                    }
                })
            },
            delet(event){
                $(event.target).parents(".top1").remove()
            }
        }
    }
</script>
<style lang="scss">
    .allOrder .time{float: left;font-size: 24px;display: none;}
    .allOrder{
        padding-top:16px;
        display:flex;
        flex-direction: column;
        overflow-y: auto;
        div{
            font-size:30px;
            flex:1;
            background: white;
            margin: 0.1rem  0;
            padding:10px;
            img{height:160px;width:160px;}
            h1{font-size:34px;}
            .allDiv{
                display:flex;flex-direction:row;margin-bottom:0;
                p{position:relative;padding:10px 20px;display:flex;flex-direction:column;span{font-size:32px;}i{display:block;height:80px;width:80px;background:#FD5200;color:#fff;position:absolute;top:20px;right:-230px;border-radius:50%;text-align:center;line-height:80px;font-style:normal;font-weight:bold;}}
            }
            .el-button.el-button--danger,.el-button.el-button--warning{height:60px;width:160px;float:right;margin-right:20px;font-size:32px;}
        }
    }


</style>
