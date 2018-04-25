<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>后台管理系统</title>
<meta name="author" content="DeathGhost" />
</head>
<body>
<!--header-->
<header class="header">
	<div>
		<a href="<%=request.getContextPath()%>/management/platform/index/index.jsp">
			<img src="<%=request.getContextPath()%>/lib/Management_system/images/icon/aa.jpg" class="loge_icon">
		</a>
	</div>
	<div class="header_content">
		<div class="index_title">
			<input id="title" readonly="readonly" value="">
		</div>
		<div class="admin" >
			<div id="a">
				<img src="<%=request.getContextPath()%>/lib/Management_system/images/icon/admin_icon.png" class="admin_icon">
				<div id="personal_center">
					<ul class="rt">
						<li>
							<img src="<%=request.getContextPath()%>/lib/Management_system/images/icon/admin_information.png"/>
							<span class="admin_icon">个人信息</span>
						</li>
						<li>
							<img src="<%=request.getContextPath()%>/lib/Management_system/images/icon/set_icon.png"/>
							<span class="set">设置</span>
						</li>
						<li onclick = "loginOut()">
							<img src="<%=request.getContextPath()%>/lib/Management_system/images/icon/quit_icon.png"/>
							<span class="quit">安全退出</span>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<div class="admin_name">
			<span>李娜</span>
		</div>
	</div>
</header>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
</body>
</html>