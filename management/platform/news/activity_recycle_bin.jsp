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
<section class="rt_wrap">
	<div class="inquiry_column">
		<input id="titleKeyWord" type="text" placeholder="输入活动关键词" class="keywords" onkeydown="if(event.keyCode==13){findActivityPage(1);}">
		<input type="button" value="查询" onclick="findActivityPage(1)" class="inquire">
	</div>
 	<div class="select_operating_column">
		<input type="checkbox" id="choose"/>
		<label for="choose" class="choose_first"></label>
		<span class="select_all">全选广告</span>
		<span id="batch_delect" class="batch_delect">批量删除</span>
		<span id="batch_recover" class="restore">批量恢复</span>
	</div>
	<div class="activity_list">
      	<table id="table" class="avtivity_table">
      	<thead>
      	 	<tr>
        		<th class="activity_select_column">选择</th>
        		<th class="activity_id_column">活动ID</th>
        		<th class="activity_status_column">活动状态</th>
        		<th class="activity_img_column">活动主图</th>
        		<th class="activity_title_column">活动标题</th>
        		<th class="activity_create_time_column">活动创建时间</th>
        		<th class="activity_starting_time_column">活动开始时间</th>
        		<th class="activity_end_time_column">活动结束时间</th>
        		<th class="activity_restore_column">恢复</th>
        		<th class="activity_delete_column">删除</th>
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
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/html5.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.mCustomScrollbar.concat.min.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/character_length_to_judge.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/commons/js/management/activity_recycle_bin.js"></script>
</body>
</html>
