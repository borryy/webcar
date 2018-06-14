<template>
	<div class="main">
		<div class="main-top">
			<bread></bread>
		</div>
			
		</main-top>
		
		<el-row>
			<el-col :span="6">
				<div id="Surrender" class="chart"></div>
			</el-col>
			<el-col :span="6">
				<div id="InspectionVehicle" class="chart"></div>
			</el-col>
			<el-col :span="6">
				<div id="Service" class="chart"></div>
			</el-col>
			<el-col :span="6">
				<div id="Fighting" class="chart"></div>
			</el-col>
			<el-col :span="6">
				<div id="Driving" class="chart"></div>
			</el-col>
			<el-col :span="18">
				<div id="Pandect" class="chart"></div>
			</el-col>
		</el-row>
	</div>
</template>
<style>
	.chart{
		width: 100%;
		height: 300px;
	}
	#Pandect{
		width: 100%;
		
	}
</style>
<script>
	import bread from '../components/bread'
	  export default {
	  	components:{
	  		bread
	  	},
		name: 'chart',
		mounted (){
			let surrender = this.$echarts.init(document.getElementById('Surrender'))
			let inspectionVehicle = this.$echarts.init(document.getElementById('InspectionVehicle'))
			let service = this.$echarts.init(document.getElementById('Service'))
			let fighting = this.$echarts.init(document.getElementById('Fighting'))
			let driving = this.$echarts.init(document.getElementById('Driving'))
			let pandect = this.$echarts.init(document.getElementById('Pandect'))
			surrender.setOption({
				title : {
				    text:'代缴罚款订单',
				    x:'center',
            		y: 'top',
				    textStyle: {
				     	"fontSize": 18,
				     	"fontWeight": "bolder",
				     	"color": "#1584c5",
				     	"textAlign": "center"
				    }  
				},
				tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
				series : [
			        {
			            name: '代缴罚款',
			            type: 'pie',
			            radius: '55%',
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '14',
			                        fontWeight: 'bold',
			                        color: '#fff'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            },	
			            data:[
			                {value:33, name:'已支付'},
			                {value:76, name:'未支付'},
			                
			            ]
			        }
			    ]
			});
			inspectionVehicle.setOption({
				title : {
				    text:'检车订单',
				    x:'center',
            		y: 'top',
				    textStyle: {
				     	"fontSize": 18,
				     	"fontWeight": "bolder",
				     	"color": "#1584c5",
				     	"textAlign": "center"
				    }  
				},
				tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
				series : [
			        {
			            name: '检车订单',
			            type: 'pie',
			            radius: '55%',
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '14',
			                        fontWeight: 'bold',
			                        color: '#fff'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            }, 	
			            data:[
			                {value:22, name:'新车已支付'},
			                {value:164, name:'预约未支付'},
			                {value:131, name:'预约已支付'},
			                {value:41, name:'上门已支付'},
			            ]
			        }
			    ]
			});
			service.setOption({
				title : {
				    text:'维修订单',
				    x:'center',
            		y: 'top',
				    textStyle: {
				     	"fontSize": 18,
				     	"fontWeight": "bolder",
				     	"color": "#1584c5",
				     	"textAlign": "center"
				    }  
				},
				tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
				series : [
			        {
			            name: '维修订单',
			            type: 'pie',
			            radius: '55%',
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '14',
			                        fontWeight: 'bold',
			                        color: '#fff'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            }, 	
			            data:[
			                {value:3, name:'维修已支付'},
			                {value:20, name:'维修已完成'}
			            ]
			        }
			    ]
			});
			fighting.setOption({
				title : {
				    text:'加油订单',
				    x:'center',
            		y: 'top',
				    textStyle: {
				     	"fontSize": 18,
				     	"fontWeight": "bolder",
				     	"color": "#1584c5",
				     	"textAlign": "center"
				    }  
				},
				tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
				series : [
			        {
			            name: '加油订单',
			            type: 'pie',
			            radius: '55%',
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '14',
			                        fontWeight: 'bold',
			                        color: '#fff'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            }, 	
			            data:[
			                {value:8, name:'加油订单'}
			            ]
			        }
			    ]
			});
			driving.setOption({
				title : {
				    text:'代驾订单',
				    x:'center',
            		y: 'top',
				    textStyle: {
				     	"fontSize": 18,
				     	"fontWeight": "bolder",
				     	"color": "#1584c5",
				     	"textAlign": "center"
				    }  
				},
				tooltip: {
			        trigger: 'item',
			        formatter: "{a} <br/>{b}: {c} ({d}%)"
			    },
				series : [
			        {
			            name: '代驾订单',
			            type: 'pie',
			            radius: '55%',
			            label: {
			                normal: {
			                    show: false,
			                    position: 'center'
			                },
			                emphasis: {
			                    show: true,
			                    textStyle: {
			                        fontSize: '14',
			                        fontWeight: 'bold',
			                        color: '#fff'
			                    }
			                }
			            },
			            labelLine: {
			                normal: {
			                    show: false
			                }
			            }, 	
			            data:[
			                {value:8, name:'代驾订单'}
			            ]
			        }
			    ]
			});
			pandect.setOption({
					title: {
		                text: '数据总览'
		            },
		            tooltip: {},
		            legend: {
		                data:['订单量']
		            },
		            xAxis: {
		                data: ["代缴罚款","检车","维修","加油","代驾"]
		            },
		            yAxis: {},
		            series: [{
		                name: '订单量',
		                type: 'bar',
		                data: [109, 300, 36, 23, 8]
		            }]
			})
		}
	}
</script>