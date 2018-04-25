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
		<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/payment/share.css" />
		<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/jquery/jquery-3.2.1.min.js"></script>
		<script type="text/javascript" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
		<title>作品信息</title>
	</head>
	<body>
		<div style="padding: 0;border: 0;">
		<!--动态获取-->
			<img src=""  id="imgUrl">
		</div>
		<div class="head">
			<!-- <h6>《札木便桥》</h6>
			<h2 style="text-align: center;line-height: 3;">作者：吴冠中</h2>
			<h1 style="display: inline;">简介：</h1>
			<h2 style="display: inline;">《札木便桥》是一副国家级的油画作品，是中国当担注明画家吴冠中所作。</h2>
			<div>
				<h2>产品状态：轴</h2>
				<h2>产品尺寸：轴</h2>
				<h2>内容类型：轴</h2>
			</div> -->
		</div>
		<div class="pic_lable">
			<!-- <h1>标签</h1>
			<ul>
				<li>人物</li>
				<li>风景</li>
				<li>植物</li>
			</ul> -->
		</div>
		<div>
			<div>
				<h1>选择租借时间</h1>
				<!--时间选择-->
				<div class="time_choose">
			        <div>
			            <label for="time1">                        
			                <input type="radio" name="1" id="time1" checked>
			            </label>
			            <span class="btn active">6个月</span>
			        </div>
			        <div>
			            <label for="time2">
			                <input type="radio" name="2" id="time2">
			            </label>
			            <span class="btn" value='2'>12个月</span>
			        </div>
			        <div>
			            <label for="time3">
			                <input type="radio" name="3" id="time3">
			            </label>
			            <span class="btn">永久</span>
			        </div>       
				</div>
			</div>
		</div>
		<div>
			<div>
				<h1>润笔费</h1>
				<h2>注：结单时，产生润笔费</h2>
			</div>
		</div>
		<div style="border-bottom: 0;" id='priceList'>
			<!-- <div>
				<h2>市场价格</h2><h2 style="text-decoration: line-through;">￥350000.00</h2>
			</div>
			<div>
				<h2>装裱费</h2><h2>￥300</h2>
			</div>
			<div>
				<h2>租金</h2><h2>￥9000</h2>
			</div>
			<div>
				<h2>押金</h2><h2>￥10000</h2>
			</div>
			<div>
				<h1>共享价格</h1><h3>￥19300.00</h3>
			</div> -->
		</div>
		<div style="border-bottom: 0;">
			<fieldset>
				<legend>物流方式</legend>
				发货地：浙江省宁波市鄞州区东钱湖镇东钱湖商会云鼎国际
			</fieldset>
		</div>
		<div class="liucheng" style="border-bottom: 0;">
			<fieldset>
				<legend>共享方式</legend>
				<img src="<%=request.getContextPath()%>/commons/image/client/payment/process.png" alt="流程" />
			</fieldset>
			<h2>申请共享：选择共享时间和润笔费，进行押金支付。</h2>
			<h2>平台发货：快递进行交付画。</h2>
			<h2>收货确认：收到物品后，进行确认收货。</h2>
		</div>
		<!--<form action="" method="">-->
		<div class="tijiao">
			<input type="submit" value="立即共享">
		</div>
		<!--</form>-->
<script>
//添加图片
function addpic(){
	$("#addpic").click(function(){
		
	})
}
//续期时间选择
$(".time_choose label").click(function() {
    $(this).next("span").addClass("active");
    $(this).parent().siblings("div").find("span").removeClass("active");
});
//动态加载数据
var proId=localStorage.getItem("proId");

var rent,productMountedValue,productDeposit,productDeposit1,timeType=1,productId,productPictureMain,productName,productAuthor;
$(function(){
	var queryString = window.top.location.search.substring(1);
	alert(queryString);
	var productId = '';
	var jsonData = '';
	var parameterName = "productId=";
	if ( queryString.length > 0 ) {
	   begin = queryString.indexOf ( parameterName );
	   if ( begin != -1 ) {
	     begin += parameterName.length;
	     end = queryString.indexOf ( "&" , begin );
	       if ( end == -1 ) {
	         end = queryString.length
	       }
	       productId = queryString.substring ( begin, end );
	  }
	}
	alert(productId);
	if(productId != ''){
		jsonData = {"jsonStr":"{'pageNo':1,'listLen':10,'draw':1,'productId':'"+productId+"'}"}
	}else{
		jsonData = {"jsonStr":"{'pageNo':1,'listLen':10,'draw':1,'productId':'"+proId+"'}"}
	}
	var param = {
		url: "<%=request.getContextPath()%>/api/product/listDetail",
		data: jsonData,
		successCallback: function(data){
			$('#imgUrl').attr('src',data.data[0].productPictureMain);
			rent=parseInt(data.data[0].rent*180);
			productMountedValue=parseInt(data.data[0].productMountedValue);
			productDeposit1=parseInt(data.data[0].productDeposit);
			productDeposit=productDeposit1;
			productPictureMain = data.data[0].productPictureMain;
			productName=data.data[0].productName;
			productAuthor = data.data[0].productAuthor;
			var li1='<h6>《'+productName+'》</h6>'
				+'<h2 style="text-align: center;line-height: 3;">作者：'+data.data[0].productAuthor+'</h2>'
				+'<h1 style="display: inline;">简介：</h1>'
				+'<h2 style="display: inline;">'+data.data[0].productProfile+'</h2>'
				+'<div>'
				+'<h2>产品状态：'+changeByNumber(data.data[0].productMountedStatus,"productMountedStatus")+'</h2>'
				+'<h2>产品尺寸：'+changeByNumber(data.data[0].productSize,"productSize")+'</h2>'
				+'<h2>内容类型：'+changeByNumber(data.data[0].productStyle,"productStyle")+'</h2>'
				+'</div>';
			$(".head").append(li1);
			var li2='<h1>标签</h1>'
					+'<ul>'
					+'<li>'+changeByNumber(data.data[0].productType,"productType")+'</li>'
					+'</ul>';
			$(".pic_lable").append(li2);
			var li3="<div>"
					+"<h2>市场价格</h2><h2 style='text-decoration: line-through;'>￥"+data.data[0].productMarketValue+"</h2>"
					+"</div>"
					+"<div>"
					+"<h2>装裱费</h2><h2>￥"+productMountedValue+"</h2>"
					+"</div>"
					+"<div>"
					+"<h2>租金</h2><h2 id='rentprice'>￥"+rent+"</h2>"
					+"</div>"
					+"<div>"
					+"<h2>担保金</h2><h2 id='deposit'>￥"+productDeposit+"</h2>"
					+"</div>"
					+"<div>"
					+"<h1>共享价格</h1><h3 id='shareprice'>￥"+(productMountedValue+rent+productDeposit)+"</h3>"
					+"</div>";
			$('#priceList').append(li3);
			
		},
		errorCallBack: function() {
			console.log("ssssss");
		}
		}
	getDataFromServer(param);
	
	<%-- $.ajax({
		type:'POST',
		url:"<%=request.getContextPath()%>/api/product/listDetail",
		dataType:'json',
		data:{"jsonStr":"{'pageNo':1,'listLen':10,'draw':1,'productId':'"+proId+"'}"},
		success:function(data){
			$('#imgUrl').attr('src',data.data[0].productPictureMain);
			rent=parseInt(data.data[0].rent*180);
			productMountedValue=parseInt(data.data[0].productMountedValue);
			productDeposit1=parseInt(data.data[0].productDeposit);
			productDeposit=productDeposit1;
			productPictureMain = data.data[0].productPictureMain;
			productName=data.data[0].productName;
			productAuthor = data.data[0].productAuthor;
			var li1='<h6>《'+productName+'》</h6>'
				+'<h2 style="text-align: center;line-height: 3;">作者：'+data.data[0].productAuthor+'</h2>'
				+'<h1 style="display: inline;">简介：</h1>'
				+'<h2 style="display: inline;">'+data.data[0].productProfile+'</h2>'
				+'<div>'
				+'<h2>产品状态：'+changeByNumber(data.data[0].productMountedStatus,"productMountedStatus")+'</h2>'
				+'<h2>产品尺寸：'+changeByNumber(data.data[0].productSize,"productSize")+'</h2>'
				+'<h2>内容类型：'+changeByNumber(data.data[0].productStyle,"productStyle")+'</h2>'
				+'</div>';
			$(".head").append(li1);
			var li2='<h1>标签</h1>'
					+'<ul>'
					+'<li>'+changeByNumber(data.data[0].productType,"productType")+'</li>'
					+'</ul>';
			$(".pic_lable").append(li2);
			var li3="<div>"
					+"<h2>市场价格</h2><h2 style='text-decoration: line-through;'>￥"+data.data[0].productMarketValue+"</h2>"
					+"</div>"
					+"<div>"
					+"<h2>装裱费</h2><h2>￥"+productMountedValue+"</h2>"
					+"</div>"
					+"<div>"
					+"<h2>租金</h2><h2 id='rentprice'>￥"+rent+"</h2>"
					+"</div>"
					+"<div>"
					+"<h2>担保金</h2><h2 id='deposit'>￥"+productDeposit+"</h2>"
					+"</div>"
					+"<div>"
					+"<h1>共享价格</h1><h3 id='shareprice'>￥"+(productMountedValue+rent+productDeposit)+"</h3>"
					+"</div>";
			$('#priceList').append(li3);
			
		},
		error:function(data){
			console.log('shibai');
		}
	}) --%>
	$(".time_choose input").click(function(){
		timeType=$(this).attr('name');
		if(timeType=='3'){
			productDeposit=0;
		}
		else{
			productDeposit=productDeposit1;
		}
		$("#deposit").text('￥'+productDeposit);
		$("#shareprice").text('￥'+(parseInt(rent*timeType)+productMountedValue+productDeposit));
		$("#rentprice").text('￥'+parseInt(rent*timeType));
	})
	$("input[type='submit']").click(function(){
		localStorage.setItem("timeType",timeType);
		localStorage.setItem("rent",parseInt(rent*timeType));
		localStorage.setItem("productMountedValue",productMountedValue);
		localStorage.setItem("productDeposit",productDeposit);
		localStorage.setItem("productId",proId);
		localStorage.setItem("productName",productName);
		localStorage.setItem("productPictureMain",productPictureMain);
		localStorage.setItem("productAuthor",productAuthor);
		window.open('<%=request.getContextPath()%>/client/payment/share_message.jsp','_self');
	})
	
})
//将产品状态,产品尺寸,内容类型,标签从数字转换成文字
/*index 数字
 *type 参数类型
 */
function changeByNumber(index,type){
	if(type == "productMountedStatus"){
		switch (parseInt(index)) {
		case 0:
			return "轴";
		case 1:
			return "芯";
		case 2:
			return "框";
		default:
			break;
		}		
	}
	if(type == "productSize"){
		switch (parseInt(index)) {
		case 0:
			return "四尺";
		case 1:
			return "六尺";
		case 2:
			return "四条屏";
		case 3:
			return "小丈二";
		default:
			break;
		}
	}
	if(type == "productStyle"){
		switch (parseInt(index)) {
		case 0:
			return "国画";
		case 1:
			return "书法";
		default:
			break;
		}
	}
	if(type == "productType"){
		switch (parseInt(index)) {
		case 0:
			return "山水";
		case 1:
			return "花鸟";
		case 2:
			return "走兽";
		case 3:
			return "人物";
		case 4:
			return "国画其他";
		case 5:
			return "四字榜书";
		case 6:
			return "诗词";
		case 7:
			return "其他书法";
		default:
			break;
		}
	}
}
</script>
	</body>
</html>
