<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>管理地址</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/layer/layer.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/my/site.css" >
</head>
<body>
	<div class="site" id=unpaid>
		<%-- <div class="manage">
			<div class="left">
				<div class="name">李察<span class="num">15365893339</span></div>
				<div class="area">浙江省&nbsp;&nbsp;宁波市&nbsp;&nbsp;鄞州区&nbsp;&nbsp;</div>
				<div class="location">双东路永红家园10幢</div>
			</div>
			<div class="right">
				<img alt="" src="<%=request.getContextPath()%>/commons/image/client/my/write.png" onclick="wri()">
				<img alt="" src="<%=request.getContextPath()%>/commons/image/client/my/delete.png" onclick="del()">
			</div>
			<br class="clearfix"/>
		</div>
		<div class="manage">
			<div class="left">
				<div class="name">李察<span class="num">15365893339</span></div>
				<div class="area">浙江省&nbsp;&nbsp;宁波市&nbsp;&nbsp;鄞州区&nbsp;&nbsp;</div>
				<div class="location">双东路永红家园10幢</div>
			</div>
			<div class="right">
				<img alt="" src="<%=request.getContextPath()%>/commons/image/client/my/write.png" onclick="wri()">
				<img alt="" src="<%=request.getContextPath()%>/commons/image/client/my/delete.png" onclick="del()">
			</div>
			<br class="clearfix"/>
		</div> --%>
	</div>
	<div class="check_div all">
		<input type="button" class="check_add" onclick="add()" value="新增地址">
	</div>
	<script type="text/javascript">
		function wri(addressid){
			sessionStorage.setItem("useraddressId",addressid);
			var type= window.location.href.slice(-1);
			window.location.href='<%=request.getContextPath()%>/client/my/reviseSite.jsp?type='+type;
		}
		function del(addressid){
			layer.open({
				 type: 1
				 ,title: false //不显示标题栏
				 ,closeBtn: false
				 ,area: '80vw;'
				 ,shade: 0.5
				 ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
				 ,resize: false
				 ,btn: ['确定', '取消']
				 ,btnAlign: 'c'
				 ,moveType: 1 //拖拽模式，0或者1
				 ,content: '<div style="padding:8vw 0 8vw 24vw; line-height: 0.3rem;font-size: 0.28rem;">确认删除该地址？</div>'
				 ,yes: function(layero){
				   console.log(111);
					var url1="<%=request.getContextPath()%>/api/orderaddress/deleteaddress";
					var queryData = {"jsonStr":"{'addressId':"+addressid+"}"}
					orderdetail(url1,queryData);
					layer.close(layero);
					var type= window.location.href.slice(-1);
					window.open("<%=request.getContextPath()%>/client/my/site.jsp?type="+type,"_self");
				 }
			});
		}
		
		function add(){
			sessionStorage.removeItem('useraddressId');
			var type= window.location.href.slice(-1);
			window.location.href='<%=request.getContextPath()%>/client/my/reviseSite.jsp?type='+type;
		}
		

		$(function(){
			//userId应从登陆页存入h5
			var userId=sessionStorage.getItem("userId");
			var url1="<%=request.getContextPath()%>/api/orderaddress/list";
			var queryData = {"jsonStr":"{'userId':"+userId+"}"};
			orderdetail(url1,queryData);
		});
		function changeaddress(i){
			var changedz = $(i).find(".area").text()+$(i).find(".location").text();
			sessionStorage.setItem("changedz",changedz);
			sessionStorage.setItem("dzname",$(i).find(".dzname").text());
			sessionStorage.setItem("userMobile",$(i).find(".num").text());
			var type= window.location.href.slice(-1);
			if(type==1){
				window.history.go(-1);
				//window.location.href='<%=request.getContextPath()%>/client/payment/change.jsp';
			}
		}
		
	function orderdetail(url1,queryData){
		var param = {
				url: url1,
				data: queryData,
				successCallback: function(msg){
					var data =msg.data;
					console.log(msg);
					if(data!="1"){
						for(var i in data){
							var dz = data[i].address.split(",");
							var xxdz="";
							var changedz="";
							for(var r in dz){
								xxdz = xxdz+dz[r]+'&nbsp;&nbsp;';
								changedz = changedz +dz[r];
							}
							changedz = changedz + data[i].detailedaddress +"";
							var json = {'changedz':changedz};
							console.log(json);
							var str =
							'<div class="manage">'
							+'<div class="left" onclick="changeaddress(this)">'
							+'	<div class="name"><span class="dzname">'+data[i].name+'</span><span class="num">'+data[i].userMobile+'</span></div>'
							+'	<div class="area">'+xxdz+'</div>'
							+'	<div class="location">'+data[i].detailedaddress+'</div>'
							+'</div>'
							+'<div class="right">'
							+'<img alt="" src="<%=request.getContextPath()%>/commons/image/client/my/write.png" onclick="wri('+data[i].addressId+')" style="margin-right:2.96vw;">'
							+'<img alt="" src="<%=request.getContextPath()%>/commons/image/client/my/delete.png" onclick="del('+data[i].addressId+')">';
							
							
							str =str
								+'</div>'
								+'<br class="clearfix"/>'
								+'</div>'
							$("#unpaid").append(str);	
						};
					}
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
				
			
		},
		error:function(){
			console.log("ssssss");
		}
	}) */
}
	</script>
</body>
</html>