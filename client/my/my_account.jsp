<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>我的账户</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/my/my_account.css" >
<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
</head>
<body>
	<div>
		<div class="all input_div">
			<div>手机号码</div><div><input type="text" class="photo" placeholder="请输入手机号码" maxlength="11" oninput="pho()"></div>
			<div><img class="er1" style="width: 3.2vw;opacity: 0;" src="<%=request.getContextPath()%>/commons/image/client/my/error.png"></div>
			<div><input type="button" class="verify" value="获取验证码" ></div>
		</div>
		<div class="all input_div">
			<div>手机验证<input type="text" class="photo_verify myinput" placeholder="请输入手机验证码" oninput="ver()"></div>
			<div><img class="er2" style="width: 3.2vw;opacity: 0;" src="<%=request.getContextPath()%>/commons/image/client/my/error.png"></div>
		</div>
		<div class="all input_div">
			<div>账户姓名<input type="text" class="name myinput" placeholder="请输入姓名"></div>
			<div><img class="er3" style="width: 3.2vw;opacity: 0;" src="<%=request.getContextPath()%>/commons/image/client/my/error.png"></div>
		</div>
		<div class="all input_div">
			<div>提现金额<input type="text" class="money myinput" placeholder="￥" oninput="mon()"></div>
			<div><img class="er4" style="width: 3.2vw;opacity: 0;" src="<%=request.getContextPath()%>/commons/image/client/my/error.png"></div>
		</div>
		<div class="input_div" style="margin: 0.5rem 0.5rem;">余额￥<span class="balance">1000</span></div>
	</div>
	<div class="check_div all">
		<input type="button" class="check_add" onclick="atOnce()" value="立即提现">
	</div>
	<script type="text/javascript">
		//立即提现
		function atOnce(){
			console.log(1);
		}
		//判断输入的手机号码
		function pho(){
			var num=$('.photo').val();
			if(!(/^1[34578]\d{9}$/.test(num))){
				$('.er1').css("opacity",1);
				return false;
			}else{
				$('.er1').css("opacity",0);
				return true;
			}
		}
		//判断验证码
		function ver(){
			var num=$('.photo_verify').val();
			console.log(num);
			console.log(pho());
		}
		//提现输入控制
		function mon(){
			var sum=$('.balance').html();
			var money=$('.money').val();
			if(money===''){
				$('.er4').css("opacity",0);
				return true;
			}
			if(parseInt(money)<parseInt(sum) && money>=0 && !isNaN(money)){
				$('.er4').css("opacity",0);
				return true;
			}else{
				$('.er4').css("opacity",1);
				return false;
			}
		}
	</script>
</body>
</html>