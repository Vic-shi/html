var title=$(".title");
var product_name=$(".product_name");
var product_author=$(".product_author");
var product_level=$(".product_level");
var product_market_capitalization=$(".product_market_capitalization");
var product_share_price=$(".product_share_price");
var user_name=$(".user_name");
var user_phone=$(".user_phone");
var check_reason=$(".check_reason");

var order_numbering=$(".order_numbering");
var receiver_address=$(".receiver_address");
var ship_reason=$(".ship_reason");
//页面刷新时  判断	
$(document).ready(function(){
		//限制作品名称字符个数
		var maxwidth=$(document.body).width();
		if(maxwidth<=3603){
			//限制活动标题字符个数
			title.each(function(){
				var width=30;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=27;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=27;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=27;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=30;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=30;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=28;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=28;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=28;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=29;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=29;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=29;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=3537){
			//限制活动标题字符个数
			title.each(function(){
				var width=29;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=26;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=26;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=26;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=29;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=29;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=27;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=27;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=27;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=28;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=28;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=28;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=3440){
			//限制活动标题字符个数
			title.each(function(){
				var width=28;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=25;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=25;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=25;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=28;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=29;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=26;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=26;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=26;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=27;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=27;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=27;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=3334){
			//限制活动标题字符个数
			title.each(function(){
				var width=27;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=24;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=24;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=24;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=27;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=27;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=25;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=25;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=25;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=26;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=26;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=26;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=3241){
			//限制活动标题字符个数
			title.each(function(){
				var width=26;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=26;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=26;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=24;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=24;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=24;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=25;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=25;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=25;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=3151){
			//限制活动标题字符个数
			title.each(function(){
				var width=25;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=25;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=25;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=24;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=24;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=24;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}
		if(maxwidth<=3052){
			//限制活动标题字符个数
			title.each(function(){
				var width=24;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=21;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=21;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=21;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=24;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=24;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=22;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=22;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=22;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=2954){
			//限制活动标题字符个数
			title.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=20;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=20;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=2;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=23;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=21;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=21;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=21;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=22;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=22;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=22;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=2853){
			//限制活动标题字符个数
			title.each(function(){
				var width=22;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=19;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=19;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=19;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=22;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=22;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=20;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=20;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=20;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=21;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=21;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=21;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=2751){
			//限制活动标题字符个数
			title.each(function(){
				var width=21;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=18;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=18;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=18;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=21;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=21;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=19;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=19;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=19;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=20;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=20;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=20;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=2659){
			//限制活动标题字符个数
			title.each(function(){
				var width=20;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=17;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=17;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=17;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=20;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=20;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=18;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=18;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=18;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=19;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=19;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=19;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=2558){
			//限制活动标题字符个数
			title.each(function(){
				var width=19;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=16;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=16;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=16;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=19;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=19;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=17;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=17;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=17;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=18;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=18;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=18;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=2465){
			//限制活动标题字符个数
			title.each(function(){
				var width=18;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=15;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=15;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=15;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=18;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=18;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=16;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=16;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=16;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=17;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=17;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=17;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=2368){
			//限制活动标题字符个数
			title.each(function(){
				var width=17;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=14;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=14;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=14;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=17;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=17;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=15;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=15;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=15;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=16;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=16;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=16;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=2266){
			//限制活动标题字符个数
			title.each(function(){
				var width=16;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=13;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=13;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=13;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=16;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=16;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=14;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=14;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=14;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=15;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=15;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=15;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=2171){
			//限制活动标题字符个数
			title.each(function(){
				var width=14;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=12;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=12;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=12;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=15;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=15;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=13;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=13;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=13;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=14;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=14;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=14;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=2077){
			//限制活动标题字符个数
			title.each(function(){
				var width=14;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=11;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=11;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=11;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=14;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=14;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=12;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=12;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=12;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=13;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=13;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=13;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=1977){
			//限制活动标题字符个数
			title.each(function(){
				var width=13;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=10;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=10;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=10;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=13;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=13;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=11;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=11;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=11;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=12;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=12;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=12;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=1883){
			//限制活动标题字符个数
			title.each(function(){
				var width=12;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=9;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=9;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=9;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=12;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=12;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=10;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=10;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=10;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=11;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=11;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=11;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=1792){
			//限制活动标题字符个数
			title.each(function(){
				var width=11;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=8;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=8;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=8;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=11;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=11;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=9;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=9;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=9;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=10;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=10;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=10;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=1694){
			//限制活动标题字符个数
			title.each(function(){
				var width=10;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=7;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=7;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=7;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=10;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=10;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=8;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=8;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=8;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=9;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=9;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=9;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=1591){
			//限制活动标题字符个数
			title.each(function(){
				var width=9;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=6;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=6;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=6;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=9;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=9;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=7;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=7;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=7;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=8;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=8;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=8;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=1497){
			//限制活动标题字符个数
			title.each(function(){
				var width=8;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=8;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=8;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=6;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=6;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=6;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=7;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=7;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=7;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=1396){
			//限制活动标题字符个数
			title.each(function(){
				var width=7;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=4;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=4;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=4;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=7;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=7;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=6;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=6;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=6;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=6;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=1300){
			//限制活动标题字符个数
			title.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=2;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=2;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=2;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=4;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=4;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}if(maxwidth<=1199){
			//限制活动标题字符个数
			title.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=2;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=2;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=2;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=5;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=4;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=4;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=4;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=4;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=4;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=4;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}
		if(maxwidth<=1089){
			//限制活动标题字符个数
			title.each(function(){
				var width=4;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品名称字符个数
			product_name.each(function(){
				var width=2;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...》');
				}
			});
			//限制作者字符个数
			product_author.each(function(){
				var width=1;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品级别字符个数
			product_level.each(function(){
				var width=1;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品市值字符个数
			product_market_capitalization.each(function(){
				var width=4;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制作品共享价字符个数
			product_share_price.each(function(){
				var width=4;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户名字符个数
			user_name.each(function(){
				var width=3;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制用户联系电话符个数
			user_phone.each(function(){
				var width=3;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制结单原因字符个数
			check_reason.each(function(){
				var width=3;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制订单编号字符个数
			order_numbering.each(function(){
				var width=3;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制收货人地址字符个数
			receiver_address.each(function(){
				var width=3;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
			//限制发货原因字符个数
			ship_reason.each(function(){
				var width=3;
				if($(this).html().length>width){
					$(this).html($(this).html().substring(0,width));
					$(this).html($(this).html()+'...');
				}
			});
		}
	});
//页面大小改变时  判断
$(window).resize(function(){ 
	//限制作品名称字符个数
	var maxwidth=$(document.body).width();
	if(maxwidth<=3603){
		//限制活动标题字符个数
		title.each(function(){
			var width=30;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=27;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=27;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=27;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=30;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=30;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=28;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=28;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=28;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=29;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=29;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=29;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=3537){
		//限制活动标题字符个数
		title.each(function(){
			var width=29;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=26;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=26;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=26;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=29;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=29;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=27;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=27;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=27;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=28;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=28;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=28;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=3440){
		//限制活动标题字符个数
		title.each(function(){
			var width=28;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=25;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=25;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=25;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=28;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=29;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=26;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=26;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=26;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=27;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=27;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=27;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=3334){
		//限制活动标题字符个数
		title.each(function(){
			var width=27;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=24;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=24;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=24;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=27;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=27;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=25;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=25;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=25;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=26;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=26;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=26;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=3241){
		//限制活动标题字符个数
		title.each(function(){
			var width=26;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=26;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=26;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=24;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=24;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=24;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=25;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=25;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=25;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=3151){
		//限制活动标题字符个数
		title.each(function(){
			var width=25;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=25;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=25;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=24;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=24;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=24;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}
	if(maxwidth<=3052){
		//限制活动标题字符个数
		title.each(function(){
			var width=24;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=21;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=21;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=21;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=24;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=24;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=22;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=22;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=22;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=2954){
		//限制活动标题字符个数
		title.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=20;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=20;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=2;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=23;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=21;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=21;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=21;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=22;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=22;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=22;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=2853){
		//限制活动标题字符个数
		title.each(function(){
			var width=22;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=19;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=19;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=19;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=22;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=22;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=20;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=20;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=20;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=21;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=21;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=21;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=2751){
		//限制活动标题字符个数
		title.each(function(){
			var width=21;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=18;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=18;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=18;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=21;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=21;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=19;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=19;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=19;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=20;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=20;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=20;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=2659){
		//限制活动标题字符个数
		title.each(function(){
			var width=20;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=17;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=17;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=17;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=20;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=20;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=18;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=18;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=18;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=19;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=19;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=19;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=2558){
		//限制活动标题字符个数
		title.each(function(){
			var width=19;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=16;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=16;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=16;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=19;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=19;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=17;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=17;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=17;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=18;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=18;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=18;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=2465){
		//限制活动标题字符个数
		title.each(function(){
			var width=18;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=15;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=15;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=15;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=18;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=18;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=16;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=16;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=16;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=17;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=17;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=17;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=2368){
		//限制活动标题字符个数
		title.each(function(){
			var width=17;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=14;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=14;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=14;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=17;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=17;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=15;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=15;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=15;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=16;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=16;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=16;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=2266){
		//限制活动标题字符个数
		title.each(function(){
			var width=16;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=13;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=13;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=13;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=16;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=16;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=14;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=14;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=14;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=15;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=15;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=15;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=2171){
		//限制活动标题字符个数
		title.each(function(){
			var width=14;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=12;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=12;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=12;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=15;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=15;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=13;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=13;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=13;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=14;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=14;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=14;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=2077){
		//限制活动标题字符个数
		title.each(function(){
			var width=14;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=11;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=11;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=11;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=14;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=14;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=12;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=12;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=12;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=13;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=13;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=13;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=1977){
		//限制活动标题字符个数
		title.each(function(){
			var width=13;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=10;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=10;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=10;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=13;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=13;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=11;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=11;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=11;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=12;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=12;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=12;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=1883){
		//限制活动标题字符个数
		title.each(function(){
			var width=12;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=9;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=9;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=9;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=12;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=12;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=10;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=10;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=10;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=11;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=11;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=11;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=1792){
		//限制活动标题字符个数
		title.each(function(){
			var width=11;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=8;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=8;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=8;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=11;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=11;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=9;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=9;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=9;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=10;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=10;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=10;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=1694){
		//限制活动标题字符个数
		title.each(function(){
			var width=10;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=7;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=7;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=7;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=10;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=10;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=8;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=8;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=8;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=9;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=9;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=9;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=1591){
		//限制活动标题字符个数
		title.each(function(){
			var width=9;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=6;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=6;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=6;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=9;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=9;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=7;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=7;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=7;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=8;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=8;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=8;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=1497){
		//限制活动标题字符个数
		title.each(function(){
			var width=8;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=8;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=8;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=6;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=6;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=6;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=7;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=7;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=7;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=1396){
		//限制活动标题字符个数
		title.each(function(){
			var width=7;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=4;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=4;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=4;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=7;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=7;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=6;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=6;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=6;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=6;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=1300){
		//限制活动标题字符个数
		title.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=2;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=2;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=2;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=4;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=4;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}if(maxwidth<=1199){
		//限制活动标题字符个数
		title.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=2;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=2;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=2;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=5;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=4;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=4;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=4;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=4;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=4;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=4;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}
	if(maxwidth<=1089){
		//限制活动标题字符个数
		title.each(function(){
			var width=4;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品名称字符个数
		product_name.each(function(){
			var width=2;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...》');
			}
		});
		//限制作者字符个数
		product_author.each(function(){
			var width=1;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品级别字符个数
		product_level.each(function(){
			var width=1;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品市值字符个数
		product_market_capitalization.each(function(){
			var width=4;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制作品共享价字符个数
		product_share_price.each(function(){
			var width=4;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户名字符个数
		user_name.each(function(){
			var width=3;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制用户联系电话符个数
		user_phone.each(function(){
			var width=3;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制结单原因字符个数
		check_reason.each(function(){
			var width=3;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制订单编号字符个数
		order_numbering.each(function(){
			var width=3;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制收货人地址字符个数
		receiver_address.each(function(){
			var width=3;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
		//限制发货原因字符个数
		ship_reason.each(function(){
			var width=3;
			if($(this).html().length>width){
				$(this).html($(this).html().substring(0,width));
				$(this).html($(this).html()+'...');
			}
		});
	}
});