<template>
    <div class="mine">
        <div class="mheader">
            <h1><i @click="backMenu" class="glyphicon glyphicon-arrow-left special2"></i>个人中心</h1>
        </div>
        <div class="schedule">
            <img src="../../assets/foods/niupai.jpg">
            <ul class="myUl">
            <li @click="orderList"><i class="glyphicon glyphicon-user person"></i>我的订单 <i class="el-icon-arrow-right"></i></li>
            <li @click="food"><i class="glyphicon glyphicon-gift"></i>我的食物<i class="el-icon-arrow-right"></i></li>
            <li @click="toBuyCar"><i class="glyphicon glyphicon-shopping-cart"></i>我的购物车<i class="el-icon-arrow-right"></i></li>
            </ul>
        </div>
         <bottomnav></bottomnav>
    </div>
</template>


<script>
  import bottomnav from '../Bottomnav/Bottomnav.vue'
  import router from '../../router'
   export default{
    name:'app',
    data: function(){
        return {

        }
    },
    methods:{
        backMenu(){
          router.push({name:'VHome'});
        },
        orderList(){
          router.push({name:'waitingpayment'})
        },
        toBuyCar(){
          router.push({name:'buyCar'})
        },
        food(){
          router.push({name:'VHome'})
        }
    },
    components:{
          bottomnav,
     }
  }
</script>


<style lang="scss">
     body,html{
        height:100%;
    }
     #app{
        height:100%;
        overflow: hidden;
     }

     .mine{
            height:100%;
            display:flex;
            flex-direction:column;
        }

 .mheader h1:nth-child(1){
    height:2rem;
    line-height: 2rem;
    text-align:center;
    color:white;
    font-size:0.65rem;
    background:#FD5200;
    margin:0;
 }

  .shuaxin{
      width:90%;
      height:1.5rem;
      line-height: 1.5rem;
      text-align: center;
      color:#8C2300;
      font-weight: 700;
      border-radius: 0.8rem;
      background: white;
      margin: 0.1rem auto;
  }

  .mine .schedule{
    background: #ddd;
    flex:1;
    overflow-y: auto;
    display:flex;
    flex-direction: column;
    .myUl{
      background:#fff;height:100%;margin:0px;padding:30px;list-style:none;
      li{position:relative;padding-left:46px;font-size:34px;height:80px;line-height:80px;border-bottom:2px solid #ddd; i{position:absolute;top:24px;left:0;font-size:34px;color:#444;}}

    }
  }
  .glyphicon.glyphicon-arrow-left.special2{
    left:-210px;
  }
  .mine .schedule div{
      width:90%;
      background: white;
      border-radius: 0.8rem;
      margin: 0.1rem auto;
      flex:1;
  }
.mine .schedule div h1{
    width:4.5rem;
    height:1rem;
    line-height: 1rem;
    text-align: center;
    margin:0.2rem auto;
    border-radius:0.2rem;
    background: #8C2300;
    color:white;
}

.mine .schedule div h2{
    margin:0;
    padding-left:0.7rem;
    height:1.3rem;
    line-height: 1.3rem;
    font-size:0.5rem;
}

.mine .schedule div i{
    padding-right:0.3rem;
    color:#FD5200;

}

</style>
