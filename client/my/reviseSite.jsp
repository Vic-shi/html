<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>修改地址</title>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">
<meta content="yes" name="apple-mobile-web-app-capable">
<meta content="black" name="apple-mobile-web-app-status-bar-style">
<meta content="telephone=no" name="format-detection">
<meta content="email=no" name="format-detection">
<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/my/reviseSite.css" >
<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/my/LArea.css">
<script src="<%=request.getContextPath()%>/lib/layer/layer.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
</head>
<body>
	<div class="site" id="atitle">修改地址</div>
	<div class="index">
		<div class="index_td">
			<div class="left">姓名</div>
			<div class="right name"><input id="name" placeholder="请输入姓名" value=""></div>
		</div>
		<div class="index_td">
			<div class="left">手机号码</div>
			<div class="right num"><input id="num" placeholder="请输入手机号码" value=""></div>
		</div>
		<div class="index_td">
			<div class="left">所在地区</div>
			<div class="right content-block">
				<input id="demo1" type="text" readonly="" placeholder="城市选择特效"  value="广东省,深圳市,南山区">
				<input id="value1" type="hidden" value="20,234,504">
			</div>
		</div>
		<div class="index_td" style="height: 1.5rem;">
			<textarea class="index_text" id="xxdz" placeholder="详细地址"></textarea>
		</div>
		<div class="index_td add">
			<span>默认地址</span><img onclick="change_img()" class="index_img" alt="" src="<%=request.getContextPath()%>/commons/image/client/my/default.png">
			<input id="value2" type="hidden" value="0">
		</div>
		<br class="clearfix"/>
	</div>
	<div class="check_div all">
		<input type="button" class="check_no" onclick="cancel()" value="取消">
		<input type="button" class="check_yes" onclick="bcancel()"value="确定">
	</div>
	<!-- <div id="mb" style="height:100%;width:100%;background:rgba(0,0,0,0.5);display:none;z-index:999999"></div> -->
	<script src="<%=request.getContextPath()%>/commons/js/LAreaData1.js"></script>
<script src="<%=request.getContextPath()%>/commons/js/LAreaData2.js"></script>
<script src="<%=request.getContextPath()%>/commons/js/LArea.js"></script>
<script>
$(function(){
	var addressid = sessionStorage.getItem("useraddressId");
	if(addressid!=null&&addressid!=""){
		var url1="<%=request.getContextPath()%>/api/orderaddress/list";
		var queryData = {"jsonStr":"{'addressId':"+addressid+",}"}
		orderdetail(url1,queryData);
	}else{
		$("#atitle").html("新增地址");
	}
}) 

//三级连选
var area1 = new LArea();
area1.init({
	'trigger': '#demo1', //触发选择控件的文本框，同时选择完毕后name属性输出到该位置
	'valueTo': '#value1', //选择完毕后id属性输出到该位置
	'keys': {
		id: 'id',
		name: 'name'
	}, //绑定数据源相关字段 id对应valueTo的value属性输出 name对应trigger的value属性输出
	'type': 1, //数据源类型
	'data': LAreaData //数据源
});
area1.value=[1,13,3];//控制初始位置，注意：该方法并不会影响到input的value
var area2 = new LArea();
area2.init({
	'trigger': '#demo2',
	'valueTo': '#value2',
	'keys': {
		id: 'value',
		name: 'text'
	},
	'type': 2,
	'data': [provs_data, citys_data, dists_data]
});

//选择默认地址
function change_img(){
	var img=$('.index_img').attr('src');
	if(img=="<%=request.getContextPath()%>/commons/image/client/my/default.png"){
		$('.index_img').attr('src','<%=request.getContextPath()%>/commons/image/client/my/pitch.png');
		$("#value2").val("1");
	}else{
		$('.index_img').attr('src','<%=request.getContextPath()%>/commons/image/client/my/default.png');
		$("#value2").val("0");
	}
}

//取消
function cancel(){
	layer.open({
		  type: 1
		  ,title: false //不显示标题栏
		  ,closeBtn: false
		  ,area: '60vw;'
		  ,shade: 0.5
		  ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
		  ,resize: false
		  ,btn: ['确定', '取消']
		  ,btnAlign: 'c'
		  ,moveType: 1 //拖拽模式，0或者1
		  ,content: '<div style="padding: 0.5rem; line-height: 0.3rem;font-size: 0.28rem;">确认放弃此次编辑？</div>'
		  ,yes: function(layero){
		    console.log(111);
		    var type= window.location.href.slice(-1);
		    window.open("<%=request.getContextPath()%>/client/my/site.jsp?type="+type,"_self");
		  }
		});
		 
}



//确定
function bcancel(){
	//userId应从登陆页存入h5
	var userId=sessionStorage.getItem("userId") ;
	var url1="";
	var addressid = sessionStorage.getItem("useraddressId");
	var name=$("#name").val();
	var userMobile=$("#num").val();
	var address=$("#demo1").val();
	var detailedaddress=$("#xxdz").val();
	var sfdefault=$("#value2").val();
	if(addressid!=null&&addressid!=""){
		var queryData = {"jsonStr":"{'addressid':"+addressid+",'userId':"+userId+",'name':'"+name+"','userMobile':'"+userMobile+"','address':'"+address+"','detailedaddress':'"+detailedaddress+"','sfdefault':'"+sfdefault+"'}"};
		url1="<%=request.getContextPath()%>/api/orderaddress/update";
	}else{
		var queryData = {"jsonStr":"{'userId':"+userId+",'name':'"+name+"','userMobile':'"+userMobile+"','address':'"+address+"','detailedaddress':'"+detailedaddress+"','sfdefault':'"+sfdefault+"'}"};
		url1="<%=request.getContextPath()%>/api/orderaddress/save";
	}
	
	console.log(queryData);
	orderdetail(url1,queryData);
	var type= window.location.href.slice(-1);
	window.open("<%=request.getContextPath()%>/client/my/site.jsp?type="+type,"_self");
}

function orderdetail(url1,queryData){
	var param = {
			url: url1,
			data: queryData,
			successCallback: function(msg){
				console.log(msg);
				if(msg.data!="1"&&msg.data!="0"){
					$("#name").val(msg.data[0].name);
					$("#num").val(msg.data[0].userMobile);
					$("#demo1").val(msg.data[0].address);
					$("#xxdz").val(msg.data[0].detailedaddress);
					$("#value2").val(msg.data[0].sfdefault);
					if(msg.data[0].sfdefault=="1"){
						change_img();
					}
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
			console.log(msg);
			if(msg.data!="1"&&msg.data!="0"){
				$("#name").val(msg.data[0].name);
				$("#num").val(msg.data[0].userMobile);
				$("#demo1").val(msg.data[0].address);
				$("#xxdz").val(msg.data[0].detailedaddress);
				$("#value2").val(msg.data[0].sfdefault);
				if(msg.data[0].sfdefault=="1"){
					change_img();
				}
			}
			
		},
		error:function(){
			console.log("ssssss");
		}
	}) */
}
</script>
</body>
</html>