<template>
  <div class="hall">
       <div class="all">
        <sheader></sheader>
        <Lunbo></Lunbo>
        <foods ></foods>
      </div>
      <bottomnav></bottomnav>
      </div>
</template>

<script>
  import sheader from '../Header/Header.vue'
  import Lunbo  from  '../Carousel/Carousel.vue'
  import foods  from  '../FoodsList/FoodsList.vue'
  import bottomnav from '../Bottomnav/Bottomnav.vue'



export default{
    components:{
        sheader,
        Lunbo,
        foods,
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
  .hall{
     height:100%;
     display: flex;
    flex-direction:column;
  }

  .all{
      height:100%;
      display:flex;
      flex-direction:column;
      background:#F3F3F3;
  }


 .all .FoodsList{
     flex:1;
     /*height:6.0rem;*/
    overflow-y:auto;
   }


</style>
