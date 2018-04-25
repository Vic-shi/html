<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<!--X-UA-Compatible标头可指定页面支持的 Internet Explorer版本 edge规定为最新版-->
		<meta http-equiv="X-UA-Compatible" content="IE=edge">
		<!--强制让文档的宽度与设备的宽度保持1:1，并且文档最大的宽度比例是1.0，且不允许用户点击屏幕放大浏览-->
		<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
		<!-- 禁止了把数字转化为拨号链接 -->
		<meta name="format-detection" content="telephone=no">
		<!--使用急速模式-->
		<meta name="renderer" content="webkit">
		<!--禁止百度转码显示-->
		<meta http-equiv="Cache-Control" content="no-siteapp" />
		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css"/>
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/payment/share.css" />
		<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
		<title>调换作品详情</title>
	</head>
	<body>
		<div style="padding: 0;border: 0;"><img src="<%=request.getContextPath()%>/commons/image/pic/pic_share.png"/></div>
		<div class="head">
			<h6>《札木便桥》</h6>
			<h2 style="text-align: center;line-height: 3;">作者：吴冠中</h2>
			<h1 style="display: inline;">简介：</h1>
			<h2 style="display: inline;">《札木便桥》是一副国家级的油画作品，是中国当担注明画家吴冠中所作。</h2>
			<div>
				<h2>产品状态：轴</h2>
				<h2>产品尺寸：轴</h2>
				<h2>内容类型：轴</h2>
			</div>
		</div>
		<div class="pic_lable">
			<h1>标签</h1>
			<ul>
				<li>人物</li>
				<li>风景</li>
				<li>植物</li>
			</ul>
		</div>
		<div>
			<div>
				<h2>市场价格</h2><h2 style="text-decoration: line-through;color: #fea427;">￥350000.00</h2>
			</div>
		</div>
		<!--<form action="" method="" class="pro_change">-->
		<div class="pro_change">
			<input type="button" value="取消" onclick="open_select()"/>
			<input type="submit" value="确定" onclick="open_change()"/>
		</div>
			
		<!--</form>-->
<script>
//取消返回选择界面
function open_select(){
	window.open("<%=request.getContextPath()%>/client/gallery/Selected_works.jsp","_self");	
}
//确认跳转至调换界面
function open_change(){
	window.open("<%=request.getContextPath()%>/client/payment/change.jsp","_self");	
}
</script>
	</body>
</html>
