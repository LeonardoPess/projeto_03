$(function(){

	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;


		$('html,body').animate({'scrollTop':offSetTop});
		$('nav a').css('color','black');
		$(this).css('color','red');
		return false;
	});


});