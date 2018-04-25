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
			<img src="<%=request.getContextPath()%>/commons/image/client/payment/pay_success.png" alt="交易成功" />交易成功（结单）
		</div>
		<div class="article">
			<div>
				<ul>
					<li><h1 id="product">《札木便桥》&nbsp;作者：吴冠中</h1></li>
					<li>
						<div class="img_show">
							<img id="spic" src="<%=request.getContextPath()%>/commons/image/pic/pic_unpaid.png"/>
						</div>
						<div class="detail">
							<h3>
								<span id="express">订单号码：1458746545</span><br>
								<span id="Address">订单信息：理查德 15326543399 浙江省 宁波市 鄞州区 双东路永红家园10幢502室</span>
							</h3>
							<h4>租期  <span id="ctime">2017-08-24</span> 至 <span id="endtime">2018-08-24</span></h4>
						</div>
					</li>
				</ul>
			</div>	
		</div>
		<div style="border-bottom: 0;" class="price">
			<div>
				<h2>市场价格</h2><h2 style="text-decoration: line-through;" id="yprice">￥350000.00</h2>
			</div>
			<div>
				<h2>装裱费</h2><h2 id="zprice">￥300</h2>
			</div>
			<div>
				<h2>租金</h2><h2 id="rprice">￥9000</h2>
			</div>
			<div>
				<h2>押金</h2><h2 id="yjprice">￥10000</h2>
			</div>
			<div>
				<h1>共享价格</h1><h3 id="nprice">￥19300.00</h3>
			</div>+
			<div>
				<h1>润笔费</h1><h3 id="overOrderCost">￥200.00</h3>
			</div>
		</div>
		<div class="success_detail">
			<h2>订单号码：<span id="o_number">145845254</span></h2>
			<h2>创建时间：<span id="crtime">2017-08-24 12:27:38</span></h2>
			<h2>成交时间：<span id="nowtime">2017-08-27 12:27:38</span></h2>
		</div>
<script>

$(function(){
	var url1="<%=request.getContextPath()%>/api/payorder/listOrderByUserid";
	var orderId = sessionStorage.getItem("orderId") ;
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
		$("#express").html("订单号码："+data[0].id);
		$("#Address").html("订单信息："+data[0].userName+'&nbsp;'+data[0].userMobile+'&nbsp;'+data[0].userAddress);
		$("#ctime").html(getMyDate(data[0].orderCreateTime));
		$("#endtime").html(getMyDate(data[0].returnProductTime));
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
		$("#o_number").html(data[0].id);
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
				$("#express").html("订单号码："+data[0].id);
				$("#Address").html("订单信息："+data[0].userName+'&nbsp;'+data[0].userMobile+'&nbsp;'+data[0].userAddress);
				$("#ctime").html(getMyDate(data[0].orderCreateTime));
				$("#endtime").html(getMyDate(data[0].returnProductTime));
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
				$("#o_number").html(data[0].id);
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
