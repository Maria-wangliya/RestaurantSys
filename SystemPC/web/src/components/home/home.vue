<template>
	<div id="app">
	    <div class="left ">
		    <p><router-link to="/"><i class="first"></i><span>{{index}}</span></router-link></p>
	    	<p><router-link to="/foodList/allFoods"><i class="glyphicon glyphicon-th-list"></i><span>{{indexData.foodList}}</span></router-link></p>
	    	<p><router-link to="/orderList"><i class="glyphicon glyphicon-list-alt"></i><span>{{indexData.orderList}}</span></router-link></p>
	    	<p><router-link to="/memberList"><i class="glyphicon glyphicon-heart"></i><span>{{indexData.memberList}}</span></router-link></p>
	    	<p><router-link to="/adminList"><i class="glyphicon glyphicon-user"></i><span>{{indexData.adminList}}</span></router-link></p>
	    	<p><router-link to="/adminLimit"><i class="glyphicon glyphicon-cog"></i><span>{{indexData.adminLimit}}</span></router-link></p>
	    </div>
	    <div class="right">
	      <div class="top">
  			<div class="gap"><p>xx餐厅后台管理系统</p></div>
	        <div class = "admin33">
	            <i class="glyphicon glyphicon-user"></i><span>管理员</span>
	        </div>
	        <div class="dropdown">
	            <button @click="ToLogin" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
	                登录
	            </button>
	           <button @click="ToRegister" class="btn btn-default dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
	                注册
	            </button>
	        </div>
	      </div>
	      <router-view></router-view>
	    </div>
	</div>
</template>

<script type="text/javascript">
	import './home.scss'
	import './base.scss'
	import router from '../../router'
	export default {
		name: 'app',
	    data () {
	        return {
	          regStatus: '未注册',
	          index:'首页',
	          //页面数据
	          indexData:{
	            //数据管理
	            foodList:'菜单',
	            orderList:'订单',
	            memberList:'员工',
	            adminList:'管理员',
	            adminLimit:'设置'
	          }
	        }
	    },
		methods: {
			ToLogin(){
				router.push({name:'login'});
			},
			ToRegister(){
				router.push({name:'register'});
			}
		}
	}
</script>