<template>
    <div class="colddrink">
        <h1><i @click="backMenu" class="glyphicon glyphicon-arrow-left special"></i>川府菜肴</h1>
        <Lunbo></Lunbo>
        <div  class="cmes">
        <ul class="coldUl">
          <li class="coldLi" v-for="(item,index) in dataset">
            <img :src="item.imgurl"><div class="spe coldDiv4"><span>{{item.name}}</span><p class="speP"><span>{{item.price}}</span><el-input-number class="coldInput" v-model="'num'+item.id" :min="0" :max="20" label="0" lazy></el-input-number></p></div>
          </li>
        </ul>
        </div>
        <bottomnav></bottomnav>
    </div>
</template>

<script>
  import bottomnav from '../Bottomnav/Bottomnav.vue'
  import router from '../../router'
  import Lunbo  from  './carouselChuanfu.vue'
  import $ from 'jquery'
  import http from '../../utils/httpClient.js'
  
  $(document).ready(function(){
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
    setTimeout(function(){
      for(let $i=0;$i<$('.coldDiv4').length;$i++){
        $($('.coldDiv4')[$i]).click(function(event){
          if(event.target.className == "el-icon-plus"){
                this.children[1].children[1].children[2].children[0].value++;
                var copyImg = this.parentNode.firstChild.cloneNode();
                copyImg.style.position = 'absolute';
                copyImg.style.left = this.parentNode.firstChild.offsetLeft + 'px';
                copyImg.style.top = this.parentNode.firstChild.offsetTop + 'px';
                copyImg.style.width = this.parentNode.firstChild.clientWidth + 'px';
                document.body.appendChild(copyImg);
                let target = {
                    left:this.parentNode.offsetWidth-260,
                    top:this.parentNode.parentNode.offsetTop+850,
                    width:20
                }
                animate(copyImg,target,()=>{
                    copyImg.style.display = 'none';
                });

                function animate(ele,opt,callback){
                  // 记录动画数量
                  let timerLen = 0;

                  // 遍历opt
                  for(var attr in opt){
                    // 如何把attr限定到局部作用域中
                    // ES6解决方案：用let声明attr
                    // 传统解决方案：利用函数传参
                    createTimer(attr);

                    timerLen++;
                  }

                  function createTimer(attr){
                    // 为每个属性设置不同的定时器(关键1)
                    let timerName = attr + 'timer';
                    let target = opt[attr];

                    clearInterval(ele[timerName]);

                    // 把定时器与Dom关联（关键2）
                    ele[timerName] = setInterval(()=>{
                      // 先获取当前值
                      let current = getComputedStyle(ele)[attr];//String:100px,50rem,0.5,60deg

                      // 提取数值：单位
                      // 根据当前值提取单位(单位在current最后面)
                      let unit = current.match(/[a-z]+$/);
                      if(unit){
                        current = current.substring(0,unit.index)*1;
                        unit = unit[0]
                      }else{
                        unit = '';
                        current *= 1;
                      }

                      // 计算速度
                      let speed = (target - current)/10;

                      // 处理speed值，防止speed为小数而造成定时器无法完成的情况
                      // 0.3=>1,-0.3=>-1
                      speed = speed>0 ? Math.ceil(speed) : Math.floor(speed);


                      if(attr === 'opacity'){
                        speed = speed>0 ? 0.05 : -0.05;
                      }
                      // 动画完成
                      if(current === target){
                        clearInterval(ele[timerName]);
                        current = target - speed;

                        timerLen--;

                        if(typeof callback === 'function' && timerLen === 0){
                          callback();
                        }
                      }

                      ele.style[attr] = current + speed + unit;
                    },30)
                  }
                }
                var currentImg = this.parentNode.firstChild;
                var imgurl = currentImg.getAttribute('src');
                var qty = this.children[1].children[1].children[2].children[0].value;
                var price = this.children[1].firstChild.innerHTML;
                var type = $('h1')[0].innerText;
                var name = this.children[0].innerHTML;
                var checkState = false;
                var has = false;
                for(var i=0;i<carlist.length;i++){
                    // 已经存在
                    if(carlist[i].imgurl === imgurl){
                        carlist[i].qty++;
                        has=true;
                        break;
                    }
                }
                // 不存在
                if(!has){
                    var goods = {
                        imgurl:imgurl,
                        price:price,
                        qty:qty,
                        name:name,
                        type:type,
                        checkState
                    }
                    carlist.push(goods)
                }
                // 写入cookie
                var date = new Date();
                date.setDate(date.getDate()+15);
                document.cookie = 'carlist=' + JSON.stringify(carlist) + ';expires=' + date.toUTCString();
           }
           if(event.target.className == "el-icon-minus"){
                this.children[1].children[1].children[2].children[0].value--;
                var copyImg = this.parentNode.firstChild.cloneNode();
                
                var currentImg = this.parentNode.firstChild;
                var imgurl = currentImg.getAttribute('src');
                var qty = this.children[1].children[1].children[2].children[0].value;
                var price = this.children[1].firstChild.innerHTML;
                var type = $('h1')[0].innerText;
                var name = this.children[0].innerHTML;
                var checkState = false;
                var has = false;
                for(var i=0;i<carlist.length;i++){
                    // 已经存在
                    if(carlist[i].imgurl === imgurl){
                        carlist[i].qty--;
                        has=true;
                        break;
                    }
                }
                // 不存在
                if(!has){
                    var goods = {
                        imgurl:imgurl,
                        price:price,
                        qty:qty,
                        name:name,
                        type:type,
                        checkState
                    }
                    carlist.push(goods)
                }
                // 写入cookie
                var date = new Date();
                date.setDate(date.getDate()+15);
                document.cookie = 'carlist=' + JSON.stringify(carlist) + ';expires=' + date.toUTCString();
           }
        })
      }
    },500)
  });
    export default{
      data(){
        return{
          dataset:[],
          api:'TelChuanFu',
          num1:0,
          num2:0,
          num3:0,
          num4:0,
          num5:0,
          num6:0
        }
      },
      methods:{
        backMenu(){
          router.push({name:'menu'});
        },
        handleChange(value) {
        }
      },
      mounted: function() {
        var self = this;
        http.get({
          url: this.api
        }).then(res => {
          self.dataset = res.data.message
        })
      },
      components:{
          bottomnav,
          Lunbo
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
      .colddrink{
          height:100%;
          display:flex;
          flex-direction: column;
      }
      p{font-size:36px;color:#CBA258;text-align:center;}
      ul {li{list-style:none;}}
      .colddrink h1{
        background: #FD5200;
        height: 2rem;
        line-height: 2rem;
        text-align: center;
        color: white;
        font-size: 0.65rem;
        margin:0;
        position:relative;
        i.special{position:absolute;top:46px;left:30px;}
      }
     .cmes{
        flex:1;
        overflow-y:auto;
        ul.coldUl{
          padding:30px 20px;width:100%;
          display:flex;flex-direction:column;
          li{
            display:flex;flex-direction:row;
            span{font-size:32px;}
            width:100%;height:200px;color:#CBA258;margin-bottom:18px;border-bottom:1px solid #CBA258;
            .spe{
              text-align:left;display:flex;flex-direction:column;padding:20px;
              span{
                &:first-child{margin-bottom:24px;}
              }
              p{
                .el-input-number{
                  margin-left:160px;
                 
                }
                .el-input{
                  .el-input__inner{
                    height:42px;font-size:30px;
                  }

                }
              }
            }
          }
        }
        ul.coldUl li img{
          width:200px;height:200px;padding-bottom:10px;
        }
     }
     .topImg{
        width:100%;
     }
</style>
