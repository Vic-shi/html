<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>资讯</title>
<meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=0" />
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="format-detection" content="telephone=no">
<meta name="renderer" content="webkit">
<meta http-equiv="Cache-Control" content="no-siteapp" />
<link rel="stylesheet" href="<%=request.getContextPath()%>/lib/default/style.css"/>
<script src="<%=request.getContextPath()%>/lib/amazeui/js/jquery.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/commons/js/unit.js"></script>
<script src="<%=request.getContextPath()%>/lib/moment/moment-with-locales.js"></script>
<script src="<%=request.getContextPath()%>/lib/moment/moment.js"></script>
<style type="text/css">
	*{font-family: "微软雅黑"!important;}
</style>
</head>
<body>
	<div style="border-bottom:0.3vw solid #e4e4e4;margin:6.4vw 5.2vw 0 5.7vw;">
		<h1 style="font-size:0.25rem;">陈思源的新绘画: 斑斓的余象</h1>
		<span class="time" style="font-size:0.08rem;color:#999;margin:6vw 0 2.4vw 0;display: block;"></span>
	</div>
	<div style="margin:4.4vw 5.2vw 0 5.7vw;text-indent:0.7em;line-height:6vw;">
		<span style="font-size:0.16rem;color:#333;">
			当前中国艺术的创造力在于回到自身文化根源性的想象力才可能形成自己独特的艺术语言与感知方式。何谓此根源性的想象力？这是中国人原初面对世界的诗性感受：面对世界的变化无常，以蒙蒙如烟然的流动形式来回应此无常变化，还能够赋予此变化以诗性的韵律，既要达到即刻幻化，又要透明如镜，激活自然之新的可塑性，并且具有诗意的余味，面对现代性的无根状态，生成出新的余象。
		</span><br/>
	</div>
	<div style="margin:0 5.2vw 0 5.7vw;text-indent:0.7em;line-height:6vw;">
		<span style="font-size:0.16rem;color:#333;">
			作为一个酷爱诗歌的画家，陈思源这些年一直试图通过此诗意的感受来重新打开绘画，与一系列诗人的密切交往与对话，让他不断寻找着化解物象与颜料的方法，使之释放出诗意的氛围，让自然的灵氛与灵晕(aura of atmosphere)再次来临。他内在地认识到，只有重新激活中国文化特有的可塑性活力，这既是自然元素的可塑性，也是颜料质感的可塑性，以水性的元素性
		</span>
	</div>
	<script type="text/javascript">
		$(function(){
			$(".time").html(moment().format("YYYY-MM-DD HH:mm:ss")+" 来源: 艺术家提供作者: 夏可君");
		});
	</script>
</body>
</html>