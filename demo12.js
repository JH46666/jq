$(function(){

	// $('button').bind('click',function(){
	// 	alert('弹窗!');
	// })

	// $('button').bind('click',fn)

	// function fn(){
	// 	alert('弹出')
	// }


	// $('button').bind('click mouseover',function(){
	// 	alert('弹窗!');
	// })


	// $('button').bind(' mouseover mouseout',function(){
	// 	$('div').html(function(index,value){    //基础下标
	// 		return value + '1';
	// 	});
	// });



	// $('button').bind({
	// 	mouseover :function(){
	// 		alert('移入')
	// 	},
	// 	mouseout:function(){
	// 		alert('移出')
	// 	}
	// });


	// $('button').unbind();  //删除全部事件

	// $('button').unbind('click');    //删除click事件


	// $('button').unbind('click',fn2)   //删除了click事件的FN2


	// $('button').dblclick(function(){
	// 	alert('双击')


	// })

	// $('button').mousedown(function(){
	// 	alert('鼠标左键按下')
	// })



	// $('button').mouseup(function(){
	// 	alert('鼠标左键弹起')
	// })


	// $(window).unload(function(){    //一般UNLOAD卸载页面新版浏览器应该是不支持，获取要设置一个
	//                                 //一般用于清理工作
	// 	alert('1');
	// })

	// $(window).resize(function(){    
	// 	alert('文档改变了');
	// })


	// $(window).scroll(function(){    
	// 	alert('滚动条改变了');
	// })

	// $('input').select(function(){
	// 	alert('文本选定');
	// });

	// $('input').change(function(){
	// 		alert('文本改变');
	// 	});

	$('form').submit(function(){
			alert('文本改变');
		});



});