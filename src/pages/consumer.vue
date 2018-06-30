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
		<tablem :tableData="tableData" :tableKey="tableKey" :tableMake="tableMake"></tablem>
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
	import tablem from '../components/tablem'
	export default {
		
	  	components:{
	  		bread,
	  		tablem
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
	        tableData: null,
	        tableKey:null,
	        tableMake:null
	      }
	    },
	    created() {
	    	this.$axios(this.GLOBAL.serverSrc + this.GLOBAL.urlOrder).then(res =>{
	    		this.tableData = res.data.data.data
	    		this.tableKey = res.data.data.keys
	    		this.tableMake = res.data.data.make
	    	}, res => {
	    		console.log(res);
	    	})
	    },
	}
</script>