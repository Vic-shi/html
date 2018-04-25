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
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/payment/payment.css"/>
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/wrapperuser.css"/>
		<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
		<title>我的订单</title>
	</head>
	<body style="font-size: 0.25rem;">
	<div>
		<div class="head" style="z-index:999!important;position: relative;border-bottom: 0.8vw solid #ededed;">
			<ul>
				<li class="nav_bottom">全部</li>
				<li>待付款</li>
				<li>待收货</li>
				<li>交易完成</li>
			</ul>
		</div>
		<div id="wrapper" style = "top:6vh">
		<div id="scroller">
		<div id="pullDown" class="loading">
			<span class="pullDownIcon"></span><span class="pullDownLabel">加载中...</span>
		</div>
		<div class="article" id="article">
				<div id = "goHead" style = "display:none;">
		</div>
		</div>
        <div id="pullUp" style="display:none;margin-top:2px">
				<span class="pullUpIcon"></span><span class="pullUpLabel">加载更多...</span>
		</div>
		<div id="noRecord" style="display:none;">
			<span class="no-record-pic"></span>
			<span class="no-msg">我们也是有底线的</span>
		</div> 
		</div>
		</div>
		</div>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/iscroll.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/pullrefresh.js"></script>
<script>
var footer = false; 
var page = 1;
var arr = new Array();
var index = 0;
//导航栏的下滑线
$(".head li").click(function(){
	arr = new Array();
	index = 0;
	$(this).addClass("nav_bottom");
	$(this).siblings().removeClass("nav_bottom");
	//userId应从登陆页存入h5
	var userId=sessionStorage.getItem("userId");
	var url1="<%=request.getContextPath()%>/api/order/listSimpleByStatus";
	var orderStatus;
	$("#article").empty();
	$("#article").append('<div id = "goHead" style = "display:none;">'
			+'</div>');
	pageScroll();
	if($(this).html()=="待付款"){
		orderStatus ="0";
		var queryData = {"jsonStr":"{'userId':"+userId+",'orderStatus':'"+orderStatus+"'}"}
	}else if($(this).html()=="待收货"){
		orderStatus="2";
		var queryData = {"jsonStr":"{'userId':"+userId+",'orderStatus':'"+orderStatus+"'}"}
	}else if($(this).html()=="交易完成"){
		orderStatus ="5";
		var queryData = {"jsonStr":"{'userId':"+userId+",'orderStatus':'"+orderStatus+"'}"}
	}else{
		var queryData = {"jsonStr":"{'userId':"+userId+"}"}
	}
	//orderdetail(url1,queryData);
	pull();
})
$(function(){
	//userId应从登陆页存入h5
	var userId=sessionStorage.getItem("userId");
	var url1="<%=request.getContextPath()%>/api/order/listSimpleByStatus";
	var queryData = {"jsonStr":"{'userId':"+userId+"}"};
	//orderdetail(url1,queryData);
	pull();
}) 
function orderdetail(url1,queryData){
	var param = {
	url: url1,
	data: queryData,
	successCallback: function(msg){
		page++;
		var data =msg.data.listOrder;
		for(var i in data){
			var creatime =getMyDate(data[i].orderCreateTime);
			/* for(var i=0;i<5;i++){*/
			if(data[i].orderStatus=="0"){
				index = parseInt(parseInt(index) + parseInt(i));
				arr[index] = data[i].id;
				
				$("#article").append(
						'<div class="unpaid">'
						+'<ul>'
						+'<li><h1>'+data[i].productName+'&nbsp;作者：'+data[i].productAuthor+'</h1><h2>待付款</h2></li>'
						+'<li>'
						+'	<div class="img_show">'
						+'		<img src='+data[i].productPicture+'>'
						+'	</div>'
						+'	<div class="detail">'
						+'		<h3>'
						+'			订单号码：'+data[i].id+'<br>'
						+'			订单信息：'+data[i].userName+'&nbsp;'+data[i].userMobile+'&nbsp;'+data[i].userAddress+''
						+'		</h3>'
						+'		<h4>¥'+data[i].actualPayment+'</h4>'
						+'	</div>'
						+'</li>'
						+'<li class="time">'
						+'	<h5>'+creatime+'</h5>'
						+' <img src="<%=request.getContextPath()%>/commons/image/client/payment/qxdd.png" width="20%" height="20%" />'
						+' <img  onclick="open_pay('+i+')" src="<%=request.getContextPath()%>/commons/image/client/payment/fk.png" width="20%" height="20%" />'
						/* +'	<input type="button" value="取消订单"/>'
						+'	<input type="submit" value="付款" onclick="open_pay()"/>' */
						+'</li>'
						+'</ul>'
						+'</div>'
				);
				
			}else if(data[i].orderStatus=="2"){
				index = parseInt(parseInt(index) + parseInt(i));
				arr[index] = data[i].id;
				
				$("#article").append(
						'<div class="receiving">'
						+'<ul>'
						+'<li><h1>'+data[i].productName+'&nbsp;作者：'+data[i].productAuthor+'</h1><h2>待收货</h2></li>'
						+'<li>'
						+'	<div class="img_show">'
						+'		<img src='+data[i].productPicture+'>'
						+'	</div>'
						+'	<div class="detail">'
						+'		<h3>'
						+'			订单号码：'+data[i].id+'<br>'
						+'			订单信息：'+data[i].userName+'&nbsp;'+data[i].userMobile+'&nbsp;'+data[i].userAddress+''
						+'		</h3>'
						+'		<h4>¥'+data[i].actualPayment+'</h4>'
						+'	</div>'
						+'</li>'
						+'<li class="time">'
						+'	<h5>'+creatime+'</h5>'
						/* +'	<input type="submit" value="确认收货"  onclick="qrsh('+i+')"/>' */
						+' <img onclick="qrsh('+i+')" src="<%=request.getContextPath()%>/commons/image/client/payment/qrsh.png" width="20%" height="20%" />'
						+'</li>'
						+'</ul>'
						+'</div>'
				
				);
				
			}else if(data[i].orderStatus=="5"){
				index = parseInt(parseInt(index) + parseInt(i));
				arr[index] = data[i].id;
				
				var infor =
					'<div class="accomplish">'
					+'<ul>'
					+'<li><h1>'+data[i].productName+'&nbsp;作者：'+data[i].productAuthor+'</h1><h2>交易完成</h2></li>'
					+'<li>'
					+'	<div class="img_show">'
					+'		<img src='+data[i].productPicture+'>'
					+'	</div>'
					+'	<div class="detail">'
					+'		<h3>'
					+'			订单号码：'+data[i].id+'<br>'
					+'			订单信息：'+data[i].userName+'&nbsp;'+data[i].userMobile+'&nbsp;'+data[i].userAddress+''
					+'		</h3>'
					+'		<h4>¥'+data[i].actualPayment+'</h4>';
				if(data[i].isOverdue!=true){
					infor = infor+'<h6>已逾期</h6>';
				}
				infor = infor  
				+'	</div>'
				+'</li>'
				+'<li class="time">'
				+'	<h5>'+creatime+'</h5>';
				if(data[i].termType==0){
					infor = infor 
					+' <img onclick="" src="<%=request.getContextPath()%>/commons/image/client/payment/scdd.png" width="20%" height="20%" />';
					/* +'	<input type="button" value="删除订单"/>'; */
				}
				if(data[i].orderUpdateStatus==0){
					infor = infor 
					+' <img onclick="open_adjustment('+i+')" src="<%=request.getContextPath()%>/commons/image/client/payment/jd.png" width="20%" height="20%" />'
					+' <img onclick="open_return('+i+')" src="<%=request.getContextPath()%>/commons/image/client/payment/tzdd.png" width="20%" height="20%" />'
					/* + '<input type="submit" value="结单" onclick="open_adjustment('+i+')"/>'
					+ '<input type="submit" value="调整订单" onclick="open_return('+i+')"/>'; */
				}else{
					infor = infor 
					+' <img  src="<%=request.getContextPath()%>/commons/image/client/payment/tzddz.png" width="23%" height="23%" />';
					/* + '<input type="button" value="调整订单中" disabled="disabled"/>'; */
				}
				infor = infor +'</li>'+'</ul>'+'</div>';
				$("#article").append(infor);
				
			}
		}
	},
	errorCallBack:function() {
		console.log("ssssss");
	}
	}
getDataFromServer(param);		
	
	/* $.ajax({
		url:url1,
		type:'post',
		data:queryData,
		success:function(msg){
			
		},
		error:function(){
			console.log("ssssss");
		}
	}) */
}
//打开付款界面
function open_pay(t){
	var orderId = arr[t];
	console.log(arr);
	sessionStorage.setItem("orderId",orderId);
	window.open("<%=request.getContextPath()%>/client/payment/pay_method.jsp","_self"); 
}
//打开结单界面
function open_adjustment(t){
	var orderId = arr[t];
	console.log(arr);
	sessionStorage.setItem("orderId",orderId);
	window.open("<%=request.getContextPath()%>/client/payment/adjustment.jsp","_self");
}
//打开订单调整界面，默认为还画
function open_return(t){
	var orderId = arr[t];
	console.log(arr);
	sessionStorage.setItem("orderId",orderId);
	window.open("<%=request.getContextPath()%>/client/payment/return.jsp","_self"); 
}

function qrsh(t){
	var url1="<%=request.getContextPath()%>/api/order/saveneworder";
	var orderId = arr[t];
	var orderStatus = "5";
	var queryData = {"jsonStr":"{'orderId':"+orderId+",'orderStatus':'"+orderStatus+"','userId':"+userId+"}"};
	console.log(queryData);
	$.ajax({
		url:url1,
		type:'post',
		data:queryData,
		success:function(msg){
			history.go(0);
		},
		error:function(){
			console.log("ssssss");
		}
	})
}
//上拉
var pullUp = function() {
	if(footer==true){
		document.getElementById('noRecord').innerHTML = "showType";
		myScroll.refresh();
		return false;
	}
	pull();
}
// 下拉
var pullDown = function() {
	page=1;
	start = 0;
	footer = false;
	document.getElementById('noRecord').innerHTML = "noShowType";
	$("#article").empty();
	arr = new Array();
	index = 0;
	pull();
}
//拉取数据
var pull = function(queryData){
	var userId=sessionStorage.getItem("userId");
	
	var orderStatus;
	if($(".nav_bottom").html()=="待付款"){
		orderStatus ="0";
		var queryData = {"jsonStr":"{'pageNo':"+page+",'listLen':10,'userId':"+userId+",'orderStatus':'"+orderStatus+"'}"}
	}else if($(".nav_bottom").html()=="待收货"){
		orderStatus="2";
		var queryData = {"jsonStr":"{'pageNo':"+page+",'listLen':10,'userId':"+userId+",'orderStatus':'"+orderStatus+"'}"}
	}else if($(".nav_bottom").html()=="完成交易"){
		orderStatus ="5";
		var queryData = {"jsonStr":"{'pageNo':"+page+",'listLen':10,'userId':"+userId+",'orderStatus':'"+orderStatus+"'}"}
	}else{
		var queryData = {"jsonStr":"{'pageNo':"+page+",'listLen':10,'userId':"+userId+"}"}
	}
	
	var param = {
	url: "<%=request.getContextPath()%>/api/order/listSimpleByStatus",
	data: queryData,
	successCallback: function(msg){
		if(msg.data==null){
			return null;   				
			}
			var data =msg.data.listOrder;
			if(data.length>0){
		/* 	var datas = data.data.draw;
			if(page * 10 > data.data.page.totalCount){
				footer = true;
			} */
			//判断是否为最后一页 ;
			//datas.date.draw < size ? footer = true : start ++;
			//是否有数据
			if(page*10>msg.data.page.totalCount){
				footer = true;
			}
			data.length == 0 ? $("#noRecord").show() : $("#noRecord").hide();
			//$(".am-avg-sm-2").empty();
			var li='',l='';
			page++;
			for(var i in data){                                                                                                                                                                                                      
				var creatime =getMyDate(data[i].orderCreateTime);
			/* for(var i=0;i<5;i++){ */
				if(data[i].orderStatus=="0"){
					index = parseInt(parseInt(index) + parseInt(i));
					arr[index] = data[i].id;
					
					$("#article").append(
							'<div class="unpaid">'
							+'<ul>'
							+'<li><h1>'+data[i].productName+'&nbsp;作者：'+data[i].productAuthor+'</h1><h2>待付款</h2></li>'
							+'<li>'
							+'	<div class="img_show">'
							+'		<img src='+data[i].productPicture+'>'
							+'	</div>'
							+'	<div class="detail">'
							+'		<h3>'
							+'			订单号码：'+data[i].id+'<br>'
							+'			订单信息：'+data[i].userName+'&nbsp;'+data[i].userMobile+'&nbsp;'+data[i].userAddress+''
							+'		</h3>'
							+'		<h4>¥'+data[i].actualPayment+'</h4>'
							+'	</div>'
							+'</li>'
							+'<li class="time">'
							+'	<h5>'+creatime+'</h5>'
							+'	<input type="button" value="取消订单"/>'
							+' <img onclick="open_pay('+index+')" src="<%=request.getContextPath()%>/commons/image/client/payment/fk.png" width="20%" height="20%" />'
							/* +'	<input type="submit" value="付款" onclick="open_pay()"/>' */
							+'</li>'
							+'</ul>'
							+'</div>'
					);
					
				}else if(data[i].orderStatus=="2"){
					index = parseInt(parseInt(index) + parseInt(i));
					arr[index] = data[i].id;
					
					$("#article").append(
							'<div class="receiving">'
							+'<ul>'
							+'<li><h1>'+data[i].productName+'&nbsp;作者：'+data[i].productAuthor+'</h1><h2>待收货</h2></li>'
							+'<li>'
							+'	<div class="img_show">'
							+'		<img src='+data[i].productPicture+'>'
							+'	</div>'
							+'	<div class="detail">'
							+'		<h3>'
							+'			订单号码：'+data[i].id+'<br>'
							+'			订单信息：'+data[i].userName+'&nbsp;'+data[i].userMobile+'&nbsp;'+data[i].userAddress+''
							+'		</h3>'
							+'		<h4>¥'+data[i].actualPayment+'</h4>'
							+'	</div>'
							+'</li>'
							+'<li class="time">'
							+'	<h5>'+creatime+'</h5>'
							+' <img onclick="qrsh('+index+')" src="<%=request.getContextPath()%>/commons/image/client/payment/qrsh.png" width="20%" height="20%" />'
							/* +'	<input type="submit" value="确认收货"  onclick="qrsh('+index+')"/>' */
							+'</li>'
							+'</ul>'
							+'</div>'
					
					);
					
				}else if(data[i].orderStatus=="5"){
					index =parseInt(parseInt(index) + parseInt(i));
					arr[index] = data[i].id;
					
					var infor =
						'<div class="accomplish">'
						+'<ul>'
						+'<li><h1>'+data[i].productName+'&nbsp;作者：'+data[i].productAuthor+'</h1><h2>交易完成</h2></li>'
						+'<li>'
						+'	<div class="img_show">'
						+'		<img src='+data[i].productPicture+'>'
						+'	</div>'
						+'	<div class="detail">'
						+'		<h3>'
						+'			订单号码：'+data[i].id+'<br>'
						+'			订单信息：'+data[i].userName+'&nbsp;'+data[i].userMobile+'&nbsp;'+data[i].userAddress+''
						+'		</h3>'
						+'		<h4>¥'+data[i].actualPayment+'</h4>';
					if(data[i].isOverdue!=true){
						infor = infor+'<h6>已逾期</h6>';
					}
					infor = infor  
					+'	</div>'
					+'</li>'
					+'<li class="time">'
					+'	<h5>'+creatime+'</h5>';
					if(data[i].termType==0){
						infor = infor 
						+' <img onclick="" src="<%=request.getContextPath()%>/commons/image/client/payment/scdd.png" width="20%" height="20%" />';
						/* +'	<input type="button" value="删除订单"/>'; */
					}
					if(data[i].orderUpdateStatus==0){
						infor = infor 
						+' <img onclick="open_adjustment('+index+')" src="<%=request.getContextPath()%>/commons/image/client/payment/jd.png" width="20%" height="20%" />'
						+' <img onclick="open_return('+index+')" src="<%=request.getContextPath()%>/commons/image/client/payment/tzdd.png" width="20%" height="20%" />'
						/* + '<input type="submit" value="结单" onclick="open_adjustment('+index+')"/>'
						+ '<input type="submit" value="调整订单" onclick="open_return('+index+')"/>'; */
					}else{
						infor = infor 
						+' <img  src="<%=request.getContextPath()%>/commons/image/client/payment/tzddz.png" width="23%" height="23%" />';
						/* + '<input type="button" value="调整订单中" disabled="disabled"/>'; */
					}
					infor = infor +'</li>'+'</ul>'+'</div>';
					$("#article").append(infor);
					
				}
			}
			myScroll.refresh();
			document.getElementById('noRecord').innerHTML = "noShowType";
			}else{
				document.getElementById('noRecord').innerHTML = "showType"
			}
	},
	errorCallBack: function() {
		console.log("ssssss");
	}
	}
getDataFromServer(param);
	
	<%-- $.ajax({
		url:"<%=request.getContextPath()%>/api/order/listSimpleByStatus",
   		dataType:'json',
		data:queryData,
		type:'post',
   		success:function(msg){
   			
   		}
   			
   	}); --%>
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
function pageScroll(){
/*     //把内容滚动指定的像素数（第一个参数是向右滚动的像素数，第二个参数是向下滚动的像素数）
    window.scrollBy(0,-100);
    //延时递归调用，模拟滚动向上效果
    scrolldelay = setTimeout('pageScroll()',100);
    //获取scrollTop值，声明了DTD的标准网页取document.documentElement.scrollTop，否则取document.body.scrollTop；因为二者只有一个会生效，另一个就恒为0，所以取和值可以得到网页的真正的scrollTop值
    var sTop=document.documentElement.scrollTop+document.body.scrollTop;
    //判断当页面到达顶部，取消延时代码（否则页面滚动到顶部会无法再向下正常浏览页面）
    if(sTop==0) clearTimeout(scrolldelay); */
	document.querySelector("#goHead").scrollIntoView();
}



</script>
	</body>
</html>
