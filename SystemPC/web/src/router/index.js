import Vue from 'vue'
import VueRouter from 'vue-router'
import $ from 'jquery'
import Login from '../../login.vue'
import Register from '../components/register/register.vue'
import Home from '../components/home/home.vue'
import HomePart from '../components/home/homePart.vue'
import FoodList from '../components/foodList/foodList.vue'
import allFoods from '../components/foodList/childrenCom/all.vue'
import JingZhi from '../components/foodList/childrenCom/jingzhi.vue'
import JingXuan from '../components/foodList/childrenCom/jingxuan.vue'
import XiaoChao from '../components/foodList/childrenCom/xiaochao.vue'
import ChuanFu from '../components/foodList/childrenCom/chuanfu.vue'
import DianXin from '../components/foodList/childrenCom/dianxin.vue'
import Drink from '../components/foodList/childrenCom/drink.vue'

import OrderList from '../components/orderList/orderList.vue'
import MemberList from '../components/memberList/memberList.vue'
import AdminList from '../components/adminList/adminList.vue'
import AdminLimit from '../components/adminLimit/adminLimit.vue'

	
Vue.use(VueRouter)

var router = new VueRouter({
	routes: [
		{
			path: '/',
			name: 'home',
			component: Home,
			children: [
				{
					path: '/',
					name: 'homePart',
					component: HomePart
				},
				{
					path: 'foodList',
					name: 'foodList',
					component: FoodList,
					children:[
						{
							path:'allFoods',
							name:'allFoods',
							component:allFoods
						},
						{
							path:'jingzhi',
							name:'jingzhi',
							component:JingZhi
						},
						{
							path:'jingxuan',
							name:'jingxuan',
							component:JingXuan
						},
						{
							path:'xiaochao',
							name:'xiaochao',
							component:XiaoChao
						},
						{
							path:'chuanfu',
							name:'chuanfu',
							component:ChuanFu
						},
						{
							path:'dianxin',
							name:'dianxin',
							component:DianXin
						},
						{
							path:'drink',
							name:'drink',
							component:Drink
						}
					]
				},{
					path: 'orderList',
					name: 'orderList',
					component: OrderList
				},
				{
					path:'memberList',
					name:'memberList',
					component:MemberList
				},
				{
					path:'adminList',
					name:'adminList',
					component:AdminList
				},
				{
					path:'adminLimit',
					name:'adminLimit',
					component:AdminLimit
				}
			]
		},
		{
			path: '/login',
			name: 'login',
			component: Login
		},
		{
			path:'/register',
			name:'register',
			component:Register
		}
	]
})

export default router
import http from "../utils/httpClient.js"
 var token = document.cookie;
    if(token.length>0){
    	 token = token.split('=');
    	$.ajax({
		 	type: 'POST',
		 	url: 'http://localhost:88/token',
		 	headers: {'Authorization': token[1]},
		 	success: function(response){
		 		if(response.success){
		 			http.post({
						url: "loginSelect",
						params: {
							username: response.decoded.username,
						}
					}).then(res => {
						if(res.data.status) {
							$(".admin33").find("span").html(res.data.message)
							if(res.data.message == "员工"){
//								$($(".homePart").children().eq(0)).hide()
								$($(".homePart").children().eq(3)).hide()
								$($(".homePart").children().eq(4)).hide()
								$($(".homePart").children().eq(5)).hide()
//								$($(".left").children().eq(0)).hide()
								$($(".left").children().eq(3)).hide()
								$($(".left").children().eq(4)).hide()
								$($(".left").children().eq(5)).hide()
							}
						}
					})
		 		}else{
		 			alert("登录信息已失效，请重新登陆")
    				window.location.href = 'index.html#/login';
		 		}
		 	}
		 })
    }else{
    	alert("登录信息已失效，请重新登陆")
    	window.location.href = 'index.html#/login';
    }
    
    
//  $.post(common.baseUrl + '/products', {token:token[1]},function(response){
//      console.log(response);
//      if(!response.status== false){
//          $('.logout').html('注销');
//          $('.quit').html('退出');
//      }else {
//          alert('您的登录信息已经失效')
//          location.href = "../../login.htm";
//      }
//  });