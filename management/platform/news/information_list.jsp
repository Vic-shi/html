<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>后台管理系统</title>
<meta name="author" content="DeathGhost" />
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/reset.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/header.css">
<link rel="stylesheet" type="text/css" href="<%=request.getContextPath()%>/commons/css/management/list.css">
</head>
<body>

<!--header-->
<jsp:include page="/management/header.jsp"/>
<!-- sidebar -->
<div class="arrangement">
<jsp:include page="/management/sidebar.jsp"/>
<!--正文-->
<section class="rt_wrap">
	<div class="inquiry_column">
			<input id="titleKeyWord" type="text" placeholder="输入资讯关键词" class="keywords" onkeydown="if(event.keyCode==13){findInformationPage(1);}">
			<input id="inquire" type="button" value="查询" class="inquire" onclick="findInformationPage(1)">
	</div>
	<div class="select_operating_column">
		<input type="checkbox" id="choose"/>
		<label for="choose" class="choose_first"></label>
		<span class="select_all">全选广告</span>
		<span id="batch_delect" class="batch_delect">批量删除</span>
		<span class="adjunction"><a href="<%=request.getContextPath()%>/management/platform/news/information_add.jsp">添加</a></span>
	</div>
	<div class="information_list">
      	<table id="table" class="information_table">
      	<thead>
      	 	<tr>
        		<th class="information_select_column">选择</th>
        		<th class="information_id_column">编号</th>
        		<th class="information_title_column">咨讯标题</th>
        		<th class="information_img_column">主图</th>
        		<th class="information_time_column">咨讯创建时间</th>
        		<th class="information_edit_column">编辑</th>
        		<th class="information_delect_column">删除</th>
       		</tr>
       	</thead>
       	<tbody id="tbody"></tbody>
      	</table>
      	<div id="error"></div>
      	<div id="page_selection" class="page_selection"></div>
      	<div id="bomb_positioning">
	 		<div class="bomb">
				<div class="bomb_title">
					<span class="prompt">提示</span>
					<img src="<%=request.getContextPath()%>/commons/image/management/close_icon.png" class="close">
				</div>
				<div class="bomb_content">
					<span>确定删除此栏目</span>
				</div>
				<div class="bomb_button">
					<input id="confirm_delete" class="confirm_button" type="button" value="确定">
					<span class="cancel">取消</span>
				</div>
			</div>
	 	</div>
 	</div>
</section>
</div>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/layui/layui.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/character_length_to_judge.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/information.js"></script>
</body>
</html>
