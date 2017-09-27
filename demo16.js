$(function(){

	// $('button').click(function(){
	// 	alert('我将弹输出，我将要使用模拟用户操作来触发')
	// })

	// //摸拟用户点击操作
	// $('button').trigger('click')


	// $('button').click(function(){
	// 	alert('我将弹输出，我将要使用模拟用户操作来触发')
	// }).trigger('click')


	// $('button').click(function(e,data1,data2){
	// 	alert(data1 +'|'+ data2)
	// }).trigger('click',['123','abc'])



	// $('button').click(function(e,data1,data2){
	// 	alert(data1 +'|')
	// }).trigger('click','123','abc')

	// //trigger额外数据，只有一条的时候，可以省略中括号，多条不能省略，第二条之后就无法识别了
	// //



	// $('button').click(function(e,data1,data2,data3,data4){
	// 	alert(data1 +'|'+ data2 +'|' + data3[1] +'|'+data4.user);
	// }).trigger('click',['123','abc',['a','b','c'],{user:'lee'}]);


	// $('button').bind('click',{user:'sjh'},function(e,data1,data2,data3,data4){
	// 	alert(data1 +'|'+ data2 +'|' + data3[1] +'|'+data4.user +'|' +e.data.user);
	// }).trigger('click',['123','abc',['a','b','c'],{user:'lee'}]);



	//click,mouseover这些系统事件，自定义事件就是自己起名字的事件
	// $('button').bind('myEvent',function(){
	// 	alert('自定义事件')
	// }).trigger('myEvent')


	// $('button').click(function(){
	// 		alert('自定义事件')
	// 		return   123
 // 		}).trigger('click').css('color','red')   //返回Jquery对象，可以连缀




	// $('button').click(function(){
	// 		alert('自定义事件')
	// 		return   123
 // 	}).triggerHandler('click').css('color','red')   //返回return值，或undefined

 

 	$('button').bind('click.abc',function(){
				alert('自定义事件')
	 	})


 	$('button').bind('click.xyz',function(){
				alert('自定义事件')
	 	}) 

 	$('button').unbind('click.abc')

















})