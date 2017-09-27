$(function(){


	// alert($('input').size());
	// alert($('input').val());
	// alert($('input').eq(1).val());   //这种写法语义不清晰
	//alert($('input[type=password]').val())   //语义清晰了点
	//alert($('input[name=pass]').val())  

	//alert($(':input').size()); 
	//alert($(':input[name=city]').val());
	//alert($('form :hidden').size());

	//alert($('form :enabled').size())
	//alert($('form :disabled').size())
	//alert($(' form :checked').size())

	alert($('form :selected').get(0));

})