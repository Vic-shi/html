<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>登录</title>
<meta name="author" content="DeathGhost" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/login.css">
</head>
<body>
	<div class="login">
		<img src="<%=request.getContextPath()%>/commons/image/management/login_background_word.png">
		<form id= "login">
			<div>
				<input name = "adminName" id = "adminName" type="text" class="login_txtbx user">
				<img src="<%=request.getContextPath()%>/commons/image/management/user_icon.png" class="user_icon">
			</div>
			<div>
				<input name = "password" id = "password" type="password" class="login_txtbx pwd" placeholder="请输入密码">
				<img src="<%=request.getContextPath()%>/commons/image/management/password_icon.png" class="password_icon">
			</div>
			<div>
				<span id="error"></span>
			</div>
			<div class="login_bar"> 
				<div>
					<input type="checkbox" id="remember_password">
					<label for="remember_password"></label>
					<span>记住密码</span>
				</div>
				<input type="button" value="登录" class="submit_btn" onclick="sub()">
			</div>
		</form>
	</div>
<script type="text/javascript" charset="utf8" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/management_login.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
<script>
  //验证码
//createCode();
  //validate();
  //测试提交，对接程序删除即可
</script>
</body>
</html>
