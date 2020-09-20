var dataList = [{name:"寅阳",type:"1",left:1068, top:817},
{name:"佘山",type:"1",left:1130, top:888},
{name:"横沙",type:"1",left:1056, top:908},
{name:"吴淞",type:"1",left:991, top:903},
{name:"鸡骨礁",type:"1",left:1148, top:943},
{name:"芦潮港",type:"1",left:1067, top:1033},
{name:"大戢山",type:"1",left:1138, top:1024},
{name:"花鸟山",type:"1",left:1239, top:1030},
{name:"小洋山",type:"1",left:1115, top:1090},
{name:"下三星",type:"1",left:1200, top:1132},
{name:"岱山",type:"1",left:1141, top:1178},
{name:"嘉兴",type:"1",left:891, top:1102},
{name:"洛迦山",type:"1",left:1186, top:1243},
{name:"六横",type:"1",left:1118, top:1292},
{name:"大丰",type:"2",left:844, top:458},
{name:"如东",type:"2",left:937, top:668},
{name:"泗礁",type:"2",left:1192, top:1067},
{name:"定海",type:"2",left:1133, top:1241},
{name:"镇海",type:"2",left:1041, top:1256},
{name:"象山",type:"2",left:1082, top:1427},
{name:"北渔山",type:"2",left:1121, top:1497},
{name:"台州",type:"2",left:978, top:1553},
{name:"石塘",type:"2",left:1012, top:1648},
{name:"灵昆",type:"2",left:872, top:1720},
{name:"北麂岛",type:"2",left:930, top:1799},
{name:"苍南",type:"2",left:819, top:1834},
{name:"连云港",type:"0",left:547, top:80},
{name:"福鼎",type:"0",left:730, top:1863},
{name:"南镇",type:"0",left:773, top:1907},
{name:"三沙",type:"0",left:726, top:1960},
{name:"湾坞",type:"0",left:625, top:1996},
{name:"西洋岛",type:"0",left:693, top:2057},
{name:"马尾",type:"0",left:573, top:2167},
{name:"平潭",type:"0",left:632, top:2284},
{name:"湄洲湾",type:"0",left:471, top:2372},
{name:"泉州",type:"0",left:406, top:2429},
{name:"厦门",type:"0",left:291, top:2512},
{name:"镇海角",type:"0",left:296, top:2563},
{name:"古雷头",type:"0",left:187, top:2685},
];
var container = $('#container');
// $('#container').click(function(e){
// 	$('#img-review').fadeOut("slow");
// });

// 添加站点
for(var i=0;i<dataList.length;i++){
	var item = dataList[i];
	var offset = {top: item.top, left: item.left};
	var html = document.createElement("div");
	$(html).addClass('site-icon');
	$(html).offset(offset);
	$(html).attr("data-index", i);
	$(container).append(html);
}
$('#img-review-close').click(function(e){
	$('#img-review').fadeOut("slow");
});
$('.site-icon').click(function(e){
	var item = dataList[$(e.currentTarget).attr('data-index')];
	if('0' !== item.type){
		var imgSrc = "img/" + item.name + ".jpg";
		var offset = {top: item.top, left: item.left};
		$('#img-review-title').text(item.name);
		$('#img-review-img').attr('src', imgSrc);
		$('#img-review').fadeIn("slow").offset(offset);
	}
});
	