<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>后台管理系统</title>
<meta name="author" content="DeathGhost" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/header.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/add_and_edit.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/all_detail_hh.css">
</head>
<body>
<!--header-->
<jsp:include page="/management/special_header.jsp"/>
<!-- sidebar -->
<div class="arrangement">
	<jsp:include page="/management/sidebar.jsp"/>
		<form class="layui-form">
			<section class="rt_wrap">
				<ul class="all_order_edit">
					<li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>订单编号</span>
						<input type="text" class="input_box input input_color" disabled="disabled" id="orderId">
					</div>
					<div class="vertical_arrangement">
						<span>订单状态</span>
						<input type="text" class="input_box input input_color" disabled="disabled" id="orderStatus">
					</div>
					<div class="vertical_arrangement">
						<span>作品名称</span>
						<input type="text" class="input_box input input_color" disabled="disabled" id="productName">
					</div>
					<div class="vertical_arrangement">
						<span>作者名称</span>
						<input type="text" class="input_box input input_color" disabled="disabled" id="productAuthor">
					</div>
					<div class="vertical_arrangement">
						<span>用户名称</span>
						<input type="text" class="input_box input input_color" disabled="disabled" id="userName1">
					</div>
				</li>
				<li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>订单类型</span>
						<input type="text" class="input_box input input_color" disabled="disabled" id="orderType">
					</div>
					<div class="vertical_arrangement">
						<span>生成时间</span>
						<input type="text" class="input_box input input_color" disabled="disabled" id="orderCreateTime">
					</div>
					<div class="vertical_arrangement">
						<span>作品编号</span>
						<input type="text" class="input_box input input_color" disabled="disabled" id="productId">
					</div>
					<div class="vertical_arrangement">
						<span>作者编号</span>
						<input type="text" class="input_box input input_color" disabled="disabled" id="productAuthorId">
					</div>
					<div class="vertical_arrangement">
						<span>用户编号</span>
						<input type="text" class="input_box input input_color" disabled="disabled" id="userId">
					</div>
				</li>
				<li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>装裱费：单位（元）</span>
						<input type="text" class="input_box input_color" disabled="disabled" id="productMountedValue">
					</div>
					<div class="vertical_arrangement">
						<span>保证金：单位（元）</span>
						<input type="text" class="input_box input_color" disabled="disabled" id="productDeposit">
					</div>
					<div class="vertical_arrangement">
						<span>日租金：单位（元）</span>
						<input type="text" class="input_box input_color" disabled="disabled" id="rent">
					</div>
				</li>
				<li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>租借时间(月)</span>
						<input type="text" class="input_box input_color" disabled="disabled" id="term">
					</div>
					<div class="vertical_arrangement">
						<span>总金额：单位（元）</span>
						<input type="text" class="input_box input_color" disabled="disabled" id="originalPrice">
					</div>
					<div class="vertical_arrangement">
						<span>实际付款：单位（元）</span>
						<input type="text" class="input_box input_color" disabled="disabled" id="actualPayment">
					</div>
				</li>
				<li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>作品主图</span>
						<img id="productPicture" src=""/>
					</div>
					<div class="vertical_arrangement">
						<span>收件人姓名</span>
						<input type="text" class="input_box input_color" disabled="disabled" id = "userName">
						<span class="move_span">收件人电话</span>
						<input type="text" class="input_box input_color" disabled="disabled" id="userMobile">
					</div>
					<div class="vertical_arrangement">
						<span>收件人地址</span>
						<textarea class="textarea_text input_color" disabled="disabled" id = "userAddress"></textarea>
						<span class="userAddress_error"></span>
					</div>
				</li>
				<!-- <li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>运单编号</span>
						<input type="text" class="input_box input"  id="waybillNo">
					</div>
				</li> -->
				<!-- 只为未发货时展示 -->
				<div class="display">
					<li class="lateral_alignment move_down">
						<div class="vertical_arrangement">
							<span>发货快递公司</span>
							<input type="text" class="input_box disabled" placeholder="请输入快递公司" id="carrierCompany">
						</div>
					</li>
					<li class="lateral_alignment move_down">
						<div class="vertical_arrangement">
							<span>快递单号</span>
							<input type="text" class="input_box disabled" placeholder="请输入快递单号" id="waybillNo">
						</div>
					</li>
					<li>
						<input onclick="sendOrder()" class="productUpload " id="send" type="button" value="确认发货">
					</li>
				</div>
				</ul>
		</section>
	</form>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/all_orders_edit.js"></script>
</body>
</html>
