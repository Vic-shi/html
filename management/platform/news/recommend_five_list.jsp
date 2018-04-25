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
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/list.css">
</head>
<body>
<!--header-->
<jsp:include page="/management/header.jsp"/>
<div class="arrangement">
	<jsp:include page="/management/sidebar.jsp"/>
	<!--正文-->
	<section class="rt_wrap">
		<div class="advertisement_list">
      		<table id="table" class="advertisement_table">
      			<thead>
      	 			<tr>
		        		<th class="advertisement_id_column">推荐ID</th>
		        		<th class="advertisement_type_column">推荐类型</th>
		        		<th class="advertisement_title_column">推荐标题</th>
		        		<th class="advertisement_img_column">缩略图</th>
		        		<th class="advertisement_edit_column">替换</th>
		       		</tr>
       			</thead>
       			<tbody id="tbody"></tbody>
      		</table>
 		</div>
	</section>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/recommend_five_list.js"></script>
</body>
</html>
