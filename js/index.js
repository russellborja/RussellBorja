$(document).ready(function(){
	//navbar scroll to section
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var id = $(this).attr("data-id");
		scrollToID('#'+id, 750);
	});

	//company logo highlight colour
	$('.company-logo').hover(function(){
		$(this).css({'backgroundImage':$(this).data('hover')});
	},
	function(){
		$(this).css({'backgroundImage':$(this).data('original')});
	});

	//hide job description
	$('.more_body').hide();
	//show job description
	$('.more_head').click(function(){
		if($(this).hasClass('active')){
			
			$(this).removeClass('active');
		}
		else{
			$('.active').next('.more_body').slideToggle(600);
			$('.active').removeClass('active');
			$(this).addClass('active');
		}
		$(this).next('.more_body').slideToggle(600);
	});



	//show app details
	$('.icon_head').hover(function(){
		//$(this).css({'backgroundImage':'url(images/watchthismovie_nexus.jpg)'});
		$(this).css({'backgroundImage':$(this).data('preview')});
	},
	function(){
		if($(this).attr('id') == 'watchthismovie'){
			$(this).css({'backgroundImage':'url(images/watchthismovie_icon_nexus.jpg)'});
		}
		else if($(this).attr('id') == 'saladbowl'){
			$(this).css({'backgroundImage':'url(images/saladbowl_icon_nexus.jpg)'});
		}
		// $(this).css({'backgroundImage':$(this).data('icon')});
	});
	$('.icon_head').click(function(){
		$(this).next('.more_body').slideToggle(600);
	});

	$('.thumbnails').hover(function(){
		$(this).attr('src', $(this).data('title'));
	},
	function(){
		$(this).attr('src', $(this).data('original'));
	});
});

function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	$('html,body').animate({scrollTop:targetOffset}, speed);
}
