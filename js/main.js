// 地图初始化应该在地图容器div已经添加到DOM树之后
var map = new AMap.Map('container', {
	zoom : 6.5,
	center : [ 120.875127, 29.449983 ],
	// zoomEnable : false,
	// dragEnable : false,
	features : [ 'bg', 'point' ],
});

// 卫星图层
var satelliteLayer = new AMap.TileLayer.Satellite();
map.add([ satelliteLayer ]);

var dataList = [{name:"寅阳", gps:"121.808679,31.735478", type:1},
	{name:"佘山", gps:"122.244957,31.419494", type:1},
	{name:"横沙", gps:"121.830722,31.337783", type:1},
	{name:"吴淞", gps:"121.492124,31.373836", type:1},
	{name:"鸡骨礁", gps:"122.236571,31.094085", type:1},
	{name:"芦潮港", gps:"121.847611,30.866523", type:1},
	{name:"大戢山", gps:"122.11602,30.85932", type:1},
	{name:"花鸟山", gps:"122.691416,30.847408", type:1},
	{name:"小洋山", gps:"122.107445,30.594934", type:1},
	{name:"下三星", gps:"122.529505,30.432487", type:1},
	{name:"岱山", gps:"122.221071,30.263195", type:1},
	{name:"嘉兴", gps:"120.945658,30.507194", type:1},
	{name:"洛迦山", gps:"122.449166,29.967475", type:1},
	{name:"六横", gps:"122.113281,29.765749", type:1},
	{name:"大丰", gps:"120.779569,33.273384", type:2},
	{name:"如东", gps:"121.18692,32.373861", type:2},
	{name:"泗礁", gps:"122.452547,30.709856", type:2},
	{name:"定海", gps:"122.219853,29.974182", type:2},
	{name:"镇海", gps:"121.777224,29.926429", type:2},
	{name:"象山", gps:"121.932913,29.192733", type:2},
	{name:"北渔山", gps:"122.027557,29.025692", type:2},
	{name:"台州", gps:"121.440852,28.676231", type:2},
	{name:"石塘", gps:"121.627906,28.287489", type:2},
	{name:"灵昆", gps:"120.926865,27.953969", type:2},
	{name:"北麂岛", gps:"121.208468,27.611781", type:2},
	{name:"苍南", gps:"120.665087,27.47896", type:2},
	{name:"连云港", gps:"119.387152,34.746092", type:0},
	{name:"福鼎", gps:"120.215952,27.323585", type:0},
	{name:"南镇", gps:"120.427514,27.173847", type:0},
	{name:"三沙", gps:"120.221476,26.921649", type:0},
	{name:"湾坞", gps:"119.731576,26.753177", type:0},
	{name:"西洋岛", gps:"120.04976,26.505662", type:0},
	{name:"马尾", gps:"119.456383,25.983704", type:0},
	{name:"平潭", gps:"119.741778,25.502124", type:0},
	{name:"湄洲湾", gps:"118.971607,25.117731", type:0},
	{name:"泉州", gps:"118.679618,24.861474", type:0},
	{name:"厦门", gps:"118.099507,24.493635", type:0},
	{name:"镇海角", gps:"118.123706,24.290071", type:0},
	{name:"古雷头", gps:"117.590949,23.722406", type:0}];
var lineList = [{startA:119.387152,startB:34.746092,endA:120.779569,endB:33.273384,distance:""},
{startA:120.779569,startB:33.273384,endA:121.808679,endB:31.735478,distance:"199km"},
{startA:120.779569,startB:33.273384,endA:121.18692,endB:32.373861,distance:"104km"},
{startA:121.18692,startB:32.373861,endA:121.808679,endB:31.735478,distance:"95.2km"},
{startA:121.18692,startB:32.373861,endA:121.492124,endB:31.373836,distance:"117km"},
{startA:121.808679,startB:31.735478,endA:121.492124,endB:31.373836,distance:"47.5km"},
{startA:121.808679,startB:31.735478,endA:122.244957,endB:31.419494,distance:"48.3km"},
{startA:121.808679,startB:31.735478,endA:121.830722,endB:31.337783,distance:"36.7km"},
{startA:121.492124,startB:31.373836,endA:121.830722,endB:31.337783,distance:"27.1km"},
{startA:121.492124,startB:31.373836,endA:121.847611,endB:30.866523,distance:"67.5km"},
{startA:121.492124,startB:31.373836,endA:120.945658,endB:30.507194,distance:"101km"},
{startA:121.830722,startB:31.337783,endA:121.847611,endB:30.866523,distance:"57.6km"},
{startA:121.830722,startB:31.337783,endA:122.236571,endB:31.094085,distance:"60.5km"},
{startA:121.830722,startB:31.337783,endA:122.244957,endB:31.419494,distance:"42.9km"},
{startA:122.244957,startB:31.419494,endA:122.236571,endB:31.094085,distance:"30.6km"},
{startA:122.244957,startB:31.419494,endA:122.691416,endB:30.847408,distance:"74.6km"},
{startA:122.236571,startB:31.094085,endA:121.847611,endB:30.866523,distance:"61.7km"},
{startA:122.236571,startB:31.094085,endA:122.11602,endB:30.85932,distance:"45km"},
{startA:122.236571,startB:31.094085,endA:122.691416,endB:30.847408,distance:"44.4km"},
{startA:121.847611,startB:30.866523,endA:120.945658,endB:30.507194,distance:"86km"},
{startA:121.847611,startB:30.866523,endA:122.11602,endB:30.85932,distance:"31.4km"},
{startA:121.847611,startB:30.866523,endA:122.107445,endB:30.594934,distance:"36.3km"},
{startA:122.11602,startB:30.85932,endA:122.691416,endB:30.847408,distance:"48.1km"},
{startA:122.11602,startB:30.85932,endA:122.107445,endB:30.594934,distance:"22.7km"},
{startA:122.11602,startB:30.85932,endA:122.452547,endB:30.709856,distance:"27.9km"},
{startA:122.691416,startB:30.847408,endA:122.452547,endB:30.709856,distance:"26.1km"},
{startA:122.691416,startB:30.847408,endA:122.529505,endB:30.432487,distance:"49.2km"},
{startA:122.691416,startB:30.847408,endA:122.449166,endB:29.967475,distance:"101km"},
{startA:120.945658,startB:30.507194,endA:121.777224,endB:29.926429,distance:"97.9km"},
{startA:120.945658,startB:30.507194,endA:122.107445,endB:30.594934,distance:"105km"},
{startA:122.107445,startB:30.594934,endA:121.777224,endB:29.926429,distance:"82.2km"},
{startA:122.107445,startB:30.594934,endA:122.221071,endB:30.263195,distance:"43.7km"},
{startA:122.107445,startB:30.594934,endA:122.529505,endB:30.432487,distance:"45.4km"},
{startA:122.107445,startB:30.594934,endA:122.452547,endB:30.709856,distance:"35.5km"},
{startA:122.452547,startB:30.709856,endA:122.529505,endB:30.432487,distance:"33.1km"},
{startA:122.529505,startB:30.432487,endA:122.221071,endB:30.263195,distance:"36.9km"},
{startA:122.529505,startB:30.432487,endA:122.449166,endB:29.967475,distance:"51.7km"},
{startA:122.221071,startB:30.263195,endA:121.777224,endB:29.926429,distance:"57.7km"},
{startA:122.221071,startB:30.263195,endA:122.219853,endB:29.974182,distance:"28.4km"},
{startA:122.221071,startB:30.263195,endA:122.449166,endB:29.967475,distance:"36.2km"},
{startA:121.777224,startB:29.926429,endA:121.932913,endB:29.192733,distance:"86.3km"},
{startA:121.777224,startB:29.926429,endA:122.113281,endB:29.765749,distance:"53.2km"},
{startA:121.777224,startB:29.926429,endA:122.219853,endB:29.974182,distance:"34.9km"},
{startA:122.219853,startB:29.974182,endA:122.113281,endB:29.765749,distance:"36.2km"},
{startA:122.219853,startB:29.974182,endA:122.449166,endB:29.967475,distance:"36.2km"},
{startA:122.449166,startB:29.967475,endA:122.113281,endB:29.765749,distance:"39.2km"},
{startA:122.449166,startB:29.967475,endA:122.027557,endB:29.025692,distance:"122km"},
{startA:122.113281,startB:29.765749,endA:121.932913,endB:29.192733,distance:"62.3km"},
{startA:122.113281,startB:29.765749,endA:122.027557,endB:29.025692,distance:"91km"},
{startA:121.932913,startB:29.192733,endA:121.440852,endB:28.676231,distance:"75.6km"},
{startA:121.932913,startB:29.192733,endA:122.027557,endB:29.025692,distance:"47.8km"},
{startA:122.027557,startB:29.025692,endA:121.440852,endB:28.676231,distance:"86.8km"},
{startA:122.027557,startB:29.025692,endA:121.627906,endB:28.287489,distance:"93.7km"},
{startA:121.440852,startB:28.676231,endA:120.926865,endB:27.953969,distance:"92.5km"},
{startA:121.440852,startB:28.676231,endA:121.627906,endB:28.287489,distance:"51.3km"},
{startA:121.627906,startB:28.287489,endA:120.926865,endB:27.953969,distance:"76.8km"},
{startA:121.627906,startB:28.287489,endA:121.208468,endB:27.611781,distance:"81.1km"},
{startA:120.926865,startB:27.953969,endA:120.665087,endB:27.47896,distance:"58.1km"},
{startA:120.926865,startB:27.953969,endA:121.208468,endB:27.611781,distance:"58.1km"},
{startA:121.208468,startB:27.611781,endA:120.665087,endB:27.47896,distance:"56.1km"},
{startA:120.665087,startB:27.47896,endA:120.215952,endB:27.323585,distance:""},
{startA:120.665087,startB:27.47896,endA:120.427514,endB:27.173847,distance:""},
{startA:120.215952,startB:27.323585,endA:119.731576,endB:26.753177,distance:""},
{startA:120.215952,startB:27.323585,endA:120.221476,endB:26.921649,distance:""},
{startA:120.215952,startB:27.323585,endA:120.427514,endB:27.173847,distance:""},
{startA:120.427514,startB:27.173847,endA:120.221476,endB:26.921649,distance:""},
{startA:120.221476,startB:26.921649,endA:119.731576,endB:26.753177,distance:""},
{startA:120.221476,startB:26.921649,endA:120.04976,endB:26.505662,distance:""},
{startA:119.731576,startB:26.753177,endA:119.456383,endB:25.983704,distance:""},
{startA:119.731576,startB:26.753177,endA:120.04976,endB:26.505662,distance:""},
{startA:120.04976,startB:26.505662,endA:119.456383,endB:25.983704,distance:""},
{startA:120.04976,startB:26.505662,endA:119.741778,endB:25.502124,distance:""},
{startA:119.456383,startB:25.983704,endA:118.971607,endB:25.117731,distance:""},
{startA:119.456383,startB:25.983704,endA:119.741778,endB:25.502124,distance:""},
{startA:119.741778,startB:25.502124,endA:118.971607,endB:25.117731,distance:""},
{startA:118.971607,startB:25.117731,endA:118.679618,endB:24.861474,distance:""},
{startA:118.679618,startB:24.861474,endA:118.099507,endB:24.493635,distance:""},
{startA:118.679618,startB:24.861474,endA:118.123706,endB:24.290071,distance:""},
{startA:118.099507,startB:24.493635,endA:118.123706,endB:24.290071,distance:""},
{startA:118.099507,startB:24.493635,endA:117.590949,endB:23.722406,distance:""},
{startA:118.123706,startB:24.290071,endA:117.590949,endB:23.722406,distance:""},
];

function gps2LngLat(str){
	var s = str.split(',');
	return new AMap.LngLat(s[0], s[1]);;
}

var markerIconList = ['img/icon_location_blue.png', 'img/icon_location_red.png', 'img/icon_location_green.png'];
// 添加标注 Start
var markerList = [];
for(var i=0;i<dataList.length;i++){
	var data = dataList[i];
   var marker = new AMap.Marker({
		position: gps2LngLat(data.gps),
		anchor:'bottom-center',
		offset: new AMap.Pixel(0, 0),
		title: data.name,
		zIndex: 50
	});
	marker.setExtData(data);
	marker.setIcon(new AMap.Icon({
		size: new AMap.Size(26, 26),
		image: markerIconList[data.type],
		imageSize: new AMap.Size(26, 26),
	}));
	marker.setLabel({
		direction:'right',
		offset: new AMap.Pixel(-8,20),  //设置文本标注偏移量
		content: "<div class='marker_label_"+data.type+"'>"+data.name+"</div>", //设置文本标注内容
	});
	marker.setMap(map);
	if(0 !== data.type){
		marker.on('click', markerOnClick);
	}
	markerList.push(marker);
}
// 站点详情信息窗体 Start
var infoWindow = new AMap.InfoWindow({
	content: createInfoContent('信息')
});
infoWindow.on('open',showInfoOpen)
infoWindow.on('close',showInfoClose)
function showInfoOpen(){
}
function showInfoClose(){
}
function createInfoContent(siteName,imgUrl){
	var info = [];
	info.push("<div><span class='info_title'>"+siteName+"</span>");
	if(imgUrl !== null){
		info.push("<div class='info_img'><img src='"+imgUrl+"' width=500 height= 500 /></div>");
	}
	info.push("</div>");
	return info.join("<br/>");
}
function markerOnClick(marker){
	var data = marker.target.getExtData();
	if(infoWindow.getIsOpen()){
		infoWindow.close();
	}
	infoWindow.setContent(createInfoContent(data.name, "img/"+data.name+".jpg"));
	infoWindow.open(map, marker.target.getPosition());
}
// 站点详情信息窗体 End

// 站点连线 Start
var lineMarkers = [];
var lineTextMarkers = [];
for(var i=0;i<lineList.length;i++){
	var item = lineList[i];
	var A = new AMap.LngLat(item.startA, item.startB);
	var B = new AMap.LngLat(item.endA, item.endB);
	var path = [A, B];
	var polyline = new AMap.Polyline({
		path: path,            // 设置线覆盖物路径
		// 是否显示箭头方向
		// showDir: true,
		strokeStyle: "dashed",
		// strokeStyle是dashed时有效
		strokeDasharray: [10, 4],
		strokeColor: '#00a6ed',   // 线颜色
		strokeWeight: 6,           // 线宽,
		zIndex: 51
	});
	lineMarkers.push(polyline);
	
	if(item.distance !== ''){
		var polylineText = new AMap.Text({
			text:item.distance,
			zIndex: 49,
			zooms: [8, 20],
			position: A.divideBy(2).add(B.divideBy(2)),
			style:{'background-color':'#29b6f6',
				'border-color':'#e1f5fe',
				'color': '#ffffff',
				'font-size':'12px'}
		});
		lineTextMarkers.push(polylineText);
	}
}
map.add(lineMarkers);
map.add(lineTextMarkers);
// 站点连线 End
