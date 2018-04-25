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
		<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/lib/layui/css/layui.css"/>
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/payment/change.css"/>
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/payment/index.css" />
		<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/imgUp.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
		<title>调换</title>
		<style type="text/css">
		.nowsub{
		    height: 10vw;
		    background-color: #fea427;
		    border-radius: 5vw;
		    color: white;
		    width: 76%;
		    position: fixed;
		    bottom: 10vw;
		    left: 50%;
		    transform: translateX(-50%);
		}
		</style>
	</head>
	<body style="overflow:hidden">
		<div class="head">
			<ul>
				<li>还画</li>
				<li class="nav_bottom">调换</li>
				<li>续租</li>
				<li>结单</li>
			</ul>
		</div>
		<div class="order_number">
			<div>
				<span id="o_number"></span><span>云鼎国际</span>
			</div>
		</div>
		<div class="paint">
			<div><img id="spic"  alt="作品" /></div>
			<h1 id="product"></h1>
		</div>
		<div>
			<div>
				<h1>退货方式</h1>
				<h2>快递</h2>
			</div>
		</div>
		<div class="add">
			<div id="">
				<h1 id="express"></h1>
				<a href="<%=request.getContextPath()%>/client/my/site.jsp?type=1"><img src="<%=request.getContextPath()%>/commons/image/client/payment/edit.png"/></a>
			</div>
			<h1 id="Address"></h1>
		</div>
		<div>
			<form class="layui-form" action="">
				<div class="layui-form-item">
				 	<label class="layui-form-label">调换原因</label>
				    <div class="layui-input-block">
				      	<select name="interest" id="changeReason" lay-filter="aihao" value="请选择结单原因">
						    <option value="">请选择调换原因</option>
						    <option value="0">物品不喜欢</option>
						    <option value="1">物品残缺</option>
						    <option value="2">物品寄错</option>
						    <option value="3">其他原因</option>
				      	</select>
				    </div>
				</div>
			</form>
		</div>
		<!-- <div>
			<section class="img-section">涉及到大纲时采取使用section
				<h1>上传照片：</h1>
				<div class="z_photo" >
				   	<section class="up-section loading">
						<img src="img/15删除订单.png" class="close-upimg">删除按钮
						<img src="img/16确定删除订单.png" class="type-upimg" alt="添加标签">所有图片的原图
						<img src="img/16确定删除订单.png" class="up-img up-opcity">所有图片的略缩图
					</section>
					<section class="z_file">
						<input type="file" name="file" id="file" class="file" value="" accept="image/jpg,image/jpeg,image/png,image/bmp" multiple />
					</section>
			 	</div>
				<h2 style="line-height: 1.8;">图片小于5M，仅支持png、gif、bmp和jpeg格式</h2>
				<h2 style="color:#fea427!important;">如有损坏，请消息拍摄</h2>
	 		</section>
		</div>
		<aside class="works-mask">
			<div class="mask-content">
				<p class="del-p">您确定要删除作品图片吗？</p>
				<p class="check-p"><span class="wsdel-ok">确定</span><span class="wsdel-no">取消</span></p>
			</div>
		</aside> -->
		<!-- <div class="picture">
			<h1>上传照片</h1>
			<ul>
				<li onclick="addpic()"><input type="file" name="addpic" id="addpic" style="display: none;"/></li>
				<li></li>
				<li></li>
			</ul>
			<h2>图片小于5M，仅支持png、gif、bmp和jepg格式</h2>
			<h2 style="color:#fea427;">如有损坏，请详细拍拍照</h2>
		</div> -->
		<div style="border-bottom: 0;" onclick="newchangepic()">
			<h4>选择要调换的作品</h4>
			<div class="paint_change">
				<div><img id="changepic"  alt="作品" /></div>
				<h1><span id="changepicmsg"></span> 作者<span id="changepicau"></span></h1>
			</div>
		</div>
		<form action="" method="">
		<div style="height:40vw">
			<input type="button" class="nowsub" onclick="sub()"; value="提交"/>
		</div>
		</form>
<script>
//导航栏的下滑线
$(".head li").click(function(){
	$(this).addClass("nav_bottom");
	$(this).siblings().removeClass("nav_bottom");
	
	if($(this).html()=="还画"){
		window.open("<%=request.getContextPath()%>/client/payment/return.jsp","_self");
	}else if($(this).html()=="调换"){
		window.open("<%=request.getContextPath()%>/client/payment/change.jsp","_self");
	}else if($(this).html()=="续租"){
		window.open("<%=request.getContextPath()%>/client/payment/rerent.jsp","_self");
	}else{
		window.open("<%=request.getContextPath()%>/client/payment/adjustment.jsp","_self");
	}
})


$(function(){
	//userId应从登陆页存入h5
	var userId=sessionStorage.getItem("userId");
	var url1="<%=request.getContextPath()%>/api/payorder/listOrderByUserid";
	var orderId = sessionStorage.getItem("orderId") ;
	var queryData = {"jsonStr":"{'orderId':"+orderId+"}"};
	orderdetail(url1,queryData);
	
	var changeProductId = sessionStorage.getItem("changeProductId");
	var changeProductPicture =sessionStorage.getItem("changeProductPicture");
	var changeProductName = sessionStorage.getItem("changeProductName");
	var changeProductAuthor = sessionStorage.getItem("changeProductAuthor");
	if(changeProductId!=null && changeProductName !=null && changeProductAuthor !=null){
		$("#changepic").attr('src',changeProductPicture);
		$("#changepicmsg").html(changeProductName);
		$("#changepicau").html(changeProductAuthor);
	}
	
}) 

function orderdetail(url1,queryData){
	var param = {
		url: url1,
		data: queryData,
		successCallback: function(msg){
			var data =msg.data;
			$("#o_number").html("订单号码："+data[0].id);
			$("#spic").attr('src',data[0].originalProductPicture); 
			
			$("#changeReason").val(data[0].changeReason);
			
			var changeProductId = sessionStorage.getItem("changeProductId");
			if(changeProductId ==null){
				$("#changepic").attr('src',data[0].changeProductPicture);
				if(data[0].changeProductName!=null||data[0].changeProductAuthor!=null){
					$("#changepicmsg").html(data[0].changeProductName);
					$("#changepicau").html(data[0].changeProductAuthor);
				}
			}
			
			var changedz = sessionStorage.getItem("changedz");
			var dzname = sessionStorage.getItem("dzname");
			if(changedz!=null&&changedz!=""){
				$("#express").html("收货人："+dzname);
				$("#Address").html("收货地址："+changedz);
			}else{
				$("#express").html("收货人："+data[0].userName);
				$("#Address").html("收货地址："+data[0].userAddress);
			}
			sessionStorage.setItem("changedz","");
			sessionStorage.setItem("dzname","");
			sessionStorage.setItem("changeprice",data[0].rent);
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
			var data =msg.data;
			$("#o_number").html("订单号码："+data[0].id);
			$("#spic").attr('src',data[0].originalProductPicture); 
			
			$("#changeReason").val(data[0].changeReason);
			
			var changeProductId = sessionStorage.getItem("changeProductId");
			if(changeProductId ==null){
				$("#changepic").attr('src',data[0].changeProductPicture);
				if(data[0].changeProductName!=null||data[0].changeProductAuthor!=null){
					$("#changepicmsg").html(data[0].changeProductName);
					$("#changepicau").html(data[0].changeProductAuthor);
				}
			}
			
			var changedz = sessionStorage.getItem("changedz");
			var dzname = sessionStorage.getItem("dzname");
			if(changedz!=null&&changedz!=""){
				$("#express").html("收货人："+dzname);
				$("#Address").html("收货地址："+changedz);
			}else{
				$("#express").html("收货人："+data[0].userName);
				$("#Address").html("收货地址："+data[0].userAddress);
			}
			sessionStorage.setItem("changedz","");
			sessionStorage.setItem("dzname","");
			sessionStorage.setItem("changeprice",data[0].rent);
		},
		error:function(){
			console.log("ssssss");
		}
	}) */
}



//layui的下拉选择框组件
layui.use(['form', 'layedit', 'laydate'], function(){
  	var form = layui.form
  		,layer = layui.layer
  		,layedit = layui.layedit
  		,laydate = layui.laydate;

  //监听提交
 	form.on('submit(demo1)', function(data){
    	layer.alert(JSON.stringify(data.field), {
      		title: '最终的提交信息'
    	})
    	return false;
 	 });
});
//添加图片
function addpic(){
	$("#addpic").click(function(){
		
	})
}
function newchangepic(){
	window.open("<%=request.getContextPath()%>/client/gallery/Selected_works.jsp","_self");
}


function sub(){
	var url1="<%=request.getContextPath()%>/api/order/saveneworder";
	var orderId = sessionStorage.getItem("orderId");
	var userId=sessionStorage.getItem("userId");
	var orderUpdateStatus=1;
	var userName =$("#express").html().substring(4);
	var userAddress = $("#Address").html().substring(5);
	var pic = $("#changepic").attr("src");
	var changeProductName = $("#changepicmsg").html();
	var changeProductAuthor = $("#changepicau").html();
	var changeReason = $("#changeReason").val();
	
	var changeProductId = sessionStorage.getItem("changeProductId");
	var changeProductPicture =sessionStorage.getItem("changeProductPicture");
	var changeProductName = sessionStorage.getItem("changeProductName");
	var changeProductAuthor = sessionStorage.getItem("changeProductAuthor");
	
	var queryData = {"jsonStr":"{'orderId':"+orderId+",'orderUpdateStatus':"+orderUpdateStatus+",'userName':'"+userName+"','userAddress':'"+userAddress+"','changeProductName':'"+changeProductName+"','changeProductAuthor':'"+changeProductAuthor+"','changeReason':'"+changeReason+"','changeProductId':"+changeProductId+",'changeProductPicture':'"+changeProductPicture+"','changeProductName':'"+changeProductName+"','changeProductAuthor':'"+changeProductAuthor+"','userId':"+userId+"}"};
	console.log(queryData);
	var param = {
		url: url1,
		data: queryData,
		successCallback: function(msg){
			window.open("<%=request.getContextPath()%>/client/payment/change_success.jsp","_self");
		},
		errorCallBack: function() {
			console.log("ssssss");
		}
		}
	getDataFromServer(param);
	
<%-- 	$.ajax({
		url:url1,
		type:'post',
		data:queryData,
		success:function(msg){
			window.open("<%=request.getContextPath()%>/client/payment/change_success.jsp","_self");
		},
		error:function(){
			console.log("ssssss");
		}
	}) --%>
}

</script>
	</body>
</html>
