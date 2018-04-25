<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>老师</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<meta name="renderer" content="webkit">
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/amazeui/css/amazeui.min.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/layui/css/layui.css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/default/style.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/index/index.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/gallery/pullToRefresh.css"/>
<script src="<%=request.getContextPath()%>/lib/amazeui/js/jquery.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/amazeui/js/amazeui.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
</head>
<body>
	<div class="header">
		<i class="am-icon-angle-double-left am-icon-md"></i>
		<input type="button" value="返回" class="btn">
     </div>
	<div id="wrapper" style="height:92.5vh!important">
		<ul data-am-widget="gallery" class="am-gallery am-avg-sm-3 am-avg-md-4 am-avg-lg-5 am-gallery-overlay" data-am-gallery="{ pureview: true }" >
      		<!--通过ajax动态获取数据-->
		</ul>
	</div>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/iscroll.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/pullToRefresh.js"></script>
<script type="text/javascript">
var page=1;
var teacherLevel;
if (typeof(Storage) !== "undefined") {
	teacherLevel=localStorage.getItem("teacherLevel");
	console.log(teacherLevel);
}
//初始加载老师信息的方法
function teaMsg(){
	$.ajax({
		type:'POST',
		url:"<%=request.getContextPath()%>/api/author/listSimple",
		dataType:'json',
		data:{"jsonStr":"{'pageNo':"+page+",'listLen':15,'draw':1,'authorLevel':'"+teacherLevel+"'}"},
		success:function(data){
			var li='',l='';
			for(var i=0;i<data.data.listAuthor.length;i++){
				l="<li>"
				  	+"<div class='am-gallery-item'>"
					+"<a href='#'>"
					+"<img class='pic' src='"+data.data.listAuthor[i].authorPictureMain+"'></img>"
					+"<span class='am-gallery-title'>"+data.data.listAuthor[i].authorName+"</span>"
					+"</a>"
					+"</div>"
					+"</li>";
				li+=l;
			}
			$("#wrapper ul").append(li);
			if(!data.data.isEnd){
				page++;
			}
			else{
				page=1;
			}
		},
		error:function(data){
			console.log('fail');
		}
	});
}
$(function(){
	teaMsg();
	//下拉刷新，下拉加载开始--------------------
	refresher.init({
		id:"wrapper",
		pullDownAction:Refresh,                                                            
		pullUpAction:Load 																			
	});	
	function Refresh() {
		setTimeout(function() {//延迟1秒执行如下方法	
			$("#wrapper ul").empty();
			teaMsg();																 
			wrapper.refresh();
		}, 0);
	}
	function Load() {
		setTimeout(function() {
			
			teaMsg();
			wrapper.refresh();
		}, 0);	
	}
	//下拉刷新，下拉加载结束--------------------
})
//老师简介跳转
$(".am-gallery-title").click(function(){
	var teacher=$(this).html();
	$(location).attr('href', '<%=request.getContextPath()%>/client/index/introduction_to_painters.jsp');
});
//点击返回
$(".btn").click(function(){
	$(location).attr('href', '<%=request.getContextPath()%>/client/index/master.jsp');
});
</script>
</body>
</html>