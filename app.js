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