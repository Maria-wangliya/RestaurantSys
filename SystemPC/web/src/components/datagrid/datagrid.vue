<template>
	<div class="datagrid">
		<table class="el-table el-table--fit el-table--border el-table--enable-row-hover el-table--enable-row-transition">
			<thead>
				<tr>
					<th v-for="(value, key) in dataset[0]" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{key}}</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="(obj, index) in dataset">
					<td v-for="(value, key) in obj" v-if="(colsArray[0] && colsArray.indexOf(key) > -1) || !colsArray[0]">{{value}}</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script type="text/javascript">
	import http from '../../utils/httpClient.js'
	import './datagrid.scss'
	export default {
		data: function(){
			return {
				dataset: [],
				loadingShow: false,
				colsArray
			}
		},
		props: ['api', 'cols'],
		mounted: function(){
			var self = this;
			http.get({
				url: this.api
			}).then(res => {
				self.dataset = res.data.message
			})
		},
		components: {
		}
	}
</script>