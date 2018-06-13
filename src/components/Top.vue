<template>
	<el-header>
		<el-row>
  			<el-col :span="9"><img src="../assets/logo.png"/><h1>新概念检车管理平台</h1></el-col>
			<el-col :span="6" :offset="8">
				<div class="el-col el-col-7 el-col-offset-1"><span class="el-icon-refresh"></span>清除缓存</div>
				<div class="el-col el-col-7 el-col-offset-1"><span class="el-icon-setting"></span>设置</div>
				<div class="el-col el-col-7 el-col-offset-1">
					<el-dropdown trigger="click">
				      <span class="el-dropdown-link">
				        个人中心<i class="el-icon-arrow-down el-icon--right"></i>
				      </span>
				      <el-dropdown-menu slot="dropdown">
				        <el-dropdown-item>个人资料</el-dropdown-item>
				        <el-dropdown-item>设置</el-dropdown-item>
				        <el-dropdown-item>退出</el-dropdown-item>
				        
				      </el-dropdown-menu>
				    </el-dropdown>
				</div>
			</el-col>
		</el-row>
	</el-header>
</template>



<style>
	.el-header{
		height: 100px!important;
		padding-left: 30px;
		background: #545c64;
		color: #fff;
		overflow: hidden;
	}
	.el-header .el-col-9,.el-header .el-col-6,.el-dropdown-link{
		height: 100px;
    	line-height: 100px;
    	font-size: 18px;
    	color: #fff;
	}
	.el-header .el-col-9 img{
		float: left;
		width: 90px;	
		padding-top: 10px;
		margin-right: 10px;
	}
	.el-header .el-col-offset-1{
		text-align: center;
	}
	.el-dropdown-menu{
		margin: 0!important;
	}
</style>