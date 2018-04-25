<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>共享书画</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<meta name="renderer" content="webkit">
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/amazeui/css/amazeui.min.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/layui/css/layui.css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/default/style.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/index/index.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/dist/style.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/swiper/swiper-3.4.2.min.css">
<%-- <link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/wrapperuser.css"/> --%>
<script src="<%=request.getContextPath()%>/lib/swiper/swiper-3.4.2.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/amazeui/js/jquery.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/amazeui/js/amazeui.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
<style type="text/css">
    	 .swiper-wrapper,.swiper-slide{
    		width:100%;
    	}
    	.swiper-wrapper,.swiper-slide>img{
    		width:100%;
    		z-index:-1;
    	}
    	.swiper-slide>div{
    		position:absolute;
    		z-index:2;
    		left:0vw;
    		top:49.33vw;
    		font-size:0.1rem;
    		width: 100%;
    		height: 6.67vw;
    		line-height:6.67vw;
		    color: #fff;
		    background-color: rgba(0,0,0,0.5);
		    text-align: center;
    	} 
    	.placehoders::-ms-input-placeholder{text-align: center;font-size: 0.25rem;color: #808080;} 
		.placehoders::-webkit-input-placeholder{text-align: center;font-size: 0.25rem;color: #808080;} 
</style>
</head>
<body style="font-size: 0.25rem;">
<div class="container">

	<header class="my-header">
		<div class="search">
			<input type="text" placeholder="搜索老师,类型,作品名" class="search-input-box placehoders" id = "galleryMsg" onkeypress="prosearch()">
      	</div>
      	<div style = "width:3vw;float:left;margin-left:1vw">
      		<input type = "button" value = "扫码" style = "height:7.5vw;width:10vw">   
      	</div>  
    </header>
            <div id="wrapper" style="top:8vh">
		<div id="scroller">
    <!-- banner -->
     <div class="swiper-container"style="width: 100%;"><!--swiper容器[可以随意更改该容器的样式-->  
    	<div id="banner" class="swiper-wrapper">  
	    </div>  
	</div> 
    <div class="guarantee">
    	<span>共享书画由中国平安保险有限公司担保真伪。</span>
    </div>
    <div>
   	 	<ul class = "information-2">
			<li>
				<div class="am-gallery-item">
   					<a href="#">
     				<img class="information"/>
       				<span class="am-gallery-title">eqweqwe</span>
   					</a>
				</div>
			</li>
			<li>
				<div class="am-gallery-item">
   					<a href="#">
     				<img class="information"/>
       				<span class="am-gallery-title">eqweqwe</span>
   					</a>
				</div>
			</li>
    	</ul>
    </div>
    
    
    
    <div class="am-cf am-g list">
   		<ul>
   		<li class="li">
   			<div><span class="art">艺术分类</span></div>
   			<table class="classify">
   				<tr>
   					<td>国画</td>
   					<td class="landscape">
   						<div class="site-demo-button">
							<button data-method="confirmTrans" id="landscape" class="layui-btn" onclick = "searchStyle(0)">山水</button>
						</div>
   					</td>
   					<td class="flowers_birds">
   					<div class="site-demo-button">
   						<button data-method="confirmTrans" id="flowers_birds" class="layui-btn" onclick = "searchStyle(1)">花鸟</button>
   					</div>
   					</td>
   					<td class="character">
   						<div class="site-demo-button">
   							<button data-method="confirmTrans" id="character" class="layui-btn" onclick = "searchStyle(3)">人物</button>
   						</div>
   					</td>
<!--    					<td class="beast">
   						<div class="site-demo-button">
   							<button data-method="confirmTrans" id="beast" class="layui-btn" onclick = "searchStyle(2)">走兽</button>
   						</div>
   					</td>
   					<td class="other">
   						<div class="site-demo-button">
   							<button data-method="confirmTrans" id="other" class="layui-btn" onclick = "searchStyle(4)">其他</button>
   						</div>
   					</td> -->
   				</tr>
   				<tr>
   					<td>书法</td>
<!--    					<td class="poetry">
   						<div class="site-demo-button">
   							<button data-method="confirmTrans" id="poetry" class="layui-btn" onclick = "searchStyle(6)">诗词</button>
   						</div>
   					</td>
   					<td class="book_list"colspan="2">
   						<div class="site-demo-button">
   							<button data-method="confirmTrans" id="book_list" class="layui-btn" onclick = "searchStyle(5)">四字榜书</button>
   						</div>
   					</td>
   					<td class="book_list">
   						<div class="site-demo-button">
   							<button data-method="confirmTrans" id="book_list" class="layui-btn" onclick = "searchStyle(7)">其他</button>
   						</div>
   					</td> -->
   				   	<td class="book_list">
   						<div class="site-demo-button">
   							<button data-method="confirmTrans" id="book_list" class="layui-btn" onclick = "searchStyle(5)">行书</button>
   						</div>
   					</td>	
   					<td class="book_list">
   						<div class="site-demo-button">
   							<button data-method="confirmTrans" id="book_list" class="layui-btn" onclick = "searchStyle(5)">草书</button>
   						</div>
   					</td>
   					<td class="book_list">
   						<div class="site-demo-button">
   							<button data-method="confirmTrans" id="book_list" class="layui-btn" onclick = "searchStyle(5)">隶书</button>
   						</div>
   					</td>
   					 <td class="book_list">
   						<div class="site-demo-button">
   							<button data-method="confirmTrans" id="book_list" class="layui-btn" onclick = "searchStyle(5)">篆书</button>
   						</div>
   					</td>
   				</tr>
   			</table>
   		</li>
   	</ul>
		<ul>
		   <li class="li teacher">
    			<div>
    				<span id="teacherall">
		   				<span class="recommend">推荐老师</span>
		   				<span class="view">查看全部</span>
		   				<img src="<%=request.getContextPath()%>/commons/image/client/index/right.png" class="right">
    				</span>
    			</div>
    		</li>
    		</ul>
    	<ul data-am-widget="gallery" class="am-gallery am-avg-sm-3 am-avg-md-4 am-avg-lg-5 am-gallery-overlay" data-am-gallery="{ pureview: true}" id="showTeacher">
      		<!--动态加载ajax数据-->
      		<%-- <li>
        		<div class="am-gallery-item">
            		<a href="#">
              			<img src="<%=request.getContextPath()%>/commons/image/pic/pic_1.png" class="pic" alt="妥木思"/>
                		<span class="am-gallery-title">妥木思</span>
            		</a>
        		</div>
      		</li> --%>
		 </ul>
		 <ul>
		    <li class="li popular">
		        <span>热门书画</span>
		        <span class="view" id="changeAll">换一批</span>
		        <img src="<%=request.getContextPath()%>/commons/image/client/index/refresh.png"style="width:4vw;margin-left:2vw;">
		    </li>
		 </ul>
			<div id="pullDown" class="stopDown">
				<span class="pullDownIcon"></span><span class="pullDownLabel"></span>
			</div>
		 <!-- 热门书画 -->
		 <div id="list">
		 <ul class="am-avg-sm-2" id="events-list">
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
    </div>
</div>
<div class="menu">
	<a href="<%=request.getContextPath()%>/client/index/index.jsp" style="color: #fea427;">
		<img src="<%=request.getContextPath()%>/commons/image/client/index/homein.png">首页
	</a>
	<a href="<%=request.getContextPath()%>/client/gallery/gallery.jsp" >
		<img src="<%=request.getContextPath()%>/commons/image/client/index/gallery.png">画廊
	</a>
	<a href="<%=request.getContextPath()%>/client/my/my_index.jsp" >
		<img src="<%=request.getContextPath()%>/commons/image/client/index/my.png">我的
	</a>
</div>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/index.js"></script>
<%-- <script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/iscroll.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/pullrefresh.js"></script> --%>
<script type="text/javascript">
var carouselIndex = 0;
var carouselArr = new Array();
var index = 0;
var arr = new Array();
var page=1;
var pagePro=1;
var footer=false;
var totalCount = 0;
 var smallErr = "<%=request.getContextPath()%>/commons/image/smallErr.png";
 var onerror = "onerror = \"javascript:this.src=\"'+smallErr+'\"\"";
 <%--var bigErr = "<%=request.getContextPath()%>/\commons/\image/\bigErr.png"; --%>
$(function() {
	/*页面默认加载（轮播内容）*/
	$.ajax({
		type : "get",
		url : "<%=request.getContextPath()%>/api/information/loadAllCarousel",
		dataType : "json",
		success : function(data) {
			var result = data.data;
			var banner = $('#banner');
			for(var i=0;i<result.length;i++){
				//轮播类型
				carouselIndex = parseInt(i);
				carouselArr[carouselIndex] = result[i].contentId;
				var strCarouselType = JSON.stringify(result[i].carouselType);
				var div = '<div onclick=detail('+carouselIndex+','+strCarouselType+') class="swiper-slide">'
			        	+'<img  src="'+result[i].imageAddress+'" style="width:100vw;height:56vw;" onerror = \'javascript:this.src = "'+smallErr+'"\' >'
			        	+'<div style = "height:10vw">'+result[i].title+'</div>'
			        	+'</div>';
				banner.append(div); 
			}
			var mySwiper = new Swiper(".swiper-container",{  
		        direction:"horizontal",/*横向滑动*/  
		        loop:true,/*形成环路（即：可以从最后一张图跳转到第一张图*/
		        autoplay:3000,/*每隔3秒自动播放*/
		        autoplayDisableOnInteraction: false,
		        initialSlide :0,
		        observer:true,//修改swiper自己或子元素时，自动初始化swiper
		        observeParents:true,//修改swiper的父元素时，自动初始化swiper
		    });  
		}
	});
	//页面保存openid，cookie保存openid
	var openid = window.location.search;
	document.cookie="open_id="+openid.substring(9);
	sessionStorage.setItem("openid",openid.substring(9));
	//通过openid查找userId
	sessionStorage.setItem("userId","1");
	//页面默认加载（教师）
	$.ajax({
		type:'POST',
		url:"<%=request.getContextPath()%>/api/author/listSimple",
		dataType:'json',
		data:{"jsonStr":"{'pageNo':"+page+",'listLen':6,'draw':1}"},
		success:function(data){
			var li='',l='';
			page++;
			for(var i=0;i<data.data.listAuthor.length;i++){
				l='<li value="'+data.data.listAuthor[i].authorId+'">'
    				+'<div class="am-gallery-item">'
        			+'<a href="#">'
          			+'<img src="'+data.data.listAuthor[i].authorPictureMain+'"  onerror = \'javascript:this.src = "'+smallErr+'"\' class="pic"/>'
            		+'<span class="am-gallery-title" onclick="turnto('+data.data.listAuthor[i].authorId+')">'+data.data.listAuthor[i].authorName+'</span>'
        			+'</a>'
    				+'</div>'
  					+'</li>';
  				li+=l;
			}
			$("#showTeacher").append(li);
		},
		error:function(data){
			console.log('shibai');
		}
	})
	/*页面默认加载（热门书画）*/
		$.ajax({
		type:'POST',
		url:"<%=request.getContextPath()%>/api/product/listSimpleSort",
		dataType:'json',
		data:{"jsonStr":"{'pageNo':"+pagePro+",'listLen':10,'draw':1}"},
		success:function(data){
			var li='',l='';
			pagePro++;
			for(var i=0;i<data.data.listProduct.length;i++){
				index = parseInt(parseInt(index) + parseInt(i));
				arr[index] = data.data.listProduct[i].id;
				l='<li style="width:49.2vw;" onclick="turnToPro('+index+')">'
        			+'<div class="am-panel am-panel-default">'
                    +'<div>'
                   	+'<img class="am-img-responsive" src="'+data.data.listProduct[i].productPictureMainCompress+'" onerror = \'javascript:this.src = "'+smallErr+'"\' style="width:49.2vw;height:46.3vw;">'
					+'<div style="margin-top:3vw;">'
                    +'<input type="text" readonly="readonly" style="font-size:0.23rem;margin-left:1vw;color:#666;border:none;width:31vw;" value="'+data.data.listProduct[i].productName+'"class="name"/>'
            		+'</div>'
           			+'<div style="height:9.3vw;margin-top:1vw;">'
       				+'<input type="text" readonly="readonly" style="font-size:0.2rem;margin-left:2.5vw;color:#666;border:none;width:29vw;" value="作者:'+data.data.listProduct[i].productAuthor+'"/>'
       				+'</div>'
       				+'</div>'
       				+'</div>'
       				+'</li>';
				li+=l;
			}
			//$(".am-avg-sm-2").append(li);
			$("#events-list").append(li);
		},
		error:function(data){
			console.log('shibai');
		}
	})
	//页面保存openid，cookie保存openid
	//var openid = window.location.search;
	//document.cookie="open_id="+openid.substring(9);
	document.cookie="open_id=oJCd51hC-j-mS2R4wXetLLh12UQU";
	//sessionStorage.setItem("openid",openid);
	//通过openid查找userId
	sessionStorage.setItem("userId","1");
	//点击跳转到全部老师界面
	$("#teacherall").click(function(){
		$(location).attr('href', '<%=request.getContextPath()%>/client/index/teacher.jsp');
	});
	
});
/*点击轮播图片开始页面跳转*/
function detail(contentId, strCarouselType) {
	var contentIds = carouselArr[contentId];
	var sdsa= "sdsad";
	//用户id
	sessionStorage.setItem("contentId", contentIds);
	alert(contentId);
	//轮播类型
	sessionStorage.setItem("strCarouselType", strCarouselType);
	if(strCarouselType == "author") {
		$(location).attr('href', '<%=request.getContextPath()%>/client/index/teacher.jsp');
	}
	if(strCarouselType == "product") {
		$(location).attr('href', '<%=request.getContextPath()%>/client/index/oration.jsp');
	}
	if(strCarouselType == "information") {
		$(location).attr('href', '<%=request.getContextPath()%>/client/index/information_detail.jsp');
	}
	if(strCarouselType == "activity") {
		$(location).attr('href', '<%=request.getContextPath()%>/client/index/activity_detail.jsp');
	}
}
//循环输出轮播图片
<%-- for(var i=0;i<4;i++){
	$(".am-slides").append('<li class="a'+i+'">'
			 +'<img src="<%=request.getContextPath()%>/commons/image/pic/rotation_01.png">'
			 +'<div class="am-slider-desc">这是标题标题标题标题标题标题标题'+i+'</div>'
			 +'</li>');
}  --%>
<%-- $(".a0").click(function(){
	$(location).attr('href', '<%=request.getContextPath()%>/client/index/teacher.jsp');
});
$(".a1").click(function(){
	$(location).attr('href', '<%=request.getContextPath()%>/client/index/oration.jsp');
});
$(".a2").click(function(){
	$(location).attr('href', '<%=request.getContextPath()%>/client/index/information_detail.jsp');
});
$(".a3").click(function(){
	$(location).attr('href', '<%=request.getContextPath()%>/client/index/activity_detail.jsp');
}); --%>
//页面刷新换一批(作品:热门书画)
$("#changeAll").click(function(){
	if(page > 2){
		if(page*10>totalCount){
			alert("老哥没的换了!!");
			return;
		}
	}
	$.ajax({
		type:'POST',
		url:"<%=request.getContextPath()%>/api/product/listSimpleSort",
		dataType:'json',
		data:{"jsonStr":"{'pageNo':"+page+",'listLen':10,'draw':1}"},
		success:function(data){
			totalCount = data.data.page.totalCount;
			$(".am-avg-sm-2")[0].innerHTML = "";
			//$(".am-avg-sm-2").empty();
			var li='',l='';
			pagePro = 1;
			for(var i=0;i<data.data.listProduct.length;i++){
				index = parseInt(parseInt(index) + parseInt(i));
				arr[index] = data.data.listProduct[i].id;
				l='<li style="width:49.2vw;" onclick="turnToPro('+index+')">'
    			+'<div class="am-panel am-panel-default">'
                +'<div>'
               	+'<img class="am-img-responsive" src="'+data.data.listProduct[i].productPictureMainCompress+'" onerror = \'javascript:this.src = "'+smallErr+'"\' style="width:49.2vw;height:46.3vw;">'
				+'<div style="margin-top:3vw;">'
                +'<input type="text" readonly="readonly" style="font-size:0.23rem;margin-left:1vw;color:#666;border:none;width:31vw;" value="'+data.data.listProduct[i].productName+'"class="name"/>'
        		+'</div>'
       			+'<div style="height:9.3vw;margin-top:1vw;">'
   				+'<input type="text" readonly="readonly" style="font-size:0.2rem;margin-left:2.5vw;color:#666;border:none;width:29vw;" value="作者:'+data.data.listProduct[i].productAuthor+'"/>'
   				+'</div>'
   				+'</div>'
   				+'</div>'
   				+'</li>';
			li+=l;
			}
			page++;
			$(".am-avg-sm-2").append(li);
			//$("#events-list").append(li);
		},
		error:function(data){
			console.log('shibai');
		}
	})
})

//上拉下拉数据
var pull = function(){
	$.ajax({
		url:"<%=request.getContextPath()%>/api/product/listSimpleSort",
   		dataType:'json',
		data:{"jsonStr":"{'pageNo':"+pagePro+",'listLen':10,'draw':1}"},
		type:'post',
   		success:function(data){
   			if(data.data.listProduct.length>0){
				var datas = data.data.draw;
				if(pagePro * 10 > data.data.page.totalCount){
					footer = true;
					document.getElementById('noRecord').innerHTML = "showType";
				}
				//判断是否为最后一页 ;
				//datas.date.draw < size ? footer = true : start ++;
				//是否有数据
				data.data.listProduct.length == 0 ? $("#noRecord").show() : $("#noRecord").hide();
				//$(".am-avg-sm-2").empty();
				var li='',l='';
				pagePro++;
				for(var i=0;i<data.data.listProduct.length;i++){
					index = parseInt(parseInt(index) + parseInt(i));
					arr[index] = data.data.listProduct[i].id;
					l='<li style="width:49.2vw;" onclick="turnToPro('+index+')">'
	        			+'<div class="am-panel am-panel-default">'
	                    +'<div>'
	                   	+'<img class="am-img-responsive" src="'+data.data.listProduct[i].productPictureMainCompress+'" onerror = \'javascript:this.src = "'+smallErr+'"\' style="width:49.2vw;height:46.3vw;">'
						+'<div style="margin-top:3vw;">'
	                    +'<input type="text" readonly="readonly" style="font-size:0.23rem;margin-left:1vw;color:#666;border:none;width:31vw;" value="'+data.data.listProduct[i].productName+'"class="name"/>'
	            		+'</div>'
	           			+'<div style="height:9.3vw;margin-top:1vw;">'
	       				+'<input type="text" readonly="readonly" style="font-size:0.2rem;margin-left:2.5vw;color:#666;border:none;width:29vw;" value="作者:'+data.data.listProduct[i].productAuthor+'"/>'
	       				+'</div>'
	       				+'</div>'
	       				+'</div>'
	       				+'</li>';
					li+=l;
				}
				$(".am-avg-sm-2").append(li);
				//$("#events-list").append(li);
   				//$("#list").show;
				myScroll.refresh();
			}
   		}
   	});
}
// 上拉
var pullUp = function() {
	if(footer==true){
		myScroll.refresh();
		return false;
	}
	pull();
}
//下拉
var pullDown = function() {
	return "no";
}
//作品简介跳转
function turnToPro(data){
	var orderId = arr[data];
	localStorage.setItem('proId', orderId);
	window.open('<%=request.getContextPath()%>/client/payment/share.jsp','_self');
}
//老师简介跳转
function turnto(data){
	if (typeof(Storage) !== "undefined") {
	    localStorage.setItem("teacherId",$(data).parent().parent().parent().attr("value"));
	};
	$(location).attr('href','<%=request.getContextPath()%>/client/index/introduction_to_painters.jsp');
}
//跳转至画廊界面
function prosearch(e){
	var e = e || window.event; 
	if(e.keyCode == 13){ 
		//获取请输入画作名后进行回车事件,获取内容拼url跳转画廊界面
		var galleryMsg = $("#galleryMsg")[0].value;
		var url = '<%=request.getContextPath()%>/client/gallery/gallery.jsp'+'?'+'galleryMsg='+galleryMsg;
		//sessionStorage.setItem('galleryMsg', galleryMsg);
		window.open(url,'_self');
		//request.getSession().setAttribute("openid", galleryMsg); 
		//var openid =  "<%=request.getSession().getAttribute("openid")%>";  
	} 
}
//艺术分类跳转至画廊界面
function searchStyle(index){
	sessionStorage.setItem('productTypes', index);
	var url = '<%=request.getContextPath()%>/client/gallery/gallery.jsp'+'?'+'index='+index;
	window.open(url,'_self');
	//window.open('<%=request.getContextPath()%>/client/gallery/gallery.jsp','_self');
}
</script>
</body>
</html>
