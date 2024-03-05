/* eslint-disable max-lines */

import ApexCharts from 'apexcharts';

// import Vega from 'vega';

// import VegaLite from 'vega-lite'

import embed from 'vega-embed';

const spec = {
	"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
	"data": {"url": "../../data/explosions.csv"},
	"mark": "bar",
	"encoding": {
		"x": {"field": "year"},
		"y": {"aggregate": "count"}
	}
};

const espec1 = ({
	"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
	"data": {"url": "../../data/explosions.csv"},
	"width":400,
	"height":400,
	// "data": {
	//   "values": explosions_data_typed
	// },
	"mark": "arc",
	"encoding": {
	  "theta": {"field": "type","type":"nominal","aggregate":"count"},
	  "color": {"field": "type","title":"Explosion Type"}
	}
});

const espec2 = ({
	"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
	"data": {"url": "../../data/explosions.csv"},
	"mark": "bar",
	"encoding":{
	  "x":{"field":"year","type":"ordinal","title":"Year"},
	  "y":{"aggregate":"count","title":"Number of Explosions"},
	  "color":{"field":"country","type":"nominal","title":"Country"},
	  "tooltip": [
		{"field": "count", "title": "Number of explosions","aggregate":"count"},
		{"field": "country"}
	  ]
	},
	"title":"Explosions Count by Country and Year"
	
  })

  const espec3 = ({
	"$schema":"https://vega.github.io/schema/vega-lite/v5.json",
	"width":"600",
	"height":"400",
	"data": {"url": "../../data/explosions.csv"},
	"mark": {"type":"area","interpolate":"monotone"},
	"transform":[{"calculate":"toDate(datum.year + '-01-01')","as":"year_date"}],
	"encoding":{
	  "x":{"timeUnit":"year","field":"year_date","title":"Year"},
	  "y":{"aggregate":"count","title":"Number of Explosions"},
	  "color":{"field":"purpose","type":"nominal","title":"Purpose"},
	  "tooltip": [
		{"field": "year_date", "title": "Year","timeUnit":"year"},
		{"field": "count","title":"Number of Explosions","aggregate":"count"}
	  ]
	},
	"title":"Explosions by Year and Purpose"
	
  })
const vlSpec = ({
	"$schema":"https://vega.github.io/schema/vega-lite/v5.json",
	"width": 800,
	"height": 600,
	"projection": {
	  "type": "mercator",
	  // "rotate": {"expr": "[rotate0, rotate1, 0]"}
	},
	// "params": [
	//   {
	//     "name": "rotate0",
	//     "value": 0,
	//     "bind": {"input": "range", "min": -90, "max": 90, "step": 1}
	//   },
	//   {
	//     "name": "rotate1",
	//     "value": 0,
	//     "bind": {"input": "range", "min": -90, "max": 90, "step": 1}
	//   },
	//   {
	//     "name": "explosion magnitude",
	//     "value": 6,
	//     "bind": {"input": "range", "min": 0, "max": 12, "step": 0.1}
	//   }
	// ],
	"layer": [
	  {
		"data": {"sphere": true},
		"mark": {"type": "geoshape", "fill": "#2E2E33"}
	  },
	  {
		"data": {
		  "name": "world",
		  "url": "https://unpkg.com/world-atlas@1/world/110m.json",
		  "format": {"type": "topojson", "feature": "countries"}
		},
		"mark": {"type": "geoshape", "fill": "#3C436B", "stroke": "white"}
	  },
	  // {
	  //   "data": {
	  //     "name": "earthquakes",
	  //     "url": "data/earthquakes.json",
	  //     "format": {"type": "json", "property": "features"}
	  //   },
	  //   "transform": [
	  //     {"calculate": "datum.geometry.coordinates[0]", "as": "longitude"},
	  //     {"calculate": "datum.geometry.coordinates[1]", "as": "latitude"},
	  //     {
	  //       "filter": "(rotate0 * -1) - 90 < datum.longitude && datum.longitude < (rotate0 * -1) + 90 && (rotate1 * -1) - 90 < datum.latitude && datum.latitude < (rotate1 * -1) + 90"
	  //     },
	  //     {"calculate": "datum.properties.mag", "as": "magnitude"}
	  //   ],
	  //   "mark": {"type": "circle", "color": "red", "opacity": 0.25},
	  //   "encoding": {
	  //     "longitude": {"field": "longitude", "type": "quantitative"},
	  //     "latitude": {"field": "latitude", "type": "quantitative"},
	  //     "size": {
	  //       "legend": null,
	  //       "field": "magnitude",
	  //       "type": "quantitative",
	  //       "scale": {
	  //         "type": "sqrt",
	  //         "domain": [0, 100],
	  //         "range": [0, {"expr": "pow(earthquakeSize, 3)"}]
	  //       }
	  //     },
	  //     "tooltip": [{"field": "magnitude"}]
	  //   }
	  // }
	]
  })

  const slidingWindow = ({
	"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
	"description": "Interactive chart with a time frame selector.",
	"title": "Nuclear Explosions Over Years", 
	"data": {"url": "../../data/explosions.csv"},
	"transform": [
	  {
		"aggregate": [{"op": "count", "as": "explosions"}],
		"groupby": ["year"]
	  }
	],
	"vconcat": [
	  {
		"width": 800,
		"height": 300,
		"mark": "line",
		"encoding": {
		  "x": {
			"field": "year",
			"type": "quantitative",
			"scale": {"domain": {"selection": "brush"}},
			"axis": {
			  "format": "d", 
			  "labelAngle": -45,
			  "title": "Year"
			}
		  },
		  "y": {
			"field": "explosions",
			"type": "quantitative",
			"axis": {"title": "Number of Explosions"}
		  },
		  "tooltip": [
			{"field": "year", "type": "quantitative", "title": "Year"},
			{"field": "explosions", "type": "quantitative", "title": "Explosions"}
		  ]
		}
	  },
	  {
		"width": 800,
		"height": 60,
		"mark": "area",
		"selection": {
		  "brush": {"type": "interval", "encodings": ["x"]}
		},
		"encoding": {
		  "x": {
			"field": "year",
			"type": "quantitative",
			"axis": {
			  "format": "d", 
			  "title": "Year Selector",
			  "labelAngle": -45
			}
		  },
		  "y": {
			"field": "explosions",
			"type": "quantitative",
			"axis": {"tickCount": 3, "grid": false}
		  }
		}
	  }
	]
  })

  const worldMap = ({
	"$schema": "https://vega.github.io/schema/vega-lite/v5.json",
	"description": "Map of nuclear explosions plotted by longitude and latitude, with detailed tooltips",
	"title": "Global Nuclear Explosions", 
	"layer": [
	  {
		"data": {
		  "url": "https://vega.github.io/vega-datasets/data/world-110m.json",
		  "format": {
			"type": "topojson",
			"feature": "countries"
		  }
		},
		"projection": {
		  "type": "naturalEarth1"
		},
		"mark": {
		  "type": "geoshape",
		  "fill": "lightgray",
		  "stroke": "white"
		}
	  },
	  {
		"data": {"url": "../../data/explosions.csv"},
		"mark": {
		  "type": "circle",
		  "size": 200, 
		  "color": "firebrick"
		},
		"encoding": {
		  "longitude": {
			"field": "longitude",
			"type": "quantitative"
		  },
		  "latitude": {
			"field": "latitude",
			"type": "quantitative"
		  },
		  "tooltip": [
			{"field": "country", "type": "nominal", "title": "Country"},
			{"field": "year", "type": "ordinal", "title": "Year"},
			{"field": "magnitude_body", "type": "quantitative", "title": "Magnitude Body"},
			{"field": "purpose", "type": "nominal", "title": "Purpose"}
		  ]
		}
	  }
	],
	"width": 1000, 
	"height": 600, 
	"config": {
	  "view": {
		"stroke": "transparent" 
	  }
	}
  })


embed("#evis1",espec1);

embed("#evis2",espec2);

embed("#evis3",espec3);

// embed('#vis', spec);

// embed("#vis2",vlSpec)

embed("#rvis1",slidingWindow)

embed("#rvis2",worldMap)



const getMainChartOptions = () => {
	let mainChartColors = {};

	if (document.documentElement.classList.contains('dark')) {
		mainChartColors = {
			borderColor: '#374151',
			labelColor: '#9CA3AF',
			opacityFrom: 0,
			opacityTo: 0.15,
		};
	} else {
		mainChartColors = {
			borderColor: '#F3F4F6',
			labelColor: '#6B7280',
			opacityFrom: 0.45,
			opacityTo: 0,
		};
	}

	return {
		chart: {
			height: 420,
			type: 'area',
			fontFamily: 'Inter, sans-serif',
			foreColor: mainChartColors.labelColor,
			toolbar: {
				show: false,
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				enabled: true,
				opacityFrom: mainChartColors.opacityFrom,
				opacityTo: mainChartColors.opacityTo,
			},
		},
		dataLabels: {
			enabled: false,
		},
		tooltip: {
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
		},
		grid: {
			show: true,
			borderColor: mainChartColors.borderColor,
			strokeDashArray: 1,
			padding: {
				left: 35,
				bottom: 15,
			},
		},
		series: [
			{
				name: 'Revenue',
				data: [6356, 6218, 6156, 6526, 6356, 6256, 6056],
				color: '#1A56DB',
			},
			{
				name: 'Revenue (previous period)',
				data: [6556, 6725, 6424, 6356, 6586, 6756, 6616],
				color: '#FDBA8C',
			},
		],
		markers: {
			size: 5,
			strokeColors: '#ffffff',
			hover: {
				size: undefined,
				sizeOffset: 3,
			},
		},
		xaxis: {
			categories: [
				'01 Feb',
				'02 Feb',
				'03 Feb',
				'04 Feb',
				'05 Feb',
				'06 Feb',
				'07 Feb',
			],
			labels: {
				style: {
					colors: [mainChartColors.labelColor],
					fontSize: '14px',
					fontWeight: 500,
				},
			},
			axisBorder: {
				color: mainChartColors.borderColor,
			},
			axisTicks: {
				color: mainChartColors.borderColor,
			},
			crosshairs: {
				show: true,
				position: 'back',
				stroke: {
					color: mainChartColors.borderColor,
					width: 1,
					dashArray: 10,
				},
			},
		},
		yaxis: {
			labels: {
				style: {
					colors: [mainChartColors.labelColor],
					fontSize: '14px',
					fontWeight: 500,
				},
				formatter(value) {
					return `$${value}`;
				},
			},
		},
		legend: {
			fontSize: '14px',
			fontWeight: 500,
			fontFamily: 'Inter, sans-serif',
			labels: {
				colors: [mainChartColors.labelColor],
			},
			itemMargin: {
				horizontal: 10,
			},
		},
		responsive: [
			{
				breakpoint: 1024,
				options: {
					xaxis: {
						labels: {
							show: false,
						},
					},
				},
			},
		],
	};
};

if (document.getElementById('main-chart')) {
	const chart = new ApexCharts(
		document.getElementById('main-chart'),
		getMainChartOptions(),
	);
	chart.render();

	// init again when toggling dark mode
	document.addEventListener('dark-mode', () => {
		chart.updateOptions(getMainChartOptions());
	});
}

if (document.getElementById('new-products-chart')) {
	const options = {
		colors: ['#1A56DB', '#FDBA8C'],
		series: [
			{
				name: 'Quantity',
				color: '#1A56DB',
				data: [
					{ x: '01 Feb', y: 170 },
					{ x: '02 Feb', y: 180 },
					{ x: '03 Feb', y: 164 },
					{ x: '04 Feb', y: 145 },
					{ x: '05 Feb', y: 194 },
					{ x: '06 Feb', y: 170 },
					{ x: '07 Feb', y: 155 },
				],
			},
		],
		chart: {
			type: 'bar',
			height: '140px',
			fontFamily: 'Inter, sans-serif',
			foreColor: '#4B5563',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				columnWidth: '90%',
				borderRadius: 3,
			},
		},
		tooltip: {
			shared: false,
			intersect: false,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 1,
				},
			},
		},
		stroke: {
			show: true,
			width: 5,
			colors: ['transparent'],
		},
		grid: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
		},
		xaxis: {
			floating: false,
			labels: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		yaxis: {
			show: false,
		},
		fill: {
			opacity: 1,
		},
	};

	const chart = new ApexCharts(
		document.getElementById('new-products-chart'),
		options,
	);
	chart.render();
}

if (document.getElementById('sales-by-category')) {
	const options = {
		colors: ['#1A56DB', '#FDBA8C'],
		series: [
			{
				name: 'Desktop PC',
				color: '#1A56DB',
				data: [
					{ x: '01 Feb', y: 170 },
					{ x: '02 Feb', y: 180 },
					{ x: '03 Feb', y: 164 },
					{ x: '04 Feb', y: 145 },
					{ x: '05 Feb', y: 194 },
					{ x: '06 Feb', y: 170 },
					{ x: '07 Feb', y: 155 },
				],
			},
			{
				name: 'Phones',
				color: '#FDBA8C',
				data: [
					{ x: '01 Feb', y: 120 },
					{ x: '02 Feb', y: 294 },
					{ x: '03 Feb', y: 167 },
					{ x: '04 Feb', y: 179 },
					{ x: '05 Feb', y: 245 },
					{ x: '06 Feb', y: 182 },
					{ x: '07 Feb', y: 143 },
				],
			},
			{
				name: 'Gaming/Console',
				color: '#17B0BD',
				data: [
					{ x: '01 Feb', y: 220 },
					{ x: '02 Feb', y: 194 },
					{ x: '03 Feb', y: 217 },
					{ x: '04 Feb', y: 279 },
					{ x: '05 Feb', y: 215 },
					{ x: '06 Feb', y: 263 },
					{ x: '07 Feb', y: 183 },
				],
			},
		],
		chart: {
			type: 'bar',
			height: '420px',
			fontFamily: 'Inter, sans-serif',
			foreColor: '#4B5563',
			toolbar: {
				show: false,
			},
		},
		plotOptions: {
			bar: {
				columnWidth: '90%',
				borderRadius: 3,
			},
		},
		tooltip: {
			shared: true,
			intersect: false,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 1,
				},
			},
		},
		stroke: {
			show: true,
			width: 5,
			colors: ['transparent'],
		},
		grid: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
		},
		xaxis: {
			floating: false,
			labels: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		yaxis: {
			show: false,
		},
		fill: {
			opacity: 1,
		},
	};

	const chart = new ApexCharts(
		document.getElementById('sales-by-category'),
		options,
	);
	chart.render();
}

const getVisitorsChartOptions = () => {
	let visitorsChartColors = {};

	if (document.documentElement.classList.contains('dark')) {
		visitorsChartColors = {
			fillGradientShade: 'dark',
			fillGradientShadeIntensity: 0.45,
		};
	} else {
		visitorsChartColors = {
			fillGradientShade: 'light',
			fillGradientShadeIntensity: 1,
		};
	}

	return {
		series: [
			{
				name: 'Visitors',
				data: [500, 590, 600, 520, 610, 550, 600],
			},
		],
		labels: [
			'01 Feb',
			'02 Feb',
			'03 Feb',
			'04 Feb',
			'05 Feb',
			'06 Feb',
			'07 Feb',
		],
		chart: {
			type: 'area',
			height: '305px',
			fontFamily: 'Inter, sans-serif',
			sparkline: {
				enabled: true,
			},
			toolbar: {
				show: false,
			},
		},
		fill: {
			type: 'gradient',
			gradient: {
				shade: visitorsChartColors.fillGradientShade,
				shadeIntensity: visitorsChartColors.fillGradientShadeIntensity,
			},
		},
		plotOptions: {
			area: {
				fillTo: 'end',
			},
		},
		theme: {
			monochrome: {
				enabled: true,
				color: '#1A56DB',
			},
		},
		tooltip: {
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
		},
	};
};

const getSignupsChartOptions = () => {
	let signupsChartColors = {};

	if (document.documentElement.classList.contains('dark')) {
		signupsChartColors = {
			backgroundBarColors: [
				'#374151',
				'#374151',
				'#374151',
				'#374151',
				'#374151',
				'#374151',
				'#374151',
			],
		};
	} else {
		signupsChartColors = {
			backgroundBarColors: [
				'#E5E7EB',
				'#E5E7EB',
				'#E5E7EB',
				'#E5E7EB',
				'#E5E7EB',
				'#E5E7EB',
				'#E5E7EB',
			],
		};
	}

	return {
		series: [
			{
				name: 'Users',
				data: [1334, 2435, 1753, 1328, 1155, 1632, 1336],
			},
		],
		labels: [
			'01 Feb',
			'02 Feb',
			'03 Feb',
			'04 Feb',
			'05 Feb',
			'06 Feb',
			'07 Feb',
		],
		chart: {
			type: 'bar',
			height: '140px',
			foreColor: '#4B5563',
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: false,
			},
		},
		theme: {
			monochrome: {
				enabled: true,
				color: '#1A56DB',
			},
		},
		plotOptions: {
			bar: {
				columnWidth: '25%',
				borderRadius: 3,
				colors: {
					backgroundBarColors: signupsChartColors.backgroundBarColors,
					backgroundBarRadius: 3,
				},
			},
			dataLabels: {
				hideOverflowingLabels: false,
			},
		},
		xaxis: {
			floating: false,
			labels: {
				show: false,
			},
			axisBorder: {
				show: false,
			},
			axisTicks: {
				show: false,
			},
		},
		tooltip: {
			shared: true,
			intersect: false,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 0.8,
				},
			},
		},
		fill: {
			opacity: 1,
		},
		yaxis: {
			show: false,
		},
		grid: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
		},
	};
};

if (document.getElementById('week-signups-chart')) {
	const chart = new ApexCharts(
		document.getElementById('week-signups-chart'),
		getSignupsChartOptions(),
	);
	chart.render();

	// init again when toggling dark mode
	document.addEventListener('dark-mode', () => {
		chart.updateOptions(getSignupsChartOptions());
	});
}

const getTrafficChannelsChartOptions = () => {
	let trafficChannelsChartColors = {};

	if (document.documentElement.classList.contains('dark')) {
		trafficChannelsChartColors = {
			strokeColor: '#1f2937',
		};
	} else {
		trafficChannelsChartColors = {
			strokeColor: '#ffffff',
		};
	}

	return {
		series: [70, 5, 25],
		labels: ['Desktop', 'Tablet', 'Phone'],
		colors: ['#16BDCA', '#FDBA8C', '#1A56DB'],
		chart: {
			type: 'donut',
			height: 400,
			fontFamily: 'Inter, sans-serif',
			toolbar: {
				show: false,
			},
		},
		responsive: [
			{
				breakpoint: 430,
				options: {
					chart: {
						height: 300,
					},
				},
			},
		],
		stroke: {
			colors: [trafficChannelsChartColors.strokeColor],
		},
		states: {
			hover: {
				filter: {
					type: 'darken',
					value: 0.9,
				},
			},
		},
		tooltip: {
			shared: true,
			followCursor: false,
			fillSeriesColor: false,
			inverseOrder: true,
			style: {
				fontSize: '14px',
				fontFamily: 'Inter, sans-serif',
			},
			x: {
				show: true,
				formatter(_, { seriesIndex, w }) {
					const label = w.config.labels[seriesIndex];
					return label;
				},
			},
			y: {
				formatter(value) {
					return `${value}%`;
				},
			},
		},
		grid: {
			show: false,
		},
		dataLabels: {
			enabled: false,
		},
		legend: {
			show: false,
		},
	};
};

if (document.getElementById('traffic-by-device')) {
	const chart = new ApexCharts(
		document.getElementById('traffic-by-device'),
		getTrafficChannelsChartOptions(),
	);
	chart.render();

	// init again when toggling dark mode
	document.addEventListener('dark-mode', () => {
		chart.updateOptions(getTrafficChannelsChartOptions());
	});
}
