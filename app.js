$(document).ready(function() {

	//Fade out  homepage lander and text as user scrolls down
	$(window).scroll(function(){
	    $(".lander_container").css("opacity", 1 - $(window).scrollTop() / 500);
	  });

	////////interactive iphone/////////

	//turn on and off iphone
	$(".home_button").click(function(){
		$(".off_iphone_screen").css("display","none");
		$(".on_iphone_screen").fadeIn(1000);
		$(".on_iphone_screen").css("display","inline-block");
	})
});