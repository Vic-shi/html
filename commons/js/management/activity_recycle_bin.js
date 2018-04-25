$(function(){
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
//删除
function delect() {
	console.log(1);
	if($("#bomb_positioning").is(":hidden")){
		$("#bomb_positioning").show();
		
	}else{
		$("#bomb_positioning").hide();
	}
}

//数据对接-Kngiht
//全局变量-Knight
var pageno, index;
var arrActivityIds = new Array();
//显示该页内容
function findActivityPage(pageNo) {
	document.getElementById("tbody").innerHTML="";
	pageno = pageNo;
	var url = "/web/api/information/findActivityPage";
	var pageSize = 10;
	var titleKeyWord = document.getElementById("titleKeyWord").value.trim();
	var activityStatus = "隐藏";
	var activityPageParam = {
		method: 'POST',
		url : url,
		data : {"jsonStr":"{'pageNo':"+pageNo+",'pageSize':"+pageSize+",'activityStatus':'"+activityStatus+"','title':'"+titleKeyWord+"'}"},
		successCallback: function(data) {
			index = 0;
			var pageContent = data.data.results;
			var totalPages = data.data.totalPages;
			var tbody = $('#tbody');
			var error = $('#error');
			var pageSelection = $('#page_selection');
			if(data.data.totalCount==0){
				var str="<span>查无数据<span>";
				error.html(str);
			}else{
				error.html("");
				$.each(pageContent, function (index, item) {
					outPutPageContent(tbody, item);
				});
				outPutPageSelection(pageSelection, pageContent, totalPages);
			}
		},
		errorCallBack: function(data) {
			var str="<span>服务器繁忙请稍后重试<span>";
			$('#error').html(str);
		}
	}
	getDataFromServer(activityPageParam);
}

//输出分页内容
function outPutPageContent(tbody, item) {
	index = index + 1;
	arrActivityIds[index] = item.id;
	var str = '<tr>'
				+'<td class="center">'
					+'<input name="activityCheckbox" type="checkbox" id="awesome'+item.id+'" value="'+item.id+'" class="checkbox"/>'
					+'<label for="awesome'+item.id+'"></label>'
				+'</td>'
				+'<td class="center forced_wrap">'+item.id+'</td>'
				+'<td class="center">'+item.activityCourse+'</td>'
				+'<td class="center"><img class="tr_height" src="'+item.mainPicture+'" class="activity_img"></td>'
				+'<td class="center forced_wrap">'+item.activityTitle+'</td>'
				+'<td class="center">'+timeFormat(item.createTime)+'</td>'
				+'<td class="center">'+timeFormat(item.activityStartTime)+'</td>'
				+'<td class="center">'+timeFormat(item.activityEndTime)+'</td>'
				+'<td class="center"><img src="/web/commons/image/management/edit_icon.png" class="edit_icon" onclick="recoverActivity('+index+');"></td>'
				+'<td class="center"><img src="/web/lib/Management_system/images/icon/delect_icon.png" class="delect" onclick="deteleActivity('+index+');"></td>'
			+'</tr>';
	tbody.append(str);
}

//输出分页选择栏
function outPutPageSelection(pageSelection, pageContent, totalPages) {
	pageSelection.html("");
	var lastPage = pageno - 1;
	var nextPage = pageno + 1;
	var str = "<button id='firstPage' class='last_page' onclick='findActivityPage("+1+")'>首页</button>"
	+ "<button id='lastPage' class='next_page' onclick='findActivityPage("+lastPage+")'>上一页</button>";
	pageSelection.append(str);
	for(var i=1; i<=totalPages; i++) {
		var str="";
		//当前页按钮禁用
		if(i==pageno){
			str = "<button class='pages' value='"+i+"'>"+i+"</button>";
		}else{
			 str = "<button onclick='findActivityPage("+i+");' class='page' value='"+i+"'>"+i+"</button>";
		}
		pageSelection.append(str);
	}
	str = "<button id='nextPage' class='next_page' onclick='findActivityPage("+nextPage+")'>下一页</button>"
			+ "<button class='last_page' id='last_page' onclick='findActivityPage("+totalPages+")'>末页</button>"
			+ "<input id='jumpPageNo' type='text' value='' class='page_number_input_box' onkeyup='onlyNumber()'>"
			+ "<button class='pages_jump' onclick='jumpByPageNo("+totalPages+");'>跳转</button>";
	pageSelection.append(str);
	//判断上一页等按钮是否需要禁用
	pages(totalPages);
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
function pages(totalPages){
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
	if(totalPages==undefined){
		$('#nextPage').attr('disabled',"true");
		$('#nextPage').css("cursor", "not-allowed");
		$('#last_page').attr('disabled',"true");
		$('#last_page').css("cursor", "not-allowed");
		$('#lastPage').attr('disabled',"true");
		$('#lastPage').css("cursor", "not-allowed");
		$('#firstPage').attr('disabled',"true");
		$('#firstPage').css("cursor", "not-allowed");
	}else if(totalPages!=undefined){
	//当前页是最后一页，末页与下一页按钮禁用
	if($(".pages").val()==totalPages){
		$('#nextPage').attr('disabled',"true");
		$('#nextPage').css("cursor", "not-allowed");
		$('#last_page').attr('disabled',"true");
		$('#last_page').css("cursor", "not-allowed");
	}else{
		$('#nextPage').removeAttr("disabled"); 
		$('#nextPage').css("cursor", "pointer");
		$('#nextPage').mouseover(function(){
			$('#nextPage').css("color", "#4ec3fb");
		});
		$('#nextPage').mouseout(function(){
			$('#nextPage').css("color", "#737373");
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

//跳转指定页
function jumpByPageNo(totalPages){
	var jumpPageNo = Number(document.getElementById("jumpPageNo").value.trim());
	if(jumpPageNo < 1) {
		jumpPageNo = 1;
	} else if(jumpPageNo > totalPages) {
		jumpPageNo = totalPages;
	}
	pageno = jumpPageNo;
	findActivityPage(jumpPageNo);
}

//恢复按钮功能
function recoverActivity(indexParam) {
	var activityStatus = "显示";
	var url = "/web/api/bam/updateActivityStatusByIds";
	var activityIds = '';
	if(indexParam) {
		var activityId = arrActivityIds[indexParam];
		activityIds = activityId;
	} else {
		//选择所有name="activityCheckbox"的对象，返回数组 
		var obj = document.getElementsByName('activityCheckbox');
		for(var i=0; i<obj.length; i++) {
			if(obj[i].checked) {
				if(i<obj.length-1){
					activityIds += obj[i].value+','; //如果选中，将value添加到变量s中 
				}else{
					activityIds += obj[i].value;
				}
			}
		}
	}
	var data = {"jsonStr":"{'activityIds':'["+activityIds+"]','activityStatus':'"+activityStatus+"'}"};
	var recoverActivityParam = {
		method: 'POST',
		url : url,
		data : data,
		successCallback: function(data) {
			findActivityPage(pageno);
		},
		errorCallBack: function(data) {
			console.log(data.massage);
		}
	}
	getDataFromServer(recoverActivityParam);
}

//删除按钮功能
function deteleActivity(indexParam) {
	if($("#bomb_positioning").is(":hidden")){
		$("#bomb_positioning").show();
		$('#confirm_delete').bind("click",function() {
			$("#bomb_positioning").hide();
			var activityStatus = "删除";
			var url = "/web/api/bam/updateActivityStatusByIds";
			var activityIds = '';
			if(indexParam) {
				var activityId = arrActivityIds[indexParam];
				activityIds = activityId;
			} else {
				//选择所有name="activityCheckbox"的对象，返回数组 
				var obj = document.getElementsByName('activityCheckbox');
				for(var i=0; i<obj.length; i++) {
					if(obj[i].checked) {
						if(i<obj.length-1){
							activityIds += obj[i].value+','; //如果选中，将value添加到变量s中 
						}else{
							activityIds += obj[i].value;
						}
					}
				}
			}
			var data = {"jsonStr":"{'activityIds':'["+activityIds+"]','activityStatus':'"+activityStatus+"'}"};
			var deteleActivityParam = {
				method: 'POST',
				url : url,
				data : data,
				successCallback: function(data) {
					findActivityPage(pageno);
					$('#confirm_delete').unbind();
				},
				errorCallBack: function(data) {
					console.log(data.massage);
				}
			}
			getDataFromServer(deteleActivityParam);
		})
	}else{
		$("#bomb_positioning").hide();
	}
}

//时间戳格式转换
function timeFormat(time) {
	var oDate = new Date(time),  
	oYear = oDate.getFullYear(),  
	oMonth = oDate.getMonth()+1,  
	oDay = oDate.getDate(),  
	oHour = oDate.getHours(),  
	oMin = oDate.getMinutes(),  
	oTime = oYear +'-'+ supplement(oMonth) +'-'+ supplement(oDay) +' '+ supplement(oHour) +':'+ supplement(oMin);//最后拼接时间  
	return oTime;  
};

//补0操作,当时间数据小于10的时候，给该数据前面加一个0  
function supplement(num){  
  if(parseInt(num) < 10){  
      num = '0'+num;  
  }  
  return num;  
};

$(function() {
	findActivityPage(1);
	
	$('#batch_delect').click(function() {
		deteleActivity(null);
	})
	
	$('#batch_recover').click(function() {
		recoverActivity(null);
	})
})
//数据对接-Knight