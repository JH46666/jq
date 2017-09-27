$(function(){

	// $('button').bind('click',function(e){
	// 		alert(typeof e.type);
	// })


	// $('button').bind('click',function(e){
	// 		alert(e.relatedTarget);
	// })


	// $('button').bind('click',function(e){
	// 		alert(e.currentTarget);
	// })


	// $('div').bind('click',function(e){
	// 			alert(e.target);
	// 	})

	// $('div').bind('click',function(e){
	// 			alert(e.currentTarget);
	// 	})


	//target是获取触发元素的DOM，触发元素，就是你点了哪个就是哪个

	//currentTarget得到的是监听元素的DOM，你绑定的哪个就是哪个



	// $('div').bind('mouseover',function(e){
	// 			alert(e.relatedTarget);
	// 	})

	

	// $('div').bind('mouseout',function(e){
	// 			alert(e.relatedTarget);
	// 	})

	// $('button').bind('click','abc',function(e){    //必须要加标点
	// 		alert(e.data);
	// })


	// $('button').bind('click',123,function(e){
	// 		alert(e.data);
	// })


	// $('button').bind('click',[1,2,3],function(e){
	// 		alert(e.data[3]);
	// })

	// $('button').bind('click',{user:'lee'},function(e){
	// 		alert(e.data);
	// })

	// $('div').bind('click',function(e){
	// 		alert(e.pageX+','+e.screenX+','+e.clientX);
	// })

	// $('button').bind('mousedown',function(e){
	// 	if(e.which === 1){
	// 		alert('君红好帅')
	// 	}else if(e.which == 2){
	// 		alert('君红超帅')
	// 	}else
	// 	alert('sjh')
	// });


	// $('button').bind('keyup',function(e){
	// 	alert(e.which);
		
	// 	})
		

	$('button').bind('click',function(e){
		alert(e.ctrlKey)
		})
		









})