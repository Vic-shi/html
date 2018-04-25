function jump(param){
	if(param==1){
		var carouselId = $("#carousel1").html();
		sessionStorage.setItem("carouselId",carouselId);
	}else if(param==2){
		var carouselId = $("#carousel2").html();
		sessionStorage.setItem("carouselId",carouselId);
	}else if(param==3){
		var carouselId = $("#carousel3").html();
		sessionStorage.setItem("carouselId",carouselId);
	}else if(param==4){
		var carouselId = $("#carousel4").html();
		sessionStorage.setItem("carouselId",carouselId);
	}
	window.location.href="/web/management/platform/news/advertisement_edit.jsp";
}
$(function(){
	findCarouselPage();
});
//显示广告内容
function findCarouselPage(){
	document.getElementById("tbody").innerHTML="";
	var url = "/web/api/information/loadAllCarousel";
	var param={
			url: url,
			successCallback : function(data) {
				var pageContent = data.data;
				var tbody = $('#tbody');
				$.each(pageContent, function (index, item) {
					console.log(item);
					outPutCarouselContent(tbody, item);
				});
			},
			errorCallBack : function(data) {
				console.log(data.msg);
			}
	}
	getDataFromServer(param);
}
//输出广告内容
function outPutCarouselContent(tbody, item) {
	console.log(item.carouselId);
	var str = "<tr>"
			+"<td class='center forced_wrap'id='carousel"+item.carouselId+"'>"+item.carouselId+"</td>"
			+"<td class='center'>"+item.carouselType+"</td>"
			+"<td class='center'><img class='tr_height' src='"+item.imageAddress+"'></td>"
			+"<td class='center'>"+item.title+"</td>"
			+"<td class='center'><img class='tr_height' src='"+item.posterAddress+"'></td>"
			+"<td class='center'><img src='/web/commons/image/management/replace_icon.png' class='replace_icon' onclick='jump("+item.carouselId+")'></td>"
		+"</tr>";
	tbody.append(str);
}
$(function(){
	//全选/取消全选
	$("#select").click(function(){
		console.log(1);
		if($(this).children().children().children().hasClass("layui-form-checked")){
			console.log(2);
			$(".layui-unselect").removeClass("layui-form-checked");
		}else{
			console.log(3);
			$(".layui-unselect").addClass("layui-form-checked");
		}
	});
});