
$(function(){
	//alert($('#box').html());

	//alert($('#box').text());  //获取的是文本，有HTML会自动清理


    //	$('#box').html('<em>WWW.12.com</em>')   //替换HTML内容，会HTML会自动解析
	// $('#box').text('<em>WWW.12.com</em>')         //    自动转义


	// $('#box').text('<em>WWW.12.com</em>')  

	//$('input').val('北风网');
	//$('input').val('北风网');
	//$('input').val('北风网');
	//$('input').val(['男','女','编程']);



	//$('div').attr('title','我是域名')  //class不建议用attr
	                               
	$('div').attr('title',function(index,value){
		return  '原来的title是: '+value+',我是'+(index+1)+'域名';
	}) 



})