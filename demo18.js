$(function(){
	
	//普通绑定bind
	//普通解绑.unbind


	//事件委托.live .delegate
	//事件解绑.die  .undelegate


	//新方法绑定.on
	//新方法解绑.off


	// $('button').on('click',function(){
	// 		alert('新方法')
	// })


	// $('button').on('click',{user:'lee'},function(e){
	// 		alert(e.data.user)
	// })


	// $('button').on('mouseover mouseout',function(e){
	// 		alert('新事件')
	// })


	// $('button').on({
		// 	mouseover:function(){
		// 		alert('sjh')
		// 	},
		// 	mouseout:function(){
		// 		alert('SJH')
		// 	}
	// })


	//$('button').off('click');

	//替代，live和。delegate
	// $('#box').on('click','.button',function(){
	// 	$(this).clone().appendTo('#box');
	// })

	// //移除事件委托
	// $('#box').off('click','.button');

	//仅一次事件触发
	$('#box').one('click','.button',function(){
		alert('仅一次事件触发！')
	})






})