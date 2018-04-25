
//全局变量
var pageno;
//layui下拉框
layui.use('form', function(){
  var form = layui.form;
  $("dd").removeClass("layui-this");
	//修改选择框里的值
	$("#select_authorLevel dl").each(function(){
		var dd=$(this).children().first();
		dd.text("全部级别");
		$("#select_authorLevel input").prop("placeholder", "艺术家级别");
	});
	$("#select_authorStatus dl").each(function(){
		var dd=$(this).children().first();
		dd.text("全部艺术家状态");
		$("#select_authorStatus input").prop("placeholder", "艺术家状态");
	});
  //监听提交
  form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
  });
});
$(function(){
	findAuthorMsg(1);
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
//点击查询后，触发事件去后台取数
function findAuthorMsg(pageNo){
	document.getElementById("tbody").innerHTML="";
	document.getElementById("paging").innerHTML=""; 
	pageno = pageNo+1;
	var url="/web/api/author/listSimple";
	var listLen = 10;
	var authorName = document.getElementById("authorName").value.trim();
	var authorLevel = document.getElementById("authorLevel").value;
	var authorStatus = document.getElementById("authorStatus").value;
	var param = {
			url: url,
			data: {"jsonStr":"{'pageNo':"+pageNo+",'listLen':"+listLen+",'draw':1,'authorName':'"+authorName+"','authorLevel':"+authorLevel+",'isSignUp':"+authorStatus+"}"},
			successCallback: function(data){
				var pageCount = data.data.page;
				var tbody = $("#tbody");
				var error = $('#error');
				var paging = $("#paging");
				var listAuthor = data.data.listAuthor;
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
				var str="<span>服务器繁忙请稍后重试<span>";
				$('#error').html(str);
			}
	}
	getDataFromServer(param);
}
//传入从后台取回的参数
function OutPutData(tbody, item) {
//输出
tbody.append("<tr>"
			+"<td class='center'>"
			+"<input name='checkbox' type='checkbox' id='awesome"+item.authorId+"' class='checkbox' value='"+item.authorId+"'/>"
			+"<label for='awesome"+item.authorId+"'></label>"
			+"</td>"
		+"<td class='center forced_wrap'>"+item.authorId+"</td>"
		+"<td class='center forced_wrap'>"+item.authorName+"</td>"
		+"<td class='center'><img src='"+item.authorPicturePortrait+"' class='master_img head_img tr_height'></td>"
		+"<td class='center forced_wrap'>"+(item.authorLevel == 0 ? "国家级" : (item.authorLevel == 1 ? "中书协/中美协":(item.authorLevel == 2 ? "省级":"未知")))+"</td>"
		+"<td class='center'>"+(item.isSignUp == 1 ? "签约" : "解约")+"</td>"
		+"<td class='center'><img src='/web/commons/image/management/edit_icon.png' class='edit_icon' onclick='editAuthor("+item.authorId+");'></td>"
		+"<td class='center'><img src='/web/lib/Management_system/images/icon/delect_icon.png' onclick='deleteAuthor("+item.authorId+");' class='delect'></td>"
		+"</tr>");
}
function OutPutPage(paging, pageCount) {
	paging.html("");
	var lastPage = pageno - 2;
	var nextPage = pageno;
	var str="<button id='firstPage' class='last_page' onclick='findByPage("+1+")'>首页</button>"
	+ "<button id='lastPage' class='next_page' onclick='findByPage("+lastPage+")'>上一页</button>";
	paging.append(str);
	for(var i = 1;i<=pageCount.totalPages;i++){
		var str="";
		if(i==pageno-1){
			str="<button class='pages' value='"+i+"'>"+i+"</button>";
		}else{
			str="<button onclick='findByPage("+i+");' class='page' value='"+i+"'>"+i+"</button>";
		}
		paging.append(str);
	}
	str="<button onclick='findByPage("+nextPage+");' id='next_page' class='next_page' value='"+nextPage+"'>下一页</button>"
		+"<button onclick='findByPage("+pageCount.totalPages+");' id='last_page' class='last_page' value='"+pageCount.totalPages+"'>末页</button>"
		+"<input type='text' id='jumpPageNo' class='page_number_input_box' value='' onkeyup='onlyNumber()'>"
		+"<button onclick='jumpByPageNo("+pageCount.totalPages+");' class='pages_jump'>跳转</button>";
	paging.append(str);
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
		$('#lastPage').attr('disabled',"true");
		$('#lastPage').css("cursor", "not-allowed");
		$('#firstPage').attr('disabled',"true");
		$('#firstPage').css("cursor", "not-allowed");
	}else{
		$('#lastPage').removeAttr("disabled"); 
		$('#lastPage').css("cursor", "pointer");
		$('#lastPage').mouseover(function(){
			$('#lastPage').css("color", "#4ec3fb");
		});
		$('#lastPage').mouseout(function(){
			$('#lastPage').css("color", "#737373");
		});
		$('#firstPage').removeAttr("disabled");
		$('#firstPage').css("cursor", "pointer");
		$('#firstPage').mouseover(function(){
			$('#firstPage').css("color", "#4ec3fb");
		});
		$('#firstPage').mouseout(function(){
			$('#firstPage').css("color", "#737373");
		});
	}
	//当没有页数时,全部禁用
	if(pageCount.totalPages==undefined){
		$('#lastPage').attr('disabled',"true");
		$('#lastPage').css("cursor", "not-allowed");
		$('#firstPage').attr('disabled',"true");
		$('#firstPage').css("cursor", "not-allowed");
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
//跳转到增加老师页面
function addAuthor(){
	sessionStorage.setItem('jump', false);
	var url = "/web/management/erp/master/master_detail.jsp";
	window.location.href = url;
}
//传入参数，并跳转到编辑老师页面
function editAuthor(authorId){
	var url="/web/api/author/listDetail";
	var param = {
			url: url,
			data: {"jsonStr":"{'authorId':"+authorId+"}"},
			successCallback: function(data){
				var listAuthor = data.data;
				sessionStorage.setItem('jump', true);
				sessionStorage.setItem('listAuthor', JSON.stringify(listAuthor));
				window.location.href = "/web/management/erp/master/master_detail.jsp";
			},
			errorCallBack: function(data) {
				console.log(data.msg);
			}
	}
	getDataFromServer(param);
	
}
//批量删除老师信息
function deleteBatch(){
	var url="/web/api/author/deleteBatch";
	var obj=document.getElementsByName('checkbox'); //选择所有name="'test'"的对象，返回数组 
	//取到对象数组后，我们来循环检测它是不是被选中 
	var str=''; 
	for(var i=0; i<obj.length; i++){ 
		if(obj[i].checked) {
			if(i<obj.length-1){
				str+=obj[i].value+','; //如果选中，将value添加到变量s中 
			}else{
				str+=obj[i].value;
			}
		}
	} 
	deleteAuthor(str);
}
//单条删除老师信息
function deleteAuthor(authorId){
	if($("#bomb_positioning").is(":hidden")){
		$("#bomb_positioning").show();
		$(".confirm_button").bind("click",function(){
			var param = {
					url: '/web/api/author/deleteBatch',
					data: {"jsonStr":"{'authorIds':'"+authorId+"'}"},
					successCallback: function(data){
						findAuthorMsg(pageno-1);
						$("#bomb_positioning").hide();
						$(".confirm_button").unbind();
					},
					errorCallBack: function(data) {
						console.log(data.msg);
						$(".confirm_button").unbind();
					}
			}
			getDataFromServer(param);
		});
	}else{
		$("#bomb_positioning").hide();
	}
}
//点击页数，传入参数调用后台取数方法
function findByPage(pageNo){
	findAuthorMsg(pageNo);
}
//点击跳转，获取输入页码数框的值，带参调用后台取数方法
function jumpByPageNo(totalPages){
	var jumpPageNo = Number(document.getElementById("jumpPageNo").value.trim());
	if(jumpPageNo<1){
		jumpPageNo=1;
	}else if(jumpPageNo>totalPages){
		jumpPageNo=totalPages;
	}
	findAuthorMsg(jumpPageNo);
}