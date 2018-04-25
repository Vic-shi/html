function printInpaint(){
	var productId = document.getElementById("productId").value;
	var sn = 'http://pysmyy.com/web/client/order/showDetail?productId='+productId+'';
	var product_name=$("#product_name").val();
	var product_author=$("#product_author").val();
	var product_size=$("#product_size").val();
	window.document.body.innerHTML="<div class='ccc' style = 'margin-top:30px;margin-left:30px;'>"
		+"<div id='qrcode'></div>"
		+"<div style='margin:20px 0 0 0;' class='name'>" 
		+"<span>名称:</span>" 
		+"<p id='product_name2' style='border-bottom:2px solid #333;text-align:center; margin:0 2px;display: inline-block;width:190px;'>《扎木便桥》</p>"
	+"</div>"
	+"<div style='margin:35px 0 0 0;' class='name'>" 
	+"<span>作者:</span>"
	+"<p id='product_author2' style='border-bottom:2px solid #333;text-align:center; margin:0 2px;width:75px;display: inline-block;'>吴冠中中中</p>"
	+"<span>尺寸:</span>" 
	+"<p id='product_size2' style='border-bottom:2px solid #333;text-align:center; margin:0 2px;width:75px;display: inline-block;'>四尺/轴</p>"
	+"</div>" 
	+"<div style='margin-left:55px;font-size:15px;'>" 
	+"</div>"  
	+"</div>"; 
    document.getElementById("product_name2").innerHTML = "《"+product_name+"》";
    document.getElementById("product_author2").innerHTML = product_author;
    document.getElementById("product_size2").innerHTML = (product_size == 0 ? "四尺" : (product_size == 1 ? "六尺":(product_size == 2 ? "八尺":(product_size == 3 ? "四轴屏":(product_size == 4 ? "斗方":"未知")))));
	// 设置参数方式
	var qrcode = new QRCode('qrcode', { 
	  text: 'your content',
	  width: 220, 
	  height: 220,
	  marginLeft:20,
	  colorDark : '#000000',
	  colorLight : '#ffffff',
	  correctLevel : QRCode.CorrectLevel.H
	});
	// 使用 API
	qrcode.makeCode(sn);
	window.document.body.style = "height:250px;width:300px;";
	window.print(); 
	//还原原网页
	window.location.href = "/web/management/erp/product/product_detail.jsp";
	window.document.body.innerHTML=odd; 
}
function printPaint(){
	var productId = document.getElementById("productId").value;
	var sn = 'http://pysmyy.com/web/client/order/showDetail?productId='+productId+'';
	var product_name=$("#product_name").val();
	var product_author=$("#product_author").val();
	var product_size=$("#product_size").val();
	var product_type=$("#product_style").val();
	var product_level=$("#product_level").val();
	window.document.body.innerHTML="<div class='ccc'>"
		+"<div style='margin:50px 0px 0 10px;' class='name'>" 
		+"<span>名称:</span>"
		+"<p id='product_name2' style='border-bottom:2px solid #333;text-align:center; margin:0 2px;display: inline-block;width:230px;'>《扎木便桥》</p>"
	+"</div>"
	+"<div style='margin:35px 0 0 10px;' class='name'>"
	+"<span>作者:</span>"
	+"<p id='product_author2' style='border-bottom:2px solid #333;text-align:center; margin:0 2px;width:80px;display: inline-block;'>吴冠中</p>"
	+"<span style='margin-left:1px;'>类型:</span>"
		+"<p id='product_type2' style='border-bottom:2px solid #333;text-align:center; margin:0 2px;width:110px;display: inline-block;'>人物</p>"
	+"</div>"
	+"<div style='margin:35px 0 0 10px;' class='name'>"
		+"<span>尺寸:</span>"
		+"<p id='product_size2' style='border-bottom:2px solid #333;text-align:center; margin:0 2px;width:80px;display: inline-block;'>四尺/轴</p>"
		+"<span style='margin-left:1px;'>级别:</span>"
		+"<p id='product_level2' style='border-bottom:2px solid #333;text-align:center; margin:0 2px;width:110px;display: inline-block;'>国家级</p>"
		+"</div>"
		+"<div style='margin:35px 93px 0 70px;' id='qrcode'></div>"
	+"<div style='margin-left:55px;font-size:15px;'>"
	+"</div>" 
	+"</div>";  
    document.getElementById("product_name2").innerHTML = "《"+product_name+"》";
    document.getElementById("product_author2").innerHTML = product_author;
    document.getElementById("product_size2").innerHTML = (product_size == 0 ? "四尺" : (product_size == 1 ? "六尺":(product_size == 2 ? "八尺":(product_size == 3 ? "四轴屏":(product_size == 4 ? "斗方":"未知")))));;
    document.getElementById("product_type2").innerHTML = (product_type == 0 ? "山水" : (product_type == 1 ? "花鸟":(product_type == 2 ? "走兽":(product_type == 3 ? "人物":(product_type == 4 ? "国画其他":(product_type == 5 ? "四字榜书":(product_type == 6 ? "诗词":(product_type == 7 ? "其他书法":"未知"))))))));
    document.getElementById("product_level2").innerHTML = (product_level == 0 ? "国家级" : (product_level == 1 ? "中书协/中美协":(product_level == 2 ? "省级":"未知")));
	// 设置参数方式 
	var qrcode = new QRCode('qrcode', {
	  text: 'your content',
	  width: 140, 
	  height: 140,
	  marginLeft:20,
	  colorDark : '#000000',
	  colorLight : '#ffffff',
	  correctLevel : QRCode.CorrectLevel.H
	});
	// 使用 API
	qrcode.makeCode(sn);
	window.document.body.style = "height:250px;width:300px;";
	window.print(); 
	//还原原网页
	window.location.href = "/web/management/erp/product/product_detail.jsp";
	window.document.body.innerHTML=odd; 
}
//返回
$(function(){
	$(".return").click(function(){
		history.back(-1);
	});
});
//input监测
function allMoney(){
	var some = $('#product_cost').val();
	var day = $('#accumulated_rent').val();
	var all = $('#packing_costs').val();
	var sum1 = parseInt(some*100)+parseInt(all*100);
	var sum2 = parseInt(day*182*100)+parseInt(all*100);
	var sum3 = parseInt(day*365*100)+parseInt(all*100);
	$('#product_sharing_value').val(sum1/100);
	$('#product_day_value').val(sum2/100);
	$('#product_year_value').val(sum3/100);
}
function dayMoney(){
	var day = $('#accumulated_rent').val();
	var all = $('#packing_costs').val();
	var deposit = $('#product_deposit').val();
	var sum2 = parseInt(day*182*100)+parseInt(all*100)+parseInt(deposit*100);
	var sum3 = parseInt(day*365*100)+parseInt(all*100)+parseInt(deposit*100);
	$('#product_day_value').val(sum2/100);
	$('#product_year_value').val(sum3/100);

}
function someMoney(){
	var some = $('#product_cost').val();
	var all = $('#packing_costs').val();
	var sum1 = parseInt(some*100)+parseInt(all*100);
	$('#product_sharing_value').val(sum1/100);
}
//下拉框
layui.use('form', function(){
  var form = layui.form;
  $(function(){
	  $("#product_cost").keyup(function(){
		  var product_market_value=$("#product_sharing_value").val();
		  var packing_costs=$("#packing_costs").val();
		  var product_cost=$("#product_cost").val();
		  var accumulated_rent=$("#accumulated_rent").val();
		  var product_deposit=$("#product_deposit").val();
		  product_market_value=packing_costs+product_cost+accumulated_rent+product_deposit;
	  });
	  $("#packing_costs").keyup(function(){
		  var product_market_value=$("#product_sharing_value").val();
		  var packing_costs=$("#packing_costs").val();
		  var product_cost=$("#product_cost").val();
		  var accumulated_rent=$("#accumulated_rent").val();
		  var product_deposit=$("#product_deposit").val();
		  product_market_value=packing_costs+product_cost+accumulated_rent+product_deposit;
	  });
	  $("#accumulated_rent").keyup(function(){
		  var product_market_value=$("#product_sharing_value").val();
		  var packing_costs=$("#packing_costs").val();
		  var product_cost=$("#product_cost").val();
		  var accumulated_rent=$("#accumulated_rent").val();
		  var product_deposit=$("#product_deposit").val();
		  product_market_value=packing_costs+product_cost+accumulated_rent+product_deposit;
	  });
	  $("#product_deposit").keyup(function(){
		  var product_market_value=$("#product_sharing_value").val();
		  var packing_costs=$("#packing_costs").val();
		  var product_cost=$("#product_cost").val();
		  var accumulated_rent=$("#accumulated_rent").val();
		  var product_deposit=$("#product_deposit").val();
		  product_market_value=packing_costs+product_cost+accumulated_rent+product_deposit;
	  });
	  //判空
	  $(".productUpload").click(function(){
	  	var product_code=$("#product_code").val();
		var product_name=$("#product_name").val();
		//var product_author=$("#product_author").val();
		var product_style=$("#product_style").val();
		var product_market_value=$("#product_market_value").val();
		var packing_costs=$("#packing_costs").val();
		var product_cost=$("#product_cost").val();
		var product_deposit=$("#product_deposit").val();
		var accumulated_rent=$("#accumulated_rent").val();  
		var product_size=$("#product_size").val();
		var product_level=$("#product_level").val();
		var product_mounted_status=$("#product_mounted_status").val();
		var product_type=$("#product_type").val();
		var product_status=$("#product_status").val();
		var productCreateTime=$("#productCreateTime").val();
		var img_upload = $("#img_upload")[0].attributes.src.value;
		var img_upload1 = $("#img_upload1")[0].attributes.src.value;
		var img_upload2 = $("#img_upload2")[0].attributes.src.value;
		var date = document.getElementById("productCreateTime").value;
		var product_plate = $("#product_plate").val();
		var product_uploadImages_text = $('.product_uploadImages_text').val();
		var product_uploadImages1_text = $('.product_uploadImages1_text').val();
		var product_uploadImages2_text = $('.product_uploadImages2_text').val();
		if(product_name==""){
			$("#product_name_error").show();
			$("#product_name_error").html("请输入作品名称");
			$("#product_name").focus();
			return;
		}else{
			$("#product_name_error").hide();
		} 
		if(date==""){
			$("#productCreateTime_error").show();
			$("#productCreateTime_error").html("请输入作品创建时间");
			$("#productCreateTime").focus();
			return;
		}else{
			$("#productCreateTime_error").hide();
		}
		if(product_code==""){
			$("#product_code_error").show();
			$("#product_code_error").html("请输入作品条形码");
			$("#product_code").focus();
			return;
		}else{
			$("#product_code_error").hide();
		} 
		/*if(product_author==""){
			$("#product_author_error").show();
			$("#product_author_error").html("请输入作者名称");
			$("#product_author").focus();
			return;
		}else{
			$("#product_author_error").hide();
		} */
		if(product_cost==""){
			$("#product_cost_error").show();
			$("#product_cost_error").html("请输入润笔费");
			$("#product_cost").focus();
			return;
		}else if(isNaN(product_cost)){
			$("#product_cost_error").show();
			$("#product_cost_error").html("润笔费必须是数字");
			$("#product_cost").focus();
			return;
		}else{
		  $("#product_cost_error").hide();
	  } 
		if(product_deposit==""){
			$("#product_deposit_error").show();
			$("#product_deposit_error").html("请输入保证金");
			$("#product_deposit").focus();
			return;
		}else if(isNaN(product_deposit)){
			$("#product_deposit_error").show();
			$("#product_deposit_error").html("保证金必须是数字");
			$("#product_deposit").focus();
			return;
		}else{
			$("#product_deposit_error").hide();
		} 
		if(packing_costs==""){
			$("#packing_costs_error").show();
			$("#packing_costs_error").html("请输入装裱费");
			$("#packing_costs").focus();
			return;
		}else if(isNaN(packing_costs)){
			$("#packing_costs_error").show();
			$("#packing_costs_error").html("装裱费必须是数字");
			$("#packing_costs").focus();
			return;
		}else{
			$("#packing_costs_error").hide();
		} 
		
		if(accumulated_rent==""){
			$("#accumulated_rent_error").show();
			$("#accumulated_rent_error").html("请输入日租金");
			$("#accumulated_rent").focus();
			return;
		}else if(isNaN(accumulated_rent)){
			$("#accumulated_rent_error").show();
			$("#accumulated_rent_error").html("日租金必须是数字");
			$("#accumulated_rent").focus();
			return;
		}else{
			$("#accumulated_rent_error").hide();
		} 
		
		if(product_market_value==""){
			$("#product_market_value_error").show();
			$("#product_market_value_error").html("请输入市场价值");
			$("#product_market_value").focus();
			return;
		}else if(isNaN(product_market_value)){
			$("#product_market_value_error").show();
			$("#product_market_value_error").html("市场价必须是数字");
			$("#product_market_value").focus();
			return;
		}else{
			$("#product__market_value_error").hide();
		}
		/*if(product_sharing_value==""){
			$("#product_sharing_value_error").show();
			$("#product_sharing_value_error").html("请输入作品共享价");
			$("#product_sharing_value").focus();
			return;
		}else{
			$("#product_sharing_value_error").hide();
		} */
		if(isNaN(product_mounted_status)){
			$("#product_mounted_error").show();
			$("#product_mounted_error").html("请选择装裱方式");
			document.querySelector("#product_mounted_error").scrollIntoView(false);
			return;
		}else{
			$("#product_mounted_error").hide();
		} 
        if(isNaN(product_size)){
			$("#product_size_error").show();
			$("#product_size_error").html("请选择作品尺寸");
			document.querySelector("#product_size_error").scrollIntoView(false);
			return;
		}else{
			$("#product_size_error").hide();
		} 
        if(isNaN(product_level)){
			$("#product_level_error").show();
			$("#product_level_error").html("请选择作品级别");
			document.querySelector("#product_level_error").scrollIntoView(false);
			return;
		}else{
			$("#product_level_error").hide();
		} 
        if(isNaN(product_status)){
			$("#product_status_error").show();
			$("#product_status_error").html("请选择作品状态");
			document.querySelector("#product_status_error").scrollIntoView(false);
			return;
		}else{
			$("#product_status_error").hide();
		}
        if(isNaN(product_type)){
			$("#product_type_error").show();
			$("#product_type_error").html("请选择作品类型");
			document.querySelector("#product_type_error").scrollIntoView(false);
			return;
		}else{
			$("#product_type_error").hide();
		} 
        if(isNaN(product_style)){
			$("#product_style_error").show();
			$("#product_style_error").html("请输入作品内容");
			document.querySelector("#product_style_error").scrollIntoView(false);
			return;
		}else{
			$("#product_style_error").hide();
		} 
        if(isNaN(product_plate)){
        	$("#product_plate_error").show();
        	$("#product_plate_error").html("请输入作品板式");
        	document.querySelector("#product_plate_error").scrollIntoView(false);
        	return;
        }else{
        	$("#product_plate_error").hide();
        } 
        if(img_upload==""){
			$(".uploadImages").show();
			$(".uploadImages").html("请上传作品主图");
			document.querySelector(".uploadImages").scrollIntoView(false);
			return;
		}else{
			$(".uploadImages").hide();
		}
        if(product_uploadImages_text==""){
        	$(".uploadImages_text").show();
        	$(".uploadImages_text").html("请输入主图描述");
        	document.querySelector(".product_uploadImages_text").scrollIntoView(false);
        	return;
        }else{
        	$(".uploadImages_text").hide();
        }
        if("true" == sessionStorage.getItem('jump')){
    		update();
    	}else{
    		save();
    	}
	  });
  });
  
  $("#select_mounted_status dl").each(function(){
	  var dd=$(this).children().first();
	  dd.text("全部装裱状态");
	  $("#select_mounted_status input").prop("placeholder", "选择装裱状态");
  });
  $("#select_size dl").each(function(){
	  var dd=$(this).children().first();
	  dd.text("全部尺寸");
	  $("#select_size input").prop("placeholder", "选择尺寸");
  });
  $("#select_style dl").each(function(){
	  var dd=$(this).children().first();
	  dd.text("全部风格");
	  $("#select_style input").prop("placeholder", "选择风格");
  });
  $("#select_level dl").each(function(){
	  var dd=$(this).children().first();
	  dd.text("全部级别");
	  $("#select_level input").prop("placeholder", "选择级别");
  });
  $("#select_status dl").each(function(){
	  var dd=$(this).children().first();
	  dd.text("全部状态");
	  $("#select_status input").prop("placeholder", "选择状态");
  });
  $("#select_type dl").each(function(){
	  var dd=$(this).children().first();
	  dd.text("全部类型");
	  $("#select_type input").prop("placeholder", "选择类型");
  });
  $("#select_mounted_status dd").each(function(){
	  var mounted_status_text=$(this).text();
	  var mounted_status_val=$(this).parent().prev().children().val();
	 if(mounted_status_text==mounted_status_val){
		 $("#select_size dd").each(function(){
			  var size_text=$(this).text();
			  var size_val=$(this).parent().prev().children().val();
			 if(size_text==size_val){
				 $("#select_style dd").each(function(){
					  var style_text=$(this).text();
					  var style_val=$(this).parent().prev().children().val();
					 if(style_text==style_val){
						 $("#select_level dd").each(function(){
							  var level_text=$(this).text();
							  var level_val=$(this).parent().prev().children().val();
							 if(level_text==level_val){
								 $("#select_status dd").each(function(){
									  var status_text=$(this).text();
									  var status_val=$(this).parent().prev().children().val();
									 if(status_text==status_val){
										 $("#select_type dd").each(function(){
											  var type_text=$(this).text();
											  var type_val=$(this).parent().prev().children().val();
											 if(type_text==type_val){
												 $(this).addClass("layui-this");
												 return false;
											 }else{
												 $("dd").removeClass("layui-this");
											 }
										});
										 $(this).addClass("layui-this");
										 return false;
									 }else{
										 $("dd").removeClass("layui-this");
									 }
								});
								 $(this).addClass("layui-this");
								 return false;
							 }else{
								 $("dd").removeClass("layui-this");
							 }
						});
						 $(this).addClass("layui-this");
						 return false;
					 }else{
						 $("dd").removeClass("layui-this");
					 }
				});
				 $(this).addClass("layui-this");
				 return false;
			 }else{
				 $("dd").removeClass("layui-this");
			 }
		  });
		 $(this).addClass("layui-this");
		 return false;
	 }else{
		 $("dd").removeClass("layui-this");
	 }
  });
  //监听提交
  form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
  });
});
//数据对接
	(function($){
		$(window).load(function(){
			$("a[rel='load-content']").click(function(e){
				e.preventDefault();
				var url=$(this).attr("href");
				gain(url);
			});
			$(".content").delegate("a[href='top']","click",function(e){
				e.preventDefault();
				$(".content").mCustomScrollbar("scrollTo",$(this).attr("href"));
			});
			
		});

		
		//编辑信息跳转文本框赋值
		if("true" == sessionStorage.getItem('jump')){
			var listProduct = JSON.parse(sessionStorage.getItem('listProduct'));
			console.log(listProduct);
			document.getElementById("img_upload").src=listProduct.productPictureMain;
			document.getElementById("img_upload1").src=listProduct.productPictureFirst;
			document.getElementById("img_upload2").src=listProduct.productPictureSecond;
			changeValue("product_style",listProduct.productStyle);
			changeValue("product_size",listProduct.productSize);
			changeValue("product_level",listProduct.productLevel);
			changeValue("product_mounted_status",listProduct.productMountedStatus);
			changeValue("product_type",listProduct.productType);
			changeValue("product_status",listProduct.productStatus);
			changeValue("product_plate",listProduct.isCross);
			/*ue.ready(function() {
				ue.setContent(listProduct.productProfile);
			});*/
			var productCreateTime = "";
			if(listProduct.productCreateTime>100000000000){
				productCreateTime = getMyDate(listProduct.productCreateTime);
			}else{
				productCreateTime = listProduct.productCreateTime;
			}
			document.getElementById("productAuthorId").value = listProduct.productAuthorId;
			document.getElementById("productCreateTime").value = productCreateTime;
			document.getElementById("productId").value = listProduct.id;
			document.getElementById("product_code").value = listProduct.productCode;
			document.getElementById("product_name").value = listProduct.productName;
			document.getElementById("product_author").value = listProduct.productAuthor;
			document.getElementById("product_sharing_value").value = listProduct.productSharingValue/100;
			document.getElementById("product_market_value").value = listProduct.productMarketValue/100;
			document.getElementById("packing_costs").value = listProduct.productMountedValue/100;
			document.getElementById("product_cost").value = listProduct.overOrderCost/100;
			document.getElementById("product_deposit").value = listProduct.productDeposit/100;
			
			document.getElementById("product_activePrice").value = listProduct.activePrice/100;
			document.getElementById("accumulated_rent").value = listProduct.rent/100;
			document.getElementById("img_upload_describe").value = listProduct.productPictureMainDescribe;
			document.getElementById("img_upload1_describe").value = listProduct.productPictureFirstDescribe;
			document.getElementById("img_upload2_describe").value = listProduct.productPictureSecondDescribe;
//			var num1=parseFloat($("#packing_costs").val());
//			var num2=parseFloat($("#product_cost").val());
//			var num3=parseFloat($("#product_deposit").val());
//			var num4=parseFloat($("#accumulated_rent").val());
//			var num=num1+num2+num3+num4*30*6;
			//$("#product_sharing_value").val(num);
			dayMoney();
		}else if("false" == sessionStorage.getItem('jump')){
			var author = JSON.parse(sessionStorage.getItem('author'));
			document.getElementById("productAuthorId").value = author.authorId;
			document.getElementById("product_author").value = author.authorName;
			dayMoney();
		}
	    function getMyDate(str){  
	        var oDate = new Date(str),  
	        oYear = oDate.getFullYear(),  
	        oMonth = oDate.getMonth()+1,  
	        oDay = oDate.getDate(),  
	        oHour = oDate.getHours(),  
	        oMin = oDate.getMinutes(),  
	        oSen = oDate.getSeconds(),  
	        oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay);//最后拼接时间  
	        return oTime;  
	    }; 
	    function getzf(num){  
	        if(parseInt(num) < 10){  
	            num = '0'+num;  
	        }  
	        return num;  
	    }
		
	})(jQuery);
function changeValue(name,value){
	var selects = document.getElementById(name);
	for(i=0;i<selects.length;i++){
	 	if(selects[i].value == value)
	    	selects[i].selected = true;
	}
}
function gain(url){
	$.get(url,function(data){
		if(data.state == 0){
			$(".content .mCSB_container").append(data); //load new content inside .mCSB_container
			//scroll-to appended content 
			$(".content").mCustomScrollbar("scrollTo","h2:last");
		}else{
			gain(url);
		}
	});
}
$(function(){
	$(".ipt1").keyup(function () {
		    var reg = $(this).val().match(/\d+\.?\d{0,2}/);
		    var txt = '';
		    if (reg != null) {
		        txt = reg[0];
		    }
		    $(this).val(txt);
		}).change(function () {
		    $(this).keypress();
		    var v = $(this).val();
		    if (/\.$/.test(v))
		    {
		        $(this).val(v.substr(0, v.length - 1));
		    }
		});
	$(".accumulated_rent").blur(function(){
		var num1=parseFloat($("#packing_costs").val());
		var num2=parseFloat($("#product_cost").val());
		var num3=parseFloat($("#product_deposit").val());
		var num4=parseFloat($("#accumulated_rent").val());
		var num=num1+num2+num3+num4*30*6;
		//$("#product_sharing_value").val(num);
	});
});
    function save(){
    	var listProduct = JSON.parse(sessionStorage.getItem('listProduct'));
//    	document.getElementById("product_sharing_value").value = document.getElementById("product_sharing_value").value*100;
//		document.getElementById("product_market_value").value = document.getElementById("product_market_value").value*100;
//		document.getElementById("packing_costs").value = document.getElementById("packing_costs").value*100;
//		document.getElementById("product_cost").value = doproduct_activePricecument.getElementById("product_cost").value*100;
//		document.getElementById("product_deposit").value = document.getElementById("product_deposit").value*100;
//		document.getElementById("accumulated_rent").value = document.getElementById("accumulated_rent").value*100; 
    	var date = document.getElementById("productCreateTime").value;
    	var productAuthorId = document.getElementById("productAuthorId").value;
    	var product_code=$("#product_code").val();
		var product_name=$("#product_name").val();
		var product_author=$("#product_author").val();
		var product_style=$("#product_style").val();
		var product_sharing_value=$("#product_sharing_value").val() * 100;
		var product_market_value=$("#product_market_value").val() * 100;
		var packing_costs=$("#packing_costs").val() * 100;
		var product_cost=$("#product_cost").val() * 100;
		var product_deposit=$("#product_deposit").val() * 100;
		var accumulated_rent=$("#accumulated_rent").val() *100;
		var activePrice=$("#product_activePrice").val() *100;
		var product_code0=$("#product_code0").val();
		var product_size=$("#product_size").val();
		var product_level=$("#product_level").val();
		var product_mounted_status=$("#product_mounted_status").val();
		var product_type=$("#product_type").val();
		var product_status=$("#product_status").val();
		var isCross=$("#product_plate").val();
		var overOrderCost=$("#product_cost").val()*100;
    	var url="/web/api/product/save";
		var img_upload = document.getElementById("img_upload").src;
		var img_upload_describe=$("#img_upload_describe").val();
		var img_upload1 = document.getElementById("img_upload1").src;
		var img_upload1_describe=$("#img_upload1_describe").val();
		var img_upload2 = document.getElementById("img_upload2").src;
		var img_upload2_describe=$("#img_upload2_describe").val();
		console.log(img_upload);
		console.log(img_upload_describe);
		var author = JSON.parse(sessionStorage.getItem('author'));
		var productAuthorPicture = author.authorPicturePortrait;
		var authorProfile = author.authorProfile;
		var param = {
				url: url,
				data: {"jsonStr":"{'productCode':'"+product_code+"','productName':'"+product_name+"','productPictureMain':'"+img_upload+"','productPictureFirst':'"+img_upload1+"','productPictureSecond':'"+img_upload2+"','productPictureThird':'','productPictureMainDescribe':'"+img_upload_describe+"','productPictureFirstDescribe':'"+img_upload1_describe+"','productPictureSecondDescribe':'"+img_upload2_describe+
					"','productPictureThirdDescribe':'','productLevel':"+product_level+",'productMountedStatus':"+product_mounted_status+",'productSize':"+product_size+",'productMarketValue':"+product_market_value+
					",'productSharingValue':"+product_sharing_value+",'productDeposit':"+product_deposit+",'productMountedValue':"+packing_costs+",'activePrice':"+activePrice+",'rent':"+accumulated_rent+",'productAuthor':'"+product_author+
					"','productStyle':"+product_style+",'productType':"+product_type+",'productCreateTime':'"+date+"','productStatus':"+product_status+",'productAuthorId':"+productAuthorId+
					",'productAuthorPicture':'"+productAuthorPicture+"','productAuthorInfo':'"+authorProfile+"','hot':'','isCross':'"+isCross+"','productInputStaff':1111,'overOrderCost':"+overOrderCost+"}"},
				successCallback: function(data){
					if(data.state == 0){
						//history.back(-1);
						layer.msg('提交成功');
					}else{
						layer.msg('提交失败');
					}
				},
				errorCallBack: function(data) {
					layer.msg('服务器繁忙请稍后重试');
				}
		}
		getDataFromServer(param);
    }
    function update(){
    	var listProduct = JSON.parse(sessionStorage.getItem('listProduct'));
//    	document.getElementById("product_sharing_value").value = document.getElementById("product_sharing_value").value*100;
//		document.getElementById("product_market_value").value = document.getElementById("product_market_value").value*100;
//		document.getElementById("packing_costs").value = document.getElementById("packing_costs").value*100;
//		document.getElementById("product_cost").value = document.getElementById("product_cost").value*100;
//		document.getElementById("product_deposit").value = document.getElementById("product_deposit").value*100;
//		document.getElementById("accumulated_rent").value = document.getElementById("accumulated_rent").value*100; 
    	var productId = document.getElementById("productId").value;
    	var date = document.getElementById("productCreateTime").value;
    	var productAuthorId = document.getElementById("productAuthorId").value;
    	var product_code=$("#product_code").val();
		var product_name=$("#product_name").val();
		var product_author=$("#product_author").val();
		var product_style=$("#product_style").val();
		var product_sharing_value=$("#product_sharing_value").val() * 100;
		var product_market_value=$("#product_market_value").val() * 100;
		var packing_costs=$("#packing_costs").val() * 100;
		var product_cost=$("#product_cost").val() * 100;
		var product_deposit=$("#product_deposit").val() * 100;
		var accumulated_rent=$("#accumulated_rent").val() *100;
		var product_code0=$("#product_code0").val();
		var product_size=$("#product_size").val();
		var product_level=$("#product_level").val();
		var activePrice=$("#product_activePrice").val() *100;
		var product_mounted_status=$("#product_mounted_status").val();
		var product_type=$("#product_type").val();
		var product_status=$("#product_status").val();
		var isCross=$("#product_plate").val();
		var overOrderCost=$("#product_cost").val()*100;
    	var url="/web/api/product/save";
		var img_upload = document.getElementById("img_upload").src;
		var img_upload_describe=$("#img_upload_describe").val();
		var img_upload1 = document.getElementById("img_upload1").src;
		var img_upload1_describe=$("#img_upload1_describe").val();
		var img_upload2 = document.getElementById("img_upload2").src;
		var img_upload2_describe=$("#img_upload2_describe").val();
		console.log(img_upload);
		console.log(img_upload_describe);
		var url="/web/api/product/update";
		var param = {
				url: url,
				data: {"jsonStr":"{'productId':'"+productId+"','productCode':'"+product_code+"','productName':'"+product_name+"','productPictureMain':'"+img_upload+"','productPictureFirst':'"+img_upload1+"','productPictureSecond':'"+img_upload2+"','productPictureThird':'','productPictureMainDescribe':'"+img_upload_describe+"','productPictureFirstDescribe':'"+img_upload1_describe+"','productPictureSecondDescribe':'"+img_upload2_describe+
					"','productPictureThirdDescribe':'','productLevel':"+product_level+",'productMountedStatus':"+product_mounted_status+",'productSize':"+product_size+",'productMarketValue':"+product_market_value+
					",'productSharingValue':"+product_sharing_value+",'productDeposit':"+product_deposit+",'productMountedValue':"+packing_costs+",'activePrice':"+activePrice+",'rent':"+accumulated_rent+",'productAuthor':'"+product_author+
					"','productStyle':"+product_style+",'productType':"+product_type+",'productCreateTime':'"+date+"','productStatus':"+product_status+
					",'hot':'','isCross':'"+isCross+"','productUpdateStaff':1111,'overOrderCost':"+overOrderCost+"}"},
				successCallback: function(data){
					if(data.state == 0){
						//history.back(-1);
						layer.msg('提交成功');
					}else{
						layer.msg('提交失败');
					}
				},
				errorCallBack: function(data) {
					layer.msg('服务器繁忙请稍后重试');
				}
		}
		getDataFromServer(param);
	        
    }
    
    function readCookie(name) {
	    var nameEQ = name + "=";
	    var ca = document.cookie.split(';');
	    for(var i=0;i < ca.length;i++) {
	        var c = ca[i];
	        while (c.charAt(0)==' ') c = c.substring(1,c.length);
	        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	    }
	    return null;
	}
    
    function contrast(name){
    	var listProduct = JSON.parse(sessionStorage.getItem('listProduct'));
    	name.value
    }
    function preView(file){
    	var img = document.getElementById("img_upload");
    	var reader = new FileReader();
    	reader.onload = function(evt) {
    		img.src = evt.target.result;
    	}
    	reader.readAsDataURL(file.files[0]);
        var file=$("#uploadImages").val();
        var arr=file.split('\\');
        var my=arr[arr.length-1];
        document.getElementById("img_name").value=my;
    }
    //时间控件
    layui.use('laydate', function(){
  	  var laydate = layui.laydate;
  	  //常规用法
  	  laydate.render({
  	    elem: '#productCreateTime'
  	  });
  	});
    

//时间戳格式转换
function timeFormat(time) {
	var oDate = new Date(time),  
    oYear = oDate.getFullYear(),  
    oMonth = oDate.getMonth()+1,  
    oDay = oDate.getDate(),  
    oHour = oDate.getHours(),  
    oMin = oDate.getMinutes(),  
    oTime = oYear + '' + supplement(oMonth) + '' + supplement(oDay);//最后拼接时间  
	return oTime;  
};
  
//补0操作,当时间数据小于10的时候，给该数据前面加一个0  
function supplement(num){  
    if(parseInt(num) < 10){  
        num = '0'+num;  
    }  
    return num;  
};

//数据对接-Knight, 富文本oss上传部分
var simpleFileMD5Value = '';
accessid = ''
accesskey = ''
host = ''
policyBase64 = ''
signature = ''
callbackbody = ''
filename = ''
key = ''
expire = 0
g_object_name = ''
g_object_name_type = ''
now = timestamp = Date.parse(new Date()) / 1000; 

//计算文件md5
function calculate_file_md5(up, param, pluploadFile, other){ 
    var fileReader = new FileReader(),  
        blobSlice = File.prototype.mozSlice || File.prototype.webkitSlice || File.prototype.slice,  
        file = param,  
        chunkSize = 2097152,  
        // read in chunks of 2MB  
        chunks = Math.ceil(file.size / chunkSize),  
        currentChunk = 0,  
        spark = new SparkMD5();
    
    fileReader.onload = function(e) {  
        spark.appendBinary(e.target.result); // append binary string  
        currentChunk++;  

        if (currentChunk < chunks) {  
            loadNext();  
        }  
        else {  
        	simpleFileMD5Value = spark.end();
        	var fileAddParam = {
				method: "POST",
				url : "/web/api/bam/checkFileMD5",
				data : {"jsonStr":"{'md5':'"+simpleFileMD5Value+"'}"},
				successCallback: function(data) {
					var fileUrl = data.data;
					if(null == fileUrl || "" == fileUrl) {
						set_upload_param(up, '', false);
					} else {
						/*if(other == "other") {
							ue.execCommand('insertHtml', "<img src='"+fileUrl+"' />");
						} else */if(other == "main") {
							document.getElementById('img_upload').src = fileUrl;
							$('#img_name').val(file.name);
						} else if(other == "main1") {
							document.getElementById('img_upload1').src = fileUrl;
							$('#img_name1').val(file.name);
						} else if(other == "main2") {
							document.getElementById('img_upload2').src = fileUrl;
							$('#img_name2').val(file.name);
						}
						up.removeFile(pluploadFile);
					}
				},
				errorCallBack: function(data) {
					console.log(data.message);
				}
			}
			getDataFromServer(fileAddParam);
        }  
    };  
    function loadNext() {  
        var start = currentChunk * chunkSize,  
            end = start + chunkSize >= file.size ? file.size : start + chunkSize;  
        fileReader.readAsBinaryString(blobSlice.call(file, start, end));  
    };  
    loadNext();  
}  

//发送oss验证policy请求
function send_request()
{
    var xmlhttp = null;
    if (window.XMLHttpRequest)
    {
        xmlhttp=new XMLHttpRequest();
    }
    else if (window.ActiveXObject)
    {
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    if (xmlhttp!=null)
    {
        serverUrl = '/web/api/file/getOSSPolicy?dir=product';
        xmlhttp.open( "GET", serverUrl, false );
        xmlhttp.send( null );
        return xmlhttp.responseText
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
};

//获取返回的验证信息
function get_signature()
{
	//可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
    now = timestamp = Date.parse(new Date()) / 1000; 
    var nowtimestamp = timeFormat(new Date().getTime());
    if (expire < now + 3)
    {
    	var informationId = $('#informationId').val();
        body = send_request()
        var obj = eval ("(" + body + ")");
        host = obj['host']
        policyBase64 = obj['policy']
        accessid = obj['accessid']
        signature = obj['signature']
        expire = parseInt(obj['expire'])
        callbackbody = obj['callback'] 
        key = obj['dir'] + nowtimestamp + "/";
        return true;
    }
    return false;
};

//取名随机字符串
function random_string(len) {
	len = len || 32;
	var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';   
	var maxPos = chars.length;
	var pwd = '';
	for (i = 0; i < len; i++) {
		pwd += chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return pwd;
}

//获取文件后缀
function get_suffix(filename) {
    pos = filename.lastIndexOf('.')
    suffix = ''
    if (pos != -1) {
        suffix = filename.substring(pos)
    }
    return suffix;
}

//生成上传后的文件名
function calculate_object_name(filename){
    suffix = get_suffix(filename);
    g_object_name = key + random_string(10) + suffix;
    return ''
}

//获取上传后的文件名
function get_uploaded_object_name(filename){
	return g_object_name;
}

//上传文件
function set_upload_param(up, filename, ret)
{
    if (ret == false)
    {
        ret = get_signature()
    }
    g_object_name = key;
    if (filename != '') {
        suffix = get_suffix(filename)
        calculate_object_name(filename)
    }
    new_multipart_params = {
        'key' : g_object_name,
        'policy': policyBase64,
        'OSSAccessKeyId': accessid, 
        'success_action_status' : '200', //让服务端返回200,不然，默认会返回204
        'callback' : callbackbody,
        'signature': signature,
    };

    up.setOption({
        'url': host,
        'multipart_params': new_multipart_params
    });

    up.start();
}

/*var uploader_other = new plupload.Uploader({
	runtimes : 'html5,flash,silverlight,html4',
	browse_button : ['product_uploadOtherImages','product_uploadOtherImages1','product_uploadOtherImages2'], 
    multi_selection: false,
	//container: document.getElementById('container'),
	flash_swf_url : '/web/lib/plupload-2.1.2/js/Moxie.swf',
	silverlight_xap_url : '/web/lib/plupload-2.1.2/js/Moxie.xap',
    url : 'http://oss.aliyuncs.com',

    filters: {
        mime_types : [ //只允许上传图片和zip,rar文件
        { title : "Image files", extensions : "jpg,gif,png,bmp" }
        //,{ title : "Zip files", extensions : "zip,rar" }
        ],
        max_file_size : '10mb', //最大只能上传10mb的文件
        prevent_duplicates : false //不允许选取重复文件
    },

	init: {
		FilesAdded: function(up, files) {
			plupload.each(files, function(file) {
				simpleFileMD5Value = '';
				var param = file.getNative();
				calculate_file_md5(param);
				var getFileMD5 = setInterval(function() {
					if(simpleFileMD5Value) {
						clearInterval(getFileMD5);
						$.ajax({
							type : "POST",							
							url : "/web/api/bam/checkFileMD5",
							data : {"jsonStr":"{'md5':'"+simpleFileMD5Value+"'}"},
							dataType : 'json',
							success : function(data) {
								var fileUrl = data.data;
								if(null == fileUrl || "" == fileUrl) {
									set_upload_param(uploader_other, '', false);
								} else {
									ue.execCommand('insertHtml', "<img src='"+fileUrl+"' />");
								}
							},
							error : function(data) {
								console.log(data.message);
							}
						})
					}
				},50);
			});
		},

		BeforeUpload: function(up, file) {
            set_upload_param(up, file.name, true);
        },


		FileUploaded: function(up, file, info) {
			
            if (info.status == 200)
            {
            	var imgsrc = host +"/"+get_uploaded_object_name(file.name);
            	var file_md5 = "{'md5':'"+simpleFileMD5Value+"','url':'"+imgsrc+"'}";
                $.ajax({
                	type : "POST",							
					url : "/web/api/bam/addFileMD5",
					data : {"jsonStr":"{'fileMD5':"+file_md5+"}"},
					dataType : 'json',
					success : function(data) {
						ue.execCommand('insertHtml', "<img src='"+imgsrc+"' />");
					},
					error : function(data) {
						console.log(data.message);
					}
                })
            }
            else
            {
            } 
		},

		Error: function(up, err) {
            if (err.code == -600) {
                document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
            }
            else if (err.code == -601) {
                document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
            }
            else if (err.code == -602) {
                document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
            }
            else 
            {
                document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
            }
		}
	}
});

uploader_other.init();
*/
var uploader_main = new plupload.Uploader({
	runtimes : 'html5,flash,silverlight,html4',
	browse_button : 'product_uploadImages', 
    multi_selection: false,
	//container: document.getElementById('container'),
	flash_swf_url : '/web/lib/plupload-2.1.2/js/Moxie.swf',
	silverlight_xap_url : '/web/lib/plupload-2.1.2/js/Moxie.xap',
    url : 'http://oss.aliyuncs.com',

    filters: {
        mime_types : [ //只允许上传图片和zip,rar文件
        { title : "Image files", extensions : "jpg,gif,png,bmp" }
        //,{ title : "Zip files", extensions : "zip,rar" }
        ],
        max_file_size : '10mb', //最大只能上传10mb的文件
        prevent_duplicates : false //不允许选取重复文件
    },

	init: {
		FilesAdded: function(up, files) {
			plupload.each(files, function(file) {
				simpleFileMD5Value = '';
				var param = file.getNative();
				var other = "main";
				calculate_file_md5(up, param, file, other);
			});
		},

		BeforeUpload: function(up, file) {
            set_upload_param(up, file.name, true);
        },

		FileUploaded: function(up, file, info) {
            if (info.status == 200)
            {
            	var imgsrc = host +"/"+get_uploaded_object_name(file.name);
                var file_md5 = "{'md5':'"+simpleFileMD5Value+"','url':'"+imgsrc+"'}";
                $.ajax({
                	type : "POST",							
					url : "/web/api/bam/addFileMD5",
					data : {"jsonStr":"{'fileMD5':"+file_md5+"}"},
					dataType : 'json',
					success : function(data) {
						document.getElementById('img_upload').src = imgsrc;
						$('#img_name').val(file.name);
					},
					error : function(data) {
						console.log(data.message);
					}
                })
            }
            else
            {
            } 
		},

		Error: function(up, err) {
            if (err.code == -600) {
                document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
            }
            else if (err.code == -601) {
                document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
            }
            else if (err.code == -602) {
                document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
            }
            else 
            {
                document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
            }
		}
	}
});

uploader_main.init();
var uploader_main1 = new plupload.Uploader({
	runtimes : 'html5,flash,silverlight,html4',
	browse_button : 'product_uploadImages1', 
	multi_selection: false,
	//container: document.getElementById('container'),
	flash_swf_url : '/web/lib/plupload-2.1.2/js/Moxie.swf',
	silverlight_xap_url : '/web/lib/plupload-2.1.2/js/Moxie.xap',
	url : 'http://oss.aliyuncs.com',
	
	filters: {
		mime_types : [ //只允许上传图片和zip,rar文件
			{ title : "Image files", extensions : "jpg,gif,png,bmp" }
			//,{ title : "Zip files", extensions : "zip,rar" }
			],
			max_file_size : '10mb', //最大只能上传10mb的文件
			prevent_duplicates : false //不允许选取重复文件
	},
	
	init: {
		FilesAdded: function(up, files) {
			plupload.each(files, function(file) {
				simpleFileMD5Value = '';
				var param = file.getNative();
				var other = "main1";
				calculate_file_md5(up, param, file, other);
			});
		},
		
		BeforeUpload: function(up, file) {
			set_upload_param(up, file.name, true);
		},
		
		FileUploaded: function(up, file, info) {
			if (info.status == 200)
			{
				var imgsrc = host +"/"+get_uploaded_object_name(file.name);
				var file_md5 = "{'md5':'"+simpleFileMD5Value+"','url':'"+imgsrc+"'}";
				$.ajax({
					type : "POST",							
					url : "/web/api/bam/addFileMD5",
					data : {"jsonStr":"{'fileMD5':"+file_md5+"}"},
					dataType : 'json',
					success : function(data) {
						document.getElementById('img_upload1').src = imgsrc;
						$('#img_name1').val(file.name);
					},
					error : function(data) {
						console.log(data.message);
					}
				})
			}
			else
			{
			} 
		},
		
		Error: function(up, err) {
			if (err.code == -600) {
				document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
			}
			else if (err.code == -601) {
				document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
			}
			else if (err.code == -602) {
				document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
			}
			else 
			{
				document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
			}
		}
	}
});

uploader_main1.init();

var uploader_main2 = new plupload.Uploader({
	runtimes : 'html5,flash,silverlight,html4',
	browse_button : 'product_uploadImages2', 
	multi_selection: false,
	//container: document.getElementById('container'),
	flash_swf_url : '/web/lib/plupload-2.1.2/js/Moxie.swf',
	silverlight_xap_url : '/web/lib/plupload-2.1.2/js/Moxie.xap',
	url : 'http://oss.aliyuncs.com',
	
	filters: {
		mime_types : [ //只允许上传图片和zip,rar文件
			{ title : "Image files", extensions : "jpg,gif,png,bmp" }
			//,{ title : "Zip files", extensions : "zip,rar" }
			],
			max_file_size : '10mb', //最大只能上传10mb的文件
			prevent_duplicates : false //不允许选取重复文件
	},
	
	init: {
		FilesAdded: function(up, files) {
			plupload.each(files, function(file) {
				simpleFileMD5Value = '';
				var param = file.getNative();
				var other = "main2";
				calculate_file_md5(up, param, file, other);
			});
		},
		
		BeforeUpload: function(up, file) {
			set_upload_param(up, file.name, true);
		},
		
		FileUploaded: function(up, file, info) {
			if (info.status == 200)
			{
				var imgsrc = host +"/"+get_uploaded_object_name(file.name);
				var file_md5 = "{'md5':'"+simpleFileMD5Value+"','url':'"+imgsrc+"'}";
				$.ajax({
					type : "POST",							
					url : "/web/api/bam/addFileMD5",
					data : {"jsonStr":"{'fileMD5':"+file_md5+"}"},
					dataType : 'json',
					success : function(data) {
						document.getElementById('img_upload2').src = imgsrc;
						$('#img_name2').val(file.name);
					},
					error : function(data) {
						console.log(data.message);
					}
				})
			}
			else
			{
			} 
		},
		
		Error: function(up, err) {
			if (err.code == -600) {
				document.getElementById('console').appendChild(document.createTextNode("\n选择的文件太大了,可以根据应用情况，在upload.js 设置一下上传的最大大小"));
			}
			else if (err.code == -601) {
				document.getElementById('console').appendChild(document.createTextNode("\n选择的文件后缀不对,可以根据应用情况，在upload.js进行设置可允许的上传文件类型"));
			}
			else if (err.code == -602) {
				document.getElementById('console').appendChild(document.createTextNode("\n这个文件已经上传过一遍了"));
			}
			else 
			{
				document.getElementById('console').appendChild(document.createTextNode("\nError xml:" + err.response));
			}
		}
	}
});

uploader_main2.init();

