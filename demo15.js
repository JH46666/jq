$(function(){
		// //冒泡和阻止冒泡
		// $('button').click(function(e){
		// 	e.stopPropagation()   //禁止往上冒泡
		// 	alert('button')
		// })

		// $('span').click(function(e){
		// 	e.stopPropagation()
		// 	alert('span')
		// })

		// $('div').click(function(e){
		// 	alert('div')
		// })


		// $('a').click(function(e){
		// 	e.preventDefault();   //阻止默认行为   a的默认行为就是自动跳转
		// 	alert('baidu.com')
		// })


		// $('a').click(function(e){
		// 	e.stopProgpagation();
		// 	e.preventDefault();   //阻止默认行为   a的默认行为就是自动跳转
		// 	alert('baidu.com')
		// 	})



		$('a').click(function(e){
				 //阻止默认行为   a的默认行为就是自动跳转
				alert('baidu.com')
				return false
		})








})