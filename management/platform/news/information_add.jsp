<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>后台管理系统</title>
<meta name="author" content="DeathGhost" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/header.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/lib/layui/css/layui.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/add_and_edit.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/information_add.css">
</head>
<body>
<!--header-->
<jsp:include page="/management/special_header.jsp"/>
<!-- sidebar -->
<div class="arrangement">
	<jsp:include page="/management/sidebar.jsp"/>
	<section class="rt_wrap">
		<ul class="information_edit">
		<li class="vertical_arrangement">
			<span>资讯id</span>
			<input id="informationId" type="text" class="input_box input_black" disabled="disabled">
		</li>
		<li class="vertical_arrangement move_down">
			<span>资讯标题</span>
			<input id="informationTitle" type="text" class="input_box">
			<span class="informationTitle_error error"></span>
		</li>
		<li class="vertical_arrangement move_down">
			<img id="img_upload" src=""/>
			<input id="img_name" type="text">
			<div>请上传350*200像素的图片</div>
			<label for="information_uploadImages" class="select_img">选择主图图片</label>
			<input id="information_uploadImages" hidden="hidden" name="uploadImages" type="file"/>
			<span class="img_upload_error error"></span>
		</li>
		<li class="vertical_arrangement move_down">
			<label for="information_uploadOtherImages" class="select_img">选择系列图图片</label>
			<div>上传请使用750*430像素的图片</div>
			<input id="information_uploadOtherImages" hidden="hidden" name="uploadOtherImages" type="file"/>
			<pre id="console"></pre>
		</li>
		<li class="vertical_arrangement move_down">
			<span class="item_name">作品介绍：</span>
        	<script id="editor" type="text/plain"></script>
           	<input type="text"  id="productProfile" value="''" name="productProfile"/>
           	<span class="information_introduction_error error"></span>
		</li>
		<li>
			<input onclick="addInformation()" class="determine_btn" type="button" value="确定">
		</li>
	</ul>
</section>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/ueditor/1.4.3/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/ueditor/1.4.3/ueditor.all.js"> </script>
<!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
<!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/ueditor/1.4.3/lang/zh-cn/zh-cn.js"></script>
<!-- 引用spark-md5插件,计算md5值 -->
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/spark-md5/spark-md5.js"></script>
<!-- 引用plupload插件，上传文件 -->
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/plupload-2.1.2/js/plupload.full.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/information_add.js"></script>
</body>
</html>
