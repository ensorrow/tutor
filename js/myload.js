$(document).on('pageinit',function(){
	$('.include').each(function(){
	if(!!$(this).attr('file')){
		var $includeObj=$(this);
		$(this).load($(this).attr('file'),function(html){
			$includeObj.after(html).remove();
		})
	}
});
})