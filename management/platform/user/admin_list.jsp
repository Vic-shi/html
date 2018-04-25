<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>管理员列表</title>
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
<section class="rt_wrap admin_content">
	<div class="select_operating_column">
		<a href="<%=request.getContextPath()%>/management/platform/user/admin_add.jsp" class="add_administrator">添加管理员<img src = "<%=request.getContextPath()%>/commons/image/management/add.png"></a>
	</div>
	<div class="admin_list">
      	<table id="table" class="admin_table">
      	<thead>
      	 	<tr>
        		<th class="admin_account_number_column">管理员账号</th>
        		<th class="admin_phone_column">手机号码</th>
        		<th class="admin_mailbox_column">电子邮箱</th>
        		<th class="admin_create_time_column">注册时间</th>
        		<th class="admin_management_authority_column">管理权限</th>
        		<th class="admin_edit_column">编辑</th>
        		<th class="admin_delect_column">删除</th>
       		</tr>
       	</thead>
       	<tbody></tbody>
      	</table>
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
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/admin_list.js"></script>
</body>
</html>
