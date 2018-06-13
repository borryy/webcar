<template>  
  	<div class="navMenu">  
  
	    <label v-for="navMenu in navMenus">  
			<el-menu-item v-if="navMenu.childs==null&&navMenu.entity&&navMenu.entity.state==='ENABLE'"  
						  :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name" :route="navMenu.entity.value">  
				<i :class="navMenu.entity.icon"></i>  
				<span slot="title">{{navMenu.entity.alias}}</span>  
			</el-menu-item>
	        <el-submenu v-if="navMenu.childs&&navMenu.entity&&navMenu.entity.state==='ENABLE'"  
	                  :key="navMenu.entity.id" :data="navMenu" :index="navMenu.entity.name">  
		        <template slot="title">  
		          <i :class="navMenu.entity.icon"></i>  
		          <span> {{navMenu.entity.alias}}</span>  
		        </template>  
		        <el-menu-item
	              v-for="(sub_item, sub_index) in navMenu.child"
	              :index="sub_item.path"
	              :key="sub_index">
	              <!--<i class="icon fa" :class="sub_item.icon"></i>-->
	              <span v-text="sub_item.title" class="text"></span>
	            </el-menu-item>
	        	<!--<NavMenu :navMenus="navMenu.childs"></NavMenu>-->  
	        </el-submenu>  
	    </label>  
  
  	</div>  
</template>  
  
<script>  
    export default {  
	    name: 'NavMenu',
	    props: ['navMenus']
    }  
</script>  
  
<style>  
  
</style>  