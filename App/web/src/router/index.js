import Vue from 'vue'

import VueRouter from 'vue-router'

import  VHomeComponent from '../Vcomponents/VHome/VHome.vue'

import  HeaderComponent from '../Vcomponents/Header/Header.vue'

import  CarouselComponent from '../Vcomponents/Carousel/Carousel.vue'

import  FoodsListComponent from '../Vcomponents/FoodsList/FoodsList.vue'

import  BottomnavComponent from '../Vcomponents/Bottomnav/Bottomnav.vue'

import  MenuComponent from '../Vcomponents/Menu/Menu.vue'

import  ColddrinkComponent from '../Vcomponents/Menu/colddrink.vue'

import  hotdishesComponent from '../Vcomponents/Menu/hotdishes.vue'

import  xiaochaoComponent from '../Vcomponents/Menu/xiaochao.vue'

import  SichuancuisineComponent from '../Vcomponents/Menu/Sichuancuisine.vue'

import  dianxinComponent from '../Vcomponents/Menu/dianxin.vue'

import  guzzleComponent from '../Vcomponents/Menu/drink.vue'

import buyCar from '../Vcomponents/buyCar/buyCar.vue'
import  orderListComponent  from '../Vcomponents/orderList/orderList.vue'

import  Allcomponent  from  '../Vcomponents/orderList/all.vue'

import Alreadypaidcomponent  from  '../Vcomponents/orderList/Alreadypaid.vue'

import  waitingpaymentcomponent  from  '../Vcomponents/orderList/waitingpayment.vue'

import MineComponent from '../Vcomponents/Mine/Mine.vue'

Vue.use(VueRouter)


var router = new VueRouter({
	routes: [
	    {
	    	path:'/',
	    	// 路由重定向
	    	redirect:'/VHome',
            component: VHomeComponent,
	    },
        {
           	path: '/VHome',
           	// 首页
           	name: 'VHome',
           	component: VHomeComponent,
         },
        {
	       	path: '/Menu',
	       	name: 'menu',
	       	component: MenuComponent,
        },
        {
            path:'/buyCar',
            name:'buyCar',
            component:buyCar
        },
        {
		   	path: '/orderList',
		   	name: 'orderList',
		   	component: orderListComponent,
		   	children:[
		   	  {
                  path:'/all',
                  name:'all',
                  component:Allcomponent,
		   	   },
		   	   {
                  path:'/Alreadypaid',
                  name:'Alreadypaid',
                  component:Alreadypaidcomponent,
		   	   },
		   	   {
                  path:'/waitingpayment',
                  name:'waitingpayment',
                  component:waitingpaymentcomponent,
		   	   }
		   	]
		},
       {
	       	path: '/Mine',
	       	name: 'mine',
	       	component: MineComponent,
       },
       {
            path: '/colddrink',
	       	name: 'colddrink',
	       	component: ColddrinkComponent,
	    },
	    {
            path: '/hotdishes',
	       	name: 'hotdishes',
	       	component: hotdishesComponent,
	    },
	     {
            path: '/xiaochao',
	       	name: 'xiaochao',
	       	component: xiaochaoComponent,
	    },
	     {
            path: '/Sichuancuisine',
	       	name: 'Sichuancuisine',
	       	component: SichuancuisineComponent,
	    },
	     {
            path: '/dianxin',
	       	name: 'dianxin',
	       	component: dianxinComponent,
	    },
	     {
            path: '/drink',
	       	name: 'drink',
	       	component: guzzleComponent,
	    },
	]
})

export default router
