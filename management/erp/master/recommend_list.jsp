<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>后台管理系统</title>
<meta name="author" content="DeathGhost"/>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/header.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/lib/layui/css/layui.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/list.css">
</head>
<body>
<!--header-->
<jsp:include page="/management/special_header.jsp"/>
<!-- sidebar -->
<div class="arrangement">
	<jsp:include page="/management/sidebar.jsp"/>
	<!--正文-->
	<section class="rt_wrap">
		<div class="inquiry_column arrangement">
			<input type="text" placeholder="输入作者名" id="authorName" onkeydown="if(event.keyCode==13){findAuthorMsg(1);}">
			<!-- <input type="text" placeholder="输入作者籍贯" class="native_place"> -->
			<form class="layui-form" id="select_authorLevel">
				<div class="layui-form-item">
					<div class="layui-inline">
						<div class="layui-input-inline">
						<select class="level"  id="authorLevel">
							<option value="null">艺术家级别</option>
							<option value="0">国家级</option>
							<option value="1">中书协/中美协</option>
							<option value="2">省级</option>
						</select>
						</div>
					</div>
				</div>
			</form>
			<form class="layui-form" id="select_authorStatus">
				<div class="layui-form-item">
					<div class="layui-inline">
						<div class="layui-input-inline">
						<select class="level"  id="authorStatus">
							<option value="null">艺术家状态</option>
	        				<option value="1">签约中</option>
	        				<option value="0">已解约</option>
						</select>
						</div>
					</div>
				</div>
			</form>
			<input type="button" value="查询" onclick="findAuthorMsg(1)" class="inquire arrange">
		</div>
		<div class="select_operating_column">
			<input type="checkbox" id="choose"/>
			<label for="choose" class="choose_first"></label>
			<span class="select_all">全选艺术家</span>
			<span class="batch_delect"onclick="deleteBatch()">批量删除</span>
			<span class="adjunction"onclick="addAuthor()"><a href="<%=request.getContextPath()%>/management/erp/master/master_detail.jsp">添加</a></span>
		</div>
		<div class="master_list">
	      	<table id="table" class="master_table">
		      	<thead>
		      	 	<tr>
		      	 		<th class="master_select_column">选择</th>
		        		<th class="master_id_column">编号</th>
		        		<th class="master_name_column">姓名</th>
		        		<th class="master_img_column">头像</th>
		        		<th class="master_level_column">级别</th>
		        		<th class="master_status_column">状态</th>
		        		<th class="master_img_column">宣传照</th>
		        		<th class="master_img_column"></th>
		       		</tr>
	     		</thead>
	     		<tbody id="tbody"></tbody>
		    </table>
		    <div id="error"></div>
	      	<div class="page_selection" id="paging"></div>
	 	</div>
	 	<div id="bomb_positioning">
	 		<div class="bomb">
				<div class="bomb_title">
					<span class="prompt">提示</span>
					<img src="<%=request.getContextPath()%>/commons/image/management/close_icon.png" class="close">
				</div>
				<div class="bomb_content">
					<span>确定删除此栏目</span>
				</div>
				<div class="bomb_button">
					<input class="confirm_button" type="button" value="确定">
					<span class="cancel">取消</span>
				</div>
			</div>
	 	</div>
	</section>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<!-- 封装的ajax.js文件 -->
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/recommend_list.js"></script>
</body>
</html>
