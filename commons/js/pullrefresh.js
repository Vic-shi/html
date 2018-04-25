var myScroll,
	pullDownEl, pullDownOffset,
	pullUpEl, pullUpOffset;

function pullDownAction () {
	pullDown();
}

function pullUpAction () {
	pullUp();
}

function loaded() {
	pullDownEl = document.getElementById('pullDown');
	pullDownOffset = pullDownEl.offsetHeight;
	pullUpEl = document.getElementById('pullUp');
	pullUpOffset = 10;
	//pullUpOffset = pullUpEl.offsetHeight;
	
	myScroll = new iScroll('wrapper', {
		useTransition: false,
        topOffset: pullDownOffset,
        btnOffset: pullUpOffset,
        hideScrollbar: true,
        fadeScrollbar: true,
		onRefresh: function () {
			if (pullDownEl.className.match('loading')&&(!pullDownEl.className.match('stopDown'))) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';}
			if (pullUpEl.className.match('loading')) {
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
			}
			
			pullUpEl.style.display="none";
		},
		onScrollMove: function () {
			if (this.y > 0 &&(!pullDownEl.className.match('stopDown'))&&(!pullDownEl.className.match('stopDown'))) {
				pullDownEl.className = 'flip';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '松手开始更新...';
				this.minScrollY = 0;
			}
			if (this.y < 0 && pullDownEl.className.match('flip') &&(!pullDownEl.className.match('stopDown'))) {
				pullDownEl.className = '';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
				this.minScrollY = -pullDownOffset;
			}

			if ( this.scrollerH < this.wrapperH && this.y < (this.minScrollY-pullUpOffset) || this.scrollerH > this.wrapperH && this.y < (this.maxScrollY - pullUpOffset) ) {
				pullUpEl.style.display="";
				pullUpEl.className = 'flip';
				if(document.getElementById('noRecord').innerHTML == "showType"){
					pullUpEl.querySelector('.pullUpLabel').innerHTML = '我们也是有底线的...';
				}else{
					pullUpEl.querySelector('.pullUpLabel').innerHTML = '松手开始更新...';
				}
			} 
			
			if (this.scrollerH < this.wrapperH && this.y > (this.minScrollY-pullUpOffset) && pullUpEl.className.match('flip') || this.scrollerH > this.wrapperH && this.y > (this.maxScrollY - pullUpOffset) && pullUpEl.className.match('flip')) {
				pullUpEl.style.display="none";
				pullUpEl.className = '';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载更多...';
			}
		},
		onScrollEnd: function () {
			if (pullDownEl.className.match('flip')&&(!pullDownEl.className.match('stopDown'))) {
				pullDownEl.className = 'loading';
				pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';				
				pullDownAction();	// Execute custom function (ajax call?)
			} 
			 if (pullUpEl.className.match('flip')) {
				pullUpEl.className = 'loading';
				pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';		
				pullUpAction();	// Execute custom function (ajax call?)
			}
		}
	});
}

//document.addEventListener('touchmove', defaultTouchmove, false);

window.addEventListener('printerstatechanged', function () { 
		setTimeout(loaded, 20); 
	}, false);

/*function defaultTouchmove() {
	event.preventDefault();
}
*/