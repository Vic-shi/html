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
		$(".return").click(function(){
			window.location.href="/web/management/platform/user/admin_list.jsp";
		});
		adminajax();
	});
})(jQuery);

//layui启动模块
layui.use('form', function(){
	var form = layui.form;
  	//监听提交
  	form.on('submit(formDemo)', function(data){
    	layer.msg(JSON.stringify(data.field));
    	return false;
  	});
});	

function adminajax(){
	var adminId = sessionStorage.getItem('adminId');
	var url="/web/admin/selectById";
	$.ajax({
		type: 'POST',
		url:url,
		dataType: 'json',
		data : {'adminId':adminId},
		success: function(data){
			if(data.state == 0){
				document.getElementById("adminName").value = data.data.adminName;
				document.getElementById("telNumber").value = data.data.telNumber;
				document.getElementById("email").value = data.data.email;
			}else{
				adminajax();
			}
		},
		error:function(data) {
			layer.msg('服务器繁忙请稍后重试');
		},
	});
}

$("#telNumber").keydown(function(){
	var code = event.keyCode;
	var pattern = /^1[34578]\d{9}$/;
	if(code == 13){
		if($("#telNumber").val()==""){
			$('#error').html("请输入手机号码");
			$("#telNumber").focus();
			return false;
		}else if(!pattern.test($("#telNumber").val())){
			$('#error').html("手机号码有误");
		}else if(email==""){
			$('#error').html("请输入邮箱");
			$("#email").focus();
			return false;
		}else{
			save();
		}
	}
});
$("#email").keydown(function(){
	var code = event.keyCode;
	if(code == 13){
		if($("#telNumber").val()==""){
			$('#error').html("请输入手机号码");
			$("#telNumber").focus();
			return false;
		}else if($("#email").val()==""){
			$('#error').html("请输入邮箱");
			$("#email").focus();
			return false;
		}else{
			save();
		}
	}
});
function save(){
	var adminName = document.getElementById("adminName").value.trim();
	var telNumber = document.getElementById("telNumber").value.trim();
	var email = document.getElementById("email").value.trim();
	var pattern = /^1[34578]\d{9}$/;
	if(telNumber==""){
		$('#error').html("请输入手机号码");
		$("#telNumber").focus();
		return false;
	}else if(!pattern.test(telNumber)){
		$('#error').html("手机号码有误");
		$("#telNumber").focus();
		return false;
	}
	if(email==""){
		$('#error').html("请输入邮箱");
		$("#email").focus();
		return false;
	}
	var adminId = sessionStorage.getItem('adminId');
	var param = {
	url: "/web/admin/adminUpdate",
	method :'POST',
	data:{"jsonStr":"{'adminId':"+adminId+",'adminName':'"+adminName+"','telNumber':'"+telNumber+"','email':'"+email+"'}"},
		successCallback: function(data){
			if(data.state == 0){
				window.location.href="/web/management/platform/user/admin_list.jsp";
			}else{
				layer.msg('提交失败');
			}
	},
		errorCallBack: function(data) {
			console.log("失败");
	}
	}
	getDataFromServer(param);
}
//返回
$(function(){
	$(".return").click(function(){
		history.back(-1);
	});
});