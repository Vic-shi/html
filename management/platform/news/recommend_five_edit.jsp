<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"> 
<title>后台管理系统</title>
<meta name="author" content="DeathGhost" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/header.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/lib/layui/css/layui.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/list.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/advertisement.css">
</head>
<body>
<!--header-->
<jsp:include page="/management/special_header.jsp"/>
<div class="arrangement">
	<jsp:include page="/management/sidebar.jsp"/>
	<!--正文-->
	<section class="rt_wrap">
		<div id="inquiry_column">
			<form class="layui-form permutation" id="move_left">
				<input type="text" placeholder="请输入关键字" class="erp_news_Keywords" onkeydown="if(event.keyCode==13){findCarousel();}">
				<div class="layui-form-item">
					<div class="layui-inline">
						<div class="layui-input-inline">
						<select class="level" name="quiz" id="sign">
							<option value = "information">资讯</option>
							<option value = "activity">活动</option>
						</select>
						</div>
					</div>
				</div>
			</form>
			<input class="inquiry" onclick="findFreshActivityInfo()" type="button" value="查询">
		</div>
		<div class="advertisement_list move_down">
      		<table id="table" class="table">
		      	<thead id="thead">
		      	 	<tr>
		        		<th class="advertisement_serial_number">编号</th>
		        		<th class="advertisement_title">标题</th>
		        		<th class="advertisement_img">轮播主图</th>
		        		<th class="advertisement_img">创建时间</th>
		        		<th class="advertisement_btn"></th>
		       		</tr>
		       	</thead>
		       	<tbody id="tbody"></tbody>
      		</table>
      		<div id="error"></div>
      		<div id="page_selection" class="page_selection"></div>
 		</div>
	</section>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/spark-md5/spark-md5.js"></script>
<!-- 引用plupload插件，上传文件 -->
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/plupload-2.1.2/js/plupload.full.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/recommend_five_edit.js"></script>
</body>
</html>
