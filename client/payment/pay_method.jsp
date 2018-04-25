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
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/payment/pay_method.css" />
		<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
		
		<script type="text/javascript" src="http://code.jquery.com/jquery-1.4.2.min.js"></script>
    	<script type="text/javascript" src="http://res.wx.qq.com/open/js/jweixin-1.0.0.js"></script>
    	<script src="<%=request.getContextPath()%>/lib/control/js/jquery-1.7.2.js"></script>
    	<script type="text/javascript" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
		<title>支付</title>
	</head>
	<body>
		<div>
			<div>
				<h2 id="paytime">支付剩余时间： <span id="minute_show"></span><span id="second_show"></span></h2>
			</div>
		</div>
		<div>
			<h1>订单名：  <span id="product"></span></h1>
			<h1>订单金：  <span id="yprice"></span></h1>
		</div>
		<div>
			<h1>要支付：  <span class="pay_price" id="nprice"></span></h1>
		</div>
		<div>
			<div>
				<label for="method1" class="choose1">微信支付</label>
				<input type="radio" name="method" id="method1" value="weixin" />
			</div>
		</div>
		<!-- <div>
			<div>
				<label for="method2">支付宝支付</label>
				<input type="radio" name="method" id="method2" value="zhifubao" />
			</div>
		</div> -->
		<div style="height:100vw">
			<input type="submit"  id="sub" value="确认支付"/>
		</div>
<script type="text/javascript">
//改变单选选择的颜色
/* $('label[for="method1"]').click(function(){
	$(this).toggleClass("choose1");
	 $('label[for="method2"]').removeClass("choose2");
	
}) */
/* $('label[for="method2"]').click(function(){
	$(this).addClass("choose2");
	$('label[for="method1"]').removeClass("choose1");
}) */
//支付剩余时间倒计时
$(function () {
	var openid = sessionStorage.getItem("openid");
	var orderId = sessionStorage.getItem("orderId")==null?"0":sessionStorage.getItem("orderId");
/* 	var curWwwPath=window.document.location.href;
	curWwwPath = curWwwPath.substring(-1,24);
	var url = curWwwPath+"/api/payorder/listOrderByUserid"; */
	var url1="<%=request.getContextPath()%>/api/payorder/listOrderByUserid";
	console.log(orderId);
	var queryData = {"jsonStr":"{'orderId':"+orderId+"}"};
	var param = {
		url: url1,
		data: queryData,
		successCallback: function(msg){
			console.log(msg);
			var data = msg.data;
			var urlTmp = shareUrlParamsFilter(window.location.href);
			var originalProductName = data[0].originalProductName==null?"":data[0].originalProductName;
			var originalProductAuthor = data[0].originalProductAuthor==null?"":data[0].originalProductAuthor;
			var fee = data[0].actualPayment==null?"0":data[0].actualPayment;
			var originalProductId = data[0].originalProductId==null?"":data[0].originalProductId;
			
			$("#product").html(originalProductName+"&nbsp;作者："+originalProductAuthor); 
			$("#yprice").html("¥"+fee);
			$("#nprice").html("¥"+fee);
			var orderCreateTime =data[0].orderCreateTime ==null?"1509605958000":data[0].orderCreateTime;
			console.log(orderCreateTime);
			var timestamp2 = ( new Date()).valueOf();
			var time = parseInt(timestamp2) - parseInt(orderCreateTime);
			
			
			if(1800 - time/1000 < 0){
				$("#paytime").html("支付超时");
			}else{
			 var intDiff = parseInt(1800 - time/1000);  //倒计时总秒数量，到时可以从数据库拿一个定值
			    function timer(intDiff) {
			        window.setInterval(function () {//调用循环函数
			            var day = 0,
			                hour = 0,
			                minute = 0,
			                second = 0;//时间默认值
			            if (intDiff > 0) {
			               //计算相关的天，小时，还有分钟，以及秒
			       			day = Math.floor(intDiff / (60 * 60 * 24)); //本次情况，day=0
			      			hour = Math.floor(intDiff / (60 * 60)) - (day * 24);//本次情况hour=0
			     			minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);//minute=30
			  				second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);//second=0
			            }
			            if (minute <= 9) minute = '0' + minute;//转换成2位数的字符串
			            if (second <= 9) second = '0' + second;
//			                  $('#day_show').html(day + "天");
//			                  $('#hour_show').html('<s id="h"></s>' + hour + '时');
			            $('#minute_show').html(minute + '分');
			            $('#second_show').html(second + '秒');
			            intDiff--;
			        }, 1000,function(){
			        	
			        });
					//判断倒计时是否为0
//					if($('#minute_show').text() =='00分' &&  $('#second_show').text() =='00秒'){
//			          $("#tijiao").remove();
//			      	clearInterval();
//			      }
			    }
			    timer(intDiff);
			}
		    $("#sub").click(function(){
		        submit(originalProductId,originalProductName,orderId,fee);
		    });
		    
			
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
			console.log(msg);
			var data = msg.data;
			var urlTmp = shareUrlParamsFilter(window.location.href);
			var originalProductName = data[0].originalProductName==null?"":data[0].originalProductName;
			var originalProductAuthor = data[0].originalProductAuthor==null?"":data[0].originalProductAuthor;
			var fee = data[0].actualPayment==null?"0":data[0].actualPayment;
			var originalProductId = data[0].originalProductId==null?"":data[0].originalProductId;
			
			$("#product").html(originalProductName+"&nbsp;作者："+originalProductAuthor); 
			$("#yprice").html("¥"+fee);
			$("#nprice").html("¥"+fee);
			var orderCreateTime =data[0].orderCreateTime ==null?"1509605958000":data[0].orderCreateTime;
			console.log(orderCreateTime);
			var timestamp2 = ( new Date()).valueOf();
			var time = parseInt(timestamp2) - parseInt(orderCreateTime);
			
			
			if(1800 - time/1000 < 0){
				$("#paytime").html("支付超时");
			}else{
			 var intDiff = parseInt(1800 - time/1000);  //倒计时总秒数量，到时可以从数据库拿一个定值
			    function timer(intDiff) {
			        window.setInterval(function () {//调用循环函数
			            var day = 0,
			                hour = 0,
			                minute = 0,
			                second = 0;//时间默认值
			            if (intDiff > 0) {
			               //计算相关的天，小时，还有分钟，以及秒
			       			day = Math.floor(intDiff / (60 * 60 * 24)); //本次情况，day=0
			      			hour = Math.floor(intDiff / (60 * 60)) - (day * 24);//本次情况hour=0
			     			minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);//minute=30
			  				second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);//second=0
			            }
			            if (minute <= 9) minute = '0' + minute;//转换成2位数的字符串
			            if (second <= 9) second = '0' + second;
//			                  $('#day_show').html(day + "天");
//			                  $('#hour_show').html('<s id="h"></s>' + hour + '时');
			            $('#minute_show').html(minute + '分');
			            $('#second_show').html(second + '秒');
			            intDiff--;
			        }, 1000,function(){
			        	
			        });
					//判断倒计时是否为0
//					if($('#minute_show').text() =='00分' &&  $('#second_show').text() =='00秒'){
//			          $("#tijiao").remove();
//			      	clearInterval();
//			      }
			    }
			    timer(intDiff);
			}
		    $("#sub").click(function(){
		        submit(originalProductId,originalProductName,orderId,fee);
		    });
		    
			
		},
		error:function(){
			console.log("ssssss");
		}
	}) */
	
	
	
    
})

function shareUrlParamsFilter(s) {  
    // 过滤掉pay，openId参数  
    return s.replace(/&pay=\w+/, "").replace(/[(\?)|(&)]openId=.*/, "");  
} 

function S4() {
	return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
}
function guid() {
	return (S4()+S4()+S4()+S4()+S4()+S4()+S4()+S4());
}
function submit(originalProductId,originalProductName,orderId,fee){
	var trade_no = guid();
    $.ajax({
        type: 'POST',
        url: '<%=request.getContextPath()%>/client/payfor/getJSSDKPayInfo',
        data: {'originalProductId':originalProductId,'body':originalProductName,'order_id':orderId,'trade_no':trade_no,'total_fee':fee},
        success: function(map){
        if(map==null){
        	alert(map.ERROR);
        }else{
        	var appId=map.appId;
            var timeStamp=map.timeStamp;
            var nonceStr=map.nonceStr;
            var package=map.package;
            var paySign=map.paySign;
            WeixinJSBridge.invoke(
                    'getBrandWCPayRequest', {
                        "appId":appId,     //公众号名称，由商户传入
                        "timeStamp":timeStamp,         //时间戳，自1970年以来的秒数
                        "nonceStr":nonceStr, //随机串
                        "package":package,
                        "signType":"MD5",         //微信签名方式：
                        "paySign":paySign //微信签名
                    },
                    function(res){
                        WeixinJSBridge.log(res.err_msg);
                        if(res.err_msg == "get_brand_wcpay_request:ok"){
                            <!--支付成功调用-->
                            <!--history.go(0);   -->
                            window.location.href="<%=request.getContextPath()%>/client/payfor/PayForResult?msg=success&trade_no=trade_no&order_id=orderId";
                        }else if(res.err_msg == "get_brand_wcpay_request:cancel"){
                            <!--取消支付调用-->
                            alert("取消");
                        }else{
                            <!--支付失败-->
                            //alert("失败");

                        }
                    }
            );
        }
        
    } ,
        dataType: "json"});

}

</script>
	</body>
</html>
