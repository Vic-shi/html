var index=0,pageno;
var arrId = new Array();
//返回
$(function(){
	$(".return").click(function(){
		history.back(-1);
	});
	findAuthorMsg(1,true);
});
//下拉框
layui.use('form', function(){
  var form = layui.form;
  $("dd").removeClass("layui-this");
	//修改选择框里的值
	$("#select_authorLevel dl").each(function(){
		var dd=$(this).children().first();
		dd.text("全部级别");
		$("#select_authorLevel input").prop("placeholder", "选择级别");
	});
  //监听提交
  form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
  });
});

function findAuthorMsg(pageNo,flag){
	document.getElementById("tbody").innerHTML="";
	document.getElementById("paging").innerHTML=""; 
	pageno = pageNo+1;
	var url="/web/api/author/listSimple";
	var listLen = 10;
	var authorName = document.getElementById("authorName").value.trim();
	var authorLevel = document.getElementById("authorLevel").value;
	var authorStatus = 1;
	if(!flag){
		authorStatus = document.getElementById("authorStatus").value;
	}
	var param = {
			url: url,
			data: {"jsonStr":"{'pageNo':"+pageNo+",'listLen':"+listLen+",'draw':1,'authorName':'"+authorName+"','authorLevel':"+authorLevel+",'isSignUp':"+authorStatus+"}"},
			successCallback: function(data){
				console.log(data);
				var pageCount = data.data.page;
				var tbody = $("#tbody");
				var error = $('#error');
				var paging = $("#paging");
				var listAuthor = data.data.listAuthor;
				if(data.data.page.totalCount==0){
					var str="<span>查无数据<span>";
					error.html(str);
				}else{
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
 

function OutPutData(tbody, item) {
	index = index +1;
	arrId[index] = item;
    //输出
    tbody.append('<tr>'	
			+'<td class="center">'+item.authorName+'</td>'
			+'<td class="center"><img class="tr_height" src="'+item.authorPicturePortrait+'"></td>'
			+'<td class="center">'+(item.authorLevel == 0 ? "国家级" : (item.authorLevel == 1 ? "中书协/中美协":(item.authorLevel == 2 ? "省级":"未知")))+'</td>'
			+'<td class="center"><img src="/web/commons/image/management/add_icon.png" class="add_icon" onclick="addProduct('+index+')" ></td>'
			+'</tr>');
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
	findAuthorMsg(pageNo,false);
}

function jumpByPageNo(totalPages){
	var jumpPageNo = Number(document.getElementById("jumpPageNo").value.trim());
	if(jumpPageNo<1){
		jumpPageNo=1;
	}else if(jumpPageNo>totalPages){
		jumpPageNo=totalPages;
	}
	findAuthorMsg(jumpPageNo,false);
}

function addProduct(index){
	var author = arrId[index];
	sessionStorage.setItem('jump', false);
	sessionStorage.setItem('author', JSON.stringify(author));
	window.location.href = "/web/management/erp/product/product_detail.jsp";
}
