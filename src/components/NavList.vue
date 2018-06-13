<template>
	<el-aside>
		<el-row class="tac">
	  		<el-col :span="24">
			    <el-menu
			      default-active="1"
			      class="el-menu-vertical-demo"
			      background-color="#545c64"
			      text-color="#fff"
			      active-text-color="#ffd04b">
			      <lable>
			      	
			      
			      <el-menu-item index="1">
			        <i class="el-icon-menu"></i>
			        <span slot="title">导航</span>
			      </el-menu-item>
			      <el-submenu index="2">
			        <template slot="title">
			          <i class="el-icon-location"></i>
			          <span>导航一</span>
			        </template>
			        <el-menu-item-group>
			          <template slot="title">分组一</template>
			          <el-menu-item index="1-1">选项1</el-menu-item>
			          <el-menu-item index="1-2">选项2</el-menu-item>
			        </el-menu-item-group>
			      </el-submenu>
			      </lable>
			    </el-menu>
			</el-col>
		</el-row>
	</el-aside>
	


</template>

<script>
 
</script>

<style>
	*{
		margin: 0;
		padding: 0;
		font-family: "黑体","Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
	}
	.el-submenu .el-menu-item{
		min-width: 0;
	}
	.el-aside{
		width: 185px!important;
		
	}
</style>