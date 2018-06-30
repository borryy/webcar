<template>
	<div class="main">
		<div class="main-top">
			<bread></bread>
			<el-date-picker
		      v-model="value1"
		      type="date"
		      placeholder="选择开始日期">
		    </el-date-picker>
		    <el-date-picker
		      v-model="value2"
		      type="date"
		      placeholder="选择结束日期">
		    </el-date-picker>
		    <el-input  placeholder="请输入姓名"></el-input>
		    <el-input  placeholder="请输入手机号"></el-input>
		    <el-button icon="el-icon-search" type="primary" circle></el-button>
	    </div>
		<el-table
		    :data="tableData"
		    border
		    size="lage"
		    style="width: 100%">
		    <el-table-column
		      fixed
		      prop="index"
		      label="序号"
		      width="50">
		    </el-table-column>
		    <el-table-column
		      prop="date"
		      label="日期"
		      width="150">
		    </el-table-column>
		    <el-table-column
		      prop="name"
		      label="姓名"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="province"
		      label="省份"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="city"
		      label="市区"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="地址"
		      width="300">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="地址"
		      width="300">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="地址"
		      width="300">
		    </el-table-column>
		    <el-table-column
		      prop="address"
		      label="地址"
		      width="300">
		    </el-table-column>
		    <el-table-column
		      prop="zip"
		      label="邮编"
		      width="120">
		    </el-table-column>
		    <el-table-column
		      label="操作"
		      fixed="right"
		      width="100">
		      <template slot-scope="scope">
		        <el-button @click="handleClick(scope.row)" type="text" >查看</el-button>
		        <el-button type="text" >编辑</el-button>
		      </template>
		    </el-table-column>
		</el-table>
	</div>
</template>
<style>
	.main-top{
		padding-bottom: 15px;
	}
	
	.el-input{
		display: inline-block;
		width: auto;
	}
	.el-menu{
		border: 0;
	}
</style>
<script>
	import bread from '../components/bread'
		export default {
		  	components:{
		  		bread
		  	},
		    methods: {
		      handleClick(row) {
		        console.log(row);
		      }
		    },
		
		    data() {
		      return {
		      	value1: '',
		      	value2: '',
		      	pickerOptions1: {
			        disabledDate(time) {
			            return time.getTime() > Date.now();
		        	}
			    },
		        tableData: null
		      }
		    },
		    created() {
		    	this.$axios('http://localhost:8080/api/order').then(res =>{
		    		this.tableData = res.data.data.data
		    	}, res => {
		    		console.log(res);
		    	})
		    },
		}
</script>