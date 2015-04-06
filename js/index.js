$(document).ready(function(){
	//navbar scroll to section
	$('.scroll-link').on('click', function(event){
		event.preventDefault();
		var id = $(this).attr("data-id");
		scrollToID('#'+id, 750);
	});

	$('.nav-toggle').on('click', function(event){
		event.preventDefault();
		$('#main-nav').toggleClass("open");
	});

	//company logo highlight colour
	$('.logo').hover(function(){
		$(this).css({'background-color':$(this).data('color')});
	},
	function(){
		$(this).css({'background-color':''});
	});

	//hide job description
	$('.more_body').hide();
	//show job description
	$('.more_head').click(function(){
		$(this).next('.more_body').slideToggle(600);
	});

	//slideshow
	$(function(){
      $("#slides").slidesjs({
        width: 500,
        height: 500
      });
    });

});

function scrollToID(id, speed){
	var offSet = 50;
	var targetOffset = $(id).offset().top - offSet;
	var mainNav = $('#main-nav');
	$('html,body').animate({scrollTop:targetOffset}, speed);
	if(mainNav.hasClass("open")){
		mainNav.css("height", "1px").removeClass("in").addClass("collapse");
		mainNav.removeClass("open");
	}
}

if(typeof console==="undefined"){
	console = {
		log: function(){}
	};
}