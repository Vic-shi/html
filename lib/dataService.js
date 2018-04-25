//method, url, data, successCallback, errorCallBack
function getDataFromServer(param) {
	var url = param.url
	if (!url){
		console.log('url必填');
		return
	}
	
	var method = param.method || 'POST';
	var data = param.data || '';
	var successCallback = param.successCallback || defaultSuccess;
	var errorCallBack = param.errorCallBack || defaultError;
	
	$.ajax({
	  type: method,
	  beforeSend: function(request) {
	    request.setRequestHeader("art_sharing_token", readCookie('art_sharing_token'));
	    request.setRequestHeader("art_sharing_userId", readCookie('art_sharing_userId'));
	    request.setRequestHeader("art_sharing_isLogin", readCookie('art_sharing_isLogin'));
	  },
	  url: url,
	  data: data,
	  dataType: 'json',
	  success: successCallback,
	  error: errorCallBack
	});
	
	
	function defaultSuccess (){console.log('成功')}
	function defaultError (){console.log('失败')};
	
	
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
}

//使用方式
//var param = {
//url: url,
//data: {"jsonStr":"{'pageNo':"+pageNo+",'listLen':"+listLen+",'draw':1,'authorName':'"+authorName+"','authorLevel':"+authorLevel+",'isSignUp':"+authorStatus+"}"},
//successCallback: function(data){
//	console.log(data);
//	var pageCount = data.data.page;
//	var tbody = $("#tbody");
//	var paging = $("#paging");
//	var listAuthor = data.data.listAuthor;
//	$.each(listAuthor, function (index, item) {
//        OutPutData(tbody, item);
//    });  
//    OutPutPage(paging, pageCount);
//},
//errorCallBack: function(data) {
//	console.log(data.msg);
//}
//}
//getDataFromServer(param);
