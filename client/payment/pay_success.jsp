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
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/payment/pay_success.css"/>
		<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
		
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
		<title>订单详情</title>
	</head>
	<body>
		<div class="head">
			<img src="<%=request.getContextPath()%>/commons/image/client/payment/pay_success.png" alt="交易成功" />交易成功
		</div>
		<div class="article">
			<div>
				<ul>
					<li><h1 id="product">&nbsp;</h1></li>
					<li>
						<div class="img_show">
							<img id="spic" src="<%=request.getContextPath()%>/commons/image/pic/pic_unpaid.png"/>
						</div>
						<div class="detail">
							<h3>
								<span id="express"></span><br>
								<span id="Address"></span>
							</h3>
						</div>
					</li>
				</ul>
			</div>	
		</div>
		<div style="border-bottom: 0;" class="price">
			<div>
				<h2>市场价格</h2><h2 style="text-decoration: line-through;" id="yprice"></h2>
			</div>
			<div>
				<h2>装裱费</h2><h2 id="zprice"></h2>
			</div>
			<div>
				<h2>租金</h2><h2 id="rprice"></h2>
			</div>
			<div>
				<h2>押金</h2><h2 id="yjprice"></h2>
			</div>
			<div>
				<h1>共享价格</h1><h3 id="nprice"></h3>
			</div>+
			<div>
				<h1>润笔费</h1><h3 id="overOrderCost"></h3>
			</div>
		</div>
		<div class="success_detail">
			<h2>订单号码：<span id="o_number"></span></h2>
			<h2>创建时间：<span id="crtime"></span></h2>
			<h2>成交时间：<span id="nowtime"></span></h2>
		</div>
<script>

$(function(){
	var url="<%=request.getContextPath()%>/api/payorder/updateorder";
	var orderId = sessionStorage.getItem("orderId");
	var orderUpdateStatus=1;
	var originalProductId = sessionStorage.getItem("originalProductId");
	var productStatus = sessionStorage.getItem("productStatus");
	var curWwwPath=window.document.location.href;
	curWwwPath = curWwwPath.substring(-1,24);
	var path = curWwwPath+"/api/product/updateByPayMent?productId="+originalProductId+"&productStatus="+productStatus;
	var queryData1 = {"jsonStr":"{'orderId':"+orderId+",'orderUpdateStatus':"+orderUpdateStatus+"}","url":path};
	console.log(queryData);
	var param = {
	url: url,
	data: queryData1,
	successCallback: function(msg){
		console.log("状态改变");
	},
	errorCallBack: function() {
		console.log("ssssss");
	}
	}
getDataFromServer(param);
	
	/* $.ajax({
		url:url,
		type:'post',
		data:queryData1,
		success:function(msg){
			console.log("状态改变");
		},
		error:function(){
			console.log("ssssss");
		}
	}) */
	
	var url1="<%=request.getContextPath()%>/api/payorder/listOrderByUserid";
	var queryData = {"jsonStr":"{'orderId':"+orderId+"}"}
	orderdetail(url1,queryData);
}) 

function orderdetail(url1,queryData){
	var param = {
		url: url1,
		data: queryData,
		successCallback: function(msg){
			var data =msg.data;
			$("#product").html(data[0].originalProductName+"&nbsp;作者："+data[0].originalProductAuthor); 
			$("#express").html("订单号码："+data[0].orderId);
			$("#Address").html("订单信息："+data[0].userName+'&nbsp;'+data[0].userMobile+'&nbsp;'+data[0].userAddress);
			$("#spic").attr('src',data[0].originalProductPicture); 
			
			$("#yprice").html("¥"+data[0].originalPrice);
			$("#zprice").html("¥"+data[0].productMountedValue); 
			$("#rprice").html("¥"+data[0].rent*180);
			$("#yjprice").html("¥"+data[0].productDeposit);
			var price = parseInt(data[0].productMountedValue)+parseInt(data[0].rent*180)+parseInt(data[0].productDeposit);
			$("#nprice").html("¥"+price);
			var overOrderCost = data[0].overOrderCost;
			if(overOrderCost==null){
				overOrderCost =0;
			}
			$("#overOrderCost").html("¥"+overOrderCost);
			$("#o_number").html(data[0].orderId);
			$("#crtime").html(getMyDate(data[0].orderCreateTime));
			$("#nowtime").html(getMyDate(data[0].returnProductTime));
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
				$("#product").html(data[0].originalProductName+"&nbsp;作者："+data[0].originalProductAuthor); 
				$("#express").html("订单号码："+data[0].orderId);
				$("#Address").html("订单信息："+data[0].userName+'&nbsp;'+data[0].userMobile+'&nbsp;'+data[0].userAddress);
				$("#spic").attr('src',data[0].originalProductPicture); 
				
				$("#yprice").html("¥"+data[0].originalPrice);
				$("#zprice").html("¥"+data[0].productMountedValue); 
				$("#rprice").html("¥"+data[0].rent*180);
				$("#yjprice").html("¥"+data[0].productDeposit);
				var price = parseInt(data[0].productMountedValue)+parseInt(data[0].rent*180)+parseInt(data[0].productDeposit);
				$("#nprice").html("¥"+price);
				var overOrderCost = data[0].overOrderCost;
				if(overOrderCost==null){
					overOrderCost =0;
				}
				$("#overOrderCost").html("¥"+overOrderCost);
				$("#o_number").html(data[0].orderId);
				$("#crtime").html(getMyDate(data[0].orderCreateTime));
				$("#nowtime").html(getMyDate(data[0].returnProductTime));
				
		},
		error:function(){
			console.log("ssssss");
		}
	}) */
}

function getMyDate(str){  
    var oDate = new Date(str),  
    oYear = oDate.getFullYear(),  
    oMonth = oDate.getMonth()+1,  
    oDay = oDate.getDate(),  
    oHour = oDate.getHours(),  
    oMin = oDate.getMinutes(),  
    oSen = oDate.getSeconds(),  
    oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay);//最后拼接时间  
    return oTime;  
};
function getzf(num){  
    if(parseInt(num) < 10){  
        num = '0'+num;  
    }  
    return num;  
} 
</script>				
		
	</body>
</html>
