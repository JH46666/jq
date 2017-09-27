$(function(){



	//var box = $('div').css(['color','width','height']);

	
	// for (var i in box){
	// 		alert(i +':'+ box[i]);
	// }


	// $.each(box,function(attr,value){
	// 	alert(attr + ':' + value)
	// })

	// $('div').each(function(index,element){
	// 	alert(index + ':' +element)
	// });
	
	// $('div').css({
	// 	'color':'blue',
	// 	'background':'200px',
	// 	'height':'200px'
	// })




	// $('div').css('width',function(index,value){
	// 	//局部操作比较适合
	// 	return parseInt(value) - 500 + 'px';
	// })


	//$('div').addClass('red');
	// $('div').addClass('red bg size');
	// $('div').removeClass('bg');

	// $('div').click(function(){
	// 	$(this).toggleClass('red size',true)   //两个样式之间的切换，默认样式和指定样式的切换
	// });

	// var count = 0;
	// $('div').click(function(){
	// 	alert('');
	// 	$(this).toggleClass('red size ',count++ %5 == 0);  // 频率问题


	// })

	// $('div').click(function(){
	// 这里只是click的局部，而又是toggle的全局
	// 
	// 	$(this).toggleClass('red');
	// 	if ($(this).hasClass('red')) {
	// 		$(this).removeClass('green');
	// 	}else{
	// 		$(this).toggleClass('green');
	// 	}
	// });

	// $('div').click(function(){
	// 	$(this).toogleClass(function(){
	// 		return $(this).hasClass('red') ? 'green' : 'red';
	// 	})
	// })


		$('div').click(function(){
			//局部
		$(this).toogleClass(function(){
			if($(this).hasClass('red')){
				$(this).removeClass('red');
				return   'green' 
			}else{
				$(this).removeClass('green');
				return   'red' 
			}
		})
	})


});







