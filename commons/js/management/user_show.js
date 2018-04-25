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
				//document.getElementById("country").value=data.data.country;
				document.getElementById("provid").value=data.data.province;
				document.getElementById("provid").value = "浙江";
				document.getElementById("cityid").value = "宁波";
				//document.getElementById("language").value=data.data.language;
				document.getElementById("subscribeTime").value=getMyDate(data.data.subscribeTime);
				//document.getElementById("headimgUrl").value=data.data.headimgUrl;
				//document.getElementById("unionId").value=data.data.unionId;
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
	//var country = document.getElementById("country").value;
	var provid = document.getElementById("provid").value;
	//var language = document.getElementById("language").value;
	var subscribeTime = document.getElementById("subscribeTime").value;
	//document.getElementById("headimgUrl").value=data.data.headimgUrl;
	//document.getElementById("unionId").value=data.data.unionId;
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
	} ;
	function edit(){
		var userId = sessionStorage.getItem('userId');
		sessionStorage.setItem("userId",userId);
		window.location.href="/web/management/platform/user/user_add.jsp";
	}