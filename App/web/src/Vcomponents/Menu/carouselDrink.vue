<template>
    <div class="Carousel">
        <ul class="Cul">
            <li><img src="../../assets/foods/rio01.jpg" height="250" width="750" alt=""></li>
            <li><img src="../../assets/foods/rio02.jpg" height="250" width="750" alt=""></li>
            <li><img src="../../assets/foods/rio03.jpg" height="250" width="750" alt=""></li>
            <li><img src="../../assets/foods/rio02.jpg" height="250" width="750" alt=""></li>
        </ul>
        
    </div>
</template>


<script>
//
   import  lunbo from '../../utils/lunbo.js'

    export default{
       components:{

       },
       mounted:function(){
          lunbo.aa();
       }

    }

</script>


<style>
    .Carousel{
    height:3.3rem;
    position:relative;
    overflow: hidden;
   }
 .Carousel ul{
    width:30.0rem;
   display:flex;
   flex-direction:row;
   position:absolute;
   left:0;
 }

  .Carousel ul li{
    list-style: none;
  }

.Carousel .page{position: absolute;left:50%;bottom:10px;transform: translate(-50%,0);z-index: 99;}
.Carousel .page span{display:inline-block;margin:0 15px;width:25px;height:25px;overflow: hidden;background-color: #ddd;border-radius: 50%;text-indent:-1000px;box-shadow: 0 0 5px rgba(0,0,0,.5);}
.Carousel .page span.active{background-color: orange;transform:scale(1.5);border:1px solid orange;box-shadow: 0 0 10px orange; }
</style>
