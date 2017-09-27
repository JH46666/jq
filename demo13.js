$(function(){

		// $('div').mouseover(function(){
		// 	$(this).css('background','red')
		// }).mouseout(function(){
		// 	$(this).css('background','green')
		// })

		// $('div').mouseover(function(){    //over会触发子节点
		// 	$(this).css('background','red')
		// }).mouseleave(function(){
		// 	$(this).css('background','green')
		// })



		// $('div').mouseover(function(){			//over会触发子节点
		// 	$('strong').html(function(index,value){
		// 		return value + '1';
		// 	})
		// })
		

		// $('div').mouseenter(function(){			//enter不会触发子节点
		// 	$('strong').html(function(index,value){
		// 		return value + '1';
		// 	})
		// })	




		// $('div').mouseleave(function(){			//enter不会触发子节点
		// 	$('strong').html(function(index,value){
		// 		return value - '1';
		// 	})
		// })



		// $('input').keydown(function(e){			//enter不会触发子节点
		// 	alert(e.keyCode)
		// 	})
	
		// $('input').focus(function(){
		// 	alert('光标激活');
		// })


		// $('input').focus(function(){
		// 	alert('光标丢失');
		// })


			$('div').hover(function(){
				$(this).css('background','black');
			},function(){
				$(this).css('background','red');
			})




});