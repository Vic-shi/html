var index = 0;
var arrId = new Array();
var arrName = new Array();
function deleteAdmin(index){
	if($("#bomb_positioning").is(":hidden")){
		$("#bomb_positioning").show();
		$(".confirm_button").bind("click",function(){
			deleteById(index);
			$(".confirm_button").unbind();
		});
	}else{
		$("#bomb_positioning").hide();
	}
}
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
	$.ajax({
		type : "POST",
		url : "/web/admin/listAll",
		dataType : "json",
		success : function(data) {
			var table = $("#table");
			for(var i =0;i<data.data.length;i++){
				index = i;
				arrId[i] = data.data[i].adminId;
				arrName[i] = data.data[i].adminName;
				table.append('<tr>'
		       			+'<td class="center forced_wrap">'+data.data[i].adminName+'</td>'
		       			+'<td class="center forced_wrap">'+data.data[i].telNumber+'</td>'
		       			+'<td class="center forced_wrap">'+data.data[i].email+'</td>'
		       			+'<td class="center">'+getMyDate(data.data[i].registTime)+'</td>'
		       			+'<td class="center forced_wrap"><a href = "/web/management/platform/user/setup.jsp"><img src="/web/commons/image/management/setup.png"></a></td>'
		       			+'<td class="center"><a><img src="/web/commons/image/management/edit_icon.png" class="edit_icon" onclick = "selectById('+data.data[i].adminId+')"></a></td>'
		       			+'<td class="center"><img src="/web/commons/image/management/delete.png"class="delect" onclick = "deleteAdmin('+index+')"></td>'
		       			+'</tr>');
				
			}
		}
	});
});
function selectById(adminId){
	sessionStorage.setItem("adminId",adminId);
	window.open('/web/management/platform/user/admin_update.jsp','_self');
}
function deleteById(index){
	var adminId = arrId[index];
	var adminName = arrName[index];
	var param = {
			url: "/web/admin/adminDelete",
			method :'POST',
			data:{"jsonStr":"{'adminId':"+adminId+",'adminName':'"+adminName+"'}"},
				successCallback: function(data){
					console.log("成功");
					window.open('/web/management/platform/user/admin_list.jsp','_self');
				},
				errorCallBack: function(data) {
					console.log("失败");
				}
				}
				getDataFromServer(param);
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