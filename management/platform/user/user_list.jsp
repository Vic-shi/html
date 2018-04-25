<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>用户列表</title>
<meta name="author" content="DeathGhost" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/header.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/lib/layui/css/layui.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/list.css">
</head>
<body>
<!--header-->
<jsp:include page="/management/header.jsp"/>
<!-- sidebar -->
<div class="arrangement">
<jsp:include page="/management/sidebar.jsp"/>
<!--正文内容-->
<section class="rt_wrap">
	<div class="inquiry_column arrangement move_to">
		<!-- onkeydown="if(event.keyCode==13){findOrderMsg(1);}" -->
		<input id = "orderMsg" type="text" placeholder="搜索用户id 手机 昵称" class="order_number" >
		<input type="button" value="查询" class="inquire arrange">
	</div>
	<div class="user_list">
      	<table id="table" class="user_table">
      	<thead>
      	 	<tr>
        		<th class="user_name_column">昵称</th>
        		<th class="user_create_time_column">创建时间</th>
        		<th class="user_id_column">用户ID</th>
        		<th class="user_phone_column">联系电话</th>
        		<th class="user_edit_column">查看</th>
       		</tr>
       	</thead>
       	<tbody id="tbody">
       	</tbody>
      	</table>
      	<div class="page_selection" id="paging"></div>
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
 	</div>
</section>
</div>
<script src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<!-- 头文件与侧边栏的js文件 -->
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<!-- 用户文件的js -->
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/user_list.js"></script>
</body>
</html>
