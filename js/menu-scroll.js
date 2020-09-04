$(function(){

	$('.desktop-menu a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;


		$('html,body').animate({'scrollTop':offSetTop});
		$('.desktop-menu a').css('color','white');
		$(this).css('color','black');
		return false;
	});

	$('.mobile-menu a').click(function(){
		var href = $(this).attr('href');
		var offSetTop = $(href).offset().top;


		$('html,body').animate({'scrollTop':offSetTop});
		$('.mobile-menu a').css('color','#575757');
		$(this).css('color','black');
		return false;
	});

});