<template>
    <div  class="car">
        <h1 class="title"><i @click="back" class="glyphicon glyphicon-arrow-left special2"></i>{{orderlist}}</h1>
        <h1 class="titleTop">
          <input type="checkbox" v-model="checked" class="checkAll" @click="change">全选
            <el-button type="success">编辑</el-button>
           <el-button type="danger" @click="delFood">删除</el-button>
          </h1>
        <div class="carPart">
          <ul>
            <li v-for="item in carlist">
              <el-checkbox-group>
                <p class="buyP"><input type="checkbox" v-model="item.checkState" class="checkAll"><span>{{item.name}}</span></p>
                <div class="buyP2"><img :src="item.imgurl">
                  <p><span>类型:{{item.type}}</span>
                  <span>名称:{{item.name}}</span>
                  <span>价格:{{item.price}}</span><span class="qty">x{{item.qty}}</span></p>
                </div>
              </el-checkbox-group>
            </li>
            <div class="hover"><el-button type="warning" round @click="ToCount"><i class="glyphicon glyphicon-shopping-cart"></i>去结算</el-button></div>
          </ul>
        </div>
        <bottomnav></bottomnav>
    </div>
</template>

<script>
  import bottomnav from '../Bottomnav/Bottomnav.vue'
  import router from '../../router'
  import $ from 'jquery'

  export default{
    name:'app',
    data:function(){
        var carlist = [];
        var cookies = document.cookie;
          if(cookies.length>0){
            cookies = cookies.split('; ');
            cookies.forEach(function(cookie){
                var temp = cookie.split('=');
                if(temp[0] === 'carlist'){
                    carlist = JSON.parse(temp[1]);
                }
            })
          }
          return {
             orderlist:'我的购物车',
             carlist:carlist,
             checked:false
          }
     },
     methods:{
        back(){
          router.push({name:'VHome'})
        },
        change(){
          this.checked = !this.checked;
          if(this.checked){
            $('.checkAll').checked = true;
            for(let $i=0;$i<this.carlist.length;$i++){
                if(this.carlist[$i].checkState == false){
                    this.carlist[$i].checkState = true
                }
            }
            for(let $j=0;$j<$('.checkAll').length;$j++){
              $('.checkAll')[$j].checked = true;
            }
          }else{
            for(let $i=0;$i<this.carlist.length;$i++){
                if(this.carlist[$i].checkState == true){
                    this.carlist[$i].checkState = false
                }
            }
            for(let $j=0;$j<$('.checkAll,').length;$j++){
              $('.checkAll')[$j].checked = false;
            }
          }
        },
        ToCount(){
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
          var has = false;
          for(let $i=0;$i<this.carlist.length;$i++){
              if(this.carlist[$i].checkState == true){
                  selectList.push(this.carlist[$i])
              }
          }
          // 写入cookie
          var date = new Date();
          date.setDate(date.getDate()+15);
          document.cookie = 'selectList=' + JSON.stringify(selectList) + ';expires=' + date.toUTCString();
          router.push({name:'waitingpayment'})
        },
        delFood(){
          for(let $i=0;$i<$('.checkAll').length;$i++){
            if($('.checkAll')[$i].checked == true){
              if(this.carlist[$i-1].imgurl == $('.checkAll')[$i].parentNode.nextElementSibling.firstElementChild.getAttribute('src')){
                this.carlist.splice($i-1,1);
                $('.checkAll')[$i].parentNode.parentNode.HTML = '';
                break;
              }
            }
          }
          var date = new Date();
          date.setDate(date.getDate()+15);
          document.cookie = 'carlist=' + JSON.stringify(this.carlist) + ';expires=' + date.toUTCString();
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
 .car{
        height:100%;
        display:flex;
        flex-direction:column;
        .checkAll{display:inlne-block;height:30px;width:30px;}
    }

    .carPart{
     flex: 1;
     overflow: auto;
     background: #fff;
     border-top:2px solid #EAEAEA;
      ul{
        padding:0 20px 20px 20px;
        li{
          .el-checkbox__inner{border:1px solid #333;}
          list-style:none;
          height:220px;
          padding:10px;
          border-bottom:2px solid #ddd;
          display:flex;flex-direction:column;
          div.buyP2{position:relative;display:flex;p{display:flex;flex-direction:column;span{padding-left:24px;font-size:32px;}
          .qty{display:block;height:80px;width:80px;background:#FD5200;color:#fff;position:absolute;top:20px;left:600px;border-radius:50%;line-height:80px;font-style:normal;font-weight:bold;}}
         }
          p.buyP{display:flex;flex-direction:row;span{font-size:32px;}}
          span{font-size:26px;padding-left:10px;color:#333;text-align:left;}
          img{height:140px;width:140px;margin-left:50px;}
        }
        .hover{padding:20px;width:100%;background:#EAEAEA;opacity:0.8;height:100px;position:absolute;bottom:96px;right:0;z-index:999;button{height:60px;width:180px;float:right;color:#fff;font-weight:bold;font-size:34px;}}
      }
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

    .titleTop{
        height:80px;
        background: white;
        margin:0;
    }
   .titleTop{
        line-height:80px;
        font-weight: 700;
        padding:0 20px;
        .el-checkbox__label{
          font-size:34px;
        }
        .el-checkbox__inner{
          width:30px;
          height:34px;
        }
        .el-button.el-button--success,.el-button.el-button--danger{
          height:50px;
          width:120px;
          float:right;
          color:#fff;
          font-size:28px;
          margin-top:18px;
          margin-right:10px;
        }
    }
    .el-checkbox__inner{
      width:30px;
      height:30px;
    }
    .titleTop .bb{
      color:#444;
      text-decoration: none;
    }

   .titleTop  .router-link-active{
        color:#58bc58;
   }

</style>
