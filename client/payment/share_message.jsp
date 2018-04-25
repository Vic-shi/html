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
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/payment/return.css" />
		<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
		<title>提交订单</title>
		<style type="text/css">
			h1{
				line-height:2.2;
				margin: 0!important;
			}
			body>form{
				background-color: white;
				height: 80vw;
			}
		</style>
	</head>
	<body>
		<div>
			<div>
				<h1>作品</h1>
				<h2 id='productName'></h2>
			</div>
			<div>
				<h1>共享方</h1>
				<h2>云鼎国际</h2>
			</div>
		</div>
		<div>
			<div>
				<h1>方式</h1>
				<h2>快递</h2>
			</div>
			<div>
				<h1>租期</h1>
				<h2 id = "rentTime"></h2>
			</div>
		</div>
		<div>
			<div>
				<h1>租金</h1>
				<h2 id='rent'></h2>
			</div>
			<div>
				<h1>装裱费</h1>
				<h2 id='productMountedValue'></h2>
			</div>
			<div>
				<h1>押金</h1>
				<h2 id='productDeposit'></h2>
			</div>
			<span style="font-size: 0.18rem;color: #999;">交易结束后押金将退还到您的账户</span>
		</div>
		<div>
			<div>
				<h1 style="color: #333;font-size:0.28rem;">总计</h1>
				<h2 style="color: #333;font-size:0.28rem;" id='shareprice'></h2>
			</div>
		</div>
		<div>
			<div id="">
				<h1 id="express"></h1>
				<a href="<%=request.getContextPath()%>/client/my/site.jsp?type=1"><img width="50%" height="50%" src="<%=request.getContextPath()%>/commons/image/client/payment/edit.png"/></a>
			</div>
			<div>
				<h1 id="num"></h1>
			</div>
			<h1 id="Address"></h1>
		</div>
		<!--<form action="" method="">-->
		<div class="tijiao">
			<input type="submit" value="提交" onclick="open_pay()"/>
		</div>
		<!--</form>-->
<script>
$(function(){
	var timeType = localStorage.getItem("timeType");
	if(timeType == 3){
		$('#rentTime').append('<span>永久</span>');
	}else{
		var rentTimeBegin = getMyDate();
		var rentTimeEnd = getMyDateAdd(timeType);
		$('#rentTime').append('<span>'+rentTimeBegin+'</span> 至 <span>'+rentTimeEnd+'</span>');
	}
	
	$("#productName").text('《'+localStorage.getItem("productName")+'》');
	$('#rent').text('￥'+localStorage.getItem("rent"));
	$('#productMountedValue').text('￥'+localStorage.getItem("productMountedValue"));
	$('#productDeposit').text('￥'+localStorage.getItem("productDeposit"));
	$("#shareprice").text('￥'+(
			parseInt(localStorage.getItem("rent"))
			+parseInt(localStorage.getItem("productMountedValue"))
			+parseInt(localStorage.getItem("productDeposit"))
			));
	var userId=sessionStorage.getItem("userId");
	var url1="<%=request.getContextPath()%>/api/orderaddress/list";
	var queryData = {"jsonStr":"{'userId':"+userId+"}"};
	var param = {
		url: url1,
		data: queryData,
		successCallback: function(msg){
			var data =msg.data;
			console.log(data);
			var changedz = sessionStorage.getItem("changedz");
			var dzname = sessionStorage.getItem("dzname");
			var userMobile = sessionStorage.getItem("userMobile");
			if(changedz!=null&&changedz!=""){
				$("#express").html("收货人："+dzname);
				$("#Address").html("收货地址："+changedz);
				$("#num").html("联系电话："+userMobile);
			}else{
				if(data!=null){
					$("#express").html("收货人："+data[0].name);
					$("#Address").html("收货地址："+data[0].detailedaddress);
					$("#num").html("联系电话："+data[0].userMobile);
				}
			}
		},
		errorCallBack: function() {
			console.log("ssssss");
		}
		}
	getDataFromServer(param);
	
	/* $.ajax({
		type:'POST',
		url:url1,
		dataType:'json',
		data:queryData,
		success:function(msg){
			var data =msg.data;
			console.log(data);
			var changedz = sessionStorage.getItem("changedz");
			var dzname = sessionStorage.getItem("dzname");
			var userMobile = sessionStorage.getItem("userMobile");
			if(changedz!=null&&changedz!=""){
				$("#express").html("收货人："+dzname);
				$("#Address").html("收货地址："+changedz);
				$("#num").html("联系电话："+userMobile);
			}else{
				if(data!=null){
					$("#express").html("收货人："+data[0].name);
					$("#Address").html("收货地址："+data[0].detailedaddress);
					$("#num").html("联系电话："+data[0].userMobile);
				}
			}
		},
		error:function(data){
			console.log('shibai');
		}
	}); */
})
//提交，跳转至支付界面
	function open_pay(){
		var url="<%=request.getContextPath()%>/api/order/save";
		var orderType = ""; 
		var termType = localStorage.getItem("timeType");
		if(termType=="3"){
			termType = 0;
			orderType = "1";
		}else if(termType=="1"){
			termType = 6;
			orderType = "0";
		}else if(termType=="2"){
			termType = 12;
			orderType = "0";
		}
		var orderTotalValue = parseInt(localStorage.getItem("rent"))
		+parseInt(localStorage.getItem("productMountedValue"))
		+parseInt(localStorage.getItem("productDeposit"));
		localStorage.setItem("orderTotalValue",orderTotalValue);
		var productDeposit = localStorage.getItem("productDeposit");
		var productMountedValue = localStorage.getItem("productMountedValue");
		var userId =sessionStorage.getItem("userId");
		var originalProductId = localStorage.getItem("productId");
		var originalProductName = localStorage.getItem("productName");
		var originalProductPicture = localStorage.getItem("productPictureMain");
		var originalProductAuthor = localStorage.getItem("productAuthor");
		var rent = localStorage.getItem("rent");
		
		var changedz = $("#Address").html().substring(5);
		var dzname = $("#express").html().substring(4);
		var num = $("#num").html().substring(5);
		
		var param = {
		url: url,
		data: {"jsonStr":"{'orderType':'"+orderType+"','orderStatus':'0','orderTotalValue':"+orderTotalValue+",'preferential':0,'actualPayment':"+orderTotalValue+",'originalPrice':"+orderTotalValue+",'productDeposit':"+productDeposit+",'productMountedValue':'"+productMountedValue+"','userId':"+userId+",'termType':"+termType+",'originalProductId':"+originalProductId+",'userName':'"+dzname+"','userAddress':'"+changedz+"','userMobile':'"+num+"','originalProductName':'"+originalProductName+"','originalProductAuthor':'"+originalProductAuthor+"','originalProductPicture':'"+originalProductPicture+"','rent':"+rent+"}"},
		successCallback: function(data){
			if(data.data!=null){
				sessionStorage.setItem("orderCreateTime",new Date());
				window.open("<%=request.getContextPath()%>/client/payment/pay_method.jsp","_self");
			}else{
				alert(data.message);
			}
		},
		errorCallBack: function() {
			console.log("ssssss");
		}
		}
	getDataFromServer(param);
		
		<%-- /*此处实现订单信息的添加数据库*/
		$.ajax({
			type:'POST',
			url:url,
			dataType:'json',
			data:{"jsonStr":"{'orderType':'"+orderType+"','orderStatus':'0','orderTotalValue':"+orderTotalValue+",'preferential':0,'actualPayment':"+orderTotalValue+",'originalPrice':"+orderTotalValue+",'productDeposit':"+productDeposit+",'productMountedValue':'"+productMountedValue+"','userId':"+userId+",'termType':"+termType+",'originalProductId':"+originalProductId+",'userName':'"+dzname+"','userAddress':'"+changedz+"','userMobile':'"+num+"','originalProductName':'"+originalProductName+"','originalProductAuthor':'"+originalProductAuthor+"','originalProductPicture':'"+originalProductPicture+"','rent':"+rent+"}"},
			success:function(data){
				if(data.data!=null){
					sessionStorage.setItem("orderCreateTime",new Date());
					window.open("<%=request.getContextPath()%>/client/payment/pay_method.jsp","_self");
				}else{
					alert(data.message);
				}
			},
			error:function(data){
				console.log('shibai');
			}
		}); --%>
	}
//毫秒数转换成时间类型参数
function getMyDate(){  
    var oDate = new Date(),  
    oYear = oDate.getFullYear(),  
    oMonth = oDate.getMonth()+1,  
    oDay = oDate.getDate(),  
    oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay);//最后拼接时间  
    return oTime;  
}; 
//结束时间,月份计算
function getMyDateAdd(index){  
    var oDate = new Date(),  
    oYear = oDate.getFullYear(),  
    oMonth = oDate.getMonth()+1+parseInt(index)*6,
    oDay = oDate.getDate();  
    if(oMonth>12){
    	oYear+=1;
    	oMonth-=12;
    }
	switch (oMonth) {
	case 1:
		break;
	case 2:
		if(oDay>getDaysInMonth(oYear,oMonth)){
			oMonth+=1;
			oDay-=getDaysInMonth(oYear,oMonth);
		    if(oMonth>12){
		    	oYear+=1;
		    	oMonth-=12;
		    }
		}
		break;
	case 3:
		break;
	case 4:
		if(oDay>30){
			oMonth+=1;
			oDay-=30;
		}
		break;
	case 5:
		break;
	case 6:
		if(oDay>30){
			oMonth+=1;
			oDay-=30;
		}
		break;
	case 7:
		break;
	case 8:
		break;
	case 9:
		if(oDay>30){
			oMonth+=1;
			oDay-=30;
		}
		break;
	case 10:
		break;
	case 11:
		if(oDay>30){
			oMonth+=1;
			oDay-=30;
		}
		break;
	case 12:
		break;
	default:
		break;
	}
    var oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay);//最后拼接时间  
    return oTime;  
}; 
//utf-8转换
function getzf(num){  
    if(parseInt(num) < 10){  
        num = '0'+num;  
    }  
    return num;  
}
//返回某年某月有多少天
function getDaysInMonth(year,month){
    month = parseInt(month,10)+1;
    var temp = new Date(year+"/"+month+"/0");
    return temp.getDate();
}
</script>
	</body>
</html>
