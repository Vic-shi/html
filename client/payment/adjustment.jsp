<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!--language:表示编译成java文件，contentType里的charset表示转成java的编码为utf-8，pageEncoding表示jsp自身编译的语言为utf-8-->
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
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/payment/adjustment.css"/>
		<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
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
		<title>结单</title>
	</head>
	<body>
		<div class="head">
			<ul>
				<li>还画</li>
				<li>调换</li>
				<li>续租</li>
				<li  class="nav_bottom">结单</li>
			</ul>
		</div>
		<div class="order_number">
			<span id="o_number"></span>
		</div>
		<div class="paint">
			<div><img id="spic"  alt="作品" /></div>
			<h1 id="product"></h1>
		</div>
		<div>
			<h1>结单规则</h1>
			<h2>当租金到期后，选择结单，则无法退换押金，画属于您左右，还将产生一笔润笔费（即由作者帮你修改或美化文字的费用）</h2>
		</div>
		<div class="price">
			<h1>润笔费</h1>
			<div>
				<h2>内含宣纸费用、墨汁颜料费用、材料费、提笔费</h2>
				<h3 id="mprice"></h3>
			</div>
		</div>
		<div>
			<h1>订单信息</h1>
			<h2 id="Address"></h2>
		</div>
		<div>
			<form class="layui-form" action="">
				<div class="layui-form-item">
				 	<label class="layui-form-label">结单原因</label>
				    <div class="layui-input-block">
				      	<select name="interest" id="adjustReason" lay-filter="aihao" value="请选择结单原因">
						    <option value="">请选择结单原因</option>
						    <option value="0">收藏此画</option>
						    <option value="1">转赠他人</option>
						    <option value="2">遗失此画</option>
						    <option value="3">其他原因</option>
				      	</select>
				    </div>
				</div>
			</form>
		</div>
		<form action="" method="">
		<div style="height:70vw;background:white;">
			<input type="button" class="nowsub" onclick="sub()" value="提交"/>
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
	var orderId = sessionStorage.getItem("orderId") ;
	var queryData = {"jsonStr":"{'orderId':"+orderId+"}"};
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
			$("#Address").html(data[0].userName+'&nbsp;'+data[0].userMobile+'&nbsp;'+data[0].userAddress);
			$("#adjustReason").val(data[0].adjustReason);
			
			sessionStorage.setItem("originalProductName",data[0].originalProductName);
			sessionStorage.setItem("originalProductAuthor",data[0].originalProductAuthor);
			sessionStorage.setItem("orderCreateTime",data[0].orderCreateTime);
			sessionStorage.setItem("actualPayment",data[0].actualPayment);
			sessionStorage.setItem("originalProductId",data[0].originalProductId);
			sessionStorage.setItem("productStatus","4");
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
			$("#Address").html(data[0].userName+'&nbsp;'+data[0].userMobile+'&nbsp;'+data[0].userAddress);
			$("#adjustReason").val(data[0].adjustReason);
			
			sessionStorage.setItem("originalProductName",data[0].originalProductName);
			sessionStorage.setItem("originalProductAuthor",data[0].originalProductAuthor);
			sessionStorage.setItem("orderCreateTime",data[0].orderCreateTime);
			sessionStorage.setItem("actualPayment",data[0].actualPayment);
			sessionStorage.setItem("originalProductId",data[0].originalProductId);
			sessionStorage.setItem("productStatus","4");
		},
		error:function(){
			console.log("ssssss");
		}
	}) */
}
//layui的下拉选择框组件
layui.use(['form', 'layedit', 'laydate'], function(){
  	var form = layui.form
  		,layer = layui.layer
  		,layedit = layui.layedit
  		,laydate = layui.laydate;

  //监听提交
 	form.on('submit(demo1)', function(data){
    	layer.alert(JSON.stringify(data.field), {
      		title: '最终的提交信息'
    	})
    	return false;
 	 });
});


function sub(){
	var url1="<%=request.getContextPath()%>/api/order/saveneworder";
	var orderId = sessionStorage.getItem("orderId");
	var userId=sessionStorage.getItem("userId");
	var adjustReason = $("#adjustReason").val();
	var queryData = {"jsonStr":"{'orderId':"+orderId+",'adjustReason':'"+adjustReason+"','userId':"+userId+"}"};
	console.log(queryData);
	
	var param = {
		url: url1,
		data: queryData,
		successCallback: function(msg){
			if(msg==null){
				console.log(msg);
				alert(msg.message);
				return null;
			}
			console.log(msg.message);
			sessionStorage.setItem("orderId",msg.message); 
			window.open("<%=request.getContextPath()%>/client/payment/pay_method.jsp","_self");
		},
		errorCallBack: function() {
			console.log("ssssss");
		}
		}
	getDataFromServer(param);
	
<%-- 	 $.ajax({
		url:url1,
		type:'post',
		data:queryData,
		success:function(msg){
			if(msg==null){
				console.log(msg);
				alert(msg.message);
				return null;
			}
			console.log(msg.message);
			sessionStorage.setItem("orderId",msg.message); 
			window.open("<%=request.getContextPath()%>/client/payment/pay_method.jsp","_self");
		},
		error:function(){
			console.log("ssssss");
		}
	})  --%>
}
</script>
	</body>
</html>
