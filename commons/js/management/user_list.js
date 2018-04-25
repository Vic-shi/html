$(function(){
	//关闭弹出框
	$(".close").click(function(){
		$("#bomb_positioning").hide();
	});
	//取消
	$(".cancel").click(function(){
		$("#bomb_positioning").hide();
	});
});
//数据对接-ssc
//全局变量-ssc
var pageno = 1;
var index = 0;
var arr = new Array();
$(function(){
	var param = {
			url: "/web/api/user/listAll",
			method :'POST',
			data:{'jsonStr':'{"pageNo":1,"pageSize":10}'},
				successCallback: function(data){
					var paging = $("#paging");
					var li;
					var l;
					arr[11] = data.data.page;
					for(var i =0;i<data.data.data.length;i++){
						index = i;
						arr[i] = data.data.data[i].userId;
	        			li = "<tr><td class='center forced_wrap'>"+data.data.data[i].nickName+"</td>"
			       			+"<td class='center'>"+getMyDate(data.data.data[i].registTime)+"</td>"
			       			+"<td class='center forced_wrap'>"+data.data.data[i].userId+"</td>"
			       			+"<td class='center'>"+data.data.data[i].telNumber+"</td>"
			       			+"<td class='center'><img onclick = 'edit("+index+")' src='/web/commons/image/management/show.png' class='edit_icon'></td>"
			       			+"</tr>";
			       			l+=li;
					}
					pageno++;
					OutPutPage(paging, data.data.page);
					$("#table").append(l);
					console.log("成功");
			},
				errorCallBack: function(data) {
					console.log("失败");
			}
			}
	getDataFromServer(param);
});
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
		+"<button onclick='jumpByPageNo();' class='pages_jump'>跳转</button>";
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
function jumpByPageNo(){
	var page = arr[11];
	var jumpPageNo = document.getElementById("jumpPageNo").value.trim();
	jumpPageNo = Number(jumpPageNo);
	if(jumpPageNo<1){
		jumpPageNo=1;
	}else if(jumpPageNo>page.totalPages){
		jumpPageNo=page.totalPages;
	}
	findByPage(jumpPageNo);
}
function findByPage(pageNo){
	document.getElementById("tbody").innerHTML="";
	document.getElementById("paging").innerHTML=""; 
	var param = {
			url: "/web/api/user/listAll",
			method :'POST',
			data:{"pageNo":pageNo,"pageSize":10},
				successCallback: function(data){
					var paging = $("#paging");
					var li;
					var l;
					arr[11] = data.data.page;
					for(var i =0;i<data.data.data.length;i++){
						index = i;
						arr[i] = data.data.data[i].userId;
	        			li = "<tr><td class='center forced_wrap'>"+data.data.data[i].nickName+"</td>"
			       			+"<td class='center'>"+getMyDate(data.data.data[i].registTime)+"</td>"
			       			+"<td class='center forced_wrap'>"+data.data.data[i].userId+"</td>"
			       			+"<td class='center'>"+data.data.data[i].telNumber+"</td>"
			       			+"<td class='center'><img onclick = 'edit("+index+")' src='/web/commons/image/management/show.png' class='edit_icon'></td>"
			       			+"</tr>";
		       			l+=li;
				}
				pageno = parseInt(pageNo) + 1;
				OutPutPage(paging, data.data.page);
				$("#table").append(l);
				console.log("成功");
		},
			errorCallBack: function(data) {
				console.log("失败");
		}
		}
getDataFromServer(param);
}
function edit(id){
	var id = arr[id];
	sessionStorage.setItem("userId",id);
	window.location.href="/web/management/platform/user/user_show.jsp";
}
function delectUser(id,pageCount){
	if($("#bomb_positioning").is(":hidden")){
		$("#bomb_positioning").show();
		$(".confirm_button").click(function(id,pageCount){
			var id = arr[id];
			var param = {
					url: "/web/api/user/delete",
					method :'POST',
					data:{'id':id},
						successCallback: function(data){
							console.log("成功");
							pageCount = arr[11];
							if((pageno-1) * 10 - pageCount.totalCount >=10){
								pageno--;
							}
							pageno--;
							findByPage(pageno);
							$("#bomb_positioning").hide();
							$(".confirm_button").unbind();
					},
						errorCallBack: function(data) {
							console.log("失败");
					}
					}
			getDataFromServer(param);
		});
	}else{
		$("#bomb_positioning").hide();
	}
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