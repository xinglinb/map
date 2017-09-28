window.onload=function(){
	leftOne ()
	// leftTwoa()
	leftTwoc()
	rightOne()
	rightTwo()
}

function leftOne (){
	var myChart = echarts.init(document.getElementById('left-one'));

	option = {
		title: {
			text: '地区设备运营分析',
			left: 'center',
			top: 0,
			textStyle: {
				color: '#fff',
				fontFamily:'楷体',
				fontWeight:'100',
				fontSize: '30'
			}
		},
		legend: {
			left: 'center',
			bottom: '1%',
			textStyle: {
				color: '#ffd285',
			},
			data: ['状态1', '状态2', '状态3', '状态4', '状态5']
		},
		dataZoom: [
		{	
			x:'100%',
			type: 'inside',
			start: 100,
			end: 50
		},
		{
			show: false,
			type: 'slider',
			y: '90%',
			start: 100,
			end: 50
		}
		],
		tooltip: {
			trigger: 'axis',
		},
		xAxis:  {
			type: 'category',
			boundaryGap: false,
			axisLine: {
				lineStyle: {
					color: '#c0576d'
				}
			},
			axisTick: {
				"show": true
			},
			axisLabel: {
				textStyle: {
					color: '#ffd285'
				}
			},
			data: ['9月1日','9月2日','9月3日','9月4日','9月5日','9月6日','9月7日','9月8日','9月9日','9月10日']
		},
		yAxis: {
			"axisLine": {
				lineStyle: {
					color: '#c0576d'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#c0576d'
				}
			},
			"axisTick": {
				"show": false
			},
			axisLabel: {
				textStyle: {
					color: '#ffd285'
				}
			},
			type: 'value'
		},
		series: [
		// {
		// 	name:'状态1',
		// 	type: 'bar',
		// 	data:[11, 11, 14, 17, 12, 13, 10,9,7,14],
		// 	markPoint: {
		// 		data: [
		// 		{type: 'max', name: '最大值'},
		// 		{type: 'min', name: '最小值'}
		// 		]
		// 	},
		// 	markLine: {
		// 		data: [
		// 		{type: 'average', name: '平均值'}
		// 		]
		// 	},
		// 	itemStyle: {
		// 		normal: {
		// 			color:'#7ca25d'
		// 		}

		// 	},

		// },
		{
			name:'状态1',
			type:'line',
			data:[11, 11, 14, 17, 12, 13, 10,1,5,10],
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#7ca25d'
            	}

            },
            markPoint: {
            	data: [
            	{type: 'max', name: '最大值'},
            	{type: 'min', name: '最小值'}
            	]
            },
            markLine: {
            	data: [
            	{type: 'average', name: '平均值'}
            	]
            },
        },
		// {
		// 	name:'状态2',
		// 	type: 'bar',
		// 	data:[16, 8, 3, 4, 10, 12, 14,14,8,12],
		// 	markPoint: {
		// 		data: [
		// 		{type: 'max', name: '最大值'},
		// 		{type: 'min', name: '最小值'}
		// 		]
		// 	},
		// 	markLine: {
		// 		data: [
		// 		{type: 'average', name: '平均值'}
		// 		]
		// 	},
		// 	itemStyle: {
		// 		normal: {
		// 			color:'#ffd285'
		// 		}

		// 	},
		// },
		{
			name:'状态2',
			type:'line',
			data:[16, 8, 3, 4, 10, 12, 8,14,10,12],
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#ffd285'
            	}

            },
            markPoint: {
            	data: [
            	{type: 'max', name: '最大值'},
            	{type: 'min', name: '最小值'}
            	]
            },
            markLine: {
            	data: [
            	{type: 'average', name: '平均值'}
            	]
            },
        },
		// {
		// 	name:'状态3',
		// 	type: 'bar',
		// 	data:[2, 8, 6, 7, 5, 12, 13,11,9,5],
		// 	markPoint: {
		// 		data: [
		// 		{type: 'max', name: '最大值'},
		// 		{type: 'min', name: '最小值'}
		// 		]
		// 	},
		// 	markLine: {
		// 		data: [
		// 		{type: 'average', name: '平均值'}
		// 		]
		// 	},
		// 	itemStyle: {
		// 		normal: {
		// 			color:'#ff733f'
		// 		}

		// 	},
		// },
		{
			name:'状态3',
			type:'line',
			data:[2, 8, 6, 7, 5, 12, 5,17,9,5],
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#ff733f'
            	}

            },
            markPoint: {
            	data: [
            	{type: 'max', name: '最大值'},
            	{type: 'min', name: '最小值'}
            	]
            },
            markLine: {
            	data: [
            	{type: 'average', name: '平均值'}
            	]
            },
        },
		// {
		// 	name:'状态4',
		// 	type: 'bar',
		// 	data:[1, 1, 2, 5, 3, 2, 10,12,9,7],
		// 	markPoint: {
		// 		data: [
		// 		{type: 'max', name: '最大值'},
		// 		{type: 'min', name: '最小值'}
		// 		]
		// 	},
		// 	markLine: {
		// 		data: [
		// 		{type: 'average', name: '平均值'}
		// 		]
		// 	},
		// 	itemStyle: {
		// 		normal: {
		// 			color:'#ec4863'
		// 		}

		// 	},
		// },
		{
			name:'状态4',
			type:'line',
			data:[1, 1, 2, 5, 3, 2, 10,12,9,7],
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#ec4863'
            	}

            },
            markPoint: {
            	data: [
            	{type: 'max', name: '最大值'},
            	{type: 'min', name: '最小值'}
            	]
            },
            markLine: {
            	data: [
            	{type: 'average', name: '平均值'}
            	]
            },
        },
        ]
    };

    myChart.setOption(option);
}

function leftTwoa(){
	var myChart = echarts.init(document.getElementById('left-twoa'));
	option = {
		title: {
			text: '设备负荷情况',

			left: 'center',
			top: 0,
			bottom:20,
			textStyle: {
				color: '#fff',
				fontFamily:'楷体',
				fontWeight:'100',
			}
		},
		tooltip : {
			trigger: 'item',
			formatter: "{a} <br/>{b} : {c} ({d}%)"
		},
		// legend: {
		// 	orient: 'vertical',
		// 	left: 'left',
		// 	textStyle: {
		// 		color: '#ffd285',
		// 	},
		// 	data: ['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
		// },
		series : [{
			type: 'pie',
			center: ['50%', '42%'],
			radius: ['40%', '62%'],
			name: '饼图',
			tooltip: {
				trigger: 'item',
				formatter: "{a} <br/>{b} : {c} ({d}%)"
			},

			data: [{
				value: 335,
				name: '直接访问',
				itemStyle: {
					normal: {
						color: '#995da2'
					}
				}
			}, {
				value: 310,
				name: '邮件营销',
				itemStyle: {
					normal: {
						color: '#7ca25d'
					}
				}
			}, {
				value: 234,
				name: '联盟广告',
				itemStyle: {
					normal: {
						color: '#ffd285'
					}
				}
			}, {
				value: 135,
				name: '视频广告',
				itemStyle: {
					normal: {
						color: '#ff733f'
					}
				}
			}, {
				value: 1548,
				name: '搜索引擎',
				itemStyle: {
					normal: {
						color: '#ec4863'
					}
				}
			}]
		},
		]
	};
	myChart.setOption(option);
}

function leftTwoc(){
	var myChart = echarts.init(document.getElementById('left-twoc'));
	
	option = {
		
		tooltip : {
			trigger: 'item',
		},
		radar: {
			name: {
				textStyle: {
					color: '#fff',
					borderRadius: 3,
					padding: [3, 5]
				}
			},
			indicator: [
			{ name: '销售', max: 6500},
			{ name: '管理', max: 16000},
			{ name: '信息技术', max: 30000},
			{ name: '客服', max: 38000},
			{ name: '研发', max: 52000},
			{ name: '市场', max: 25000}
			]
		},
		series: [{
			name: '预算 vs 开销（Budget vs spending）',
			type: 'radar',
			data : [
			{
				value : [4300, 10000, 28000, 35000, 50000, 19000],
				name : '预算分配',
				itemStyle: {
					normal: {
						color: '#ec4863'
					}
				}
			},
			{
				value : [5000, 14000, 28000, 31000, 42000, 21000],
				name : '实际开销',
				itemStyle: {
					normal: {
						color: '#ff733f'
					}
				}
			},
			{
				value : [5000, 12000, 24000, 16000, 20000, 16000],
				name : '实际开销',
				itemStyle: {
					normal: {
						color: '#ffd285'
					}
				}
			},
			{
				value : [6000, 8000, 25000, 17000, 16000, 21000],
				name : '实际开销',
				itemStyle: {
					normal: {
						color: '#7ca25d'
					}
				}
			},
			]
		}]
	};

	myChart.setOption(option);
}

function rightOne(){
	var myChart = echarts.init(document.getElementById('right-one'));

	option = {
		title: {
			text: '设备性能瓶颈分析',
			left: 'center',
			top: 0,
			textStyle: {
				color: '#fff',
				fontFamily:'楷体',
				fontWeight:'100',
				fontSize: '30'
			}
		},
		legend: {
			left: 'center',
			bottom: '1%',
			textStyle: {
				color: '#ffd285',
			},
			data: ['状态1', '状态2', '状态3', '状态4', '状态5']
		},
		tooltip: {
			trigger: 'axis',
		},
		xAxis:  {
			type: 'category',
			boundaryGap: true,
			axisLine: {
				lineStyle: {
					color: '#c0576d'
				}
			},
			axisTick: {
				"show": true
			},
			axisLabel: {
				textStyle: {
					color: '#ffd285'
				}
			},
			data: ['设备1','设备2','设备3','设备4','设备5','设备6']
		},
		yAxis: [{
			"axisLine": {
				lineStyle: {
					color: '#c0576d'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#c0576d'
				}
			},
			"axisTick": {
				"show": false
			},
			axisLabel: {
				textStyle: {
					color: '#ffd285'
				}
			},
			type: 'value'
		},
		{
			"axisLine": {
				lineStyle: {
					color: '#c0576d'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#c0576d'
				}
			},
			"axisTick": {
				"show": false
			},
			axisLabel: {
				textStyle: {
					color: '#ffd285'
				}
			},
			type: 'value'
		}
		],
		series: [
		{
			name:'状态1',
			type: 'bar',
			data:[11, 11, 14, 17, 12, 13],
			
			itemStyle: {
				normal: {
					color:'#7ca25d'
				}

			},

		},
		
		{
			name:'状态2',
			type: 'bar',
			data:[16, 8, 3, 4, 10, 12],
			
			itemStyle: {
				normal: {
					color:'#ffd285'
				}

			},
		},
		
		{
			name:'状态3',
			type: 'bar',
			data:[2, 8, 6, 7, 5, 12],
			
			itemStyle: {
				normal: {
					color:'#ff733f'
				}

			},
		},
		
		{
			name:'状态4',
			type: 'bar',
			data:[1, 1, 2, 5, 3, 2],
			
			itemStyle: {
				normal: {
					color:'#ec4863'
				}

			},
		},
		
        ]
    };


	myChart.setOption(option);
}

function rightTwo(){
	var myChart = echarts.init(document.getElementById('right-two'));

	option = {
		title: {
			text: '设备状态对比',
			left: 'center',
			top: 0,
			textStyle: {
				color: '#fff',
				fontFamily:'楷体',
				fontWeight:'100',
				fontSize: '30'
			}
		},
		legend: {
			left: 'center',
			bottom: '1%',
			textStyle: {
				color: '#ffd285',
			},
			data: ['状态1', '状态2', '状态3', '状态4', '状态5']
		},
		tooltip: {
			trigger: 'axis',
		},
		xAxis:  {
			type: 'category',
			boundaryGap: false,
			axisLine: {
				lineStyle: {
					color: '#c0576d'
				}
			},
			axisTick: {
				"show": true
			},
			axisLabel: {
				textStyle: {
					color: '#ffd285'
				}
			},
			data: ['9月1日','9月2日','9月3日','9月4日','9月5日','9月6日']
		},
		yAxis: [{
			"axisLine": {
				lineStyle: {
					color: '#c0576d'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#c0576d'
				}
			},
			"axisTick": {
				"show": false
			},
			axisLabel: {
				textStyle: {
					color: '#ffd285'
				}
			},
			type: 'value'
		},
		{
			"axisLine": {
				lineStyle: {
					color: '#c0576d'
				}
			},
			splitLine: {
				show: true,
				lineStyle: {
					color: '#c0576d'
				}
			},
			"axisTick": {
				"show": false
			},
			axisLabel: {
				textStyle: {
					color: '#ffd285'
				}
			},
			type: 'value'
		}
		],
		series: [
		{
			name:'状态1',
			type:'line',
			data:[1, 3, 4, 4, 6, 5],
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#7ca25d'
            	}

            },
        },
		{
			name:'状态2',
			type:'line',
			data:[4, 6, 7, 9, 10, 12],
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#ffd285'
            	}

            },
        },
		{
			name:'状态3',
			type:'line',
			data:[7, 8, 10, 11, 14, 15],
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#ff733f'
            	}

            },
        },
		{
			name:'状态4',
			type:'line',
			data:[10, 14, 15, 17, 18, 18],
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#ec4863'
            	}

            },
        },
        ]
    };


	myChart.setOption(option);
}
