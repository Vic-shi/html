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
		});
		//循环输出轮播图片
	    for(var i=0;i<3;i++){
			$(".am-slides").append('<li class="a'+i+'">'
					 +'<img src="../commons/image/pic/rotation_01.png">'
					 +'<div class="am-slider-desc">这是标题标题标题标题标题标题标题0</div>'
					 +'</li>');
		}
		$(".a0").click(function(){
			$(location).attr('href', 'oration/1.html');
		});
		$(".a1").click(function(){
			$(location).attr('href', 'oration/2.html');
		});
		$(".a2").click(function(){
			$(location).attr('href', 'oration/3.html');
		});
		$(function(){
			$(".like").click(function(){
				$(this).hide();
				$(this).next().show();
				var num=$(this).next().next().text();
				$(this).next().next().text(parseInt(num)+1);
			});
			$(".like_1").click(function(){
				$(this).hide();
				$(this).prev().show();
				var num=$(this).next().text();
				$(this).next().text(parseInt(num)-1);
			});
			$(".collection").click(function(){
				$(this).hide();
				$(this).next().show();
				$(this).next().next().html("已收藏");
			});
			$(".collection_1").click(function(){
				$(this).hide();
				$(this).prev().show();
				$(this).next().html("收藏");
			});
		});
		//点击跳转到画廊
		$(function(){
			$(".am-navbar-label").click(function(){
				$(location).attr('href', 'gallery/gallery.html');
			});
		});
		//点击跳转到老师
		$(function(){
			$(".view,.down").click(function(){
				$(location).attr('href', 'teacher/teacher.html');
			});
		});
		//老师简介跳转
		$(function(){
			$(".am-gallery-title").click(function(){
				var teacher=$(this).html();
				$(location).attr('href', 'introduction_to_painters.html');
			});
		});
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
		/*layui.use('layer', function(){ //独立版的layer无需执行这一句
			  var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
			  var active = {
					  confirmTrans: function(){
					      //配置一个透明的询问框
					      layer.msg('<a href="#" style="color:#fff;">工笔山水 |</a><a href="#" style="color:#fff;"> 写意山水 |</a><a href="#" style="color:#fff;"> 水墨山水 </a><br/><a href="#" style="color:#fff;">白描山水 |</a><a href="#" style="color:#fff;"> 没骨山水</a>', {
					        time: 20000, //20s后自动关闭
					      });
					    }
			  };
			  $('.layerDemo .layui-btn').on('click', function(){
				  var othis = $(this), method = othis.data('method');
				  active[method] ? active[method].call(this, othis) : '';
			  });
		});
		layui.use('layer', function(){ //独立版的layer无需执行这一句
			  var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
			  var active = {
					  confirmTrans: function(){
					      //配置一个透明的询问框
					      layer.msg('<a href="#" style="color:#fff;">工笔花鸟 |</a><a href="#" style="color:#fff;"> 写意花鸟 |</a><a href="#" style="color:#fff;"> 水墨花鸟 </a><br/><a href="#" style="color:#fff;">白描花鸟 |</a><a href="#" style="color:#fff;"> 没骨花鸟</a>', {
					        time: 20000, //20s后自动关闭
					      });
					    }
			  };
			  $('#layerDemo1 .layui-btn').on('click', function(){
				  var othis = $(this), method = othis.data('method');
				  active[method] ? active[method].call(this, othis) : '';
			  });
		});
		layui.use('layer', function(){ //独立版的layer无需执行这一句
			  var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
			  var active = {
					  confirmTrans: function(){
					      //配置一个透明的询问框
					      layer.msg('<a href="#" style="color:#fff;">工笔人物 |</a><a href="#" style="color:#fff;"> 写意人物 |</a><a href="#" style="color:#fff;"> 水墨人物 </a><br/><a href="#" style="color:#fff;">白描人物 |</a><a href="#" style="color:#fff;"> 没骨人物</a>', {
					        time: 20000, //20s后自动关闭
					      });
					    }
			  };
			  $('#layerDemo2 .layui-btn').on('click', function(){
				  var othis = $(this), method = othis.data('method');
				  active[method] ? active[method].call(this, othis) : '';
			  });
		});
		layui.use('layer', function(){ //独立版的layer无需执行这一句
			  var $ = layui.jquery, layer = layui.layer; //独立版的layer无需执行这一句
			  var active = {
					  confirmTrans: function(){
					      //配置一个透明的询问框
					      layer.msg('<a href="#" style="color:#fff;">工笔其他 |</a><a href="#" style="color:#fff;"> 写意其他 |</a><a href="#" style="color:#fff;"> 水墨其他 </a><br/><a href="#" style="color:#fff;">白描其他 |</a><a href="#" style="color:#fff;"> 没骨其他</a>', {
					        time: 20000, //20s后自动关闭
					      });
					    }
			  };
			  $('#layerDemo3 .layui-btn').on('click', function(){
				  var othis = $(this), method = othis.data('method');
				  active[method] ? active[method].call(this, othis) : '';
			  });
		});
		$(function(){
			$(".layui-btn").click(function(){
				if($(this).hasClass("test")){
					$(this).removeClass("test");
				}else{
					$(this).addClass("test");
				}
				$(".layui-btn").not(this).removeClass("test");
			});
		});*/
		