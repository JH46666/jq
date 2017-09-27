

$(function(){
	//$('li:first-child').css('background','#ccc');
	//$('li:last-child').css('background','#ccc');
	//$('li:only-child').css('background','#ccc');

	//$('li:nth-child(odd)').css('background','#ccc');
	//$('li:nth-child(4)').css('background','#ccc');
	//$('li:nth-child(4n)').css('background','#ccc');

	alert($('div:first').children().size());
	$('div:first').children().css('background','#ccc');



	$('li').filter('.red,:first,:last,:last-child').css('background','#ccc');
})