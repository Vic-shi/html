var index=0,pageno;
var arrId = new Array();
//下拉框
layui.use('form', function(){
  var form = layui.form;
  
  //监听提交
	form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
  });
});
//时间
layui.use('laydate', function(){
	  var laydate = layui.laydate;
	  //常规用法
	  laydate.render({
	    elem: '#date'
	  });
	});
$(function(){
	//进入页面开始查询
	findOrderMsg(1);
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
function findOrderMsg(pageNo){
	document.getElementById("tbody").innerHTML="";
	document.getElementById("paging").innerHTML=""; 
	pageno = pageNo+1;
	var listLen = 5;
	var url="/web/api/order/listSimpleByMsg";
	var orderMsg = document.getElementById("orderMsg").value.trim();
	var orderStatus = document.getElementById("orderStatus").value;
	var date = document.getElementById("date").value;
	var param = {
			url: url,
			data: {"jsonStr":"{'pageNo':"+pageNo+",'listLen':"+listLen+",'draw':1,'orderMsg':'"+orderMsg+"','orderStatus':'"+orderStatus+"','date':'"+date+"'}"},
			successCallback: function(data){
				console.log(data);
				var pageCount = data.data.page;
				var tbody = $("#tbody");
				var error = $('#error');
				var paging = $("#paging");
				var listAuthor = data.data.listOrder;
				if(data.data.page.totalCount==0){
					var str="<span>查无数据<span>";
					error.html(str);
				}else{
					error.html("");
					$.each(listAuthor, function (index, item) {
		                OutPutData(tbody, item);
		            });  
		            OutPutPage(paging, pageCount);
				}
			},
			errorCallBack: function(data) {
				console.log(data.msg);
			}
	}
	getDataFromServer(param);
}
 

function editOrder(index,orderStatus){
	var OrderId = arrId[index];
	var url="/web/api/order/listDetail";
	var param = {
			url: url,
			data: {"jsonStr":"{'orderId':"+OrderId+"}"},
			successCallback: function(data){
				console.log(data);
				var listOrder = data.data;
				console.log(listOrder)
				sessionStorage.setItem('listOrder', JSON.stringify(listOrder));
				if(orderStatus == 4){
					window.location.href = "/web/management/platform/order/all_detail_hh.jsp";
				}else{
					window.location.href = "/web/management/platform/order/all_orders_edit.jsp";
				}
			},
			errorCallBack: function(data) {
				console.log(data.msg);
			}
	}
	getDataFromServer(param);

}

function OutPutData(tbody, item) {
	index = index +1;
	arrId[index] = item.id;
	//输出
	tbody.append("<tr>"
		+"<td class='center forced_wrap'>"+item.id+"</td>"
		+"<td class='center forced_wrap'>"+item.productName+"</td>"
		+"<td class='center'><img src='"+item.productPicture+"' class='orders_img'></td>"
		+"<td class='center forced_wrap'>"+item.productAuthor+"</td>"
		+"<td class='center forced_wrap'>"+item.userName+"</td>"
		+"<td class='center forced_wrap'>"+item.userMobile+"</td>"
		+"<td class='center receiver_address'>"+item.userAddress+"</td>"
		+"<td class='center'>"+item.actualPayment/100+"</td>"
		+"<td class='center'>"+(item.orderType == 0 ? "租赁" : (item.orderType == 1 ? "结单":"未知"))+"</td>"
		+"<td class='center'>"+(item.orderStatus == 0 ? "未付款" : (item.orderStatus == 1 ? "未发货":(item.orderStatus == 2 ? "已发货":(item.orderStatus == 3 ? "租赁中":(item.orderStatus == 4 ? "还画中":(item.orderStatus == 5 ? "交易完成":(item.orderStatus == 6 ? "取消订单":(item.orderStatus == 7 ? "已删除":"未知"))))))))+"</td>"
		+"<td class='center'><img src='/web/commons/image/management/edit_icon.png' class='edit_icon' onclick='editOrder("+index+","+item.orderStatus+");'></td>"
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
	paging.append("<button onclick='jumpByPageNo();' class='pages_jump'>跳转</button>");
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
findOrderMsg(pageNo);
}

function jumpByPageNo(){
var jumpPageNo = document.getElementById("jumpPageNo").value.trim();
findOrderMsg(jumpPageNo);
}