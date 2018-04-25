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
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/my/lease.css"/>
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/wrapperuser.css"/>
		<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
		<title>我的租赁</title>
	</head>
	<body style="font-size: 0.25rem;">
			<div id="wrapper">
		<div id="scroller">
		<div id="pullDown" class="loading">
			<span class="pullDownIcon"></span><span class="pullDownLabel">加载中...</span>
		</div>
		<div class="article" id="article">
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
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/iscroll.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/pullrefresh.js"></script>
<script>
var footer = false; 
var page = 1;
var arr = new Array();
var index = 0;
//导航栏的下滑线
$(".head li").click(function(){
	$(this).addClass("nav_bottom");
	$(this).siblings().removeClass("nav_bottom");
})
$(function(){
	//userId应从登陆页存入h5
	var userId=sessionStorage.getItem("userId");
	var url1="<%=request.getContextPath()%>/api/payorder/listOrder";
	var queryData = {"jsonStr":"{'userId':"+userId+",'orderStatus':10}"}
	//orderdetail(url1,queryData);
	pull();
}) 
function orderdetail(url1,queryData){
	$.ajax({
		url:url1,
		type:'post',
		data:queryData,
		success:function(msg){
			page++;
			var data =msg.data;
			for(var i in data){ 
					index = parseInt(parseInt(index) + parseInt(i));
					arr[index] = data[i].id;
					var infor =
						'<div class="accomplish">'
						+'<ul>'
						+'<li><h1>'+data[i].originalProductName+'&nbsp;作者：'+data[i].originalProductAuthor+'</h1><h2>交易完成</h2></li>'
						+'<li>'
						+'	<div class="img_show">'
						+'		<img src='+data[i].originalProductPicture+'/>'
						+'	</div>'
						+'	<div class="detail">'
						+'		<h3>'
						+'			订单号码：'+data[i].id+'<br>'
						+'			订单信息：'+data[i].userName+'&nbsp;'+data[i].userMobile+'&nbsp;'+data[i].userAddress+''
						+'		</h3>'
						+'		<h4>¥'+data[i].orderTotalValue+'</h4>';
					if(data[i].isOverdue!=true){
						infor = infor+'<h6>已逾期</h6>';
					}
					infor = infor  
					+'	</div>'
					+'</li>'
					+'<li class="time">'
					+'	<h5>'+data[i].orderCreateTime+'</h5>';
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
		},
		error:function(){
			console.log("ssssss");
		}
	})
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
	$.ajax({
		url:"<%=request.getContextPath()%>/api/payorder/listOrder",
   		dataType:'json',
		data:{"jsonStr":"{'pageNo':"+page+",'listLen':10,'draw':1,'userId':"+userId+",'orderStatus':10}"},
		type:'post',
   		success:function(data){
   			if(data.data.length>0){
			/* 	var datas = data.data.draw;
				if(page * 10 > data.data.page.totalCount){
					footer = true;
				} */
				//判断是否为最后一页 ;
				//datas.date.draw < size ? footer = true : start ++;
				//是否有数据
				footer = true;
				data.data.length == 0 ? $("#noRecord").show() : $("#noRecord").hide();
				//$(".am-avg-sm-2").empty();
				var li='',l='';
				page++;
				if(page == 2){
				var data =data.data;
				for(var i in data){ 
						index =parseInt(parseInt(index) + parseInt(i));
						arr[index] = data[i].id;
						
						var infor =
							'<div class="accomplish">'
							+'<ul>'
							+'<li><h1>'+data[i].originalProductName+'&nbsp;作者：'+data[i].originalProductAuthor+'</h1><h2>交易完成</h2></li>'
							+'<li>'
							+'	<div class="img_show">'
							+'		<img src='+data[i].originalProductPicture+'/>'
							+'	</div>'
							+'	<div class="detail">'
							+'		<h3>'
							+'			订单号码：'+data[i].id+'<br>'
							+'			订单信息：'+data[i].userName+'&nbsp;'+data[i].userMobile+'&nbsp;'+data[i].userAddress+''
							+'		</h3>'
							+'		<h4>¥'+data[i].orderTotalValue+'</h4>';
						if(data[i].isOverdue!=true){
							infor = infor+'<h6>已逾期</h6>';
						}
						infor = infor  
						+'	</div>'
						+'</li>'
						+'<li class="time">'
						+'	<h5>'+data[i].orderCreateTime+'</h5>';
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
				myScroll.refresh();
				document.getElementById('noRecord').innerHTML = "noShowType";
				}else{
					document.getElementById('noRecord').innerHTML = "showType"
				}
			}
   		}
   	});
}
</script>
	</body>
</html>
