<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>老师简介</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<meta name="renderer" content="webkit">
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/amazeui/css/amazeui.min.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/layui/css/layui.css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/default/style.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/index/index.css"/>
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
	<div style="margin:6.4vw 6.3vw 0 5.7vw;">
		<h1 style="font-size:0.45rem;" id="teacherName">
		<!--动态获取数据-->
		</h1>
	</div>
	<div style="margin:6.7vw 6.3vw 2.7vw 6.5vw;line-height:2;">
		<span style="font-size:0.24rem;color:#333;" id="detail">
			<!--动态获取数据-->
		</span>
	</div>
<script type="text/javascript">
var teacherId;
if (typeof(Storage) !== "undefined") {
	teacherId=localStorage.getItem("teacherId");
	console.log(teacherId);
}
//点击返回老师列表
$(function(){
	$.ajax({
		type:'POST',
		url:"<%=request.getContextPath()%>/api/author/listDetail",
		dataType:'json',
		data:{"jsonStr":"{'pageNo':1,'listLen':15,'draw':1,'authorId':"+teacherId+"}"},
		success:function(data){
			$("#teacherName").text("画家简介—"+data.data[0].authorName);
			$("#detail").append(data.data[0].authorProfile);
		},
		error:function(data){
			console.log('fail');
		}
	});
	$(".btn").click(function(){
		window.history.go(-1);
	});
});
</script>
</body>
</html>