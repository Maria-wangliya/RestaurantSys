<template>
    <div class="header">
         <h2>CM美食</h2>
        <ul>
            <li><i class="glyphicon glyphicon-list"></i></li>
            <li><span><i class="glyphicon glyphicon-search"></i>
                <input type="text" placeholder="地名/小区/厨师名/热门搜索"></span>
            </li>
            <li><i class="glyphicon glyphicon-qrcode"></i></li>
        </ul>
    </div>
</template>

<script>

    export default{

       components:{

       }

    }

</script>


<style >
    .header{
    background:#FD5200;
    height:2.3rem;
}

.header h2{text-align:center;color:white;font-size:0.65rem;}

.header ul{
    display:flex;
    flex-direction:row;
    margin-top:0.3rem;
}


.header li{
    list-style:none;
    flex:1;
}


.header li:nth-child(1){
       font-size:0.4rem;
       line-height:0.9rem;
       height:0.9rem;
       color:white;
       text-align:center;

}

.header li:nth-child(1)  i{
        padding-right:  0.2rem;
        font-size:0.7rem;
        line-height:0.9rem;
       height:0.9rem;
       }


.header li:nth-child(2) span{
    display:flex;
    flex-direction:row;
     border:0.01rem solid #ccc;
    width:6.2rem;
    height:0.9rem;
    border-radius:0.4rem;
    font-size:0.33rem;
    background:white;
}

 .header li:nth-child(2) span i{
         margin:-0.01rem;
         height:0.9rem;
         line-height:0.9rem;
         font-size:0.33rem;
         padding:0 0.3rem;
    }

.header input{
    width:5.0rem;
    height:0.8rem;
    margin-top:0.05rem;
    border:0 none;
    border-radius:0.4rem;
    outline:none;
    font-size:0.33rem;
     text-align:center;
}



.header li:nth-child(3){
       margin-right:0.15rem;
       font-size:0.4rem;
       line-height:0.9rem;
       height:0.9rem;
       color:white;
       text-align:center;
}


 .header li:nth-child(3)  i{
        padding: 0 0.15rem;
         line-height:0.9rem;
       height:0.9rem;
        font-size:0.7rem;
       }


</style>
