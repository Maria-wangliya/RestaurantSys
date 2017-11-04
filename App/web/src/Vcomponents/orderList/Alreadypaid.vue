<template>
    <div class="allOrder">
        <div class="top1">
            <h1>CM美食<i class="glyphicon glyphicon-menu-right"></i><span>已付款</span></h1>
            <div class="allDiv">
            <img src="../../assets/foods/cold1.jpg"><p><span>类型: 酒水饮料</span><span>名称: 冷饮</span><span>价格: ￥20.00</span><i>x1</i></p>
            </div>
              <el-button type="danger">删除订单</el-button>
                <el-button type="success">评价订单</el-button>
        </div>
        <div class="top1">
            <h1>CM美食<i class="glyphicon glyphicon-menu-right"></i><span>已付款</span></h1>
            <div class="allDiv">
            <img src="../../assets/foods/cold1.jpg"><p><span>类型: 酒水饮料</span><span>名称: 冷饮</span><span>价格: ￥20.00</span><i>x1</i></p>
            </div>
              <el-button type="danger">删除订单</el-button>
              <el-button type="success">评价订单</el-button>
        </div>
        <div class="top1">
            <h1>CM美食<i class="glyphicon glyphicon-menu-right"></i><span>已付款</span></h1>
            <div class="allDiv">
            <img src="../../assets/foods/cold1.jpg"><p><span>类型: 酒水饮料</span><span>名称: 冷饮</span><span>价格: ￥20.00</span><i>x1</i></p>
            </div>
              <el-button type="danger">删除订单</el-button>
                <el-button type="success">评价订单</el-button>
        </div>
        <div class="top1">
            <h1>CM美食<i class="glyphicon glyphicon-menu-right"></i><span>已付款</span></h1>
            <div class="allDiv">
            <img src="../../assets/foods/cold1.jpg"><p><span>类型: 酒水饮料</span><span>名称: 冷饮</span><span>价格: ￥20.00</span><i>x1</i></p>
            </div>
              <el-button type="danger">删除订单</el-button>
                <el-button type="success">评价订单</el-button>
        </div>
    </div>
</template>

<script>

    export default{

    }

</script>

<style lang="scss">
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
            .el-button.el-button--danger,.el-button.el-button--success{height:60px;width:160px;float:right;margin-right:20px;font-size:32px;}
        }
    }


</style>
