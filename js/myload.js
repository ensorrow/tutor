//get msg by ajax
function refresh(){
	$.ajax({
            type: 'GET',
            url: 'json/more.json',
            dataType: 'json',
            success: function(data){
                var result = '';
                for(var i = 0; i < data.lists.length; i++){
                    result +=   '<li><a href="'+data.lists[i].link+'">'
                                    +'<img src="'+data.lists[i].pic+'" alt="">'
                                    +'<h1>'+data.lists[i].name+'</h1>'
                                    +'<h2>'+data.lists[i].grade+'</h2>'
                                    +'<h3>'+data.lists[i].subject+'</h3>'
                                    +'<h4>'+data.lists[i].address+'</h4>'
                                    +'<span class="ongoing">在读'+data.lists[i].ongoing+'门</span>'
                                    +'<span class="distance">'+data.lists[i].distance+'km</span>'
                                +'</a></li>';
                }
                setTimeout(function(){
                	$('.lists').append(result).listview("refresh");
                	$('#refresh').removeClass('active');
                	showMask();
                }, 1000)               
            },
            error: function(xhr, type){
                alert('Ajax error!');
            }
        });
}
//first load
$(document).on('pageinit',refresh());
//refresh button for computer or some browsers where the touchmove event cannot work
$('#refresh').on('click',function(){
	$(this).addClass('active');
	refresh();
});
//dropload
$('#main').dropload({
    scrollArea : window,
    loadDownFn : function(me){
        // refresh(me);
        $.ajax({
            type: 'GET',
            url: 'json/more.json',
            dataType: 'json',
            success: function(data){
                var result = '';
                for(var i = 0; i < data.lists.length; i++){
                    result +=   '<li><a href="'+data.lists[i].link+'">'
                                    +'<img src="'+data.lists[i].pic+'" alt="">'
                                    +'<h1>'+data.lists[i].name+'</h1>'
                                    +'<h2>'+data.lists[i].grade+'</h2>'
                                    +'<h3>'+data.lists[i].subject+'</h3>'
                                    +'<h4>'+data.lists[i].address+'</h4>'
                                    +'<span class="ongoing">在读'+data.lists[i].ongoing+'门</span>'
                                    +'<span class="distance">'+data.lists[i].distance+'km</span>'
                                +'</a></li>';
                }
                // 为了测试，延迟1秒加载
                setTimeout(function(){
                    $('.lists').append(result).listview("refresh");
	                showMask();
	                me.resetload();
                },1000);
				
            },
            error: function(xhr, type){
                alert('Ajax error!');
                me.resetload();
            }
        });
    }
});