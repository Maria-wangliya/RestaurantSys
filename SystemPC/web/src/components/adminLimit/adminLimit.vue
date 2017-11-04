<template>
    <div class="main orderList">
    	<div class="orderHead">
        <p><span><i class="el-icon-caret-left"></i></span><span>返回</span></p>
        <div class="rightBtn">
          <el-button type="primary" @click = "adminLimitselect" plain>搜索</el-button>
        </div>
        <div class="demo-input-suffix">
          <el-input placeholder="查找用户" v-model="inputOrder">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
      	<div class="adminRight">
      		<div class="adminTop">
      			<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
				    <el-tab-pane label="所有用户" name="first">
				    	<div class="datagrid adminData">
							<table class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
								<thead>
									<tr>
										<th v-for="(value, key) in dataset[0]" >{{key}}</th>
										<th>delete</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(obj, index) in dataset" class="adminTr">
										<td v-for="(value, key) in obj">{{value}}</td>
										<td style="width:80px;"><el-button type="danger" @click = "adminLimitDelete(index)">删除</el-button></td>
									</tr>
								</tbody>
							</table>
						</div>
				    </el-tab-pane>
				    <el-tab-pane label="修改权限" name="second" class="limitChange">
				    	<el-form ref="form" :model="form" label-width="80px">
						  <el-form-item label="用户名称" class="limitName">
						    <el-input v-model="form.name"></el-input>
						  </el-form-item>
						  <el-form-item label="用户权限">
						    <el-select v-model="form.region" placeholder="请选择权限">
						      <el-option label="普通用户" value="shanghai"></el-option>
						      <el-option label="管理员" value="beijing"></el-option>
						    </el-select>
						  </el-form-item>
						</el-form>
						<el-button type="success" plain @click = "xiugai">确定修改</el-button>
				    </el-tab-pane>
				    <el-tab-pane label="新增用户权限" name="third" class="limitChange2">
				    	<el-form ref="form" :model="form" label-width="80px">
						  <el-form-item label="用户名称" class="limitName">
						    <el-input v-model="form.name1"></el-input>
						  </el-form-item>
						  <el-form-item label="用户权限">
						    <el-select v-model="form.region1" placeholder="请选择权限">
						      <el-option label="普通用户" value="shanghai"></el-option>
						      <el-option label="管理员" value="beijing"></el-option>
						    </el-select>
						  </el-form-item>
						</el-form>
						 <el-button type="success" @click = "zengjia">确定增加</el-button>
				    </el-tab-pane>
			    </el-tabs>
      		</div>
		</div>
    </div>
</template>

<script type="text/javascript">
	
	import http from '../../utils/httpClient.js'
	import './adminLimit.scss'
	import $ from "jquery"

	export default {
		data: function(){
			return {
				inputOrder:'',
				dataset: [],
				api: "getAdminLimit",
				api2: "adminLimitselect",
				api3: "adminLimitDelete",
				api4: "xiugai",
				api5: "xinzeng",
				activeName2: 'first',
				form: {
		          name: '',
		          name1: '',
		          region: '',
		          region1: '',
		          date1: '',
		          date2: '',
		          delivery: false,
		          type: [],
		          resource: '',
		          desc: ''
		        }
			}
		},
		methods: {
			xiugai() {
				var username = $(" #pane-second .el-form-item input").val()
				var lim = $("#pane-second .el-select input").val()
				if(username == ""){
					alert("请输入用户")
					return
				}else if(lim == ""){
					alert("请选择权限")
					return
				}
				var self = this;
				http.post({
					url: this.api4,
					params:{username:username,lim:lim}
				}).then(res => {
					if(res.data.status){
						alert("修改成功");
						var self = this;
						http.get({
							url: this.api
						}).then(res => {
							self.dataset = res.data.message
						})
					}else{
						alert("修改失败")
					}
					
				})
			},
			zengjia() {
				var username = $("#pane-third  .el-form-item input").val()
				var lim = $("#pane-third .el-select input").val()
				console.log(username,lim)
				if(username == ""){
					alert("请输入用户名字")
					return
				}else if(lim == ""){
					alert("请选择权限")
					return
				}
				var self = this;
				http.post({
					url: this.api5,
					params:{username:username,lim:lim}
				}).then(res => {
					if(res.data.status){
						alert("新增成功");
						var self = this;
						http.get({
							url: this.api
						}).then(res => {
							self.dataset = res.data.message
						})
					}else{
						alert("新增失败")
					}
					
				})
			},
			adminLimitDelete(index) {
				var id = $($(".datagrid tbody tr").eq(index)).children().eq(0).html()
				var self = this;
				http.post({
					url: this.api3,
					params:{id:id}
				}).then(res => {
					if(res.data.status){
						alert("删除成功");
						$($(".datagrid tbody tr").eq(index)).remove();
					}else{
						alert("删除失败")
					}
					
				})
			},
		    handleClick(tab, event) {
	        },
	        onSubmit() {
//	            console.log('submit!');
	        },
	        adminLimitselect() {
				var self = this;
				var val = $(".demo-input-suffix .el-input__inner").val();
				http.post({
					url: this.api2,
					params:{val:val}
				}).then(res => {
					if(res.data.message.length){
						self.dataset = res.data.message
					}else{
						alert("查询失败，请重新确认查询信息")
					}
					
				})
			},
	    },
		mounted: function(){
			var self = this;
			http.get({
				url: this.api
			}).then(res => {
				self.dataset = res.data.message
			})
		},
		components: {
			datagrid :{
				template: `<div><slot></slot></div>`
			}
		}
	}
</script>
