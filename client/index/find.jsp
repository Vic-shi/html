<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>
  <title>发现</title>
  
  <link rel="stylesheet" href="<%=request.getContextPath()%>/lib/amazeui/css/amazeui.min.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/layui/css/layui.css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/default/style.css"/>
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/client/index/index.css" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/client/index/find.css" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/commons/css/client/gallery/pullToRefresh.css"/>
<script src="<%=request.getContextPath()%>/lib/amazeui/js/jquery.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/amazeui/js/amazeui.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
<script src="<%=request.getContextPath()%>/lib/moment/moment-with-locales.js"></script>
<script src="<%=request.getContextPath()%>/lib/moment/moment.js"></script>
</head>
<body>

  <!-- header -->
  <div>
		<ul class="men">
			<li class="information change"><span style="border-right: 0.3vw solid #e4e4e4;margin:3.3vw 0;display: block;">资讯</span></li>
			<li class="activity">活动</li>
		</ul>
	</div>

  <!-- content -->
    <div class="information_1" id="wrapper">
    	<ul id="ul">
      <!-- 列表 -->
		<%-- <li class="information_2">
			<div class="synopsis">
				<div style="border:none;width:62.7vw;height:22.1vw;font-size:0.3rem;">画家只做好市场就够了吗?</div>
					<p class="remainSeconds" style="display:none">600</p > 
					<span class="time"></span>
				</div>
				<img src="<%=request.getContextPath()%>/commons/image/pic/pic_12.png" style="width:25.5vw;height:25.5vw;margin:0 0 4vw 4vw;">
		</li>
		<li class="information_2">
			<div class="synopsis">
				<div style="border:none;width:62.7vw;height:22.1vw;font-size:0.3rem;">画家只做好市场就够了吗?</div>
					<p class="remainSeconds" style="display:none">600</p > 
					<span class="time"></span>
				</div>
				<img src="<%=request.getContextPath()%>/commons/image/pic/pic_12.png" style="width:25.5vw;height:25.5vw;margin:0 0 4vw 4vw;">
		</li>
		<li class="information_2">
			<div class="synopsis">
				<div style="border:none;width:62.7vw;height:22.1vw;font-size:0.3rem;">画家只做好市场就够了吗?</div>
					<p class="remainSeconds" style="display:none">600</p > 
					<span class="time"></span>
				</div>
				<img src="<%=request.getContextPath()%>/commons/image/pic/pic_12.png" style="width:25.5vw;height:25.5vw;margin:0 0 4vw 4vw;">
		</li>
		<li class="information_2">
			<div class="synopsis">
				<div style="border:none;width:62.7vw;height:22.1vw;font-size:0.3rem;">画家只做好市场就够了吗?</div>
					<p class="remainSeconds" style="display:none">600</p > 
					<span class="time"></span>
				</div>
				<img src="<%=request.getContextPath()%>/commons/image/pic/pic_12.png" style="width:25.5vw;height:25.5vw;margin:0 0 4vw 4vw;">
		</li>
		<li class="information_2">
			<div class="synopsis">
				<div style="border:none;width:62.7vw;height:22.1vw;font-size:0.3rem;">画家只做好市场就够了吗?</div>
					<p class="remainSeconds" style="display:none">600</p > 
					<span class="time"></span>
				</div>
				<img src="<%=request.getContextPath()%>/commons/image/pic/pic_12.png" style="width:25.5vw;height:25.5vw;margin:0 0 4vw 4vw;">
		</li>
		<li class="information_2">
			<div class="synopsis">
				<div style="border:none;width:62.7vw;height:22.1vw;font-size:0.3rem;">画家只做好市场就够了吗?</div>
					<p class="remainSeconds" style="display:none">600</p > 
					<span class="time"></span>
				</div>
				<img src="<%=request.getContextPath()%>/commons/image/pic/pic_12.png" style="width:25.5vw;height:25.5vw;margin:0 0 4vw 4vw;">
		</li>
		<li class="information_2">
			<div class="synopsis">
				<div style="border:none;width:62.7vw;height:22.1vw;font-size:0.3rem;">画家只做好市场就够了吗?</div>
					<p class="remainSeconds" style="display:none">600</p > 
					<span class="time"></span>
				</div>
				<img src="<%=request.getContextPath()%>/commons/image/pic/pic_12.png" style="width:25.5vw;height:25.5vw;margin:0 0 4vw 4vw;">
		</li>
		<li class="information_2">
			<div class="synopsis">
				<div style="border:none;width:62.7vw;height:22.1vw;font-size:0.3rem;">画家只做好市场就够了吗?</div>
					<p class="remainSeconds" style="display:none">600</p > 
					<span class="time"></span>
				</div>
				<img src="<%=request.getContextPath()%>/commons/image/pic/pic_12.png" style="width:25.5vw;height:25.5vw;margin:0 0 4vw 4vw;">
		</li> --%>
      </ul>
	</div>
	  
  <div class="menu footer">
	<a href="<%=request.getContextPath()%>/api/client/toIndex" style="color: #fea427;">
		<img src="<%=request.getContextPath()%>/commons/image/client/index/homein.png">首页
	</a>
	<a href="<%=request.getContextPath()%>/client/gallery/gallery.jsp" >
		<img src="<%=request.getContextPath()%>/commons/image/client/index/gallery.png">画廊
	</a>
	<a href="<%=request.getContextPath()%>/client/my/my_index.jsp" >
		<img src="<%=request.getContextPath()%>/commons/image/client/index/my.png">我的
	</a>
</div>



  <!-- js -->
  <script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/iscroll.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/pullToRefresh.js"></script>
  <script>
	$(function() {
		var page = 1;
		var isInformation = sessionStorage.getItem("isInformation");
		if(isInformation) {
			$(".information").addClass("change");
			$(".activity").removeClass("change");
			findInformation(1);
		} else {
			$(".information").removeClass("change");
			$(".activity").addClass("change");
			findActivity(1);
		}
		
		$(".information").click(function(){
			$(".information").addClass("change");
			$(".activity").removeClass("change");
			$("#wrapper ul").empty();
			page = 1;
			findInformation(1);
		});
		$(".activity").click(function(){
			$(".information").removeClass("change");
			$(".activity").addClass("change");
			$("#wrapper ul").empty();
			page = 1;
			findActivity(1);
		});
			//初始化加载老师数据开始---------------------
			/* teaMsg(); */
			//初始化加载老师数据结束---------------------
			//下拉刷新，下拉加载开始--------------------
			refresher.init({
				id:"wrapper",
				pullDownAction:Refresh,                                                            
				pullUpAction:Load 																			
			});	
			function Refresh() {
				page = 1;
				setTimeout(function() {//延迟1秒执行如下方法	
					$("#wrapper ul").empty();
					if($(".activity").hasClass("change")) {
						findActivity(1);
					} else {
						findInformation(1);
					}
					wrapper.refresh();
				}, 500);
			}
			function Load() {
				setTimeout(function() {
					++page;
					if($(".activity").hasClass("change")) {
						if(findActivity(page)) {
							return;
						}
					} else {
						if(findInformation(page)) {
							return;
						}
					}
					wrapper.refresh();
				}, 500);	
			}
	});
  </script>
  
  <script type="text/javascript">
  function findActivity(pageNo) {
		var pageSize = 10;
		var activityStatus = "显示";
		var param = {pageNo, pageSize, activityStatus};
		$.ajax({
			type : "post",
			url : "<%=request.getContextPath()%>/api/activity/findActivityPage",
			data : param,
			dataType : "json",
			success : function(data) {
				var results = data.data.results;
				var totalPages = data.data.totalPages;
				if(pageNo > totalPages) {
					return "lastPage";
				} else {
					var li = "", l = "";
					for(var i=0; i<results.length; i++) {
						var createTime = results[i].createTime;
						var time = calTime(createTime);
						l = '<li onclick="toActivityDetail('+results[i].activityId+')" class="activity_2">'
										+'<div class="synopsis">'
										+'<div style="border:none;width:62.7vw;height:22.1vw;font-size:0.3rem;">'+results[i].activityTitle+'</div>'
										+'<p class="remainSeconds" style="display:none">'+time+'</p> '
										+'<div>'
										+'<span class="time">'+time+'</span>'
										+'<span>'+results[i].activityCourse+'</span>'
										+'</div>'
										+'</div>'
										+'<img src="'+results[i].mainPictureCompress+'" style="width:25.5vw;height:25.5vw;margin:0 0 4vw 4vw;">'
								 +'</li>';
						li += l;
					};
					$('#ul').append(li);
				}
			}
		});
	}
	
	function findInformation(pageNo) {
		var pageSize = 10;
		var informationStatus = "显示";
		var param = {pageNo, pageSize, informationStatus};
		$.ajax({
			type : "post",
			url : "<%=request.getContextPath()%>/api/information/findInformationPage",
			data : param,
			dataType : "json",
			success : function(data) {
				var results = data.data.results;
				var totalPages = data.data.totalPages;
				if(pageNo > totalPages) {
					return "lastPage";
				} else {
					var li = "", l = "";
					for(var i=0; i<results.length; i++) {
						var createTime = results[i].createTime;
						var time = calTime(createTime);
						l = '<li class="information_2">'
										+'<div onclick="toInformationDetail('+results[i].informationId+')" class="synopsis">'
										+'<div style="border:none;width:62.7vw;height:22.1vw;font-size:0.3rem;">'+results[i].informationTitle+'</div>'
										+'<p class="remainSeconds" style="display:none">'+time+'</p> '
										+'<span class="time">'+time+'</span>'
										+'</div>'
										+'<img src="'+results[i].mainPictureCompress+'" style="width:25.5vw;height:25.5vw;margin:0 0 4vw 4vw;">'
								 +'</li>';
						li += l;
					};
					$('#ul').append(li);
				}
			}
		});
	}
	
	function toInformationDetail(informationId){
		sessionStorage.setItem("contentId", informationId);
		sessionStorage.setItem("strCarouselType", "资讯");
		$(location).attr('href', '<%=request.getContextPath()%>/api/client/toInformationDetail');
	}
	
	function toActivityDetail(activityId){
		sessionStorage.setItem("contentId", activityId);
		sessionStorage.setItem("strCarouselType", "活动");
		$(location).attr('href', '<%=request.getContextPath()%>/api/client/toActivityDetail');
	}
	
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
		    		return "刚刚";
		    	} else {
		    		return min+" 分钟前 ";
		    	}
		    } else if(min == 0) {
		    	return hour+" 小时前 ";
		    } else {
		    	return hour+" 小时 "+min+" 分钟前 ";
		    }
		} else {
			var time = fmt(createTime);
			return time;
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


</body>
</html>