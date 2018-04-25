<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>调换作品</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<meta name="renderer" content="webkit">
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/amazeui/css/amazeui.min.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/layui/css/layui.css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/default/style.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/gallery/gallery.css"/>
<script src="<%=request.getContextPath()%>/lib/amazeui/js/jquery.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/amazeui/js/amazeui.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
</head>
<body>
<div class="container">
	<header class="my-header">
		<div class="head">
			<div class="search">
				<img src="<%=request.getContextPath()%>/commons/image/client/index/search.png" class="img">
				<input type="text" value="请输入关键词"class="search-input-box">
	      	</div>
	      	<div style="margin-left:6.3vw;line-height: 8.3vw;">
	      		<span class="selected"><a href="#doc-oc-demo1" data-am-offcanvas>筛选</a></span>
				<a href="#doc-oc-demo1" data-am-offcanvas><img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_28.png" class="icon-28"></a>
	      	</div>
	      </div>
	</header>
	<div>
		<div style="background-color: #ededed;" class="vertical">
    		<ul class="am-avg-sm">
    			<!--ajax动态获取价格相同的数据-->
    			<%-- <a href="<%=request.getContextPath()%>/client/payment/change_pro.jsp">
	    			<li>
	    				<div class="vertical-1">
	    					<img src="<%=request.getContextPath()%>/commons/image/pic/pic_7.png" style="width:34.7vw;height:32.7vw;">
	    					<div style="margin:6.7vw 0 0 1.6vw;">
	    						<div style="font-size:0.3rem;font-weight:600;">
	    							<span>《人物》</span>
	    							<span>作者: 周思聪</span>
	    						</div>
	    						<div style="font-size:0.19rem;margin:3.7vw 0 0 1.9vw;color:#999;">
	    							<span>产品状态:轴</span>
	    							<span>产品尺寸:四尺</span>
	    							<span>内容类型:人物</span>
	    						</div>
	    						<div style="font-size:0.19rem;margin:5.3vw 0 0 1.9vw;color:#999;">
	    							<span>共享价</span>
	    							<span style="font-size:0.28rem;color:#fea427;font-weight:600;">￥10387</span>
	    							<span style="margin-left:13.1vw;">2.5万人收藏</span>
	    						</div>
	    					</div>
	    				</div>
	    			</li>
    			</a> --%>
    			
    		</ul>
    	</div>
    	<div id="doc-oc-demo1" class="am-offcanvas">
	  		<div class="am-offcanvas-bar am-offcanvas-bar-flip">
	    		<div class="am-offcanvas-content" style="height: 90vw;">
	    			<div style="border-bottom: 0.3vw solid #ededed;margin-top:4.3vw;">
	      				<span style="margin-left:2vw;font-size:0.23rem;">级别</span>
	      				<ul class="size">
	      					<li class="provincial">
	      						<span style="margin-left:5.3vw;font-size:0.23rem;">省级</span>
	      						<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 27%;left: 11%;"class="close">
	      					</li>
	      					<li class="sino-american_association">
	      						<span>中美协/中书协</span>
	      						<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: -74%;left: 42.7%;"class="close">
	      					</li>
	      					<li class="national_level">
	      						<span style="margin-left:4.8vw;font-size:0.23rem;">国家级</span>
	      						<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 27%;left: 2.7%;"class="close">
	      					</li>
	      				</ul>
	      			</div>
	      			<div style="border-bottom: 0.3vw solid #ededed;margin-top:3.2vw;">
	      				<span style="margin-left:2vw; font-size:0.23rem;">尺寸 (标注单位: CM)</span>
		      			<ul class="size">
		      				<li class="four_feet">
		      					<div class="four_feet-1">
		      						<span>四尺</span>
		   							<span style="margin-left:2.7vw;">69*138<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;left: 11%;margin-top:0.7vw;"class="close"></span>
		      					</div>
		      					
			      			</li>
			     			<li class="six_feet">
			      				<div class="six_feet-1">
			   						<span>六尺</span>
			   						<span style="margin-left:2.7vw;">96*178<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;left: 10%;margin-top:0.7vw;"class="close"></span>
		      					</div>
			      			</li>
			      			<li class="four-axis_screen">
			      				<div class="four-axis_screen-1">
			      					<span>四轴屏</span>
			   						<span style="margin-left:2.7vw;">185*178<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;left: 4%;margin-top:0.7vw;"class="close"></span>
			   					</div>
		      				</li>
			      			<li class="two">
			      				<div class="two-1">
			      					<span>小丈二</span>
			      					<span style="margin-left:2.7vw;">96*360<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;left: 10%;margin-top:0.7vw;"class="close"></span>
			   					</div>
			   				</li>
		   				</ul>
	      			</div>
	      			<div style="border-bottom: 0.3vw solid #ededed;margin-top:4.3vw;">
	      				<span style="margin:0 2vw 0 2vw; font-size:0.23rem;">类型</span>
	      				<ul class="size">
	      					<li class="chinese_painting">
	      						<span style="margin-left:5.3vw;font-size:0.23rem;">国画</span>
	      						<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 26%;left: 11%;"class="close">
	      					</li>
	      					<li class="calligraphy">
	      						<span style="margin-left:5.3vw;font-size:0.23rem;">书法</span>
	      						<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 26%;left: 11%;"class="close">
	      					</li>
	      				</ul>
	      			</div>
	      			<div style="border-bottom: 0.3vw solid #ededed;margin-top:4.3vw;" class="category"hidden="hidden">
		      			<ul class="size-1">
		      				<li class="landscape">
		      					<span style="margin-left:5.3vw;font-size:0.23rem;">山水</span>
		      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 26%;left: 11%;"class="close">
		   					</li>
		   					<li class="flowers_birds">
		      					<span style="margin-left:5.3vw;font-size:0.23rem;">花鸟</span>
		      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 26%;left: 11%;"class="close">
		      				</li>
		      				<li class="character">
		      					<span style="margin-left:5.3vw;font-size:0.23rem;">人物</span>
		      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 26%;left: 11%;"class="close">
		   					</li>
		      				<li class="beast">
		      					<span style="margin-left:5.3vw;font-size:0.23rem;">走兽</span>
		      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 26%;left: 11%;"class="close">
		      				</li>
		      				<li class="other">
		   						<span style="margin-left:5.3vw;font-size:0.23rem;">其他</span>
		      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 26%;left: 11%;"class="close">
		      				</li>
		      			</ul>
	      			</div>
	      			<div style="border-bottom: 0.3vw solid #ededed;margin-top:4.3vw;" class="species"hidden="hidden">
		      			<ul class="size-1">
		      				<li class="freehand">
		      					<span style="margin-left:5.3vw;font-size:0.23rem;">写意</span>
		      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 26%;left: 11%;"class="close">
		   					</li>
		      				<li class="white">
		      					<span style="margin-left:5.3vw;color:#999;font-size:0.23rem;">白描</span>
		      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 26%;left: 11%;"class="close">
		      				</li>
		      				<li class="ink">
		      					<span style="margin-left:5.3vw;font-size:0.23rem;">水墨</span>
		      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 26%;left: 11%;"class="close">
		      				</li>
		      				<li class="no_bone">
		      					<span style="margin-left:5.3vw;font-size:0.23rem;">没骨</span>
		      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 26%;left: 11%;"class="close">
		      				</li>
		      				<li class="brushwork">
		      					<span style="margin-left:5.3vw;font-size:0.23rem;">工笔</span>
		      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 26%;left: 11%;"class="close">
		   					</li>
		      			</ul>
	      			</div>
	      			<div style="border-bottom: 0.3vw solid #ededed;margin-top:4.3vw;" class="calligraphy_1" hidden="hidden">
		      			<ul class="size-1">
		      				<li class="poetry">
		      					<span style="margin-left:5.3vw;font-size:0.23rem;">诗词</span>
		      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 27%;left: 11%;"class="close">
		   					</li>
		   					<li class="four_character_list">
		      					<span style="margin-left:4vw;font-size:0.23rem;">四字榜书</span>
		      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: -73%;left: 84%;"class="close">
		      				</li>
		      			</ul>
	      			</div>
	      			<div style="margin:4.3vw 0 0 2vw;">
	      				<span style="font-size:0.21rem;">价格区间</span>
	      				<div style="width:68vw;height:8.7vw;background-color: #f3f3f3;margin-top:3.7vw;line-height: 8.7vw;text-align: center;">
	      					<input type="text" readonly="readonly" style="width:26.7vw;height:6.1vw;text-align: center;color:#e4e4e4;border: none;font-size:0.18rem;"value="最低价"/>
	      					<input type="text" readonly="readonly" style="width:26.7vw;height:6.1vw;text-align: center;color:#e4e4e4;border: none;font-size:0.18rem;" value="最高价"/>
	      				</div></div>
	      			<div class="botton" >
	    				<div>
	    					<button class="reset">重置</button>
	    				</div>
	    				<div>
	    					<button class="finished">完成</button>
	    				</div>
	    			</div>
	    		</div>
	  		</div>
	  	</div>
    </div>
</div>
</body>
<script>
var page=1;
var productSize,productType,productStyle,productLevel,simsearch,changeprice;
changeprice=sessionStorage.getItem("changeprice");
if(productSize==undefined){
	productSize='';
}if(productType==undefined){
	productType='';
}if(productStyle==undefined){
	productStyle='';
}if(productLevel==undefined){
	productLevel='';
}if(simsearch==undefined){
	simsearch='';
}if(changeprice==undefined){
	changeprice='';
}
function loadMsg2(){
	var pageEnd = true,li='';
	do{
		$.ajax({
			type:'POST',
			url:"<%=request.getContextPath()%>/api/product/listDetail",
			dataType:'json',
			data:{"jsonStr":"{'pageNo':"+page+",'listLen':10,'draw':1,'productSize':'"+productSize+"','productType':'"+productType+"','productStyle':'"+productStyle+"','productLevel':'"+productLevel+"','orderMsg':'"+simsearch+"','rent':'"+changeprice+"'}"},
			success:function(data){
				console.log(data);
				var l='';
				for(var i=0;i<data.data.length;i++){
			    	l="<li value='"+data.data[i].productId+"' onclick='turnTo(this)'>"
	    				+"<div class='vertical-1'>"
	    				+"<img src='"+data.data[i].productPictureMainCompress+"'>"
	    				+"<div>"
	    				+"<div>"
	    				+"<span class='name-1'>"+data.data[i].productName+"</span>"
	    				+"<span class='changeauthor'>作者:"+data.data[i].productAuthor+"</span>"
	    				+"</div>"
	    				+"<div>"
	    				+"<span>产品状态:"+data.data[i].productMountedStatus+"</span>"
	    				+"<span>产品尺寸:"+data.data[i].productSize+"</span>"
	    				+"<span>内容类型:"+data.data[i].productType+"</span>"
	    				+"</div>"
	    				+"<div>"
	    				+"<span>共享价</span>"
	    				+"<span>￥<a>"+data.data[i].productSharingValue+"</a></span>"
	    				+"<span>2000人收藏</span>"
	    				+"</div>"
	    				+"</div>"
	    				+"</div>"
	    				+"</li>";
					li+=l;
				}
				$(".am-avg-sm").append(li);
				//判断画名过长换省略号
				$(".name-1").each(function(){
					var fh=$(this).text();
					var maxwidth=3;
					if(fh.indexOf("《")==-1){
						console.log("shi");
						if($(this).text().length>maxwidth){
			    			$(this).text('《'+$(this).text().substring(0,maxwidth)+'...》');
			    		}else{
			    			$(this).text('《'+$(this).text()+'》');
			    		}
					}
				});
				pageEnd=data.data.isEnd;
				page++;
			},
			error:function(data){
				console.log('shibai');
			}
		})
	}while(!pageEnd);
	//$(".am-avg-sm").append(li);
}
$(function(){
	/*ajax请求输出产品列表*/
	loadMsg2();
});
//简单搜索需要在移动端进行确认输入
function simpleSearch(){
	$("#wrap ul").empty();
	simsearch=$("#simsearch").val();
	page=1
	loadMsg2();
	return false;
}
//复杂搜索
$("#finishId").on("click",function(){
    	var arr=[];
    	$('#doc-oc-demo1 img').each(function(){
    		if($(this).attr("class")==''){
				var choose=$(this).parents("li").find("span").eq(0).text();
    			arr.push(choose);
    		}
    	})
    	//var array=['四尺','六尺','四条屏','小丈二','山水','花鸟','走兽','人物','国画其他','诗词','四字榜书','其他书法','国画','书法','国家级','中书协中美协','省级']
    	for(var i=0;i<arr.length;i++){
    		switch(arr[i]){
    			case '四尺':
    				productSize=arr[i];
    				break;
    			case '六尺':
    				productSize=arr[i];
    				break;
    			case '四条屏':
    				productSize=arr[i];
    				break;
    			case '小丈二':
    				productSize=arr[i];
    				break;
    			case '山水':
    				productType=arr[i];
    				break;
    			case '花鸟':
    				productType=arr[i];
    				break;
    			case '走兽':
    				productType=arr[i];
    				break;
    			case '人物':
    				productType=arr[i];
    				break;
    			case '国画其他':
    				productType=arr[i];
    				break;
    			case '诗词':
    				productType=arr[i];
    				break;
    			case '四字榜书':
    				productType=arr[i];
    				break;
    			case '其他书法':
    				productType=arr[i];
    				break;
    			case '国画':
    				productStyle=arr[i];
    				break;
    			case '书法':
    				productStyle=arr[i];
    				break;
    			case '国家级':
    				productLevel=arr[i];
    				break;
    			case '中书协中美协':
    				productLevel=arr[i];
    				break;
    			case '省级':
    				productLevel=arr[i];
    				break;
    			default:
    				break;
    		}
    	};
		$(".am-avg-sm").empty();
		page=1;
		loadMsg2();
})
function turnTo(msg){
	/* alert("id"+$(msg).attr("value"));
	alert("changeProductPicture"+$(msg).find("img").attr("src"));
	alert("changeProductName"+$(msg).find(".name-1").html());
	alert("changeProductAuthor"+$(msg).find(".changeauthor").html()); */
	//调换作品id
	sessionStorage.setItem("changeProductId",$(msg).attr("value"));
	//调换作品图片
	sessionStorage.setItem("changeProductPicture",$(msg).find("img").attr("src"));
	//调换作品名
	sessionStorage.setItem("changeProductName",$(msg).find(".name-1").html());
	//调换作品作者
	sessionStorage.setItem("changeProductAuthor",$(msg).find(".changeauthor").html());
	window.open("<%=request.getContextPath()%>/client/payment/change.jsp","_self");
}
</script>
</html>