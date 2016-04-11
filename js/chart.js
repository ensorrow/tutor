$(function(){
	var flow=[];
	for(var i=0;i<12;i++){
		flow.push(Math.floor(Math.random()*(30+((i%12)*5)))*10+100);
	}
	
	var data = [
	         	{
	         		name : '收入',
	         		value:flow,
	         		color:'#0d8ecf',
	         		line_width:2
	         	}
	         ];
     
	// var labels = ["2012-12-01","2012-12-02","2012-12-03","2012-12-04","2012-12-05","2012-12-06"];
	var labels = ['一月','二月','三月','四月','五月','六月','七月','八月','九月','十月','十一月','十二月'];
	
	var line = new iChart.LineBasic2D({
		render : 'canvasDiv',
		// background_color: '#30aaea',
		data: data,
		align:'center',
		title : '',
		subtitle : '',
		footnote : '',
		width : 580,
		height : 400,
		sub_option:{
			smooth : true,//平滑曲线
			point_size:10
		},
		tip:{
			enable:true,
			shadow:true
		},
		legend : {
			enable : false
		},
		crosshair:{
			enable:true,
			line_color:'#44b4ee'
		},
		coordinate:{
			width:500,
			valid_width:500,
			height:300,
			axis:{
				color:'#30aaea',
				width:[0,0,2,2]
			},
			grids:{
				vertical:{
					way:'share_alike',
			 		value:11
				}
			},
			scale:[{
				 position:'left',	
				 start_scale:0,
				 end_scale:1000,
				 scale_space:100,
				 scale_size:2,
				 scale_color:'#9f9f9f'
			},{
				 position:'bottom',	
				 labels:labels
			}]
		}
	});
	//开始画图
	line.draw();
});