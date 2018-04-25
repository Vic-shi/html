<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>添加地址</title>
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
</head>
<body>
	<div class="site">修改地址</div>
	<div class="index">
		<div class="index_td">
			<div class="left">姓名</div>
			<div class="right name">李察</div>
		</div>
		<div class="index_td">
			<div class="left">手机号码</div>
			<div class="right num">15332448956</div>
		</div>
		<div class="index_td">
			<div class="left">所在地区</div>
			<div class="right content-block">
				<input id="demo1" type="text" readonly="" placeholder="城市选择特效"  value="广东省,深圳市,南山区">
				<input id="value1" type="hidden" value="20,234,504">
			</div>
		</div>
		<div class="index_td" style="height: 1.5rem;">
			<textarea class="index_text" placeholder="详细地址"></textarea>
		</div>
		<div class="index_td add">
			<span>默认地址</span><img onclick="change_img()" class="index_img" alt="" src="<%=request.getContextPath()%>/commons/image/client/my/default.png">
		</div>
		<br class="clearfix"/>
	</div>
	<div class="check_div all">
		<input type="button" class="check_no" onclick="cancel()" value="取消">
		<input type="button" class="check_yes" value="确定">
	</div>
	<!-- <div id="mb" style="height:100%;width:100%;background:rgba(0,0,0,0.5);display:none;z-index:999999"></div> -->
<script src="<%=request.getContextPath()%>/commons/js/LAreaData1.js"></script>
<script src="<%=request.getContextPath()%>/commons/js/LAreaData2.js"></script>
<script src="<%=request.getContextPath()%>/commons/js/LArea.js"></script>
<script>
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
	}else{
		$('.index_img').attr('src','<%=request.getContextPath()%>/commons/image/client/my/default.png');		
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
		  }
		});
		 
}
</script>
</body>
</html>