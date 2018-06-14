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
	      	navMenus:[
	      			{
	      				"entity": {  
                        "id": 0,  
                        "parentMenuId": 0,  
                        "name": "menuManage",  
                        "icon": "home",  
                        "alias": "主页",  
                        "state": "ENABLE",  
                        "sort": 2,  
                        "value": "/index",  
                        "type": "LINK",  
                        "discription": "主页",  
                        "createUserId": 1  
                    	},  
                    	"childs": null
	      			},
	      			{  
                    "entity": {  
                        "id": 1,  
                        "parentMenuId": 1,  
                        "name": "menuManage",  
                        "icon": "user-secret",  
                        "alias": "会员管理",  
                        "state": "ENABLE",  
                        "sort": 2,  
                        "value": "#",  
                        "type": "LINK",  
                        "discription": "会员管理",  
                        "createUserId": 1  
                    },  
                    "childs": [  
                {  
                    "entity": {  
                        "id": 3,  
                        "parentMenuId": 1,  
                        "name": "authManage",  
                        "icon": "angle-right",  
                        "alias": "会员列表",  
                        "state": "ENABLE",  
                        "sort": 0,  
                        "value": "/order",  
                        "type": "LINK",  
                        "discription": "会员列表",  
                        "createUserId": 3 
                    },  
                    "childs": null  
                },  
                {  
                    "entity": {  
                        "id": 4,  
                        "parentMenuId": 1,  
                        "name": "roleManage",  
                        "icon": "angle-right",  
                        "alias": "消费明细",  
                        "state": "ENABLE",  
                        "sort": 1,  
                        "value": "/consumer",  
                        "type": "LINK",  
                        "discription": "消费明细",  
                        "createUserId": 1  
                    },  
                    "childs": null  
                },  
                {  
                    "entity": {  
                        "id": 2,  
                        "parentMenuId": 1,  
                        "name": "asd",  
                        "icon": "angle-right",  
                        "alias": "积分明细",  
                        "state": "ENABLE",  
                        "sort": 2,  
                        "value": "/system/menu",  
                        "type": "LINK",  
                        "discription": "用于菜单管理的菜单",  
                        "createUserId": 1  
                    },  
                    "childs": null  
                },  
                {  
                    "entity": {  
                        "id": 5,  
                        "parentMenuId": 1,  
                        "name": "groupManage",  
                        "icon": "angle-right",  
                        "alias": "会员卡设置",  
                        "state": "ENABLE",  
                        "sort": 3,  
                        "value": "/system/group",  
                        "type": "LINK",  
                        "discription": "用于分组管理的菜单",  
                        "createUserId": 1  
                    },  
                    "childs": null  
                }  
            ]  
                },  
                {  
                    "entity": {  
                        "id": 6,  
                        "parentMenuId": 0,  
                        "name": "group",  
                        "icon": "car",  
                        "alias": "检车机构管理",  
                        "state": "ENABLE",  
                        "sort": 4,  
                        "value": "/system/",  
                        "type": "LINK",  
                        "discription": "用于分组管理的菜单",  
                        "createUserId": 1  
                    },  
                    "childs": null  
                }  
	      		
	      	]
	      }
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