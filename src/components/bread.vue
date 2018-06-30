<template>
    
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item v-for="item in realList" :to="item.path">{{item.name}}</el-breadcrumb-item>
      </el-breadcrumb>
    
</template>
<style>
 	.el-breadcrumb{
 		background: #f5f5f5;
 		padding: 15px;
 		margin-bottom: 15px;
 	}
 	.el-breadcrumb span{
 		color: #409EFF!important;
 	}
</style>
<script>
    export default {
      
      created(){
        this.getRoutePath();
      },
      data() {
        return {
          realList: []
        }
      },
      methods:{
        getRoutePath() {
          this.realList = this.$route.meta.routeList;
        }
      },
     watch:{
       $route:function(newV,oldV) {
         this.realList =newV.meta.routeList;
       }
     }
    }
</script>