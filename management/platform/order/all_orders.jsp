<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>所有订单列表</title>
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
<section class="rt_wrap">
	<div class="inquiry_column arrangement">
		<input  id = "orderMsg" type="text" placeholder="输入订单编号、收件人姓名或电话" class="order_number" onkeydown="if(event.keyCode==13){findOrderMsg(1);}">
		<form class="layui-form" id="select_orderStatus">
			<div class="layui-form-item">
				<div class="layui-inline">
					<div class="layui-input-inline">
					<select class="level" name="quiz" id="orderStatus">
						<option value = "null">选择订单状态</option>
						<option value = "0">未付款</option>
						<option value = "1">未发货</option>
						<option value = "2">已发货</option>
						<option value = "3">租赁中</option>
						<option value = "4">还画中</option>
						<option value = "5">交易完成</option>
						<option value = "6">取消订单</option>
						<option value = "7">已删除</option>
					</select>
					</div>
				</div>
			</div>
		</form>
		<form class="layui-form">
				<div class="layui-inline">
      				<div class="layui-input-inline">
        				<input type="text" name="date" id="date" lay-verify="date" placeholder="请输入日期" autocomplete="off" class="layui-input">
      				</div>
    			</div>
		</form>
		<input  onclick="findOrderMsg(1)" type="button" value="查询" class="inquire arrange">
	</div>
	<div class="orders_list">
      	<table id="table" class="orders_table">
      	<thead>
      	 	<tr>
        		<th class="orders_id_column">订单编号</th>
        		<th class="orders_productName_column">作品名</th>
        		<th class="orders_img_column">作品图片</th>
        		<th class="orders_master_column">作者</th>
        		<th class="orders_user_column">用户</th>
        		<th class="orders_phone_column">联系电话</th>
        		<th class="orders_expireDate_column">地址</th>
        		<!-- <th class="orders_expireDate_column">到期时间</th>
        		<th class="orders_overdue_column">是否逾期</th>
        		<th class="orders_mountingFee_column">装裱费</th>
        		<th class="orders_deposit_column">押金</th> -->
        		<th class="orders_totalAmount_column">总金额</th>
        		<th class="orders_orderStatus_column">订单类型</th>
        		<th class="orders_orderType_column">订单状态</th>
        		<th class="orders_edit_column">编辑</th>
       		</tr>
       	</thead>
       	<tbody id="tbody">
       	</tbody>
      	</table>
      	<div id="error"></div>
      	<div class="page_selection" id="paging">
      	</div>
 	</div>
</section>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.all.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/character_length_to_judge.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/all_orders.js"></script>
</body>
</html>
