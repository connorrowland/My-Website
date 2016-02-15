$(document).ready(function() {

	//Fade out  homepage lander and text as user scrolls down
	$(window).scroll(function(){
	    $(".lander_container").css("opacity", 1 - $(window).scrollTop() / 500);
	  });
});