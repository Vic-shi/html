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
<header class="my-header">
	<div class="search" >
		<form>
			<img src="<%=request.getContextPath()%>/commons/image/client/index/search.png" class="img">
			<input type="text" value="请输入关键词" class="search-input-box">
		</form>
    </div>
</header>
<div class="level_all" hidden="hidden">
   	<input type="button" value="省级" class="level"/>
   	<input type="button" value="中美协/中书协" class="level"/>
   	<input type="button" value="国家级" class="level"/>
</div>
<div id="wrapper" style="height:91.5vh!important">
	<ul data-am-widget="gallery" class="am-gallery am-avg-sm-3 am-avg-md-4 am-avg-lg-5 am-gallery-overlay"data-am-gallery="{ pureview: true }"  >
     		<!--通过ajax动态获取数据-->
	</ul>
</div>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/iscroll.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/pullToRefresh.js"></script>
<script type="text/javascript">
var page=1,teacherId,isEnd;
//初始加载老师信息的方法
function teaMsg(){
	$.ajax({
		type:'POST',
		url:"<%=request.getContextPath()%>/api/author/listSimple",
		dataType:'json',
		data:{"jsonStr":"{'pageNo':"+page+",'listLen':15,'draw':1,}"},
		success:function(data){
			var li='',l='';
			for(var i=0;i<data.data.listAuthor.length;i++){
				l="<li value='"+data.data.listAuthor[i].authorId+"'>"
				  	+"<div class='am-gallery-item'>"
					/* +"<a href='#'>" */
					+"<img class='pic' src='"+data.data.listAuthor[i].authorPictureMain+"'>"
					+"<span class='am-gallery-title' onclick='turnto(this)'>"+data.data.listAuthor[i].authorName+"</span>"
					/* +"</a>" */
					+"</div>"
					+"</li>";
				li+=l;
			}
			$("#wrapper ul").append(li);
			if(!data.data.isEnd){
				page++;
			}
			else{
				isEnd=true;
			}
		},
		error:function(data){
			console.log('fail');
		}
	});
}
$(function(){
	//初始化加载老师数据开始---------------------
	teaMsg();
	//初始化加载老师数据结束---------------------
	//下拉刷新，下拉加载开始--------------------
	refresher.init({
		id:"wrapper",
		pullDownAction:Refresh,                                                            
		pullUpAction:Load 																			
	});	
	function Refresh() {
		setTimeout(function() {//延迟1秒执行如下方法	
			$("#wrapper ul").empty();
			page=1;
			teaMsg();																 
			wrapper.refresh();
		}, 0);
	}
	function Load() {
		setTimeout(function() {
			if(isEnd){
				return;
			}
			teaMsg();
			wrapper.refresh();
		}, 0);	
	}
	//下拉刷新，下拉加载结束--------------------
	//点击根据级别跳转开始--------------------
	$(".level").click(function(){
		if (typeof(Storage) !== "undefined") {
			if($(this).val()){
				
			}
		    localStorage.setItem("teacherLevel",$(this).val());
		}
		$(location).attr('href', '<%=request.getContextPath()%>/client/index/teacher_level.jsp');
	});
	//点击根据级别跳转结束--------------------
	//input动画设计开始------------------
	$(".search-input-box").focus(function(){
		if($(".search-input-box").val()=="请输入关键词"){
			$(".search-input-box").val("");
		}
	});
	$(".search-input-box").blur(function(){
		if($(".search-input-box").val()==""){
			$(".search-input-box").val("请输入关键词");
		}
	});
	$(".search-input-box").click(function(){
		$(".level_all").slideToggle();
	});
	//input动画设计结束------------------
	//搜索框触发submit事件开始---------------
	$("form").on("submit",function(){
		
	});
	//搜索框触发submit事件结束---------------
})
//老师简介跳转开始--------------------
function turnto(data){
	if (typeof(Storage) !== "undefined") {
	    localStorage.setItem("teacherId",$(data).parent().parent().attr("value"));
	};
	$(location).attr('href','<%=request.getContextPath()%>/client/index/introduction_to_painters.jsp');
}
//老师简介跳转结束--------------------
</script>
</body>
</html>