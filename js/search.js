	// submenu	
	for(var i=0;i<3;i++){	
		(function(num){
			$('.navli').eq(num).children('a').click(function(){
				$(this).toggleClass('active');
				$('.submenu').eq(num).toggle();
				for(var j=0;j<3;j++){
					if (j!=num) {$('.submenu').eq(j).hide();$('.navli').eq(j).children('a').removeClass('active')};
				}
				return false;
			})
		})(i)
		$('li.sub_gra').eq(i).click(function(){
			$(this).siblings('li.sub_gra').children('ul').hide().end().removeClass('active');
			$(this).children('ul').show().end().addClass('active');
		})
	}
	(function(obj){
		obj.click(function(){
			$(this).siblings('li').removeClass('active');
			$(this).addClass('active');
		})
	})($('.sub2 li,.sub3 li'))
	
	function close1(obj){
		$(document).click(function(e){
			var target=e.target;
			if(obj.get(0)!==target&&!$.contains(obj.get(0),target)){
				obj.hide();
			}
		})
	}
	close1($('.sub1'));
	close1($('.sub2'));
	close1($('.sub3'));	
	function closeMask(obj){
		$('#mask').click(function(e){
			var target=e.target;
			if(obj.get(0)!==target&&!$.contains(obj.get(0),target)){
				$('#mask').hide('500');
			}
		})
		$('#mask .mySub').click(function(){
			$('#mask').hide();
		})
	}	
	$(document).on('pagebeforecreate',function(){
		$('#mask input').attr('data-role','none');
	});
	$(document).on('pageinit',function(){
		$('#mask').css('height',$(document).height()+'px');
		showMask();		
	})
	function checkSubmenu(){
		var onoff=true;
		$('.submenu').each(function(){
			if($(this).css('display')==='block'){
				onoff=false;
			}
		});
		return onoff;
	}
	function showMask(){
		$('#main li').each(function(){
			$(this).click(function(){
				if(checkSubmenu()){
					$('#mask').show('fast','linear',function(){closeMask($('.content1'));});
				}
			})
		})
	}