<template>
 <el-table :data="tableData" border size="lage" style="width: 100%">
  <el-table-column v-for="(item,key) in tableKey"
  :fixed="item.position"
  :key="key"
  :prop="item.value"
  :label="item.name"></el-table-column>
  <el-table-column
  label="操作"
  fixed="right"
  width="100">
  <template slot-scope="scope">
    <el-button v-for="(item,index) in tableMake" type="text" @click="handleClick(scope.row)">{{item.name}}</el-button>
  </template>
</el-table-column>
 </el-table>
 
</template>
<script>
	export default{
		name: 'tablem',
		methods: {
		    handleClick(row) {
		        console.log(row);
		    }
		},
		data(){
		  	return{
		    
		  	}
		},
		props:['tableData','tableKey','tableMake'],
	}
</script>