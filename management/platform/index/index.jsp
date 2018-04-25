<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>后台管理系统</title>
<meta name="author" content="DeathGhost" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/header.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/index.css">
</head>
<body>
<!--整体的index主页划分为3大模块：header、sidebar和content-->
<!--第一部分：header顶部操作栏部分-->
<jsp:include page="/management/header.jsp"/>
<div class="arrangement">
	<!-- sidebar -->
	<jsp:include page="/management/sidebar.jsp"/>
	<!--第三部分：正文显示区域部分-->
	<section class="rt_wrap arrangement">
		<div class="content">
			<div>
				<div class="pie_chart_title_column">
					<div class="pie_chart_title">
						<span>累计成单量</span>
						<span onclick="previous()"><</span>
						<span class="time"></span>
						<span>年</span>
						<span onclick="next()">></span>
					</div>
					<div id="cumulative_single_amount"></div>
				</div>
				<div class="order_total">
					<span onclick="previous()"><</span>
					<span class="time"></span>
					<span>年</span>
					<span onclick="next()">></span>
					<div>
						<span>3597,4123</span>
						<span>本年订单总额(元)</span>
					</div>
				</div>
			</div>
	 	</div>
	 	<div class="user_product_master">
			<div class="active_user">
				<ul class="arrangement">
					<li>
						<span>日活跃用户</span>
						<div>
							<input type="text" readonly="readonly" value="3256">
							<img src="<%=request.getContextPath()%>/lib/Management_system/images/icon/daily_users.png"/>
						</div>
					</li>
					<li>
						<span>月活跃用户</span>
						<div>
							<input type="text" readonly="readonly" value="53256">
							<img src="<%=request.getContextPath()%>/lib/Management_system/images/icon/month_user.png"/>
						</div>
					</li>
					<li>
						<span>年活跃用户</span>
						<div>
							<input type="text" readonly="readonly" value="1233233">
							<img src="<%=request.getContextPath()%>/lib/Management_system/images/icon/year_users.png"/>
						</div>
					</li>
				</ul>
			</div>
			<div id="products"></div>
			<div id="teacher_increment"></div>
		</div>
	</section>
</div>
<script type="text/javascript" charset="utf-8" src="http://code.jquery.com/jquery-1.10.2.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/echarts.common.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/moment/moment-with-locales.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/moment/moment.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management_index.js"></script>
</body>
</html>
