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
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/product.css">
</head>
<body>
<!--header-->
<jsp:include page="/management/special_header.jsp"/>
<!-- sidebar -->
<div class="arrangement">
	<jsp:include page="/management/sidebar.jsp"/>
	<form id="productForm" method="post" class="layui-form" enctype="multipart/form-data" style="">
		<section class="rt_wrap" style="">
			<ul class="product_edit">
				<li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>作品id</span>
						<input type="text" class="input_box input input_color" readonly="readonly" id = "productId" name = "productId">
					</div>
					<div class="vertical_arrangement">
						<span>作者姓名</span>
						<input type="text" class="input_box input input_color" readonly="readonly" id = "product_author" name = "product_author">
						<span id="product_author_error"></span>
					</div>
					<div class="vertical_arrangement">
						<span>作者id</span>
						<input type="text" class="input_box input input_color" readonly="readonly" id = "productAuthorId" name = "productAuthorId">
					</div>
				</li>
				<li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>作品名称</span>
						<input type="text" class="input_box input" id = "product_name" name = "product_name">
						<span id="product_name_error"></span>
					</div>
					<div class="vertical_arrangement">
						<span>创作时间</span>
						<input type="text" class="input_box input" id="productCreateTime" name="productCreateTime">
						<span id="productCreateTime_error"></span>
					</div>
					<div class="vertical_arrangement">
						<span>作品条形码</span>
						<input type="text" class="input_box input" id = "product_code" name = "product_code">
						<span id="product_code_error"></span>
					</div>
				</li>
				<li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>润笔费：单位（元）</span>
						<input type="text" class="input_box input"<%--  disabled="disabled"  --%> id = "product_cost" name = "product_cost"   oninput = "someMoney()">
						<span id="product_cost_error"></span>
					</div>
					<div class="vertical_arrangement">
						<span>保证金：单位（元）</span>
						<input type="text" class="input_box input"<%--  disabled="disabled"  --%> id = "product_deposit" name = "product_deposit" oninput = "dayMoney()">
						<span id="product_deposit_error"></span>
					</div>
					<div class="vertical_arrangement">
						<span>活动价格：单位（元）</span>
						<input type="text" class="input_box input"<%--  disabled="disabled"  --%> id = "product_activePrice" name = "product_activePrice">
						<span id="product_activePrice_error"></span>
					</div>
				</li>
				<li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>装裱费：单位（元）</span>
						<input type="text" class="input_box input"<%--  disabled="disabled"  --%> id = "packing_costs" name = "packing_costs"  oninput = "allMoney()">
						<span id="packing_costs_error" class="error"></span>
					</div>
					<div class="vertical_arrangement">
						<span>日租金：单位（元）</span>
						<input type="text" class="input_box input"<%--  disabled="disabled"  --%> id = "accumulated_rent" name = "accumulated_rent" oninput = "dayMoney()">
						<span id="accumulated_rent_error" class="error"></span>
					</div>
					<div class="vertical_arrangement">
						<span>市场价值：单位（元）</span>
						<input type="text" class="input_box input"<%--  disabled="disabled"  --%> id = "product_market_value" name = "product__market_value">
						<span id="product_market_value_error" class="error"></span>
					</div>
				</li>
				<li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>共享价格（购）：单位（元）</span>
						<input type="text" class="input_box input input_color"<%--  disabled="disabled"  --%> readonly="readonly" id = "product_sharing_value" name = "product_sharing_value">
						<span>共享价格（购）=润笔费+装裱费</span>
						 <!-- id="product_sharing_value_error" -->
					</div>
					<div class="vertical_arrangement">
						<span>租6个月总价：单位（元）</span>
						<input type="text" class="input_box input input_color"<%--  disabled="disabled"  --%> readonly="readonly" id = "product_day_value" name = "product_sharing_value">
						<span>共享价格（租）6个月=保证金+日租金*182+装裱费</span>
					</div>
					<div class="vertical_arrangement">
						<span>租12个月总价：单位（元）</span>
						<input type="text" class="input_box input input_color"<%--  disabled="disabled"  --%> readonly="readonly" id = "product_year_value" name = "product_sharing_value">
						<span>共享价格（租）12个月=保证金+日租金*365+装裱费</span>
					</div>
				</li>
				<li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>装裱方式</span>
						<div class="layui-form-item" id="select_mounted_status">
							<div class="layui-inline">
								<div class="layui-input-inline">
									<select class="level" id = "product_mounted_status" name = "product_mounted_status">
										<option value="null">选择装裱状态</option> 
				         				<option value="0">轴</option>
				         				<option value="1">芯</option>
					         			<option value="2">框</option>
									</select>
								</div>
							</div>
						</div>
						<span id="product_mounted_error"></span>
					</div>
					<div class="vertical_arrangement">
						<span>作品尺寸</span>
						<div class="layui-form-item" id="select_size">
							<div class="layui-inline">
								<div class="layui-input-inline">
									<select class="level" id = "product_size" name = "product_size">
										<option value="null">选择尺寸</option>
						        		<option value="0">四尺</option>
								        <option value="1">六尺</option>
								        <option value="2">八尺</option>
								        <option value="3">四轴屏</option>
								        <option value="4">斗方</option>
									</select>
								</div>
							</div>
						</div>
						<span id="product_size_error"></span>
					</div>
					<div class="vertical_arrangement">
						<span>作品级别</span>
						<div class="layui-form-item" id="select_level">
							<div class="layui-inline">
								<div class="layui-input-inline">
									<select class="level" id = "product_level" name = "product_level">
										<option value="null">选择级别</option>
										<option value="0">国家级</option>
										<option value="1">中书协/中美协</option>
										<option value="2">省级</option>
									</select>
								</div>
							</div>
						</div>
						<span id="product_level_error"></span>
					</div>
				</li>
				<li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>作品状态</span>
						<div class="layui-form-item" id="select_status">
							<div class="layui-inline">
								<div class="layui-input-inline">
									<select class="level" id = "product_status" name = "product_status">
										<option value="null">选择状态</option>
							         	<option value="0">上架</option>
							         	<option value="1">下架</option>
								        <option value="2">租赁</option>
								       	<option value="3">结单</option>
									</select>
								</div>
							</div>
						</div>
						<span id="product_status_error"></span>
					</div>
					<div class="vertical_arrangement">
						<span>作品类型</span>
						<div class="layui-form-item" id="select_type">
							<div class="layui-inline">
								<div class="layui-input-inline">
									<select class="level" id = "product_type" name = "product_type">
										<option value="null">选择类型</option>
							         	<option value="0">国画</option>
							         	<option value="1">书法</option>
									</select>
								</div>
							</div>
						</div>
						<span id="product_type_error"></span>
					</div>
					<div class="vertical_arrangement">
						<span>作品内容</span>
						<div class="layui-form-item" id="select_style">
							<div class="layui-inline">
								<div class="layui-input-inline">
									<select class="level" id = "product_style" name = "product_style">
										<option value="null">选择风格</option>
							         	<option value="0">山水</option>
							         	<option value="1">花鸟</option>
								        <option value="2">动物</option>
								       	<option value="3">人物</option>
								       	<option value="4">国画其他</option>
								       	<option value="5">四字榜书</option>
								       	<option value="6">诗词</option>
							        	<option value="7">书法其他</option>
									</select>
								</div>
							</div>
						</div>
						<span id="product_style_error"></span>
					</div>
				</li>
				<li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>作品版式</span>
						<div class="layui-form-item" id="select_type">
							<div class="layui-inline">
								<div class="layui-input-inline">
									<select class="level" id = "product_plate" name = "product_type">
										<option value="null">选择板式</option>
							         	<option value="0">横版</option>
							         	<option value="1">竖版</option>
									</select>
								</div>
							</div>
						</div>
						<span id="product_plate_error"></span>
					</div>
				</li>
				<li class="flex move_down">
					<div class="vertical_arrangement move_down">
						<div>请上传750*430像素的图片</div>
						<img id="img_upload" src=""/>
						<input id="img_name" type="text">
						<label for="product_uploadImages" class="select_img">选择作品主图</label>
						<input type="file" id="product_uploadImages" hidden="hidden" />
						<span class="error uploadImages"></span>
					</div>
					<div class="vertical_arrangement move_down">
						<textarea class="popup_textarea product_uploadImages_text" id="img_upload_describe"></textarea>
						<div class="popup_text">主图描述</div>
						<span class="error uploadImages_text"></span>
					</div>
				</li>
				<li class="flex move_down">
					<div class="vertical_arrangement move_down">
						<div>请上传620*355像素的图片</div>
						<img id="img_upload1" src=""/>
						<input id="img_name1" type="text">
						<label for="product_uploadImages1" class="select_img">选择副图1</label>
						<input type="file" id="product_uploadImages1" hidden="hidden" />
						<span class="error uploadImages1"></span>
					</div>
					<div class="vertical_arrangement move_down">
						<textarea class="popup_textarea product_uploadImages1_text"  id="img_upload1_describe"></textarea>
						<div class="popup_text">副图1描述</div>
					</div>
				</li>
				<li class="flex move_down">
					<div class="vertical_arrangement move_down">
						<div>请上传620*355像素的图片</div>
						<img id="img_upload2" src=""/>
						<input id="img_name2" type="text">
						<label for="product_uploadImages2" class="select_img">选择副图2</label>
						<input type="file" id="product_uploadImages2" hidden="hidden" />
						<span class="error uploadImages2"></span>
					</div>
					<div class="vertical_arrangement move_down">
						<textarea class="popup_textarea product_uploadImages2_text"  id="img_upload2_describe"></textarea>
						<div class="popup_text">副图2描述</div>
					</div>
				</li>
				<li>
					<input class="productUpload" type="button" value="确定">
					<input class="productUpload" style = "width:323px;" type="button" onclick = "printInpaint()" value="打印(给顾客扫)">
					<input class="productUpload" style = "width:323px;" type="button" onclick = "printPaint()" value="打印(贴画上)">
				</li>
			</ul> 
		</section>
	</form>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/qrcode/jquery.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/qrcode/qrcode.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
<!-- 引用spark-md5插件 -->
<script type="text/javascript" src="<%=request.getContextPath()%>/lib/spark-md5/spark-md5.js"></script>
<!-- 引用plupload插件 -->
<script type="text/javascript" src="<%=request.getContextPath()%>/lib/plupload-2.1.2/js/plupload.full.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/product_detail.js"></script>
</body>
</html>
