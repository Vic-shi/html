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
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/master.css">
</head>
<body>
<!--header-->
<jsp:include page="/management/special_header.jsp"/>
<!-- sidebar -->
<div class="master_edit">
	<jsp:include page="/management/sidebar.jsp"/>
<!--正文-->
	<form id="authorForm" method="post" class="layui-form">
		<section class="rt_wrap">
			<ul>
				<li class="lateral_alignment move_down">
					<div class="vertical_arrangement">
						<span>艺术家姓名</span>
						<input type="text" class="input_box" id="authorName" name="authorName">
						<span class="authorName_error"></span>
					</div>
					<div class="vertical_arrangement">
						<span>艺术家级别</span>
						<div class="layui-form-item" id="select_authorLevel">
							<div class="layui-inline">
								<div class="layui-input-inline">
									<select class="level" id="authorLevel" name="authorLevel">
										<option value="null">选择级别</option>
										<option value="0">国家级</option>
										<option value="1">中书协/中美协</option>
										<option value="2">省级</option>
									</select>
								</div>
							</div>
						</div>
						<span class="authorLevel_error"></span>
					</div>
					<div class="vertical_arrangement">
						<span>艺术家状态</span>
						<div class="layui-form-item" id="select_authorStatus">
							<div class="layui-inline">
								<div class="layui-input-inline">
									<select class="level" id="authorStatus" name="authorStatus">
										<option value="null">选择状态</option>
			         					<option value="1">签约中</option>
			       						<option value="0">已解约</option>
									</select>
								</div>
							</div>
						</div>
						<span class="authorStatus_error"></span>
					</div>
				</li>
				<li class="lateral_alignment move_down flex">
					<div class="vertical_arrangement">
						<img id="img_upload" src=""/>
						<input id="img_name" type="text">
						<div>请上传750*430像素的图片</div>
						<label for="master_uploadImages" class="select_img">选择主图图片</label>
						<input type="file" id="master_uploadImages" hidden="hidden"/>
						<span class="errorTips uploadImages"></span>
					</div>
					<div class="vertical_arrangement move_down">
						<img id="img_upload2" class="head_img" src=""/>
						<input id="img_name2" type="text">
						<div>请上传150*150像素的头像</div>
						<label for="product_uploadImages2" class="select_img">选择艺术家头像</label>
						<input type="file" id="product_uploadImages2" hidden="hidden" />
						<span class="errorTips uploadImages"></span>
					</div>
					<div class="vertical_arrangement">
						<textarea class="popup_textarea master_text" id = "authorProfile"></textarea>
						<div class="popup_text">艺术家文字简介</div>
						<span class="errorTips uploadImages_text"></span>
					</div>
				<li class=" move_down">
					<div class="vertical_arrangement">
						<span class="item_name">艺术家介绍：</span>
						<label for="master_uploadOtherImages" class="select_img chance_img">插入介绍图片</label>
						<input type="file" id="master_uploadOtherImages" name="uploadOtherImages" hidden="hideen"/>
					</div>
				<li>
				</li>
				<li class="vertical_arrangement">
		        	<script id="editor" type="text/plain"></script>
		           	<input type="text"  id="productProfile" value="''" name="productProfile"/>
		           	<span class="master_introduction_error"></span>
				</li>
				<li>
		       		<input type="text" style="display:none" id="authorId" name="authorId" />
					<input type="button" class="master_determine"  value="确定">
				</li>
			</ul>
		</section>
	</form>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.mCustomScrollbar.concat.min.js"></script>
<!-- 引用百度editor -->
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/ueditor/1.4.3/ueditor.config.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/ueditor/1.4.3/ueditor.all.js"> </script>
<!--建议手动加在语言，避免在ie下有时因为加载语言失败导致编辑器加载失败-->
<!--这里加载的语言文件会覆盖你在配置项目里添加的语言类型，比如你在配置项目里配置的是英文，这里加载的中文，那最后就是中文-->
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/ueditor/1.4.3/lang/zh-cn/zh-cn.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<!-- 封装的ajax.js文件 -->
<script type="text/javascript" charset="utf-8" type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
<!-- 引用spark-md5插件 -->
<script type="text/javascript" charset="utf-8" type="text/javascript" src="<%=request.getContextPath()%>/lib/spark-md5/spark-md5.js"></script>
<!-- 引用plupload插件 -->
<script type="text/javascript" charset="utf-8" type="text/javascript" src="<%=request.getContextPath()%>/lib/plupload-2.1.2/js/plupload.full.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/master_detail.js"></script>
</body>
</html>
