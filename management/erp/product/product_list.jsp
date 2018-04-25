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
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/list.css">

</head>
<body>
<!--header-->
<jsp:include page="/management/header.jsp"/>
<!-- sidebar -->
<div class="arrangement">
<jsp:include page="/management/sidebar.jsp"/>

<section class="rt_wrap">
	<div class="inquiry_column arrangement">
		<input type="text" placeholder="输入作品名或作者" id = "ProductMsg" value='' class="enter_product_name"  onkeydown="if(event.keyCode==13){findProducts(1);}">
		<form class="layui-form move_right" id="select_level">
			<div class="layui-form-item">
				<div class="layui-inline">
					<div class="layui-input-inline">
					<select class="level" id = "product_level">
						<option value="null">选择级别</option>
						<option value="0">国家级</option>
						<option value="1">中书协/中美协</option>
						<option value="2">省级</option>
					</select>
					</div>
				</div>
			</div>
		</form>
		<form class="layui-form move_right" id="select_mounted_status">
			<div class="layui-form-item">
				<div class="layui-inline">
					<div class="layui-input-inline">
					<select class="level" id = "product_mounted_status">
						<option value="null">选择装裱状态</option>
						<option value="0">轴</option>
						<option value="1">芯</option>
						<option value="2">框</option>
					</select>
					</div>
				</div>
			</div>
		</form>
		<form class="layui-form move_right" id="select_type">
			<div class="layui-form-item">
				<div class="layui-inline">
					<div class="layui-input-inline">
					<select class="level" name="quiz" id = "product_type">
						<option value="null">选择类型</option>
						<option value="0">国画</option>
						<option value="1">书法</option>
					</select>
					</div>
				</div>
			</div>
		</form>
		<form class="layui-form move_right" id="select_status">
			<div class="layui-form-item">
				<div class="layui-inline">
					<div class="layui-input-inline">
					<select class="level" name="quiz" id = "product_status">
						<option value="null">选择作品状态</option>
						<option value="0">上架</option>
						<option value="1">下架</option>
						<option value="2">租赁</option>
						<option value="3">结单</option>
					</select>
					</div>
				</div>
			</div>
		</form>
		<input onclick="findProducts(1)" type="button" value="查询" class="inquire arrange">
	</div>
	<div class="select_operating_column">
		<input type="checkbox" id="choose"/>
		<label for="choose" class="choose_first"></label>
		<span class="select_all">全选老师</span>
		<span class="batch_delect" onclick="deleteBatch()">批量删除</span>
		<span class="adjunction"><a href="<%=request.getContextPath()%>/management/erp/product/product_add.jsp">添加</a></span>
	</div>
	<div class="product_list">
      	<table id="table" class="product_table">
      	<thead>
      	 	<tr>
      	 		<th class="product_select_column">选择</th>
        		<th class="product_numbering_column">编号</th>
        		<th class="product_name_column">名称</th>
        		<th class="product_author_column">作者</th>
        		<th class="product_img_column">主图</th>
        		<th class="framed_state_column">装裱</th>
        		<th class="product_dimension_column">尺寸</th>
        		<th class="share_price_column">共享价</th>
        		<th class="product_status_column">状态</th>
        		<th class="product_edit_column">编辑</th>
        		<th class="product_delect_column">删除</th>
       		</tr>
       	</thead>
       	<tbody id="tbody"></tbody>
      	</table>
      	<div id="error"></div>
      	<div class="page_selection" id="paging"></div>
      	<div id="bomb_positioning">
	 		<div class="bomb">
				<div class="bomb_title">
					<span class="prompt">提示</span>
					<img src="<%=request.getContextPath()%>/commons/image/management/close_icon.png" class="close">
				</div>
				<div class="bomb_content">
					<span>确定删除此栏目</span>
				</div>
				<div class="bomb_button">
					<input class="confirm_button" type="button" value="确定">
					<span class="cancel">取消</span>
				</div>
			</div>
	 	</div>
 	</div>
</section>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/character_length_to_judge.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/product.js"></script>
</body>
</html>
