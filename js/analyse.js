window.onload=function(){
	leftOne ()
	leftTwoc()
	var da=[];
	var db=[];
	var dc=[];
	var dd=[];
	for (var i = 0; i < 6; i++) {
		da.push(((Math.random()*6)+82).toFixed(0));
		db.push(((Math.random()*4)+4).toFixed(0));
		dc.push(((Math.random()*6)+92).toFixed(0));
		dd.push(((Math.random()*6)+88).toFixed(0));
	};
	rightOne(['设备1','设备2','设备3','设备4','设备5','设备6'],da,db,dc,dd,6)
	var d1=[];
	var d2=[];
	var d3=[];
	var d4=[];
	var d5=[];
	var d0=[];
	var dx=[d0,d1,d2,d3,d4,d5]
	for (var i = 1; i < 8; i++) {
		for (var j = 0; j < 6; j++) {
			console.log(dx[j])
			dx[j].push(((Math.random()*10)+80).toFixed(0));
		}
	};
	rightTwo(d0,d1,d2,d3,d4,d5)
	onLeftTwo ()
	onrightOne()

}

var iii=6;

function leftOne (){
	var myChart = echarts.init(document.getElementById('left-one'));
	dataa=[];
	datab=[];
	datac=[];
	datad=[];
	datae=[];
	for (var i = 0; i < 10; i++) {
		dataa.push(Math.round((Math.random() * 8)+89));
		datab.push(Math.round((Math.random() * 8)+89));
		datac.push(Math.round((Math.random() * 8)+89));
		datad.push(Math.round((Math.random() * 8)+89));
		datae.push(Math.round((Math.random() * 8)+89));
	}
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
			data: ['安徽方圆机械有限公司', '安徽佳仕龙机械有限公司', '重庆平洋工贸有限公司', '合肥亿恒机械有限公司','安徽大洋机械制造有限公司']
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
			data: ['2017年1月','2017年2月','2017年3月','2017年4月','2017年5月','2017年6月','2017年7月','2017年8月','2017年9月','2017年10月']
		},
		yAxis: {
			type: 'value',
			scale: true,
			name: '设备完好率',
			max: 99,
			min: 75,
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
				formatter: '{value}'+'%'
			},
			type: 'value'
		},
		series: [
		{
			name:'安徽方圆机械有限公司',
			type:'line',
			data:dataa,
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
        	name:'安徽佳仕龙机械有限公司',
        	type:'line',
        	data:datab,
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
        	name:'重庆平洋工贸有限公司',
        	type:'line',
        	data:datac,
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
        	name:'合肥亿恒机械有限公司',
        	type:'line',
        	data:datad,
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
        {
        	name:'安徽大洋机械制造有限公司',
        	type:'line',
        	data:datae,
            // smooth: true,
            itemStyle: {
            	normal: {
            		color:'#5c91c0'
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
			{ name: '开工率', max: 6500},
			{ name: '故障率', max: 16000},
			{ name: '负荷率', max: 30000},
			{ name: '停机率', max: 38000},
			{ name: '修理效率', max: 52000},
			{ name: '利用率', max: 25000}
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

function rightOne(ada,da,db,dc,dd,xx){
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
		// legend: {
		// 	left: 'center',
		// 	bottom: '1%',
		// 	textStyle: {
		// 		color: '#ffd285',
		// 	},
		// 	data: ['开工率', '故障率', '负荷率', '利用率']
		// },
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
			data: ada
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
				formatter: '{value}'+'%'
			},
			type: 'value',
			max: 100,
			min: 0,
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
			name:'开工率',
			type: 'bar',
			data: da,
			
			itemStyle: {
				normal: {
					color:'#7ca25d'
				}

			},

		},
		
		{
			name:'故障率',
			type: 'bar',
			data: db,
			
			itemStyle: {
				normal: {
					color:'#ffd285'
				}

			},
		},
		
		{
			name:'负荷率',
			type: 'bar',
			data: dc,
			
			itemStyle: {
				normal: {
					color:'#ff733f'
				}

			},
		},
		
		{
			name:'利用率',
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
}

function rightTwo(d1,d2,d3,d4,d5,d6){
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
				formatter: '{value}'+'%'
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

function onLeftTwo (){
	$("#panel-one").click(function(){
		iii=6;
		var da=[];
		var db=[];
		var dc=[];
		var dd=[];
		for (var i = 0; i < 6; i++) {
			da.push(((Math.random()*6)+82).toFixed(0));
			db.push(((Math.random()*4)+4).toFixed(0));
			dc.push(((Math.random()*6)+92).toFixed(0));
			dd.push(((Math.random()*6)+88).toFixed(0));
		};
		rightOne(['设备1','设备2','设备3','设备4','设备5','设备6'],da,db,dc,dd,6);
		var d1=[];
		var d2=[];
		var d3=[];
		var d4=[];
		var d5=[];
		var d0=[];
		var dx=[d0,d1,d2,d3,d4,d5]
		for (var i = 1; i < 8; i++) {
			for (var j = 0; j < iii; j++) {
				console.log(dx[j])
				dx[j].push(((Math.random()*10)+80).toFixed(0));
			}
		};
		rightTwo(d0,d1,d2,d3,d4,d5)
	});

	$("#panel-two").click(function(){
		iii=4;
		var da=[];
		var db=[];
		var dc=[];
		var dd=[];
		for (var i = 0; i < 4; i++) {
			da.push(((Math.random()*6)+82).toFixed(0));
			db.push(((Math.random()*4)+4).toFixed(0));
			dc.push(((Math.random()*6)+92).toFixed(0));
			dd.push(((Math.random()*6)+88).toFixed(0));
		};
		rightOne(['设备1','设备2','设备3','设备4'],da,db,dc,dd,4);
		var d1=[];
		var d2=[];
		var d3=[];
		var d4=[];
		var d5=[];
		var d0=[];
		var dx=[d0,d1,d2,d3,d4,d5]
		for (var i = 1; i < 8; i++) {
			for (var j = 0; j < iii; j++) {
				console.log(dx[j])
				dx[j].push(((Math.random()*10)+80).toFixed(0));
			}
		};
		rightTwo(d0,d1,d2,d3,d4,d5)
	});

	$("#panel-three").click(function(){
		iii=2;
		var da=[];
		var db=[];
		var dc=[];
		var dd=[];
		for (var i = 0; i < 2; i++) {
			da.push(((Math.random()*6)+82).toFixed(0));
			db.push(((Math.random()*4)+4).toFixed(0));
			dc.push(((Math.random()*6)+92).toFixed(0));
			dd.push(((Math.random()*6)+88).toFixed(0));
		};
		rightOne(['设备1','设备2'],da,db,dc,dd,2);
		var d1=[];
		var d2=[];
		var d3=[];
		var d4=[];
		var d5=[];
		var d0=[];
		var dx=[d0,d1,d2,d3,d4,d5]
		for (var i = 1; i < 8; i++) {
			for (var j = 0; j < iii; j++) {
				console.log(dx[j])
				dx[j].push(((Math.random()*10)+80).toFixed(0));
			}
		};
		rightTwo(d0,d1,d2,d3,d4,d5)
	});

	$("#panel-four").click(function(){
		iii=5;
		var da=[];
		var db=[];
		var dc=[];
		var dd=[];
		for (var i = 0; i < 5; i++) {
			da.push(((Math.random()*6)+82).toFixed(0));
			db.push(((Math.random()*4)+4).toFixed(0));
			dc.push(((Math.random()*6)+92).toFixed(0));
			dd.push(((Math.random()*6)+88).toFixed(0));
		};
		rightOne(['设备1','设备2','设备3','设备4','设备5'],da,db,dc,dd,5);
		var d1=[];
		var d2=[];
		var d3=[];
		var d4=[];
		var d5=[];
		var d0=[];
		var dx=[d0,d1,d2,d3,d4,d5]
		for (var i = 1; i < 8; i++) {
			for (var j = 0; j < iii; j++) {
				console.log(dx[j])
				dx[j].push(((Math.random()*10)+80).toFixed(0));
			}
		};
		rightTwo(d0,d1,d2,d3,d4,d5)
	});

	$("#panel-five").click(function(){
		iii=4;
		var da=[];
		var db=[];
		var dc=[];
		var dd=[];
		for (var i = 0; i < 4; i++) {
			da.push(((Math.random()*6)+82).toFixed(0));
			db.push(((Math.random()*4)+4).toFixed(0));
			dc.push(((Math.random()*6)+92).toFixed(0));
			dd.push(((Math.random()*6)+88).toFixed(0));
		};
		rightOne(['设备1','设备2','设备3','设备4'],da,db,dc,dd,4);
		var d1=[];
		var d2=[];
		var d3=[];
		var d4=[];
		var d5=[];
		var d0=[];
		var dx=[d0,d1,d2,d3,d4,d5]
		for (var i = 1; i < 8; i++) {
			for (var j = 0; j < iii; j++) {
				console.log(dx[j])
				dx[j].push(((Math.random()*10)+80).toFixed(0));
			}
		};
		rightTwo(d0,d1,d2,d3,d4,d5)
	});
}

function onrightOne(){
	$("#cboxOne").click(function(){
		
		
		var d1=[];
		var d2=[];
		var d3=[];
		var d4=[];
		var d5=[];
		var d0=[];
		var dx=[d0,d1,d2,d3,d4,d5]
		for (var i = 1; i < 8; i++) {
			for (var j = 0; j < iii; j++) {
				console.log(dx[j])
				dx[j].push(((Math.random()*10)+80).toFixed(0));
			}
		};
		rightTwo(d0,d1,d2,d3,d4,d5)
	});
	$("#cboxTwo").click(function(){
		
		
		var d1=[];
		var d2=[];
		var d3=[];
		var d4=[];
		var d5=[];
		var d0=[];
		var dx=[d0,d1,d2,d3,d4,d5]
		for (var i = 1; i < 8; i++) {
			for (var j = 0; j < iii; j++) {
				console.log(dx[j])
				dx[j].push(((Math.random()*4)+4).toFixed(0));
			}
		};
		rightTwo(d0,d1,d2,d3,d4,d5)
	});
	$("#cboxThree").click(function(){
		
		
		var d1=[];
		var d2=[];
		var d3=[];
		var d4=[];
		var d5=[];
		var d0=[];
		var dx=[d0,d1,d2,d3,d4,d5]
		for (var i = 1; i < 8; i++) {
			for (var j = 0; j < iii; j++) {
				console.log(dx[j])
				dx[j].push(((Math.random()*6)+92).toFixed(0));
			}
		};
		rightTwo(d0,d1,d2,d3,d4,d5)
	});
	$("#cboxFour").click(function(){
		
		
		var d1=[];
		var d2=[];
		var d3=[];
		var d4=[];
		var d5=[];
		var d0=[];
		var dx=[d0,d1,d2,d3,d4,d5]
		for (var i = 1; i < 8; i++) {
			for (var j = 0; j < iii; j++) {
				console.log(dx[j])
				dx[j].push(((Math.random()*6)+88).toFixed(0));
			}
		};
		rightTwo(d0,d1,d2,d3,d4,d5)
	});
}