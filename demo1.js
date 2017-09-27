$(function(){
	$('#box').css('color','blue'); //添加一个行为，这个行为是一个样式
	                               ////1个，后面两个失明了  
});

// $(function(){
// 	$('div').css('color','maroon')； //3个  
// })


$(function(){
	$('.box').css('color','blue');//3个
	                                  
});


$(function(){
	alert($('#box').size());
	alert($('.box').size());
	alert($('div').size());




	$('div').eq(1).css('color','red');  //选择自定义的

	alert($('div').length);


});



// #box > p{    //孙子节点选择到
           
// 	color:red;
// }

$(function(){

	$('#box>p').css('color','red')

	//很多情况下有动态DOM生成的问题，会导致执行不存在的ID选择器


if($('box').size()>0){
	$('#pox').css('color','red');
}


})


if ($('#pox')[0]){
	..
}










