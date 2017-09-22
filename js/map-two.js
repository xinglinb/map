window.onload=function(){
	function imgfour(){
		var myChart = echarts.init(document.getElementById('imgfour'));

		option = {
			title: {
				text: '可能故障原因',
				left: 'center',
				top: 20,
				textStyle: {
					color: '#fff'
				}
			},
			tooltip: {
				trigger: 'axis',
				axisPointer: {
					type: 'shadow'
				}
			},
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
				data: ['故障','故障','故障','故障','故障','故障1'],
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
				data: [32, 45, 52, 63, 70, 88],
				itemStyle: {
					normal: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1,
							[
							{offset: 0, color: '#83bff6'},
							{offset: 0.5, color: '#188df0'},
							{offset: 1, color: '#188df0'}
							]
							)
					},
					emphasis: {
						color: new echarts.graphic.LinearGradient(
							0, 0, 0, 1,
							[
							{offset: 0, color: '#2378f7'},
							{offset: 0.7, color: '#2378f7'},
							{offset: 1, color: '#83bff6'}
							]
							)
					}
				},
			},

			]
		}


		myChart.setOption(option);
	}
	imgfour();
}