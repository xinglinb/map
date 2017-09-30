window.onload=function(){
	
	map();
	imgone([335,310,360,235,400]);
	imgtwo(1);
	imgthree([0,0,0,0],1);
	imgfour([32, 45,48, 52, 63, 70,75,80, 91]);
	dataOne([25,75,82,42])
	dataTwo([45,18,58])
	dataThree([18,62,48])
	dataFour([15])
	dataFive([85])
	dataSix([56])
	$("#data").hide()
	$("#data").css("opacity",1)
	time()

	$("#machine").on('click','.simple',function(){
		var onex=[];
		for (var i = 0; i < 5; i++) {
			onex.push(((Math.random() * 100)+(30*i+180)).toFixed(0))
		}
		imgone(onex);
		imgtwo(2);
		imgthree([0,0,0,0],2);

		var oney=[];
		for (var i = 0; i < 9; i++) {
			oney.push(((Math.random() * 100)).toFixed(0))
		}
		oney.sort(),
		imgfour(oney);
	});

	$("#data-down").on("click", function(e){
		$("#data").fadeIn() ;

		$(document).one("click", function(){
			$("#data").fadeOut();
		});

		e.stopPropagation();
	});
	$("#data").on("click", function(e){
		e.stopPropagation();
	});

	$("#data-down").hover(function(e){
		$("#data").fadeIn() ;

		$(document).one("click", function(){
			$("#data").fadeOut();
		});

		e.stopPropagation();
	});
	$("#data").on("click", function(e){
		e.stopPropagation();
	});

};


function map(){
	var myChart = echarts.init(document.getElementById('map'));


	var geoCoordMap = {
		"海门":[121.15,31.89],
		"鄂尔多斯":[109.781327,39.608266],
		"招远":[120.38,37.35],
		"舟山":[122.207216,29.985295],
		"齐齐哈尔":[123.97,47.33],
		"盐城":[120.13,33.38],
		"赤峰":[118.87,42.28],
		"青岛":[120.33,36.07],
		"乳山":[121.52,36.89],
		"金昌":[102.188043,38.520089],
		"泉州":[118.58,24.93],
		"莱西":[120.53,36.86],
		"日照":[119.46,35.42],
		"胶南":[119.97,35.88],
		"南通":[121.05,32.08],
		"拉萨":[91.11,29.97],
		"云浮":[112.02,22.93],
		"梅州":[116.1,24.55],
		"文登":[122.05,37.2],
		"上海":[121.48,31.22],
		"攀枝花":[101.718637,26.582347],
		"威海":[122.1,37.5],
		"承德":[117.93,40.97],
		"厦门":[118.1,24.46],
		"汕尾":[115.375279,22.786211],
		"潮州":[116.63,23.68],
		"丹东":[124.37,40.13],
		"太仓":[121.1,31.45],
		"曲靖":[103.79,25.51],
		"烟台":[121.39,37.52],
		"福州":[119.3,26.08],
		"瓦房店":[121.979603,39.627114],
		"即墨":[120.45,36.38],
		"抚顺":[123.97,41.97],
		"玉溪":[102.52,24.35],
		"张家口":[114.87,40.82],
		"阳泉":[113.57,37.85],
		"莱州":[119.942327,37.177017],
		"湖州":[120.1,30.86],
		"汕头":[116.69,23.39],
		"昆山":[120.95,31.39],
		"宁波":[121.56,29.86],
		"湛江":[110.359377,21.270708],
		"揭阳":[116.35,23.55],
		"荣成":[122.41,37.16],
		"连云港":[119.16,34.59],
		"葫芦岛":[120.836932,40.711052],
		"常熟":[120.74,31.64],
		"东莞":[113.75,23.04],
		"河源":[114.68,23.73],
		"淮安":[119.15,33.5],
		"泰州":[119.9,32.49],
		"南宁":[108.33,22.84],
		"营口":[122.18,40.65],
		"惠州":[114.4,23.09],
		"江阴":[120.26,31.91],
		"蓬莱":[120.75,37.8],
		"韶关":[113.62,24.84],
		"嘉峪关":[98.289152,39.77313],
		"广州":[113.23,23.16],
		"延安":[109.47,36.6],
		"太原":[112.53,37.87],
		"清远":[113.01,23.7],
		"中山":[113.38,22.52],
		"昆明":[102.73,25.04],
		"寿光":[118.73,36.86],
		"盘锦":[122.070714,41.119997],
		"长治":[113.08,36.18],
		"深圳":[114.07,22.62],
		"珠海":[113.52,22.3],
		"宿迁":[118.3,33.96],
		"咸阳":[108.72,34.36],
		"铜川":[109.11,35.09],
		"平度":[119.97,36.77],
		"佛山":[113.11,23.05],
		"海口":[110.35,20.02],
		"江门":[113.06,22.61],
		"章丘":[117.53,36.72],
		"肇庆":[112.44,23.05],
		"大连":[121.62,38.92],
		"临汾":[111.5,36.08],
		"吴江":[120.63,31.16],
		"石嘴山":[106.39,39.04],
		"沈阳":[123.38,41.8],
		"苏州":[120.62,31.32],
		"茂名":[110.88,21.68],
		"嘉兴":[120.76,30.77],
		"长春":[125.35,43.88],
		"胶州":[120.03336,36.264622],
		"银川":[106.27,38.47],
		"张家港":[120.555821,31.875428],
		"三门峡":[111.19,34.76],
		"锦州":[121.15,41.13],
		"南昌":[115.89,28.68],
		"柳州":[109.4,24.33],
		"三亚":[109.511909,18.252847],
		"自贡":[104.778442,29.33903],
		"吉林":[126.57,43.87],
		"阳江":[111.95,21.85],
		"泸州":[105.39,28.91],
		"西宁":[101.74,36.56],
		"宜宾":[104.56,29.77],
		"呼和浩特":[111.65,40.82],
		"成都":[104.06,30.67],
		"大同":[113.3,40.12],
		"镇江":[119.44,32.2],
		"桂林":[110.28,25.29],
		"张家界":[110.479191,29.117096],
		"宜兴":[119.82,31.36],
		"北海":[109.12,21.49],
		"西安":[108.95,34.27],
		"金坛":[119.56,31.74],
		"东营":[118.49,37.46],
		"牡丹江":[129.58,44.6],
		"遵义":[106.9,27.7],
		"绍兴":[120.58,30.01],
		"扬州":[119.42,32.39],
		"常州":[119.95,31.79],
		"潍坊":[119.1,36.62],
		"重庆":[106.54,29.59],
		"台州":[121.420757,28.656386],
		"南京":[118.78,32.04],
		"滨州":[118.03,37.36],
		"贵阳":[106.71,26.57],
		"无锡":[120.29,31.59],
		"本溪":[123.73,41.3],
		"克拉玛依":[84.77,45.59],
		"渭南":[109.5,34.52],
		"马鞍山":[118.48,31.56],
		"宝鸡":[107.15,34.38],
		"焦作":[113.21,35.24],
		"句容":[119.16,31.95],
		"北京":[116.46,39.92],
		"徐州":[117.2,34.26],
		"衡水":[115.72,37.72],
		"包头":[110,40.58],
		"绵阳":[104.73,31.48],
		"乌鲁木齐":[87.68,43.77],
		"枣庄":[117.57,34.86],
		"杭州":[120.19,30.26],
		"淄博":[118.05,36.78],
		"鞍山":[122.85,41.12],
		"溧阳":[119.48,31.43],
		"库尔勒":[86.06,41.68],
		"安阳":[114.35,36.1],
		"开封":[114.35,34.79],
		"济南":[117,36.65],
		"德阳":[104.37,31.13],
		"温州":[120.65,28.01],
		"九江":[115.97,29.71],
		"邯郸":[114.47,36.6],
		"临安":[119.72,30.23],
		"兰州":[103.73,36.03],
		"沧州":[116.83,38.33],
		"临沂":[118.35,35.05],
		"南充":[106.110698,30.837793],
		"天津":[117.2,39.13],
		"富阳":[119.95,30.07],
		"泰安":[117.13,36.18],
		"诸暨":[120.23,29.71],
		"郑州":[113.65,34.76],
		"哈尔滨":[126.63,45.75],
		"聊城":[115.97,36.45],
		"芜湖":[118.38,31.33],
		"唐山":[118.02,39.63],
		"平顶山":[113.29,33.75],
		"邢台":[114.48,37.05],
		"德州":[116.29,37.45],
		"济宁":[116.59,35.38],
		"荆州":[112.239741,30.335165],
		"宜昌":[111.3,30.7],
		"义乌":[120.06,29.32],
		"丽水":[119.92,28.45],
		"洛阳":[112.44,34.7],
		"秦皇岛":[119.57,39.95],
		"株洲":[113.16,27.83],
		"石家庄":[114.48,38.03],
		"莱芜":[117.67,36.19],
		"常德":[111.69,29.05],
		"保定":[115.48,38.85],
		"湘潭":[112.91,27.87],
		"金华":[119.64,29.12],
		"岳阳":[113.09,29.37],
		"长沙":[113,28.21],
		"衢州":[118.88,28.97],
		"廊坊":[116.7,39.53],
		"菏泽":[115.480656,35.23375],
		"合肥":[117.27,31.86],
		"武汉":[114.31,30.52],
		"大庆":[125.03,46.58]
	};

	var convertData = function (data) {
		var res = [];
		for (var i = 0; i < data.length; i++) {
			var geoCoord = geoCoordMap[data[i].name];
			if (geoCoord) {
				res.push({
					name: data[i].name,
					value: geoCoord.concat(data[i].value)
				});
			}
		}
		return res;
	};

	option = {
		
		title: {
			x:'center',
			textStyle: {
				color: '#fff'
			}
		},
		tooltip: {
			trigger: 'item',
			formatter: function (params) {
				return params.name + ' : ' + params.value[2];
			}
		},
		// legend: {
		// 	orient: 'vertical',
		// 	y: 'bottom',
		// 	x:'right',
		// 	data:['设备实况'],
		// 	textStyle: {
		// 		color: '#fff'
		// 	},
		// 	calculable : true
		// },
		visualMap: {
			min: 0,
			max: 10,
			left: 'left',
			top: 'bottom',
			text: ['数量',''],
			seriesIndex: [1],
			inRange: {
				color: ['#e0ffff', '#006edd']
			},
			textStyle: {
				color: '#fff'
			},
			calculable : true
		},
		geo: {
			map: 'china',
			roam: true,
			label: {
				normal: {
					position: 'center',
					show: true,
					textStyle: {
						color: 'rgba(0,0,0,0.8)'
					}
				}
			},
			itemStyle: {
				normal:{
					borderColor: 'rgba(0, 0, 0, 0.2)'
				},
				emphasis:{
					areaColor: null,
					shadowOffsetX: 0,
					shadowOffsetY: 0,
					shadowBlur: 20,
					borderWidth: 0,
					shadowColor: '#1c72b7',
				}
			}
		},
		series: [
		{
			name: '设备实况',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			effect: {
				show: true,
				period: 6,
				trailLength: 0.7,
				color: '#fff',
				symbolSize: 3
			},
			data: convertData([
				{name: "乌鲁木齐", value: "2"},
				{name: "成都", value: "2"},
				{name: "贵阳", value: "3"},
				{name: "宁波", value: "4"},
				{name: "太原", value: "5"},
				{name: "揭阳", value: "2"},
				{name: "湘潭", value: "6"},
				{name: "合肥", value: "7"},
				{name: "武汉", value: "8"},
				{name: "大庆", value: "5"},
				{name: "连云港", value: "4"},
				{name: "西安", value: "4"},
				{name: "沈阳", value: "4"},
				]),
			showEffectOn: 'render',
			rippleEffect: {
				brushType: 'stroke',
				scale: 4
			},
			hoverAnimation: true,
			symbolSize: function (val) {
				return val[2] * 3;
			},
			label: {
				normal: {
					show: false
				},
				emphasis: {
					show: false
				}
			},
			itemStyle: {
				normal: {
					color: 'rgba(194,53,49,0.8)'
				},
				emphasis: {
					borderColor: '#fff',
					borderWidth: 1
				}
			}
		},
		{
			name: '机器数量',
			type: 'map',
			geoIndex: 0,
			tooltip: {show: false},
			data:[
			{name: '北京', value: 0},
			{name: '天津', value: 0},
			{name: '上海', value: 0},
			{name: '重庆', value:2},
			{name: '河北', value: 0},
			{name: '河南', value: 5},
			{name: '云南', value: 8},
			{name: '辽宁', value: 6},
			{name: '黑龙江', value: 0},
			{name: '湖南', value: 8},
			{name: '安徽', value: 5},
			{name: '山东', value: 6},
			{name: '新疆', value: 0},
			{name: '江苏', value: 0},
			{name: '浙江', value: 8},
			{name: '江西', value: 6},
			{name: '湖北', value: 0},
			{name: '广西', value: 0},
			{name: '甘肃', value: 0},
			{name: '山西', value: 5},
			{name: '内蒙古', value: 0},
			{name: '陕西', value: 6},
			{name: '吉林', value: 8},
			{name: '福建', value: 6},
			{name: '贵州', value: 0},
			{name: '广东', value: 8},
			{name: '青海', value: 0},
			{name: '西藏', value: 2},
			{name: '四川', value: 4},
			{name: '宁夏', value: 6},
			{name: '海南', value: 0},
			{name: '台湾', value: 7},
			{name: '香港', value: 0},
			{name: '澳门', value: 5}
			]
		}
		]
	}

	myChart.setOption(option);

	myChart.on('click', function (params) {
		var numA= params.value;
		var numB;
		if (params.value[2]>=0) {
			numB = params.value[2];
		};
		var city = params.name;
		// if (numB>0&&numB<=10) {
		// 	$("#imgone").show();
		// 	$("#imgtwo").show();
		// 	$("#imgthree").show();
		// 	$("#imgfour").show();
		// 	$("#text-one").show();
		// 	$("#text-two").show();
		// 	var onex=[];
		// 	for (var i = 0; i < 5; i++) {
		// 		onex.push(((Math.random() * 100)+(30*i+180)).toFixed(0))
		// 	}
		// 	imgone(onex);
		// 	imgtwo(2);
		// 	imgthree([0,0,0,0],2);

		// 	var oney=[];
		// 	for (var i = 0; i < 9; i++) {
		// 		oney.push(((Math.random() * 100)).toFixed(0))
		// 	}
		// 	oney.sort(),
		// 	imgfour(oney);
		// }else if (numB==0) {
		// 	$("#imgone").hide();
		// 	$("#imgtwo").hide();
		// 	$("#imgthree").hide();
		// 	$("#imgfour").hide();
		// 	$("#text-one").hide();
		// 	$("#text-two").hide();

		// }
		
		if (numA>=0&&numA<=10) {
			window.location.assign("analyse.html")
			
		}else{
			$("#machine").html("")
			if (numB<3) {
				for (var i = 0; i < numB; i++) {
					$("#machine").append(
						"<div class='simple col-lg-3'>"+
						"<div class='panel panel-yes'>"+
						"<div class='panel-heading'>"+
						"<b>"+
						"<span>设备"+(i+1)+"</span>"+
						"<span class='pull-right'>——"+city+"</span>"+
						"</b></div></div></div>"
						)
				}
			}else{
				for (var i = 0; i < numB-2; i++) {
					$("#machine").append(
						"<div class='simple col-lg-3'>"+
						"<div class='panel panel-yes'>"+
						"<div class='panel-heading'>"+
						"<b>"+
						"<span>设备"+(i+1)+"</span>"+
						"<span class='pull-right'>——"+city+"</span>"+
						"</b></div></div></div>"
						)
				};
				for (var i = 0; i < 2; i++) {
					$("#machine").append(
						"<div class='simple col-lg-3'>"+
						"<div class='panel panel-no'>"+
						"<div class='panel-heading'>"+
						"<b>"+
						"<span>设备"+(i+1)+"</span>"+
						"<span class='pull-right'>——"+city+"</span>"+
						"</b></div></div></div>"
						)
				}
			}
		}
	});
};

function imgone(datax){
	var myChart = echarts.init(document.getElementById('imgone'));

	option = {


		title: {
			text: '设备工作情况',
			left: 'center',
			top: 0,
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

		visualMap: {
			show: false,
			min: 80,
			max: 600,
			inRange: {
				colorLightness: [0, 1]
			}
		},
		series : [
		{
			name:'合肥工大实验室',
			type:'pie',
			radius : '55%',
			center: ['50%', '50%'],
			data:[
			{value:datax[0], name:'误工率'},
			{value:datax[1], name:'这种绿'},
			{value:datax[2], name:'各种率'},
			{value:datax[3], name:'傻傻率'},
			{value:datax[4], name:'在线率'}
			].sort(function (a, b) { return a.value - b.value; }),
			roseType: 'radius',
			label: {
				normal: {
					textStyle: {
						color: '#fff'
					}
				}
			},
			labelLine: {
				normal: {
					lineStyle: {
						color: '#fff'
					},
					smooth: 0.3,
					length: 10,
					length2: 20
				}
			},
			itemStyle: {
				normal: {
					color: '#c23531',
					shadowBlur: 200,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},

			animationType: 'scale',
			animationEasing: 'elasticOut',
			animationDelay: function (idx) {
				return Math.random() * 200;
			}
		}
		]
	};

	myChart.setOption(option);
};

function imgtwo(x){
	
	var Chart = echarts.init(document.getElementById('imgtwo'));

	ption = {
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
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				label: {
					backgroundColor: '#283b56'
				}
			}
		},
		dataZoom: {
			show: false,
			start: 0,
			end: 100
		},
		xAxis: [
		{
			type: 'category',
			boundaryGap: true,
			axisLabel: {
				textStyle: {
					color: '#fff'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			data: (function (){
				var now = new Date();
				var res = [];
				var len = 10;
				while (len--) {
					res.unshift(now.toLocaleTimeString().replace(/^\D*/,''));
					now = new Date(now - 2000);
				}
				return res;
			})()
		},
		{
			type: 'category',
			axisLabel: {
				textStyle: {
					color: '#fff'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			boundaryGap: true,
			data: (function (){
				var res = [];
				var len = 10;
				while (len--) {
					res.push(len + 1);
				}
				return res;
			})()
		}
		],
		yAxis: [
		{
			type: 'value',
			scale: true,
			name: '负荷',
			max: 25,
			min: 0,
			boundaryGap: [0.2, 0.2],
			axisLabel: {
				textStyle: {
					color: '#fff'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
		},
		{
			type: 'value',
			scale: true,
			name: '预购量',
			max: 100,
			min: 0,
			boundaryGap: [0.2, 0.2],
			axisLabel: {
				textStyle: {
					color: '#fff'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
		}
		],
		series: [
		{
			name:'负荷情况',
			type:'bar',
			xAxisIndex: 1,
			yAxisIndex: 1,
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1,
						[
						{offset: 1, color: '#0358ad'},
						{offset: 0.5, color: '#57a6e9'},
						{offset: 0, color: '#98d1f4'}
						]
						)
				}

			},
			data:(function (){
				var res = [];
				var len = 10;
				while (len--) {
					res.push(Math.round((Math.random() * 20)+50));
				}
				return res;
			})()
		},
		{
			name:'最新成交价',
			type:'line',
			itemStyle: {
				normal: {
					color: '#b9332e'
				}

			},
			data:(function (){
				var res = [];
				var len = 0;
				while (len < 10) {
					res.push((Math.random()*10 + 5).toFixed(1) - 0);
					len++;
				}
				return res;
			})()
		}
		]
	};

	Chart.setOption(ption);
	var qqq= 11;
	if (x==1) {
		var b= setInterval(function (){
			axisData = (new Date()).toLocaleTimeString().replace(/^\D*/,'');

			var data0 = ption.series[0].data;
			var data1 = ption.series[1].data;
			data0.shift();
			data0.push(Math.round((Math.random() * 20)+50));
			data1.shift();
			data1.push((Math.random() * 10 + 5).toFixed(1) - 0);

			ption.xAxis[0].data.shift();
			ption.xAxis[0].data.push(axisData);
			ption.xAxis[1].data.shift();
			ption.xAxis[1].data.push(qqq++);

			Chart.setOption(ption);
		}, 2000);
	}
	
};

function imgthree(datax,x){
	window.clearInterval(a);
	var myChart = echarts.init(document.getElementById('imgthree'));

	otion = {
		backgroundColor: '',
		tooltip : {
			formatter: "{a} <br/>{c} {b}"
		},
		title: {
			text: '设备风险预警',
			left: 'center',
			top: 20,
			bottom:20,
			textStyle: {
				color: '#fff',
				fontFamily:'楷体',
				fontWeight:'100',
			}
		},
		series : [
		{
			name:'风险率',
			type:'gauge',
			min:0,
			max:100,
			splitNumber:10,
			radius: '50%',
			axisLine: {           
				lineStyle: {      
					color: [[0.09, 'lime'],[0.82, '#1e90ff'],[1, '#ff4500']],
					width: 3,
					shadowColor : '#fff', 
					shadowBlur: 10
				}
			},
			axisLabel: {            
				textStyle: {     
					fontWeight: 'bolder',
					color: '#fff',
					shadowColor : '#fff', 
					shadowBlur: 10
				}
			},
			axisTick: {            
				length :15,       
				lineStyle: {       
					color: 'auto',
					shadowColor : '#fff', 
					shadowBlur: 10
				}
			},
			splitLine: {           
				length :25,         
				lineStyle: {       
					width:3,
					color: '#fff',
					shadowColor : '#fff', 
					shadowBlur: 10
				}
			},
			pointer: {           
				shadowColor : '#fff', 
				shadowBlur: 5
			},
			title : {
				textStyle: {       
					fontWeight: 'bolder',
					fontSize: 15,
					fontStyle: 'italic',
					color: '#fff',
					shadowColor : '#fff', 
					shadowBlur: 10
				}
			},
			detail : {
				backgroundColor: 'rgba(30,144,255,0.8)',
				borderWidth: 1,
				borderColor: '#fff',
				shadowColor : '#fff', 
				shadowBlur: 5,
				offsetCenter: [0, '50%'],       
				textStyle: {       
					fontWeight: 'bolder',
					color: '#fff',
					fontSize: 18
				}
			},
			data:[{value: datax[0], name: '风险指数1'}]
		},
		{
			name:'风险2',
			type:'gauge',
			center : ['25%', '55%'],    
			radius : '30%',
			min:0,
			max:7,
			endAngle:45,
			splitNumber:7,
			axisLine: {            
				lineStyle: {       
					color: [[0.29, 'lime'],[0.86, '#1e90ff'],[1, '#ff4500']],
					width: 2,
					shadowColor : '#fff', 
					shadowBlur: 10
				}
			},
			axisLabel: {           
				textStyle: {       
					fontWeight: 'bolder',
					color: '#fff',
					shadowColor : '#fff', 
					shadowBlur: 10,

				}
			},
			axisTick: {            
				length :12,        
				lineStyle: {       
					color: 'auto',
					shadowColor : '#fff', 
					shadowBlur: 10
				}
			},
			splitLine: {           
				length :20,         
				lineStyle: {       
					width:3,
					color: '#fff',
					shadowColor : '#fff',
					shadowBlur: 10
				}
			},
			pointer: {
				width:5,
				shadowColor : '#fff',
				shadowBlur: 5
			},
			title : {
				offsetCenter: [0, '-30%'],      
				textStyle: {      
					fontWeight: 'bolder',
					fontStyle: 'italic',
					color: '#fff',
					shadowColor : '#fff', 
					shadowBlur: 10
				}
			},
			detail : {

				borderColor: '#fff',
				shadowColor : '#fff', 
				shadowBlur: 5,
				width: 80,
				height:30,
				offsetCenter: [25, '20%'],      
				textStyle: {       
					fontWeight: 'bolder',
					color: '#fff',
					fontSize: 20
				}
			},
			data:[{value: datax[1], name: '2'}]
		},
		{
			name:'油表',
			type:'gauge',
			center : ['75%', '50%'],    
			radius : '30%',
			min:0,
			max:2,
			startAngle:135,
			endAngle:45,
			splitNumber:2,
			axisLine: {            
				lineStyle: {      
					color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
					width: 2,
					shadowColor : '#fff', 
					shadowBlur: 10
				}
			},
			axisTick: {            
				length :12,       
				lineStyle: {       
					color: 'auto',
					shadowColor : '#fff',
					shadowBlur: 10
				}
			},
			axisLabel: {
				textStyle: {      
					fontWeight: 'bolder',
					color: '#fff',
					shadowColor : '#fff', 
					shadowBlur: 10
				},
				formatter:function(v){
					switch (v + '') {
						case '0' : return 'E';
						case '1' : return 'Gas';
						case '2' : return 'F';
					}
				}
			},
			splitLine: {           
				length :15,        
				lineStyle: {       
					width:3,
					color: '#fff',
					shadowColor : '#fff', 
					shadowBlur: 10
				}
			},
			pointer: {
				width:2,
				shadowColor : '#fff', 
				shadowBlur: 5
			},
			title : {
				show: false
			},
			detail : {
				show: false
			},
			data:[{value: datax[2], name: 'gas'}]
		},
		{
			name:'水表',
			type:'gauge',
			center : ['75%', '50%'],    
			radius : '30%',
			min:0,
			max:2,
			startAngle:315,
			endAngle:225,
			splitNumber:2,
			axisLine: {            
				lineStyle: {       
					color: [[0.2, 'lime'],[0.8, '#1e90ff'],[1, '#ff4500']],
					width: 2,
					shadowColor : '#fff', 
					shadowBlur: 10
				}
			},
			axisTick: {            
				show: false
			},
			axisLabel: {
				textStyle: {      
					fontWeight: 'bolder',
					color: '#fff',
					shadowColor : '#fff', 
					shadowBlur: 10
				},
				formatter:function(v){
					switch (v + '') {
						case '0' : return 'H';
						case '1' : return 'Water';
						case '2' : return 'C';
					}
				}
			},
			splitLine: {          
				length :15,        
				lineStyle: {       
					width:3,
					color: '#fff',
					shadowColor : '#fff', 
					shadowBlur: 10
				}
			},
			pointer: {
				width:2,
				shadowColor : '#fff', 
				shadowBlur: 5
			},
			title : {
				show: false
			},
			detail : {
				show: false
			},
			data:[{value: datax[3], name: 'gas'}]
		}
		]
	};
	if (x==1) {
		var a=setInterval(function (){
			otion.series[0].data[0].value = ((Math.random()*10)+40).toFixed(2);
			otion.series[1].data[0].value = ((Math.random()*1)+1.5).toFixed(2);
			otion.series[2].data[0].value = ((Math.random()*1)+0.5).toFixed(2);
			otion.series[3].data[0].value = ((Math.random()*1)+0.5).toFixed(2);
			myChart.setOption(otion);
		},1000)

	}
	


	myChart.setOption(otion);
};

function imgfour(datax){
	var myChart = echarts.init(document.getElementById('imgfour'));

	option = {
		title: {
			text: '可能故障原因',
			left: 'center',
			top: 20,
			textStyle: {
				color: '#fff',
				fontFamily:'楷体',
				fontWeight:'100',
			}
		},
		// tooltip: {
		// 	trigger: 'axis',
		// 	axisPointer: {
		// 		type: 'shadow'
		// 	}
		// },
		legend: {
			data: ['2011年']
		},
		grid: {
			left: '3%',
			right: '4%',
			bottom: '3%',
			containLabel: true
		},
		xAxis: {
			type: 'value',
			boundaryGap: [0, 0.1],
			axisLabel: {
				inside: false,
				textStyle: {
					color: '#fff'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
		},
		yAxis: {
			type: 'category',
			data: ['故障','故障','故障','故障','故障','故障1','故障','故障','故障1'],
			axisLabel: {
				inside: false,
				textStyle: {
					color: '#fff'
				}
			},
			axisLine: {
				lineStyle: {
					color: '#fff'
				}
			},
			color: '#fff'


		},
		series: [
		{
			type: 'bar',
			data: [datax[0], datax[1],datax[2], datax[3], datax[4], datax[5],datax[6],datax[7], datax[8]],
			itemStyle: {
				normal: {
					color: new echarts.graphic.LinearGradient(
						0, 0, 0, 1,
						[
						{offset: 0, color: '#f48e8b'},
						{offset: 0.5, color: '#ea423d'},
						{offset: 1, color: '#ed1d16'}
						]
						)
				}
			},
		},

		]
	}


	myChart.setOption(option);
};

function dataOne(dat){
	var myChart = echarts.init(document.getElementById('data-one'));

	var mainData = [];
	mainData.push({
		name: 'mm'+ '\n' +'滑块位移',
		value: dat[0],
		hismax: 100,
		dcolor: '#7ca25d',
		
	});
	mainData.push({
		name: 'mm/s'+ '\n' +'滑块速度',
		value: dat[1],
		hismax: 100,
		dcolor: '#ffd285',
		
	});
	mainData.push({
		name: 'mm'+ '\n' +'滑块上下极限',
		value: dat[2],
		hismax: 100,
		dcolor: '#ff733f',
		
	});
	mainData.push({
		name: 'mm'+ '\n' +'滑块循环次数',
		value: dat[3],
		hismax: 100,
		dcolor: '#ec4863',
		
	});

	function createSeries(mainData) {
		var result = [];
		
		var insideLabel = {
			normal: {
				position: 'center',
				formatter: function(params) {
					if (params.name == "other")
						return "";
					return params.value + params.name;
				},
				textStyle: {
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontSize: 14
				}
			}
		};
		var outsideLabel = {
			normal: {
				show: false
			}
		};
		var itemOthers = {
			normal: {
				color: '#fff'
			}
		};
		for (var i = 0; i < mainData.length; i++) {
			
			result.push({
				type: 'pie',
				center: [i * 25 + 10 + '%', '60%'],
				radius: ['50%', '60%'],
				label: insideLabel,
				data: [{
					name: 'other',
					value: mainData[i].hismax - mainData[i].value,
					itemStyle: itemOthers
				}, {
					name: mainData[i].name,
					value: mainData[i].value,
					itemStyle:{
						normal: {
							color: mainData[i].dcolor
						}
					} 
				}],
				
			});
		}
		return result;
	}
	oa = {
		title: {
			text: '位移传感器',
			textStyle: {
				color: '#fff',
				fontFamily:'楷体',
				fontWeight:'100',
				fontSize: '30'
			},
			x: 'left'
		},
		toolbox: {
			show: true,
			feature: {
				dataView: {
					show: true,
					readOnly: true
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		series: createSeries(mainData)
	}
	myChart.setOption(oa);
}

function dataTwo(dat){
	var myChart = echarts.init(document.getElementById('data-two'));

	var mainData = [];
	mainData.push({
		name: '℃'+ '\n' +'电机温度',
		value: dat[0],
		hismax: 100,
		dcolor: '#7ca25d',
		
	});
	mainData.push({
		name: 'N*M'+ '\n' +'电机转矩',
		value: dat[1],
		hismax: 100,
		dcolor: '#ffd285',
		
	});
	mainData.push({
		name: 'R/MIN'+ '\n' +'电机转速',
		value: dat[2],
		hismax: 100,
		dcolor: '#ff733f',
		
	});

	function createSeries(mainData) {
		var result = [];
		
		var insideLabel = {
			normal: {
				position: 'center',
				formatter: function(params) {
					if (params.name == "other")
						return "";
					return params.value + params.name;
				},
				textStyle: {
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontSize: 14
				}
			}
		};
		var outsideLabel = {
			normal: {
				show: false
			}
		};
		var itemOthers = {
			normal: {
				color: '#fff'
			}
		};
		for (var i = 0; i < mainData.length; i++) {
			
			result.push({
				type: 'pie',
				center: [i * 25 + 10 + '%', '60%'],
				radius: ['50%', '60%'],
				label: insideLabel,
				data: [{
					name: 'other',
					value: mainData[i].hismax - mainData[i].value,
					itemStyle: itemOthers
				}, {
					name: mainData[i].name,
					value: mainData[i].value,
					itemStyle:{
						normal: {
							color: mainData[i].dcolor
						}
					} 
				}],
				
			});
		}
		return result;
	}
	ob = {
		title: {
			text: '伺服电机',
			textStyle: {
				color: '#fff',
				fontFamily:'楷体',
				fontWeight:'100',
				fontSize: '30'
			},
			x: 'left'
		},
		toolbox: {
			show: true,
			feature: {
				dataView: {
					show: true,
					readOnly: true
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		series: createSeries(mainData)
	}
	myChart.setOption(ob);
}

function dataThree(dat){
	var myChart = echarts.init(document.getElementById('data-three'));

	var mainData = [];
	mainData.push({
		name: 'MPa'+ '\n' +'泵出口油压',
		value: dat[0],
		hismax: 100,
		dcolor: '#7ca25d',
		
	});
	mainData.push({
		name: 'MPa'+ '\n' +'液压缸无杆'+ '\n' +'腔油压',
		value: dat[1],
		hismax: 100,
		dcolor: '#ffd285',
		
	});
	mainData.push({
		name: 'MPa'+ '\n' +'液压缸有杆'+ '\n' +'腔油压',
		value: dat[2],
		hismax: 100,
		dcolor: '#ff733f',
		
	});

	function createSeries(mainData) {
		var result = [];
		
		var insideLabel = {
			normal: {
				position: 'center',
				formatter: function(params) {
					if (params.name == "other")
						return "";
					return params.value + params.name;
				},
				textStyle: {
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontSize: 14
				}
			}
		};
		var outsideLabel = {
			normal: {
				show: false
			}
		};
		var itemOthers = {
			normal: {
				color: '#fff'
			}
		};
		for (var i = 0; i < mainData.length; i++) {
			
			result.push({
				type: 'pie',
				center: [i * 25 + 10 + '%', '60%'],
				radius: ['50%', '60%'],
				label: insideLabel,
				data: [{
					name: 'other',
					value: mainData[i].hismax - mainData[i].value,
					itemStyle: itemOthers
				}, {
					name: mainData[i].name,
					value: mainData[i].value,
					itemStyle:{
						normal: {
							color: mainData[i].dcolor
						}
					} 
				}],
				
			});
		}
		return result;
	}
	oc = {
		title: {
			text: '压力传感器',
			textStyle: {
				color: '#fff',
				fontFamily:'楷体',
				fontWeight:'100',
				fontSize: '30'
			},
			x: 'left'
		},
		toolbox: {
			show: true,
			feature: {
				dataView: {
					show: true,
					readOnly: true
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		series: createSeries(mainData)
	}
	myChart.setOption(oc);
}

function dataFour(dat){
	var myChart = echarts.init(document.getElementById('data-four'));

	var mainData = [];
	mainData.push({
		name: 'KN'+ '\n' +'滑块输出力',
		value: dat[0],
		hismax: 100,
		dcolor: '#7ca25d',
		
	});

	function createSeries(mainData) {
		var result = [];
		
		var insideLabel = {
			normal: {
				position: 'center',
				formatter: function(params) {
					if (params.name == "other")
						return "";
					return params.value + params.name;
				},
				textStyle: {
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontSize: 14
				}
			}
		};
		var outsideLabel = {
			normal: {
				show: false
			}
		};
		var itemOthers = {
			normal: {
				color: '#fff'
			}
		};
		for (var i = 0; i < mainData.length; i++) {
			
			result.push({
				type: 'pie',
				center: ['20%', '60%'],
				radius: ['50%', '60%'],
				label: insideLabel,
				data: [{
					name: 'other',
					value: mainData[i].hismax - mainData[i].value,
					itemStyle: itemOthers
				}, {
					name: mainData[i].name,
					value: mainData[i].value,
					itemStyle:{
						normal: {
							color: mainData[i].dcolor
						}
					} 
				}],
				
			});
		}
		return result;
	}
	od = {
		title: {
			text: '力传感器',
			textStyle: {
				color: '#fff',
				fontFamily:'楷体',
				fontWeight:'100',
				fontSize: '30'
			},
			x: 'left'
		},
		toolbox: {
			show: true,
			feature: {
				dataView: {
					show: true,
					readOnly: true
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		series: createSeries(mainData)
	}
	myChart.setOption(od);
}

function dataFive(dat){
	var myChart = echarts.init(document.getElementById('data-five'));

	var mainData = [];
	mainData.push({
		name: '℃'+ '\n' +'液压油温度',
		value: dat[0],
		hismax: 100,
		dcolor: '#ff733f',
		
	});

	function createSeries(mainData) {
		var result = [];
		
		var insideLabel = {
			normal: {
				position: 'center',
				formatter: function(params) {
					if (params.name == "other")
						return "";
					return params.value + params.name;
				},
				textStyle: {
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontSize: 14
				}
			}
		};
		var outsideLabel = {
			normal: {
				show: false
			}
		};
		var itemOthers = {
			normal: {
				color: '#fff'
			}
		};
		for (var i = 0; i < mainData.length; i++) {
			
			result.push({
				type: 'pie',
				center: ['20%', '60%'],
				radius: ['50%', '60%'],
				label: insideLabel,
				data: [{
					name: 'other',
					value: mainData[i].hismax - mainData[i].value,
					itemStyle: itemOthers
				}, {
					name: mainData[i].name,
					value: mainData[i].value,
					itemStyle:{
						normal: {
							color: mainData[i].dcolor
						}
					} 
				}],
				
			});
		}
		return result;
	}
	oe = {
		title: {
			text: '温油传感器',
			textStyle: {
				color: '#fff',
				fontFamily:'楷体',
				fontWeight:'100',
				fontSize: '30'
			},
			x: 'left'
		},
		toolbox: {
			show: true,
			feature: {
				dataView: {
					show: true,
					readOnly: true
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		series: createSeries(mainData)
	}
	myChart.setOption(oe);
}

function dataSix(dat){
	var myChart = echarts.init(document.getElementById('data-six'));

	var mainData = [];
	mainData.push({
		name: 'mm'+ '\n' +'液压油液位',
		value: dat[0],
		hismax: 100,
		dcolor: '#7ca25d',
		
	});

	function createSeries(mainData) {
		var result = [];
		
		var insideLabel = {
			normal: {
				position: 'center',
				formatter: function(params) {
					if (params.name == "other")
						return "";
					return params.value + params.name;
				},
				textStyle: {
					fontStyle: 'normal',
					fontWeight: 'normal',
					fontSize: 14
				}
			}
		};
		var outsideLabel = {
			normal: {
				show: false
			}
		};
		var itemOthers = {
			normal: {
				color: '#fff'
			}
		};
		for (var i = 0; i < mainData.length; i++) {
			
			result.push({
				type: 'pie',
				center: ['20%', '60%'],
				radius: ['50%', '60%'],
				label: insideLabel,
				data: [{
					name: 'other',
					value: mainData[i].hismax - mainData[i].value,
					itemStyle: itemOthers
				}, {
					name: mainData[i].name,
					value: mainData[i].value,
					itemStyle:{
						normal: {
							color: mainData[i].dcolor
						}
					} 
				}],
				
			});
		}
		return result;
	}
	og = {
		title: {
			text: '液位传感器',
			textStyle: {
				color: '#fff',
				fontFamily:'楷体',
				fontWeight:'100',
				fontSize: '30'
			},
			x: 'left'
		},
		toolbox: {
			show: true,
			feature: {
				dataView: {
					show: true,
					readOnly: true
				},
				restore: {
					show: true
				},
				saveAsImage: {
					show: true
				}
			}
		},
		series: createSeries(mainData)
	}
	myChart.setOption(og);
}

function time(){
	setInterval(function (){
		
		var data0 = [];
		var data1 = [];
		var data2 = [];
		var data3 = [];
		var data4 = [];
		var data5 = [];
		for (var i = 0; i < 4; i++) {
			data0.push(((Math.random()*10)+40).toFixed(0));
		};
		for (var i = 0; i < 3; i++) {
			data1.push(((Math.random()*10)+40).toFixed(0));
		};
		for (var i = 0; i < 3; i++) {
			data2.push(((Math.random()*10)+40).toFixed(0));
		};
		data3.push(((Math.random()*10)+40).toFixed(0));
		data4.push(((Math.random()*10)+40).toFixed(0));
		data5.push(((Math.random()*10)+40).toFixed(0));

		dataOne(data0);
		dataTwo(data1);
		dataThree(data2);
		dataFour(data3);
		dataFive(data4);
		dataSix(data5);

	}, 1000);
}