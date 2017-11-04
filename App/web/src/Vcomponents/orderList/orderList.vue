<template>
    <div  class="car">
        <h1 class="title"><i @click="back" class="glyphicon glyphicon-arrow-left special2"></i>{{orderlist}}</h1>
        <h1 class="title1">
            <span><router-link  :to="{name:'all'}"  class="bb">历史订单</router-link></span>
            <span><router-link  :to="{name:'waitingpayment'}"  class="bb">待付款</router-link></span>
            <span><router-link  to="/Alreadypaid"  class="bb">已付款</router-link></span></h1>
        <div class="mes">
             <router-view></router-view>
        </div>
        <bottomnav></bottomnav>
    </div>

</template>


<script>
  import bottomnav from '../Bottomnav/Bottomnav.vue'
  import router from '../../router'

   export default{
       name:'app',
       data:function(){
            return {
               orderlist:'我的订单',
            }
       },
       methods:{
          back(){
            router.push({name:'mine'})
          }
       },
       components:{
            bottomnav,
       }


   }
</script>


<style>

     body,html{
        height:100%;
    }
     #app{
        height:100%;
        overflow: hidden;
     }

 .car{
        height:100%;
        display:flex;
        flex-direction:column;
    }

    .mes{
      flex: 1;
     overflow: auto;
     background: #eee;
    }
    .glyphicon.glyphicon-arrow-left.special2{
      left:-210px;
    }

    .title{
        background: #FD5200;
        height:2rem;
        line-height: 2rem;
        text-align:center;
        color:white;
        font-size:0.65rem;
        margin:0;
    }

    .title1{
        display: flex;
        height:1.45rem;
        background: white;
        margin:0;
    }
   .title1 span{
        flex:1;
        justify-content:space-around;
        height:1.45rem;
        line-height: 1.45rem;
        text-align:center;
        font-weight: 700;
    }

      .title1 .bb{
        color:#444;
        text-decoration: none;
    }


   .title1  .router-link-active{
        color:#58bc58;
   }

</style>
