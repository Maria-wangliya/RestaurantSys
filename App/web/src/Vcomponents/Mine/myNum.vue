<template>
    <div class="mine">
        <div class="mheader">
            <h1>我的美食</h1>
        </div>
        <div class="schedule">
             <div>
                <h1>我的排队号</h1>
                <h2><i class="glyphicon glyphicon-hand-right"></i>我的号码：A15</h2>
                <h2><i class="glyphicon glyphicon-hand-right"></i>排队人数：14</h2>
             </div>
             <div>
                 <h1>当前进度</h1>
                 <h2><i class="glyphicon glyphicon-hand-right"></i>当前轮到的号是：A1</h2>
                <h2><i class="glyphicon glyphicon-hand-right"></i>在您前面还有：<span>13</span>位</h2>
             </div>
             <div>
                  <h1>美食还需等待时间</h1>
                  <h2><i class="glyphicon glyphicon-hand-right"></i>00：20</h2>
             </div>

            <h1 class="shuaxin">刷新最新进度</h1>

        </div>
         <bottomnav></bottomnav>
    </div>
</template>


<script>
   import bottomnav from '../Bottomnav/Bottomnav.vue'

   export default{
    name:'app',
    data: function(){
        return {

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
