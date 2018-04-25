var myScrollTwice,
	pullDownElTwice, pullDownOffsetTwice,
	pullUpElTwice, pullUpOffsetTwice;

function pullDownActionTwice () {
	pullDownTwice();
}

function pullUpActionTwice () {
	pullUpTwice();
}

function loadedTwice() {
	pullDownElTwice = document.getElementById('pullDownTwice');
	pullDownOffsetTwice = pullDownElTwice.offsetHeight;
	pullUpElTwice = document.getElementById('pullUpTwice');
	pullUpOffsetTwice = 10;
	//pullUpOffset = pullUpEl.offsetHeight;
	
	myScrollTwice = new iScroll('wrap', {
		useTransition: false,
        topOffsetTwice: pullDownOffsetTwice,
        btnOffsetTwice: pullUpOffsetTwice,
        hideScrollbar: true,
        fadeScrollbar: true,
		onRefresh: function () {
			if (pullDownElTwice.className.match('loading')&&(!pullDownElTwice.className.match('stopDown'))) {
				pullDownElTwice.className = '';
				pullDownElTwice.querySelector('.pullDownLabelTwice').innerHTML = '下拉刷新...';}
			if (pullUpElTwice.className.match('loading')) {
				pullUpElTwice.className = '';
				pullUpElTwice.querySelector('.pullUpLabelTwice').innerHTML = '上拉加载更多...';
			}
			
			pullUpElTwice.style.display="none";
		},
		onScrollMove: function () {
			if (this.y > 0 &&(!pullDownElTwice.className.match('stopDown'))&&(!pullDownElTwice.className.match('stopDown'))) {
				pullDownElTwice.className = 'flip';
				pullDownElTwice.querySelector('.pullDownLabelTwice').innerHTML = '松手开始更新...';
				this.minScrollY = 0;
			}
			if (this.y < 0 && pullDownElTwice.className.match('flip') &&(!pullDownElTwice.className.match('stopDown'))) {
				pullDownElTwice.className = '';
				pullDownElTwice.querySelector('.pullDownLabelTwice').innerHTML = '下拉刷新...';
				this.minScrollY = -pullDownOffsetTwice;
			}

			if ( this.scrollerH < this.wrapperH && this.y < (this.minScrollY-pullUpOffsetTwice) || this.scrollerH > this.wrapperH && this.y < (this.maxScrollY - pullUpOffsetTwice) ) {
				pullUpElTwice.style.display="";
				pullUpElTwice.className = 'flip';
				if(document.getElementById('noRecordTwice').innerHTML == "showType"){
					pullUpElTwice.querySelector('.pullUpLabelTwice').innerHTML = '我们也是有底线的...';
				}else{
					pullUpElTwice.querySelector('.pullUpLabelTwice').innerHTML = '松手开始更新...';
				}
			} 
			
			if (this.scrollerH < this.wrapperH && this.y > (this.minScrollY-pullUpOffset) && pullUpElTwice.className.match('flip') || this.scrollerH > this.wrapperH && this.y > (this.maxScrollY - pullUpOffsetTwice) && pullUpElTwice.className.match('flip')) {
				pullUpElTwice.style.display="none";
				pullUpElTwice.className = '';
				pullUpElTwice.querySelector('.pullUpLabelTwice').innerHTML = '上拉加载更多...';
			}
		},
		onScrollEnd: function () {
			if (pullDownElTwice.className.match('flip')&&(!pullDownElTwice.className.match('stopDown'))) {
				pullDownElTwice.className = 'loading';
				pullDownElTwice.querySelector('.pullDownLabelTwice').innerHTML = '加载中...';				
				pullDownActionTwice();	// Execute custom function (ajax call?)
			} 
			 if (pullUpElTwice.className.match('flip')) {
				pullUpElTwice.className = 'loading';
				pullUpElTwice.querySelector('.pullUpLabelTwice').innerHTML = '加载中...';		
				pullUpActionTwice();	// Execute custom function (ajax call?)
			}
		}
	});
}

//document.addEventListener('touchmove', defaultTouchmove, false);

document.addEventListener('DOMContentLoaded', function () { setTimeout(loadedTwice, 20); }, false);

//function defaultTouchmove() {
//	event.preventDefault();
//}
