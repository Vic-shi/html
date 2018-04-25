//数据对接-jyf
//全局变量-jyf
var pageno, index;
//数组
var arrayIds = new Array();
//layui启动模块
layui.use('form', function(){
	var form = layui.form;
  	//监听提交
  	form.on('submit(formDemo)', function(data){
    	layer.msg(JSON.stringify(data.field));
    	return false;
  	});
});	
//点击查询，获取select内容
function findFreshActivityInfo(){
	//判断select内容，确定走什么接口
//	var type=document.getElementById("sign");
//	if(type.value == "information"){
//		findInformationPage(1);
//	}else if(type.value == "activity"){
//		findActivityPage(1);
//	}
	findActivityInfoPage(1);
}

//查询资讯活动内容
function findActivityInfoPage(pageNo) {
	document.getElementById("tbody").innerHTML="";
	pageno = pageNo;
	var url = "/web/api/information/findActivityInfo";
	var title = $(".erp_news_Keywords").val().trim();
	var pageSize = 10;
	var status = "显示";
	var sign = document.getElementById("sign").value;
	var activityInfoParam = {
		url: url,
		data: {"jsonStr":"{'pageNo':"+pageNo+",'title':'"+title+"','pageSize':"+pageSize+",'status':'"+status+"','sign':'"+sign+"'}"},
		successCallback: function(data) {
			console.log(data);
			if(data.state == 0){
				var pageContent = data.data.page.result;
				var totalPages = data.data.page.totalPages;
				var tbody = $('#tbody');
				var error = $('#error');
				var pageSelection = $('#page_selection');
				var offset = (pageno-1)*5;
				if(data.data.totalCount==0){
					var str="<span style='color:#fe0338;'>查无数据<span>";
					error.html(str);
				}else{
					error.html("");
					$.each(pageContent, function (index, item) {
						offset = offset + 1;
						outPutActivityInfoContent(tbody, item, offset);
					});
					outPutPageSelection(pageSelection, pageContent, totalPages);
				}
			}else{
//				getDataFromServer(activityInfoParam);
			}
		},
		errorCallBack: function(data) {
			layui.use('layer', function(){
				var layer = layui.layer;
				layer.msg('服务器繁忙请稍后重试');
			});
		}
	}
	getDataFromServer(activityInfoParam);
}

//输出资讯活动分页内容
function outPutActivityInfoContent(tbody, item, offset) {
	var id = "activityInfo" + item.id;
	var str = "<tr id='"+id+"'>"
			+"<td class='center title'>"+item.id+"</td>"
			+"<td class='center title'>"+item.title+"</td>"
			+"<td class='center'><img class='tr_height' src='"+item.imageAddress+"'></td>"
			+"<td class='center'>"+timeFormat(item.createTime)+"</td>"
			+"<td class='center'><input type='button' class='confirm_the_selection' value='确定选择' onclick='onPopup("+id+",3)'></td>"
		+"</tr>";
	tbody.append(str);
}

//输出资讯分页选择栏
function outPutPageSelection(pageSelection, pageContent, totalPages) {
	pageSelection.html("");
	var lastPage = pageno - 1;
	var nextPage = pageno + 1;
	var str = "<button id='first_page' class='last_page' onclick='findActivityInfoPage("+1+")'>首页</button>"
	+ "<button id='prev_page' class='next_page' onclick='findActivityInfoPage("+lastPage+")'>上一页</button>";
	pageSelection.append(str);
	for(var i=1; i<=totalPages; i++) {
		var str="";
		//当前页按钮禁用
		if(i==pageno){
			str = "<button class='pages' value='"+i+"'>"+i+"</button>";
		}else{
			 str = "<button onclick='findInformationPage("+i+");' class='page' value='"+i+"'>"+i+"</button>";
		}
		pageSelection.append(str);
	}
	var str = "<button class='next_page' id='next_page' onclick='findActivityInfoPage("+nextPage+")'>下一页</button>"
			+ "<button class='last_page' id='last_page' onclick='findActivityInfoPage("+totalPages+")'>末页</button>"
			+ "<input id='jumpPageNo' type='text' class='page_number_input_box' onkeyup='onlyNumber()'>"
			+ "<button class='pages_jump' onclick='jumpByPageNo("+totalPages+");'>跳转</button>";
	pageSelection.append(str);
	//判断上一页等按钮是否需要禁用
	pages(totalPages);
}

//跳转指定页
function jumpByPageNo(totalPages){
	var jumpPageNo = document.getElementById("jumpPageNo").value.trim();
	if(jumpPageNo < 1) {
		jumpPageNo = 1;
	} else if(jumpPageNo > totalPages) {
		jumpPageNo = totalPages;
	}
	pageno = jumpPageNo;
	findActivityInfoPage(jumpPageNo);
}

//显示资讯内容
/*function findInformationPage(pageNo,erp_news_Keywords) {
	document.getElementById("tbody").innerHTML="";
	pageno = pageNo;
	var url = "/web/api/information/findInformationPage";
	var erp_news_Keywords=$(".erp_news_Keywords").val().trim();
	var pageSize = 10;
	var informationStatus = "显示";
	var informationParam={
			url:url,
			data:{"jsonStr":"{'pageNo':"+pageNo+",'title':'"+erp_news_Keywords+"','pageSize':"+pageSize+",'informationStatus':'"+informationStatus+"'}"},
			successCallback: function(data) {
				console.log(data);
				if(data.state == 0){
					index = 0;
					var pageContent = data.data.results;
					var totalPages = data.data.totalPages;
					var tbody = $('#tbody');
					var error = $('#error');
					var pageSelection = $('#page_selection');
					var test = (pageno-1)*5;
					if(data.data.totalCount==0){
						var str="<span style='color:#fe0338;'>查无数据<span>";
						error.html(str);
					}else{
						error.html("");
						$.each(pageContent, function (index, item) {
							test = test + 1;
							outPutInformationContent(tbody, item, test);
						});
						outPutPageInformationSelection(pageSelection, pageContent, totalPages);
					}
				}else{
					getDataFromServer(informationParam);
				}
			},
			errorCallBack: function(data) {
				layui.use('layer', function(){
					var layer = layui.layer;
					layer.msg('服务器繁忙请稍后重试');
				});
			}
	}
	getDataFromServer(informationParam);
}*/

//将毫秒数转换成"yyyy-MM-dd HH:mm"字符串
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


//输出资讯分页内容
/*function outPutInformationContent(tbody, item, test) {
	arrayIds[index] = item.id;
	var id = "freshActivityInfo" + item.id;
	var str = "<tr id='"+id+"'>"
			+"<td class='center title'>"+item.id+"</td>"
			+"<td class='center title'>"+item.informationTitle+"</td>"
			+"<td class='center'><img class='tr_height' src='"+item.mainPicture+"'></td>"
			+"<td class='center'>"+timeFormat(item.createTime)+"</td>"
			+"<td class='center'><input type='button' class='confirm_the_selection' value='确定选择' onclick='onPopup("+id+",3)'></td>"
		+"</tr>";
	tbody.append(str);
	
}*/
//点击确认选择时
function onPopup(id,change){
	console.log(id);
	var freshActivityInfoId = sessionStorage.getItem("freshActivityInfoId");
	var sign = document.getElementById("sign").value;
	var contentId = id.getElementsByTagName('td')[0].innerText;
//	var imageAddress = id.getElementsByTagName('td')[2].getElementsByTagName('img')[0].src;
//	var title = id.getElementsByTagName('td')[1].innerText;
	var url = "/web/api/bam/updateFreshActivityInfo";
	var freshActivityInfo = "{'freshActivityInfoId':'"+freshActivityInfoId+"','sign':'"+sign+"','contentId':'"+contentId+"'}";
	var data = {"jsonStr":"{'freshActivityInfo':"+freshActivityInfo+"}"};
	var updateFreshActivityInfoParam = {
		method: 'POST',
		url : url,
		data : data,
		successCallback: function(data) {
			if(data.state == 0){
				$(location).attr('href', '/web/management/platform/news/recommend_five_list.jsp');
			}else{
				layer.msg('提交失败');
			}
		},
		errorCallBack:function(data) {
			layer.msg('服务器繁忙请稍后重试');
		}
	}
	getDataFromServer(updateFreshActivityInfoParam);
}

//输出资讯分页选择栏
/*function outPutPageInformationSelection(pageSelection, pageContent, totalPages) {
	pageSelection.html("");
	var lastPage = pageno - 1;
	var nextPage = pageno + 1;
	var str = "<button id='first_page' class='last_page' onclick='findInformationPage("+1+")'>首页</button>"
	+ "<button id='prev_page' class='next_page' onclick='findInformationPage("+lastPage+")'>上一页</button>";
	pageSelection.append(str);
	for(var i=1; i<=totalPages; i++) {
		var str="";
		//当前页按钮禁用
		if(i==pageno){
			str = "<button class='pages' value='"+i+"'>"+i+"</button>";
		}else{
			 str = "<button onclick='findInformationPage("+i+");' class='page' value='"+i+"'>"+i+"</button>";
		}
		pageSelection.append(str);
	}
	var str = "<button class='next_page' id='next_page' onclick='findInformationPage("+nextPage+")'>下一页</button>"
			+ "<button class='last_page' id='last_page' onclick='findInformationPage("+totalPages+")'>末页</button>"
			+ "<input id='jumpPageNo' type='text' class='page_number_input_box' onkeyup='onlyNumber()'>"
			+ "<button class='pages_jump' onclick='jumpByPageNo_information("+totalPages+");'>跳转</button>";
	pageSelection.append(str);
	//判断上一页等按钮是否需要禁用
	pages(totalPages);
	//点击确认选择后把数据存入轮播表
	
	$(".confirm_the_selection").click(function(){
		//可能以后会变幻样式要用
		var title=$("#advertisement_title");
		if(title.val()==""){
			title.attr("placeholder","请输入标题!");
			title.addClass("error");
			title.focus();
			$(".confirm_the_selection").val("确定选择");
			return;
		}else{
			var id=sessionStorage.getItem("carouselId");
			var url_src=$(this).parent().prev().prev().prev().children().attr("src");
			var carouselType=document.getElementById("carouselType").value;
			var contentId=$(this).parent().prev().text();
			var url="/web/api/bam/updateCarousel";
			var carousel = "{'carouselId':"+id+",'contentId':"+contentId+",'imageAddress':'"+url_src+
			"','title':'"+title.val()+"','carouselType':'"+carouselType+"'}";
			var saveInformationParam={
					url:url,
					data:{"jsonStr":"{'carousel':"+carousel+"}"},
					successCallback:function(data) {
						if(data.state == 0){
							window.location.href = "/web/management/platform/news/advertisement_list.jsp";
						}else{
							layer.msg('选择失败');
						}
					},
					errorCallBack:function(data) {
						console.log("失败");
						layui.use('layer', function(){
					var layer = layui.layer;
					layer.msg('服务器繁忙请稍后重试');
				});
					}
			}
			getDataFromServer(saveInformationParam);
		}
	});
}
//跳转资讯指定页
function jumpByPageNo_information(totalPages){
	var jumpPageNo = document.getElementById("jumpPageNo").value.trim();
	if(jumpPageNo < 1) {
		jumpPageNo = 1;
	} else if(jumpPageNo > totalPages) {
		jumpPageNo = totalPages;
	}
	pageno = jumpPageNo;
	findInformationPage(jumpPageNo);
}




//显示活动内容
function findActivityPage(pageNo) {
	document.getElementById("tbody").innerHTML="";
	pageno = pageNo;
	var url = "/web/api/information/findActivityPage";
	var pageSize = 10;
	var erp_news_Keywords=$(".erp_news_Keywords").val().trim();
	var activityStatus = "显示";
	var activityParam={
			url:url,
			data:{"jsonStr":"{'pageNo':"+pageNo+",'title':'"+erp_news_Keywords+"','pageSize':"+pageSize+",'activityStatus':'"+activityStatus+"'}"},
			successCallback:function(data) {
				if(data.state == 0){
					index = 0;
					var pageContent = data.data.results;
					var totalPages = data.data.totalPages;
					var tbody = $('#tbody');
					var error = $('#error');
					var pageSelection = $('#page_selection');
					var test = (pageno-1)*5;
					if(data.data.totalCount==0){
						var str="<span style='color:#fe0338;'>查无数据<span>";
						error.html(str);
					}else{
						error.html("");
						$.each(pageContent, function (index, item) {
							test = test + 1;
							outPutActivityContent(tbody, item, test);
						});
						outPutPageActivitySelection(pageSelection, pageContent, totalPages);
					}
				}else{
					getDataFromServer(activityParam);
				}
			},
			errorCallBack:function(data) {
				layui.use('layer', function(){
					var layer = layui.layer;
					layer.msg('服务器繁忙请稍后重试');
				});
			}
	}
	getDataFromServer(activityParam);
}
//输出活动分页内容
function outPutActivityContent(tbody, item, test) {
	arrayIds[index] = item.id;
	var id = "freshActivityInfo" + item.id;
	var str = "<tr id='"+id+"'>"
			+"<td class='center title'>"+item.id+"</td>"
			+"<td class='center title'>"+item.activityTitle+"</td>"
			+"<td class='center'><img class='tr_height' src='"+item.mainPicture+"'></td>"
			+"<td class='center'>"+timeFormat(item.activityStartTime)+"</td>"
			+"<td class='center'><input type='button' class='confirm_the_selection' value='确定选择' onclick='onPopup("+id+",4)'></td>"
		+"</tr>";
	tbody.append(str);
	
}
//输出活动分页选择栏
function outPutPageActivitySelection(pageSelection, pageContent, totalPages) {
	pageSelection.html("");
	var lastPage = pageno - 1;
	var nextPage = pageno + 1;
	var str = "<button id='first_page' class='last_page' onclick='findActivityPage("+1+")'>首页</button>"
	+ "<button id='prev_page' class='next_page' onclick='findActivityPage("+lastPage+")'>上一页</button>";
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
	var str = "<button class='next_page' id='next_page' onclick='findActivityPage("+nextPage+")'>下一页</button>"
			+ "<button class='last_page' id='last_page' onclick='findActivityPage("+totalPages+")'>末页</button>"
			+ "<input id='jumpPageNo' type='text' class='page_number_input_box' onkeyup='onlyNumber()'>"
			+ "<button class='pages_jump' onclick='jumpByPageNo_activity("+totalPages+");'>跳转</button>";
	pageSelection.append(str);
	//判断上一页等按钮是否需要禁用
	pages(totalPages);
	//点击确认选择后把数据存入轮播表
	$(".confirm_the_selection").click(function(){
		
		var title=$("#advertisement_title");
		if(title.val()==""){
			title.attr("placeholder","请输入标题!");
			title.addClass("error");
			title.focus();
			$(".confirm_the_selection").val("确定选择");
			return;
		}else{
			var id=sessionStorage.getItem("carouselId");
			var url_src=$(this).parent().prev().prev().prev().children().attr("src");
			var carouselType=document.getElementById("carouselType").value;
			var contentId=$(this).parent().prev().text();
			var url="/web/api/bam/updateCarousel";
			var carousel = "{'carouselId':"+id+",'contentId':"+contentId+",'imageAddress':'"+url_src+
			"','title':'"+title.val()+"','carouselType':'"+carouselType+"'}";
			var saveActivityParam={
					url:url,
					data:{"jsonStr":"{'carousel':"+carousel+"}"},
					successCallback:function(data) {
						if(data.state == 0){
							window.location.href = "/web/management/platform/news/advertisement_list.jsp";
						}else{
							layer.msg('选择失败');
						}
					},
					errorCallBack:function(data) {
						layui.use('layer', function(){
							var layer = layui.layer;
							layer.msg('服务器繁忙请稍后重试');
						});
					}
			}
			getDataFromServer(saveActivityParam);
		}
	});
}
//跳转活动指定页
function jumpByPageNo_activity(totalPages){
	var jumpPageNo = document.getElementById("jumpPageNo").value.trim();
	if(jumpPageNo < 1) {
		jumpPageNo = 1;
	} else if(jumpPageNo > totalPages) {
		jumpPageNo = totalPages;
	}
	pageno = jumpPageNo;
	findActivityPage(jumpPageNo);
}*/

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
	//当前页是最后一页，末页与下一页按钮禁用
	if($(".pages").val()==totalPages){
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

//当改变页面大小时，获取页面宽度并未换行的块增加属性
$(window).resize(function(){
	var inquiry_column_width=$("#inquiry_column").width();
	if(inquiry_column_width<1509){
		$(".layui-form").css("margin-top","25px");
		$(".inquiry").addClass("move_down");
	}else if(inquiry_column_width<1634){
		$(".inquiry").addClass("move_down");
		$(".layui-form").css("margin-top","");
	}else{
		$(".inquiry").removeClass("move_down");
		$(".layui-form").css("margin-top","");
	}
});
//当刷新页面时，获取页面宽度并未换行的块增加属性
$(function(){
	var inquiry_column_width=$("#inquiry_column").width();
	if(inquiry_column_width<1509){
		$(".layui-form").css("margin-top","25px");
		$(".inquiry").addClass("move_down");
	}else if(inquiry_column_width<1634){
		$(".inquiry").addClass("move_down");
		$(".layui-form").css("margin-top","");
	}else{
		$(".inquiry").removeClass("move_down");
		$(".layui-form").css("margin-top","");
	}
	//返回
	$(".return").click(function(){
		history.back(-1);
	});
	//进入页面先加载作品
	findActivityInfoPage(1);
});



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
function calculate_file_md5(param){ 
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
        serverUrl = '/web/api/bam/returnOSSPolicy?dir=advertisement';
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
    if (expire < now + 3)
    {
    	var advDate = new Date();
    	var month = advDate.getMonth()+1;
    	var informationId = ""+advDate.getFullYear()+month+advDate.getDate();
        body = send_request()
        console.log(body);
        var obj = eval ("(" + body + ")");
        host = obj['host']
        policyBase64 = obj['policy']
        accessid = obj['accessid']
        signature = obj['signature']
        expire = parseInt(obj['expire'])
        callbackbody = obj['callback'] 
        key = obj['dir'] + informationId + "/";
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


var uploader_main = new plupload.Uploader({
	runtimes : 'html5,flash,silverlight,html4',
	browse_button : 'advertisement_uploadImages', 
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
						var fileAddParam = {
							method: "POST",
							url : "/web/api/bam/checkFileMD5",
							data : {"jsonStr":"{'md5':'"+simpleFileMD5Value+"'}"},
							successCallback: function(data) {
								var fileUrl = data.data;
								if(null == fileUrl || "" == fileUrl) {
									set_upload_param(uploader_main, '', false);
								} else {
									document.getElementById('img_upload').src = fileUrl;
									$('#img_name').val(file.name);
								}
							},
							errorCallBack: function(data) {
								console.log(data.message);
							}
						}
						getDataFromServer(fileAddParam);
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
                var fileUploadParam = {
					method: "POST",
					url : "/web/api/bam/addFileMD5",
					data : {"jsonStr":"{'fileMD5':"+file_md5+"}"},
					successCallback: function(data) {
						document.getElementById('img_upload').src = imgsrc;
						$('#img_name').val(file.name);
					},
					errorCallBack: function(data) {
						console.log(data.message);
					}
				}
				getDataFromServer(fileUploadParam);
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