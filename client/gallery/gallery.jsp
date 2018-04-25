<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>画廊</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<meta name="renderer" content="webkit">
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/amazeui/css/amazeui.min.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/layui/css/layui.css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/default/style.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/gallery/gallery.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/wrapperuser.css"/>
<script src="<%=request.getContextPath()%>/lib/amazeui/js/jquery.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/amazeui/js/amazeui.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
</head>
<body  style="font-size: 0.25rem;">
<div class="container" style="overflow:auto;">
	<header class="my-header" style="z-index:999!important;position: relative;border-bottom: 0.8vw solid #ededed;">
		<div class="head">
			<div class="search">
				<form onsubmit="return simpleSearch()">
				<img src="<%=request.getContextPath()%>/commons/image/client/index/search.png" class="search_img">
				<input type="text" placeholder="请输入关键词" class="search-input-box" id="simsearch" style = "width:50vw">
				</form>
	      	</div>
	      	<div style="margin-left:6.3vw;line-height: 8.3vw;">
	      		<span class="selected"><a href="#doc-oc-demo1" data-am-offcanvas>筛选</a></span>
				<a href="#doc-oc-demo1" data-am-offcanvas><img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_28.png" class="selected_img selected_img"></a>
	      	</div>
      	</div>
    </header>
    <!-- banner -->
    <div>
    	<div class="sorting">
    		<span class="selected integrated summons">综合排序</span>
    		<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_26.png" class="down_img summons">
    		<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_25.png" class="place_img horizontal_img">
    		<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_27.png" class="place_img vertical" hidden="hidden">
    	</div>
    	<ul class="sorting-place" hidden="hidden">
    		<li class="sorting-list list_place" value="1">综合排序</li>
    		<li class="sorting-list list_height" value="0">价格从高到低</li>
    		<li class="sorting-list list_down" value="1">价格从低到高</li>
    	</ul>
    	
    	<!-- 格子排列 --> 
    	<div  class="horizontal" id="wrapper" style="height:76vh;top:15vh">
    		<div id="scroller">
    	<div id="pullDown" class="loading">
			<span class="pullDownIcon"></span><span class="pullDownLabel">加载中...</span>
		</div>
		<div >
			<ul class="am-avg-sm-2">
			<!--ajax动态获取数据-->
			</ul>
		</div>
		<div id="noRecord" style="display:none;">
			<span class="no-record-pic"></span>
			<span class="no-msg">我们也是有底线的</span>
		</div> 
        <div id="pullUp" style="display:none;margin-top:2px">
				<span class="pullUpIcon"></span><span class="pullUpLabel">加载更多...</span>
		</div>
			</div>
    	</div>
    	
    	<!-- 垂直排列 --> 
     	<div hidden="hidden" class="vertical" id="wrap" style="height:80vh;margin-top: -3vh">
     	<div>
    	<div id="pullDownTwice" class="loading">
			<span class="pullDownIconTwice"></span><span class="pullDownLabelTwice">加载中...</span>
		</div>
    	<div>
    		<ul class="am-avg-sm">
    			<!-- ajax动态获取数据 -->
    		</ul>
    	</div> 
    	<div id="noRecordTwice" style="display:none;">
			<span class="no-record-pic"></span>
			<span class="no-msg">我们也是有底线的</span>
		</div> 
        <div id="pullUpTwice" style="display:none;margin-top:2px">
				<span class="pullUpIconTwice"></span><span class="pullUpLabelTwice">加载更多...</span>
		</div>
		</div>
    	</div> 
    	
    	
    	
    </div>
    <div id="doc-oc-demo1" class="am-offcanvas">
  		<div class="am-offcanvas-bar am-offcanvas-bar-flip">
    		<div class="am-offcanvas-content" style="height: 90vw; ">
    			<div style="border-bottom: 0.3vw solid #ededed;margin-top:4.3vw;">
      				<span style="margin-left:2vw;font-size:0.23rem;">级别</span>
	      				<ul class="size">
	      					<li class="provincial">
	      						<span style="margin-left:5.3vw;font-size:0.23rem;">省级</span>
	      						<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 24%;left: 11.2%;"class="close">
	      					</li>
	      					<li class="sino-american_association">
	      						<span>中美协/中书协</span>
	      						<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: -74%;left: 42.7%;"class="close">
	      					</li>
	      					<li class="national_level">
	      						<span style="margin-left:4.8vw;font-size:0.23rem;">国家级</span>
	      						<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 24%;left: 4%;"class="close">
	      					</li>
	      				</ul>
      			</div>
      			<div style="border-bottom: 0.3vw solid #ededed;margin-top:3.2vw;">
      				<span style="margin-left:2vw; font-size:0.23rem;">尺寸 (标注单位: CM)</span>
	      			<ul class="size">
	      				<li class="four_feet">
	      					<div class="four_feet-1">
	      						<span>四尺</span>
	   							<span style="margin-left:2.7vw;">69*138<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;left: 15%;margin-top:1.1vw;"class="close"></span>
	      					</div>
	      
		      			</li>
		     			<li class="six_feet">
		      				<div class="six_feet-1">
		   						<span>六尺</span>
		   						<span style="margin-left:2.7vw;">96*178<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;left: 10%;margin-top:1.1vw;"class="close"></span>
	      					</div>
		      			</li>
		      			<li class="four-axis_screen">
		      				<div class="four-axis_screen-1">
		      					<span>四轴屏</span>
		   						<span style="margin-left:2.7vw;">185*178<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;left: 4%;margin-top:1.1vw;"class="close"></span>
		   					</div>
	      				</li>
		      			<li class="two">
		      				<div class="two-1">
		      					<span>小丈二</span>
		      					<span style="margin-left:2.7vw;">96*360<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;left: 10%;margin-top:1.1vw;"class="close"></span>
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
<%--       			<div style="border-bottom: 0.3vw solid #ededed;margin-top:4.3vw;" class="species" hidden="hidden">
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
      			</div> --%>
      			<div style="border-bottom: 0.3vw solid #ededed;margin-top:4.3vw;" class="calligraphy_1" hidden="hidden">
	      			<ul class="size-1">
	      				<li class="poetry">
	      					<span style="margin-left:5.3vw;font-size:0.23rem;">诗词</span>
	      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 27%;left: 11%;"class="close">
	   					</li>
	   					<li class="four_character_list">
	      					<span style="margin-left:4vw;font-size:0.23rem;">四字榜书</span>
	      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: -80%;left: 84%;"class="close">
	      				</li>
	      				<li class="other_1">
	      					<span style="margin-left:5.3vw;font-size:0.23rem;">其他</span>
	      					<img src="<%=request.getContextPath()%>/commons/image/client/gallery/icon_30.png"style="width:3.3vw;height:3.3vw;position: relative;top: 27%;left: 11%;"class="close">
	   					</li>
	      			</ul>
      			</div>
<!--       			<div style="margin:4.3vw 0 0 2vw;">
      				<span style="font-size:0.21rem;">画作市场价</span>
      				<div style="width:68vw;height:8.7vw;background-color: #f3f3f3;margin-top:3.7vw;line-height: 8.7vw;text-align: center;">
      					<input readonly="readonly" type="text" style="width:26.7vw;height:6.1vw;text-align: center;color:#fea427;border: none;font-size:0.18rem;" value="最低价"/>
      					<span style="font-size:0.21rem;font-weight:900;">—</span>
      					<input readonly="readonly" type="text" style="width:26.7vw;height:6.1vw;text-align: center;color:#fea427;border: none;font-size:0.18rem;" value="最高价"/>
      				</div>
      				<span style="margin-top:5.6vw;display: block;font-size:0.21rem;">画作租凭价</span>
      				<div style="margin-top:3.7vw;width:68vw;height:8.7vw;background-color: #f0f0f0;line-height: 8.7vw;text-align: center;">
      					<input readonly="readonly" type="text" style="width:26.7vw;height:6.1vw;text-align: center;color:#fea427;border: none;font-size:0.18rem;" value="最低价"/>
      					<span style="font-size:0.21rem;font-weight:900;">—</span>
      					<input readonly="readonly" type="text" style="width:26.7vw;height:6.1vw;text-align: center;color:#fea427;border: none;font-size:0.18rem;" value="最高价"/>
      				</div>
      			</div> -->
      			    		  	<div class="botton" style = "position:relative;">
    				<div>
    					<button class="reset">重置</button>
    				</div>
    				<div>
    					<button class="finished" id="finishId">完成</button>
    				</div>
    			</div>
    		</div>
  		</div>
	</div>
</div>
<div id = "menuH" class="menu">
	<a href="<%=request.getContextPath()%>/client/index/index.jsp">
		<img src="<%=request.getContextPath()%>/commons/image/client/index/home.png">
		首页
	</a>
	<a href="<%=request.getContextPath()%>/client/gallery/gallery.jsp" style="color: #fea427;">
		<img src="<%=request.getContextPath()%>/commons/image/client/index/galleryin.png">
		画廊
	</a>
	<a href="<%=request.getContextPath()%>/client/my/my_index.jsp" >
		<img src="<%=request.getContextPath()%>/commons/image/client/index/my.png">
		我的
	</a>
</div>


<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/gallery.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/iscroll.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/pullrefresh.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/pullrefreshTwice.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
<script>
var smallErr = "<%=request.getContextPath()%>/commons/image/smallErr.png";
var bigErr = "<%=request.getContextPath()%>/commons/image/bigErr.png";
//方式一、二的默认循环输出列表---------------------------
$(function(){
	/*ajax请求输出产品列表*/
	if(sessionStorage.getItem('productTypes') != ""){
		productTypes.push(sessionStorage.getItem('productTypes'));
	}
	/*看是否是首页请输入画作名进入的画廊查询,查看页面url后缀是否有?,进行解析*/
	var galleryMsg=window.location.search.slice(window.location.search.lastIndexOf("?galleryMsg=")+12);
	var index=window.location.search.slice(window.location.search.lastIndexOf("?index=")+7);
	if(galleryMsg != ""){
		simsearch = galleryMsg;
		$("#simsearch")[0].value = simsearch;
	}else{
		$("#simsearch")[0].value = "";
	}
	if(index != ""){
		productTypes.push(index);
	}else{
		productTypes = [];
	}
	
	//loadMsg1();
	//pull();
	//loadMsg2();
	$("#simsearch").focus();
	simpleSearch();
});
//
var page=1,isEnd;
var footer=false;
var productSize,productStyle,productLevel,simsearch,sort;
var productTypes = new Array();
if(productSize==undefined){
	productSize='';
}if(productTypes==undefined){
	productTypes=[];
}if(productStyle==undefined){
	productStyle='';
}if(productLevel==undefined){
	productLevel='';
}if(simsearch==undefined){
	simsearch='';
}if(sort==undefined){
	sort='';
}
$(".sorting-place li").click(function(){
	sort=$(this).attr("value");
	$(".am-avg-sm-2").empty();
	$(".am-avg-sm").empty();
	page=1;
	pull();
	//loadMsg1();
	//loadMsg2();
})
function loadMsg1(){
	$.ajax({
		type:'POST',
		url:"<%=request.getContextPath()%>/api/product/listSimpleSort",
		dataType:'json',
		data:{"jsonStr":"{'pageNo':"+page+",'listLen':10,'draw':1,'productSize':'"+productSize+"','productTypes':'"+productTypes+"','productStyle':'"+productStyle+"','productLevel':'"+productLevel+"','orderMsg':'"+simsearch+"','sort':'"+sort+"'}"},
		success:function(data){
			var li='';
			for(var i=0;i<data.data.listProduct.length;i++){
				var l="<li value='"+data.data.listProduct[i].id+"' onclick='turnTo(this)'>"
        			+"<div class='am-panel am-panel-default'>"
        			+"<div>"
        			+"<img class='am-img-responsive' src='"+data.data.listProduct[i].productPictureMainCompress+"'  onerror = 'javascript:this.src = \""+bigErr+"\"' >"
        			+"<div style='display:flex;flex-direction:row;'>"
        			+"<input type='text' readonly='readonly' class='name' value='"+data.data.listProduct[i].productName+"'/>"
        			+"<span style='margin-top:7px;display:block;'>共享价</span>"
        			+"</div>"
        			+"<div>"
        			+"<span>作者:"+data.data.listProduct[i].productAuthor+"</span>"
        			+"<span>￥<a>"+data.data.listProduct[i].productSharingValue+"</a></span>"
        			+"</div>"
        			+"</div>"
        			+"</div>"
        			+"</li>";
        		li+=l;
			}
			$(".am-avg-sm-2").append(li);
			//$(".am-avg-sm").empty();
			//判断画名过长换省略号
			$(".name").each(function(){
				var fh=$(this).val();
				var maxwidth=3;
				if(fh.indexOf("《")==-1){
					console.log("shi");
					if($(this).val().length>maxwidth){
		    			$(this).val('《'+$(this).val().substring(0,maxwidth)+'...》');
		    		}else{
		    			$(this).val('《'+$(this).val()+'》');
		    		}
				}
			});
			if(!data.data.isEnd){
				page++;
			}
			else{
				isEnd=true;
			}
		},
		error:function(data){
			console.log('shibai');
		}
	})
}
function loadMsg2(){
	$.ajax({
		type:'POST',
		url:"<%=request.getContextPath()%>/api/product/listSimpleSort",
		dataType:'json',
		data:{"jsonStr":"{'pageNo':"+page+",'listLen':10,'draw':1,'productSize':'"+productSize+"','productTypes':'"+productTypes+"','productStyle':'"+productStyle+"','productLevel':'"+productLevel+"','orderMsg':'"+simsearch+"','sort':'"+sort+"'}"},
		success:function(data){
			var li='',l='';
			for(var i=0;i<data.data.listProduct.length;i++){
		    	l="<li value='"+data.data.listProduct[i].id+"' onclick='turnTo(this)'>"
    				+"<div class='vertical-1'>"
    				+"<img src='"+data.data.listProduct[i].productPictureMainCompress+"' onerror = 'javascript:this.src = \""+smallErr+"\"'>"
    				+"<div>"
    				+"<div>"
    				+"<span class='name-1'>"+data.data.listProduct[i].productName+"</span>"
    				+"<span>作者:"+data.data.listProduct[i].productAuthor+"</span>"
    				+"</div>"
    				+"<div>"
    				+"<span>产品状态:"+data.data.listProduct[i].productMountedStatus+"</span>"
    				+"<span>&nbsp;&nbsp;&nbsp;产品尺寸:"+data.data.listProduct[i].productSize+"</span>"
    				+"<span>&nbsp;&nbsp;&nbsp;内容类型:"+data.data.listProduct[i].productType+"</span>"
    				+"</div>"
    				+"<div>"
    				+"<span>共享价</span>"
    				+"<span>￥<a>"+data.data.listProduct[i].productSharingValue+"</a></span>"
    				+"<span>2000人收藏</span>"
    				+"</div>"
    				+"</div>"
    				+"</div>"
    				+"</li>";
				li+=l;
			}
			//$(".am-avg-sm-2").empty();
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
			if(!data.data.isEnd){
				page++;
			}
			else{
				isEnd=true;
			}
		},
		error:function(data){
			console.log('shibai');
		}
	})
}

//方式一的下拉刷新和上拉加载----------------------------------
//调用refresher对象的init方法，他会连续调用下面的所有方法
/* refresher.init({
	id:"wrapper",
	pullDownAction:Refresh,                                                            
	pullUpAction:Load 																			
});		
//刷新10条数据
function Refresh() {																
	$("#wrapper ul").empty();
	page=1;
	loadMsg1();
	wrapper.refresh();
}
//加载10条数据
function Load() {
	if(isEnd){
		return;
	}
	loadMsg1();
	wrapper.refresh();	
} */
//排列方式2的下拉刷新、上拉加载--------------------------------
//调用refresher对象的init方法，他会连续调用下面的所有方法
/* refresher.init({
	id:"wrap",
	pullDownAction:Refresh2,                                                            
	pullUpAction:Load2 																			
});	
//刷新10条数据
function Refresh2(){																
	$("#wrap ul").empty();
	page=1;
	loadMsg2();
 	wrap.refresh();
}
//加载10条数据
function Load2() {
	if(isEnd){
		return;
	}
	loadMsg2();
	wrap.refresh();
} */

//简单搜索需要在移动端进行确认输入
function simpleSearch(){
	$("#wrapper ul").empty();
	$("#wrap ul").empty();
	simsearch=$("#simsearch").val();
	//loadMsg1();
	//loadMsg2();
	pull();
	return false;
}
//打开
function doc_demo(){
	if($('#doc-oc-demo1')[0].style.display == "none"){
		$('#doc-oc-demo1')[0].style.display = "block";
	}
}
//复杂搜索
$("#finishId").on("click",function(){
	productSize="";
	productTypes=[];
	productStyle="";
	productLevel="";
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
    				productSize=0;
    				console.log(productSize);
    				break;
    			case '六尺':
    				productSize=1;
    				break;
    			case '四条屏':
    				productSize=2;
    				break;
    			case '小丈二':
    				productSize=3;
    				break;
    			case '山水':
    				productTypes.push(0);
    				break;
    			case '花鸟':
    				productTypes.push(1);
    				break;
    			case '走兽':
    				productTypes.push(2);
    				break;
    			case '人物':
    				productTypes.push(3);
    				break;
    			case '国画其他':
    				productTypes.push(4);
    				break;
    			case '诗词':
    				productTypes.push(6);
    				break;
    			case '四字榜书':
    				productTypes.push(5);
    				break;
    			case '其他书法':
    				productTypes.push(7);
    				break;
    			case '国画':
    				productStyle=0;
    				break;
    			case '书法':
    				productStyle=1;
    				break;
    			case '国家级':
    				productLevel=0;
    				break;
    			case '中书协中美协':
    				productLevel=1;
    				break;
    			case '省级':
    				productLevel=2;
    				break;
    			default:
    				break;
    		}
    	}
    	if(arr.length == 0){
    		productSize="";
    		productTypes="";
    		productStyle="";
    		productLevel="";
    	}
    	$(".am-avg-sm-2").empty();
		$(".am-avg-sm").empty();
		$("#doc-oc-demo1").offCanvas('close');
		page=1;
		//loadMsg1();
		//loadMsg2();
		pull();
		//$('#doc-oc-demo1')[0].style.display = "none";
})
/*跳转至作品详情页*/
function turnTo(data){
	var proId=$(data).attr("value");
	localStorage.setItem("proId",proId);
	window.open('<%=request.getContextPath()%>/client/payment/share.jsp','_self');
}
//上拉
var pullUp = function() {
	if(footer==true){
		myScroll.refresh();
		return false;
	}
	pull();
}
// 下拉
var pullDown = function() {
	page=1;
	start = 0;
	footer = false;
	document.getElementById('noRecord').innerHTML = "noShowType";
	$(".am-avg-sm-2").empty();
	$(".am-avg-sm").empty();
	pull();
}
//上拉
var pullUpTwice = function() {
	if(footer==true){
		myScroll.refresh();
		return false;
	}
	pull("twice");
}
// 下拉
var pullDownTwice = function() {
	page=1;
	start = 0;
	footer = false;
	document.getElementById('noRecordTwice').innerHTML = "noShowType";
	$(".am-avg-sm-2").empty();
	$(".am-avg-sm").empty();
	pull("twice");
}
//拉取数据
var pull = function(flag){
	var param = {
			url: "<%=request.getContextPath()%>/api/product/listSimpleSort",
			data: {"jsonStr":"{'pageNo':"+page+",'listLen':10,'draw':1,'productSize':'"+productSize+"','productTypes':'"+productTypes+"','productStyle':'"+productStyle+"','productLevel':'"+productLevel+"','orderMsg':'"+simsearch+"','sort':'"+sort+"'}"},
			successCallback: function(data){
				if(data.data.listProduct.length>0){
					var datas = data.data.draw;
					if(page * 10 > data.data.page.totalCount){
						footer = true;
						document.getElementById('noRecord').innerHTML = "showType";
						document.getElementById('noRecordTwice').innerHTML = "showType";
					}
					//是否有数据
					data.data.listProduct.length == 0 ? $("#noRecord").show() : $("#noRecord").hide();
					//$(".am-avg-sm-2").empty();
					var li='',l='';
					page++;
					for(var i=0;i<data.data.listProduct.length;i++){
						if(flag == "twice"){
					    	l="<li value='"+data.data.listProduct[i].id+"' onclick='turnTo(this)'>"
		    				+"<div class='vertical-1'>"
		    				+"<img src='"+data.data.listProduct[i].productPictureMainCompress+"' onerror = 'javascript:this.src = \""+smallErr+"\"'>"
		    				+"<div>"
		    				+"<div>"
		    				+"<span class='name-1'>"+data.data.listProduct[i].productName+"</span>"
		    				+"<span>作者:"+data.data.listProduct[i].productAuthor+"</span>"
		    				+"</div>"
		    				+"<div>"
		    				+"<span>产品状态:"+data.data.listProduct[i].productMountedStatus+"</span>"
		    				+"<span>&nbsp;&nbsp;&nbsp;产品尺寸:"+data.data.listProduct[i].productSize+"</span>"
		    				+"<span>&nbsp;&nbsp;&nbsp;内容类型:"+data.data.listProduct[i].productType+"</span>"
		    				+"</div>"
		    				+"<div>"
		    				+"<span>共享价</span>"
		    				+"<span>￥<a>"+data.data.listProduct[i].productSharingValue+"</a></span>"
		    				+"<span>2000人收藏</span>"
		    				+"</div>"
		    				+"</div>"
		    				+"</div>"
		    				+"</li>";
						}else{
							l="<li value='"+data.data.listProduct[i].id+"' onclick='turnTo(this)'>"
		        			+"<div class='am-panel am-panel-default'>"
		        			+"<div>"
		        			+"<img class='am-img-responsive' src='"+data.data.listProduct[i].productPictureMainCompress+"' onerror = 'javascript:this.src = \""+bigErr+"\"'>"
		        			+"<div style='display:flex;flex-direction:row;'>"
		        			+"<input type='text' readonly='readonly' class='name' value='"+data.data.listProduct[i].productName+"'/>"
		        			+"<span style='margin-top:7px;display:block;'>共享价</span>"
		        			+"</div>"
		        			+"<div>"
		        			+"<span>作者:"+data.data.listProduct[i].productAuthor+"</span>"
		        			+"<span>￥<a>"+data.data.listProduct[i].productSharingValue+"</a></span>"
		        			+"</div>"
		        			+"</div>"
		        			+"</div>"
		        			+"</li>";
						}
						li+=l;
					}
					if(flag == "twice"){
						$(".am-avg-sm-2").empty();
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
						myScrollTwice.refresh();
					}else{
						$(".am-avg-sm").empty();
						$(".am-avg-sm-2").append(li);
						//判断画名过长换省略号
						$(".name").each(function(){
							var fh=$(this).val();
							var maxwidth=3;
							if(fh.indexOf("《")==-1){
								console.log("shi");
								if($(this).val().length>maxwidth){
					    			$(this).val('《'+$(this).val().substring(0,maxwidth)+'...》');
					    		}else{
					    			$(this).val('《'+$(this).val()+'》');
					    		}
							}
						});
						if(page>1){
							myScroll.refresh();	
						}
					}
	   				//$("#list").show;
				}
			},
			errorCallBack: function() {
				console.log("ssssss");
			}
			}
			getDataFromServer(param);
	
	<%-- $.ajax({
		url:"<%=request.getContextPath()%>/api/product/listSimpleSort",
   		dataType:'json',
		data:{"jsonStr":"{'pageNo':"+page+",'listLen':10,'draw':1,'productSize':'"+productSize+"','productTypes':'"+productTypes+"','productStyle':'"+productStyle+"','productLevel':'"+productLevel+"','orderMsg':'"+simsearch+"','sort':'"+sort+"'}"},
		type:'post',
   		success:function(data){
   			if(data.data.listProduct.length>0){
				var datas = data.data.draw;
				if(page * 10 > data.data.page.totalCount){
					footer = true;
					document.getElementById('noRecord').innerHTML = "showType";
					document.getElementById('noRecordTwice').innerHTML = "showType";
				}
				//是否有数据
				data.data.listProduct.length == 0 ? $("#noRecord").show() : $("#noRecord").hide();
				//$(".am-avg-sm-2").empty();
				var li='',l='';
				page++;
				for(var i=0;i<data.data.listProduct.length;i++){
					if(flag == "twice"){
				    	l="<li value='"+data.data.listProduct[i].id+"' onclick='turnTo(this)'>"
	    				+"<div class='vertical-1'>"
	    				+"<img src='"+data.data.listProduct[i].productPictureMainCompress+"' onerror = 'javascript:this.src = \""+smallErr+"\"'>"
	    				+"<div>"
	    				+"<div>"
	    				+"<span class='name-1'>"+data.data.listProduct[i].productName+"</span>"
	    				+"<span>作者:"+data.data.listProduct[i].productAuthor+"</span>"
	    				+"</div>"
	    				+"<div>"
	    				+"<span>产品状态:"+data.data.listProduct[i].productMountedStatus+"</span>"
	    				+"<span>&nbsp;&nbsp;&nbsp;产品尺寸:"+data.data.listProduct[i].productSize+"</span>"
	    				+"<span>&nbsp;&nbsp;&nbsp;内容类型:"+data.data.listProduct[i].productType+"</span>"
	    				+"</div>"
	    				+"<div>"
	    				+"<span>共享价</span>"
	    				+"<span>￥<a>"+data.data.listProduct[i].productSharingValue+"</a></span>"
	    				+"<span>2000人收藏</span>"
	    				+"</div>"
	    				+"</div>"
	    				+"</div>"
	    				+"</li>";
					}else{
						l="<li value='"+data.data.listProduct[i].id+"' onclick='turnTo(this)'>"
	        			+"<div class='am-panel am-panel-default'>"
	        			+"<div>"
	        			+"<img class='am-img-responsive' src='"+data.data.listProduct[i].productPictureMainCompress+"' onerror = 'javascript:this.src = \""+bigErr+"\"'>"
	        			+"<div style='display:flex;flex-direction:row;'>"
	        			+"<input type='text' readonly='readonly' class='name' value='"+data.data.listProduct[i].productName+"'/>"
	        			+"<span style='margin-top:7px;display:block;'>共享价</span>"
	        			+"</div>"
	        			+"<div>"
	        			+"<span>作者:"+data.data.listProduct[i].productAuthor+"</span>"
	        			+"<span>￥<a>"+data.data.listProduct[i].productSharingValue+"</a></span>"
	        			+"</div>"
	        			+"</div>"
	        			+"</div>"
	        			+"</li>";
					}
					li+=l;
				}
				if(flag == "twice"){
					$(".am-avg-sm-2").empty();
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
					myScrollTwice.refresh();
				}else{
					$(".am-avg-sm").empty();
					$(".am-avg-sm-2").append(li);
					//判断画名过长换省略号
					$(".name").each(function(){
						var fh=$(this).val();
						var maxwidth=3;
						if(fh.indexOf("《")==-1){
							console.log("shi");
							if($(this).val().length>maxwidth){
				    			$(this).val('《'+$(this).val().substring(0,maxwidth)+'...》');
				    		}else{
				    			$(this).val('《'+$(this).val()+'》');
				    		}
						}
					});
					if(page>1){
						myScroll.refresh();	
					}
				}
   				//$("#list").show;
			}
   		}
   	}); --%>
}
</script>
</body>
</html>