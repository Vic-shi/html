//时间输出
$(".time").html(moment().years());
//时间减少
function previous(){
	var time=parseInt($(".thim").html());
	var previous=(time-1);
	$(".time").html(previous);
}
//时间增加
function next(){
	var time=parseInt($(".time").html());
	var previous=(time+1);
	$(".time").html(previous);
}
//引入环形图
var cumulativeSingleAmount = echarts.init(document.getElementById('cumulative_single_amount'));
var optionCake= {
		tooltip: {
	        trigger: 'item',
	        formatter: "{a} <br/>{b}: {c} ({d}%)"
	    },
	    legend: {
	        y: 'bottom',
	        data:['租凭量:22561','结单量:1224']
	    },
	    color:['#4ec3fb','#bfe5f7'],
	    series: [
	        {
	            name:'访问来源',
	            type:'pie',
	            radius: ['50%', '70%'],
	            avoidLabelOverlap: false,
	            label: {
	                normal: {
	                    show: false,
	                    position: 'center'
	                },
	                emphasis: {
	                    show: true,
	                    textStyle: {
	                        fontSize: '25',
	                        fontWeight: 'bold'
	                    }
	                }
	            },
	            labelLine: {
	                normal: {
	                    show: false
	                }
	            },
	            data:[
	                {value:22561, name:'租凭量:22561'},
	                {value:1224, name:'结单量:1224'},
	            ]
	        }
	    ]
	};
cumulativeSingleAmount.setOption(optionCake);
//引入柱状图
var products = echarts.init(document.getElementById('products'));
var optionColumn = {
		backgroundColor: '#fff',
		title:{
			text:'作品'
		},
	    color: ['#f7bfbf', '#4ec3fb', '#bfe5f7'],
	    tooltip: {
	        trigger: 'axis',
	        axisPointer: {
	            type: 'shadow'
	        }
	    },
	    legend: {
	        data: ['库存量', '租凭量', '结单量']
	    },
	    calculable: true,
	    xAxis: [
	        {
	            type: 'category',
	            axisTick: {show: false},
	            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	        }
	    ],
	    yAxis: [
	        {
	            type: 'value'
	        }
	    ],
	    series: [
	        {
	            name: '库存量',
	            type: 'bar',
	            barGap: 0,
	            data: [2320, 1332, 1311, 1334, 1390, 1390, 1390, 1390, 1390, 1390, 1390, 1390]
	        },
	        {
	            name: '租凭量',
	            type: 'bar',
	            data: [1220, 1182, 1191, 1234, 1290, 1290, 1290, 1290, 1290, 1290, 1290, 1290]
	        },
	        {
	            name: '结单量',
	            type: 'bar',
	            data: [1150, 1232, 1201, 1154, 1190, 1190, 1190, 1190, 1190, 1190, 1190, 1190]
	        }
	    ]
	};
products.setOption(optionColumn);
//引入折线图
var teacherIncrement = echarts.init(document.getElementById('teacher_increment'));
var optionLine = {
		backgroundColor: '#fff',
	    title: {
	        text: '老师/会员增长量'
	    },
	    color:['#f7bfbf','#4ec3fb'],
	    tooltip: {
	        trigger: 'axis'
	    },
	    legend: {
	        data:['老师','会员']
	    },
	    grid: {
	        left: '3%',
	        right: '4%',
	        bottom: '3%',
	        containLabel: true
	    },
	    xAxis: {
	        type: 'category',
	        boundaryGap: false,
	        data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']
	    },
	    yAxis: {
	        type: 'value'
	    },
	    series: [
	        {
	            name:'老师',
	            type:'line',
	            stack: '总量',
	            data:[120, 132, 101, 134, 90, 230, 210, 120, 132, 101, 134, 90, 230, 210, 230, 210]
	        },
	        {
	            name:'会员',
	            type:'line',
	            stack: '总量',
	            data:[220, 182, 191, 234, 290, 330, 310, 220, 182, 191, 234, 290, 330, 310, 330, 310]
	        }
	     ]
};
	teacherIncrement.setOption(optionLine);