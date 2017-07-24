(function(){
	var datepicker={};
	datepicker.getMonthData=function(year,month){
		var ret=[];//日期数组
		if(!year && !month){
			//获取当前的日期
			var today=new Date();
			year=today.getFullYear();
			month=today.getMonth()+1;
		}
		//获取当前月的第一天
		var firstDay=new Date(year,month-1,1);
		var firstDayWeekDay=firstDay.getDay();
		if(firstDayWeekDay===0) firstDayWeekDay=7;

		//保存当前的年份和月份
		var year=firstDay.getFullYear();
		var month=firstDay.getMonth()+1;

		//当前月要显示上一月的天数
		var preMonthDayCount=firstDayWeekDay-1;
		//获取上一个月的最后一天
		var lastDayOfLastMonth=new Date(year,month-1,0);
		var lastDateOfMonth=lastDayOfLastMonth.getDate();
		//获取当前月的最后一天
		var lastDay=new Date(year,month,0);
		var lastDate=lastDay.getDate();
		for(var i=0;i<7*6;i++){
			//日期
			var date=i+1-preMonthDayCount;
			var showDate=date;
			var thisMonth=month;
			if(date<=0){
				//上一月
				thisMonth=month-1;
				showDate=lastDateOfMonth+date;
			}else if(date>lastDate){
				//下一月
				thisMonth=month+1;
				showDate=showDate-lastDate;
			}
			if(thisMonth===0) thisMonth=12;
			if(thisMonth===13) thisMonth=1;
			ret.push({
				month:thisMonth,
				date:date,
				showDate:showDate
			});
		}
		//返回
		return {
			year:year,
			month:month,
			days:ret
		};
	};

	window.datepicker=datepicker;
})();