<template>
    <div class="bottomnav">
            <ul>
                <li><router-link to="/VHome" class="rr"><i class="glyphicon glyphicon-calendar"></i><span>首页</span></router-link></li>
                <li ><router-link to="/Menu"  class="rr"><i class="glyphicon glyphicon-cutlery"></i><span>菜单</span></router-link></li>
                <li><router-link to="/buyCar"  class="rr"><i class="glyphicon glyphicon-shopping-cart"></i><span>购物车</span></router-link></li>
                <li><router-link to="/Mine"  class="rr"><i  class="glyphicon glyphicon-user"></i><span>我的</span></router-link></li>
            </ul>
    </div>
</template>


<script>
    import  $ from '../../assets/jquery-3.1.1.js'
    export default{
       components:{

       }
    }

</script>


<style >

.bottomnav{
    height:1.3rem;
}
.bottomnav ul {
    list-style:none;
    padding:12px;
    display:flex;
    height:1.3rem;
    justify-content:space-around;
    background:#FD5200;
}

.bottomnav ul li .rr{
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:center;
    text-align:center;
    text-decoration: none;
}

.bottomnav ul li .rr i{
        font-size:0.5rem;
        color:white;
    }

.bottomnav ul li .rr span{
        color:white;
        font-size:0.43rem;
    }

.bottomnav ul li  .router-link-active span{
     color:#58bc58;
}

.bottomnav ul li  .router-link-active i{
     color:#58bc58;
}

</style>
