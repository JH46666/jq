$(function(){
	//$('#box p').css('color','red');
	//find()方法
	//$('#box').find('p').css('color','blue');

	//$('#box > p').css('color','orange');

	//$('#box').children('p').css('color','red') //和子选择器等价

	
	//$('#box + p').css('color','blue')
	//next()方法
	//$('#box').next('p').css('color','green');

	//nextAll
	//$('#box').nextAll('p').css('color','red')  //next（）等选择器方法不传参数的话，就相当于传递了*号
	                                           //如果说*在某个环境下有所浪费，建议尽量不去使用
	 //prev
     // $('#box').prev('p').css('color','red') 

      //prevAll
      //$('#box').prevAll('p').css('color','red') 
       // $('#box').prevAll('p').nextAll('p').css('color','red')  //错误的做法
                                                                //
                                                                //                                          
  	$('#box').siblings('p').css('color','red') //同级上下所有元素选定                                                              
  	$('#box').nextUntil('p').css('color','red')   //
  	$('#box').nextUntil('p').css('color','red') 
})