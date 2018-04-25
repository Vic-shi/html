<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>后台管理系统</title>
<meta name="author" content="DeathGhost" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/header.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/admin_update.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/lib/layui/css/layui.css">
</head>
<body>
<!--header-->
<jsp:include page="/management/special_header.jsp"/>
<!-- sidebar -->
<div class="arrangement">
<jsp:include page="/management/sidebar.jsp"/>
<!--正文-->
	<div class="admin_update">
      	<table id="table" class="table">
	      	<thead>
	      	 	<tr class="adminName_column">
	      	 		<th>
	      	 			<font>管理员账号&nbsp :</font>
	      	 			<input type="text" id = "adminName" class = "underline2" readonly="readonly" value = "">
	      	 		</th>
	      	 	</tr>
	      	 	<tr class="phoneNumber_column">
	      	 		<th>
	      	 			<font>手机号码&nbsp :</font>
	      	 			<input type="text" id = "telNumber" class = "underline" value = "">
	      	 		</th>
	      	 	</tr>
	      	 	<tr class="email_column">
	      	 		<th>
	      	 			<font>邮箱&nbsp :</font>
	      	 			<input type="text" id = "email" class = "underline" value = "">
	      	 		</th>
	       		</tr>
	       		<tr>
	       			<th>
	       				<span id="error"></span>
	       			</th>
	       		</tr>
	       		<tr class="save_column">
	       			<th>
	       				<input type="button" onclick = "save()" value="保存/更新">
	       			</th>
	       		</tr>
	       	</thead>
      	</table>
 	</div>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/admin_update.js"></script>
</body>
</html>
