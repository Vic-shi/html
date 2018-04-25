<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%> 
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8"/>
<title>后台管理系统</title>
<meta name="author" content="DeathGhost" />
</head>
<body>
<!--aside nav-->
<aside class="lt_aside_nav">
 	<ul>
	  	<li>
		   	<dl class="lt_aside_hide">
		    	<dt>推广信息</dt>
		    	<dd><a href="<%=request.getContextPath()%>/management/platform/news/advertisement_list.jsp" class="right">广告图列表</a></dd>
		    	<dd><a href="<%=request.getContextPath()%>/management/platform/news/recommend_five_list.jsp" class="right">推荐活动资讯</a></dd>
		   	</dl>
	  	</li>
	  	<li>
		   	<dl class="lt_aside_hide">
		    	<dt>资讯信息</dt>
		    	<dd><a href="<%=request.getContextPath()%>/management/platform/news/information_list.jsp" class="right">资讯列表</a></dd>
		    	<dd><a href="<%=request.getContextPath()%>/management/platform/news/information_recycle_bin.jsp" class="right">资讯回收站</a></dd>
		   	</dl>
	  	</li>
	  	<li>
		   	<dl class="lt_aside_hide">
		    	<dt>活动信息</dt>
		    	<dd><a href="<%=request.getContextPath()%>/management/platform/news/activity_list.jsp" class="right">活动列表</a></dd>
		    	<dd><a href="<%=request.getContextPath()%>/management/platform/news/activity_recycle_bin.jsp" class="right">活动回收站</a></dd>
		   	</dl>
	  	</li>
	  	<li>
		   	<dl class="lt_aside_hide">
			    <dt>作品信息</dt>
			    <dd><a href="<%=request.getContextPath()%>/management/erp/product/product_list.jsp" class="right">作品列表</a></dd>
		   	</dl>
	  	</li>
  		<li>
   			<dl class="lt_aside_hide">
    			<dt>艺术家信息</dt>
			    <dd><a href="<%=request.getContextPath()%>/management/erp/master/master_list.jsp" class="right">艺术家列表</a></dd>
			    <dd><a href="<%=request.getContextPath()%>/management/erp/master/recommend_master.jsp" class="right">推荐艺术家</a></dd>
   			</dl>
  		</li>
  		<li>
   			<dl class="lt_aside_hide">
		    	<dt>订单信息</dt>
				<dd><a href="<%=request.getContextPath()%>/management/platform/order/incomplete_orders.jsp" class="right">未完成订单管理</a></dd>
				<dd><a href="<%=request.getContextPath()%>/management/platform/order/all_orders.jsp" class="right">所有订单管理</a></dd>
   			</dl>
  		</li>
  		<li>
   			<dl class="lt_aside_hide">
    			<dt>用户信息</dt>
				<dd><a href="<%=request.getContextPath()%>/management/platform/user/user_list.jsp" class="right">用户列表管理</a></dd>
				<dd><a href="<%=request.getContextPath()%>/management/platform/user/admin_list.jsp" class="right">管理员列表管理</a></dd>
   			</dl>
  		</li>
 	</ul>
</aside>

</body>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/Management_system/js/jquery.js"></script>
<script type="text/javascript" charset="utf-8" src="<%=request.getContextPath()%>/lib/dataService.js"></script>
</html>