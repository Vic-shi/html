<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>未完成订单列表</title>
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
<!--订单详情正文内容-->
<section class="rt_wrap incomplete_orders">
	<div class="inquiry_column arrangement">
		<input id = "orderMsg" type="text" placeholder="输入订单编号、收件人姓名或电话查询" class="order_number" onkeydown="if(event.keyCode==13){findOrderMsg(1);}">
		<form class="layui-form">
			<div class="layui-form-item">
				<div class="layui-inline">
					<div class="layui-input-inline">
					<select class="level" name="quiz" id="orderStatus">
						<option value = "1">未发货</option>
						<option value = "4">还画中</option>
						<!-- <option value = "6">调换待确认</option>
						<option value = "7">未调整</option> -->
					</select>
					</div>
				</div>
			</div>
		</form>
		<form class="layui-form">	
			<div class="layui-form-item">
				<div class="layui-inline">
				    <div class="layui-input-inline">
				        <input type="text" class="layui-input" id="date" placeholder="请选择订单创建日期">
				    </div>
				</div>
			</div>
		</form>
		<input onclick="findOrderMsg(1)" type="button" value="查询" class="inquire arrange">
	</div>
	<div class="orders_list">
      	<table id="table" class="orders_table">
      	<thead>
      	 	<tr>
        		<th class="incomplete_orders_id_column">订单编号</th>
        		<th class="incomplete_orders_productName_column">作品名称</th>
        		<th class="incomplete_orders_img_column">作品图片</th>
        		<th class="incomplete_orders_master_column">作者</th>
        		<th class="incomplete_orders_user_column">用户</th>
        		<th class="incomplete_orders_phone_column">联系电话</th>
        		<th class="incomplete_order_recipientAddress_column">收件人地址</th>
        		<th class="incomplete_orders_totalAmount_column">总金额</th>
        		<th class="incomplete_orders_orderType_column">订单类型</th>
        		<th class="incomplete_orders_orderStatus_column">订单状态</th>
        		<th class="incomplete_orders_edit_column">编辑</th>
       		</tr>
       	</thead>
       	<tbody id="tbody"></tbody>
      	</table>
      	<div id="error"></div>
      	<div class="page_selection" id="paging"></div>
 	</div>
	</section>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/character_length_to_judge.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/incomplete_order.js"></script>
</body>
</html>