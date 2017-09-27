

$(function(){
	//$('li:first').css('background','#ccc')
	//$('li:last').css('background','#ccc')   //ul最后一个，不管分几个UL都是最后一个UI的最后一个li
	                                        
	//$('#box li:last').css('background','#ccc')
	//$('ul:first li:last').css('background','#ccc')
	//$('li:not(.red)').css('background','#ccc')
	
	//$('li:even').css('background','#ccc')   基数
	//$('li:odd').css('background','#ccc')   偶数
	//$('li:eq(2)').css('background','#ccc')
	//$('li:eq(-2)').css('background','#ccc')  没有0
	//$('li:gt(-2)').css('background','#ccc')
    //$('li:it(-2)').css('background','#ccc')
	//$('div :header').css('background','#ccc')   div，没有加的话就是全局，如果div是包含关系的话，加一个空格
	//$('input').get(0).focus();    //先初始化激活一个元素焦点
	//$(':focus').css('background','#ccc')

	//$('li').eq(2).css('background','#ccc');
	//$('li').last().css('background','#ccc');


	//$('div:contains("123")').css('background','#ccc');
	//$('div:empty').css('background','#ccc').css('height','20px'); ///不包含文本


	//$('ul:has(.red)').css('background','#ccc');  //查询ul含有class=red的做出选择

	//$('div:parent').css('background','#ccc');   //选取div下面的
	                                            //


	$('div:hidden').css('background','#ccc').show(1000);   //一秒钟后将隐藏的东西显示出来

	//alert($('div:visible').size());

})