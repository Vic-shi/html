//返回
$(function(){
	$(".return").click(function(){
		history.back(-1);
	});
});
(function($){
  	$(window).load(function(){
  		console.log(sessionStorage.getItem('listOrder'));
		var listOrder = JSON.parse(sessionStorage.getItem('listOrder'));
		console.log(listOrder);
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
		document.getElementById("orderCreateTime").value=getMyDate(listOrder.orderCreateTime);
		document.getElementById("productPicture").src=listOrder.productPicture;
		document.getElementById("rent").value=listOrder.rent;
		document.getElementById("productId").value=listOrder.pid;
		document.getElementById("productAuthorId").value=listOrder.productAuthorId;
		document.getElementById("userId").value=listOrder.userId;
		document.getElementById("productDeposit1").value=listOrder.productDeposit/100;
		document.getElementById("returnMoney").value=listOrder.returnMoney/100;
		document.getElementById("returnMoneyRemark").value=listOrder.returnMoneyRemark;
		document.getElementById("returnPictueFirst").value=listOrder.returnPictueFirst;
		document.getElementById("returnPictueSecond").value=listOrder.returnPictueSecond;
		document.getElementById("returnPictueThird").value=listOrder.returnPictueThird;
		if(listOrder.orderStatus != 4){
			document.getElementById("get").style="display:none";
		}
  	});
  })(jQuery);

function getProduct(){
	var orderId = document.getElementById("orderId").value;
	var returnMoneyRemark = document.getElementById("returnMoneyRemark").value;
	var returnMoney = document.getElementById("returnMoney").value*100;
	queryData = {"jsonStr":"{'orderId':"+orderId+",'returnMoney':"+returnMoney+",'returnMoneyRemark':'"+returnMoneyRemark+"'}"};
	//ajax请求数据
	var param = {
			url: "/web/api/order/assessDamage",
			data: queryData,
			successCallback: function(data){
				console.log(data);
				if(data.state == 0){
					history.back(-1);
				}
			},
			errorCallBack: function(data) {
				alert("收货失败");
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
	    oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay)  +' '+ getzf(oHour)  +':'+ getzf(oMin)  +':'+ getzf(oSen);//最后拼接时间  
	    return oTime;  
	}; 
	//str:开始时间毫秒数;month:月数
	function getEndDate(str,month){  
	    var oDate = new Date(str),  
	    oYear = oDate.getFullYear(),  
	    oMonth = oDate.getMonth()+1,  
	    oDay = oDate.getDate(),  
	    oHour = oDate.getHours(),  
	    oMin = oDate.getMinutes(),  
	    oSen = oDate.getSeconds();
	    var month = parseInt(month);
	    oMonth +=month;
	    if(oMonth > 12){
	    	oMonth-=12;
	    	oYear+=1;
	    }
	    switch (oMonth) {
		case 2:
			//判断是否闰年
			if((oYear % 4 == 0) && (oYear % 100 != 0 || oYear % 400 == 0)){
				if(oDay > 28){
					oDay-=28;
					oMonth+=1;
				}
			}else{
				if(oDay > 29){
					oDay-=29;
					oMonth+=1;
				}
			}
			break;
		case 4:
			if(oDay > 30){
				oDay-=30;
				month+=1;
			}
			break;
		case 6:
			if(oDay > 30){
				oDay-=30;
				month+=1;
			}
			break;
		case 9:
			if(oDay > 30){
				oDay-=30;
				month+=1;
			}
			break;
		case 11:
			if(oDay > 30){
				oDay-=30;
				month+=1;
			}
			break;
		default:
			break;
		}
	    var oTime = oYear +'-'+ getzf(oMonth) +'-'+ getzf(oDay)  +' '+ getzf(oHour)  +':'+ getzf(oMin)  +':'+ getzf(oSen);//最后拼接时间  
	    return oTime;  
	}; 
	function getzf(num){  
	    if(parseInt(num) < 10){  
	        num = '0'+num;  
	    }  
	    return num;  
	} 