//返回
$(function(){
	$(".return").click(function(){
		history.back(-1);
	});
});

(function($){
  	$(window).load(function(){
		var listOrder = JSON.parse(sessionStorage.getItem('listOrder'));
		console.log(listOrder);
		console.log(listOrder.userAddress);
		document.getElementById("orderId").value=listOrder.id;
		document.getElementById("userAddress").value=listOrder.userAddress+listOrder.userDetailAddress;
		document.getElementById("userName").value=listOrder.userName;
		document.getElementById("userName1").value=listOrder.userName;
		document.getElementById("userMobile").value=listOrder.userMobile;
		document.getElementById("term").value=listOrder.term;
		document.getElementById("productName").value=listOrder.productName;
		document.getElementById("productMountedValue").value=listOrder.productMountedValue/100;
		document.getElementById("productDeposit").value=listOrder.productDeposit/100;
		document.getElementById("originalPrice").value=listOrder.orderTotalValue/100;
		document.getElementById("actualPayment").value=listOrder.actualPayment/100;
		document.getElementById("orderType").value=(listOrder.orderType == 0 ? "租赁" : (listOrder.orderType == 1 ? "结单":"未知"));
		document.getElementById("orderStatus").value=(listOrder.orderStatus == 0 ? "未付款" : (listOrder.orderStatus == 1 ? "未发货":(listOrder.orderStatus == 2 ? "已发货":(listOrder.orderStatus == 3 ? "租赁中":(listOrder.orderStatus == 4 ? "还画中":(listOrder.orderStatus == 5 ? "交易完成":(listOrder.orderStatus == 6 ? "取消订单":(listOrder.orderStatus == 7 ? "已删除":"未知"))))))));
		document.getElementById("productName").value=listOrder.productName;
		document.getElementById("productAuthor").value=listOrder.productAuthor;
		document.getElementById("orderCreateTime").value=listOrder.orderCreateTime;
		document.getElementById("productPicture").src=listOrder.productPicture;
		document.getElementById("rent").value=listOrder.rent/100;
		document.getElementById("productId").value=listOrder.pid;
		document.getElementById("productAuthorId").value=listOrder.productAuthorId;
		document.getElementById("userId").value=listOrder.userId;
		document.getElementById("waybillNo").value=listOrder.waybillNo;
		document.getElementById("carrierCompany").value=listOrder.carrierCompany;
		if(listOrder.orderStatus != 1){
			document.getElementById("send").style="display:none";
			$(".disabled").attr("disabled","disabled");
			$(".disabled").addClass("input_color");
		}
  	});
  })(jQuery);

function sendOrder(){
	var orderId = document.getElementById("orderId").value;
	var waybillNo = document.getElementById("waybillNo").value;
	var userName = document.getElementById("userName").value;
	var userMobile = document.getElementById("userMobile").value;
	var userAddress = document.getElementById("userAddress").value;
	var carrierCompany = document.getElementById("carrierCompany").value;
	queryData = {"jsonStr":"{'orderId':"+orderId+",'waybillNo':"+waybillNo+",'userName':'"+userName+"','userMobile':'"+userMobile+"','userAddress':'"+userAddress+"','sendMsg':1,'carrierCompany':'"+carrierCompany+"','orderStatus':2}"};
	//ajax请求数据
	var param = {
			url: "/web/api/order/update",
			data: queryData,
			successCallback: function(data){
				if(data.state == 0){
					history.back(-1);
				}else{
					alert("提交失败");
				}
			},
			errorCallBack: function(data) {
				alert("服务器繁忙请稍后重试");
			}
	}
	getDataFromServer(param);
}

function getProduct(){
	var orderId = document.getElementById("orderId").value;
	var waybillNo = document.getElementById("waybillNo").value;
	var userName = document.getElementById("userName").value;
	var userMobile = document.getElementById("userMobile").value;
	var userAddress = document.getElementById("userAddress").value;
	var carrierCompany = document.getElementById("carrierCompany").value;
	queryData = {"jsonStr":"{'orderId':"+orderId+",'orderStatus':10}"};
	//ajax请求数据
	var param = {
			url: "/web/api/order/delete",
			data: queryData,
			successCallback: function(data){
				console.log(data);
				if(data.state == 0){
					history.back(-1);
				}else{
					alert("收货失败");
				}
			},
			errorCallBack: function(data) {
				alert("服务器繁忙请稍后重试");
			}
	}
	getDataFromServer(param);
}
