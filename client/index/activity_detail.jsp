<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>发现</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<meta name="renderer" content="webkit">
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/amazeui/css/amazeui.min.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/layui/css/layui.css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/PhotoSwipe-master/dist/photoswipe.css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/PhotoSwipe-master/dist/default-skin/default-skin.css">  
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/default/style.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/index/index.css"/>
<script src="<%=request.getContextPath()%>/lib/amazeui/js/jquery.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/amazeui/js/amazeui.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script src="<%=request.getContextPath()%>/lib/PhotoSwipe-master/dist/photoswipe.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/PhotoSwipe-master/dist/photoswipe-ui-default.min.js"></script> 
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
<script src="<%=request.getContextPath()%>/lib/moment/moment-with-locales.js"></script>
<script src="<%=request.getContextPath()%>/lib/moment/moment.js"></script>
<style type="text/css">
	.time{
		font-size:0.2rem;
		color:#666;
		display: block;
		width:92vw;
		height:3.3vw;
		text-align: center;
		margin-top:5.6vw;
	}
	.comment{
		width:92vw;
		height:12.5vw;
		margin:0 4vw 0vw 4vw;
	}
	.am-navbar{
		background-color: #fff;
		border-top:0.3vw solid #e4e4e4;
	}
</style>
</head>
<body>
	<div class="header">
		<i class="am-icon-angle-double-left am-icon-md"></i>
		<input type="button" value="返回" class="btn">
     </div>
	<div style="margin:4.4vw 4vw 0 4vw;">
		<span id="title" style="border: none;width:92vw;height:12vw;font-size:0.3rem;display: block;text-align: center;font-weight: bolder;"></span>
		<span id="time" class="time"></span>
	</div>
	<div style="margin:9.2vw 4vw 0 4vw;">
		<div style="text-indent: 2.5em;">
			<span id="detail" style="font-size:0.25rem;"></span>
		</div>
		<div class="pswp" tabindex="-1" role="dialog" aria-hidden="true">
			<div class="pswp__bg"></div>
			<div class="pswp__scroll-wrap">
				<div class="pswp__container">
            		<div class="pswp__item"></div>
            		<div class="pswp__item"></div>
            		<div class="pswp__item"></div>
        		</div>
				<div class="pswp__ui pswp__ui--hidden">
					<div class="pswp__top-bar">
						<div class="pswp__counter"></div>
						<button class="pswp__button pswp__button--close" title="Close (Esc)"></button>
		                <!-- <button class="pswp__button pswp__button--share" title="Share"></button> -->
		                <button class="pswp__button pswp__button--fs" title="Toggle fullscreen"></button>
		                <button class="pswp__button pswp__button--zoom" title="Zoom in/out"></button>
						<div class="pswp__preloader">
                    		<div class="pswp__preloader__icn">
                      			<div class="pswp__preloader__cut">
                        			<div class="pswp__preloader__donut"></div>
                      			</div>
                    		</div>
                		</div>
            		</div>
            		<div class="pswp__share-modal pswp__share-modal--hidden pswp__single-tap">
		                <div class="pswp__share-tooltip"></div> 
		            </div>
		            <div class="pswp__caption">
                		<div class="pswp__caption__center"></div>
            		</div>
       	 		</div>
    		</div>
		</div>
	</div>
					
	<!--底部-->
    <!-- <div data-am-widget="navbar" class="am-navbar am-cf my-nav-footer bottom" id="">
    	<div class="comment">
    		<input type="text" style="height:8vw;width:73.2vw;background-color: #f4f4f4;border: none;border-radius: 8vw;" class="comment_1">
    		<img src="../../commons/image/client/find/icon_31.png" style="width:4.5vw;margin-left:4vw;">
    		<input type="text" readonly="readonly" value="5" style="width:3.7vw;border: none;">
    		<img src="../../commons/image/client/find/icon_23.png" style="width:3.7vw;">
    	</div>
    </div> -->
    
    <!-- 数据对接 Knight -->    
	<script type="text/javascript">
		$(function() {
			var contentId = sessionStorage.getItem("contentId");
			var strCarouselType = sessionStorage.getItem("strCarouselType");
			var param = {"jsonStr":"{'activityId':"+contentId+"}"};
			$.ajax({
				type : "post",
				url : "<%=request.getContextPath()%>/api/information/loadByActivityId",
				data : param,
				dataType : "json",
				success : function(data) {
					var activity = data.data.activity;
					var images = data.data.images;
					var compressImages = data.data.compressImages;
					$('#title').html(activity.activityTitle);
					$('#detail').html(activity.activityDetail);
					var createTime = activity.createTime;
					calTime(createTime);
				}
			});
			
			var param1 = {"jsonStr":"{'messageId':'"+contentId+"','sign':'"+strCarouselType+"'}"}
			$.ajax({
				type : "post",
				url : "<%=request.getContextPath()%>/api/bam/updatePageView",
				data : param1,
				dataType : "json",
				success : function(data) {
					console.log("成功");
				}
			});
/* 			sessionStorage.removeItem("contentId");
			sessionStorage.removeItem("strCarouselType"); */
		});
		
		//计算时间差
		function calTime(createTime) {
			var createDate = new Date(createTime);
			var nowDate = new Date();
			var nowTime = nowDate.getTime();
			if(createDate.getDate() == nowDate.getDate()) {
				var time = nowTime - createTime;
				var hour = Math.floor(time/(3600*1000));
			    var min = Math.floor((time%(3600*1000))/(60*1000));
			    if(hour == 0) {
			    	if(min <= 5) {
			    		$('#time').html("刚刚");
			    	} else {
			    		$('#time').html(min+" 分钟前 ");
			    	}
			    } else if(min == 0) {
			    	$('#time').html(hour+" 小时前 ");
			    } else {
			    	$('#time').html(hour+" 小时 "+min+" 分钟前 ");
			    }
			} else {
				var time = fmt(createTime);
				$('#time').html(time);
			}
		}
		
		//时间戳格式转换
		function fmt(time) {
		    var date = new Date(time),  
		        year = date.getFullYear(),  
		        mon = date.getMonth()+1,  
		        day = date.getDate(),  
		        hour = date.getHours(),  
		        min = date.getMinutes(),  
		        sen = date.getSeconds(),  
		        oTime = year +'-'+ getzf(mon) +'-'+ getzf(day) +' '+ getzf(hour) +':'+ getzf(min);//最后拼接时间  
		    return oTime;  
		};  
		  
		//补0操作,当时间数据小于10的时候，给该数据前面加一个0  
		function getzf(num){  
		    if(parseInt(num) < 10){  
		        num = '0'+num;  
		    }  
		    return num;  
		}; 
	</script>
<!-- 数据对接 Knight -->   
    
    <script type="text/javascript">
    //缩略图
    function big(){
    var openPhotoSwipe = function() {
    var pswpElement = document.querySelectorAll('.pswp')[0];

    var items = [
        {
            src: '<%=request.getContextPath()%>/commons/image/pic/pic_12.png',
            w: 375,
            h: 174.75
        }
    ];
    
    var options = {        
        history: false,
        focus: false,

        showAnimationDuration: 0,
        hideAnimationDuration: 0
        
    };
    var gallery = new PhotoSwipe( pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
};
openPhotoSwipe();
    }
  //计算几天前
	 /* var SysSecond; 
	 var InterValObj; 
	  
	 $(document).ready(function() { 
	  SysSecond = parseInt($(".remainSeconds").html()); //这里获取倒计时的起始时间 
	  InterValObj = window.setInterval(SetRemainTime, 1000); //间隔函数，1秒执行 
	 }); 
	 //将时间加上1秒，计算天、时、分、秒 
	 function SetRemainTime() { 
	  if (SysSecond > 0) { 
	   SysSecond = SysSecond + 1; 
	   var second = Math.floor(SysSecond % 60);             // 计算秒     
	   var minite = Math.floor((SysSecond / 60) % 60);      //计算分 
	   var hour = Math.floor((SysSecond / 3600) % 24);      //计算小时 
	   var day = Math.floor((SysSecond / 3600) / 24);        //计算天 
	 	if(day>=1){
	 		$(".time").html(day+"天前");
	 	}else if(hour>=1){
	 		$(".time").html(hour+"小时前");
	 	}else if(minite>=1){
	 		$(".time").html(minite+"分钟前");
	 	}else if(second>=1){
	 		$(".time").html("刚刚");
	 	}
	  }
	 }  */
	 //点击返回
	$(function(){
		$(".btn").click(function(){
			sessionStorage.removeItem("isInformation");
			$(location).attr('href', '<%=request.getContextPath()%>/api/client/toFind');
		});
	});
    </script>
</body>
</html>