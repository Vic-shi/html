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
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/my/my_index.css"/>
		<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
		<title>我的</title>
	</head>
	<body>
		<div class="head">
			<div id="user_img">
				<img id = "imgAdress"/>
			</div>
			<div id="user_name">理查德</div>
		</div>
		<div class="article">
			<ul>
				<li>
					<a href="<%=request.getContextPath()%>/client/my/site.jsp"><img src="<%=request.getContextPath()%>/commons/image/client/my/add.png" alt="地址" />管理收货地址</a>
				</li>
				<li>
					<a href="<%=request.getContextPath()%>/client/payment/payment.jsp"><img src="<%=request.getContextPath()%>/commons/image/client/my/order.png" alt="订单" />我的订单</a>
				</li>
				<li>
					<a href="<%=request.getContextPath()%>/client/my/collect.jsp"><img src="<%=request.getContextPath()%>/commons/image/client/my/collection.png" alt="收藏" />收藏</a>
				</li>
				<li>
					<a href="<%=request.getContextPath()%>/client/my/account.jsp"><img src="<%=request.getContextPath()%>/commons/image/client/my/acount.png" alt="账户" />余额</a>
				</li>
				<li>
					<a href="<%=request.getContextPath()%>/client/my/strategy.jsp"><img src="<%=request.getContextPath()%>/commons/image/client/my/raiders.png" alt="攻略" />共享攻略</a>
				</li>
				<li>
					<a href="<%=request.getContextPath()%>/client/my/lease.jsp"><img src="<%=request.getContextPath()%>/commons/image/client/my/rent.png" alt="租赁" />我的租赁</a>
				</li>
				<li style="border-bottom: 0;">
					<a href="<%=request.getContextPath()%>/client/my/aboutUs.jsp"><img src="<%=request.getContextPath()%>/commons/image/client/my/about.png" alt="关于" />关于共享书画</a>
				</li>
			</ul>
		</div>
		<div>客服电话：98799877</div>
		<div class="menu">
			<a href="<%=request.getContextPath()%>/client/index/index.jsp">
				<img src="<%=request.getContextPath()%>/commons/image/client/index/home.png">
				首页
			</a>
			<a href="<%=request.getContextPath()%>/client/gallery/gallery.jsp">
				<img src="<%=request.getContextPath()%>/commons/image/client/index/gallery.png">
				画廊
			</a>
			<a href="<%=request.getContextPath()%>/client/my/my_index.jsp" style="color: #fea427;">
				<img src="<%=request.getContextPath()%>/commons/image/client/index/myin.png">
				我的
			</a>
		</div>
		<script src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
		<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
		<script>
		(function($){
			var userId = sessionStorage.getItem('userId');
			userId  = 5;
			var param = {
			url: "<%=request.getContextPath()%>/api/user/selectById",
			method :'POST',
			data:{'userId':userId},
				successCallback: function(data){
					console.log("成功");
					$("#user_name")[0].innerHTML = data.data.nickName;
					document.getElementById("imgAdress").src = data.data.avatarAddress;
			},
				errorCallBack: function(data) {
					console.log("失败");
			}
			}
			getDataFromServer(param);
		})(jQuery);
		</script>
	</body>
</html>
