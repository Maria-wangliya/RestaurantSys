<template>
 <div class="foodRight">
    <div class="search">
        <el-input v-model="input" placeholder="请输入内容"></el-input>
        <el-select v-model="form.region" placeholder="请选查询类型">
            <el-option value="jzld" label="模糊查询"></el-option>
            <el-option value="id" label="序号查询"></el-option>
            <el-option value="name" label="菜名查询"></el-option>
            <el-option value="price" label="价格查询"></el-option>
            <el-option value="description" label="描述查询"></el-option>
            <el-option value="remark" label="备注查询"></el-option>
        </el-select>
        <el-button type="primary" icon="el-icon-search" @click="sousou">搜索</el-button>
        <el-button type="success" @click="seach">新增</el-button>
    </div>
    <div class="tableRight">
        <el-table :data="dataset" height="380" border style=" overflow-x:none;">
            <el-table-column prop="id" label="序号" width="80" ></el-table-column>
            <el-table-column prop="name" label="菜名" width="80"></el-table-column>
            <el-table-column prop="price" label="价格" width="80"></el-table-column>
            <el-table-column prop="description" label="描述" width="100"></el-table-column>
            <el-table-column prop="remark" label="备注"></el-table-column>
            <el-table-column label="操作" width="300">
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
            </el-table-column>
        </el-table>
    </div>
</div>
</template>
<script>
    export default {
        data(){
            var res = [];
            this.$parent.dataset.map(function(item,idx){
                if(item.type=='jpdx'){
                    res.push(item);
                }
            }) 
            return {
                dataset:res,
                input: this.$parent.input,
				regStatus:this.$parent.regStatus,
				api: this.$parent.api,
				apiDel: this.$parent.apiDel,
				apiSou:this.$parent.apiSou,
				apiInser: this.$parent.apiInser,
				apiupdata:this.$parent.apiupdata,
				dialogFormVisible: this.$parent.dialogFormVisible,
				form: this.$parent.form,
				formLabelWidth: this.$parent.formLabelWidth,
            }
        },
        methods:{
        	handleEdit(index, row) {
        		this.$parent.handleEdit(index, row)
        	},
        	cancelEdit() {
        		this.$parent.cancelEdit()
        	},
        	vim() {
        		this.$parent.vim()
        	},
        	handleDelete(index, row) {
        		this.$parent.handleDelete(index, row)
        	},
        	sousou() {
        		this.$parent.sousou()
        	},
        	seach() {
        		this.$parent.seach()
        	},
        	certain() {
        		this.$parent.certain()
        	},
        	cancel() {
        		this.$parent.cancel()
        	}
        }
    }
</script>