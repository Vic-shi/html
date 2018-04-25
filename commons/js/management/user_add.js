var defaults = {
        s1: 'provid',
        s2: 'cityid',
        s3: 'areaid',
        v1: null,
        v2: null,
        v3: null
    };
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
//下拉框
layui.use('form', function(){
  var form = layui.form;
  
  //监听提交
  form.on('submit(formDemo)', function(data){
    layer.msg(JSON.stringify(data.field));
    return false;
  });
});
//返回
$(function(){
	$(".return").click(function(){
		history.back(-1);
	});
	setTimeout(function(){
		$("#select_provid .layui-select-tips").text("全部省份");
	},30);
});
//构建预览上传图片的函数，并接收传递过来的2个变量参数
function handleFiles(file,obj) {
    //获取当前点击的元素的所有同级元素的html内容
    var con = obj.innerHTML;
    console.log(con);
    //判断当前点击元素内是否已经存在img图片元素，如果有则先全部清除后再添加，如果没有就直接添加
    if (con.indexOf("img") > 0) {
        var pic = obj.getElementsByTagName("img");
        for (i=0; i<pic.length; i++) {
            obj.removeChild(pic[i]);
        }
        //调用添加img图片的函数
        creatImg();
    } else {
        creatImg();
    }
    function creatImg() {
        //创建一个img元素
        var img = document.createElement("img");
        //设置img元素的源文件路径，window.URL.createObjectURL() 方法会根据传入的参数创建一个指向该参数对象的URL. 这个URL的生命仅存在于它被创建的这个文档里
        img.src = window.URL.createObjectURL(file[0]);
        //window.URL.revokeObjectURL() 释放一个通过URL.createObjectURL()创建的对象URL，在图片被显示出来后，我们就不再需要再次使用这个URL了，因此必须要在加载后释放它
        img.onload = function() {
            window.URL.revokeObjectURL(this.src);
        }
        //在当前点击的input元素后添加刚刚创建的img图片元素
        obj.appendChild(img);
    }
}
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
		var userId = sessionStorage.getItem('userId');
		var param = {
		url: "/web/api/user/selectById",
		method :'POST',
		data:{'userId':userId},
			successCallback: function(data){
				console.log("成功");
				document.getElementById("userId").value=data.data.userId;
				document.getElementById("wechatId").value=data.data.wechatId;
				document.getElementById("telNumber").value=data.data.telNumber;
				document.getElementById("email").value=data.data.email;
				document.getElementById("avatarAddress").value=data.data.avatarAddress;
				document.getElementById("registTime").value=getMyDate(data.data.registTime);
				document.getElementById("userTotalIntegral").value=data.data.userTotalIntegral;
				document.getElementById("userResidualIntegral").value=data.data.userResidualIntegral;
				document.getElementById("nickName").value=data.data.nickName;
				document.getElementById("isSubscribe").value=data.data.isSubscribe;
				document.getElementById("sex").value=data.data.sex;
				document.getElementById("cityid").value=data.data.city;
				document.getElementById("provid").value=data.data.province;
				document.getElementById("provid").value = "浙江";
				document.getElementById("cityid").value = "宁波";
				document.getElementById("subscribeTime").value=getMyDate(data.data.subscribeTime);
				document.getElementById("remark").value=data.data.remark;
				document.getElementById("tagidList").value=data.data.tagidList;
				document.getElementById("leasesNumber").value=data.data.leasesNumber;
				document.getElementById("ordersNumber").value=data.data.ordersNumber;
				document.getElementById("overdueNumber").value=data.data.overdueNumber;
				document.getElementById("img_upload").src = data.data.avatarAddress;
				
				var money = data.data.accountBalance;
				if(money!=null){
					money = money.toString();
					var moneyLength = money.length;
					var tmp=money.substring(0, moneyLength-2);
					tmp = tmp +"."+"00";
					document.getElementById("accountBalance").value=tmp;
				}
		},
			errorCallBack: function(data) {
				console.log("失败");
		}
		}
		getDataFromServer(param);
	})(jQuery);

$(function(){
	$.ajax({
		type : 'get',
		url : '/web/api/bam/returnPrimaryKey',
		dataType : 'json',
		success : function(data) {
			var primaryKey = data.data;
			$('#informationId').val(primaryKey);
		}
	})
	
	document.cookie="fileName=activity";
	document.cookie="id="+$('#activityId').val();
	$('#isOffline').change(function(){
		if(0 == $('#isOffline option:selected').val()) {
			$('#li').show();
		} else {
			$('#li').hide();
		};
	});
});
function preView(file){
	var img = document.getElementById("img_upload");
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
function update(){
	var userId = document.getElementById("userId").value;
	var wechatId = document.getElementById("wechatId").value;
	var telNumber = document.getElementById("telNumber").value;
	var email = document.getElementById("email").value;
	var avatarAddress = document.getElementById("avatarAddress").value;
	var registTime = document.getElementById("registTime").value;
	var userTotalIntegral = document.getElementById("userTotalIntegral").value;
	var userResidualIntegral = document.getElementById("userResidualIntegral").value;
	var nickName = document.getElementById("nickName").value;
	var isSubscribe = document.getElementById("isSubscribe").value;
	var sex = document.getElementById("sex").value;
	var cityid = document.getElementById("cityid").value;
	var provid = document.getElementById("provid").value;
	var subscribeTime = document.getElementById("subscribeTime").value;
	var remark = document.getElementById("remark").value;
	var tagidList = document.getElementById("tagidList").value;
	var leasesNumber = document.getElementById("leasesNumber").value;
	var ordersNumber = document.getElementById("ordersNumber").value;
	var overdueNumber= document.getElementById("overdueNumber").value;
	var accountBalance = document.getElementById("accountBalance").value;
	var param = {
			url: "/web/api/user/update",
			method :'POST',
			data:{"jsonStr":"{'userId':"+userId+",'wechatId':'"+wechatId+"','telNumber':'"+telNumber+"',"
				+"'email':'"+email+"','avatarAddress':'"+avatarAddress+"','registTime':'"+registTime+"','userTotalIntegral':"+userTotalIntegral+","
				+"'userResidualIntegral':"+userResidualIntegral+",'nickName':'"+nickName+"','isSubscribe':"+isSubscribe+",'sex':"+sex+"," 
				+"'city':'"+cityid+"','province':'"+provid+"',"
				+"'subscribeTime':'"+subscribeTime+"','remark':'"+remark+"','tagidList':'"+tagidList+"','leasesNumber':"+leasesNumber+","
				+"'ordersNumber':"+ordersNumber+",'overdueNumber':"+overdueNumber+",'accountBalance':"+accountBalance+"}"},
				successCallback: function(data){
					console.log("成功");

			},
				errorCallBack: function(data) {
					console.log("失败");
			}
			}
			getDataFromServer(param);
}
	//时间戳格式转换
	function fmt(time) {
		var date = new Date(time),  
        year = date.getFullYear(),  
        month = date.getMonth()+1,  
        day = date.getDate(),  
        hour = date.getHours(),  
        min = date.getMinutes(),  
        time = year +'-'+ getzf(month) +'-'+ getzf(day) +'T'+ getzf(hour) +':'+ getzf(min);//最后拼接时间  
    	return time;  
	};
	  
	//补0操作,当时间数据小于10的时候，给该数据前面加一个0  
	function getzf(num){  
	    if(parseInt(num) < 10){  
	        num = '0'+num;  
	    }  
	    return num;  
	}
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
	        serverUrl = 'http://localhost:8080/web/api/bam/returnOSSPolicy?dir=master';
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
	var uploader_main = new plupload.Uploader({
		runtimes : 'html5,flash,silverlight,html4',
		browse_button : 'user_uploadImages', 
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
					var param = file.getNative();
					calculate_file_md5(param);
					var getFileMD5 = setInterval(function() {
						if(simpleFileMD5Value) {
							clearInterval(getFileMD5);
							$.ajax({
								type : "POST",							
								url : "/web/api/bam/checkFileMD5",
								data : {"jsonStr":"{'md5':'"+simpleFileMD5Value+"'}"},
								dataType : 'json',
								success : function(data) {
									var fileUrl = data.data;
									if(null == fileUrl || "" == fileUrl) {
										set_upload_param(uploader_main, '', false);
									} else {
										document.getElementById('img_upload').src = fileUrl;
										$('#img_name').val(file.name);
									}
								},
								error : function(data) {
									console.log(data.message);
								}
							})
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
