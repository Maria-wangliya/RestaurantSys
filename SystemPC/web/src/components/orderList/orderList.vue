<template>
	<div class="main orderList">
		<div class="orderHead">
			<p><span><i class="el-icon-caret-left"></i></span><span>返回</span></p>
			<div class="rightBtn">
				<el-button type="primary" plain @click="select">搜索</el-button>
			</div>
			<div class="demo-input-suffix">
				<el-input placeholder="查找订单" v-model="inputOrder">
					<i slot="prefix" class="el-input__icon el-icon-search"></i>
				</el-input>
			</div>
		</div>
		<div class="adminRight">
			<div class="adminTop">
				<el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
					<el-tab-pane label="所有订单" name="first" class="all">
						<div class="datagrid orderData">
							<table class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
								<thead>
									<tr>
										<th v-for="(value, key) in dataset[0]">{{key}}</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(obj, index) in dataset">
										<td v-for="(value, key) in obj">{{value}}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</el-tab-pane>
					<el-tab-pane label="未完成订单" name="second" class="undown">
						<el-form ref="form" :model="form" label-width="80px">
							<div class="datagrid orderData">
								<table class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
									<thead>
										<tr>
											<th v-for="(value, key) in dataset2[0]">{{key}}</th>
											<th>编辑</th>
										</tr>
									</thead>
									<tbody>
										<tr v-for="(obj, index) in dataset2">
											<td v-for="(value, key) in obj">{{value}}</td>
											<td>
												<el-button type="success" plain @click="wancheng(index)">提 交</el-button>
											</td>
										</tr>
									</tbody>
								</table>
							</div>
						</el-form>
					</el-tab-pane>
					<el-tab-pane label="已完成订单" name="third" class="down">
						<div class="datagrid orderData">
							<table class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
								<thead>
									<tr>
										<th v-for="(value, key) in dataset3[0]">{{key}}</th>
									</tr>
								</thead>
								<tbody>
									<tr v-for="(obj, index) in dataset3">
										<td v-for="(value, key) in obj">{{value}}</td>
									</tr>
								</tbody>
							</table>
						</div>
					</el-tab-pane>
				</el-tabs>
			</div>
		</div>
	</div>
</template>

<script type="text/javascript">
	import http from '../../utils/httpClient.js'
	import './orderList.scss'
	import $ from 'jquery'
	var ws;
	export default {
		data: function() {
			return {
				inputOrder: '',
				dataset: [],
				dataset2: [],
				dataset3: [],
				api: "getOrderList",
				api2: 'orderlistUndown',
				api3: 'orderlistDown',
				api4: "orderlistselect",
				api5: "orderdelet",
				activeName2: 'first',
				form: {
					name: '',
					region: '',
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
			open3() {
				this.$notify({
					title: '订单',
					message: '您有一笔新订单,请注意查收',
					type: 'success'
				});
			},
			wancheng(index) {
				var id = $($(".el-form tbody tr").eq(index)).children().eq(0).html();
				var num = $($(".el-form tbody tr").eq(index)).children().eq(1).html();
				var price = $($(".el-form tbody tr").eq(index)).children().eq(2).html();
				var name = $($(".el-form tbody tr").eq(index)).children().eq(4).html();
				var type = $($(".el-form tbody tr").eq(index)).children().eq(5).html();
				
				ws.send(`${id}号,订单完成`)
				var self = this;
				http.post({
					url: this.api5,
					params: {
						id:id,
						num:num,
						price:price,
						name:name,
						type:type
					}
				}).then(res => {
					http.get({
						url: self.api2
					}).then(res => {
						self.dataset2 = res.data.message.reverse()
					})
				})
			},
			select() {
				var val = $(".demo-input-suffix .el-input__inner").val()
				var self = this;
				http.post({
					url: this.api4,
					params: {
						val: val
					},
				}).then(res => {
					if(res.data.message.length) {
						self.dataset = res.data.message
					} else {
						alert("查询失败")
					}
				})
			},
			handleClick(tab, event) {
				if(tab.$el.getAttribute('class') == 'el-tab-pane undown') {
					var self = this;
					http.get({
						url: this.api2
					}).then(res => {
						self.dataset2 = res.data.message.reverse()
					})
				} else if(tab.$el.getAttribute('class') == 'el-tab-pane down') {
					var self = this;
					http.get({
						url: this.api3
					}).then(res => {
						self.dataset3 = res.data.message
					})
				}
			},
			onSubmit() {}
		},
		mounted: function() {
			var self = this;
			ws = new WebSocket("ws://10.3.131.9:666");
			ws.onmessage = function(_msg) {
				if(_msg.data == "您有新订单") {
					self.open3();
					http.get({
						url: self.api2
					}).then(res => {
						self.dataset2 = res.data.message.reverse()
					})
				}
			};
			http.get({
				url: this.api
			}).then(res => {
				self.dataset = res.data.message
			})
		},
		components: {
			datagrid: {
				template: `<div><slot></slot></div>`
			}
		}
	}
</script>