//输入框点击内容消失
$(function(){
	$(".search-input-box").focus(function(){
		if($(".search-input-box").val()=="请输入关键词"){
			$(".search-input-box").val("");
		}
    });
    $(".search-input-box").blur(function(){
    	if($(".search-input-box").val()==""){
    		$(".search-input-box").val("请输入关键词");
    	}
    });
    $(".search_img").click(function(){	 
    	return simpleSearch();
    });
    
});
//实现二级联动
$(function(){
	var list1=$(".list_place").html();
	var list2=$(".list_height").html();
	var list3=$(".list_down").html();
	$(".summons").click(function(){
		if($(".sorting-place").is(":hidden")){
			$(".sorting-place").show();
			var summons=$(".summons").html();
			if(summons==list1){
				$(".list_place").addClass("integrated");
				$(".list_height").removeClass("integrated");
				$(".list_down").removeClass("integrated");
			}else if(summons==list2){
				$(".list_height").addClass("integrated");
				$(".list_place").removeClass("integrated");
				$(".list_down").removeClass("integrated");
			}else if(summons==list3){
				$(".list_down").addClass("integrated");
				$(".list_height").removeClass("integrated");
				$(".list_place").removeClass("integrated");
			}
		}else{
			$(".sorting-place").hide();
		}
	});
	$(".sorting-place").click(function(){
		$(".sorting-place").hide();
	});
	$(".list_place").click(function(){
		$(".summons").html(list1);
		$(".place_img").addClass("integrated-2");
		$(".place_img").removeClass("integrated-1");
	});
	$(".list_height").click(function(){
		$(".summons").html(list2);
		$(".place_img").addClass("integrated-1");
	});
	$(".list_down").click(function(){
		$(".summons").html(list3);
		$(".place_img").addClass("integrated-1");
	});
});
//更改排列方式
$(function(){
	$(".place_img").click(function(){
		if($(".vertical").is(":hidden")){
			$(".am-avg-sm-2").empty();
			pull("twice");
			$(".vertical").show();
			$(".horizontal").hide();
			$(".horizontal_img").hide();
		}else{
			$(".am-avg-sm").empty();
			pull();
			$(".vertical").hide();
			$(".horizontal").show();
			$(".horizontal_img").show();
		}
	});
});
//点击更改样式单选
$(function(){
	$(".size li").click(function(){
		if($(this).hasClass("li")){
			$(this).removeClass("li");
			$(this).children("img").addClass("close");
			$(this).children().children().children("img").addClass("close");
		}else{
			$(this).addClass("li");
			$(this).siblings().removeClass("li");
			$(this).children("img").removeClass("close");
			$(this).children().children().children("img").removeClass("close");
			$(this).siblings().children().children().children("img").addClass("close");
			$(this).siblings().children("img").addClass("close");
		}
	});
	$(".chinese_painting").click(function(){
		$(".calligraphy").hide();
	});
	$(".calligraphy").click(function(){
		$(".chinese_painting").hide();
		$(this).css("margin-left","0vw");
	});
});
//多选
$(function(){
	$(".size-1 li").click(function(){
		if($(this).hasClass("li")){
			$(this).removeClass("li");
			$(this).children("img").addClass("close");
		}else{
			$(this).addClass("li");
			$(this).children("img").removeClass("close");
		}
	});
});
//点击显示/隐藏
$(function(){
	$(".chinese_painting").click(function(){
		if($(".category").is(":hidden")){
			$(".category").show();
			//$(".species").show();
		}else{
			$(".category").hide();
			//$(".species").hide();
			$(".calligraphy").show();
			$(".chinese_painting").removeClass("li");
			$(".chinese_painting").children("img").addClass("close");
		}
	});
	$(".calligraphy").click(function(){
		if($(".calligraphy_1").is(":hidden")){
			$(".calligraphy_1").show();
		}else{
			$(".calligraphy_1").hide();
			$(".chinese_painting").show();
			$(".calligraphy").removeClass("li");
			$(".calligraphy").children("img").addClass("close");
		}
	});
});
//点击重置
$(function(){
	$(".reset").click(function(){
		//隐藏点击国画出现的内容
		$(".category").hide();
		//$(".species").hide();
		//隐藏点击书法出现的内容
		$(".calligraphy_1").hide();
		//去掉黄色边框
		$(".size li").removeClass("li");
		//显示国画,书法
		$(".calligraphy").show();
		$(".chinese_painting").show();
		//去掉点击样式
		$(".size li img").addClass("close");
	});
});

//点击显示最高价/最低价
$(function(){
	
});