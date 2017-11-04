
export default {
      aa:  function (){
           let  Carousel=document.querySelector('.Carousel');
            let  ul=Carousel.querySelector('ul');
            let  lis=ul.querySelectorAll('li');

            // 复制第一张到最后
            var copyItem = lis[0].cloneNode(true);
             ul.appendChild(copyItem);

            var newlis=ul.querySelectorAll('li');
             // console.log(newlis)

            var index=0;
            var itemwidth=Carousel.clientWidth;
            // console.log(itemwidth);
            var num=newlis.length;
             // console.log(num);

             var s_timer;

             var f_timer= setInterval(()=>{
                     index++;
                     autoplay();
                     gaoliang();
             },3000);


              function autoplay(){
                  if(index>=num){
                          ul.style.left=0;
                            index=1;
                         }else if(index<0){
                          index = num-1;
                      }

             var target=-itemwidth*index;

             clearInterval(s_timer);//轮播图解决跳动，防止切换页面后多个定时器一起工作

               s_timer=setInterval(()=>{
                        // 获取当前的左边距离
                      let left=ul.offsetLeft;

                      // 缓冲速度
                      let speed=(target-left)/10;

                      // 不让速度的正负值为零
                      speed=speed>0?Math.ceil(speed):Math.floor(speed);

                     if(target===left){
                      clearInterval(s_timer);
                      left=target-speed;
                     }

                   ul.style.left=left+speed+'px';

               },30)
            }

          //***************************** 添加页码************************
                      var page = document.createElement('div');
                      page.className = 'page';
                      for(var i=1;i<num;i++){
                          var span = document.createElement('span');
                          span.innerText = i;
                          if(i===index+1){
                              span.className = 'active';
                          }
                          page.appendChild(span);
                      }
                      Carousel.appendChild(page);


                  function  gaoliang(){
                       // 高亮分页
                      for(var i=0;i<page.children.length;i++){
                              page.children[i].className = '';
                          }

                      if(index<num-1){
                           page.children[index].className = 'active';
                      }else{
                              page.children[0].className = 'active';
                          }
                  }

          }
}
