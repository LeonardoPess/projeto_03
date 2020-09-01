$(function(){

	$('nav a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;


		$('html,body').animate({'scrollTop':offSetTop});
		$('nav a').css('color','white');
		$(this).css('color','black');
		return false;
	});


});