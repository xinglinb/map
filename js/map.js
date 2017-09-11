window.onload=function(){

	$(function(){
		$('#map').vectorMap({
			map: 'cn_mill',
			scaleColors: ['#C8EEFF', '#0071A4'],
			normalizeFunction: 'polynomial',
			hoverOpacity: 0.7,
			hoverColor: '#fff',
			color:'#fff',

			markerStyle: {
				initial: {
					fill: '#fff',
					stroke: '#505050',
					"fill-opacity": 1,
					"stroke-width": 1,
					"stroke-opacity": 1,
					r: 15
				},
				hover: {
					stroke: 'black',
					"stroke-width": 2,
					cursor: 'pointer'
				}
			},
			backgroundColor: '#fff',
			markers: [
			{latLng: [116.00, 39.45], name: 'aaa'},
			],
			regionStyle: {
				initial: {
					fill: '#233445',
					"fill-opacity": 1,
					stroke: 'none',
					"stroke-width": 0,
					"stroke-opacity": 1
				},
				hover: {
					"fill-opacity": 0.8,
					cursor: 'pointer'
				},
				selected: {
					fill: 'yellow'
				},
				selectedHover: {
				}
			},
			
		});
	});



}
