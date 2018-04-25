//返回
$(function(){
	$(".return").click(function(){
		history.back(-1);
	});
});
//layui启动模块
layui.use('form', function(){
	var form = layui.form;
  	//监听提交
  	form.on('submit(formDemo)', function(data){
    	layer.msg(JSON.stringify(data.field));
    	return false;
  	});
});	
//数据对接-Knight
//在主图框中展示图片
function preView(file){
	var img = document.getElementById("img_upload");
	var reader = new FileReader();
	reader.onload = function(evt) {
		img.src = evt.target.result;
	}
	reader.readAsDataURL(file.files[0]);
	var file=$("#information_uploadImages").val();
	var arr=file.split('\\');
	var my=arr[arr.length-1];
	document.getElementById("img_name").value=my;
}

//增加information对象
function addInformation() {
	var informationId = $('#informationId').val();
	var informationTitle = $('#informationTitle').val();
	var informationDetail = UE.getEditor('editor').getContent();
	var imageAddress = document.getElementById("img_upload").src;
	if(informationTitle == ""){
		$(".informationTitle_error").html("请输入咨询标题");
		$('#informationTitle').focus();
		return;
	}else{
		$(".informationTitle_error").html("");
	}
	if($("#img_upload")[0].attributes.src.value == ""){
		$(".img_upload_error").html("请选择咨询主图");
		$('.img_upload_error').focus();
		return;
	}else{
		$(".img_upload_error").html("");
	}
	if(informationDetail == ""){
		$(".information_introduction_error").html("请输入咨询内容");
		$('.information_introduction_error').focus();
		return;
	}else{
		$(".information_introduction_error").html("");
	}
	var information = "{'informationId':"+informationId+",'informationTitle':'"+informationTitle+"','informationDetail':'"+informationDetail+"'}";
	var url = "/web/api/bam/addInformation";
	var addInformationParam = {
		method: 'POST',
		url : url,
		data : {"jsonStr":"{'information':"+information+",'mainImageAddress':'"+imageAddress+"'}"},
		successCallback: function(data) {
			if(data.state == 0){
				$(location).attr('href', '/web/management/platform/news/information_list.jsp');
			}else{
				layer.msg('提交失败');
			}
		},
		errorCallBack:function(data) {
			layer.msg('服务器繁忙请稍后重试');
		}
	}
	getDataFromServer(addInformationParam);
}

//获取资讯主键
$(function() {
	var getPrimaryKeyParam = {
		method: 'GET',
		url : '/web/api/bam/returnPrimaryKey',
		successCallback: function(data) {
			var informationId = data.data;
			if(data.state == 0){
				$('#informationId').val(informationId);
			}else{
				getDataFromServer(getPrimaryKeyParam);
			}
		},
		errorCallBack: function(data) {
			layer.msg('服务器繁忙请稍后重试');
		}
	}
	getDataFromServer(getPrimaryKeyParam);
});

//实例化编辑器
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
						if(other) {
							ue.execCommand('insertHtml', "<img src='"+fileUrl+"' />");
						} else {
							document.getElementById('img_upload').src = fileUrl;
							$('#img_name').val(file.name);
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
        serverUrl = '/web/api/file/getOSSPolicy?dir=information';
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
    	var informationId = $('#informationId').val();
        body = send_request()
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

var uploader_other = new plupload.Uploader({
	runtimes : 'html5,flash,silverlight,html4',
	browse_button : 'information_uploadOtherImages', 
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
                var fileUploadParam = {
					method: "POST",
					url : "/web/api/bam/addFileMD5",
					data : {"jsonStr":"{'fileMD5':"+file_md5+"}"},
					successCallback: function(data) {
						ue.execCommand('insertHtml', "<img src='"+imgsrc+"' />");
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

uploader_other.init();

var uploader_main = new plupload.Uploader({
	runtimes : 'html5,flash,silverlight,html4',
	browse_button : 'information_uploadImages', 
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
				calculate_file_md5(up, param, file);
				/*var getFileMD5 = setInterval(function() {
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
				},50);*/
			});
		},

		BeforeUpload: function(up, file) {
            set_upload_param(up, file.name, true);
        },
        
        UploadProgress: function(up, file) {
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