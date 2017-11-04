<template>
    <div class="main orderList">
    	<div class="bianjis" >
			<div class="contan">
				<h4>增加员工</h4>
				<el-form :model="form">
					<el-form-item label="姓名" :label-width="formLabelWidth">
						<el-input  style="width:280px"></el-input>
					</el-form-item>
					<el-form-item label="性别" :label-width="formLabelWidth">
						<el-input style="width:280px"></el-input>
					</el-form-item>
					<el-form-item label="电话" :label-width="formLabelWidth">
						<el-input  style="width:280px"></el-input>
					</el-form-item>
					<el-form-item label="email" :label-width="formLabelWidth">
						<el-input  style="width:280px"></el-input>
					</el-form-item>
					<el-form-item label="job" :label-width="formLabelWidth">
						<el-input  style="width:280px"></el-input>
					</el-form-item>
					<el-form-item label="地址" :label-width="formLabelWidth">
						<el-input  style="width:280px"></el-input>
					</el-form-item>
					<el-form-item label="日期" :label-width="formLabelWidth">
						<el-input  style="width:280px"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="quxiao">取 消</el-button>
					<el-button type="primary" @click="queding">确 定</el-button>
					
				</div>
			</div>
		</div>
		<div class="objEdit" >
			<div class="contan">
				<h4>编辑员工</h4>
				<el-form :model="form">
					<el-form-item label="id" :label-width="formLabelWidth">
						<el-input  style="width:280px"></el-input>
					</el-form-item>
					<el-form-item label="姓名" :label-width="formLabelWidth">
						<el-input  style="width:280px"></el-input>
					</el-form-item>
					<el-form-item label="性别" :label-width="formLabelWidth">
						<el-input style="width:280px"></el-input>
					</el-form-item>
					<el-form-item label="电话" :label-width="formLabelWidth">
						<el-input  style="width:280px"></el-input>
					</el-form-item>
					<el-form-item label="email" :label-width="formLabelWidth">
						<el-input  style="width:280px"></el-input>
					</el-form-item>
					<el-form-item label="job" :label-width="formLabelWidth">
						<el-input  style="width:280px"></el-input>
					</el-form-item>
					<el-form-item label="地址" :label-width="formLabelWidth">
						<el-input  style="width:280px"></el-input>
					</el-form-item>
				</el-form>
				<div slot="footer" class="dialog-footer">
					<el-button @click="quxiao1">取 消</el-button>
					<el-button type="primary2" @click="queding1">确 定</el-button>
					
				</div>
			</div>
		</div>
    	<div class="orderHead">
        <p><span><i class="el-icon-caret-left"></i></span><span>返回</span></p>
         <el-button type="info" plain>员工列表</el-button>
           <el-button type="success"  @click = "insert" plain>增加员工</el-button>
        <div class="rightBtn">
          <el-button type="primary" plain @click = "select">搜索</el-button>
        </div>
        <div class="demo-input-suffix">
          <el-input placeholder="请输入内容" v-model="inputOrder">
            <i slot="prefix" class="el-input__icon el-icon-search"></i>
          </el-input>
        </div>
      </div>
    	<div class="datagrid">
			<table class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
				<thead>
					<tr>
						<th v-for="(value, key) in dataset[0]" >{{key}}</th>
						<th>编辑</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="(obj, index) in dataset">
						<td v-for="(value, key) in obj">{{value}}</td>
						<td>
							<el-button type="primary" icon="el-icon-edit" @click = "objBianji(index,obj)"></el-button>
							<el-button type="primary" icon="el-icon-delete" @click = "Objdelet(index)"></el-button>
						</td>
					</tr>
				</tbody>
			</table>
		</div>
    </div>
</template>

<script type="text/javascript">
	
	import http from '../../utils/httpClient.js'
	import './memberList.scss'
	import $ from "jquery"
	export default {
		data: function(){
			return {
				inputOrder:'',
				dataset: [],
				api:"getMembers",
				api2: "selectJob",
				api3:"insertPeople",
				api4:"Objdelet",
				api5:"objBianji",
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
				formLabelWidth: '90px',
			}
		},
		methods: {
			objBianji(index,obj) {
				var currForm1 = $(".objEdit .contan .el-form");
				$(currForm1.children().eq(0)).find("input").val(obj.id).attr("disabled", "disabled");
				$(currForm1.children().eq(1)).find("input").val(obj.name);
				$(currForm1.children().eq(2)).find("input").val(obj.sex);
				$(currForm1.children().eq(3)).find("input").val(obj.tel);
				$(currForm1.children().eq(4)).find("input").val(obj.email);
				$(currForm1.children().eq(5)).find("input").val(obj.job);
				$(currForm1.children().eq(6)).find("input").val(obj.address);
				$(".objEdit").show(500)
			},
			Objdelet(index) {
				var id = $($(".datagrid tbody").find("tr").eq(index)).children().eq(0).html()
				$(".datagrid tbody").find("tr").eq(index).remove();
				http.post({
					url: this.api4,
					params:{id:id}
				}).then(res => {
					if(res.data.status){
						alert("删除成功")
					}else{
						alert("删除失败")
					}
					
				})
			},
			select() {
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
			insert() {
				$(".bianjis").show(500)
			},
			quxiao1() {
				$(".objEdit").hide(500)
			},
			queding1() {
				var currForm1 = $(".objEdit .contan .el-form");
				var id = $(currForm1.children().eq(0)).find("input").val();
				var name = $(currForm1.children().eq(1)).find("input").val();
				var sex = $(currForm1.children().eq(2)).find("input").val();
				var tel = $(currForm1.children().eq(3)).find("input").val();
				var email = $(currForm1.children().eq(4)).find("input").val();
				var job = $(currForm1.children().eq(5)).find("input").val();
				var address = $(currForm1.children().eq(6)).find("input").val();
				if(name == ""){
					alert("请输入姓名")
					return
				}else if(sex == ""){
					alert("请输入性别")
					return
				}else if(tel == ""){
					alert("请输入电话")
					return
				}else if(email == ""){
					alert("请输入email")
					return
				}else if(job == ""){
					alert("请输入职位")
					return
				}else if(address == ""){
					alert("请输入地址")
					return
				}
				var self = this;
				http.post({
					url: this.api5,
					params: {
						id: id,
						name: name,
						sex: sex,
						tel: tel,
						email: email,
						job: job,
						address:address,
					}
				}).then(res => {
					if(res.data.status) {
						alert("修改成功");
						http.get({
							url: this.api
						}).then(res => {
							self.dataset = res.data.message
						})
					}else{
						alert("修改失败");
					}
				})
			},
			quxiao() {
				$(".bianjis").hide(500)
			},
			queding() {
				var currForm = $(".bianjis .contan .el-form");
				var name = $(currForm.children().eq(0)).find("input").val();
				var sex = $(currForm.children().eq(1)).find("input").val();
				var tel = $(currForm.children().eq(2)).find("input").val();
				var email = $(currForm.children().eq(3)).find("input").val();
				var job = $(currForm.children().eq(4)).find("input").val();
				var address = $(currForm.children().eq(5)).find("input").val();
				var date = $(currForm.children().eq(6)).find("input").val();
				if(name == ""){
					alert("请输入姓名")
					return
				}else if(sex == ""){
					alert("请输入性别")
					return
				}else if(tel == ""){
					alert("请输入电话")
					return
				}else if(email == ""){
					alert("请输入email")
					return
				}else if(job == ""){
					alert("请输入职位")
					return
				}else if(address == ""){
					alert("请输入地址")
					return
				}else if(date == ""){
					alert("请输入日期")
					return
				}
				var self = this;
				http.post({
					url: this.api3,
					params: {
						name: name,
						sex: sex,
						tel: tel,
						email: email,
						job: job,
						address:address,
						date:date,
					}
				}).then(res => {
					if(res.data.status) {
						alert("新增成功");
						http.get({
							url: this.api
						}).then(res => {
							self.dataset = res.data.message
						})
					}else{
						alert("新增失败");
					}
				})
			}
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
