
<template>
  <div class="caidan">
        <h1 class="title"><i @click="backMenu" class="glyphicon glyphicon-arrow-left special2"></i>{{Diancan}}</h1>
        <div class="leibie">
            <h1><router-link to="/colddrink"><span>{{Colddrink}}</span></router-link></h1>
            <h1><router-link to="/hotdishes"><span>{{Hotdishes}}</span></router-link></h1>
            <h1><router-link to="/xiaochao"><span>{{Fried}}</span></router-link></h1>
            <h1><router-link to="/Sichuancuisine"><span>{{Sichuancuisine}}</span></router-link></h1>
            <h1><router-link to="/dianxin"><span>{{Dessert}}</span></router-link></h1>
            <h1><router-link to="/drink"><span>{{Guzzle}}</span></router-link></h1>
        </div>
        <bottomnav></bottomnav>
  </div>
</template>

<script>
  import sheader from '../Header/Header.vue'
  import lunbo  from  '../Carousel/Carousel.vue'
  import foods  from  '../FoodsList/FoodsList.vue'
  import bottomnav from '../Bottomnav/Bottomnav.vue'
  import router from '../../router'

export default{
    name:'app',
    data: function(){
        return {
            Diancan:'点餐菜单',
            Colddrink:'精致冷饮',
            Hotdishes:'精选热菜',
            Fried:'特色小炒',
            Sichuancuisine:'川府菜肴',
            Dessert:'精品点心',
            Guzzle:'酒水饮料',
        }
    },
    methods:{
        backMenu(){
          router.push({name:'VHome'});
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
   .caidan{
        height:100%;
        display:flex;
        flex-direction:column;
    }
     #app{
        height:100%;
        overflow: hidden;
     }
    .caidan .leibie{
        flex:1;
        overflow: auto;
        display:flex;
        flex-direction:row;
        flex-wrap:wrap;
        justify-content:space-between;
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
    .title h1{position:relative;}
    .title h1 i{
        position:absolute;
        top:0;left:0;
    }
   .leibie h1{
        padding:0;
        margin:0;
        text-align:center;
    }

   .leibie span{
        display:inline-block;
        height:100%;
        width:100%;
    }
 .leibie h1:nth-child(1){
    width:49%;
    /*background: #FFBF00;*/
    background:url(../../assets/img/lenyin.jpg);
    margin-top:0.1rem;
 }

.leibie h1:nth-child(2){
    width:50%;
    margin-top:0.1rem;
    background:url(../../assets/img/recai.jpg);


 }
.leibie h1:nth-child(3){
    width:100%;
    margin-top:0.1rem;
    background:url(../../assets/img/xiaochao.jpg);

 }


.leibie h1:nth-child(4){
    width:33%;
    background:url(../../assets/img/chuancai.jpg);
    margin-top:0.1rem;

 }
.leibie h1:nth-child(5){
    width:32%;
    margin-top:0.1rem;
    background:url(../../assets/img/dianxin.jpg);
 }
.leibie h1:nth-child(6){
    width:33%;
    margin-top:0.1rem;
    background:url(../../assets/img/jiushui.jpg);
 }
  .leibie h1 span{
        color: white;
        font-size:0.66rem;
        height:3.54rem;
        line-height: 3.54rem;
        font-weight: 700;
    }
    .glyphicon.glyphicon-arrow-left.special2{
        left:-224px;
    }

</style>


