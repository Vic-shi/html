function jump(param){
	sessionStorage.setItem("freshActivityInfoId",param);
	window.location.href="/web/management/platform/news/recommend_five_edit.jsp";
}
$(function(){
	findFreshActivityInfoPage();
});
//显示广告内容
function findFreshActivityInfoPage(){
	document.getElementById("tbody").innerHTML="";
	var url = "/web/api/information/findFreshActivityInfo";
	var param={
			url: url,
			successCallback : function(data) {
				console.log(data);
				var pageContent = data.data;
				var tbody = $('#tbody');
				$.each(pageContent, function (index, item) {
					outPutFreshActivityInfoContent(tbody, item, index);
				});
			},
			errorCallBack : function(data) {
				console.log(data.message);
			}
	}
	getDataFromServer(param);
}
//输出广告内容
function outPutFreshActivityInfoContent(tbody, item, index) {
	index++;
	if(item == null) {
		var str = "<tr>"
			+"<td class='center forced_wrap'id='carousel"+index+"'>"+index+"</td>"
			+"<td class='center'></td>"
			+"<td class='center'></td>"
			+"<td class='center'><img class='tr_height' src=''></td>"
			+"<td class='center'><img src='/web/commons/image/management/replace_icon.png' class='replace_icon' onclick='jump("+index+")'></td>"
			+"</tr>";
	} else {
		var str = "<tr>"
			+"<td class='center forced_wrap'id='carousel"+index+"'>"+index+"</td>"
			+"<td class='center'>"+item.sign+"</td>"
			+"<td class='center'>"+item.title+"</td>"
			+"<td class='center'><img class='tr_height' src='"+item.imageAddress+"'></td>"
			+"<td class='center'><img src='/web/commons/image/management/replace_icon.png' class='replace_icon' onclick='jump("+index+")'></td>"
			+"</tr>";
	}
	tbody.append(str);
}
$(function(){
	//全选/取消全选
	$("#select").click(function(){
		if($(this).children().children().children().hasClass("layui-form-checked")){
			$(".layui-unselect").removeClass("layui-form-checked");
		}else{
			$(".layui-unselect").addClass("layui-form-checked");
		}
	});
});