<template>
    <div class="FoodsList">
          <div class="sign">
            <h1><i class="el-icon-star-off"></i>本店招牌<i class="el-icon-star-off"></i></h1>
            <img @click="ToZhaoPai" src="../../assets/foods/zhaopai6.jpg">
          </div>
          <div class="popular sign">
            <h1><i class="glyphicon glyphicon-heart-empty"></i>热门推荐<i class="glyphicon glyphicon-heart-empty"></i></h1>
              <img @click="ToTuiJian"  src="../../assets/foods/tuijian2.jpg">
          </div>
          <div class="activity sign">
              <h1><i class="el-icon-loading"></i>活动专区<i class="el-icon-loading"></i></h1>
              <img @click="ToHuoDong" src="../../assets/foods/huodong.jpg">
          </div>
          <div class="drink sign">
          <h1><i class="glyphicon glyphicon-tint"></i>夏日饮品<i class="glyphicon glyphicon-tint"></i></h1>
              <img @click="ToDrink" src="../../assets/foods/yinliao.jpg">

          </div>
    </div>
</template>


<script>
    import './FoodsList.scss'
    import router from '../../router'
    export default{
      methods:{
        ToZhaoPai(){
          router.push({name:"Sichuancuisine"})
        },
        ToTuiJian(){
          router.push({name:"xiaochao"})
        },
        ToHuoDong(){
          router.push({name:'dianxin'})
        },
        ToDrink(){
          router.push({name:'drink'})
        }
      },
      components:{

       }

    }

</script>


