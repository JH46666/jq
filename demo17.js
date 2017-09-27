$(function(){
	
	//bind三个事件
	// $('button').bind('click',function(){
	// 	alert('事件不委托')
	// })

	//使用live绑定的是document，而非button
	//所以，永远只会绑定一次事件
	// $('button').live('click',function(){
	// 	alert('事件不委托')
	// })

	//bind无法动态绑定事件
	// $('button').bind('click',function(){
	// 	$(this).clone().appendTo('#box');
	// })


	//live无法动态绑定事件,因为事件绑定在document上
	// $('button').live('click',function(){
	// 	$(this).clone().appendTo('#box');
	// })

	//live绑定在document上，而点击button其实是冒泡到document上
	//并且点击document时候，需要验证event.target才会触发

	//意思和unbind一样
	//$('button').die('click');

	//live的替代方法
	$('#box').delegate('button','click',function(){
			$(this).clone().appendTo('#box');
	});





	$('#box').undelegate('button','click')

	//语义清晰，由于他没有指定绑定了谁，所以不清晰
    //语义清晰，绑定了谁，谁就在开头





})