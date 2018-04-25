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
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/add_and_edit.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/setup.css">
</head>
<body>
<!--header-->
<jsp:include page="/management/special_header.jsp"/>
<!-- sidebar -->
<div class="arrangement">
<jsp:include page="/management/sidebar.jsp"/>
<section class="rt_wrap">
		<ul class="setup_edit">
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>推广信息</span>
				<form class="layui-form" id="select_advertisement_level">
					<div class="layui-form-item">
						<div class="layui-inline">
							<div class="layui-input-inline">
								<select class="level" name="quiz">
									<option value="未选择">请选择权限</option>
				         			<option value="0">读</option>
				         			<option value="1">写</option>
				         			<option value="2">读写</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="vertical_arrangement">
				<span>资讯信息</span>
				<form class="layui-form" id="select_information_level">
					<div class="layui-form-item">
						<div class="layui-inline">
							<div class="layui-input-inline">
								<select class="level" name="quiz">
									<option value="未选择">请选择权限</option>
				         			<option value="0">读</option>
				         			<option value="1">写</option>
				         			<option value="2">读写</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>活动信息</span>
				<form class="layui-form" id="select_activity_level">
					<div class="layui-form-item">
						<div class="layui-inline">
							<div class="layui-input-inline">
								<select class="level" name="quiz">
									<option value="未选择">请选择权限</option>
				         			<option value="0">读</option>
				         			<option value="1">写</option>
				         			<option value="2">读写</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="vertical_arrangement">
				<span>作品信息</span>
				<form class="layui-form" id="select_product_level">
					<div class="layui-form-item">
						<div class="layui-inline">
							<div class="layui-input-inline">
								<select class="level" name="quiz">
									<option value="未选择">请选择权限</option>
				         			<option value="0">读</option>
				         			<option value="1">写</option>
				         			<option value="2">读写</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>老师信息</span>
				<form class="layui-form" id="select_master_level">
					<div class="layui-form-item">
						<div class="layui-inline">
							<div class="layui-input-inline">
								<select class="level" name="quiz">
									<option value="未选择">请选择权限</option>
				         			<option value="0">读</option>
				         			<option value="1">写</option>
				         			<option value="2">读写</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="vertical_arrangement">
				<span>订单信息</span>
				<form class="layui-form" id="select_order_level">
					<div class="layui-form-item">
						<div class="layui-inline">
							<div class="layui-input-inline">
								<select class="level" name="quiz">
									<option value="未选择">请选择权限</option>
				         			<option value="0">读</option>
				         			<option value="1">写</option>
				         			<option value="2">读写</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>用户信息</span>
				<form class="layui-form">
					<div class="layui-form-item">
						<div class="layui-inline">
							<div class="layui-input-inline">
								<select class="level" name="quiz">
									<option value="未选择">请选择权限</option>
				         			<option value="0">读</option>
				         			<option value="1">写</option>
				         			<option value="2">读写</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="vertical_arrangement">
				<span>用户</span>
				<form class="layui-form">
					<div class="layui-form-item">
						<div class="layui-inline">
							<div class="layui-input-inline">
								<select class="level" name="quiz">
									<option value="未选择">请选择权限</option>
				         			<option value="0">读</option>
				         			<option value="1">写</option>
				         			<option value="2">读写</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
		</li>
		<li class="mave_down">
			<input type="button" value="确定" class="determine_btn">
		</li>
	</ul>
</section>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/setup.js"></script>
<!-- 引用核心层插件 -->
<script src="<%=request.getContextPath()%>/lib/core/zyFile.js"></script>
<!-- 引用控制层插件 -->
<script src="<%=request.getContextPath()%>/lib/control/js/zyUpload.js"></script>
<!-- 引用初始化JS -->
<script src="<%=request.getContextPath()%>/lib/core/jq22.js"></script>
</body>
</html>
