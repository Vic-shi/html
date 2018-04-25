<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>收藏</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<meta name="renderer" content="webkit">
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/amazeui/css/amazeui.min.css"/>
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/layui/css/layui.css">
<script src="<%=request.getContextPath()%>/lib/amazeui/js/jquery.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/amazeui/js/amazeui.min.js"></script>
<script src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>

</head>
<body>
	<div>
		<ul class="am-avg-sm-2">
        	<li style="width:49.2vw;">
        		<div class="am-panel am-panel-default">
                    <div>
                    	<img class="am-img-responsive" src="<%=request.getContextPath()%>/commons/image/pic/pic_7.png" style="width:49.2vw;height:46.3vw;">
                        <div style="margin-top:3vw;">
                            <input type="text" readonly="readonly" style="font-size:0.23rem;margin-left:2.4vw;color:#666;border:none;width:32vw;" value="《人物钟馗除魔怪》"class="name"/>
                    	</div>
                   		<div style="height:9.3vw;margin-top:1vw;display: flex;justify-content:space-around;align-items:center;">
               				<input type="text" readonly="readonly" style="font-size:0.2rem;margin-left:4.5vw;color:#666;border:none;width:29vw;" value="作者: 周思聪"/>
               				<img src="<%=request.getContextPath()%>/commons/image/client/my/icon_6.png" style="width:3.5vw;height:3.2vw;margin:0px 0px 0.8vw 0vw;" class="collection">
               				<img src="<%=request.getContextPath()%>/commons/image/client/my/icon_6_1.png" style="width:3.5vw;height:3.2vw;margin:0px 0px 0.8vw 0vw;" hidden="hidden"class="collection_1">
               			</div>
           			</div>
              	</div>
           	</li>
           	<li style="width:49.2vw;margin-left:1.6vw;">
        		<div class="am-panel am-panel-default">
                    <div>
                    	<img class="am-img-responsive" src="<%=request.getContextPath()%>/commons/image/pic/pic_7.png" style="width:49.2vw;height:46.3vw;">
                        <div style="margin-top:3vw;">
                            <input type="text" readonly="readonly" style="font-size:0.23rem;margin-left:2.4vw;color:#666;border:none;width:32vw;" value="《人物》"class="name"/>
                    	</div>
                   		<div style="height:9.3vw;margin-top:1vw;display: flex;justify-content:space-around;align-items:center;">
               				<input type="text" readonly="readonly" style="font-size:0.2rem;margin-left:4.5vw;color:#666;border:none;width:29vw;" value="作者: 周思聪"/>
               				<img src="<%=request.getContextPath()%>/commons/image/client/my/icon_6.png" style="width:3.5vw;height:3.2vw;margin:0px 0px 0.8vw 0vw;" class="collection">
               				<img src="<%=request.getContextPath()%>/commons/image/client/my/icon_6_1.png" style="width:3.5vw;height:3.2vw;margin:0px 0px 0.8vw 0vw;" hidden="hidden"class="collection_1">
               			</div>
           			</div>
              	</div>
           	</li>
            <li style="width:49.2vw;">
        		<div class="am-panel am-panel-default">
                    <div>
                    	<img class="am-img-responsive" src="<%=request.getContextPath()%>/commons/image/pic/pic_7.png" style="width:49.2vw;height:46.3vw;">
                        <div style="margin-top:3vw;">
                            <input type="text" readonly="readonly" style="font-size:0.23rem;margin-left:2.4vw;color:#666;border:none;width:32vw;" value="《人物》"class="name"/>
                       		<img src="<%=request.getContextPath()%>/commons/image/client/my/icon_7.png" style="width:3.04vw;height:3.2vw;margin:0px 0px 1.1vw 0vw;"class="like">
                       		<img src="<%=request.getContextPath()%>/commons/image/client/my/icon_7_1.png" style="width:3.04vw;height:3.2vw;margin:0px 0px 1.1vw 0vw;" hidden="hidden"class="like_1">
                       		<span style="font-size:0.2rem;margin-left:1.3vw;color:#666;">2660</span>
                    	</div>
                   		<div style="height:9.3vw;margin-top:1vw;">
               				<input type="text" readonly="readonly" style="font-size:0.2rem;margin-left:4.5vw;color:#666;border:none;width:29vw;" value="作者: 周思聪"/>
               				<img src="<%=request.getContextPath()%>/commons/image/client/my/icon_6.png" style="width:3.5vw;height:3.2vw;margin:0px 0px 0.8vw 0vw;" class="collection">
               				<img src="<%=request.getContextPath()%>/commons/image/client/my/icon_6_1.png" style="width:3.5vw;height:3.2vw;margin:0px 0px 0.8vw 0vw;" hidden="hidden"class="collection_1">
               				<span style="font-size:0.2rem;color:#666;margin-left:1.1vw;">收藏</span>
               			</div>
           			</div>
              	</div>
           	</li>
           	<li style="width:49.2vw;margin-left:1.6vw;">
        		<div class="am-panel am-panel-default">
                    <div>
                    	<img class="am-img-responsive" src="<%=request.getContextPath()%>/commons/image/pic/pic_7.png" style="width:49.2vw;height:46.3vw;">
                        <div style="margin-top:3vw;">
                            <input type="text" readonly="readonly" style="font-size:0.23rem;margin-left:2.4vw;color:#666;border:none;width:32vw;" value="《人物》"class="name"/>
                       		<img src="<%=request.getContextPath()%>/commons/image/client/my/icon_7.png" style="width:3.04vw;height:3.2vw;margin:0px 0px 1.1vw 0vw;"class="like">
                       		<img src="<%=request.getContextPath()%>/commons/image/client/my/icon_7_1.png" style="width:3.04vw;height:3.2vw;margin:0px 0px 1.1vw 0vw;" hidden="hidden"class="like_1">
                       		<span style="font-size:0.2rem;margin-left:1.3vw;color:#666;">2660</span>
                    	</div>
                   		<div style="height:9.3vw;margin-top:1vw;">
               				<input type="text" readonly="readonly" style="font-size:0.2rem;margin-left:4.5vw;color:#666;border:none;width:29vw;" value="作者: 周思聪"/>
               				<img src="<%=request.getContextPath()%>/commons/image/client/my/icon_6.png" style="width:3.5vw;height:3.2vw;margin:0px 0px 0.8vw 0vw;" class="collection">
               				<img src="<%=request.getContextPath()%>/commons/image/client/my/icon_6_1.png" style="width:3.5vw;height:3.2vw;margin:0px 0px 0.8vw 0vw;" hidden="hidden"class="collection_1">
               				<span style="font-size:0.2rem;color:#666;margin-left:1.1vw;">收藏</span>
               			</div>
           			</div>
              	</div>
           	</li>
        </ul> 
	</div>
	<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/collect.js"></script>
	<script type="text/javascript">
	//判断画名过长换省略号
		$(document).ready(function(){
		//限制字符个数
			$(".name").each(function(){
				var maxwidth=7;
				if($(this).val().length>maxwidth){
					$(this).val($(this).val().substring(0,maxwidth));
					$(this).val($(this).val()+'...》');
				}
			});
		});
	</script>
</body>
</html>