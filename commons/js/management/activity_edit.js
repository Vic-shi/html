//下拉框
layui.use('form', function(){
  var form = layui.form;

//展示活动信息
$(function() {
	var activityId = sessionStorage.getItem("activityId");
	var displayActivityParam = {
		method: 'POST',
		url: '/web/api/information/loadByActivityId',
		data: {"jsonStr":"{'activityId':"+activityId+"}"},
		successCallback: function(data) {
			if(data.state == 0){
				var activity = data.data.activity;
				var image = data.data.images;
				var compressImages = data.data.compressImages;
				var img = document.getElementById("img_upload");
				$('#activityId').val(activity.id);
				$('#activityTitle').val(activity.activityTitle);
				$('#createTime').val(timeFormat(activity.createTime));
				$('#activityStartTime').val(timeFormat(activity.activityStartTime));
				$('#activityEndTime').val(timeFormat(activity.activityEndTime));
				var isOffline = document.getElementById("isOffline");
				for(i=0;i<isOffline.length;i++){
				 	if(isOffline[i].value == activity.isOffline)
				    	isOffline[i].selected = true;
					form.render('select');
				}
				$('#address').val(activity.address);
				UE.getEditor('editor').ready(function() {
					UE.getEditor('editor').setContent(activity.activityDetail);
				});
				img.src = image[0].imageAddress;
				activityStatus = activity.activityStatus;
				createTime = activity.createTime;
				imageId = activity.imageId;
				thumbnailsId = activity.thumbnailsId;
				pageView = activity.pageView;
				commentAmount = activity.commentAmount;
				showCommentAmount = activity.showCommentAmount;
				likeAmount = activity.likeAmount;
			}else{
				getDataFromServer(displayActivityParam);
			}
		},
		errorCallBack: function(data) {
			console.log(data.message);
		},
	}
	getDataFromServer(displayActivityParam);
});
	
//监听提交
form.on('submit(formDemo)', function(data){
	layer.msg(JSON.stringify(data.field));
		return false;
	});
});
layui.use('laydate', function(){
	  var laydate = layui.laydate;
	  //常规用法
	  laydate.render({
	    elem: '#activityStartTime',
	    type: 'datetime',
	    format: 'yyyy-MM-dd HH:mm'
	  });
	  laydate.render({
	    elem: '#activityEndTime',
	    type: 'datetime',
	    format: 'yyyy-MM-dd HH:mm'
	  });
	});
//返回
$(function(){
	$(".return").click(function(){
		history.back(-1);
	});
});

//数据对接-Knight
//全局变量
var activityStatus,
	createTime,
	imageId,
	thumbnailsId,
	pageView,
	commentAmount,
	showCommentAmount,
	likeAmount;
	
//在主图框中显示图片
function preView(file){
	var img = document.getElementById("img_upload");
	var reader = new FileReader();
	reader.onload = function(evt) {
		img.src = evt.target.result;
	}
	reader.readAsDataURL(file.files[0]);
    var file=$("#activity_uploadImages").val();
    var arr=file.split('\\');
    var my=arr[arr.length-1];
    document.getElementById("img_name").value=my;
}

//更新activity对象
function updateActivity() {
	var activityId = $('#activityId').val();
	var activityTitle = $('#activityTitle').val();
	var activityDetail = UE.getEditor('editor').getContent();
	var activityStartTime = Date.parse(new Date($('#activityStartTime').val()));
	var activityEndTime = Date.parse(new Date($('#activityEndTime').val()));
	var isOffline = $('#isOffline').val();
	var address = '';
	var imageAddress = document.getElementById("img_upload").src;
	if(isOffline == 0) {
		if($('#address').val()==""){
			$('.address_error').html("请输入线下活动地址");
			$('#address').focus();
			return;
		}else{
			$('.address_error').html("");
			address = $('#address').val();
		}
	}
	var myDate = new Date();
	var  activityStartTimeDate = new Date(activityStartTime);
	var  activityEndTimeDate = new Date(activityEndTime);
	var  createTimeDate = new Date(createTime);
	if(activityTitle==""){
		$(".activityTitle_error").html("请输入活动标题");
		$('#activityTitle').focus();
		return;
	}else {
		$(".activityTitle_error").html("");
	}
	if($('#activityStartTime').val()==""){
		$(".activityStartTime_error").html("请输入活动开始时间");
		$(".activityStartTime_error").focus();
		return;
	}
	if($('#activityEndTime').val()==""){
		$(".time_error").html("请输入活动结束时间");
		$(".time_error").focus();
		return;
	}else{
		if(activityEndTimeDate<=activityStartTimeDate){                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
			$(".time_error").html("请修改活动结束时间");
			$('#activityEndTime').focus();
			return;
		}else{
			$(".time_error").html("");
		}
	} 
	if($('.layui-form input').val() == '未选择') {
		$('.isOffline_error').html("请选择否进行线下活动");
		$('#isOffline').focus();
		return;
	}else{
		$('.isOffline_error').html("");
		
	} 
	if($("#img_upload")[0].attributes.src.value==""){
		$('.img_upload_error').html("请选择图片");
		$('#address').focus();
		return;
	}else{
		$('.img_upload_error').html("");
	} 
	if(activityDetail==""){
		$('.item_name_error').html("请输入活动介绍");
		return;
	}else{
		$('.item_name_error').html("");
	}
	var activity = "{'activityId':"+activityId+",'activityTitle':'"+activityTitle+"','activityDetail':'"+activityDetail+
		"','activityStatus':'"+activityStatus+"','createTime':"+createTime+",'imageId':'"+imageId+"','thumbnailsId':'"+thumbnailsId+
		"','pageView':"+pageView+",'commentAmount':"+commentAmount+",'showCommentAmount':"+showCommentAmount+",'likeAmount':"+likeAmount+
		",'activityStartTime':"+activityStartTime+",'activityEndTime':"+activityEndTime+"," +
		"'isOffline':"+isOffline+",'address':'"+address+"'}";
	var url = "/web/api/bam/updateActivityByPrimaryKey";
	var updateActivityParam = {
		method: 'POST',
		url: url,
		data: {"jsonStr":"{'activity':"+activity+",'mainImageAddress':'"+imageAddress+"'}"},
		successCallback: function(data) {
			if(data.state == 0){
				$(location).attr('href', '/web/management/platform/news/activity_list.jsp');
			}else{
				layer.msg('提交失败');
			}
		},
		errorCallBack: function(data) {
			layer.msg('服务器繁忙请稍后重试');
		}
	}
	getDataFromServer(updateActivityParam);
}

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

//数据对接-Knight
	
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
        serverUrl = '/web/api/file/getOSSPolicy?dir=activity';
        xmlhttp.open( "GET", serverUrl, false );
        xmlhttp.send( null );
        return xmlhttp.responseText
    }
    else
    {
        alert("Your browser does not support XMLHTTP.");
    }
};

/* function check_object_radio() {
    var tt = document.getElementsByName('myradio');
    for (var i = 0; i < tt.length ; i++ )
    {
        if(tt[i].checked)
        {
            g_object_name_type = tt[i].value;
            break;
        }
    }
} */

//获取返回的验证信息
function get_signature()
{
    //可以判断当前expire是否超过了当前时间,如果超过了当前时间,就重新取一下.3s 做为缓冲
    now = timestamp = Date.parse(new Date()) / 1000; 
    if (expire < now + 3)
    {
    	var activityId = $('#activityId').val();
        body = send_request()
        var obj = eval ("(" + body + ")");
        host = obj['host']
        policyBase64 = obj['policy']
        accessid = obj['accessid']
        signature = obj['signature']
        expire = parseInt(obj['expire'])
        callbackbody = obj['callback'] 
        key = obj['dir'] + activityId + "/";
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
function calculate_object_name(filename)
{
    /* if (g_object_name_type == 'local_name')
    {
        g_object_name += "${filename}"
    }
    else if (g_object_name_type == 'random_name')
    {
        suffix = get_suffix(filename)
        g_object_name = key + random_string(10) + suffix
    } */
    suffix = get_suffix(filename);
    g_object_name = key + random_string(10) + suffix;
    return ''
}

//获取上传后的文件名
function get_uploaded_object_name(filename)
{
    /* if (g_object_name_type == 'local_name')
    {
        tmp_name = g_object_name
        tmp_name = tmp_name.replace("${filename}", filename);
        return tmp_name
    }
    else if(g_object_name_type == 'random_name')
    {
        return g_object_name
    } */
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
	browse_button : 'activity_uploadOtherImages', 
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
		/* PostInit: function() {
			document.getElementById('ossfile').innerHTML = '';
			document.getElementById('postfiles').onclick = function() {
	            set_upload_param(uploader, '', false);
	            return false;
			};
		}, */

		FilesAdded: function(up, files) {
			plupload.each(files, function(file) {
				simpleFileMD5Value = '';
				var param = file.getNative();
				var other = "other";
				calculate_file_md5(up, param, file, other);
			});
		},

		BeforeUpload: function(up, file) {
            /* check_object_radio(); */
            set_upload_param(up, file.name, true);
        },

		/* UploadProgress: function(up, file) {
			var d = document.getElementById(file.id);
			d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
            var prog = d.getElementsByTagName('div')[0];
			var progBar = prog.getElementsByTagName('div')[0]
			progBar.style.width= 2*file.percent+'px';
			progBar.setAttribute('aria-valuenow', file.percent);
		}, */

		FileUploaded: function(up, file, info) {
            if (info.status == 200)
            {
                //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
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
                /*document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;*/
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
	browse_button : 'activity_uploadImages', 
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
		/* PostInit: function() {
			document.getElementById('ossfile').innerHTML = '';
			document.getElementById('postfiles').onclick = function() {
	            set_upload_param(uploader, '', false);
	            return false;
			};
		}, */

		FilesAdded: function(up, files) {
			plupload.each(files, function(file) {
				simpleFileMD5Value = '';
				var param = file.getNative();
				calculate_file_md5(up, param, file);
			});
		},

		BeforeUpload: function(up, file) {
            /* check_object_radio(); */
            set_upload_param(up, file.name, true);
        },

		/* UploadProgress: function(up, file) {
			var d = document.getElementById(file.id);
			d.getElementsByTagName('b')[0].innerHTML = '<span>' + file.percent + "%</span>";
            var prog = d.getElementsByTagName('div')[0];
			var progBar = prog.getElementsByTagName('div')[0]
			progBar.style.width= 2*file.percent+'px';
			progBar.setAttribute('aria-valuenow', file.percent);
		}, */

		FileUploaded: function(up, file, info) {
            if (info.status == 200)
            {
                //document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = 'upload to oss success, object name:' + get_uploaded_object_name(file.name);
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
                /*document.getElementById(file.id).getElementsByTagName('b')[0].innerHTML = info.response;*/
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

//数据对接-Knight