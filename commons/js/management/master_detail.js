//返回
$(function(){
	$(".return").click(function(){
		history.back(-1);
	});
});
//下拉框
layui.use('form', function(){
  var form = layui.form;

//检查内容是否不为空
  $(function(){
	  $(".master_determine").click(function(){
		  var authorName=$("#authorName").val();
		  var authorStatus=$("#authorStatus").val();
		  var authorLevel=$("#authorLevel").val();
		  var img_upload = $("#img_upload")[0].attributes.src.value;
		  var img_upload2 = $("#img_upload2")[0].attributes.src.value;
		  var authorProfile=$("#authorProfile").val();
		  var editor=UE.getEditor('editor').getContent();
		  if(authorName==""){
			  $(".authorName_error").show();
			  $(".authorName_error").html("请输入艺术家姓名");
			  $("#authorName").focus();
			  return;
		  }else{
			  $(".authorName_error").hide();
		  }
		  if(isNaN(authorLevel)){
			  $(".authorLevel_error").show();
			  $(".authorLevel_error").html("请选择艺术家级别");
			  document.querySelector(".authorLevel_error").scrollIntoView(false);
			  form.render('select');
			  return;
		  }else{
			  $(".authorLevel_error").hide();
			  form.render('select');
		  }
		  if(isNaN(authorStatus)){
			  $(".authorStatus_error").show();
			  $(".authorStatus_error").html("请选择艺术家状态");
			  document.querySelector(".authorStatus_error").scrollIntoView(false);
			  form.render('select');
			  return;
		  }else{
			  $(".authorStatus_error").hide();
			  form.render('select');
		  }
		  if(img_upload==""){
			  $("#img_name").addClass("uploadImages_error");
			  $(".uploadImages_error").val("请上传艺术家图片");
			  document.querySelector(".uploadImages_error").scrollIntoView(false);
			  return;
		  }else{
			  $("#img_name").removeClass("uploadImages_error");
		  }
		  if(img_upload2==""){
			  $("#img_name2").addClass("uploadImages_error2");
			  $(".uploadImages_error2").val("请上传艺术家头像");
			  document.querySelector(".uploadImages_error2").scrollIntoView(false);
			  return;
		  }else{
			  $("#img_name2").removeClass("uploadImages_error2");
		  }
		  if(authorProfile==""){
			  $(".uploadImages_text").show();
			  $(".uploadImages_text").html("请输入艺术家文字简介");
			  document.querySelector(".uploadImages_text").scrollIntoView(false);
			  return;
		  }else{
			  $(".uploadImages_text").html("");
		  }
		  if(editor==""){
			  $(".master_introduction_error").show();
			  $(".master_introduction_error").html("请输入艺术家介绍");
			  document.querySelector(".master_introduction_error").scrollIntoView(false);
			  return;
		  }else{
			  $(".master_introduction_error").html("");
		  }
		  authorUpload();
	 }); 
  });
  
  $("#select_authorStatus dl").each(function(){
	  var dd=$(this).children().first();
	  dd.text("全部状态");
	  $("#select_authorStatus input").prop("placeholder", "选择状态");
  });
  $("#select_authorLevel dl").each(function(){
	  var dd=$(this).children().first();
	  dd.text("全部级别");
	  $("#select_authorLevel input").prop("placeholder", "选择级别");
  });
  $("#select_authorStatus dd").each(function(){
	  var authorStatus_text=$(this).text();
	  var authorStatus_val=$(this).parent().prev().children().val();
	 if(authorStatus_text==authorStatus_val){
		 $("#select_authorLevel dd").each(function(){
			  var authorLevel_text=$(this).text();
			  var authorLevel_val=$(this).parent().prev().children().val();
			 if(authorLevel_text==authorLevel_val){
				 $(this).addClass("layui-this");
				 return false;
			 }else{
				 $("dd").removeClass("layui-this");
			 }
		  });
		 $(this).addClass("layui-this");
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
			$.get(url,function(data){
				$(".content .mCSB_container").append(data); //load new content inside .mCSB_container
				//scroll-to appended content 
				$(".content").mCustomScrollbar("scrollTo","h2:last");
			});
		});
		$(".content").delegate("a[href='top']","click",function(e){
			e.preventDefault();
			$(".content").mCustomScrollbar("scrollTo",$(this).attr("href"));
		});
	});
	//编辑信息跳转文本框赋值
	if("true" == sessionStorage.getItem('jump')){
		var listAuthor = JSON.parse(sessionStorage.getItem('listAuthor'));
		console.log(listAuthor);
		document.getElementById("authorName").value=listAuthor.authorName;
		document.getElementById("authorId").value=listAuthor.authorId;
		document.getElementById("authorProfile").value=listAuthor.authorProfile;
		//可能有用针对下拉框赋值
//		changeValue("authorStatus",listAuthor.isSignUp);
//		changeValue("authorLevel",listAuthor.authorLevel);
		var status=document.getElementById("authorStatus");
		for(i=0;i<status.length;i++){
			console.log(status[i].value);
			if(status[i].value == (listAuthor.isSignUp == true ? "1" : "0")){
				status[i].selected=true;
			}
		}
		var level = document.getElementById("authorLevel");
		for(i=0;i<level.length;i++){
			 if(level[i].value == listAuthor.authorLevel)
			    level[i].selected = true;
		}
		document.getElementById("img_upload").src=listAuthor.authorPicturePublicity;
		document.getElementById("img_upload2").src=listAuthor.authorPicturePortrait;
		UE.getEditor('editor').ready(function() {
			UE.getEditor('editor').setContent(listAuthor.richText);
		});
	}
})(jQuery);
//可能有用针对下拉框赋值
//function changeValue(name,value){
//	var selects = document.getElementById(name);
//	for(i=0;i<selects.length;i++){
//	 	if(selects[i].value == value)
//	    	selects[i].selected = true;
//	}
//}

//点击选择图片，显示图片，与图片名
function preView_img(file){
	var img = document.getElementById("img_upload");
	document.getElementById("img_name").classList.remove("uploadImages_error");
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
//点击选择视频，显示视频，与视频名
/*function preView_avi(file){
	var avi = document.getElementById("avi_upload");
	document.getElementById("avi_name").classList.remove("uploadVideo_error");
	var reader = new FileReader();
	reader.onload = function(evt) {
		avi.src = evt.target.result;
	}
	reader.readAsDataURL(file.files[0]);
    var file=$("#uploadVideo").val();
    var arr=file.split('\\');
    var my=arr[arr.length-1];
    document.getElementById("avi_name").value=my;
}*/
//视频为空或出错 后提示客户
function authorUpload(){
	var richText = ue.getContent();
	var authorId = $("#authorId").val();
	var authorName = $("#authorName").val();
	var authorLevel = $("#authorLevel").val();
	var authorStatus = $("#authorStatus").val();
	var authorProfile = $("#authorProfile").val();
	var authorPicturePublicity = document.getElementById("img_upload").src;
	var authorPicturePortrait = document.getElementById("img_upload2").src;
	var url;
	if("true" == sessionStorage.getItem('jump')){
		url="/web/api/author/update";
	}else{
		url="/web/api/author/save";
	}
	var param = {
			url: url,
			data: {"jsonStr":"{'authorId':'"+authorId+"','authorName':'"+authorName+"','authorPicturePortrait':'"+authorPicturePortrait+"','authorPicturePublicity':'"+authorPicturePublicity+
				"','authorLevel':"+authorLevel+",'isSignUp':"+authorStatus+",'authorInputStaff':101210,'authorProfile':'"+authorProfile+"','richText':'"+richText+"'}"},
			successCallback: function(data){
				if(data.state == 0){
					history.back(-1);
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

function findAuthor(authorId){
	var url="/web/api/author/listDetail";
	var param={
			url:url,
			data:{"jsonStr":"{'authorId':"+authorId+"}"},
			successCallback:function(data){
				var listAuthor = data.data[0];
//				sessionStorage.setItem('jump', true);
//				sessionStorage.setItem('listAuthor', JSON.stringify(listAuthor));
//				$(location).attr('href', '/web/management/erp/master/master_detail.jsp');
				console.log(data);
				console.log(listAuthor);
			},
			errorCallBack:function(data) {
				console.log(data.msg);
			}
	}
	getDataFromServer(param);
	
}

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

//实例化编辑器
//建议使用工厂方法getEditor创建和引用编辑器实例，如果在某个闭包下引用该编辑器，直接调用UE.getEditor('editor')就能拿到相关的实例
var ue = UE.getEditor('editor');

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
						if(other == "other") {
							ue.execCommand('insertHtml', "<img src='"+fileUrl+"' />");
						} else if(other == "head") {
							document.getElementById('head_upload').src = fileUrl;
							$('#head_name').val(file.name);
						} else if(other == "main") {
							document.getElementById('img_upload').src = fileUrl;
							$('#img_name').val(file.name);
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
        serverUrl = '/web/api/file/getOSSPolicy?dir=master';
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

var uploader_other = new plupload.Uploader({
	runtimes : 'html5,flash,silverlight,html4',
	browse_button : 'master_uploadOtherImages', 
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
				var other = "other";
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

var uploader_main = new plupload.Uploader({
	runtimes : 'html5,flash,silverlight,html4',
	browse_button : 'master_uploadImages', 
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


var uploader_head = new plupload.Uploader({
	runtimes : 'html5,flash,silverlight,html4',
	browse_button : 'master_uploadHead', 
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
				var other = "head";
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
						document.getElementById('head_upload').src = imgsrc;
						$('#head_name').val(file.name);
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

uploader_head.init();

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


