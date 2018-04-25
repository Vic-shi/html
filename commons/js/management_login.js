  //测试提交，对接程序删除即可
  function sub(){
/*	  console.log(1);
		var pwd=$('.pwd').val();
		var user=$('.user').val();
		var reg=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
		if(user==""){
			$('#error').html("请输入账号");
			return false;
		}
		if($('.user').val().length!=11){
			$('#error').html("请输入正确账号");
			return false;
		}
		if(!pwd){
			$('#error').html("请输入密码");
			return false;
		}
		if(!reg.test(pwd)){
			$('#error').html("请输入正确的密码（不可纯英文或纯数字并不少于6位）");
			return false;
		}else{
			window.location.href="/web/management/platform/index/index.jsp";
		}*/
	  	var pwd=document.getElementById("password").value;
		var user=document.getElementById("adminName").value;
		var param = {
				url: "/web/admin/adminLogin",
				data: {"jsonStr":"{'adminName':'"+user+"','password':'"+pwd+"'}"},
				successCallback: function(data){
					console.log(data);
					if(data.state == 0){
						window.open('/web/management/platform/index/index.jsp','_self');
					}else{
						alert(data.message);
					}
					
				},
				errorCallBack: function(data) {
					alert("服务器繁忙请稍后重试");
				}
		}
		getDataFromServer(param);
  } 