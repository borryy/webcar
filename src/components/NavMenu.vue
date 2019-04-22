<template>  
  	<div class="navMenu">  
	    <label v-for="navMenu in navMenus">  
	    	<router-link :to="navMenu.entity.value" tag="div">
			<el-menu-item v-if="navMenu.childs==null&&navMenu.entity&&navMenu.entity.state==='ENABLE'"  
						  :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name">
				<icon :name="navMenu.entity.icon"></icon>  
				<span slot="title">{{navMenu.entity.alias}}</span>
			</el-menu-item>
			</router-link>
	        <el-submenu v-if="navMenu.childs&&navMenu.entity&&navMenu.entity.state==='ENABLE'"  
	                  :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name">  
		        <template slot="title">  
		          <icon :name="navMenu.entity.icon"></icon>  
		          <span> {{navMenu.entity.alias}}</span>  
		        </template>
	        	<NavMenu :navMenus="navMenu.childs"></NavMenu>  
	        </el-submenu>  
	    </label>  
  	</div>  
</template>  
  
<script>  
    export default {  
	    name: 'NavMenu',
	    props: ['navMenus'],
    }  
</script>  
  
<style>  
  
</style>  