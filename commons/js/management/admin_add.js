(function($){
	$(window).load(function(){
		$("a[rel='load-content']").click(function(e){
			e.preventDefault();
			var url=$(this).attr("href");
			$.get(url,function(data){
				$(".content .mCSB_container").append(data); //load new content inside .mCSB_container
				//scroll-to appended content 
				$(".content").mCustomScrollbar("scrollTo","h2:last");
			});
		});
		$(".content").delegate("a[href='top']","click",function(e){
			e.preventDefault();
			$(".content").mCustomScrollbar("scrollTo",$(this).attr("href"));
		});
	});
	$(".return").click(function(){
		window.location.href="/web/management/platform/user/admin_list.jsp";
	});
})(jQuery);
$("#adminName").keydown(function(){
	var code = event.keyCode;
	if(code == 13){
		if($("#adminName").val()==""){
			$('#error').html("请输入账号");
			$("#adminName").focus();
		}else{
			$("#password").focus();
			$('#error').html("");
		}
	}
});
$("#password").keydown(function(){
	var code = event.keyCode;
	if(code == 13){
		if($("#password").val()==""){
			$('#error').html("请输入密码");
			$("#password").focus();
			console.log($("#password").val().length);
		}else if($("#password").val().length<6){
			$('#error').html("密码大于6位数");
		}else{
			$("#passwordConfirm").focus();
			$('#error').html("");
		}
	}
});
$("#passwordConfirm").keydown(function(){
	var code = event.keyCode;
	if(code == 13){
		if($("#passwordConfirm").val()==""){
			$('#error').html("请输入确认密码");
			$("#passwordConfirm").focus();
		}else if($("#passwordConfirm").val()!=$("#password").val()){
			$('#error').html("两次密码不一致");
			$("#passwordConfirm").focus();
			$("#passwordConfirm").val("");
		}else{
			$("#phoneNumber").focus();
			$('#error').html("");
		}
	}
});
$("#phoneNumber").keydown(function(){
	var code = event.keyCode;
	var pattern = /^1[34578]\d{9}$/;
	if(code == 13){
		if($("#phoneNumber").val()==""){
			$('#error').html("请输入手机号码");
			$("#phoneNumber").focus();
		}else if(!pattern.test($("#phoneNumber").val())){
			$('#error').html("手机号码有误");
		}else{
			$("#email").focus();
			$('#error').html("");
		}
	}
});
$("#email").keydown(function(){
	var code = event.keyCode;
	var em = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	if(code == 13){
		if($("#email").val()==""){
			$('#error').html("请输入邮箱");
			$("#email").focus();
		}else if(!em.test($("#email").val())){
			$('#error').html("请输入正确的邮箱格式");
			$("#email").focus();
		}else{
			$('#error').html("");
			save();
		}
	}
});
function save(){
	//var dateMap = new Map();
	var adminName = $("#adminName")[0].value.trim();  
	var password = $("#password")[0].value.trim(); 
	var passwordConfirm = $("#passwordConfirm")[0].value.trim();
	var phoneNumber = $("#phoneNumber")[0].value.trim();
	var email = $("#email")[0].value.trim();
	var pattern = /^1[34578]\d{9}$/;
	if(adminName==""){
		$('#error').html("请输入账号");
		$("#adminName").focus();
		return false;
	}
	if(password==""){
		$('#error').html("请输入密码");
		$("#password").focus();
		return false;
	}
	if(passwordConfirm==""){
		$('#error').html("请输入确认密码");
		$("#passwordConfirm").focus();
		return false;
	}
	if(passwordConfirm!=password){
		$('#error').html("两次密码不一致");
		$("#passwordConfirm").focus();
		$("#passwordConfirm").val("");
		return false;
	}
	if(phoneNumber==""){
		$('#error').html("请输入手机号码");
		$("#phoneNumber").focus();
		return false;
	}else if(!pattern.test(phoneNumber)){
		$('#error').html("手机号码有误");
		$("#phoneNumber").focus();
		return false;
	}
	if(email==""){
		$('#error').html("请输入邮箱");
		$("#email").focus();
		return false;
	}
	var url="/web/admin/adminRegist";
	var param ={
		type: 'POST',
		url:url,
		dataType: 'json',
		data:{"jsonStr":"{'adminName':'"+adminName+"','password':'"+password+"','telNumber':'"+phoneNumber+"','email':'"+email+"'}"},
		successCallback: function(data){
			if(data.state == 0){
				window.history.go(-1);
			}else{
				layer.msg('注册失败');
			}
		},
		errorCallBack:function(data) {
			layer.msg('服务器繁忙请稍后重试');
		},
	}
	
	getDataFromServer(param);
}