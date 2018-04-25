<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>后台管理系统</title>
<meta name="author" content="DeathGhost" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/header.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/lib/layui/css/layui.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/list.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/product_add.css">
</head>
<body>
<!--header-->
<jsp:include page="/management/special_header.jsp"/>
<!-- sidebar -->
<div class="arrangement">
<jsp:include page="/management/sidebar.jsp"/>

<section class="rt_wrap">
	<div class="inquiry_column arrangement">
		<input id="authorName" type="text" placeholder="输入作者名">
		<input type="text" placeholder="输入作者籍贯" class="author_native_place">
		<form class="layui-form" id="select_authorLevel">
			<div class="layui-form-item">
				<div class="layui-inline">
					<div class="layui-input-inline">
					<select class="level" id = "authorLevel">
						<option value="null">选择级别</option>
						<option value="0">国家级</option>
						<option value="1">中书协/中美协</option>
						<option value="2">省级</option>
					</select>
					</div>
					<div class="layui-input-inline">
					<select class="level" id = "authorStatus">
						<option value="null">选择状态</option>
						<option value="0">未签约</option>
						<option value="1">已签约</option>
					</select>
					</div>
				</div>
			</div>
		</form>
		<input onclick="findAuthorMsg(1)" type="button" value="查询" class="inquire arrange">
	</div>
	<div class="product_list">
      	<table id="table" class="product_table">
      	<thead>
      	 	<tr>
        		<th class="product_add_author_column" style="">作者</th>
        		<th class="product_add_author_img_column">作者主图</th>
        		<th class="product_add_author_level_column">级别</th>
        		<th class="product_add_column">添加作品</th>
       		</tr>
       	</thead>
       	<tbody id="tbody"></tbody>
      	</table>
      	<div id="error"></div>
      	<div class="page_selection" id="paging"></div>
 	</div>
</section>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/character_length_to_judge.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/product_add.js"></script>
</body>
</html>
