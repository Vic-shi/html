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
		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/lib/layui/css/layui.css"/>
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/payment/return.css"/>
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/payment/index.css" />
		<link href="<%=request.getContextPath()%>/commons/css/client/payment/index.css" type="text/css" rel="stylesheet">
		<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/imgUp.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
		<style type="text/css">
		.nowsub{
		    height: 10vw;
		    background-color: #fea427;
		    border-radius: 5vw;
		    color: white;
		    width: 76%;
		    position: fixed;
		    bottom: 10vw;
		    left: 50%;
		    transform: translateX(-50%);
		}
		</style>
		<title>还画</title>
	</head>
	<body>
		<div class="head">
			<ul>
				<li class="nav_bottom">还画</li>
				<li>调换</li>
				<li>续租</li>
				<li>结单</li>
			</ul>
		</div>
		<div class="order_number">
			<div>
				<span id="o_number"></span><span>云鼎国际</span>
			</div>
		</div>
		<div class="paint">
			<div><img id="spic"  alt="作品" /></div>
			<h1 id="product"></h1>
		</div>
		<div>
			<div>
				<h1>还画方式</h1>
				<h2>快递</h2>
			</div>
		</div>
		<div class="price">
			<div>
				<h1>退换押金数额</h1>
				<h3 id="mprice"></h3>
			</div>
		</div>
		<div class="add">
			<h1 id="express"></h1>
			<h1 id="Address"></h1>
		</div>
		<!-- <div>
			<section class="img-section">涉及到大纲时采取使用section
				<h1>上传照片：</h1>
				<div class="z_photo" >
				   	<section class="up-section loading">
						<img src="img/15删除订单.png" class="close-upimg">删除按钮
						<img src="img/16确定删除订单.png" class="type-upimg" alt="添加标签">所有图片的原图
						<img src="img/16确定删除订单.png" class="up-img up-opcity">所有图片的略缩图
					</section>
					<section class="z_file">
						<input type="file" name="file" id="file" class="file" value="" accept="image/jpg,image/jpeg,image/png,image/bmp" multiple />
					</section>
			 	</div>
				<h2 style="line-height: 1.8;">图片小于5M，仅支持png、gif、bmp和jpeg格式</h2>
				<h2 style="color:#fea427!important;">如有损坏，请消息拍摄</h2>
	 		</section>
		</div>
		<aside class="works-mask">
			<div class="mask-content">
				<p class="del-p">您确定要删除作品图片吗？</p>
				<p class="check-p"><span class="wsdel-ok">确定</span><span class="wsdel-no">取消</span></p>
			</div>
		</aside> -->
		<form action="" method="">
			<div style="height:100vw;background:white;">
				<input type="button" class="nowsub" onclick="sub()"; value="提交"/>
			</div>
		</form>
<script>
//导航栏的下滑线
$(".head li").click(function(){
	$(this).addClass("nav_bottom");
	$(this).siblings().removeClass("nav_bottom");
	
	if($(this).html()=="还画"){
		window.open("<%=request.getContextPath()%>/client/payment/return.jsp","_self");
	}else if($(this).html()=="调换"){
		window.open("<%=request.getContextPath()%>/client/payment/change.jsp","_self");
	}else if($(this).html()=="续租"){
		window.open("<%=request.getContextPath()%>/client/payment/rerent.jsp","_self");
	}else{
		window.open("<%=request.getContextPath()%>/client/payment/adjustment.jsp","_self");
	}
	
})
$(function(){
	var url1="<%=request.getContextPath()%>/api/payorder/listOrderByUserid";
	var orderId = sessionStorage.getItem("orderId");
	var queryData = {"jsonStr":"{'orderId':"+orderId+"}"}
	orderdetail(url1,queryData);
}) 

function orderdetail(url1,queryData){
	var param = {
	url: url1,
	data: queryData,
	successCallback: function(msg){
		var data =msg.data;
		$("#o_number").html("订单号码："+data[0].id);
		$("#spic").attr('src',data[0].originalProductPicture); 
		$("#product").html(data[0].originalProductName+" 作者："+data[0].originalProductAuthor); 
		$("#mprice").html("¥"+data[0].productDeposit);
		$("#express").html("收货人："+data[0].userName);
		$("#Address").html("收货地址："+data[0].userAddress);
	},
	errorCallBack: function() {
		console.log("ssssss");
	}
	}
getDataFromServer(param);
	
	/* $.ajax({
		url:url1,
		type:'post',
		data:queryData,
		success:function(msg){
			var data =msg.data;
				$("#o_number").html("订单号码："+data[0].id);
				$("#spic").attr('src',data[0].originalProductPicture); 
				$("#product").html(data[0].originalProductName+" 作者："+data[0].originalProductAuthor); 
				$("#mprice").html("¥"+data[0].productDeposit);
				$("#express").html("收货人："+data[0].userName);
				$("#Address").html("收货地址："+data[0].userAddress);
		},
		error:function(){
			console.log("ssssss");
		}
	}) */
}
function sub(){
	var url1="<%=request.getContextPath()%>/api/order/saveneworder";
	var orderId = sessionStorage.getItem("orderId");
	var orderUpdateStatus=1;
	var userId=sessionStorage.getItem("userId");
	var queryData = {"jsonStr":"{'orderId':"+orderId+",'orderUpdateStatus':"+orderUpdateStatus+",'userId':"+userId+"}"}
	$.ajax({
		url:url1,
		type:'post',
		data:queryData,
		success:function(msg){
			window.open("<%=request.getContextPath()%>/client/payment/return_success.jsp","_self");
		},
		error:function(){
			console.log("ssssss");
		}
	})
}
</script>
	</body>
</html>
