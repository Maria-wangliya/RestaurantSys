<template>
	<div class="main foodList">
		<div class="head">
			<div class="headLeft">
				<button type="button" class="btn btn-lg btn-primary" disabled="disabled"><i class="glyphicon glyphicon-hand-down"></i>菜单分类</button>
			</div>
			<div class="headRight">
			</div>
		</div>
		<div class="food">
			<div class="foodLeft">
				<ul>
					<li><i class="glyphicon glyphicon-chevron-up"></i></li>
					<li @click="toAll">全部</li>
					<li @click="toJingZhi">精致冷碟</li>
					<li @click="toJingXuan">精选热菜</li>
					<li @click="toXiaoChao">特色小炒</li>
					<li @click="toChuanFu">川府菜肴</li>
					<li @click="toDianXin">精品点心</li>
					<li @click="toDrink">酒水饮料</li>
					<li><i class="glyphicon glyphicon-chevron-down"></i></li>
				</ul>
			</div>
			<router-view></router-view>
		</div>
		<div class="xinzen">
			<el-dialog title="新增菜品" :visible.sync="dialogFormVisible">
				<el-form :model="form">
					<el-form-item label="菜名" :label-width="formLabelWidth">
						<el-input auto-complete="off" style="width:220px"></el-input>
					</el-form-item>
					<el-form-item label="类型" :label-width="formLabelWidth">
						<el-select v-model="form.region1" placeholder="请选择菜单类型" style="width:220px">
							<el-option value="jzld" label="精致冷藏"></el-option>
							<el-option value="jxrc" label="精选热菜"></el-option>
							<el-option value="tsxc" label="特色小炒"></el-option>
							<el-option value="cfcy" label="川府菜肴"></el-option>
							<el-option value="jpdx" label="精品点心"></el-option>
							<el-option value="jsyl" label="酒水饮料"></el-option>
						</el-select>
					</el-form-item>
					<el-form-item label="价格" :label-width="formLabelWidth">
						<el-input auto-complete="off" style="width:220px"></el-input>
					</el-form-item>
					<el-form-item label="描述" :label-width="formLabelWidth">
						<el-input auto-complete="off" style="width:220px"></el-input>
					</el-form-item>
					<el-form-item label="备注" :label-width="formLabelWidth">
						<el-input auto-complete="off" style="width:220px"></el-input>
					</el-form-item>
					<!--<el-upload
						  class="upload-demo"
						  action="https://jsonplaceholder.typicode.com/posts/"
						  :on-preview="handlePreview"
						  :on-remove="handleRemove"
						  :file-list="fileList2"
						  list-type="picture">
						  <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
					</el-upload>-->
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="cancel">取 消</el-button>
					<el-button type="primary" @click="certain">确定</el-button>
				</div>
			</el-dialog>
		</div>
	</div>
</template>

<script type="text/javascript">import router from 'vue-router'
import './foodList.scss'
import http from '../../utils/httpClient.js'
import $ from "jquery"
import router2 from '../../router'
export default {
	data() {
		return {
			input: '',
			regStatus: '未注册',
			api: "getfoods",
			apiDel: "removefoods",
			apiSou: "search",
			apiInser: "inser",
			dataset: [],
			dataAll:[],
			apiupdata: "update",
			dialogFormVisible: false,
			fileList2: [],
			form: {
				name: '',
				region: '',
				date1: '',
				date2: '',
				delivery: false,
				type: [],
				resource: '',
				desc: ''
			},
			formLabelWidth: '120px',
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
	methods: {
		handleRemove(file, fileList) {
		},
		handlePreview(file) {
		},
		toAll() {
			router2.push({
				name: 'allFoods'
			})
		},
		toJingZhi() {
			router2.push({
				name: 'jingzhi'
			})
		},
		toJingXuan() {
			router2.push({
				name: 'jingxuan'
			})
		},
		toXiaoChao() {
			router2.push({
				name: 'xiaochao'
			})
		},
		toChuanFu() {
			router2.push({
				name: 'chuanfu'
			})
		},
		toDianXin() {
			router2.push({
				name: 'dianxin'
			})
		},
		toDrink() {
			router2.push({
				name: 'drink'
			})
		},
		handleEdit(index, row) {
			$(".bianji").show(500)
			var currForm = $(".bianji .contan .el-form");
			$(currForm.children().eq(0)).find("input").val(row.id).attr("disabled", "disabled");
			$(currForm.children().eq(1)).find("input").val(row.name);
			$(currForm.children().eq(2)).find("input").val(row.price);
			$(currForm.children().eq(3)).find("input").val(row.description);
			$(currForm.children().eq(4)).find("input").val(row.remark);
		},
		cancelEdit() {
			$(".bianji").hide(500)
		},
		vim() {
			var currForm = $(".bianji .contan .el-form");
			var id = $(currForm.children().eq(0)).find("input").val();
			var name = $(currForm.children().eq(1)).find("input").val();
			var price = $(currForm.children().eq(2)).find("input").val();
			var description = $(currForm.children().eq(3)).find("input").val();
			var remark = $(currForm.children().eq(4)).find("input").val();
			var self = this;
			http.post({
				url: this.apiupdata,
				params: {
					id: id,
					name: name,
					price: price,
					description: description,
					remark: remark,
				}
			}).then(res => {
				if(res.data.status) {
					http.get({
						url: this.api
					}).then(res => {
						self.dataset = res.data.message;
						self.dataAll = self.dataset;
					})
					alert("更新成功");
				} else {
					alert("更新失败");
				}
			})
			$(".bianji").hide(500)
		},
		handleDelete(index, row) {
			var currt = $(".el-table__body-wrapper table tbody tr").eq(index);
			currt.remove();
			var index = $(currt).children().eq(0).children().html()
			var self = this;
			http.post({
				url: this.apiDel,
				params: {
					id: index
				}
			}).then(res => {
				if(res.data.status) {
					alert("删除成功");
				}
			})

		},
		sousou() {
			var val = $(".search .el-input input").val();
			var type = $(".search .el-select .el-input .el-input__inner").val();
			if(val == "") {
				alert("请输入查询的值");
				return
			} else if(type == "") {
				alert("请输入查询的类型");
				return
			}
			var self = this;
			http.post({
				url: this.apiSou,
				params: {
					val: val,
					type: type
				}
			}).then(res => {
				if(res.data.status) {
					self.dataset = res.data.message;
				} else {
					alert('查询无果，等待添加');
				}
			})
		},
		seach() {
			this.dialogFormVisible = true;
		},
		certain() { //确定
			var cur = $(".xinzen .el-dialog .el-form");
			var name = $(cur.children().eq(0)).find("input").val();
			var type = $(cur.children().eq(1)).find("input").val();
			var price = $(cur.children().eq(2)).find("input").val();
			var description = $(cur.children().eq(3)).find("input").val();
			var remark = $(cur.children().eq(4)).find("input").val();
			if(name == "") {
				alert("请输入菜名");
				return
			} else if(type == "") {
				alert("请输入类型");
				return
			} else if(price == "") {
				alert("请输入价格");
				return
			} else if(description == "") {
				alert("请输入描述");
				return
			} else if(remark == "") {
				alert("请输入备注");
				return
			}
			var self = this;
			http.post({
				url: this.apiInser,
				params: {
					name: name,
					type: type,
					price: price,
					description: description,
					remark: remark
				}
			}).then(res => {
				if(res.data.status) {
					alert('新增成功');
				} else {
					alert('新增失败');
				}
			})
		},
		cancel() { //取消
			this.dialogFormVisible = false;
		}
	},
	components: {}
}</script>

