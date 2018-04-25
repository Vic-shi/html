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
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/user.css">
</head>
<body>
<!--header-->
<jsp:include page="/management/special_header.jsp"/>
<!-- sidebar -->
<div class="arrangement">
<jsp:include page="/management/sidebar.jsp"/>
<section class="rt_wrap">
		<ul class="user_add_edit">
		<li class="vertical_arrangement">
			<span>用户ID</span>
			<input type="text" id = "userId" class="input_box">
		</li>
		<li class="vertical_arrangement move_down">
			<span>微信号</span>
			<input type="text" id = "wechatId" class="input_box">
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>手机号</span>
				<input type="text" id = "telNumber" class="input_box input">
			</div>
			<div class="vertical_arrangement">
				<span>邮箱</span>
				<input type="text" id = "email" class="input_box input">
			</div>
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>头像地址</span>
				<input type="text" id = "avatarAddress" class="input_box input">
			</div>
			<div class="vertical_arrangement">
				<span>注册时间</span>
				<input type="text" id = "registTime" class="input_box input">
			</div>
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>用户总积分</span>
				<input type="text" id = "userTotalIntegral" class="input_box input">
			</div>
			<div class="vertical_arrangement">
				<span>用户剩余积分</span>
				<input type="text" id = "userResidualIntegral" class="input_box input">
			</div>
		</li>
		<li class="vertical_arrangement move_down">
			<span>昵称</span>
			<input type="text" id = "nickName" class="input_box">
		</li>
		
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>是否订阅</span>
				<form class="layui-form">
					<div class="layui-form-item">
						<div class="layui-inline">
							<div class="layui-input-inline">
								<select class="level" id = "isSubscribe" name="quiz">
									<option value="未选择">选择是否</option>
				         			<option value="0">是</option>
				         			<option value="1">否</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="vertical_arrangement">
				<span>性别</span>
				<form class="layui-form">
					<div class="layui-form-item">
						<div class="layui-inline">
							<div class="layui-input-inline">
								<select class="level" id = "sex" name="quiz">
									<option value="未选择">选择性别</option>
				         			<option value="0">男</option>
				         			<option value="1">女</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>用户所在省份</span>
				<form class="layui-form" id="select_provid">
					<div class="layui-form-item">
						<div class="layui-inline">
							<div class="layui-input-inline">
								<select class="level" id = "provid" name="provid" lay-filter="provid">
									<option value="">选择省份</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="vertical_arrangement">
				<span>用户所在城市</span>
				<form class="layui-form" id="select_cityid">
					<div class="layui-form-item">
						<div class="layui-inline">
							<div class="layui-input-inline">
								<select class="level" id = "cityid" name="cityid" lay-filter="cityid">
									<option value="">选择城市</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>用户关注时间</span>
				<input type="text" id = "subscribeTime" class="input_box input">
			</div>
		</li>
		<li class="vertical_arrangement move_down">
			<img id="img_upload" src="" align = "middle"/>
			<input id="img_name" type="text">
			<label for="user_uploadImages" class="select_img">选择图片</label>
			<form><input type="file" id="user_uploadImages" hidden="hidden"/></form>
			<span class="errorTips uploadImages"></span>
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>备注</span>
				<input type="text" id = "remark" class="input_box input">
			</div>
			<div class="vertical_arrangement">
				<span>用户标签ID</span>
				<input type="text" id = "tagidList" class="input_box input">
			</div>
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>租赁次数</span>
				<input type="text" id = "leasesNumber" class="input_box input">
			</div>
			<div class="vertical_arrangement">
				<span>结单次数</span>
				<input type="text" id = "ordersNumber" class="input_box input">
			</div>
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>逾期次数</span>
				<input type="text" id = "overdueNumber" class="input_box input">
			</div>
			<div class="vertical_arrangement">
				<span>账户余额</span>
				<input type="text" id = "accountBalance" class="input_box input">
			</div>
		</li>
		<li class="move_down">
			<input type="button" onclick = "update()" class="determine_btn" value="确定">
		</li>
	</ul>
</section>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/data.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/province.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.mCustomScrollbar.concat.min.js"></script>
<!-- 封装的ajax.js文件 -->
<script type="text/javascript" charset="utf-8" type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
<!-- 引用spark-md5插件 -->
<script type="text/javascript" charset="utf-8" type="text/javascript" src="<%=request.getContextPath()%>/lib/spark-md5/spark-md5.js"></script>
<!-- 引用plupload插件 -->
<script type="text/javascript" charset="utf-8" type="text/javascript" src="<%=request.getContextPath()%>/lib/plupload-2.1.2/js/plupload.full.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/user_add.js"></script>
</body>
</html>
