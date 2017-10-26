window.onload=function(){
	
	map();
	imgone([82,12,3,2,1]);
	imgtwo(1);
	imgthree([0,0,0,0],1);
	imgfour([1,1,1,1,1,2,2,5,5,10,70]);
	dataOne([180,8,82,42])
	dataTwo([60,1.8,1200])
	dataThree([80,80,80])
	dataFour([3])
	dataFive([45])
	dataSix([56])
	$("#data").hide()
	$("#data").css("opacity",1)
	time()

	$("#machine").on('click','.simple',function(){
		var onex=[];
		onex.push(((Math.random() * 5)+80).toFixed(0))
		onex.push(((Math.random() * 4)+10).toFixed(0))
		onex.push(((Math.random() * 2)+2).toFixed(0))
		onex.push(((Math.random() * 2)+1).toFixed(0))
		onex.push(((Math.random() * 1)+0.5).toFixed(0))
		
		imgone(onex);
		imgtwo(2);
		imgthree([0,0,0,0],2);

		var oney=[];
		oney.push(((Math.random() * 2)+0.5).toFixed(0))
		oney.push(((Math.random() * 2)+0.5).toFixed(0))
		oney.push(((Math.random() * 2)+0.5).toFixed(0))
		oney.push(((Math.random() * 2)+0.5).toFixed(0))
		oney.push(((Math.random() * 2)+0.5).toFixed(0))
		oney.push(((Math.random() * 2)+1).toFixed(0))
		oney.push(((Math.random() * 2)+1).toFixed(0))
		oney.push(((Math.random() * 2)+5).toFixed(0))
		oney.push(((Math.random() * 2)+5).toFixed(0))
		oney.push(((Math.random() * 2)+9).toFixed(0))
		oney.push(((Math.random() * 2)+69).toFixed(0))
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
		"青岛":[120.33,35.8],
		"青岛益昕实业有限公司":[120.23,36.07],
		"乳山":[121.52,36.89],
		"金昌":[102.188043,38.520089],
		"泉州":[118.58,24.93],
		"莱西":[120.53,36.86],
		"日照":[119.46,35.42],
		"北京机电研究所":[119.46,35.42],
		"胶南":[119.97,35.88],
		"南通":[121.05,32.08],
		"拉萨":[91.11,29.97],
		"云浮":[112.02,22.93],
		"梅州":[116.1,24.55],
		"文登":[122.05,37.2],
		"上海":[121.48,31.22],
		"本特勒汽车系统有限公司":[120,33.8],
		"上海航空发动机制造股份有限公司":[121.48,32],
		"卡斯马汽车系统有限公司":[121.2,32.3],
		"上海夙臻机械制造有限公司":[1228,31.22],
		"上海航天设备制造总厂":[121.48,31],
		"上海爱德航汽车部件制造有限公司":[121.5,31.22],
		"攀枝花":[101.718637,26.582347],
		"威海":[122.1,37.5],
		"承德":[117.93,40.97],
		"厦门":[118.1,24.46],
		"汕尾":[115.375279,22.786211],
		"潮州":[116.63,23.68],
		"丹东":[124.37,40.13],
		"太仓":[121.1,31.45],
		"来达隔热隔音汽车零部件有限公司":[121.8,31.45],
		"欧拓防音配件有限公司太仓分公司":[121,31.45],
		"曲靖":[103.79,25.51],
		"烟台":[121.39,37.52],
		"烟台埃密斯精密锻造有限公司":[121.39,37.52],
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
		"昆山脉泉精密五金有限公司":[120.95,31],
		"昆山市宏飞机械厂":[120.9,31.39],
		"宁波":[121.56,29.86],
		"台州杰城联合汽车配件有限公司":[122,29.86],
		"浙江吉润汽车部件有限公司":[121.56,29.2],
		"可挺汽车零部件有限公司":[121.57,29.86],
		"湛江":[110.359377,21.270708],
		"揭阳":[116.35,23.55],
		"荣成":[122.41,37.16],
		"连云港":[119.16,34.59],
		"葫芦岛":[120.836932,40.711052],
		"常熟":[120.74,31.64],
		"东莞":[113.75,23.04],
		"东莞拓普威尔汽车模具科技有限公司":[113.75,23.04],
		"河源":[114.68,23.73],
		"淮安":[119.15,33.5],
		"泰州":[119.9,32.49],
		"南宁":[108.33,22.84],
		"营口":[122.18,40.65],
		"惠州":[114.4,23.09],
		"惠州市鹏得金属科技有限公司":[115,23.09],
		"惠州市拓普金属材料有限公司":[114.5,23.09],
		"江阴":[120.26,31.91],
		"蓬莱":[120.75,37.8],
		"韶关":[113.62,24.84],
		"嘉峪关":[98.289152,39.77313],
		"广州":[113.23,23.16],
		"日特固防音配件有限公司":[113.2,23.16],
		"延安":[109.47,36.6],
		"太原":[112.53,37.87],
		"江铃重型汽车有限公司":[112.53,36.8],
		"山西北方兴安化学工业有限公司":[112.63,37.87],
		"山西吉利汽车部件有限公司":[112.8,38],
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
		"中航飞机股份有限公司西安制动分公司":[108.72,34.36],
		"铜川":[109.11,35.09],
		"平度":[119.97,36.77],
		"佛山":[113.11,23.05],
		"佛山市顺德区华泰金属制品有限公司":[113.11,23.05],
		"海口":[110.35,20.02],
		"江门":[113.06,22.61],
		"章丘":[117.53,36.72],
		"肇庆":[112.44,23.05],
		"大连":[121.62,38.92],
		"大连中远川崎船舶工程有限公司":[121.6,38.92],
		"临汾":[111.5,36.08],
		"吴江":[120.63,31.16],
		"石嘴山":[106.39,39.04],
		"沈阳":[123.38,41.8],
		"苏州":[120.62,31.32],
		"茂名":[110.88,21.68],
		"嘉兴":[120.76,30.77],
		"长春":[125.35,43.88],
		"长春凌云吉恩斯科技有限公司":[125.35,45],
		"长春市吉文汽车零部件有限公司":[126,43.88],
		"长春一汽四环变速箱汽车零件":[125.35,43.88],
		"胶州":[120.03336,36.264622],
		"银川":[106.27,38.47],
		"张家港":[120.555821,31.875428],
		"三门峡":[111.19,34.76],
		"锦州":[121.15,41.13],
		"南昌":[115.89,28.68],
		"江铃专用车辆有限公司":[115.89,28.68],
		"柳州":[109.4,24.33],
		"三亚":[109.511909,18.252847],
		"自贡":[104.778442,29.33903],
		"自贡硬质合金有限责任公司":[104.778442,29],
		"成都钛青靛科技有限公司":[104.778442,29.33903],
		"吉林":[126.57,43.87],
		"阳江":[111.95,21.85],
		"泸州":[105.39,28.91],
		"西宁":[101.74,36.56],
		"青海聚能钛业股份有限公司":[101.74,36.56],
		"宜宾":[104.56,29.77],
		"呼和浩特":[111.65,40.82],
		"成都":[104.06,30.67],
		"四川成飞集成科技股份有限公司":[104.06,29.5],
		"成都金佳城数控科技有限公司":[104.12,30.67],
		"四川神工钨钢刀具有限公司":[104.02,30.67],
		"大同":[113.3,40.12],
		"镇江":[119.44,32.2],
		"桂林":[110.28,25.29],
		"张家界":[110.479191,29.117096],
		"宜兴":[119.82,31.36],
		"江苏富陶车辆部件有限公司":[119.82,31.36],
		"北海":[109.12,21.49],
		"广西钦州力顺机械有限公司":[107.8,21.49],
		"西安":[108.95,34.27],
		"金坛":[119.56,31.74],
		"东营":[118.49,37.46],
		"牡丹江":[129.58,44.6],
		"遵义":[106.9,27.7],
		"绍兴":[120.58,30.01],
		"扬州":[119.42,32.39],
		"常州":[119.95,31.79],
		"杭州逢源实业有限公司":[119.95,31.79],
		"潍坊":[119.1,36.62],
		"重庆":[106.54,29.59],
		"重庆力帆乘用车有限公司":[106.54,29.59],
		"台州":[121.420757,28.656386],
		"台州市黄岩地通机械有限公司":[121.42,28.656386],
		"南京":[118.78,32.04],
		"南京金龙客车制造有限公司":[118,32.04],
		"南京国际船舶设备配件有限公司":[118.76,32.04],
		"滨州":[118.03,37.36],
		"贵阳":[106.71,26.57],
		"贵州吉利新能源汽车有限公司":[106.71,26.57],
		"无锡":[120.29,31.59],
		"无锡市求实特种模具有限公司":[120.29,31.59],
		"本溪":[123.73,41.3],
		"克拉玛依":[84.77,45.59],
		"渭南":[109.5,34.52],
		"马鞍山":[118.48,31.56],
		"宝鸡":[107.15,34.38],
		"中铁宝桥集团有限公司":[107.6,34.8],
		"地通工业控股集团有限公司":[108,34.38],
		"陕西至信机械制造有限公司":[107.1,34.38],
		"宝鸡吉利汽车部件有限公司":[107,34],
		"焦作":[113.21,35.24],
		"句容":[119.16,31.95],
		"北京":[116.46,39.92],
		"中国航空工业集团公司北京航空":[116.46,40],
		"河北中亿永兴工贸有限公司":[116.6,39.92],
		"北京宝沃汽车有限公司":[116,40],
		"首钢总公司":[116,39.92],
		"徐州":[117.2,34.26],
		"衡水":[115.72,37.72],
		"包头":[110,40.58],
		"包头稀土研究院":[110,40.58],
		"绵阳":[104.73,31.48],
		"乌鲁木齐":[87.68,43.77],
		"枣庄":[117.57,34.86],
		"杭州":[120.19,30.26],
		"杭州康盛股份":[120,30.26],
		"杭州佐帕斯工业有限公司":[121,30.26],
		"杭州双象汽车零部件有限公司":[120.19,30.26],
		"淄博":[118.05,36.78],
		"鞍山":[122.85,41.12],
		"溧阳":[119.48,31.43],
		"溧阳市力士汽车配件制造":[119.48,31.43],
		"库尔勒":[86.06,41.68],
		"安阳":[114.35,36.1],
		"鹤壁天淇汽车模具有限公司":[114.35,35],
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
		"山东金升有色金属集团有限公司":[118.36,35.05],
		"南充":[106.110698,30.837793],
		"天津":[117.2,39.13],
		"天津森川模具有限公司":[115,39.13],
		"天津新华昌运输设备有限公司":[117.2,38],
		"天津市顺达汽车零部件有限公司":[117,39.13],
		"天津天汽模汽车部件有限公司":[117.3,39.13],
		"富阳":[119.95,30.07],
		"泰安":[117.13,36.18],
		"诸暨":[120.23,29.71],
		"郑州":[113.65,34.76],
		"郑州中远氨纶工程技术有限公司":[113.65,34],
		"可挺汽车零部件有限公司":[113.6,34.76],
		"哈尔滨":[126.63,45.75],
		"聊城":[115.97,36.45],
		"芜湖":[118.38,31.33],
		"瑞鹄汽车模具股份有限公司":[118.38,31.33],
		"唐山":[118.02,39.63],
		"平顶山":[113.29,33.75],
		"邢台":[114.48,37.05],
		"德州":[116.29,37.45],
		"山东力驰新能源汽车有限公司":[116.8,37.45],
		"瑞东集团有限公司":[116.28,37.45],
		"济宁":[116.59,35.38],
		"荆州":[112.239741,30.335165],
		"宜昌":[111.3,30.7],
		"义乌":[120.06,29.32],
		"丽水":[119.92,28.45],
		"洛阳":[112.44,34.7],
		"洛阳北方易初摩托车有限公司":[112.5,34.7],
		"秦皇岛":[119.57,39.95],
		"株洲":[113.16,27.83],
		"上海君屹工业自动化股份":[113.1,27.83],
		"石家庄":[114.48,38.03],
		"莱芜":[117.67,36.19],
		"常德":[111.69,29.05],
		"保定":[115.48,38.85],
		"保定屹隆汽车内饰材料有限公司":[115.48,38.85],
		"湘潭":[112.91,27.87],
		"湘潭杰诚联合汽车制品有限公司":[112.91,26.8],
		"湘潭地通汽车制品有限公司":[112.91,27.2],
		"江南工业集团有限公司":[112.9,27.87],
		"金华":[119.64,29.12],
		"金华华科汽车工业有限公司":[119.64,29.12],
		"岳阳":[113.09,29.37],
		"长沙":[113,28.21],
		"湖南猎豹汽车股份有限公司":[113.2,28.81],
		"湖南晓光汽车模具有限公司":[113,28.21],
		"衢州":[118.88,28.97],
		"廊坊":[116.7,39.53],
		"菏泽":[115.480656,35.23375],
		"合肥":[117.27,31.86],
		"安徽大洋机械制造有限公司":[117.1,30],
		"合肥亿恒机械有限公司":[117.8,31],
		"安徽方圆机械有限公司":[118,32.86],
		"安徽佳仕龙机械有限公司":[117.87,31.86],
		"浙江子也自动化设备有限公司":[118,31.86],
		"宣城海通模具有限公司":[117.9,32.3],
		"合肥工业大学":[118,31],
		"重庆平洋工贸":[118.3,31.2],
		"武汉":[114.31,30.52],
		"湖北和乐门业有限公司":[115.2,30.52],
		"浙江子也自动化设备有限公司":[115,31],
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
			name: 'Top 5',
			type: 'effectScatter',
			coordinateSystem: 'geo',
			data: convertData([
				{name: "广西钦州力顺机械有限公司", value: "6"},
				{name: "重庆平洋工贸", value: "11"},
				{name: "可挺汽车零部件有限公", value: "4"},
				{name: "上海君屹工业自动化股份", value: "6"},
				{name: "台州市黄岩地通机械有限公司", value: "4"},
				{name: "湘潭地通汽车制品有限公司", value: "4"},
				{name: "浙江子也自动化设备有限公司", value: "6"},
				{name: "湖南晓光汽车模具有限公司", value: "7"},
				{name: "湖南晓光汽车模具有限公司", value: "5"},
				{name: "洛阳北方易初摩托车有限公司", value: "5"},
				{name: "陕西至信机械制造有限公司", value: "6"},
				{name: "浙江子也自动化设备有限公司", value: "5"},
				{name: "青岛益昕实业有限公司", value: "4"},
				{name: "台州杰城联合汽车配件有限公司", value: "4"},
				{name: "地通工业控股集团有限公司", value: "5"},
				{name: "安徽方圆机械有限公司", value: "4"},
				{name: "江苏富陶车辆部件有限公司", value: "4"},
				{name: "南京金龙客车制造有限公司", value: "4"},
				{name: "湘潭杰诚联合汽车制品有限公司", value: "5"},
				{name: "合肥亿恒机械有限公司", value: "4"},
				{name: "安徽大洋机械制造有限公司", value: "5"},
				{name: "青岛威鹏汽车配件制造有限公司", value: "4"},
				{name: "合肥工业大学", value: "1"},
				{name: "宝鸡吉利汽车部件有限公司", value: "3"},
				{name: "昆山市宏飞机械厂", value: "2"},
				{name: "瑞东集团有限公司", value: "2"},
				{name: "天津天汽模汽车部件有限公司", value: "2"},
				{name: "山东金升有色金属集团有限公司", value: "2"},
				{name: "大连中远川崎船舶工程有限公司", value: "1"},
				{name: "惠州市拓普金属材料有限公司", value: "1"},
				{name: "鹤壁天淇汽车模具有限公司", value: "1"},
				{name: "江南工业集团有限公司", value: "1"},
				{name: "山东力驰新能源汽车有限公司", value: "2"},
				{name: "首钢总公司", value: "1"},
				{name: "宣城海通模具有限公司", value: "2"},
				{name: "北京宝沃汽车有限公司", value: "2"},
				{name: "湖北和乐门业有限公司", value: "2"},
				{name: "可挺汽车零部件有限公司", value: "2"},
				{name: "四川神工钨钢刀具有限公司", value: "1"},
				{name: "成都金佳城数控科技有限公司", value: "3"},
				{name: "山西吉利汽车部件有限公司", value: "2"},
				{name: "上海爱德航汽车部件制造有限公司", value: "3"},
				{name: "上海航天设备制造总厂", value: "3"},
				{name: "浙江吉润汽车部件有限公司", value: "2"},
				{name: "欧拓防音配件有限公司太仓分公司", value: "3"},
				{name: "日特固防音配件有限公司", value: "2"},
				{name: "湖南猎豹汽车股份有限公司", value: "3"},
				{name: "南京国际船舶设备配件有限公司", value: "2"},
				{name: "瑞鹄汽车模具股份有限公司", value: "2"},
				{name: "中航飞机股份有限公司西安制动分公司", value: "1"},
				{name: "保定屹隆汽车内饰材料有限公司", value: "1"},
				{name: "长春一汽四环变速箱汽车零件", value: "1"},
				{name: "惠州市鹏得金属科技有限公司", value: "2"},
				{name: "杭州双象汽车零部件有限公司", value: "1"},
				{name: "北京机电研究所", value: "2"},
				{name: "贵州吉利新能源汽车有限公司", value: "1"},
				{name: "青海聚能钛业股份有限公司", value: "1"},
				{name: "安徽佳仕龙机械有限公司", value: "2"},
				{name: "山西北方兴安化学工业有限公司", value: "1"},
				{name: "河北中亿永兴工贸有限公司", value: "2"},
				{name: "上海夙臻机械制造有限公司", value: "1"},
				{name: "中国航空工业集团公司北京航空", value: "1"},
				{name: "杭州佐帕斯工业有限公司", value: "2"},
				{name: "杭州康盛股份", value: "2"},
				{name: "江铃专用车辆有限公司", value: "1"},
				{name: "无锡市求实特种模具有限公司", value: "1"},
				{name: "来达隔热隔音汽车零部件有限公司", value: "2"},
				{name: "上海航空发动机制造股份有限公司", value: "2"},
				{name: "卡斯马汽车系统有限公司", value: "1"},
				{name: "天津市顺达汽车零部件有限公司", value: "2"},
				{name: "重庆力帆乘用车有限公司", value: "3"},
				{name: "长春市吉文汽车零部件有限公司", value: "2"},
				{name: "金华华科汽车工业有限公司", value: "3"},
				{name: "中铁宝桥集团有限公司", value: "2"},
				{name: "包头稀土研究院", value: "1"},
				{name: "杭州逢源实业有限公司", value: "1"},
				{name: "长春凌云吉恩斯科技有限公司", value: "2"},
				{name: "本特勒汽车系统有限公司", value: "2"},
				{name: "天津新华昌运输设备有限公司", value: "1"},
				{name: "天津森川模具有限公司", value: "2"},
				{name: "成都钛青靛科技有限公司", value: "1"},
				{name: "溧阳市力士汽车配件制造", value: "2"},
				{name: "自贡硬质合金有限责任公司", value: "2"},
				{name: "烟台埃密斯精密锻造有限公司", value: "1"},
				{name: "江铃重型汽车有限公司", value: "2"},
				{name: "郑州中远氨纶工程技术有限公司", value: "1"},
				{name: "东莞拓普威尔汽车模具科技有限公司", value: "1"},
				{name: "佛山市顺德区华泰金属制品有限公司", value: "1"},
				{name: "昆山脉泉精密五金有限公司", value: "1"},
				{name: "四川成飞集成科技股份有限公司", value: "2"},
				]),
			showEffectOn: 'render',
			rippleEffect: {
				brushType: 'stroke'
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
					color: 'rgba(194,53,49,0.9)'
				},
				emphasis: {
					borderColor: '#fff',
					borderWidth: 1
				}
			},
			zlevel: 1
		},
		{
			name: '机器数量',
			type: 'map',
			geoIndex: 0,
			tooltip: {show: false},
			data:[
			{name: '北京', value: 4},
			{name: '天津', value: 2},
			{name: '上海', value: 2},
			{name: '重庆', value:1},
			{name: '河北', value: 3},
			{name: '河南', value: 4},
			{name: '云南', value: 0},
			{name: '辽宁', value: 1},
			{name: '黑龙江', value: 0},
			{name: '湖南', value: 6},
			{name: '安徽', value: 9},
			{name: '山东', value: 6},
			{name: '新疆', value: 0},
			{name: '江苏', value: 10},
			{name: '浙江', value: 7},
			{name: '江西', value: 3},
			{name: '湖北', value: 2},
			{name: '广西', value: 1},
			{name: '甘肃', value: 0},
			{name: '山西', value: 5},
			{name: '内蒙古', value: 1},
			{name: '陕西', value: 5},
			{name: '吉林', value: 3},
			{name: '福建', value: 0},
			{name: '贵州', value: 1},
			{name: '广东', value: 5},
			{name: '青海', value: 1},
			{name: '西藏', value: 0},
			{name: '四川', value: 5},
			{name: '宁夏', value: 0},
			{name: '海南', value: 0},
			{name: '台湾', value: 0},
			{name: '香港', value: 0},
			{name: '澳门', value: 0}
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
		if (numA>=0&&numA<=10) {
			
		}else{
			$("#machine").html("")
			if (numB<3) {
				for (var i = 0; i < numB; i++) {
					$("#machine").append(
						"<div class='simple col-lg-3'>"+
						"<div class='panel panel-yes'>"+
						"<div class='panel-heading'>"+
						"<b>"+
						"<span>"+city+"</span>"+
						"</b></div></div></div>"
						)
				}
			}else if(numB<9){
				for (var i = 0; i < numB-2; i++) {
					$("#machine").append(
						"<div class='simple col-lg-3'>"+
						"<div class='panel panel-yes'>"+
						"<div class='panel-heading'>"+
						"<b>"+
						"<span>"+city+"</span>"+
						"</b></div></div></div>"
						)
				};
				for (var i = 0; i < 2; i++) {
					$("#machine").append(
						"<div class='simple col-lg-3'>"+
						"<div class='panel panel-no'>"+
						"<div class='panel-heading'>"+
						"<b>"+
						"<span>"+city+"</span>"+
						"</b></div></div></div>"
						)
				}
			}else{
				for (var i = 0; i < numB-2; i++) {
					$("#machine").append(
						"<div class='simple col-lg-2'>"+
						"<div class='panel panel-yes'>"+
						"<div class='panel-heading'>"+
						"<b>"+
						"<span>"+city+"</span>"+
						"</b></div></div></div>"
						)
				};
				for (var i = 0; i < 2; i++) {
					$("#machine").append(
						"<div class='simple col-lg-2'>"+
						"<div class='panel panel-no'>"+
						"<div class='panel-heading'>"+
						"<b>"+
						"<span>"+city+"</span>"+
						"</b></div></div></div>"
						)
				}
			}
		}
	});
	myChart.on('dblclick', function (params) {
		var numA= params.value;
		var numB;
		if (params.value[2]>=0) {
			numB = params.value[2];
		};
		var city = params.name;		
		if (numA>0) {
			window.location.assign("analyse.html")
			
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
			min: 0,
			max: 100,
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
			{value:datax[0], name:'开工率'},
			{value:datax[1], name:'在线率'},
			{value:datax[2], name:'故障维修时间'},
			{value:datax[3], name:'故障停工时间'},
			{value:datax[4], name:'故障检测时间'}
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
					color: '#5a0200',
					shadowBlur: 100,
					shadowColor: 'rgba(0, 0, 0, 0.5)'
				}
			},

			animationType: 'scale',
			animationEasing: 'elasticOut',
			animationDelay: function (idx) {
				return Math.random() * 100;
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
			name: '利用率',
			max: 100,
			min: 70,
			boundaryGap: [0.2, 0.2],
			axisLabel: {
				textStyle: {
					color: '#fff'
				},
				formatter: '{value}'+'%'
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
			name: '负荷',
			max: 100,
			min: 70,
			boundaryGap: [0.2, 0.2],
			axisLabel: {
				textStyle: {
					color: '#fff'
				},
				formatter: '{value}'+'%'
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
					res.push(Math.round((Math.random() * 8)+88));
				}
				return res;
			})()
		},
		{
			name:'设备利用率',
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
					res.push(Math.round((Math.random() * 8)+88));
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
			data0.push(Math.round((Math.random() * 8)+88));
			data1.shift();
			data1.push(Math.round((Math.random() * 8)+88));

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
			data:[{value: datax[0], name: '漏油风险'}]
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
					shadowBlur: 10,
					fontSize: 10
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
					fontSize: 10
				}
			},
			data:[{value: datax[1], name: '硬件'}]
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
						case '1' : return '超负荷';
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
			data:[{value: datax[2], name: '超负荷'}]
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
						case '1' : return 'W';
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
			data: [
			'工作台未清理',
			'导轨拉伤',
			'压力机坏死',
			'传感器损坏',
			'活塞杆拉伤',
			'设备油漆',
			'易损元器损坏',
			'控制阀损坏',
			'充液阀弹簧断裂	',
			'油泵损坏',
			'油管漏油'],
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
			data: [datax[0], datax[1],datax[2], datax[3], datax[4], datax[5],datax[6],datax[7], datax[8],datax[9], datax[10],datax[11]],
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
		hismax: 300,
		dcolor: '#7ca25d',
		
	});
	mainData.push({
		name: 'mm/s'+ '\n' +'滑块速度',
		value: dat[1],
		hismax: 10,
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
		hismax: 75,
		dcolor: '#7ca25d',
		
	});
	mainData.push({
		name: 'N*M'+ '\n' +'电机转矩',
		value: dat[1],
		hismax: 2.3,
		dcolor: '#ffd285',
		
	});
	mainData.push({
		name: 'R/MIN'+ '\n' +'电机转速',
		value: dat[2],
		hismax: 2000,
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
		hismax: 120,
		dcolor: '#7ca25d',
		
	});
	mainData.push({
		name: 'MPa'+ '\n' +'液压缸无杆'+ '\n' +'腔油压',
		value: dat[1],
		hismax: 120,
		dcolor: '#ffd285',
		
	});
	mainData.push({
		name: 'MPa'+ '\n' +'液压缸有杆'+ '\n' +'腔油压',
		value: dat[2],
		hismax: 120,
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
		hismax: 5,
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
		hismax: 60,
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
		
		data0.push(((Math.random()*50)+150).toFixed(1));
		data0.push(((Math.random()*3)+6).toFixed(1));
		data0.push(((Math.random()*40)+50).toFixed(1));
		data0.push(((Math.random()*40)+50).toFixed(1));
		
		
		data1.push(((Math.random()*25)+40).toFixed(1));
		data1.push(((Math.random()*0.8)+1.2).toFixed(1));
		data1.push(((Math.random()*500)+1200).toFixed(1));
		
		data2.push(((Math.random()*40)+60).toFixed(1));
		data2.push(((Math.random()*40)+60).toFixed(1));
		data2.push(((Math.random()*40)+60).toFixed(1));
		
		data3.push(((Math.random()*1.2)+2).toFixed(1));
		data4.push(((Math.random()*30)+30).toFixed(1));
		data5.push(((Math.random()*30)+50).toFixed(1));

		dataOne(data0);
		dataTwo(data1);
		dataThree(data2);
		dataFour(data3);
		dataFive(data4);
		dataSix(data5);

	}, 1000);
}