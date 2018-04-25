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
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/user_show.css">
<style type="text/css">
	.product_edit{
		width:651px;
		margin: 53px auto;
	}
	.product_edit span{
		font-size:20px;
		color:333;
	}
</style>
</head>
<body>
<!--header-->
<jsp:include page="/management/special_header.jsp"/>
<!-- sidebar -->
<div class="arrangement">
	<jsp:include page="/management/sidebar.jsp"/>
	<section class="rt_wrap">
		<a onclick = "edit()">
			<img class="edit_icon" src='<%=request.getContextPath()%>/commons/image/management/edit_icon.png'>
		</a>
		<ul class="product_edit">
		<li class="vertical_arrangement">
			<span>用户ID</span>
			<input type="text" id = "userId" disabled="disabled" class="input_box">
		</li>
		<li class="vertical_arrangement move_down">
			<span>微信号</span>
			<input type="text" id = "wechatId" disabled="disabled" class="input_box">
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>手机号</span>
				<input type="text" id = "telNumber" disabled="disabled" class="input_box input">
			</div>
			<div class="vertical_arrangement">
				<span>邮箱</span>
				<input type="text" id = "email" disabled="disabled" class="input_box input">
			</div>
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>头像地址</span>
				<input type="text" id = "avatarAddress" disabled="disabled" class="input_box input">
			</div>
			<div class="vertical_arrangement">
				<span>注册时间</span>
				<input type="text" id = "registTime" disabled="disabled" class="input_box input">
			</div>
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>用户总积分</span>
				<input type="text" id = "userTotalIntegral" disabled="disabled" class="input_box input">
			</div>
			<div class="vertical_arrangement">
				<span>用户剩余积分</span>
				<input type="text" id = "userResidualIntegral" disabled="disabled" class="input_box input">
			</div>
		</li>
		
		<li class="vertical_arrangement move_down">
			<span>昵称</span>
			<input type="text" id = "nickName" disabled="disabled" class="input_box">
		</li>
		
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>是否订阅</span>
				<form class="layui-form">
					<div class="layui-form-item">
						<div class="layui-inline">
							<div class="layui-input-inline">
								<select class="level" id = "isSubscribe" disabled="disabled" name="quiz">
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
								<select class="level" id = "sex" disabled="disabled" name="quiz">
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
								<select class="level" id = "provid" name="provid" disabled="disabled" lay-filter="provid">
									<option value="">选择省份</option>
								</select>
							</div>
						</div>
					</div>
				</form>
			</div>
			<div class="vertical_arrangement">
				<span>用户所在城市</span>
				<form class="layui-form">
					<div class="layui-form-item">
						<div class="layui-inline">
							<div class="layui-input-inline">
								<select class="level" id = "cityid" name="cityid" disabled="disabled" lay-filter="cityid">
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
				<input type="text" id = "subscribeTime" disabled="disabled" class="input_box input">
			</div>
		</li>
		<li class="vertical_arrangement move_down">
			<div class="user_show_img">
				<img id="img_upload" src="" align = "middle"/>
			</div>
			<input id="img_name" disabled="disabled" type="text">
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>备注</span>
				<input type="text" id = "remark" disabled="disabled" class="input_box input">
			</div>
			<div class="vertical_arrangement">
				<span>用户标签ID</span>
				<input type="text" id = "tagidList" disabled="disabled" class="input_box input">
			</div>
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>租赁次数</span>
				<input type="text" id = "leasesNumber" disabled="disabled" class="input_box input">
			</div>
			<div class="vertical_arrangement">
				<span>结单次数</span>
				<input type="text" id = "ordersNumber" disabled="disabled" class="input_box input">
			</div>
		</li>
		<li class="lateral_alignment move_down">
			<div class="vertical_arrangement">
				<span>逾期次数</span>
				<input type="text" id = "overdueNumber" disabled="disabled" class="input_box input">
			</div>
			<div class="vertical_arrangement">
				<span>账户余额</span>
				<input type="text" id = "accountBalance" disabled="disabled" class="input_box input">
			</div>
		</li>
	</ul>
</section>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<!-- 引用百度editor -->
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/ueditor/1.4.3/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/ueditor/1.4.3/ueditor.all.min.js"> </script>
<!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
<!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/ueditor/1.4.3/lang/zh-cn/zh-cn.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/data.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/province.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/user_show.js"></script>
</body>
</html>
