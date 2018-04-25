<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>我的账户</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/my/account.css" >
</head>
<body>
	<div class="money">
		<img alt="" src="<%=request.getContextPath()%>/commons/image/client/my/withdraw.png" style="width: 40vw;">
		<div style="font-size: 0.4rem;margin: 4vw 0;">余额</div>
		<div class="much"></div>
	</div>
<!-- 	<div class="check_div all">
		<input type="button" class="check_add" onclick="withdraw()" value="提现">
		<input type="button" onclick="createCookie('art_sharing_token','123456789',20)" value="1"/>
		<input type="button" onclick="createCookie('art_sharing_userId','987654321',20)" value="2"/>
		<input type="button" onclick="createCookie('art_sharing_isLogin','true',20)" value="3"/>
		<input type="button" onclick="getData()" value="测试"/>
	</div> -->
	<script type="text/javascript">
		//提现
		function withdraw(){
			window.location.href="<%=request.getContextPath()%>/client/my/my_account.jsp";
		}
	</script>
	
	<div>
		
	</div>
	
	<script>
	var userId = sessionStorage.getItem('userId');
	userId = 5;
	$(function() {
		$.ajax({
			type : "POST",
			url : "<%=request.getContextPath()%>/api/user/getAccountBalance",
			dataType : "json",
			data:{'userId':userId},
			success : function(data) {
				var money = data.data;
				money = money.toString();
				var moneyLength = money.length;
				var tmp=money.substring(0, moneyLength-2);
				tmp = tmp +"."+"00";
				$(".much")[0].innerHTML = "￥"+tmp;
			}
		});
	});
	
		function createCookie(name,value,days) {
		    var expires = "";
		    if (days) {
		        var date = new Date();
		        date.setTime(date.getTime() + (days*24*60*60*1000));
		        expires = "; expires=" + date.toUTCString();
		    }
		    document.cookie = name + "=" + value + expires + "; path=/";
		}
		
		
		function getData (){
			getDataFromServer('get','123','123',
				function () {
					console.log('ok');
				},function(){
					console.log('fail');
				}
			);
		}
	</script>
</body>
</html>