$(document).ready(function() {

	//Fade out  homepage lander and text as user scrolls down
	$(window).scroll(function(){
	    $(".lander_container").css("opacity", 1 - $(window).scrollTop() / 500);
	  });

	//scroll to contact in footer on click of contact button
	$("#contact_link").click(function(){
    	$('html, body').animate({
        	scrollTop: $("#footer_contact_box").offset().top
    	}, 800);
	});
	//scroll to portfolio in footer on click of portfolio button
	$("#portfolio_link").click(function(){
    	$('html, body').animate({
        	scrollTop: $("#portfolio_container_new").offset().top
    	}, 800);
	});

	//page transitions 
	$('body').css('display', 'none');
	$('body').fadeIn(1000);
	$('.nav_bar > a').click(function() {
		event.preventDefault();
		newLocation = this.href;
		$('body').fadeOut(1000, newpage);
	});
	function newpage() {
		window.location = newLocation;
	}

	//index portfolio page slideup
	$('.portfolio_preview_updates').click(function() {
		$(this).addClass('slide_div_up')
	})

	////////interactive iphone/////////

	//turn on and off iphone
	$(".home_button").click(function(){
		$(".off_iphone_screen").css("display","none");
		$(".on_iphone_screen").fadeIn(1000);
		$(".on_iphone_screen").css("display","inline-block");
	});
	//switch screens to personal site iframe
	$("#personal_site_app").click(function(){
		$(".on_iphone_screens").css("display","none");
		$("#personal_site_frame").fadeIn(1000);
		$("#personal_site_frame").css("display","inline-block");
	});

});