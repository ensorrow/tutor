var basicAlert='<div data-role="popup" data-position-to="window" id="popup"><p>alert content</p></div>',
	dialogAlert='<div data-role="popup" data-position-to="window" data-transition="pop" data-dismissible="false" id="popup" style="min-width:200px;"><div style="text-align:center;background:#32acea;padding:6px 0;"><h1 style="font-size:18px;color:#fff;">警告</h1></div><div style="padding:6px;"><p style="padding:6px 0;">确认付款？</p><a href="#" class="ui-btn ui-btn-inline" id="cancel">取消</a><a href="#" class="ui-btn ui-btn-inline" id="confirm">确认</a></div></div>';
function alertMsg(msg,alertType){
	if($('#popup')){$('#popup').remove();}//动态插入，开始前检测之前插入的并删除
	var msg=msg||'错误！';//传入错误信息
	var alertType=alertType||basicAlert;//传入弹框类型，默认为basicAlert,可选为dialogAlert
	$(alertType).appendTo($('#main'));//插入文档
	$('#popup p').html(msg);//修改错误信息
	$('#popup').popup();//加载jqm popup组件
	$('#popup').popup('open');//弹出框
	closeAlert();		
}

function closeAlert(){
	var cancelBtn = $('#cancel');
	var confirmBtn = $('#confirm');
	cancelBtn.click(function (){
		$('#popup').popup('close');
	})
	confirmBtn.click(function (){
		$('#popup').popup('close');
		// 待修复
		alertMsg('成功！');
		return true;		
	})
}