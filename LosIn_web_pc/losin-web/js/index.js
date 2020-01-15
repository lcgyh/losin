$(function(){
	// 微信点开出弹窗
	$('#weixin-icon').on('click',function(){
		var e = '<div class="weixin-sharepop"><div class="weixin-sharecode"><img src="images/losin_ewm.png" /></div><p>微信扫码关注LosinX微信公众号</p></div>'
        $('#pop').removeClass('hide')
        layer.open({
		  type: 1,
		  shade: false,
		  title: false, //不显示标题
		  content: e, //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
		  cancel:function(){
		  	 $('#pop').addClass('hide')
        	
		  }
		})
	})

	

	$('#consultative').on('click',function(){
		var e = '<div class="weixin-sharepop"><div class="weixin-sharecode"><img src="images/personwm.png" /></div><p>微信扫码添加LosinX客服微信</p></div>'
        $('#pop').removeClass('hide')
        layer.open({
		  type: 1,
		  shade: false,
		  title: false, //不显示标题
		  content: e, //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
		  cancel:function(){
		  	 $('#pop').addClass('hide')
        	
		  }
		})
	})


	 // 返回顶部
    $('.icon-70-top').on('click',function(){
        $('body,html').animate({scrollTop:0},800);
    });
	 $(window).scroll(function () {
	 	var navigation = $('#navigation')
        var w = $(window).scrollTop();   //滚动条的垂直偏移
            if (w >= 300) {
            	navigation.removeClass('hidebox');
                } else {
                     navigation.addClass('hidebox');
                }
    }).trigger("scroll");







})



