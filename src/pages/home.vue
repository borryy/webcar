<template>
	<div class="content">
		<top></top>
		<el-container>
			<el-aside>
				<el-menu  
			       default-active="0"
				   class="el-menu-vertical-demo"
				   background-color="#545c64"
				   text-color="#fff"
				   active-text-color="#ffd04b">  
			       <NavMenu :navMenus="this.navMenus"></NavMenu>  
			     </el-menu> 
		     </el-aside>
		     <el-main>
		     	<router-view></router-view>
		     </el-main>
			
		</el-container>
	</div>
</template>

<script>
	
	import Top from '../components/Top'
	import NavMenu from '../components/NavMenu'
    export default {
        components:{
    	    Top,
    	    NavMenu
        },
        data() {  
	      return {
	      	navMenus:null
	    	}
	    },
	    created() {
	    	this.$axios(this.GLOBAL.serverSrc + this.GLOBAL.urlData).then(res =>{
	    		this.navMenus = res.data.data
	    	}, res => {
	    		console.log(res);
	    	})
	    },
    }
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		
		font-family: "黑体","Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
	body,html,#app,.content,.el-container{
		height: 100%;
	}
	.el-header{
		position: absolute;
    	width: 100%;
	}
	.el-container{
		padding-top: 100px;
	}
	.el-aside,.el-menu,.navMenu{
		width: 200px!important;
		box-sizing: border-box;
	}
</style>