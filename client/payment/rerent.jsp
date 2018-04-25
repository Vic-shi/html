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
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/payment/rerent.css"/>
		<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
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
		<title>续租</title>
	</head>
	<body>
		<div class="head">
			<ul>
				<li>还画</li>
				<li>调换</li>
				<li class="nav_bottom">续租</li>
				<li>结单</li>
			</ul>
		</div>
		<div class="order_number">
			<div>
				<span id="o_number"></span><span>云鼎国际</span>
			</div>
		</div>
		<div class="paint">
			<div><img  id="spic"  alt="作品" /></div>
			<h1 id="product"></h1>
		</div>
		<div>
			<div>
				<h1>选择续租时间</h1>
				<!--<form action="" method="post">
					<input type="radio" id="six" name="rerent_time" value="6个月"/> 
					<input type="radio" id="twel" name="rerent_time"/>
					<input type="radio" id="forever" name="rerent_time"/>
				</form>-->
				<!--时间选择-->
				<div class="time_choose">
			        <div>
			            <label for="time1">                        
			                <input type="radio" name="sex" id="time1" checked>
			                <input type="hidden" id="rent" value="0" >
			            </label>
			            <span class="btn active">6个月</span>
			        </div>
			        <div>
			            <label for="time2">
			                <input type="radio" name="sex" id="time2">
			            </label>
			            <span class="btn">12个月</span>
			        </div>
			        <div>
			            <label for="time3">
			                <input type="radio" name="sex" id="time3">
			            </label>
			            <span class="btn">永久</span>
			        </div>       
				</div>
			</div>
		</div>
		<div class="price">
			<div>
				<h1>续租价格</h1>
				<h3 id="mprice"></h3>
			</div>
		</div>
		<div class="add">
			<h1 id="express"></h1>
			<h1 id="Address"></h1>
			<h1 id="along">租期：<span id="ctime"></span> 至 <span id="endtime"></span></h1>
		</div>
		<!--<form action="" method="">-->
		<div class="tijiao">
			<input type="button" class="nowsub" onclick="sub()"; value="提交"/>
		</div>
		<!--</form>-->
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
//添加图片
function addpic(){
	$("#addpic").click(function(){
		
	})
}
//续期时间选择
$(".time_choose label").click(function() {
	
    $(this).next("span").addClass("active");
    $(this).parent().siblings("div").find("span").removeClass("active");
    var rent = $("#rent").val();
    var ctime = sessionStorage.getItem("ctime");
    if($(this).next("span").html()=="永久"){
    	$("#along").hide();
    	$("#mprice").html(parseInt(rent)*365*70);
    }else{
    	if($(this).parent().siblings("div").find("span").html()=="12个月"){
    		$("#endtime").html(getMyEndDate(parseInt(ctime),6));
    		$("#mprice").html(parseInt(rent)*180);
    	}else{
    		$("#endtime").html(getMyEndDate(parseInt(ctime),12));
    		$("#mprice").html(parseInt(rent)*365);
    	}
    	
    	$("#along").show();
    }
    
});

$(function(){
	//userId应从登陆页存入h5
	var userId=sessionStorage.getItem("userId") ;
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
		var rent ="¥"+data[0].rent*180;
		$("#rent").val(data[0].rent);
		if(data[0].termType==12){
			$(".time_choose label").parent().siblings("div").find("span").removeClass("active");
			$(".time_choose label").eq(1).next("span").addClass("active");
			rent = "¥"+data[0].rent*365;
		}else if(data[0].termType==0){
			$(".time_choose label").parent().siblings("div").find("span").removeClass("active");
			$(".time_choose label").eq(2).next("span").addClass("active");
			$("#along").hide();
			rent = "¥"+data[0].rent*365*70;
		}
		$("#mprice").html(rent);
		$("#express").html("收货人："+data[0].userName);
		$("#Address").html("收货地址："+data[0].userAddress);
		sessionStorage.setItem("ctime",data[0].orderCreateTime);
		$("#ctime").html(getMyDate(data[0].orderCreateTime));
		$("#endtime").html(getMyEndDate(data[0].orderCreateTime,data[0].termType));
		
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
			var rent ="¥"+data[0].rent*180;
			$("#rent").val(data[0].rent);
			if(data[0].termType==12){
				$(".time_choose label").parent().siblings("div").find("span").removeClass("active");
				$(".time_choose label").eq(1).next("span").addClass("active");
				rent = "¥"+data[0].rent*365;
			}else if(data[0].termType==0){
				$(".time_choose label").parent().siblings("div").find("span").removeClass("active");
				$(".time_choose label").eq(2).next("span").addClass("active");
				$("#along").hide();
				rent = "¥"+data[0].rent*365*70;
			}
			$("#mprice").html(rent);
			$("#express").html("收货人："+data[0].userName);
			$("#Address").html("收货地址："+data[0].userAddress);
			sessionStorage.setItem("ctime",data[0].orderCreateTime);
			$("#ctime").html(getMyDate(data[0].orderCreateTime));
			$("#endtime").html(getMyEndDate(data[0].orderCreateTime,data[0].termType));
			
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

function getMyEndDate(str,motime){  
	var oDate = new Date(str);
    if(oDate.getMonth()+1+motime-12>0){
    	 oYear = oDate.setFullYear(oDate.getFullYear()+1);
    }
    oYear = oDate.getFullYear();
    oMonth = oDate.setMonth(oDate.getMonth()+motime);
    oMonth = oDate.getMonth()+1;  
    oDay = oDate.getDate();  
	oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay);//最后拼接时间  
    return oTime;  
}; 
function getzf(num){  
    if(parseInt(num) < 10){  
        num = '0'+num;  
    }  
    return num;  
}  


function sub(){
	var url1="<%=request.getContextPath()%>/api/order/saveneworder";
	var orderId = sessionStorage.getItem("orderId");
	var rent =$("#rent").val();
	var mprice =$("#mprice").html();
	var userId=sessionStorage.getItem("userId");
	var termType =6;
	if(mprice/365==rent){
		termType =12;
		sessionStorage.setItem("productStatus","2");
	}
	if(mprice/365/70==rent){
		termType =0;
		sessionStorage.setItem("productStatus","4");
	}
	var queryData = {"jsonStr":"{'orderId':"+orderId+",'termType':"+termType+",'userId':"+userId+"}"}
	$.ajax({
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
	})
}
</script>
	</body>
</html>
