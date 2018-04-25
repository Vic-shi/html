var index,pageno;
var arrId = new Array();

//下拉框
layui.use('form', function(){
  var form = layui.form;
  	$("dd").removeClass("layui-this");
	//修改选择框里的值
	$("#select_level dl").each(function(){
		var dd=$(this).children().first();
		dd.text("全部级别");
		$("#select_level input").prop("placeholder", "选择级别");
	});
	$("#select_mounted_status dl").each(function(){
		var dd=$(this).children().first();
		dd.text("全部装裱状态");
		$("#select_mounted_status input").prop("placeholder", "选择装裱状态");
	});
	$("#select_type dl").each(function(){
		var dd=$(this).children().first();
		dd.text("全部类型");
		$("#select_type input").prop("placeholder", "选择类型");
	});
	$("#select_status dl").each(function(){
		var dd=$(this).children().first();
		dd.text("全部作品状态");
		$("#select_status input").prop("placeholder", "选择作品状态");
	});
  //监听提交
  form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
  });
});
$(function(){
	findProducts(1,true);

	//全选/取消全选
	var isCheckAll = false;
	$("#choose").click(function(){
		if (isCheckAll) {  
            $("input[type='checkbox']").each(function() {  
                this.checked = false;  
            });  
            isCheckAll = false;  
        } else {  
            $("input[type='checkbox']").each(function() {  
                this.checked = true;  
            });  
            isCheckAll = true;  
        }  
	});
	//关闭弹出框
	$(".close").click(function(){
		$("#bomb_positioning").hide();
	});
	//取消
	$(".cancel").click(function(){
		$("#bomb_positioning").hide();
	});
});


 
function findProducts(pageNo,flag){
	document.getElementById("tbody").innerHTML="";
	document.getElementById("paging").innerHTML=""; 
	pageno = pageNo+1;
	var listLen = 10;
	var url="/web/api/product/listSimple";
	var ProductMsg = document.getElementById("ProductMsg").value;
	var productLevel = document.getElementById("product_level").value;
	var productMountedStatus = document.getElementById("product_mounted_status").value;
	var ProductType = document.getElementById("product_type").value;
	var ProductStatus = 0;
	if(!flag){
		ProductStatus = document.getElementById("product_status").value;
	}
	var param = {
			url: url,
			data: {"jsonStr":"{'pageNo':"+pageNo+",'listLen':"+listLen+",'draw':1,'productMsg':'"+ProductMsg+"','productLevel':"+productLevel+",'productMountedStatus':"+productMountedStatus+",'ProductStyle':"+ProductType+",'ProductStatus':"+ProductStatus+"}"},
			successCallback: function(data){
				index=0;
				console.log(data);
				var pageCount = data.data.page;
				var tbody = $("#tbody");
				var error = $('#error');
				var paging = $("#paging");
				var listProduct = data.data.listProduct;
				if(data.data.page.totalCount==0){
					var str="<span>查无数据<span>";
					error.html(str);
				}else{
					error.html("");
					$.each(listProduct, function (index, item) {
		                OutPutData(tbody, item);
		            });  
		            OutPutPage(paging, pageCount);
				}
			},
			errorCallBack: function(data) {
				var str="<span>服务器繁忙请稍后重试<span>";
				$('#error').html(str);
			}
	}
	getDataFromServer(param);
}
 
function OutPutData(tbody, item) {
	index = index +1;
	arrId[index] = item.id;
    //输出
    tbody.append("<tr>"
   			+"<td class='center'>"
   			+"<input name='checkbox' type='checkbox' id='awesome"+item.id+"' class='checkbox' value='"+item.id+"'/>"
   			+"<label for='awesome"+item.id+"'></label>"
   			+"</td>"
			+"<td class='center forced_wrap'>"+item.id+"</td>"
			+"<td class='center forced_wrap'>"+item.productName+"</td>"
			+"<td class='center forced_wrap'>"+item.productAuthor+"</td>"
			+"<td class='center'><img src='"+item.productPictureMain+"' class='product_img'></td>"
			/*+"<td class='center forced_wrap'>"+(item.productLevel == 0 ? "国家级" : (item.productLevel == 1 ? "中书协/中美协":(item.productLevel == 2 ? "省级":"未知")))+"</td>"*/
			+"<td class='center'>"+(item.productMountedStatus == 0 ? "轴" : (item.productMountedStatus == 1 ? "芯":(item.productMountedStatus == 2 ? "框":"未知")))+"</td>"
			+"<td class='center'>"+(item.productSize == 0 ? "四尺" : (item.productSize == 1 ? "六尺":(item.productSize == 2 ? "八尺":(item.productSize == 3 ? "四轴屏":(item.productSize == 4 ? "斗方":"未知")))))+"</td>"
			/*+"<td class='center product_market_capitalization'>"+item.productMarketValue/100+"</td>"*/
			+"<td class='center product_share_price'>"+item.productSharingValue/100+"</td>"
			/*+"<td class='center'>"+(item.productType == 0 ? "山水" : (item.productType == 1 ? "花鸟":(item.productType == 2 ? "走兽":(item.productType == 3 ? "人物":(item.productType == 4 ? "国画其他":(item.productType == 5 ? "四字榜书":(item.productType == 6 ? "诗词":(item.productType == 7 ? "其他书法":"未知"))))))))+"</td>"
			+"<td class='center'>"+(item.productStyle == 0 ? "国画" : (item.productStyle == 1? "书法":"未知"))+"</td>"*/
			+"<td class='center'>"+(item.productStatus == 0 ? "上架" : (item.productStatus == 1 ? "下架":(item.productStatus == 2 ? "租赁中":(item.productStatus == 3 ? "结单":"未知"))))+"</td>"
			+"<td class='center'><img src='/web/commons/image/management/edit_icon.png' class='edit_icon' onclick='editProduct("+index+");'></td>"
			+"<td class='center'><img src='/web/lib/Management_system/images/icon/delect_icon.png' onclick='deleteProduct("+index+","+true+");' class='delect'></td>"
			+"</tr>");
    
}

function OutPutPage(paging, pageCount) {
	paging.append("<button onclick='findByPage("+1+");' id='first_page' class='last_page' value='"+1+"'>首页</button>");
	paging.append("<button onclick='findByPage("+(pageno-2)+");' id='prev_page' class='next_page' value='"+(pageno-2)+"'>上一页</button>");
	for(var i = 1;i<=pageCount.totalPages;i++){
		var str="";
		if(i==pageno-1){
			str="<button class='pages' value='"+i+"'>"+i+"</button>";
		}else{
			str="<button onclick='findByPage("+i+");' class='page' value='"+i+"'>"+i+"</button>";
		}
		paging.append(str);
	}
	paging.append("<button onclick='findByPage("+pageno+");' id='next_page' class='next_page' value='"+pageno+"'>下一页</button>");
	paging.append("<button onclick='findByPage("+pageCount.totalPages+");' id='last_page' class='last_page' value='"+pageCount.totalPages+"'>末页</button>");
	//文本框限制只能输入数字
    paging.append("<input type='text' id='jumpPageNo' class='page_number_input_box' onkeyup='onlyNumber()'>");
    paging.append("<button onclick='jumpByPageNo("+pageCount.totalPages+");' class='pages_jump'>跳转</button>");
  //判断上一页等按钮是否需要禁用
	pages(pageCount);
}
//页码输入框  只能输入数字
function onlyNumber(){
	var pages=$(".page_number_input_box");
    if(/[^\d]/.test(pages.val())){
    	//替换非数字字符  
      var temp_amount=pages.val().replace(/[^\d]/g,'');  
      pages.val(temp_amount);  
    }  
    var code = event.keyCode;
	if(code == 13){
		jumpByPageNo();
	}
}
function pages(pageCount){
	//当前页是第一页，首页与上一页按钮禁用
	if($(".pages").val()==1){
		$('#prev_page').attr('disabled',"true");
		$('#prev_page').css("cursor", "not-allowed");
		$('#first_page').attr('disabled',"true");
		$('#first_page').css("cursor", "not-allowed");
	}else{
		$('#prev_page').removeAttr("disabled"); 
		$('#prev_page').css("cursor", "pointer");
		$('#prev_page').mouseover(function(){
			$('#prev_page').css("color", "#4ec3fb");
		});
		$('#prev_page').mouseout(function(){
			$('#prev_page').css("color", "#737373");
		});
		$('#first_page').removeAttr("disabled");
		$('#first_page').css("cursor", "pointer");
		$('#first_page').mouseover(function(){
			$('#first_page').css("color", "#4ec3fb");
		});
		$('#first_page').mouseout(function(){
			$('#first_page').css("color", "#737373");
		});
	}
	//当没有页数时,全部禁用
	if(pageCount.totalPages==undefined){
		$('#prev_page').attr('disabled',"true");
		$('#prev_page').css("cursor", "not-allowed");
		$('#first_page').attr('disabled',"true");
		$('#first_page').css("cursor", "not-allowed");
		$('#next_page').attr('disabled',"true");
		$('#next_page').css("cursor", "not-allowed");
		$('#last_page').attr('disabled',"true");
		$('#last_page').css("cursor", "not-allowed");
	}else if(pageCount.totalPages!=undefined){
	//当前页是最后一页，末页与下一页按钮禁用
	if($(".pages").val()==pageCount.totalPages){
		$('#next_page').attr('disabled',"true");
		$('#next_page').css("cursor", "not-allowed");
		$('#last_page').attr('disabled',"true");
		$('#last_page').css("cursor", "not-allowed");
	}else{
		$('#next_page').removeAttr("disabled"); 
		$('#next_page').css("cursor", "pointer");
		$('#next_page').mouseover(function(){
			$('#next_page').css("color", "#4ec3fb");
		});
		$('#next_page').mouseout(function(){
			$('#next_page').css("color", "#737373");
		});
		$('#last_page').removeAttr("disabled");
		$('#last_page').css("cursor", "pointer");
		$('#last_page').mouseover(function(){
			$('#last_page').css("color", "#4ec3fb");
		});
		$('#last_page').mouseout(function(){
			$('#last_page').css("color", "#737373");
		});
	}
	}
}
function findByPage(pageNo){
	findProducts(pageNo,false);
}

function jumpByPageNo(totalPages){
	var jumpPageNo = Number(document.getElementById("jumpPageNo").value.trim());
	if(jumpPageNo<1){
		jumpPageNo=1;
	}else if(jumpPageNo>totalPages){
		jumpPageNo=totalPages;
	}
	findProducts(jumpPageNo,false);
} 

function editProduct(index){
	var productId = arrId[index];
	var url="/web/api/product/listDetail";
	var param = {
			url: url,
			data: {"jsonStr":"{'productId':"+productId+"}"},
			successCallback: function(data){
				var listProduct = data.data;
				var bdhtml=window.document.body.innerHTML
				sessionStorage.setItem('jump', true);
				sessionStorage.setItem('listProduct', JSON.stringify(listProduct));
				window.location.href = "/web/management/erp/product/product_detail.jsp";
			},
			errorCallBack: function(data) {
				console.log(data.msg);
			}
	}
	getDataFromServer(param);
}
function deleteBatch(){
			var url="/web/api/product/deleteBatch";
			var obj=document.getElementsByName('checkbox'); //选择所有name="'test'"的对象，返回数组 
			//取到对象数组后，我们来循环检测它是不是被选中 
			var str=''; 
			for(var i=0; i<obj.length; i++){ 
				if(obj[i].checked) {
					if(i<obj.length-1){
						str+=obj[i].value+','; //如果选中，将value添加到变量s中 
						console.log(str);
					}else{
						str+=obj[i].value;
					}
				}
			}
			deleteProduct(str,false);
}
function deleteProduct(str,flag){
	if(flag){
		str = arrId[str];
	}
	if($("#bomb_positioning").is(":hidden")){
		$("#bomb_positioning").show();
		$(".confirm_button").click(function(){
			var url="/web/api/product/deleteBatch";
			var param = {
					url: url,
					data: {"jsonStr":"{'productIds':'"+str+"'}"},
					successCallback: function(data){
						findProducts(1,true);
						$("#bomb_positioning").hide();
						$(".confirm_button").unbind();
						
					},
					errorCallBack: function(data) {
						console.log(data.msg);
						$(".confirm_button").unbind();
						$("#bomb_positioning").hide();
					}
			}
			getDataFromServer(param);
		});
	}else{
		$("#bomb_positioning").hide();
	}
	
}