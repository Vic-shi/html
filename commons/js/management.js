$(function(){
	$('.lt_aside_hide dd').hide();
	//点击显示个人信息、设置、安全退出，再次点击隐藏
	$(".admin_icon").click(function(){
		if($("#personal_center").is(":hidden")){
			$("#personal_center").show();
			//鼠标移入显示，移除后3秒隐藏
			$("#personal_center").mouseenter(function(){
				$("#personal_center").show();
			});
			$("#personal_center").mouseleave(function(){
				setTimeout(function(){
					$("#personal_center").hide();
				},3000);
			});
		}else{
			$("#personal_center").hide();
		}
	});
	//点击修改li样式
	$(".lt_aside_nav a").each(function(){
	if($(this)[0].href==String(window.location)){
    	$('.click_a_css').removeClass('click_a_css');
    	$('.click_dd_css').removeClass('click_dd_css');
      	$(this).addClass('click_a_css');
      	$(this).focus();
        $(this).parent().addClass('click_dd_css');
        var a_level_title=$(this).parent().parent().children().html();
        var secondary_title=$(this).html();
        $(this).parent().parent().children('dd').show();
        $("#title").val(a_level_title+" — "+secondary_title);
    }
	});
	$(".layui-form").bind("keydown",function(even){
		var input=$(this).find("input");
		var keyCode=even.keyCode;
		var dl = input.parent().next(); //找到渲染后的dl
		if(keyCode==40){
			$(".layui-this").next().addClass("layui-this");
			$(".layui-this").prev().removeClass("layui-this");
		}else if(keyCode==38){
			$(".layui-this").prev().addClass("layui-this");
			$(".layui-this").next().removeClass("layui-this");
		}
	});
	//左列表的伸张
	$('.lt_aside_hide').click(function(){
		$(this).children("dd").toggle();
	});
});
function loginOut(){
	var param = {
			url: "/web/user/logout",
			method :'GET',
				successCallback: function(data){
					console.log("成功");
			},
				errorCallBack: function(data) {
					console.log("失败");
			}
			}
			getDataFromServer(param);
}