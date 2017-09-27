$(function(){


	// $('div').width(function(index,width){
	// 	return width - 500 +'px';  //虽然不加会智能添加，但是添加会更加清晰
	// });

	//alert($('div').innerWidth());
	//alert($('div').Width());
	//alert($('div').outerWidth())

	//alert($('div').offset().top);
 // 	var box= $('<div id="box">jieidan</div>'); //创建节点
	// $('body').append(box);   //插入节点


	//$('div').append('<strong>节点</strong>')
	// $('div').append(function(index,html){
	// 	return '<strong>DOM</strong>' + index + html;
	// })

	//$('strong').appendTo('div');   //移入操作，不需要创建节点

	//$('div').prepend('<strong>DOM</strong>')

	$('strong').insertAfter('div') //插入到前面

	$('strong').insertBefore('div')   //插入到后面

});







