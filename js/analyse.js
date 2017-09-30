window.onload=function(){
	leftOne ()
	// leftTwoa()
	leftTwoc()
	rightOne([11, 11, 14, 17, 12, 13],[16, 8, 3, 4, 10, 12],[2, 8, 6, 7, 5, 12],[1, 1, 2, 5, 3, 2])
	rightTwo([1, 3, 4, 4, 6, 5,8],[4, 6, 7, 9, 10, 12,13],[7, 8, 10, 11, 14, 15,16],[10, 14, 15, 17, 18, 18,19],[8, 12, 14, 18, 19, 16,18],[5, 7, 12, 15, 16, 18,16],'°C')

	$(".panel-heading").click(function(){
		var da=[];
		var db=[];
		var dc=[];
		var dd=[];
		for (var i = 0; i < 6; i++) {
			da.push(((Math.random()*10)+3).toFixed(0));
		};
		for (var i = 0; i < 6; i++) {
			db.push(((Math.random()*10)+3).toFixed(0));
		};
		for (var i = 0; i < 6; i++) {
			dc.push(((Math.random()*10)+3).toFixed(0));
		};
		for (var i = 0; i < 6; i++) {
			dd.push(((Math.random()*10)+3).toFixed(0));
		};
		rightOne(da,db,dc,dd)
	})

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
			data: ['工厂1', '工厂2', '工厂3', '工厂4']
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
		{
			name:'工厂1',
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
        {
        	name:'工厂2',
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
        {
        	name:'工厂3',
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
        {
        	name:'工厂4',
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
			text: ''
		},
		tooltip: {},
		animationDurationUpdate: 1500,
		animationEasingUpdate: 'quinticInOut',
		label: {
			normal: {
				show: true,
				textStyle: {
					fontSize: 18
				},
			}
		},
		series: [

		{
			type: 'graph',
			layout: 'force',
			symbolSize: 88,
			focusNodeAdjacency: true,
			roam: true,
			categories: [{
				name: '',
				itemStyle: {
					normal: {
						color: '#7ca25d',
					}
				}
			}, {

				itemStyle: {
					normal: {
						color: '#ffd285',
					}
				}
			}, {

				itemStyle: {
					normal: {
						color: '#ff733f',
					}
				}
			},{

				itemStyle: {
					normal: {
						color: '#ec4863',
					}
				}
			}],
			label: {
				normal: {
					show: true,
					textStyle: {
						fontSize: 15
					},
				}
			},
			force: {
				repulsion: 5000
			},
			edgeSymbolSize: [20, 100],
			edgeLabel: {
				normal: {
					show: true,
					textStyle: {
						fontSize: 10
					},
					formatter: "{c}"
				}
			},
			data: [{
				name: '工厂1',
				draggable: true,
				category: 0,
			}, {
				name: '工厂2',
				category: 1,
				draggable: true,
			}, {
				name: '工厂3',
				category: 2,
				draggable: true,
			}, {
				name: '工厂4',
				category: 3,
				draggable: true,
			}],
			links: [{
				source: 0,
				target: 1,
				category: 0,
				value: ''
			},{
				source: 0,
				target: 3,
				value: ''
			}, {
				source: 1,
				target: 2,
				value: ''
			}],
			lineStyle: {
				normal: {
					opacity: 0.9,
					width: 3,
					height:5,
					curveness: 0
				}
			}
		}
		]
	};

	myChart.setOption(option);

	myChart.on('click', function (params) {
		var num= params.name;
		var da=[];
		var db=[];
		var dc=[];
		var dd=[];
		for (var i = 0; i < 6; i++) {
			da.push(((Math.random()*10)+3).toFixed(0));
		};
		for (var i = 0; i < 6; i++) {
			db.push(((Math.random()*10)+3).toFixed(0));
		};
		for (var i = 0; i < 6; i++) {
			dc.push(((Math.random()*10)+3).toFixed(0));
		};
		for (var i = 0; i < 6; i++) {
			dd.push(((Math.random()*10)+3).toFixed(0));
		};
		rightOne(da,db,dc,dd)
	})
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

function rightOne(da,db,dc,dd){
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
			data: da,
			
			itemStyle: {
				normal: {
					color:'#7ca25d'
				}

			},

		},
		
		{
			name:'状态2',
			type: 'bar',
			data: db,
			
			itemStyle: {
				normal: {
					color:'#ffd285'
				}

			},
		},
		
		{
			name:'状态3',
			type: 'bar',
			data: dc,
			
			itemStyle: {
				normal: {
					color:'#ff733f'
				}

			},
		},
		
		{
			name:'状态4',
			type: 'bar',
			data:dd,
			
			itemStyle: {
				normal: {
					color:'#ec4863'
				}

			},
		},
		
		]
	};


	myChart.setOption(option);

	myChart.on('click', function (params) {
		var num= params.name;

		var d1=[];
		var d2=[];
		var d3=[];
		var d4=[];
		var d5=[];
		var d6=[];
		for (var i = 1; i < 8; i++) {
			d1.push(((Math.random()*i)+2).toFixed(0));
		};
		for (var i = 1; i < 8; i++) {
			d2.push(((Math.random()*i)+3).toFixed(0));
		};
		for (var i = 1; i < 8; i++) {
			d3.push(((Math.random()*i)+4).toFixed(0));
		};
		for (var i = 1; i < 8; i++) {
			d4.push(((Math.random()*i)+5).toFixed(0));
		};
		for (var i = 1; i < 8; i++) {
			d5.push(((Math.random()*i)+6).toFixed(0));
		};
		for (var i = 1; i < 8; i++) {
			d6.push(((Math.random()*i)+7).toFixed(0));
		};

		rightTwo(d1,d2,d3,d4,d5,d6,'°C')
	})
}

function rightTwo(d1,d2,d3,d4,d5,d6,dxx){
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
			data: ['设备1', '设备2', '设备3', '设备4', '设备5','设备6']
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
			data: ['9月1日','9月2日','9月3日','9月4日','9月5日','9月6日','9月7日']
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
				},
				formatter: '{value}'+dxx
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
			name:'设备1',
			type:'line',
			data:d1,
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#7ca25d'
            	}

            },
        },
        {
        	name:'设备2',
        	type:'line',
        	data:d2,
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#ffd285'
            	}

            },
        },
        {
        	name:'设备3',
        	type:'line',
        	data:d3,
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#ff733f'
            	}

            },
        },
        {
        	name:'设备4',
        	type:'line',
        	data:d4,
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#ec4863'
            	}

            },
        },
        {
        	name:'设备5',
        	type:'line',
        	data:d5,
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#575af0'
            	}

            },
        },
        {
        	name:'设备6',
        	type:'line',
        	data:d6,
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#cc54f3'
            	}

            },
        },
        ]
    };


    myChart.setOption(option);
}
